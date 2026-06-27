/* ════════════════════════════════════════════════════════════════
   FQ9 HUB - Físico-Química 9.º ano
   Modelo de HUB ÚNICO espelhado no mat7 (NUNCA páginas por capítulo).
   Tabs: Teoria · Praticar · Fichas · Progresso.
   Capítulos são botões de seleção; conteúdo renderizado por JS.
   ════════════════════════════════════════════════════════════════ */

// ═══ Capítulos do 8.º ano (Prisma 8) ═══
var _fq9CapMeta = [
  {n:1, icon:'<i class="ph ph-car-profile"></i>',    label:'Movimento e Forças'},
  {n:2, icon:'<i class="ph ph-lightning"></i>',      label:'Eletricidade'},
  {n:3, icon:'<i class="ph ph-atom"></i>',           label:'Materiais e Tabela Periódica'},
  {n:4, icon:'<i class="ph ph-link"></i>',           label:'Ligação Química'}
];

// Cores por capítulo
var _fq9CapColors = {
  1:'#b06a6a', 2:'#a8854d', 3:'#4d978f', 4:'#7d6aa8'
};

// Subtemas por capítulo (programa FQ 9.º — Novo Universo)
var _fq9Subtemas = {
  1: ['Movimentos e velocidade', 'Forças e leis de Newton', 'Forças e fluidos', 'Trabalho e energia'],
  2: ['Corrente elétrica', 'Circuitos elétricos', 'Tensão e resistência', 'Efeitos da corrente'],
  3: ['Estrutura atómica', 'Tabela Periódica', 'Propriedades dos materiais'],
  4: ['Tipos de ligação', 'Iões e moléculas', 'Regra do octeto']
};

// ═══ FLASHCARDS / TEORIA por capítulo ═══
// Cap 1 (Números) - conteúdo real, fiel ao Prisma 8.
// Caps 2-8 - placeholders honestos até serem construídos.
// ═══ FLASHCARDS / TEORIA por capítulo (FQ 7.º — base no Universo FQ9) ═══
var _fq9Cards = {
  1: [
    { st: 1, tag: 'Definição', q: 'O que é a velocidade?', a: 'A rapidez com que um corpo muda de posição. Velocidade = distância ÷ tempo. Unidade SI: metro por segundo (m/s); também km/h.' },
    { st: 1, tag: 'Fórmula', q: 'Como se calcula a velocidade média?', a: 'v = distância percorrida ÷ tempo gasto. Ex.: 100 m em 20 s → 100 ÷ 20 = 5 m/s.' },
    { st: 1, tag: 'Conversão', q: 'Como passar de m/s para km/h?', a: 'Multiplica por 3,6. Ex.: 10 m/s × 3,6 = 36 km/h. (De km/h para m/s, divide por 3,6.)' },
    { st: 2, tag: 'Definição', q: 'O que é uma força?', a: 'Uma ação que altera o movimento de um corpo (acelera, trava, muda de direção) ou o deforma. Mede-se em newton (N).' },
    { st: 2, tag: 'Lei', q: 'O que diz a 1.ª Lei de Newton (inércia)?', a: 'Um corpo mantém o seu estado de repouso ou de movimento retilíneo uniforme, a menos que uma força resultante atue sobre ele.' },
    { st: 2, tag: 'Lei', q: 'O que diz a 2.ª Lei de Newton?', a: 'A força resultante é igual à massa vezes a aceleração: F = m × a. Quanto maior a força, maior a aceleração; quanto maior a massa, menor a aceleração.' },
    { st: 2, tag: 'Lei', q: 'O que diz a 3.ª Lei de Newton (ação-reação)?', a: 'A toda a ação corresponde uma reação igual e de sentido oposto. As forças atuam em corpos diferentes.' },
    { st: 2, tag: 'Definição', q: 'Qual a diferença entre massa e peso?', a: 'Massa (kg) é a quantidade de matéria. Peso (N) é a força gravítica: P = m × g, com g ≈ 10 N/kg na Terra.' },
    { st: 2, tag: 'Fórmula', q: 'Como se calcula o peso de um corpo?', a: 'P = m × g. Com g ≈ 10 N/kg: um corpo de 5 kg pesa 5 × 10 = 50 N.' },
    { st: 3, tag: 'Definição', q: 'O que é a pressão (em fluidos)?', a: 'Força exercida por unidade de área: p = F ÷ A. Unidade SI: pascal (Pa). Quanto menor a área, maior a pressão.' },
    { st: 3, tag: 'Definição', q: 'O que é a impulsão (força de Arquimedes)?', a: 'A força vertical para cima que um fluido exerce sobre um corpo nele mergulhado. Se a impulsão ≥ peso, o corpo flutua.' },
    { st: 4, tag: 'Definição', q: 'O que é o trabalho de uma força?', a: 'Energia transferida quando uma força desloca um corpo: W = F × d (força no sentido do movimento). Unidade: joule (J).' },
    { st: 4, tag: 'Definição', q: 'O que é a energia cinética?', a: 'A energia do movimento: Ec = ½ × m × v². Aumenta com a massa e (sobretudo) com a velocidade.' },
    { st: 4, tag: 'Definição', q: 'O que é a energia potencial gravítica?', a: 'A energia associada à altura: Ep = m × g × h. Quanto mais alto e mais pesado, maior.' },
    { st: 4, tag: 'Princípio', q: 'O que é a conservação da energia mecânica?', a: 'Sem atrito, a soma da energia cinética com a potencial mantém-se constante. A energia transforma-se de uma forma na outra.' },
    { st: 1, tag: 'Exemplo', q: 'Um carro a 36 km/h percorre 72 km. Quanto tempo demora?', a: '36 km/h significa 36 km por hora → 72 ÷ 36 = 2 horas.' }
  ],
  2: [
    { st: 1, tag: 'Definição', q: 'O que é a corrente elétrica?', a: 'O movimento orientado de cargas elétricas (eletrões) num condutor. Mede-se em ampere (A) com um amperímetro.' },
    { st: 3, tag: 'Definição', q: 'O que é a tensão (diferença de potencial)?', a: 'A "força" que põe as cargas em movimento num circuito. Mede-se em volt (V) com um voltímetro.' },
    { st: 3, tag: 'Definição', q: 'O que é a resistência elétrica?', a: 'A oposição que um material faz à passagem da corrente. Mede-se em ohm (Ω). Maior resistência → menor corrente.' },
    { st: 3, tag: 'Lei', q: 'O que diz a Lei de Ohm?', a: 'U = R × I (tensão = resistência × corrente). Permite relacionar as três grandezas num circuito.' },
    { st: 2, tag: 'Definição', q: 'O que é um circuito em série?', a: 'Os componentes estão ligados uns a seguir aos outros, num só caminho. A corrente é igual em todos; se um falha, todos apagam.' },
    { st: 2, tag: 'Definição', q: 'O que é um circuito em paralelo?', a: 'Os componentes estão em ramos separados. A tensão é igual em cada ramo; se um falha, os outros continuam a funcionar.' },
    { st: 2, tag: 'Instrumentos', q: 'Como se liga um amperímetro e um voltímetro?', a: 'O amperímetro liga-se em SÉRIE (mede corrente); o voltímetro liga-se em PARALELO (mede tensão).' },
    { st: 1, tag: 'Definição', q: 'O que são bons e maus condutores?', a: 'Condutores deixam passar a corrente (metais como cobre). Isoladores (maus condutores) não deixam (plástico, vidro, borracha).' },
    { st: 4, tag: 'Efeito', q: 'Qual é o efeito térmico (Joule) da corrente?', a: 'A corrente aquece os condutores. É usado em torradeiras, ferros de engomar e resistências de aquecimento.' },
    { st: 4, tag: 'Efeito', q: 'Quais são outros efeitos da corrente elétrica?', a: 'Efeito luminoso (lâmpadas), efeito químico (eletrólise, baterias) e efeito magnético (eletroíman, motores).' },
    { st: 2, tag: 'Fórmula', q: 'Lei de Ohm: se U = 12 V e R = 4 Ω, qual é a corrente I?', a: 'I = U ÷ R = 12 ÷ 4 = 3 A.' },
    { st: 2, tag: 'Definição', q: 'O que é um gerador num circuito?', a: 'O componente que fornece energia elétrica (pilha, bateria, fonte). Cria a diferença de potencial.' },
    { st: 4, tag: 'Símbolo', q: 'O que faz um interruptor?', a: 'Abre ou fecha o circuito, deixando ou não passar a corrente.' },
    { st: 2, tag: 'Segurança', q: 'Para que serve um fusível?', a: 'Protege o circuito: "queima" e corta a corrente quando esta é demasiado intensa, evitando incêndios.' },
    { st: 2, tag: 'Exemplo', q: 'Num circuito em série com 2 lâmpadas, o que acontece se uma se fundir?', a: 'A outra também apaga, porque o circuito fica aberto (há um só caminho para a corrente).' },
    { st: 2, tag: 'Comparação', q: 'Num circuito em paralelo, o que acontece se uma lâmpada se fundir?', a: 'As outras continuam acesas: cada ramo é um caminho independente para a corrente. É assim que se ligam as luzes de uma casa.' }
  ],
  3: [
    { st: 1, tag: 'Definição', q: 'Quais são as partículas do átomo?', a: 'Protões (carga +) e neutrões (sem carga) no núcleo; eletrões (carga −) à volta, na nuvem eletrónica.' },
    { st: 1, tag: 'Definição', q: 'O que é o número atómico (Z)?', a: 'O número de protões do átomo. Identifica o elemento químico. Num átomo neutro, Z = número de eletrões.' },
    { st: 1, tag: 'Definição', q: 'O que é o número de massa (A)?', a: 'A soma do número de protões com o número de neutrões: A = Z + N (N = nº de neutrões).' },
    { st: 1, tag: 'Cálculo', q: 'Um átomo tem Z = 11 e A = 23. Quantos neutrões tem?', a: 'N = A − Z = 23 − 11 = 12 neutrões.' },
    { st: 1, tag: 'Definição', q: 'O que são isótopos?', a: 'Átomos do mesmo elemento (mesmo Z) mas com diferente número de neutrões (diferente A). Ex.: carbono-12 e carbono-14.' },
    { st: 2, tag: 'Definição', q: 'O que é a Tabela Periódica?', a: 'A organização dos elementos químicos por ordem crescente de número atómico (Z), em períodos (linhas) e grupos (colunas).' },
    { st: 2, tag: 'Definição', q: 'O que é um período e um grupo na Tabela Periódica?', a: 'Período = linha horizontal (nº de níveis de energia). Grupo = coluna vertical (elementos com propriedades semelhantes).' },
    { st: 2, tag: 'Definição', q: 'O que são os metais alcalinos?', a: 'Os elementos do Grupo 1 (lítio, sódio, potássio…). São muito reativos e formam iões com carga +1.' },
    { st: 2, tag: 'Definição', q: 'O que são os gases nobres?', a: 'Os elementos do Grupo 18 (hélio, néon, árgon…). São muito estáveis e pouco reativos (têm o último nível completo).' },
    { st: 3, tag: 'Definição', q: 'O que distingue metais de não-metais?', a: 'Metais: bons condutores, brilhantes, maleáveis (ex.: ferro, cobre). Não-metais: maus condutores, frágeis (ex.: enxofre, cloro).' },
    { st: 1, tag: 'Definição', q: 'O que é a distribuição eletrónica?', a: 'A forma como os eletrões se distribuem pelos níveis de energia. Ex.: sódio (11 e⁻) → 2,8,1.' },
    { st: 1, tag: 'Regra', q: 'Quantos eletrões cabem nos primeiros níveis?', a: '1.º nível: até 2 eletrões; 2.º nível: até 8; 3.º nível: até 8 (no básico). Preenchem-se de dentro para fora.' },
    { st: 1, tag: 'Definição', q: 'O que são eletrões de valência?', a: 'Os eletrões do último nível de energia. São eles que determinam as ligações químicas e a reatividade do elemento.' },
    { st: 1, tag: 'Exemplo', q: 'O oxigénio tem Z = 8. Qual a sua distribuição eletrónica?', a: '8 eletrões → 2,6. Tem 6 eletrões de valência.' },
    { st: 2, tag: 'Definição', q: 'O que é um elemento químico?', a: 'Uma substância formada por átomos todos com o mesmo número atómico (Z). Ex.: ferro, oxigénio, ouro.' },
    { st: 3, tag: 'Propriedade', q: 'Como variam as propriedades dos elementos de um mesmo grupo da Tabela Periódica?', a: 'Os elementos do mesmo grupo têm propriedades químicas semelhantes, porque têm o mesmo número de eletrões de valência.' }
  ],
  4: [
    { st: 1, tag: 'Definição', q: 'O que é uma ligação química?', a: 'A união entre átomos para formarem substâncias mais estáveis. Os átomos ligam-se para completar o último nível de eletrões.' },
    { st: 3, tag: 'Regra', q: 'O que é a regra do octeto?', a: 'Os átomos tendem a ficar com 8 eletrões no último nível (como os gases nobres), ganhando, perdendo ou partilhando eletrões.' },
    { st: 1, tag: 'Definição', q: 'O que é a ligação iónica?', a: 'Forma-se entre um metal e um não-metal: um átomo cede eletrões (fica ião +) e outro recebe (fica ião −). Ex.: NaCl (sal).' },
    { st: 1, tag: 'Definição', q: 'O que é a ligação covalente?', a: 'Forma-se entre não-metais que PARTILHAM eletrões. Ex.: H₂O (água), O₂, CO₂.' },
    { st: 2, tag: 'Definição', q: 'O que é um ião?', a: 'Um átomo (ou grupo) com carga elétrica, por ter perdido ou ganho eletrões. Catião = positivo (perdeu e⁻); anião = negativo (ganhou e⁻).' },
    { st: 2, tag: 'Exemplo', q: 'O sódio (Na) forma que ião?', a: 'Perde 1 eletrão → catião Na⁺ (carga +1), ficando com o último nível completo.' },
    { st: 2, tag: 'Exemplo', q: 'O cloro (Cl) forma que ião?', a: 'Ganha 1 eletrão → anião Cl⁻ (carga −1), completando o último nível.' },
    { st: 2, tag: 'Definição', q: 'O que é uma molécula?', a: 'Um conjunto de átomos ligados por ligações covalentes. Ex.: H₂O tem 2 átomos de hidrogénio e 1 de oxigénio.' },
    { st: 2, tag: 'Definição', q: 'O que representa a fórmula química H₂O?', a: 'Uma molécula com 2 átomos de hidrogénio (H) e 1 de oxigénio (O) — a água.' },
    { st: 1, tag: 'Definição', q: 'O que é a ligação metálica?', a: 'A ligação entre átomos de metais, com eletrões livres partilhados por todos. Explica a condução elétrica e o brilho dos metais.' },
    { st: 1, tag: 'Regra', q: 'Metal + não-metal formam que tipo de ligação?', a: 'Ligação iónica (transferência de eletrões). Ex.: sódio + cloro → NaCl.' },
    { st: 1, tag: 'Regra', q: 'Não-metal + não-metal formam que tipo de ligação?', a: 'Ligação covalente (partilha de eletrões). Ex.: O₂, H₂O, CO₂.' },
    { st: 3, tag: 'Exemplo', q: 'Porque é que os gases nobres quase não fazem ligações?', a: 'Já têm o último nível completo (estável), por isso não precisam de ganhar, perder ou partilhar eletrões.' },
    { st: 2, tag: 'Exemplo', q: 'Quantos átomos tem a molécula de dióxido de carbono (CO₂)?', a: 'Três: 1 de carbono (C) e 2 de oxigénio (O).' },
    { st: 3, tag: 'Síntese', q: 'Porque é que os átomos se ligam?', a: 'Para atingirem maior estabilidade — em geral, ficando com o último nível de eletrões completo (regra do octeto).' },
    { st: 2, tag: 'Exemplo', q: 'Na ligação iónica, como se forma o cloreto de sódio (NaCl)?', a: 'O sódio cede 1 eletrão ao cloro: forma-se o ião Na⁺ e o ião Cl⁻, que se atraem por terem cargas opostas.' }
  ]
};

// Seleção atual por tab
var _fq9Sel = { resumo: 1, 'resumo-st': 0 };

// ═══ NAVEGAÇÃO DE TABS ═══
function fq9SwitchTab(tab, btn) {
  var pratModos = ['exercicios', 'quiz', 'flashcards', 'teste', 'jogos'];
  document.querySelectorAll('.mat7-hub-tab').forEach(function(b){ b.classList.remove('active'); });
  if (btn) {
    btn.classList.add('active');
  } else {
    // sub-modos de prática ativam o botão "Praticar"
    var targetTab = pratModos.indexOf(tab) !== -1 ? 'praticar' : tab;
    var tabBtn = document.querySelector('.mat7-hub-tab[data-tab="' + targetTab + '"]');
    if (tabBtn) tabBtn.classList.add('active');
  }
  document.querySelectorAll('.mat7-panel').forEach(function(p){ p.classList.remove('active'); p.style.setProperty('display','none','important'); });
  var panel = document.getElementById('fq9p-' + tab);
  if (panel) { panel.classList.add('active'); panel.style.setProperty('display','block','important'); }

  var titles = { resumo:'Teoria', praticar:'Praticar', fichas:'Fichas', progresso:'Progresso',
                 exercicios:'Exercícios', quiz:'Quiz', flashcards:'Flashcards', teste:'Teste', jogos:'Jogos' };
  if (titles[tab]) document.title = 'Físico-Química 9.º ' + titles[tab] + ' · 3ponto14';

  if (tab === 'resumo') fq9BuildResumoNav();
  else if (tab === 'exercicios') fq9BuildPraticarNav();
  else if (tab === 'quiz') fq9QuizBuildNav();
  else if (tab === 'flashcards') fq9FcBuildNav();
  else if (tab === 'teste') fq9TesteBuildNav();
  else if (tab === 'jogos') fq9JogosInit();
  else if (tab === 'fichas') fq9FichasBuildNav();
  else if (tab === 'progresso') fq9RenderProgresso();
}

// Abre um sub-modo de prática a partir dos cartões do menu Praticar.
function fq9OpenPraticar(modo) { fq9SwitchTab(modo, null); }

// ═══ TAB TEORIA ═══
function fq9BuildResumoNav() {
  var capRow = document.getElementById('fq9-resumo-cap-row');
  if (!capRow) return;
  var activeCap = _fq9Sel['resumo'] || 1;
  var h = '';
  _fq9CapMeta.forEach(function(m) {
    var color = _fq9CapColors[m.n] || '#516860';
    var isActive = activeCap === m.n;
    var activeStyle = isActive ? 'background:' + color + ';border-color:' + color + ';color:#fff' : '';
    var hoverCode = isActive ? '' : ' onmouseover="this.style.borderColor=\'' + color + '\';this.style.color=\'' + color + '\'" onmouseout="this.style.borderColor=\'\';this.style.color=\'\'"';
    h += '<button class="resumo-cap-btn' + (isActive ? ' active' : '') + '" data-cap="' + m.n + '" onclick="fq9ResumoSelectCap(' + m.n + ',this)" style="' + activeStyle + '"' + hoverCode + '>'
       + '<span class="resumo-cap-icon">' + m.icon + '</span>' + m.label + '</button>';
  });
  capRow.innerHTML = h;
  fq9ResumoShowSts(activeCap);
  fq9RenderResumoInline();
}

function fq9ResumoSelectCap(cap, btn) {
  _fq9Sel['resumo'] = cap;
  _fq9Sel['resumo-st'] = 0;
  var capRow = document.getElementById('fq9-resumo-cap-row');
  if (capRow) {
    capRow.querySelectorAll('.resumo-cap-btn').forEach(function(b) {
      b.classList.remove('active'); b.style.background = ''; b.style.borderColor = ''; b.style.color = '';
    });
  }
  if (btn) {
    var color = _fq9CapColors[cap] || '#516860';
    btn.classList.add('active');
    btn.style.background = color; btn.style.borderColor = color; btn.style.color = '#fff';
  }
  fq9ResumoShowSts(cap);
  fq9RenderResumoInline();
}

function fq9ResumoShowSts(cap) {
  var stRow = document.getElementById('fq9-resumo-st-row');
  if (!stRow) return;
  var sts = _fq9Subtemas[cap] || [];
  if (!sts.length) { stRow.style.display = 'none'; return; }
  var _stSel = _fq9Sel['resumo-st'] || 0;
  var h = '<div class="resumo-st-label">Subtema</div>';
  h += '<button class="resumo-st-btn' + (_stSel === 0 ? ' active' : '') + '" data-st="0" onclick="fq9ResumoSelectSt(this,' + cap + ',0)">Todos</button>';
  sts.forEach(function(st, i) {
    var isActive = _stSel === (i + 1);
    h += '<button class="resumo-st-btn' + (isActive ? ' active' : '') + '" data-st="' + (i + 1) + '" onclick="fq9ResumoSelectSt(this,' + cap + ',' + (i + 1) + ')">' + st + '</button>';
  });
  stRow.innerHTML = h;
  stRow.style.display = 'flex';
}

function fq9ResumoSelectSt(btn, cap, stIdx) {
  var stRow = document.getElementById('fq9-resumo-st-row');
  if (stRow) stRow.querySelectorAll('.resumo-st-btn').forEach(function(b) { b.classList.remove('active'); });
  if (btn) btn.classList.add('active');
  _fq9Sel['resumo'] = cap;
  _fq9Sel['resumo-st'] = stIdx;
  fq9RenderResumoInline();
}

function fq9RenderResumoInline() {
  var cap = _fq9Sel['resumo'] || 1;
  var dest = document.getElementById('fq9-resumo-content');
  if (!dest) return;

  var color = (function(){
    var c = _fq9CapColors[cap] || '#516860';
    return c;
  })();

  var tagIcons = {
    'Definição':'ph-book-bookmark', 'Fórmula':'ph-function', 'Regra':'ph-check-square',
    'Propriedade':'ph-star', 'Exemplo':'ph-pencil-line', 'Estratégia':'ph-lightbulb',
    'Síntese':'ph-seal-check', 'Notação':'ph-at', 'Hierarquia':'ph-tree-structure',
    'Teorema':'ph-intersect', 'Conceito':'ph-cube'
  };

  var allCards = _fq9Cards[cap] || [];

  // Filtrar por subtema, se selecionado
  var stIdx = _fq9Sel['resumo-st'] || 0;
  // Filtro por subtema usa o campo st de cada flashcard (fiável); 0 = Todos.
  var cards = (stIdx > 0) ? allCards.filter(function(card){ return card.st === stIdx; }) : allCards;

  if (!cards.length) {
    dest.innerHTML = '<div class="resumo-empty">'
      + '<i class="ph ph-book-open-text resumo-empty-icon"></i>'
      + '<div class="resumo-empty-title">Conteúdo em preparação</div>'
      + '<div class="resumo-empty-sub">A teoria deste capítulo está a ser elaborada.</div></div>';
    return;
  }

  _fq9PM(cap, 'teoria'); // estudou a teoria deste capítulo

  // Acordeão partilhado: grupos colapsáveis + perguntas que abrem a resposta.
  dest.innerHTML = _teoriaAccordionHTML(cards, color, tagIcons);
}

/* ════════════════════════════════════════════════════════════════
   TAB PRATICAR - exercícios gerados com correção imediata
   Renderiza tudo no painel (sem páginas externas). Reutiliza os
   motores genéricos do chapter-engine: _capBuildQuizHTML,
   _capCheckAnswer, _capShowFeedback.
   ════════════════════════════════════════════════════════════════ */

// Gerador por capítulo (resolução lazy - buildEx_f71 é definida no fim do ficheiro).
// Só os caps com gerador são "praticáveis".

/* ═══ BANCO DE EXERCÍCIOS FQ 7.º (conceptual) ═══
   {t: subtema(1..N), enun, tipo:'mc'|'vf', opcoes, resposta, expl}
   Cap 1 (Universo) baseado no Universo FQ9. Caps 2-4 starters. */
