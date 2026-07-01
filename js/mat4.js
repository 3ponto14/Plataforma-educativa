/* ════════════════════════════════════════════════════════════════
   MAT5 HUB - Matemática 4.º ano (7 capítulos)
   Modelo de HUB ÚNICO (ver MODELO BASE no CLAUDE.md). NUNCA páginas
   por capítulo. Tabs: Teoria · Praticar · Fichas · Progresso.
   ════════════════════════════════════════════════════════════════ */

// ═══ Capítulos do 1.º ano · Matemática (Aprendizagens Essenciais) ═══
var _mat4CapMeta = [
  {n:1, icon:'<i class="ph ph-list-numbers"></i>',  label:'Números até 1 000 000'},
  {n:2, icon:'<i class="ph ph-plus-minus"></i>',    label:'As quatro operações'},
  {n:3, icon:'<i class="ph ph-chart-pie-slice"></i>', label:'Frações'},
  {n:4, icon:'<i class="ph ph-percent"></i>',       label:'Números decimais'},
  {n:5, icon:'<i class="ph ph-shapes"></i>',        label:'Geometria e Áreas'},
  {n:6, icon:'<i class="ph ph-ruler"></i>',         label:'Medida e Dados'}
];

// Cores por capítulo (alinhadas com --m4cN-* do CSS)
var _mat4CapColors = {
  1:'#4a9e6e', 2:'#6a9e4a', 3:'#4a8e9e', 4:'#8a9e4a', 5:'#4a9e88', 6:'#7a9e4a'
};

// Subtemas por capítulo (4.º ano)
var _mat4Subtemas = {
  1: ['Contar até 1 000 000', 'Valor de posição', 'Comparar e ordenar'],
  2: ['Somar e subtrair', 'Multiplicar (2 algarismos)', 'Dividir e problemas'],
  3: ['Frações equivalentes', 'Comparar frações', 'Frações de quantidades'],
  4: ['O que é um decimal', 'Décimas e centésimas', 'Somar e subtrair decimais'],
  5: ['Ângulos e polígonos', 'Perímetro', 'Área'],
  6: ['Tempo e dinheiro', 'Comprimento, massa e capacidade', 'Tabelas e gráficos']
};

