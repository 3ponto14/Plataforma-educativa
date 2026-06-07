/* ════════════════════════════════════════════════════════════════
   VISUAIS SVG — tabelas e gráficos desenhados por código (sem imagens)
   Usados nos exercícios (campo ex.visual) e na Teoria.
   Todas as funções devolvem uma string HTML/SVG pronta a injetar.
   Cores: aceitam um "color" (cor do capítulo) para coerência.
   ════════════════════════════════════════════════════════════════ */
var EduVisual = (function () {
  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }

  // ── Tabela de dados/frequências ──
  // headers: ['Idade','Nº jogadores']  rows: [['14','4'], ['15','6'], …]
  function tabela(headers, rows, color) {
    color = color || 'var(--c2-mid)';
    var h = '<div class="edv-wrap"><table class="edv-table" style="--edv:' + color + '"><thead><tr>';
    headers.forEach(function (hd) { h += '<th>' + esc(hd) + '</th>'; });
    h += '</tr></thead><tbody>';
    rows.forEach(function (r) {
      h += '<tr>';
      r.forEach(function (c) { h += '<td>' + esc(c) + '</td>'; });
      h += '</tr>';
    });
    h += '</tbody></table></div>';
    return h;
  }

  // ── Gráfico de barras ──
  // data: [{label:'A', value:8}, …]
  function barras(data, color, opts) {
    opts = opts || {};
    color = color || '#5a7fa8';
    var W = 300, H = 180, padL = 28, padB = 28, padT = 12, padR = 8;
    var maxV = Math.max.apply(null, data.map(function (d) { return d.value; }));
    if (maxV <= 0) maxV = 1;
    // arredonda o topo da escala para um valor "redondo"
    var step = maxV <= 5 ? 1 : maxV <= 10 ? 2 : maxV <= 20 ? 5 : maxV <= 50 ? 10 : 20;
    var top = Math.ceil(maxV / step) * step;
    var plotW = W - padL - padR, plotH = H - padT - padB;
    var n = data.length, gap = 0.35;
    var bw = plotW / (n + (n - 1) * gap);
    var svg = '<div class="edv-wrap"><svg viewBox="0 0 ' + W + ' ' + H + '" class="edv-svg" role="img">';
    // eixos + grelha horizontal
    for (var g = 0; g <= top; g += step) {
      var gy = padT + plotH - (g / top) * plotH;
      svg += '<line x1="' + padL + '" y1="' + gy + '" x2="' + (W - padR) + '" y2="' + gy + '" stroke="#e5e5e5" stroke-width="1"/>';
      svg += '<text x="' + (padL - 4) + '" y="' + (gy + 3) + '" font-size="8" text-anchor="end" fill="#999">' + g + '</text>';
    }
    // barras
    data.forEach(function (d, i) {
      var x = padL + i * bw * (1 + gap);
      var bh = (d.value / top) * plotH;
      var y = padT + plotH - bh;
      svg += '<rect x="' + x.toFixed(1) + '" y="' + y.toFixed(1) + '" width="' + bw.toFixed(1) + '" height="' + bh.toFixed(1) + '" rx="2" fill="' + color + '"/>';
      svg += '<text x="' + (x + bw / 2).toFixed(1) + '" y="' + (y - 3).toFixed(1) + '" font-size="8" text-anchor="middle" fill="#444" font-weight="600">' + d.value + '</text>';
      svg += '<text x="' + (x + bw / 2).toFixed(1) + '" y="' + (H - padB + 12) + '" font-size="8" text-anchor="middle" fill="#666">' + esc(d.label) + '</text>';
    });
    svg += '<line x1="' + padL + '" y1="' + (padT + plotH) + '" x2="' + (W - padR) + '" y2="' + (padT + plotH) + '" stroke="#bbb" stroke-width="1"/>';
    svg += '</svg></div>';
    return svg;
  }

  // ── Gráfico circular (pizza) ──
  // data: [{label, value}]  — usa percentagens
  function circular(data, palette) {
    palette = palette || ['#5a7fa8', '#4d978f', '#b06a6a', '#a8854d', '#7d6aa8', '#5e9676'];
    var total = data.reduce(function (s, d) { return s + d.value; }, 0) || 1;
    var W = 300, H = 170, cx = 80, cy = 85, r = 65;
    var svg = '<div class="edv-wrap"><svg viewBox="0 0 ' + W + ' ' + H + '" class="edv-svg" role="img">';
    var ang = -90; // começa no topo
    var legend = '';
    data.forEach(function (d, i) {
      var frac = d.value / total;
      var a2 = ang + frac * 360;
      var col = palette[i % palette.length];
      if (frac >= 0.999) {
        svg += '<circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" fill="' + col + '"/>';
      } else {
        var x1 = cx + r * Math.cos(ang * Math.PI / 180), y1 = cy + r * Math.sin(ang * Math.PI / 180);
        var x2 = cx + r * Math.cos(a2 * Math.PI / 180), y2 = cy + r * Math.sin(a2 * Math.PI / 180);
        var large = (a2 - ang) > 180 ? 1 : 0;
        svg += '<path d="M' + cx + ',' + cy + ' L' + x1.toFixed(1) + ',' + y1.toFixed(1) + ' A' + r + ',' + r + ' 0 ' + large + ' 1 ' + x2.toFixed(1) + ',' + y2.toFixed(1) + ' Z" fill="' + col + '"/>';
      }
      var pct = Math.round(frac * 100);
      legend += '<g transform="translate(165,' + (24 + i * 20) + ')"><rect width="11" height="11" rx="2" fill="' + col + '"/><text x="16" y="9" font-size="9" fill="#555">' + esc(d.label) + ' (' + pct + '%)</text></g>';
      ang = a2;
    });
    svg += legend + '</svg></div>';
    return svg;
  }

  // ── Gráfico de linhas (evolução) ──
  // data: [{label, value}]
  function linhas(data, color) {
    color = color || '#5a7fa8';
    var W = 300, H = 170, padL = 28, padB = 26, padT = 12, padR = 10;
    var maxV = Math.max.apply(null, data.map(function (d) { return d.value; }));
    var minV = Math.min.apply(null, data.map(function (d) { return d.value; }));
    if (maxV === minV) maxV = minV + 1;
    var plotW = W - padL - padR, plotH = H - padT - padB;
    var n = data.length;
    function px(i) { return padL + (n === 1 ? plotW / 2 : (i / (n - 1)) * plotW); }
    function py(v) { return padT + plotH - ((v - minV) / (maxV - minV)) * plotH; }
    var svg = '<div class="edv-wrap"><svg viewBox="0 0 ' + W + ' ' + H + '" class="edv-svg" role="img">';
    svg += '<line x1="' + padL + '" y1="' + (padT + plotH) + '" x2="' + (W - padR) + '" y2="' + (padT + plotH) + '" stroke="#bbb"/>';
    var pts = data.map(function (d, i) { return px(i).toFixed(1) + ',' + py(d.value).toFixed(1); }).join(' ');
    svg += '<polyline points="' + pts + '" fill="none" stroke="' + color + '" stroke-width="2"/>';
    data.forEach(function (d, i) {
      svg += '<circle cx="' + px(i).toFixed(1) + '" cy="' + py(d.value).toFixed(1) + '" r="3" fill="' + color + '"/>';
      svg += '<text x="' + px(i).toFixed(1) + '" y="' + (py(d.value) - 6).toFixed(1) + '" font-size="8" text-anchor="middle" fill="#444">' + d.value + '</text>';
      svg += '<text x="' + px(i).toFixed(1) + '" y="' + (H - padB + 12) + '" font-size="8" text-anchor="middle" fill="#666">' + esc(d.label) + '</text>';
    });
    svg += '</svg></div>';
    return svg;
  }

  return { tabela: tabela, barras: barras, circular: circular, linhas: linhas };
})();