var _fq9Banco = {
  1: [
    { t:1, tipo:'mc', enun:'A velocidade calcula-se por:', opcoes:['distância ÷ tempo','tempo ÷ distância','distância × tempo','distância + tempo'], resposta:'distância ÷ tempo', expl:'v = d / t. Ex.: 100 m em 20 s → 5 m/s.' },
    { t:1, tipo:'mc', enun:'Qual é a unidade SI de velocidade?', opcoes:['metro por segundo (m/s)','quilómetro (km)','newton (N)','segundo (s)'], resposta:'metro por segundo (m/s)', expl:'No SI a velocidade mede-se em m/s.' },
    { t:1, tipo:'mc', enun:'Um corpo percorre 60 m em 12 s. Qual é a sua velocidade média?', opcoes:['5 m/s','72 m/s','0,2 m/s','720 m/s'], resposta:'5 m/s', expl:'v = 60 ÷ 12 = 5 m/s.' },
    { t:1, tipo:'mc', enun:'Para converter 10 m/s em km/h:', opcoes:['×3,6 = 36 km/h','÷3,6 = 2,8 km/h','×10 = 100 km/h','+3,6'], resposta:'×3,6 = 36 km/h', expl:'De m/s para km/h multiplica-se por 3,6.' },
    { t:2, tipo:'mc', enun:'A 2.ª Lei de Newton é:', opcoes:['F = m × a','F = m ÷ a','F = m + a','F = a ÷ m'], resposta:'F = m × a', expl:'Força = massa × aceleração.' },
    { t:2, tipo:'vf', enun:'Pela 1.ª Lei de Newton, um corpo sem força resultante mantém o seu movimento.', opcoes:['Verdadeiro','Falso'], resposta:'Verdadeiro', expl:'Lei da inércia: mantém repouso ou movimento retilíneo uniforme.' },
    { t:2, tipo:'mc', enun:'O peso de um corpo de 5 kg (g ≈ 10 N/kg) é:', opcoes:['50 N','5 N','15 N','0,5 N'], resposta:'50 N', expl:'P = m × g = 5 × 10 = 50 N.' },
    { t:2, tipo:'mc', enun:'A força mede-se em:', opcoes:['newton (N)','quilograma (kg)','joule (J)','watt (W)'], resposta:'newton (N)', expl:'A unidade de força é o newton.' },
    { t:2, tipo:'vf', enun:'A massa de um corpo muda quando ele vai para a Lua.', opcoes:['Verdadeiro','Falso'], resposta:'Falso', expl:'A massa é sempre igual; o que muda é o peso (a gravidade é menor na Lua).' },
    { t:3, tipo:'mc', enun:'A pressão calcula-se por:', opcoes:['força ÷ área','força × área','área ÷ força','força + área'], resposta:'força ÷ área', expl:'p = F / A. Unidade: pascal (Pa).' },
    { t:3, tipo:'mc', enun:'A força para cima que um líquido faz num corpo mergulhado chama-se:', opcoes:['impulsão','peso','atrito','tensão'], resposta:'impulsão', expl:'É a impulsão (força de Arquimedes).' },
    { t:3, tipo:'vf', enun:'Quanto menor a área, maior a pressão (para a mesma força).', opcoes:['Verdadeiro','Falso'], resposta:'Verdadeiro', expl:'p = F/A: área menor → pressão maior (por isso uma faca afiada corta melhor).' },
    { t:4, tipo:'mc', enun:'O trabalho de uma força calcula-se por:', opcoes:['W = F × d','W = F ÷ d','W = m × g','W = F + d'], resposta:'W = F × d', expl:'Trabalho = força × deslocamento (no sentido do movimento). Unidade: joule.' },
    { t:4, tipo:'mc', enun:'A energia cinética depende de:', opcoes:['massa e velocidade','só da altura','só da cor','da temperatura'], resposta:'massa e velocidade', expl:'Ec = ½ m v². Aumenta com a massa e a velocidade.' },
    { t:4, tipo:'mc', enun:'A energia potencial gravítica depende de:', opcoes:['massa, gravidade e altura','só da velocidade','só do tempo','da área'], resposta:'massa, gravidade e altura', expl:'Ep = m × g × h.' },
    { t:1, tipo:'mc', enun:'Um carro a 90 km/h, em m/s, anda a (÷3,6):', opcoes:['25 m/s','324 m/s','90 m/s','2,5 m/s'], resposta:'25 m/s', expl:'90 ÷ 3,6 = 25 m/s.' },
    { t:2, tipo:'mc', enun:'Uma força de 20 N atua numa massa de 4 kg. A aceleração é (a = F/m):', opcoes:['5 m/s²','80 m/s²','24 m/s²','0,2 m/s²'], resposta:'5 m/s²', expl:'a = F ÷ m = 20 ÷ 4 = 5 m/s².' },
    { t:3, tipo:'mc', enun:'Uma força de 100 N aplicada numa área de 2 m² exerce uma pressão de:', opcoes:['50 Pa','200 Pa','98 Pa','0,02 Pa'], resposta:'50 Pa', expl:'p = F ÷ A = 100 ÷ 2 = 50 Pa.' },
    { t:4, tipo:'mc', enun:'Uma força de 30 N desloca um corpo 4 m. O trabalho realizado é:', opcoes:['120 J','7,5 J','34 J','120 N'], resposta:'120 J', expl:'W = F × d = 30 × 4 = 120 J.' }
  ],
  2: [
    { t:1, tipo:'mc', enun:'A corrente elétrica é:', opcoes:['o movimento orientado de cargas','a cor de um fio','a temperatura do fio','o peso da pilha'], resposta:'o movimento orientado de cargas', expl:'É o movimento de eletrões num condutor. Mede-se em ampere (A).' },
    { t:1, tipo:'mc', enun:'A corrente elétrica mede-se em:', opcoes:['ampere (A)','volt (V)','ohm (Ω)','watt (W)'], resposta:'ampere (A)', expl:'A corrente mede-se em ampere, com um amperímetro.' },
    { t:1, tipo:'mc', enun:'A tensão (diferença de potencial) mede-se em:', opcoes:['volt (V)','ampere (A)','ohm (Ω)','newton (N)'], resposta:'volt (V)', expl:'A tensão mede-se em volt, com um voltímetro.' },
    { t:3, tipo:'mc', enun:'A Lei de Ohm é:', opcoes:['U = R × I','U = R ÷ I','U = R + I','I = U × R'], resposta:'U = R × I', expl:'Tensão = resistência × corrente.' },
    { t:3, tipo:'mc', enun:'Se U = 12 V e R = 4 Ω, a corrente I é:', opcoes:['3 A','48 A','8 A','0,3 A'], resposta:'3 A', expl:'I = U ÷ R = 12 ÷ 4 = 3 A.' },
    { t:3, tipo:'mc', enun:'A resistência elétrica mede-se em:', opcoes:['ohm (Ω)','volt (V)','ampere (A)','joule (J)'], resposta:'ohm (Ω)', expl:'A resistência mede-se em ohm (Ω).' },
    { t:2, tipo:'mc', enun:'Num circuito em SÉRIE, se uma lâmpada se funde:', opcoes:['todas apagam','as outras continuam acesas','aumenta a corrente','nada acontece'], resposta:'todas apagam', expl:'Há um só caminho; ao abrir, a corrente para em todas.' },
    { t:2, tipo:'mc', enun:'Num circuito em PARALELO, se uma lâmpada se funde:', opcoes:['as outras continuam acesas','todas apagam','o circuito explode','a pilha descarrega logo'], resposta:'as outras continuam acesas', expl:'Cada ramo é independente.' },
    { t:2, tipo:'mc', enun:'O amperímetro liga-se:', opcoes:['em série','em paralelo','fora do circuito','à terra'], resposta:'em série', expl:'O amperímetro mede a corrente → liga-se em série.' },
    { t:2, tipo:'mc', enun:'O voltímetro liga-se:', opcoes:['em paralelo','em série','dentro da pilha','ao interruptor'], resposta:'em paralelo', expl:'O voltímetro mede a tensão → liga-se em paralelo.' },
    { t:1, tipo:'mc', enun:'Qual destes é um bom condutor elétrico?', opcoes:['Cobre','Plástico','Vidro','Borracha'], resposta:'Cobre', expl:'Os metais (como o cobre) conduzem bem; plástico/vidro/borracha são isoladores.' },
    { t:4, tipo:'mc', enun:'Uma torradeira usa sobretudo o efeito:', opcoes:['térmico (Joule)','magnético','químico','sonoro'], resposta:'térmico (Joule)', expl:'A corrente aquece a resistência (efeito térmico).' },
    { t:4, tipo:'mc', enun:'Um eletroíman baseia-se no efeito:', opcoes:['magnético','térmico','luminoso','químico'], resposta:'magnético', expl:'A corrente cria um campo magnético (efeito magnético).' },
    { t:4, tipo:'vf', enun:'A eletrólise e as baterias usam o efeito químico da corrente.', opcoes:['Verdadeiro','Falso'], resposta:'Verdadeiro', expl:'O efeito químico provoca reações (eletrólise, pilhas).' },
    { t:3, tipo:'mc', enun:'Se U = 9 V e I = 3 A, a resistência R é (R = U/I):', opcoes:['3 Ω','27 Ω','12 Ω','0,3 Ω'], resposta:'3 Ω', expl:'R = U ÷ I = 9 ÷ 3 = 3 Ω.' },
    { t:1, tipo:'vf', enun:'A borracha e o plástico são bons isoladores elétricos.', opcoes:['Verdadeiro','Falso'], resposta:'Verdadeiro', expl:'Não deixam passar facilmente a corrente; por isso revestem os fios.' },
    { t:2, tipo:'mc', enun:'Para que serve um fusível num circuito?', opcoes:['interromper a corrente se for excessiva','aumentar a tensão','medir a corrente','dar luz'], resposta:'interromper a corrente se for excessiva', expl:'Funde-se e abre o circuito, protegendo contra sobrecargas.' },
    { t:4, tipo:'mc', enun:'Uma lâmpada incandescente transforma energia elétrica sobretudo em:', opcoes:['luz e calor','som','energia química','energia mecânica'], resposta:'luz e calor', expl:'Boa parte da energia dissipa-se como calor (por isso é pouco eficiente).' }
  ],
  3: [
    { t:1, tipo:'mc', enun:'As partículas do núcleo do átomo são:', opcoes:['protões e neutrões','eletrões e protões','só eletrões','só neutrões'], resposta:'protões e neutrões', expl:'No núcleo: protões (+) e neutrões (sem carga). Os eletrões (−) ficam à volta.' },
    { t:1, tipo:'mc', enun:'O número atómico (Z) é o número de:', opcoes:['protões','neutrões','protões + neutrões','eletrões de valência'], resposta:'protões', expl:'Z = nº de protões; identifica o elemento.' },
    { t:1, tipo:'mc', enun:'O número de massa (A) é:', opcoes:['protões + neutrões','protões − neutrões','só protões','só eletrões'], resposta:'protões + neutrões', expl:'A = Z + N.' },
    { t:1, tipo:'mc', enun:'Um átomo com Z = 11 e A = 23 tem quantos neutrões?', opcoes:['12','11','23','34'], resposta:'12', expl:'N = A − Z = 23 − 11 = 12.' },
    { t:1, tipo:'mc', enun:'Isótopos do mesmo elemento têm:', opcoes:['igual Z e diferente nº de neutrões','diferente Z','igual A','diferente nº de protões'], resposta:'igual Z e diferente nº de neutrões', expl:'Mesmo elemento (mesmo Z), nº de neutrões diferente (A diferente).' },
    { t:2, tipo:'mc', enun:'A Tabela Periódica organiza os elementos por ordem crescente de:', opcoes:['número atómico (Z)','massa volúmica','cor','número de massa'], resposta:'número atómico (Z)', expl:'Estão por ordem crescente de Z.' },
    { t:2, tipo:'mc', enun:'Numa Tabela Periódica, um GRUPO é:', opcoes:['uma coluna','uma linha','uma diagonal','o centro'], resposta:'uma coluna', expl:'Grupo = coluna (elementos com propriedades semelhantes). Período = linha.' },
    { t:2, tipo:'mc', enun:'Os gases nobres (Grupo 18) são:', opcoes:['muito estáveis e pouco reativos','muito reativos','metais','líquidos'], resposta:'muito estáveis e pouco reativos', expl:'Têm o último nível completo → muito estáveis.' },
    { t:2, tipo:'mc', enun:'Os metais alcalinos pertencem ao:', opcoes:['Grupo 1','Grupo 18','Grupo 17','3.º período'], resposta:'Grupo 1', expl:'Grupo 1: lítio, sódio, potássio… muito reativos.' },
    { t:3, tipo:'mc', enun:'Uma propriedade típica dos metais é:', opcoes:['bons condutores e brilhantes','frágeis e maus condutores','sempre gasosos','não refletem luz'], resposta:'bons condutores e brilhantes', expl:'Metais conduzem bem e têm brilho; não-metais são maus condutores.' },
    { t:3, tipo:'mc', enun:'A distribuição eletrónica do sódio (Z=11) é:', opcoes:['2,8,1','2,8','8,2,1','2,9'], resposta:'2,8,1', expl:'11 eletrões: 2 no 1.º nível, 8 no 2.º, 1 no 3.º.' },
    { t:3, tipo:'mc', enun:'Quantos eletrões cabem no 1.º nível de energia?', opcoes:['2','8','1','18'], resposta:'2', expl:'1.º nível: máximo 2 eletrões.' },
    { t:1, tipo:'mc', enun:'Os eletrões de valência são os que estão:', opcoes:['no último nível','no núcleo','no 1.º nível','entre protões'], resposta:'no último nível', expl:'São os do último nível; determinam as ligações químicas.' },
    { t:1, tipo:'mc', enun:'O oxigénio (Z=8) tem distribuição eletrónica:', opcoes:['2,6','2,8','6,2','8'], resposta:'2,6', expl:'8 eletrões → 2,6 (6 de valência).' },
    { t:1, tipo:'mc', enun:'Quantos eletrões cabem no 2.º nível de energia?', opcoes:['8','2','18','4'], resposta:'8', expl:'1.º nível: 2; 2.º nível: 8; 3.º nível: 18 (mas com 8 já fica estável).' },
    { t:2, tipo:'mc', enun:'Numa Tabela Periódica, um PERÍODO é:', opcoes:['uma linha','uma coluna','uma diagonal','o canto'], resposta:'uma linha', expl:'Período = linha horizontal; grupo = coluna vertical.' },
    { t:3, tipo:'mc', enun:'Um elemento com 7 eletrões de valência (ex.: cloro) é um:', opcoes:['não-metal muito reativo','metal alcalino','gás nobre','metal de transição'], resposta:'não-metal muito reativo', expl:'Falta-lhe 1 eletrão para o octeto, por isso reage facilmente (Grupo 17, halogéneos).' },
    { t:2, tipo:'vf', enun:'Elementos do mesmo grupo têm o mesmo número de eletrões de valência.', opcoes:['Verdadeiro','Falso'], resposta:'Verdadeiro', expl:'É por isso que têm propriedades químicas semelhantes.' }
  ],
  4: [
    { t:3, tipo:'mc', enun:'A regra do octeto diz que os átomos tendem a ficar com:', opcoes:['8 eletrões no último nível','8 protões','8 neutrões','0 eletrões'], resposta:'8 eletrões no último nível', expl:'Ficam estáveis com 8 eletrões de valência (como os gases nobres).' },
    { t:1, tipo:'mc', enun:'A ligação iónica forma-se entre:', opcoes:['um metal e um não-metal','dois não-metais','dois gases nobres','dois metais'], resposta:'um metal e um não-metal', expl:'Há transferência de eletrões (ex.: NaCl).' },
    { t:1, tipo:'mc', enun:'A ligação covalente forma-se entre:', opcoes:['não-metais (partilha de eletrões)','metal e não-metal','dois iões','gases nobres'], resposta:'não-metais (partilha de eletrões)', expl:'Partilham eletrões (ex.: H₂O, O₂).' },
    { t:2, tipo:'mc', enun:'Um catião é um ião com carga:', opcoes:['positiva (perdeu eletrões)','negativa','neutra','dupla negativa'], resposta:'positiva (perdeu eletrões)', expl:'Catião = +, perdeu eletrões. Anião = −, ganhou eletrões.' },
    { t:2, tipo:'mc', enun:'O sódio (Na) forma o ião:', opcoes:['Na⁺','Na⁻','Na²⁺','Na²⁻'], resposta:'Na⁺', expl:'Perde 1 eletrão → Na⁺.' },
    { t:2, tipo:'mc', enun:'O cloro (Cl) forma o ião:', opcoes:['Cl⁻','Cl⁺','Cl²⁻','Cl²⁺'], resposta:'Cl⁻', expl:'Ganha 1 eletrão → Cl⁻.' },
    { t:2, tipo:'mc', enun:'A fórmula H₂O representa uma molécula com:', opcoes:['2 H e 1 O','1 H e 2 O','2 H e 2 O','1 H e 1 O'], resposta:'2 H e 1 O', expl:'2 átomos de hidrogénio e 1 de oxigénio.' },
    { t:3, tipo:'mc', enun:'Metal + não-metal formam uma ligação:', opcoes:['iónica','covalente','metálica','nenhuma'], resposta:'iónica', expl:'Transferência de eletrões → ligação iónica.' },
    { t:3, tipo:'mc', enun:'Não-metal + não-metal formam uma ligação:', opcoes:['covalente','iónica','metálica','nuclear'], resposta:'covalente', expl:'Partilha de eletrões → ligação covalente.' },
    { t:1, tipo:'vf', enun:'Os gases nobres quase não fazem ligações químicas.', opcoes:['Verdadeiro','Falso'], resposta:'Verdadeiro', expl:'Já têm o último nível completo (estáveis).' },
    { t:2, tipo:'mc', enun:'Quantos átomos tem a molécula de CO₂?', opcoes:['3','2','1','4'], resposta:'3', expl:'1 carbono + 2 oxigénios = 3 átomos.' },
    { t:1, tipo:'mc', enun:'A ligação metálica explica que propriedade dos metais?', opcoes:['conduzirem eletricidade','serem transparentes','flutuarem','não terem brilho'], resposta:'conduzirem eletricidade', expl:'Os eletrões livres permitem a condução elétrica.' },
    { t:3, tipo:'vf', enun:'Na ligação iónica há partilha de eletrões.', opcoes:['Verdadeiro','Falso'], resposta:'Falso', expl:'Na iónica há TRANSFERÊNCIA; a partilha é na covalente.' },
    { t:1, tipo:'mc', enun:'Porque é que os átomos se ligam?', opcoes:['para ficarem mais estáveis','para aumentarem de massa','para mudarem de cor','por acaso'], resposta:'para ficarem mais estáveis', expl:'Ligam-se para completar o último nível (regra do octeto).' },
    { t:2, tipo:'mc', enun:'Um anião é um ião com carga:', opcoes:['negativa (ganhou eletrões)','positiva','neutra','sempre dupla'], resposta:'negativa (ganhou eletrões)', expl:'Anião = − (ganhou eletrões); catião = + (perdeu eletrões).' },
    { t:2, tipo:'mc', enun:'A molécula de oxigénio O₂ tem:', opcoes:['2 átomos do mesmo elemento','2 elementos diferentes','3 átomos','1 átomo'], resposta:'2 átomos do mesmo elemento', expl:'O₂ é uma molécula formada por 2 átomos de oxigénio (ligação covalente).' },
    { t:1, tipo:'mc', enun:'No cloreto de sódio (NaCl), a ligação é iónica porque:', opcoes:['o sódio cede 1 eletrão ao cloro','partilham eletrões','não há eletrões','são dois metais'], resposta:'o sódio cede 1 eletrão ao cloro', expl:'Transferência de eletrões entre metal (Na) e não-metal (Cl) → forma Na⁺ e Cl⁻.' },
    { t:3, tipo:'vf', enun:'Na ligação covalente, os átomos partilham pares de eletrões.', opcoes:['Verdadeiro','Falso'], resposta:'Verdadeiro', expl:'Cada par partilhado conta para o octeto de ambos os átomos (ex.: H₂O).' }
  ]
};

function _fq9Gerador(cap) {
  // FQ é conceptual → usa banco de perguntas por capítulo (não geradores numéricos)
  if (typeof _fq9Banco !== 'undefined' && _fq9Banco[cap] && _fq9Banco[cap].length) {
    return function (tema, tipo, dif) { return _fq9PuxaBanco(cap, tema); };
  }
  return null;
}
var _fq9TemasCount = { 1: 4, 2: 3, 3: 5, 4: 3 };

/* Puxa uma pergunta aleatória do banco do capítulo (opcionalmente do tema). */
var _fq9BancoUsadas = {};
function _fq9PuxaBanco(cap, tema) {
  var pool = (_fq9Banco[cap] || []).filter(function (q) { return !tema || String(q.t) === String(tema); });
  if (!pool.length) pool = _fq9Banco[cap] || [];
  if (!pool.length) return null;
  var q = pool[Math.floor(Math.random() * pool.length)];
  // formato esperado pelo motor: {enun, tipo, opcoes, resposta, expl}
  return { enun: q.enun, tipo: q.tipo || 'mc', opcoes: q.opcoes || ['Verdadeiro', 'Falso'], resposta: q.resposta, expl: q.expl || '' };
}

// Estado da prática
var _fq9Prat = { cap: 1, st: 0, nivel: 'medio', score: { correct: 0, total: 0 }, answered: {}, exs: [] };
var _fq9TarefaAtiva=null, _fq9TarefaResp={};

function _fq9PratStorageKey(cap) { return 'edupt_fq9_cap' + cap; }

function _fq9SelCfg() {
  return { capMeta: _fq9CapMeta, capColors: _fq9CapColors, subtemas: _fq9Subtemas,
    subtemaTemas: _fq9SubtemaTemas, temasCount: _fq9TemasCount, gerador: _fq9Gerador };
}
function _fq9PratSel() {
  if (!_fq9Prat.sel) {
    _fq9Prat.sel = _selNew();
    if (_fq9Prat.cap) { _fq9Prat.sel.caps = [_fq9Prat.cap]; if (_fq9Prat.st) _fq9Prat.sel.stsByCap[_fq9Prat.cap] = [_fq9Prat.st]; }
  }
  return _fq9Prat.sel;
}

function fq9BuildPraticarNav() {
  var capRow = document.getElementById('fq9-praticar-cap-row');
  if (!capRow) return;
  var stRow = document.getElementById('fq9-praticar-st-row');
  if (stRow) stRow.style.display = 'none';
  capRow.innerHTML = _selBarsHTML(_fq9PratSel(), _fq9SelCfg(), 'fq9PratToggleCap', 'fq9PratToggleSt');
}

function fq9PratToggleCap(cap) {
  _selToggleCap(_fq9PratSel(), _fq9SelCfg(), cap);
  fq9BuildPraticarNav();
  fq9GerarExercicios();
}
function fq9PratToggleSt(cap, st) {
  _selToggleSt(_fq9PratSel(), cap, st);
  fq9BuildPraticarNav();
  fq9GerarExercicios();
}

function fq9PraticarSetNivel(nivel, btn) {
  _fq9Prat.nivel = nivel;
  var grp = document.getElementById('fq9-praticar-nivel');
  if (grp) grp.querySelectorAll('.gen-level-btn').forEach(function(b) { b.classList.remove('active'); });
  if (btn) btn.classList.add('active');
  fq9GerarExercicios();
}

// Mapa subtema → temas a usar no gerador (Cap 1 Números)
var _fq9SubtemaTemas = {
  1: { // Cap 1 Números
    1: ['1'],            // Dízimas
    2: ['2', '3'],       // Multiplicação e divisão
    3: ['4', '5'],       // Propriedades e expressões
    4: ['6', '7', '8'],  // Potências
    5: ['9'],            // Raízes
    6: ['10', '11']      // Notação científica
  },
  2: { // Cap 2 Vetores e Isometrias (1:1 com os 4 temas)
    1: ['1'], 2: ['2'], 3: ['3'], 4: ['4']
  },
  3: { // Cap 3 Polinómios e Equações (1:1 com os 6 temas)
    1: ['1'], 2: ['2'], 3: ['3'], 4: ['4'], 5: ['5'], 6: ['6']
  },
  4: { // Cap 4 Pitágoras: 1 Pitágoras(hip+cateto), 2 Recíproco, 3 Aplicações
    1: ['1', '2'], 2: ['3'], 3: ['4']
  },
  5: { // Cap 5 Equações Literais e Funções (1:1 com os 4 temas)
    1: ['1'], 2: ['2'], 3: ['3'], 4: ['4']
  },
  6: { // Cap 6 Sistemas (1:1 com os 4 temas)
    1: ['1'], 2: ['2'], 3: ['3'], 4: ['4']
  },
  7: { // Cap 7 Volumes (1:1 com os 6 temas)
    1: ['1'], 2: ['2'], 3: ['3'], 4: ['4'], 5: ['5'], 6: ['6']
  },
  8: { // Cap 8 Dados e Probabilidades (1:1 com os 6 temas)
    1: ['1'], 2: ['2'], 3: ['3'], 4: ['4'], 5: ['5'], 6: ['6']
  }
};

function fq9GerarExercicios() {
  var dest = document.getElementById('fq9-praticar-content');
  if (!dest) return;
  var pares = _selPares(_fq9PratSel(), _fq9SelCfg());
  if (!pares.length) { dest.innerHTML = ''; return; }
  pares = pares.slice();
  for (var pz = pares.length - 1; pz > 0; pz--) { var rz = Math.floor(Math.random() * (pz + 1)); var tz = pares[pz]; pares[pz] = pares[rz]; pares[rz] = tz; }
  var cap = _fq9PratSel().caps[0] || (pares[0] && pares[0].cap) || 1;

  var QTD = 8;
  var tipos = ['mc', 'fill', 'mc', 'vf', 'fill', 'mc', 'fill', 'mc'];
  var geradas = [];
  for (var i = 0; i < QTD; i++) {
    var par = pares[i % pares.length];
    var gen = _fq9Gerador(par.cap);
    if (!gen) continue;
    var ex = gen(par.tema, tipos[i % tipos.length], _fq9Prat.nivel);
    if (ex) geradas.push(ex);
  }
  var temasPorCap = {};
  pares.forEach(function (pr) { (temasPorCap[pr.cap] = temasPorCap[pr.cap] || []).push(pr.tema); });
  var banco = [];
  if (typeof _fq9Banco !== "undefined") {
    Object.keys(temasPorCap).forEach(function (c) {
      if (_fq9Banco[c]) banco = banco.concat(_fq9Banco[c].filter(function (q) { return temasPorCap[c].indexOf(String(q.t)) !== -1; }));
    });
  }
  var exs = (typeof _mixBancoGeradas === "function") ? _mixBancoGeradas(banco, geradas, QTD, 2, _fq9Prat.nivel)
    : geradas.map(function (e, idx) { return Object.assign({}, e, { num: idx + 1 }); });
  _fq9Prat.exs = exs;
  _fq9Prat.answered = {};
  _fq9Prat.score = { correct: 0, total: 0 };

  // Score bar + questões (reutiliza motor genérico do chapter-engine)
  var scoreBar = '<div class="score-bar" id="fq9-prat-scorebar">'
    + '<div><div class="score-num" id="fq9-prat-score">0</div><div class="score-label">pontos</div></div>'
    + '<div><div class="score-num" id="fq9-prat-total">/ 0</div><div class="score-label">respondidas</div></div>'
    + '<div class="progress-track"><div class="progress-fill" id="fq9-prat-prog" style="width:0%"></div></div>'
    + '<button class="btn btn-ghost ml-auto" onclick="fq9GerarExercicios()">↺ Novas questões</button>'
    + (_fq9TarefaAtiva ? '<button class="btn" style="background:#2e7d52;color:#fff;border:none;border-radius:999px;padding:6px 14px;font-weight:800;cursor:pointer;margin-left:.4rem" onclick="fq9EntregarTarefa()">\u2713 Terminar e entregar</button>' : '')
    + '</div>';
  var quizHTML = (typeof _capBuildQuizHTML === 'function')
    ? _capBuildQuizHTML(exs, 'm8ex', 'fq9CheckEx')
    : '<p style="color:var(--ink4)">Motor de exercícios indisponível.</p>';
  dest.innerHTML = scoreBar + '<div id="fq9-atribuir" style="margin:.2rem 0 .8rem"></div>' + quizHTML;
  _fq9Prat.cap = cap;
  if (typeof Atribuir !== 'undefined' && Atribuir.montar) {
    var _cm = _fq9CapMeta.filter(function (m) { return m.n === cap; })[0] || {};
    var _selA = _fq9PratSel();
    var _stA = (_selA.caps.length === 1 && (_selA.stsByCap[cap] || []).length === 1) ? _selA.stsByCap[cap][0] : 0;
    var _sn = (_fq9Subtemas[cap] && _stA > 0) ? (_fq9Subtemas[cap][_stA - 1] || '') : '';
    Atribuir.montar('fq9-atribuir', { curso: 'fq9', cursoNome: 'Físico-Química 9.º', tema: String(cap), temaNome: (_cm.label || ('Cap. ' + cap)), sub: String(_stA || ''), subNome: _sn, tipo: 'quiz', nivel: _fq9Prat.nivel });
  }
}

