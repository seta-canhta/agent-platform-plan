#!/usr/bin/env node
// Live WBS map: serves the visualization and pushes updates over Server-Sent
// Events whenever wbs.json changes on disk. The browser re-fetches and D3
// re-renders, preserving your zoom and expanded nodes.
//
// Usage:  node serve.mjs [--port 4173] [--open] [path/to/wbs.json]

import { createServer } from 'node:http';
import { readFileSync, statSync, watch } from 'node:fs';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { dirname, join } from 'node:path';
import { spawn } from 'node:child_process';
import { validate, stats } from './lib/schema.mjs';

const here = dirname(fileURLToPath(import.meta.url));
const args = process.argv.slice(2);
const open = args.includes('--open');
const portIdx = args.indexOf('--port');
const port = portIdx >= 0 ? Number(args[portIdx + 1]) : 4173;
const dataPath = args.find((a) => a.endsWith('.json')) ?? join(here, 'wbs.json');
const renderPath = join(here, 'lib', 'render.js');
const pagePath = join(here, 'lib', 'page.mjs');

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
  return { data, stats: stats(data), errors, warnings };
}

const BOOT = String.raw`
const live = document.getElementById('live'), errEl = document.getElementById('err');
async function load(){
  let payload;
  try { payload = await (await fetch('/data?t='+Date.now())).json(); }
  catch (e) { errEl.style.display='block'; errEl.textContent='⚠ '+e; return; }
  if (payload.parseError){ errEl.style.display='block'; errEl.textContent='⚠ '+payload.parseError+'  (keeping last good map)'; return; }
  if (payload.errors && payload.errors.length){ errEl.style.display='block'; errEl.textContent='✗ '+payload.errors.join('\n✗ '); }
  else errEl.style.display='none';
  WBS.renderWBS(payload.data, payload.stats);
}
load();
const es = new EventSource('/events');
es.onopen  = () => { live.className='on';  live.textContent='live'; };
es.onerror = () => { live.className='off'; live.textContent='offline'; };
es.addEventListener('data',   () => { load(); WBS.flash('map updated'); });
es.addEventListener('reload', () => location.reload());
`;

const clients = new Set();
function broadcast(event) {
  for (const res of clients) res.write(`event: ${event}\ndata: 1\n\n`);
}

const server = createServer(async (req, res) => {
  const url = req.url.split('?')[0];
  if (url === '/' || url === '/index.html') {
    const assemble = await getAssemble();
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(assemble(BOOT, { renderInline: null }));
  } else if (url === '/render.js') {
    res.writeHead(200, { 'Content-Type': 'application/javascript; charset=utf-8', 'Cache-Control': 'no-store' });
    res.end(readFileSync(renderPath, 'utf8'));
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
watch(renderPath, () => onChange('reload'));
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
