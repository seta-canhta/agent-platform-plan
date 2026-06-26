/* Minimal Chrome DevTools Protocol client — zero dependencies (Node ≥21 built-in
   WebSocket + child_process). Just enough to: launch system headless Chrome,
   open one page, set a viewport, navigate, evaluate JS, and screenshot.

   Usage:
     const chrome = await launchChrome();          // spawns headless Chrome
     const page = await chrome.newPage();           // attaches to a fresh tab
     await page.setViewport(1280, 800);
     await page.goto('http://localhost:1234/x.html');
     const v = await page.eval('document.title');   // returns by value
     const png = await page.screenshot({ clip });    // Buffer (PNG)
     await chrome.close();

   Not a general CDP library — it implements only the commands capture.mjs needs. */
import { spawn } from 'node:child_process';
import { mkdtemp, readFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

// Common install locations; override with $CHROME_BIN.
const CHROME_CANDIDATES = [
  process.env.CHROME_BIN,
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/Applications/Chromium.app/Contents/MacOS/Chromium',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium',
  '/usr/bin/chromium-browser',
].filter(Boolean);

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function firstExisting(paths) {
  const { access } = await import('node:fs/promises');
  for (const p of paths) {
    try { await access(p); return p; } catch { /* keep looking */ }
  }
  return null;
}

// Read the DevToolsActivePort file Chrome writes once the debug server is up.
async function waitForDebugPort(userDataDir, timeoutMs = 15000) {
  const portFile = join(userDataDir, 'DevToolsActivePort');
  const deadline = Date.now() + timeoutMs;
  while (Date.now() < deadline) {
    try {
      const txt = await readFile(portFile, 'utf8');
      const [port] = txt.split('\n');
      if (port) return Number(port);
    } catch { /* not written yet */ }
    await sleep(80);
  }
  throw new Error('Chrome did not expose a debugging port in time');
}

export async function launchChrome({ headless = true } = {}) {
  const bin = await firstExisting(CHROME_CANDIDATES);
  if (!bin) throw new Error('No Chrome/Chromium found. Set $CHROME_BIN to its path.');

  const userDataDir = await mkdtemp(join(tmpdir(), 'wbs-chrome-'));
  const args = [
    headless ? '--headless=new' : '',
    '--remote-debugging-port=0',
    `--user-data-dir=${userDataDir}`,
    '--no-first-run', '--no-default-browser-check', '--disable-gpu',
    '--hide-scrollbars', '--force-color-profile=srgb', '--disable-extensions',
    '--mute-audio', 'about:blank',
  ].filter(Boolean);

  const proc = spawn(bin, args, { stdio: 'ignore' });
  proc.on('error', (e) => { throw e; });

  const port = await waitForDebugPort(userDataDir);
  const res = await fetch(`http://127.0.0.1:${port}/json/version`);
  const browserWsUrl = (await res.json()).webSocketDebuggerUrl;

  const conn = await connect(browserWsUrl);

  async function newPage() {
    const { targetId } = await conn.send('Target.createTarget', { url: 'about:blank' });
    const { sessionId } = await conn.send('Target.attachToTarget', { targetId, flatten: true });
    return makePage(conn, sessionId);
  }

  async function close() {
    try { await conn.send('Browser.close'); } catch { /* ignore */ }
    conn.ws.close();
    try { proc.kill(); } catch { /* ignore */ }
    await rm(userDataDir, { recursive: true, force: true }).catch(() => {});
  }

  return { newPage, close, _conn: conn };
}

// One WebSocket multiplexed by message id; events routed to listeners.
function connect(url) {
  return new Promise((resolve, reject) => {
    const ws = new WebSocket(url);
    let id = 0;
    const pending = new Map();          // id → {resolve, reject}
    const listeners = new Set();        // fn(method, params, sessionId)

    ws.addEventListener('open', () => resolve(api));
    ws.addEventListener('error', (e) => reject(e.error || new Error('WebSocket error')));
    ws.addEventListener('message', (ev) => {
      const msg = JSON.parse(ev.data);
      if (msg.id != null && pending.has(msg.id)) {
        const { resolve: rs, reject: rj } = pending.get(msg.id);
        pending.delete(msg.id);
        msg.error ? rj(new Error(msg.error.message)) : rs(msg.result);
      } else if (msg.method) {
        for (const fn of listeners) fn(msg.method, msg.params, msg.sessionId);
      }
    });

    const api = {
      ws,
      send(method, params = {}, sessionId) {
        const mid = ++id;
        const payload = { id: mid, method, params };
        if (sessionId) payload.sessionId = sessionId;
        return new Promise((rs, rj) => {
          pending.set(mid, { resolve: rs, reject: rj });
          ws.send(JSON.stringify(payload));
        });
      },
      on(fn) { listeners.add(fn); return () => listeners.delete(fn); },
    };
  });
}

function makePage(conn, sessionId) {
  const send = (method, params) => conn.send(method, params, sessionId);
  const ready = Promise.all([send('Page.enable'), send('Runtime.enable')]);

  return {
    sessionId,
    async setViewport(width, height, scale = 1) {
      await ready;
      await send('Emulation.setDeviceMetricsOverride',
        { width, height, deviceScaleFactor: scale, mobile: false });
    },
    async goto(url, { waitMs = 0 } = {}) {
      await ready;
      const loaded = new Promise((resolve) => {
        const off = conn.on((method, _p, sid) => {
          if (sid === sessionId && method === 'Page.loadEventFired') { off(); resolve(); }
        });
      });
      await send('Page.navigate', { url });
      await loaded;
      if (waitMs) await sleep(waitMs);
    },
    // Evaluate an expression; awaits promises and returns the value by value.
    async eval(expression) {
      await ready;
      const r = await send('Runtime.evaluate',
        { expression, awaitPromise: true, returnByValue: true, userGesture: true });
      if (r.exceptionDetails) {
        throw new Error(r.exceptionDetails.exception?.description
          || r.exceptionDetails.text || 'eval failed');
      }
      return r.result?.value;
    },
    // No clip → capture exactly the emulated viewport (no beyond-viewport, no scroll).
    async screenshot({ clip } = {}) {
      await ready;
      const params = { format: 'png', captureBeyondViewport: !!clip };
      if (clip) params.clip = { ...clip, scale: clip.scale || 1 };
      const { data } = await send('Page.captureScreenshot', params);
      return Buffer.from(data, 'base64');
    },
  };
}
