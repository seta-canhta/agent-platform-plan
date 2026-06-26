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
  svg { width: 100%; height: 100%; cursor: grab; display: block; }
  svg:active { cursor: grabbing; }

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
`;

export const BODY = String.raw`
<div id="header">
  <h1 id="title"></h1>
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
  </div>
</div>
<div id="err"></div>
<div id="svg-container"><svg id="tree-svg"></svg></div>
<div class="tooltip" id="tooltip"></div>
<div id="hint" style="position:fixed; bottom:14px; left:22px; z-index:80;">drag · scroll-zoom · click node to expand</div>
`;

export function assemble(bootScript, { renderInline = null } = {}) {
  const renderTag = renderInline
    ? `<script>${renderInline}</script>`
    : `<script src="/render.js"></script>`;
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
<style>${STYLE}</style>
</head>
<body>
${BODY}
${renderTag}
<script>${bootScript}</script>
</body>
</html>`;
}