function fq9CheckEx(qid, tipo, val, btn) {
  if (_fq9Prat.answered[qid]) return;
  if (typeof _capCheckAnswer !== 'function') return;
  var r = _capCheckAnswer(qid, tipo, val);
  if (!r) return; // resposta vazia
  _fq9Prat.answered[qid] = true;
  if (r.correct) _fq9Prat.score.correct++;
  _fq9Prat.score.total++; if(_fq9TarefaAtiva){_fq9TarefaResp[qid]=!!r.correct;}
  if (typeof _capShowFeedback === 'function') _capShowFeedback(qid, r.correct, r.expl, val, btn);
  var se = document.getElementById('fq9-prat-score'); if (se) se.textContent = _fq9Prat.score.correct;
  var te = document.getElementById('fq9-prat-total'); if (te) te.textContent = '/ ' + _fq9Prat.score.total;
  var pe = document.getElementById('fq9-prat-prog'); if (pe && _fq9Prat.exs.length) pe.style.width = (_fq9Prat.score.total / _fq9Prat.exs.length * 100) + '%';
  fq9SaveProgress(_fq9Prat.cap, r.correct);
}

// ═══ PROGRESSO (localStorage por capítulo) ═══
function fq9SaveProgress(cap, correct) {
  try {
    var key = _fq9PratStorageKey(cap);
    var d = JSON.parse(localStorage.getItem(key) || '{}');
    if (!d.sections) d.sections = {};
    if (!d.sections.praticar) d.sections.praticar = { correct: 0, total: 0 };
    d.sections.praticar.total++;
    if (correct) d.sections.praticar.correct++;
    d.lastActivity = Date.now();
    localStorage.setItem(key, JSON.stringify(d));
  } catch (e) {}
}

// Regista atividade no ProgressManager (XP + streak), com capId próprio do 8.º ano
// ('fq9capN') para não misturar com o progresso do 7.º ano.
function _fq9PM(cap, tipo, opts) {
  if (typeof ProgressManager === 'undefined') return;
  try { ProgressManager.record('fq9cap' + cap, tipo, opts || {}); } catch (e) {}
}

/* ════════════════════════════════════════════════════════════════
   HELPER: linha de capítulos para sub-modos (quiz, flashcards, teste)
   Só capítulos com gerador ficam ativos.
   ════════════════════════════════════════════════════════════════ */
function _fq9BuildCapRow(rowId, activeCap, onclickName) {
  var row = document.getElementById(rowId);
  if (!row) return;
  var h = '';
  _fq9CapMeta.forEach(function(m) {
    var hasGen = !!_fq9Gerador(m.n);
    var color = _fq9CapColors[m.n] || '#516860';
    var isActive = activeCap === m.n;
    var activeStyle = isActive ? 'background:' + color + ';border-color:' + color + ';color:#fff' : '';
    var disabledStyle = hasGen ? '' : 'opacity:.45;cursor:not-allowed';
    var onclick = hasGen ? (onclickName + '(' + m.n + ',this)') : '';
    var title = hasGen ? '' : ' title="Em preparação"';
    h += '<button class="resumo-cap-btn' + (isActive ? ' active' : '') + '" data-cap="' + m.n + '" onclick="' + onclick + '" style="' + activeStyle + ';' + disabledStyle + '"' + title + '>'
       + '<span class="resumo-cap-icon">' + m.icon + '</span>' + m.label + (hasGen ? '' : ' ·') + '</button>';
  });
  row.innerHTML = h;
}

function _fq9SetActiveCapBtn(rowId, btn, cap) {
  var row = document.getElementById(rowId);
  if (row) row.querySelectorAll('.resumo-cap-btn').forEach(function(b){ b.classList.remove('active'); b.style.background=''; b.style.borderColor=''; b.style.color=''; });
  if (btn) { var color = _fq9CapColors[cap] || '#516860'; btn.classList.add('active'); btn.style.background=color; btn.style.borderColor=color; btn.style.color='#fff'; }
}

// Gera uma questão de escolha múltipla para um capítulo (usada por quiz).
function _fq9BuildMcQuestion(cap) {
  var gen = _fq9Gerador(cap);
  if (!gen) return null;
  var nTemas = _fq9TemasCount[cap] || 1;
  var ex = null;
  for (var i = 0; i < 10; i++) {
    var tema = String(rnd_f7q1(1, nTemas));
    ex = gen(tema, 'mc', 'medio');
    if (ex && ex.tipo === 'mc' && ex.opcoes && ex.opcoes.length >= 2) break;
  }
  return (ex && ex.tipo === 'mc' && ex.opcoes && ex.opcoes.length >= 2) ? ex : null;
}

/* ════════════════════════════════════════════════════════════════
   SUB-MODO: QUIZ RELÂMPAGO (3 vidas, streak)
   ════════════════════════════════════════════════════════════════ */
var _fq9Quiz = { cap: 1, sel: null, lives: 3, streak: 0, maxStreak: 0, score: 0, total: 0, answered: false, current: null };

function _fq9QuizSel() { if (!_fq9Quiz.sel) _fq9Quiz.sel = _selNew(); return _fq9Quiz.sel; }

function fq9QuizBuildNav() {
  var row = document.getElementById('fq9-quiz-cap-row');
  if (row) row.innerHTML = _selBarsHTML(_fq9QuizSel(), _fq9SelCfg(), 'fq9QuizToggleCap', 'fq9QuizToggleSt');
  var st = document.getElementById('fq9-quiz-st-row'); if (st) st.style.display = 'none';
  fq9QuizStart();
}

function fq9QuizToggleCap(cap) {
  _selToggleCap(_fq9QuizSel(), _fq9SelCfg(), cap);
  fq9QuizBuildNav();
}
function fq9QuizToggleSt(cap, st) {
  _selToggleSt(_fq9QuizSel(), cap, st);
  fq9QuizBuildNav();
}

function fq9QuizStart() {
  _fq9Quiz.lives = 3; _fq9Quiz.streak = 0; _fq9Quiz.maxStreak = 0;
  _fq9Quiz.score = 0; _fq9Quiz.total = 0; _fq9Quiz.answered = false;
  fq9QuizNext();
}

function fq9QuizNext() {
  var app = document.getElementById('fq9-quiz-app');
  if (!app) return;
  if (_fq9Quiz.lives <= 0) { fq9QuizGameOver(app); return; }
  var _qpares = _selPares(_fq9QuizSel(), _fq9SelCfg());
  _fq9Quiz.cap = (_fq9QuizSel().caps[0]) || (_qpares[0] && _qpares[0].cap) || 1;
  var ex = _selMcQuestion(_fq9QuizSel(), _fq9SelCfg());
  if (!ex) { app.innerHTML = '<p style="color:var(--ink4);padding:2rem;text-align:center">Sem questões disponíveis para esta seleção.</p>'; return; }
  _fq9Quiz.current = ex; _fq9Quiz.answered = false;
  var lives = '';
  for (var i = 0; i < 3; i++) lives += (i < _fq9Quiz.lives ? '❤️' : '🖤') + ' ';
  var opts = '';
  ex.opcoes.forEach(function(opt, idx) {
    opts += '<button class="qg-opt-btn" id="fq9qopt-' + idx + '" onclick="fq9QuizAnswer(' + idx + ')">' + opt + '</button>';
  });
  app.innerHTML =
    '<div class="qg-hub-bar">' +
      '<div class="qg-hub-lives">' + lives + '</div>' +
      '<div class="qg-hub-streak">' + (_fq9Quiz.streak > 1 ? '🔥 ' + _fq9Quiz.streak + ' seguidas' : '') + '</div>' +
      '<div class="qg-hub-score">✓ ' + _fq9Quiz.score + ' / ' + _fq9Quiz.total + '</div>' +
    '</div>' +
    '<div class="qg-hub-question">' + ex.enun + '</div>' +
    '<div class="qg-hub-opts">' + opts + '</div>' +
    '<div class="qg-hub-feedback" id="fq9-quiz-fb" style="min-height:2.5rem"></div>';
}

function fq9QuizAnswer(idx) {
  if (_fq9Quiz.answered) return;
  _fq9Quiz.answered = true;
  var ex = _fq9Quiz.current; if (!ex) return;
  var correct = String(ex.opcoes[idx]) === String(ex.resposta);
  _fq9Quiz.total++;
  document.querySelectorAll('.qg-opt-btn').forEach(function(b, i) {
    b.disabled = true;
    if (String(ex.opcoes[i]) === String(ex.resposta)) { b.style.background = '#4caf50'; b.style.color = '#fff'; }
  });
  var clicked = document.getElementById('fq9qopt-' + idx);
  if (clicked && !correct) { clicked.style.background = '#f44336'; clicked.style.color = '#fff'; }
  var fb = document.getElementById('fq9-quiz-fb');
  if (correct) {
    _fq9Quiz.score++; _fq9Quiz.streak++;
    if (_fq9Quiz.streak > _fq9Quiz.maxStreak) _fq9Quiz.maxStreak = _fq9Quiz.streak;
    if (fb) fb.innerHTML = '<span style="color:var(--correct,#3ecf8e);font-weight:700">✓ Certo!</span> ' + (ex.expl || '');
  } else {
    _fq9Quiz.lives--; _fq9Quiz.streak = 0;
    if (fb) fb.innerHTML = '<span style="color:var(--wrong,#ff6b6b);font-weight:700">✗ Errado.</span> ' + (ex.expl || '');
  }
  fq9SaveProgress(_fq9Quiz.cap, correct);
  setTimeout(function(){ fq9QuizNext(); }, 1400);
}

function fq9QuizGameOver(app) {
  var pct = _fq9Quiz.total > 0 ? Math.round(_fq9Quiz.score / _fq9Quiz.total * 100) : 0;
  _fq9PM(_fq9Quiz.cap, 'quiz', { pontuacao: _fq9Quiz.score, total: _fq9Quiz.total });
  var emoji = pct >= 90 ? '🏆' : pct >= 70 ? '⭐' : pct >= 50 ? '👍' : '📚';
  app.innerHTML =
    '<div style="text-align:center;padding:2.5rem 1rem">' +
      '<div style="font-size:3.5rem;margin-bottom:.75rem">' + emoji + '</div>' +
      '<div style="font-family:\'Cormorant Garamond\',serif;font-size:2rem;font-weight:900;color:var(--ink)">' + pct + '%</div>' +
      '<div style="color:var(--ink3);margin:.5rem 0 1.5rem">' + _fq9Quiz.score + ' certas em ' + _fq9Quiz.total + ' questões</div>' +
      '<div style="font-size:1.5rem;margin-bottom:1.5rem">Melhor sequência: ' + (_fq9Quiz.maxStreak || 0) + ' 🔥</div>' +
      '<button class="btn btn-primary" onclick="fq9QuizStart()">↺ Jogar novamente</button>' +
    '</div>';
}

/* ════════════════════════════════════════════════════════════════
   SUB-MODO: FLASHCARDS
   ════════════════════════════════════════════════════════════════ */
var _fq9Fc = { cap: 1, idx: 0, flipped: false, cards: [] };

function fq9FcBuildNav() {
  // primeiro capítulo com cartões
  if (!(_fq9Cards[_fq9Fc.cap] && _fq9Cards[_fq9Fc.cap].length)) {
    for (var c = 1; c <= 8; c++) { if (_fq9Cards[c] && _fq9Cards[c].length) { _fq9Fc.cap = c; break; } }
  }
  // linha de capítulos: só os que têm cartões
  var row = document.getElementById('fq9-fc-cap-row');
  if (row) {
    var h = '';
    _fq9CapMeta.forEach(function(m) {
      var has = !!(_fq9Cards[m.n] && _fq9Cards[m.n].length);
      var color = _fq9CapColors[m.n] || '#516860';
      var isActive = _fq9Fc.cap === m.n;
      var activeStyle = isActive ? 'background:' + color + ';border-color:' + color + ';color:#fff' : '';
      var disabled = has ? '' : 'opacity:.45;cursor:not-allowed';
      var onclick = has ? ('fq9FcSelectCap(' + m.n + ',this)') : '';
      var title = has ? '' : ' title="Em preparação"';
      h += '<button class="resumo-cap-btn' + (isActive ? ' active' : '') + '" onclick="' + onclick + '" style="' + activeStyle + ';' + disabled + '"' + title + '>'
         + '<span class="resumo-cap-icon">' + m.icon + '</span>' + m.label + (has ? '' : ' ·') + '</button>';
    });
    row.innerHTML = h;
  }
  fq9FcSelectCap(_fq9Fc.cap, null);
}

function fq9FcSelectCap(cap, btn) {
  if (!(_fq9Cards[cap] && _fq9Cards[cap].length)) return;
  if (btn) _fq9SetActiveCapBtn('fq9-fc-cap-row', btn, cap);
  _fq9Fc.cap = cap;
  _fq9Fc.cards = _fq9Cards[cap].slice();
  _fq9Fc.idx = 0; _fq9Fc.flipped = false;
  _fq9PM(cap, 'flashcard');
  fq9FcRender();
}

function fq9FcRender() {
  var app = document.getElementById('fq9-fc-app');
  if (!app) return;
  var cards = _fq9Fc.cards;
  if (!cards.length) { app.innerHTML = '<p style="color:var(--ink4);padding:2rem;text-align:center">Sem flashcards para este capítulo.</p>'; return; }
  var card = cards[_fq9Fc.idx];
  var color = _fq9CapColors[_fq9Fc.cap] || '#516860';
  var pct = Math.round((_fq9Fc.idx + 1) / cards.length * 100);
  app.innerHTML =
    '<div class="card card-narrow">' +
      '<div class="flex items-center justify-between mb-3">' +
        '<span class="fc2-tag-pill" style="background:' + color + ';color:#fff">' + (card.tag || '') + '</span>' +
        '<span class="fc-counter">' + (_fq9Fc.idx + 1) + ' / ' + cards.length + '</span>' +
      '</div>' +
      '<div class="fc2-prog-track"><div class="fc2-prog-fill" style="width:' + pct + '%;background:' + color + '"></div></div>' +
      '<div onclick="fq9FcFlip()" class="fc2-card-inner" style="cursor:pointer;min-height:140px">' +
        '<div>' +
          '<p style="font-size:1.05rem;font-weight:600;color:var(--ink);line-height:1.4">' + (card.q || '') + '</p>' +
          '<p style="font-size:.9rem;color:' + color + ';margin-top:.75rem;line-height:1.5;display:' + (_fq9Fc.flipped ? 'block' : 'none') + '">' + (card.a || '') + '</p>' +
          '<p style="font-size:.75rem;color:var(--ink4);margin-top:.5rem">' + (_fq9Fc.flipped ? '' : 'Carrega para ver a resposta') + '</p>' +
        '</div>' +
      '</div>' +
      '<div class="flex flex-wrap gap-3 justify-center mt-5">' +
        '<button class="btn btn-ghost" onclick="fq9FcPrev()">← Anterior</button>' +
        '<button class="btn btn-primary" onclick="fq9FcFlip()">↕ Virar</button>' +
        '<button class="btn btn-ghost" onclick="fq9FcNext()">Seguinte →</button>' +
      '</div>' +
    '</div>';
}

function fq9FcFlip() { _fq9Fc.flipped = !_fq9Fc.flipped; fq9FcRender(); }
function fq9FcNext() { _fq9Fc.idx = (_fq9Fc.idx + 1) % (_fq9Fc.cards.length || 1); _fq9Fc.flipped = false; fq9FcRender(); }
function fq9FcPrev() { _fq9Fc.idx = (_fq9Fc.idx - 1 + (_fq9Fc.cards.length || 1)) % (_fq9Fc.cards.length || 1); _fq9Fc.flipped = false; fq9FcRender(); }

/* ════════════════════════════════════════════════════════════════
   SUB-MODO: TESTE CRONOMETRADO
   ════════════════════════════════════════════════════════════════ */
var _fq9Teste = { cap: 1, sel: null, nivel: 'medio', qtd: 10, tempo: 600, exs: [], answered: {}, score: { correct: 0, total: 0 }, timer: null, restante: 0 };

function _fq9TesteSel() { if (!_fq9Teste.sel) _fq9Teste.sel = _selNew(); return _fq9Teste.sel; }

function fq9TesteBuildNav() {
  var row = document.getElementById('fq9-teste-cap-row');
  if (row) row.innerHTML = _selBarsHTML(_fq9TesteSel(), _fq9SelCfg(), 'fq9TesteToggleCap', 'fq9TesteToggleSt');
  var st = document.getElementById('fq9-teste-st-row'); if (st) st.style.display = 'none';
  fq9TesteRenderConfig();
}

function fq9TesteToggleCap(cap) {
  _selToggleCap(_fq9TesteSel(), _fq9SelCfg(), cap);
  fq9TesteBuildNav();
}
function fq9TesteToggleSt(cap, st) {
  _selToggleSt(_fq9TesteSel(), cap, st);
  fq9TesteBuildNav();
}

function fq9TesteRenderConfig() {
  var app = document.getElementById('fq9-teste-app');
  if (!app) return;
  if (_fq9Teste.timer) { clearInterval(_fq9Teste.timer); _fq9Teste.timer = null; }
  app.innerHTML =
    '<div class="card">' +
      '<div class="card-title">Configurar teste</div>' +
      '<div class="flex flex-wrap gap-6 items-end">' +
        '<div><div class="label-small">Nível</div>' +
          '<div class="gen-level-group" id="fq9-teste-nivel">' +
            '<button class="gen-level-btn' + (_fq9Teste.nivel==='facil'?' active':'') + '" onclick="fq9TesteSetNivel(\'facil\',this)"><span class="status-dot status-dot--easy"></span> Fácil</button>' +
            '<button class="gen-level-btn' + (_fq9Teste.nivel==='medio'?' active':'') + '" onclick="fq9TesteSetNivel(\'medio\',this)"><span class="status-dot status-dot--medium"></span> Médio</button>' +
            '<button class="gen-level-btn' + (_fq9Teste.nivel==='dificil'?' active':'') + '" onclick="fq9TesteSetNivel(\'dificil\',this)"><span class="status-dot status-dot--hard"></span> Difícil</button>' +
          '</div></div>' +
        '<div><div class="label-small">N.º questões</div>' +
          '<select class="ai-select" id="fq9-teste-qtd"><option value="10">10</option><option value="15">15</option><option value="20">20</option></select></div>' +
        '<div><div class="label-small">Tempo</div>' +
          '<select class="ai-select" id="fq9-teste-tempo"><option value="600">10 min</option><option value="900">15 min</option><option value="1800">30 min</option></select></div>' +
        '<button class="btn btn-primary" onclick="fq9TesteStart()">▶ Iniciar teste</button>' +
      '</div>' +
    '</div>';
}

function fq9TesteSetNivel(nivel, btn) {
  _fq9Teste.nivel = nivel;
  var grp = document.getElementById('fq9-teste-nivel');
  if (grp) grp.querySelectorAll('.gen-level-btn').forEach(function(b){ b.classList.remove('active'); });
  if (btn) btn.classList.add('active');
}

function fq9TesteStart() {
  var pares = _selPares(_fq9TesteSel(), _fq9SelCfg());
  if (!pares.length) return;
  pares = pares.slice();
  for (var sp = pares.length - 1; sp > 0; sp--) { var rsp = Math.floor(Math.random() * (sp + 1)); var tsp = pares[sp]; pares[sp] = pares[rsp]; pares[rsp] = tsp; }
  _fq9Teste.cap = (_fq9TesteSel().caps[0]) || (pares[0] && pares[0].cap) || 1;
  var qtdEl = document.getElementById('fq9-teste-qtd'), tempoEl = document.getElementById('fq9-teste-tempo');
  _fq9Teste.qtd = qtdEl ? parseInt(qtdEl.value) : 10;
  _fq9Teste.tempo = tempoEl ? parseInt(tempoEl.value) : 600;
  var tipos = ['mc', 'fill', 'mc', 'vf', 'fill'];
  var exs = [];
  for (var i = 0; i < _fq9Teste.qtd; i++) {
    var par = pares[i % pares.length];
    var gen = _fq9Gerador(par.cap); if (!gen) continue;
    var ex = gen(par.tema, tipos[i % tipos.length], _fq9Teste.nivel);
    if (ex) exs.push(Object.assign({}, ex, { num: i + 1 }));
  }
  _fq9Teste.exs = exs; _fq9Teste.answered = {}; _fq9Teste.score = { correct: 0, total: 0 };
  _fq9Teste.restante = _fq9Teste.tempo;

  var app = document.getElementById('fq9-teste-app');
  var quizHTML = (typeof _capBuildQuizHTML === 'function') ? _capBuildQuizHTML(exs, 'm8teste', 'fq9TesteCheck') : '';
  app.innerHTML =
    '<div class="exam-progress-bar" style="position:sticky;top:0;z-index:5;background:var(--surface);padding:.75rem;border-radius:12px;display:flex;align-items:center;gap:1rem;flex-wrap:wrap">' +
      '<div style="font-family:\'Cormorant Garamond\',serif;font-size:1.8rem;font-weight:900" id="fq9-teste-timer">' + _fq9FmtTime(_fq9Teste.restante) + '</div>' +
      '<div style="font-size:.78rem;color:var(--ink3)">Respondidas: <span id="fq9-teste-answered">0 / ' + _fq9Teste.qtd + '</span></div>' +
      '<button class="btn btn-ghost ml-auto" onclick="fq9TesteFinish()">⏹ Terminar</button>' +
    '</div>' +
    '<div id="fq9-teste-questions" style="margin-top:1rem">' + quizHTML + '</div>';

  _fq9Teste.timer = setInterval(function() {
    _fq9Teste.restante--;
    var t = document.getElementById('fq9-teste-timer');
    if (t) t.textContent = _fq9FmtTime(_fq9Teste.restante);
    if (_fq9Teste.restante <= 0) fq9TesteFinish();
  }, 1000);
}

function _fq9FmtTime(s) {
  var m = Math.floor(s / 60), sec = s % 60;
  return (m < 10 ? '0' : '') + m + ':' + (sec < 10 ? '0' : '') + sec;
}

function fq9TesteCheck(qid, tipo, val, btn) {
  if (_fq9Teste.answered[qid]) return;
  if (typeof _capCheckAnswer !== 'function') return;
  var r = _capCheckAnswer(qid, tipo, val);
  if (!r) return;
  _fq9Teste.answered[qid] = true;
  if (r.correct) _fq9Teste.score.correct++;
  _fq9Teste.score.total++;
  if (typeof _capShowFeedback === 'function') _capShowFeedback(qid, r.correct, r.expl, val, btn);
  var a = document.getElementById('fq9-teste-answered');
  if (a) a.textContent = _fq9Teste.score.total + ' / ' + _fq9Teste.qtd;
  fq9SaveProgress(_fq9Teste.cap, r.correct);
  if (_fq9Teste.score.total >= _fq9Teste.qtd) setTimeout(fq9TesteFinish, 600);
}

function fq9TesteFinish() {
  if (_fq9Teste.timer) { clearInterval(_fq9Teste.timer); _fq9Teste.timer = null; }
  var app = document.getElementById('fq9-teste-app');
  if (!app) return;
  var total = _fq9Teste.qtd;
  var correct = _fq9Teste.score.correct;
  var pct = total > 0 ? Math.round(correct / total * 100) : 0;
  _fq9PM(_fq9Teste.cap, 'quiz', { pontuacao: correct, total: total });
  var nota = Math.round(correct / total * 20 * 10) / 10;
  var emoji = pct >= 90 ? '🏆' : pct >= 70 ? '⭐' : pct >= 50 ? '👍' : '📚';
  app.innerHTML =
    '<div style="text-align:center;padding:2.5rem 1rem">' +
      '<div style="font-size:3.5rem;margin-bottom:.75rem">' + emoji + '</div>' +
      '<div style="font-family:\'Cormorant Garamond\',serif;font-size:2.2rem;font-weight:900;color:var(--ink)">' + nota + ' / 20</div>' +
      '<div style="color:var(--ink3);margin:.5rem 0 1.5rem">' + correct + ' certas em ' + total + ' questões (' + pct + '%)</div>' +
      '<button class="btn btn-primary" onclick="fq9TesteRenderConfig()">↺ Novo teste</button>' +
    '</div>';
}

/* ════════════════════════════════════════════════════════════════
   SUB-MODO: JOGOS (reutiliza o motor genérico _j24AutoInit)
   ════════════════════════════════════════════════════════════════ */
