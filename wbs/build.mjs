#!/usr/bin/env node
// Static snapshot: reads wbs.json, validates, writes a self-contained index.html
// (data + renderer inlined — open the file directly, no server needed).
// Usage: node build.mjs [path/to/wbs.json]
// For a LIVE auto-updating map, use:  node serve.mjs

import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { validate, stats, dependencyAnalysis } from './lib/schema.mjs';
import { assemble } from './lib/page.mjs';

const here = dirname(fileURLToPath(import.meta.url));
const srcPath = process.argv[2] ?? join(here, 'wbs.json');
const outPath = join(here, 'index.html');

const data = JSON.parse(readFileSync(srcPath, 'utf8'));
const { errors, warnings } = validate(data);
const s = stats(data);
report(data, s, errors, warnings);
if (errors.length) { console.error('\nBuild aborted — fix schema errors above.\n'); process.exit(1); }

const renderJs = readFileSync(join(here, 'lib', 'render.js'), 'utf8');
const boot = `
const data = ${JSON.stringify(data)};
const stats = ${JSON.stringify(s)};
WBS.renderWBS(data, stats);
const live = document.getElementById('live');
live.textContent = 'snapshot'; live.className = ''; live.style.color = 'var(--ink-faint)';
`;
writeFileSync(outPath, assemble(boot, { renderInline: renderJs }));
console.log(`\n  ✓ wrote ${outPath} (static snapshot)\n`);

export function report(data, s, errors, warnings) {
  console.log(`\nWBS: ${data._meta?.project ?? '(untitled)'}  v${data._meta?.version ?? '?'}`);
  console.log(`  items: ${s.items} (${s.stories} stories, ${s.enablers} enablers)   points: ${s.points}`);
  console.log(`  histogram: ${Object.entries(s.histogram).map(([p, n]) => `${p}:${n}`).join('  ')}`);
  for (const [id, m] of Object.entries(s.byModule))
    console.log(`  ${id} ${m.name}: ${m.items} items, ${m.points} pts`);

  const dep = dependencyAnalysis(data);
  console.log(`\n  dependencies: ${dep.edges.length} resolved · ${dep.crossModule.length} cross-module · ${dep.external.length} external-flag(s) · ${dep.cycles.length} cycle(s)`);
  if (dep.crossModule.length)
    console.log('  cross-module blockers:\n' + dep.crossModule.map((e) => `    - ${e.from} (${e.fromMod}) ⟶ blocked by ${e.to} (${e.toMod})`).join('\n'));
  if (dep.external.length)
    console.log('  unresolved external flags (reconcile must resolve):\n' + dep.external.map((e) => `    - ${e.from}: needs "${e.needs}"${e.likely_module ? ` [~${e.likely_module}]` : ''}`).join('\n'));
  if (dep.cycles.length)
    console.log('  ✗ cycles:\n' + dep.cycles.map((c) => `    - ${c.join(' → ')}`).join('\n'));

  if (warnings.length) console.log(`\n  ⚠ ${warnings.length} warning(s):\n` + warnings.map((w) => `    - ${w}`).join('\n'));
  if (errors.length) console.error(`\n  ✗ ${errors.length} error(s):\n` + errors.map((e) => `    - ${e}`).join('\n'));
}
