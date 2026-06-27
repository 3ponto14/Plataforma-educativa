/* ════════════════════════════════════════════════════════════════
   MAT5 HUB - Matemática 5.º ano (7 capítulos)
   Modelo de HUB ÚNICO (ver MODELO BASE no CLAUDE.md). NUNCA páginas
   por capítulo. Tabs: Teoria · Praticar · Fichas · Progresso.
   ════════════════════════════════════════════════════════════════ */

// ═══ Capítulos do 1.º ano · Matemática (Aprendizagens Essenciais) ═══
var _mat1CapMeta = [
  {n:1, icon:'<i class="ph ph-list-numbers"></i>',  label:'Números até 100'},
  {n:2, icon:'<i class="ph ph-plus"></i>',          label:'Adição'},
  {n:3, icon:'<i class="ph ph-minus"></i>',         label:'Subtração'},
  {n:4, icon:'<i class="ph ph-shapes"></i>',        label:'Formas e Sólidos'},
  {n:5, icon:'<i class="ph ph-ruler"></i>',         label:'Medida (tempo e dinheiro)'},
  {n:6, icon:'<i class="ph ph-chart-bar"></i>',     label:'Dados'}
];

// Cores por capítulo (alinhadas com --m1cN-* do CSS)
var _mat1CapColors = {
  1:'#4a9e6e', 2:'#6a9e4a', 3:'#4a8e9e', 4:'#8a9e4a', 5:'#4a9e88', 6:'#7a9e4a'
};

// Subtemas por capítulo (1.º ano)
var _mat1Subtemas = {
  1: ['Contar até 100', 'Comparar números', 'Dezenas e unidades'],
  2: ['Somar até 10', 'Somar até 20', 'Somar dezenas'],
  3: ['Tirar até 10', 'Tirar até 20', 'Problemas'],
  4: ['Figuras planas', 'Sólidos', 'Posição e linhas'],
  5: ['As horas', 'O dinheiro (euros)', 'Comprimentos'],
  6: ['Ler tabelas', 'Pictogramas']
};

// ═══ FLASHCARDS / TEORIA por capítulo ═══
// Cap 1 (Números) - conteúdo real, fiel ao Prisma 8.
// Caps 2-8 - placeholders honestos até serem construídos.
// ═══ FLASHCARDS / TEORIA por capítulo (5.º ano) ═══
// ═══ FLASHCARDS / TEORIA por capítulo (5.º ano) ═══
var _mat1Cards = {
  // ── Cap 1 · Números até 100 ──
  1: [
    { st: 1, tag: 'Aprender', q: 'Como contamos de 1 em 1?', a: '1, 2, 3, 4, 5, 6, 7, 8, 9, 10… Cada número vem logo a seguir ao anterior.' },
    { st: 1, tag: 'Aprender', q: 'O que vem depois do 9?', a: 'Vem o 10! Depois 11, 12, 13… até chegar ao 100.' },
    { st: 1, tag: 'Aprender', q: 'Contar de 10 em 10 até 100', a: '10, 20, 30, 40, 50, 60, 70, 80, 90, 100.' },
    { st: 1, tag: 'Aprender', q: 'O que é contar de 2 em 2?', a: 'Saltamos um número: 2, 4, 6, 8, 10… (são os números pares).' },
    { st: 3, tag: 'Aprender', q: 'O que são as dezenas e as unidades?', a: 'No número 34, o 3 são as dezenas (3 grupos de 10) e o 4 são as unidades (4 soltas). 34 = 30 + 4.' },
    { st: 3, tag: 'Exemplo', q: 'Quantas dezenas e unidades tem o 25?', a: '2 dezenas e 5 unidades. 25 = 20 + 5.' },
    { st: 2, tag: 'Regra', q: 'Que sinal usamos para "maior que"?', a: 'O sinal > . Ex.: 8 > 5 (oito é maior que cinco). O "bico" aponta para o número pequeno.' },
    { st: 2, tag: 'Regra', q: 'Que sinal usamos para "menor que"?', a: 'O sinal < . Ex.: 3 < 7 (três é menor que sete).' },
    { st: 2, tag: 'Exemplo', q: 'Qual é maior: 16 ou 19?', a: '19 é maior. Têm a mesma dezena (1), mas 9 unidades é mais que 6: 19 > 16.' },
    { st: 1, tag: 'Aprender', q: 'O que é o número que vem ANTES?', a: 'É o anterior. Antes do 7 vem o 6. Antes do 20 vem o 19.' },
    { st: 1, tag: 'Aprender', q: 'O que é o número que vem DEPOIS?', a: 'É o seguinte. Depois do 7 vem o 8. Depois do 29 vem o 30.' },
    { st: 1, tag: 'Aprender', q: 'O que são números pares?', a: 'São os que acabam em 0, 2, 4, 6 ou 8. Podem fazer-se pares iguais (2, 4, 6…).' },
    { st: 1, tag: 'Aprender', q: 'O que são números ímpares?', a: 'São os que acabam em 1, 3, 5, 7 ou 9. Sobra sempre um (1, 3, 5…).' },
    { st: 3, tag: 'Exemplo', q: 'O número 40 tem quantas dezenas?', a: '4 dezenas e 0 unidades. 40 = 4 grupos de 10.' },
    { st: 2, tag: 'Exemplo', q: 'Ordena do menor para o maior: 12, 5, 20', a: '5, 12, 20.' },
    { st: 1, tag: 'Aprender', q: 'Qual é o maior número de dois algarismos?', a: 'É o 99. A seguir vem o 100, que já tem três algarismos.' }
  ],
  // ── Cap 2 · Adição ──
  2: [
    { st: 1, tag: 'Aprender', q: 'O que é a adição?', a: 'É juntar. Se tens 3 maçãs e juntas 2, ficas com 5. Escreve-se 3 + 2 = 5.' },
    { st: 1, tag: 'Aprender', q: 'O que é o sinal +?', a: 'É o sinal de "mais". Quer dizer juntar/somar.' },
    { st: 1, tag: 'Aprender', q: 'O que é o sinal =?', a: 'É o sinal de "igual". Mostra o resultado. 4 + 1 = 5.' },
    { st: 1, tag: 'Regra', q: 'Quanto é qualquer número + 0?', a: 'É o próprio número! 7 + 0 = 7 (juntar nada não muda nada).' },
    { st: 1, tag: 'Estratégia', q: 'Truque: somar contando para a frente', a: 'Para 6 + 3, começa no 6 e conta mais 3: 7, 8, 9. Dá 9!' },
    { st: 2, tag: 'Regra', q: 'A ordem importa na soma?', a: 'Não! 2 + 5 é igual a 5 + 2 (dá 7 nos dois). Podes começar pelo maior.' },
    { st: 2, tag: 'Exemplo', q: 'Quanto é 8 + 5?', a: '13. Truque: 8 + 2 = 10, e ainda faltam 3 → 13.' },
    { st: 1, tag: 'Aprender', q: 'O que são os pares que dão 10?', a: '1+9, 2+8, 3+7, 4+6, 5+5. São muito úteis para somar depressa!' },
    { st: 3, tag: 'Estratégia', q: 'Como somar dezenas?', a: '20 + 30 = 50. Soma só as dezenas: 2 + 3 = 5, e juntas o zero → 50.' },
    { st: 2, tag: 'Exemplo', q: 'Quanto é 7 + 6?', a: '13. (7 + 3 = 10, faltam mais 3 → 13.)' },
    { st: 1, tag: 'Exemplo', q: 'Quanto é 4 + 4?', a: '8. É o dobro de 4.' },
    { st: 3, tag: 'Exemplo', q: 'Quanto é 40 + 5?', a: '45. 4 dezenas e 5 unidades.' },
    { st: 1, tag: 'Estratégia', q: 'O que é o dobro?', a: 'É somar um número a si mesmo. O dobro de 3 é 3 + 3 = 6.' },
    { st: 2, tag: 'Exemplo', q: 'Tinha 5 berlindes e ganhei 4. Com quantos fico?', a: '5 + 4 = 9 berlindes.' },
    { st: 3, tag: 'Exemplo', q: 'Quanto é 30 + 20 + 10?', a: '60. Soma as dezenas: 3 + 2 + 1 = 6 → 60.' },
    { st: 1, tag: 'Aprender', q: 'O que quer dizer "ao todo" num problema?', a: 'Quer dizer juntar tudo → usamos a adição (+).' }
  ],
  // ── Cap 3 · Subtração ──
  3: [
    { st: 1, tag: 'Aprender', q: 'O que é a subtração?', a: 'É tirar. Se tens 5 rebuçados e comes 2, ficam 3. Escreve-se 5 − 2 = 3.' },
    { st: 1, tag: 'Aprender', q: 'O que é o sinal −?', a: 'É o sinal de "menos". Quer dizer tirar/retirar.' },
    { st: 1, tag: 'Regra', q: 'Quanto é um número − 0?', a: 'É o próprio número. 8 − 0 = 8 (não tiraste nada).' },
    { st: 1, tag: 'Regra', q: 'Quanto é um número menos ele próprio?', a: 'É 0. 6 − 6 = 0 (tiraste tudo, não sobra nada).' },
    { st: 1, tag: 'Estratégia', q: 'Truque: subtrair contando para trás', a: 'Para 9 − 3, começa no 9 e conta para trás 3: 8, 7, 6. Dá 6!' },
    { st: 2, tag: 'Aprender', q: 'A subtração é o contrário da adição', a: 'Se 3 + 4 = 7, então 7 − 4 = 3 e 7 − 3 = 4. São "família".' },
    { st: 2, tag: 'Exemplo', q: 'Quanto é 12 − 5?', a: '7. (12 − 2 = 10, e ainda tiras 3 → 7.)' },
    { st: 2, tag: 'Exemplo', q: 'Quanto é 10 − 6?', a: '4. (Pensa: 6 + quanto dá 10? Dá 4.)' },
    { st: 1, tag: 'Exemplo', q: 'Quanto é 8 − 8?', a: '0. Tiraste tudo.' },
    { st: 3, tag: 'Aprender', q: 'O que quer dizer "quantos sobram"?', a: 'Quer dizer tirar → usamos a subtração (−).' },
    { st: 3, tag: 'Exemplo', q: 'Tinha 10 cromos e dei 4. Com quantos fico?', a: '10 − 4 = 6 cromos.' },
    { st: 2, tag: 'Exemplo', q: 'Quanto é 15 − 5?', a: '10.' },
    { st: 3, tag: 'Aprender', q: 'O que é "quantos a mais"?', a: 'É comparar: ver a diferença. Se tenho 8 e tu 5, tenho 8 − 5 = 3 a mais.' },
    { st: 3, tag: 'Exemplo', q: 'A Maria tem 7 e o João 4. Quantos a mais tem a Maria?', a: '7 − 4 = 3 a mais.' },
    { st: 2, tag: 'Exemplo', q: 'Quanto é 20 − 10?', a: '10.' },
    { st: 1, tag: 'Estratégia', q: 'A ordem importa na subtração?', a: 'Sim! 7 − 3 NÃO é igual a 3 − 7. Começa-se sempre pelo número maior.' }
  ],
  // ── Cap 4 · Formas e Sólidos ──
  4: [
    { st: 1, tag: 'Aprender', q: 'O que é um círculo?', a: 'É uma forma redonda, sem bicos nem lados direitos. Como uma roda ou uma moeda.' },
    { st: 1, tag: 'Aprender', q: 'O que é um quadrado?', a: 'Tem 4 lados todos iguais e 4 bicos (cantos). Como um dado visto de frente.' },
    { st: 1, tag: 'Aprender', q: 'O que é um triângulo?', a: 'Tem 3 lados e 3 bicos. Como um chapéu de festa.' },
    { st: 1, tag: 'Aprender', q: 'O que é um retângulo?', a: 'Tem 4 lados e 4 bicos, mas dois lados são mais compridos. Como uma porta.' },
    { st: 1, tag: 'Exemplo', q: 'Quantos lados tem um triângulo?', a: '3 lados.' },
    { st: 1, tag: 'Exemplo', q: 'Quantos cantos (bicos) tem um quadrado?', a: '4 cantos.' },
    { st: 2, tag: 'Aprender', q: 'O que é uma esfera?', a: 'É um sólido todo redondo, como uma bola.' },
    { st: 2, tag: 'Aprender', q: 'O que é um cubo?', a: 'É um sólido com 6 faces quadradas, como um dado.' },
    { st: 2, tag: 'Aprender', q: 'O que é um cilindro?', a: 'É como uma lata ou um rolo: tem dois círculos nas pontas e rola.' },
    { st: 2, tag: 'Exemplo', q: 'Que sólido é uma bola de futebol?', a: 'Uma esfera.' },
    { st: 2, tag: 'Exemplo', q: 'Que sólido é um dado?', a: 'Um cubo.' },
    { st: 3, tag: 'Aprender', q: 'O que quer dizer "em cima" e "em baixo"?', a: 'São posições. O sol está em cima (no céu) e a relva em baixo (no chão).' },
    { st: 3, tag: 'Aprender', q: 'O que é uma linha reta e uma linha curva?', a: 'A reta vai direita, como uma régua. A curva dobra, como um caracol.' },
    { st: 3, tag: 'Aprender', q: 'O que quer dizer "dentro" e "fora"?', a: 'Dentro é no interior (o gato dentro da caixa); fora é no exterior.' },
    { st: 1, tag: 'Exemplo', q: 'Quantos lados tem um retângulo?', a: '4 lados (dois compridos e dois curtos).' },
    { st: 2, tag: 'Exemplo', q: 'Que forma tem a face de um cubo?', a: 'Quadrado.' }
  ],
  // ── Cap 5 · Medida (tempo e dinheiro) ──
  5: [
    { st: 1, tag: 'Aprender', q: 'Quantas horas tem um dia?', a: '24 horas. O relógio dá duas voltas completas.' },
    { st: 1, tag: 'Aprender', q: 'Quais são as partes do dia?', a: 'Manhã, tarde e noite.' },
    { st: 1, tag: 'Aprender', q: 'Quantos dias tem uma semana?', a: '7 dias: segunda, terça, quarta, quinta, sexta, sábado e domingo.' },
    { st: 1, tag: 'Aprender', q: 'O que marca o ponteiro pequeno do relógio?', a: 'Marca as horas. O ponteiro grande marca os minutos.' },
    { st: 1, tag: 'Exemplo', q: 'Ponteiro pequeno no 3 e grande no 12: que horas são?', a: 'São 3 horas (3 horas certas).' },
    { st: 2, tag: 'Aprender', q: 'Que dinheiro usamos em Portugal?', a: 'O euro (€). Há moedas e notas.' },
    { st: 2, tag: 'Aprender', q: 'Quais são algumas moedas de euro?', a: '1 cêntimo, 2, 5, 10, 20, 50 cêntimos, 1 euro e 2 euros.' },
    { st: 2, tag: 'Exemplo', q: 'Quanto valem 2 moedas de 1 euro?', a: '2 euros.' },
    { st: 2, tag: 'Exemplo', q: 'Tenho uma moeda de 2€ e uma de 1€. Quanto tenho?', a: '3 euros.' },
    { st: 3, tag: 'Aprender', q: 'O que medimos com a régua?', a: 'O comprimento — quão comprido ou curto é um objeto.' },
    { st: 3, tag: 'Aprender', q: 'O que quer dizer "mais comprido"?', a: 'Que tem maior comprimento. Um lápis novo é mais comprido que um já gasto.' },
    { st: 3, tag: 'Aprender', q: 'O que quer dizer "mais pesado"?', a: 'Que tem mais peso. Uma melancia é mais pesada que uma maçã.' },
    { st: 1, tag: 'Aprender', q: 'Quantos meses tem um ano?', a: '12 meses, de janeiro a dezembro.' },
    { st: 2, tag: 'Exemplo', q: 'Quanto valem 5 moedas de 10 cêntimos?', a: '50 cêntimos.' },
    { st: 3, tag: 'Aprender', q: 'O que é "ontem", "hoje" e "amanhã"?', a: 'Ontem é o dia que passou, hoje é o dia de agora, amanhã é o dia que vem a seguir.' },
    { st: 1, tag: 'Exemplo', q: 'Que dia vem depois de sábado?', a: 'Domingo.' }
  ],
  // ── Cap 6 · Dados ──
  6: [
    { st: 1, tag: 'Aprender', q: 'O que é uma tabela?', a: 'É uma forma de organizar informação em linhas e colunas, para ser fácil de ler.' },
    { st: 1, tag: 'Aprender', q: 'O que é contar dados?', a: 'É ver quantos há de cada coisa. Ex.: contar quantos colegas gostam de cada fruta.' },
    { st: 1, tag: 'Estratégia', q: 'Como contamos com "tracinhos"?', a: 'Fazemos um risco por cada um. Ao chegar a 5, o quinto risca os outros 4 (faz um grupo de 5).' },
    { st: 2, tag: 'Aprender', q: 'O que é um pictograma?', a: 'É um gráfico com desenhos. Cada desenho representa uma quantidade (ex.: 1 boneco = 1 criança).' },
    { st: 1, tag: 'Exemplo', q: 'Se 3 colegas gostam de maçã e 5 de banana, qual ganha?', a: 'A banana (5 é mais que 3).' },
    { st: 2, tag: 'Aprender', q: 'O que é o "total"?', a: 'É o número de todos juntos. Se há 3 cães e 2 gatos, o total de animais é 5.' },
    { st: 1, tag: 'Aprender', q: 'Para que serve organizar dados?', a: 'Para responder a perguntas: qual é o mais escolhido? Quantos ao todo? Qual tem menos?' },
    { st: 2, tag: 'Exemplo', q: 'Num pictograma, 4 bonecos de gelado quer dizer o quê?', a: 'Que 4 crianças escolheram gelado.' },
    { st: 1, tag: 'Exemplo', q: 'Numa tabela, onde leio quantos gostam de azul?', a: 'Na linha do "azul", olhas para o total.' },
    { st: 2, tag: 'Aprender', q: 'O que é o "mais escolhido"?', a: 'É a opção com maior número — a que tem a barra ou a coluna maior.' },
    { st: 1, tag: 'Aprender', q: 'O que é o "menos escolhido"?', a: 'É a opção com menor número.' },
    { st: 2, tag: 'Exemplo', q: 'Cães: 6, Gatos: 2. Quantos a mais tem cães?', a: '6 − 2 = 4 a mais.' },
    { st: 1, tag: 'Exemplo', q: 'Maçã: 2, Pera: 2, Uva: 5. Qual o total?', a: '2 + 2 + 5 = 9.' },
    { st: 2, tag: 'Aprender', q: 'Como sei qual tem o mesmo número?', a: 'Quando duas opções têm a mesma quantidade (ex.: maçã 2 e pera 2 estão empatadas).' },
    { st: 1, tag: 'Exemplo', q: 'Se 5 gostam de sol e 1 de chuva, quantos a mais gostam de sol?', a: '5 − 1 = 4 a mais.' },
    { st: 2, tag: 'Aprender', q: 'O que perguntamos a uma tabela de dados?', a: 'Qual é o maior? Qual é o menor? Quantos ao todo? Quantos a mais?' }
  ]
};

