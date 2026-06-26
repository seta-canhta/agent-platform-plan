/* Global multi-select filter — shared across mindmap, table and backlog.
   Selection (Status · Assignee · Sprint · Module) persists to localStorage so it
   survives the full-page navigation between the three views ("global" filter).
   Exposes window.WBS.filter: { itemMatches, active, mount, onChange }.
   itemMatches(item, moduleId) is the single predicate every view filters by, so
   the three views can never drift — same contract as rows.js for the table/Excel. */
(function () {
  const KEY = 'wbs.filter.v1';
  const NONE = '__none__';                       // sentinel: "Unassigned" / "No sprint"
  const ALL_FIELDS = ['status', 'assignee', 'sprint', 'module'];   // all filterable dimensions
  const BAR_FIELDS = ['status', 'assignee', 'sprint', 'module'];   // dropdowns; status ALSO togglable via the legend chips
  const LABELS = { status: 'Status', assignee: 'Assignee', sprint: 'Sprint', module: 'Module' };
  const STATUS_OPTS = [['done', 'done'], ['in-progress', 'active'], ['blocked', 'blocked'], ['not-started', 'queued']];

  const esc = (s) => String(s == null ? '' : s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  const sortNat = (a, b) => a.localeCompare(b, undefined, { numeric: true });

  const state = load();
  let _cb = null, _data = null, _wiredDoc = false;

  function load() {
    const base = { status: [], assignee: [], sprint: [], module: [] };
    try {
      const s = JSON.parse(localStorage.getItem(KEY) || '{}');
      for (const f of ALL_FIELDS) if (Array.isArray(s[f])) base[f] = s[f];
    } catch { /* first run / storage unavailable */ }
    return base;
  }
  function save() { try { localStorage.setItem(KEY, JSON.stringify(state)); } catch { /* ignore */ } }

  const active = () => ALL_FIELDS.some((f) => state[f].length);

  // The one predicate. `o` carries status/assignee/sprint; `modId` is its module id.
  function itemMatches(o, modId) {
    if (state.status.length   && !state.status.includes(o.status || 'not-started')) return false;
    if (state.assignee.length && !state.assignee.includes(o.assignee ? o.assignee : NONE)) return false;
    if (state.sprint.length   && !state.sprint.includes(o.sprint ? o.sprint : NONE)) return false;
    if (state.module.length   && !state.module.includes(modId)) return false;
    return true;
  }

  // Option lists [value,label], derived from the items actually present.
  function options(data) {
    const asg = new Set(), spr = new Set(); let unAsg = false, unSpr = false;
    for (const m of data.modules || [])
      for (const sm of m.sub_modules || [])
        for (const sc of sm.screens || [])
          for (const it of sc.items || []) {
            if (it.assignee) asg.add(it.assignee); else unAsg = true;
            if (it.sprint) spr.add(it.sprint); else unSpr = true;
          }
    return {
      status: STATUS_OPTS,
      assignee: [...[...asg].sort(sortNat).map((a) => [a, a]), ...(unAsg ? [[NONE, 'Unassigned']] : [])],
      sprint: [...[...spr].sort(sortNat).map((s) => [s, s]), ...(unSpr ? [[NONE, 'No sprint']] : [])],
      module: (data.modules || []).map((m) => [m.id, m.name]),
    };
  }

  const btnLabel = (f) => LABELS[f] + ': ' + (state[f].length || 'All');

  // Header readouts reflect the filtered set, so the count agrees with each view.
  function applyCounts(data) {
    let items = 0, stories = 0, enablers = 0, points = 0;
    for (const m of data.modules || [])
      for (const sm of m.sub_modules || [])
        for (const sc of sm.screens || [])
          for (const it of sc.items || []) {
            if (!itemMatches(it, m.id)) continue;
            items++; points += it.story_points || 0;
            if (it.type === 'enabler') enablers++; else stories++;
          }
    const si = document.getElementById('s-items'), sp = document.getElementById('s-points');
    if (si) si.innerHTML = items + '<small>' + stories + ' story · ' + enablers + ' enabler</small>';
    if (sp) sp.textContent = points;
  }

  function fire() {
    save();
    if (_data) applyCounts(_data);
    if (_cb) _cb();
  }

  // Build the dropdown bar into #filters; rebuilt on every renderHeader (state is
  // held in localStorage, so a rebuild keeps the user's selection).
  function mount(data) {
    _data = data;
    const host = document.getElementById('filters');
    if (!host) return;
    const opts = options(data);
    host.innerHTML = BAR_FIELDS.map((f) => {
      const checks = opts[f].map(([v, l]) =>
        `<label class="flt-opt"><input type="checkbox" value="${esc(v)}"${state[f].includes(v) ? ' checked' : ''}><span>${esc(l)}</span></label>`).join('');
      return `<div class="flt${state[f].length ? ' on' : ''}" data-field="${f}">`
        + `<button type="button" class="flt-btn">${esc(btnLabel(f))}<i>▾</i></button>`
        + `<div class="flt-pop">${checks || '<div class="flt-empty">none</div>'}`
        + `<button type="button" class="flt-clear">Clear</button></div></div>`;
    }).join('');

    host.querySelectorAll('.flt').forEach((el) => {
      const field = el.dataset.field;
      const btn = el.querySelector('.flt-btn');
      const sync = () => { el.classList.toggle('on', state[field].length > 0); btn.firstChild.textContent = btnLabel(field); };
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const open = el.classList.contains('open');
        host.querySelectorAll('.flt.open').forEach((o) => o.classList.remove('open'));
        if (!open) el.classList.add('open');
      });
      el.querySelector('.flt-pop').addEventListener('click', (e) => e.stopPropagation());
      el.querySelectorAll('input[type=checkbox]').forEach((cb) => cb.addEventListener('change', () => {
        const arr = state[field], i = arr.indexOf(cb.value);
        if (cb.checked) { if (i < 0) arr.push(cb.value); } else if (i >= 0) arr.splice(i, 1);
        sync(); fire();
      }));
      el.querySelector('.flt-clear').addEventListener('click', () => {
        state[field] = [];
        el.querySelectorAll('input[type=checkbox]').forEach((cb) => { cb.checked = false; });
        sync(); fire();
      });
    });

    if (!_wiredDoc) {                              // one outside-click handler closes any open popover
      document.addEventListener('click', () => host.querySelectorAll('.flt.open').forEach((o) => o.classList.remove('open')));
      _wiredDoc = true;
    }
    applyCounts(data);
  }

  function onChange(cb) { _cb = cb; }              // the active view registers its redraw

  window.WBS = window.WBS || {};
  window.WBS.filter = { itemMatches, active, mount, onChange, state };
})();
