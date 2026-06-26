/* WBS Backlog view — every item grouped by its sprint, with inline quick-edit of
   status / assignee / sprint right in the row. Plain browser script.
   Exposes window.WBS.renderBacklog(data, { assignees, live }).

   Reuses WBS.toRows (row data), WBS.quickControl (the inline selects) and the
   table view's CSS (.t-*), so the two views stay visually consistent.
   Bands: "Backlog (unscheduled)" first, then each sprint, natural-sorted. */
(function () {
  const ENABLER = '#7c3aed';
  const STATUS = { done: '#16a34a', 'in-progress': '#d97706', blocked: '#dc2626', 'not-started': '#64748b' };
  const statusColor = (s) => STATUS[s] || STATUS['not-started'];
  const esc = (s) => String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

  const COLS = [
    { key: 'id',       label: 'Item ID',  kind: 'code' },
    { key: 'type',     label: 'Type',     kind: 'tag'  },
    { key: 'title',    label: 'Title',    kind: 'text' },
    { key: 'screen',   label: 'Screen',   kind: 'text' },
    { key: 'sp',       label: 'SP',       kind: 'num'  },
    { key: 'roles',    label: 'Roles',    kind: 'text' },
    { key: 'status',   label: 'Status',   kind: 'ctl'  },
    { key: 'assignee', label: 'Assignee', kind: 'ctl'  },
    { key: 'sprint',   label: 'Sprint',   kind: 'ctl'  },
  ];

  // Group rows by sprint string ('' → Backlog). Backlog first, then natural-sorted.
  function group(rows) {
    const map = new Map();
    for (const r of rows) { const k = r.sprint || ''; (map.get(k) || map.set(k, []).get(k)).push(r); }
    const keys = [...map.keys()].sort((a, b) =>
      (a === '' ? -1 : b === '' ? 1 : a.localeCompare(b, undefined, { numeric: true })));
    return keys.map((k) => {
      const rs = map.get(k);
      return { key: k, name: k === '' ? 'Backlog (unscheduled)' : k, rows: rs,
        items: rs.length, points: rs.reduce((a, r) => a + (r.sp || 0), 0) };
    });
  }

  function renderBacklog(data, opts) {
    opts = opts || {};
    const host = document.getElementById('backlog-container');
    if (!host) return;
    const { rows, total } = window.WBS.toRows(data);
    const ctx = { sprints: window.WBS.quickSprints(data), assignees: opts.assignees || [], live: !!opts.live };
    const ncol = COLS.length;
    const state = { q: '', collapsed: new Set() };

    host.innerHTML = `
      <div class="t-toolbar">
        <div class="t-search">
          <svg viewBox="0 0 24 24" width="13" height="13" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="2" d="M10 4a6 6 0 1 0 0 12A6 6 0 0 0 10 4zm5 11 5 5"/></svg>
          <input id="b-q" type="text" placeholder="filter id · title · role · screen · sprint" autocomplete="off" spellcheck="false">
        </div>
        <span class="t-count" id="b-count"></span>
        <span class="t-hint">${ctx.live ? 'set status · assignee · sprint inline — saves live' : 'snapshot — run serve.mjs to edit inline'}</span>
      </div>
      <div class="t-scroll">
        <table class="t-table">
          <thead><tr>${COLS.map((c) => `<th class="th-${c.kind}"><span>${esc(c.label)}</span></th>`).join('')}</tr></thead>
          <tbody id="b-body"></tbody>
        </table>
      </div>`;

    const body = host.querySelector('#b-body');
    const count = host.querySelector('#b-count');

    function cell(r, c) {
      if (c.kind === 'ctl') return window.WBS.quickControl(c.key, r, ctx);
      const link = '#item=' + encodeURIComponent(r.id);
      if (c.key === 'id') return `<a class="item-link t-code" href="${link}" title="open detail">${esc(r.id)}</a>`;
      if (c.key === 'title') return `<a class="item-link" href="${link}" title="open detail">${esc(r.title)}</a>`;
      if (c.key === 'type') {
        const col = r._type === 'enabler' ? ENABLER : 'var(--ink-dim)';
        return `<span class="t-tag" style="color:${col};border-color:${col}">${esc(r.type)}</span>`;
      }
      if (c.key === 'sp') return `<span class="t-sp">${esc(r.sp)}</span>`;
      if (c.kind === 'code') return `<span class="t-code">${esc(r[c.key])}</span>`;
      return esc(r[c.key]);
    }

    function rowHtml(r) {
      const strip = r._type === 'enabler' ? ENABLER : statusColor(r._status);
      return `<tr class="${r._type === 'enabler' ? 'is-enabler' : ''}">` +
        COLS.map((c, i) =>
          `<td class="td-${c.kind}"${i === 0 ? ` style="box-shadow: inset 3px 0 0 ${strip}"` : ''}>${cell(r, c)}</td>`).join('') +
        '</tr>';
    }

    function bandHtml(g, collapsed) {
      return `<tr class="t-band" data-key="${esc(g.key)}"><td colspan="${ncol}">` +
        `<div class="t-band-row" title="click to ${collapsed ? 'expand' : 'collapse'}">` +
        `<span class="b-caret">${collapsed ? '▸' : '▾'}</span>` +
        `<span class="b-name">${esc(g.name)}</span>` +
        `<span class="b-stat">${g.items} item${g.items === 1 ? '' : 's'} · Σ ${g.points} pt</span></div></td></tr>`;
    }

    function visibleRows() {
      let rs = rows;
      if (window.WBS.filter && window.WBS.filter.active())
        rs = rs.filter((r) => window.WBS.filter.itemMatches(r, r._moduleId));
      const q = state.q.trim().toLowerCase();
      if (!q) return rs;
      return rs.filter((r) =>
        (r.id + ' ' + r.title + ' ' + r.story + ' ' + r.roles + ' ' + r.screen + ' ' + (r.sprint || ''))
          .toLowerCase().includes(q));
    }

    function draw() {
      const rs = visibleRows();
      let html = '';
      for (const g of group(rs)) {
        const collapsed = state.collapsed.has(g.key);
        html += bandHtml(g, collapsed) + (collapsed ? '' : g.rows.map(rowHtml).join(''));
      }
      body.innerHTML = html || `<tr><td colspan="${ncol}" class="t-empty">no items match “${esc(state.q)}”</td></tr>`;
      const vItems = rs.length, vPoints = rs.reduce((a, r) => a + (r.sp || 0), 0);
      count.textContent = `${vItems}${vItems !== total.items ? ' / ' + total.items : ''} item${vItems === 1 ? '' : 's'} · Σ ${vPoints} pt`;
    }

    host.querySelector('#b-q').addEventListener('input', (e) => { state.q = e.target.value; draw(); });
    body.addEventListener('click', (e) => {                  // collapse/expand a sprint band
      const band = e.target.closest && e.target.closest('tr.t-band');
      if (!band) return;
      const k = band.dataset.key;
      if (state.collapsed.has(k)) state.collapsed.delete(k); else state.collapsed.add(k);
      draw();
    });

    if (window.WBS.filter) window.WBS.filter.onChange(draw);   // global filter → redraw backlog
    draw();
  }

  window.WBS = window.WBS || {};
  window.WBS.renderBacklog = renderBacklog;
})();