// ═══ FLASHCARDS / TEORIA por capítulo ═══
// Cap 1 (Números) - conteúdo real, fiel ao Prisma 8.
// Caps 2-8 - placeholders honestos até serem construídos.
// ═══ FLASHCARDS / TEORIA por capítulo (4.º ano) ═══
// ═══ FLASHCARDS / TEORIA por capítulo (4.º ano) ═══
var _mat4Cards = {
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
var _mat4Sel = { resumo: 1, 'resumo-st': 0 };

// ═══ NAVEGAÇÃO DE TABS ═══
function mat4SwitchTab(tab, btn) {
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
  var panel = document.getElementById('mat4p-' + tab);
  if (panel) { panel.classList.add('active'); panel.style.setProperty('display','block','important'); }

  var titles = { resumo:'Teoria', praticar:'Praticar', fichas:'Fichas', progresso:'Progresso',
                 exercicios:'Exercícios', quiz:'Quiz', flashcards:'Flashcards', teste:'Teste', jogos:'Jogos' };
  if (titles[tab]) document.title = 'Mat. 4.º ' + titles[tab] + ' · 3ponto14';

  if (tab === 'resumo') mat4BuildResumoNav();
  else if (tab === 'exercicios') mat4BuildPraticarNav();
  else if (tab === 'quiz') mat4QuizBuildNav();
  else if (tab === 'flashcards') mat4FcBuildNav();
  else if (tab === 'teste') mat4TesteBuildNav();
  else if (tab === 'jogos') mat4JogosInit();
  else if (tab === 'jogar') { if (typeof LudicoMat4 !== 'undefined') LudicoMat4.init('mat4-ludico-menu', 'mat4-ludico-jogo'); }
  else if (tab === 'fichas') mat4FichasBuildNav();
  else if (tab === 'progresso') mat4RenderProgresso();
}

// Abre um sub-modo de prática a partir dos cartões do menu Praticar.
function mat4OpenPraticar(modo) { mat4SwitchTab(modo, null); }

// ═══ TAB TEORIA ═══
function mat4BuildResumoNav() {
  var capRow = document.getElementById('mat4-resumo-cap-row');
  if (!capRow) return;
  var activeCap = _mat4Sel['resumo'] || 1;
  var h = '';
  _mat4CapMeta.forEach(function(m) {
    var color = _mat4CapColors[m.n] || '#516860';
    var isActive = activeCap === m.n;
    var activeStyle = isActive ? 'background:' + color + ';border-color:' + color + ';color:#fff' : '';
    var hoverCode = isActive ? '' : ' onmouseover="this.style.borderColor=\'' + color + '\';this.style.color=\'' + color + '\'" onmouseout="this.style.borderColor=\'\';this.style.color=\'\'"';
    h += '<button class="resumo-cap-btn' + (isActive ? ' active' : '') + '" data-cap="' + m.n + '" onclick="mat4ResumoSelectCap(' + m.n + ',this)" style="' + activeStyle + '"' + hoverCode + '>'
       + '<span class="resumo-cap-icon">' + m.icon + '</span>' + m.label + '</button>';
  });
  capRow.innerHTML = h;
  mat4ResumoShowSts(activeCap);
  mat4RenderResumoInline();
}

function mat4ResumoSelectCap(cap, btn) {
  _mat4Sel['resumo'] = cap;
  _mat4Sel['resumo-st'] = 0;
  var capRow = document.getElementById('mat4-resumo-cap-row');
  if (capRow) {
    capRow.querySelectorAll('.resumo-cap-btn').forEach(function(b) {
      b.classList.remove('active'); b.style.background = ''; b.style.borderColor = ''; b.style.color = '';
    });
  }
  if (btn) {
    var color = _mat4CapColors[cap] || '#516860';
    btn.classList.add('active');
    btn.style.background = color; btn.style.borderColor = color; btn.style.color = '#fff';
  }
  mat4ResumoShowSts(cap);
  mat4RenderResumoInline();
}

function mat4ResumoShowSts(cap) {
  var stRow = document.getElementById('mat4-resumo-st-row');
  if (!stRow) return;
  var sts = _mat4Subtemas[cap] || [];
  if (!sts.length) { stRow.style.display = 'none'; return; }
  var _stSel = _mat4Sel['resumo-st'] || 0;
  var h = '<div class="resumo-st-label">Subtema</div>';
  h += '<button class="resumo-st-btn' + (_stSel === 0 ? ' active' : '') + '" data-st="0" onclick="mat4ResumoSelectSt(this,' + cap + ',0)">Todos</button>';
  sts.forEach(function(st, i) {
    var isActive = _stSel === (i + 1);
    h += '<button class="resumo-st-btn' + (isActive ? ' active' : '') + '" data-st="' + (i + 1) + '" onclick="mat4ResumoSelectSt(this,' + cap + ',' + (i + 1) + ')">' + st + '</button>';
  });
  stRow.innerHTML = h;
  stRow.style.display = 'flex';
}

function mat4ResumoSelectSt(btn, cap, stIdx) {
  var stRow = document.getElementById('mat4-resumo-st-row');
  if (stRow) stRow.querySelectorAll('.resumo-st-btn').forEach(function(b) { b.classList.remove('active'); });
  if (btn) btn.classList.add('active');
  _mat4Sel['resumo'] = cap;
  _mat4Sel['resumo-st'] = stIdx;
  mat4RenderResumoInline();
}

function mat4RenderResumoInline() {
  var cap = _mat4Sel['resumo'] || 1;
  var dest = document.getElementById('mat4-resumo-content');
  if (!dest) return;

  var color = (function(){
    var c = _mat4CapColors[cap] || '#516860';
    return c;
  })();

  var tagIcons = {
    'Definição':'ph-book-bookmark', 'Fórmula':'ph-function', 'Regra':'ph-check-square',
    'Propriedade':'ph-star', 'Exemplo':'ph-pencil-line', 'Estratégia':'ph-lightbulb',
    'Síntese':'ph-seal-check', 'Notação':'ph-at', 'Hierarquia':'ph-tree-structure',
    'Teorema':'ph-intersect', 'Conceito':'ph-cube'
  };

  var allCards = _mat4Cards[cap] || [];

  // Filtrar por subtema, se selecionado
  var stIdx = _mat4Sel['resumo-st'] || 0;
  // Filtro por subtema usa o campo st de cada flashcard (fiável); 0 = Todos.
  var cards = (stIdx > 0) ? allCards.filter(function(card){ return card.st === stIdx; }) : allCards;

  if (!cards.length) {
    dest.innerHTML = '<div class="resumo-empty">'
      + '<i class="ph ph-book-open-text resumo-empty-icon"></i>'
      + '<div class="resumo-empty-title">Conteúdo em preparação</div>'
      + '<div class="resumo-empty-sub">A teoria deste capítulo está a ser elaborada.</div></div>';
    return;
  }

  _mat4PM(cap, 'teoria'); // estudou a teoria deste capítulo

  // Acordeão partilhado: grupos colapsáveis + perguntas que abrem a resposta.
  dest.innerHTML = _teoriaAccordionHTML(cards, color, tagIcons);
}

/* ════════════════════════════════════════════════════════════════
   TAB PRATICAR - exercícios gerados com correção imediata
   Renderiza tudo no painel (sem páginas externas). Reutiliza os
   motores genéricos do chapter-engine: _capBuildQuizHTML,
   _capCheckAnswer, _capShowFeedback.
   ════════════════════════════════════════════════════════════════ */

// Gerador por capítulo (resolução lazy - os buildEx_m4cN são definidos no fim do ficheiro).
// Só os caps com gerador são "praticáveis".
function _mat4Gerador(cap) {
  if (cap === 1 && typeof buildEx_m4c1 === 'function') return buildEx_m4c1;
  if (cap === 2 && typeof buildEx_m4c2 === 'function') return buildEx_m4c2;
  if (cap === 3 && typeof buildEx_m4c3 === 'function') return buildEx_m4c3;
  if (cap === 4 && typeof buildEx_m4c4 === 'function') return buildEx_m4c4;
  if (cap === 5 && typeof buildEx_m4c5 === 'function') return buildEx_m4c5;
  if (cap === 6 && typeof buildEx_m4c6 === 'function') return buildEx_m4c6;
  return null;
}
var _mat4TemasCount = { 1: 3, 2: 3, 3: 3, 4: 3, 5: 3, 6: 3 };

// Estado da prática
var _mat4Prat = { cap: 1, st: 0, nivel: 'medio', score: { correct: 0, total: 0 }, answered: {}, exs: [] };
var _mat4TarefaAtiva=null, _mat4TarefaResp={};

function _mat4PratStorageKey(cap) { return 'edupt_mat4_cap' + cap; }

function _mat4SelCfg() {
  return { capMeta: _mat4CapMeta, capColors: _mat4CapColors, subtemas: _mat4Subtemas,
    subtemaTemas: _mat4SubtemaTemas, temasCount: _mat4TemasCount, gerador: _mat4Gerador };
}
function _mat4PratSel() {
  if (!_mat4Prat.sel) {
    _mat4Prat.sel = _selNew();
    if (_mat4Prat.cap) { _mat4Prat.sel.caps = [_mat4Prat.cap]; if (_mat4Prat.st) _mat4Prat.sel.stsByCap[_mat4Prat.cap] = [_mat4Prat.st]; }
  }
  return _mat4Prat.sel;
}

function mat4BuildPraticarNav() {
  var capRow = document.getElementById('mat4-praticar-cap-row');
  if (!capRow) return;
  var stRow = document.getElementById('mat4-praticar-st-row');
  if (stRow) stRow.style.display = 'none';
  capRow.innerHTML = _selBarsHTML(_mat4PratSel(), _mat4SelCfg(), 'mat4PratToggleCap', 'mat4PratToggleSt');
}

function mat4PratToggleCap(cap) {
  _selToggleCap(_mat4PratSel(), _mat4SelCfg(), cap);
  mat4BuildPraticarNav();
  mat4GerarExercicios();
}
function mat4PratToggleSt(cap, st) {
  _selToggleSt(_mat4PratSel(), cap, st);
  mat4BuildPraticarNav();
  mat4GerarExercicios();
}

function mat4PraticarSetNivel(nivel, btn) {
  _mat4Prat.nivel = nivel;
  var grp = document.getElementById('mat4-praticar-nivel');
  if (grp) grp.querySelectorAll('.gen-level-btn').forEach(function(b) { b.classList.remove('active'); });
  if (btn) btn.classList.add('active');
  mat4GerarExercicios();
}

// Mapa subtema → temas a usar no gerador (Cap 1 Números)
var _mat4SubtemaTemas = {
  1: { 1: ['1'], 2: ['2'], 3: ['3'] },  // Contar · CDU · Comparar/ordenar
  2: { 1: ['1'], 2: ['2'], 3: ['3'] },  // Somar c/ transporte · Subtrair c/ empréstimo · Problemas
  3: { 1: ['1'], 2: ['2'], 3: ['3'] },  // O que é multiplicar · Tabuada 2/5/10 · Tabuada 3/4
  4: { 1: ['1'], 2: ['2'], 3: ['3'] },  // Dobro/metade · Dividir · Problemas
  5: { 1: ['1'], 2: ['2'], 3: ['3'] },  // Figuras planas · Sólidos · Linhas/simetria
  6: { 1: ['1'], 2: ['2'], 3: ['3'] }   // Horas/calendário · Dinheiro/comprimentos · Tabelas/gráficos
};

function mat4GerarExercicios() {
  var dest = document.getElementById('mat4-praticar-content');
  if (!dest) return;
  var pares = _selPares(_mat4PratSel(), _mat4SelCfg());
  if (!pares.length) { dest.innerHTML = ''; return; }
  pares = pares.slice();
  for (var pz = pares.length - 1; pz > 0; pz--) { var rz = Math.floor(Math.random() * (pz + 1)); var tz = pares[pz]; pares[pz] = pares[rz]; pares[rz] = tz; }
  var cap = _mat4PratSel().caps[0] || (pares[0] && pares[0].cap) || 1;

  var QTD = 8;
  var tipos = ['mc', 'fill', 'mc', 'vf', 'fill', 'mc', 'fill', 'mc'];
  var geradas = [];
  for (var i = 0; i < QTD; i++) {
    var par = pares[i % pares.length];
    var gen = _mat4Gerador(par.cap);
    if (!gen) continue;
    var ex = gen(par.tema, tipos[i % tipos.length], _mat4Prat.nivel);
    if (ex) geradas.push(ex);
  }
  var temasPorCap = {};
  pares.forEach(function (pr) { (temasPorCap[pr.cap] = temasPorCap[pr.cap] || []).push(pr.tema); });
  var banco = [];
  if (typeof _mat4Banco !== "undefined") {
    Object.keys(temasPorCap).forEach(function (c) {
      if (_mat4Banco[c]) banco = banco.concat(_mat4Banco[c].filter(function (q) { return temasPorCap[c].indexOf(String(q.t)) !== -1; }));
    });
  }
  var exs = (typeof _mixBancoGeradas === "function") ? _mixBancoGeradas(banco, geradas, QTD, 2, _mat4Prat.nivel)
    : geradas.map(function (e, idx) { return Object.assign({}, e, { num: idx + 1 }); });
  _mat4Prat.exs = exs;
  _mat4Prat.answered = {};
  _mat4Prat.score = { correct: 0, total: 0 };

  // Score bar + questões (reutiliza motor genérico do chapter-engine)
  var scoreBar = '<div class="score-bar" id="mat4-prat-scorebar">'
    + '<div><div class="score-num" id="mat4-prat-score">0</div><div class="score-label">pontos</div></div>'
    + '<div><div class="score-num" id="mat4-prat-total">/ 0</div><div class="score-label">respondidas</div></div>'
    + '<div class="progress-track"><div class="progress-fill" id="mat4-prat-prog" style="width:0%"></div></div>'
    + '<button class="btn btn-ghost ml-auto" onclick="mat4GerarExercicios()">↺ Novas questões</button>'
    + (_mat4TarefaAtiva ? '<button class="btn" style="background:#2e7d52;color:#fff;border:none;border-radius:999px;padding:6px 14px;font-weight:800;cursor:pointer;margin-left:.4rem" onclick="mat4EntregarTarefa()">\u2713 Terminar e entregar</button>' : '')
    + '</div>';
  var quizHTML = (typeof _capBuildQuizHTML === 'function')
    ? _capBuildQuizHTML(exs, 'm8ex', 'mat4CheckEx')
    : '<p style="color:var(--ink4)">Motor de exercícios indisponível.</p>';
  dest.innerHTML = scoreBar + '<div id="mat4-atribuir" style="margin:.2rem 0 .8rem"></div>' + quizHTML;
  _mat4Prat.cap = cap;
  if (typeof Atribuir !== 'undefined' && Atribuir.montar) {
    var _cm = _mat4CapMeta.filter(function (m) { return m.n === cap; })[0] || {};
    var _selA = _mat4PratSel();
    var _stA = (_selA.caps.length === 1 && (_selA.stsByCap[cap] || []).length === 1) ? _selA.stsByCap[cap][0] : 0;
    var _sn = (_mat4Subtemas[cap] && _stA > 0) ? (_mat4Subtemas[cap][_stA - 1] || '') : '';
    Atribuir.montar('mat4-atribuir', { curso: 'mat4', cursoNome: 'Matemática 4.º', tema: String(cap), temaNome: (_cm.label || ('Cap. ' + cap)), sub: String(_stA || ''), subNome: _sn, tipo: 'quiz', nivel: _mat4Prat.nivel });
  }
}

function mat4CheckEx(qid, tipo, val, btn) {
  if (_mat4Prat.answered[qid]) return;
  if (typeof _capCheckAnswer !== 'function') return;
  var r = _capCheckAnswer(qid, tipo, val);
  if (!r) return; // resposta vazia
  _mat4Prat.answered[qid] = true;
  if (r.correct) _mat4Prat.score.correct++;
  _mat4Prat.score.total++; if(_mat4TarefaAtiva){_mat4TarefaResp[qid]=!!r.correct;}
  if (typeof _capShowFeedback === 'function') _capShowFeedback(qid, r.correct, r.expl, val, btn);
  var se = document.getElementById('mat4-prat-score'); if (se) se.textContent = _mat4Prat.score.correct;
  var te = document.getElementById('mat4-prat-total'); if (te) te.textContent = '/ ' + _mat4Prat.score.total;
  var pe = document.getElementById('mat4-prat-prog'); if (pe && _mat4Prat.exs.length) pe.style.width = (_mat4Prat.score.total / _mat4Prat.exs.length * 100) + '%';
  mat4SaveProgress(_mat4Prat.cap, r.correct);
}

// ═══ PROGRESSO (localStorage por capítulo) ═══
function mat4SaveProgress(cap, correct) {
  try {
    var key = _mat4PratStorageKey(cap);
    var d = JSON.parse(localStorage.getItem(key) || '{}');
    if (!d.sections) d.sections = {};
    if (!d.sections.praticar) d.sections.praticar = { correct: 0, total: 0 };
    d.sections.praticar.total++;
    if (correct) d.sections.praticar.correct++;
    d.lastActivity = Date.now();
    localStorage.setItem(key, JSON.stringify(d));
  } catch (e) {}
}

// Regista atividade no ProgressManager (XP + streak), com capId próprio do 4.º ano
// ('m4capN') para não misturar com o progresso do 7.º ano.
function _mat4PM(cap, tipo, opts) {
  if (typeof ProgressManager === 'undefined') return;
  try { ProgressManager.record('m4cap' + cap, tipo, opts || {}); } catch (e) {}
}

/* ════════════════════════════════════════════════════════════════
   HELPER: linha de capítulos para sub-modos (quiz, flashcards, teste)
   Só capítulos com gerador ficam ativos.
   ════════════════════════════════════════════════════════════════ */
function _mat4BuildCapRow(rowId, activeCap, onclickName) {
  var row = document.getElementById(rowId);
  if (!row) return;
  var h = '';
  _mat4CapMeta.forEach(function(m) {
    var hasGen = !!_mat4Gerador(m.n);
    var color = _mat4CapColors[m.n] || '#516860';
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

function _mat4SetActiveCapBtn(rowId, btn, cap) {
  var row = document.getElementById(rowId);
  if (row) row.querySelectorAll('.resumo-cap-btn').forEach(function(b){ b.classList.remove('active'); b.style.background=''; b.style.borderColor=''; b.style.color=''; });
  if (btn) { var color = _mat4CapColors[cap] || '#516860'; btn.classList.add('active'); btn.style.background=color; btn.style.borderColor=color; btn.style.color='#fff'; }
}

// Converte uma questão de resposta aberta em escolha múltipla. Delega no
// helper partilhado _fillParaMc (shared.js), com distratores pedagógicos.
function _mat4FillToMc(ex) {
  return (typeof _fillParaMc === 'function') ? _fillParaMc(ex) : null;
}

// Gera uma questão de escolha múltipla para um capítulo (usada por quiz).
function _mat4BuildMcQuestion(cap) {
  var gen = _mat4Gerador(cap);
  if (!gen) return null;
  var nTemas = _mat4TemasCount[cap] || 1;
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
    var mc = _mat4FillToMc(fillEx);
    if (mc && mc.opcoes && mc.opcoes.length >= 2) return mc;
  }
  return null;
}

/* ════════════════════════════════════════════════════════════════
   SUB-MODO: QUIZ RELÂMPAGO (3 vidas, streak)
   ════════════════════════════════════════════════════════════════ */
var _mat4Quiz = { cap: 1, sel: null, lives: 3, streak: 0, maxStreak: 0, score: 0, total: 0, answered: false, current: null };

function _mat4QuizSel() { if (!_mat4Quiz.sel) _mat4Quiz.sel = _selNew(); return _mat4Quiz.sel; }

function mat4QuizBuildNav() {
  var row = document.getElementById('mat4-quiz-cap-row');
  if (row) row.innerHTML = _selBarsHTML(_mat4QuizSel(), _mat4SelCfg(), 'mat4QuizToggleCap', 'mat4QuizToggleSt');
  var st = document.getElementById('mat4-quiz-st-row'); if (st) st.style.display = 'none';
  mat4QuizStart();
}

function mat4QuizToggleCap(cap) {
  _selToggleCap(_mat4QuizSel(), _mat4SelCfg(), cap);
  mat4QuizBuildNav();
}
function mat4QuizToggleSt(cap, st) {
  _selToggleSt(_mat4QuizSel(), cap, st);
  mat4QuizBuildNav();
}

function mat4QuizStart() {
  _mat4Quiz.lives = 3; _mat4Quiz.streak = 0; _mat4Quiz.maxStreak = 0;
  _mat4Quiz.score = 0; _mat4Quiz.total = 0; _mat4Quiz.answered = false;
  mat4QuizNext();
}

function mat4QuizNext() {
  var app = document.getElementById('mat4-quiz-app');
  if (!app) return;
  if (_mat4Quiz.lives <= 0) { mat4QuizGameOver(app); return; }
  var _qpares = _selPares(_mat4QuizSel(), _mat4SelCfg());
  _mat4Quiz.cap = (_mat4QuizSel().caps[0]) || (_qpares[0] && _qpares[0].cap) || 1;
  var ex = _selMcQuestion(_mat4QuizSel(), _mat4SelCfg(), _mat4FillToMc);
  if (!ex) { app.innerHTML = '<p style="color:var(--ink4);padding:2rem;text-align:center">Sem questões disponíveis para esta seleção.</p>'; return; }
  _mat4Quiz.current = ex; _mat4Quiz.answered = false;
  var lives = '';
  for (var i = 0; i < 3; i++) lives += (i < _mat4Quiz.lives ? '❤️' : '🖤') + ' ';
  var opts = '';
  ex.opcoes.forEach(function(opt, idx) {
    opts += '<button class="qg-opt-btn" id="mat4qopt-' + idx + '" onclick="mat4QuizAnswer(' + idx + ')">' + opt + '</button>';
  });
  app.innerHTML =
    '<div class="qg-hub-bar">' +
      '<div class="qg-hub-lives">' + lives + '</div>' +
      '<div class="qg-hub-streak">' + (_mat4Quiz.streak > 1 ? '🔥 ' + _mat4Quiz.streak + ' seguidas' : '') + '</div>' +
      '<div class="qg-hub-score">✓ ' + _mat4Quiz.score + ' / ' + _mat4Quiz.total + '</div>' +
    '</div>' +
    '<div class="qg-hub-question">' + ex.enun + '</div>' +
    '<div class="qg-hub-opts">' + opts + '</div>' +
    '<div class="qg-hub-feedback" id="mat4-quiz-fb" style="min-height:2.5rem"></div>';
}

function mat4QuizAnswer(idx) {
  if (_mat4Quiz.answered) return;
  _mat4Quiz.answered = true;
  var ex = _mat4Quiz.current; if (!ex) return;
  var correct = String(ex.opcoes[idx]) === String(ex.resposta);
  _mat4Quiz.total++;
  document.querySelectorAll('.qg-opt-btn').forEach(function(b, i) {
    b.disabled = true;
    if (String(ex.opcoes[i]) === String(ex.resposta)) { b.style.background = '#4caf50'; b.style.color = '#fff'; }
  });
  var clicked = document.getElementById('mat4qopt-' + idx);
  if (clicked && !correct) { clicked.style.background = '#f44336'; clicked.style.color = '#fff'; }
  var fb = document.getElementById('mat4-quiz-fb');
  if (correct) {
    _mat4Quiz.score++; _mat4Quiz.streak++;
    if (_mat4Quiz.streak > _mat4Quiz.maxStreak) _mat4Quiz.maxStreak = _mat4Quiz.streak;
    if (fb) fb.innerHTML = '<span style="color:var(--correct,#3ecf8e);font-weight:700">✓ Certo!</span> ' + (ex.expl || '');
  } else {
    _mat4Quiz.lives--; _mat4Quiz.streak = 0;
    if (fb) fb.innerHTML = '<span style="color:var(--wrong,#ff6b6b);font-weight:700">✗ Errado.</span> ' + (ex.expl || '');
  }
  mat4SaveProgress(_mat4Quiz.cap, correct);
  setTimeout(function(){ mat4QuizNext(); }, 1400);
}

function mat4QuizGameOver(app) {
  var pct = _mat4Quiz.total > 0 ? Math.round(_mat4Quiz.score / _mat4Quiz.total * 100) : 0;
  _mat4PM(_mat4Quiz.cap, 'quiz', { pontuacao: _mat4Quiz.score, total: _mat4Quiz.total });
  var emoji = pct >= 90 ? '🏆' : pct >= 70 ? '⭐' : pct >= 50 ? '👍' : '📚';
  app.innerHTML =
    '<div style="text-align:center;padding:2.5rem 1rem">' +
      '<div style="font-size:3.5rem;margin-bottom:.75rem">' + emoji + '</div>' +
      '<div style="font-family:\'Cormorant Garamond\',serif;font-size:2rem;font-weight:900;color:var(--ink)">' + pct + '%</div>' +
      '<div style="color:var(--ink3);margin:.5rem 0 1.5rem">' + _mat4Quiz.score + ' certas em ' + _mat4Quiz.total + ' questões</div>' +
      '<div style="font-size:1.5rem;margin-bottom:1.5rem">Melhor sequência: ' + (_mat4Quiz.maxStreak || 0) + ' 🔥</div>' +
      '<button class="btn btn-primary" onclick="mat4QuizStart()">↺ Jogar novamente</button>' +
    '</div>';
}

/* ════════════════════════════════════════════════════════════════
   SUB-MODO: FLASHCARDS
   ════════════════════════════════════════════════════════════════ */
var _mat4Fc = { cap: 1, idx: 0, flipped: false, cards: [] };

function mat4FcBuildNav() {
  // primeiro capítulo com cartões
  if (!(_mat4Cards[_mat4Fc.cap] && _mat4Cards[_mat4Fc.cap].length)) {
    for (var c = 1; c <= _mat4CapMeta.length; c++) { if (_mat4Cards[c] && _mat4Cards[c].length) { _mat4Fc.cap = c; break; } }
  }
  // linha de capítulos: só os que têm cartões
  var row = document.getElementById('mat4-fc-cap-row');
  if (row) {
    var h = '';
    _mat4CapMeta.forEach(function(m) {
      var has = !!(_mat4Cards[m.n] && _mat4Cards[m.n].length);
      var color = _mat4CapColors[m.n] || '#516860';
      var isActive = _mat4Fc.cap === m.n;
      var activeStyle = isActive ? 'background:' + color + ';border-color:' + color + ';color:#fff' : '';
      var disabled = has ? '' : 'opacity:.45;cursor:not-allowed';
      var onclick = has ? ('mat4FcSelectCap(' + m.n + ',this)') : '';
      var title = has ? '' : ' title="Em preparação"';
      h += '<button class="resumo-cap-btn' + (isActive ? ' active' : '') + '" onclick="' + onclick + '" style="' + activeStyle + ';' + disabled + '"' + title + '>'
         + '<span class="resumo-cap-icon">' + m.icon + '</span>' + m.label + (has ? '' : ' ·') + '</button>';
    });
    row.innerHTML = h;
  }
  mat4FcSelectCap(_mat4Fc.cap, null);
}

function mat4FcSelectCap(cap, btn) {
  if (!(_mat4Cards[cap] && _mat4Cards[cap].length)) return;
  if (btn) _mat4SetActiveCapBtn('mat4-fc-cap-row', btn, cap);
  _mat4Fc.cap = cap;
  _mat4Fc.cards = _mat4Cards[cap].slice();
  _mat4Fc.idx = 0; _mat4Fc.flipped = false;
  _mat4PM(cap, 'flashcard');
  mat4FcRender();
}

function mat4FcRender() {
  var app = document.getElementById('mat4-fc-app');
  if (!app) return;
  var cards = _mat4Fc.cards;
  if (!cards.length) { app.innerHTML = '<p style="color:var(--ink4);padding:2rem;text-align:center">Sem flashcards para este capítulo.</p>'; return; }
  var card = cards[_mat4Fc.idx];
  var color = _mat4CapColors[_mat4Fc.cap] || '#516860';
  var pct = Math.round((_mat4Fc.idx + 1) / cards.length * 100);
  app.innerHTML =
    '<div class="card card-narrow">' +
      '<div class="flex items-center justify-between mb-3">' +
        '<span class="fc2-tag-pill" style="background:' + color + ';color:#fff">' + (card.tag || '') + '</span>' +
        '<span class="fc-counter">' + (_mat4Fc.idx + 1) + ' / ' + cards.length + '</span>' +
      '</div>' +
      '<div class="fc2-prog-track"><div class="fc2-prog-fill" style="width:' + pct + '%;background:' + color + '"></div></div>' +
      '<div onclick="mat4FcFlip()" class="fc2-card-inner" style="cursor:pointer;min-height:140px">' +
        '<div>' +
          '<p style="font-size:1.05rem;font-weight:600;color:var(--ink);line-height:1.4">' + (card.q || '') + '</p>' +
          '<p style="font-size:.9rem;color:' + color + ';margin-top:.75rem;line-height:1.5;display:' + (_mat4Fc.flipped ? 'block' : 'none') + '">' + (card.a || '') + '</p>' +
          '<p style="font-size:.75rem;color:var(--ink4);margin-top:.5rem">' + (_mat4Fc.flipped ? '' : 'Carrega para ver a resposta') + '</p>' +
        '</div>' +
      '</div>' +
      '<div class="flex flex-wrap gap-3 justify-center mt-5">' +
        '<button class="btn btn-ghost" onclick="mat4FcPrev()">← Anterior</button>' +
        '<button class="btn btn-primary" onclick="mat4FcFlip()">↕ Virar</button>' +
        '<button class="btn btn-ghost" onclick="mat4FcNext()">Seguinte →</button>' +
      '</div>' +
    '</div>';
}

function mat4FcFlip() { _mat4Fc.flipped = !_mat4Fc.flipped; mat4FcRender(); }
function mat4FcNext() { _mat4Fc.idx = (_mat4Fc.idx + 1) % (_mat4Fc.cards.length || 1); _mat4Fc.flipped = false; mat4FcRender(); }
function mat4FcPrev() { _mat4Fc.idx = (_mat4Fc.idx - 1 + (_mat4Fc.cards.length || 1)) % (_mat4Fc.cards.length || 1); _mat4Fc.flipped = false; mat4FcRender(); }

/* ════════════════════════════════════════════════════════════════
   SUB-MODO: TESTE CRONOMETRADO
   ════════════════════════════════════════════════════════════════ */
var _mat4Teste = { cap: 1, sel: null, nivel: 'medio', qtd: 10, tempo: 600, exs: [], answered: {}, score: { correct: 0, total: 0 }, timer: null, restante: 0 };

function _mat4TesteSel() { if (!_mat4Teste.sel) _mat4Teste.sel = _selNew(); return _mat4Teste.sel; }

function mat4TesteBuildNav() {
  var row = document.getElementById('mat4-teste-cap-row');
  if (row) row.innerHTML = _selBarsHTML(_mat4TesteSel(), _mat4SelCfg(), 'mat4TesteToggleCap', 'mat4TesteToggleSt');
  var st = document.getElementById('mat4-teste-st-row'); if (st) st.style.display = 'none';
  mat4TesteRenderConfig();
}

function mat4TesteToggleCap(cap) {
  _selToggleCap(_mat4TesteSel(), _mat4SelCfg(), cap);
  mat4TesteBuildNav();
}
function mat4TesteToggleSt(cap, st) {
  _selToggleSt(_mat4TesteSel(), cap, st);
  mat4TesteBuildNav();
}

function mat4TesteRenderConfig() {
  var app = document.getElementById('mat4-teste-app');
  if (!app) return;
  if (_mat4Teste.timer) { clearInterval(_mat4Teste.timer); _mat4Teste.timer = null; }
  app.innerHTML =
    '<div class="card">' +
      '<div class="card-title">Configurar teste</div>' +
      '<div class="flex flex-wrap gap-6 items-end">' +
        '<div><div class="label-small">Nível</div>' +
          '<div class="gen-level-group" id="mat4-teste-nivel">' +
            '<button class="gen-level-btn' + (_mat4Teste.nivel==='facil'?' active':'') + '" onclick="mat4TesteSetNivel(\'facil\',this)"><span class="status-dot status-dot--easy"></span> Fácil</button>' +
            '<button class="gen-level-btn' + (_mat4Teste.nivel==='medio'?' active':'') + '" onclick="mat4TesteSetNivel(\'medio\',this)"><span class="status-dot status-dot--medium"></span> Médio</button>' +
            '<button class="gen-level-btn' + (_mat4Teste.nivel==='dificil'?' active':'') + '" onclick="mat4TesteSetNivel(\'dificil\',this)"><span class="status-dot status-dot--hard"></span> Difícil</button>' +
          '</div></div>' +
        '<div><div class="label-small">N.º questões</div>' +
          '<select class="ai-select" id="mat4-teste-qtd"><option value="10">10</option><option value="15">15</option><option value="20">20</option></select></div>' +
        '<div><div class="label-small">Tempo</div>' +
          '<select class="ai-select" id="mat4-teste-tempo"><option value="600">10 min</option><option value="900">15 min</option><option value="1800">30 min</option></select></div>' +
        '<button class="btn btn-primary" onclick="mat4TesteStart()">▶ Iniciar teste</button>' +
      '</div>' +
    '</div>';
}

function mat4TesteSetNivel(nivel, btn) {
  _mat4Teste.nivel = nivel;
  var grp = document.getElementById('mat4-teste-nivel');
  if (grp) grp.querySelectorAll('.gen-level-btn').forEach(function(b){ b.classList.remove('active'); });
  if (btn) btn.classList.add('active');
}

function mat4TesteStart() {
  var pares = _selPares(_mat4TesteSel(), _mat4SelCfg());
  if (!pares.length) return;
  pares = pares.slice();
  for (var sp = pares.length - 1; sp > 0; sp--) { var rsp = Math.floor(Math.random() * (sp + 1)); var tsp = pares[sp]; pares[sp] = pares[rsp]; pares[rsp] = tsp; }
  _mat4Teste.cap = (_mat4TesteSel().caps[0]) || (pares[0] && pares[0].cap) || 1;
  var qtdEl = document.getElementById('mat4-teste-qtd'), tempoEl = document.getElementById('mat4-teste-tempo');
  _mat4Teste.qtd = qtdEl ? parseInt(qtdEl.value) : 10;
  _mat4Teste.tempo = tempoEl ? parseInt(tempoEl.value) : 600;
  var tipos = ['mc', 'fill', 'mc', 'vf', 'fill'];
  var exs = [];
  for (var i = 0; i < _mat4Teste.qtd; i++) {
    var par = pares[i % pares.length];
    var gen = _mat4Gerador(par.cap); if (!gen) continue;
    var ex = gen(par.tema, tipos[i % tipos.length], _mat4Teste.nivel);
    if (ex) exs.push(Object.assign({}, ex, { num: i + 1 }));
  }
  _mat4Teste.exs = exs; _mat4Teste.answered = {}; _mat4Teste.score = { correct: 0, total: 0 };
  _mat4Teste.restante = _mat4Teste.tempo;

  var app = document.getElementById('mat4-teste-app');
  var quizHTML = (typeof _capBuildQuizHTML === 'function') ? _capBuildQuizHTML(exs, 'm8teste', 'mat4TesteCheck') : '';
  app.innerHTML =
    '<div class="exam-progress-bar" style="position:sticky;top:0;z-index:5;background:var(--surface);padding:.75rem;border-radius:12px;display:flex;align-items:center;gap:1rem;flex-wrap:wrap">' +
      '<div style="font-family:\'Cormorant Garamond\',serif;font-size:1.8rem;font-weight:900" id="mat4-teste-timer">' + _mat4FmtTime(_mat4Teste.restante) + '</div>' +
      '<div style="font-size:.78rem;color:var(--ink3)">Respondidas: <span id="mat4-teste-answered">0 / ' + _mat4Teste.qtd + '</span></div>' +
      '<button class="btn btn-ghost ml-auto" onclick="mat4TesteFinish()">⏹ Terminar</button>' +
    '</div>' +
    '<div id="mat4-teste-questions" style="margin-top:1rem">' + quizHTML + '</div>';

  _mat4Teste.timer = setInterval(function() {
    _mat4Teste.restante--;
    var t = document.getElementById('mat4-teste-timer');
    if (t) t.textContent = _mat4FmtTime(_mat4Teste.restante);
    if (_mat4Teste.restante <= 0) mat4TesteFinish();
  }, 1000);
}

function _mat4FmtTime(s) {
  var m = Math.floor(s / 60), sec = s % 60;
  return (m < 10 ? '0' : '') + m + ':' + (sec < 10 ? '0' : '') + sec;
}

function mat4TesteCheck(qid, tipo, val, btn) {
  if (_mat4Teste.answered[qid]) return;
  if (typeof _capCheckAnswer !== 'function') return;
  var r = _capCheckAnswer(qid, tipo, val);
  if (!r) return;
  _mat4Teste.answered[qid] = true;
  if (r.correct) _mat4Teste.score.correct++;
  _mat4Teste.score.total++;
  if (typeof _capShowFeedback === 'function') _capShowFeedback(qid, r.correct, r.expl, val, btn);
  var a = document.getElementById('mat4-teste-answered');
  if (a) a.textContent = _mat4Teste.score.total + ' / ' + _mat4Teste.qtd;
  mat4SaveProgress(_mat4Teste.cap, r.correct);
  if (_mat4Teste.score.total >= _mat4Teste.qtd) setTimeout(mat4TesteFinish, 600);
}

function mat4TesteFinish() {
  if (_mat4Teste.timer) { clearInterval(_mat4Teste.timer); _mat4Teste.timer = null; }
  var app = document.getElementById('mat4-teste-app');
  if (!app) return;
  var total = _mat4Teste.qtd;
  var correct = _mat4Teste.score.correct;
  var pct = total > 0 ? Math.round(correct / total * 100) : 0;
  _mat4PM(_mat4Teste.cap, 'quiz', { pontuacao: correct, total: total });
  var nota = Math.round(correct / total * 20 * 10) / 10;
  var emoji = pct >= 90 ? '🏆' : pct >= 70 ? '⭐' : pct >= 50 ? '👍' : '📚';
  app.innerHTML =
    '<div style="text-align:center;padding:2.5rem 1rem">' +
      '<div style="font-size:3.5rem;margin-bottom:.75rem">' + emoji + '</div>' +
      '<div style="font-family:\'Cormorant Garamond\',serif;font-size:2.2rem;font-weight:900;color:var(--ink)">' + nota + ' / 20</div>' +
      '<div style="color:var(--ink3);margin:.5rem 0 1.5rem">' + correct + ' certas em ' + total + ' questões (' + pct + '%)</div>' +
      '<button class="btn btn-primary" onclick="mat4TesteRenderConfig()">↺ Novo teste</button>' +
    '</div>';
}

/* ════════════════════════════════════════════════════════════════
   SUB-MODO: JOGOS (reutiliza o motor genérico _j24AutoInit)
   ════════════════════════════════════════════════════════════════ */
var _mat4JogosInited = false;
function mat4JogosInit() {
  (function(){ var pj=document.getElementById('mat4p-jogos'); if(pj && !document.getElementById('mat4-jogos-atr')){ var d=document.createElement('div'); d.id='mat4-jogos-atr'; d.style.margin='0 0 .8rem'; if(pj.firstChild) pj.insertBefore(d,pj.firstChild); else pj.appendChild(d); } if(typeof Atribuir!=='undefined'&&Atribuir.montar) Atribuir.montar('mat4-jogos-atr',{curso:'mat4',cursoNome:'Matemática 4.º',tipo:'jogo',nivel:'',caps:_mat4CapMeta.map(function(mm){return {n:mm.n,label:mm.label};})}); })();
  _mat4PM(_mat4Prat.cap || 1, 'jogo');
  if (_mat4JogosInited) return;
  if (typeof _j24AutoInit === 'function') {
    // Regista o curso nos jogos (matéria correta + filtro capítulo/subtema).
    if (typeof _gRegisterGameCourse === 'function') {
      _gRegisterGameCourse('mat4-jogos-app', {
        capMeta: _mat4CapMeta,
        subtemas: _mat4Subtemas,
        subtemaTemas: (typeof _mat4SubtemaTemas !== 'undefined') ? _mat4SubtemaTemas : null,
        temasCount: _mat4TemasCount,
        gerador: _mat4Gerador,
        banco: (typeof _mat4Banco !== 'undefined') ? _mat4Banco : null,
        qFor: function (level, sel) { return _jogoQForCourse(this, level, sel); }
      });
    }
    _j24AutoInit('mat4-jogos-app', 'medio');
    _mat4JogosInited = true;
  } else {
    var app = document.getElementById('mat4-jogos-app');
    if (app) app.innerHTML = '<p style="color:var(--ink4);padding:2rem;text-align:center">Jogos indisponíveis (motor não carregado).</p>';
  }
}

/* ════════════════════════════════════════════════════════════════
   TAB PROGRESSO
   Lê edupt_mat4_capN (gravado por mat4SaveProgress). Mostra resumo
   global, stats, barras por capítulo, Relatório PDF e Limpar.
   ════════════════════════════════════════════════════════════════ */
function _mat4ProgGetCaps() {
  var out = [];
  var nCaps = _mat4CapMeta.length;
  for (var cap = 1; cap <= nCaps; cap++) {
    var correct = 0, total = 0;
    try {
      var d = JSON.parse(localStorage.getItem('edupt_mat4_cap' + cap) || '{}');
      if (d.sections) Object.keys(d.sections).forEach(function(k) {
        correct += (d.sections[k].correct || 0);
        total += (d.sections[k].total || 0);
      });
    } catch (e) {}
    out.push({ cap: cap, correct: correct, total: total, pct: total > 0 ? Math.round(correct / total * 100) : 0 });
  }
  return out;
}

function mat4RenderProgresso() {
  var el = document.getElementById('mat4-progresso-content');
  if (!el) return;
  var caps = _mat4ProgGetCaps();
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
     + '<button onclick="mat4ProgDownloadPDF()" style="font-family:inherit;font-size:.82rem;font-weight:700;color:#8b3a35;background:none;border:none;cursor:pointer;text-decoration:underline;padding:0">Guarda o relatório PDF</button> para o manteres.</span>'
     + '</div>';

  // Resumo global (gradiente terracota do 4.º ano)
  h += '<div style="background:var(--m4c1-base);border:1.5px solid var(--m4c1-mid);border-radius:16px;padding:1.1rem 1.25rem;margin-bottom:1.25rem;display:flex;align-items:center;gap:1rem;flex-wrap:wrap">'
     +   '<div style="width:52px;height:52px;border-radius:50%;background:var(--m4c1-mid);display:flex;align-items:center;justify-content:center;flex-shrink:0"><i class="ph ' + icon + '" style="font-size:1.4rem;color:#fff"></i></div>'
     +   '<div style="flex:1;min-width:180px">'
     +     '<div style="font-family:\'Cormorant Garamond\',serif;font-size:1.6rem;font-weight:900;color:var(--ink);line-height:1">' + (totalT > 0 ? globalPct + '<span style="font-size:1rem">%</span>' : '-') + '</div>'
     +     '<div style="font-size:.82rem;color:var(--ink2);margin-top:3px">' + msg + '</div>'
     +   '</div>'
     +   '<button class="btn btn-ghost" onclick="mat4ProgDownloadPDF()" style="font-size:.78rem;padding:7px 14px;display:inline-flex;align-items:center;gap:5px"><i class="ph ph-file-text"></i>Relatório PDF</button>'
     + '</div>';

  // XP + streak do ProgressManager (apenas dos capítulos do 4.º ano)
  var pmXp = 0, pmStreak = 0;
  if (typeof ProgressManager !== 'undefined') {
    try {
      var sum = ProgressManager.getSummary();
      pmStreak = sum.streak || 0;
      if (sum.caps) Object.keys(sum.caps).forEach(function(k) { if (k.indexOf('m4cap') === 0) pmXp += (sum.caps[k].xp || 0); });
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
    var m = _mat4CapMeta[c.cap - 1];
    var color = _mat4CapColors[c.cap] || '#516860';
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
      var mp = _mat4CapMeta[pior.cap - 1];
      var colorp = _mat4CapColors[pior.cap] || '#516860';
      h += '<div class="card mt-4" style="border-color:' + colorp + '">'
        + '<div class="card-title" style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:.5rem">'
        + '<span>🎯 Treino Direcionado</span></div>'
        + '<div style="font-size:.85rem;color:var(--ink2);margin:.3rem 0 .8rem">O capítulo onde tens mais a melhorar é <strong>' + mp.label + '</strong> (' + pior.pct + '%). Pratica mais um pouco para subir a tua taxa!</div>'
        + '<button class="btn btn-primary" onclick="mat4TreinarCap(' + pior.cap + ')" style="display:inline-flex;align-items:center;gap:6px"><i class="ph ph-target"></i> Treinar ' + mp.label + '</button>'
        + '</div>';
    }
  }

  // Última atualização
  h += '<div style="font-size:.72rem;color:var(--ink4);margin-top:1rem">Última atualização: ' + new Date().toLocaleString('pt-PT', { hour: '2-digit', minute: '2-digit', day: '2-digit', month: '2-digit' }) + '</div>';

  // Limpar
  h += '<div class="mt-4 flex flex-wrap gap-3"><button class="btn btn-ghost" onclick="mat4ProgReset()"><i class="ph ph-trash"></i> Limpar progresso</button></div>';

  el.innerHTML = h;
}

// Abre a tab Exercícios da Praticar já no capítulo indicado (treino direcionado).
function mat4TreinarCap(cap) {
  _mat4Prat.cap = cap;
  _mat4Prat.st = 0;
  _mat4Prat.sel = { caps: [cap], stsByCap: {} };
  mat4SwitchTab('exercicios', null);
}

function mat4ProgReset() {
  if (typeof window !== 'undefined' && window.confirm && !window.confirm('Limpar todo o progresso do 4.º ano? Esta ação não pode ser desfeita.')) return;
  for (var cap = 1; cap <= _mat4CapMeta.length; cap++) { try { localStorage.removeItem('edupt_mat4_cap' + cap); } catch (e) {} }
  // Remove só os capítulos do 4.º ano (m4cap*) do ProgressManager, preservando os outros anos.
  try {
    var raw = localStorage.getItem('edupt_progress_v2');
    if (raw) {
      var d = JSON.parse(raw);
      if (d.caps) { Object.keys(d.caps).forEach(function(k) { if (k.indexOf('m4cap') === 0) delete d.caps[k]; }); }
      localStorage.setItem('edupt_progress_v2', JSON.stringify(d));
    }
  } catch (e) {}
  mat4RenderProgresso();
  if (typeof eduToast === 'function') eduToast('Progresso do 4.º ano limpo.', 'ok');
}

function mat4ProgDownloadPDF() {
  var caps = _mat4ProgGetCaps();
  var totalC = 0, totalT = 0;
  caps.forEach(function(c) { totalC += c.correct; totalT += c.total; });
  var globalPct = totalT > 0 ? Math.round(totalC / totalT * 100) : 0;
  var rows = caps.map(function(c) {
    var m = _mat4CapMeta[c.cap - 1];
    return '<tr><td style="padding:6px 10px;border-bottom:1px solid #eee">' + m.label + '</td>'
      + '<td style="padding:6px 10px;border-bottom:1px solid #eee;text-align:center">' + (c.total > 0 ? c.correct + ' / ' + c.total : '-') + '</td>'
      + '<td style="padding:6px 10px;border-bottom:1px solid #eee;text-align:center">' + (c.total > 0 ? c.pct + '%' : '-') + '</td></tr>';
  }).join('');
  var html = '<div style="font-family:Arial,sans-serif;max-width:680px;margin:0 auto;padding:24px">'
    + '<h1 style="font-size:20px;margin:0 0 4px">Relatório de Progresso · Matemática 4.º Ano</h1>'
    + '<div style="color:#666;font-size:13px;margin-bottom:16px">3ponto14 · ' + new Date().toLocaleString('pt-PT', { day: '2-digit', month: '2-digit', year: 'numeric' }) + '</div>'
    + eduAlunoLinhaPDF()
    + '<div style="background:#eef2f0;border:1px solid #9ab5aa;border-radius:8px;padding:12px 16px;margin-bottom:16px">'
    + '<strong>Taxa global:</strong> ' + (totalT > 0 ? globalPct + '%' : '-') + ' &nbsp;·&nbsp; ' + totalC + ' certas em ' + totalT + ' questões.</div>'
    + '<table style="width:100%;border-collapse:collapse;font-size:14px"><thead><tr style="background:#516860;color:#fff">'
    + '<th style="padding:8px 10px;text-align:left">Capítulo</th><th style="padding:8px 10px">Certas</th><th style="padding:8px 10px">%</th></tr></thead>'
    + '<tbody>' + rows + '</tbody></table></div>';
  if (typeof htmlToPdfDownload === 'function') htmlToPdfDownload(html, 'progresso-mat4.pdf');
  else if (typeof eduToast === 'function') eduToast('Geração de PDF indisponível.', 'warn');
}

/* ════════════════════════════════════════════════════════════════
   TAB FICHAS - gerador rico (multi-capítulo), igual ao 7.º ano.
   Tipos: resumo teórico, exercícios, teste, minitestes, soluções.
   Seleção de vários capítulos; nível; nº de exercícios; PDF ou HTML.
   ════════════════════════════════════════════════════════════════ */
var _mat4gf = {
  caps: {},
  sts: {},             // { cap: { stIdx: true } } subtemas por capítulo; vazio = todos            // { cap: true } selecionados
  tipos: { resumo: true, exercicios: true, teste: true, minitestes: false, solucoes: true },
  dif: 'facil',
  qty: 10
};

// Constrói a lista de capítulos selecionáveis (só os com gerador).
function mat4FichasBuildNav() {
  if(typeof Atribuir!=='undefined'&&Atribuir.fixo) Atribuir.fixo('mat4-fichas-atr','mat4AtribuirFicha');
  var el = document.getElementById('mat4-fichas-caps');
  if (!el) return;
  // por defeito, seleciona o primeiro capítulo com gerador
  var temAlgum = false;
  for (var k in _mat4gf.caps) { if (_mat4gf.caps[k]) { temAlgum = true; break; } }
  var h = '';
  _mat4CapMeta.forEach(function(m) {
    var hasGen = !!_mat4Gerador(m.n);
    if (!hasGen) return;
    if (!temAlgum) { _mat4gf.caps[m.n] = true; temAlgum = true; } // 1.º disponível
    var sel = !!_mat4gf.caps[m.n];
    var color = _mat4CapColors[m.n] || '#516860';
    var style = sel ? 'background:' + color + ';border-color:' + color + ';color:#fff' : '';
    h += '<button class="gf-cap-btn' + (sel ? ' active' : '') + '" data-cap="' + m.n + '" onclick="mat4gfToggleCap(' + m.n + ',this)" style="' + style + '">' + m.icon + ' ' + m.label + '</button>';
    // subtemas do capítulo selecionado (gerar ficha só de um subtema)
    if (sel) {
      var _sts = (typeof _mat4Subtemas !== 'undefined' && _mat4Subtemas[m.n]) ? _mat4Subtemas[m.n] : [];
      if (_sts.length) {
        var _esc = _mat4gf.sts[m.n] || {};
        var _alg = _mat4gfStsSel(m.n) !== null;
        h += '<div style="margin:.15rem 0 .55rem 1.1rem;display:flex;flex-wrap:wrap;gap:.3rem;align-items:center">';
        h += '<span style="font-size:.66rem;font-weight:800;color:var(--ink4);text-transform:uppercase;letter-spacing:.06em;margin-right:.2rem">Subtemas:</span>';
        h += '<button onclick="mat4gfToggleSt(' + m.n + ',0,this)" style="' + _mat4gfStStyle(!_alg, color) + '">Todos</button>';
        _sts.forEach(function (st, i) {
          var on = !!_esc[i + 1];
          h += '<button onclick="mat4gfToggleSt(' + m.n + ',' + (i + 1) + ',this)" style="' + _mat4gfStStyle(on, color) + '">' + st + '</button>';
        });
        h += '</div>';
      }
    }
  });
  el.innerHTML = h;
}

// Subtemas (índices 1..n) escolhidos para um capítulo; null = todos.
function _mat4gfStsSel(cap) {
  var sel = _mat4gf.sts[cap];
  if (!sel) return null;
  var out = [];
  Object.keys(sel).forEach(function (i) { if (sel[i]) out.push(parseInt(i)); });
  return out.length ? out : null;
}

// Chaves de tema correspondentes aos subtemas escolhidos; null = todos.
function _mat4gfTemasSel(cap) {
  var sts = _mat4gfStsSel(cap);
  if (!sts) return null;
  var mapa = (typeof _mat4SubtemaTemas !== 'undefined' && _mat4SubtemaTemas[cap]) ? _mat4SubtemaTemas[cap] : {};
  var temas = [];
  sts.forEach(function (i) { (mapa[i] || [String(i)]).forEach(function (t) { if (temas.indexOf(t) === -1) temas.push(t); }); });
  return temas.length ? temas : null;
}

function _mat4gfStStyle(on, color) {
  return 'border-radius:999px;padding:3px 11px;font-size:.7rem;font-weight:700;cursor:pointer;font-family:Montserrat,sans-serif;transition:all .15s;'
    + (on ? 'background:' + color + ';border:1.5px solid ' + color + ';color:#fff'
          : 'background:var(--white);border:1.5px solid var(--border);color:var(--ink3)');
}

function mat4gfToggleCap(cap, btn) {
  _mat4gf.caps[cap] = !_mat4gf.caps[cap];
  if (!_mat4gf.caps[cap]) delete _mat4gf.sts[cap]; // desmarcar cap limpa os subtemas
  mat4FichasBuildNav(); // re-render para mostrar/esconder a linha de subtemas
}

// idx 0 = «Todos» (limpa a seleção); idx 1..n alterna o subtema.
function mat4gfToggleSt(cap, idx, btn) {
  if (idx === 0) { delete _mat4gf.sts[cap]; }
  else {
    if (!_mat4gf.sts[cap]) _mat4gf.sts[cap] = {};
    _mat4gf.sts[cap][idx] = !_mat4gf.sts[cap][idx];
    if (_mat4gfStsSel(cap) === null) delete _mat4gf.sts[cap]; // tudo desmarcado = todos
  }
  mat4FichasBuildNav();
}

function mat4gfToggleType(btn) {
  var t = btn.getAttribute('data-type');
  _mat4gf.tipos[t] = !_mat4gf.tipos[t];
  btn.classList.toggle('active', _mat4gf.tipos[t]);
  var tick = btn.querySelector('.gf-tick'); if (tick) tick.textContent = _mat4gf.tipos[t] ? '✓' : '';
}

function mat4gfSetDif(btn) {
  _mat4gf.dif = btn.getAttribute('data-dif');
  var grp = document.getElementById('mat4-fichas-dif');
  if (grp) grp.querySelectorAll('.gf-dif-btn').forEach(function(b){ b.classList.remove('active'); });
  btn.classList.add('active');
}

function mat4gfSetQty(btn) {
  _mat4gf.qty = parseInt(btn.getAttribute('data-qty')) || 10;
  var grp = document.getElementById('mat4-fichas-qty');
  if (grp) grp.querySelectorAll('.gf-dif-btn').forEach(function(b){ b.classList.remove('active'); });
  btn.classList.add('active');
}

// Renderiza um bloco de exercícios (com ou sem espaço de resposta).
function _mat4gfExBloco(exs, startNum) {
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

function _mat4gfGenExs(cap, n) {
  var gen = _mat4Gerador(cap); if (!gen) return [];
  var _temasFiltro = _mat4gfTemasSel(cap); // subtemas escolhidos → temas; null = todos
  var nTemas = _mat4TemasCount[cap] || 1;
  var tipos = ['mc', 'fill', 'vf', 'fill', 'mc', 'mc'];
  var geradas = [], vistos = {};
  // gera até n questões DISTINTAS (evita enunciados repetidos na ficha)
  for (var i = 0, tent = 0; geradas.length < n && tent < n * 6; tent++) {
    var _tk = _temasFiltro ? _temasFiltro[i % _temasFiltro.length] : String((i % nTemas) + 1);
    var ex = gen(_tk, tipos[i % tipos.length], _mat4gf.dif);
    i++;
    if (!ex) continue;
    var chave = String(ex.enun || '').replace(/<[^>]+>/g, '').trim();
    if (vistos[chave]) continue;
    vistos[chave] = 1;
    geradas.push(ex);
  }
  // mistura questões reais do banco (multi-passo, com contexto/figuras)
  var banco = (typeof _mat4Banco !== 'undefined' && _mat4Banco[cap]) ? _mat4Banco[cap] : [];
  if (banco.length && typeof _mixBancoGeradas === 'function') {
    return _mixBancoGeradas(banco, geradas, n, Math.min(Math.ceil(n / 3), banco.length), _mat4gf.dif);
  }
  return geradas;
}

function mat4gfGerar(formato) {
  // capítulos selecionados
  var capsSel = [];
  _mat4CapMeta.forEach(function(m) { if (_mat4gf.caps[m.n] && _mat4Gerador(m.n)) capsSel.push(m.n); });
  var status = document.getElementById('mat4-fichas-status');
  if (!capsSel.length) { if (status) status.textContent = 'Seleciona pelo menos um capítulo.'; return; }
  var algumTipo = _mat4gf.tipos.resumo || _mat4gf.tipos.exercicios || _mat4gf.tipos.teste || _mat4gf.tipos.minitestes;
  if (!algumTipo) { if (status) status.textContent = 'Seleciona pelo menos um tipo de conteúdo.'; return; }
  if (status) status.textContent = 'A gerar…';

  var difLabel = { facil: 'Fácil', medio: 'Médio', dificil: 'Difícil' }[_mat4gf.dif];
  var solucoes = []; // {num, ex} acumuladas para a secção final
  var solCounter = 0;

  var corpo = '';
  capsSel.forEach(function(cap, ci) {
    _mat4PM(cap, 'ficha'); // gerou ficha deste capítulo
    var m = _mat4CapMeta[cap - 1];
    var color = _mat4CapColors[cap] || '#36527a';
    corpo += '<div style="' + (ci > 0 ? 'page-break-before:always;' : '') + 'margin-bottom:6px">'
      + '<h2 style="font-size:16px;color:' + color + ';border-bottom:2px solid ' + color + ';padding-bottom:4px;margin:0 0 10px">' + cap + '. ' + m.label + '</h2>';

    // Resumo teórico (das flashcards)
    if (_mat4gf.tipos.resumo) {
      var cards = _mat4Cards[cap] || [];
      if (cards.length) {
        corpo += '<div style="margin-bottom:12px"><h3 style="font-size:13px;color:#444;margin:0 0 5px">Resumo teórico</h3>';
        cards.slice(0, 8).forEach(function(c) {
          corpo += '<div style="font-size:11.5px;margin-bottom:4px"><strong>' + c.q + '</strong> ' + c.a + (c.v ? '<div style="margin:3px 0">' + c.v + '</div>' : '') + '</div>';
        });
        corpo += '</div>';
      }
    }
    // Exercícios
    if (_mat4gf.tipos.exercicios) {
      var exs = _mat4gfGenExs(cap, _mat4gf.qty);
      corpo += '<div style="margin-bottom:12px"><h3 style="font-size:13px;color:#444;margin:0 0 5px">Exercícios</h3>'
        + _mat4gfExBloco(exs, solCounter + 1) + '</div>';
      exs.forEach(function(ex) { solCounter++; solucoes.push({ num: solCounter, ex: ex }); });
    }
    // Teste de avaliação (8 questões mistas)
    if (_mat4gf.tipos.teste) {
      var exsT = _mat4gfGenExs(cap, 8);
      corpo += '<div style="margin-bottom:12px"><h3 style="font-size:13px;color:#444;margin:0 0 5px">Teste de avaliação</h3>'
        + _mat4gfExBloco(exsT, solCounter + 1) + '</div>';
      exsT.forEach(function(ex) { solCounter++; solucoes.push({ num: solCounter, ex: ex }); });
    }
    // Minitestes (um por subtema, 4 questões cada)
    if (_mat4gf.tipos.minitestes) {
      var subt = _mat4Subtemas[cap] || [];
      var mapa = _mat4SubtemaTemas[cap] || {};
      corpo += '<div style="margin-bottom:12px"><h3 style="font-size:13px;color:#444;margin:0 0 5px">Minitestes</h3>';
      subt.forEach(function(st, si) {
        var temas = mapa[si + 1] || [String(si + 1)];
        var gen = _mat4Gerador(cap);
        var exsM = [];
        for (var q = 0; q < 4; q++) {
          var tema = temas[q % temas.length];
          var ex = gen(tema, (q % 2 === 0) ? 'mc' : 'fill', _mat4gf.dif);
          if (ex) exsM.push(ex);
        }
        corpo += '<div style="margin-bottom:8px"><div style="font-size:12px;font-weight:700;color:#555">Mini ' + (si + 1) + ' · ' + st + '</div>'
          + _mat4gfExBloco(exsM, solCounter + 1) + '</div>';
        exsM.forEach(function(ex) { solCounter++; solucoes.push({ num: solCounter, ex: ex }); });
      });
      corpo += '</div>';
    }
    corpo += '</div>';
  });

  // Secção de soluções
  var solHTML = '';
  if (_mat4gf.tipos.solucoes && eduPodeSolucoes() && solucoes.length) {
    var _lmS = (typeof _limpaMath === 'function') ? _limpaMath : function(x){ return x; };
    var fmS = (typeof formatMath === 'function') ? function(x){ return formatMath(_lmS(x)); } : function(x){ return _lmS(x); };
    var lst = solucoes.map(function(s) {
      return '<div style="font-size:11.5px;margin-bottom:7px;line-height:1.5;page-break-inside:avoid">'
        + '<strong>' + s.num + '.</strong> <strong style="color:#1a6b4a">' + fmS(String(s.ex.resposta)) + '</strong>'
        + (s.ex.expl ? '<br><span style="color:#555">' + fmS(s.ex.expl) + '</span>' : '') + '</div>';
    }).join('');
    solHTML = '<div style="page-break-before:always;padding-top:8px"><h2 style="font-size:16px;border-bottom:2px solid #36527a;padding-bottom:4px">Soluções</h2>' + lst + '</div>';
  }

  var nomesCaps = capsSel.map(function(c) { return _mat4CapMeta[c - 1].label; }).join(', ');
  var html = '<div style="font-family:Arial,sans-serif;max-width:740px;margin:0 auto;padding:24px;color:#222">'
    + '<div style="display:flex;justify-content:space-between;align-items:baseline;border-bottom:2px solid #36527a;padding-bottom:8px;margin-bottom:14px">'
    + '<div><h1 style="font-size:18px;margin:0">Ficha de Trabalho · Matemática 4.º Ano</h1>'
    + '<div style="font-size:11.5px;color:#666">' + nomesCaps + ' · Nível ' + difLabel + '</div></div>'
    + '<div style="font-size:11.5px;color:#888">3ponto14</div></div>'
    + '<div style="font-size:11.5px;color:#666;margin-bottom:12px">Nome: ____________________________  Data: ____ / ____ / ______</div>'
    + corpo + solHTML + '</div>';

  var _temasNomes = capsSel.map(function(c){ return _mat4CapMeta[c-1].label; });
  var fname = (typeof _nomeFicha === 'function') ? _nomeFicha('5', 'matematica', _temasNomes, formato) : ('ficha-mat4.' + (formato === 'html' ? 'html' : 'pdf'));
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
function _mat4Init() {
  if (typeof _addStatsTeoriaVisuais === 'function') _addStatsTeoriaVisuais(_mat4Cards[7], '#4a9e72'); // cap7 Dados
  if (typeof _addGeoTeoriaVisuais === 'function') _addGeoTeoriaVisuais(_mat4Cards[4], '#8a9e4a'); // cap4 Figuras
  // arranca na tab Teoria com o cap 1 selecionado
  mat4BuildResumoNav();
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _mat4Init);
else _mat4Init();

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
   GERADORES DE EXERCÍCIOS - Matemática 4.º ano
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
//   Cada buildEx_m4cN(tema, tipo, dif) → {enun, tipo, opcoes?, resposta, expl, tema}
//   Helpers: rnd_m81, _opts4_m1. Números pequenos, linguagem simples.
// ═══════════════════════════════════════════════════════════════

// ═══ CAP 1 · Números até 1 000 000 ═══
// Temas: 1 Contar · 2 Valor de posição · 3 Comparar e ordenar
function buildEx_m4c1(tema, tipo, dif) {
  tema = String(tema);
  var teto = dif === 'facil' ? 10000 : (dif === 'dificil' ? 1000000 : 100000);
  if (tema === '1') {
    var passo = [100, 1000, 10000][rnd_m81(0, 2)];
    var n = rnd_m81(1, Math.floor(teto / passo) - 1) * passo;
    return { enun: 'Contar de ' + passo + ' em ' + passo + ': que número vem <strong>depois</strong> do ' + n + '?', tipo: 'mc',
      opcoes: _opts4_m1(String(n + passo), [String(n - passo), String(n + passo + 1), String(n)]),
      resposta: String(n + passo), expl: 'A seguir ao ' + n + ' (saltos de ' + passo + ') vem o ' + (n + passo) + '.', tema: 'T1 · Contar' };
  }
  if (tema === '2') {
    var dm = rnd_m81(1, 9), m = rnd_m81(0, 9), c = rnd_m81(0, 9), num = dm * 10000 + m * 1000 + c * 100;
    var pergunta = [['dezenas de milhar', dm, dm * 10000], ['milhares', m, m * 1000], ['centenas', c, c * 100]][rnd_m81(0, 2)];
    return { enun: 'No número ' + num + ', quantas <strong>' + pergunta[0] + '</strong> há?', tipo: 'mc',
      opcoes: _opts4_m1(String(pergunta[1]), [String(dm), String(m), String(c)].filter(function (x) { return x !== String(pergunta[1]); })),
      resposta: String(pergunta[1]), expl: num + ' tem ' + dm + ' dezenas de milhar, ' + m + ' milhares e ' + c + ' centenas.', tema: 'T2 · Valor de posição' };
  }
  // tema 3 · comparar e ordenar
  var a = rnd_m81(1000, teto), b = rnd_m81(1000, teto);
  while (b === a) b = rnd_m81(1000, teto);
  var maior = Math.max(a, b), menor = Math.min(a, b);
  return { enun: 'Qual é o número <strong>maior</strong>: ' + a + ' ou ' + b + '?', tipo: 'mc',
    opcoes: shuffle_m81([String(maior), String(menor)]),
    resposta: String(maior), expl: maior + ' é maior que ' + menor + '.', tema: 'T3 · Comparar e ordenar' };
}

// ═══ CAP 2 · As quatro operações ═══
// Temas: 1 Somar/subtrair · 2 Multiplicar (2 algarismos) · 3 Dividir e problemas
function buildEx_m4c2(tema, tipo, dif) {
  tema = String(tema);
  var teto = dif === 'facil' ? 1000 : (dif === 'dificil' ? 10000 : 5000);
  if (tema === '1') {
    var a = rnd_m81(100, teto), b = rnd_m81(100, teto);
    if (Math.random() < 0.5) return { enun: 'Quanto é <strong>' + a + ' + ' + b + '</strong>?', tipo: 'fill',
      resposta: String(a + b), expl: a + ' + ' + b + ' = ' + (a + b) + '.', tema: 'T1 · Somar e subtrair' };
    var maior = Math.max(a, b), menor = Math.min(a, b);
    return { enun: 'Quanto é <strong>' + maior + ' − ' + menor + '</strong>?', tipo: 'fill',
      resposta: String(maior - menor), expl: maior + ' − ' + menor + ' = ' + (maior - menor) + '.', tema: 'T1 · Somar e subtrair' };
  }
  if (tema === '2') {
    var x = rnd_m81(11, 99), y = rnd_m81(11, 40);
    return { enun: 'Quanto é <strong>' + x + ' × ' + y + '</strong>?', tipo: 'fill',
      resposta: String(x * y), expl: x + ' × ' + y + ' = ' + (x * y) + '.', tema: 'T2 · Multiplicar (2 algarismos)' };
  }
  // tema 3 · dividir e problemas
  var por = rnd_m81(2, 9), q = rnd_m81(10, 90), tot = por * q;
  return { enun: '<strong>' + tot + '</strong> livros arrumados em <strong>' + por + '</strong> caixas iguais. Quantos livros em cada caixa?', tipo: 'fill',
    resposta: String(q), expl: tot + ' ÷ ' + por + ' = ' + q + ' livros por caixa.', tema: 'T3 · Dividir e problemas' };
}

// ═══ CAP 3 · Frações ═══
// Temas: 1 Frações equivalentes · 2 Comparar frações · 3 Frações de quantidades
function buildEx_m4c3(tema, tipo, dif) {
  tema = String(tema);
  if (tema === '1') {
    var base = rnd_m81(1, 3), den = rnd_m81(2, 4), fator = rnd_m81(2, 3);
    return { enun: 'Qual é uma fração <strong>equivalente</strong> a ' + base + '/' + den + '?', tipo: 'mc',
      opcoes: _opts4_m1((base * fator) + '/' + (den * fator), [(base + 1) + '/' + den, base + '/' + (den + 1), (base * fator) + '/' + den]),
      resposta: (base * fator) + '/' + (den * fator), expl: 'Multiplicas cima e baixo por ' + fator + ': ' + base + '/' + den + ' = ' + (base * fator) + '/' + (den * fator) + '.', tema: 'T1 · Frações equivalentes' };
  }
  if (tema === '2') {
    var d = [2, 3, 4, 5][rnd_m81(0, 3)], p1 = rnd_m81(1, d - 1), p2 = rnd_m81(1, d - 1);
    while (p2 === p1) p2 = rnd_m81(1, d - 1);
    var mai = Math.max(p1, p2), men = Math.min(p1, p2);
    return { enun: 'Qual é <strong>maior</strong>: ' + p1 + '/' + d + ' ou ' + p2 + '/' + d + '?', tipo: 'mc',
      opcoes: shuffle_m81([mai + '/' + d, men + '/' + d]),
      resposta: mai + '/' + d, expl: 'Com o mesmo denominador, é maior a que tem maior numerador: ' + mai + '/' + d + '.', tema: 'T2 · Comparar frações' };
  }
  // tema 3 · frações de quantidades
  var den3 = [2, 3, 4, 5][rnd_m81(0, 3)], num3 = rnd_m81(1, den3 - 1), qt = den3 * rnd_m81(2, 8);
  return { enun: 'Quanto é <strong>' + num3 + '/' + den3 + ' de ' + qt + '</strong>?', tipo: 'fill',
    resposta: String(qt / den3 * num3), expl: qt + ' ÷ ' + den3 + ' = ' + (qt / den3) + '; × ' + num3 + ' = ' + (qt / den3 * num3) + '.', tema: 'T3 · Frações de quantidades' };
}

// ═══ CAP 4 · Números decimais ═══
// Temas: 1 O que é um decimal · 2 Décimas e centésimas · 3 Somar e subtrair decimais
function buildEx_m4c4(tema, tipo, dif) {
  tema = String(tema);
  function vg(x) { return String(x).replace('.', ','); }
  if (tema === '1') {
    var intp = rnd_m81(1, 9), dec = rnd_m81(1, 9);
    return { enun: 'No número <strong>' + intp + ',' + dec + '</strong>, qual é a parte inteira?', tipo: 'mc',
      opcoes: _opts4_m1(String(intp), [String(dec), String(intp) + ',' + dec, '0']),
      resposta: String(intp), expl: 'A parte antes da vírgula é a parte inteira: ' + intp + '. Depois da vírgula (' + dec + ') é a parte decimal.', tema: 'T1 · O que é um decimal' };
  }
  if (tema === '2') {
    if (Math.random() < 0.5) { var deci = rnd_m81(1, 9);
      return { enun: 'Como se escreve <strong>' + deci + ' décimas</strong> em número decimal?', tipo: 'mc',
        opcoes: _opts4_m1('0,' + deci, [deci + ',0', '0,0' + deci, String(deci)]),
        resposta: '0,' + deci, expl: deci + ' décimas = ' + deci + '/10 = 0,' + deci + '.', tema: 'T2 · Décimas e centésimas' };
    }
    var cent = rnd_m81(11, 99);
    return { enun: 'Como se escreve <strong>' + cent + ' centésimas</strong> em número decimal?', tipo: 'mc',
      opcoes: _opts4_m1('0,' + cent, ['0,0' + cent, cent + ',0', String(cent)]),
      resposta: '0,' + cent, expl: cent + ' centésimas = ' + cent + '/100 = 0,' + cent + '.', tema: 'T2 · Décimas e centésimas' };
  }
  // tema 3 · somar e subtrair decimais
  var a = (rnd_m81(10, 90) / 10), b = (rnd_m81(10, 90) / 10);
  var soma = Math.round((a + b) * 10) / 10;
  return { enun: 'Quanto é <strong>' + vg(a) + ' + ' + vg(b) + '</strong>?', tipo: 'fill',
    resposta: vg(soma), expl: 'Alinha as vírgulas: ' + vg(a) + ' + ' + vg(b) + ' = ' + vg(soma) + '.', tema: 'T3 · Somar e subtrair decimais' };
}

// ═══ CAP 5 · Formas e Sólidos ═══
// Temas: 1 Figuras planas · 2 Sólidos · 3 Linhas e simetria
function buildEx_m4c5(tema, tipo, dif) {
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
  // tema 3 · linhas e simetria
  var pares = [
    { p: 'Uma régua faz uma linha…', r: 'reta', d: ['curva', 'redonda', 'torta'] },
    { p: 'Uma borboleta tem os dois lados iguais. Tem…', r: 'simetria', d: ['só um lado', 'cantos', 'curvas'] },
    { p: 'Que linha é direita, sem curvas?', r: 'reta', d: ['curva', 'ondulada', 'circular'] }
  ][rnd_m81(0, 2)];
  return { enun: pares.p, tipo: 'mc', opcoes: _opts4_m1(pares.r, pares.d),
    resposta: pares.r, expl: 'A resposta certa é "' + pares.r + '".', tema: 'T3 · Linhas e simetria' };
}

// ═══ CAP 6 · Medida e Dados ═══
// Temas: 1 Horas e calendário · 2 Dinheiro e comprimentos · 3 Tabelas e gráficos
function buildEx_m4c6(tema, tipo, dif) {
  tema = String(tema);
  if (tema === '1') {
    var qs = [
      { p: 'Quantos dias tem uma semana?', r: '7', d: ['5', '10', '12'] },
      { p: 'Quantos meses tem um ano?', r: '12', d: ['7', '10', '24'] },
      { p: 'Quantas horas tem um dia?', r: '24', d: ['12', '10', '60'] },
      { p: 'Que dia vem depois de sexta-feira?', r: 'sábado', d: ['quinta', 'domingo', 'segunda'] }
    ][rnd_m81(0, 3)];
    return { enun: qs.p, tipo: 'mc', opcoes: _opts4_m1(qs.r, qs.d), resposta: qs.r,
      expl: 'A resposta é ' + qs.r + '.', tema: 'T1 · Horas e calendário' };
  }
  if (tema === '2') {
    var e1 = rnd_m81(1, 9), e2 = rnd_m81(1, 9);
    return { enun: 'Tenho <strong>' + e1 + '€</strong> e a minha irmã tem <strong>' + e2 + '€</strong>. Quanto temos ao todo?', tipo: 'fill',
      resposta: String(e1 + e2), expl: e1 + '€ + ' + e2 + '€ = ' + (e1 + e2) + '€.', tema: 'T2 · Dinheiro e comprimentos' };
  }
  // tema 3 · tabelas e gráficos
  var frutas = ['maçã', 'banana', 'pera', 'uva', 'laranja'];
  var f1 = frutas[rnd_m81(0, 4)], f2 = frutas[rnd_m81(0, 4)];
  while (f2 === f1) f2 = frutas[rnd_m81(0, 4)];
  var v1 = rnd_m81(2, 9), v2 = rnd_m81(2, 9);
  while (v2 === v1) v2 = rnd_m81(2, 9);
  var maior = v1 > v2 ? f1 : f2, mv = Math.max(v1, v2), nv = Math.min(v1, v2);
  var escolha = rnd_m81(0, 2);
  if (escolha === 0) {
    return { enun: 'Numa tabela: <strong>' + f1 + ': ' + v1 + '</strong> e <strong>' + f2 + ': ' + v2 + '</strong>. Quantos ao todo?', tipo: 'fill',
      resposta: String(v1 + v2), expl: 'Total: ' + v1 + ' + ' + v2 + ' = ' + (v1 + v2) + '.', tema: 'T3 · Tabelas e gráficos' };
  }
  if (escolha === 1) {
    return { enun: '<strong>' + f1 + ': ' + v1 + '</strong> · <strong>' + f2 + ': ' + v2 + '</strong>. Qual é a mais escolhida?', tipo: 'mc',
      opcoes: shuffle_m81([f1, f2]),
      resposta: maior, expl: maior + ' tem ' + mv + ' (mais que ' + nv + ').', tema: 'T3 · Tabelas e gráficos' };
  }
  return { enun: '<strong>' + f1 + ': ' + v1 + '</strong> e <strong>' + f2 + ': ' + v2 + '</strong>. Quantos a mais tem ' + maior + '?', tipo: 'fill',
    resposta: String(mv - nv), expl: mv + ' − ' + nv + ' = ' + (mv - nv) + ' a mais.', tema: 'T3 · Tabelas e gráficos' };
}

var _mat4Banco = {
  1: [ // Números até 1 000 000
    { t: '1', tipo: 'mc', enun: 'Conta de 10 000 em 10 000: 10 000, 20 000, … Qual vem a seguir?', opcoes: ['30000', '11000', '20001', '100000'], resposta: '30000', expl: 'De 10 000 em 10 000: 10 000, 20 000, 30 000.', tema: 'T1 · Contar' },
    { t: '2', tipo: 'mc', enun: 'No número 47 500, quantas dezenas de milhar há?', opcoes: ['4', '7', '5', '47'], resposta: '4', expl: '47 500 = 40 000 + 7000 + 500 → 4 dezenas de milhar.', tema: 'T2 · Valor de posição' },
    { t: '3', tipo: 'mc', enun: 'Qual é o número MAIOR: 52 300 ou 52 030?', opcoes: ['52300', '52030'], resposta: '52300', expl: 'Comparando as centenas, 52 300 é maior.', tema: 'T3 · Comparar e ordenar' },
    { t: '2', tipo: 'fill', enun: 'Quanto é 30 000 + 5000 + 200?', resposta: '35200', expl: '3 dezenas de milhar, 5 milhares e 2 centenas = 35 200.', tema: 'T2 · Valor de posição' }
  ],
  2: [ // As quatro operações
    { t: '1', tipo: 'fill', enun: 'Quanto é 1250 + 375?', resposta: '1625', expl: '1250 + 375 = 1625.', tema: 'T1 · Somar e subtrair' },
    { t: '2', tipo: 'fill', enun: 'Quanto é 24 × 15?', resposta: '360', expl: '24 × 15 = 360.', tema: 'T2 · Multiplicar (2 algarismos)' },
    { t: '3', tipo: 'fill', enun: '144 livros em 6 caixas iguais. Quantos por caixa?', resposta: '24', expl: '144 ÷ 6 = 24.', tema: 'T3 · Dividir e problemas' },
    { t: '1', tipo: 'fill', enun: 'Quanto é 3000 − 1450?', resposta: '1550', expl: '3000 − 1450 = 1550.', tema: 'T1 · Somar e subtrair' }
  ],
  3: [ // Frações
    { t: '1', tipo: 'mc', enun: 'Qual é uma fração equivalente a 1/2?', opcoes: ['2/4', '1/3', '3/4', '2/3'], resposta: '2/4', expl: 'Multiplicas cima e baixo por 2: 1/2 = 2/4.', tema: 'T1 · Frações equivalentes' },
    { t: '2', tipo: 'mc', enun: 'Qual é MAIOR: 3/5 ou 2/5?', opcoes: ['3/5', '2/5'], resposta: '3/5', expl: 'Com o mesmo denominador, ganha o maior numerador: 3/5.', tema: 'T2 · Comparar frações' },
    { t: '3', tipo: 'fill', enun: 'Quanto é 2/3 de 12?', resposta: '8', expl: '12 ÷ 3 = 4; 4 × 2 = 8.', tema: 'T3 · Frações de quantidades' },
    { t: '3', tipo: 'fill', enun: 'Quanto é 3/4 de 20?', resposta: '15', expl: '20 ÷ 4 = 5; 5 × 3 = 15.', tema: 'T3 · Frações de quantidades' }
  ],
  4: [ // Números decimais
    { t: '1', tipo: 'mc', enun: 'No número 3,7, qual é a parte inteira?', opcoes: ['3', '7', '3,7', '0'], resposta: '3', expl: 'Antes da vírgula = parte inteira (3); depois = parte decimal (7).', tema: 'T1 · O que é um decimal' },
    { t: '2', tipo: 'mc', enun: 'Como se escreve 5 décimas em número decimal?', opcoes: ['0,5', '5,0', '0,05', '5'], resposta: '0,5', expl: '5 décimas = 5/10 = 0,5.', tema: 'T2 · Décimas e centésimas' },
    { t: '3', tipo: 'fill', enun: 'Quanto é 2,5 + 1,3? (usa vírgula)', resposta: '3,8', expl: 'Alinha as vírgulas: 2,5 + 1,3 = 3,8.', tema: 'T3 · Somar e subtrair decimais' },
    { t: '2', tipo: 'mc', enun: 'Como se escreve 25 centésimas?', opcoes: ['0,25', '0,025', '25,0', '2,5'], resposta: '0,25', expl: '25 centésimas = 25/100 = 0,25.', tema: 'T2 · Décimas e centésimas' }
  ],
  5: [ // Formas e Sólidos
    { t: '1', tipo: 'mc', enun: 'Quantos lados tem um quadrado?', opcoes: ['4', '3', '0', '5'], resposta: '4', expl: 'O quadrado tem 4 lados iguais.', tema: 'T1 · Figuras planas' },
    { t: '2', tipo: 'mc', enun: 'Que sólido é um dado?', opcoes: ['cubo', 'esfera', 'cilindro', 'cone'], resposta: 'cubo', expl: 'O dado tem a forma de cubo.', tema: 'T2 · Sólidos' },
    { t: '3', tipo: 'mc', enun: 'Uma borboleta tem os dois lados iguais. Tem…', opcoes: ['simetria', 'só um lado', 'cantos', 'curvas'], resposta: 'simetria', expl: 'Os dois lados iguais formam simetria.', tema: 'T3 · Linhas e simetria' },
    { t: '1', tipo: 'mc', enun: 'Qual destas formas é redonda?', opcoes: ['círculo', 'quadrado', 'triângulo', 'retângulo'], resposta: 'círculo', expl: 'O círculo é redondo.', tema: 'T1 · Figuras planas' }
  ],
  6: [ // Medida e Dados
    { t: '1', tipo: 'mc', enun: 'Quantas horas tem um dia?', opcoes: ['24', '12', '10', '60'], resposta: '24', expl: 'Um dia tem 24 horas.', tema: 'T1 · Horas e calendário' },
    { t: '2', tipo: 'fill', enun: 'Tenho 6€ e a minha irmã tem 3€. Quanto temos ao todo?', resposta: '9', expl: '6€ + 3€ = 9€.', tema: 'T2 · Dinheiro e comprimentos' },
    { t: '3', tipo: 'fill', enun: 'Numa tabela: cães 4, gatos 3. Quantos ao todo?', resposta: '7', expl: '4 + 3 = 7.', tema: 'T3 · Tabelas e gráficos' },
    { t: '3', tipo: 'mc', enun: 'Sol: 6, Chuva: 2. Qual é o mais escolhido?', opcoes: ['Sol', 'Chuva'], resposta: 'Sol', expl: '6 é mais que 2 → Sol.', tema: 'T3 · Tabelas e gráficos' }
  ]
};
/* atribuir: deep-link mat4 */
function _mat4DeepLinkAuto(){ try{ var p=new URLSearchParams(window.location.search); if(p.get('abrir')==='fichas'){ var cs=(p.get('caps')||'').split(',').filter(Boolean); if(_mat4gf){ _mat4gf.caps={}; cs.forEach(function(n){ _mat4gf.caps[parseInt(n,10)]=true; }); if(p.get('dif')) _mat4gf.dif=p.get('dif'); } if(p.get('tarefa'))setTimeout(function(){tarefaEntregaBar(p.get('tarefa'),'Ficha concluída');},400); setTimeout(function(){ mat4SwitchTab('fichas',null); },350); return; }
    if(p.get('abrir')==='jogos'){ var jc=parseInt(p.get('cap'),10); if(jc&&_mat4Prat) _mat4Prat.cap=jc; if(p.get('tarefa'))setTimeout(function(){tarefaEntregaBar(p.get('tarefa'),'Jogo concluído');},400); setTimeout(function(){ mat4SwitchTab('jogos',null); var jg=p.get('jogo'); if(jg&&typeof gTabSwitch==='function')setTimeout(function(){try{gTabSwitch('mat4-jogos-app',jg);}catch(e){}},250); },350); return; }
    if(p.get('abrir')!=='praticar')return; if(p.get('tarefa')){_mat4TarefaAtiva=p.get('tarefa');_mat4TarefaResp={};} var cap=parseInt(p.get('cap'),10)||1, st=parseInt(p.get('st'),10)||0, nivel=p.get('nivel')||'medio'; _mat4Prat.cap=cap; _mat4Prat.st=st; _mat4Prat.nivel=nivel; _mat4Prat.sel={caps:[cap],stsByCap:(st?(function(){var o={};o[cap]=[st];return o;})():{})}; setTimeout(function(){ mat4SwitchTab('exercicios',null); if(typeof mat4GerarExercicios==='function') mat4GerarExercicios(); },350); }catch(e){} }
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',function(){setTimeout(_mat4DeepLinkAuto,300);});else setTimeout(_mat4DeepLinkAuto,300);

function mat4AtribuirFicha(){
  var caps=[]; _mat4CapMeta.forEach(function(m){ if(_mat4gf.caps[m.n]) caps.push(m.n); });
  if(!caps.length){ var st=document.getElementById('mat4-fichas-status'); if(st) st.textContent='Escolhe pelo menos um capítulo para atribuir.'; return null; }
  var nomes=caps.map(function(n){ var mm=_mat4CapMeta[n-1]||{}; return mm.label||('Cap. '+n); });
  return { curso:'mat4', cursoNome:'Matemática 4.º', tema:caps.join('.'), temaNome:nomes.join(', '), sub:'', subNome:'', tipo:'ficha', nivel:_mat4gf.dif };
}

function mat4EntregarTarefa(){
  if(!_mat4TarefaAtiva||typeof Turmas==='undefined'||!Turmas.guardarResultado)return;
  var qids=Object.keys(_mat4TarefaResp||{});
  if(!qids.length){alert('Responde a pelo menos uma pergunta antes de entregar.');return;}
  var certas=0,detalhe=[];
  qids.forEach(function(qid,i){ var ok=!!_mat4TarefaResp[qid]; if(ok)certas++; var ex=_mat4Prat.exs[i]||{}; detalhe.push({q:(ex.enun||ex.pergunta||('Pergunta '+(i+1))),certo:ok}); });
  Turmas.guardarResultado(_mat4TarefaAtiva,certas,qids.length,detalhe).then(function(){
    if(typeof eduToast==='function')eduToast('Trabalho entregue! Acertaste '+certas+' de '+qids.length+'. \u2705','success'); else alert('Entregue! '+certas+'/'+qids.length);
    _mat4TarefaAtiva=null; _mat4TarefaResp={}; mat4GerarExercicios();
  }).catch(function(e){alert(e.message||'Não foi possível entregar.');});
}