// Seleção atual por tab
var _mat1Sel = { resumo: 1, 'resumo-st': 0 };

// ═══ NAVEGAÇÃO DE TABS ═══
function mat1SwitchTab(tab, btn) {
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
  var panel = document.getElementById('mat1p-' + tab);
  if (panel) { panel.classList.add('active'); panel.style.setProperty('display','block','important'); }

  var titles = { resumo:'Teoria', praticar:'Praticar', fichas:'Fichas', progresso:'Progresso',
                 exercicios:'Exercícios', quiz:'Quiz', flashcards:'Flashcards', teste:'Teste', jogos:'Jogos' };
  if (titles[tab]) document.title = 'Mat. 5.º ' + titles[tab] + ' · 3ponto14';

  if (tab === 'resumo') mat1BuildResumoNav();
  else if (tab === 'exercicios') mat1BuildPraticarNav();
  else if (tab === 'quiz') mat1QuizBuildNav();
  else if (tab === 'flashcards') mat1FcBuildNav();
  else if (tab === 'teste') mat1TesteBuildNav();
  else if (tab === 'jogos') mat1JogosInit();
  else if (tab === 'fichas') mat1FichasBuildNav();
  else if (tab === 'progresso') mat1RenderProgresso();
}

// Abre um sub-modo de prática a partir dos cartões do menu Praticar.
function mat1OpenPraticar(modo) { mat1SwitchTab(modo, null); }

// ═══ TAB TEORIA ═══
function mat1BuildResumoNav() {
  var capRow = document.getElementById('mat1-resumo-cap-row');
  if (!capRow) return;
  var activeCap = _mat1Sel['resumo'] || 1;
  var h = '';
  _mat1CapMeta.forEach(function(m) {
    var color = _mat1CapColors[m.n] || '#516860';
    var isActive = activeCap === m.n;
    var activeStyle = isActive ? 'background:' + color + ';border-color:' + color + ';color:#fff' : '';
    var hoverCode = isActive ? '' : ' onmouseover="this.style.borderColor=\'' + color + '\';this.style.color=\'' + color + '\'" onmouseout="this.style.borderColor=\'\';this.style.color=\'\'"';
    h += '<button class="resumo-cap-btn' + (isActive ? ' active' : '') + '" data-cap="' + m.n + '" onclick="mat1ResumoSelectCap(' + m.n + ',this)" style="' + activeStyle + '"' + hoverCode + '>'
       + '<span class="resumo-cap-icon">' + m.icon + '</span>' + m.label + '</button>';
  });
  capRow.innerHTML = h;
  mat1ResumoShowSts(activeCap);
  mat1RenderResumoInline();
}

function mat1ResumoSelectCap(cap, btn) {
  _mat1Sel['resumo'] = cap;
  _mat1Sel['resumo-st'] = 0;
  var capRow = document.getElementById('mat1-resumo-cap-row');
  if (capRow) {
    capRow.querySelectorAll('.resumo-cap-btn').forEach(function(b) {
      b.classList.remove('active'); b.style.background = ''; b.style.borderColor = ''; b.style.color = '';
    });
  }
  if (btn) {
    var color = _mat1CapColors[cap] || '#516860';
    btn.classList.add('active');
    btn.style.background = color; btn.style.borderColor = color; btn.style.color = '#fff';
  }
  mat1ResumoShowSts(cap);
  mat1RenderResumoInline();
}

function mat1ResumoShowSts(cap) {
  var stRow = document.getElementById('mat1-resumo-st-row');
  if (!stRow) return;
  var sts = _mat1Subtemas[cap] || [];
  if (!sts.length) { stRow.style.display = 'none'; return; }
  var _stSel = _mat1Sel['resumo-st'] || 0;
  var h = '<div class="resumo-st-label">Subtema</div>';
  h += '<button class="resumo-st-btn' + (_stSel === 0 ? ' active' : '') + '" data-st="0" onclick="mat1ResumoSelectSt(this,' + cap + ',0)">Todos</button>';
  sts.forEach(function(st, i) {
    var isActive = _stSel === (i + 1);
    h += '<button class="resumo-st-btn' + (isActive ? ' active' : '') + '" data-st="' + (i + 1) + '" onclick="mat1ResumoSelectSt(this,' + cap + ',' + (i + 1) + ')">' + st + '</button>';
  });
  stRow.innerHTML = h;
  stRow.style.display = 'flex';
}

function mat1ResumoSelectSt(btn, cap, stIdx) {
  var stRow = document.getElementById('mat1-resumo-st-row');
  if (stRow) stRow.querySelectorAll('.resumo-st-btn').forEach(function(b) { b.classList.remove('active'); });
  if (btn) btn.classList.add('active');
  _mat1Sel['resumo'] = cap;
  _mat1Sel['resumo-st'] = stIdx;
  mat1RenderResumoInline();
}

function mat1RenderResumoInline() {
  var cap = _mat1Sel['resumo'] || 1;
  var dest = document.getElementById('mat1-resumo-content');
  if (!dest) return;

  var color = (function(){
    var c = _mat1CapColors[cap] || '#516860';
    return c;
  })();

  var tagIcons = {
    'Definição':'ph-book-bookmark', 'Fórmula':'ph-function', 'Regra':'ph-check-square',
    'Propriedade':'ph-star', 'Exemplo':'ph-pencil-line', 'Estratégia':'ph-lightbulb',
    'Síntese':'ph-seal-check', 'Notação':'ph-at', 'Hierarquia':'ph-tree-structure',
    'Teorema':'ph-intersect', 'Conceito':'ph-cube'
  };

  var allCards = _mat1Cards[cap] || [];

  // Filtrar por subtema, se selecionado
  var stIdx = _mat1Sel['resumo-st'] || 0;
  // Filtro por subtema usa o campo st de cada flashcard (fiável); 0 = Todos.
  var cards = (stIdx > 0) ? allCards.filter(function(card){ return card.st === stIdx; }) : allCards;

  if (!cards.length) {
    dest.innerHTML = '<div class="resumo-empty">'
      + '<i class="ph ph-book-open-text resumo-empty-icon"></i>'
      + '<div class="resumo-empty-title">Conteúdo em preparação</div>'
      + '<div class="resumo-empty-sub">A teoria deste capítulo está a ser elaborada.</div></div>';
    return;
  }

  _mat1PM(cap, 'teoria'); // estudou a teoria deste capítulo

  // Acordeão partilhado: grupos colapsáveis + perguntas que abrem a resposta.
  dest.innerHTML = _teoriaAccordionHTML(cards, color, tagIcons);
}

/* ════════════════════════════════════════════════════════════════
   TAB PRATICAR - exercícios gerados com correção imediata
   Renderiza tudo no painel (sem páginas externas). Reutiliza os
   motores genéricos do chapter-engine: _capBuildQuizHTML,
   _capCheckAnswer, _capShowFeedback.
   ════════════════════════════════════════════════════════════════ */

// Gerador por capítulo (resolução lazy - os buildEx_m1cN são definidos no fim do ficheiro).
// Só os caps com gerador são "praticáveis".
function _mat1Gerador(cap) {
  if (cap === 1 && typeof buildEx_m1c1 === 'function') return buildEx_m1c1;
  if (cap === 2 && typeof buildEx_m1c2 === 'function') return buildEx_m1c2;
  if (cap === 3 && typeof buildEx_m1c3 === 'function') return buildEx_m1c3;
  if (cap === 4 && typeof buildEx_m1c4 === 'function') return buildEx_m1c4;
  if (cap === 5 && typeof buildEx_m1c5 === 'function') return buildEx_m1c5;
  if (cap === 6 && typeof buildEx_m1c6 === 'function') return buildEx_m1c6;
  return null;
}
var _mat1TemasCount = { 1: 3, 2: 3, 3: 3, 4: 3, 5: 2, 6: 2 };

// Estado da prática
var _mat1Prat = { cap: 1, st: 0, nivel: 'medio', score: { correct: 0, total: 0 }, answered: {}, exs: [] };
var _mat1TarefaAtiva=null, _mat1TarefaResp={};

function _mat1PratStorageKey(cap) { return 'edupt_mat1_cap' + cap; }

