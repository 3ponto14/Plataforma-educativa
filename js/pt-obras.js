// pt-obras.js — Educação Literária do CURSO port9/ (realojado da antiga
// tab "Obras" de exames-pt.html quando a zona de exame passou a 3 tabs).
//
// O curso mostra o PROGRAMA TODO do 9.º ano; as obras avaliadas no exame
// nacional levam a marca «Sai no exame» (verificado nas provas 2019–2024,
// PDFs em "Exames nacionais português 9º ano/"):
//   • Os Lusíadas é o texto de ANÁLISE LITERÁRIA em 7 dos 8 exames — é A obra.
//   • Os outros textos do exame são de LEITURA: contos/excertos que MUDAM
//     todos os anos (Eça, Vergílio Ferreira, Saramago…) — não são obras fixas.
//
// API: ptObrasMount(containerId) — injeta a grelha no contentor indicado.

/* ══════════════════════════════════════════════════════
   OBRAS DO PROGRAMA · 9.º ANO (curso completo)
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
  },
  {
    id: 'auto-barca',
    titulo: 'Auto da Barca do Inferno',
    autor: 'Gil Vicente',
    ano: '1517',
    genero: 'Teatro · Educação Literária',
    icon: '⛵',
    cor: '#2e7d52',
    disponivel: false,
    nota: 'Obra do programa de 9.º ano (estudada nas aulas e nos testes da escola). Guia de estudo em preparação.'
  },
  {
    id: 'poesia',
    titulo: 'Poesia (antologia do 9.º ano)',
    autor: 'Vários autores',
    ano: 'varia',
    genero: 'Texto lírico · Educação Literária',
    icon: '🪶',
    cor: '#9c5e80',
    disponivel: false,
    nota: 'Poemas do programa de 9.º ano. Guia de estudo em preparação.'
  }
];

/* Mount para o curso port9/ — injeta a grelha de obras no contentor. */
function ptObrasMount(containerId) {
  var wrap = document.getElementById(containerId);
  if (!wrap) return;
  wrap.innerHTML = '<div class="ex-sec-head">'
    + '<div class="ex-sec-title">Obras · Educação Literária</div>'
    + '<div class="ex-sec-sub">As obras do programa de Português do 9.º ano. Escolhe uma obra para o guia de estudo, personagens, temas e quiz.</div>'
    + '</div>'
    + '<div id="pt-obras-content"></div>';
  ptObrasRenderGrid();
}

/* ══════════════════════════════════════════════════════
   GRELHA DE OBRAS (renderizada na tab "Obras")
══════════════════════════════════════════════════════ */
function ptObrasRenderGrid() {
  var wrap = document.getElementById('pt-obras-content');
  if (!wrap) return;
  var disp = PT_OBRAS.filter(function (o) { return o.disponivel; }).length;

  var h = '';
  h += '<div class="ex-sec-head" style="margin-bottom:1rem">';
  h += '<div class="ex-sec-sub">Programa completo do 9.º ano. As obras com a marca <strong>«Sai no exame»</strong> são as avaliadas na prova final (2019–2024): <strong>Os Lusíadas</strong> na análise literária e contos/excertos na leitura.</div>';
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

  // botão de voltar à grelha (estilo claro, legível em fundo claro)
  var back = '<button class="pt-back-light" onclick="ptObrasRenderGrid()" style="margin-bottom:1rem"><i class="ph ph-arrow-left"></i> Todas as obras</button>';

  if (obra.render === 'lusiadas' && typeof ptLusRenderMenu === 'function') {
    // o guia de Os Lusíadas escreve em #pt-lus-content; garantimos que existe dentro do wrap
    wrap.innerHTML = back + '<div id="pt-lus-content"></div>';
    ptLusRenderMenu();
  } else {
    wrap.innerHTML = back + '<div style="padding:2rem;text-align:center;color:var(--ink3)">Guia em construção.</div>';
  }
}
