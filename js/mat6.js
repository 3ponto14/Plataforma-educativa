/* ════════════════════════════════════════════════════════════════
   MAT5 HUB - Matemática 6.º ano (7 capítulos)
   Modelo de HUB ÚNICO (ver MODELO BASE no CLAUDE.md). NUNCA páginas
   por capítulo. Tabs: Teoria · Praticar · Fichas · Progresso.
   ════════════════════════════════════════════════════════════════ */

// ═══ Capítulos do 6.º ano (Missão Mat) ═══
var _mat6CapMeta = [
  {n:1, icon:'<i class="ph ph-prime"></i>',            label:'Números Primos e Divisibilidade'},
  {n:2, icon:'<i class="ph ph-divide"></i>',           label:'Frações e Potências'},
  {n:3, icon:'<i class="ph ph-plus-minus"></i>',       label:'Números Racionais'},
  {n:4, icon:'<i class="ph ph-square"></i>',           label:'Perímetros e Áreas'},
  {n:5, icon:'<i class="ph ph-cube"></i>',             label:'Volumes'},
  {n:6, icon:'<i class="ph ph-scales"></i>',           label:'Proporcionalidade Direta'},
  {n:7, icon:'<i class="ph ph-chart-bar"></i>',        label:'Organização de Dados'}
];

// Cores por capítulo (alinhadas com --m6cN-* do CSS)
var _mat6CapColors = {
  1:'#c47a4a', 2:'#c45a4a', 3:'#c48e4a', 4:'#c44a6a', 5:'#a84a8e', 6:'#c4684a', 7:'#c44a5a'
};

// Subtemas por capítulo
var _mat6Subtemas = {
  1: ['Múltiplos, divisores e primos', 'Critérios de divisibilidade', 'm.m.c. e m.d.c.'],
  2: ['Operações com frações', 'Potências de base fracionária', 'Frações e percentagens'],
  3: ['Números negativos', 'Comparar e ordenar', 'Adição e subtração'],
  4: ['Perímetro do círculo', 'Área de figuras planas', 'Áreas compostas'],
  5: ['Volume do cubo e prisma', 'Capacidade e unidades'],
  6: ['Razões e constante', 'Regra de três simples', 'Escalas e velocidade'],
  7: ['Ler gráficos', 'Frequência relativa', 'Média']
};

// ═══ FLASHCARDS / TEORIA por capítulo ═══
// Cap 1 (Números) - conteúdo real, fiel ao Prisma 8.
// Caps 2-8 - placeholders honestos até serem construídos.
// ═══ FLASHCARDS / TEORIA por capítulo (6.º ano) ═══
// ═══ FLASHCARDS / TEORIA por capítulo (6.º ano) ═══
// ═══ FLASHCARDS / TEORIA por capítulo (6.º ano) ═══
var _mat6Cards = {
  1: [
    { tag: 'Definição', q: 'O que é um número primo?', a: 'Um número natural maior que 1 que só tem dois divisores: 1 e ele próprio. Ex: 2, 3, 5, 7, 11, 13, 17, 19.' },
    { tag: 'Definição', q: 'O que é um número composto?', a: 'Um número natural maior que 1 que tem mais de dois divisores. Ex: 4, 6, 8, 9, 12. (O 1 não é primo nem composto.)' },
    { tag: 'Definição', q: 'O que é a decomposição em fatores primos?', a: 'Escrever um número como produto de números primos. Ex: 45 = 3 × 3 × 5 = 3² × 5.' },
    { tag: 'Estratégia', q: 'Como decompor um número em fatores primos?', a: 'Divide sucessivamente pelos primos (2, 3, 5, 7…). Ex: 60 → 2×30 → 2×2×15 → 2×2×3×5 = 2²×3×5.' },
    { tag: 'Regra', q: 'Critério de divisibilidade por 2', a: 'Um número é divisível por 2 se for par (terminar em 0, 2, 4, 6 ou 8).' },
    { tag: 'Regra', q: 'Critério de divisibilidade por 3', a: 'Um número é divisível por 3 se a soma dos seus algarismos for divisível por 3. Ex: 72 → 7+2=9 → divisível por 3.' },
    { tag: 'Regra', q: 'Critério de divisibilidade por 5', a: 'Um número é divisível por 5 se terminar em 0 ou 5.' },
    { tag: 'Regra', q: 'Critério de divisibilidade por 9', a: 'Um número é divisível por 9 se a soma dos seus algarismos for divisível por 9. Ex: 81 → 8+1=9.' },
    { tag: 'Regra', q: 'Critério de divisibilidade por 10', a: 'Um número é divisível por 10 se terminar em 0.' },
    { tag: 'Definição', q: 'O que é o m.d.c. (máximo divisor comum)?', a: 'O maior número que divide dois (ou mais) números ao mesmo tempo. Ex: m.d.c.(12, 18) = 6.' },
    { tag: 'Definição', q: 'O que é o m.m.c. (mínimo múltiplo comum)?', a: 'O menor número que é múltiplo de dois (ou mais) números. Ex: m.m.c.(4, 6) = 12.' },
    { tag: 'Estratégia', q: 'Como calcular o m.m.c.?', a: 'Decompõe em fatores primos e multiplica os fatores comuns e não comuns com o maior expoente. Ou lista os múltiplos até encontrar o primeiro comum.' },
    { tag: 'Exemplo', q: 'Decompõe 45 em fatores primos', a: '45 = 9 × 5 = 3 × 3 × 5 = 3² × 5.' },
    { tag: 'Exemplo', q: 'O 18 é divisível por 3?', a: 'Sim: 1+8=9, que é divisível por 3 (e 18 = 3×6).' },
    { tag: 'Exemplo', q: 'm.d.c.(8, 12)?', a: 'Divisores comuns de 8 e 12: 1, 2, 4. O maior é 4.' },
    { tag: 'Exemplo', q: 'm.m.c.(3, 5)?', a: 'Múltiplos de 3: 3,6,9,12,15… Múltiplos de 5: 5,10,15… O primeiro comum é 15.' }
  ],
  2: [
    { tag: 'Regra', q: 'Como multiplicar duas frações?', a: 'Multiplica os numeradores entre si e os denominadores entre si: a/b × c/d = (a×c)/(b×d). Ex: 2/3 × 4/5 = 8/15.' },
    { tag: 'Regra', q: 'Como dividir duas frações?', a: 'Multiplica a primeira pelo inverso da segunda: a/b ÷ c/d = a/b × d/c. Ex: 2/3 ÷ 1/4 = 2/3 × 4 = 8/3.' },
    { tag: 'Definição', q: 'O que é o inverso de uma fração?', a: 'A fração trocada (numerador ↔ denominador). O inverso de 3/5 é 5/3. O produto de uma fração pelo seu inverso é 1.' },
    { tag: 'Regra', q: 'Como somar/subtrair frações com denominadores diferentes?', a: 'Reduz ao mesmo denominador (m.m.c. dos denominadores) e depois soma/subtrai os numeradores. Ex: 1/2 + 1/3 = 3/6 + 2/6 = 5/6.' },
    { tag: 'Definição', q: 'O que é uma potência de base fracionária?', a: '(a/b)ⁿ = aⁿ/bⁿ. Ex: (2/3)² = 2²/3² = 4/9.' },
    { tag: 'Regra', q: 'Produto de potências com a mesma base', a: 'aᵐ × aⁿ = aᵐ⁺ⁿ (mantém a base, soma os expoentes). Ex: 2³ × 2² = 2⁵.' },
    { tag: 'Regra', q: 'Quociente de potências com a mesma base', a: 'aᵐ ÷ aⁿ = aᵐ⁻ⁿ (mantém a base, subtrai os expoentes). Ex: 5⁴ ÷ 5² = 5².' },
    { tag: 'Regra', q: 'Como simplificar uma fração?', a: 'Divide o numerador e o denominador pelo seu m.d.c. (ou por divisores comuns até ser irredutível). Ex: 12/18 = 2/3.' },
    { tag: 'Regra', q: 'Como passar de fração para percentagem?', a: 'Escreve uma fração equivalente com denominador 100 (ou faz numerador ÷ denominador × 100). Ex: 3/4 = 75/100 = 75%.' },
    { tag: 'Regra', q: 'Como calcular uma fração de uma quantidade?', a: 'Multiplica a fração pela quantidade. Ex: 2/3 de 30 = (2 × 30) ÷ 3 = 20.' },
    { tag: 'Definição', q: 'Fração irredutível', a: 'A fração mais simples possível: numerador e denominador sem divisores comuns além de 1. Ex: 4/6 simplifica para 2/3.' },
    { tag: 'Exemplo', q: 'Calcula 2/3 × 3/4', a: '(2×3)/(3×4) = 6/12 = 1/2.' },
    { tag: 'Exemplo', q: 'Calcula (1/2)³', a: '1³/2³ = 1/8.' },
    { tag: 'Exemplo', q: 'Calcula 1/4 + 2/3', a: 'm.m.c.(4,3)=12 → 3/12 + 8/12 = 11/12.' },
    { tag: 'Exemplo', q: 'Quanto é 3/5 de 100?', a: '(3 × 100) ÷ 5 = 60.' },
    { tag: 'Exemplo', q: 'Calcula 6/7 ÷ 2/7', a: '6/7 × 7/2 = 42/14 = 3.' }
  ],
  3: [
    { tag: 'Definição', q: 'O que são os números racionais?', a: 'Os números que se podem escrever como fração, incluindo positivos, negativos e zero. Ex: −3, 2/5, 0, −1,5.' },
    { tag: 'Definição', q: 'O que é um número negativo?', a: 'Um número menor que zero, escrito com sinal "−". Representa, por exemplo, temperaturas abaixo de zero ou dívidas. Ex: −7.' },
    { tag: 'Definição', q: 'O que é o simétrico de um número?', a: 'O número com sinal trocado. O simétrico de 5 é −5; o simétrico de −3 é 3. A soma de um número com o seu simétrico é 0.' },
    { tag: 'Definição', q: 'O que é o valor absoluto (módulo)?', a: '|x| é a distância de x ao zero, é sempre ≥ 0. |−4| = 4 e |4| = 4.' },
    { tag: 'Regra', q: 'Como comparar dois números negativos?', a: 'Quanto "mais negativo", menor. Ex: −7 < −2 (porque −7 está mais à esquerda na reta numérica).' },
    { tag: 'Regra', q: 'Regra dos sinais na adição', a: 'Sinais iguais: soma e mantém o sinal. Sinais diferentes: subtrai e fica com o sinal do maior em módulo. Ex: −5 + 3 = −2.' },
    { tag: 'Regra', q: 'Como subtrair números inteiros?', a: 'Subtrair é somar o simétrico: a − b = a + (−b). Ex: 3 − 7 = 3 + (−7) = −4.' },
    { tag: 'Regra', q: 'Adicionar dois negativos', a: 'Soma os valores e mantém o sinal negativo. Ex: −4 + (−6) = −10.' },
    { tag: 'Definição', q: 'A reta numérica', a: 'Uma reta onde se representam os números: o zero ao centro, positivos à direita e negativos à esquerda. Mais à esquerda = menor.' },
    { tag: 'Exemplo', q: 'Qual é maior: −3 ou −8?', a: '−3 (está mais à direita na reta; −8 é mais negativo).' },
    { tag: 'Exemplo', q: 'Calcula −6 + 10', a: 'Sinais diferentes: 10 − 6 = 4, com o sinal do 10 (positivo) → 4.' },
    { tag: 'Exemplo', q: 'Calcula 2 − 9', a: '2 + (−9) = −7.' },
    { tag: 'Exemplo', q: 'Simétrico de −12?', a: '12.' },
    { tag: 'Exemplo', q: '|−15| = ?', a: '15 (distância ao zero).' },
    { tag: 'Exemplo', q: 'Calcula −5 + (−3)', a: '−8 (soma e mantém o sinal negativo).' },
    { tag: 'Exemplo', q: 'Ordena: −2, 0, −5, 3', a: '−5 < −2 < 0 < 3.' }
  ],
  4: [
    { tag: 'Definição', q: 'O que é o perímetro?', a: 'O comprimento do contorno de uma figura (a soma dos lados). Mede-se em unidades de comprimento (cm, m…).' },
    { tag: 'Definição', q: 'O que é a área?', a: 'A medida da superfície de uma figura. Mede-se em unidades quadradas (cm², m²…).' },
    { tag: 'Fórmula', q: 'Perímetro do círculo (circunferência)', a: 'P = 2 × π × r (ou π × diâmetro). Usa π ≈ 3,14. Ex: raio 2 → P = 2 × 3,14 × 2 = 12,56.' },
    { tag: 'Fórmula', q: 'Área do círculo', a: 'A = π × r². Ex: raio 3 → A = 3,14 × 9 = 28,26.' },
    { tag: 'Fórmula', q: 'Área do retângulo', a: 'A = comprimento × largura. Ex: 6 × 4 = 24.' },
    { tag: 'Fórmula', q: 'Área do quadrado', a: 'A = lado × lado = lado². Ex: lado 5 → A = 25.' },
    { tag: 'Fórmula', q: 'Área do triângulo', a: 'A = (base × altura) ÷ 2. Ex: base 8, altura 5 → (8×5)/2 = 20.' },
    { tag: 'Fórmula', q: 'Área do paralelogramo', a: 'A = base × altura.' },
    { tag: 'Definição', q: 'O que é π (pi)?', a: 'A razão entre o perímetro de qualquer circunferência e o seu diâmetro. É aproximadamente 3,14.' },
    { tag: 'Definição', q: 'Diâmetro e raio', a: 'O raio (r) vai do centro à circunferência. O diâmetro (d) atravessa o círculo pelo centro: d = 2 × r.' },
    { tag: 'Estratégia', q: 'Área de uma figura composta', a: 'Divide a figura em formas simples (retângulos, triângulos…), calcula cada área e soma (ou subtrai os "buracos").' },
    { tag: 'Exemplo', q: 'Perímetro de um círculo de raio 2 cm (π=3,14)?', a: 'P = 2 × 3,14 × 2 = 12,56 cm.' },
    { tag: 'Exemplo', q: 'Área de um triângulo de base 10 e altura 6?', a: '(10 × 6) ÷ 2 = 30.' },
    { tag: 'Exemplo', q: 'Área de um quadrado de lado 7?', a: '7² = 49.' },
    { tag: 'Exemplo', q: 'Área de um círculo de raio 5 (π=3,14)?', a: '3,14 × 25 = 78,5.' },
    { tag: 'Exemplo', q: 'Perímetro de um retângulo 8 × 3?', a: '2 × (8 + 3) = 22.' }
  ],
  5: [
    { tag: 'Definição', q: 'O que é o volume?', a: 'A medida do espaço ocupado por um sólido. Mede-se em unidades cúbicas (cm³, m³…).' },
    { tag: 'Fórmula', q: 'Volume do cubo', a: 'V = aresta³ (aresta × aresta × aresta). Ex: aresta 3 → V = 3³ = 27 cm³.' },
    { tag: 'Fórmula', q: 'Volume do paralelepípedo (caixa)', a: 'V = comprimento × largura × altura. Ex: 5 × 3 × 2 = 30 cm³.' },
    { tag: 'Fórmula', q: 'Volume de um prisma', a: 'V = área da base × altura.' },
    { tag: 'Regra', q: 'Equivalência volume-capacidade', a: '1 litro = 1 dm³ = 1000 cm³. 1 ml = 1 cm³. Útil para converter volume em capacidade.' },
    { tag: 'Definição', q: 'O que é a capacidade?', a: 'A quantidade de líquido que um recipiente pode conter, normalmente em litros (L) ou mililitros (ml).' },
    { tag: 'Regra', q: 'Unidades de volume', a: 'Cada unidade é 1000 vezes a seguinte: 1 m³ = 1000 dm³ = 1 000 000 cm³.' },
    { tag: 'Definição', q: 'Diferença entre área e volume', a: 'Área mede superfície (2D, cm²); volume mede espaço (3D, cm³).' },
    { tag: 'Estratégia', q: 'Como calcular o volume de um sólido composto?', a: 'Divide em sólidos simples (caixas), calcula cada volume e soma.' },
    { tag: 'Exemplo', q: 'Volume de um cubo de aresta 4 cm?', a: '4³ = 4 × 4 × 4 = 64 cm³.' },
    { tag: 'Exemplo', q: 'Volume de uma caixa 10 × 5 × 2 cm?', a: '10 × 5 × 2 = 100 cm³.' },
    { tag: 'Exemplo', q: 'Quantos litros são 2000 cm³?', a: '2000 cm³ = 2 dm³ = 2 litros.' },
    { tag: 'Exemplo', q: 'Volume de um cubo de aresta 5?', a: '5³ = 125 cm³.' },
    { tag: 'Exemplo', q: 'Quantos cm³ tem 1 litro?', a: '1000 cm³.' },
    { tag: 'Exemplo', q: 'Volume de um prisma com base de área 12 e altura 5?', a: '12 × 5 = 60 cm³.' },
    { tag: 'Exemplo', q: 'Volume de uma caixa cúbica de aresta 2?', a: '2³ = 8 cm³.' }
  ],
  6: [
    { tag: 'Definição', q: 'O que é a proporcionalidade direta?', a: 'Duas grandezas são diretamente proporcionais se, quando uma duplica, a outra também duplica (e o quociente entre elas é constante).' },
    { tag: 'Definição', q: 'O que é a constante de proporcionalidade?', a: 'O valor constante k = y ÷ x. Ex: se 3 kg custam 6 €, k = 6/3 = 2 €/kg.' },
    { tag: 'Regra', q: 'Como reconhecer proporcionalidade direta numa tabela?', a: 'O quociente y/x é o mesmo em todas as colunas. Se variar, NÃO há proporcionalidade direta.' },
    { tag: 'Estratégia', q: 'Regra de três simples', a: 'Se a → b, então c → x, onde x = (b × c) ÷ a. Serve para encontrar um valor desconhecido numa proporção.' },
    { tag: 'Definição', q: 'O que é uma razão?', a: 'A comparação de duas grandezas por divisão. Ex: 4 rapazes para 6 raparigas → razão 4/6 = 2/3.' },
    { tag: 'Definição', q: 'O que é uma escala?', a: 'A razão entre uma medida no desenho/mapa e a medida real. Ex: escala 1:100 → 1 cm no mapa = 100 cm reais.' },
    { tag: 'Definição', q: 'O que é a velocidade média?', a: 'A distância percorrida a dividir pelo tempo. v = distância ÷ tempo. Ex: 120 km em 2 h → 60 km/h.' },
    { tag: 'Estratégia', q: 'Como resolver um problema de proporcionalidade?', a: 'Identifica as grandezas, monta a proporção (ou usa a constante k) e calcula o valor em falta com a regra de três.' },
    { tag: 'Exemplo', q: 'Se 2 kg custam 6 €, quanto custam 5 kg?', a: 'k = 6/2 = 3 €/kg → 5 × 3 = 15 €.' },
    { tag: 'Exemplo', q: 'Se 4 lápis custam 2 €, quanto custam 10?', a: 'Regra de três: (2 × 10) ÷ 4 = 5 €.' },
    { tag: 'Exemplo', q: 'A tabela x:1,2,3 e y:5,10,15 é proporcional?', a: 'Sim: y/x = 5 em todas as colunas. k = 5.' },
    { tag: 'Exemplo', q: 'Um carro faz 180 km em 3 h. Velocidade média?', a: '180 ÷ 3 = 60 km/h.' },
    { tag: 'Exemplo', q: 'Escala 1:50, 4 cm no mapa = quanto real?', a: '4 × 50 = 200 cm = 2 m.' },
    { tag: 'Exemplo', q: 'Se 3 operários fazem em proporção, k de y=12 quando x=4?', a: 'k = 12 ÷ 4 = 3.' },
    { tag: 'Exemplo', q: '6 sumos custam 9 €. Preço de 1?', a: '9 ÷ 6 = 1,5 €.' },
    { tag: 'Definição', q: 'Gráfico de proporcionalidade direta', a: 'É uma reta que passa pela origem (0,0). O declive é a constante k.' }
  ],
  7: [
    { tag: 'Definição', q: 'O que é a frequência absoluta?', a: 'O número de vezes que um valor/categoria ocorre. Ex: 12 alunos gostam de matemática → frequência absoluta 12.' },
    { tag: 'Definição', q: 'O que é a frequência relativa?', a: 'A frequência absoluta a dividir pelo total. Exprime-se em fração, decimal ou %. Ex: 12 em 30 → 12/30 = 0,4 = 40%.' },
    { tag: 'Definição', q: 'O que é a média?', a: 'A soma de todos os valores a dividir pelo número de valores. Ex: (4+6+8)/3 = 6.' },
    { tag: 'Definição', q: 'O que é a moda?', a: 'O valor ou categoria que ocorre mais vezes. Ex: em 2, 3, 3, 5 a moda é 3.' },
    { tag: 'Definição', q: 'O que é a amplitude?', a: 'A diferença entre o maior e o menor valor (máximo − mínimo).' },
    { tag: 'Definição', q: 'Tipos de gráficos', a: 'De barras, circular (setores), de linhas, pictograma. Cada um serve para mostrar dados de formas diferentes.' },
    { tag: 'Estratégia', q: 'Como construir um gráfico circular?', a: 'O ângulo de cada setor = frequência relativa × 360°. Ex: 25% → 0,25 × 360° = 90°.' },
    { tag: 'Definição', q: 'O que é população e amostra?', a: 'População: o conjunto total estudado. Amostra: uma parte da população escolhida para a representar.' },
    { tag: 'Estratégia', q: 'Como calcular a frequência relativa em %?', a: 'Divide a frequência absoluta pelo total e multiplica por 100. Ex: 9 em 20 → 9/20 × 100 = 45%.' },
    { tag: 'Definição', q: 'O que é o infográfico?', a: 'Uma representação visual de dados que combina números, gráficos e imagens para comunicar informação de forma clara.' },
    { tag: 'Exemplo', q: 'Média de 10, 20, 30, 40?', a: '(10+20+30+40)/4 = 100/4 = 25.' },
    { tag: 'Exemplo', q: 'Frequência relativa de 8 em 40?', a: '8/40 = 1/5 = 0,2 = 20%.' },
    { tag: 'Exemplo', q: 'Moda de 5, 7, 7, 7, 9, 9?', a: 'O valor mais frequente é 7 (3 vezes).' },
    { tag: 'Exemplo', q: 'Amplitude de 3, 15, 8, 22, 10?', a: '22 − 3 = 19.' },
    { tag: 'Exemplo', q: 'Num gráfico circular, 50% corresponde a quantos graus?', a: '0,5 × 360° = 180°.' },
    { tag: 'Exemplo', q: 'Se 25 de 100 pessoas preferem chá, que % é?', a: '25/100 = 25%.' }
  ]
};

