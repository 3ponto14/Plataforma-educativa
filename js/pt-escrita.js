// pt-escrita.js — Composição / Escrita · Português 9.º ano
// REALOJADO da antiga tab "Composição" de exames-pt.html para o curso port9/
// (tab Praticar → Exercícios → domínio Escrita). Conteúdo intacto: critérios
// do exame, temas reais 2021-2024, editor com contador de palavras e
// autocorreção por checklist.
//
// API: ptEscritaMount(containerId) — injeta tudo no contentor indicado.
// Sem dependências além de css/styles.css (.pt-composicao-card, .pt-theme-btn…).

/* ══════════════════════════════════════════════════════
   TEMAS DE COMPOSIÇÃO (exames reais 2021-2024)
══════════════════════════════════════════════════════ */
var PT_COMPOSICAO_TEMAS = [
  {
    id: 'opiniao',
    icon: '💬',
    title: 'Texto de Opinião',
    sub: '2024, 2023, 2022, 2021',
    temas_recentes: [
      { ano: '2024 1.ª F.', enun: 'Na tua perspetiva, deverão os meios tecnológicos, como o computador ou os telemóveis, ocupar um lugar central nas nossas vidas?\n\nEscreve um texto de opinião bem estruturado, com um mínimo de 160 e um máximo de 260 palavras, em que defendas o teu ponto de vista.' },
      { ano: '2024 2.ª F.', enun: 'Na tua perspetiva, devem as pessoas dedicar tempo à leitura de obras literárias como a Ilíada e a Odisseia?\n\nEscreve um texto de opinião bem estruturado, com um mínimo de 160 e um máximo de 260 palavras, em que defendas o teu ponto de vista.' },
      { ano: '2023 1.ª F.', enun: 'Na tua perspetiva, deve a leitura em voz alta ter um lugar na escola e na família?\n\nEscreve um texto de opinião bem estruturado, com um mínimo de 160 e um máximo de 260 palavras, em que defendas o teu ponto de vista.' },
      { ano: '2022 1.ª F.', enun: 'Na tua perspetiva, deve a escola promover mais atividades na natureza e ao ar livre?\n\nEscreve um texto de opinião bem estruturado, com um mínimo de 160 e um máximo de 260 palavras, em que defendas o teu ponto de vista.' }
    ]
  },
  {
    id: 'analise',
    icon: '🔍',
    title: 'Análise de Texto',
    sub: 'Os Lusíadas e outras obras',
    temas_recentes: [
      { ano: '2024 1.ª F.', enun: 'Faz uma análise da estância apresentada (Canto X, est. 154 de Os Lusíadas), recorrendo aos teus conhecimentos sobre a obra.\n\nNa tua resposta, deves explicitar:\n- o conteúdo dos versos 1 a 4, estabelecendo a relação com a figura retratada;\n- o sentido do verso 8, referindo o que são as «Cousas que juntas se acham raramente» e onde se encontram presentes.' },
      { ano: '2023 2.ª F.', enun: 'Faz uma análise do excerto de Os Lusíadas apresentado, recorrendo aos teus conhecimentos sobre a obra.\n\nNa tua resposta, deves explicitar o conteúdo e o seu significado no contexto da obra.' }
    ]
  }
];

