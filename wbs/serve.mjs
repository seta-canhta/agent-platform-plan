#!/usr/bin/env node
// Live WBS map: serves the visualization and pushes updates over Server-Sent
// Events whenever wbs.json changes on disk. The browser re-fetches and D3
// re-renders, preserving your zoom and expanded nodes.
//
// Usage:  node serve.mjs [--port 4173] [--open] [path/to/wbs.json]

import { createServer } from 'node:http';
import { readFileSync, writeFileSync, existsSync, statSync, watch } from 'node:fs';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { dirname, join, extname, normalize } from 'node:path';
import { spawn } from 'node:child_process';
import { validate, stats, indexById, STATUSES, POINT_SCALE } from './lib/schema.mjs';
import { CLIENT_SCRIPTS } from './lib/page.mjs';

const here = dirname(fileURLToPath(import.meta.url));
const args = process.argv.slice(2);
const open = args.includes('--open');
const portIdx = args.indexOf('--port');
const port = portIdx >= 0 ? Number(args[portIdx + 1]) : 4173;
const dataPath = args.find((a) => a.endsWith('.json')) ?? join(here, 'wbs.json');
const scriptPaths = CLIENT_SCRIPTS.map((s) => join(here, 'lib', s.slice(1)));
const pagePath = join(here, 'lib', 'page.mjs');

// ── item comments (sibling of the data file; written by the in-browser UI) ──
const commentsPath = join(dirname(dataPath), 'comments.json');
const CM_STATES = ['open', 'resolved', 'unresolved', 'skip'];
if (!existsSync(commentsPath)) writeFileSync(commentsPath, JSON.stringify({ version: 1, comments: {} }, null, 2));

function loadComments() {
  try {
    const c = JSON.parse(readFileSync(commentsPath, 'utf8'));
    return c && c.comments ? c : { version: 1, comments: {} };
  } catch { return { version: 1, comments: {} }; }
}
const saveComments = (c) => writeFileSync(commentsPath, JSON.stringify(c, null, 2));

// ── team members for the assignee dropdown ──
const assigneesPath = join(dirname(dataPath), 'assignees.json');
if (!existsSync(assigneesPath)) writeFileSync(assigneesPath, JSON.stringify({ members: ['Canh Ta', 'Hai Le', 'Viet Anh Nguyen', 'Hieu Nguyen'] }, null, 2));
function loadAssignees() {
  try { const a = JSON.parse(readFileSync(assigneesPath, 'utf8')); return Array.isArray(a.members) ? a.members : []; }
  catch { return []; }
}
const cmId = () => 'c-' + Math.random().toString(36).slice(2, 8) + Date.now().toString(36).slice(-3);

// Apply one add | setState | delete op to comments.json. Returns { ok, comment? } or { error }.
function applyCommentOp(b) {
  if (!b || typeof b.item_id !== 'string' || !b.item_id) return { error: 'item_id required' };
  const store = loadComments();
  const list = store.comments[b.item_id] || (store.comments[b.item_id] = []);
  const now = new Date().toISOString();
  if (b.op === 'add') {
    const text = (b.text || '').toString().trim();
    if (!text) return { error: 'text required' };
    const c = { id: cmId(), text: text.slice(0, 4000), author: (b.author || 'you').toString().slice(0, 40),
      state: 'open', created: now, updated: now, agent_note: null };
    list.push(c); saveComments(store); return { ok: true, comment: c };
  }
  if (b.op === 'setState') {
    if (!CM_STATES.includes(b.state)) return { error: 'bad state' };
    const c = list.find((x) => x.id === b.comment_id); if (!c) return { error: 'comment not found' };
    c.state = b.state; c.updated = now; saveComments(store); return { ok: true, comment: c };
  }
  if (b.op === 'delete') {
    const i = list.findIndex((x) => x.id === b.comment_id); if (i < 0) return { error: 'comment not found' };
    list.splice(i, 1); if (!list.length) delete store.comments[b.item_id]; saveComments(store); return { ok: true };
  }
  return { error: 'unknown op' };
}