// Seleção atual por tab
var _mat6Sel = { resumo: 1, 'resumo-st': 0 };

// ═══ NAVEGAÇÃO DE TABS ═══
function mat6SwitchTab(tab, btn) {
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
  var panel = document.getElementById('mat6p-' + tab);
  if (panel) { panel.classList.add('active'); panel.style.setProperty('display','block','important'); }

  var titles = { resumo:'Teoria', praticar:'Praticar', fichas:'Fichas', progresso:'Progresso',
                 exercicios:'Exercícios', quiz:'Quiz', flashcards:'Flashcards', teste:'Teste', jogos:'Jogos' };
  if (titles[tab]) document.title = 'Mat. 6.º ' + titles[tab] + ' · 3ponto14';

  if (tab === 'resumo') mat6BuildResumoNav();
  else if (tab === 'exercicios') mat6BuildPraticarNav();
  else if (tab === 'quiz') mat6QuizBuildNav();
  else if (tab === 'flashcards') mat6FcBuildNav();
  else if (tab === 'teste') mat6TesteBuildNav();
  else if (tab === 'jogos') mat6JogosInit();
  else if (tab === 'fichas') mat6FichasBuildNav();
  else if (tab === 'progresso') mat6RenderProgresso();
}

// Abre um sub-modo de prática a partir dos cartões do menu Praticar.
function mat6OpenPraticar(modo) { mat6SwitchTab(modo, null); }

// ═══ TAB TEORIA ═══
function mat6BuildResumoNav() {
  var capRow = document.getElementById('mat6-resumo-cap-row');
  if (!capRow) return;
  var activeCap = _mat6Sel['resumo'] || 1;
  var h = '';
  _mat6CapMeta.forEach(function(m) {
    var color = _mat6CapColors[m.n] || '#516860';
    var isActive = activeCap === m.n;
    var activeStyle = isActive ? 'background:' + color + ';border-color:' + color + ';color:#fff' : '';
    var hoverCode = isActive ? '' : ' onmouseover="this.style.borderColor=\'' + color + '\';this.style.color=\'' + color + '\'" onmouseout="this.style.borderColor=\'\';this.style.color=\'\'"';
    h += '<button class="resumo-cap-btn' + (isActive ? ' active' : '') + '" data-cap="' + m.n + '" onclick="mat6ResumoSelectCap(' + m.n + ',this)" style="' + activeStyle + '"' + hoverCode + '>'
       + '<span class="resumo-cap-icon">' + m.icon + '</span>' + m.label + '</button>';
  });
  capRow.innerHTML = h;
  mat6ResumoShowSts(activeCap);
  mat6RenderResumoInline();
}

function mat6ResumoSelectCap(cap, btn) {
  _mat6Sel['resumo'] = cap;
  _mat6Sel['resumo-st'] = 0;
  var capRow = document.getElementById('mat6-resumo-cap-row');
  if (capRow) {
    capRow.querySelectorAll('.resumo-cap-btn').forEach(function(b) {
      b.classList.remove('active'); b.style.background = ''; b.style.borderColor = ''; b.style.color = '';
    });
  }
  if (btn) {
    var color = _mat6CapColors[cap] || '#516860';
    btn.classList.add('active');
    btn.style.background = color; btn.style.borderColor = color; btn.style.color = '#fff';
  }
  mat6ResumoShowSts(cap);
  mat6RenderResumoInline();
}

function mat6ResumoShowSts(cap) {
  var stRow = document.getElementById('mat6-resumo-st-row');
  if (!stRow) return;
  var sts = _mat6Subtemas[cap] || [];
  if (!sts.length) { stRow.style.display = 'none'; return; }
  var h = '<div class="resumo-st-label">Subtema</div>';
  sts.forEach(function(st, i) {
    var isActive = (_mat6Sel['resumo-st'] || 0) === (i + 1);
    h += '<button class="resumo-st-btn' + (isActive ? ' active' : '') + '" data-st="' + (i + 1) + '" onclick="mat6ResumoSelectSt(this,' + cap + ',' + (i + 1) + ')">' + st + '</button>';
  });
  stRow.innerHTML = h;
  stRow.style.display = 'flex';
}

function mat6ResumoSelectSt(btn, cap, stIdx) {
  var stRow = document.getElementById('mat6-resumo-st-row');
  if (stRow) stRow.querySelectorAll('.resumo-st-btn').forEach(function(b) { b.classList.remove('active'); });
  if (btn) btn.classList.add('active');
  _mat6Sel['resumo'] = cap;
  _mat6Sel['resumo-st'] = stIdx;
  mat6RenderResumoInline();
}