/* ══════════════════════════════════════════════════════
   MOUNT — injeta o painel completo num contentor
══════════════════════════════════════════════════════ */
function ptEscritaMount(containerId) {
  var wrap = document.getElementById(containerId);
  if (!wrap) return;

  var h = '';
  h += '<div class="ex-sec-head">';
  h += '<div class="ex-sec-title">Composição Escrita</div>';
  h += '<div class="ex-sec-sub">A composição não tem correção automática mas podes escrever aqui com os critérios sempre visíveis e verificar a estrutura com a checklist.</div>';
  h += '</div>';

  // Critérios do exame
  h += '<div class="pt-composicao-card">';
  h += '<h3><i class="ph ph-pencil-line"></i> Como funciona</h3>';
  h += '<p>Nos exames de Português, a composição vale <strong>20 pontos</strong> (em 100). É avaliada em três dimensões:</p>';
  h += '<div class="pt-crit-item"><div class="pt-crit-icon">📝</div><div class="pt-crit-text"><strong>Tema e estrutura (8 pts):</strong> Defendes um ponto de vista claro? Apresentas pelo menos duas razões? Tens introdução, desenvolvimento e conclusão?</div></div>';
  h += '<div class="pt-crit-item"><div class="pt-crit-icon">✍️</div><div class="pt-crit-text"><strong>Coerência e coesão (6 pts):</strong> O texto tem sentido lógico? As frases e parágrafos estão bem ligados com conectores?</div></div>';
  h += '<div class="pt-crit-item"><div class="pt-crit-icon">📖</div><div class="pt-crit-text"><strong>Correção linguística (6 pts):</strong> Ortografia, pontuação, vocabulário variado e estrutura frásica correta.</div></div>';
  h += '<div class="pt-crit-item"><div class="pt-crit-icon">📏</div><div class="pt-crit-text"><strong>Extensão obrigatória:</strong> <strong>mínimo 160 palavras, máximo 260 palavras.</strong> Abaixo de 55 palavras = 0 pontos.</div></div>';
  h += '</div>';

  // Temas + editor
  h += '<div class="pt-themes-composicao" id="pt-comp-temas"></div>';
  h += '<div id="pt-comp-editor" style="display:none;margin-top:1.5rem">';
  h += '<div style="background:var(--white);border:1.5px solid var(--border);border-radius:20px;padding:1.75rem">';
  h += '<div id="pt-comp-enun" style="font-family:\'Cormorant Garamond\',serif;font-size:1.05rem;line-height:1.8;color:var(--ink1);margin-bottom:1.25rem;padding-bottom:1.25rem;border-bottom:1px solid var(--border)"></div>';
  h += '<textarea id="pt-comp-textarea" rows="14" placeholder="Escreve o teu texto aqui..." style="width:100%;border:1.5px solid var(--border);border-radius:12px;padding:1rem 1.25rem;font-family:\'Montserrat\',sans-serif;font-size:.9rem;line-height:1.8;color:var(--ink1);resize:vertical;outline:none;transition:border-color .15s;box-sizing:border-box" oninput="ptCompCount()"></textarea>';
  h += '<div style="display:flex;align-items:center;justify-content:space-between;margin-top:.75rem;flex-wrap:wrap;gap:.5rem">';
  h += '<div>';
  h += '<span id="pt-comp-count" style="font-family:\'JetBrains Mono\',monospace;font-size:1.3rem;font-weight:700;color:#5c4e8a">0</span>';
  h += '<span style="font-size:.75rem;color:var(--ink4);margin-left:.3rem">palavras</span>';
  h += '<span id="pt-comp-status" style="margin-left:.75rem;font-size:.73rem;font-weight:700;padding:3px 10px;border-radius:999px"></span>';
  h += '</div>';
  h += '<div style="display:flex;gap:.5rem">';
  h += '<button onclick="ptCompAutocheck()" style="font-size:.73rem;font-weight:800;color:#fff;background:#5c4e8a;border:none;border-radius:999px;padding:6px 14px;cursor:pointer">✓ Verificar</button>';
  h += '<button onclick="ptCompReset()" style="font-size:.73rem;font-weight:700;color:var(--ink4);background:none;border:1px solid var(--border);border-radius:999px;padding:5px 13px;cursor:pointer">Limpar</button>';
  h += '</div>';
  h += '</div>';
  h += '</div>';
  h += '<div id="pt-comp-check-result" style="display:none;margin-top:1rem"></div>';
  h += '</div>';

  wrap.innerHTML = h;
  ptRenderComposicaoTemas();
  ptOpenComposicao('opiniao', true);
}

/* ══════════════════════════════════════════════════════
   RENDER + EDITOR (intactos da zona de exame)
══════════════════════════════════════════════════════ */
function ptRenderComposicaoTemas() {
  var wrap = document.getElementById('pt-comp-temas');
  if (!wrap) return;
  var h = '';
  PT_COMPOSICAO_TEMAS.forEach(function(t) {
    h += '<button class="pt-theme-btn" onclick="ptOpenComposicao(\'' + t.id + '\')" style="background:linear-gradient(135deg,#1e1640,#3a2d6e)">';
    h += '<div class="pt-theme-btn-icon">' + t.icon + '</div>';
    h += '<div class="pt-theme-btn-title">' + t.title + '</div>';
    h += '<div class="pt-theme-btn-sub">' + t.sub + '</div>';
    h += '</button>';
  });
  wrap.innerHTML = h;
}