var _fq9JogosInited = false;
function fq9JogosInit() {
  (function(){ var pj=document.getElementById('fq9p-jogos'); if(pj && !document.getElementById('fq9-jogos-atr')){ var d=document.createElement('div'); d.id='fq9-jogos-atr'; d.style.margin='0 0 .8rem'; if(pj.firstChild) pj.insertBefore(d,pj.firstChild); else pj.appendChild(d); } if(typeof Atribuir!=='undefined'&&Atribuir.montar) Atribuir.montar('fq9-jogos-atr',{curso:'fq9',cursoNome:'Físico-Química 9.º',tipo:'jogo',nivel:'',caps:_fq9CapMeta.map(function(mm){return {n:mm.n,label:mm.label};})}); })();
  _fq9PM(_fq9Prat.cap || 1, 'jogo');
  if (_fq9JogosInited) return;
  if (typeof _j24AutoInit === 'function') {
    // Regista o curso nos jogos (matéria correta + filtro capítulo/subtema).
    if (typeof _gRegisterGameCourse === 'function') {
      _gRegisterGameCourse('fq9-jogos-app', {
        capMeta: _fq9CapMeta,
        subtemas: _fq9Subtemas,
        subtemaTemas: (typeof _fq9SubtemaTemas !== 'undefined') ? _fq9SubtemaTemas : null,
        temasCount: _fq9TemasCount,
        gerador: _fq9Gerador,
        banco: (typeof _fq9Banco !== 'undefined') ? _fq9Banco : null,
        qFor: function (level, sel) { return _jogoQForCourse(this, level, sel); }
      });
    }
    _j24AutoInit('fq9-jogos-app', 'medio');
    _fq9JogosInited = true;
  } else {
    var app = document.getElementById('fq9-jogos-app');
    if (app) app.innerHTML = '<p style="color:var(--ink4);padding:2rem;text-align:center">Jogos indisponíveis (motor não carregado).</p>';
  }
}

/* ════════════════════════════════════════════════════════════════
   TAB PROGRESSO
   Lê edupt_fq9_capN (gravado por fq9SaveProgress). Mostra resumo
   global, stats, barras por capítulo, Relatório PDF e Limpar.
   ════════════════════════════════════════════════════════════════ */
function _fq9ProgGetCaps() {
  var out = [];
  for (var cap = 1; cap <= 8; cap++) {
    var correct = 0, total = 0;
    try {
      var d = JSON.parse(localStorage.getItem('edupt_fq9_cap' + cap) || '{}');
      if (d.sections) Object.keys(d.sections).forEach(function(k) {
        correct += (d.sections[k].correct || 0);
        total += (d.sections[k].total || 0);
      });
    } catch (e) {}
    out.push({ cap: cap, correct: correct, total: total, pct: total > 0 ? Math.round(correct / total * 100) : 0 });
  }
  return out;
}

function fq9RenderProgresso() {
  var el = document.getElementById('fq9-progresso-content');
  if (!el) return;
  var caps = _fq9ProgGetCaps();
  var totalC = 0, totalT = 0;
  caps.forEach(function(c) { totalC += c.correct; totalT += c.total; });
  var globalPct = totalT > 0 ? Math.round(totalC / totalT * 100) : 0;

  var msg = totalT === 0 ? 'Ainda não começaste. Vai a Praticar e responde a umas questões!'
    : globalPct >= 80 ? 'Excelente trabalho! Estás a dominar a matéria.'
    : globalPct >= 60 ? 'Bom progresso! Continua a praticar para consolidar.'
    : globalPct >= 40 ? 'A progredir! Há capítulos que pedem mais atenção.'
    : 'Começaste! Pratica com regularidade - cada questão conta.';
  var icon = totalT === 0 ? 'ph-rocket-launch' : globalPct >= 80 ? 'ph-trophy' : globalPct >= 60 ? 'ph-star' : globalPct >= 40 ? 'ph-trend-up' : 'ph-book-open';

  var h = '';
  // Aviso localStorage
  h += '<div style="display:flex;align-items:center;gap:.75rem;background:#fdf0ef;border:1px solid #e8b4b0;border-radius:10px;padding:.65rem 1rem;margin-bottom:1.25rem;font-size:.82rem;color:#8b3a35;flex-wrap:wrap">'
     + '<i class="ph ph-info" style="flex-shrink:0"></i>'
     + '<span style="flex:1">O progresso é guardado <strong>apenas neste browser e neste dispositivo</strong>. '
     + '<button onclick="fq9ProgDownloadPDF()" style="font-family:inherit;font-size:.82rem;font-weight:700;color:#8b3a35;background:none;border:none;cursor:pointer;text-decoration:underline;padding:0">Guarda o relatório PDF</button> para o manteres.</span>'
     + '</div>';

  // Resumo global (gradiente índigo do 8.º ano)
  h += '<div style="background:var(--m8c1-base);border:1.5px solid var(--m8c1-mid);border-radius:16px;padding:1.1rem 1.25rem;margin-bottom:1.25rem;display:flex;align-items:center;gap:1rem;flex-wrap:wrap">'
     +   '<div style="width:52px;height:52px;border-radius:50%;background:var(--m8c1-mid);display:flex;align-items:center;justify-content:center;flex-shrink:0"><i class="ph ' + icon + '" style="font-size:1.4rem;color:#fff"></i></div>'
     +   '<div style="flex:1;min-width:180px">'
     +     '<div style="font-family:\'Cormorant Garamond\',serif;font-size:1.6rem;font-weight:900;color:var(--ink);line-height:1">' + (totalT > 0 ? globalPct + '<span style="font-size:1rem">%</span>' : '-') + '</div>'
     +     '<div style="font-size:.82rem;color:var(--ink2);margin-top:3px">' + msg + '</div>'
     +   '</div>'
     +   '<button class="btn btn-ghost" onclick="fq9ProgDownloadPDF()" style="font-size:.78rem;padding:7px 14px;display:inline-flex;align-items:center;gap:5px"><i class="ph ph-file-text"></i>Relatório PDF</button>'
     + '</div>';

  // XP + streak do ProgressManager (apenas dos capítulos do 8.º ano)
  var pmXp = 0, pmStreak = 0;
  if (typeof ProgressManager !== 'undefined') {
    try {
      var sum = ProgressManager.getSummary();
      pmStreak = sum.streak || 0;
      if (sum.caps) Object.keys(sum.caps).forEach(function(k) { if (k.indexOf('fq9cap') === 0) pmXp += (sum.caps[k].xp || 0); });
    } catch (e) {}
  }

  // Stat chips
  h += '<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(130px,1fr));gap:.75rem;margin-bottom:1.5rem">';
  [{ v: totalT, l: 'Questões respondidas' }, { v: totalC, l: 'Respostas certas' }, { v: totalT > 0 ? globalPct + '%' : '-', l: 'Taxa global' }, { v: pmXp + ' XP', l: 'XP total' }, { v: pmStreak + (pmStreak === 1 ? ' dia' : ' dias'), l: 'Streak atual' }].forEach(function(s) {
    h += '<div class="card" style="text-align:center;padding:1rem .75rem">'
       + '<div style="font-family:\'Cormorant Garamond\',serif;font-size:1.75rem;font-weight:900;color:var(--ink);line-height:1">' + s.v + '</div>'
       + '<div style="font-size:.68rem;font-weight:700;color:var(--ink4);text-transform:uppercase;letter-spacing:.06em;margin-top:4px">' + s.l + '</div>'
       + '</div>';
  });
  h += '</div>';

  // Barras por capítulo
  h += '<div class="card"><div class="card-title">Desempenho por capítulo</div><div style="display:flex;flex-direction:column;gap:.75rem;margin-top:.5rem">';
  caps.forEach(function(c) {
    var m = _fq9CapMeta[c.cap - 1];
    var color = _fq9CapColors[c.cap] || '#516860';
    var label = c.total > 0 ? (c.pct + '% · ' + c.correct + '/' + c.total) : 'sem atividade';
    h += '<div>'
       + '<div style="display:flex;justify-content:space-between;font-size:.8rem;margin-bottom:.25rem"><span style="font-weight:700;color:var(--ink2)">' + m.label + '</span><span style="color:var(--ink4)">' + label + '</span></div>'
       + '<div style="height:8px;background:var(--border);border-radius:99px;overflow:hidden"><div style="height:100%;width:' + c.pct + '%;background:' + color + ';border-radius:99px;transition:width .4s"></div></div>'
       + '</div>';
  });
  h += '</div></div>';

  // Treino Direcionado: capítulo com pior taxa (entre os que têm atividade)
  if (totalT > 0) {
    var pior = null;
    caps.forEach(function(c) { if (c.total >= 3 && (!pior || c.pct < pior.pct)) pior = c; });
    if (pior) {
      var mp = _fq9CapMeta[pior.cap - 1];
      var colorp = _fq9CapColors[pior.cap] || '#516860';
      h += '<div class="card mt-4" style="border-color:' + colorp + '">'
        + '<div class="card-title" style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:.5rem">'
        + '<span>🎯 Treino Direcionado</span></div>'
        + '<div style="font-size:.85rem;color:var(--ink2);margin:.3rem 0 .8rem">O capítulo onde tens mais a melhorar é <strong>' + mp.label + '</strong> (' + pior.pct + '%). Pratica mais um pouco para subir a tua taxa!</div>'
        + '<button class="btn btn-primary" onclick="fq9TreinarCap(' + pior.cap + ')" style="display:inline-flex;align-items:center;gap:6px"><i class="ph ph-target"></i> Treinar ' + mp.label + '</button>'
        + '</div>';
    }
  }

  // Última atualização
  h += '<div style="font-size:.72rem;color:var(--ink4);margin-top:1rem">Última atualização: ' + new Date().toLocaleString('pt-PT', { hour: '2-digit', minute: '2-digit', day: '2-digit', month: '2-digit' }) + '</div>';

  // Limpar
  h += '<div class="mt-4 flex flex-wrap gap-3"><button class="btn btn-ghost" onclick="fq9ProgReset()"><i class="ph ph-trash"></i> Limpar progresso</button></div>';

  el.innerHTML = h;
}

// Abre a tab Exercícios da Praticar já no capítulo indicado (treino direcionado).
function fq9TreinarCap(cap) {
  _fq9Prat.cap = cap;
  _fq9Prat.st = 0;
  _fq9Prat.sel = { caps: [cap], stsByCap: {} };
  fq9SwitchTab('exercicios', null);
}

function fq9ProgReset() {
  if (typeof window !== 'undefined' && window.confirm && !window.confirm('Limpar todo o progresso do 8.º ano? Esta ação não pode ser desfeita.')) return;
  for (var cap = 1; cap <= 8; cap++) { try { localStorage.removeItem('edupt_fq9_cap' + cap); } catch (e) {} }
  // Remove só os capítulos do 8.º ano (fq9cap*) do ProgressManager, preservando o 7.º.
  try {
    var raw = localStorage.getItem('edupt_progress_v2');
    if (raw) {
      var d = JSON.parse(raw);
      if (d.caps) { Object.keys(d.caps).forEach(function(k) { if (k.indexOf('fq9cap') === 0) delete d.caps[k]; }); }
      localStorage.setItem('edupt_progress_v2', JSON.stringify(d));
    }
  } catch (e) {}
  fq9RenderProgresso();
  if (typeof eduToast === 'function') eduToast('Progresso do 8.º ano limpo.', 'ok');
}

function fq9ProgDownloadPDF() {
  var caps = _fq9ProgGetCaps();
  var totalC = 0, totalT = 0;
  caps.forEach(function(c) { totalC += c.correct; totalT += c.total; });
  var globalPct = totalT > 0 ? Math.round(totalC / totalT * 100) : 0;
  var rows = caps.map(function(c) {
    var m = _fq9CapMeta[c.cap - 1];
    return '<tr><td style="padding:6px 10px;border-bottom:1px solid #eee">' + m.label + '</td>'
      + '<td style="padding:6px 10px;border-bottom:1px solid #eee;text-align:center">' + (c.total > 0 ? c.correct + ' / ' + c.total : '-') + '</td>'
      + '<td style="padding:6px 10px;border-bottom:1px solid #eee;text-align:center">' + (c.total > 0 ? c.pct + '%' : '-') + '</td></tr>';
  }).join('');
  var html = '<div style="font-family:Arial,sans-serif;max-width:680px;margin:0 auto;padding:24px">'
    + '<h1 style="font-size:20px;margin:0 0 4px">Relatório de Progresso · Físico-Química 9.º Ano</h1>'
    + '<div style="color:#666;font-size:13px;margin-bottom:16px">3ponto14 · ' + new Date().toLocaleString('pt-PT', { day: '2-digit', month: '2-digit', year: 'numeric' }) + '</div>'
    + eduAlunoLinhaPDF()
    + '<div style="background:#eef2f0;border:1px solid #9ab5aa;border-radius:8px;padding:12px 16px;margin-bottom:16px">'
    + '<strong>Taxa global:</strong> ' + (totalT > 0 ? globalPct + '%' : '-') + ' &nbsp;·&nbsp; ' + totalC + ' certas em ' + totalT + ' questões.</div>'
    + '<table style="width:100%;border-collapse:collapse;font-size:14px"><thead><tr style="background:#516860;color:#fff">'
    + '<th style="padding:8px 10px;text-align:left">Capítulo</th><th style="padding:8px 10px">Certas</th><th style="padding:8px 10px">%</th></tr></thead>'
    + '<tbody>' + rows + '</tbody></table></div>';
  if (typeof htmlToPdfDownload === 'function') htmlToPdfDownload(html, 'progresso-fq9.pdf');
  else if (typeof eduToast === 'function') eduToast('Geração de PDF indisponível.', 'warn');
}

/* ════════════════════════════════════════════════════════════════
   TAB FICHAS - gerador rico (multi-capítulo), igual ao 7.º ano.
   Tipos: resumo teórico, exercícios, teste, minitestes, soluções.
   Seleção de vários capítulos; nível; nº de exercícios; PDF ou HTML.
   ════════════════════════════════════════════════════════════════ */
var _fq9gf = {
  caps: {},
  sts: {},             // { cap: { stIdx: true } } subtemas por capítulo; vazio = todos            // { cap: true } selecionados
  tipos: { resumo: true, exercicios: true, teste: true, minitestes: false, solucoes: true },
  dif: 'facil',
  qty: 10
};

// Constrói a lista de capítulos selecionáveis (só os com gerador).
function fq9FichasBuildNav() {
  if(typeof Atribuir!=='undefined'&&Atribuir.fixo) Atribuir.fixo('fq9-fichas-atr','fq9AtribuirFicha');
  var el = document.getElementById('fq9-fichas-caps');
  if (!el) return;
  // por defeito, seleciona o primeiro capítulo com gerador
  var temAlgum = false;
  for (var k in _fq9gf.caps) { if (_fq9gf.caps[k]) { temAlgum = true; break; } }
  var h = '';
  _fq9CapMeta.forEach(function(m) {
    var hasGen = !!_fq9Gerador(m.n);
    if (!hasGen) return;
    if (!temAlgum) { _fq9gf.caps[m.n] = true; temAlgum = true; } // 1.º disponível
    var sel = !!_fq9gf.caps[m.n];
    var color = _fq9CapColors[m.n] || '#516860';
    var style = sel ? 'background:' + color + ';border-color:' + color + ';color:#fff' : '';
    h += '<button class="gf-cap-btn' + (sel ? ' active' : '') + '" data-cap="' + m.n + '" onclick="fq9gfToggleCap(' + m.n + ',this)" style="' + style + '">' + m.icon + ' ' + m.label + '</button>';
    // subtemas do capítulo selecionado (gerar ficha só de um subtema)
    if (sel) {
      var _sts = (typeof _fq9Subtemas !== 'undefined' && _fq9Subtemas[m.n]) ? _fq9Subtemas[m.n] : [];
      if (_sts.length) {
        var _esc = _fq9gf.sts[m.n] || {};
        var _alg = _fq9gfStsSel(m.n) !== null;
        h += '<div style="margin:.15rem 0 .55rem 1.1rem;display:flex;flex-wrap:wrap;gap:.3rem;align-items:center">';
        h += '<span style="font-size:.66rem;font-weight:800;color:var(--ink4);text-transform:uppercase;letter-spacing:.06em;margin-right:.2rem">Subtemas:</span>';
        h += '<button onclick="fq9gfToggleSt(' + m.n + ',0,this)" style="' + _fq9gfStStyle(!_alg, color) + '">Todos</button>';
        _sts.forEach(function (st, i) {
          var on = !!_esc[i + 1];
          h += '<button onclick="fq9gfToggleSt(' + m.n + ',' + (i + 1) + ',this)" style="' + _fq9gfStStyle(on, color) + '">' + st + '</button>';
        });
        h += '</div>';
      }
    }
  });
  el.innerHTML = h;
}

// Subtemas (índices 1..n) escolhidos para um capítulo; null = todos.
function _fq9gfStsSel(cap) {
  var sel = _fq9gf.sts[cap];
  if (!sel) return null;
  var out = [];
  Object.keys(sel).forEach(function (i) { if (sel[i]) out.push(parseInt(i)); });
  return out.length ? out : null;
}

// Chaves de tema correspondentes aos subtemas escolhidos; null = todos.
function _fq9gfTemasSel(cap) {
  var sts = _fq9gfStsSel(cap);
  if (!sts) return null;
  var mapa = (typeof _fq9SubtemaTemas !== 'undefined' && _fq9SubtemaTemas[cap]) ? _fq9SubtemaTemas[cap] : {};
  var temas = [];
  sts.forEach(function (i) { (mapa[i] || [String(i)]).forEach(function (t) { if (temas.indexOf(t) === -1) temas.push(t); }); });
  return temas.length ? temas : null;
}

function _fq9gfStStyle(on, color) {
  return 'border-radius:999px;padding:3px 11px;font-size:.7rem;font-weight:700;cursor:pointer;font-family:Montserrat,sans-serif;transition:all .15s;'
    + (on ? 'background:' + color + ';border:1.5px solid ' + color + ';color:#fff'
          : 'background:var(--white);border:1.5px solid var(--border);color:var(--ink3)');
}

function fq9gfToggleCap(cap, btn) {
  _fq9gf.caps[cap] = !_fq9gf.caps[cap];
  if (!_fq9gf.caps[cap]) delete _fq9gf.sts[cap]; // desmarcar cap limpa os subtemas
  fq9FichasBuildNav(); // re-render para mostrar/esconder a linha de subtemas
}

// idx 0 = «Todos» (limpa a seleção); idx 1..n alterna o subtema.
function fq9gfToggleSt(cap, idx, btn) {
  if (idx === 0) { delete _fq9gf.sts[cap]; }
  else {
    if (!_fq9gf.sts[cap]) _fq9gf.sts[cap] = {};
    _fq9gf.sts[cap][idx] = !_fq9gf.sts[cap][idx];
    if (_fq9gfStsSel(cap) === null) delete _fq9gf.sts[cap]; // tudo desmarcado = todos
  }
  fq9FichasBuildNav();
}

function fq9gfToggleType(btn) {
  var t = btn.getAttribute('data-type');
  _fq9gf.tipos[t] = !_fq9gf.tipos[t];
  btn.classList.toggle('active', _fq9gf.tipos[t]);
  var tick = btn.querySelector('.gf-tick'); if (tick) tick.textContent = _fq9gf.tipos[t] ? '✓' : '';
}

function fq9gfSetDif(btn) {
  _fq9gf.dif = btn.getAttribute('data-dif');
  var grp = document.getElementById('fq9-fichas-dif');
  if (grp) grp.querySelectorAll('.gf-dif-btn').forEach(function(b){ b.classList.remove('active'); });
  btn.classList.add('active');
}

function fq9gfSetQty(btn) {
  _fq9gf.qty = parseInt(btn.getAttribute('data-qty')) || 10;
  var grp = document.getElementById('fq9-fichas-qty');
  if (grp) grp.querySelectorAll('.gf-dif-btn').forEach(function(b){ b.classList.remove('active'); });
  btn.classList.add('active');
}

// Renderiza um bloco de exercícios (com ou sem espaço de resposta).
function _fq9gfExBloco(exs, startNum) {
  var h = '';
  var _lm = (typeof _limpaMath === 'function') ? _limpaMath : function(x){ return x; };
  var fm = (typeof formatMath === 'function') ? function(x){ return formatMath(_lm(x)); } : function(x){ return _lm(x); };
  exs.forEach(function(ex, i) {
    h += '<div style="margin-bottom:22px;page-break-inside:avoid">'
      + '<div style="font-weight:600;font-size:12.5px;margin-bottom:6px;line-height:1.5">' + (startNum + i) + '. ' + fm(ex.enun) + '</div>';
    if (ex.visual) h += '<div style="margin:6px 0 10px">' + ex.visual + '</div>'; // gráfico/tabela/figura SVG
    if (ex.tipo === 'mc' && ex.opcoes) {
      h += '<div style="font-size:12px;color:#333;padding-left:14px;line-height:2.1">';
      var _ops = (typeof _normalizaOpcoes === 'function') ? _normalizaOpcoes(ex.opcoes, ex.resposta) : ex.opcoes;
      _ops.forEach(function(o, k) { h += '<span style="display:inline-block;min-width:46%;margin-bottom:3px">(' + 'ABCD'[k] + ') ' + fm(o) + '</span>'; });
      h += '</div>';
    } else if (ex.tipo === 'vf') {
      h += '<div style="font-size:12px;color:#333;padding-left:14px;margin-top:4px">Verdadeiro&nbsp;&#9744;&nbsp;&nbsp;&nbsp;&nbsp;Falso&nbsp;&#9744;</div>';
    } else {
      // espaço de resolução: 3 linhas para o aluno escrever
      h += '<div style="margin-top:6px">'
        + '<div style="border-bottom:1px solid #ccc;height:22px"></div>'
        + '<div style="border-bottom:1px solid #ccc;height:22px"></div>'
        + '<div style="border-bottom:1px solid #ccc;height:22px;width:70%"></div>'
        + '</div>';
    }
    h += '</div>';
  });
  return h;
}

function _fq9gfGenExs(cap, n) {
  var gen = _fq9Gerador(cap); if (!gen) return [];
  var _temasFiltro = _fq9gfTemasSel(cap); // subtemas escolhidos → temas; null = todos
  var nTemas = _fq9TemasCount[cap] || 1;
  var tipos = ['mc', 'fill', 'vf', 'fill', 'mc', 'mc'];
  var geradas = [], vistos = {};
  // gera até n questões DISTINTAS (evita enunciados repetidos na ficha)
  for (var i = 0, tent = 0; geradas.length < n && tent < n * 6; tent++) {
    var _tk = _temasFiltro ? _temasFiltro[i % _temasFiltro.length] : String((i % nTemas) + 1);
    var ex = gen(_tk, tipos[i % tipos.length], _fq9gf.dif);
    i++;
    if (!ex) continue;
    var chave = String(ex.enun || '').replace(/<[^>]+>/g, '').trim();
    if (vistos[chave]) continue;
    vistos[chave] = 1;
    geradas.push(ex);
  }
  // mistura questões reais do banco (multi-passo, com contexto/figuras)
  var banco = (typeof _fq9Banco !== 'undefined' && _fq9Banco[cap]) ? _fq9Banco[cap] : [];
  if (banco.length && typeof _mixBancoGeradas === 'function') {
    return _mixBancoGeradas(banco, geradas, n, Math.min(Math.ceil(n / 3), banco.length), _fq9gf.dif);
  }
  return geradas;
}