function mat6RenderResumoInline() {
  var cap = _mat6Sel['resumo'] || 1;
  var dest = document.getElementById('mat6-resumo-content');
  if (!dest) return;

  var color = (function(){
    var c = _mat6CapColors[cap] || '#516860';
    return c;
  })();

  var tagIcons = {
    'Definição':'ph-book-bookmark', 'Fórmula':'ph-function', 'Regra':'ph-check-square',
    'Propriedade':'ph-star', 'Exemplo':'ph-pencil-line', 'Estratégia':'ph-lightbulb',
    'Síntese':'ph-seal-check', 'Notação':'ph-at', 'Hierarquia':'ph-tree-structure',
    'Teorema':'ph-intersect', 'Conceito':'ph-cube'
  };

  var allCards = _mat6Cards[cap] || [];

  // Filtrar por subtema, se selecionado
  var stIdx = _mat6Sel['resumo-st'] || 0;
  var cards = allCards;
  if (stIdx > 0 && _mat6Subtemas[cap]) {
    var stLabel = (_mat6Subtemas[cap][stIdx - 1] || '').toLowerCase();
    var stWords = stLabel.replace(/[^a-záéíóúâêîôûãõç ]/g, '').split(' ').filter(function(w){ return w.length > 3; });
    var filtered = allCards.filter(function(card) {
      var hay = ((card.tag || '') + ' ' + (card.q || '')).toLowerCase();
      return stWords.some(function(w){ return hay.indexOf(w) !== -1; });
    });
    if (filtered.length > 0) cards = filtered;
  }

  if (!cards.length) {
    dest.innerHTML = '<div class="resumo-empty">'
      + '<i class="ph ph-book-open-text resumo-empty-icon"></i>'
      + '<div class="resumo-empty-title">Conteúdo em preparação</div>'
      + '<div class="resumo-empty-sub">A teoria deste capítulo está a ser elaborada.</div></div>';
    return;
  }

  _mat6PM(cap, 'teoria'); // estudou a teoria deste capítulo

  // Acordeão partilhado: grupos colapsáveis + perguntas que abrem a resposta.
  dest.innerHTML = _teoriaAccordionHTML(cards, color, tagIcons);
}

/* ════════════════════════════════════════════════════════════════
   TAB PRATICAR - exercícios gerados com correção imediata
   Renderiza tudo no painel (sem páginas externas). Reutiliza os
   motores genéricos do chapter-engine: _capBuildQuizHTML,
   _capCheckAnswer, _capShowFeedback.
   ════════════════════════════════════════════════════════════════ */

// Gerador por capítulo (resolução lazy - os buildEx_m6cN são definidos no fim do ficheiro).
// Só os caps com gerador são "praticáveis".
function _mat6Gerador(cap) {
  if (cap === 1 && typeof buildEx_m6c1 === 'function') return buildEx_m6c1;
  if (cap === 2 && typeof buildEx_m6c2 === 'function') return buildEx_m6c2;
  if (cap === 3 && typeof buildEx_m6c3 === 'function') return buildEx_m6c3;
  if (cap === 4 && typeof buildEx_m6c4 === 'function') return buildEx_m6c4;
  if (cap === 5 && typeof buildEx_m6c5 === 'function') return buildEx_m6c5;
  if (cap === 6 && typeof buildEx_m6c6 === 'function') return buildEx_m6c6;
  if (cap === 7 && typeof buildEx_m6c7 === 'function') return buildEx_m6c7;
  return null;
}
var _mat6TemasCount = { 1: 3, 2: 3, 3: 3, 4: 3, 5: 2, 6: 3, 7: 3 };

// Estado da prática
var _mat6Prat = { cap: 1, st: 0, nivel: 'medio', score: { correct: 0, total: 0 }, answered: {}, exs: [] };

function _mat6PratStorageKey(cap) { return 'edupt_mat6_cap' + cap; }

function mat6BuildPraticarNav() {
  var capRow = document.getElementById('mat6-praticar-cap-row');
  if (!capRow) return;
  var activeCap = _mat6Prat.cap || 1;
  var h = '';
  _mat6CapMeta.forEach(function(m) {
    var hasGen = !!_mat6Gerador(m.n);
    var color = _mat6CapColors[m.n] || '#516860';
    var isActive = activeCap === m.n;
    var activeStyle = isActive ? 'background:' + color + ';border-color:' + color + ';color:#fff' : '';
    var disabledStyle = hasGen ? '' : 'opacity:.45;cursor:not-allowed';
    var onclick = hasGen ? 'mat6PraticarSelectCap(' + m.n + ',this)' : '';
    var title = hasGen ? '' : ' title="Em preparação"';
    h += '<button class="resumo-cap-btn' + (isActive ? ' active' : '') + '" data-cap="' + m.n + '" onclick="' + onclick + '" style="' + activeStyle + ';' + disabledStyle + '"' + title + '>'
       + '<span class="resumo-cap-icon">' + m.icon + '</span>' + m.label + (hasGen ? '' : ' ·') + '</button>';
  });
  capRow.innerHTML = h;
  mat6PraticarShowSts(activeCap);
}

function mat6PraticarShowSts(cap) {
  var stRow = document.getElementById('mat6-praticar-st-row');
  if (!stRow) return;
  var sts = _mat6Subtemas[cap] || [];
  if (!sts.length) { stRow.style.display = 'none'; return; }
  var h = '<div class="resumo-st-label">Subtema</div>';
  h += '<button class="resumo-st-btn' + (_mat6Prat.st === 0 ? ' active' : '') + '" data-st="0" onclick="mat6PraticarSelectSt(this,0)">Todos</button>';
  sts.forEach(function(st, i) {
    h += '<button class="resumo-st-btn' + (_mat6Prat.st === (i + 1) ? ' active' : '') + '" data-st="' + (i + 1) + '" onclick="mat6PraticarSelectSt(this,' + (i + 1) + ')">' + st + '</button>';
  });
  stRow.innerHTML = h;
  stRow.style.display = 'flex';
}

function mat6PraticarSelectCap(cap, btn) {
  if (!_mat6Gerador(cap)) return;
  _mat6Prat.cap = cap;
  _mat6Prat.st = 0;
  var capRow = document.getElementById('mat6-praticar-cap-row');
  if (capRow) capRow.querySelectorAll('.resumo-cap-btn').forEach(function(b) { b.classList.remove('active'); b.style.background = ''; b.style.borderColor = ''; b.style.color = ''; });
  if (btn) { var color = _mat6CapColors[cap] || '#516860'; btn.classList.add('active'); btn.style.background = color; btn.style.borderColor = color; btn.style.color = '#fff'; }
  mat6PraticarShowSts(cap);
  mat6GerarExercicios();
}

function mat6PraticarSelectSt(btn, stIdx) {
  var stRow = document.getElementById('mat6-praticar-st-row');
  if (stRow) stRow.querySelectorAll('.resumo-st-btn').forEach(function(b) { b.classList.remove('active'); });
  if (btn) btn.classList.add('active');
  _mat6Prat.st = stIdx;
  mat6GerarExercicios();
}

function mat6PraticarSetNivel(nivel, btn) {
  _mat6Prat.nivel = nivel;
  var grp = document.getElementById('mat6-praticar-nivel');
  if (grp) grp.querySelectorAll('.gen-level-btn').forEach(function(b) { b.classList.remove('active'); });
  if (btn) btn.classList.add('active');
  mat6GerarExercicios();
}

// Mapa subtema → temas a usar no gerador (Cap 1 Números)
var _mat6SubtemaTemas = {
  1: { 1: ['1'], 2: ['2'], 3: ['3'] },  // Primos/divisibilidade · Divisibilidade · mmc/mdc
  2: { 1: ['1'], 2: ['2'], 3: ['3'] },  // Operações frações · Potências · Frações/%
  3: { 1: ['1'], 2: ['2'], 3: ['3'] },  // Negativos · Comparar · Adição/subtração
  4: { 1: ['1'], 2: ['2'], 3: ['3'] },  // Perímetro círculo · Áreas · Áreas compostas
  5: { 1: ['1'], 2: ['2'] },            // Volume cubo/prisma · Capacidade
  6: { 1: ['1'], 2: ['2'], 3: ['3'] },  // Razões/constante · Regra de três · Escalas/velocidade
  7: { 1: ['1'], 2: ['2'], 3: ['3'] }   // Ler gráficos · Frequência · Média
};

function mat6GerarExercicios() {
  var dest = document.getElementById('mat6-praticar-content');
  if (!dest) return;
  var cap = _mat6Prat.cap, gen = _mat6Gerador(cap);
  if (!gen) { dest.innerHTML = ''; return; }

  // Que temas usar?
  var temas;
  if (_mat6Prat.st > 0 && _mat6SubtemaTemas[cap] && _mat6SubtemaTemas[cap][_mat6Prat.st]) {
    temas = _mat6SubtemaTemas[cap][_mat6Prat.st];
  } else {
    temas = [];
    for (var t = 1; t <= (_mat6TemasCount[cap] || 1); t++) temas.push(String(t));
  }

  var QTD = 8;
  var tipos = ['mc', 'fill', 'mc', 'vf', 'fill', 'mc', 'fill', 'mc'];
  var geradas = [];
  for (var i = 0; i < QTD; i++) {
    var tema = temas[i % temas.length];
    var ex = gen(tema, tipos[i % tipos.length], _mat6Prat.nivel);
    if (ex) geradas.push(ex);
  }
  var banco = (typeof _mat6Banco !== "undefined" && _mat6Banco[cap]) ? _mat6Banco[cap].filter(function (q) { return temas.indexOf(q.t) !== -1; }) : [];
  var exs = (typeof _mixBancoGeradas === "function") ? _mixBancoGeradas(banco, geradas, QTD, 2)
    : geradas.map(function (e, idx) { return Object.assign({}, e, { num: idx + 1 }); });
  _mat6Prat.exs = exs;
  _mat6Prat.answered = {};
  _mat6Prat.score = { correct: 0, total: 0 };

  // Score bar + questões (reutiliza motor genérico do chapter-engine)
  var scoreBar = '<div class="score-bar" id="mat6-prat-scorebar">'
    + '<div><div class="score-num" id="mat6-prat-score">0</div><div class="score-label">pontos</div></div>'
    + '<div><div class="score-num" id="mat6-prat-total">/ 0</div><div class="score-label">respondidas</div></div>'
    + '<div class="progress-track"><div class="progress-fill" id="mat6-prat-prog" style="width:0%"></div></div>'
    + '<button class="btn btn-ghost ml-auto" onclick="mat6GerarExercicios()">↺ Novas questões</button>'
    + '</div>';
  var quizHTML = (typeof _capBuildQuizHTML === 'function')
    ? _capBuildQuizHTML(exs, 'm8ex', 'mat6CheckEx')
    : '<p style="color:var(--ink4)">Motor de exercícios indisponível.</p>';
  dest.innerHTML = scoreBar + quizHTML;
}

function mat6CheckEx(qid, tipo, val, btn) {
  if (_mat6Prat.answered[qid]) return;
  if (typeof _capCheckAnswer !== 'function') return;
  var r = _capCheckAnswer(qid, tipo, val);
  if (!r) return; // resposta vazia
  _mat6Prat.answered[qid] = true;
  if (r.correct) _mat6Prat.score.correct++;
  _mat6Prat.score.total++;
  if (typeof _capShowFeedback === 'function') _capShowFeedback(qid, r.correct, r.expl, val, btn);
  var se = document.getElementById('mat6-prat-score'); if (se) se.textContent = _mat6Prat.score.correct;
  var te = document.getElementById('mat6-prat-total'); if (te) te.textContent = '/ ' + _mat6Prat.score.total;
  var pe = document.getElementById('mat6-prat-prog'); if (pe && _mat6Prat.exs.length) pe.style.width = (_mat6Prat.score.total / _mat6Prat.exs.length * 100) + '%';
  mat6SaveProgress(_mat6Prat.cap, r.correct);
}

// ═══ PROGRESSO (localStorage por capítulo) ═══
function mat6SaveProgress(cap, correct) {
  try {
    var key = _mat6PratStorageKey(cap);
    var d = JSON.parse(localStorage.getItem(key) || '{}');
    if (!d.sections) d.sections = {};
    if (!d.sections.praticar) d.sections.praticar = { correct: 0, total: 0 };
    d.sections.praticar.total++;
    if (correct) d.sections.praticar.correct++;
    d.lastActivity = Date.now();
    localStorage.setItem(key, JSON.stringify(d));
  } catch (e) {}
}

// Regista atividade no ProgressManager (XP + streak), com capId próprio do 6.º ano
// ('m6capN') para não misturar com o progresso do 7.º ano.
function _mat6PM(cap, tipo, opts) {
  if (typeof ProgressManager === 'undefined') return;
  try { ProgressManager.record('m6cap' + cap, tipo, opts || {}); } catch (e) {}
}

/* ════════════════════════════════════════════════════════════════
   HELPER: linha de capítulos para sub-modos (quiz, flashcards, teste)
   Só capítulos com gerador ficam ativos.
   ════════════════════════════════════════════════════════════════ */
