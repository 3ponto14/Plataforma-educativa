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
    disponivel: true,
    render: 'contos',
    badge: 'Sai no exame',
    nota: 'Os 7 textos do manual Mensagens 9 analisados (A Aia, A Galinha, A Palavra Mágica, O Fantasma de Canterville, João Sem Medo, Um Dia Destes, e a crónica de Lobo Antunes) + estratégias para o exame + quiz.'
  },
  {
    id: 'auto-barca',
    titulo: 'Auto da Barca do Inferno',
    autor: 'Gil Vicente',
    ano: '1517',
    genero: 'Teatro · Educação Literária',
    icon: '⛵',
    cor: '#2e7d52',
    disponivel: true,
    render: 'barca',
    nota: 'Obra do programa de 9.º ano (aulas e testes da escola). Guia completo: as 11 figuras com pecados e destinos, símbolos, crítica social, tipos de cómico + quiz.'
  },
  {
    id: 'poesia',
    titulo: 'Poesia (antologia do 9.º ano)',
    autor: 'Vários autores',
    ano: 'varia',
    genero: 'Texto lírico · Educação Literária',
    icon: '🪶',
    cor: '#9c5e80',
    disponivel: true,
    render: 'poesia',
    nota: 'Os 4 poemas do manual Mensagens 9 analisados (Pessanha, Pessoa, Irene Lisboa, Sophia) + ferramentas de análise (versificação, sujeito poético, recursos) + quiz.'
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

  // cada guia escreve no seu contentor próprio (criado aqui dentro do wrap),
  // para que o botão «Todas as obras» persista durante o guia e o quiz
  if (obra.render === 'lusiadas' && typeof ptLusRenderMenu === 'function') {
    wrap.innerHTML = back + '<div id="pt-lus-content"></div>';
    ptLusRenderMenu();
  } else if (obra.render === 'barca' && typeof ptBarcaRenderMenu === 'function') {
    wrap.innerHTML = back + '<div id="pt-barca-content"></div>';
    ptBarcaRenderMenu();
  } else if (obra.render === 'poesia' && typeof ptPoesiaRenderMenu === 'function') {
    wrap.innerHTML = back + '<div id="pt-poesia-content"></div>';
    ptPoesiaRenderMenu();
  } else if (obra.render === 'contos' && typeof ptContosRenderMenu === 'function') {
    wrap.innerHTML = back + '<div id="pt-contos-content"></div>';
    ptContosRenderMenu();
  } else {
    wrap.innerHTML = back + '<div style="padding:2rem;text-align:center;color:var(--ink3)">Guia em construção.</div>';
  }
}

/* ════════════════════════════════════════════════════════════════
   MOTOR DE QUIZ PARTILHADO dos guias de obras (Auto da Barca, Poesia…).
   Recebe uma config e corre um quiz de escolha múltipla com o mesmo
   aspeto do quiz d'Os Lusíadas (que mantém o seu motor próprio).
   Formato do banco: { enun, opts: ['(A) …', …], correct: 'B', exp }.
   cfg = { banco, titulo, icone, cor1, cor2, voltar (nome de função global) }
   ════════════════════════════════════════════════════════════════ */
var _ptObraQz = { cfg: null, banco: [], idx: 0, score: 0, total: 0, answered: false };

function ptObraQuizStart(cfg) {
  if (cfg) _ptObraQz.cfg = cfg;
  cfg = _ptObraQz.cfg;
  if (!cfg || !cfg.banco || !cfg.banco.length) return;
  _ptObraQz.banco = cfg.banco.slice().sort(function () { return Math.random() - .5; });
  _ptObraQz.idx = 0; _ptObraQz.score = 0; _ptObraQz.total = 0; _ptObraQz.answered = false;
  _ptObraQzRender();
}

function _ptObraQzWrap() {
  var id = (_ptObraQz.cfg && _ptObraQz.cfg.containerId) || 'pt-obras-content';
  return document.getElementById(id);
}

