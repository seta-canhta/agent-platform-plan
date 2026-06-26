/* App glue — shared by the mindmap page and the table page.
   The two views now live on separate pages (no tabs); this just stashes the
   latest data for the Excel button and wires that button once.
   Plain browser script; depends on WBS.exportExcel. */
(function () {
  let current = null; // latest data — what the Excel button exports

  function setData(data) { current = data; }

  function bindExport() {
    const ex = document.getElementById('btn-export');
    if (ex) ex.addEventListener('click', () => { if (current) window.WBS.exportExcel(current); });
  }

  window.WBS = window.WBS || {};
  Object.assign(window.WBS, { setData, bindExport });
})();
