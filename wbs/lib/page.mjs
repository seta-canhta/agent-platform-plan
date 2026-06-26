// Shared HTML shell for both the static build and the live server.
// Aesthetic: architect's white-print — light drafting paper, faint blueprint
// dot-grid, dark ink type, clean cards with vivid status strips.
// assemble(bootScript, { renderInline }) returns a full HTML document.

export const STYLE = String.raw`
  :root {
    --paper:   #eef2f8;
    --paper-2: #f6f8fc;
    --ink:     #1c2738;
    --ink-dim: #5a6b82;
    --ink-faint:#94a3b8;
    --line:    rgba(40,72,116,0.14);
    --line-bright: rgba(37,99,235,0.45);
    --card:    #ffffff;
    --accent:  #2563eb;
    --done:    #16a34a;
    --prog:    #d97706;
    --block:   #dc2626;
    --idle:    #64748b;
    --enabler: #7c3aed;
  }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  html, body { height: 100%; }
  body {
    font-family: 'Archivo', system-ui, sans-serif;
    color: var(--ink);
    background-color: var(--paper);
    background-image:
      radial-gradient(circle at 1px 1px, rgba(40,80,140,0.10) 1px, transparent 0),
      radial-gradient(circle at 1px 1px, rgba(40,80,140,0.05) 1px, transparent 0);
    background-size: 28px 28px, 140px 140px;
    overflow: hidden;
    position: relative;
  }
  /* soft paper lighting */
  body::before {
    content: ''; position: fixed; inset: 0; pointer-events: none; z-index: 0;
    background:
      radial-gradient(75% 60% at 15% -5%, rgba(255,255,255,0.85), transparent 60%),
      radial-gradient(60% 60% at 100% 105%, rgba(219,232,250,0.55), transparent 55%);
  }

  /* ── instrument bar ─────────────────────────────────────── */
  #header {
    position: fixed; top: 0; left: 0; right: 0; z-index: 100;
    height: 60px; padding: 0 22px;
    display: flex; align-items: center; gap: 22px;
    background: linear-gradient(180deg, rgba(255,255,255,0.92), rgba(246,248,252,0.74));
    border-bottom: 1px solid var(--line);
    backdrop-filter: blur(10px) saturate(120%);
  }
  #header h1 {
    font-family: 'Instrument Serif', Georgia, serif;
    font-size: 26px; font-weight: 400; font-style: italic;
    letter-spacing: 0.2px; color: var(--ink); white-space: nowrap;
  }
  #header h1 .v { font-family: 'JetBrains Mono', monospace; font-style: normal; font-size: 11px; color: var(--accent); vertical-align: super; margin-left: 5px; }
  .rule { width: 1px; height: 30px; background: var(--line); }
  .readout { display: flex; flex-direction: column; gap: 2px; }
  .readout .k { font-family: 'JetBrains Mono', monospace; font-size: 9px; letter-spacing: 1.5px; text-transform: uppercase; color: var(--ink-faint); }
  .readout .val { font-family: 'JetBrains Mono', monospace; font-size: 15px; font-weight: 600; color: var(--ink); }
  .readout .val small { font-size: 10px; color: var(--ink-dim); font-weight: 400; margin-left: 5px; }
  .hist { display: flex; gap: 5px; align-items: flex-end; height: 30px; padding-bottom: 11px; }
  .hist .bar { width: 13px; background: linear-gradient(180deg, var(--accent), rgba(37,99,235,0.35)); border-radius: 2px 2px 0 0; position: relative; min-height: 2px; }
  .hist .bar span { position: absolute; bottom: -12px; left: 0; right: 0; text-align: center; font-family: 'JetBrains Mono', monospace; font-size: 8px; color: var(--ink-faint); }

  #live { margin-left: auto; display: flex; align-items: center; gap: 7px; font-family: 'JetBrains Mono', monospace; font-size: 10px; letter-spacing: 1px; text-transform: uppercase; padding: 5px 11px; border-radius: 20px; border: 1px solid var(--line); background: var(--card); }
  #live::before { content: ''; width: 7px; height: 7px; border-radius: 50%; }
  #live.on  { color: var(--done); border-color: rgba(22,163,74,0.35); }
  #live.on::before  { background: var(--done); box-shadow: 0 0 0 0 rgba(22,163,74,0.5); animation: pulse 2s infinite; }
  #live.off { color: var(--block); border-color: rgba(220,38,38,0.3); }
  #live.off::before { background: var(--block); }
  @keyframes pulse { 0% { box-shadow: 0 0 0 0 rgba(22,163,74,0.45); } 70% { box-shadow: 0 0 0 7px rgba(22,163,74,0); } 100% { box-shadow: 0 0 0 0 rgba(22,163,74,0); } }

  .legend { display: flex; gap: 13px; font-size: 10.5px; color: var(--ink-dim); font-family: 'JetBrains Mono', monospace; letter-spacing: 0.3px; }
  .legend-item { display: flex; align-items: center; gap: 6px; }
  .legend-dot { width: 8px; height: 8px; border-radius: 2px; }
  #hint { font-size: 10px; color: var(--ink-faint); font-family: 'JetBrains Mono', monospace; letter-spacing: 0.3px; }

  #svg-container { position: fixed; inset: 60px 0 0 0; z-index: 1; }
  #tree-svg { width: 100%; height: 100%; cursor: grab; display: block; }
  #tree-svg:active { cursor: grabbing; }

  /* ── mindmap nodes & links ──────────────────────────────── */
  .link { fill: none; stroke: var(--line-bright); stroke-width: 1.3px; opacity: 0.4; }
  .node { cursor: pointer; }
  .node text { pointer-events: none; }
  .node-bg { transition: stroke .16s ease, filter .16s ease; }
  .node:hover .node-bg { stroke: var(--accent); filter: drop-shadow(0 6px 18px rgba(37,99,235,0.22)); }
  .node .node-id    { font-family: 'JetBrains Mono', monospace; font-size: 9.5px; fill: var(--accent); opacity: 0.9; letter-spacing: 0.3px; }
  .node .node-name  { font-family: 'Archivo', sans-serif; font-weight: 600; font-size: 12px; fill: var(--ink); }
  .node .node-name.is-module { font-weight: 800; font-size: 13px; letter-spacing: 0.2px; }
  .node .node-sp    { font-family: 'JetBrains Mono', monospace; font-size: 10px; font-weight: 700; }
  .node .node-meta  { font-family: 'JetBrains Mono', monospace; font-size: 9px; fill: var(--ink-faint); letter-spacing: 0.5px; }
  .node .node-expand{ font-family: 'JetBrains Mono', monospace; font-size: 10px; fill: var(--ink-dim); }

  /* ── tooltip ────────────────────────────────────────────── */
  .tooltip {
    position: fixed; z-index: 200; max-width: 380px; pointer-events: none;
    opacity: 0; transform: translateY(4px); transition: opacity .16s, transform .16s;
    background: var(--card); border: 1px solid var(--line); border-radius: 10px;
    padding: 13px 16px; font-size: 12.5px; line-height: 1.6; color: var(--ink-dim);
    box-shadow: 0 18px 44px rgba(28,46,82,0.18);
  }
  .tooltip.visible { opacity: 1; transform: translateY(0); }
  .tt-id { font-family: 'JetBrains Mono', monospace; font-size: 10px; letter-spacing: 1px; color: var(--accent); }
  .tt-name { font-family: 'Archivo', sans-serif; font-weight: 700; font-size: 14px; color: var(--ink); margin: 2px 0 8px; line-height: 1.3; }
  .tt-badge { display: inline-block; font-family: 'JetBrains Mono', monospace; font-size: 10px; font-weight: 600; letter-spacing: 0.5px; padding: 2px 9px; border-radius: 5px; margin-bottom: 9px; border: 1px solid currentColor; }
  .tt-story { color: var(--ink); }
  .tt-ac { margin-top: 9px; }
  .tt-ac b { font-family: 'JetBrains Mono', monospace; font-size: 9px; letter-spacing: 1.5px; text-transform: uppercase; color: var(--ink-faint); }
  .tt-ac ul { list-style: none; margin-top: 4px; }
  .tt-ac li { position: relative; padding-left: 16px; margin: 4px 0; color: var(--ink-dim); }
  .tt-ac li::before { content: '▸'; position: absolute; left: 2px; color: var(--accent); }
  .tt-meta { margin-top: 8px; font-family: 'JetBrains Mono', monospace; font-size: 10.5px; color: var(--ink-faint); }
  .dep-link { color: var(--accent); text-decoration: underline; text-underline-offset: 2px; cursor: pointer; }
  .tooltip .dep-link { pointer-events: none; }

  /* ── detail modal (click to pin) ────────────────────────── */
  .modal-back {
    position: fixed; inset: 0; z-index: 250; display: flex; align-items: center; justify-content: center;
    background: rgba(20,34,60,0.34); opacity: 0; pointer-events: none; transition: opacity .18s;
  }
  .modal-back.visible { opacity: 1; pointer-events: auto; }
  .modal-panel {
    position: relative; max-width: 1100px; width: calc(100% - 56px); max-height: 90vh; overflow-y: auto;
    background: var(--card); border: 1px solid var(--line); border-radius: 14px;
    padding: 34px 40px; font-size: 15px; line-height: 1.7; color: var(--ink-dim);
    box-shadow: 0 28px 70px rgba(28,46,82,0.32);
    transform: translateY(8px) scale(.98); transition: transform .18s;
  }
  .modal-panel .tt-id { font-size: 12px; }
  .modal-panel .tt-name { font-size: 19px; margin: 4px 0 12px; }
  .modal-panel .tt-badge { font-size: 12px; padding: 3px 12px; margin-bottom: 12px; }
  .modal-panel .tt-ac b { font-size: 11px; }
  .modal-panel .tt-ac li { padding-left: 20px; margin: 7px 0; }
  .modal-panel .tt-meta { font-size: 13px; margin-top: 11px; }
  .modal-back.visible .modal-panel { transform: translateY(0) scale(1); }
  .modal-close {
    position: absolute; top: 10px; right: 12px; width: 26px; height: 26px; border: none; cursor: pointer;
    background: none; color: var(--ink-faint); font-size: 22px; line-height: 1; border-radius: 6px;
    transition: background .14s, color .14s;
  }
  .modal-close:hover { background: rgba(37,99,235,0.08); color: var(--accent); }

  /* ── related-screen screenshot (modal only) ─────────────── */
  .tt-shot-wrap { margin-top: 16px; }
  .tt-shot-h { display: block; font-family: 'JetBrains Mono', monospace; font-size: 11px; letter-spacing: 1.5px; color: var(--ink-faint); margin-bottom: 7px; }
  .tt-shot {
    display: block; width: 100%; height: auto; border-radius: 10px;
    border: 1px solid var(--line); background: var(--paper-2);
    box-shadow: 0 8px 24px rgba(28,46,82,0.14); transition: box-shadow .16s, transform .08s;
  }
  .tt-shot-wrap a { display: block; }
  .tt-shot-wrap a:hover .tt-shot { box-shadow: 0 12px 32px rgba(37,99,235,0.26); }
  .tt-shot-wrap a:active .tt-shot { transform: translateY(1px); }

  #flash {
    position: fixed; bottom: 26px; left: 50%; transform: translateX(-50%) translateY(24px);
    z-index: 300; pointer-events: none; opacity: 0; transition: all .3s cubic-bezier(.2,.9,.3,1);
    font-family: 'JetBrains Mono', monospace; font-size: 11px; letter-spacing: 1px; text-transform: uppercase;
    color: #fff; background: var(--accent); padding: 9px 20px; border-radius: 22px;
    box-shadow: 0 8px 24px rgba(37,99,235,0.35);
  }
  #flash.show { opacity: 1; transform: translateX(-50%) translateY(0); }
  #err {
    position: fixed; top: 60px; left: 0; right: 0; z-index: 90; display: none;
    background: #fef2f2; border-bottom: 1px solid var(--block);
    color: #b91c1c; font-family: 'JetBrains Mono', monospace; font-size: 11.5px;
    padding: 10px 22px; white-space: pre-wrap;
  }

  /* ── page nav (two items) + export ──────────────────────── */
  .nav { display: flex; gap: 2px; padding: 3px; background: var(--paper); border: 1px solid var(--line); border-radius: 9px; }
  .nav-item {
    display: flex; align-items: center; gap: 7px; text-decoration: none; white-space: nowrap; cursor: pointer;
    font-family: 'JetBrains Mono', monospace; font-size: 10.5px; letter-spacing: 0.6px; text-transform: uppercase;
    color: var(--ink-dim); background: none; border-radius: 6px;
    padding: 6px 13px; transition: background .14s, color .14s;
  }
  .nav-item:hover { color: var(--ink); }
  .nav-item.active { color: #fff; background: var(--accent); box-shadow: 0 2px 8px rgba(37,99,235,0.32); }
  #btn-export {
    font-family: 'JetBrains Mono', monospace; font-size: 10.5px; letter-spacing: 0.6px; text-transform: uppercase;
    display: flex; align-items: center; gap: 7px; cursor: pointer;
    color: var(--done); background: var(--card); border: 1px solid rgba(22,163,74,0.35); border-radius: 8px;
    padding: 7px 14px; transition: background .14s, box-shadow .14s, transform .08s;
  }
  #btn-export:hover { background: rgba(22,163,74,0.08); box-shadow: 0 4px 14px rgba(22,163,74,0.18); }
  #btn-export:active { transform: translateY(1px); }
  #btn-export svg { width: 13px; height: 13px; }

  /* ── table view ─────────────────────────────────────────── */
  #table-container { position: fixed; inset: 60px 0 0 0; z-index: 1; display: none; flex-direction: column; background: var(--card); }
  body.page-table #table-container { display: flex; }
  body.page-table #svg-container, body.page-table #hint { display: none; }
  body.page-map #table-container { display: none; }

  .t-toolbar {
    display: flex; align-items: center; gap: 16px; padding: 10px 22px; flex: 0 0 auto;
    background: linear-gradient(180deg, rgba(255,255,255,0.9), rgba(246,248,252,0.7));
    border-bottom: 1px solid var(--line); backdrop-filter: blur(6px);
  }
  .t-search { display: flex; align-items: center; gap: 8px; color: var(--ink-faint);
    background: var(--card); border: 1px solid var(--line); border-radius: 8px; padding: 6px 11px; min-width: 320px; }
  .t-search:focus-within { border-color: var(--line-bright); box-shadow: 0 0 0 3px rgba(37,99,235,0.1); }
  .t-search input { border: none; outline: none; background: none; flex: 1;
    font-family: 'JetBrains Mono', monospace; font-size: 12px; color: var(--ink); letter-spacing: 0.2px; }
  .t-search input::placeholder { color: var(--ink-faint); }
  .t-count { font-family: 'JetBrains Mono', monospace; font-size: 11px; font-weight: 600; color: var(--accent); white-space: nowrap; }
  .t-hint { margin-left: auto; font-family: 'JetBrains Mono', monospace; font-size: 10px; color: var(--ink-faint); letter-spacing: 0.3px; }

  .t-scroll { flex: 1 1 auto; overflow: auto; padding: 0 0 60px; background: var(--card); }
  .t-table { border-collapse: separate; border-spacing: 0; min-width: 100%; font-size: 12px; background: var(--card); }
  .t-table thead th {
    position: sticky; top: 0; z-index: 5; text-align: left; cursor: pointer; user-select: none;
    font-family: 'JetBrains Mono', monospace; font-size: 9.5px; font-weight: 600; letter-spacing: 0.8px; text-transform: uppercase;
    color: var(--ink-dim); background: var(--paper-2); padding: 10px 12px; white-space: nowrap;
    border-bottom: 2px solid var(--line-bright); box-shadow: 0 1px 0 var(--line);
  }
  .t-table thead th:hover { color: var(--accent); }
  .t-table th.sorted { color: var(--accent); }
  .t-table th .sort-i { margin-left: 5px; font-size: 8px; }
  .th-num span, .td-num { text-align: center; }

  .t-table td { padding: 8px 12px; border-bottom: 1px solid var(--line); vertical-align: top; color: var(--ink); line-height: 1.5; }
  .t-table tbody tr:hover td { background: rgba(37,99,235,0.045); }
  .t-table tr.is-enabler td { background: rgba(124,58,237,0.04); }
  .t-table tr.is-enabler:hover td { background: rgba(124,58,237,0.08); }
  .td-code { font-family: 'JetBrains Mono', monospace; font-size: 11px; color: var(--ink-dim); white-space: nowrap; }
  .td-num { font-family: 'JetBrains Mono', monospace; font-weight: 700; color: var(--accent); }
  .td-text { white-space: normal; min-width: 120px; max-width: 210px; }
  .td-wide { white-space: normal; }
  .td-wide .t-wide { min-width: 240px; max-width: 380px; color: var(--ink); font-size: 12px; }
  .td-tag { white-space: nowrap; text-align: center; }
  .t-tag { display: inline-block; font-family: 'JetBrains Mono', monospace; font-size: 9px; font-weight: 600;
    letter-spacing: 0.5px; text-transform: uppercase; padding: 2px 8px; border-radius: 5px; border: 1px solid currentColor; }
  .t-sp { font-family: 'JetBrains Mono', monospace; }
  .t-ac { list-style: none; min-width: 260px; max-width: 420px; }
  .t-ac li { position: relative; padding-left: 15px; margin: 3px 0; color: #34425a; font-size: 12px; line-height: 1.5; }
  .t-ac li::before { content: '▸'; position: absolute; left: 2px; color: var(--accent); }
  .t-dep { font-family: 'JetBrains Mono', monospace; font-size: 11px; color: var(--ink-dim); white-space: nowrap; }
  .t-dep.x { color: var(--block); }

  /* band/total use an inner flex div — flex on a <td> would cancel its colspan */
  .t-band td { padding: 0; position: sticky; top: 34px; z-index: 4; }
  .t-band-row { display: flex; align-items: center; gap: 12px; padding: 8px 14px; cursor: pointer;
    background: linear-gradient(180deg, #eef3fb, #e6edf8); border-bottom: 2px solid var(--line-bright);
    transition: background .12s; user-select: none; }
  .t-band-row:hover { background: linear-gradient(180deg, #e6eefb, #dde8f6); }
  .t-band .b-caret { font-family: 'JetBrains Mono', monospace; font-size: 10px; color: var(--accent); width: 10px; text-align: center; }
  .t-band .b-id { font-family: 'JetBrains Mono', monospace; font-size: 10px; font-weight: 700; color: var(--accent); }
  .t-band .b-name { font-family: 'Archivo', sans-serif; font-weight: 800; font-size: 13px; color: var(--ink); }
  .t-band .b-stat { margin-left: auto; font-family: 'JetBrains Mono', monospace; font-size: 10.5px; color: var(--ink-dim); }
  .t-empty { text-align: center; color: var(--ink-faint); padding: 40px; font-family: 'JetBrains Mono', monospace; font-size: 12px; }

  /* ── backlog view (reuses the .t-* table styles) ─────────── */
  #backlog-container { position: fixed; inset: 60px 0 0 0; z-index: 1; display: none; flex-direction: column; background: var(--card); }
  body.page-backlog #backlog-container { display: flex; }
  body.page-backlog #svg-container, body.page-backlog #hint { display: none; }
  .th-ctl span { text-align: left; }

  /* ── inline quick-edit selects (backlog cells + modal strip) ── */
  .qe { font-family: 'JetBrains Mono', monospace; font-size: 11px; color: var(--ink); background: var(--card);
    border: 1px solid var(--line); border-radius: 7px; padding: 5px 8px; cursor: pointer; max-width: 150px; }
  .qe:hover { border-color: var(--line-bright); }
  .qe:focus { outline: none; border-color: var(--line-bright); box-shadow: 0 0 0 3px rgba(37,99,235,0.1); }
  .qe:disabled { cursor: default; opacity: 0.55; }
  .td-ctl { white-space: nowrap; }
  .qe-strip { display: flex; gap: 14px; flex-wrap: wrap; margin: 16px 0 0; padding-top: 16px; border-top: 1px solid var(--line); }
  .qe-field { flex: 1 1 150px; }
  .qe-field label { display: block; font-family: 'JetBrains Mono', monospace; font-size: 9.5px; letter-spacing: 0.8px; text-transform: uppercase; color: var(--ink-faint); margin-bottom: 5px; }
  .qe-field .qe { width: 100%; max-width: none; }

  /* ── item comments (modal) ──────────────────────────────── */
  .cm-wrap { margin-top: 22px; border-top: 1px solid var(--line); padding-top: 18px; }
  .cm-head { display: flex; align-items: center; justify-content: space-between; gap: 12px; flex-wrap: wrap; margin-bottom: 13px; }
  .cm-h { font-family: 'JetBrains Mono', monospace; font-size: 11px; letter-spacing: 1.5px; color: var(--ink-faint); }
  .cm-summary { display: flex; gap: 6px; flex-wrap: wrap; }
  .cm-count { font-family: 'JetBrains Mono', monospace; font-size: 9.5px; letter-spacing: 0.4px; padding: 2px 9px; border-radius: 20px; border: 1px solid currentColor; }
  .cm-count.z { opacity: 0.32; }
  .cm-open { color: var(--accent); }
  .cm-resolved { color: var(--done); }
  .cm-unresolved { color: var(--block); }
  .cm-skip { color: var(--ink-faint); }
  .cm-list { display: flex; flex-direction: column; gap: 11px; }
  .cm-item { border: 1px solid var(--line); border-left-width: 3px; border-radius: 9px; padding: 11px 14px; background: var(--paper-2); }
  .cm-item.cm-open { border-left-color: var(--accent); }
  .cm-item.cm-resolved { border-left-color: var(--done); }
  .cm-item.cm-unresolved { border-left-color: var(--block); }
  .cm-item.cm-skip { border-left-color: var(--ink-faint); opacity: 0.7; }
  .cm-meta { display: flex; align-items: center; gap: 9px; margin-bottom: 6px; }
  .cm-badge { font-family: 'JetBrains Mono', monospace; font-size: 8.5px; font-weight: 600; letter-spacing: 0.6px; text-transform: uppercase; padding: 1px 7px; border-radius: 4px; border: 1px solid currentColor; }
  .cm-author { font-family: 'JetBrains Mono', monospace; font-size: 11px; color: var(--ink); font-weight: 600; }
  .cm-time { font-family: 'JetBrains Mono', monospace; font-size: 10px; color: var(--ink-faint); margin-left: auto; }
  .cm-text { color: var(--ink); font-size: 13.5px; line-height: 1.55; white-space: pre-wrap; }
  .cm-agent { margin-top: 8px; padding: 8px 11px; border-radius: 7px; background: rgba(37,99,235,0.06); border: 1px solid rgba(37,99,235,0.16); color: var(--ink-dim); font-size: 12.5px; line-height: 1.5; }
  .cm-actions { display: flex; gap: 6px; margin-top: 10px; }
  .cm-act { font-family: 'JetBrains Mono', monospace; font-size: 9.5px; letter-spacing: 0.4px; text-transform: uppercase; cursor: pointer; color: var(--ink-dim); background: var(--card); border: 1px solid var(--line); border-radius: 6px; padding: 3px 10px; transition: background .12s, color .12s, border-color .12s; }
  .cm-act:hover { color: var(--accent); border-color: var(--line-bright); background: rgba(37,99,235,0.06); }
  .cm-act.cm-del:hover { color: var(--block); border-color: rgba(220,38,38,0.4); background: rgba(220,38,38,0.06); }
  .cm-empty { font-family: 'JetBrains Mono', monospace; font-size: 12px; color: var(--ink-faint); padding: 4px 0 2px; }
  .cm-form { display: flex; flex-direction: column; gap: 9px; margin-top: 15px; }
  .cm-input { width: 100%; resize: vertical; min-height: 48px; font-family: 'Archivo', sans-serif; font-size: 13.5px; line-height: 1.5; color: var(--ink); background: var(--card); border: 1px solid var(--line); border-radius: 9px; padding: 10px 12px; }
  .cm-input:focus { outline: none; border-color: var(--line-bright); box-shadow: 0 0 0 3px rgba(37,99,235,0.1); }
  .cm-add { align-self: flex-end; font-family: 'JetBrains Mono', monospace; font-size: 10.5px; letter-spacing: 0.6px; text-transform: uppercase; cursor: pointer; color: #fff; background: var(--accent); border: none; border-radius: 8px; padding: 8px 18px; transition: box-shadow .14s, transform .08s, opacity .14s; }
  .cm-add:hover { box-shadow: 0 4px 14px rgba(37,99,235,0.32); }
  .cm-add:active { transform: translateY(1px); }
  .cm-add:disabled { opacity: 0.5; cursor: default; }

  /* ── inline item editing (modal — replaces the read-only top in place) ─── */
  .ed-toggle { display: block; width: fit-content; margin: 16px 0 0 auto; font-family: 'JetBrains Mono', monospace; font-size: 10.5px; letter-spacing: 0.6px; text-transform: uppercase; cursor: pointer; color: var(--accent); background: var(--card); border: 1px solid var(--line-bright); border-radius: 8px; padding: 7px 15px; transition: background .14s, box-shadow .14s; }
  .ed-toggle:hover { background: rgba(37,99,235,0.07); box-shadow: 0 3px 12px rgba(37,99,235,0.16); }
  .ed-grid { display: flex; gap: 16px; flex-wrap: wrap; }
  .ed-grid .ed-field { flex: 1 1 180px; }
  .ed-field { margin-bottom: 14px; }
  .ed-field label { display: block; font-family: 'JetBrains Mono', monospace; font-size: 9.5px; letter-spacing: 0.8px; text-transform: uppercase; color: var(--ink-faint); margin-bottom: 5px; }
  .ed-field select, .ed-field input, .ed-field textarea { width: 100%; font-family: 'Archivo', sans-serif; font-size: 13.5px; color: var(--ink); background: var(--card); border: 1px solid var(--line); border-radius: 8px; padding: 9px 12px; }
  .ed-field input.ed-title { font-size: 18px; font-weight: 700; }
  .ed-field select { font-family: 'JetBrains Mono', monospace; cursor: pointer; }
  .ed-field textarea { resize: vertical; line-height: 1.5; }
  .ed-field select:focus, .ed-field input:focus, .ed-field textarea:focus { outline: none; border-color: var(--line-bright); box-shadow: 0 0 0 3px rgba(37,99,235,0.1); }
  .ed-ac-row { display: flex; gap: 7px; margin-bottom: 7px; }
  .ed-ac-row input { flex: 1; }
  .ed-ac-del { flex: 0 0 auto; width: 32px; cursor: pointer; color: var(--ink-faint); background: var(--card); border: 1px solid var(--line); border-radius: 8px; font-size: 16px; line-height: 1; transition: color .12s, border-color .12s; }
  .ed-ac-del:hover { color: var(--block); border-color: rgba(220,38,38,0.4); }
  .ed-ac-add { font-family: 'JetBrains Mono', monospace; font-size: 9.5px; letter-spacing: 0.4px; text-transform: uppercase; cursor: pointer; color: var(--accent); background: none; border: 1px dashed var(--line-bright); border-radius: 7px; padding: 5px 12px; margin-top: 2px; }
  .ed-ac-add:hover { background: rgba(37,99,235,0.06); }
  .ed-actions { display: flex; gap: 9px; justify-content: flex-end; margin-top: 6px; }
  .ed-save { font-family: 'JetBrains Mono', monospace; font-size: 10.5px; letter-spacing: 0.6px; text-transform: uppercase; cursor: pointer; color: #fff; background: var(--accent); border: none; border-radius: 8px; padding: 8px 18px; transition: box-shadow .14s, transform .08s, opacity .14s; }
  .ed-save:hover { box-shadow: 0 4px 14px rgba(37,99,235,0.32); }
  .ed-save:active { transform: translateY(1px); }
  .ed-save:disabled { opacity: 0.5; cursor: default; }
  .ed-cancel { font-family: 'JetBrains Mono', monospace; font-size: 10.5px; letter-spacing: 0.6px; text-transform: uppercase; cursor: pointer; color: var(--ink-dim); background: var(--card); border: 1px solid var(--line); border-radius: 8px; padding: 8px 18px; }
  .ed-cancel:hover { color: var(--ink); border-color: var(--line-bright); }

  /* ── lucide icons ───────────────────────────────────────── */
  .lucide, svg.lucide { width: 1em; height: 1em; stroke-width: 2; display: inline-block; vertical-align: -0.125em; flex: 0 0 auto; }
  /* inline content icons: a touch smaller, with breathing room before the text */
  .tt-meta svg.lucide, .cm-agent svg.lucide, .dw-asg svg.lucide { stroke-width: 1.8; margin-right: 5px; vertical-align: -0.15em; opacity: 0.9; }
  .ed-toggle svg.lucide { margin-right: 5px; }

  /* ── floating map controls: expand / collapse / comments (icon-only) ───── */
  #map-ctl { position: fixed; top: 72px; right: 16px; z-index: 151; display: flex; flex-direction: column; gap: 8px; transition: right .22s cubic-bezier(.2,.8,.2,1); }
  body.drawer-open #map-ctl { right: 416px; }
  .map-ctl-btn { width: 40px; height: 40px; display: flex; align-items: center; justify-content: center; font-size: 18px; line-height: 1; cursor: pointer; color: var(--accent); background: var(--card); border: 1px solid var(--line-bright); border-radius: 10px; box-shadow: 0 4px 14px rgba(28,46,82,0.12); transition: background .14s, box-shadow .14s, color .14s; }
  .map-ctl-btn:hover { background: rgba(37,99,235,0.08); box-shadow: 0 6px 18px rgba(37,99,235,0.18); }
  .map-ctl-btn:active { transform: translateY(1px); }
  body.drawer-open #cm-drawer-btn { display: none; }

  /* ── comments drawer (right) ────────────────────────────── */
  #cm-drawer { position: fixed; top: 60px; right: 0; bottom: 0; width: 400px; max-width: 88vw; z-index: 150; background: var(--card); border-left: 1px solid var(--line); box-shadow: -14px 0 44px rgba(28,46,82,0.16); transform: translateX(100%); transition: transform .22s cubic-bezier(.2,.8,.2,1); }
  body.drawer-open #cm-drawer { transform: none; }
  #cm-drawer-inner { display: flex; flex-direction: column; height: 100%; min-height: 0; }
  .dw-head { display: flex; align-items: center; justify-content: space-between; padding: 14px 18px; border-bottom: 1px solid var(--line); flex: 0 0 auto; }
  .dw-h { font-family: 'JetBrains Mono', monospace; font-size: 12px; letter-spacing: 1.5px; color: var(--ink-dim); }
  .dw-close { width: 26px; height: 26px; border: none; cursor: pointer; background: none; color: var(--ink-faint); font-size: 20px; line-height: 1; border-radius: 6px; transition: background .14s, color .14s; }
  .dw-close:hover { background: rgba(37,99,235,0.08); color: var(--accent); }
  .dw-filter { display: flex; flex-wrap: wrap; gap: 6px; padding: 12px 16px; border-bottom: 1px solid var(--line); flex: 0 0 auto; }
  .dw-chip { font-family: 'JetBrains Mono', monospace; font-size: 9.5px; letter-spacing: 0.4px; text-transform: uppercase; cursor: pointer; color: var(--ink-dim); background: var(--paper-2); border: 1px solid var(--line); border-radius: 20px; padding: 4px 11px; transition: background .12s, color .12s, border-color .12s; }
  .dw-chip:hover { border-color: var(--line-bright); }
  .dw-chip.active { color: #fff; background: var(--accent); border-color: var(--accent); }
  .dw-list { flex: 1 1 auto; overflow-y: auto; padding: 14px 16px; display: flex; flex-direction: column; gap: 11px; }
  .dw-item { border: 1px solid var(--line); border-left-width: 3px; border-radius: 9px; padding: 10px 13px; background: var(--paper-2); }
  .dw-item.cm-open { border-left-color: var(--accent); }
  .dw-item.cm-resolved { border-left-color: var(--done); }
  .dw-item.cm-unresolved { border-left-color: var(--block); }
  .dw-item.cm-skip { border-left-color: var(--ink-faint); opacity: 0.72; }
  .dw-top { display: flex; align-items: center; gap: 8px; }
  .dw-top .cm-jump { font-family: 'JetBrains Mono', monospace; font-size: 10.5px; color: var(--accent); text-decoration: none; cursor: pointer; }
  .dw-top .cm-jump:hover { text-decoration: underline; }
  .dw-time { margin-left: auto; font-family: 'JetBrains Mono', monospace; font-size: 9.5px; color: var(--ink-faint); }
  .dw-name { font-family: 'Archivo', sans-serif; font-weight: 600; font-size: 12px; color: var(--ink); margin: 4px 0 5px; line-height: 1.3; }
  .dw-asg { font-family: 'JetBrains Mono', monospace; font-size: 10px; font-weight: 400; color: var(--ink-dim); }
  .dw-empty { color: var(--ink-faint); font-family: 'JetBrains Mono', monospace; font-size: 12px; padding: 24px 4px; text-align: center; }
`;