function _mat1SelCfg() {
  return { capMeta: _mat1CapMeta, capColors: _mat1CapColors, subtemas: _mat1Subtemas,
    subtemaTemas: _mat1SubtemaTemas, temasCount: _mat1TemasCount, gerador: _mat1Gerador };
}
function _mat1PratSel() {
  if (!_mat1Prat.sel) {
    _mat1Prat.sel = _selNew();
    if (_mat1Prat.cap) { _mat1Prat.sel.caps = [_mat1Prat.cap]; if (_mat1Prat.st) _mat1Prat.sel.stsByCap[_mat1Prat.cap] = [_mat1Prat.st]; }
  }
  return _mat1Prat.sel;
}

function mat1BuildPraticarNav() {
  var capRow = document.getElementById('mat1-praticar-cap-row');
  if (!capRow) return;
  var stRow = document.getElementById('mat1-praticar-st-row');
  if (stRow) stRow.style.display = 'none';
  capRow.innerHTML = _selBarsHTML(_mat1PratSel(), _mat1SelCfg(), 'mat1PratToggleCap', 'mat1PratToggleSt');
}

function mat1PratToggleCap(cap) {
  _selToggleCap(_mat1PratSel(), _mat1SelCfg(), cap);
  mat1BuildPraticarNav();
  mat1GerarExercicios();
}
function mat1PratToggleSt(cap, st) {
  _selToggleSt(_mat1PratSel(), cap, st);
  mat1BuildPraticarNav();
  mat1GerarExercicios();
}

function mat1PraticarSetNivel(nivel, btn) {
  _mat1Prat.nivel = nivel;
  var grp = document.getElementById('mat1-praticar-nivel');
  if (grp) grp.querySelectorAll('.gen-level-btn').forEach(function(b) { b.classList.remove('active'); });
  if (btn) btn.classList.add('active');
  mat1GerarExercicios();
}

// Mapa subtema → temas a usar no gerador (Cap 1 Números)
var _mat1SubtemaTemas = {
  1: { 1: ['1'], 2: ['2'], 3: ['3'] },  // Contar · Comparar · Dezenas/unidades
  2: { 1: ['1'], 2: ['2'], 3: ['3'] },  // Somar até 10 · até 20 · dezenas
  3: { 1: ['1'], 2: ['2'], 3: ['3'] },  // Tirar até 10 · até 20 · problemas
  4: { 1: ['1'], 2: ['2'], 3: ['3'] },  // Figuras planas · Sólidos · Posição
  5: { 1: ['1'], 2: ['2'] },            // Tempo · Dinheiro
  6: { 1: ['1'], 2: ['2'] }             // Ler tabelas · Comparar
};

function mat1GerarExercicios() {
  var dest = document.getElementById('mat1-praticar-content');
  if (!dest) return;
  var pares = _selPares(_mat1PratSel(), _mat1SelCfg());
  if (!pares.length) { dest.innerHTML = ''; return; }
  pares = pares.slice();
  for (var pz = pares.length - 1; pz > 0; pz--) { var rz = Math.floor(Math.random() * (pz + 1)); var tz = pares[pz]; pares[pz] = pares[rz]; pares[rz] = tz; }
  var cap = _mat1PratSel().caps[0] || (pares[0] && pares[0].cap) || 1;

  var QTD = 8;
  var tipos = ['mc', 'fill', 'mc', 'vf', 'fill', 'mc', 'fill', 'mc'];
  var geradas = [];
  for (var i = 0; i < QTD; i++) {
    var par = pares[i % pares.length];
    var gen = _mat1Gerador(par.cap);
    if (!gen) continue;
    var ex = gen(par.tema, tipos[i % tipos.length], _mat1Prat.nivel);
    if (ex) geradas.push(ex);
  }
  var temasPorCap = {};
  pares.forEach(function (pr) { (temasPorCap[pr.cap] = temasPorCap[pr.cap] || []).push(pr.tema); });
  var banco = [];
  if (typeof _mat1Banco !== "undefined") {
    Object.keys(temasPorCap).forEach(function (c) {
      if (_mat1Banco[c]) banco = banco.concat(_mat1Banco[c].filter(function (q) { return temasPorCap[c].indexOf(String(q.t)) !== -1; }));
    });
  }
  var exs = (typeof _mixBancoGeradas === "function") ? _mixBancoGeradas(banco, geradas, QTD, 2, _mat1Prat.nivel)
    : geradas.map(function (e, idx) { return Object.assign({}, e, { num: idx + 1 }); });
  _mat1Prat.exs = exs;
  _mat1Prat.answered = {};
  _mat1Prat.score = { correct: 0, total: 0 };

  // Score bar + questões (reutiliza motor genérico do chapter-engine)
  var scoreBar = '<div class="score-bar" id="mat1-prat-scorebar">'
    + '<div><div class="score-num" id="mat1-prat-score">0</div><div class="score-label">pontos</div></div>'
    + '<div><div class="score-num" id="mat1-prat-total">/ 0</div><div class="score-label">respondidas</div></div>'
    + '<div class="progress-track"><div class="progress-fill" id="mat1-prat-prog" style="width:0%"></div></div>'
    + '<button class="btn btn-ghost ml-auto" onclick="mat1GerarExercicios()">↺ Novas questões</button>'
    + (_mat1TarefaAtiva ? '<button class="btn" style="background:#2e7d52;color:#fff;border:none;border-radius:999px;padding:6px 14px;font-weight:800;cursor:pointer;margin-left:.4rem" onclick="mat1EntregarTarefa()">\u2713 Terminar e entregar</button>' : '')
    + '</div>';
  var quizHTML = (typeof _capBuildQuizHTML === 'function')
    ? _capBuildQuizHTML(exs, 'm8ex', 'mat1CheckEx')
    : '<p style="color:var(--ink4)">Motor de exercícios indisponível.</p>';
  dest.innerHTML = scoreBar + '<div id="mat1-atribuir" style="margin:.2rem 0 .8rem"></div>' + quizHTML;
  _mat1Prat.cap = cap;
  if (typeof Atribuir !== 'undefined' && Atribuir.montar) {
    var _cm = _mat1CapMeta.filter(function (m) { return m.n === cap; })[0] || {};
    var _selA = _mat1PratSel();
    var _stA = (_selA.caps.length === 1 && (_selA.stsByCap[cap] || []).length === 1) ? _selA.stsByCap[cap][0] : 0;
    var _sn = (_mat1Subtemas[cap] && _stA > 0) ? (_mat1Subtemas[cap][_stA - 1] || '') : '';
    Atribuir.montar('mat1-atribuir', { curso: 'mat1', cursoNome: 'Matemática 5.º', tema: String(cap), temaNome: (_cm.label || ('Cap. ' + cap)), sub: String(_stA || ''), subNome: _sn, tipo: 'quiz', nivel: _mat1Prat.nivel });
  }
}

function mat1CheckEx(qid, tipo, val, btn) {
  if (_mat1Prat.answered[qid]) return;
  if (typeof _capCheckAnswer !== 'function') return;
  var r = _capCheckAnswer(qid, tipo, val);
  if (!r) return; // resposta vazia
  _mat1Prat.answered[qid] = true;
  if (r.correct) _mat1Prat.score.correct++;
  _mat1Prat.score.total++; if(_mat1TarefaAtiva){_mat1TarefaResp[qid]=!!r.correct;}
  if (typeof _capShowFeedback === 'function') _capShowFeedback(qid, r.correct, r.expl, val, btn);
  var se = document.getElementById('mat1-prat-score'); if (se) se.textContent = _mat1Prat.score.correct;
  var te = document.getElementById('mat1-prat-total'); if (te) te.textContent = '/ ' + _mat1Prat.score.total;
  var pe = document.getElementById('mat1-prat-prog'); if (pe && _mat1Prat.exs.length) pe.style.width = (_mat1Prat.score.total / _mat1Prat.exs.length * 100) + '%';
  mat1SaveProgress(_mat1Prat.cap, r.correct);
}

// ═══ PROGRESSO (localStorage por capítulo) ═══
function mat1SaveProgress(cap, correct) {
  try {
    var key = _mat1PratStorageKey(cap);
    var d = JSON.parse(localStorage.getItem(key) || '{}');
    if (!d.sections) d.sections = {};
    if (!d.sections.praticar) d.sections.praticar = { correct: 0, total: 0 };
    d.sections.praticar.total++;
    if (correct) d.sections.praticar.correct++;
    d.lastActivity = Date.now();
    localStorage.setItem(key, JSON.stringify(d));
  } catch (e) {}
}

// Regista atividade no ProgressManager (XP + streak), com capId próprio do 5.º ano
// ('m1capN') para não misturar com o progresso do 7.º ano.
function _mat1PM(cap, tipo, opts) {
  if (typeof ProgressManager === 'undefined') return;
  try { ProgressManager.record('m1cap' + cap, tipo, opts || {}); } catch (e) {}
}

/* ════════════════════════════════════════════════════════════════
   HELPER: linha de capítulos para sub-modos (quiz, flashcards, teste)
   Só capítulos com gerador ficam ativos.
   ════════════════════════════════════════════════════════════════ */
