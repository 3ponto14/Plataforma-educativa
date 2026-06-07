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

  // ── Triângulo com lados/ângulos rotulados ──
  // opts: {a, b, c} lados; {A, B, C} ângulos; right:true (retângulo em C)
  function triangulo(opts) {
    opts = opts || {};
    var color = opts.color || '#5a9e94';
    var W = 260, H = 170;
    // coordenadas base de um triângulo (em SVG, y cresce para baixo)
    var P = opts.right
      ? { ax: 40, ay: 130, bx: 210, by: 130, cx: 40, cy: 40 }   // retângulo em A (canto inf esq)
      : { ax: 30, ay: 135, bx: 230, by: 135, cx: 130, cy: 30 }; // genérico
    var svg = '<div class="edv-wrap"><svg viewBox="0 0 ' + W + ' ' + H + '" class="edv-svg" role="img">';
    svg += '<polygon points="' + P.ax + ',' + P.ay + ' ' + P.bx + ',' + P.by + ' ' + P.cx + ',' + P.cy + '" fill="' + color + '22" stroke="' + color + '" stroke-width="2"/>';
    // marca de ângulo reto
    if (opts.right) svg += '<path d="M' + (P.ax + 14) + ',' + P.ay + ' L' + (P.ax + 14) + ',' + (P.ay - 14) + ' L' + P.ax + ',' + (P.ay - 14) + '" fill="none" stroke="' + color + '" stroke-width="1.5"/>';
    // vértices
    [['A', P.ax, P.ay, -6, 14], ['B', P.bx, P.by, 6, 14], ['C', P.cx, P.cy, -2, -6]].forEach(function (v) {
      svg += '<circle cx="' + v[1] + '" cy="' + v[2] + '" r="2.5" fill="' + color + '"/>';
      svg += '<text x="' + (v[1] + v[3]) + '" y="' + (v[2] + v[4]) + '" font-size="11" font-weight="700" fill="#444">' + v[0] + '</text>';
    });
    // rótulos de lados (no ponto médio de cada aresta)
    function lado(label, x1, y1, x2, y2, dx, dy) {
      if (label == null) return '';
      return '<text x="' + ((x1 + x2) / 2 + (dx || 0)) + '" y="' + ((y1 + y2) / 2 + (dy || 0)) + '" font-size="10" fill="#c0392b" font-weight="600">' + esc(label) + '</text>';
    }
    svg += lado(opts.cLabel, P.ax, P.ay, P.bx, P.by, 0, 14);        // lado AB (=c)
    svg += lado(opts.aLabel, P.bx, P.by, P.cx, P.cy, 8, 0);         // lado BC (=a)
    svg += lado(opts.bLabel, P.ax, P.ay, P.cx, P.cy, -18, 0);       // lado AC (=b)
    svg += '</svg></div>';
    return svg;
  }

  // ── Retângulo / quadrado com dimensões ──
  function retangulo(comp, larg, opts) {
    opts = opts || {};
    var color = opts.color || '#5a9e94';
    var W = 260, H = 160;
    var maxDim = Math.max(comp, larg);
    var scale = 150 / maxDim;
    var w = comp * scale, h = larg * scale;
    var x = (W - w) / 2, y = (H - h) / 2 - 4;
    var svg = '<div class="edv-wrap"><svg viewBox="0 0 ' + W + ' ' + H + '" class="edv-svg" role="img">';
    svg += '<rect x="' + x.toFixed(1) + '" y="' + y.toFixed(1) + '" width="' + w.toFixed(1) + '" height="' + h.toFixed(1) + '" fill="' + color + '22" stroke="' + color + '" stroke-width="2"/>';
    svg += '<text x="' + (W / 2) + '" y="' + (y + h + 16) + '" font-size="11" text-anchor="middle" fill="#444">' + esc(opts.compLabel || (comp + ' cm')) + '</text>';
    svg += '<text x="' + (x - 6) + '" y="' + (y + h / 2) + '" font-size="11" text-anchor="end" fill="#444">' + esc(opts.largLabel || (larg + ' cm')) + '</text>';
    svg += '</svg></div>';
    return svg;
  }

  // ── Círculo com raio ──
  function circulo(opts) {
    opts = opts || {};
    var color = opts.color || '#5a9e94';
    var W = 220, H = 170, cx = 110, cy = 82, r = 60;
    var svg = '<div class="edv-wrap"><svg viewBox="0 0 ' + W + ' ' + H + '" class="edv-svg" role="img">';
    svg += '<circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" fill="' + color + '18" stroke="' + color + '" stroke-width="2"/>';
    svg += '<circle cx="' + cx + '" cy="' + cy + '" r="2.5" fill="' + color + '"/>';
    svg += '<line x1="' + cx + '" y1="' + cy + '" x2="' + (cx + r) + '" y2="' + cy + '" stroke="' + color + '" stroke-width="1.5" stroke-dasharray="3,2"/>';
    if (opts.rLabel) svg += '<text x="' + (cx + r / 2) + '" y="' + (cy - 5) + '" font-size="11" text-anchor="middle" fill="#c0392b" font-weight="600">' + esc(opts.rLabel) + '</text>';
    svg += '</svg></div>';
    return svg;
  }

  // ── Referencial cartesiano com pontos e/ou vetores ──
  // points: [{x,y,label}]   vectors: [{x1,y1,x2,y2,label}]
  function referencial(opts) {
    opts = opts || {};
    var color = opts.color || '#5a7fa8';
    var W = 240, H = 220, cx = W / 2, cy = H / 2, u = opts.unit || 18; // px por unidade
    var range = opts.range || 5;
    function X(x) { return cx + x * u; }
    function Y(y) { return cy - y * u; }
    var svg = '<div class="edv-wrap"><svg viewBox="0 0 ' + W + ' ' + H + '" class="edv-svg" role="img">';
    // grelha
    for (var g = -range; g <= range; g++) {
      svg += '<line x1="' + X(g) + '" y1="6" x2="' + X(g) + '" y2="' + (H - 6) + '" stroke="#f0f0f0"/>';
      svg += '<line x1="6" y1="' + Y(g) + '" x2="' + (W - 6) + '" y2="' + Y(g) + '" stroke="#f0f0f0"/>';
    }
    // eixos
    svg += '<line x1="6" y1="' + cy + '" x2="' + (W - 6) + '" y2="' + cy + '" stroke="#999" stroke-width="1.5"/>';
    svg += '<line x1="' + cx + '" y1="6" x2="' + cx + '" y2="' + (H - 6) + '" stroke="#999" stroke-width="1.5"/>';
    svg += '<text x="' + (W - 8) + '" y="' + (cy - 4) + '" font-size="9" fill="#999">x</text>';
    svg += '<text x="' + (cx + 4) + '" y="12" font-size="9" fill="#999">y</text>';
    (opts.points || []).forEach(function (p) {
      svg += '<circle cx="' + X(p.x) + '" cy="' + Y(p.y) + '" r="3.5" fill="' + color + '"/>';
      if (p.label) svg += '<text x="' + (X(p.x) + 5) + '" y="' + (Y(p.y) - 5) + '" font-size="10" font-weight="600" fill="#444">' + esc(p.label) + '</text>';
    });
    (opts.vectors || []).forEach(function (v) {
      svg += '<defs><marker id="arr" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="' + color + '"/></marker></defs>';
      svg += '<line x1="' + X(v.x1) + '" y1="' + Y(v.y1) + '" x2="' + X(v.x2) + '" y2="' + Y(v.y2) + '" stroke="' + color + '" stroke-width="2" marker-end="url(#arr)"/>';
      if (v.label) svg += '<text x="' + (X((v.x1 + v.x2) / 2) + 5) + '" y="' + (Y((v.y1 + v.y2) / 2) - 4) + '" font-size="10" fill="' + color + '" font-weight="600">' + esc(v.label) + '</text>';
    });
    svg += '</svg></div>';
    return svg;
  }

  // ── Gráfico de uma função num referencial (parábola, reta, etc.) ──
  // fn: função x→y ; range: domínio a desenhar ; markers: [{x,y,label}]
  function grafico(fn, opts) {
    opts = opts || {};
    var color = opts.color || '#5a7fa8';
    var W = 240, H = 220, cx = W / 2, cy = H / 2, u = opts.unit || 18;
    var range = opts.range || 5;
    function X(x) { return cx + x * u; }
    function Y(y) { return cy - y * u; }
    var svg = '<div class="edv-wrap"><svg viewBox="0 0 ' + W + ' ' + H + '" class="edv-svg" role="img">';
    svg += '<line x1="6" y1="' + cy + '" x2="' + (W - 6) + '" y2="' + cy + '" stroke="#999" stroke-width="1.5"/>';
    svg += '<line x1="' + cx + '" y1="6" x2="' + cx + '" y2="' + (H - 6) + '" stroke="#999" stroke-width="1.5"/>';
    // curva
    var pts = [], xmin = -range, xmax = range;
    for (var x = xmin; x <= xmax; x += 0.2) {
      var y = fn(x);
      if (isFinite(y) && Math.abs(y) <= range + 0.5) pts.push(X(x).toFixed(1) + ',' + Y(y).toFixed(1));
    }
    svg += '<polyline points="' + pts.join(' ') + '" fill="none" stroke="' + color + '" stroke-width="2"/>';
    (opts.markers || []).forEach(function (m) {
      svg += '<circle cx="' + X(m.x) + '" cy="' + Y(m.y) + '" r="3.5" fill="#c0392b"/>';
      if (m.label) svg += '<text x="' + (X(m.x) + 5) + '" y="' + (Y(m.y) - 5) + '" font-size="10" font-weight="600" fill="#c0392b">' + esc(m.label) + '</text>';
    });
    svg += '</svg></div>';
    return svg;
  }

  // ── Reta numérica (intervalos / pontos) ──
  // points: [{x, label, open}]  intervals: [{from,to,openL,openR}]
  function retaNumerica(min, max, opts) {
    opts = opts || {};
    var color = opts.color || '#5a7fa8';
    var W = 300, H = 56, padX = 18, y = 30;
    var plotW = W - 2 * padX;
    function X(v) { return padX + ((v - min) / (max - min)) * plotW; }
    var svg = '<div class="edv-wrap"><svg viewBox="0 0 ' + W + ' ' + H + '" class="edv-svg" role="img" style="max-width:340px">';
    svg += '<line x1="' + padX + '" y1="' + y + '" x2="' + (W - padX) + '" y2="' + y + '" stroke="#999" stroke-width="1.5"/>';
    for (var v = min; v <= max; v++) {
      svg += '<line x1="' + X(v) + '" y1="' + (y - 3) + '" x2="' + X(v) + '" y2="' + (y + 3) + '" stroke="#999"/>';
      svg += '<text x="' + X(v) + '" y="' + (y + 16) + '" font-size="8" text-anchor="middle" fill="#777">' + v + '</text>';
    }
    (opts.intervals || []).forEach(function (it) {
      svg += '<line x1="' + X(it.from) + '" y1="' + y + '" x2="' + X(it.to) + '" y2="' + y + '" stroke="' + color + '" stroke-width="3"/>';
      svg += '<circle cx="' + X(it.from) + '" cy="' + y + '" r="4" fill="' + (it.openL ? '#fff' : color) + '" stroke="' + color + '" stroke-width="1.5"/>';
      svg += '<circle cx="' + X(it.to) + '" cy="' + y + '" r="4" fill="' + (it.openR ? '#fff' : color) + '" stroke="' + color + '" stroke-width="1.5"/>';
    });
    (opts.points || []).forEach(function (p) {
      svg += '<circle cx="' + X(p.x) + '" cy="' + y + '" r="4" fill="' + (p.open ? '#fff' : color) + '" stroke="' + color + '" stroke-width="1.5"/>';
      if (p.label) svg += '<text x="' + X(p.x) + '" y="' + (y - 8) + '" font-size="9" text-anchor="middle" fill="' + color + '" font-weight="600">' + esc(p.label) + '</text>';
    });
    svg += '</svg></div>';
    return svg;
  }

  return {
    tabela: tabela, barras: barras, circular: circular, linhas: linhas,
    triangulo: triangulo, retangulo: retangulo, circulo: circulo,
    referencial: referencial, grafico: grafico, retaNumerica: retaNumerica
  };
})();
