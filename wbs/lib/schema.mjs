// WBS v1.0 schema constants + validation + dependency analysis. Pure Node, no deps.
// Mirrors .claude/skills/wbs-breakdown/references/schema.md

export const POINT_SCALE = [1, 2, 3, 5, 8, 13];
export const ITEM_TYPES = ['story', 'enabler'];
export const STATUSES = ['not-started', 'in-progress', 'done', 'blocked'];

export const ID = {
  module:    /^M\d+$/,
  submodule: /^M\d+\.\d+$/,
  screen:    /^M\d+\.\d+\.S\d+$/,
  subscreen: /^M\d+\.\d+\.S\d+\.\d+$/,
  story:     /^US-M\d+\.\d+\.S\d+-\d+$/,
  enabler:   /^EN-M\d+\.\d+-\d+$/,
};

// Walk the tree, collect every item with its parent screen/sub-module/module.
export function* eachItem(data) {
  for (const m of data.modules ?? [])
    for (const sm of m.sub_modules ?? [])
      for (const sc of sm.screens ?? [])
        for (const it of sc.items ?? [])
          yield { item: it, screen: sc, submodule: sm, module: m };
}

// id -> { item, module, submodule, screen }
export function indexById(data) {
  const idx = new Map();
  for (const rec of eachItem(data)) idx.set(rec.item.id, rec);
  return idx;
}

function normalizeExternal(ed) {
  return typeof ed === 'string' ? { needs: ed } : (ed ?? {});
}

// Resolved-dependency edges, cross-module edges, cycles, and unresolved flags.
export function dependencyAnalysis(data) {
  const idx = indexById(data);
  const edges = [], crossModule = [], unresolved = [], external = [];
  for (const { item, module } of eachItem(data)) {
    for (const dep of item.dependencies ?? []) {
      const target = idx.get(dep);
      if (!target) { unresolved.push({ from: item.id, to: dep }); continue; }
      const e = { from: item.id, to: dep, fromMod: module.id, toMod: target.module.id, cross: module.id !== target.module.id };
      edges.push(e);
      if (e.cross) crossModule.push(e);
    }
    for (const ed of item.external_deps ?? [])
      external.push({ from: item.id, fromMod: module.id, ...normalizeExternal(ed) });
  }
  return { edges, crossModule, unresolved, external, cycles: findCycles(edges) };
}

// DFS back-edge detection over resolved dependency edges. Returns id-path cycles.
function findCycles(edges) {
  const adj = new Map();
  for (const e of edges) { if (!adj.has(e.from)) adj.set(e.from, []); adj.get(e.from).push(e.to); }
  const WHITE = 0, GRAY = 1, BLACK = 2, color = new Map(), stack = [], cycles = [];
  const seen = new Set();
  function dfs(u) {
    color.set(u, GRAY); stack.push(u);
    for (const v of adj.get(u) ?? []) {
      if (color.get(v) === GRAY) {
        const cyc = stack.slice(stack.indexOf(v)).concat(v);
        const key = [...cyc].sort().join('>');
        if (!seen.has(key)) { seen.add(key); cycles.push(cyc); }
      } else if ((color.get(v) ?? WHITE) === WHITE) dfs(v);
    }
    stack.pop(); color.set(u, BLACK);
  }
  for (const u of adj.keys()) if ((color.get(u) ?? WHITE) === WHITE) dfs(u);
  return cycles;
}

export function stats(data) {
  let points = 0, stories = 0, enablers = 0, blocked = 0;
  const histogram = Object.fromEntries(POINT_SCALE.map((p) => [p, 0]));
  const byModule = {};
  for (const { item, module } of eachItem(data)) {
    points += item.story_points ?? 0;
    if (item.type === 'enabler') enablers++; else stories++;
    if ((item.dependencies?.length ?? 0) + (item.external_deps?.length ?? 0) > 0) blocked++;
    if (item.story_points in histogram) histogram[item.story_points]++;
    byModule[module.id] ??= { name: module.name, points: 0, items: 0 };
    byModule[module.id].points += item.story_points ?? 0;
    byModule[module.id].items++;
  }
  const dep = dependencyAnalysis(data);
  return {
    points, stories, enablers, items: stories + enablers, blocked, histogram, byModule,
    crossModuleDeps: dep.crossModule.length, externalFlags: dep.external.length, cycles: dep.cycles.length,
  };
}

// Returns { errors:[], warnings:[] }. errors block the build; warnings are advisory.
export function validate(data) {
  const errors = [], warnings = [];
  const ids = new Set();
  const seen = (id, label) => { if (ids.has(id)) errors.push(`duplicate id: ${id} (${label})`); ids.add(id); };
  const check = (cond, msg) => { if (!cond) errors.push(msg); };

  check(data && typeof data === 'object', 'root is not an object');
  check(data?._meta, 'missing _meta');
  check(Array.isArray(data?.modules), 'modules must be an array');

  for (const m of data.modules ?? []) {
    seen(m.id, 'module');
    check(ID.module.test(m.id), `bad module id: ${m.id}`);
    for (const sm of m.sub_modules ?? []) {
      seen(sm.id, 'sub-module');
      check(ID.submodule.test(sm.id), `bad sub-module id: ${sm.id}`);
      check(sm.id.startsWith(m.id + '.'), `sub-module ${sm.id} not under ${m.id}`);
      for (const sc of sm.screens ?? []) {
        seen(sc.id, 'screen');
        check(ID.screen.test(sc.id), `bad screen id: ${sc.id}`);
        const items = sc.items ?? [];
        if (items.length === 0) warnings.push(`coverage: screen ${sc.id} "${sc.name}" has no items`);
        for (const ss of sc.sub_screens ?? []) {
          seen(ss.id, 'sub-screen');
          check(ID.subscreen.test(ss.id), `bad sub-screen id: ${ss.id}`);
        }
        for (const it of items) {
          seen(it.id, 'item');
          check(ITEM_TYPES.includes(it.type), `item ${it.id}: bad type "${it.type}"`);
          const idRe = it.type === 'enabler' ? ID.enabler : ID.story;
          check(idRe.test(it.id), `item ${it.id}: id does not match ${it.type} pattern`);
          check(POINT_SCALE.includes(it.story_points),
            `item ${it.id}: story_points ${it.story_points} not Fibonacci ${POINT_SCALE.join('/')}`);
          check(typeof it.story === 'string' && it.story.length > 0, `item ${it.id}: empty story`);
          check(Array.isArray(it.acceptance_criteria) && it.acceptance_criteria.length > 0,
            `item ${it.id}: needs acceptance_criteria`);
          if (it.status && !STATUSES.includes(it.status))
            warnings.push(`item ${it.id}: unknown status "${it.status}"`);
        }
      }
    }
  }

  const dep = dependencyAnalysis(data);
  for (const u of dep.unresolved) warnings.push(`item ${u.from}: dependency "${u.to}" not found`);
  for (const e of dep.external) warnings.push(`item ${e.from}: unresolved external_dep "${e.needs}" — reconcile should resolve to a real item id`);
  for (const c of dep.cycles) errors.push(`dependency cycle: ${c.join(' → ')}`);

  return { errors, warnings };
}