function _mat1BuildCapRow(rowId, activeCap, onclickName) {
  var row = document.getElementById(rowId);
  if (!row) return;
  var h = '';
  _mat1CapMeta.forEach(function(m) {
    var hasGen = !!_mat1Gerador(m.n);
    var color = _mat1CapColors[m.n] || '#516860';
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

function _mat1SetActiveCapBtn(rowId, btn, cap) {
  var row = document.getElementById(rowId);
  if (row) row.querySelectorAll('.resumo-cap-btn').forEach(function(b){ b.classList.remove('active'); b.style.background=''; b.style.borderColor=''; b.style.color=''; });
  if (btn) { var color = _mat1CapColors[cap] || '#516860'; btn.classList.add('active'); btn.style.background=color; btn.style.borderColor=color; btn.style.color='#fff'; }
}

// Converte uma questão de resposta aberta em escolha múltipla. Delega no
// helper partilhado _fillParaMc (shared.js), com distratores pedagógicos.
function _mat1FillToMc(ex) {
  return (typeof _fillParaMc === 'function') ? _fillParaMc(ex) : null;
}

// Gera uma questão de escolha múltipla para um capítulo (usada por quiz).
function _mat1BuildMcQuestion(cap) {
  var gen = _mat1Gerador(cap);
  if (!gen) return null;
  var nTemas = _mat1TemasCount[cap] || 1;
  var ex = null;
  for (var i = 0; i < 10; i++) {
    var tema = String(rnd_m81(1, nTemas));
    ex = gen(tema, 'mc', 'medio');
    if (ex && ex.tipo === 'mc' && ex.opcoes && ex.opcoes.length >= 2) return ex;
  }
  // Sem MC nativo: converte uma questão de resposta aberta em MC (caps 4-7).
  for (var k = 0; k < 10; k++) {
    var tema2 = String(rnd_m81(1, nTemas));
    var fillEx = gen(tema2, 'fill', 'medio');
    var mc = _mat1FillToMc(fillEx);
    if (mc && mc.opcoes && mc.opcoes.length >= 2) return mc;
  }
  return null;
}

/* ════════════════════════════════════════════════════════════════
   SUB-MODO: QUIZ RELÂMPAGO (3 vidas, streak)
   ════════════════════════════════════════════════════════════════ */
var _mat1Quiz = { cap: 1, sel: null, lives: 3, streak: 0, maxStreak: 0, score: 0, total: 0, answered: false, current: null };

function _mat1QuizSel() { if (!_mat1Quiz.sel) _mat1Quiz.sel = _selNew(); return _mat1Quiz.sel; }

function mat1QuizBuildNav() {
  var row = document.getElementById('mat1-quiz-cap-row');
  if (row) row.innerHTML = _selBarsHTML(_mat1QuizSel(), _mat1SelCfg(), 'mat1QuizToggleCap', 'mat1QuizToggleSt');
  var st = document.getElementById('mat1-quiz-st-row'); if (st) st.style.display = 'none';
  mat1QuizStart();
}

function mat1QuizToggleCap(cap) {
  _selToggleCap(_mat1QuizSel(), _mat1SelCfg(), cap);
  mat1QuizBuildNav();
}
function mat1QuizToggleSt(cap, st) {
  _selToggleSt(_mat1QuizSel(), cap, st);
  mat1QuizBuildNav();
}

function mat1QuizStart() {
  _mat1Quiz.lives = 3; _mat1Quiz.streak = 0; _mat1Quiz.maxStreak = 0;
  _mat1Quiz.score = 0; _mat1Quiz.total = 0; _mat1Quiz.answered = false;
  mat1QuizNext();
}

function mat1QuizNext() {
  var app = document.getElementById('mat1-quiz-app');
  if (!app) return;
  if (_mat1Quiz.lives <= 0) { mat1QuizGameOver(app); return; }
  var _qpares = _selPares(_mat1QuizSel(), _mat1SelCfg());
  _mat1Quiz.cap = (_mat1QuizSel().caps[0]) || (_qpares[0] && _qpares[0].cap) || 1;
  var ex = _selMcQuestion(_mat1QuizSel(), _mat1SelCfg(), _mat1FillToMc);
  if (!ex) { app.innerHTML = '<p style="color:var(--ink4);padding:2rem;text-align:center">Sem questões disponíveis para esta seleção.</p>'; return; }
  _mat1Quiz.current = ex; _mat1Quiz.answered = false;
  var lives = '';
  for (var i = 0; i < 3; i++) lives += (i < _mat1Quiz.lives ? '❤️' : '🖤') + ' ';
  var opts = '';
  ex.opcoes.forEach(function(opt, idx) {
    opts += '<button class="qg-opt-btn" id="mat1qopt-' + idx + '" onclick="mat1QuizAnswer(' + idx + ')">' + opt + '</button>';
  });
  app.innerHTML =
    '<div class="qg-hub-bar">' +
      '<div class="qg-hub-lives">' + lives + '</div>' +
      '<div class="qg-hub-streak">' + (_mat1Quiz.streak > 1 ? '🔥 ' + _mat1Quiz.streak + ' seguidas' : '') + '</div>' +
      '<div class="qg-hub-score">✓ ' + _mat1Quiz.score + ' / ' + _mat1Quiz.total + '</div>' +
    '</div>' +
    '<div class="qg-hub-question">' + ex.enun + '</div>' +
    '<div class="qg-hub-opts">' + opts + '</div>' +
    '<div class="qg-hub-feedback" id="mat1-quiz-fb" style="min-height:2.5rem"></div>';
}

function mat1QuizAnswer(idx) {
  if (_mat1Quiz.answered) return;
  _mat1Quiz.answered = true;
  var ex = _mat1Quiz.current; if (!ex) return;
  var correct = String(ex.opcoes[idx]) === String(ex.resposta);
  _mat1Quiz.total++;
  document.querySelectorAll('.qg-opt-btn').forEach(function(b, i) {
    b.disabled = true;
    if (String(ex.opcoes[i]) === String(ex.resposta)) { b.style.background = '#4caf50'; b.style.color = '#fff'; }
  });
  var clicked = document.getElementById('mat1qopt-' + idx);
  if (clicked && !correct) { clicked.style.background = '#f44336'; clicked.style.color = '#fff'; }
  var fb = document.getElementById('mat1-quiz-fb');
  if (correct) {
    _mat1Quiz.score++; _mat1Quiz.streak++;
    if (_mat1Quiz.streak > _mat1Quiz.maxStreak) _mat1Quiz.maxStreak = _mat1Quiz.streak;
    if (fb) fb.innerHTML = '<span style="color:var(--correct,#3ecf8e);font-weight:700">✓ Certo!</span> ' + (ex.expl || '');
  } else {
    _mat1Quiz.lives--; _mat1Quiz.streak = 0;
    if (fb) fb.innerHTML = '<span style="color:var(--wrong,#ff6b6b);font-weight:700">✗ Errado.</span> ' + (ex.expl || '');
  }
  mat1SaveProgress(_mat1Quiz.cap, correct);
  setTimeout(function(){ mat1QuizNext(); }, 1400);
}

function mat1QuizGameOver(app) {
  var pct = _mat1Quiz.total > 0 ? Math.round(_mat1Quiz.score / _mat1Quiz.total * 100) : 0;
  _mat1PM(_mat1Quiz.cap, 'quiz', { pontuacao: _mat1Quiz.score, total: _mat1Quiz.total });
  var emoji = pct >= 90 ? '🏆' : pct >= 70 ? '⭐' : pct >= 50 ? '👍' : '📚';
  app.innerHTML =
    '<div style="text-align:center;padding:2.5rem 1rem">' +
      '<div style="font-size:3.5rem;margin-bottom:.75rem">' + emoji + '</div>' +
      '<div style="font-family:\'Cormorant Garamond\',serif;font-size:2rem;font-weight:900;color:var(--ink)">' + pct + '%</div>' +
      '<div style="color:var(--ink3);margin:.5rem 0 1.5rem">' + _mat1Quiz.score + ' certas em ' + _mat1Quiz.total + ' questões</div>' +
      '<div style="font-size:1.5rem;margin-bottom:1.5rem">Melhor sequência: ' + (_mat1Quiz.maxStreak || 0) + ' 🔥</div>' +
      '<button class="btn btn-primary" onclick="mat1QuizStart()">↺ Jogar novamente</button>' +
    '</div>';
}

/* ════════════════════════════════════════════════════════════════
   SUB-MODO: FLASHCARDS
   ════════════════════════════════════════════════════════════════ */
var _mat1Fc = { cap: 1, idx: 0, flipped: false, cards: [] };

function mat1FcBuildNav() {
  // primeiro capítulo com cartões
  if (!(_mat1Cards[_mat1Fc.cap] && _mat1Cards[_mat1Fc.cap].length)) {
    for (var c = 1; c <= _mat1CapMeta.length; c++) { if (_mat1Cards[c] && _mat1Cards[c].length) { _mat1Fc.cap = c; break; } }
  }
  // linha de capítulos: só os que têm cartões
  var row = document.getElementById('mat1-fc-cap-row');
  if (row) {
    var h = '';
    _mat1CapMeta.forEach(function(m) {
      var has = !!(_mat1Cards[m.n] && _mat1Cards[m.n].length);
      var color = _mat1CapColors[m.n] || '#516860';
      var isActive = _mat1Fc.cap === m.n;
      var activeStyle = isActive ? 'background:' + color + ';border-color:' + color + ';color:#fff' : '';
      var disabled = has ? '' : 'opacity:.45;cursor:not-allowed';
      var onclick = has ? ('mat1FcSelectCap(' + m.n + ',this)') : '';
      var title = has ? '' : ' title="Em preparação"';
      h += '<button class="resumo-cap-btn' + (isActive ? ' active' : '') + '" onclick="' + onclick + '" style="' + activeStyle + ';' + disabled + '"' + title + '>'
         + '<span class="resumo-cap-icon">' + m.icon + '</span>' + m.label + (has ? '' : ' ·') + '</button>';
    });
    row.innerHTML = h;
  }
  mat1FcSelectCap(_mat1Fc.cap, null);
}

function mat1FcSelectCap(cap, btn) {
  if (!(_mat1Cards[cap] && _mat1Cards[cap].length)) return;
  if (btn) _mat1SetActiveCapBtn('mat1-fc-cap-row', btn, cap);
  _mat1Fc.cap = cap;
  _mat1Fc.cards = _mat1Cards[cap].slice();
  _mat1Fc.idx = 0; _mat1Fc.flipped = false;
  _mat1PM(cap, 'flashcard');
  mat1FcRender();
}

function mat1FcRender() {
  var app = document.getElementById('mat1-fc-app');
  if (!app) return;
  var cards = _mat1Fc.cards;
  if (!cards.length) { app.innerHTML = '<p style="color:var(--ink4);padding:2rem;text-align:center">Sem flashcards para este capítulo.</p>'; return; }
  var card = cards[_mat1Fc.idx];
  var color = _mat1CapColors[_mat1Fc.cap] || '#516860';
  var pct = Math.round((_mat1Fc.idx + 1) / cards.length * 100);
  app.innerHTML =
    '<div class="card card-narrow">' +
      '<div class="flex items-center justify-between mb-3">' +
        '<span class="fc2-tag-pill" style="background:' + color + ';color:#fff">' + (card.tag || '') + '</span>' +
        '<span class="fc-counter">' + (_mat1Fc.idx + 1) + ' / ' + cards.length + '</span>' +
      '</div>' +
      '<div class="fc2-prog-track"><div class="fc2-prog-fill" style="width:' + pct + '%;background:' + color + '"></div></div>' +
      '<div onclick="mat1FcFlip()" class="fc2-card-inner" style="cursor:pointer;min-height:140px">' +
        '<div>' +
          '<p style="font-size:1.05rem;font-weight:600;color:var(--ink);line-height:1.4">' + (card.q || '') + '</p>' +
          '<p style="font-size:.9rem;color:' + color + ';margin-top:.75rem;line-height:1.5;display:' + (_mat1Fc.flipped ? 'block' : 'none') + '">' + (card.a || '') + '</p>' +
          '<p style="font-size:.75rem;color:var(--ink4);margin-top:.5rem">' + (_mat1Fc.flipped ? '' : 'Carrega para ver a resposta') + '</p>' +
        '</div>' +
      '</div>' +
      '<div class="flex flex-wrap gap-3 justify-center mt-5">' +
        '<button class="btn btn-ghost" onclick="mat1FcPrev()">← Anterior</button>' +
        '<button class="btn btn-primary" onclick="mat1FcFlip()">↕ Virar</button>' +
        '<button class="btn btn-ghost" onclick="mat1FcNext()">Seguinte →</button>' +
      '</div>' +
    '</div>';
}

function mat1FcFlip() { _mat1Fc.flipped = !_mat1Fc.flipped; mat1FcRender(); }
function mat1FcNext() { _mat1Fc.idx = (_mat1Fc.idx + 1) % (_mat1Fc.cards.length || 1); _mat1Fc.flipped = false; mat1FcRender(); }
function mat1FcPrev() { _mat1Fc.idx = (_mat1Fc.idx - 1 + (_mat1Fc.cards.length || 1)) % (_mat1Fc.cards.length || 1); _mat1Fc.flipped = false; mat1FcRender(); }

/* ════════════════════════════════════════════════════════════════
   SUB-MODO: TESTE CRONOMETRADO
   ════════════════════════════════════════════════════════════════ */
var _mat1Teste = { cap: 1, sel: null, nivel: 'medio', qtd: 10, tempo: 600, exs: [], answered: {}, score: { correct: 0, total: 0 }, timer: null, restante: 0 };

function _mat1TesteSel() { if (!_mat1Teste.sel) _mat1Teste.sel = _selNew(); return _mat1Teste.sel; }

function mat1TesteBuildNav() {
  var row = document.getElementById('mat1-teste-cap-row');
  if (row) row.innerHTML = _selBarsHTML(_mat1TesteSel(), _mat1SelCfg(), 'mat1TesteToggleCap', 'mat1TesteToggleSt');
  var st = document.getElementById('mat1-teste-st-row'); if (st) st.style.display = 'none';
  mat1TesteRenderConfig();
}

function mat1TesteToggleCap(cap) {
  _selToggleCap(_mat1TesteSel(), _mat1SelCfg(), cap);
  mat1TesteBuildNav();
}
function mat1TesteToggleSt(cap, st) {
  _selToggleSt(_mat1TesteSel(), cap, st);
  mat1TesteBuildNav();
}

function mat1TesteRenderConfig() {
  var app = document.getElementById('mat1-teste-app');
  if (!app) return;
  if (_mat1Teste.timer) { clearInterval(_mat1Teste.timer); _mat1Teste.timer = null; }
  app.innerHTML =
    '<div class="card">' +
      '<div class="card-title">Configurar teste</div>' +
      '<div class="flex flex-wrap gap-6 items-end">' +
        '<div><div class="label-small">Nível</div>' +
          '<div class="gen-level-group" id="mat1-teste-nivel">' +
            '<button class="gen-level-btn' + (_mat1Teste.nivel==='facil'?' active':'') + '" onclick="mat1TesteSetNivel(\'facil\',this)"><span class="status-dot status-dot--easy"></span> Fácil</button>' +
            '<button class="gen-level-btn' + (_mat1Teste.nivel==='medio'?' active':'') + '" onclick="mat1TesteSetNivel(\'medio\',this)"><span class="status-dot status-dot--medium"></span> Médio</button>' +
            '<button class="gen-level-btn' + (_mat1Teste.nivel==='dificil'?' active':'') + '" onclick="mat1TesteSetNivel(\'dificil\',this)"><span class="status-dot status-dot--hard"></span> Difícil</button>' +
          '</div></div>' +
        '<div><div class="label-small">N.º questões</div>' +
          '<select class="ai-select" id="mat1-teste-qtd"><option value="10">10</option><option value="15">15</option><option value="20">20</option></select></div>' +
        '<div><div class="label-small">Tempo</div>' +
          '<select class="ai-select" id="mat1-teste-tempo"><option value="600">10 min</option><option value="900">15 min</option><option value="1800">30 min</option></select></div>' +
        '<button class="btn btn-primary" onclick="mat1TesteStart()">▶ Iniciar teste</button>' +
      '</div>' +
    '</div>';
}

function mat1TesteSetNivel(nivel, btn) {
  _mat1Teste.nivel = nivel;
  var grp = document.getElementById('mat1-teste-nivel');
  if (grp) grp.querySelectorAll('.gen-level-btn').forEach(function(b){ b.classList.remove('active'); });
  if (btn) btn.classList.add('active');
}

function mat1TesteStart() {
  var pares = _selPares(_mat1TesteSel(), _mat1SelCfg());
  if (!pares.length) return;
  pares = pares.slice();
  for (var sp = pares.length - 1; sp > 0; sp--) { var rsp = Math.floor(Math.random() * (sp + 1)); var tsp = pares[sp]; pares[sp] = pares[rsp]; pares[rsp] = tsp; }
  _mat1Teste.cap = (_mat1TesteSel().caps[0]) || (pares[0] && pares[0].cap) || 1;
  var qtdEl = document.getElementById('mat1-teste-qtd'), tempoEl = document.getElementById('mat1-teste-tempo');
  _mat1Teste.qtd = qtdEl ? parseInt(qtdEl.value) : 10;
  _mat1Teste.tempo = tempoEl ? parseInt(tempoEl.value) : 600;
  var tipos = ['mc', 'fill', 'mc', 'vf', 'fill'];
  var exs = [];
  for (var i = 0; i < _mat1Teste.qtd; i++) {
    var par = pares[i % pares.length];
    var gen = _mat1Gerador(par.cap); if (!gen) continue;
    var ex = gen(par.tema, tipos[i % tipos.length], _mat1Teste.nivel);
    if (ex) exs.push(Object.assign({}, ex, { num: i + 1 }));
  }
  _mat1Teste.exs = exs; _mat1Teste.answered = {}; _mat1Teste.score = { correct: 0, total: 0 };
  _mat1Teste.restante = _mat1Teste.tempo;

  var app = document.getElementById('mat1-teste-app');
  var quizHTML = (typeof _capBuildQuizHTML === 'function') ? _capBuildQuizHTML(exs, 'm8teste', 'mat1TesteCheck') : '';
  app.innerHTML =
    '<div class="exam-progress-bar" style="position:sticky;top:0;z-index:5;background:var(--surface);padding:.75rem;border-radius:12px;display:flex;align-items:center;gap:1rem;flex-wrap:wrap">' +
      '<div style="font-family:\'Cormorant Garamond\',serif;font-size:1.8rem;font-weight:900" id="mat1-teste-timer">' + _mat1FmtTime(_mat1Teste.restante) + '</div>' +
      '<div style="font-size:.78rem;color:var(--ink3)">Respondidas: <span id="mat1-teste-answered">0 / ' + _mat1Teste.qtd + '</span></div>' +
      '<button class="btn btn-ghost ml-auto" onclick="mat1TesteFinish()">⏹ Terminar</button>' +
    '</div>' +
    '<div id="mat1-teste-questions" style="margin-top:1rem">' + quizHTML + '</div>';

  _mat1Teste.timer = setInterval(function() {
    _mat1Teste.restante--;
    var t = document.getElementById('mat1-teste-timer');
    if (t) t.textContent = _mat1FmtTime(_mat1Teste.restante);
    if (_mat1Teste.restante <= 0) mat1TesteFinish();
  }, 1000);
}

function _mat1FmtTime(s) {
  var m = Math.floor(s / 60), sec = s % 60;
  return (m < 10 ? '0' : '') + m + ':' + (sec < 10 ? '0' : '') + sec;
}

function mat1TesteCheck(qid, tipo, val, btn) {
  if (_mat1Teste.answered[qid]) return;
  if (typeof _capCheckAnswer !== 'function') return;
  var r = _capCheckAnswer(qid, tipo, val);
  if (!r) return;
  _mat1Teste.answered[qid] = true;
  if (r.correct) _mat1Teste.score.correct++;
  _mat1Teste.score.total++;
  if (typeof _capShowFeedback === 'function') _capShowFeedback(qid, r.correct, r.expl, val, btn);
  var a = document.getElementById('mat1-teste-answered');
  if (a) a.textContent = _mat1Teste.score.total + ' / ' + _mat1Teste.qtd;
  mat1SaveProgress(_mat1Teste.cap, r.correct);
  if (_mat1Teste.score.total >= _mat1Teste.qtd) setTimeout(mat1TesteFinish, 600);
}

function mat1TesteFinish() {
  if (_mat1Teste.timer) { clearInterval(_mat1Teste.timer); _mat1Teste.timer = null; }
  var app = document.getElementById('mat1-teste-app');
  if (!app) return;
  var total = _mat1Teste.qtd;
  var correct = _mat1Teste.score.correct;
  var pct = total > 0 ? Math.round(correct / total * 100) : 0;
  _mat1PM(_mat1Teste.cap, 'quiz', { pontuacao: correct, total: total });
  var nota = Math.round(correct / total * 20 * 10) / 10;
  var emoji = pct >= 90 ? '🏆' : pct >= 70 ? '⭐' : pct >= 50 ? '👍' : '📚';
  app.innerHTML =
    '<div style="text-align:center;padding:2.5rem 1rem">' +
      '<div style="font-size:3.5rem;margin-bottom:.75rem">' + emoji + '</div>' +
      '<div style="font-family:\'Cormorant Garamond\',serif;font-size:2.2rem;font-weight:900;color:var(--ink)">' + nota + ' / 20</div>' +
      '<div style="color:var(--ink3);margin:.5rem 0 1.5rem">' + correct + ' certas em ' + total + ' questões (' + pct + '%)</div>' +
      '<button class="btn btn-primary" onclick="mat1TesteRenderConfig()">↺ Novo teste</button>' +
    '</div>';
}

/* ════════════════════════════════════════════════════════════════
   SUB-MODO: JOGOS (reutiliza o motor genérico _j24AutoInit)
   ════════════════════════════════════════════════════════════════ */
var _mat1JogosInited = false;
function mat1JogosInit() {
  (function(){ var pj=document.getElementById('mat1p-jogos'); if(pj && !document.getElementById('mat1-jogos-atr')){ var d=document.createElement('div'); d.id='mat1-jogos-atr'; d.style.margin='0 0 .8rem'; if(pj.firstChild) pj.insertBefore(d,pj.firstChild); else pj.appendChild(d); } if(typeof Atribuir!=='undefined'&&Atribuir.montar) Atribuir.montar('mat1-jogos-atr',{curso:'mat1',cursoNome:'Matemática 5.º',tipo:'jogo',nivel:'',caps:_mat1CapMeta.map(function(mm){return {n:mm.n,label:mm.label};})}); })();
  _mat1PM(_mat1Prat.cap || 1, 'jogo');
  if (_mat1JogosInited) return;
  if (typeof _j24AutoInit === 'function') {
    // Regista o curso nos jogos (matéria correta + filtro capítulo/subtema).
    if (typeof _gRegisterGameCourse === 'function') {
      _gRegisterGameCourse('mat1-jogos-app', {
        capMeta: _mat1CapMeta,
        subtemas: _mat1Subtemas,
        subtemaTemas: (typeof _mat1SubtemaTemas !== 'undefined') ? _mat1SubtemaTemas : null,
        temasCount: _mat1TemasCount,
        gerador: _mat1Gerador,
        banco: (typeof _mat1Banco !== 'undefined') ? _mat1Banco : null,
        qFor: function (level, sel) { return _jogoQForCourse(this, level, sel); }
      });
    }
    _j24AutoInit('mat1-jogos-app', 'medio');
    _mat1JogosInited = true;
  } else {
    var app = document.getElementById('mat1-jogos-app');
    if (app) app.innerHTML = '<p style="color:var(--ink4);padding:2rem;text-align:center">Jogos indisponíveis (motor não carregado).</p>';
  }
}

/* ════════════════════════════════════════════════════════════════
   TAB PROGRESSO
   Lê edupt_mat1_capN (gravado por mat1SaveProgress). Mostra resumo
   global, stats, barras por capítulo, Relatório PDF e Limpar.
   ════════════════════════════════════════════════════════════════ */
function _mat1ProgGetCaps() {
  var out = [];
  var nCaps = _mat1CapMeta.length;
  for (var cap = 1; cap <= nCaps; cap++) {
    var correct = 0, total = 0;
    try {
      var d = JSON.parse(localStorage.getItem('edupt_mat1_cap' + cap) || '{}');
      if (d.sections) Object.keys(d.sections).forEach(function(k) {
        correct += (d.sections[k].correct || 0);
        total += (d.sections[k].total || 0);
      });
    } catch (e) {}
    out.push({ cap: cap, correct: correct, total: total, pct: total > 0 ? Math.round(correct / total * 100) : 0 });
  }
  return out;
}

function mat1RenderProgresso() {
  var el = document.getElementById('mat1-progresso-content');
  if (!el) return;
  var caps = _mat1ProgGetCaps();
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
     + '<button onclick="mat1ProgDownloadPDF()" style="font-family:inherit;font-size:.82rem;font-weight:700;color:#8b3a35;background:none;border:none;cursor:pointer;text-decoration:underline;padding:0">Guarda o relatório PDF</button> para o manteres.</span>'
     + '</div>';

  // Resumo global (gradiente terracota do 5.º ano)
  h += '<div style="background:var(--m1c1-base);border:1.5px solid var(--m1c1-mid);border-radius:16px;padding:1.1rem 1.25rem;margin-bottom:1.25rem;display:flex;align-items:center;gap:1rem;flex-wrap:wrap">'
     +   '<div style="width:52px;height:52px;border-radius:50%;background:var(--m1c1-mid);display:flex;align-items:center;justify-content:center;flex-shrink:0"><i class="ph ' + icon + '" style="font-size:1.4rem;color:#fff"></i></div>'
     +   '<div style="flex:1;min-width:180px">'
     +     '<div style="font-family:\'Cormorant Garamond\',serif;font-size:1.6rem;font-weight:900;color:var(--ink);line-height:1">' + (totalT > 0 ? globalPct + '<span style="font-size:1rem">%</span>' : '-') + '</div>'
     +     '<div style="font-size:.82rem;color:var(--ink2);margin-top:3px">' + msg + '</div>'
     +   '</div>'
     +   '<button class="btn btn-ghost" onclick="mat1ProgDownloadPDF()" style="font-size:.78rem;padding:7px 14px;display:inline-flex;align-items:center;gap:5px"><i class="ph ph-file-text"></i>Relatório PDF</button>'
     + '</div>';

  // XP + streak do ProgressManager (apenas dos capítulos do 5.º ano)
  var pmXp = 0, pmStreak = 0;
  if (typeof ProgressManager !== 'undefined') {
    try {
      var sum = ProgressManager.getSummary();
      pmStreak = sum.streak || 0;
      if (sum.caps) Object.keys(sum.caps).forEach(function(k) { if (k.indexOf('m1cap') === 0) pmXp += (sum.caps[k].xp || 0); });
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
    var m = _mat1CapMeta[c.cap - 1];
    var color = _mat1CapColors[c.cap] || '#516860';
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
      var mp = _mat1CapMeta[pior.cap - 1];
      var colorp = _mat1CapColors[pior.cap] || '#516860';
      h += '<div class="card mt-4" style="border-color:' + colorp + '">'
        + '<div class="card-title" style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:.5rem">'
        + '<span>🎯 Treino Direcionado</span></div>'
        + '<div style="font-size:.85rem;color:var(--ink2);margin:.3rem 0 .8rem">O capítulo onde tens mais a melhorar é <strong>' + mp.label + '</strong> (' + pior.pct + '%). Pratica mais um pouco para subir a tua taxa!</div>'
        + '<button class="btn btn-primary" onclick="mat1TreinarCap(' + pior.cap + ')" style="display:inline-flex;align-items:center;gap:6px"><i class="ph ph-target"></i> Treinar ' + mp.label + '</button>'
        + '</div>';
    }
  }

  // Última atualização
  h += '<div style="font-size:.72rem;color:var(--ink4);margin-top:1rem">Última atualização: ' + new Date().toLocaleString('pt-PT', { hour: '2-digit', minute: '2-digit', day: '2-digit', month: '2-digit' }) + '</div>';

  // Limpar
  h += '<div class="mt-4 flex flex-wrap gap-3"><button class="btn btn-ghost" onclick="mat1ProgReset()"><i class="ph ph-trash"></i> Limpar progresso</button></div>';

  el.innerHTML = h;
}

// Abre a tab Exercícios da Praticar já no capítulo indicado (treino direcionado).
function mat1TreinarCap(cap) {
  _mat1Prat.cap = cap;
  _mat1Prat.st = 0;
  _mat1Prat.sel = { caps: [cap], stsByCap: {} };
  mat1SwitchTab('exercicios', null);
}

function mat1ProgReset() {
  if (typeof window !== 'undefined' && window.confirm && !window.confirm('Limpar todo o progresso do 5.º ano? Esta ação não pode ser desfeita.')) return;
  for (var cap = 1; cap <= _mat1CapMeta.length; cap++) { try { localStorage.removeItem('edupt_mat1_cap' + cap); } catch (e) {} }
  // Remove só os capítulos do 5.º ano (m1cap*) do ProgressManager, preservando os outros anos.
  try {
    var raw = localStorage.getItem('edupt_progress_v2');
    if (raw) {
      var d = JSON.parse(raw);
      if (d.caps) { Object.keys(d.caps).forEach(function(k) { if (k.indexOf('m1cap') === 0) delete d.caps[k]; }); }
      localStorage.setItem('edupt_progress_v2', JSON.stringify(d));
    }
  } catch (e) {}
  mat1RenderProgresso();
  if (typeof eduToast === 'function') eduToast('Progresso do 5.º ano limpo.', 'ok');
}

function mat1ProgDownloadPDF() {
  var caps = _mat1ProgGetCaps();
  var totalC = 0, totalT = 0;
  caps.forEach(function(c) { totalC += c.correct; totalT += c.total; });
  var globalPct = totalT > 0 ? Math.round(totalC / totalT * 100) : 0;
  var rows = caps.map(function(c) {
    var m = _mat1CapMeta[c.cap - 1];
    return '<tr><td style="padding:6px 10px;border-bottom:1px solid #eee">' + m.label + '</td>'
      + '<td style="padding:6px 10px;border-bottom:1px solid #eee;text-align:center">' + (c.total > 0 ? c.correct + ' / ' + c.total : '-') + '</td>'
      + '<td style="padding:6px 10px;border-bottom:1px solid #eee;text-align:center">' + (c.total > 0 ? c.pct + '%' : '-') + '</td></tr>';
  }).join('');
  var html = '<div style="font-family:Arial,sans-serif;max-width:680px;margin:0 auto;padding:24px">'
    + '<h1 style="font-size:20px;margin:0 0 4px">Relatório de Progresso · Matemática 5.º Ano</h1>'
    + '<div style="color:#666;font-size:13px;margin-bottom:16px">3ponto14 · ' + new Date().toLocaleString('pt-PT', { day: '2-digit', month: '2-digit', year: 'numeric' }) + '</div>'
    + eduAlunoLinhaPDF()
    + '<div style="background:#eef2f0;border:1px solid #9ab5aa;border-radius:8px;padding:12px 16px;margin-bottom:16px">'
    + '<strong>Taxa global:</strong> ' + (totalT > 0 ? globalPct + '%' : '-') + ' &nbsp;·&nbsp; ' + totalC + ' certas em ' + totalT + ' questões.</div>'
    + '<table style="width:100%;border-collapse:collapse;font-size:14px"><thead><tr style="background:#516860;color:#fff">'
    + '<th style="padding:8px 10px;text-align:left">Capítulo</th><th style="padding:8px 10px">Certas</th><th style="padding:8px 10px">%</th></tr></thead>'
    + '<tbody>' + rows + '</tbody></table></div>';
  if (typeof htmlToPdfDownload === 'function') htmlToPdfDownload(html, 'progresso-mat1.pdf');
  else if (typeof eduToast === 'function') eduToast('Geração de PDF indisponível.', 'warn');
}

/* ════════════════════════════════════════════════════════════════
   TAB FICHAS - gerador rico (multi-capítulo), igual ao 7.º ano.
   Tipos: resumo teórico, exercícios, teste, minitestes, soluções.
   Seleção de vários capítulos; nível; nº de exercícios; PDF ou HTML.
   ════════════════════════════════════════════════════════════════ */
var _mat1gf = {
  caps: {},
  sts: {},             // { cap: { stIdx: true } } subtemas por capítulo; vazio = todos            // { cap: true } selecionados
  tipos: { resumo: true, exercicios: true, teste: true, minitestes: false, solucoes: true },
  dif: 'facil',
  qty: 10
};

// Constrói a lista de capítulos selecionáveis (só os com gerador).
function mat1FichasBuildNav() {
  if(typeof Atribuir!=='undefined'&&Atribuir.fixo) Atribuir.fixo('mat1-fichas-atr','mat1AtribuirFicha');
  var el = document.getElementById('mat1-fichas-caps');
  if (!el) return;
  // por defeito, seleciona o primeiro capítulo com gerador
  var temAlgum = false;
  for (var k in _mat1gf.caps) { if (_mat1gf.caps[k]) { temAlgum = true; break; } }
  var h = '';
  _mat1CapMeta.forEach(function(m) {
    var hasGen = !!_mat1Gerador(m.n);
    if (!hasGen) return;
    if (!temAlgum) { _mat1gf.caps[m.n] = true; temAlgum = true; } // 1.º disponível
    var sel = !!_mat1gf.caps[m.n];
    var color = _mat1CapColors[m.n] || '#516860';
    var style = sel ? 'background:' + color + ';border-color:' + color + ';color:#fff' : '';
    h += '<button class="gf-cap-btn' + (sel ? ' active' : '') + '" data-cap="' + m.n + '" onclick="mat1gfToggleCap(' + m.n + ',this)" style="' + style + '">' + m.icon + ' ' + m.label + '</button>';
    // subtemas do capítulo selecionado (gerar ficha só de um subtema)
    if (sel) {
      var _sts = (typeof _mat1Subtemas !== 'undefined' && _mat1Subtemas[m.n]) ? _mat1Subtemas[m.n] : [];
      if (_sts.length) {
        var _esc = _mat1gf.sts[m.n] || {};
        var _alg = _mat1gfStsSel(m.n) !== null;
        h += '<div style="margin:.15rem 0 .55rem 1.1rem;display:flex;flex-wrap:wrap;gap:.3rem;align-items:center">';
        h += '<span style="font-size:.66rem;font-weight:800;color:var(--ink4);text-transform:uppercase;letter-spacing:.06em;margin-right:.2rem">Subtemas:</span>';
        h += '<button onclick="mat1gfToggleSt(' + m.n + ',0,this)" style="' + _mat1gfStStyle(!_alg, color) + '">Todos</button>';
        _sts.forEach(function (st, i) {
          var on = !!_esc[i + 1];
          h += '<button onclick="mat1gfToggleSt(' + m.n + ',' + (i + 1) + ',this)" style="' + _mat1gfStStyle(on, color) + '">' + st + '</button>';
        });
        h += '</div>';
      }
    }
  });
  el.innerHTML = h;
}

// Subtemas (índices 1..n) escolhidos para um capítulo; null = todos.
function _mat1gfStsSel(cap) {
  var sel = _mat1gf.sts[cap];
  if (!sel) return null;
  var out = [];
  Object.keys(sel).forEach(function (i) { if (sel[i]) out.push(parseInt(i)); });
  return out.length ? out : null;
}

// Chaves de tema correspondentes aos subtemas escolhidos; null = todos.
function _mat1gfTemasSel(cap) {
  var sts = _mat1gfStsSel(cap);
  if (!sts) return null;
  var mapa = (typeof _mat1SubtemaTemas !== 'undefined' && _mat1SubtemaTemas[cap]) ? _mat1SubtemaTemas[cap] : {};
  var temas = [];
  sts.forEach(function (i) { (mapa[i] || [String(i)]).forEach(function (t) { if (temas.indexOf(t) === -1) temas.push(t); }); });
  return temas.length ? temas : null;
}

function _mat1gfStStyle(on, color) {
  return 'border-radius:999px;padding:3px 11px;font-size:.7rem;font-weight:700;cursor:pointer;font-family:Montserrat,sans-serif;transition:all .15s;'
    + (on ? 'background:' + color + ';border:1.5px solid ' + color + ';color:#fff'
          : 'background:var(--white);border:1.5px solid var(--border);color:var(--ink3)');
}

function mat1gfToggleCap(cap, btn) {
  _mat1gf.caps[cap] = !_mat1gf.caps[cap];
  if (!_mat1gf.caps[cap]) delete _mat1gf.sts[cap]; // desmarcar cap limpa os subtemas
  mat1FichasBuildNav(); // re-render para mostrar/esconder a linha de subtemas
}

// idx 0 = «Todos» (limpa a seleção); idx 1..n alterna o subtema.
function mat1gfToggleSt(cap, idx, btn) {
  if (idx === 0) { delete _mat1gf.sts[cap]; }
  else {
    if (!_mat1gf.sts[cap]) _mat1gf.sts[cap] = {};
    _mat1gf.sts[cap][idx] = !_mat1gf.sts[cap][idx];
    if (_mat1gfStsSel(cap) === null) delete _mat1gf.sts[cap]; // tudo desmarcado = todos
  }
  mat1FichasBuildNav();
}

function mat1gfToggleType(btn) {
  var t = btn.getAttribute('data-type');
  _mat1gf.tipos[t] = !_mat1gf.tipos[t];
  btn.classList.toggle('active', _mat1gf.tipos[t]);
  var tick = btn.querySelector('.gf-tick'); if (tick) tick.textContent = _mat1gf.tipos[t] ? '✓' : '';
}

function mat1gfSetDif(btn) {
  _mat1gf.dif = btn.getAttribute('data-dif');
  var grp = document.getElementById('mat1-fichas-dif');
  if (grp) grp.querySelectorAll('.gf-dif-btn').forEach(function(b){ b.classList.remove('active'); });
  btn.classList.add('active');
}

function mat1gfSetQty(btn) {
  _mat1gf.qty = parseInt(btn.getAttribute('data-qty')) || 10;
  var grp = document.getElementById('mat1-fichas-qty');
  if (grp) grp.querySelectorAll('.gf-dif-btn').forEach(function(b){ b.classList.remove('active'); });
  btn.classList.add('active');
}

// Renderiza um bloco de exercícios (com ou sem espaço de resposta).
function _mat1gfExBloco(exs, startNum) {
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

function _mat1gfGenExs(cap, n) {
  var gen = _mat1Gerador(cap); if (!gen) return [];
  var _temasFiltro = _mat1gfTemasSel(cap); // subtemas escolhidos → temas; null = todos
  var nTemas = _mat1TemasCount[cap] || 1;
  var tipos = ['mc', 'fill', 'vf', 'fill', 'mc', 'mc'];
  var geradas = [], vistos = {};
  // gera até n questões DISTINTAS (evita enunciados repetidos na ficha)
  for (var i = 0, tent = 0; geradas.length < n && tent < n * 6; tent++) {
    var _tk = _temasFiltro ? _temasFiltro[i % _temasFiltro.length] : String((i % nTemas) + 1);
    var ex = gen(_tk, tipos[i % tipos.length], _mat1gf.dif);
    i++;
    if (!ex) continue;
    var chave = String(ex.enun || '').replace(/<[^>]+>/g, '').trim();
    if (vistos[chave]) continue;
    vistos[chave] = 1;
    geradas.push(ex);
  }
  // mistura questões reais do banco (multi-passo, com contexto/figuras)
  var banco = (typeof _mat1Banco !== 'undefined' && _mat1Banco[cap]) ? _mat1Banco[cap] : [];
  if (banco.length && typeof _mixBancoGeradas === 'function') {
    return _mixBancoGeradas(banco, geradas, n, Math.min(Math.ceil(n / 3), banco.length), _mat1gf.dif);
  }
  return geradas;
}

function mat1gfGerar(formato) {
  // capítulos selecionados
  var capsSel = [];
  _mat1CapMeta.forEach(function(m) { if (_mat1gf.caps[m.n] && _mat1Gerador(m.n)) capsSel.push(m.n); });
  var status = document.getElementById('mat1-fichas-status');
  if (!capsSel.length) { if (status) status.textContent = 'Seleciona pelo menos um capítulo.'; return; }
  var algumTipo = _mat1gf.tipos.resumo || _mat1gf.tipos.exercicios || _mat1gf.tipos.teste || _mat1gf.tipos.minitestes;
  if (!algumTipo) { if (status) status.textContent = 'Seleciona pelo menos um tipo de conteúdo.'; return; }
  if (status) status.textContent = 'A gerar…';

  var difLabel = { facil: 'Fácil', medio: 'Médio', dificil: 'Difícil' }[_mat1gf.dif];
  var solucoes = []; // {num, ex} acumuladas para a secção final
  var solCounter = 0;

  var corpo = '';
  capsSel.forEach(function(cap, ci) {
    _mat1PM(cap, 'ficha'); // gerou ficha deste capítulo
    var m = _mat1CapMeta[cap - 1];
    var color = _mat1CapColors[cap] || '#36527a';
    corpo += '<div style="' + (ci > 0 ? 'page-break-before:always;' : '') + 'margin-bottom:6px">'
      + '<h2 style="font-size:16px;color:' + color + ';border-bottom:2px solid ' + color + ';padding-bottom:4px;margin:0 0 10px">' + cap + '. ' + m.label + '</h2>';

    // Resumo teórico (das flashcards)
    if (_mat1gf.tipos.resumo) {
      var cards = _mat1Cards[cap] || [];
      if (cards.length) {
        corpo += '<div style="margin-bottom:12px"><h3 style="font-size:13px;color:#444;margin:0 0 5px">Resumo teórico</h3>';
        cards.slice(0, 8).forEach(function(c) {
          corpo += '<div style="font-size:11.5px;margin-bottom:4px"><strong>' + c.q + '</strong> ' + c.a + (c.v ? '<div style="margin:3px 0">' + c.v + '</div>' : '') + '</div>';
        });
        corpo += '</div>';
      }
    }
    // Exercícios
    if (_mat1gf.tipos.exercicios) {
      var exs = _mat1gfGenExs(cap, _mat1gf.qty);
      corpo += '<div style="margin-bottom:12px"><h3 style="font-size:13px;color:#444;margin:0 0 5px">Exercícios</h3>'
        + _mat1gfExBloco(exs, solCounter + 1) + '</div>';
      exs.forEach(function(ex) { solCounter++; solucoes.push({ num: solCounter, ex: ex }); });
    }
    // Teste de avaliação (8 questões mistas)
    if (_mat1gf.tipos.teste) {
      var exsT = _mat1gfGenExs(cap, 8);
      corpo += '<div style="margin-bottom:12px"><h3 style="font-size:13px;color:#444;margin:0 0 5px">Teste de avaliação</h3>'
        + _mat1gfExBloco(exsT, solCounter + 1) + '</div>';
      exsT.forEach(function(ex) { solCounter++; solucoes.push({ num: solCounter, ex: ex }); });
    }
    // Minitestes (um por subtema, 4 questões cada)
    if (_mat1gf.tipos.minitestes) {
      var subt = _mat1Subtemas[cap] || [];
      var mapa = _mat1SubtemaTemas[cap] || {};
      corpo += '<div style="margin-bottom:12px"><h3 style="font-size:13px;color:#444;margin:0 0 5px">Minitestes</h3>';
      subt.forEach(function(st, si) {
        var temas = mapa[si + 1] || [String(si + 1)];
        var gen = _mat1Gerador(cap);
        var exsM = [];
        for (var q = 0; q < 4; q++) {
          var tema = temas[q % temas.length];
          var ex = gen(tema, (q % 2 === 0) ? 'mc' : 'fill', _mat1gf.dif);
          if (ex) exsM.push(ex);
        }
        corpo += '<div style="margin-bottom:8px"><div style="font-size:12px;font-weight:700;color:#555">Mini ' + (si + 1) + ' · ' + st + '</div>'
          + _mat1gfExBloco(exsM, solCounter + 1) + '</div>';
        exsM.forEach(function(ex) { solCounter++; solucoes.push({ num: solCounter, ex: ex }); });
      });
      corpo += '</div>';
    }
    corpo += '</div>';
  });

  // Secção de soluções
  var solHTML = '';
  if (_mat1gf.tipos.solucoes && eduPodeSolucoes() && solucoes.length) {
    var _lmS = (typeof _limpaMath === 'function') ? _limpaMath : function(x){ return x; };
    var fmS = (typeof formatMath === 'function') ? function(x){ return formatMath(_lmS(x)); } : function(x){ return _lmS(x); };
    var lst = solucoes.map(function(s) {
      return '<div style="font-size:11.5px;margin-bottom:7px;line-height:1.5;page-break-inside:avoid">'
        + '<strong>' + s.num + '.</strong> <strong style="color:#1a6b4a">' + fmS(String(s.ex.resposta)) + '</strong>'
        + (s.ex.expl ? '<br><span style="color:#555">' + fmS(s.ex.expl) + '</span>' : '') + '</div>';
    }).join('');
    solHTML = '<div style="page-break-before:always;padding-top:8px"><h2 style="font-size:16px;border-bottom:2px solid #36527a;padding-bottom:4px">Soluções</h2>' + lst + '</div>';
  }

  var nomesCaps = capsSel.map(function(c) { return _mat1CapMeta[c - 1].label; }).join(', ');
  var html = '<div style="font-family:Arial,sans-serif;max-width:740px;margin:0 auto;padding:24px;color:#222">'
    + '<div style="display:flex;justify-content:space-between;align-items:baseline;border-bottom:2px solid #36527a;padding-bottom:8px;margin-bottom:14px">'
    + '<div><h1 style="font-size:18px;margin:0">Ficha de Trabalho · Matemática 5.º Ano</h1>'
    + '<div style="font-size:11.5px;color:#666">' + nomesCaps + ' · Nível ' + difLabel + '</div></div>'
    + '<div style="font-size:11.5px;color:#888">3ponto14</div></div>'
    + '<div style="font-size:11.5px;color:#666;margin-bottom:12px">Nome: ____________________________  Data: ____ / ____ / ______</div>'
    + corpo + solHTML + '</div>';

  var _temasNomes = capsSel.map(function(c){ return _mat1CapMeta[c-1].label; });
  var fname = (typeof _nomeFicha === 'function') ? _nomeFicha('5', 'matematica', _temasNomes, formato) : ('ficha-mat1.' + (formato === 'html' ? 'html' : 'pdf'));
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
function _mat1Init() {
  if (typeof _addStatsTeoriaVisuais === 'function') _addStatsTeoriaVisuais(_mat1Cards[7], '#4a9e72'); // cap7 Dados
  if (typeof _addGeoTeoriaVisuais === 'function') _addGeoTeoriaVisuais(_mat1Cards[4], '#8a9e4a'); // cap4 Figuras
  // arranca na tab Teoria com o cap 1 selecionado
  mat1BuildResumoNav();
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _mat1Init);
else _mat1Init();

/* ═══ GERADOR DE EXERCÍCIOS - Cap 1 Números (fiel ao Prisma 8) ═══ */
function rnd_m81(a, b) { return Math.floor(Math.random() * (b - a + 1)) + a; }
function rndNZ_m81(a, b) { var v; do { v = rnd_m81(a, b); } while (v === 0); return v; }
function shuffle_m81(arr) { for (var i = arr.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = arr[i]; arr[i] = arr[j]; arr[j] = t; } return arr; }
function gcd_m81(a, b) { a = Math.abs(a); b = Math.abs(b); while (b) { var t = b; b = a % b; a = t; } return a || 1; }
function reduce_m81(p, q) { if (q < 0) { p = -p; q = -q; } var g = gcd_m81(p, q); return [p / g, q / g]; }
function fmtFrac_m81(p, q) {
  var r = reduce_m81(p, q);
  p = r[0]; q = r[1];
  if (q === 1) return String(p);
  return p + '/' + q;
}
function fmtFracHTML_m81(p, q) {
  var r = reduce_m81(p, q);
  p = r[0]; q = r[1];
  if (q === 1) return String(p);
  var sign = p < 0 ? '−' : '';
  return sign + '<sup>' + Math.abs(p) + '</sup>⁄<sub>' + q + '</sub>';
}
// expoentes em unicode
var _SUP_m81 = { '-': '⁻', '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴', '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹' };
function sup_m81(n) { return String(n).split('').map(function (c) { return _SUP_m81[c] || c; }).join(''); }

function lim_m81(dif) {
  if (dif === 'facil') return { mx: 5 };
  if (dif === 'dificil') return { mx: 12 };
  return { mx: 8 };
}

// ── State (compat com handlers) ──
var dynState_m81 = {
  q: { level: 'medio', score: { correct: 0, total: 0 }, answered: {} },
  m: { level: 'medio', score: { correct: 0, total: 0 }, answered: {}, activeMini: 1 },
  t: { level: 'medio', score: { correct: 0, total: 0 }, answered: {} }
};

/* ════════════════════════════════════════════════════════════════
   GERADORES DE EXERCÍCIOS - Matemática 5.º ano
   Reutilizam os helpers genéricos acima (rnd_m81, shuffle_m81…).
   ════════════════════════════════════════════════════════════════ */
function _opts4_m1(correct, distractors) {
  // garante 4 opções únicas incluindo a correta
  var opts = [correct];
  for (var i = 0; i < distractors.length && opts.length < 4; i++) {
    if (opts.indexOf(distractors[i]) === -1) opts.push(distractors[i]);
  }
  // Fallback só quando dá para gerar distractores NUMÉRICOS sem ambiguidade.
  // (Se 'correct' não for um número, não inventamos — evita colar dígitos
  //  como "14"+1 = "141". Nesse caso devolvemos as opções que há.)
  var nCorrect = Number(correct);
  if (!isNaN(nCorrect) && String(nCorrect) === String(correct)) {
    var bump = 1;
    while (opts.length < 4) {
      var c = nCorrect + bump;
      if (c >= 0 && opts.map(Number).indexOf(c) === -1) opts.push(c);
      bump++;
      if (bump > 20) break;
    }
  }
  return shuffle_m81(opts.slice(0, 4)).map(String);
}

// ═══════════════════════════════════════════════════════════════
//   GERADORES · Matemática · 1.º ano (6 capítulos, nível inicial)
//   Cada buildEx_m1cN(tema, tipo, dif) → {enun, tipo, opcoes?, resposta, expl, tema}
//   Helpers: rnd_m81, _opts4_m1. Números pequenos, linguagem simples.
// ═══════════════════════════════════════════════════════════════

// ═══ CAP 1 · Números até 100 ═══
// Temas: 1 Contar/antes-depois · 2 Comparar · 3 Dezenas e unidades
function buildEx_m1c1(tema, tipo, dif) {
  tema = String(tema);
  var teto = dif === 'facil' ? 20 : (dif === 'dificil' ? 100 : 50);
  if (tema === '1') {
    var n = rnd_m81(1, teto - 1);
    if (Math.random() < 0.5) {
      return { enun: 'Que número vem <strong>depois</strong> do ' + n + '?', tipo: 'mc',
        opcoes: _opts4_m1(String(n + 1), [String(n - 1), String(n + 2), String(n)]),
        resposta: String(n + 1), expl: 'A seguir ao ' + n + ' vem o ' + (n + 1) + '.', tema: 'T1 · Contar' };
    }
    return { enun: 'Que número vem <strong>antes</strong> do ' + (n + 1) + '?', tipo: 'mc',
      opcoes: _opts4_m1(String(n), [String(n + 1), String(n + 2), String(n - 1)]),
      resposta: String(n), expl: 'Antes do ' + (n + 1) + ' vem o ' + n + '.', tema: 'T1 · Contar' };
  }
  if (tema === '2') {
    var a = rnd_m81(1, teto), b = rnd_m81(1, teto);
    while (b === a) b = rnd_m81(1, teto);
    var maior = Math.max(a, b), menor = Math.min(a, b);
    return { enun: 'Qual é o número <strong>maior</strong>: ' + a + ' ou ' + b + '?', tipo: 'mc',
      opcoes: shuffle_m81([String(maior), String(menor)]),
      resposta: String(maior), expl: maior + ' é maior que ' + menor + '.', tema: 'T2 · Comparar' };
  }
  // tema 3 · dezenas e unidades
  var dez = rnd_m81(1, 9), uni = rnd_m81(1, 9), num = dez * 10 + uni;
  if (Math.random() < 0.5) {
    return { enun: 'Quantas <strong>dezenas</strong> tem o número ' + num + '?', tipo: 'mc',
      opcoes: _opts4_m1(String(dez), [String(uni), String(dez + 1), String(dez - 1)]),
      resposta: String(dez), expl: num + ' = ' + dez + ' dezenas e ' + uni + ' unidades.', tema: 'T3 · Dezenas e unidades' };
  }
  return { enun: 'Quanto é ' + (dez * 10) + ' + ' + uni + '?', tipo: 'fill',
    resposta: String(num), expl: dez + ' dezenas e ' + uni + ' unidades = ' + num + '.', tema: 'T3 · Dezenas e unidades' };
}

// ═══ CAP 2 · Adição ═══
// Temas: 1 Somar até 10 · 2 Somar até 20 · 3 Somar dezenas
function buildEx_m1c2(tema, tipo, dif) {
  tema = String(tema);
  if (tema === '1') {
    var a = rnd_m81(1, 9), b = rnd_m81(0, 9 - a + 1); if (a + b > 10) b = 10 - a;
    return { enun: 'Quanto é <strong>' + a + ' + ' + b + '</strong>?', tipo: 'fill',
      resposta: String(a + b), expl: a + ' + ' + b + ' = ' + (a + b) + '.', tema: 'T1 · Somar até 10' };
  }
  if (tema === '2') {
    var a2 = rnd_m81(5, 12), b2 = rnd_m81(2, 8);
    return { enun: 'Quanto é <strong>' + a2 + ' + ' + b2 + '</strong>?', tipo: 'fill',
      resposta: String(a2 + b2), expl: a2 + ' + ' + b2 + ' = ' + (a2 + b2) + '.', tema: 'T2 · Somar até 20' };
  }
  // tema 3 · somar dezenas
  var d1 = rnd_m81(1, 5) * 10, d2 = rnd_m81(1, 4) * 10;
  return { enun: 'Quanto é <strong>' + d1 + ' + ' + d2 + '</strong>?', tipo: 'fill',
    resposta: String(d1 + d2), expl: 'Soma as dezenas: ' + (d1 / 10) + ' + ' + (d2 / 10) + ' = ' + ((d1 + d2) / 10) + ' → ' + (d1 + d2) + '.', tema: 'T3 · Somar dezenas' };
}

// ═══ CAP 3 · Subtração ═══
// Temas: 1 Tirar até 10 · 2 Tirar até 20 · 3 Problemas
function buildEx_m1c3(tema, tipo, dif) {
  tema = String(tema);
  if (tema === '1') {
    var a = rnd_m81(2, 10), b = rnd_m81(1, a);
    return { enun: 'Quanto é <strong>' + a + ' − ' + b + '</strong>?', tipo: 'fill',
      resposta: String(a - b), expl: a + ' − ' + b + ' = ' + (a - b) + '.', tema: 'T1 · Tirar até 10' };
  }
  if (tema === '2') {
    var a2 = rnd_m81(11, 20), b2 = rnd_m81(2, 9);
    return { enun: 'Quanto é <strong>' + a2 + ' − ' + b2 + '</strong>?', tipo: 'fill',
      resposta: String(a2 - b2), expl: a2 + ' − ' + b2 + ' = ' + (a2 - b2) + '.', tema: 'T2 · Tirar até 20' };
  }
  // tema 3 · problemas simples
  var tinha = rnd_m81(6, 15), deu = rnd_m81(2, tinha - 1);
  var objs = ['cromos', 'rebuçados', 'lápis', 'berlindes', 'autocolantes'][rnd_m81(0, 4)];
  return { enun: 'A Rita tinha <strong>' + tinha + ' ' + objs + '</strong> e deu <strong>' + deu + '</strong>. Com quantos ficou?', tipo: 'fill',
    resposta: String(tinha - deu), expl: 'Tirar: ' + tinha + ' − ' + deu + ' = ' + (tinha - deu) + ' ' + objs + '.', tema: 'T3 · Problemas' };
}

// ═══ CAP 4 · Formas e Sólidos ═══
// Temas: 1 Figuras planas · 2 Sólidos · 3 Posição
function buildEx_m1c4(tema, tipo, dif) {
  tema = String(tema);
  if (tema === '1') {
    var figs = [
      { n: 'triângulo', lados: '3' }, { n: 'quadrado', lados: '4' },
      { n: 'retângulo', lados: '4' }, { n: 'círculo', lados: '0' }
    ];
    var f = figs[rnd_m81(0, 3)];
    if (f.lados === '0') {
      return { enun: 'Qual destas formas é <strong>redonda</strong> (sem lados nem bicos)?', tipo: 'mc',
        opcoes: _opts4_m1('círculo', ['quadrado', 'triângulo', 'retângulo']),
        resposta: 'círculo', expl: 'O círculo é redondo, não tem lados nem cantos.', tema: 'T1 · Figuras planas' };
    }
    return { enun: 'Quantos <strong>lados</strong> tem um <strong>' + f.n + '</strong>?', tipo: 'mc',
      opcoes: _opts4_m1(f.lados, ['0', '5', String(Number(f.lados) + 1)]),
      resposta: f.lados, expl: 'Um ' + f.n + ' tem ' + f.lados + ' lados.', tema: 'T1 · Figuras planas' };
  }
  if (tema === '2') {
    var sol = [
      { o: 'uma bola', s: 'esfera' }, { o: 'um dado', s: 'cubo' }, { o: 'uma lata', s: 'cilindro' }
    ][rnd_m81(0, 2)];
    return { enun: 'Que sólido é <strong>' + sol.o + '</strong>?', tipo: 'mc',
      opcoes: _opts4_m1(sol.s, ['esfera', 'cubo', 'cilindro'].filter(function (x) { return x !== sol.s; })),
      resposta: sol.s, expl: sol.o + ' tem a forma de ' + (sol.s === 'esfera' ? 'uma ' : 'um ') + sol.s + '.', tema: 'T2 · Sólidos' };
  }
  // tema 3 · posição
  var pares = [
    { p: 'O sol está no céu. Está…', r: 'em cima', d: ['em baixo', 'dentro', 'à frente'] },
    { p: 'O gato entrou na caixa. Está…', r: 'dentro', d: ['fora', 'em cima', 'longe'] },
    { p: 'Uma régua faz uma linha…', r: 'reta', d: ['curva', 'redonda', 'torta'] }
  ][rnd_m81(0, 2)];
  return { enun: pares.p, tipo: 'mc', opcoes: _opts4_m1(pares.r, pares.d),
    resposta: pares.r, expl: 'A resposta certa é "' + pares.r + '".', tema: 'T3 · Posição' };
}

// ═══ CAP 5 · Medida (tempo e dinheiro) ═══
// Temas: 1 Tempo · 2 Dinheiro
function buildEx_m1c5(tema, tipo, dif) {
  tema = String(tema);
  if (tema === '1') {
    var qs = [
      { p: 'Quantos dias tem uma semana?', r: '7', d: ['5', '10', '12'] },
      { p: 'Quantos meses tem um ano?', r: '12', d: ['7', '10', '24'] },
      { p: 'Que dia vem depois de sexta-feira?', r: 'sábado', d: ['quinta', 'domingo', 'segunda'] },
      { p: 'Que dia vem depois de domingo?', r: 'segunda', d: ['sábado', 'terça', 'sexta'] }
    ][rnd_m81(0, 3)];
    return { enun: qs.p, tipo: 'mc', opcoes: _opts4_m1(qs.r, qs.d), resposta: qs.r,
      expl: 'A resposta é ' + qs.r + '.', tema: 'T1 · Tempo' };
  }
  // tema 2 · dinheiro (somar euros)
  var e1 = rnd_m81(1, 5), e2 = rnd_m81(1, 5);
  return { enun: 'Tenho uma moeda de <strong>' + e1 + '€</strong> e outra de <strong>' + e2 + '€</strong>. Quanto tenho ao todo?', tipo: 'fill',
    resposta: String(e1 + e2), expl: e1 + '€ + ' + e2 + '€ = ' + (e1 + e2) + '€.', tema: 'T2 · Dinheiro' };
}

// ═══ CAP 6 · Dados ═══
// Temas: 1 Ler tabelas/total · 2 Comparar (mais/menos)
function buildEx_m1c6(tema, tipo, dif) {
  tema = String(tema);
  var frutas = ['maçã', 'banana', 'pera', 'uva', 'laranja'];
  var f1 = frutas[rnd_m81(0, 4)], f2 = frutas[rnd_m81(0, 4)];
  while (f2 === f1) f2 = frutas[rnd_m81(0, 4)];
  var v1 = rnd_m81(2, 8), v2 = rnd_m81(2, 8);
  while (v2 === v1) v2 = rnd_m81(2, 8);
  if (tema === '1') {
    return { enun: 'Na turma, <strong>' + v1 + '</strong> gostam de ' + f1 + ' e <strong>' + v2 + '</strong> de ' + f2 + '. Quantos ao todo?', tipo: 'fill',
      resposta: String(v1 + v2), expl: 'Total: ' + v1 + ' + ' + v2 + ' = ' + (v1 + v2) + '.', tema: 'T1 · Ler tabelas' };
  }
  // tema 2 · comparar
  var maior = v1 > v2 ? f1 : f2, mv = Math.max(v1, v2), nv = Math.min(v1, v2);
  if (Math.random() < 0.5) {
    return { enun: '<strong>' + f1 + ': ' + v1 + '</strong> · <strong>' + f2 + ': ' + v2 + '</strong>. Qual é a mais escolhida?', tipo: 'mc',
      opcoes: shuffle_m81([f1, f2]),
      resposta: maior, expl: maior + ' tem ' + mv + ' (mais que ' + nv + ').', tema: 'T2 · Comparar' };
  }
  return { enun: '<strong>' + f1 + ': ' + v1 + '</strong> e <strong>' + f2 + ': ' + v2 + '</strong>. Quantos a mais tem ' + maior + '?', tipo: 'fill',
    resposta: String(mv - nv), expl: mv + ' − ' + nv + ' = ' + (mv - nv) + ' a mais.', tema: 'T2 · Comparar' };
}

var _mat1Banco = {
  1: [ // Números até 100
    { t: '1', tipo: 'mc', enun: 'Conta de 10 em 10: 10, 20, 30, … Qual vem a seguir?', opcoes: ['40', '31', '50', '21'], resposta: '40', expl: 'De 10 em 10: 10, 20, 30, 40.', tema: 'T1 · Contar' },
    { t: '2', tipo: 'mc', enun: 'Qual é o número MENOR: 17 ou 12?', opcoes: ['12', '17'], resposta: '12', expl: '12 é menor que 17.', tema: 'T2 · Comparar' },
    { t: '3', tipo: 'fill', enun: 'Quanto é 30 + 7?', resposta: '37', expl: '3 dezenas e 7 unidades = 37.', tema: 'T3 · Dezenas e unidades' },
    { t: '1', tipo: 'mc', enun: 'O número 8 é par ou ímpar?', opcoes: ['par', 'ímpar'], resposta: 'par', expl: '8 acaba em 8 → é par.', tema: 'T1 · Contar' }
  ],
  2: [ // Adição
    { t: '1', tipo: 'fill', enun: 'Quanto é 6 + 3?', resposta: '9', expl: '6 + 3 = 9.', tema: 'T1 · Somar até 10' },
    { t: '2', tipo: 'fill', enun: 'Quanto é 9 + 7?', resposta: '16', expl: '9 + 1 = 10, faltam 6 → 16.', tema: 'T2 · Somar até 20' },
    { t: '3', tipo: 'fill', enun: 'Quanto é 20 + 30?', resposta: '50', expl: 'Soma as dezenas: 2 + 3 = 5 → 50.', tema: 'T3 · Somar dezenas' },
    { t: '1', tipo: 'mc', enun: 'Quanto é 5 + 0?', opcoes: ['5', '0', '50', '10'], resposta: '5', expl: 'Somar 0 não muda o número.', tema: 'T1 · Somar até 10' }
  ],
  3: [ // Subtração
    { t: '1', tipo: 'fill', enun: 'Quanto é 9 − 4?', resposta: '5', expl: '9 − 4 = 5.', tema: 'T1 · Tirar até 10' },
    { t: '2', tipo: 'fill', enun: 'Quanto é 16 − 7?', resposta: '9', expl: '16 − 6 = 10, e ainda tiras 1 → 9.', tema: 'T2 · Tirar até 20' },
    { t: '3', tipo: 'fill', enun: 'O João tinha 12 cromos e perdeu 5. Com quantos ficou?', resposta: '7', expl: '12 − 5 = 7 cromos.', tema: 'T3 · Problemas' },
    { t: '1', tipo: 'mc', enun: 'Quanto é 7 − 7?', opcoes: ['0', '7', '14', '1'], resposta: '0', expl: 'Tiras tudo → 0.', tema: 'T1 · Tirar até 10' }
  ],
  4: [ // Formas e Sólidos
    { t: '1', tipo: 'mc', enun: 'Quantos lados tem um triângulo?', opcoes: ['3', '4', '0', '5'], resposta: '3', expl: 'O triângulo tem 3 lados.', tema: 'T1 · Figuras planas' },
    { t: '2', tipo: 'mc', enun: 'Que sólido é uma bola?', opcoes: ['esfera', 'cubo', 'cilindro', 'quadrado'], resposta: 'esfera', expl: 'A bola tem a forma de esfera.', tema: 'T2 · Sólidos' },
    { t: '1', tipo: 'mc', enun: 'Qual destas formas é redonda?', opcoes: ['círculo', 'quadrado', 'triângulo', 'retângulo'], resposta: 'círculo', expl: 'O círculo é redondo.', tema: 'T1 · Figuras planas' },
    { t: '3', tipo: 'mc', enun: 'Uma régua faz uma linha…', opcoes: ['reta', 'curva', 'redonda', 'torta'], resposta: 'reta', expl: 'A régua faz linhas retas (direitas).', tema: 'T3 · Posição' }
  ],
  5: [ // Medida
    { t: '1', tipo: 'mc', enun: 'Quantos dias tem uma semana?', opcoes: ['7', '5', '10', '12'], resposta: '7', expl: 'A semana tem 7 dias.', tema: 'T1 · Tempo' },
    { t: '1', tipo: 'mc', enun: 'Que dia vem depois de quinta-feira?', opcoes: ['sexta', 'quarta', 'sábado', 'segunda'], resposta: 'sexta', expl: 'Depois de quinta vem sexta-feira.', tema: 'T1 · Tempo' },
    { t: '2', tipo: 'fill', enun: 'Tenho 2 moedas de 2€. Quanto tenho?', resposta: '4', expl: '2€ + 2€ = 4€.', tema: 'T2 · Dinheiro' },
    { t: '2', tipo: 'fill', enun: 'Tenho uma moeda de 5€ e uma de 2€. Quanto tenho ao todo?', resposta: '7', expl: '5€ + 2€ = 7€.', tema: 'T2 · Dinheiro' }
  ],
  6: [ // Dados
    { t: '1', tipo: 'fill', enun: 'Cães: 4, Gatos: 3. Quantos animais ao todo?', resposta: '7', expl: '4 + 3 = 7.', tema: 'T1 · Ler tabelas' },
    { t: '2', tipo: 'mc', enun: 'Sol: 6, Chuva: 2. Qual é o mais escolhido?', opcoes: ['Sol', 'Chuva'], resposta: 'Sol', expl: '6 é mais que 2 → Sol.', tema: 'T2 · Comparar' },
    { t: '2', tipo: 'fill', enun: 'Maçã: 5, Pera: 2. Quantas a mais tem a maçã?', resposta: '3', expl: '5 − 2 = 3 a mais.', tema: 'T2 · Comparar' },
    { t: '1', tipo: 'fill', enun: 'Azul: 3, Verde: 3, Vermelho: 4. Quantos ao todo?', resposta: '10', expl: '3 + 3 + 4 = 10.', tema: 'T1 · Ler tabelas' }
  ]
};
/* atribuir: deep-link mat1 */
function _mat1DeepLinkAuto(){ try{ var p=new URLSearchParams(window.location.search); if(p.get('abrir')==='fichas'){ var cs=(p.get('caps')||'').split(',').filter(Boolean); if(_mat1gf){ _mat1gf.caps={}; cs.forEach(function(n){ _mat1gf.caps[parseInt(n,10)]=true; }); if(p.get('dif')) _mat1gf.dif=p.get('dif'); } if(p.get('tarefa'))setTimeout(function(){tarefaEntregaBar(p.get('tarefa'),'Ficha concluída');},400); setTimeout(function(){ mat1SwitchTab('fichas',null); },350); return; }
    if(p.get('abrir')==='jogos'){ var jc=parseInt(p.get('cap'),10); if(jc&&_mat1Prat) _mat1Prat.cap=jc; if(p.get('tarefa'))setTimeout(function(){tarefaEntregaBar(p.get('tarefa'),'Jogo concluído');},400); setTimeout(function(){ mat1SwitchTab('jogos',null); var jg=p.get('jogo'); if(jg&&typeof gTabSwitch==='function')setTimeout(function(){try{gTabSwitch('mat1-jogos-app',jg);}catch(e){}},250); },350); return; }
    if(p.get('abrir')!=='praticar')return; if(p.get('tarefa')){_mat1TarefaAtiva=p.get('tarefa');_mat1TarefaResp={};} var cap=parseInt(p.get('cap'),10)||1, st=parseInt(p.get('st'),10)||0, nivel=p.get('nivel')||'medio'; _mat1Prat.cap=cap; _mat1Prat.st=st; _mat1Prat.nivel=nivel; _mat1Prat.sel={caps:[cap],stsByCap:(st?(function(){var o={};o[cap]=[st];return o;})():{})}; setTimeout(function(){ mat1SwitchTab('exercicios',null); if(typeof mat1GerarExercicios==='function') mat1GerarExercicios(); },350); }catch(e){} }
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',function(){setTimeout(_mat1DeepLinkAuto,300);});else setTimeout(_mat1DeepLinkAuto,300);

function mat1AtribuirFicha(){
  var caps=[]; _mat1CapMeta.forEach(function(m){ if(_mat1gf.caps[m.n]) caps.push(m.n); });
  if(!caps.length){ var st=document.getElementById('mat1-fichas-status'); if(st) st.textContent='Escolhe pelo menos um capítulo para atribuir.'; return null; }
  var nomes=caps.map(function(n){ var mm=_mat1CapMeta[n-1]||{}; return mm.label||('Cap. '+n); });
  return { curso:'mat1', cursoNome:'Matemática 5.º', tema:caps.join('.'), temaNome:nomes.join(', '), sub:'', subNome:'', tipo:'ficha', nivel:_mat1gf.dif };
}

function mat1EntregarTarefa(){
  if(!_mat1TarefaAtiva||typeof Turmas==='undefined'||!Turmas.guardarResultado)return;
  var qids=Object.keys(_mat1TarefaResp||{});
  if(!qids.length){alert('Responde a pelo menos uma pergunta antes de entregar.');return;}
  var certas=0,detalhe=[];
  qids.forEach(function(qid,i){ var ok=!!_mat1TarefaResp[qid]; if(ok)certas++; var ex=_mat1Prat.exs[i]||{}; detalhe.push({q:(ex.enun||ex.pergunta||('Pergunta '+(i+1))),certo:ok}); });
  Turmas.guardarResultado(_mat1TarefaAtiva,certas,qids.length,detalhe).then(function(){
    if(typeof eduToast==='function')eduToast('Trabalho entregue! Acertaste '+certas+' de '+qids.length+'. \u2705','success'); else alert('Entregue! '+certas+'/'+qids.length);
    _mat1TarefaAtiva=null; _mat1TarefaResp={}; mat1GerarExercicios();
  }).catch(function(e){alert(e.message||'Não foi possível entregar.');});
}