// Page body. `view` is 'map' | 'table'; `nav` = { mapHref, tableHref } — both nav
// items always show, the current one highlighted. Excel button: table page only.
export function body(view, nav) {
  const exportBtn = view === 'table' ? String.raw`
  <div class="rule"></div>
  <button id="btn-export" title="Download a styled .xlsx Work Breakdown Structure">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v12m0 0 4-4m-4 4-4-4M5 21h14"/></svg>
    Excel
  </button>` : '';
  const cls = (v) => 'nav-item' + (v === view ? ' active' : '');
  return String.raw`
<div id="header">
  <h1 id="title"></h1>
  <div class="rule"></div>
  <nav class="nav">
    <a class="${cls('map')}" href="${nav.mapHref}">◰ Mindmap</a>
    <a class="${cls('table')}" href="${nav.tableHref}">▦ Table</a>
    <a class="${cls('backlog')}" href="${nav.backlogHref}">▥ Backlog</a>
  </nav>
  <div class="rule"></div>
  <div class="readout"><span class="k">Items</span><span class="val" id="s-items"></span></div>
  <div class="readout"><span class="k">Points</span><span class="val" id="s-points"></span></div>
  <div class="readout"><span class="k">Blockers</span><span class="val" id="s-blockers"></span></div>
  <div class="readout"><span class="k">Distribution</span><div class="hist" id="hist"></div></div>
  <span id="live" class="off">offline</span>
  <div class="rule"></div>
  <div class="legend">
    <span class="legend-item"><span class="legend-dot" style="background:var(--done)"></span>done</span>
    <span class="legend-item"><span class="legend-dot" style="background:var(--prog)"></span>active</span>
    <span class="legend-item"><span class="legend-dot" style="background:var(--block)"></span>blocked</span>
    <span class="legend-item"><span class="legend-dot" style="background:var(--idle)"></span>queued</span>
    <span class="legend-item"><span class="legend-dot" style="background:var(--enabler)"></span>enabler</span>
  </div>${exportBtn}
</div>
<div id="err"></div>
<div id="svg-container"><svg id="tree-svg"></svg></div>
<div id="table-container"></div>
<div id="backlog-container"></div>
<div class="tooltip" id="tooltip"></div>
<div class="modal-back" id="modal-back"><div class="modal-panel"><button class="modal-close" id="modal-close" aria-label="Close">×</button><div id="modal-body"></div></div></div>${view === 'map' ? String.raw`
<div id="map-ctl">
  <button class="map-ctl-btn" id="btn-expand" title="Expand all" aria-label="Expand all"><i data-lucide="chevrons-up-down"></i></button>
  <button class="map-ctl-btn" id="btn-collapse" title="Collapse all" aria-label="Collapse all"><i data-lucide="chevrons-down-up"></i></button>
  <button class="map-ctl-btn" id="cm-drawer-btn" title="Show all comments" aria-label="Comments"><i data-lucide="message-square"></i></button>
</div>
<aside id="cm-drawer"><div id="cm-drawer-inner"></div></aside>` : ''}
<div id="hint" style="position:fixed; bottom:14px; left:22px; z-index:80;">drag · scroll-zoom · click branch to expand · click item for detail</div>
`;
}

// Browser scripts, in load order. rows.js must precede table.js/export.js
// (they call WBS.toRows); all four merge into window.WBS so order is otherwise free.
export const CLIENT_SCRIPTS = ['/rows.js', '/render.js', '/table.js', '/export.js', '/quickedit.js', '/backlog.js', '/app.js'];

export function assemble(bootScript, { renderInline = null, view = 'map', nav = { mapHref: '#', tableHref: '#', backlogHref: '#' } } = {}) {
  const renderTag = renderInline
    ? `<script>${renderInline}</script>`
    : CLIENT_SCRIPTS.map((s) => `<script src="${s}"></script>`).join('\n');
  return String.raw`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Agent Platform — WBS</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Archivo:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/d3@7"></script>
<script src="https://cdn.jsdelivr.net/npm/xlsx-js-style@1.2.0/dist/xlsx.bundle.js"></script>
<script src="https://cdn.jsdelivr.net/npm/lucide@0.469.0/dist/umd/lucide.min.js"></script>
<style>${STYLE}</style>
</head>
<body class="page-${view}">
${body(view, nav)}
${renderTag}
<script>${bootScript}</script>
</body>
</html>`;
}