function _ptObraQzRender() {
  var wrap = _ptObraQzWrap();
  if (!wrap) return;
  var cfg = _ptObraQz.cfg, banco = _ptObraQz.banco, idx = _ptObraQz.idx;
  if (idx >= banco.length) { _ptObraQzFinish(); return; }
  var q = banco[idx];
  var pct = Math.round(idx / banco.length * 100);

  var h = '<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:1.25rem;flex-wrap:wrap;gap:.5rem">';
  h += '<button onclick="' + cfg.voltar + '()" style="background:none;border:none;font-size:.78rem;font-weight:700;color:' + cfg.cor2 + ';cursor:pointer;display:flex;align-items:center;gap:.3rem;padding:0;font-family:Montserrat,sans-serif"><i class="ph ph-arrow-left"></i> ' + cfg.titulo + '</button>';
  h += '<span style="font-size:.72rem;color:var(--ink4);font-weight:700">' + (idx + 1) + '/' + banco.length + ' · ✓ ' + _ptObraQz.score + '/' + _ptObraQz.total + '</span>';
  h += '</div>';
  h += '<div style="height:5px;background:var(--border);border-radius:99px;margin-bottom:1.5rem;overflow:hidden"><div style="height:100%;width:' + pct + '%;background:linear-gradient(90deg,' + cfg.cor1 + ',' + cfg.cor2 + ');border-radius:99px"></div></div>';

  h += '<div style="background:var(--white);border:1.5px solid var(--border);border-radius:20px;padding:1.75rem">';
  h += '<div style="font-size:.68rem;font-weight:800;color:' + cfg.cor1 + ';text-transform:uppercase;letter-spacing:.1em;margin-bottom:.75rem"><i class="ph ' + (cfg.icone || 'ph-book-open-text') + '"></i> ' + cfg.titulo + ' - Questão</div>';
  h += '<div style="font-size:.96rem;font-weight:700;color:var(--ink1);line-height:1.65;margin-bottom:1.25rem">' + q.enun + '</div>';
  h += '<div id="pt-obraqz-opts">';
  q.opts.forEach(function (opt, i) {
    var letter = ['A', 'B', 'C', 'D', 'E'][i];
    h += '<button onclick="ptObraQzSelect(this)" data-letter="' + letter + '" style="display:block;width:100%;text-align:left;background:var(--white);border:1.5px solid var(--border);border-radius:12px;padding:.8rem 1.1rem;margin-bottom:.5rem;font-family:Montserrat,sans-serif;font-size:.86rem;font-weight:600;color:var(--ink1);cursor:pointer;transition:all .15s">' + opt + '</button>';
  });
  h += '</div>';
  h += '<div id="pt-obraqz-feedback" style="display:none;margin-top:.75rem"></div>';
  h += '<button id="pt-obraqz-next" onclick="ptObraQzNext()" style="display:none;width:100%;margin-top:.75rem;background:linear-gradient(135deg,' + cfg.cor1 + ',' + cfg.cor2 + ');color:#fff;border:none;border-radius:12px;padding:.85rem;font-weight:800;font-size:.88rem;cursor:pointer;font-family:Montserrat,sans-serif">Próxima <i class="ph ph-arrow-right"></i></button>';
  h += '</div>';
  wrap.innerHTML = h;
  _ptObraQz.answered = false;
}

function ptObraQzSelect(btn) {
  if (_ptObraQz.answered) return;
  var letter = btn.getAttribute('data-letter');
  _ptObraQz.answered = true;
  _ptObraQz.total++;
  var q = _ptObraQz.banco[_ptObraQz.idx];
  var correct = letter === q.correct;
  if (correct) _ptObraQz.score++;

  document.querySelectorAll('#pt-obraqz-opts button').forEach(function (b) {
    var l = b.getAttribute('data-letter');
    b.style.cursor = 'default'; b.onclick = null;
    if (l === q.correct) { b.style.borderColor = '#2e7d52'; b.style.background = '#e8f5ee'; b.style.color = '#1a5c38'; b.style.fontWeight = '800'; }
    else if (l === letter && !correct) { b.style.borderColor = '#c0392b'; b.style.background = '#fdecea'; b.style.color = '#922b21'; }
  });

  var fb = document.getElementById('pt-obraqz-feedback');
  if (fb) {
    var cor = correct ? '#2e7d52' : '#922b21', bg = correct ? '#e8f5ee' : '#fdecea', brd = correct ? '#2e7d52' : '#c0392b';
    fb.innerHTML = '<div style="background:' + bg + ';border:1.5px solid ' + brd + ';border-radius:12px;padding:.85rem 1rem;font-size:.83rem;color:' + cor + '"><strong>' + (correct ? '✓ Correto!' : '✗ Era: ' + q.correct) + '</strong>' + (q.exp ? '<br><span style="margin-top:.3rem;display:block;line-height:1.6">' + q.exp + '</span>' : '') + '</div>';
    fb.style.display = 'block';
  }
  var nxt = document.getElementById('pt-obraqz-next');
  if (nxt) nxt.style.display = 'block';
}

function ptObraQzNext() { _ptObraQz.idx++; _ptObraQzRender(); }

function _ptObraQzFinish() {
  var cfg = _ptObraQz.cfg;
  var s = _ptObraQz.score, t = _ptObraQz.total, pct = t ? Math.round(s / t * 100) : 0;
  var wrap = _ptObraQzWrap();
  if (!wrap) return;
  wrap.innerHTML = '<div style="background:linear-gradient(135deg,' + cfg.cor1 + ',' + cfg.cor2 + ');border-radius:20px;padding:2.5rem 2rem;text-align:center;color:#fff">' +
    '<div style="font-size:2.5rem;margin-bottom:.5rem">' + (pct >= 80 ? '🏆' : pct >= 60 ? '🎯' : '📚') + '</div>' +
    '<div style="font-family:JetBrains Mono,monospace;font-size:3rem;font-weight:700;line-height:1">' + s + '<span style="font-size:1.3rem;opacity:.5">/' + t + '</span></div>' +
    '<div style="font-size:.82rem;color:rgba(255,255,255,.6);margin:.4rem 0">' + pct + '% corretas</div>' +
    '<div style="display:flex;gap:.75rem;justify-content:center;flex-wrap:wrap;margin-top:1.5rem">' +
    '<button onclick="ptObraQuizStart()" style="background:#fff;color:' + cfg.cor1 + ';border:none;border-radius:12px;padding:.75rem 1.5rem;font-weight:800;font-size:.85rem;cursor:pointer;font-family:Montserrat,sans-serif">Repetir quiz</button>' +
    '<button onclick="' + cfg.voltar + '()" style="background:rgba(255,255,255,.15);color:#fff;border:1px solid rgba(255,255,255,.2);border-radius:12px;padding:.75rem 1.5rem;font-weight:800;font-size:.85rem;cursor:pointer;font-family:Montserrat,sans-serif">Guia de estudo</button>' +
    '</div></div>';
}