function fq9gfGerar(formato) {
  // capítulos selecionados
  var capsSel = [];
  _fq9CapMeta.forEach(function(m) { if (_fq9gf.caps[m.n] && _fq9Gerador(m.n)) capsSel.push(m.n); });
  var status = document.getElementById('fq9-fichas-status');
  if (!capsSel.length) { if (status) status.textContent = 'Seleciona pelo menos um capítulo.'; return; }
  var algumTipo = _fq9gf.tipos.resumo || _fq9gf.tipos.exercicios || _fq9gf.tipos.teste || _fq9gf.tipos.minitestes;
  if (!algumTipo) { if (status) status.textContent = 'Seleciona pelo menos um tipo de conteúdo.'; return; }
  if (status) status.textContent = 'A gerar…';

  var difLabel = { facil: 'Fácil', medio: 'Médio', dificil: 'Difícil' }[_fq9gf.dif];
  var solucoes = []; // {num, ex} acumuladas para a secção final
  var solCounter = 0;

  var corpo = '';
  capsSel.forEach(function(cap, ci) {
    _fq9PM(cap, 'ficha'); // gerou ficha deste capítulo
    var m = _fq9CapMeta[cap - 1];
    var color = _fq9CapColors[cap] || '#36527a';
    corpo += '<div style="' + (ci > 0 ? 'page-break-before:always;' : '') + 'margin-bottom:6px">'
      + '<h2 style="font-size:16px;color:' + color + ';border-bottom:2px solid ' + color + ';padding-bottom:4px;margin:0 0 10px">' + cap + '. ' + m.label + '</h2>';

    // Resumo teórico (das flashcards)
    if (_fq9gf.tipos.resumo) {
      var cards = _fq9Cards[cap] || [];
      if (cards.length) {
        corpo += '<div style="margin-bottom:12px"><h3 style="font-size:13px;color:#444;margin:0 0 5px">Resumo teórico</h3>';
        cards.slice(0, 8).forEach(function(c) {
          corpo += '<div style="font-size:11.5px;margin-bottom:4px"><strong>' + c.q + '</strong> ' + c.a + (c.v ? '<div style="margin:3px 0">' + c.v + '</div>' : '') + '</div>';
        });
        corpo += '</div>';
      }
    }
    // Exercícios
    if (_fq9gf.tipos.exercicios) {
      var exs = _fq9gfGenExs(cap, _fq9gf.qty);
      corpo += '<div style="margin-bottom:12px"><h3 style="font-size:13px;color:#444;margin:0 0 5px">Exercícios</h3>'
        + _fq9gfExBloco(exs, solCounter + 1) + '</div>';
      exs.forEach(function(ex) { solCounter++; solucoes.push({ num: solCounter, ex: ex }); });
    }
    // Teste de avaliação (8 questões mistas)
    if (_fq9gf.tipos.teste) {
      var exsT = _fq9gfGenExs(cap, 8);
      corpo += '<div style="margin-bottom:12px"><h3 style="font-size:13px;color:#444;margin:0 0 5px">Teste de avaliação</h3>'
        + _fq9gfExBloco(exsT, solCounter + 1) + '</div>';
      exsT.forEach(function(ex) { solCounter++; solucoes.push({ num: solCounter, ex: ex }); });
    }
    // Minitestes (um por subtema, 4 questões cada)
    if (_fq9gf.tipos.minitestes) {
      var subt = _fq9Subtemas[cap] || [];
      var mapa = _fq9SubtemaTemas[cap] || {};
      corpo += '<div style="margin-bottom:12px"><h3 style="font-size:13px;color:#444;margin:0 0 5px">Minitestes</h3>';
      subt.forEach(function(st, si) {
        var temas = mapa[si + 1] || [String(si + 1)];
        var gen = _fq9Gerador(cap);
        var exsM = [];
        for (var q = 0; q < 4; q++) {
          var tema = temas[q % temas.length];
          var ex = gen(tema, (q % 2 === 0) ? 'mc' : 'fill', _fq9gf.dif);
          if (ex) exsM.push(ex);
        }
        corpo += '<div style="margin-bottom:8px"><div style="font-size:12px;font-weight:700;color:#555">Mini ' + (si + 1) + ' · ' + st + '</div>'
          + _fq9gfExBloco(exsM, solCounter + 1) + '</div>';
        exsM.forEach(function(ex) { solCounter++; solucoes.push({ num: solCounter, ex: ex }); });
      });
      corpo += '</div>';
    }
    corpo += '</div>';
  });

  // Secção de soluções
  var solHTML = '';
  if (_fq9gf.tipos.solucoes && eduPodeSolucoes() && solucoes.length) {
    var _lmS = (typeof _limpaMath === 'function') ? _limpaMath : function(x){ return x; };
    var fmS = (typeof formatMath === 'function') ? function(x){ return formatMath(_lmS(x)); } : function(x){ return _lmS(x); };
    var lst = solucoes.map(function(s) {
      return '<div style="font-size:11.5px;margin-bottom:7px;line-height:1.5;page-break-inside:avoid">'
        + '<strong>' + s.num + '.</strong> <strong style="color:#1a6b4a">' + fmS(String(s.ex.resposta)) + '</strong>'
        + (s.ex.expl ? '<br><span style="color:#555">' + fmS(s.ex.expl) + '</span>' : '') + '</div>';
    }).join('');
    solHTML = '<div style="page-break-before:always;padding-top:8px"><h2 style="font-size:16px;border-bottom:2px solid #36527a;padding-bottom:4px">Soluções</h2>' + lst + '</div>';
  }

  var nomesCaps = capsSel.map(function(c) { return _fq9CapMeta[c - 1].label; }).join(', ');
  var html = '<div style="font-family:Arial,sans-serif;max-width:740px;margin:0 auto;padding:24px;color:#222">'
    + '<div style="display:flex;justify-content:space-between;align-items:baseline;border-bottom:2px solid #36527a;padding-bottom:8px;margin-bottom:14px">'
    + '<div><h1 style="font-size:18px;margin:0">Ficha de Trabalho · Físico-Química 9.º Ano</h1>'
    + '<div style="font-size:11.5px;color:#666">' + nomesCaps + ' · Nível ' + difLabel + '</div></div>'
    + '<div style="font-size:11.5px;color:#888">3ponto14</div></div>'
    + '<div style="font-size:11.5px;color:#666;margin-bottom:12px">Nome: ____________________________  Data: ____ / ____ / ______</div>'
    + corpo + solHTML + '</div>';

  var _temasNomes = capsSel.map(function(c){ return _fq9CapMeta[c-1].label; });
  var fname = (typeof _nomeFicha === 'function') ? _nomeFicha('8', 'matematica', _temasNomes, formato) : ('ficha-fq9.' + (formato === 'html' ? 'html' : 'pdf'));
  if (formato === 'html') {
    try {
      var blob = new Blob(['<!DOCTYPE html><meta charset="utf-8">' + html], { type: 'text/html' });
      var a = document.createElement('a');
      a.href = URL.createObjectURL(blob); a.download = fname; a.click();
      if (status) status.textContent = 'Ficha HTML gerada ✓';
    } catch (e) { if (status) status.textContent = 'Erro ao gerar HTML.'; }
  } else {
    if (typeof htmlToPdfDownload === 'function') { htmlToPdfDownload(html, fname); if (status) status.textContent = 'Ficha PDF gerada ✓'; }
    else if (status) status.textContent = 'Geração de PDF indisponível.';
  }
}

// ═══ INIT ═══
function _fq9Init() {
  if (typeof _addStatsTeoriaVisuais === 'function') _addStatsTeoriaVisuais(_fq9Cards[8], '#9a5e96'); // cap8 Dados
  if (typeof _addGeoTeoriaVisuais === 'function') _addGeoTeoriaVisuais(_fq9Cards[4], '#b06a6a', { pitagoras: true }); // cap4 Pitágoras
  // arranca na tab Teoria com o cap 1 selecionado
  fq9BuildResumoNav();
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _fq9Init);
else _fq9Init();

/* ═══ GERADOR DE EXERCÍCIOS - Cap 1 Números (fiel ao Prisma 8) ═══ */
function rnd_f7q1(a, b) { return Math.floor(Math.random() * (b - a + 1)) + a; }
function rndNZ_f7q1(a, b) { var v; do { v = rnd_f7q1(a, b); } while (v === 0); return v; }
function shuffle_f7q1(arr) { for (var i = arr.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = arr[i]; arr[i] = arr[j]; arr[j] = t; } return arr; }
function gcd_f7q1(a, b) { a = Math.abs(a); b = Math.abs(b); while (b) { var t = b; b = a % b; a = t; } return a || 1; }
function reduce_f7q1(p, q) { if (q < 0) { p = -p; q = -q; } var g = gcd_f7q1(p, q); return [p / g, q / g]; }
function fmtFrac_f7q1(p, q) {
  var r = reduce_f7q1(p, q);
  p = r[0]; q = r[1];
  if (q === 1) return String(p);
  return p + '/' + q;
}
function fmtFracHTML_f7q1(p, q) {
  var r = reduce_f7q1(p, q);
  p = r[0]; q = r[1];
  if (q === 1) return String(p);
  var sign = p < 0 ? '−' : '';
  return sign + '<sup>' + Math.abs(p) + '</sup>⁄<sub>' + q + '</sub>';
}
// expoentes em unicode
var _SUP_f7q1 = { '-': '⁻', '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴', '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹' };
function sup_f7q1(n) { return String(n).split('').map(function (c) { return _SUP_f7q1[c] || c; }).join(''); }

function lim_f7q1(dif) {
  if (dif === 'facil') return { mx: 5 };
  if (dif === 'dificil') return { mx: 12 };
  return { mx: 8 };
}

// ── State (compat com handlers) ──
var dynState_f7q1 = {
  q: { level: 'medio', score: { correct: 0, total: 0 }, answered: {} },
  m: { level: 'medio', score: { correct: 0, total: 0 }, answered: {}, activeMini: 1 },
  t: { level: 'medio', score: { correct: 0, total: 0 }, answered: {} }
};


function buildEx_f71(tema, tipo, dif) {
  tema = String(tema);
  var L = lim_f7q1(dif || 'medio');
  var hard = (dif === 'dificil'), easy = (dif === 'facil');

  // ── TEMA 1 · Frações decimais e dízimas ──
  if (tema === '1') {
    // dízima finita se denominador (reduzido) só tem fatores 2 e 5
    var dens1 = [2, 4, 5, 8, 10, 20, 25];          // finitas
    var dens1inf = [3, 6, 7, 9, 11, 12];           // periódicas
    if (tipo === 'mc') {
      var useFin = Math.random() < 0.5;
      var d = useFin ? dens1[rnd_f7q1(0, dens1.length - 1)] : dens1inf[rnd_f7q1(0, dens1inf.length - 1)];
      var num = rnd_f7q1(1, d - 1);
      return {
        enun: 'A fração <strong>' + num + '/' + d + '</strong> dá origem a uma dízima:',
        tipo: 'mc', opcoes: ['finita', 'infinita periódica'],
        resposta: useFin ? 'finita' : 'infinita periódica',
        expl: useFin
          ? 'O denominador ' + d + ' (reduzido) só tem fatores 2 e/ou 5 → dízima finita.'
          : 'O denominador ' + d + ' tem fatores diferentes de 2 e 5 → dízima infinita periódica.',
        tema: 'T1 · Dízimas'
      };
    }
    if (tipo === 'vf') {
      var samples = [[3, 5, '0,6', true], [1, 4, '0,25', true], [1, 3, '0,(3)', false], [2, 3, '0,(6)', false], [7, 10, '0,7', true], [1, 6, '0,1(6)', false]];
      var s = samples[rnd_f7q1(0, samples.length - 1)];
      var claimFin = Math.random() < 0.5;
      var isFin = s[3];
      var stmt = s[0] + '/' + s[1] + ' é uma dízima ' + (claimFin ? 'finita' : 'infinita periódica') + '.';
      var ok = claimFin ? isFin : !isFin;
      return {
        enun: 'Verdadeiro ou Falso: ' + stmt, tipo: 'vf', resposta: ok ? 'V' : 'F',
        expl: s[0] + '/' + s[1] + ' = ' + s[2] + (isFin ? ' (finita).' : ' (infinita periódica).'),
        tema: 'T1 · Dízimas'
      };
    }
    // fill: identificar valor decimal de fração simples
    var pairs1 = [[1, 2, '0,5'], [1, 4, '0,25'], [3, 4, '0,75'], [1, 5, '0,2'], [3, 5, '0,6'], [1, 10, '0,1'], [7, 10, '0,7']];
    var p1 = pairs1[rnd_f7q1(0, pairs1.length - 1)];
    return {
      enun: 'Escreve a fração ' + p1[0] + '/' + p1[1] + ' na forma de dízima.', tipo: 'fill',
      resposta: p1[2], expl: p1[0] + '/' + p1[1] + ' = ' + p1[0] + ' ÷ ' + p1[1] + ' = ' + p1[2] + '.',
      tema: 'T1 · Dízimas'
    };
  }

  // ── TEMA 2 · Multiplicação de racionais ──
  if (tema === '2') {
    var a2 = rndNZ_f7q1(1, L.mx), b2 = rndNZ_f7q1(2, L.mx);
    var c2 = rndNZ_f7q1(1, L.mx), d2 = rndNZ_f7q1(2, L.mx);
    var rp = a2 * c2, rq = b2 * d2;
    var res2 = reduce_f7q1(rp, rq);
    if (tipo === 'mc') {
      var correct2 = fmtFrac_f7q1(res2[0], res2[1]);
      var wrongs2 = [fmtFrac_f7q1(a2 * c2, b2 + d2), fmtFrac_f7q1(a2 + c2, b2 * d2), fmtFrac_f7q1(-rp, rq)];
      var opts2 = shuffle_f7q1([correct2].concat(wrongs2).filter(function (v, i, arr) { return arr.indexOf(v) === i; })).slice(0, 4);
      if (opts2.indexOf(correct2) === -1) opts2[0] = correct2;
      return {
        enun: 'Calcula: ' + fmtFracHTML_f7q1(a2, b2) + ' × ' + fmtFracHTML_f7q1(c2, d2),
        tipo: 'mc', opcoes: opts2, resposta: correct2,
        expl: 'Multiplica numeradores e denominadores: (' + a2 + '×' + c2 + ')/(' + b2 + '×' + d2 + ') = ' + fmtFrac_f7q1(rp, rq) + ' = ' + correct2 + '.',
        tema: 'T2 · Multiplicação'
      };
    }
    if (tipo === 'vf') {
      var simetrico = Math.random() < 0.5;
      var n2v = rndNZ_f7q1(2, L.mx), d2v = rndNZ_f7q1(2, L.mx);
      var stmt2 = 'o simétrico de ' + fmtFrac_f7q1(n2v, d2v) + ' é ' + fmtFrac_f7q1(simetrico ? -n2v : n2v, d2v);
      return {
        enun: 'Verdadeiro ou Falso: ' + stmt2 + '.', tipo: 'vf', resposta: simetrico ? 'V' : 'F',
        expl: 'O simétrico de ' + fmtFrac_f7q1(n2v, d2v) + ' é ' + fmtFrac_f7q1(-n2v, d2v) + ' (troca-se o sinal).',
        tema: 'T2 · Multiplicação'
      };
    }
    return {
      enun: 'Calcula: ' + fmtFracHTML_f7q1(a2, b2) + ' × ' + fmtFracHTML_f7q1(c2, d2), tipo: 'fill',
      resposta: fmtFrac_f7q1(res2[0], res2[1]),
      expl: '(' + a2 + '×' + c2 + ')/(' + b2 + '×' + d2 + ') = ' + fmtFrac_f7q1(res2[0], res2[1]) + '.',
      tema: 'T2 · Multiplicação'
    };
  }

  // ── TEMA 3 · Divisão de racionais ──
  if (tema === '3') {
    var a3 = rndNZ_f7q1(1, L.mx), b3 = rndNZ_f7q1(2, L.mx);
    var c3 = rndNZ_f7q1(1, L.mx), d3 = rndNZ_f7q1(2, L.mx);
    // a/b ÷ c/d = a/b × d/c
    var rp3 = a3 * d3, rq3 = b3 * c3;
    var res3 = reduce_f7q1(rp3, rq3);
    if (tipo === 'mc') {
      var correct3 = fmtFrac_f7q1(res3[0], res3[1]);
      var wrongs3 = [fmtFrac_f7q1(a3 * c3, b3 * d3), fmtFrac_f7q1(rp3, -rq3), fmtFrac_f7q1(b3 * c3, a3 * d3)];
      var opts3 = shuffle_f7q1([correct3].concat(wrongs3).filter(function (v, i, arr) { return arr.indexOf(v) === i; })).slice(0, 4);
      if (opts3.indexOf(correct3) === -1) opts3[0] = correct3;
      return {
        enun: 'Calcula: ' + fmtFracHTML_f7q1(a3, b3) + ' ÷ ' + fmtFracHTML_f7q1(c3, d3),
        tipo: 'mc', opcoes: opts3, resposta: correct3,
        expl: 'Dividir é multiplicar pelo inverso: ' + fmtFrac_f7q1(a3, b3) + ' × ' + d3 + '/' + c3 + ' = ' + correct3 + '.',
        tema: 'T3 · Divisão'
      };
    }
    return {
      enun: 'Calcula: ' + fmtFracHTML_f7q1(a3, b3) + ' ÷ ' + fmtFracHTML_f7q1(c3, d3), tipo: 'fill',
      resposta: fmtFrac_f7q1(res3[0], res3[1]),
      expl: 'Multiplica pelo inverso: ' + fmtFrac_f7q1(a3, b3) + ' × ' + fmtFrac_f7q1(d3, c3) + ' = ' + fmtFrac_f7q1(res3[0], res3[1]) + '.',
      tema: 'T3 · Divisão'
    };
  }

  // ── TEMA 4 · Propriedades das operações ──
  if (tema === '4') {
    var props = [
      { nome: 'comutativa', ex: 'a × b = b × a' },
      { nome: 'associativa', ex: '(a × b) × c = a × (b × c)' },
      { nome: 'distributiva', ex: 'a × (b + c) = a × b + a × c' },
      { nome: 'elemento neutro', ex: 'a × 1 = a' },
      { nome: 'elemento absorvente', ex: 'a × 0 = 0' }
    ];
    var pr = props[rnd_f7q1(0, props.length - 1)];
    if (tipo === 'mc' || tipo === 'vf') {
      var opts4 = shuffle_f7q1(props.map(function (x) { return x.nome; })).slice(0, 4);
      if (opts4.indexOf(pr.nome) === -1) opts4[0] = pr.nome;
      return {
        enun: 'Que propriedade está ilustrada em <strong>' + pr.ex + '</strong>?',
        tipo: 'mc', opcoes: opts4, resposta: pr.nome,
        expl: 'A igualdade ' + pr.ex + ' traduz a propriedade ' + pr.nome + '.',
        tema: 'T4 · Propriedades'
      };
    }
    return {
      enun: 'Completa: a × (b + c) = a × b + a × __ (propriedade distributiva).', tipo: 'fill',
      resposta: 'c', expl: 'a × (b + c) = a × b + a × c.', tema: 'T4 · Propriedades'
    };
  }

  // ── TEMA 5 · Expressões numéricas com racionais ──
  if (tema === '5') {
    // Variante de contexto (problema com percentagem) - aumenta a variedade
    if (!easy && Math.random() < 0.4) {
      var ctx5 = [
        { nome: 'A Sueli recebe uma comissão de p% sobre as suas vendas', vendas: true },
        { nome: 'Um artigo de V € tem um desconto de p%', desconto: true }
      ];
      var p5 = [5, 10, 15, 20, 25][rnd_f7q1(0, 4)];
      var V5 = [200, 350, 500, 800, 1200, 6750][rnd_f7q1(0, 5)];
      var qual = rnd_f7q1(0, 1);
      if (qual === 0) {
        var com = V5 * p5 / 100;
        return {
          enun: 'Num mês, a Sueli vendeu ' + V5 + ' € e recebe uma comissão de ' + p5 + '%. Quanto recebeu de comissão? (em €)',
          tipo: 'fill', resposta: String(com),
          expl: p5 + '% de ' + V5 + ' € = (' + p5 + '/100) × ' + V5 + ' = ' + com + ' €.',
          tema: 'T5 · Expressões'
        };
      }
      var pago = V5 * (1 - p5 / 100);
      return {
        enun: 'Um artigo custava ' + V5 + ' € e tem um desconto de ' + p5 + '%. Quanto se paga agora? (em €)',
        tipo: 'fill', resposta: String(pago),
        expl: 'Valor final = ' + V5 + ' × (1 − ' + p5 + '/100) = ' + V5 + ' × ' + (1 - p5 / 100) + ' = ' + pago + ' €.',
        tema: 'T5 · Expressões'
      };
    }
    // a/b × c/d + e/f  (resultado reduzido)
    var a5 = rndNZ_f7q1(1, L.mx), b5 = rndNZ_f7q1(2, 6);
    var c5 = rndNZ_f7q1(1, L.mx), d5 = rndNZ_f7q1(2, 6);
    var e5 = rndNZ_f7q1(1, L.mx), f5 = rndNZ_f7q1(2, 6);
    var prodP = a5 * c5, prodQ = b5 * d5;
    // soma com e/f: prodP/prodQ + e5/f5
    var lcm5 = prodQ * f5 / gcd_f7q1(prodQ, f5);
    var sp5 = prodP * (lcm5 / prodQ) + e5 * (lcm5 / f5);
    var res5 = reduce_f7q1(sp5, lcm5);
    return {
      enun: 'Calcula: ' + fmtFracHTML_f7q1(a5, b5) + ' × ' + fmtFracHTML_f7q1(c5, d5) + ' + ' + fmtFracHTML_f7q1(e5, f5),
      tipo: 'fill', resposta: fmtFrac_f7q1(res5[0], res5[1]),
      expl: 'Primeiro o produto: ' + fmtFrac_f7q1(prodP, prodQ) + '. Depois soma ' + fmtFrac_f7q1(e5, f5) + ' = ' + fmtFrac_f7q1(res5[0], res5[1]) + ' (respeita a hierarquia das operações).',
      tema: 'T5 · Expressões'
    };
  }

  // ── TEMA 6 · Potências de base racional ──
  if (tema === '6') {
    var base6n = rnd_f7q1(2, 4), base6d = rnd_f7q1(2, 5), exp6 = rnd_f7q1(2, hard ? 4 : 3);
    var pn = Math.pow(base6n, exp6), pd = Math.pow(base6d, exp6);
    if (tipo === 'mc') {
      var correct6 = pn + '/' + pd;
      var wrongs6 = [(base6n * exp6) + '/' + (base6d * exp6), pn + '/' + base6d, base6n + '/' + pd];
      var opts6 = shuffle_f7q1([correct6].concat(wrongs6).filter(function (v, i, arr) { return arr.indexOf(v) === i; })).slice(0, 4);
      if (opts6.indexOf(correct6) === -1) opts6[0] = correct6;
      return {
        enun: 'Calcula: (' + base6n + '/' + base6d + ')' + sup_f7q1(exp6),
        tipo: 'mc', opcoes: opts6, resposta: correct6,
        expl: '(a/b)ⁿ = aⁿ/bⁿ → ' + base6n + sup_f7q1(exp6) + '/' + base6d + sup_f7q1(exp6) + ' = ' + correct6 + '.',
        tema: 'T6 · Potências'
      };
    }
    // vf: sinal de potência de base negativa
    var bneg = rnd_f7q1(2, 5), eneg = rnd_f7q1(2, 5);
    var isEven = (eneg % 2 === 0);
    var claimPos = Math.random() < 0.5;
    return {
      enun: 'Verdadeiro ou Falso: (−' + bneg + ')' + sup_f7q1(eneg) + ' é um número ' + (claimPos ? 'positivo' : 'negativo') + '.',
      tipo: 'vf', resposta: (claimPos === isEven) ? 'V' : 'F',
      expl: 'Base negativa com expoente ' + (isEven ? 'par → positivo' : 'ímpar → negativo') + '.',
      tema: 'T6 · Potências'
    };
  }

  // ── TEMA 7 · Propriedades das potências ──
  if (tema === '7') {
    var base7 = rnd_f7q1(2, 6);
    var kind7 = rnd_f7q1(0, 2);
    if (kind7 === 0) { // mesmo base, produto
      var m7 = rnd_f7q1(2, 6), n7 = rnd_f7q1(2, 6);
      var r7 = m7 + n7;
      return {
        enun: 'Simplifica: ' + base7 + sup_f7q1(m7) + ' × ' + base7 + sup_f7q1(n7) + ' = ' + base7 + '^?',
        tipo: 'fill', resposta: String(r7),
        expl: 'Mesma base no produto: somam-se os expoentes → ' + base7 + sup_f7q1(m7) + '⁺' + sup_f7q1(n7) + ' = ' + base7 + sup_f7q1(r7) + '.',
        tema: 'T7 · Prop. Potências'
      };
    }
    if (kind7 === 1) { // mesmo base, quociente
      var big7 = rnd_f7q1(5, 9), sm7 = rnd_f7q1(1, 4);
      return {
        enun: 'Simplifica: ' + base7 + sup_f7q1(big7) + ' ÷ ' + base7 + sup_f7q1(sm7) + ' = ' + base7 + '^?',
        tipo: 'fill', resposta: String(big7 - sm7),
        expl: 'Mesma base no quociente: subtraem-se os expoentes → ' + base7 + sup_f7q1(big7 - sm7) + '.',
        tema: 'T7 · Prop. Potências'
      };
    }
    // potência de potência
    var pp7a = rnd_f7q1(2, 5), pp7b = rnd_f7q1(2, 4);
    return {
      enun: 'Simplifica: (' + base7 + sup_f7q1(pp7a) + ')' + sup_f7q1(pp7b) + ' = ' + base7 + '^?',
      tipo: 'fill', resposta: String(pp7a * pp7b),
      expl: 'Potência de potência: multiplicam-se os expoentes → ' + base7 + sup_f7q1(pp7a * pp7b) + '.',
      tema: 'T7 · Prop. Potências'
    };
  }

  // ── TEMA 8 · Potências de expoente negativo ──
  if (tema === '8') {
    var base8 = rnd_f7q1(2, 5), exp8 = rnd_f7q1(1, hard ? 4 : 3);
    var val8 = Math.pow(base8, exp8);
    if (tipo === 'mc') {
      var correct8 = '1/' + val8;
      var wrongs8 = ['1/' + (base8 * exp8), '−' + val8, String(val8)];
      var opts8 = shuffle_f7q1([correct8].concat(wrongs8).filter(function (v, i, arr) { return arr.indexOf(v) === i; })).slice(0, 4);
      if (opts8.indexOf(correct8) === -1) opts8[0] = correct8;
      return {
        enun: 'Calcula: ' + base8 + sup_f7q1('-' + exp8),
        tipo: 'mc', opcoes: opts8, resposta: correct8,
        expl: 'a⁻ⁿ = 1/aⁿ → ' + base8 + sup_f7q1('-' + exp8) + ' = 1/' + base8 + sup_f7q1(exp8) + ' = 1/' + val8 + '.',
        tema: 'T8 · Expoente Negativo'
      };
    }
    return {
      enun: 'Escreve com expoente positivo: ' + base8 + sup_f7q1('-' + exp8) + ' = 1/__', tipo: 'fill',
      resposta: String(val8), expl: base8 + sup_f7q1('-' + exp8) + ' = 1/' + base8 + sup_f7q1(exp8) + ' = 1/' + val8 + '.',
      tema: 'T8 · Expoente Negativo'
    };
  }

  // ── TEMA 9 · Raízes quadradas e cúbicas ──
  if (tema === '9') {
    var cubica = (Math.random() < 0.4);
    if (cubica) {
      var roots3 = [1, 2, 3, 4, 5];
      var r3 = roots3[rnd_f7q1(0, roots3.length - 1)];
      var cube = r3 * r3 * r3;
      if (tipo === 'mc') {
        var opts9c = shuffle_f7q1([r3, r3 + 1, r3 - 1 || r3 + 2, r3 * 3].filter(function (v, i, a) { return a.indexOf(v) === i; })).slice(0, 4).map(String);
        if (opts9c.indexOf(String(r3)) === -1) opts9c[0] = String(r3);
        return {
          enun: 'Calcula: ∛' + cube, tipo: 'mc', opcoes: opts9c, resposta: String(r3),
          expl: '∛' + cube + ' = ' + r3 + ' porque ' + r3 + '³ = ' + cube + '.', tema: 'T9 · Raízes'
        };
      }
      return { enun: 'Calcula: ∛' + cube, tipo: 'fill', resposta: String(r3), expl: r3 + '³ = ' + cube + ', logo ∛' + cube + ' = ' + r3 + '.', tema: 'T9 · Raízes' };
    }
    var roots2 = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    var r2 = roots2[rnd_f7q1(0, roots2.length - 1)];
    var sq = r2 * r2;
    if (tipo === 'mc') {
      var opts9 = shuffle_f7q1([r2, r2 + 1, r2 - 1, sq].filter(function (v, i, a) { return a.indexOf(v) === i; })).slice(0, 4).map(String);
      if (opts9.indexOf(String(r2)) === -1) opts9[0] = String(r2);
      return { enun: 'Calcula: √' + sq, tipo: 'mc', opcoes: opts9, resposta: String(r2), expl: '√' + sq + ' = ' + r2 + ' porque ' + r2 + '² = ' + sq + '.', tema: 'T9 · Raízes' };
    }
    return { enun: 'Calcula: √' + sq, tipo: 'fill', resposta: String(r2), expl: r2 + '² = ' + sq + ', logo √' + sq + ' = ' + r2 + '.', tema: 'T9 · Raízes' };
  }

  // ── TEMA 10 · Notação científica ──
  if (tema === '10') {
    // gera a × 10^n a partir de um número
    var aMant = rnd_f7q1(1, 9), dec = rnd_f7q1(0, 9);
    var mant = aMant + (Math.random() < 0.5 ? '' : ',' + dec);
    var mantNum = parseFloat(mant.replace(',', '.'));
    var expo = rnd_f7q1(easy ? 2 : 3, hard ? 9 : 7);
    var negExp = (Math.random() < 0.4);
    var realExp = negExp ? -expo : expo;
    var bigNum;
    if (!negExp) {
      bigNum = (mantNum * Math.pow(10, expo));
      bigNum = bigNum.toLocaleString('pt-PT', { useGrouping: false }).replace('.', ',');
    } else {
      bigNum = (mantNum * Math.pow(10, -expo));
      bigNum = bigNum.toFixed(expo + 1).replace('.', ',');
    }
    if (tipo === 'mc') {
      var correct10 = mant + ' × 10' + sup_f7q1(realExp);
      var wrongs10 = [mant + ' × 10' + sup_f7q1(realExp + 1), mant + ' × 10' + sup_f7q1(-realExp), (mantNum * 10) + ' × 10' + sup_f7q1(realExp - 1)];
      var opts10 = shuffle_f7q1([correct10].concat(wrongs10).filter(function (v, i, a) { return a.indexOf(v) === i; })).slice(0, 4);
      if (opts10.indexOf(correct10) === -1) opts10[0] = correct10;
      return {
        enun: 'Escreve <strong>' + bigNum + '</strong> em notação científica.',
        tipo: 'mc', opcoes: opts10, resposta: correct10,
        expl: bigNum + ' = ' + correct10 + ' (mantissa entre 1 e 10, expoente ' + realExp + ').',
        tema: 'T10 · Notação Científica'
      };
    }
    // vf: validade da forma a×10^n (1 ≤ a < 10)
    var aTest = [2.5, 25, 0.7, 8.1, 14][rnd_f7q1(0, 4)];
    var validA = (aTest >= 1 && aTest < 10);
    var claimValid = Math.random() < 0.5;
    return {
      enun: 'Verdadeiro ou Falso: ' + String(aTest).replace('.', ',') + ' × 10⁴ está ' + (claimValid ? 'corretamente' : 'incorretamente') + ' escrito em notação científica.',
      tipo: 'vf', resposta: (claimValid === validA) ? 'V' : 'F',
      expl: 'Em notação científica a mantissa a verifica 1 ≤ a < 10. ' + String(aTest).replace('.', ',') + (validA ? ' cumpre' : ' não cumpre') + '.',
      tema: 'T10 · Notação Científica'
    };
  }

  // ── TEMA 11 · Operações em notação científica ──
  if (tema === '11') {
    var a11 = rnd_f7q1(1, 9), b11 = rnd_f7q1(1, 9);
    var m11 = rnd_f7q1(2, 8), n11 = rnd_f7q1(2, 8);
    var mult = (Math.random() < 0.5);
    if (mult) {
      var prod = a11 * b11, sumE = m11 + n11;
      var mantOut = prod, expOut = sumE;
      if (prod >= 10) { mantOut = prod / 10; expOut = sumE + 1; }
      var correct11 = String(mantOut).replace('.', ',') + ' × 10' + sup_f7q1(expOut);
      return {
        enun: 'Calcula: (' + a11 + ' × 10' + sup_f7q1(m11) + ') × (' + b11 + ' × 10' + sup_f7q1(n11) + ')',
        tipo: 'fill', resposta: correct11,
        expl: 'Multiplica as mantissas (' + a11 + '×' + b11 + '=' + prod + ') e soma os expoentes (' + m11 + '+' + n11 + '=' + sumE + ') → ' + correct11 + '.',
        tema: 'T11 · Operações N.C.'
      };
    }
    // divisão (garante mantissa exata)
    var bigA = a11 * b11; // para divisão exacta: (bigA × 10^M) ÷ (b11 × 10^n) = a11 × 10^(M-n)
    var M = n11 + rnd_f7q1(1, 5);
    var correctD = a11 + ' × 10' + sup_f7q1(M - n11);
    return {
      enun: 'Calcula: (' + bigA + ' × 10' + sup_f7q1(M) + ') ÷ (' + b11 + ' × 10' + sup_f7q1(n11) + ')',
      tipo: 'fill', resposta: correctD,
      expl: 'Divide as mantissas (' + bigA + '÷' + b11 + '=' + a11 + ') e subtrai os expoentes (' + M + '−' + n11 + '=' + (M - n11) + ') → ' + correctD + '.',
      tema: 'T11 · Operações N.C.'
    };
  }

  // fallback
  return { enun: 'Calcula: 1/2 + 1/2', tipo: 'fill', resposta: '1', expl: '1/2 + 1/2 = 1.', tema: 'Números' };
}

