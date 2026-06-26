/* WBS mockup capture — zero-dependency, drives system headless Chrome over CDP
   (see lib/cdp.mjs). The mockup engine is module-scoped, so we navigate the way
   a user does: clicking sidebar buttons and setting the persona <select>.

   Modes:
     node capture.mjs --walk     Discovery: enumerate every screen from the live
                                 #sideNav, emit screens/inventory.json (+ thumbs)
                                 so the mockup_ref rewrite is authored cheaply.
     node capture.mjs            (Phase-1, added next) capture per wbs.json refs.

   The mockup needs real HTTP (it uses import() + CSS fetches), so we serve
   mockup/project/ from a tiny built-in static server first. */
import { createServer } from 'node:http';
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { join, extname, dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { launchChrome } from './lib/cdp.mjs';

const HERE = dirname(fileURLToPath(import.meta.url));
const MOCKUP_DIR = resolve(HERE, '../mockup/project');
const ENTRY = 'Seta People.dc.html';
const SCREENS_DIR = join(HERE, 'screens');
const WALK_DIR = join(SCREENS_DIR, '_walk');
const VIEW_W = 1920, VIEW_H = 1080;   // desktop viewport, uniform across all screens

const MIME = {
  '.html': 'text/html', '.js': 'text/javascript', '.mjs': 'text/javascript',
  '.css': 'text/css', '.json': 'application/json', '.png': 'image/png',
  '.jpg': 'image/jpeg', '.svg': 'image/svg+xml', '.woff2': 'font/woff2',
  '.woff': 'font/woff', '.ttf': 'font/ttf', '.map': 'application/json',
};

// Tiny static server rooted at MOCKUP_DIR. Returns { origin, close }.
function serveMockup() {
  return new Promise((resolveSrv) => {
    const srv = createServer(async (req, res) => {
      try {
        const url = new URL(req.url, 'http://localhost');
        const rel = decodeURIComponent(url.pathname).replace(/^\/+/, '') || ENTRY;
        const path = join(MOCKUP_DIR, rel);
        if (!path.startsWith(MOCKUP_DIR)) { res.writeHead(403).end(); return; }
        const body = await readFile(path);
        res.writeHead(200, { 'content-type': MIME[extname(path).toLowerCase()] || 'application/octet-stream' });
        res.end(body);
      } catch {
        res.writeHead(404).end('not found');
      }
    });
    srv.listen(0, '127.0.0.1', () => {
      const { port } = srv.address();
      resolveSrv({ origin: `http://127.0.0.1:${port}`, close: () => srv.close() });
    });
  });
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// Poll an in-page predicate until true (or timeout).
async function waitFor(page, expr, { timeoutMs = 12000, every = 100 } = {}) {
  const deadline = Date.now() + timeoutMs;
  while (Date.now() < deadline) {
    if (await page.eval(`!!(${expr})`)) return;
    await sleep(every);
  }
  throw new Error(`timed out waiting for: ${expr}`);
}

async function bootMockup(chrome, origin) {
  const page = await chrome.newPage();
  await page.setViewport(VIEW_W, VIEW_H);
  await page.goto(`${origin}/${encodeURIComponent(ENTRY)}`, { waitMs: 300 });
  // engine loaded + first screen rendered = sidebar buttons exist and #content is filled
  await waitFor(page, `document.querySelector('#sideNav [data-tab]') && document.querySelector('#content')?.children.length`);
  // Force content into its final painted state: entrance animations (viewIn) start
  // at opacity:0 with fill-mode `both`, and delayed-swapped content can stay stuck
  // there in headless — capturing as blank. A persistent <head> style neutralizes
  // animations/transitions for #content (survives re-renders; the screen HTML is
  // re-injected on each nav but this stylesheet keeps applying).
  await page.eval(`(() => {
    const s = document.createElement('style');
    s.textContent = '#content, #content *{animation:none !important;transition:none !important;opacity:1 !important;transform:none !important;filter:none !important}';
    document.head.appendChild(s);
  })()`);
  return page;
}

// Some screens swap in content on a delay (e.g. the Knowledge Base "Analyzing"
// timer ~900ms) while a placeholder already reserves the final height — so the
// content signature looks "stable" before the real content paints. We therefore
// wait a minimum floor (past that timer) AND until the signature stops changing,
// so we never screenshot a half-painted screen (the "empty space" the user saw).
async function settle(page, { idle = 3, every = 160, minMs = 1200, maxMs = 6000 } = {}) {
  const start = Date.now(), deadline = start + maxMs;
  let last = '', same = 0;
  while (Date.now() < deadline) {
    const sig = await page.eval(`(() => { const c = document.querySelector('#content');
      return c ? c.scrollHeight + '|' + (c.innerText || '').length : ''; })()`);
    if (sig === last) same++; else { same = 0; last = sig; }
    if (same >= idle && Date.now() - start >= minMs) return;
    await sleep(every);
  }
}

async function setPersona(page, persona) {
  await page.eval(`(() => {
    const s = document.querySelector('#persona');
    if (!s || s.value === ${JSON.stringify(persona)}) return;
    s.value = ${JSON.stringify(persona)};
    s.dispatchEvent(new Event('change', { bubbles: true }));
  })()`);
  await settle(page);
}

// Click the sidebar button for module/tab; returns false if it isn't present.
async function navTo(page, mod, tab) {
  const ok = await page.eval(`(() => {
    const b = document.querySelector('#sideNav [data-mod="${mod}"][data-tab="${tab}"]');
    if (!b) return false; b.click(); return true;
  })()`);
  if (ok) await settle(page);
  return ok;
}

// A compact, token-cheap text fingerprint of the current #content.
async function digest(page) {
  return page.eval(`(() => {
    const c = document.querySelector('#content'); if (!c) return {};
    const head = (c.querySelector('h1,h2,.view-title,.page-title')?.textContent || '').trim();
    const text = (c.innerText || '').replace(/\\s+/g, ' ').trim();
    return { heading: head, digest: text.slice(0, 280), len: text.length };
  })()`);
}

// Screenshot the content pane only — crop out the sidebar + topbar chrome, keep
// the #content region from the topbar down to the bottom of the viewport. Stays
// within the viewport (no scrolling, no tall-page blank regions); uniform size
// across screens since the layout is fixed.
async function shotContent(page, file) {
  const clip = await page.eval(`(() => {
    const r = document.querySelector('#content').getBoundingClientRect();
    const x = Math.max(0, Math.round(r.x)), y = Math.max(0, Math.round(r.y));
    return { x, y, width: Math.round(r.width), height: ${VIEW_H} - y };
  })()`);
  const png = await page.screenshot({ clip });
  await writeFile(file, png);
  return { w: clip.width, h: clip.height, bytes: png.length };
}

async function walk() {
  await mkdir(WALK_DIR, { recursive: true });
  const server = await serveMockup();
  const chrome = await launchChrome();
  try {
    const page = await bootMockup(chrome, server.origin);
    await setPersona(page, 'admin');

    const navs = await page.eval(`[...document.querySelectorAll('#sideNav [data-tab]')]
      .map(b => ({ mod: b.dataset.mod, tab: b.dataset.tab,
                   label: (b.querySelector('.ni-lbl')?.textContent || b.textContent || '').trim() }))`);

    const inventory = [];
    for (const n of navs) {
      const screen = `${n.mod}/${n.tab}`;
      await navTo(page, n.mod, n.tab);
      const d = await digest(page);
      const thumb = `_walk/${n.mod}-${n.tab}.png`;
      const shot = await shotContent(page, join(SCREENS_DIR, thumb));
      inventory.push({ screen, label: n.label, heading: d.heading, digest: d.digest, thumb, ...shot });
      console.log(`  ${screen.padEnd(24)} ${shot.w}×${shot.h}  ${n.label} — ${d.heading || '(no heading)'}`);
    }

    await writeFile(join(SCREENS_DIR, 'inventory.json'),
      JSON.stringify({ capturedAt: new Date().toISOString(), origin: ENTRY, screens: inventory }, null, 2));
    console.log(`\n✓ walked ${inventory.length} screens → wbs/screens/inventory.json`);
  } finally {
    await chrome.close();
    server.close();
  }
}

// ── Per-ref capture (default mode) ─────────────────────────────────────────────
// Read every navigable mockup_ref in wbs.json, dedup to unique screen-states,
// capture one PNG each, and write screens/index.json mapping item/screen → png.
const specKey = (s) => `${s.screen}|${s.persona || 'admin'}|${(s.actions || []).join('§')}`;
function specFile(s) {
  let n = s.screen.replace(/\//g, '-');
  if (s.persona && s.persona !== 'admin') n += '-' + s.persona;
  if (s.actions && s.actions.length) {                       // stable short hash of the action list
    let h = 5381; for (const ch of s.actions.join(',')) h = ((h << 5) + h + ch.charCodeAt(0)) >>> 0;
    n += '-a' + h.toString(36);
  }
  return n + '.png';
}

// Drive the app to a spec: set persona, click the sidebar button, click actions.
async function gotoSpec(page, spec) {
  await setPersona(page, spec.persona || 'admin');
  const [mod, tab] = spec.screen.split('/');
  const navigated = await navTo(page, mod, tab);
  for (const sel of spec.actions || []) {
    const clicked = await page.eval(`(() => { const e = document.querySelector(${JSON.stringify(sel)});
      if (!e) return false; e.click(); return true; })()`);
    if (!clicked) console.warn(`    ! action selector not found: ${sel}`);
    await settle(page);
  }
  return navigated;
}

async function captureRefs() {
  await mkdir(SCREENS_DIR, { recursive: true });
  const data = JSON.parse(await readFile(join(HERE, 'wbs.json'), 'utf8'));

  // Resolve every item/screen to its effective ref (items inherit their screen),
  // keep only the navigable object form, and index them by spec.
  const specs = new Map();                 // key → { ...spec, file }
  const byItem = {}, byScreen = {};
  const asObj = (r) => (r && typeof r === 'object' && r.screen) ? r : null;
  for (const m of data.modules || [])
    for (const sm of m.sub_modules || [])
      for (const sc of sm.screens || []) {
        const scRef = asObj(sc.mockup_ref);
        const register = (ref, assign) => {
          const o = asObj(ref); if (!o) return;
          const key = specKey(o);
          if (!specs.has(key)) specs.set(key, { ...o, file: specFile(o) });
          assign(specs.get(key).file);
        };
        register(scRef, (f) => { byScreen[sc.id] = f; });
        for (const it of sc.items || [])
          register(it.mockup_ref || scRef, (f) => { byItem[it.id] = f; });
      }

  const unique = [...specs.values()];
  console.log(`${Object.keys(byItem).length} items + ${Object.keys(byScreen).length} screens → ${unique.length} unique screen-states`);

  const server = await serveMockup();
  const chrome = await launchChrome();
  const failed = [];
  try {
    const page = await bootMockup(chrome, server.origin);
    for (const spec of unique) {
      const ok = await gotoSpec(page, spec);
      if (!ok) { failed.push(spec.screen); console.warn(`  ✗ ${spec.file.padEnd(34)} screen not navigable: ${spec.screen}`); continue; }
      const shot = await shotContent(page, join(SCREENS_DIR, spec.file));
      console.log(`  ✓ ${spec.file.padEnd(34)} ${shot.w}×${shot.h}${spec.persona ? '  ['+spec.persona+']' : ''}`);
    }
    await writeFile(join(SCREENS_DIR, 'index.json'),
      JSON.stringify({ capturedAt: new Date().toISOString(), viewport: { w: VIEW_W, h: VIEW_H }, byItem, byScreen }, null, 2));
  } finally {
    await chrome.close();
    server.close();
  }
  if (failed.length) { console.error(`\n✗ ${failed.length} unresolved screen(s): ${[...new Set(failed)].join(', ')}`); process.exit(1); }
  console.log(`\n✓ captured ${unique.length} screens → wbs/screens/ (+ index.json)`);
}

const mode = process.argv[2];
if (mode === '--walk') {
  walk().catch((e) => { console.error('capture --walk failed:', e.message); process.exit(1); });
} else {
  captureRefs().catch((e) => { console.error('capture failed:', e.message); process.exit(1); });
}
