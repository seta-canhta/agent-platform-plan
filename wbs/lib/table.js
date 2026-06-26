/* WBS table view — architect's spec-sheet edition. Plain browser script.
   Exposes window.WBS.renderTable(data) → fills #table-container.
   Search · click-to-sort · module subtotal bands · grand total · status colour.
   Grouping bands show only in natural WBS order; sorting or searching flattens. */
(function () {
  const STATUS = {
    done: '#16a34a', 'in-progress': '#d97706', blocked: '#dc2626',
    'not-started': '#64748b',
  };
  const ENABLER = '#7c3aed';
  const statusColor = (s) => STATUS[s] || STATUS['not-started'];
  const stripColor = (r) => (r._type === 'enabler' ? ENABLER : statusColor(r._status));
  const statusLabel = (s) => ({ 'not-started': 'queued', 'in-progress': 'active' }[s] || s);

  const esc = (s) => String(s == null ? '' : s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const lines = (s) => esc(s).split('\n').filter(Boolean);

  // Per-column-kind cell HTML.
  function cell(r, col) {
    const v = r[col.key];
    const link = '#item=' + encodeURIComponent(r.id);
    if (col.key === 'id') return `<a class="item-link t-code" href="${link}" title="open detail">${esc(v)}</a>`;
    if (col.key === 'title') return `<a class="item-link" href="${link}" title="open detail">${esc(v)}</a>`;
    if (col.key === 'type') {
      const c = r._type === 'enabler' ? ENABLER : 'var(--ink-dim)';
      return `<span class="t-tag" style="color:${c};border-color:${c}">${esc(v)}</span>`;
    }
    if (col.key === 'status') {
      const c = statusColor(r._status);
      return `<span class="t-tag" style="color:${c};border-color:${c}">${esc(statusLabel(r._status))}</span>`;
    }
    if (col.key === 'sp') return `<span class="t-sp">${esc(v)}</span>`;
    if (col.key === 'ac' && v) return `<ul class="t-ac">${lines(v).map((l) => `<li>${l}</li>`).join('')}</ul>`;
    if (col.key === 'deps' && v) {
      return lines(v).map((l) => {
        const warn = /[⤴⚠]/.test(l);
        return `<div class="t-dep${warn ? ' x' : ''}">${l}</div>`;
      }).join('');
    }
    if (col.kind === 'code') return `<span class="t-code">${esc(v)}</span>`;
    if (col.kind === 'wide') return `<div class="t-wide">${esc(v).replace(/\n/g, '<br>')}</div>`;
    return esc(v);
  }

  function renderTable(data) {
    const host = document.getElementById('table-container');
    if (!host) return;
    const { columns, rows, modules, total } = window.WBS.toRows(data);
    const modName = Object.fromEntries(modules.map((m) => [m.id, m]));

    const state = { q: '', sort: null, dir: 1, collapsed: new Set() }; // sort:null ⇒ natural WBS order (grouped)

    host.innerHTML = `
      <div class="t-toolbar">
        <div class="t-search">
          <svg viewBox="0 0 24 24" width="13" height="13" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="2" d="M10 4a6 6 0 1 0 0 12A6 6 0 0 0 10 4zm5 11 5 5"/></svg>
          <input id="t-q" type="text" placeholder="filter id · title · story · role · screen" autocomplete="off" spellcheck="false">
        </div>
        <span class="t-count" id="t-count"></span>
        <span class="t-hint">click a header to sort · click WBS to restore groups</span>
      </div>
      <div class="t-scroll">
        <table class="t-table">
          <thead><tr>${columns.map((c) =>
            `<th data-key="${c.key}" class="th-${c.kind}"><span>${esc(c.label)}</span><i class="sort-i"></i></th>`).join('')}</tr></thead>
          <tbody id="t-body"></tbody>
        </table>
      </div>`;

    const body = host.querySelector('#t-body');
    const count = host.querySelector('#t-count');
    const ncol = columns.length;

    function visibleRows() {
      let rs = rows;
      if (window.WBS.filter && window.WBS.filter.active())
        rs = rs.filter((r) => window.WBS.filter.itemMatches(r, r._moduleId));
      const q = state.q.trim().toLowerCase();
      if (q) rs = rs.filter((r) =>
        (r.id + ' ' + r.title + ' ' + r.story + ' ' + r.roles + ' ' + r.epic + ' ' + r.screen)
          .toLowerCase().includes(q));
      if (state.sort) {
        const k = state.sort, d = state.dir;
        rs = rs.slice().sort((a, b) => {
          let x = a[k], y = b[k];
          if (k === 'sp') return (x - y) * d;
          return String(x).localeCompare(String(y), undefined, { numeric: true }) * d;
        });
      }
      return rs;
    }

    function rowHtml(r) {
      return `<tr class="${r._type === 'enabler' ? 'is-enabler' : ''}">` +
        columns.map((c, i) => {
          const strip = i === 0 ? ` style="box-shadow: inset 3px 0 0 ${stripColor(r)}"` : '';
          return `<td class="td-${c.kind}"${strip}>${cell(r, c)}</td>`;
        }).join('') + '</tr>';
    }

    function bandHtml(m, collapsed) {
      return `<tr class="t-band" data-mod="${esc(m.id)}"><td colspan="${ncol}">` +
        `<div class="t-band-row" title="click to ${collapsed ? 'expand' : 'collapse'}">` +
        `<span class="b-caret">${collapsed ? '▸' : '▾'}</span>` +
        `<span class="b-id">${esc(m.id)}</span><span class="b-name">${esc(m.name)}</span>` +
        `<span class="b-stat">${m.items} items · Σ ${m.points} pt</span></div></td></tr>`;
    }

    function draw() {
      const rs = visibleRows();
      const grouped = !state.sort && !state.q.trim();
      let html = '';
      if (grouped) {
        for (const m of modules) {
          const mr = rs.filter((r) => r._moduleId === m.id);
          if (!mr.length) continue;
          const collapsed = state.collapsed.has(m.id);
          html += bandHtml(m, collapsed) + (collapsed ? '' : mr.map(rowHtml).join(''));
        }
      } else {
        html += rs.map(rowHtml).join('');
      }
      body.innerHTML = html || `<tr><td colspan="${ncol}" class="t-empty">no items match “${esc(state.q)}”</td></tr>`;

      const vItems = rs.length;
      const vPoints = rs.reduce((a, r) => a + (r.sp || 0), 0);
      count.textContent = `${vItems}${vItems !== total.items ? ' / ' + total.items : ''} item${vItems === 1 ? '' : 's'} · Σ ${vPoints} pt`;

      host.querySelectorAll('th').forEach((th) => {
        const on = th.dataset.key === state.sort;
        th.classList.toggle('sorted', on);
        th.querySelector('.sort-i').textContent = on ? (state.dir > 0 ? '▲' : '▼') : '';
      });
    }

    host.querySelector('#t-q').addEventListener('input', (e) => { state.q = e.target.value; draw(); });
    body.addEventListener('click', (e) => {                         // collapse/expand a module band
      const band = e.target.closest && e.target.closest('tr.t-band');
      if (!band) return;
      const id = band.dataset.mod;
      if (state.collapsed.has(id)) state.collapsed.delete(id); else state.collapsed.add(id);
      draw();
    });
    host.querySelectorAll('th').forEach((th) => th.addEventListener('click', () => {
      const k = th.dataset.key;
      if (k === 'wbs') { state.sort = null; state.dir = 1; }       // restore natural grouped order
      else if (state.sort === k) state.dir *= -1;
      else { state.sort = k; state.dir = 1; }
      draw();
    }));

    if (window.WBS.filter) window.WBS.filter.onChange(draw);   // global filter → redraw table
    draw();
  }

  window.WBS = window.WBS || {};
  window.WBS.renderTable = renderTable;
})();
