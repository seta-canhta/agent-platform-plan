/* WBS → styled .xlsx export. Plain browser script. Needs the global `XLSX`
   from the xlsx-js-style CDN bundle (loaded in the page <head>).
   Exposes window.WBS.exportExcel(data). Reuses WBS.toRows() so the spreadsheet
   matches the table view exactly. */
(function () {
  // Blueprint palette (rgb hex, no '#').
  const NAVY = '1F3A5F', ACCENT = '2563EB', BAND = 'E8EEF7', ZEBRA = 'F7F9FC',
        BORDER = 'D7E0EC', INK = '1C2738', WHITE = 'FFFFFF';
  const SCOL = { done: '16A34A', 'in-progress': 'D97706', blocked: 'DC2626', 'not-started': '64748B' };
  const ENABLER = '7C3AED';
  const sColor = (s) => SCOL[s] || SCOL['not-started'];
  const sLabel = (s) => ({ 'not-started': 'queued', 'in-progress': 'active' }[s] || s);

  const edge = { style: 'thin', color: { rgb: BORDER } };
  const allBorders = { top: edge, bottom: edge, left: edge, right: edge };

  function exportExcel(data) {
    if (typeof XLSX === 'undefined') {
      (window.WBS.flash || console.warn)('Excel library not loaded — check your connection');
      return;
    }
    const { columns, rows, modules, total } = window.WBS.toRows(data);
    const ncol = columns.length;
    const ws = {};
    let r = 0;

    const put = (row, col, v, s, t) => {
      ws[XLSX.utils.encode_cell({ r: row, c: col })] =
        { v: v == null ? '' : v, t: t || (typeof v === 'number' ? 'n' : 's'), s };
    };
    const merges = [];
    const rowMeta = [];           // !rows: heights + outline levels

    // ── Title banner ──────────────────────────────────────────
    const meta = data._meta || {};
    const titleTxt = `${meta.project || 'Work Breakdown Structure'}  ·  WBS` +
      (meta.version ? `  ·  v${meta.version}` : '') + (meta.updated ? `  ·  ${meta.updated}` : '');
    put(r, 0, titleTxt, {
      font: { name: 'Arial', sz: 14, bold: true, color: { rgb: WHITE } },
      fill: { patternType: 'solid', fgColor: { rgb: NAVY } },
      alignment: { horizontal: 'left', vertical: 'center' },
    });
    for (let c = 1; c < ncol; c++) put(r, c, '', { fill: { patternType: 'solid', fgColor: { rgb: NAVY } } });
    merges.push({ s: { r, c: 0 }, e: { r, c: ncol - 1 } });
    rowMeta[r] = { hpt: 30 }; r++;

    // ── Header row ────────────────────────────────────────────
    const headerRow = r;
    columns.forEach((col, c) => put(r, c, col.label, {
      font: { name: 'Arial', sz: 10, bold: true, color: { rgb: WHITE } },
      fill: { patternType: 'solid', fgColor: { rgb: ACCENT } },
      alignment: { horizontal: col.kind === 'num' ? 'center' : 'left', vertical: 'center', wrapText: true },
      border: allBorders,
    }));
    rowMeta[r] = { hpt: 22 }; r++;

    // ── Per-module bands + item rows ──────────────────────────
    const cellStyle = (col, r0, isEnabler, zebra) => {
      const base = {
        font: { name: 'Arial', sz: 9, color: { rgb: INK } },
        alignment: {
          horizontal: col.kind === 'num' ? 'center' : 'left',
          vertical: 'top',
          wrapText: col.kind === 'wide' || col.kind === 'text',
        },
        border: allBorders,
      };
      if (zebra) base.fill = { patternType: 'solid', fgColor: { rgb: ZEBRA } };
      if (col.key === 'id' || col.kind === 'code') base.font.name = 'Consolas';
      return base;
    };

    let zebra = false;
    for (const m of modules) {
      const mr = rows.filter((row) => row._moduleId === m.id);
      if (!mr.length) continue;

      // band row (merged, tinted)
      put(r, 0, `${m.id}  ${m.name}`, {
        font: { name: 'Arial', sz: 10, bold: true, color: { rgb: NAVY } },
        fill: { patternType: 'solid', fgColor: { rgb: BAND } },
        alignment: { horizontal: 'left', vertical: 'center' },
        border: { bottom: { style: 'medium', color: { rgb: ACCENT } } },
      });
      for (let c = 1; c < ncol; c++) {
        const last = c === ncol - 1;
        put(r, c, last ? `${m.items} items · Σ ${m.points} pt` : '', {
          font: { name: 'Arial', sz: 9, bold: true, italic: last, color: { rgb: NAVY } },
          fill: { patternType: 'solid', fgColor: { rgb: BAND } },
          alignment: { horizontal: last ? 'right' : 'left', vertical: 'center' },
          border: { bottom: { style: 'medium', color: { rgb: ACCENT } } },
        });
      }
      merges.push({ s: { r, c: 0 }, e: { r, c: ncol - 2 } });
      rowMeta[r] = { hpt: 18 }; r++;
      zebra = false;

      for (const row of mr) {
        columns.forEach((col, c) => {
          const s = cellStyle(col, r, row._type === 'enabler', zebra);
          if (col.key === 'sp') { put(r, c, row.sp, { ...s, numFmt: '0', font: { ...s.font, bold: true } }, 'n'); return; }
          if (col.key === 'type') {
            const cc = row._type === 'enabler' ? ENABLER : '5A6B82';
            put(r, c, row.type, { ...s, font: { ...s.font, bold: true, color: { rgb: cc } }, alignment: { ...s.alignment, horizontal: 'center' } });
            return;
          }
          if (col.key === 'status') {
            const cc = sColor(row._status);
            put(r, c, sLabel(row._status), { ...s, font: { ...s.font, bold: true, color: { rgb: cc } }, alignment: { ...s.alignment, horizontal: 'center' } });
            return;
          }
          put(r, c, row[col.key], s);
        });
        // outline: items nest under the band (collapsible in Excel; ignored if unsupported)
        rowMeta[r] = { level: 1 };
        r++; zebra = !zebra;
      }
    }

    // ── Grand total ───────────────────────────────────────────
    const totStyle = (align, last) => ({
      font: { name: 'Arial', sz: 10, bold: true, italic: !!last, color: { rgb: WHITE } },
      fill: { patternType: 'solid', fgColor: { rgb: NAVY } },
      alignment: { horizontal: align, vertical: 'center' },
      border: { top: { style: 'medium', color: { rgb: NAVY } } },
    });
    put(r, 0, 'TOTAL', totStyle('left'));
    for (let c = 1; c < ncol; c++) {
      const last = c === ncol - 1;
      put(r, c, last ? `${total.items} items · Σ ${total.points} pt` : '', totStyle(last ? 'right' : 'left', last));
    }
    merges.push({ s: { r, c: 0 }, e: { r, c: ncol - 2 } });
    rowMeta[r] = { hpt: 20 }; r++;

    // ── Sheet assembly ────────────────────────────────────────
    ws['!ref'] = XLSX.utils.encode_range({ s: { r: 0, c: 0 }, e: { r: r - 1, c: ncol - 1 } });
    ws['!cols'] = columns.map((c) => ({ wch: c.width }));
    ws['!merges'] = merges;
    ws['!rows'] = rowMeta;
    ws['!autofilter'] = { ref: XLSX.utils.encode_range({ s: { r: headerRow, c: 0 }, e: { r: headerRow, c: ncol - 1 } }) };
    ws['!freeze'] = { xSplit: 0, ySplit: headerRow + 1, topLeftCell: XLSX.utils.encode_cell({ r: headerRow + 1, c: 0 }), activePane: 'bottomLeft', state: 'frozen' };

    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'WBS');

    const safe = (meta.project || 'WBS').replace(/[^A-Za-z0-9]+/g, '-').replace(/^-|-$/g, '');
    const fname = `${safe}-WBS${meta.version ? '-v' + meta.version : ''}.xlsx`;
    XLSX.writeFile(wb, fname);
    (window.WBS.flash || console.log)('exported ' + fname);
  }

  window.WBS = window.WBS || {};
  window.WBS.exportExcel = exportExcel;
})();
