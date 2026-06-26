/* Shared inline quick-edit controls for status / assignee / sprint — the single
   source of the <select> option HTML AND the change → POST /item wiring, used by
   both the map-view modal (render.js) and the Backlog page (backlog.js).

   Builders are pure (current state is passed in via `ctx = { sprints, assignees,
   live }`); one delegated `change` listener does the save. When ctx.live is false
   (e.g. the static snapshot, which has no server) the controls render disabled and
   never fire. Plain browser script. */
(function () {
  const STATUSES = ['not-started', 'in-progress', 'done', 'blocked'];
  const NEW = '__new__';   // sentinel option value → prompt for a brand-new sprint
  const esc = (s) => (s == null ? '' : String(s)).replace(/[&<>"]/g, (m) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[m]));
  const opt = (v, label, cur) => '<option value="' + esc(v) + '"' + (String(v) === String(cur == null ? '' : cur) ? ' selected' : '') + '>' + esc(label) + '</option>';

  // Distinct non-empty sprint strings across all items, natural-sorted
  // ("Sprint 2" < "Sprint 10"). This derived list IS the set of known sprints.
  function quickSprints(data) {
    const set = new Set();
    for (const m of (data && data.modules) || [])
      for (const sm of m.sub_modules || [])
        for (const sc of sm.screens || [])
          for (const it of sc.items || []) if (it.sprint) set.add(it.sprint);
    return [...set].sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
  }

  // One <select> for `field` ('status' | 'assignee' | 'sprint') bound to item.id.
  // `item` only needs { id, [field] }.
  function quickControl(field, item, ctx) {
    ctx = ctx || {};
    // story_points is carried as `sp` on the modal node and as `sp` on table rows.
    const cur = field === 'story_points'
      ? (item.story_points != null ? item.story_points : (item.sp != null ? item.sp : ''))
      : (item[field] || '');
    let opts = '';
    if (field === 'status') opts = STATUSES.map((s) => opt(s, s, cur)).join('');
    else if (field === 'story_points') opts = [1, 2, 3, 5, 8, 13].map((v) => opt(v, v, cur)).join('');
    else if (field === 'assignee') opts = opt('', '— Unassigned —', cur) + (ctx.assignees || []).map((m) => opt(m, m, cur)).join('');
    else if (field === 'sprint') {
      const sp = ctx.sprints || [];
      opts = opt('', 'Backlog (none)', cur)
        + sp.map((s) => opt(s, s, cur)).join('')
        + (cur && sp.indexOf(cur) < 0 ? opt(cur, cur, cur) : '')   // keep a value not yet in the list
        + '<option value="' + NEW + '">＋ new sprint…</option>';
    }
    return '<select class="qe qe-' + field + '" data-field="' + field + '" data-id="' + esc(item.id) + '" data-cur="' + esc(cur) + '"' + (ctx.live ? '' : ' disabled') + '>' + opts + '</select>';
  }

  // Labelled trio for the modal quick-edit strip.
  function quickControlsHTML(item, ctx) {
    const f = (label, field) => '<div class="qe-field"><label>' + label + '</label>' + quickControl(field, item, ctx) + '</div>';
    return f('Status', 'status') + f('Story points', 'story_points') + f('Assignee', 'assignee') + f('Sprint', 'sprint');
  }

  function postItem(id, patch) {
    return fetch('/item', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ id, patch }) })
      .then((r) => r.json())
      .then((res) => { if (res && res.error) throw new Error(res.error); return res; });
  }

  // Delegated change handler — fires for any enabled .qe select; saves the one
  // changed field via /item. The server validates + writes wbs.json + broadcasts
  // over SSE, so the view re-renders with the new value. Reverts on failure.
  function onChange(e) {
    const sel = e.target;
    if (!sel || !sel.classList || !sel.classList.contains('qe')) return;
    const field = sel.dataset.field, id = sel.dataset.id, prev = sel.dataset.cur || '';
    if (!field || !id) return;
    let value = sel.value;
    if (field === 'sprint' && value === NEW) {
      const name = (window.prompt('New sprint name (e.g. "Sprint 3"):', '') || '').trim();
      if (!name) { sel.value = prev; return; }          // cancelled → restore
      value = name;
    }
    sel.disabled = true;
    postItem(id, { [field]: value })
      .then(() => { if (window.WBS && window.WBS.flash) window.WBS.flash('saved'); })
      .catch((err) => { sel.value = prev; if (window.WBS && window.WBS.flash) window.WBS.flash('✗ ' + err.message); })
      .finally(() => { sel.disabled = false; });
  }

  if (typeof document !== 'undefined' && document.body && !document.body.dataset.qeWired) {
    document.body.dataset.qeWired = '1';
    document.addEventListener('change', onChange);
  }

  window.WBS = window.WBS || {};
  Object.assign(window.WBS, { quickControl, quickControlsHTML, quickSprints });
})();