function ptOpenComposicao(id, semScroll) {
  var tema = null;
  PT_COMPOSICAO_TEMAS.forEach(function(t){ if(t.id === id) tema = t; });
  if (!tema) return;

  // Escolher enunciado aleatório
  var enun = tema.temas_recentes[Math.floor(Math.random() * tema.temas_recentes.length)];

  var editor = document.getElementById('pt-comp-editor');
  var enunDiv = document.getElementById('pt-comp-enun');
  var ta = document.getElementById('pt-comp-textarea');
  if (!editor || !enunDiv || !ta) return;

  enunDiv.innerHTML = '<div style="font-size:.68rem;font-weight:800;color:#7c6fa0;letter-spacing:.1em;text-transform:uppercase;margin-bottom:.5rem">' + tema.title + ' · ' + enun.ano + '</div>' + enun.enun.replace(/\n/g,'<br>');
  ta.value = '';
  editor.style.display = 'block';
  ptCompCount();
  if (!semScroll) editor.scrollIntoView({behavior:'smooth', block:'start'});
}

function ptCompCount() {
  var ta = document.getElementById('pt-comp-textarea');
  var cnt = document.getElementById('pt-comp-count');
  var status = document.getElementById('pt-comp-status');
  if (!ta || !cnt || !status) return;
  var words = ta.value.trim() === '' ? 0 : ta.value.trim().split(/\s+/).length;
  cnt.textContent = words;
  if (words < 55) {
    cnt.style.color = '#c0392b';
    status.textContent = 'Muito curto (0 pts)';
    status.style.background = '#fdecea';
    status.style.color = '#c0392b';
  } else if (words < 160) {
    cnt.style.color = '#e67e22';
    status.textContent = 'Abaixo do mínimo';
    status.style.background = '#fef3e2';
    status.style.color = '#b07030';
  } else if (words <= 260) {
    cnt.style.color = '#2e7d52';
    status.textContent = '✓ Extensão válida';
    status.style.background = '#e8f5ee';
    status.style.color = '#2e7d52';
  } else {
    cnt.style.color = '#c0392b';
    status.textContent = 'Acima do máximo';
    status.style.background = '#fdecea';
    status.style.color = '#c0392b';
  }
}

function ptCompReset() {
  var ta = document.getElementById('pt-comp-textarea');
  if (ta) ta.value = '';
  ptCompCount();
}

