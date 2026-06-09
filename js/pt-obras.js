// pt-obras.js — Educação Literária NA ZONA DO EXAME (exames-pt.html).
//
// IMPORTANTE: esta é a zona de PREPARAÇÃO PARA O EXAME, por isso lista apenas
// o que SAI MESMO no exame nacional do 9.º ano. Verificado nas provas finais
// 2019–2024 (PDFs em "Exames nacionais português 9º ano/"):
//   • Os Lusíadas é o texto de ANÁLISE LITERÁRIA em 7 dos 8 exames — é A obra.
//   • Os outros textos do exame são de LEITURA: contos/excertos que MUDAM
//     todos os anos (Eça, Vergílio Ferreira, Saramago…) — não são obras fixas.
// O programa completo do 9.º (Auto da Barca, poesia, etc.) vive no CURSO
// port9/, não aqui — essas obras não são avaliadas no exame.

/* ══════════════════════════════════════════════════════
   OBRAS / TEXTOS QUE SAEM NO EXAME NACIONAL · 9.º ANO
══════════════════════════════════════════════════════ */
var PT_OBRAS = [
  {
    id: 'lusiadas',
    titulo: 'Os Lusíadas',
    autor: 'Luís de Camões',
    ano: '1572',
    genero: 'Epopeia · Educação Literária',
    icon: '🛡️',
    cor: '#b07030',
    disponivel: true,
    render: 'lusiadas',           // usa o guia existente (ptLusRenderMenu)
    badge: 'Sai no exame',
    nota: 'Texto de análise literária em quase todos os exames (2019–2024). Excertos: Proposição, Inês de Castro, Adamastor, Consílio dos Deuses…'
  },
  {
    id: 'leitura-contos',
    titulo: 'Leitura de Contos e Excertos',
    autor: 'Eça de Queirós · Saramago · Vergílio Ferreira · outros',
    ano: 'varia',
    genero: 'Texto narrativo · Leitura',
    icon: '📖',
    cor: '#5c4e8a',
    disponivel: false,
    badge: 'Sai no exame',
    nota: 'O exame inclui sempre textos de leitura (contos/excertos) que MUDAM de ano para ano. Não é uma obra fixa — treina-se a compreensão de texto.'
  }
];

/* ══════════════════════════════════════════════════════
   GRELHA DE OBRAS (renderizada na tab "Obras")
══════════════════════════════════════════════════════ */
function ptObrasRenderGrid() {
  var wrap = document.getElementById('pt-obras-content');
  if (!wrap) return;
  var disp = PT_OBRAS.filter(function (o) { return o.disponivel; }).length;

  var h = '';
  h += '<div class="ex-sec-head" style="margin-bottom:1rem">';
  h += '<div class="ex-sec-sub">O que sai mesmo no exame nacional do 9.º ano (provas 2019–2024). <strong>Os Lusíadas</strong> é o texto de análise literária; a leitura usa contos/excertos que variam de ano para ano.</div>';
  h += '</div>';

  h += '<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:1rem">';
  PT_OBRAS.forEach(function (o) {
    var onclick = o.disponivel ? ' onclick="ptObrasOpen(\'' + o.id + '\')"' : '';
    var cursor = o.disponivel ? 'pointer' : 'default';
    var opacity = o.disponivel ? '1' : '.72';
    h += '<button class="pt-topic-card"' + onclick + ' style="border-top:3px solid ' + o.cor + ';cursor:' + cursor + ';opacity:' + opacity + '">';
    h += '<div style="display:flex;align-items:center;gap:.6rem;margin-bottom:.5rem">';
    h += '<div style="font-size:1.7rem;line-height:1">' + o.icon + '</div>';
    // badge "Sai no exame" (verde) — todas nesta zona saem; + estado disponível/em breve
    if (o.badge) h += '<span style="font-size:.58rem;font-weight:800;letter-spacing:.06em;text-transform:uppercase;background:#e7f6ec;color:#2e7d32;padding:.18rem .5rem;border-radius:999px;border:1px solid #bfe3c9">✓ ' + o.badge + '</span>';
    if (o.disponivel) h += '<span style="margin-left:auto;font-size:.6rem;font-weight:800;letter-spacing:.08em;text-transform:uppercase;background:' + o.cor + ';color:#fff;padding:.18rem .5rem;border-radius:999px">Guia</span>';
    else h += '<span style="margin-left:auto;font-size:.6rem;font-weight:800;letter-spacing:.08em;text-transform:uppercase;background:var(--surface);color:var(--ink3);padding:.18rem .5rem;border-radius:999px;border:1px solid var(--border)">Em breve</span>';
    h += '</div>';
    h += '<div style="font-family:Cormorant Garamond,serif;font-size:1.18rem;font-weight:700;color:var(--ink1);line-height:1.2">' + o.titulo + '</div>';
    h += '<div style="font-size:.8rem;color:var(--ink2);font-weight:600;margin-top:.15rem">' + o.autor + '</div>';
    h += '<div style="font-size:.7rem;color:var(--ink3);margin-top:.35rem">' + o.genero + ' · ' + o.ano + '</div>';
    if (o.nota) h += '<div style="font-size:.72rem;color:var(--ink3);margin-top:.55rem;line-height:1.45">' + o.nota + '</div>';
    h += '</button>';
  });
  h += '</div>';

  wrap.innerHTML = h;
}

/* Abre o guia de uma obra disponível. Os Lusíadas reaproveita ptLusRenderMenu. */
function ptObrasOpen(id) {
  var obra = null;
  PT_OBRAS.forEach(function (o) { if (o.id === id) obra = o; });
  if (!obra || !obra.disponivel) return;

  var wrap = document.getElementById('pt-obras-content');
  if (!wrap) return;

  // botão de voltar à grelha
  var back = '<button class="pt-theme-btn" onclick="ptObrasRenderGrid()" style="display:inline-flex;align-items:center;gap:.4rem;width:auto;padding:.5rem .9rem;margin-bottom:1rem"><i class="ph ph-arrow-left"></i> Todas as obras</button>';

  if (obra.render === 'lusiadas' && typeof ptLusRenderMenu === 'function') {
    // o guia de Os Lusíadas escreve em #pt-lus-content; garantimos que existe dentro do wrap
    wrap.innerHTML = back + '<div id="pt-lus-content"></div>';
    ptLusRenderMenu();
  } else {
    wrap.innerHTML = back + '<div style="padding:2rem;text-align:center;color:var(--ink3)">Guia em construção.</div>';
  }
}