// Apply an in-modal field edit to one item in wbs.json. Re-validates the whole
// WBS against the schema and refuses to write if the edit would make it invalid,
// so the live file can never go non-buildable. Returns { ok } or { error }.
function applyItemPatch(b) {
  if (!b || typeof b.id !== 'string' || !b.id) return { error: 'id required' };
  const patch = b.patch || {};
  let data;
  try { data = JSON.parse(readFileSync(dataPath, 'utf8')); } catch (e) { return { error: 'cannot read wbs.json: ' + e.message }; }
  const rec = indexById(data).get(b.id);
  if (!rec) return { error: 'item not found: ' + b.id };
  const it = rec.item;
  if ('status' in patch) { if (!STATUSES.includes(patch.status)) return { error: 'bad status' }; it.status = patch.status; }
  if ('story_points' in patch) { const n = Number(patch.story_points); if (!POINT_SCALE.includes(n)) return { error: `story_points must be one of ${POINT_SCALE.join('/')}` }; it.story_points = n; }
  if ('title' in patch) { const t = String(patch.title).trim(); if (!t) return { error: 'title required' }; it.title = t; }
  if ('story' in patch) { const s = String(patch.story).trim(); if (!s) return { error: 'story required' }; it.story = s; }
  if ('acceptance_criteria' in patch) {
    if (!Array.isArray(patch.acceptance_criteria)) return { error: 'acceptance_criteria must be a list' };
    const ac = patch.acceptance_criteria.map((x) => String(x).trim()).filter(Boolean);
    if (!ac.length) return { error: 'at least one acceptance criterion required' };
    it.acceptance_criteria = ac;
  }
  if ('assignee' in patch) {
    const a = String(patch.assignee || '').trim();
    if (a && !loadAssignees().includes(a)) return { error: 'unknown assignee' };
    if (a) it.assignee = a; else delete it.assignee;   // '' clears the assignment
  }
  const { errors } = validate(data);
  if (errors.length) return { error: errors[0] };
  writeFileSync(dataPath, JSON.stringify(data, null, 2) + '\n');
  return { ok: true };
}

// Re-import page.mjs only when it changes (mtime as cache-bust key) so theme
// edits hot-reload without restarting the server.
async function getAssemble() {
  const v = statSync(pagePath).mtimeMs;
  return (await import(pathToFileURL(pagePath).href + '?v=' + v)).assemble;
}

function loadData() {
  let raw;
  try { raw = readFileSync(dataPath, 'utf8'); }
  catch (e) { return { parseError: `cannot read ${dataPath}: ${e.message}` }; }
  let data;
  try { data = JSON.parse(raw); }
  catch (e) { return { parseError: `JSON parse error: ${e.message}` }; }
  const { errors, warnings } = validate(data);
  let screens = null;
  try { screens = JSON.parse(readFileSync(join(here, 'screens', 'index.json'), 'utf8')); } catch { /* no shots yet */ }
  return { data, stats: stats(data), screens, comments: loadComments().comments, assignees: loadAssignees(), errors, warnings };
}

// One boot per page. `renderExpr` renders the page's view from `payload`;
// `initExpr` runs once before the first load (e.g. wiring the Excel button).
const makeBoot = (renderExpr, initExpr = '') => String.raw`
const live = document.getElementById('live'), errEl = document.getElementById('err');
async function load(){
  let payload;
  try { payload = await (await fetch('/data?t='+Date.now())).json(); }
  catch (e) { errEl.style.display='block'; errEl.textContent='⚠ '+e; return; }
  if (payload.parseError){ errEl.style.display='block'; errEl.textContent='⚠ '+payload.parseError+'  (keeping last good view)'; return; }
  if (payload.errors && payload.errors.length){ errEl.style.display='block'; errEl.textContent='✗ '+payload.errors.join('\n✗ '); }
  else errEl.style.display='none';
  ${renderExpr};
}
${initExpr}
load();
const es = new EventSource('/events');
es.onopen  = () => { live.className='on';  live.textContent='live'; };
es.onerror = () => { live.className='off'; live.textContent='offline'; };
es.addEventListener('data',   () => { load(); WBS.flash('updated'); });
es.addEventListener('reload', () => location.reload());
`;

const SERVE_NAV = { mapHref: '/', tableHref: '/table' };
const MAP_BOOT = makeBoot('WBS.setScreens(payload.screens); WBS.setComments(payload.comments); WBS.setAssignees(payload.assignees); WBS.setLive(true); WBS.renderWBS(payload.data, payload.stats)');
const TABLE_BOOT = makeBoot(
  'WBS.renderHeader(payload.data, payload.stats); WBS.setData(payload.data); WBS.renderTable(payload.data)',
  'WBS.bindExport();');

const clients = new Set();
function broadcast(event) {
  for (const res of clients) res.write(`event: ${event}\ndata: 1\n\n`);
}