/* ════════════════════════════════════════════════════════════════
   GERADOR - Cap 3 Polinómios e Equações do 1.º grau (Prisma 8)
   Temas:
    1 Monómios (coeficiente, grau, semelhantes)
    2 Operações com monómios (produto, soma de semelhantes)
    3 Polinómios (grau, simplificação)
    4 Operações com polinómios (soma, produto)
    5 Equações do 1.º grau (com parênteses)
    6 Equações com denominadores
   Reutiliza helpers _f7q1 (rnd_f7q1, etc.) já definidos no fq9.js.
   ════════════════════════════════════════════════════════════════ */
// expoente unicode para x^n
function _expX_m83(n) { return n === 1 ? 'x' : ('x' + sup_f7q1(n)); }

function buildEx_f73(tema, tipo, dif) {
  tema = String(tema);
  var hard = (dif === 'dificil'), easy = (dif === 'facil');
  var maxC = easy ? 6 : hard ? 12 : 9;

  // ── TEMA 1 · Monómios ──
  if (tema === '1') {
    if (tipo === 'mc') {
      var c1 = rndNZ_f7q1(2, maxC), g1 = rnd_f7q1(1, 4);
      var correct1 = String(g1);
      var opts1 = shuffle_f7q1([g1, g1 + 1, g1 - 1 || g1 + 2, g1 + 2].filter(function (v, i, a) { return a.indexOf(v) === i; })).slice(0, 4).map(String);
      if (opts1.indexOf(correct1) === -1) opts1[0] = correct1;
      return {
        enun: 'Qual é o grau do monómio <strong>' + c1 + _expX_m83(g1) + '</strong>?',
        tipo: 'mc', opcoes: opts1, resposta: correct1,
        expl: 'O grau de um monómio é o expoente da parte literal: ' + c1 + _expX_m83(g1) + ' tem grau ' + g1 + '.',
        tema: 'T1 · Monómios'
      };
    }
    if (tipo === 'vf') {
      var c2 = rndNZ_f7q1(2, maxC), g2 = rnd_f7q1(2, 4);
      var claimC = Math.random() < 0.5;
      var stmt = 'o coeficiente do monómio ' + c2 + _expX_m83(g2) + ' é ' + (claimC ? c2 : g2);
      return {
        enun: 'Verdadeiro ou Falso: ' + stmt + '.', tipo: 'vf', resposta: claimC ? 'V' : 'F',
        expl: 'No monómio ' + c2 + _expX_m83(g2) + ', o coeficiente é ' + c2 + ' e a parte literal é ' + _expX_m83(g2) + '.',
        tema: 'T1 · Monómios'
      };
    }
    var cf = rndNZ_f7q1(2, maxC), gf = rnd_f7q1(1, 4);
    return {
      enun: 'Indica o coeficiente do monómio ' + cf + _expX_m83(gf) + '.', tipo: 'fill',
      resposta: String(cf), expl: 'O coeficiente é o número que multiplica a parte literal: ' + cf + '.',
      tema: 'T1 · Monómios'
    };
  }

  // ── TEMA 2 · Operações com monómios ──
  if (tema === '2') {
    var op = Math.random() < 0.5 ? 'prod' : 'soma';
    if (op === 'prod') {
      // a·x^m × b·x^n = ab·x^(m+n)
      var a = rndNZ_f7q1(2, maxC), m = rnd_f7q1(1, 3);
      var b = rndNZ_f7q1(2, maxC), n = rnd_f7q1(1, 3);
      var coef = a * b, exp = m + n;
      var res = coef + _expX_m83(exp);
      if (tipo === 'mc') {
        var w = [(a + b) + _expX_m83(exp), coef + _expX_m83(m * n), (a * b) + _expX_m83(Math.abs(m - n) || 1)];
        var opts = shuffle_f7q1([res].concat(w).filter(function (v, i, ar) { return ar.indexOf(v) === i; })).slice(0, 4);
        if (opts.indexOf(res) === -1) opts[0] = res;
        return {
          enun: 'Simplifica: ' + a + _expX_m83(m) + ' × ' + b + _expX_m83(n),
          tipo: 'mc', opcoes: opts, resposta: res,
          expl: 'Multiplica os coeficientes (' + a + '×' + b + '=' + coef + ') e soma os expoentes (' + m + '+' + n + '=' + exp + ') → ' + res + '.',
          tema: 'T2 · Op. Monómios'
        };
      }
      return {
        enun: 'Simplifica: ' + a + _expX_m83(m) + ' × ' + b + _expX_m83(n), tipo: 'fill', resposta: res,
        expl: 'Coeficientes: ' + a + '×' + b + '=' + coef + '. Expoentes: ' + m + '+' + n + '=' + exp + '. Resultado: ' + res + '.',
        tema: 'T2 · Op. Monómios'
      };
    }
    // soma de semelhantes: a·x^m + b·x^m = (a+b)·x^m
    var aa = rndNZ_f7q1(2, maxC), bb = rndNZ_f7q1(2, maxC), mm = rnd_f7q1(1, 3);
    var soma = aa + bb;
    var rsoma = soma + _expX_m83(mm);
    if (tipo === 'mc') {
      var ws = [soma + _expX_m83(mm * 2), (aa * bb) + _expX_m83(mm), soma + _expX_m83(mm + 1)];
      var optsS = shuffle_f7q1([rsoma].concat(ws).filter(function (v, i, ar) { return ar.indexOf(v) === i; })).slice(0, 4);
      if (optsS.indexOf(rsoma) === -1) optsS[0] = rsoma;
      return {
        enun: 'Simplifica: ' + aa + _expX_m83(mm) + ' + ' + bb + _expX_m83(mm),
        tipo: 'mc', opcoes: optsS, resposta: rsoma,
        expl: 'Monómios semelhantes: somam-se os coeficientes (' + aa + '+' + bb + '=' + soma + ') e mantém-se a parte literal → ' + rsoma + '.',
        tema: 'T2 · Op. Monómios'
      };
    }
    return {
      enun: 'Simplifica: ' + aa + _expX_m83(mm) + ' + ' + bb + _expX_m83(mm), tipo: 'fill', resposta: rsoma,
      expl: 'Soma dos coeficientes (mesma parte literal): ' + aa + '+' + bb + '=' + soma + ' → ' + rsoma + '.',
      tema: 'T2 · Op. Monómios'
    };
  }

  // ── TEMA 3 · Polinómios (grau e simplificação) ──
  if (tema === '3') {
    if (tipo === 'mc') {
      // grau de um polinómio
      var g = rnd_f7q1(2, 4);
      var poly = rnd_f7q1(2, maxC) + _expX_m83(g) + ' + ' + rnd_f7q1(2, maxC) + _expX_m83(g - 1) + ' + ' + rnd_f7q1(2, maxC);
      var optsG = shuffle_f7q1([g, g + 1, g - 1, g + 2].filter(function (v, i, a) { return a.indexOf(v) === i; })).slice(0, 4).map(String);
      if (optsG.indexOf(String(g)) === -1) optsG[0] = String(g);
      return {
        enun: 'Qual é o grau do polinómio <strong>' + poly + '</strong>?',
        tipo: 'mc', opcoes: optsG, resposta: String(g),
        expl: 'O grau de um polinómio é o maior dos graus dos seus monómios: ' + g + '.',
        tema: 'T3 · Polinómios'
      };
    }
    // simplificação: ax + bx = (a+b)x  (termos semelhantes)
    var p1 = rndNZ_f7q1(2, maxC), p2 = rndNZ_f7q1(2, maxC), k = rndNZ_f7q1(1, maxC);
    var resS = (p1 + p2) + 'x' + (k >= 0 ? ' + ' + k : ' − ' + Math.abs(k));
    return {
      enun: 'Simplifica: ' + p1 + 'x + ' + k + ' + ' + p2 + 'x', tipo: 'fill',
      resposta: (p1 + p2) + 'x+' + k,
      expl: 'Junta os termos semelhantes em x: ' + p1 + 'x + ' + p2 + 'x = ' + (p1 + p2) + 'x. Resultado: ' + (p1 + p2) + 'x + ' + k + '.',
      tema: 'T3 · Polinómios'
    };
  }

  // ── TEMA 4 · Operações com polinómios ──
  if (tema === '4') {
    // produto monómio × binómio: a(bx + c) = abx + ac
    var a4 = rndNZ_f7q1(2, easy ? 5 : 8), b4 = rndNZ_f7q1(1, 6), c4 = rndNZ_f7q1(1, 8);
    var t1 = a4 * b4, t2 = a4 * c4;
    var res4 = t1 + 'x' + (t2 >= 0 ? ' + ' + t2 : ' − ' + Math.abs(t2));
    if (tipo === 'mc') {
      var w4 = [(a4 + b4) + 'x + ' + t2, t1 + 'x + ' + (a4 + c4), (a4 * b4) + 'x + ' + c4];
      var opts4 = shuffle_f7q1([t1 + 'x + ' + t2].concat(w4).filter(function (v, i, ar) { return ar.indexOf(v) === i; })).slice(0, 4);
      if (opts4.indexOf(t1 + 'x + ' + t2) === -1) opts4[0] = t1 + 'x + ' + t2;
      return {
        enun: 'Aplica a propriedade distributiva: ' + a4 + '(' + b4 + 'x + ' + c4 + ')',
        tipo: 'mc', opcoes: opts4, resposta: t1 + 'x + ' + t2,
        expl: a4 + ' × ' + b4 + 'x = ' + t1 + 'x e ' + a4 + ' × ' + c4 + ' = ' + t2 + ' → ' + t1 + 'x + ' + t2 + '.',
        tema: 'T4 · Op. Polinómios'
      };
    }
    return {
      enun: 'Desenvolve: ' + a4 + '(' + b4 + 'x + ' + c4 + ')', tipo: 'fill', resposta: t1 + 'x+' + t2,
      expl: 'Distributiva: ' + a4 + '×' + b4 + 'x + ' + a4 + '×' + c4 + ' = ' + t1 + 'x + ' + t2 + '.',
      tema: 'T4 · Op. Polinómios'
    };
  }

  // ── TEMA 5 · Equações do 1.º grau ──
  if (tema === '5') {
    // Variante de contexto (problema → equação)
    if (!easy && Math.random() < 0.4) {
      var solC = rnd_f7q1(2, 12);
      var mult = rnd_f7q1(2, 5), add = rnd_f7q1(1, 15);
      var tot = mult * solC + add;
      var cenas = [
        { e: 'O ' + (mult === 2 ? 'dobro' : mult === 3 ? 'triplo' : mult + ' vezes') + ' de um número, mais ' + add + ', é igual a ' + tot + '. Qual é o número?', r: solC },
        { e: 'A Rita tem ' + add + ' € e poupa ' + mult + ' € por semana. Ao fim de quantas semanas terá ' + tot + ' €?', r: solC }
      ];
      var pc = cenas[rnd_f7q1(0, cenas.length - 1)];
      return {
        enun: pc.e, tipo: 'fill', resposta: String(pc.r),
        expl: 'Traduz por uma equação: ' + mult + 'x + ' + add + ' = ' + tot + '. Resolve: ' + mult + 'x = ' + (tot - add) + ', x = ' + solC + '.',
        tema: 'T5 · Equações'
      };
    }
    // ax + b = c  → x = (c-b)/a, garante solução inteira
    var a5 = rndNZ_f7q1(2, easy ? 5 : 9);
    var sol = rnd_f7q1(-6, 6);
    var b5 = rndNZ_f7q1(-10, 10);
    var c5 = a5 * sol + b5;
    var eqn = a5 + 'x ' + (b5 >= 0 ? '+ ' + b5 : '− ' + Math.abs(b5)) + ' = ' + c5;
    if (tipo === 'mc') {
      var opts5 = shuffle_f7q1([sol, sol + 1, sol - 1, -sol || sol + 2].filter(function (v, i, a) { return a.indexOf(v) === i; })).slice(0, 4).map(String);
      if (opts5.indexOf(String(sol)) === -1) opts5[0] = String(sol);
      return {
        enun: 'Resolve em ordem a x: <strong>' + eqn + '</strong>',
        tipo: 'mc', opcoes: opts5, resposta: String(sol),
        expl: a5 + 'x = ' + c5 + ' ' + (b5 >= 0 ? '− ' + b5 : '+ ' + Math.abs(b5)) + ' = ' + (c5 - b5) + ', logo x = ' + (c5 - b5) + ' ÷ ' + a5 + ' = ' + sol + '.',
        tema: 'T5 · Equações'
      };
    }
    return {
      enun: 'Resolve em ordem a x: ' + eqn, tipo: 'fill', resposta: String(sol),
      expl: a5 + 'x = ' + (c5 - b5) + ', logo x = ' + sol + '.',
      tema: 'T5 · Equações'
    };
  }

  // ── TEMA 6 · Equações com denominadores ──
  if (tema === '6') {
    // x/a = b → x = ab  (solução inteira)
    var a6 = rnd_f7q1(2, 6);
    var sol6 = rnd_f7q1(-6, 8);
    var b6 = sol6; // x/a + 0 = ... mantemos simples
    var rhs = sol6; // x/a = (sol6)/a ... usamos forma x/a = k
    var k6 = rnd_f7q1(1, 6);
    var solK = a6 * k6;
    if (tipo === 'mc') {
      var opts6 = shuffle_f7q1([solK, solK + a6, solK - a6, a6 + k6].filter(function (v, i, a) { return a.indexOf(v) === i; })).slice(0, 4).map(String);
      if (opts6.indexOf(String(solK)) === -1) opts6[0] = String(solK);
      return {
        enun: 'Resolve em ordem a x: <strong>x/' + a6 + ' = ' + k6 + '</strong>',
        tipo: 'mc', opcoes: opts6, resposta: String(solK),
        expl: 'Multiplica ambos os membros por ' + a6 + ': x = ' + a6 + ' × ' + k6 + ' = ' + solK + '.',
        tema: 'T6 · Eq. Denominadores'
      };
    }
    return {
      enun: 'Resolve em ordem a x: x/' + a6 + ' = ' + k6, tipo: 'fill', resposta: String(solK),
      expl: 'Multiplica por ' + a6 + ': x = ' + a6 + ' × ' + k6 + ' = ' + solK + '.',
      tema: 'T6 · Eq. Denominadores'
    };
  }

  // fallback
  return { enun: 'Resolve: 2x = 6', tipo: 'fill', resposta: '3', expl: 'x = 6 ÷ 2 = 3.', tema: 'Equações' };
}

/* ════════════════════════════════════════════════════════════════
   GERADOR - Cap 4 Teorema de Pitágoras e Áreas (Prisma 8)
   Temas:
    1 Pitágoras - calcular a hipotenusa
    2 Pitágoras - calcular um cateto
    3 Recíproco - verificar se é triângulo retângulo
    4 Aplicações - diagonal de quadrado/retângulo, áreas
   Usa ternos pitagóricos para respostas exatas.
   ════════════════════════════════════════════════════════════════ */
var _TERNOS_m84 = [[3,4,5],[6,8,10],[5,12,13],[8,15,17],[9,12,15],[7,24,25],[20,21,29],[10,24,26]];

function buildEx_f74(tema, tipo, dif) {
  tema = String(tema);
  var hard = (dif === 'dificil'), easy = (dif === 'facil');

  // ── TEMA 1 · Pitágoras: calcular a hipotenusa ──
  if (tema === '1') {
    var t = _TERNOS_m84[rnd_f7q1(0, easy ? 3 : _TERNOS_m84.length - 1)];
    var a = t[0], b = t[1], c = t[2]; // c = hipotenusa
    var visT1 = (typeof EduVisual !== 'undefined') ? EduVisual.triangulo({ right: true, aLabel: '?', bLabel: b + '', cLabel: a + '', color: '#c4733a' }) : '';
    if (tipo === 'mc') {
      var opts = shuffle_f7q1([c, c + 1, c - 1, a + b].filter(function (v, i, ar) { return ar.indexOf(v) === i; })).slice(0, 4).map(String);
      if (opts.indexOf(String(c)) === -1) opts[0] = String(c);
      return {
        enun: 'Um triângulo retângulo tem catetos ' + a + ' e ' + b + '. Qual é a hipotenusa?',
        visual: visT1,
        tipo: 'mc', opcoes: opts, resposta: String(c),
        expl: 'Pitágoras: h² = ' + a + '² + ' + b + '² = ' + (a*a) + ' + ' + (b*b) + ' = ' + (a*a+b*b) + '. h = √' + (a*a+b*b) + ' = ' + c + '.',
        tema: 'T1 · Hipotenusa'
      };
    }
    return {
      enun: 'Triângulo retângulo de catetos ' + a + ' e ' + b + '. Calcula a hipotenusa.', visual: visT1, tipo: 'fill',
      resposta: String(c), expl: 'h = √(' + a + '² + ' + b + '²) = √' + (a*a+b*b) + ' = ' + c + '.',
      tema: 'T1 · Hipotenusa'
    };
  }

  // ── TEMA 2 · Pitágoras: calcular um cateto ──
  if (tema === '2') {
    var t2 = _TERNOS_m84[rnd_f7q1(0, easy ? 3 : _TERNOS_m84.length - 1)];
    var cat = t2[0], hip = t2[2], outro = t2[1]; // dado hip e um cateto, achar 'outro'
    if (tipo === 'mc') {
      var opts2 = shuffle_f7q1([outro, outro + 1, outro - 1, hip - cat].filter(function (v, i, ar) { return ar.indexOf(v) === i; })).slice(0, 4).map(String);
      if (opts2.indexOf(String(outro)) === -1) opts2[0] = String(outro);
      return {
        enun: 'Num triângulo retângulo a hipotenusa mede ' + hip + ' e um cateto mede ' + cat + '. Quanto mede o outro cateto?',
        tipo: 'mc', opcoes: opts2, resposta: String(outro),
        expl: 'Cateto = √(hip² − cateto²) = √(' + hip + '² − ' + cat + '²) = √(' + (hip*hip) + ' − ' + (cat*cat) + ') = √' + (hip*hip-cat*cat) + ' = ' + outro + '.',
        tema: 'T2 · Cateto'
      };
    }
    return {
      enun: 'Hipotenusa ' + hip + ', um cateto ' + cat + '. Calcula o outro cateto.', tipo: 'fill',
      resposta: String(outro), expl: '√(' + hip + '² − ' + cat + '²) = √' + (hip*hip-cat*cat) + ' = ' + outro + '.',
      tema: 'T2 · Cateto'
    };
  }

  // ── TEMA 3 · Recíproco: é triângulo retângulo? ──
  if (tema === '3') {
    var isRight = Math.random() < 0.5;
    var a3, b3, c3;
    if (isRight) {
      var tr = _TERNOS_m84[rnd_f7q1(0, _TERNOS_m84.length - 1)];
      a3 = tr[0]; b3 = tr[1]; c3 = tr[2];
    } else {
      // não pitagórico
      a3 = rnd_f7q1(3, 9); b3 = rnd_f7q1(4, 10); c3 = a3 + b3 - rnd_f7q1(1, 2);
      if (a3*a3 + b3*b3 === c3*c3) c3 += 1; // garante que NÃO é
    }
    var lados = [a3, b3, c3].sort(function (x, y) { return x - y; });
    var maior = lados[2], cat1 = lados[0], cat2 = lados[1];
    var ok = (cat1*cat1 + cat2*cat2 === maior*maior);
    return {
      enun: 'As medidas ' + a3 + ', ' + b3 + ' e ' + c3 + ' formam um triângulo retângulo?',
      tipo: 'mc', opcoes: ['Sim', 'Não'], resposta: ok ? 'Sim' : 'Não',
      expl: 'Pelo recíproco: comparar o maior² com a soma dos quadrados dos outros. ' + maior + '² = ' + (maior*maior) + '; ' + cat1 + '² + ' + cat2 + '² = ' + (cat1*cat1 + cat2*cat2) + '. ' + (ok ? 'São iguais → é retângulo.' : 'São diferentes → não é retângulo.'),
      tema: 'T3 · Recíproco'
    };
  }

  // ── TEMA 4 · Aplicações: diagonal de retângulo ──
  if (tema === '4') {
    var t4 = _TERNOS_m84[rnd_f7q1(0, easy ? 3 : _TERNOS_m84.length - 1)];
    var l1 = t4[0], l2 = t4[1], diag = t4[2];
    // Variante de contexto (escada / rampa)
    if (!easy && Math.random() < 0.4) {
      // escada de comprimento = diag (hipotenusa), base = l1 (cateto), altura = l2
      return {
        enun: 'Uma escada de ' + diag + ' m está encostada a uma parede, com a base a ' + l1 + ' m da parede. A que altura chega a escada? (em m)',
        tipo: 'fill', resposta: String(l2),
        expl: 'A escada é a hipotenusa: altura = √(' + diag + '² − ' + l1 + '²) = √(' + (diag*diag) + ' − ' + (l1*l1) + ') = √' + (diag*diag - l1*l1) + ' = ' + l2 + ' m.',
        tema: 'T4 · Aplicações'
      };
    }
    var kind = rnd_f7q1(0, 1);
    if (kind === 0) {
      // diagonal de retângulo
      if (tipo === 'mc') {
        var opts4 = shuffle_f7q1([diag, diag + 1, diag - 1, l1 + l2].filter(function (v, i, ar) { return ar.indexOf(v) === i; })).slice(0, 4).map(String);
        if (opts4.indexOf(String(diag)) === -1) opts4[0] = String(diag);
        return {
          enun: 'Um retângulo tem lados ' + l1 + ' e ' + l2 + '. Qual é o comprimento da diagonal?',
          tipo: 'mc', opcoes: opts4, resposta: String(diag),
          expl: 'A diagonal é a hipotenusa: d = √(' + l1 + '² + ' + l2 + '²) = √' + (l1*l1+l2*l2) + ' = ' + diag + '.',
          tema: 'T4 · Aplicações'
        };
      }
      return {
        enun: 'Retângulo de lados ' + l1 + ' e ' + l2 + '. Calcula a diagonal.', tipo: 'fill',
        resposta: String(diag), expl: 'd = √(' + l1 + '² + ' + l2 + '²) = √' + (l1*l1+l2*l2) + ' = ' + diag + '.',
        tema: 'T4 · Aplicações'
      };
    }
    // área de retângulo
    var area = l1 * l2;
    return {
      enun: 'Calcula a área de um retângulo de lados ' + l1 + ' e ' + l2 + '.', tipo: 'fill',
      resposta: String(area), expl: 'Área = comprimento × largura = ' + l1 + ' × ' + l2 + ' = ' + area + '.',
      tema: 'T4 · Aplicações'
    };
  }

  // fallback
  return { enun: 'Catetos 3 e 4: hipotenusa?', tipo: 'fill', resposta: '5', expl: '√(9+16)=√25=5.', tema: 'Pitágoras' };
}

