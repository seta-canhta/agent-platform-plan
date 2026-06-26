/* Browser-side WBS renderer — cyanotype blueprint edition. Plain script
   (no modules). Exposes window.WBS.renderWBS(data, stats). D3 v7 required. */
(function () {
  const C = {
    ink:'#1c2738', dim:'#5a6b82', faint:'#94a3b8',
    line:'rgba(40,72,116,0.16)', glass:'#ffffff', cyan:'#2563eb',
    done:'#16a34a', 'in-progress':'#d97706', blocked:'#dc2626',
    'not-started':'#64748b', 'out-of-scope':'#7c3aed', enabler:'#7c3aed',
  };
  const ENABLER = C.enabler;
  const RECT_W=232, RECT_H_P=64, RECT_H_US=52, RECT_RX=10, H_GAP=64, V_GAP=12, STRIP_W=4, PAD_L=15;

  const statusColor = s => C[s] || C['not-started'];
  const nodeColor = d => d.data.type==='enabler' ? ENABLER : statusColor(d.data.status);
  const trunc = (s,n) => s && s.length>n ? s.slice(0,n-1)+'…' : (s||'');
  const isItem = d => d.data.type==='story' || d.data.type==='enabler';
  const cardH = d => isItem(d) ? RECT_H_US : RECT_H_P;
  const isModule = d => d.data.type==='module';

  let itemsById = {};   // id → item node, for resolving dependency links
  let screenIndex = null;   // { byItem, byScreen } from screens/index.json — item id → png

  // Resolve an item's captured screenshot filename (null if none / not captured).
  function shotFor(dd){
    if (!screenIndex || !dd) return null;
    return (screenIndex.byItem && screenIndex.byItem[dd.id])
        || (screenIndex.byScreen && screenIndex.byScreen[dd.id]) || null;
  }

  // Builds the detail HTML for a node's data — shared by the hover tooltip and the
  // click modal. `withShot` adds the related-screen screenshot (modal only; the
  // hover tooltip stays compact/text-only).
  // The read-only meta of an item (notes / roles / dependencies / external needs) —
  // shared by the read-only detail and the in-place edit view. The screenshot is
  // rendered separately (shotHTML) so the Edit button can sit between meta and screen.
  function itemTailHTML(dd){
    let h='';
    if (dd.notes) h += '<div class="tt-meta">📌 '+dd.notes+'</div>';
    if (dd.roles && dd.roles.length) h += '<div class="tt-meta">◢ '+dd.roles.join(' · ')+'</div>';
    if (dd.deps && dd.deps.length){
      const parts = dd.deps.map(x => {
        const cross = dd.crossDeps&&dd.crossDeps.indexOf(x)>=0 ? ' ⤴' : '';
        return itemsById[x] ? '<a class="dep-link" data-dep="'+x+'">'+x+'</a>'+cross : x+cross;
      });
      h += '<div class="tt-meta" style="color:'+(dd.crossBlocked?C.blocked:C.dim)+'">⛓ blocked by '+parts.join(', ')+(dd.crossDeps&&dd.crossDeps.length?'  · ⤴ cross-module':'')+'</div>';
    }
    if (dd.blocks && dd.blocks.length){
      const parts = dd.blocks.map(x => {
        const cross = dd.crossBlocks&&dd.crossBlocks.indexOf(x)>=0 ? ' ⤴' : '';
        return (itemsById[x] ? '<a class="dep-link" data-dep="'+x+'">'+x+'</a>' : x)+cross;
      });
      h += '<div class="tt-meta" style="color:'+C.dim+'">⛔ blocks '+parts.join(', ')+(dd.crossBlocks&&dd.crossBlocks.length?'  · ⤴ cross-module':'')+'</div>';
    }
    if (dd.ext && dd.ext.length)
      h += '<div class="tt-meta" style="color:'+C.blocked+'">⚠ external need: '+dd.ext.map(e=>e.needs+(e.likely_module?' ['+e.likely_module+']':'')).join(' · ')+'</div>';
    return h;
  }

  // The RELATED SCREEN screenshot block (modal only; '' when no shot was captured).
  function shotHTML(dd){
    const shot = shotFor(dd);
    if (!shot) return '';
    return '<div class="tt-shot-wrap"><b class="tt-shot-h">RELATED SCREEN</b>'
      + '<a href="screens/'+shot+'" target="_blank" rel="noopener" title="open full screenshot in a new tab">'
      + '<img class="tt-shot" src="screens/'+shot+'" loading="lazy" alt="Related mockup screen for '+dd.id+'"></a></div>';
  }

  function detailHTML(dd, withShot){
    let h='<div class="tt-id">'+dd.id+'</div><div class="tt-name">'+dd.name+'</div>';
    if (isItem({data:dd})){
      const c = dd.type==='enabler'?ENABLER:statusColor(dd.status);
      h += '<div class="tt-badge" style="color:'+c+'">'+dd.type.toUpperCase()+' · SP '+dd.sp+' · '+(dd.status||'')+'</div>';
      if (dd.story) h += '<div class="tt-story">'+dd.story+'</div>';
      if (dd.ac && dd.ac.length) h += '<div class="tt-ac"><b>Acceptance</b><ul>'+dd.ac.map(a=>'<li>'+a+'</li>').join('')+'</ul></div>';
      h += itemTailHTML(dd) + (withShot ? shotHTML(dd) : '');
    } else {
      if (dd.description) h += '<div class="tt-story">'+dd.description+'</div>';
      if (dd.total_us) h += '<div class="tt-meta">Σ '+dd.total_us+' items · '+dd.total_sp+' pts</div>';
      if (dd.roles && dd.roles.length) h += '<div class="tt-meta">◢ '+dd.roles.join(' · ')+'</div>';
    }
    return h;
  }

  // ── item comments (stored in comments.json; posting is live-mode only) ───
  let commentsByItem = {};   // itemId → [ {id,text,author,state,created,updated,agent_note} ]
  let liveMode = false;      // true only when served by serve.mjs (enables the post UI)
  const draft = {};          // itemId → in-progress comment text (survives live re-renders)
  const CM_STATES = ['open', 'resolved', 'unresolved', 'skip'];

  const esc = s => (s==null?'':String(s)).replace(/[&<>"]/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[m]));
  function fmtTime(iso){
    const d = new Date(iso); if (isNaN(d)) return '';
    return d.toLocaleDateString(undefined,{month:'short',day:'numeric'}) + ' ' + d.toLocaleTimeString(undefined,{hour:'2-digit',minute:'2-digit'});
  }

  function commentItemHTML(itemId, c){
    const cls = 'cm-' + c.state;
    let h = '<div class="cm-item '+cls+'" data-cid="'+c.id+'">';
    h += '<div class="cm-meta"><span class="cm-badge '+cls+'">'+c.state+'</span>'
       + '<span class="cm-author">'+esc(c.author||'you')+'</span>'
       + '<span class="cm-time">'+fmtTime(c.created)+'</span></div>';
    h += '<div class="cm-text">'+esc(c.text)+'</div>';
    if (c.agent_note) h += '<div class="cm-agent">↳ '+esc(c.agent_note)+'</div>';
    if (liveMode){
      h += '<div class="cm-actions">';
      if (c.state!=='skip') h += '<button class="cm-act" data-act="skip" data-item="'+itemId+'" data-cid="'+c.id+'">skip</button>';
      if (c.state!=='open') h += '<button class="cm-act" data-act="open" data-item="'+itemId+'" data-cid="'+c.id+'">reopen</button>';
      h += '<button class="cm-act cm-del" data-act="delete" data-item="'+itemId+'" data-cid="'+c.id+'">delete</button>';
      h += '</div>';
    }
    return h + '</div>';
  }

  function commentsHTML(itemId){
    const list = commentsByItem[itemId] || [];
    const n = { open:0, resolved:0, unresolved:0, skip:0 };
    list.forEach(c => { if (n[c.state]!=null) n[c.state]++; });
    let h = '<div class="cm-wrap"><div class="cm-head"><b class="cm-h">COMMENTS</b><span class="cm-summary">'
      + CM_STATES.map(s => '<span class="cm-count cm-'+s+(n[s]?'':' z')+'">'+n[s]+' '+s+'</span>').join('')
      + '</span></div>';
    h += list.length ? '<div class="cm-list">'+list.map(c=>commentItemHTML(itemId,c)).join('')+'</div>'
                     : '<div class="cm-empty">No comments yet.</div>';
    if (liveMode)
      h += '<div class="cm-form"><textarea class="cm-input" rows="2" placeholder="Add a comment for the review agent…"></textarea>'
         + '<button class="cm-add" data-item="'+itemId+'">Add comment</button></div>';
    return h + '</div>';
  }

  // POST an add/setState/delete op; the server writes comments.json, which fires
  // the file-watch → SSE → re-render (same path wbs.json edits use).
  function postComment(payload){
    return fetch('/comments', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(payload) })
      .then(r => r.json())
      .then(res => { if (res && res.error) throw new Error(res.error); return res; })
      .catch(e => { flash('✗ '+e.message); throw e; });
  }

  // ── inline item editing (live mode only) ────────────────────────────────
  let editing = null;   // id of the item being edited in place (suppresses SSE rebuilds)
  const acRow = a => '<div class="ed-ac-row"><input type="text" class="ed-ac-input" value="'+esc(a)+'"><button class="ed-ac-del" type="button" title="remove">×</button></div>';
  // Edit view: the SAME top fields as the read-only detail, but rendered as inputs in
  // place (no duplicated read-only copy). The tail (notes/deps/screenshot) stays read-only.
  function editDetailHTML(dd){
    const sel = (cur, opts) => opts.map(o => '<option value="'+o+'"'+(String(o)===String(cur)?' selected':'')+'>'+o+'</option>').join('');
    const ac = dd.ac && dd.ac.length ? dd.ac : [''];
    let h = '<div class="tt-id">'+dd.id+' · editing</div>';
    h += '<div class="ed-field"><label>Title</label><input class="ed-title" type="text" value="'+esc(dd.name)+'"></div>';
    h += '<div class="ed-grid">'
       +   '<div class="ed-field"><label>Status</label><select class="ed-status">'+sel(dd.status,['not-started','in-progress','done','blocked'])+'</select></div>'
       +   '<div class="ed-field"><label>Story points</label><select class="ed-sp">'+sel(dd.sp,[1,2,3,5,8,13])+'</select></div>'
       + '</div>';
    h += '<div class="ed-field"><label>Story</label><textarea class="ed-story" rows="4">'+esc(dd.story)+'</textarea></div>';
    h += '<div class="ed-field"><label>Acceptance criteria</label><div class="ed-ac">'
       +   ac.map(acRow).join('') + '<button class="ed-ac-add" type="button">+ add criterion</button></div></div>';
    h += itemTailHTML(dd);          // notes / roles / deps stay read-only
    h += '<div class="ed-actions"><button class="ed-save">Save changes</button><button class="ed-cancel">Cancel</button></div>';
    h += shotHTML(dd);              // related screen below the editor
    return h;
  }
  function postItem(id, patch){
    return fetch('/item', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ id, patch }) })
      .then(r => r.json())
      .then(res => { if (res && res.error) throw new Error(res.error); return res; })
      .catch(e => { flash('✗ '+e.message); throw e; });
  }

  // Modal: a pinned, dismissable view of a node's detail (same content as the hover tooltip).
  // Modal state is reflected in the URL hash (#item=<id>) so views are shareable and the
  // browser back/forward buttons walk the navigation chain.
  function showModalUI(dd){
    const back = document.getElementById('modal-back');
    const body = document.getElementById('modal-body');
    if (!back || !body) return;
    if (editing && editing !== dd.id) editing = null;   // navigated to a different item
    // While editing this item in place, don't rebuild — preserve in-progress edits.
    if (editing === dd.id && body.dataset.itemId === dd.id && body.querySelector('.ed-title')){
      back.classList.add('visible'); return;
    }
    // Preserve any in-progress comment draft + caret across live SSE re-renders.
    const ta = body.querySelector('.cm-input');
    if (ta && body.dataset.itemId) draft[body.dataset.itemId] = ta.value;
    const hadFocus = ta && document.activeElement === ta;
    const selS = ta ? ta.selectionStart : 0, selE = ta ? ta.selectionEnd : 0;
    body.dataset.itemId = dd.id;
    const item = isItem({data:dd});
    // In edit mode the editable top REPLACES the read-only detail (no duplicate).
    // Read-only: detail (no shot) → Edit button → related screen, so the button
    // sits just above the screenshot.
    const top = (liveMode && item && editing === dd.id)
      ? editDetailHTML(dd)
      : detailHTML(dd, false)
        + (liveMode && item ? '<button class="ed-toggle">✎ Edit fields</button>' : '')
        + (item ? shotHTML(dd) : '');
    body.innerHTML = top + (item ? commentsHTML(dd.id) : '');
    const ta2 = body.querySelector('.cm-input');
    if (ta2){ ta2.value = draft[dd.id] || ''; if (hadFocus){ ta2.focus(); try { ta2.setSelectionRange(selS, selE); } catch {} } }
    back.classList.add('visible');
  }
  function hideModalUI(){
    editing = null;
    const back = document.getElementById('modal-back');
    if (back) back.classList.remove('visible');
  }
  // Render the modal that the current URL describes (called on load, hashchange, back/forward).
  function syncModalFromHash(){
    const m = /^#item=(.+)$/.exec(location.hash || '');
    const dd = m && itemsById[decodeURIComponent(m[1])];
    if (dd) showModalUI(dd); else hideModalUI();
  }
  function openModal(dd){
    if (!dd) return;
    const want = '#item=' + encodeURIComponent(dd.id);
    if (location.hash === want) showModalUI(dd);   // same target: just (re)render
    else location.hash = want;                     // triggers hashchange → syncModalFromHash
  }
  function closeModal(){
    if (location.hash) history.pushState(null, '', location.pathname + location.search);
    hideModalUI();
  }
  if (typeof document !== 'undefined' && !document.body.dataset.modalWired){
    document.body.dataset.modalWired = '1';
    document.addEventListener('click', e => {
      const t = e.target;
      const link = t && t.closest && t.closest('.dep-link');
      if (link){ openModal(itemsById[link.dataset.dep]); return; }
      const add = t && t.closest && t.closest('.cm-add');
      if (add){
        const item = add.dataset.item;
        const box = add.closest('.cm-form').querySelector('.cm-input');
        const text = (box.value || '').trim();
        if (!text) return;
        add.disabled = true;
        postComment({ op:'add', item_id:item, text })
          .then(() => { draft[item] = ''; box.value = ''; flash('comment added'); })
          .catch(()=>{}).finally(() => { add.disabled = false; });
        return;
      }
      const act = t && t.closest && t.closest('.cm-act');
      if (act){
        const op = act.dataset.act, item = act.dataset.item, cid = act.dataset.cid;
        const payload = op==='delete' ? { op:'delete', item_id:item, comment_id:cid }
                                      : { op:'setState', item_id:item, comment_id:cid, state:op };
        postComment(payload).then(()=>flash(op==='delete'?'comment deleted':'marked '+op)).catch(()=>{});
        return;
      }
      const curId = () => { const b = document.getElementById('modal-body'); return b && b.dataset.itemId; };
      if (t && t.closest && t.closest('.ed-toggle')){ editing = curId(); showModalUI(itemsById[editing]); return; }
      if (t && t.closest && t.closest('.ed-cancel')){ const id = curId(); editing = null; showModalUI(itemsById[id]); return; }
      if (t && t.closest && t.closest('.ed-ac-add')){ t.closest('.ed-ac-add').insertAdjacentHTML('beforebegin', acRow('')); return; }
      if (t && t.closest && t.closest('.ed-ac-del')){ const r = t.closest('.ed-ac-row'); if (r) r.remove(); return; }
      const save = t && t.closest && t.closest('.ed-save');
      if (save){
        const id = curId(), body = document.getElementById('modal-body');
        const patch = {
          status: body.querySelector('.ed-status').value,
          story_points: Number(body.querySelector('.ed-sp').value),
          title: body.querySelector('.ed-title').value,
          story: body.querySelector('.ed-story').value,
          acceptance_criteria: [...body.querySelectorAll('.ed-ac-input')].map(i => i.value.trim()).filter(Boolean),
        };
        save.disabled = true;
        postItem(id, patch).then(() => { editing = null; flash('saved'); }).catch(()=>{}).finally(() => { save.disabled = false; });
        return;
      }
      if (t && (t.id === 'modal-back' || t.id === 'modal-close')) closeModal();
    });
    // Keep the draft in sync so an SSE re-render never loses half-typed text.
    document.addEventListener('input', e => {
      if (e.target && e.target.classList && e.target.classList.contains('cm-input')){
        const body = document.getElementById('modal-body');
        if (body && body.dataset.itemId) draft[body.dataset.itemId] = e.target.value;
      }
    });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
    window.addEventListener('hashchange', syncModalFromHash);
  }

  function wbsToHierarchy(data){
    const root = { id:'root', name:data._meta.project, status:data._meta.status||'in-progress', type:'root', children:[] };
    const idMod = {}, flatItems = [];
    itemsById = {};
    for (const mod of data.modules||[]){
      const modNode = { id:mod.id, name:mod.name, description:mod.description||'', status:mod.status||'not-started', type:'module', children:[] };
      for (const sub of (mod.sub_modules||[])){
        const subNode = { id:sub.id, name:sub.name, description:sub.description||'', status:sub.status||'not-started', type:'submodule', children:[] };
        for (const screen of (sub.screens||[])){
          const items = (screen.items||[]).map(it => {
            const node = {
              id:it.id, name:it.title, type:it.type, story:it.story||'', status:it.status||'not-started',
              sp:it.story_points||0, roles:it.roles||[], ac:it.acceptance_criteria||[],
              deps:it.dependencies||[], ext:(it.external_deps||[]).map(e=> typeof e==='string'?{needs:e}:e), notes:it.notes||'',
              mockup: it.mockup_ref || screen.mockup_ref || null, _mod:mod.id
            };
            idMod[it.id] = mod.id; flatItems.push(node); itemsById[it.id] = node;
            return node;
          });
          subNode.children.push({ id:screen.id, name:screen.name, description:screen.description||'', status:screen.status||'not-started',
            type:'screen', roles:screen.roles||[], children: items.length?items:undefined });
        }
        if (!subNode.children.length) delete subNode.children;
        modNode.children.push(subNode);
      }
      if (!modNode.children.length) delete modNode.children;
      root.children.push(modNode);
    }
    // classify blockers: cross-module if a resolved dep lives in another module, or any external flag exists
    for (const it of flatItems){
      it.crossDeps = it.deps.filter(d => idMod[d] && idMod[d] !== it._mod);
      it.blocked = it.deps.length > 0 || it.ext.length > 0;
      it.crossBlocked = it.crossDeps.length > 0 || it.ext.length > 0;
    }
    // reverse edges: for each item, which items it blocks (the inverse of `deps`).
    const blockMap = {};
    for (const it of flatItems)
      for (const d of it.deps) (blockMap[d] = blockMap[d] || []).push(it.id);
    for (const it of flatItems){
      it.blocks = blockMap[it.id] || [];
      it.crossBlocks = it.blocks.filter(b => idMod[b] && idMod[b] !== it._mod);
    }
    const oosNode = (o) => ({ id:o.id, name:o.name, description:o.reason||'', status:'out-of-scope', type:'oos',
      children: (o.children && o.children.length) ? o.children.map(oosNode) : undefined });
    for (const oos of (data.out_of_scope||[]))
      root.children.push(oosNode(oos));
    (function annotate(n){
      if (isItem({data:n})){ n.total_sp=n.sp; n.total_us=1; n.done_us=n.status==='done'?1:0; return; }
      if (!n.children){ n.total_sp=0; n.total_us=0; n.done_us=0; return; }
      n.children.forEach(annotate);
      n.total_sp=n.children.reduce((a,c)=>a+(c.total_sp||0),0);
      n.total_us=n.children.reduce((a,c)=>a+(c.total_us||0),0);
      n.done_us =n.children.reduce((a,c)=>a+(c.done_us||0),0);
    })(root);
    return root;
  }

  function renderHeader(data, S){
    const $ = id => document.getElementById(id);
    $('title').innerHTML = data._meta.project + '<span class="v">v' + (data._meta.version||'') + '</span>';
    $('s-items').innerHTML = S.items + '<small>' + S.stories + ' story · ' + S.enablers + ' enabler</small>';
    $('s-points').textContent = S.points;
    const blk = $('s-blockers');
    if (blk){ const x = S.crossModuleDeps||0, f = S.externalFlags||0;
      blk.innerHTML = (x+f) + '<small>' + x + ' x-mod · ' + f + ' open</small>';
      blk.style.color = (x+f) ? 'var(--block)' : 'var(--ink)';
    }
    const maxH = Math.max(1, ...Object.values(S.histogram));
    $('hist').innerHTML = Object.entries(S.histogram)
      .map(([p,n]) => '<div class="bar" style="height:'+Math.round(3+18*n/maxH)+'px" title="'+p+' pt × '+n+'"><span>'+p+'</span></div>').join('');
  }

  const collapsed = new Set(), expanded = new Set();
  let lastTransform = null, firstRender = true;

  function render(hierarchyData){
    const container = document.getElementById('svg-container');
    const H = container.clientHeight;
    const svg = d3.select('#tree-svg'); svg.selectAll('*').remove();

    const defs = svg.append('defs');
    const grad = defs.append('linearGradient').attr('id','linkgrad').attr('gradientUnits','userSpaceOnUse');
    grad.append('stop').attr('offset','0%').attr('stop-color', C.cyan).attr('stop-opacity', 0.05);
    grad.append('stop').attr('offset','100%').attr('stop-color', C.cyan).attr('stop-opacity', 0.45);

    const g = svg.append('g');
    const zoom = d3.zoom().scaleExtent([0.04,3]).on('zoom', e => { g.attr('transform', e.transform); lastTransform = e.transform; });
    svg.call(zoom);
    const root = d3.hierarchy(hierarchyData);
    root.each(d => {
      const id = d.data.id, defaultCollapsed = d.depth >= 3;
      const shouldCollapse = expanded.has(id) ? false : (collapsed.has(id) || defaultCollapsed);
      if (shouldCollapse && d.children){ d._children = d.children; d.children = null; }
    });
    const treeLayout = d3.tree().nodeSize([Math.max(RECT_H_P,RECT_H_US)+V_GAP, RECT_W+H_GAP]);
    const tooltip = document.getElementById('tooltip');
    const linkPath = d => { const sx=d.source.y+RECT_W/2, sy=d.source.x, tx=d.target.y-RECT_W/2, ty=d.target.x, mx=(sx+tx)/2;
      return 'M'+sx+','+sy+' C'+mx+','+sy+' '+mx+','+ty+' '+tx+','+ty; };

    let initial = firstRender;
    function update(source){
      treeLayout(root);
      const nodes=root.descendants(), links=root.links();

      const link = g.selectAll('.link').data(links, d=>d.target.data.id);
      link.exit().remove();
      const le = link.enter().append('path').attr('class','link').attr('d', linkPath).style('opacity',0);
      le.merge(link).transition().duration(initial?600:280).delay(d=> initial ? d.target.depth*55 : 0)
        .attr('d', linkPath).style('opacity',0.5);

      const node = g.selectAll('.node').data(nodes, d=>d.data.id);
      node.exit().transition().duration(220).style('opacity',0).remove();

      const ne = node.enter().append('g').attr('class','node')
        .attr('transform', d=>'translate('+d.y+','+d.x+')').style('opacity', 0)
        .on('click',(ev,d)=>{ ev.stopPropagation();
          const id=d.data.id;
          if (isItem(d)){ openModal(d.data); return; }   // leaf items: open the detail modal
          if (d._children){ d.children=d._children; d._children=null; expanded.add(id); collapsed.delete(id); }
          else if (d.children){ d._children=d.children; d.children=null; collapsed.add(id); expanded.delete(id); }
          update(d); })
        .on('mousemove',(ev,d)=>{
          tooltip.innerHTML=detailHTML(d.data); tooltip.classList.add('visible');
          tooltip.style.left=Math.min(ev.clientX+16, innerWidth-396)+'px';
          tooltip.style.top=Math.max(66, ev.clientY-10)+'px';
        })
        .on('mouseleave',()=>tooltip.classList.remove('visible'));

      const col = d => nodeColor(d);
      // card
      ne.append('rect').attr('class','node-bg').attr('x',-RECT_W/2).attr('y',d=>-cardH(d)/2)
        .attr('width',RECT_W).attr('height',d=>cardH(d)).attr('rx',RECT_RX).attr('fill',C.glass)
        .attr('stroke',d=>d.data.type==='enabler'?ENABLER:C.line).attr('stroke-width',1)
        .attr('stroke-dasharray',d=>d.data.type==='enabler'?'5 4':null)
        .attr('filter','drop-shadow(0 4px 12px rgba(28,46,82,0.12))');
      // status strip (rounded pill)
      ne.append('rect').attr('class','node-strip').attr('x',-RECT_W/2+6).attr('y',d=>-cardH(d)/2+8)
        .attr('width',STRIP_W).attr('height',d=>cardH(d)-16).attr('rx',2).attr('fill',col).attr('pointer-events','none');
      // module/submodule accent node
      ne.append('circle').attr('class','node-pip').attr('cx',RECT_W/2-13).attr('cy',d=>-cardH(d)/2+13).attr('r',3)
        .attr('fill',col).style('display',d=>(d.data.type==='module'||d.data.type==='submodule')?null:'none');

      const tx0 = -RECT_W/2 + STRIP_W + PAD_L;
      // item fields
      ne.append('text').attr('class','node-id i-id').attr('x',tx0).attr('dominant-baseline','middle').style('display',d=>isItem(d)?null:'none');
      ne.append('rect').attr('class','sp-pill').attr('rx',5).attr('height',16).style('display',d=>isItem(d)?null:'none').attr('pointer-events','none');
      ne.append('text').attr('class','node-sp i-sp').attr('text-anchor','middle').attr('dominant-baseline','middle').style('display',d=>isItem(d)?null:'none');
      ne.append('text').attr('class','node-name i-name').attr('x',tx0).attr('dominant-baseline','middle').style('display',d=>isItem(d)?null:'none');
      // parent fields
      ne.append('text').attr('class','node-id p-id').attr('x',tx0).attr('dominant-baseline','middle').style('display',d=>isItem(d)?'none':null);
      ne.append('text').attr('class','node-name p-name').attr('x',tx0).attr('dominant-baseline','middle').style('display',d=>isItem(d)?'none':null);
      const barW = RECT_W-STRIP_W-PAD_L-16;
      ne.append('rect').attr('class','progress-track').attr('x',tx0).attr('width',barW).attr('height',3).attr('rx',1.5).attr('fill','rgba(150,195,235,0.14)').style('display',d=>isItem(d)?'none':null);
      ne.append('rect').attr('class','progress-fill').attr('x',tx0).attr('rx',1.5).attr('height',3).attr('fill',col).style('display',d=>isItem(d)?'none':null);
      ne.append('text').attr('class','node-meta p-pct').attr('x',RECT_W/2-13).attr('text-anchor','end').attr('dominant-baseline','middle').style('display',d=>isItem(d)?'none':null);
      ne.append('text').attr('class','node-expand').attr('x',RECT_W/2-12).attr('text-anchor','end').attr('y',0).attr('dominant-baseline','middle');
      ne.append('text').attr('class','node-blk').attr('text-anchor','end').attr('dominant-baseline','middle').attr('font-size',11).style('display',d=>isItem(d)&&d.data.blocked?null:'none');

      const nu = ne.merge(node);
      nu.transition().duration(initial?600:280).delay(d=> initial ? d.depth*55 + (d.parent?d.parent.children.indexOf(d):0)*18 : 0)
        .attr('transform',d=>'translate('+d.y+','+d.x+')').style('opacity',1);

      nu.select('.node-bg').attr('y',d=>-cardH(d)/2).attr('height',d=>cardH(d))
        .attr('stroke',d=>d.data.type==='enabler'?ENABLER:C.line).attr('stroke-dasharray',d=>d.data.type==='enabler'?'5 4':null);
      nu.select('.node-strip').attr('y',d=>-cardH(d)/2+8).attr('height',d=>cardH(d)-16).attr('fill',col);
      nu.select('.node-pip').attr('cy',d=>-cardH(d)/2+13).attr('fill',col);

      // item
      nu.select('.i-id').attr('y',d=>-cardH(d)/2+16).text(d=>d.data.id);
      nu.select('.i-name').attr('y',d=>-cardH(d)/2+35).text(d=>trunc(d.data.name,30));
      nu.select('.sp-pill')
        .attr('x',RECT_W/2-46).attr('y',d=>-cardH(d)/2+8)
        .attr('width',40).attr('fill',d=>isItem(d)? hexA(col(d),0.16):'none').attr('stroke',d=>isItem(d)?col(d):'none').attr('stroke-width',1).attr('stroke-opacity',0.5);
      nu.select('.i-sp').attr('x',RECT_W/2-26).attr('y',d=>-cardH(d)/2+16).attr('fill',col).text(d=>isItem(d)?'SP '+d.data.sp:'');
      // parent
      nu.select('.p-id').attr('y',d=>-cardH(d)/2+16).text(d=>d.data.id + (d.data.total_sp>0?'   ·   Σ '+d.data.total_sp+' pt':''));
      nu.select('.p-name').classed('is-module',d=>isModule(d)).attr('y',d=>-cardH(d)/2+ (37)).text(d=>trunc(d.data.name,26));
      nu.select('.progress-track').attr('y',d=>cardH(d)/2-14).attr('width',barW);
      nu.select('.progress-fill').attr('y',d=>cardH(d)/2-14).attr('fill',col)
        .attr('width',d=>isItem(d)||!d.data.total_us?0:Math.max(2,barW*d.data.done_us/d.data.total_us));
      nu.select('.p-pct').attr('y',d=>cardH(d)/2-12).text(d=>isItem(d)||!d.data.total_us?'':d.data.done_us+'/'+d.data.total_us);
      nu.select('.node-expand').text(d=>d._children?('＋'+(d._children.length)):'');
      nu.select('.node-blk').attr('x',RECT_W/2-12).attr('y',d=>cardH(d)/2-11)
        .attr('fill',d=>d.data.crossBlocked?C.blocked:C['in-progress'])
        .text(d=> isItem(d)&&d.data.blocked ? '⛓' : '');

      initial = false;
    }
    update(root);
    if (lastTransform && !firstRender) svg.call(zoom.transform, lastTransform);
    else { const t = d3.zoomIdentity.translate(RECT_W/2+40, H/2); svg.call(zoom.transform, t); lastTransform = t; }
    firstRender = false;
  }

  // hex (#rrggbb) → rgba string with alpha
  function hexA(hex, a){
    if (!hex || hex[0] !== '#') return hex;
    const n = parseInt(hex.slice(1),16);
    return 'rgba('+((n>>16)&255)+','+((n>>8)&255)+','+(n&255)+','+a+')';
  }

  function flash(msg){
    let el = document.getElementById('flash');
    if (!el){ el = document.createElement('div'); el.id='flash'; document.body.appendChild(el); }
    el.textContent = msg; el.className = 'show';
    clearTimeout(flash._t); flash._t = setTimeout(()=>el.className='', 1400);
  }

  window.WBS = window.WBS || {};
  Object.assign(window.WBS, {
    renderWBS(data, stats){ renderHeader(data, stats); render(wbsToHierarchy(data)); syncModalFromHash(); },
    renderHeader,
    setScreens(idx){ screenIndex = idx || null; },    // { byItem, byScreen } from screens/index.json
    setComments(map){ commentsByItem = map || {}; },  // itemId → comments[]; from comments.json
    setLive(v){ liveMode = !!v; },                     // enable the post UI (serve.mjs only)
    flash,
  });
})();