/* ══ Autocorreção por checklist ══ */
function ptCompAutocheck() {
  var ta = document.getElementById('pt-comp-textarea');
  var result = document.getElementById('pt-comp-check-result');
  if (!ta || !result) return;
  var texto = ta.value.trim();
  if (!texto) { alert('Escreve o teu texto primeiro!'); return; }

  var words = texto.split(/\s+/).filter(function(w){ return w.length > 0; }).length;
  // Aceitar um único \n ou dois \n\n como separador de parágrafo
  var paragrafos = texto.split(/\n+/).filter(function(p){ return p.trim().length > 30; }).length;
  if (paragrafos < 1) paragrafos = 1; // se não há newlines, o próprio texto é 1 parágrafo
  var frases = texto.split(/[.!?]+/).filter(function(f){ return f.trim().length > 10; }).length;

  // Detectar conectores
  var conectoresUsados = [];
  var conectoresLista = ['porque','portanto','contudo','no entanto','embora','ainda que','além disso','por outro lado','em conclusão','em suma','por exemplo','todavia','porém','assim','desta forma','nomeadamente'];
  var textoLower = texto.toLowerCase();
  conectoresLista.forEach(function(c) {
    if (textoLower.indexOf(c) !== -1) conectoresUsados.push(c);
  });

  // Verificar estrutura
  var temIntroducao = paragrafos >= 1;
  var temDesenvolvimento = paragrafos >= 2;
  var temConclusao = paragrafos >= 3 || /conclus|suma|portanto|assim sendo|em suma|concluindo/.test(textoLower);

  var checks = [
    { ok: words >= 160 && words <= 260, label: 'Extensão válida (160-260 palavras)', detalhe: words + ' palavras' },
    { ok: words >= 55, label: 'Mínimo de 55 palavras (≥ 0 pontos)', detalhe: words < 55 ? '⚠️ Abaixo de 55 = 0 pontos!' : '' },
    { ok: temIntroducao, label: 'Tem introdução (pelo menos 1 parágrafo)', detalhe: '' },
    { ok: temDesenvolvimento, label: 'Tem desenvolvimento (≥ 2 parágrafos)', detalhe: paragrafos + ' parágrafos detetados' },
    { ok: temConclusao, label: 'Tem conclusão (palavra ou parágrafo de conclusão)', detalhe: '' },
    { ok: conectoresUsados.length >= 2, label: 'Usa conectores do discurso (≥ 2)', detalhe: conectoresUsados.length > 0 ? 'Detetados: ' + conectoresUsados.join(', ') : 'Nenhum detetado usa «portanto», «contudo», «além disso»...' },
    { ok: frases >= 5, label: 'Texto com variedade frásica (≥ 5 frases)', detalhe: frases + ' frases detetadas' }
  ];

  var pontos = 0;
  var pesos = [3, 2, 1, 2, 2, 2, 1]; // peso de cada critério
  checks.forEach(function(c, i) { if (c.ok) pontos += pesos[i]; });
  var max = pesos.reduce(function(a,b){ return a+b; }, 0);

  var cor = pontos >= max * .8 ? '#2e7d52' : pontos >= max * .5 ? '#b07030' : '#c0392b';
  var bg = pontos >= max * .8 ? '#e8f5ee' : pontos >= max * .5 ? '#fef3e2' : '#fdecea';

  var h = '<div style="background:var(--white);border:1.5px solid var(--border);border-radius:20px;padding:1.75rem">';
  h += '<div style="display:flex;align-items:center;gap:1rem;margin-bottom:1.25rem;flex-wrap:wrap">';
  h += '<div style="background:' + bg + ';border-radius:14px;padding:.85rem 1.25rem;text-align:center">';
  h += '<div style="font-family:JetBrains Mono,monospace;font-size:1.8rem;font-weight:700;color:' + cor + '">' + pontos + '<span style="font-size:1rem;opacity:.5">/' + max + '</span></div>';
  h += '<div style="font-size:.68rem;font-weight:700;color:' + cor + ';text-transform:uppercase;letter-spacing:.08em">Checklist</div>';
  h += '</div>';
  h += '<div><div style="font-size:.82rem;font-weight:700;color:var(--ink1)">Verificação automática</div><div style="font-size:.75rem;color:var(--ink3);margin-top:.2rem">Baseada em critérios objetivos não substitui a correção do professor.</div></div>';
  h += '</div>';
  h += '<div style="display:flex;flex-direction:column;gap:.5rem">';
  checks.forEach(function(c) {
    h += '<div style="display:flex;align-items:flex-start;gap:.6rem;padding:.5rem .6rem;border-radius:8px;background:' + (c.ok ? '#f0faf4' : '#fff8f8') + '">';
    h += '<span style="font-size:1rem;flex-shrink:0">' + (c.ok ? '✅' : '❌') + '</span>';
    h += '<div><div style="font-size:.82rem;font-weight:' + (c.ok ? '600' : '700') + ';color:' + (c.ok ? '#2e7d52' : '#c0392b') + '">' + c.label + '</div>';
    if (c.detalhe) h += '<div style="font-size:.74rem;color:var(--ink4);margin-top:.1rem">' + c.detalhe + '</div>';
    h += '</div></div>';
  });
  h += '</div>';
  // Nota: critérios qualitativos
  h += '<div style="margin-top:1rem;padding:.75rem 1rem;background:#f8f6ff;border-radius:10px;font-size:.78rem;color:var(--ink3);line-height:1.6"><strong>Não verificável automaticamente:</strong> coerência e coesão do texto, qualidade do vocabulário, correção ortográfica e gramática estes são avaliados pelo professor.</div>';
  h += '</div>';
  result.innerHTML = h;
  result.style.display = 'block';
  result.scrollIntoView({behavior:'smooth', block:'nearest'});
}