/* ════════════════════════════════════════════════════════════════
   GERADOR - Cap 5 Equações Literais e Funções (Prisma 8)
   Temas:
    1 Equações literais (resolver em ordem a uma variável)
    2 Calcular imagem de uma função f(x)
    3 Função afim (declive e ordenada na origem)
    4 Equação da reta (declive entre dois pontos)
   ════════════════════════════════════════════════════════════════ */
// "mx + b" bem formatado: trata m=±1 e o sinal de b (com "−" tipográfico).
function _afim_m85(m, b) {
  var mp = (m === 1) ? 'x' : (m === -1) ? '−x' : (m + 'x').replace('-', '−');
  if (b === 0) return mp;
  return mp + (b > 0 ? ' + ' + b : ' − ' + Math.abs(b));
}
function buildEx_f75(tema, tipo, dif) {
  tema = String(tema);
  var hard = (dif === 'dificil'), easy = (dif === 'facil');
  var mx = easy ? 6 : hard ? 12 : 9;

  // ── TEMA 1 · Equações literais ──
  if (tema === '1') {
    // ax + b = y  → x = (y − b)/a. Para evitar "y − -b", usamos b POSITIVO
    // e mostramos a equação como "ax + b = y" (b somado, sempre limpo).
    var a = rndNZ_f7q1(2, 5);
    var sol = rnd_f7q1(-5, 6);
    var b = rnd_f7q1(1, 8);                 // b > 0 → enunciado e passos sem sinais duplos
    var yval = a * sol + b;
    if (tipo === 'mc') {
      var correct = 'x = (' + yval + ' − ' + b + ') ÷ ' + a;
      var opts = shuffle_f7q1([
        correct,
        'x = (' + yval + ' + ' + b + ') ÷ ' + a,
        'x = ' + yval + ' ÷ ' + a + ' − ' + b,
        'x = (' + yval + ' − ' + b + ') × ' + a
      ]).slice(0, 4);
      return {
        enun: 'Resolve em ordem a x: <strong>' + a + 'x + ' + b + ' = ' + yval + '</strong>',
        tipo: 'mc', opcoes: opts, resposta: correct,
        expl: 'Isola x: ' + a + 'x = ' + yval + ' − ' + b + ' = ' + (yval - b) + ', logo x = ' + (yval - b) + ' ÷ ' + a + ' = ' + sol + '.',
        tema: 'T1 · Eq. Literais'
      };
    }
    return {
      enun: 'Resolve em ordem a x e indica o valor: ' + a + 'x + ' + b + ' = ' + yval, tipo: 'fill',
      resposta: String(sol), expl: a + 'x = ' + yval + ' − ' + b + ' = ' + (yval - b) + ', x = ' + (yval - b) + ' ÷ ' + a + ' = ' + sol + '.',
      tema: 'T1 · Eq. Literais'
    };
  }

  // ── TEMA 2 · Calcular imagem f(x) ──
  if (tema === '2') {
    // Variante de contexto (tarifário / táxi)
    if (!easy && Math.random() < 0.4) {
      var fixo = rnd_f7q1(2, 8), porU = rnd_f7q1(1, 4), unid = rnd_f7q1(3, 12);
      var custo = porU * unid + fixo;
      var cen = [
        { e: 'Um tarifário cobra ' + fixo + ' € fixos e ' + porU + ' € por GB. Quanto custam ' + unid + ' GB? (em €)', },
        { e: 'Um táxi cobra ' + fixo + ' € de partida e ' + porU + ' € por km. Quanto custa uma viagem de ' + unid + ' km? (em €)' }
      ];
      var pc5 = cen[rnd_f7q1(0, cen.length - 1)];
      return {
        enun: pc5.e, tipo: 'fill', resposta: String(custo),
        expl: 'Modela com C(x) = ' + porU + 'x + ' + fixo + '. Para x = ' + unid + ': ' + porU + '×' + unid + ' + ' + fixo + ' = ' + custo + ' €.',
        tema: 'T2 · Imagem f(x)'
      };
    }
    var m = rndNZ_f7q1(-mx, mx), bb = rnd_f7q1(-mx, mx);
    var x0 = rnd_f7q1(-5, 6);
    var fx = m * x0 + bb;
    var fnStr = 'f(x) = ' + _afim_m85(m, bb);
    if (tipo === 'mc') {
      var opts2 = shuffle_f7q1([fx, fx + m, fx - 1, m + bb].filter(function (v, i, ar) { return ar.indexOf(v) === i; })).slice(0, 4).map(String);
      if (opts2.indexOf(String(fx)) === -1) opts2[0] = String(fx);
      return {
        enun: 'Considera ' + fnStr + '. Calcula f(' + x0 + ').',
        tipo: 'mc', opcoes: opts2, resposta: String(fx),
        expl: 'f(' + x0 + ') = ' + m + '×(' + x0 + ') ' + (bb >= 0 ? '+ ' + bb : '− ' + Math.abs(bb)) + ' = ' + (m*x0) + ' ' + (bb >= 0 ? '+ ' + bb : '− ' + Math.abs(bb)) + ' = ' + fx + '.',
        tema: 'T2 · Imagem f(x)'
      };
    }
    return {
      enun: 'Sendo ' + fnStr + ', calcula f(' + x0 + ').', tipo: 'fill', resposta: String(fx),
      expl: 'f(' + x0 + ') = ' + m + '×' + x0 + ' ' + (bb >= 0 ? '+ ' + bb : '− ' + Math.abs(bb)) + ' = ' + fx + '.',
      tema: 'T2 · Imagem f(x)'
    };
  }

  // ── TEMA 3 · Função afim (declive e ordenada na origem) ──
  if (tema === '3') {
    var m3 = rndNZ_f7q1(-mx, mx), b3 = rnd_f7q1(-mx, mx);
    var fnStr3 = 'y = ' + _afim_m85(m3, b3);
    var pedeDeclive = Math.random() < 0.5;
    var resposta = pedeDeclive ? m3 : b3;
    if (tipo === 'mc') {
      var opts3 = shuffle_f7q1([resposta, m3 + b3, -resposta, (pedeDeclive ? b3 : m3)].filter(function (v, i, ar) { return ar.indexOf(v) === i; })).slice(0, 4).map(String);
      if (opts3.indexOf(String(resposta)) === -1) opts3[0] = String(resposta);
      return {
        enun: 'Na função afim <strong>' + fnStr3 + '</strong>, qual é ' + (pedeDeclive ? 'o declive' : 'a ordenada na origem') + '?',
        tipo: 'mc', opcoes: opts3, resposta: String(resposta),
        expl: 'Na forma y = mx + b, o declive é m = ' + m3 + ' e a ordenada na origem é b = ' + b3 + '. Pedido: ' + resposta + '.',
        tema: 'T3 · Função Afim'
      };
    }
    return {
      enun: 'Na função ' + fnStr3 + ', indica ' + (pedeDeclive ? 'o declive' : 'a ordenada na origem') + '.', tipo: 'fill',
      resposta: String(resposta), expl: 'Declive m = ' + m3 + ', ordenada na origem b = ' + b3 + '.',
      tema: 'T3 · Função Afim'
    };
  }

  // ── TEMA 4 · Declive entre dois pontos ──
  if (tema === '4') {
    // escolhe declive inteiro: dados dois pontos com diferença divisível
    var m4 = rndNZ_f7q1(-4, 4);
    var x1 = rnd_f7q1(-4, 2), x2 = x1 + rnd_f7q1(1, 4);
    var y1 = rnd_f7q1(-5, 5), y2 = y1 + m4 * (x2 - x1);
    if (tipo === 'mc') {
      var opts4 = shuffle_f7q1([m4, m4 + 1, m4 - 1, -m4 || m4 + 2].filter(function (v, i, ar) { return ar.indexOf(v) === i; })).slice(0, 4).map(String);
      if (opts4.indexOf(String(m4)) === -1) opts4[0] = String(m4);
      return {
        enun: 'Qual é o declive da reta que passa em A(' + x1 + ', ' + y1 + ') e B(' + x2 + ', ' + y2 + ')?',
        tipo: 'mc', opcoes: opts4, resposta: String(m4),
        expl: 'm = (y₂ − y₁) / (x₂ − x₁) = (' + y2 + ' − ' + y1 + ') / (' + x2 + ' − ' + x1 + ') = ' + (y2-y1) + ' / ' + (x2-x1) + ' = ' + m4 + '.',
        tema: 'T4 · Declive'
      };
    }
    return {
      enun: 'Calcula o declive da reta por A(' + x1 + ', ' + y1 + ') e B(' + x2 + ', ' + y2 + ').', tipo: 'fill',
      resposta: String(m4), expl: 'm = (' + y2 + ' − ' + y1 + ')/(' + x2 + ' − ' + x1 + ') = ' + (y2-y1) + '/' + (x2-x1) + ' = ' + m4 + '.',
      tema: 'T4 · Declive'
    };
  }

  // fallback
  return { enun: 'f(x)=2x+1, calcula f(3)', tipo: 'fill', resposta: '7', expl: '2×3+1=7.', tema: 'Funções' };
}

/* ════════════════════════════════════════════════════════════════
   GERADOR - Cap 6 Sistemas de Equações (Prisma 8)
   Temas:
    1 Equação com duas incógnitas (verificar par solução)
    2 Resolver sistema - valor de x
    3 Resolver sistema - valor de y
    4 Verificar se um par é solução do sistema
   Soluções inteiras controladas (constrói o sistema a partir de (x,y)).
   ════════════════════════════════════════════════════════════════ */
function _sgn_m86(n) { return n < 0 ? ' − ' + Math.abs(n) : ' + ' + n; }
// Termo " + by" / " − by" bem formatado (trata b=±1: "y"/"−y", sem "1y").
function _byTerm_m86(b) {
  var abs = Math.abs(b);
  var coef = (abs === 1) ? 'y' : abs + 'y';
  return (b < 0 ? ' − ' : ' + ') + coef;
}
function _eq_m86(a, b, c) {
  var ax = (a === 1) ? 'x' : (a === -1) ? '−x' : (a + 'x');
  return ax + _byTerm_m86(b) + ' = ' + c;
}

function buildEx_f76(tema, tipo, dif) {
  tema = String(tema);
  var easy = (dif === 'facil'), hard = (dif === 'dificil');

  // solução inteira do sistema
  var x = rnd_f7q1(-5, 6), y = rnd_f7q1(-5, 6);

  // ── TEMA 1 · Equação com duas incógnitas: par solução? ──
  if (tema === '1') {
    var a = rndNZ_f7q1(1, 4), b = rndNZ_f7q1(1, 4);
    var c = a * x + b * y;
    var eq = _eq_m86(a, b, c);
    var isSol = Math.random() < 0.5;
    var px = x, py = y;
    if (!isSol) { px = x + rnd_f7q1(1, 2); } // par que não satisfaz
    var ok = (a * px + b * py === c);
    return {
      enun: 'O par (' + px + ', ' + py + ') é solução da equação <strong>' + eq + '</strong>?',
      tipo: 'mc', opcoes: ['Sim', 'Não'], resposta: ok ? 'Sim' : 'Não',
      expl: 'Substitui: ' + a + '×(' + px + ') + ' + b + '×(' + py + ') = ' + (a*px) + ' + ' + (b*py) + ' = ' + (a*px+b*py) + '. ' + (ok ? 'Igual a ' + c + ' → é solução.' : 'Diferente de ' + c + ' → não é solução.'),
      tema: 'T1 · Eq. 2 incógnitas'
    };
  }

  // ── TEMAS 2 e 3 · Resolver sistema (substituição) ──
  if (tema === '2' || tema === '3') {
    // Variante de contexto (problema da soma e diferença → sistema)
    if (!easy && Math.random() < 0.35) {
      var n1 = rnd_f7q1(4, 15), n2 = rnd_f7q1(1, n1 - 1); // n1 > n2 > 0
      var soma = n1 + n2, dif = n1 - n2;
      var pedeMaior = (tema === '2'); // x = maior
      var respC = pedeMaior ? n1 : n2;
      return {
        enun: 'A soma de dois números é ' + soma + ' e a diferença é ' + dif + '. Qual é o número ' + (pedeMaior ? 'maior' : 'menor') + '?',
        tipo: 'fill', resposta: String(respC),
        expl: 'Sistema { x + y = ' + soma + ' ; x − y = ' + dif + ' }. Somando as equações: 2x = ' + (soma + dif) + ' → x = ' + n1 + ' (maior), y = ' + n2 + ' (menor).',
        tema: (tema === '2' ? 'T2 · Sistema (x)' : 'T3 · Sistema (y)')
      };
    }
    // Equação 1: x + b1·y = c1 ; Equação 2: a2·x + b2·y = c2
    var b1 = rndNZ_f7q1(1, 3);
    var c1 = x + b1 * y;
    var a2 = rndNZ_f7q1(2, 4), b2 = rndNZ_f7q1(-3, 3); if (b2 === 0) b2 = 1;
    var c2 = a2 * x + b2 * y;
    var eq1 = 'x' + _byTerm_m86(b1) + ' = ' + c1;
    var eq2 = a2 + 'x' + _byTerm_m86(b2) + ' = ' + c2;
    var pede = (tema === '2') ? 'x' : 'y';
    var resp = (tema === '2') ? x : y;
    var sistema = '{ ' + eq1 + ' ; ' + eq2 + ' }';
    if (tipo === 'mc') {
      var opts = shuffle_f7q1([resp, resp + 1, resp - 1, (tema === '2' ? y : x)].filter(function (v, i, ar) { return ar.indexOf(v) === i; })).slice(0, 4).map(String);
      if (opts.indexOf(String(resp)) === -1) opts[0] = String(resp);
      return {
        enun: 'Resolve o sistema <strong>' + sistema + '</strong> e indica o valor de <strong>' + pede + '</strong>.',
        tipo: 'mc', opcoes: opts, resposta: String(resp),
        expl: 'A solução do sistema é (x, y) = (' + x + ', ' + y + '). Logo ' + pede + ' = ' + resp + '. (Isola x na 1.ª equação: x = ' + c1 + (b1 < 0 ? ' + ' + Math.abs(b1) + 'y' : ' − ' + b1 + 'y') + ', substitui na 2.ª.)',
        tema: (tema === '2' ? 'T2 · Sistema (x)' : 'T3 · Sistema (y)')
      };
    }
    return {
      enun: 'Resolve o sistema ' + sistema + ' e indica ' + pede + '.', tipo: 'fill', resposta: String(resp),
      expl: 'Solução do sistema: (x, y) = (' + x + ', ' + y + '). ' + pede + ' = ' + resp + '.',
      tema: (tema === '2' ? 'T2 · Sistema (x)' : 'T3 · Sistema (y)')
    };
  }

  // ── TEMA 4 · Verificar par solução do sistema ──
  if (tema === '4') {
    var ba = rndNZ_f7q1(1, 3), bb = rndNZ_f7q1(1, 3);
    var ca = x + ba * y, cb = 2 * x + bb * y;
    var e1 = 'x' + _byTerm_m86(ba) + ' = ' + ca;
    var e2 = '2x' + _byTerm_m86(bb) + ' = ' + cb;
    var isSol = Math.random() < 0.5;
    var px = x, py = y;
    if (!isSol) { py = y + rnd_f7q1(1, 2); }
    var ok = (px + ba * py === ca) && (2 * px + bb * py === cb);
    return {
      enun: 'O par (' + px + ', ' + py + ') é solução do sistema { ' + e1 + ' ; ' + e2 + ' }?',
      tipo: 'mc', opcoes: ['Sim', 'Não'], resposta: ok ? 'Sim' : 'Não',
      expl: 'Um par é solução do sistema se satisfaz as DUAS equações. ' + (ok ? 'Substituindo, ambas se verificam → é solução.' : 'Pelo menos uma equação não se verifica → não é solução.'),
      tema: 'T4 · Solução do sistema'
    };
  }

  // fallback
  return { enun: '(2,1) é solução de x + y = 3?', tipo: 'mc', opcoes: ['Sim', 'Não'], resposta: 'Sim', expl: '2+1=3 → sim.', tema: 'Sistemas' };
}

/* ════════════════════════════════════════════════════════════════
   GERADOR - Cap 8 Dados e Probabilidades (Prisma 8)
   Temas:
    1 Média
    2 Moda
    3 Mediana
    4 Amplitude / amplitude interquartis (amplitude)
    5 Probabilidade simples
    6 Frequência relativa (%)
   ════════════════════════════════════════════════════════════════ */
function _media_m88(arr) { var s = 0; for (var i = 0; i < arr.length; i++) s += arr[i]; return s / arr.length; }
function _ordena_m88(arr) { return arr.slice().sort(function (a, b) { return a - b; }); }

function buildEx_f78(tema, tipo, dif) {
  tema = String(tema);
  var easy = (dif === 'facil'), hard = (dif === 'dificil');
  var n = easy ? 5 : hard ? 7 : 5; // tamanho do conjunto (ímpar para mediana limpa)

  // gera conjunto de dados; difícil usa números maiores
  var _escD8 = hard ? 2.5 : easy ? 0.7 : 1;
  function dados(len, lo, hi) {
    var h = Math.max(lo + len, Math.round(hi * _escD8));
    var a = [];
    for (var i = 0; i < len; i++) a.push(rnd_f7q1(lo, h));
    return a;
  }

  // ── TEMA 1 · Média (garante média inteira) ──
  if (tema === '1') {
    // Variante VISUAL: gráfico de barras → ler e calcular a média
    if (typeof EduVisual !== 'undefined' && Math.random() < 0.35) {
      var cats = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex'];
      var valsV; do { valsV = dados(5, 2, 12); } while (_media_m88(valsV) % 1 !== 0);
      var mediaV = _media_m88(valsV);
      var dataV = cats.map(function (c, i) { return { label: c, value: valsV[i] }; });
      return {
        enun: 'O gráfico mostra o número de livros lidos em cada dia. Qual é a <strong>média</strong> diária?',
        visual: EduVisual.barras(dataV, '#9a5e96'),
        tipo: 'fill', resposta: String(mediaV),
        expl: 'Média = (' + valsV.join(' + ') + ') ÷ 5 = ' + valsV.reduce(function (s, v) { return s + v; }, 0) + ' ÷ 5 = ' + mediaV + '.',
        tema: 'T1 · Média'
      };
    }
    // Variante de contexto (notas de um aluno), média inteira
    if (!easy && Math.random() < 0.4) {
      var notas;
      do { notas = dados(5, 8, 20); } while (_media_m88(notas) % 1 !== 0);
      var mediaN = _media_m88(notas);
      return {
        enun: 'Um aluno teve as notas ' + notas.join(', ') + '. Qual é a média (em valores)?',
        tipo: 'fill', resposta: String(mediaN),
        expl: 'Média = (' + notas.join(' + ') + ') ÷ 5 = ' + notas.reduce(function (s, v) { return s + v; }, 0) + ' ÷ 5 = ' + mediaN + ' valores.',
        tema: 'T1 · Média'
      };
    }
    var arr;
    do { arr = dados(n, 1, easy ? 10 : 20); } while (_media_m88(arr) % 1 !== 0);
    var media = _media_m88(arr);
    if (tipo === 'mc') {
      var opts = shuffle_f7q1([media, media + 1, media - 1, Math.max.apply(null, arr)].filter(function (v, i, a) { return a.indexOf(v) === i; })).slice(0, 4).map(String);
      if (opts.indexOf(String(media)) === -1) opts[0] = String(media);
      return {
        enun: 'Calcula a média do conjunto: <strong>' + arr.join(', ') + '</strong>',
        tipo: 'mc', opcoes: opts, resposta: String(media),
        expl: 'Média = soma ÷ nº de dados = ' + arr.join('+') + ' = ' + arr.reduce(function (s, v) { return s + v; }, 0) + ' ÷ ' + arr.length + ' = ' + media + '.',
        tema: 'T1 · Média'
      };
    }
    return {
      enun: 'Calcula a média de: ' + arr.join(', '), tipo: 'fill', resposta: String(media),
      expl: 'Soma = ' + arr.reduce(function (s, v) { return s + v; }, 0) + '; ÷ ' + arr.length + ' = ' + media + '.',
      tema: 'T1 · Média'
    };
  }

  // ── TEMA 2 · Moda (garante moda única) ──
  if (tema === '2') {
    var base = dados(n - 2, 1, 8);
    var modaVal = base[rnd_f7q1(0, base.length - 1)];
    var arr2 = base.concat([modaVal, modaVal]); // garante que modaVal aparece mais vezes
    shuffle_f7q1(arr2);
    // confirma moda única
    var freq = {}; arr2.forEach(function (v) { freq[v] = (freq[v] || 0) + 1; });
    var maxF = 0, moda = modaVal, ties = 0;
    Object.keys(freq).forEach(function (k) { if (freq[k] > maxF) { maxF = freq[k]; moda = parseInt(k); } });
    Object.keys(freq).forEach(function (k) { if (freq[k] === maxF) ties++; });
    if (ties > 1) { arr2.push(moda); } // reforça
    if (tipo === 'mc') {
      var distintos = Object.keys(freq).map(Number).filter(function (v) { return v !== moda; });
      var opts2arr = [moda].concat(shuffle_f7q1(distintos));
      // garante 4 opções únicas, preenchendo com valores próximos da moda
      var extra = 1;
      while (opts2arr.length < 4) {
        var cand = moda + extra; if (opts2arr.indexOf(cand) === -1 && cand > 0) opts2arr.push(cand);
        var cand2 = moda - extra; if (opts2arr.length < 4 && opts2arr.indexOf(cand2) === -1 && cand2 > 0) opts2arr.push(cand2);
        extra++;
        if (extra > 20) break;
      }
      var opts2 = shuffle_f7q1(opts2arr.slice(0, 4)).map(String);
      if (opts2.indexOf(String(moda)) === -1) opts2[0] = String(moda);
      return {
        enun: 'Qual é a moda do conjunto: <strong>' + arr2.join(', ') + '</strong>?',
        tipo: 'mc', opcoes: opts2, resposta: String(moda),
        expl: 'A moda é o valor que aparece mais vezes: ' + moda + ' (aparece ' + maxF + ' vezes).',
        tema: 'T2 · Moda'
      };
    }
    return {
      enun: 'Indica a moda de: ' + arr2.join(', '), tipo: 'fill', resposta: String(moda),
      expl: 'O valor mais frequente é ' + moda + '.', tema: 'T2 · Moda'
    };
  }

  // ── TEMA 3 · Mediana (n ímpar → valor central) ──
  if (tema === '3') {
    var len3 = (n % 2 === 0) ? n + 1 : n;
    var arr3 = dados(len3, 1, 20);
    var ord = _ordena_m88(arr3);
    var mediana = ord[(len3 - 1) / 2];
    if (tipo === 'mc') {
      var opts3 = shuffle_f7q1([mediana, mediana + 1, mediana - 1, ord[0]].filter(function (v, i, a) { return a.indexOf(v) === i; })).slice(0, 4).map(String);
      if (opts3.indexOf(String(mediana)) === -1) opts3[0] = String(mediana);
      return {
        enun: 'Qual é a mediana do conjunto: <strong>' + arr3.join(', ') + '</strong>?',
        tipo: 'mc', opcoes: opts3, resposta: String(mediana),
        expl: 'Ordena os dados: ' + ord.join(', ') + '. Com ' + len3 + ' valores (ímpar), a mediana é o valor central → ' + mediana + '.',
        tema: 'T3 · Mediana'
      };
    }
    return {
      enun: 'Indica a mediana de: ' + arr3.join(', '), tipo: 'fill', resposta: String(mediana),
      expl: 'Ordenado: ' + ord.join(', ') + '. Valor central = ' + mediana + '.', tema: 'T3 · Mediana'
    };
  }

  // ── TEMA 4 · Amplitude ──
  if (tema === '4') {
    var arr4 = dados(n, 1, 30);
    var ord4 = _ordena_m88(arr4);
    var amp = ord4[ord4.length - 1] - ord4[0];
    if (tipo === 'mc') {
      var opts4 = shuffle_f7q1([amp, amp + 1, amp - 1, ord4[ord4.length - 1]].filter(function (v, i, a) { return a.indexOf(v) === i; })).slice(0, 4).map(String);
      if (opts4.indexOf(String(amp)) === -1) opts4[0] = String(amp);
      return {
        enun: 'Qual é a amplitude do conjunto: <strong>' + arr4.join(', ') + '</strong>?',
        tipo: 'mc', opcoes: opts4, resposta: String(amp),
        expl: 'Amplitude = máximo − mínimo = ' + ord4[ord4.length - 1] + ' − ' + ord4[0] + ' = ' + amp + '.',
        tema: 'T4 · Amplitude'
      };
    }
    return {
      enun: 'Calcula a amplitude de: ' + arr4.join(', '), tipo: 'fill', resposta: String(amp),
      expl: 'Máximo (' + ord4[ord4.length - 1] + ') − mínimo (' + ord4[0] + ') = ' + amp + '.', tema: 'T4 · Amplitude'
    };
  }

  // ── TEMA 5 · Probabilidade simples ──
  if (tema === '5') {
    var contextos = [
      { tot: 6, desc: 'lançar um dado', fav: rnd_f7q1(1, 3), o: 'sair um número' },
      { tot: rnd_f7q1(8, 12), desc: 'tirar uma bola de um saco' }
    ];
    var ctx = contextos[rnd_f7q1(0, contextos.length - 1)];
    var total = ctx.tot, fav = rnd_f7q1(1, total - 1);
    var r = reduce_f7q1(fav, total);
    var fracStr = (r[1] === 1) ? String(r[0]) : r[0] + '/' + r[1];
    var enun = (ctx.desc === 'lançar um dado')
      ? 'Ao lançar um dado equilibrado, qual é a probabilidade de sair um de ' + fav + ' resultados favoráveis (em ' + total + ')?'
      : 'Num saco há ' + total + ' bolas, ' + fav + ' das quais são vermelhas. Qual é a probabilidade de tirar uma bola vermelha?';
    return {
      enun: enun, tipo: 'fill', resposta: fracStr,
      expl: 'P = casos favoráveis ÷ casos possíveis = ' + fav + '/' + total + ' = ' + fracStr + '.',
      tema: 'T5 · Probabilidade'
    };
  }

  // ── TEMA 6 · Frequência relativa (%) ──
  if (tema === '6') {
    var tot6 = [10, 20, 25, 50, 100][rnd_f7q1(0, 4)];
    var abs = rnd_f7q1(1, tot6);
    var pct = Math.round(abs / tot6 * 100);
    if (tipo === 'mc') {
      var opts6 = shuffle_f7q1([pct, pct + 5, pct - 5, abs].filter(function (v, i, a) { return a.indexOf(v) === i; })).slice(0, 4).map(String);
      if (opts6.indexOf(String(pct)) === -1) opts6[0] = String(pct);
      return {
        enun: 'Num total de ' + tot6 + ' alunos, ' + abs + ' praticam natação. Qual é a frequência relativa (em %)?',
        tipo: 'mc', opcoes: opts6.map(function (v) { return v + '%'; }), resposta: pct + '%',
        expl: 'Frequência relativa = ' + abs + ' ÷ ' + tot6 + ' = ' + (abs / tot6) + ' = ' + pct + '%.',
        tema: 'T6 · Frequência'
      };
    }
    return {
      enun: 'Em ' + tot6 + ' alunos, ' + abs + ' praticam natação. Frequência relativa em %?', tipo: 'fill',
      resposta: String(pct), expl: abs + ' ÷ ' + tot6 + ' × 100 = ' + pct + '%.', tema: 'T6 · Frequência'
    };
  }

  // fallback
  return { enun: 'Média de 2, 4, 6?', tipo: 'fill', resposta: '4', expl: '(2+4+6)/3 = 4.', tema: 'Dados' };
}

