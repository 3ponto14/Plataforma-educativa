// pt-obras.js — Educação Literária do 9.º ano: lista de obras + grelha de navegação.
//
// A página de Português tinha só Os Lusíadas. Esta camada apresenta TODAS as obras
// do programa (Aprendizagens Essenciais + manuais Mensagens 9 / A Par e Passo) numa
// grelha de cartões. Cada obra tem um guia próprio; por agora só Os Lusíadas está
// disponível (`disponivel: true`) e abre o guia existente (ptLusRenderMenu).
// As restantes mostram um cartão "Em breve" — a estrutura fica pronta para encher.

/* ══════════════════════════════════════════════════════
   OBRAS DO 9.º ANO · EDUCAÇÃO LITERÁRIA
   Ordem: teatro · epopeia · narrativa/conto · poesia
══════════════════════════════════════════════════════ */
var PT_OBRAS = [
  {
    id: 'auto-barca',
    titulo: 'Auto da Barca do Inferno',
    autor: 'Gil Vicente',
    ano: '1517',
    genero: 'Teatro (auto / moralidade)',
    icon: '⛵',
    cor: '#7a3b2e',
    disponivel: false,
    nota: 'Obra integral. Figuras alegóricas: Diabo, Anjo, Onzeneiro, Frade, Sapateiro, Fidalgo…'
  },
  {
    id: 'lusiadas',
    titulo: 'Os Lusíadas',
    autor: 'Luís de Camões',
    ano: '1572',
    genero: 'Epopeia (poesia épica)',
    icon: '🛡️',
    cor: '#b07030',
    disponivel: true,
    render: 'lusiadas',           // usa o guia existente (ptLusRenderMenu)
    nota: 'Excertos: Proposição, Invocação, Inês de Castro, Adamastor, Ilha dos Amores…'
  },
  {
    id: 'a-aia',
    titulo: 'A Aia',
    autor: 'Eça de Queirós',
    ano: '1885',
    genero: 'Conto',
    icon: '📖',
    cor: '#5c4e8a',
    disponivel: false,
    nota: 'Conto sobre lealdade e sacrifício. Texto narrativo.'
  },
  {
    id: 'um-dia-destes',
    titulo: 'Um Dia Destes',
    autor: 'Gabriel García Márquez',
    ano: '1962',
    genero: 'Conto',
    icon: '🦷',
    cor: '#4a7c6f',
    disponivel: false,
    nota: 'Conto sobre poder, dignidade e tensão social.'
  },
  {
    id: 'canterville',
    titulo: 'O Fantasma de Canterville',
    autor: 'Oscar Wilde',
    ano: '1887',
    genero: 'Conto',
    icon: '👻',
    cor: '#4d6a8a',
    disponivel: false,
    nota: 'Conto de humor e crítica social.'
  },
  {
    id: 'poesia-pessoa',
    titulo: 'Poesia de Fernando Pessoa',
    autor: 'Fernando Pessoa',
    ano: 'séc. XX',
    genero: 'Poesia',
    icon: '🎭',
    cor: '#8a4a6a',
    disponivel: false,
    nota: 'Poemas ortónimos e dos heterónimos (ex.: «Mar Português»).'
  },
  {
    id: 'poesia-sophia',
    titulo: 'Poesia de Sophia de M. B. Andresen',
    autor: 'Sophia de Mello Breyner Andresen',
    ano: 'séc. XX',
    genero: 'Poesia',
    icon: '🌊',
    cor: '#3a7ca5',
    disponivel: false,
    nota: 'Poemas sobre o mar, a Grécia, a justiça e a beleza.'
  },
  {
    id: 'poesia-outros',
    titulo: 'Outros poetas',
    autor: 'Camilo Pessanha · Irene Lisboa · Florbela Espanca · Cesário Verde',
    ano: 'séc. XIX–XX',
    genero: 'Poesia',
    icon: '✒️',
    cor: '#9a7b4f',
    disponivel: false,
    nota: 'Seleção de poemas líricos do programa.'
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
  h += '<div class="ex-sec-sub">Educação Literária do 9.º ano · ' + PT_OBRAS.length + ' obras do programa · ' + disp + ' já disponível' + (disp === 1 ? '' : 's') + '.</div>';
  h += '</div>';

  h += '<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:1rem">';
  PT_OBRAS.forEach(function (o) {
    var onclick = o.disponivel ? ' onclick="ptObrasOpen(\'' + o.id + '\')"' : '';
    var cursor = o.disponivel ? 'pointer' : 'default';
    var opacity = o.disponivel ? '1' : '.62';
    h += '<button class="pt-topic-card"' + onclick + ' style="border-top:3px solid ' + o.cor + ';cursor:' + cursor + ';opacity:' + opacity + '">';
    h += '<div style="display:flex;align-items:center;gap:.6rem;margin-bottom:.5rem">';
    h += '<div style="font-size:1.7rem;line-height:1">' + o.icon + '</div>';
    if (o.disponivel) h += '<span style="margin-left:auto;font-size:.6rem;font-weight:800;letter-spacing:.08em;text-transform:uppercase;background:' + o.cor + ';color:#fff;padding:.18rem .5rem;border-radius:999px">Disponível</span>';
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
