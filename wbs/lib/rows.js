/* WBS row-shaping — the single source of truth for both the table view and the
   Excel export, so the two can never drift. Plain browser script (no modules).
   Exposes window.WBS.toRows(data) → { columns, rows, modules, total }.

   One row per item (story | enabler). Hierarchy (Module ▸ Epic ▸ Screen) is
   carried in columns; a deterministic WBS code (m.s.sc.i, 1-based ordinals)
   gives the outline. modules[] / total carry the subtotals both views render. */
(function () {
  // Column contract — order, header label, kind (drives alignment/width/wrap),
  // and an Excel column width in characters. `kind`: code | text | wide | num | tag.
  const COLUMNS = [
    { key: 'wbs',    label: 'WBS',                 kind: 'code', width: 10 },
    { key: 'module', label: 'Module',              kind: 'text', width: 20 },
    { key: 'epic',   label: 'Epic',                kind: 'text', width: 24 },
    { key: 'screen', label: 'Screen',              kind: 'text', width: 22 },
    { key: 'id',     label: 'Item ID',             kind: 'code', width: 16 },
    { key: 'type',   label: 'Type',                kind: 'tag',  width: 9  },
    { key: 'title',  label: 'Title',               kind: 'text', width: 34 },
    { key: 'story',  label: 'User Story',          kind: 'wide', width: 52 },
    { key: 'ac',     label: 'Acceptance Criteria', kind: 'wide', width: 60 },
    { key: 'sp',     label: 'SP',                  kind: 'num',  width: 5  },
    { key: 'roles',  label: 'Roles',               kind: 'text', width: 22 },
    { key: 'deps',   label: 'Dependencies',        kind: 'text', width: 22 },
    { key: 'notes',  label: 'Notes',               kind: 'wide', width: 40 },
    { key: 'status',   label: 'Status',            kind: 'tag',  width: 13 },
    { key: 'assignee', label: 'Assignee',          kind: 'text', width: 18 },
    { key: 'sprint',   label: 'Sprint',            kind: 'text', width: 14 },
  ];

  const join = (a, sep) => (Array.isArray(a) ? a.filter(Boolean).join(sep) : (a || ''));
  const normExt = (e) => (typeof e === 'string' ? { needs: e } : (e || {}));

  function toRows(data) {
    // id → module id, so a dependency can be flagged cross-module.
    const idMod = {};
    for (const m of data.modules || [])
      for (const sm of m.sub_modules || [])
        for (const sc of sm.screens || [])
          for (const it of sc.items || []) idMod[it.id] = m.id;

    const rows = [];
    const modules = [];
    let gItems = 0, gPoints = 0;

    (data.modules || []).forEach((m, mi) => {
      let modItems = 0, modPoints = 0;
      (m.sub_modules || []).forEach((sm, si) => {
        (sm.screens || []).forEach((sc, ci) => {
          (sc.items || []).forEach((it, ii) => {
            const deps = (it.dependencies || []).map((d) =>
              idMod[d] && idMod[d] !== m.id ? d + ' ⤴' : d);
            const ext = (it.external_deps || []).map(normExt)
              .map((e) => '⚠ ' + e.needs + (e.likely_module ? ' [' + e.likely_module + ']' : ''));
            const crossBlocked =
              (it.dependencies || []).some((d) => idMod[d] && idMod[d] !== m.id) ||
              (it.external_deps || []).length > 0;
            const sp = it.story_points || 0;

            rows.push({
              wbs: `${mi + 1}.${si + 1}.${ci + 1}.${ii + 1}`,
              module: m.name,
              epic: sm.name,
              screen: sc.name,
              id: it.id,
              type: it.type === 'enabler' ? 'Enabler' : 'Story',
              title: it.title || '',
              story: it.story || '',
              ac: join(it.acceptance_criteria, '\n'),
              sp,
              roles: join(it.roles, ', '),
              deps: [...deps, ...ext].join('\n'),
              notes: it.notes || '',
              mockup: it.mockup_ref || sc.mockup_ref || '',
              status: it.status || 'not-started',
              sprint: it.sprint || '',
              assignee: it.assignee || '',
              // --- meta (not a column; drives styling/grouping) ---
              _type: it.type,
              _status: it.status || 'not-started',
              _moduleId: m.id,
              _blocked: (it.dependencies || []).length + (it.external_deps || []).length > 0,
              _crossBlocked: crossBlocked,
            });
            modItems++; modPoints += sp;
          });
        });
      });
      modules.push({ id: m.id, name: m.name, items: modItems, points: modPoints });
      gItems += modItems; gPoints += modPoints;
    });

    return { columns: COLUMNS, rows, modules, total: { items: gItems, points: gPoints } };
  }

  window.WBS = window.WBS || {};
  window.WBS.toRows = toRows;
})();