function _mat6BuildCapRow(rowId, activeCap, onclickName) {
  var row = document.getElementById(rowId);
  if (!row) return;
  var h = '';
  _mat6CapMeta.forEach(function(m) {
    var hasGen = !!_mat6Gerador(m.n);
    var color = _mat6CapColors[m.n] || '#516860';
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

function _mat6SetActiveCapBtn(rowId, btn, cap) {
  var row = document.getElementById(rowId);
  if (row) row.querySelectorAll('.resumo-cap-btn').forEach(function(b){ b.classList.remove('active'); b.style.background=''; b.style.borderColor=''; b.style.color=''; });
  if (btn) { var color = _mat6CapColors[cap] || '#516860'; btn.classList.add('active'); btn.style.background=color; btn.style.borderColor=color; btn.style.color='#fff'; }
}

// Gera uma questão de escolha múltipla para um capítulo (usada por quiz).
function _mat6BuildMcQuestion(cap) {
  var gen = _mat6Gerador(cap);
  if (!gen) return null;
  var nTemas = _mat6TemasCount[cap] || 1;
  var ex = null;
  for (var i = 0; i < 10; i++) {
    var tema = String(rnd_m81(1, nTemas));
    ex = gen(tema, 'mc', 'medio');
    if (ex && ex.tipo === 'mc' && ex.opcoes && ex.opcoes.length >= 2) break;
  }
  return (ex && ex.tipo === 'mc' && ex.opcoes && ex.opcoes.length >= 2) ? ex : null;
}

/* ════════════════════════════════════════════════════════════════
   SUB-MODO: QUIZ RELÂMPAGO (3 vidas, streak)
   ════════════════════════════════════════════════════════════════ */
var _mat6Quiz = { cap: 1, lives: 3, streak: 0, maxStreak: 0, score: 0, total: 0, answered: false, current: null };

function mat6QuizBuildNav() {
  if (!_mat6Gerador(_mat6Quiz.cap)) _mat6Quiz.cap = 1;
  _mat6BuildCapRow('mat6-quiz-cap-row', _mat6Quiz.cap, 'mat6QuizSelectCap');
  mat6QuizStart();
}

function mat6QuizSelectCap(cap, btn) {
  if (!_mat6Gerador(cap)) return;
  _mat6SetActiveCapBtn('mat6-quiz-cap-row', btn, cap);
  _mat6Quiz.cap = cap;
  mat6QuizStart();
}

function mat6QuizStart() {
  _mat6Quiz.lives = 3; _mat6Quiz.streak = 0; _mat6Quiz.maxStreak = 0;
  _mat6Quiz.score = 0; _mat6Quiz.total = 0; _mat6Quiz.answered = false;
  mat6QuizNext();
}

function mat6QuizNext() {
  var app = document.getElementById('mat6-quiz-app');
  if (!app) return;
  if (_mat6Quiz.lives <= 0) { mat6QuizGameOver(app); return; }
  var ex = _mat6BuildMcQuestion(_mat6Quiz.cap);
  if (!ex) { app.innerHTML = '<p style="color:var(--ink4);padding:2rem;text-align:center">Sem questões disponíveis para este capítulo.</p>'; return; }
  _mat6Quiz.current = ex; _mat6Quiz.answered = false;
  var lives = '';
  for (var i = 0; i < 3; i++) lives += (i < _mat6Quiz.lives ? '❤️' : '🖤') + ' ';
  var opts = '';
  ex.opcoes.forEach(function(opt, idx) {
    opts += '<button class="qg-opt-btn" id="mat6qopt-' + idx + '" onclick="mat6QuizAnswer(' + idx + ')">' + opt + '</button>';
  });
  app.innerHTML =
    '<div class="qg-hub-bar">' +
      '<div class="qg-hub-lives">' + lives + '</div>' +
      '<div class="qg-hub-streak">' + (_mat6Quiz.streak > 1 ? '🔥 ' + _mat6Quiz.streak + ' seguidas' : '') + '</div>' +
      '<div class="qg-hub-score">✓ ' + _mat6Quiz.score + ' / ' + _mat6Quiz.total + '</div>' +
    '</div>' +
    '<div class="qg-hub-question">' + ex.enun + '</div>' +
    '<div class="qg-hub-opts">' + opts + '</div>' +
    '<div class="qg-hub-feedback" id="mat6-quiz-fb" style="min-height:2.5rem"></div>';
}

function mat6QuizAnswer(idx) {
  if (_mat6Quiz.answered) return;
  _mat6Quiz.answered = true;
  var ex = _mat6Quiz.current; if (!ex) return;
  var correct = String(ex.opcoes[idx]) === String(ex.resposta);
  _mat6Quiz.total++;
  document.querySelectorAll('.qg-opt-btn').forEach(function(b, i) {
    b.disabled = true;
    if (String(ex.opcoes[i]) === String(ex.resposta)) { b.style.background = '#4caf50'; b.style.color = '#fff'; }
  });
  var clicked = document.getElementById('mat6qopt-' + idx);
  if (clicked && !correct) { clicked.style.background = '#f44336'; clicked.style.color = '#fff'; }
  var fb = document.getElementById('mat6-quiz-fb');
  if (correct) {
    _mat6Quiz.score++; _mat6Quiz.streak++;
    if (_mat6Quiz.streak > _mat6Quiz.maxStreak) _mat6Quiz.maxStreak = _mat6Quiz.streak;
    if (fb) fb.innerHTML = '<span style="color:var(--correct,#3ecf8e);font-weight:700">✓ Certo!</span> ' + (ex.expl || '');
  } else {
    _mat6Quiz.lives--; _mat6Quiz.streak = 0;
    if (fb) fb.innerHTML = '<span style="color:var(--wrong,#ff6b6b);font-weight:700">✗ Errado.</span> ' + (ex.expl || '');
  }
  mat6SaveProgress(_mat6Quiz.cap, correct);
  setTimeout(function(){ mat6QuizNext(); }, 1400);
}

function mat6QuizGameOver(app) {
  var pct = _mat6Quiz.total > 0 ? Math.round(_mat6Quiz.score / _mat6Quiz.total * 100) : 0;
  _mat6PM(_mat6Quiz.cap, 'quiz', { pontuacao: _mat6Quiz.score, total: _mat6Quiz.total });
  var emoji = pct >= 90 ? '🏆' : pct >= 70 ? '⭐' : pct >= 50 ? '👍' : '📚';
  app.innerHTML =
    '<div style="text-align:center;padding:2.5rem 1rem">' +
      '<div style="font-size:3.5rem;margin-bottom:.75rem">' + emoji + '</div>' +
      '<div style="font-family:\'Cormorant Garamond\',serif;font-size:2rem;font-weight:900;color:var(--ink)">' + pct + '%</div>' +
      '<div style="color:var(--ink3);margin:.5rem 0 1.5rem">' + _mat6Quiz.score + ' certas em ' + _mat6Quiz.total + ' questões</div>' +
      '<div style="font-size:1.5rem;margin-bottom:1.5rem">Melhor sequência: ' + (_mat6Quiz.maxStreak || 0) + ' 🔥</div>' +
      '<button class="btn btn-primary" onclick="mat6QuizStart()">↺ Jogar novamente</button>' +
    '</div>';
}

/* ════════════════════════════════════════════════════════════════
   SUB-MODO: FLASHCARDS
   ════════════════════════════════════════════════════════════════ */
var _mat6Fc = { cap: 1, idx: 0, flipped: false, cards: [] };

function mat6FcBuildNav() {
  // primeiro capítulo com cartões
  if (!(_mat6Cards[_mat6Fc.cap] && _mat6Cards[_mat6Fc.cap].length)) {
    for (var c = 1; c <= _mat6CapMeta.length; c++) { if (_mat6Cards[c] && _mat6Cards[c].length) { _mat6Fc.cap = c; break; } }
  }
  // linha de capítulos: só os que têm cartões
  var row = document.getElementById('mat6-fc-cap-row');
  if (row) {
    var h = '';
    _mat6CapMeta.forEach(function(m) {
      var has = !!(_mat6Cards[m.n] && _mat6Cards[m.n].length);
      var color = _mat6CapColors[m.n] || '#516860';
      var isActive = _mat6Fc.cap === m.n;
      var activeStyle = isActive ? 'background:' + color + ';border-color:' + color + ';color:#fff' : '';
      var disabled = has ? '' : 'opacity:.45;cursor:not-allowed';
      var onclick = has ? ('mat6FcSelectCap(' + m.n + ',this)') : '';
      var title = has ? '' : ' title="Em preparação"';
      h += '<button class="resumo-cap-btn' + (isActive ? ' active' : '') + '" onclick="' + onclick + '" style="' + activeStyle + ';' + disabled + '"' + title + '>'
         + '<span class="resumo-cap-icon">' + m.icon + '</span>' + m.label + (has ? '' : ' ·') + '</button>';
    });
    row.innerHTML = h;
  }
  mat6FcSelectCap(_mat6Fc.cap, null);
}

function mat6FcSelectCap(cap, btn) {
  if (!(_mat6Cards[cap] && _mat6Cards[cap].length)) return;
  if (btn) _mat6SetActiveCapBtn('mat6-fc-cap-row', btn, cap);
  _mat6Fc.cap = cap;
  _mat6Fc.cards = _mat6Cards[cap].slice();
  _mat6Fc.idx = 0; _mat6Fc.flipped = false;
  _mat6PM(cap, 'flashcard');
  mat6FcRender();
}

function mat6FcRender() {
  var app = document.getElementById('mat6-fc-app');
  if (!app) return;
  var cards = _mat6Fc.cards;
  if (!cards.length) { app.innerHTML = '<p style="color:var(--ink4);padding:2rem;text-align:center">Sem flashcards para este capítulo.</p>'; return; }
  var card = cards[_mat6Fc.idx];
  var color = _mat6CapColors[_mat6Fc.cap] || '#516860';
  var pct = Math.round((_mat6Fc.idx + 1) / cards.length * 100);
  app.innerHTML =
    '<div class="card card-narrow">' +
      '<div class="flex items-center justify-between mb-3">' +
        '<span class="fc2-tag-pill" style="background:' + color + ';color:#fff">' + (card.tag || '') + '</span>' +
        '<span class="fc-counter">' + (_mat6Fc.idx + 1) + ' / ' + cards.length + '</span>' +
      '</div>' +
      '<div class="fc2-prog-track"><div class="fc2-prog-fill" style="width:' + pct + '%;background:' + color + '"></div></div>' +
      '<div onclick="mat6FcFlip()" class="fc2-card-inner" style="cursor:pointer;min-height:140px">' +
        '<div>' +
          '<p style="font-size:1.05rem;font-weight:600;color:var(--ink);line-height:1.4">' + (card.q || '') + '</p>' +
          '<p style="font-size:.9rem;color:' + color + ';margin-top:.75rem;line-height:1.5;display:' + (_mat6Fc.flipped ? 'block' : 'none') + '">' + (card.a || '') + '</p>' +
          '<p style="font-size:.75rem;color:var(--ink4);margin-top:.5rem">' + (_mat6Fc.flipped ? '' : 'Carrega para ver a resposta') + '</p>' +
        '</div>' +
      '</div>' +
      '<div class="flex flex-wrap gap-3 justify-center mt-5">' +
        '<button class="btn btn-ghost" onclick="mat6FcPrev()">← Anterior</button>' +
        '<button class="btn btn-primary" onclick="mat6FcFlip()">↕ Virar</button>' +
        '<button class="btn btn-ghost" onclick="mat6FcNext()">Seguinte →</button>' +
      '</div>' +
    '</div>';
}

function mat6FcFlip() { _mat6Fc.flipped = !_mat6Fc.flipped; mat6FcRender(); }
function mat6FcNext() { _mat6Fc.idx = (_mat6Fc.idx + 1) % (_mat6Fc.cards.length || 1); _mat6Fc.flipped = false; mat6FcRender(); }
function mat6FcPrev() { _mat6Fc.idx = (_mat6Fc.idx - 1 + (_mat6Fc.cards.length || 1)) % (_mat6Fc.cards.length || 1); _mat6Fc.flipped = false; mat6FcRender(); }

/* ════════════════════════════════════════════════════════════════
   SUB-MODO: TESTE CRONOMETRADO
   ════════════════════════════════════════════════════════════════ */
var _mat6Teste = { cap: 1, nivel: 'medio', qtd: 10, tempo: 600, exs: [], answered: {}, score: { correct: 0, total: 0 }, timer: null, restante: 0 };

function mat6TesteBuildNav() {
  if (!_mat6Gerador(_mat6Teste.cap)) _mat6Teste.cap = 1;
  _mat6BuildCapRow('mat6-teste-cap-row', _mat6Teste.cap, 'mat6TesteSelectCap');
  mat6TesteRenderConfig();
}

function mat6TesteSelectCap(cap, btn) {
  if (!_mat6Gerador(cap)) return;
  _mat6SetActiveCapBtn('mat6-teste-cap-row', btn, cap);
  _mat6Teste.cap = cap;
  mat6TesteRenderConfig();
}

function mat6TesteRenderConfig() {
  var app = document.getElementById('mat6-teste-app');
  if (!app) return;
  if (_mat6Teste.timer) { clearInterval(_mat6Teste.timer); _mat6Teste.timer = null; }
  app.innerHTML =
    '<div class="card">' +
      '<div class="card-title">Configurar teste</div>' +
      '<div class="flex flex-wrap gap-6 items-end">' +
        '<div><div class="label-small">Nível</div>' +
          '<div class="gen-level-group" id="mat6-teste-nivel">' +
            '<button class="gen-level-btn' + (_mat6Teste.nivel==='facil'?' active':'') + '" onclick="mat6TesteSetNivel(\'facil\',this)"><span class="status-dot status-dot--easy"></span> Fácil</button>' +
            '<button class="gen-level-btn' + (_mat6Teste.nivel==='medio'?' active':'') + '" onclick="mat6TesteSetNivel(\'medio\',this)"><span class="status-dot status-dot--medium"></span> Médio</button>' +
            '<button class="gen-level-btn' + (_mat6Teste.nivel==='dificil'?' active':'') + '" onclick="mat6TesteSetNivel(\'dificil\',this)"><span class="status-dot status-dot--hard"></span> Difícil</button>' +
          '</div></div>' +
        '<div><div class="label-small">N.º questões</div>' +
          '<select class="ai-select" id="mat6-teste-qtd"><option value="10">10</option><option value="15">15</option><option value="20">20</option></select></div>' +
        '<div><div class="label-small">Tempo</div>' +
          '<select class="ai-select" id="mat6-teste-tempo"><option value="600">10 min</option><option value="900">15 min</option><option value="1800">30 min</option></select></div>' +
        '<button class="btn btn-primary" onclick="mat6TesteStart()">▶ Iniciar teste</button>' +
      '</div>' +
    '</div>';
}

function mat6TesteSetNivel(nivel, btn) {
  _mat6Teste.nivel = nivel;
  var grp = document.getElementById('mat6-teste-nivel');
  if (grp) grp.querySelectorAll('.gen-level-btn').forEach(function(b){ b.classList.remove('active'); });
  if (btn) btn.classList.add('active');
}

function mat6TesteStart() {
  var gen = _mat6Gerador(_mat6Teste.cap); if (!gen) return;
  var qtdEl = document.getElementById('mat6-teste-qtd'), tempoEl = document.getElementById('mat6-teste-tempo');
  _mat6Teste.qtd = qtdEl ? parseInt(qtdEl.value) : 10;
  _mat6Teste.tempo = tempoEl ? parseInt(tempoEl.value) : 600;
  var nTemas = _mat6TemasCount[_mat6Teste.cap] || 1;
  var tipos = ['mc', 'fill', 'mc', 'vf', 'fill'];
  var exs = [];
  for (var i = 0; i < _mat6Teste.qtd; i++) {
    var ex = gen(String((i % nTemas) + 1), tipos[i % tipos.length], _mat6Teste.nivel);
    if (ex) exs.push(Object.assign({}, ex, { num: i + 1 }));
  }
  _mat6Teste.exs = exs; _mat6Teste.answered = {}; _mat6Teste.score = { correct: 0, total: 0 };
  _mat6Teste.restante = _mat6Teste.tempo;

  var app = document.getElementById('mat6-teste-app');
  var quizHTML = (typeof _capBuildQuizHTML === 'function') ? _capBuildQuizHTML(exs, 'm8teste', 'mat6TesteCheck') : '';
  app.innerHTML =
    '<div class="exam-progress-bar" style="position:sticky;top:0;z-index:5;background:var(--surface);padding:.75rem;border-radius:12px;display:flex;align-items:center;gap:1rem;flex-wrap:wrap">' +
      '<div style="font-family:\'Cormorant Garamond\',serif;font-size:1.8rem;font-weight:900" id="mat6-teste-timer">' + _mat6FmtTime(_mat6Teste.restante) + '</div>' +
      '<div style="font-size:.78rem;color:var(--ink3)">Respondidas: <span id="mat6-teste-answered">0 / ' + _mat6Teste.qtd + '</span></div>' +
      '<button class="btn btn-ghost ml-auto" onclick="mat6TesteFinish()">⏹ Terminar</button>' +
    '</div>' +
    '<div id="mat6-teste-questions" style="margin-top:1rem">' + quizHTML + '</div>';

  _mat6Teste.timer = setInterval(function() {
    _mat6Teste.restante--;
    var t = document.getElementById('mat6-teste-timer');
    if (t) t.textContent = _mat6FmtTime(_mat6Teste.restante);
    if (_mat6Teste.restante <= 0) mat6TesteFinish();
  }, 1000);
}

function _mat6FmtTime(s) {
  var m = Math.floor(s / 60), sec = s % 60;
  return (m < 10 ? '0' : '') + m + ':' + (sec < 10 ? '0' : '') + sec;
}

function mat6TesteCheck(qid, tipo, val, btn) {
  if (_mat6Teste.answered[qid]) return;
  if (typeof _capCheckAnswer !== 'function') return;
  var r = _capCheckAnswer(qid, tipo, val);
  if (!r) return;
  _mat6Teste.answered[qid] = true;
  if (r.correct) _mat6Teste.score.correct++;
  _mat6Teste.score.total++;
  if (typeof _capShowFeedback === 'function') _capShowFeedback(qid, r.correct, r.expl, val, btn);
  var a = document.getElementById('mat6-teste-answered');
  if (a) a.textContent = _mat6Teste.score.total + ' / ' + _mat6Teste.qtd;
  mat6SaveProgress(_mat6Teste.cap, r.correct);
  if (_mat6Teste.score.total >= _mat6Teste.qtd) setTimeout(mat6TesteFinish, 600);
}

function mat6TesteFinish() {
  if (_mat6Teste.timer) { clearInterval(_mat6Teste.timer); _mat6Teste.timer = null; }
  var app = document.getElementById('mat6-teste-app');
  if (!app) return;
  var total = _mat6Teste.qtd;
  var correct = _mat6Teste.score.correct;
  var pct = total > 0 ? Math.round(correct / total * 100) : 0;
  _mat6PM(_mat6Teste.cap, 'quiz', { pontuacao: correct, total: total });
  var nota = Math.round(correct / total * 20 * 10) / 10;
  var emoji = pct >= 90 ? '🏆' : pct >= 70 ? '⭐' : pct >= 50 ? '👍' : '📚';
  app.innerHTML =
    '<div style="text-align:center;padding:2.5rem 1rem">' +
      '<div style="font-size:3.5rem;margin-bottom:.75rem">' + emoji + '</div>' +
      '<div style="font-family:\'Cormorant Garamond\',serif;font-size:2.2rem;font-weight:900;color:var(--ink)">' + nota + ' / 20</div>' +
      '<div style="color:var(--ink3);margin:.5rem 0 1.5rem">' + correct + ' certas em ' + total + ' questões (' + pct + '%)</div>' +
      '<button class="btn btn-primary" onclick="mat6TesteRenderConfig()">↺ Novo teste</button>' +
    '</div>';
}

/* ════════════════════════════════════════════════════════════════
   SUB-MODO: JOGOS (reutiliza o motor genérico _j24AutoInit)
   ════════════════════════════════════════════════════════════════ */
var _mat6JogosInited = false;
function mat6JogosInit() {
  _mat6PM(_mat6Prat.cap || 1, 'jogo');
  if (_mat6JogosInited) return;
  if (typeof _j24AutoInit === 'function') {
    // Regista o provedor de perguntas DESTE ano (matéria correta nos jogos)
    if (typeof _gRegisterProvider === 'function') {
      _gRegisterProvider('mat6-jogos-app', function (level) {
        var nCaps = _mat6CapMeta.length;
        for (var att = 0; att < 6; att++) {
          var cap = 1 + Math.floor(Math.random() * nCaps);
          var gen = _mat6Gerador(cap);
          var banco = (typeof _mat6Banco !== 'undefined' && _mat6Banco[cap]) ? _mat6Banco[cap] : null;
          var q = _jogoQFromGerador(gen, _mat6TemasCount[cap], banco, level);
          if (q) return q;
        }
        return null;
      });
    }
    _j24AutoInit('mat6-jogos-app', 'medio');
    _mat6JogosInited = true;
  } else {
    var app = document.getElementById('mat6-jogos-app');
    if (app) app.innerHTML = '<p style="color:var(--ink4);padding:2rem;text-align:center">Jogos indisponíveis (motor não carregado).</p>';
  }
}

/* ════════════════════════════════════════════════════════════════
   TAB PROGRESSO
   Lê edupt_mat6_capN (gravado por mat6SaveProgress). Mostra resumo
   global, stats, barras por capítulo, Relatório PDF e Limpar.
   ════════════════════════════════════════════════════════════════ */
function _mat6ProgGetCaps() {
  var out = [];
  var nCaps = _mat6CapMeta.length;
  for (var cap = 1; cap <= nCaps; cap++) {
    var correct = 0, total = 0;
    try {
      var d = JSON.parse(localStorage.getItem('edupt_mat6_cap' + cap) || '{}');
      if (d.sections) Object.keys(d.sections).forEach(function(k) {
        correct += (d.sections[k].correct || 0);
        total += (d.sections[k].total || 0);
      });
    } catch (e) {}
    out.push({ cap: cap, correct: correct, total: total, pct: total > 0 ? Math.round(correct / total * 100) : 0 });
  }
  return out;
}

function mat6RenderProgresso() {
  var el = document.getElementById('mat6-progresso-content');
  if (!el) return;
  var caps = _mat6ProgGetCaps();
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
     + '<button onclick="mat6ProgDownloadPDF()" style="font-family:inherit;font-size:.82rem;font-weight:700;color:#8b3a35;background:none;border:none;cursor:pointer;text-decoration:underline;padding:0">Guarda o relatório PDF</button> para o manteres.</span>'
     + '</div>';

  // Resumo global (gradiente terracota do 6.º ano)
  h += '<div style="background:var(--m6c1-base);border:1.5px solid var(--m6c1-mid);border-radius:16px;padding:1.1rem 1.25rem;margin-bottom:1.25rem;display:flex;align-items:center;gap:1rem;flex-wrap:wrap">'
     +   '<div style="width:52px;height:52px;border-radius:50%;background:var(--m6c1-mid);display:flex;align-items:center;justify-content:center;flex-shrink:0"><i class="ph ' + icon + '" style="font-size:1.4rem;color:#fff"></i></div>'
     +   '<div style="flex:1;min-width:180px">'
     +     '<div style="font-family:\'Cormorant Garamond\',serif;font-size:1.6rem;font-weight:900;color:var(--ink);line-height:1">' + (totalT > 0 ? globalPct + '<span style="font-size:1rem">%</span>' : '-') + '</div>'
     +     '<div style="font-size:.82rem;color:var(--ink2);margin-top:3px">' + msg + '</div>'
     +   '</div>'
     +   '<button class="btn btn-ghost" onclick="mat6ProgDownloadPDF()" style="font-size:.78rem;padding:7px 14px;display:inline-flex;align-items:center;gap:5px"><i class="ph ph-file-text"></i>Relatório PDF</button>'
     + '</div>';

  // XP + streak do ProgressManager (apenas dos capítulos do 6.º ano)
  var pmXp = 0, pmStreak = 0;
  if (typeof ProgressManager !== 'undefined') {
    try {
      var sum = ProgressManager.getSummary();
      pmStreak = sum.streak || 0;
      if (sum.caps) Object.keys(sum.caps).forEach(function(k) { if (k.indexOf('m6cap') === 0) pmXp += (sum.caps[k].xp || 0); });
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
    var m = _mat6CapMeta[c.cap - 1];
    var color = _mat6CapColors[c.cap] || '#516860';
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
      var mp = _mat6CapMeta[pior.cap - 1];
      var colorp = _mat6CapColors[pior.cap] || '#516860';
      h += '<div class="card mt-4" style="border-color:' + colorp + '">'
        + '<div class="card-title" style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:.5rem">'
        + '<span>🎯 Treino Direcionado</span></div>'
        + '<div style="font-size:.85rem;color:var(--ink2);margin:.3rem 0 .8rem">O capítulo onde tens mais a melhorar é <strong>' + mp.label + '</strong> (' + pior.pct + '%). Pratica mais um pouco para subir a tua taxa!</div>'
        + '<button class="btn btn-primary" onclick="mat6TreinarCap(' + pior.cap + ')" style="display:inline-flex;align-items:center;gap:6px"><i class="ph ph-target"></i> Treinar ' + mp.label + '</button>'
        + '</div>';
    }
  }

  // Última atualização
  h += '<div style="font-size:.72rem;color:var(--ink4);margin-top:1rem">Última atualização: ' + new Date().toLocaleString('pt-PT', { hour: '2-digit', minute: '2-digit', day: '2-digit', month: '2-digit' }) + '</div>';

  // Limpar
  h += '<div class="mt-4 flex flex-wrap gap-3"><button class="btn btn-ghost" onclick="mat6ProgReset()"><i class="ph ph-trash"></i> Limpar progresso</button></div>';

  el.innerHTML = h;
}

// Abre a tab Exercícios da Praticar já no capítulo indicado (treino direcionado).
function mat6TreinarCap(cap) {
  _mat6Prat.cap = cap;
  _mat6Prat.st = 0;
  mat6SwitchTab('exercicios', null);
}

function mat6ProgReset() {
  if (typeof window !== 'undefined' && window.confirm && !window.confirm('Limpar todo o progresso do 6.º ano? Esta ação não pode ser desfeita.')) return;
  for (var cap = 1; cap <= _mat6CapMeta.length; cap++) { try { localStorage.removeItem('edupt_mat6_cap' + cap); } catch (e) {} }
  // Remove só os capítulos do 6.º ano (m6cap*) do ProgressManager, preservando os outros anos.
  try {
    var raw = localStorage.getItem('edupt_progress_v2');
    if (raw) {
      var d = JSON.parse(raw);
      if (d.caps) { Object.keys(d.caps).forEach(function(k) { if (k.indexOf('m6cap') === 0) delete d.caps[k]; }); }
      localStorage.setItem('edupt_progress_v2', JSON.stringify(d));
    }
  } catch (e) {}
  mat6RenderProgresso();
  if (typeof eduToast === 'function') eduToast('Progresso do 6.º ano limpo.', 'ok');
}

function mat6ProgDownloadPDF() {
  var caps = _mat6ProgGetCaps();
  var totalC = 0, totalT = 0;
  caps.forEach(function(c) { totalC += c.correct; totalT += c.total; });
  var globalPct = totalT > 0 ? Math.round(totalC / totalT * 100) : 0;
  var rows = caps.map(function(c) {
    var m = _mat6CapMeta[c.cap - 1];
    return '<tr><td style="padding:6px 10px;border-bottom:1px solid #eee">' + m.label + '</td>'
      + '<td style="padding:6px 10px;border-bottom:1px solid #eee;text-align:center">' + (c.total > 0 ? c.correct + ' / ' + c.total : '-') + '</td>'
      + '<td style="padding:6px 10px;border-bottom:1px solid #eee;text-align:center">' + (c.total > 0 ? c.pct + '%' : '-') + '</td></tr>';
  }).join('');
  var html = '<div style="font-family:Arial,sans-serif;max-width:680px;margin:0 auto;padding:24px">'
    + '<h1 style="font-size:20px;margin:0 0 4px">Relatório de Progresso · Matemática 6.º Ano</h1>'
    + '<div style="color:#666;font-size:13px;margin-bottom:16px">3ponto14 · ' + new Date().toLocaleString('pt-PT', { day: '2-digit', month: '2-digit', year: 'numeric' }) + '</div>'
    + '<div style="background:#eef3f9;border:1px solid #5a7fa8;border-radius:8px;padding:12px 16px;margin-bottom:16px">'
    + '<strong>Taxa global:</strong> ' + (totalT > 0 ? globalPct + '%' : '-') + ' &nbsp;·&nbsp; ' + totalC + ' certas em ' + totalT + ' questões.</div>'
    + '<table style="width:100%;border-collapse:collapse;font-size:14px"><thead><tr style="background:#36527a;color:#fff">'
    + '<th style="padding:8px 10px;text-align:left">Capítulo</th><th style="padding:8px 10px">Certas</th><th style="padding:8px 10px">%</th></tr></thead>'
    + '<tbody>' + rows + '</tbody></table></div>';
  if (typeof htmlToPdfDownload === 'function') htmlToPdfDownload(html, 'progresso-mat6.pdf');
  else if (typeof eduToast === 'function') eduToast('Geração de PDF indisponível.', 'warn');
}

/* ════════════════════════════════════════════════════════════════
   TAB FICHAS - gerador rico (multi-capítulo), igual ao 7.º ano.
   Tipos: resumo teórico, exercícios, teste, minitestes, soluções.
   Seleção de vários capítulos; nível; nº de exercícios; PDF ou HTML.
   ════════════════════════════════════════════════════════════════ */
var _mat6gf = {
  caps: {},            // { cap: true } selecionados
  tipos: { resumo: true, exercicios: true, teste: true, minitestes: false, solucoes: true },
  dif: 'facil',
  qty: 10
};

// Constrói a lista de capítulos selecionáveis (só os com gerador).
function mat6FichasBuildNav() {
  var el = document.getElementById('mat6-fichas-caps');
  if (!el) return;
  // por defeito, seleciona o primeiro capítulo com gerador
  var temAlgum = false;
  for (var k in _mat6gf.caps) { if (_mat6gf.caps[k]) { temAlgum = true; break; } }
  var h = '';
  _mat6CapMeta.forEach(function(m) {
    var hasGen = !!_mat6Gerador(m.n);
    if (!hasGen) return;
    if (!temAlgum) { _mat6gf.caps[m.n] = true; temAlgum = true; } // 1.º disponível
    var sel = !!_mat6gf.caps[m.n];
    var color = _mat6CapColors[m.n] || '#516860';
    var style = sel ? 'background:' + color + ';border-color:' + color + ';color:#fff' : '';
    h += '<button class="gf-cap-btn' + (sel ? ' active' : '') + '" data-cap="' + m.n + '" onclick="mat6gfToggleCap(' + m.n + ',this)" style="' + style + '">' + m.icon + ' ' + m.label + '</button>';
  });
  el.innerHTML = h;
}

function mat6gfToggleCap(cap, btn) {
  _mat6gf.caps[cap] = !_mat6gf.caps[cap];
  var color = _mat6CapColors[cap] || '#516860';
  if (_mat6gf.caps[cap]) { btn.classList.add('active'); btn.style.background = color; btn.style.borderColor = color; btn.style.color = '#fff'; }
  else { btn.classList.remove('active'); btn.style.background = ''; btn.style.borderColor = ''; btn.style.color = ''; }
}

function mat6gfToggleType(btn) {
  var t = btn.getAttribute('data-type');
  _mat6gf.tipos[t] = !_mat6gf.tipos[t];
  btn.classList.toggle('active', _mat6gf.tipos[t]);
  var tick = btn.querySelector('.gf-tick'); if (tick) tick.textContent = _mat6gf.tipos[t] ? '✓' : '';
}

function mat6gfSetDif(btn) {
  _mat6gf.dif = btn.getAttribute('data-dif');
  var grp = document.getElementById('mat6-fichas-dif');
  if (grp) grp.querySelectorAll('.gf-dif-btn').forEach(function(b){ b.classList.remove('active'); });
  btn.classList.add('active');
}

function mat6gfSetQty(btn) {
  _mat6gf.qty = parseInt(btn.getAttribute('data-qty')) || 10;
  var grp = document.getElementById('mat6-fichas-qty');
  if (grp) grp.querySelectorAll('.gf-dif-btn').forEach(function(b){ b.classList.remove('active'); });
  btn.classList.add('active');
}

// Renderiza um bloco de exercícios (com ou sem espaço de resposta).
function _mat6gfExBloco(exs, startNum) {
  var h = '';
  exs.forEach(function(ex, i) {
    h += '<div style="margin-bottom:13px;page-break-inside:avoid">'
      + '<div style="font-weight:600;font-size:12.5px;margin-bottom:3px">' + (startNum + i) + '. ' + ex.enun + '</div>';
    if (ex.visual) h += '<div style="margin:4px 0 6px">' + ex.visual + '</div>'; // gráfico/tabela/figura SVG
    if (ex.tipo === 'mc' && ex.opcoes) {
      h += '<div style="font-size:12px;color:#333;padding-left:14px">';
      var _ops = (typeof _normalizaOpcoes === 'function') ? _normalizaOpcoes(ex.opcoes, ex.resposta) : ex.opcoes;
      _ops.forEach(function(o, k) { h += '(' + 'ABCD'[k] + ') ' + o + '&nbsp;&nbsp;&nbsp; '; });
      h += '</div>';
    } else if (ex.tipo === 'vf') {
      h += '<div style="font-size:12px;color:#333;padding-left:14px">Verdadeiro&nbsp;☐&nbsp;&nbsp;Falso&nbsp;☐</div>';
    } else {
      h += '<div style="border-bottom:1px solid #bbb;height:20px;width:55%;margin-top:3px"></div>';
    }
    h += '</div>';
  });
  return h;
}

function _mat6gfGenExs(cap, n) {
  var gen = _mat6Gerador(cap); if (!gen) return [];
  var nTemas = _mat6TemasCount[cap] || 1;
  var tipos = ['mc', 'fill', 'vf', 'fill', 'mc', 'mc'];
  var exs = [];
  for (var i = 0; i < n; i++) {
    var ex = gen(String((i % nTemas) + 1), tipos[i % tipos.length], _mat6gf.dif);
    if (ex) exs.push(ex);
  }
  return exs;
}

function mat6gfGerar(formato) {
  // capítulos selecionados
  var capsSel = [];
  _mat6CapMeta.forEach(function(m) { if (_mat6gf.caps[m.n] && _mat6Gerador(m.n)) capsSel.push(m.n); });
  var status = document.getElementById('mat6-fichas-status');
  if (!capsSel.length) { if (status) status.textContent = 'Seleciona pelo menos um capítulo.'; return; }
  var algumTipo = _mat6gf.tipos.resumo || _mat6gf.tipos.exercicios || _mat6gf.tipos.teste || _mat6gf.tipos.minitestes;
  if (!algumTipo) { if (status) status.textContent = 'Seleciona pelo menos um tipo de conteúdo.'; return; }
  if (status) status.textContent = 'A gerar…';

  var difLabel = { facil: 'Fácil', medio: 'Médio', dificil: 'Difícil' }[_mat6gf.dif];
  var solucoes = []; // {num, ex} acumuladas para a secção final
  var solCounter = 0;

  var corpo = '';
  capsSel.forEach(function(cap, ci) {
    _mat6PM(cap, 'ficha'); // gerou ficha deste capítulo
    var m = _mat6CapMeta[cap - 1];
    var color = _mat6CapColors[cap] || '#36527a';
    corpo += '<div style="' + (ci > 0 ? 'page-break-before:always;' : '') + 'margin-bottom:6px">'
      + '<h2 style="font-size:16px;color:' + color + ';border-bottom:2px solid ' + color + ';padding-bottom:4px;margin:0 0 10px">' + cap + '. ' + m.label + '</h2>';

    // Resumo teórico (das flashcards)
    if (_mat6gf.tipos.resumo) {
      var cards = _mat6Cards[cap] || [];
      if (cards.length) {
        corpo += '<div style="margin-bottom:12px"><h3 style="font-size:13px;color:#444;margin:0 0 5px">Resumo teórico</h3>';
        cards.slice(0, 8).forEach(function(c) {
          corpo += '<div style="font-size:11.5px;margin-bottom:4px"><strong>' + c.q + '</strong> ' + c.a + (c.v ? '<div style="margin:3px 0">' + c.v + '</div>' : '') + '</div>';
        });
        corpo += '</div>';
      }
    }
    // Exercícios
    if (_mat6gf.tipos.exercicios) {
      var exs = _mat6gfGenExs(cap, _mat6gf.qty);
      corpo += '<div style="margin-bottom:12px"><h3 style="font-size:13px;color:#444;margin:0 0 5px">Exercícios</h3>'
        + _mat6gfExBloco(exs, solCounter + 1) + '</div>';
      exs.forEach(function(ex) { solCounter++; solucoes.push({ num: solCounter, ex: ex }); });
    }
    // Teste de avaliação (8 questões mistas)
    if (_mat6gf.tipos.teste) {
      var exsT = _mat6gfGenExs(cap, 8);
      corpo += '<div style="margin-bottom:12px"><h3 style="font-size:13px;color:#444;margin:0 0 5px">Teste de avaliação</h3>'
        + _mat6gfExBloco(exsT, solCounter + 1) + '</div>';
      exsT.forEach(function(ex) { solCounter++; solucoes.push({ num: solCounter, ex: ex }); });
    }
    // Minitestes (um por subtema, 4 questões cada)
    if (_mat6gf.tipos.minitestes) {
      var subt = _mat6Subtemas[cap] || [];
      var mapa = _mat6SubtemaTemas[cap] || {};
      corpo += '<div style="margin-bottom:12px"><h3 style="font-size:13px;color:#444;margin:0 0 5px">Minitestes</h3>';
      subt.forEach(function(st, si) {
        var temas = mapa[si + 1] || [String(si + 1)];
        var gen = _mat6Gerador(cap);
        var exsM = [];
        for (var q = 0; q < 4; q++) {
          var tema = temas[q % temas.length];
          var ex = gen(tema, (q % 2 === 0) ? 'mc' : 'fill', _mat6gf.dif);
          if (ex) exsM.push(ex);
        }
        corpo += '<div style="margin-bottom:8px"><div style="font-size:12px;font-weight:700;color:#555">Mini ' + (si + 1) + ' · ' + st + '</div>'
          + _mat6gfExBloco(exsM, solCounter + 1) + '</div>';
        exsM.forEach(function(ex) { solCounter++; solucoes.push({ num: solCounter, ex: ex }); });
      });
      corpo += '</div>';
    }
    corpo += '</div>';
  });

  // Secção de soluções
  var solHTML = '';
  if (_mat6gf.tipos.solucoes && solucoes.length) {
    var lst = solucoes.map(function(s) {
      return '<div style="font-size:11px;margin-bottom:2px"><strong>' + s.num + '.</strong> ' + s.ex.resposta + (s.ex.expl ? ' - <span style="color:#666">' + s.ex.expl + '</span>' : '') + '</div>';
    }).join('');
    solHTML = '<div style="page-break-before:always;padding-top:8px"><h2 style="font-size:16px;border-bottom:2px solid #36527a;padding-bottom:4px">Soluções</h2>' + lst + '</div>';
  }

  var nomesCaps = capsSel.map(function(c) { return _mat6CapMeta[c - 1].label; }).join(', ');
  var html = '<div style="font-family:Arial,sans-serif;max-width:740px;margin:0 auto;padding:24px;color:#222">'
    + '<div style="display:flex;justify-content:space-between;align-items:baseline;border-bottom:2px solid #36527a;padding-bottom:8px;margin-bottom:14px">'
    + '<div><h1 style="font-size:18px;margin:0">Ficha de Trabalho · Matemática 6.º Ano</h1>'
    + '<div style="font-size:11.5px;color:#666">' + nomesCaps + ' · Nível ' + difLabel + '</div></div>'
    + '<div style="font-size:11.5px;color:#888">3ponto14</div></div>'
    + '<div style="font-size:11.5px;color:#666;margin-bottom:12px">Nome: ____________________________  Data: ____ / ____ / ______</div>'
    + corpo + solHTML + '</div>';

  var _temasNomes = capsSel.map(function(c){ return _mat6CapMeta[c-1].label; });
  var fname = (typeof _nomeFicha === 'function') ? _nomeFicha('6', 'matematica', _temasNomes, formato) : ('ficha-mat6.' + (formato === 'html' ? 'html' : 'pdf'));
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
function _mat6Init() {
  if (typeof _addStatsTeoriaVisuais === 'function') _addStatsTeoriaVisuais(_mat6Cards[7], '#c44a5a'); // cap7 Dados
  if (typeof _addGeoTeoriaVisuais === 'function') _addGeoTeoriaVisuais(_mat6Cards[4], '#c44a6a'); // cap4 Perímetros e Áreas
  // arranca na tab Teoria com o cap 1 selecionado
  mat6BuildResumoNav();
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _mat6Init);
else _mat6Init();

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
   GERADORES DE EXERCÍCIOS - Matemática 6.º ano
   Reutilizam os helpers genéricos acima (rnd_m81, shuffle_m81…).
   ════════════════════════════════════════════════════════════════ */
function _ehPrimo_m6(n) { if (n < 2) return false; for (var i = 2; i * i <= n; i++) { if (n % i === 0) return false; } return true; }
function _mdc_m6(a, b) { a = Math.abs(a); b = Math.abs(b); while (b) { var t = b; b = a % b; a = t; } return a; }
function _mmc_m6(a, b) { return a * b / _mdc_m6(a, b); }

// ═══ CAP 1 · Números Primos e Divisibilidade ═══
// Temas: 1 Primos · 2 Critérios de divisibilidade · 3 mmc/mdc
function buildEx_m6c1(tema, tipo, dif) {
  tema = String(tema);
  if (tema === '1') {
    var primos = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37];
    var compostos = [4, 6, 8, 9, 10, 12, 14, 15, 16, 18, 20, 21, 25, 27];
    var usePrimo = Math.random() < 0.5;
    var n = usePrimo ? primos[rnd_m81(0, primos.length - 1)] : compostos[rnd_m81(0, compostos.length - 1)];
    return {
      enun: 'O número <strong>' + n + '</strong> é primo?',
      tipo: 'mc', opcoes: ['Sim', 'Não'], resposta: _ehPrimo_m6(n) ? 'Sim' : 'Não',
      expl: _ehPrimo_m6(n) ? n + ' só tem dois divisores (1 e ' + n + ') → é primo.' : n + ' tem mais de dois divisores → é composto.',
      tema: 'T1 · Primos'
    };
  }
  if (tema === '2') {
    var d = [2, 3, 5, 9, 10][rnd_m81(0, 4)];
    var ehMult = Math.random() < 0.5;
    var n2 = ehMult ? d * rnd_m81(4, 20) : d * rnd_m81(4, 20) + rnd_m81(1, d - 1);
    return {
      enun: 'Aplicando o critério de divisibilidade, <strong>' + n2 + '</strong> é divisível por ' + d + '?',
      tipo: 'mc', opcoes: ['Sim', 'Não'], resposta: (n2 % d === 0) ? 'Sim' : 'Não',
      expl: n2 % d === 0 ? n2 + ' é divisível por ' + d + ' (' + n2 + ' ÷ ' + d + ' = ' + (n2 / d) + ').' : n2 + ' não é divisível por ' + d + '.',
      tema: 'T2 · Divisibilidade'
    };
  }
  // tema 3 · mmc ou mdc
  var a = rnd_m81(2, 12), b = rnd_m81(2, 12);
  var pedeMMC = Math.random() < 0.5;
  if (pedeMMC) {
    return {
      enun: 'Calcula o m.m.c. (mínimo múltiplo comum) de ' + a + ' e ' + b + '.',
      tipo: 'fill', resposta: String(_mmc_m6(a, b)),
      expl: 'm.m.c.(' + a + ', ' + b + ') = ' + _mmc_m6(a, b) + ' (o menor número múltiplo de ambos).',
      tema: 'T3 · mmc/mdc'
    };
  }
  return {
    enun: 'Calcula o m.d.c. (máximo divisor comum) de ' + a + ' e ' + b + '.',
    tipo: 'fill', resposta: String(_mdc_m6(a, b)),
    expl: 'm.d.c.(' + a + ', ' + b + ') = ' + _mdc_m6(a, b) + ' (o maior número que divide ambos).',
    tema: 'T3 · mmc/mdc'
  };
}

// ═══ CAP 2 · Frações e Potências ═══
// Temas: 1 Operações (× ÷) · 2 Potências de fração · 3 Fração de uma quantidade / %
function buildEx_m6c2(tema, tipo, dif) {
  tema = String(tema);
  if (tema === '1') {
    var a = rnd_m81(1, 6), b = rnd_m81(2, 7), c = rnd_m81(1, 6), d = rnd_m81(2, 7);
    var mult = Math.random() < 0.6;
    if (mult) {
      var r = reduce_m81(a * c, b * d);
      return {
        enun: 'Calcula: <strong>' + a + '/' + b + ' × ' + c + '/' + d + '</strong> (fração irredutível)',
        tipo: 'fill_frac', resposta: fmtFrac_m81(r[0], r[1]),
        expl: 'Multiplica numeradores e denominadores: (' + a + '×' + c + ')/(' + b + '×' + d + ') = ' + (a * c) + '/' + (b * d) + ' = ' + fmtFrac_m81(r[0], r[1]) + '.',
        tema: 'T1 · Operações'
      };
    }
    var r2 = reduce_m81(a * d, b * c);
    return {
      enun: 'Calcula: <strong>' + a + '/' + b + ' ÷ ' + c + '/' + d + '</strong> (fração irredutível)',
      tipo: 'fill_frac', resposta: fmtFrac_m81(r2[0], r2[1]),
      expl: 'Dividir é multiplicar pelo inverso: ' + a + '/' + b + ' × ' + d + '/' + c + ' = ' + fmtFrac_m81(r2[0], r2[1]) + '.',
      tema: 'T1 · Operações'
    };
  }
  if (tema === '2') {
    var bn = rnd_m81(2, 4), bd = rnd_m81(2, 5), e = rnd_m81(2, 3);
    var rn = Math.pow(bn, e), rd = Math.pow(bd, e);
    var r3 = reduce_m81(rn, rd);
    return {
      enun: 'Calcula: <strong>(' + bn + '/' + bd + ')' + sup_m81(e) + '</strong> (fração irredutível)',
      tipo: 'fill_frac', resposta: fmtFrac_m81(r3[0], r3[1]),
      expl: '(a/b)ⁿ = aⁿ/bⁿ → ' + bn + sup_m81(e) + '/' + bd + sup_m81(e) + ' = ' + rn + '/' + rd + (r3[1] !== rd ? ' = ' + fmtFrac_m81(r3[0], r3[1]) : '') + '.',
      tema: 'T2 · Potências'
    };
  }
  // tema 3 · fração de uma quantidade
  var den = [2, 3, 4, 5][rnd_m81(0, 3)];
  var numr = rnd_m81(1, den - 1);
  var qtds = [];
  for (var q = 1; q <= 30; q++) { if ((q * numr) % den === 0) qtds.push(q * den); }
  var N = [den * 4, den * 5, den * 6, den * 10][rnd_m81(0, 3)];
  var res = N * numr / den;
  return {
    enun: 'Quanto é <strong>' + numr + '/' + den + ' de ' + N + '</strong>?',
    tipo: 'fill', resposta: String(res),
    expl: numr + '/' + den + ' de ' + N + ' = (' + numr + ' × ' + N + ') ÷ ' + den + ' = ' + (numr * N) + ' ÷ ' + den + ' = ' + res + '.',
    tema: 'T3 · Fração de Quantidade'
  };
}

// ═══ CAP 3 · Números Racionais (negativos) ═══
// Temas: 1 Comparar · 2 Adição · 3 Subtração / simétrico / módulo
function buildEx_m6c3(tema, tipo, dif) {
  tema = String(tema);
  if (tema === '1') {
    var a = rnd_m81(-15, 15), b; do { b = rnd_m81(-15, 15); } while (b === a);
    var maior = a > b ? a : b;
    return {
      enun: 'Qual é o maior número: <strong>' + a + '</strong> ou <strong>' + b + '</strong>?',
      tipo: 'mc', opcoes: shuffle_m81([String(a), String(b)]), resposta: String(maior),
      expl: 'Na reta numérica, o maior é o que está mais à direita: ' + maior + '.',
      tema: 'T1 · Comparar'
    };
  }
  if (tema === '2') {
    var a2 = rnd_m81(-12, 12), b2 = rnd_m81(-12, 12);
    return {
      enun: 'Calcula: <strong>' + a2 + ' + (' + b2 + ')</strong>',
      tipo: 'fill', resposta: String(a2 + b2),
      expl: a2 + ' + (' + b2 + ') = ' + (a2 + b2) + '. (Sinais iguais: soma; diferentes: subtrai e fica com o sinal do maior módulo.)',
      tema: 'T2 · Adição'
    };
  }
  // tema 3 · subtração, simétrico, módulo
  var kind = rnd_m81(0, 2);
  if (kind === 0) {
    var a3 = rnd_m81(-10, 10), b3 = rnd_m81(-10, 10);
    return {
      enun: 'Calcula: <strong>' + a3 + ' − (' + b3 + ')</strong>',
      tipo: 'fill', resposta: String(a3 - b3),
      expl: a3 + ' − (' + b3 + ') = ' + a3 + ' + (' + (-b3) + ') = ' + (a3 - b3) + '.',
      tema: 'T3 · Subtração'
    };
  }
  if (kind === 1) {
    var n = rndNZ_m81(-20, 20);
    return {
      enun: 'Qual é o simétrico de <strong>' + n + '</strong>?',
      tipo: 'fill', resposta: String(-n),
      expl: 'O simétrico de ' + n + ' é ' + (-n) + ' (sinal trocado).',
      tema: 'T3 · Simétrico'
    };
  }
  var n2 = rndNZ_m81(-20, 20);
  return {
    enun: 'Calcula o valor absoluto: <strong>|' + n2 + '|</strong>',
    tipo: 'fill', resposta: String(Math.abs(n2)),
    expl: '|' + n2 + '| = ' + Math.abs(n2) + ' (distância ao zero, sempre ≥ 0).',
    tema: 'T3 · Valor Absoluto'
  };
}

// ═══ CAP 4 · Perímetros e Áreas ═══
// Temas: 1 Perímetro/área do círculo (π=3,14) · 2 Áreas de polígonos · 3 Perímetro de polígonos
function buildEx_m6c4(tema, tipo, dif) {
  tema = String(tema);
  var PI = 3.14;
  if (tema === '1') {
    var r = rnd_m81(1, 10);
    var visCirc = (typeof EduVisual !== 'undefined') ? EduVisual.circulo({ rLabel: 'r = ' + r + ' cm', color: '#c44a6a' }) : '';
    var pedePerim = Math.random() < 0.5;
    if (pedePerim) {
      var p = Math.round(2 * PI * r * 100) / 100;
      return {
        enun: 'Qual é o perímetro deste círculo de raio ' + r + ' cm? (usa π = 3,14)',
        visual: visCirc,
        tipo: 'fill', resposta: (p % 1 === 0 ? String(p) : p.toString().replace('.', ',')),
        expl: 'P = 2 × π × r = 2 × 3,14 × ' + r + ' = ' + (p % 1 === 0 ? p : p.toString().replace('.', ',')) + ' cm.',
        tema: 'T1 · Círculo'
      };
    }
    var area = Math.round(PI * r * r * 100) / 100;
    return {
      enun: 'Qual é a área deste círculo de raio ' + r + ' cm? (usa π = 3,14)',
      visual: visCirc,
      tipo: 'fill', resposta: (area % 1 === 0 ? String(area) : area.toString().replace('.', ',')),
      expl: 'A = π × r² = 3,14 × ' + (r * r) + ' = ' + (area % 1 === 0 ? area : area.toString().replace('.', ',')) + ' cm².',
      tema: 'T1 · Círculo'
    };
  }
  if (tema === '2') {
    var forma = rnd_m81(0, 2);
    if (forma === 0) {
      var c = rnd_m81(3, 15), l = rnd_m81(2, c);
      var visRet = (typeof EduVisual !== 'undefined') ? EduVisual.retangulo(c, l, { compLabel: c + ' cm', largLabel: l + ' cm', color: '#c44a6a' }) : '';
      return { enun: 'Qual é a área deste retângulo de ' + c + ' cm por ' + l + ' cm?', visual: visRet, tipo: 'fill', resposta: String(c * l), expl: 'A = comprimento × largura = ' + c + ' × ' + l + ' = ' + (c * l) + ' cm².', tema: 'T2 · Áreas' };
    }
    if (forma === 1) {
      var base = rnd_m81(2, 12) * 2, h = rnd_m81(3, 10);
      return { enun: 'Área de um triângulo de base ' + base + ' cm e altura ' + h + ' cm?', tipo: 'fill', resposta: String(base * h / 2), expl: 'A = (base × altura) ÷ 2 = (' + base + ' × ' + h + ') ÷ 2 = ' + (base * h / 2) + ' cm².', tema: 'T2 · Áreas' };
    }
    var lado = rnd_m81(3, 12);
    return { enun: 'Área de um quadrado de lado ' + lado + ' cm?', tipo: 'fill', resposta: String(lado * lado), expl: 'A = lado² = ' + lado + '² = ' + (lado * lado) + ' cm².', tema: 'T2 · Áreas' };
  }
  // tema 3 · perímetro de polígonos
  var f = rnd_m81(0, 1);
  if (f === 0) {
    var l3 = rnd_m81(3, 14);
    return { enun: 'Perímetro de um quadrado de lado ' + l3 + ' cm?', tipo: 'fill', resposta: String(4 * l3), expl: 'P = 4 × lado = 4 × ' + l3 + ' = ' + (4 * l3) + ' cm.', tema: 'T3 · Perímetro' };
  }
  var comp = rnd_m81(4, 14), larg = rnd_m81(2, comp - 1);
  return { enun: 'Perímetro de um retângulo ' + comp + ' cm × ' + larg + ' cm?', tipo: 'fill', resposta: String(2 * (comp + larg)), expl: 'P = 2 × (' + comp + ' + ' + larg + ') = ' + (2 * (comp + larg)) + ' cm.', tema: 'T3 · Perímetro' };
}

// ═══ CAP 5 · Volumes ═══
// Temas: 1 Volume cubo/caixa · 2 Capacidade (conversões)
function buildEx_m6c5(tema, tipo, dif) {
  tema = String(tema);
  if (tema === '1') {
    var ehCubo = Math.random() < 0.5;
    if (ehCubo) {
      var a = rnd_m81(2, 9);
      return { enun: 'Qual é o volume de um cubo de aresta ' + a + ' cm?', tipo: 'fill', resposta: String(a * a * a), expl: 'V = aresta³ = ' + a + '³ = ' + a + ' × ' + a + ' × ' + a + ' = ' + (a * a * a) + ' cm³.', tema: 'T1 · Volume' };
    }
    var c = rnd_m81(2, 10), l = rnd_m81(2, 8), h = rnd_m81(2, 6);
    return { enun: 'Qual é o volume de uma caixa de ' + c + ' × ' + l + ' × ' + h + ' cm?', tipo: 'fill', resposta: String(c * l * h), expl: 'V = comprimento × largura × altura = ' + c + ' × ' + l + ' × ' + h + ' = ' + (c * l * h) + ' cm³.', tema: 'T1 · Volume' };
  }
  // tema 2 · capacidade (cm³ ↔ litros)
  var kind = rnd_m81(0, 1);
  if (kind === 0) {
    var litros = rnd_m81(1, 9);
    return { enun: 'Quantos cm³ são ' + litros + ' litros? (1 L = 1000 cm³)', tipo: 'fill', resposta: String(litros * 1000), expl: litros + ' L = ' + litros + ' × 1000 = ' + (litros * 1000) + ' cm³.', tema: 'T2 · Capacidade' };
  }
  var cm3 = rnd_m81(1, 9) * 1000;
  return { enun: 'Quantos litros são ' + cm3 + ' cm³? (1000 cm³ = 1 L)', tipo: 'fill', resposta: String(cm3 / 1000), expl: cm3 + ' cm³ = ' + cm3 + ' ÷ 1000 = ' + (cm3 / 1000) + ' litros.', tema: 'T2 · Capacidade' };
}

// ═══ CAP 6 · Proporcionalidade Direta ═══
// Temas: 1 Constante k · 2 Regra de três · 3 Velocidade/escala
function buildEx_m6c6(tema, tipo, dif) {
  tema = String(tema);
  if (tema === '1') {
    var k = rnd_m81(2, 9), x = rnd_m81(2, 8);
    var y = k * x;
    return {
      enun: 'Numa proporcionalidade direta, y = ' + y + ' quando x = ' + x + '. Qual é a constante k?',
      tipo: 'fill', resposta: String(k),
      expl: 'k = y ÷ x = ' + y + ' ÷ ' + x + ' = ' + k + '.',
      tema: 'T1 · Constante'
    };
  }
  if (tema === '2') {
    var preco1 = rnd_m81(2, 9), qtd1 = rnd_m81(2, 6);
    var total1 = preco1 * qtd1;
    var qtd2 = qtd1 * rnd_m81(2, 4);
    var total2 = preco1 * qtd2;
    return {
      enun: 'Se ' + qtd1 + ' artigos custam ' + total1 + ' €, quanto custam ' + qtd2 + ' artigos?',
      tipo: 'fill', resposta: String(total2),
      expl: 'Regra de três: (' + total1 + ' × ' + qtd2 + ') ÷ ' + qtd1 + ' = ' + total2 + ' €. (Cada artigo custa ' + preco1 + ' €.)',
      tema: 'T2 · Regra de Três'
    };
  }
  // tema 3 · velocidade ou escala
  var kind = rnd_m81(0, 1);
  if (kind === 0) {
    var vel = rnd_m81(40, 90), t = rnd_m81(2, 5);
    var dist = vel * t;
    return {
      enun: 'Um carro anda a ' + vel + ' km/h durante ' + t + ' horas. Que distância percorre?',
      tipo: 'fill', resposta: String(dist),
      expl: 'distância = velocidade × tempo = ' + vel + ' × ' + t + ' = ' + dist + ' km.',
      tema: 'T3 · Velocidade'
    };
  }
  var esc = [10, 50, 100, 500][rnd_m81(0, 3)], cm = rnd_m81(2, 9);
  var real = esc * cm;
  return {
    enun: 'Num mapa à escala 1:' + esc + ', uma distância de ' + cm + ' cm corresponde a quantos cm reais?',
    tipo: 'fill', resposta: String(real),
    expl: 'Real = medida no mapa × escala = ' + cm + ' × ' + esc + ' = ' + real + ' cm.',
    tema: 'T3 · Escala'
  };
}

// ═══ CAP 7 · Organização de Dados ═══
// Temas: 1 Média · 2 Frequência relativa (%) · 3 Amplitude/moda
function buildEx_m6c7(tema, tipo, dif) {
  tema = String(tema);
  if (tema === '1') {
    var arr; var s;
    do { arr = []; for (var j = 0; j < 5; j++) arr.push(rnd_m81(2, 20)); s = arr.reduce(function (a, v) { return a + v; }, 0); } while (s % 5 !== 0);
    if (typeof EduVisual !== 'undefined' && Math.random() < 0.4) {
      var dias6 = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex'];
      var dataM6 = dias6.map(function (d, k) { return { label: d, value: arr[k] }; });
      return {
        enun: 'O gráfico mostra os pontos obtidos em cada dia. Qual é a <strong>média</strong>?',
        visual: EduVisual.barras(dataM6, '#c44a5a'),
        tipo: 'fill', resposta: String(s / 5),
        expl: 'Média = (' + arr.join(' + ') + ') ÷ 5 = ' + s + ' ÷ 5 = ' + (s / 5) + '.',
        tema: 'T1 · Média'
      };
    }
    return {
      enun: 'Calcula a média de: <strong>' + arr.join(', ') + '</strong>',
      tipo: 'fill', resposta: String(s / 5),
      expl: 'Média = (' + arr.join(' + ') + ') ÷ 5 = ' + s + ' ÷ 5 = ' + (s / 5) + '.',
      tema: 'T1 · Média'
    };
  }
  if (tema === '2') {
    var total = [10, 20, 25, 50, 100][rnd_m81(0, 4)];
    var fav = rnd_m81(1, total - 1);
    var pct = Math.round(fav / total * 100);
    return {
      enun: 'Num inquérito a ' + total + ' pessoas, ' + fav + ' escolheram a cor azul. Qual é a frequência relativa (em %)?',
      tipo: 'fill', resposta: String(pct),
      expl: 'Frequência relativa = ' + fav + ' ÷ ' + total + ' × 100 = ' + pct + '%.',
      tema: 'T2 · Frequência'
    };
  }
  // tema 3 · amplitude ou moda
  var kind = rnd_m81(0, 1);
  if (kind === 0) {
    var dados = []; for (var i = 0; i < 5; i++) dados.push(rnd_m81(2, 40));
    var amp = Math.max.apply(null, dados) - Math.min.apply(null, dados);
    return {
      enun: 'Qual é a amplitude do conjunto: <strong>' + dados.join(', ') + '</strong>?',
      tipo: 'fill', resposta: String(amp),
      expl: 'Amplitude = máximo − mínimo = ' + Math.max.apply(null, dados) + ' − ' + Math.min.apply(null, dados) + ' = ' + amp + '.',
      tema: 'T3 · Amplitude'
    };
  }
  // moda com moda única garantida
  var base = []; for (var b = 0; b < 4; b++) base.push(rnd_m81(1, 9));
  var moda = base[rnd_m81(0, 3)];
  var arr2 = base.concat([moda, moda]); shuffle_m81(arr2);
  var freq = {}; arr2.forEach(function (v) { freq[v] = (freq[v] || 0) + 1; });
  var mx = 0, m = moda; Object.keys(freq).forEach(function (k) { if (freq[k] > mx) { mx = freq[k]; m = parseInt(k); } });
  return {
    enun: 'Qual é a moda do conjunto: <strong>' + arr2.join(', ') + '</strong>?',
    tipo: 'fill', resposta: String(m),
    expl: 'A moda é o valor que aparece mais vezes: ' + m + '.',
    tema: 'T3 · Moda'
  };
}

/* ════════════════════════════════════════════════════════════════
   BANCO DE QUESTÕES (contexto/problema) - Matemática · 6.º ano
   ════════════════════════════════════════════════════════════════ */
var _mat6Banco = {
  1: [ // Números Primos e Divisibilidade
    { t: '1', tipo: 'mc', enun: 'Qual é a decomposição de 45 em fatores primos?', opcoes: ['3 × 3 × 5', '5 × 9', '3 × 15', '2 × 3 × 5'], resposta: '3 × 3 × 5', expl: '45 = 9 × 5 = 3 × 3 × 5 = 3² × 5.', tema: 'T1 · Primos' },
    { t: '3', tipo: 'fill', enun: 'A Ana tem 12 rosas e 18 cravos. Quer fazer ramos iguais usando todas as flores. Qual é o maior número de ramos que pode fazer? (m.d.c.)', resposta: '6', expl: 'm.d.c.(12, 18) = 6 → 6 ramos iguais.', tema: 'T3 · mmc/mdc' },
    { t: '3', tipo: 'fill', enun: 'Dois faróis piscam: um de 4 em 4 segundos, outro de 6 em 6. De quantos em quantos segundos piscam juntos? (m.m.c.)', resposta: '12', expl: 'm.m.c.(4, 6) = 12 segundos.', tema: 'T3 · mmc/mdc' }
  ],
  2: [ // Frações e Potências
    { t: '1', tipo: 'fill_frac', enun: 'Calcula 2/3 × 3/4 (fração irredutível).', resposta: '1/2', expl: '(2×3)/(3×4) = 6/12 = 1/2.', tema: 'T1 · Operações' },
    { t: '3', tipo: 'fill', enun: 'Numa escola, 3/5 dos 200 alunos almoçam na cantina. Quantos alunos almoçam na cantina?', resposta: '120', expl: '3/5 de 200 = (3×200)/5 = 120 alunos.', tema: 'T3 · Fração de Quantidade' },
    { t: '2', tipo: 'fill_frac', enun: 'Calcula (2/3)² (fração irredutível).', resposta: '4/9', expl: '(2/3)² = 2²/3² = 4/9.', tema: 'T2 · Potências' }
  ],
  3: [ // Números Racionais (negativos)
    { t: '1', tipo: 'mc', enun: 'A temperatura era −3 °C e desceu 5 °C. Qual é a nova temperatura?', opcoes: ['−8 °C', '2 °C', '−2 °C', '8 °C'], resposta: '−8 °C', expl: '−3 − 5 = −8 °C.', tema: 'T2 · Adição' },
    { t: '1', tipo: 'mc', enun: 'Qual é o maior número: −7 ou −2?', opcoes: ['−2', '−7', 'são iguais', '−7 + 2'], resposta: '−2', expl: 'Na reta numérica, −2 está mais à direita → é maior.', tema: 'T1 · Comparar' },
    { t: '3', tipo: 'fill', enun: 'Um mergulhador está a −12 m e sobe 7 m. A que profundidade fica? (escreve só o número, ex: -5)', resposta: '-5', expl: '−12 + 7 = −5 → fica a −5 m (5 m de profundidade).', tema: 'T3 · Subtração' }
  ],
  4: [ // Perímetros e Áreas
    { t: '2', tipo: 'fill', enun: 'Uma sala retangular tem 6 m por 5 m. Quantos m² de tijoleira são precisos para o chão (área)?', resposta: '30', expl: 'Área = 6 × 5 = 30 m².', tema: 'T2 · Áreas' },
    { t: '1', tipo: 'fill', enun: 'Uma roda de bicicleta tem raio 30 cm. Qual é o perímetro (usa π = 3,14)? (em cm)', resposta: '188,4', expl: 'P = 2 × 3,14 × 30 = 188,4 cm.', tema: 'T1 · Círculo' },
    { t: '2', tipo: 'fill', enun: 'Um triângulo tem base 10 cm e altura 6 cm. Qual é a área (em cm²)?', resposta: '30', expl: 'A = (10 × 6)/2 = 30 cm².', tema: 'T2 · Áreas' }
  ],
  5: [ // Volumes
    { t: '1', tipo: 'fill', enun: 'Um aquário tem a forma de uma caixa de 40 cm × 20 cm × 25 cm. Qual é o volume (em cm³)?', resposta: '20000', expl: 'V = 40 × 20 × 25 = 20000 cm³.', tema: 'T1 · Volume' },
    { t: '2', tipo: 'fill', enun: 'Quantos litros cabem num recipiente de 3000 cm³? (1000 cm³ = 1 L)', resposta: '3', expl: '3000 cm³ = 3000 ÷ 1000 = 3 litros.', tema: 'T2 · Capacidade' }
  ],
  6: [ // Proporcionalidade Direta
    { t: '2', tipo: 'fill', enun: 'Se 3 cadernos custam 6 €, quanto custam 7 cadernos? (em €)', resposta: '14', expl: 'Cada caderno custa 6÷3 = 2 €. 7 × 2 = 14 €.', tema: 'T2 · Regra de Três' },
    { t: '3', tipo: 'fill', enun: 'Um comboio percorre 240 km em 3 horas. Qual é a velocidade média (em km/h)?', resposta: '80', expl: 'v = 240 ÷ 3 = 80 km/h.', tema: 'T3 · Velocidade' },
    { t: '1', tipo: 'fill', enun: 'Numa receita, 4 ovos servem para 8 pessoas. Qual é a constante (ovos por pessoa, em fração ou decimal)?', resposta: '0,5', expl: 'k = 4 ÷ 8 = 0,5 ovos por pessoa.', tema: 'T1 · Constante' }
  ],
  7: [ // Organização de Dados
    { t: '1', tipo: 'fill', enun: 'As alturas (cm) de 5 plantas são 10, 14, 12, 16, 18. Qual é a média (em cm)?', resposta: '14', expl: '(10+14+12+16+18)/5 = 70/5 = 14.', tema: 'T1 · Média' },
    { t: '2', tipo: 'fill', enun: 'Num inquérito a 50 pessoas, 30 preferem café. Qual é a frequência relativa (em %)?', resposta: '60', expl: '30/50 × 100 = 60%.', tema: 'T2 · Frequência' }
  ]
};