const server = createServer(async (req, res) => {
  const url = req.url.split('?')[0];
  if (url === '/' || url === '/index.html') {
    const assemble = await getAssemble();
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(assemble(MAP_BOOT, { renderInline: null, view: 'map', nav: SERVE_NAV }));
  } else if (url === '/table' || url === '/table.html') {
    const assemble = await getAssemble();
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(assemble(TABLE_BOOT, { renderInline: null, view: 'table', nav: SERVE_NAV }));
  } else if (CLIENT_SCRIPTS.includes(url)) {
    res.writeHead(200, { 'Content-Type': 'application/javascript; charset=utf-8', 'Cache-Control': 'no-store' });
    res.end(readFileSync(join(here, 'lib', url.slice(1)), 'utf8'));
  } else if (url.startsWith('/screens/')) {
    // Serve captured screenshots (+ index.json). Confined to the screens/ dir.
    const rel = normalize(decodeURIComponent(url.slice('/screens/'.length))).replace(/^(\.\.(\/|\\|$))+/, '');
    const file = join(here, 'screens', rel);
    try {
      const TYPES = { '.png': 'image/png', '.json': 'application/json', '.jpg': 'image/jpeg', '.webp': 'image/webp' };
      res.writeHead(200, { 'Content-Type': TYPES[extname(file).toLowerCase()] || 'application/octet-stream', 'Cache-Control': 'no-cache' });
      res.end(readFileSync(file));
    } catch { res.writeHead(404); res.end('not found'); }
  } else if (url === '/comments' && req.method === 'POST') {
    // The one write endpoint: append/relabel/remove a comment, then let the
    // file-watch broadcast the change back to every connected client over SSE.
    let raw = '';
    req.on('data', (d) => { raw += d; if (raw.length > 1e6) req.destroy(); });
    req.on('end', () => {
      let body;
      try { body = JSON.parse(raw || '{}'); }
      catch { res.writeHead(400, { 'Content-Type': 'application/json' }); return res.end('{"error":"bad json"}'); }
      const result = applyCommentOp(body);
      res.writeHead(result.error ? 400 : 200, { 'Content-Type': 'application/json; charset=utf-8' });
      res.end(JSON.stringify(result));
    });
  } else if (url === '/item' && req.method === 'POST') {
    // Edit one item's fields in wbs.json (validated before write); the data
    // watch then broadcasts the change back to every client over SSE.
    let raw = '';
    req.on('data', (d) => { raw += d; if (raw.length > 1e6) req.destroy(); });
    req.on('end', () => {
      let body;
      try { body = JSON.parse(raw || '{}'); }
      catch { res.writeHead(400, { 'Content-Type': 'application/json' }); return res.end('{"error":"bad json"}'); }
      const result = applyItemPatch(body);
      res.writeHead(result.error ? 400 : 200, { 'Content-Type': 'application/json; charset=utf-8' });
      res.end(JSON.stringify(result));
    });
  } else if (url === '/data') {
    res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' });
    res.end(JSON.stringify(loadData()));
  } else if (url === '/events') {
    res.writeHead(200, { 'Content-Type': 'text/event-stream', 'Cache-Control': 'no-cache', Connection: 'keep-alive' });
    res.write('retry: 1000\n\n');
    clients.add(res);
    const hb = setInterval(() => res.write(': hb\n\n'), 25000);
    req.on('close', () => { clearInterval(hb); clients.delete(res); });
  } else {
    res.writeHead(404); res.end('not found');
  }
});

// Debounced file watching → broadcast.
let timer = null;
function onChange(event) {
  clearTimeout(timer);
  timer = setTimeout(() => broadcast(event), 120);
}
watch(dataPath, () => onChange('data'));
watch(commentsPath, () => onChange('data'));
try { watch(assigneesPath, () => onChange('data')); } catch { /* optional */ }
for (const p of scriptPaths) watch(p, () => onChange('reload'));
watch(pagePath, () => onChange('reload'));

server.listen(port, () => {
  const urlStr = `http://localhost:${port}`;
  console.log(`\n  WBS live map → ${urlStr}`);
  console.log(`  watching ${dataPath}`);
  console.log(`  edit wbs.json (or let the skill write it) and the map updates live.`);
  console.log(`  Ctrl-C to stop.\n`);
  if (open) {
    const cmd = process.platform === 'darwin' ? 'open' : process.platform === 'win32' ? 'start' : 'xdg-open';
    spawn(cmd, [urlStr], { stdio: 'ignore', detached: true, shell: process.platform === 'win32' }).unref();
  }
});