/* ════════════════════════════════════════════════════════════════
   GERADOR - Cap 7 Figuras no Espaço e Volumes (Prisma 8)
   Temas:
    1 Volume de prisma (Abase × altura)
    2 Volume de cilindro (π r² h) - resposta "kπ"
    3 Volume de pirâmide (1/3 Abase × altura)
    4 Volume de cone (1/3 π r² h) - resposta "kπ"
    5 Volume de esfera (4/3 π r³) - resposta "kπ"
    6 Área do círculo (π r²) - resposta "kπ"
   Respostas com π usam tipo 'fill_frac' (comparação textual).
   ════════════════════════════════════════════════════════════════ */
function buildEx_f77(tema, tipo, dif) {
  tema = String(tema);
  var easy = (dif === 'facil'), hard = (dif === 'dificil');
  function piStr(k) { return k === 1 ? 'π' : k + 'π'; }
  // Respostas em "kπ" são sempre de resposta aberta → fill_frac (texto).
  // Qualquer pedido que não seja 'mc' (fill, vf, …) cai em fill_frac, para
  // nunca gerar um falso "Verdadeiro/Falso" com resposta tipo "180π".
  function fillTipoPi(t) { return (t === 'mc') ? 'mc' : 'fill_frac'; }

  // ── TEMA 1 · Volume de prisma ──
  if (tema === '1') {
    // Variante de contexto (caixa / aquário) - paralelepípedo c × l × a
    if (!easy && Math.random() < 0.4) {
      var c1 = rnd_f7q1(4, 12), l1 = rnd_f7q1(3, 8), a1 = rnd_f7q1(2, 6);
      var Vcx = c1 * l1 * a1;
      var obj = ['Uma caixa', 'Um aquário', 'Um depósito'][rnd_f7q1(0, 2)];
      return {
        enun: obj + ' tem a forma de um paralelepípedo de ' + c1 + ' cm de comprimento, ' + l1 + ' cm de largura e ' + a1 + ' cm de altura. Qual é o volume? (em cm³)',
        tipo: 'fill', resposta: String(Vcx),
        expl: 'V = comprimento × largura × altura = ' + c1 + ' × ' + l1 + ' × ' + a1 + ' = ' + Vcx + ' cm³.',
        tema: 'T1 · Volume Prisma'
      };
    }
    var Ab = rnd_f7q1(easy ? 4 : 6, hard ? 30 : 20), h = rnd_f7q1(2, hard ? 12 : 8);
    var V = Ab * h;
    if (tipo === 'mc') {
      var opts = shuffle_f7q1([V, V + Ab, V - h, Ab + h].filter(function (v, i, a) { return a.indexOf(v) === i; })).slice(0, 4).map(String);
      if (opts.indexOf(String(V)) === -1) opts[0] = String(V);
      return {
        enun: 'Um prisma tem área da base ' + Ab + ' cm² e altura ' + h + ' cm. Qual é o volume?',
        tipo: 'mc', opcoes: opts.map(function (v) { return v + ' cm³'; }), resposta: V + ' cm³',
        expl: 'V = área da base × altura = ' + Ab + ' × ' + h + ' = ' + V + ' cm³.',
        tema: 'T1 · Volume Prisma'
      };
    }
    return {
      enun: 'Volume de um prisma de área da base ' + Ab + ' cm² e altura ' + h + ' cm (em cm³)?', tipo: 'fill',
      resposta: String(V), expl: 'V = ' + Ab + ' × ' + h + ' = ' + V + ' cm³.', tema: 'T1 · Volume Prisma'
    };
  }

  // ── TEMA 2 · Volume de cilindro (π r² h) ──
  if (tema === '2') {
    var r = rnd_f7q1(1, easy ? 4 : 6), hc = rnd_f7q1(2, hard ? 10 : 7);
    var k = r * r * hc;
    if (tipo === 'mc') {
      var opts2 = shuffle_f7q1([k, r * hc, r * r + hc, 2 * r * hc].filter(function (v, i, a) { return a.indexOf(v) === i; })).slice(0, 4);
      if (opts2.indexOf(k) === -1) opts2[0] = k;
      return {
        enun: 'Um cilindro tem raio da base ' + r + ' cm e altura ' + hc + ' cm. Qual é o volume?',
        tipo: 'mc', opcoes: opts2.map(piStr).map(function (s) { return s + ' cm³'; }), resposta: piStr(k) + ' cm³',
        expl: 'V = π × r² × h = π × ' + (r * r) + ' × ' + hc + ' = ' + piStr(k) + ' cm³.',
        tema: 'T2 · Volume Cilindro'
      };
    }
    return {
      enun: 'Volume de um cilindro de raio ' + r + ' cm e altura ' + hc + ' cm? (escreve na forma kπ)',
      tipo: fillTipoPi(tipo), resposta: piStr(k),
      expl: 'V = π·r²·h = π·' + (r * r) + '·' + hc + ' = ' + piStr(k) + ' cm³.', tema: 'T2 · Volume Cilindro'
    };
  }

  // ── TEMA 3 · Volume de pirâmide ──
  if (tema === '3') {
    var Ab3 = rnd_f7q1(2, 12) * 3, h3 = rnd_f7q1(2, hard ? 12 : 8);
    var V3 = Ab3 * h3 / 3;
    if (tipo === 'mc') {
      var opts3 = shuffle_f7q1([V3, Ab3 * h3, V3 + h3, V3 - 1].filter(function (v, i, a) { return a.indexOf(v) === i; })).slice(0, 4).map(String);
      if (opts3.indexOf(String(V3)) === -1) opts3[0] = String(V3);
      return {
        enun: 'Uma pirâmide tem área da base ' + Ab3 + ' cm² e altura ' + h3 + ' cm. Qual é o volume?',
        tipo: 'mc', opcoes: opts3.map(function (v) { return v + ' cm³'; }), resposta: V3 + ' cm³',
        expl: 'V = (área da base × altura) ÷ 3 = (' + Ab3 + ' × ' + h3 + ') ÷ 3 = ' + V3 + ' cm³.',
        tema: 'T3 · Volume Pirâmide'
      };
    }
    return {
      enun: 'Volume de uma pirâmide de área da base ' + Ab3 + ' cm² e altura ' + h3 + ' cm (em cm³)?', tipo: 'fill',
      resposta: String(V3), expl: 'V = (' + Ab3 + ' × ' + h3 + ') ÷ 3 = ' + V3 + ' cm³.', tema: 'T3 · Volume Pirâmide'
    };
  }

  // ── TEMA 4 · Volume de cone ──
  if (tema === '4') {
    var r4, h4, k4;
    do { r4 = rnd_f7q1(1, 6); h4 = rnd_f7q1(2, 9); k4 = r4 * r4 * h4; } while (k4 % 3 !== 0);
    var Vk = k4 / 3;
    if (tipo === 'mc') {
      var opts4 = shuffle_f7q1([Vk, k4, Vk + r4, r4 * h4].filter(function (v, i, a) { return a.indexOf(v) === i; })).slice(0, 4);
      if (opts4.indexOf(Vk) === -1) opts4[0] = Vk;
      return {
        enun: 'Um cone tem raio da base ' + r4 + ' cm e altura ' + h4 + ' cm. Qual é o volume?',
        tipo: 'mc', opcoes: opts4.map(piStr).map(function (s) { return s + ' cm³'; }), resposta: piStr(Vk) + ' cm³',
        expl: 'V = (π × r² × h) ÷ 3 = (π × ' + (r4 * r4) + ' × ' + h4 + ') ÷ 3 = ' + piStr(Vk) + ' cm³.',
        tema: 'T4 · Volume Cone'
      };
    }
    return {
      enun: 'Volume de um cone de raio ' + r4 + ' cm e altura ' + h4 + ' cm? (forma kπ)',
      tipo: fillTipoPi(tipo), resposta: piStr(Vk),
      expl: 'V = (π·' + (r4 * r4) + '·' + h4 + ')÷3 = ' + piStr(Vk) + ' cm³.', tema: 'T4 · Volume Cone'
    };
  }

  // ── TEMA 5 · Volume de esfera ──
  if (tema === '5') {
    var r5 = [3, 6][rnd_f7q1(0, 1)];
    var k5 = 4 * r5 * r5 * r5 / 3;
    if (tipo === 'mc') {
      var opts5 = shuffle_f7q1([k5, k5 / 2, k5 + r5, r5 * r5 * r5].filter(function (v, i, a) { return a.indexOf(v) === i; })).slice(0, 4);
      if (opts5.indexOf(k5) === -1) opts5[0] = k5;
      return {
        enun: 'Uma esfera tem raio ' + r5 + ' cm. Qual é o volume?',
        tipo: 'mc', opcoes: opts5.map(piStr).map(function (s) { return s + ' cm³'; }), resposta: piStr(k5) + ' cm³',
        expl: 'V = (4 × π × r³) ÷ 3 = (4 × π × ' + (r5 * r5 * r5) + ') ÷ 3 = ' + piStr(k5) + ' cm³.',
        tema: 'T5 · Volume Esfera'
      };
    }
    return {
      enun: 'Volume de uma esfera de raio ' + r5 + ' cm? (forma kπ)',
      tipo: fillTipoPi(tipo), resposta: piStr(k5),
      expl: 'V = (4·π·' + (r5 * r5 * r5) + ')÷3 = ' + piStr(k5) + ' cm³.', tema: 'T5 · Volume Esfera'
    };
  }

  // ── TEMA 6 · Área do círculo ──
  if (tema === '6') {
    var r6 = rnd_f7q1(1, easy ? 5 : 9);
    var k6 = r6 * r6;
    if (tipo === 'mc') {
      var opts6 = shuffle_f7q1([k6, 2 * r6, k6 + r6, 4 * r6].filter(function (v, i, a) { return a.indexOf(v) === i; })).slice(0, 4);
      if (opts6.indexOf(k6) === -1) opts6[0] = k6;
      return {
        enun: 'Qual é a área de um círculo de raio ' + r6 + ' cm?',
        tipo: 'mc', opcoes: opts6.map(piStr).map(function (s) { return s + ' cm²'; }), resposta: piStr(k6) + ' cm²',
        expl: 'A = π × r² = π × ' + (r6 * r6) + ' = ' + piStr(k6) + ' cm².',
        tema: 'T6 · Área Círculo'
      };
    }
    return {
      enun: 'Área de um círculo de raio ' + r6 + ' cm? (forma kπ)',
      tipo: fillTipoPi(tipo), resposta: piStr(k6),
      expl: 'A = π·r² = π·' + (r6 * r6) + ' = ' + piStr(k6) + ' cm².', tema: 'T6 · Área Círculo'
    };
  }

  // fallback
  return { enun: 'Volume de prisma: Abase 5, altura 4?', tipo: 'fill', resposta: '20', expl: '5×4=20.', tema: 'Volumes' };
}

/* ════════════════════════════════════════════════════════════════
   GERADOR - Cap 2 Vetores e Isometrias (Prisma 8)
   Capítulo muito visual; o gerador cobre o que é viável sem figura:
    1 Translação em coordenadas (somar vetor a ponto)
    2 Componentes da soma de vetores
    3 Tipos de simetria (conceptual)
    4 Vetor simétrico (componentes)
   ════════════════════════════════════════════════════════════════ */
function buildEx_f72(tema, tipo, dif) {
  tema = String(tema);
  var easy = (dif === 'facil'), hard = (dif === 'dificil');
  var lim = easy ? 5 : hard ? 10 : 7;

  // ── TEMA 1 · Translação de um ponto por um vetor ──
  if (tema === '1') {
    var px = rnd_f7q1(-lim, lim), py = rnd_f7q1(-lim, lim);
    var vx = rndNZ_f7q1(-lim, lim), vy = rndNZ_f7q1(-lim, lim);
    var rx = px + vx, ry = py + vy;
    var resp = '(' + rx + ', ' + ry + ')';
    // Variante de contexto (movimento de um objeto)
    if (!easy && Math.random() < 0.4) {
      var ator = ['Um robô', 'Uma peça do jogo', 'Um drone'][rnd_f7q1(0, 2)];
      return {
        enun: ator + ' está na posição (' + px + ', ' + py + ') e desloca-se segundo o vetor (' + vx + ', ' + vy + '). Qual é a nova posição? (forma (x, y))',
        tipo: 'fill_frac', resposta: resp,
        expl: 'Soma o vetor à posição: (' + px + '+' + vx + ', ' + py + '+' + vy + ') = ' + resp + '.',
        tema: 'T1 · Translação'
      };
    }
    // referencial com o ponto P e o vetor de translação (a partir de P)
    var visT = (typeof EduVisual !== 'undefined') ? EduVisual.referencial({
      range: Math.max(6, lim + Math.max(Math.abs(vx), Math.abs(vy))),
      points: [{ x: px, y: py, label: 'P' }],
      vectors: [{ x1: px, y1: py, x2: rx, y2: ry, label: 'v' }],
      color: '#4d978f'
    }) : '';
    if (tipo === 'mc') {
      var opts = shuffle_f7q1([resp, '(' + (px - vx) + ', ' + (py - vy) + ')', '(' + rx + ', ' + (py - vy) + ')', '(' + (px * vx) + ', ' + (py * vy) + ')'].filter(function (v, i, a) { return a.indexOf(v) === i; })).slice(0, 4);
      if (opts.indexOf(resp) === -1) opts[0] = resp;
      return {
        enun: 'Aplica ao ponto P(' + px + ', ' + py + ') a translação associada ao vetor v(' + vx + ', ' + vy + '). Qual é a imagem?',
        visual: visT,
        tipo: 'mc', opcoes: opts, resposta: resp,
        expl: 'A translação soma as componentes do vetor às coordenadas: (' + px + ' + ' + vx + ', ' + py + ' + ' + vy + ') = ' + resp + '.',
        tema: 'T1 · Translação'
      };
    }
    return {
      enun: 'Imagem de P(' + px + ', ' + py + ') pela translação do vetor v(' + vx + ', ' + vy + ')? (forma (x, y))',
      visual: visT,
      tipo: 'fill_frac', resposta: resp,
      expl: '(' + px + '+' + vx + ', ' + py + '+' + vy + ') = ' + resp + '.', tema: 'T1 · Translação'
    };
  }

  // ── TEMA 2 · Soma de vetores (componentes) ──
  if (tema === '2') {
    var ax = rndNZ_f7q1(-lim, lim), ay = rndNZ_f7q1(-lim, lim);
    var bx = rndNZ_f7q1(-lim, lim), by = rndNZ_f7q1(-lim, lim);
    var sx = ax + bx, sy = ay + by;
    var resp2 = '(' + sx + ', ' + sy + ')';
    if (tipo === 'mc') {
      var opts2 = shuffle_f7q1([resp2, '(' + (ax - bx) + ', ' + (ay - by) + ')', '(' + sx + ', ' + (ay - by) + ')', '(' + (ax * bx) + ', ' + (ay * by) + ')'].filter(function (v, i, a) { return a.indexOf(v) === i; })).slice(0, 4);
      if (opts2.indexOf(resp2) === -1) opts2[0] = resp2;
      return {
        enun: 'Sendo u(' + ax + ', ' + ay + ') e v(' + bx + ', ' + by + '), quais são as componentes de u + v?',
        tipo: 'mc', opcoes: opts2, resposta: resp2,
        expl: 'Somam-se as componentes: (' + ax + ' + ' + bx + ', ' + ay + ' + ' + by + ') = ' + resp2 + '.',
        tema: 'T2 · Soma de Vetores'
      };
    }
    return {
      enun: 'u(' + ax + ', ' + ay + ') + v(' + bx + ', ' + by + ') = ? (componentes, forma (x, y))',
      tipo: 'fill_frac', resposta: resp2,
      expl: '(' + ax + '+' + bx + ', ' + ay + '+' + by + ') = ' + resp2 + '.', tema: 'T2 · Soma de Vetores'
    };
  }

  // ── TEMA 3 · Tipos de simetria (conceptual) ──
  if (tema === '3') {
    var perguntas = [
      { q: 'Que isometria desliza todos os pontos a mesma distância e direção, sem rodar nem refletir?', r: 'Translação', w: ['Reflexão', 'Rotação', 'Reflexão deslizante'] },
      { q: 'Que isometria corresponde a uma "imagem ao espelho" em relação a uma reta (eixo)?', r: 'Reflexão', w: ['Translação', 'Rotação', 'Reflexão deslizante'] },
      { q: 'Que isometria faz girar a figura em torno de um ponto (centro), segundo um ângulo?', r: 'Rotação', w: ['Translação', 'Reflexão', 'Reflexão deslizante'] },
      { q: 'Que isometria combina uma reflexão num eixo com uma translação segundo esse eixo?', r: 'Reflexão deslizante', w: ['Translação', 'Reflexão', 'Rotação'] }
    ];
    var p = perguntas[rnd_f7q1(0, perguntas.length - 1)];
    var opts3 = shuffle_f7q1([p.r].concat(p.w)).slice(0, 4);
    if (opts3.indexOf(p.r) === -1) opts3[0] = p.r;
    return {
      enun: p.q, tipo: 'mc', opcoes: opts3, resposta: p.r,
      expl: 'A resposta é: ' + p.r + '. As quatro isometrias são translação, reflexão, rotação e reflexão deslizante.',
      tema: 'T3 · Simetrias'
    };
  }

  // ── TEMA 4 · Vetor simétrico ──
  if (tema === '4') {
    var vx4 = rndNZ_f7q1(-lim, lim), vy4 = rndNZ_f7q1(-lim, lim);
    var resp4 = '(' + (-vx4) + ', ' + (-vy4) + ')';
    if (tipo === 'mc') {
      var opts4 = shuffle_f7q1([resp4, '(' + vx4 + ', ' + vy4 + ')', '(' + (-vx4) + ', ' + vy4 + ')', '(' + vy4 + ', ' + vx4 + ')'].filter(function (v, i, a) { return a.indexOf(v) === i; })).slice(0, 4);
      if (opts4.indexOf(resp4) === -1) opts4[0] = resp4;
      return {
        enun: 'Qual é o vetor simétrico de v(' + vx4 + ', ' + vy4 + ')?',
        tipo: 'mc', opcoes: opts4, resposta: resp4,
        expl: 'O simétrico de um vetor tem as componentes com sinal trocado: −v = ' + resp4 + '.',
        tema: 'T4 · Vetor Simétrico'
      };
    }
    return {
      enun: 'Componentes do simétrico de v(' + vx4 + ', ' + vy4 + ')? (forma (x, y))',
      tipo: 'fill_frac', resposta: resp4,
      expl: 'Troca o sinal das componentes: ' + resp4 + '.', tema: 'T4 · Vetor Simétrico'
    };
  }

  // fallback
  return { enun: 'Simétrico de v(2, −3)?', tipo: 'mc', opcoes: ['(−2, 3)', '(2, 3)', '(−2, −3)', '(3, 2)'], resposta: '(−2, 3)', expl: 'Troca os sinais.', tema: 'Vetores' };
}

/* atribuir: deep-link fq9 */
function _fq9DeepLinkAuto(){ try{ var p=new URLSearchParams(window.location.search); if(p.get('abrir')==='fichas'){ var cs=(p.get('caps')||'').split(',').filter(Boolean); if(_fq9gf){ _fq9gf.caps={}; cs.forEach(function(n){ _fq9gf.caps[parseInt(n,10)]=true; }); if(p.get('dif')) _fq9gf.dif=p.get('dif'); } if(p.get('tarefa'))setTimeout(function(){tarefaEntregaBar(p.get('tarefa'),'Ficha concluída');},400); setTimeout(function(){ fq9SwitchTab('fichas',null); },350); return; }
    if(p.get('abrir')==='jogos'){ var jc=parseInt(p.get('cap'),10); if(jc&&_fq9Prat) _fq9Prat.cap=jc; if(p.get('tarefa'))setTimeout(function(){tarefaEntregaBar(p.get('tarefa'),'Jogo concluído');},400); setTimeout(function(){ fq9SwitchTab('jogos',null); var jg=p.get('jogo'); if(jg&&typeof gTabSwitch==='function')setTimeout(function(){try{gTabSwitch('fq9-jogos-app',jg);}catch(e){}},250); },350); return; }
    if(p.get('abrir')!=='praticar')return; if(p.get('tarefa')){_fq9TarefaAtiva=p.get('tarefa');_fq9TarefaResp={};} var cap=parseInt(p.get('cap'),10)||1, st=parseInt(p.get('st'),10)||0, nivel=p.get('nivel')||'medio'; _fq9Prat.cap=cap; _fq9Prat.st=st; _fq9Prat.nivel=nivel; _fq9Prat.sel={caps:[cap],stsByCap:(st?(function(){var o={};o[cap]=[st];return o;})():{})}; setTimeout(function(){ fq9SwitchTab('exercicios',null); if(typeof fq9GerarExercicios==='function') fq9GerarExercicios(); },350); }catch(e){} }
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',function(){setTimeout(_fq9DeepLinkAuto,300);});else setTimeout(_fq9DeepLinkAuto,300);

function fq9AtribuirFicha(){
  var caps=[]; _fq9CapMeta.forEach(function(m){ if(_fq9gf.caps[m.n]) caps.push(m.n); });
  if(!caps.length){ var st=document.getElementById('fq9-fichas-status'); if(st) st.textContent='Escolhe pelo menos um capítulo para atribuir.'; return null; }
  var nomes=caps.map(function(n){ var mm=_fq9CapMeta[n-1]||{}; return mm.label||('Cap. '+n); });
  return { curso:'fq9', cursoNome:'Físico-Química 9.º', tema:caps.join('.'), temaNome:nomes.join(', '), sub:'', subNome:'', tipo:'ficha', nivel:_fq9gf.dif };
}

function fq9EntregarTarefa(){
  if(!_fq9TarefaAtiva||typeof Turmas==='undefined'||!Turmas.guardarResultado)return;
  var qids=Object.keys(_fq9TarefaResp||{});
  if(!qids.length){alert('Responde a pelo menos uma pergunta antes de entregar.');return;}
  var certas=0,detalhe=[];
  qids.forEach(function(qid,i){ var ok=!!_fq9TarefaResp[qid]; if(ok)certas++; var ex=_fq9Prat.exs[i]||{}; detalhe.push({q:(ex.enun||ex.pergunta||('Pergunta '+(i+1))),certo:ok}); });
  Turmas.guardarResultado(_fq9TarefaAtiva,certas,qids.length,detalhe).then(function(){
    if(typeof eduToast==='function')eduToast('Trabalho entregue! Acertaste '+certas+' de '+qids.length+'. \u2705','success'); else alert('Entregue! '+certas+'/'+qids.length);
    _fq9TarefaAtiva=null; _fq9TarefaResp={}; fq9GerarExercicios();
  }).catch(function(e){alert(e.message||'Não foi possível entregar.');});
}
