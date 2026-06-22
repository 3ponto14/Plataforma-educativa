/* ════════════════════════════════════════════════════════════════
   MAT10 HUB - Matemática A · 10.º ano (6 capítulos)
   Modelo de HUB ÚNICO (ver MODELO BASE no CLAUDE.md).
   Tabs: Teoria · Praticar · Fichas · Progresso.
   ════════════════════════════════════════════════════════════════ */

// ═══ Capítulos do 10.º ano · Matemática A (Domínio 10) ═══
var _mat10CapMeta = [
  {n:1, icon:'<i class="ph ph-intersect"></i>',       label:'Lógica e Conjuntos'},
  {n:2, icon:'<i class="ph ph-radical"></i>',         label:'Álgebra'},
  {n:3, icon:'<i class="ph ph-vector-three"></i>',    label:'Geometria Analítica'},
  {n:4, icon:'<i class="ph ph-chart-line"></i>',      label:'Funções Reais'},
  {n:5, icon:'<i class="ph ph-chart-bar"></i>',       label:'Estatística'},
  {n:6, icon:'<i class="ph ph-triangle"></i>',        label:'Trigonometria'}
];

// Cores por capítulo (alinhadas com --m10cN-* do CSS)
var _mat10CapColors = {
  1:'#3f6b8a', 2:'#3f8a84', 3:'#4a5ea0', 4:'#3f7a9a', 5:'#5a5ea0', 6:'#3f9a7e'
};

// Subtemas por capítulo
var _mat10Subtemas = {
  1: ['Proposições e operações lógicas', 'Condições e quantificadores', 'Conjuntos e intervalos'],
  2: ['Radicais e potências', 'Polinómios e divisão', 'Equações e inequações'],
  3: ['Distâncias e ponto médio', 'Equação da reta', 'Circunferência e elipse', 'Vetores no plano'],
  4: ['Domínio e contradomínio', 'Função afim e quadrática', 'Função módulo e transformações'],
  5: ['Medidas de localização e dispersão', 'Reta de regressão'],
  6: ['Razões trigonométricas', 'Fórmula fundamental e valores notáveis']
};

// ═══ FLASHCARDS / TEORIA por capítulo ═══
// Cap 1 (Números) - conteúdo real, fiel ao Prisma 8.
// Caps 2-8 - placeholders honestos até serem construídos.
// ═══ FLASHCARDS / TEORIA por capítulo (10.º ano) ═══
// ═══ FLASHCARDS / TEORIA por capítulo (10.º ano · Matemática A) ═══
var _mat10Cards = {
  1: [
    { st: 1, tag: 'Definição', q: 'O que é uma proposição?', a: 'Uma afirmação à qual se pode atribuir um e um só valor lógico: Verdadeiro (V) ou Falso (F). Ex: "2 é par" é verdadeira.' },
    { st: 1, tag: 'Definição', q: 'O que é a negação (¬p)?', a: 'A proposição com o valor lógico contrário de p. Se p é V, ¬p é F (e vice-versa).' },
    { st: 1, tag: 'Definição', q: 'O que é a conjunção (p ∧ q)?', a: 'A proposição "p e q". É verdadeira apenas quando p e q são ambas verdadeiras.' },
    { st: 1, tag: 'Definição', q: 'O que é a disjunção (p ∨ q)?', a: 'A proposição "p ou q". É falsa apenas quando p e q são ambas falsas.' },
    { st: 1, tag: 'Definição', q: 'O que é a implicação (p ⇒ q)?', a: 'A proposição "se p então q". Só é falsa quando p é verdadeira e q é falsa.' },
    { st: 1, tag: 'Definição', q: 'O que é a equivalência (p ⇔ q)?', a: 'A proposição "p se e só se q". É verdadeira quando p e q têm o mesmo valor lógico.' },
    { st: 1, tag: 'Propriedade', q: 'Leis de De Morgan', a: '¬(p ∧ q) ⇔ ¬p ∨ ¬q  e  ¬(p ∨ q) ⇔ ¬p ∧ ¬q. A negação troca ∧ por ∨ e nega cada parcela.' },
    { st: 2, tag: 'Definição', q: 'O que é uma condição?', a: 'Uma expressão com variáveis que se torna proposição quando se atribuem valores às variáveis. Ex: x > 3.' },
    { st: 2, tag: 'Definição', q: 'Quantificador universal (∀)', a: '"∀x, p(x)" lê-se "qualquer que seja x, p(x)" - a condição é verdadeira para TODOS os valores.' },
    { st: 2, tag: 'Definição', q: 'Quantificador existencial (∃)', a: '"∃x: p(x)" lê-se "existe x tal que p(x)" - há PELO MENOS UM valor que verifica a condição.' },
    { st: 2, tag: 'Propriedade', q: 'Negação de quantificadores', a: '¬(∀x, p(x)) ⇔ ∃x: ¬p(x)  e  ¬(∃x: p(x)) ⇔ ∀x, ¬p(x).' },
    { st: 2, tag: 'Definição', q: 'Condição necessária e suficiente', a: 'Em p ⇒ q: p é suficiente para q; q é necessária para p. Se p ⇔ q, é necessária E suficiente.' },
    { st: 3, tag: 'Definição', q: 'Operações com conjuntos', a: 'Reunião (A ∪ B): elementos de A ou B. Interseção (A ∩ B): elementos comuns. A \\ B: em A mas não em B.' },
    { st: 1, tag: 'Exemplo', q: 'Nega "todos os alunos passaram"', a: '"Existe (pelo menos) um aluno que não passou."' },
    { st: 1, tag: 'Exemplo', q: 'Valor lógico de (V ∧ F) ∨ V', a: '(V ∧ F) = F; depois F ∨ V = V. Resultado: Verdadeiro.' },
    { st: 3, tag: 'Exemplo', q: '[2, 5] ∩ [4, 8] = ?', a: '[4, 5] (os reais que pertencem a ambos os intervalos).' }
  ],
  2: [
    { st: 1, tag: 'Definição', q: 'O que é a raiz de índice n?', a: 'ⁿ√a é o número que, elevado a n, dá a. Ex: ³√8 = 2 porque 2³ = 8.' },
    { st: 1, tag: 'Regra', q: 'Radical como potência de expoente fracionário', a: 'ⁿ√(aᵐ) = a^(m/n). Ex: √(a³) = a^(3/2); ³√a = a^(1/3).' },
    { st: 1, tag: 'Regra', q: 'Produto e quociente de radicais (mesmo índice)', a: 'ⁿ√a × ⁿ√b = ⁿ√(a×b)  e  ⁿ√a ÷ ⁿ√b = ⁿ√(a÷b).' },
    { st: 1, tag: 'Regra', q: 'Como racionalizar um denominador?', a: 'Multiplica numerador e denominador por um fator que elimine a raiz. Ex: 1/√2 = √2/2.' },
    { st: 1, tag: 'Propriedade', q: 'Propriedades das potências (expoente racional)', a: 'aᵐ × aⁿ = aᵐ⁺ⁿ; aᵐ ÷ aⁿ = aᵐ⁻ⁿ; (aᵐ)ⁿ = aᵐⁿ; a⁻ⁿ = 1/aⁿ; a^(1/n) = ⁿ√a.' },
    { st: 2, tag: 'Definição', q: 'O que é um polinómio?', a: 'Uma expressão aₙxⁿ + … + a₁x + a₀. O grau é o maior expoente com coeficiente não nulo.' },
    { st: 2, tag: 'Definição', q: 'O que é uma raiz (ou zero) de um polinómio?', a: 'Um valor a tal que P(a) = 0. Se a é raiz, então (x − a) é fator de P(x).' },
    { st: 2, tag: 'Regra', q: 'Teorema do resto', a: 'O resto da divisão de P(x) por (x − a) é P(a). Se P(a) = 0, (x − a) divide P(x) exatamente.' },
    { st: 2, tag: 'Estratégia', q: 'Regra de Ruffini', a: 'Método rápido para dividir um polinómio por (x − a): usa só os coeficientes e o valor a. Dá o quociente e o resto.' },
    { st: 3, tag: 'Estratégia', q: 'Como fatorizar um polinómio?', a: 'Encontra uma raiz a (entre os divisores do termo independente), divide por (x − a) e repete com o quociente.' },
    { st: 3, tag: 'Definição', q: 'Fórmula resolvente (2.º grau)', a: 'x = (−b ± √(b² − 4ac)) / (2a) para ax² + bx + c = 0.' },
    { st: 1, tag: 'Regra', q: 'Discriminante e nº de soluções', a: 'Δ = b² − 4ac. Δ > 0 → duas raízes; Δ = 0 → uma; Δ < 0 → nenhuma real.' },
    { st: 3, tag: 'Exemplo', q: 'Simplifica √8', a: '√8 = √(4×2) = 2√2.' },
    { st: 2, tag: 'Exemplo', q: 'Resolve x² − 5x + 6 = 0', a: 'Δ = 25 − 24 = 1; x = (5 ± 1)/2 → x = 3 ou x = 2.' },
    { st: 1, tag: 'Exemplo', q: 'Resto de P(x)=x²−3x+2 por (x−1)?', a: 'P(1) = 1 − 3 + 2 = 0 → resto 0 (e (x−1) é fator).' },
    { st: 1, tag: 'Exemplo', q: 'Escreve ⁴√(x²) como potência', a: 'x^(2/4) = x^(1/2) = √x.' }
  ],
  3: [
    { st: 1, tag: 'Fórmula', q: 'Distância entre dois pontos no plano', a: 'd(A,B) = √((x_B − x_A)² + (y_B − y_A)²). É a aplicação do Teorema de Pitágoras.' },
    { st: 1, tag: 'Fórmula', q: 'Ponto médio de um segmento [AB]', a: 'M = ((x_A + x_B)/2, (y_A + y_B)/2). É a média das coordenadas.' },
    { st: 2, tag: 'Fórmula', q: 'Equação reduzida da reta', a: 'y = mx + b, com declive m e ordenada na origem b. Declive: m = (y₂ − y₁)/(x₂ − x₁).' },
    { st: 2, tag: 'Regra', q: 'Retas paralelas e perpendiculares', a: 'Paralelas: mesmo declive (m₁ = m₂). Perpendiculares: m₁ × m₂ = −1.' },
    { st: 3, tag: 'Fórmula', q: 'Equação da circunferência', a: '(x − a)² + (y − b)² = r², com centro (a, b) e raio r.' },
    { st: 4, tag: 'Definição', q: 'O que é um vetor?', a: 'Um segmento orientado, caracterizado por direção, sentido e norma. Em coordenadas: v(v₁, v₂).' },
    { st: 4, tag: 'Fórmula', q: 'Norma de um vetor', a: '‖v(v₁, v₂)‖ = √(v₁² + v₂²). É o comprimento do vetor.' },
    { st: 4, tag: 'Regra', q: 'Operações com vetores em coordenadas', a: 'Soma: (a₁+b₁, a₂+b₂). Produto por escalar: k·v = (k·v₁, k·v₂). Vetor AB = B − A.' },
    { st: 2, tag: 'Definição', q: 'Vetores colineares', a: 'Dois vetores são colineares (paralelos) se um é múltiplo escalar do outro: u = k·v.' },
    { st: 1, tag: 'Fórmula', q: 'Equação vetorial da reta', a: '(x, y) = (x₀, y₀) + k(v₁, v₂), k ∈ ℝ, onde (x₀, y₀) é um ponto e (v₁, v₂) um vetor diretor.' },
    { st: 3, tag: 'Definição', q: 'Mediatriz de um segmento', a: 'O lugar geométrico dos pontos equidistantes dos extremos. Obtém-se igualando distâncias: d(P,A) = d(P,B).' },
    { st: 1, tag: 'Definição', q: 'O que é a elipse?', a: 'O lugar geométrico dos pontos cuja soma das distâncias a dois pontos fixos (focos) é constante.' },
    { st: 1, tag: 'Exemplo', q: 'Distância entre A(1,2) e B(4,6)?', a: '√((4−1)² + (6−2)²) = √(9+16) = √25 = 5.' },
    { st: 3, tag: 'Exemplo', q: 'Ponto médio de [A(2,4), B(6,8)]?', a: '((2+6)/2, (4+8)/2) = (4, 6).' },
    { st: 4, tag: 'Exemplo', q: 'Centro e raio de (x−1)² + (y+3)² = 16?', a: 'Centro (1, −3) e raio √16 = 4.' },
    { st: 1, tag: 'Exemplo', q: 'Norma do vetor v(3, 4)?', a: '√(3² + 4²) = √25 = 5.' }
  ],
  4: [
    { st: 1, tag: 'Definição', q: 'O que é o domínio de uma função?', a: 'O conjunto de todos os objetos (valores de x) para os quais a função está definida.' },
    { st: 1, tag: 'Definição', q: 'O que é o contradomínio?', a: 'O conjunto de todas as imagens (valores de y) que a função efetivamente atinge.' },
    { st: 1, tag: 'Definição', q: 'O que são os zeros de uma função?', a: 'Os valores de x para os quais f(x) = 0. Graficamente, onde o gráfico corta o eixo Ox.' },
    { st: 1, tag: 'Definição', q: 'Função injetiva', a: 'Objetos diferentes têm imagens diferentes. Graficamente: qualquer reta horizontal corta o gráfico no máximo uma vez.' },
    { st: 1, tag: 'Definição', q: 'Monotonia de uma função', a: 'Crescente: x aumenta → f(x) aumenta. Decrescente: x aumenta → f(x) diminui. Pode variar por intervalos.' },
    { st: 1, tag: 'Definição', q: 'Função par e função ímpar', a: 'Par: f(−x) = f(x) (simétrica em Oy). Ímpar: f(−x) = −f(x) (simétrica na origem).' },
    { st: 2, tag: 'Definição', q: 'Função quadrática e o vértice', a: 'f(x) = ax² + bx + c. Vértice em x = −b/(2a); a > 0 concavidade para cima, a < 0 para baixo.' },
    { st: 3, tag: 'Definição', q: 'Função módulo', a: 'f(x) = |x|: vale x se x ≥ 0 e −x se x < 0. O gráfico é um "V" com vértice na origem.' },
    { st: 3, tag: 'Regra', q: 'Transformação: y = f(x) + k', a: 'Translação vertical: sobe k unidades (k > 0) ou desce (k < 0).' },
    { st: 3, tag: 'Regra', q: 'Transformação: y = f(x − a)', a: 'Translação horizontal: a unidades para a direita (a > 0) ou esquerda (a < 0).' },
    { st: 3, tag: 'Regra', q: 'Transformação: y = −f(x) e y = f(−x)', a: 'y = −f(x): reflexão no eixo Ox. y = f(−x): reflexão no eixo Oy.' },
    { st: 3, tag: 'Definição', q: 'Função definida por ramos', a: 'Tem expressões diferentes em diferentes intervalos do domínio. Avalia-se com o ramo correspondente a x.' },
    { st: 1, tag: 'Exemplo', q: 'Domínio de f(x) = √(x − 2)?', a: 'Precisa de x − 2 ≥ 0 → x ≥ 2. Domínio: [2, +∞[.' },
    { st: 1, tag: 'Exemplo', q: 'Domínio de f(x) = 1/(x − 3)?', a: 'O denominador não pode ser 0 → x ≠ 3. Domínio: ℝ \\ {3}.' },
    { st: 2, tag: 'Exemplo', q: 'Vértice de f(x) = x² − 6x + 5?', a: 'x_v = 6/2 = 3; f(3) = 9 − 18 + 5 = −4. Vértice (3, −4).' },
    { st: 3, tag: 'Exemplo', q: 'Calcula |−7| e |4|', a: '|−7| = 7 e |4| = 4.' }
  ],
  5: [
    { st: 1, tag: 'Definição', q: 'O que é a média?', a: 'A soma de todos os valores a dividir pelo número de valores (x̄). Sensível a valores extremos.' },
    { st: 1, tag: 'Definição', q: 'O que é a mediana?', a: 'O valor central dos dados ordenados. Divide a amostra em duas metades. Resistente a extremos.' },
    { st: 1, tag: 'Definição', q: 'O que são os quartis?', a: 'Q1, Q2 (mediana) e Q3 dividem os dados em quatro partes de 25%. AIQ = Q3 − Q1.' },
    { st: 1, tag: 'Definição', q: 'O que é o desvio-padrão?', a: 'Mede a dispersão: indica quanto, em média, os dados se afastam da média. Maior → mais dispersos.' },
    { st: 1, tag: 'Definição', q: 'O que é a variância?', a: 'A média dos quadrados dos desvios em relação à média. O desvio-padrão é a sua raiz quadrada.' },
    { st: 1, tag: 'Definição', q: 'O que é a amplitude?', a: 'A diferença entre o maior e o menor valor (máximo − mínimo).' },
    { st: 1, tag: 'Definição', q: 'O que é a frequência relativa?', a: 'A frequência absoluta dividida pelo total. Costuma exprimir-se em %.' },
    { st: 1, tag: 'Definição', q: 'Diagrama de extremos e quartis', a: 'A "caixa de bigodes": mostra mínimo, Q1, mediana, Q3 e máximo. Resume e compara distribuições.' },
    { st: 2, tag: 'Definição', q: 'O que é a reta de regressão linear?', a: 'A reta y = ax + b que melhor se ajusta a uma nuvem de pontos (mínimos quadrados), para descrever a relação entre duas variáveis.' },
    { st: 2, tag: 'Definição', q: 'O que é o coeficiente de correlação (r)?', a: 'Mede a força e o sentido da relação linear entre duas variáveis. Varia entre −1 e 1; perto de ±1 → forte correlação.' },
    { st: 2, tag: 'Estratégia', q: 'Como interpretar o declive da reta de regressão?', a: 'Indica quanto y varia, em média, quando x aumenta uma unidade. Permite fazer previsões.' },
    { st: 1, tag: 'Definição', q: 'Variável qualitativa vs quantitativa', a: 'Qualitativa: não numérica (cor). Quantitativa: numérica - discreta (nº filhos) ou contínua (altura).' },
    { st: 1, tag: 'Exemplo', q: 'Média de 4, 6, 8, 10, 12?', a: '(4+6+8+10+12)/5 = 40/5 = 8.' },
    { st: 1, tag: 'Exemplo', q: 'Mediana de 3, 7, 8, 12, 20?', a: '5 valores ordenados → o central é 8.' },
    { st: 1, tag: 'Exemplo', q: 'Amplitude interquartis se Q1=10 e Q3=18?', a: 'AIQ = 18 − 10 = 8.' },
    { st: 2, tag: 'Exemplo', q: 'Se r = 0,95, a correlação é…?', a: 'Forte e positiva (perto de 1): as variáveis crescem juntas de forma quase linear.' }
  ],
  6: [
    { st: 1, tag: 'Fórmula', q: 'Seno de um ângulo agudo', a: 'sen(α) = cateto oposto / hipotenusa (num triângulo retângulo).' },
    { st: 1, tag: 'Fórmula', q: 'Cosseno de um ângulo agudo', a: 'cos(α) = cateto adjacente / hipotenusa.' },
    { st: 1, tag: 'Fórmula', q: 'Tangente de um ângulo agudo', a: 'tg(α) = cateto oposto / cateto adjacente = sen(α) / cos(α).' },
    { st: 2, tag: 'Fórmula', q: 'Fórmula fundamental da trigonometria', a: 'sen²(α) + cos²(α) = 1. Permite obter uma razão a partir da outra.' },
    { st: 2, tag: 'Fórmula', q: 'Relação entre tangente, seno e cosseno', a: 'tg(α) = sen(α)/cos(α). E 1 + tg²(α) = 1/cos²(α).' },
    { st: 2, tag: 'Definição', q: 'Valores notáveis (30°, 45°, 60°)', a: 'sen30°=½, cos30°=√3/2, tg30°=√3/3; sen45°=cos45°=√2/2, tg45°=1; sen60°=√3/2, cos60°=½, tg60°=√3.' },
    { st: 1, tag: 'Estratégia', q: 'Como determinar um lado com trigonometria?', a: 'Identifica o ângulo e os lados (oposto/adjacente/hipotenusa), escolhe a razão e resolve a equação.' },
    { st: 2, tag: 'Definição', q: 'O que é o círculo trigonométrico?', a: 'Uma circunferência de raio 1 centrada na origem. As coordenadas do ponto associado ao ângulo α são (cos α, sen α).' },
    { st: 2, tag: 'Definição', q: 'O que é o radiano?', a: 'Uma unidade de medida de ângulo. 180° = π radianos; 360° = 2π. Converte: rad = graus × π/180.' },
    { st: 2, tag: 'Regra', q: 'Sinais das razões por quadrante', a: '1.º Q: tudo positivo. 2.º Q: só sen positivo. 3.º Q: só tg positiva. 4.º Q: só cos positivo.' },
    { st: 2, tag: 'Estratégia', q: 'Como calcular cos a partir de sen (ângulo agudo)?', a: 'Usa cos²(α) = 1 − sen²(α) e tira a raiz (positiva para ângulo agudo).' },
    { st: 2, tag: 'Definição', q: 'Ângulos complementares em trigonometria', a: 'sen(90° − α) = cos(α) e cos(90° − α) = sen(α).' },
    { st: 1, tag: 'Exemplo', q: 'Cateto oposto 3, hipotenusa 5. sen(α)?', a: 'sen(α) = 3/5 = 0,6.' },
    { st: 2, tag: 'Exemplo', q: 'Se sen(α) = 0,6, quanto é cos(α) (ângulo agudo)?', a: 'cos²α = 1 − 0,36 = 0,64 → cos α = 0,8.' },
    { st: 2, tag: 'Exemplo', q: 'Converte 90° para radianos', a: '90 × π/180 = π/2 radianos.' },
    { st: 1, tag: 'Exemplo', q: 'tg(45°) = ?', a: '1 (porque sen45° = cos45°).' }
  ]
};

// Seleção atual por tab
var _mat10Sel = { resumo: 1, 'resumo-st': 0 };

// ═══ NAVEGAÇÃO DE TABS ═══
function mat10SwitchTab(tab, btn) {
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
  var panel = document.getElementById('mat10p-' + tab);
  if (panel) { panel.classList.add('active'); panel.style.setProperty('display','block','important'); }

  var titles = { resumo:'Teoria', praticar:'Praticar', fichas:'Fichas', progresso:'Progresso',
                 exercicios:'Exercícios', quiz:'Quiz', flashcards:'Flashcards', teste:'Teste', jogos:'Jogos' };
  if (titles[tab]) document.title = 'Mat. 10.º ' + titles[tab] + ' · 3ponto14';

  if (tab === 'resumo') mat10BuildResumoNav();
  else if (tab === 'exercicios') mat10BuildPraticarNav();
  else if (tab === 'quiz') mat10QuizBuildNav();
  else if (tab === 'flashcards') mat10FcBuildNav();
  else if (tab === 'teste') mat10TesteBuildNav();
  else if (tab === 'jogos') mat10JogosInit();
  else if (tab === 'fichas') mat10FichasBuildNav();
  else if (tab === 'progresso') mat10RenderProgresso();
}

// Abre um sub-modo de prática a partir dos cartões do menu Praticar.
function mat10OpenPraticar(modo) { mat10SwitchTab(modo, null); }

// ═══ TAB TEORIA ═══
function mat10BuildResumoNav() {
  var capRow = document.getElementById('mat10-resumo-cap-row');
  if (!capRow) return;
  var activeCap = _mat10Sel['resumo'] || 1;
  var h = '';
  _mat10CapMeta.forEach(function(m) {
    var color = _mat10CapColors[m.n] || '#516860';
    var isActive = activeCap === m.n;
    var activeStyle = isActive ? 'background:' + color + ';border-color:' + color + ';color:#fff' : '';
    var hoverCode = isActive ? '' : ' onmouseover="this.style.borderColor=\'' + color + '\';this.style.color=\'' + color + '\'" onmouseout="this.style.borderColor=\'\';this.style.color=\'\'"';
    h += '<button class="resumo-cap-btn' + (isActive ? ' active' : '') + '" data-cap="' + m.n + '" onclick="mat10ResumoSelectCap(' + m.n + ',this)" style="' + activeStyle + '"' + hoverCode + '>'
       + '<span class="resumo-cap-icon">' + m.icon + '</span>' + m.label + '</button>';
  });
  capRow.innerHTML = h;
  mat10ResumoShowSts(activeCap);
  mat10RenderResumoInline();
}

function mat10ResumoSelectCap(cap, btn) {
  _mat10Sel['resumo'] = cap;
  _mat10Sel['resumo-st'] = 0;
  var capRow = document.getElementById('mat10-resumo-cap-row');
  if (capRow) {
    capRow.querySelectorAll('.resumo-cap-btn').forEach(function(b) {
      b.classList.remove('active'); b.style.background = ''; b.style.borderColor = ''; b.style.color = '';
    });
  }
  if (btn) {
    var color = _mat10CapColors[cap] || '#516860';
    btn.classList.add('active');
    btn.style.background = color; btn.style.borderColor = color; btn.style.color = '#fff';
  }
  mat10ResumoShowSts(cap);
  mat10RenderResumoInline();
}

function mat10ResumoShowSts(cap) {
  var stRow = document.getElementById('mat10-resumo-st-row');
  if (!stRow) return;
  var sts = _mat10Subtemas[cap] || [];
  if (!sts.length) { stRow.style.display = 'none'; return; }
  var _stSel = _mat10Sel['resumo-st'] || 0;
  var h = '<div class="resumo-st-label">Subtema</div>';
  h += '<button class="resumo-st-btn' + (_stSel === 0 ? ' active' : '') + '" data-st="0" onclick="mat10ResumoSelectSt(this,' + cap + ',0)">Todos</button>';
  sts.forEach(function(st, i) {
    var isActive = _stSel === (i + 1);
    h += '<button class="resumo-st-btn' + (isActive ? ' active' : '') + '" data-st="' + (i + 1) + '" onclick="mat10ResumoSelectSt(this,' + cap + ',' + (i + 1) + ')">' + st + '</button>';
  });
  stRow.innerHTML = h;
  stRow.style.display = 'flex';
}

function mat10ResumoSelectSt(btn, cap, stIdx) {
  var stRow = document.getElementById('mat10-resumo-st-row');
  if (stRow) stRow.querySelectorAll('.resumo-st-btn').forEach(function(b) { b.classList.remove('active'); });
  if (btn) btn.classList.add('active');
  _mat10Sel['resumo'] = cap;
  _mat10Sel['resumo-st'] = stIdx;
  mat10RenderResumoInline();
}

function mat10RenderResumoInline() {
  var cap = _mat10Sel['resumo'] || 1;
  var dest = document.getElementById('mat10-resumo-content');
  if (!dest) return;

  var color = (function(){
    var c = _mat10CapColors[cap] || '#516860';
    return c;
  })();

  var tagIcons = {
    'Definição':'ph-book-bookmark', 'Fórmula':'ph-function', 'Regra':'ph-check-square',
    'Propriedade':'ph-star', 'Exemplo':'ph-pencil-line', 'Estratégia':'ph-lightbulb',
    'Síntese':'ph-seal-check', 'Notação':'ph-at', 'Hierarquia':'ph-tree-structure',
    'Teorema':'ph-intersect', 'Conceito':'ph-cube'
  };

  var allCards = _mat10Cards[cap] || [];

  // Filtrar por subtema, se selecionado
  var stIdx = _mat10Sel['resumo-st'] || 0;
  // Filtro por subtema usa o campo st de cada flashcard (fiável); 0 = Todos.
  var cards = (stIdx > 0) ? allCards.filter(function(card){ return card.st === stIdx; }) : allCards;

  if (!cards.length) {
    dest.innerHTML = '<div class="resumo-empty">'
      + '<i class="ph ph-book-open-text resumo-empty-icon"></i>'
      + '<div class="resumo-empty-title">Conteúdo em preparação</div>'
      + '<div class="resumo-empty-sub">A teoria deste capítulo está a ser elaborada.</div></div>';
    return;
  }

  _mat10PM(cap, 'teoria'); // estudou a teoria deste capítulo

  // Acordeão partilhado: grupos colapsáveis + perguntas que abrem a resposta.
  dest.innerHTML = _teoriaAccordionHTML(cards, color, tagIcons);
}

/* ════════════════════════════════════════════════════════════════
   TAB PRATICAR - exercícios gerados com correção imediata
   Renderiza tudo no painel (sem páginas externas). Reutiliza os
   motores genéricos do chapter-engine: _capBuildQuizHTML,
   _capCheckAnswer, _capShowFeedback.
   ════════════════════════════════════════════════════════════════ */

// Gerador por capítulo (resolução lazy - os buildEx_m10cN são definidos no fim do ficheiro).
// Só os caps com gerador são "praticáveis".
function _mat10Gerador(cap) {
  if (cap === 1 && typeof buildEx_m10c1 === 'function') return buildEx_m10c1;
  if (cap === 2 && typeof buildEx_m10c2 === 'function') return buildEx_m10c2;
  if (cap === 3 && typeof buildEx_m10c3 === 'function') return buildEx_m10c3;
  if (cap === 4 && typeof buildEx_m10c4 === 'function') return buildEx_m10c4;
  if (cap === 5 && typeof buildEx_m10c5 === 'function') return buildEx_m10c5;
  if (cap === 6 && typeof buildEx_m10c6 === 'function') return buildEx_m10c6;
  return null;
}
var _mat10TemasCount = { 1: 3, 2: 3, 3: 4, 4: 3, 5: 3, 6: 3 };

// Estado da prática
var _mat10Prat = { cap: 1, st: 0, nivel: 'medio', score: { correct: 0, total: 0 }, answered: {}, exs: [] };
var _mat10TarefaAtiva=null, _mat10TarefaResp={};

function _mat10PratStorageKey(cap) { return 'edupt_mat10_cap' + cap; }

function _mat10SelCfg() {
  return { capMeta: _mat10CapMeta, capColors: _mat10CapColors, subtemas: _mat10Subtemas,
    subtemaTemas: _mat10SubtemaTemas, temasCount: _mat10TemasCount, gerador: _mat10Gerador };
}
function _mat10PratSel() {
  if (!_mat10Prat.sel) {
    _mat10Prat.sel = _selNew();
    if (_mat10Prat.cap) { _mat10Prat.sel.caps = [_mat10Prat.cap]; if (_mat10Prat.st) _mat10Prat.sel.stsByCap[_mat10Prat.cap] = [_mat10Prat.st]; }
  }
  return _mat10Prat.sel;
}

function mat10BuildPraticarNav() {
  var capRow = document.getElementById('mat10-praticar-cap-row');
  if (!capRow) return;
  var stRow = document.getElementById('mat10-praticar-st-row');
  if (stRow) stRow.style.display = 'none';
  capRow.innerHTML = _selBarsHTML(_mat10PratSel(), _mat10SelCfg(), 'mat10PratToggleCap', 'mat10PratToggleSt');
}

function mat10PratToggleCap(cap) {
  _selToggleCap(_mat10PratSel(), _mat10SelCfg(), cap);
  mat10BuildPraticarNav();
  mat10GerarExercicios();
}
function mat10PratToggleSt(cap, st) {
  _selToggleSt(_mat10PratSel(), cap, st);
  mat10BuildPraticarNav();
  mat10GerarExercicios();
}

function mat10PraticarSetNivel(nivel, btn) {
  _mat10Prat.nivel = nivel;
  var grp = document.getElementById('mat10-praticar-nivel');
  if (grp) grp.querySelectorAll('.gen-level-btn').forEach(function(b) { b.classList.remove('active'); });
  if (btn) btn.classList.add('active');
  mat10GerarExercicios();
}

// Mapa subtema → temas a usar no gerador (Cap 1 Números)
var _mat10SubtemaTemas = {
  1: { 1: ['1'], 2: ['2'], 3: ['3'] },            // Lógica · Quantificadores · Conjuntos/intervalos
  2: { 1: ['1'], 2: ['2'], 3: ['3'] },            // Radicais/potências · Polinómios · Equações
  3: { 1: ['1'], 2: ['2'], 3: ['3'], 4: ['4'] },  // Distâncias/ponto médio · Reta · Circunferência · Vetores
  4: { 1: ['1'], 2: ['2'], 3: ['3'] },            // Domínio · Função quadrática · Módulo/transformações
  5: { 1: ['1'], 2: ['2'], 3: ['3'] },            // Medidas · Dispersão · Regressão
  6: { 1: ['1'], 2: ['2'], 3: ['3'] }             // Razões · Fórmula fundamental · Conversão graus/rad
};

function mat10GerarExercicios() {
  var dest = document.getElementById('mat10-praticar-content');
  if (!dest) return;
  var pares = _selPares(_mat10PratSel(), _mat10SelCfg());
  if (!pares.length) { dest.innerHTML = ''; return; }
  pares = pares.slice();
  for (var pz = pares.length - 1; pz > 0; pz--) { var rz = Math.floor(Math.random() * (pz + 1)); var tz = pares[pz]; pares[pz] = pares[rz]; pares[rz] = tz; }
  var cap = _mat10PratSel().caps[0] || (pares[0] && pares[0].cap) || 1;

  var QTD = 8;
  var tipos = ['mc', 'fill', 'mc', 'vf', 'fill', 'mc', 'fill', 'mc'];
  var geradas = [];
  for (var i = 0; i < QTD; i++) {
    var par = pares[i % pares.length];
    var gen = _mat10Gerador(par.cap);
    if (!gen) continue;
    var ex = gen(par.tema, tipos[i % tipos.length], _mat10Prat.nivel);
    if (ex) geradas.push(ex);
  }
  var temasPorCap = {};
  pares.forEach(function (pr) { (temasPorCap[pr.cap] = temasPorCap[pr.cap] || []).push(pr.tema); });
  var banco = [];
  if (typeof _mat10Banco !== "undefined") {
    Object.keys(temasPorCap).forEach(function (c) {
      if (_mat10Banco[c]) banco = banco.concat(_mat10Banco[c].filter(function (q) { return temasPorCap[c].indexOf(String(q.t)) !== -1; }));
    });
  }
  var exs = (typeof _mixBancoGeradas === 'function') ? _mixBancoGeradas(banco, geradas, QTD, 3, _mat10Prat.nivel)
    : geradas.map(function (e, idx) { return Object.assign({}, e, { num: idx + 1 }); });
  _mat10Prat.exs = exs;
  _mat10Prat.answered = {};
  _mat10Prat.score = { correct: 0, total: 0 };

  // Score bar + questões (reutiliza motor genérico do chapter-engine)
  var scoreBar = '<div class="score-bar" id="mat10-prat-scorebar">'
    + '<div><div class="score-num" id="mat10-prat-score">0</div><div class="score-label">pontos</div></div>'
    + '<div><div class="score-num" id="mat10-prat-total">/ 0</div><div class="score-label">respondidas</div></div>'
    + '<div class="progress-track"><div class="progress-fill" id="mat10-prat-prog" style="width:0%"></div></div>'
    + '<button class="btn btn-ghost ml-auto" onclick="mat10GerarExercicios()">↺ Novas questões</button>'
    + (_mat10TarefaAtiva ? '<button class="btn" style="background:#2e7d52;color:#fff;border:none;border-radius:999px;padding:6px 14px;font-weight:800;cursor:pointer;margin-left:.4rem" onclick="mat10EntregarTarefa()">\u2713 Terminar e entregar</button>' : '')
    + '</div>';
  var quizHTML = (typeof _capBuildQuizHTML === 'function')
    ? _capBuildQuizHTML(exs, 'm8ex', 'mat10CheckEx')
    : '<p style="color:var(--ink4)">Motor de exercícios indisponível.</p>';
  dest.innerHTML = scoreBar + '<div id="mat10-atribuir" style="margin:.2rem 0 .8rem"></div>' + quizHTML;
  _mat10Prat.cap = cap;
  if (typeof Atribuir !== 'undefined' && Atribuir.montar) {
    var _cm = _mat10CapMeta.filter(function (m) { return m.n === cap; })[0] || {};
    var _selA = _mat10PratSel();
    var _stA = (_selA.caps.length === 1 && (_selA.stsByCap[cap] || []).length === 1) ? _selA.stsByCap[cap][0] : 0;
    var _sn = (_mat10Subtemas[cap] && _stA > 0) ? (_mat10Subtemas[cap][_stA - 1] || '') : '';
    Atribuir.montar('mat10-atribuir', { curso: 'mat10', cursoNome: 'Matemática 10.º', tema: String(cap), temaNome: (_cm.label || ('Cap. ' + cap)), sub: String(_stA || ''), subNome: _sn, tipo: 'quiz', nivel: _mat10Prat.nivel });
  }
}

function mat10CheckEx(qid, tipo, val, btn) {
  if (_mat10Prat.answered[qid]) return;
  if (typeof _capCheckAnswer !== 'function') return;
  var r = _capCheckAnswer(qid, tipo, val);
  if (!r) return; // resposta vazia
  _mat10Prat.answered[qid] = true;
  if (r.correct) _mat10Prat.score.correct++;
  _mat10Prat.score.total++; if(_mat10TarefaAtiva){_mat10TarefaResp[qid]=!!r.correct;}
  if (typeof _capShowFeedback === 'function') _capShowFeedback(qid, r.correct, r.expl, val, btn);
  var se = document.getElementById('mat10-prat-score'); if (se) se.textContent = _mat10Prat.score.correct;
  var te = document.getElementById('mat10-prat-total'); if (te) te.textContent = '/ ' + _mat10Prat.score.total;
  var pe = document.getElementById('mat10-prat-prog'); if (pe && _mat10Prat.exs.length) pe.style.width = (_mat10Prat.score.total / _mat10Prat.exs.length * 100) + '%';
  mat10SaveProgress(_mat10Prat.cap, r.correct);
}

// ═══ PROGRESSO (localStorage por capítulo) ═══
function mat10SaveProgress(cap, correct) {
  try {
    var key = _mat10PratStorageKey(cap);
    var d = JSON.parse(localStorage.getItem(key) || '{}');
    if (!d.sections) d.sections = {};
    if (!d.sections.praticar) d.sections.praticar = { correct: 0, total: 0 };
    d.sections.praticar.total++;
    if (correct) d.sections.praticar.correct++;
    d.lastActivity = Date.now();
    localStorage.setItem(key, JSON.stringify(d));
  } catch (e) {}
}

// Regista atividade no ProgressManager (XP + streak), com capId próprio do 10.º ano
// ('m10capN') para não misturar com o progresso do 7.º ano.
function _mat10PM(cap, tipo, opts) {
  if (typeof ProgressManager === 'undefined') return;
  try { ProgressManager.record('m10cap' + cap, tipo, opts || {}); } catch (e) {}
}

/* ════════════════════════════════════════════════════════════════
   HELPER: linha de capítulos para sub-modos (quiz, flashcards, teste)
   Só capítulos com gerador ficam ativos.
   ════════════════════════════════════════════════════════════════ */
function _mat10BuildCapRow(rowId, activeCap, onclickName) {
  var row = document.getElementById(rowId);
  if (!row) return;
  var h = '';
  _mat10CapMeta.forEach(function(m) {
    var hasGen = !!_mat10Gerador(m.n);
    var color = _mat10CapColors[m.n] || '#516860';
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

function _mat10SetActiveCapBtn(rowId, btn, cap) {
  var row = document.getElementById(rowId);
  if (row) row.querySelectorAll('.resumo-cap-btn').forEach(function(b){ b.classList.remove('active'); b.style.background=''; b.style.borderColor=''; b.style.color=''; });
  if (btn) { var color = _mat10CapColors[cap] || '#516860'; btn.classList.add('active'); btn.style.background=color; btn.style.borderColor=color; btn.style.color='#fff'; }
}

// Converte uma questão de resposta aberta em escolha múltipla. Delega no
// helper partilhado _fillParaMc (shared.js), com distratores pedagógicos.
function _mat10FillToMc(ex) {
  return (typeof _fillParaMc === 'function') ? _fillParaMc(ex) : null;
}

function _mat10BuildMcQuestion(cap) {
  var gen = _mat10Gerador(cap);
  if (!gen) return null;
  var nTemas = _mat10TemasCount[cap] || 1;
  for (var i = 0; i < 10; i++) {
    var tema = String(rnd_m81(1, nTemas));
    var ex = gen(tema, 'mc', 'medio');
    if (ex && ex.tipo === 'mc' && ex.opcoes && ex.opcoes.length >= 2) return ex;
  }
  // Sem MC nativo: converte uma questão de resposta aberta em MC.
  for (var k = 0; k < 14; k++) {
    var tema2 = String(rnd_m81(1, nTemas));
    var conv = _mat10FillToMc(gen(tema2, 'fill', 'medio'));
    if (conv && conv.opcoes && conv.opcoes.length >= 2) return conv;
  }
  return null;
}

/* ════════════════════════════════════════════════════════════════
   SUB-MODO: QUIZ RELÂMPAGO (3 vidas, streak)
   ════════════════════════════════════════════════════════════════ */
var _mat10Quiz = { cap: 1, sel: null, lives: 3, streak: 0, maxStreak: 0, score: 0, total: 0, answered: false, current: null };

function _mat10QuizSel() { if (!_mat10Quiz.sel) _mat10Quiz.sel = _selNew(); return _mat10Quiz.sel; }

function mat10QuizBuildNav() {
  var row = document.getElementById('mat10-quiz-cap-row');
  if (row) row.innerHTML = _selBarsHTML(_mat10QuizSel(), _mat10SelCfg(), 'mat10QuizToggleCap', 'mat10QuizToggleSt');
  var st = document.getElementById('mat10-quiz-st-row'); if (st) st.style.display = 'none';
  mat10QuizStart();
}

function mat10QuizToggleCap(cap) {
  _selToggleCap(_mat10QuizSel(), _mat10SelCfg(), cap);
  mat10QuizBuildNav();
}
function mat10QuizToggleSt(cap, st) {
  _selToggleSt(_mat10QuizSel(), cap, st);
  mat10QuizBuildNav();
}

function mat10QuizStart() {
  _mat10Quiz.lives = 3; _mat10Quiz.streak = 0; _mat10Quiz.maxStreak = 0;
  _mat10Quiz.score = 0; _mat10Quiz.total = 0; _mat10Quiz.answered = false;
  mat10QuizNext();
}

function mat10QuizNext() {
  var app = document.getElementById('mat10-quiz-app');
  if (!app) return;
  if (_mat10Quiz.lives <= 0) { mat10QuizGameOver(app); return; }
  var _qpares = _selPares(_mat10QuizSel(), _mat10SelCfg());
  _mat10Quiz.cap = (_mat10QuizSel().caps[0]) || (_qpares[0] && _qpares[0].cap) || 1;
  var ex = _selMcQuestion(_mat10QuizSel(), _mat10SelCfg(), _mat10FillToMc);
  if (!ex) { app.innerHTML = '<p style="color:var(--ink4);padding:2rem;text-align:center">Sem questões disponíveis para esta seleção.</p>'; return; }
  _mat10Quiz.current = ex; _mat10Quiz.answered = false;
  var lives = '';
  for (var i = 0; i < 3; i++) lives += (i < _mat10Quiz.lives ? '❤️' : '🖤') + ' ';
  var opts = '';
  ex.opcoes.forEach(function(opt, idx) {
    opts += '<button class="qg-opt-btn" id="mat10qopt-' + idx + '" onclick="mat10QuizAnswer(' + idx + ')">' + opt + '</button>';
  });
  app.innerHTML =
    '<div class="qg-hub-bar">' +
      '<div class="qg-hub-lives">' + lives + '</div>' +
      '<div class="qg-hub-streak">' + (_mat10Quiz.streak > 1 ? '🔥 ' + _mat10Quiz.streak + ' seguidas' : '') + '</div>' +
      '<div class="qg-hub-score">✓ ' + _mat10Quiz.score + ' / ' + _mat10Quiz.total + '</div>' +
    '</div>' +
    '<div class="qg-hub-question">' + ex.enun + '</div>' +
    '<div class="qg-hub-opts">' + opts + '</div>' +
    '<div class="qg-hub-feedback" id="mat10-quiz-fb" style="min-height:2.5rem"></div>';
}

function mat10QuizAnswer(idx) {
  if (_mat10Quiz.answered) return;
  _mat10Quiz.answered = true;
  var ex = _mat10Quiz.current; if (!ex) return;
  var correct = String(ex.opcoes[idx]) === String(ex.resposta);
  _mat10Quiz.total++;
  document.querySelectorAll('.qg-opt-btn').forEach(function(b, i) {
    b.disabled = true;
    if (String(ex.opcoes[i]) === String(ex.resposta)) { b.style.background = '#4caf50'; b.style.color = '#fff'; }
  });
  var clicked = document.getElementById('mat10qopt-' + idx);
  if (clicked && !correct) { clicked.style.background = '#f44336'; clicked.style.color = '#fff'; }
  var fb = document.getElementById('mat10-quiz-fb');
  if (correct) {
    _mat10Quiz.score++; _mat10Quiz.streak++;
    if (_mat10Quiz.streak > _mat10Quiz.maxStreak) _mat10Quiz.maxStreak = _mat10Quiz.streak;
    if (fb) fb.innerHTML = '<span style="color:var(--correct,#3ecf8e);font-weight:700">✓ Certo!</span> ' + (ex.expl || '');
  } else {
    _mat10Quiz.lives--; _mat10Quiz.streak = 0;
    if (fb) fb.innerHTML = '<span style="color:var(--wrong,#ff6b6b);font-weight:700">✗ Errado.</span> ' + (ex.expl || '');
  }
  mat10SaveProgress(_mat10Quiz.cap, correct);
  setTimeout(function(){ mat10QuizNext(); }, 1400);
}

function mat10QuizGameOver(app) {
  var pct = _mat10Quiz.total > 0 ? Math.round(_mat10Quiz.score / _mat10Quiz.total * 100) : 0;
  _mat10PM(_mat10Quiz.cap, 'quiz', { pontuacao: _mat10Quiz.score, total: _mat10Quiz.total });
  var emoji = pct >= 90 ? '🏆' : pct >= 70 ? '⭐' : pct >= 50 ? '👍' : '📚';
  app.innerHTML =
    '<div style="text-align:center;padding:2.5rem 1rem">' +
      '<div style="font-size:3.5rem;margin-bottom:.75rem">' + emoji + '</div>' +
      '<div style="font-family:\'Cormorant Garamond\',serif;font-size:2rem;font-weight:900;color:var(--ink)">' + pct + '%</div>' +
      '<div style="color:var(--ink3);margin:.5rem 0 1.5rem">' + _mat10Quiz.score + ' certas em ' + _mat10Quiz.total + ' questões</div>' +
      '<div style="font-size:1.5rem;margin-bottom:1.5rem">Melhor sequência: ' + (_mat10Quiz.maxStreak || 0) + ' 🔥</div>' +
      '<button class="btn btn-primary" onclick="mat10QuizStart()">↺ Jogar novamente</button>' +
    '</div>';
}

/* ════════════════════════════════════════════════════════════════
   SUB-MODO: FLASHCARDS
   ════════════════════════════════════════════════════════════════ */
var _mat10Fc = { cap: 1, idx: 0, flipped: false, cards: [] };

function mat10FcBuildNav() {
  // primeiro capítulo com cartões
  if (!(_mat10Cards[_mat10Fc.cap] && _mat10Cards[_mat10Fc.cap].length)) {
    for (var c = 1; c <= _mat10CapMeta.length; c++) { if (_mat10Cards[c] && _mat10Cards[c].length) { _mat10Fc.cap = c; break; } }
  }
  // linha de capítulos: só os que têm cartões
  var row = document.getElementById('mat10-fc-cap-row');
  if (row) {
    var h = '';
    _mat10CapMeta.forEach(function(m) {
      var has = !!(_mat10Cards[m.n] && _mat10Cards[m.n].length);
      var color = _mat10CapColors[m.n] || '#516860';
      var isActive = _mat10Fc.cap === m.n;
      var activeStyle = isActive ? 'background:' + color + ';border-color:' + color + ';color:#fff' : '';
      var disabled = has ? '' : 'opacity:.45;cursor:not-allowed';
      var onclick = has ? ('mat10FcSelectCap(' + m.n + ',this)') : '';
      var title = has ? '' : ' title="Em preparação"';
      h += '<button class="resumo-cap-btn' + (isActive ? ' active' : '') + '" onclick="' + onclick + '" style="' + activeStyle + ';' + disabled + '"' + title + '>'
         + '<span class="resumo-cap-icon">' + m.icon + '</span>' + m.label + (has ? '' : ' ·') + '</button>';
    });
    row.innerHTML = h;
  }
  mat10FcSelectCap(_mat10Fc.cap, null);
}

function mat10FcSelectCap(cap, btn) {
  if (!(_mat10Cards[cap] && _mat10Cards[cap].length)) return;
  if (btn) _mat10SetActiveCapBtn('mat10-fc-cap-row', btn, cap);
  _mat10Fc.cap = cap;
  _mat10Fc.cards = _mat10Cards[cap].slice();
  _mat10Fc.idx = 0; _mat10Fc.flipped = false;
  _mat10PM(cap, 'flashcard');
  mat10FcRender();
}

function mat10FcRender() {
  var app = document.getElementById('mat10-fc-app');
  if (!app) return;
  var cards = _mat10Fc.cards;
  if (!cards.length) { app.innerHTML = '<p style="color:var(--ink4);padding:2rem;text-align:center">Sem flashcards para este capítulo.</p>'; return; }
  var card = cards[_mat10Fc.idx];
  var color = _mat10CapColors[_mat10Fc.cap] || '#516860';
  var pct = Math.round((_mat10Fc.idx + 1) / cards.length * 100);
  app.innerHTML =
    '<div class="card card-narrow">' +
      '<div class="flex items-center justify-between mb-3">' +
        '<span class="fc2-tag-pill" style="background:' + color + ';color:#fff">' + (card.tag || '') + '</span>' +
        '<span class="fc-counter">' + (_mat10Fc.idx + 1) + ' / ' + cards.length + '</span>' +
      '</div>' +
      '<div class="fc2-prog-track"><div class="fc2-prog-fill" style="width:' + pct + '%;background:' + color + '"></div></div>' +
      '<div onclick="mat10FcFlip()" class="fc2-card-inner" style="cursor:pointer;min-height:140px">' +
        '<div>' +
          '<p style="font-size:1.05rem;font-weight:600;color:var(--ink);line-height:1.4">' + (card.q || '') + '</p>' +
          '<p style="font-size:.9rem;color:' + color + ';margin-top:.75rem;line-height:1.5;display:' + (_mat10Fc.flipped ? 'block' : 'none') + '">' + (card.a || '') + '</p>' +
          '<p style="font-size:.75rem;color:var(--ink4);margin-top:.5rem">' + (_mat10Fc.flipped ? '' : 'Carrega para ver a resposta') + '</p>' +
        '</div>' +
      '</div>' +
      '<div class="flex flex-wrap gap-3 justify-center mt-5">' +
        '<button class="btn btn-ghost" onclick="mat10FcPrev()">← Anterior</button>' +
        '<button class="btn btn-primary" onclick="mat10FcFlip()">↕ Virar</button>' +
        '<button class="btn btn-ghost" onclick="mat10FcNext()">Seguinte →</button>' +
      '</div>' +
    '</div>';
}

function mat10FcFlip() { _mat10Fc.flipped = !_mat10Fc.flipped; mat10FcRender(); }
function mat10FcNext() { _mat10Fc.idx = (_mat10Fc.idx + 1) % (_mat10Fc.cards.length || 1); _mat10Fc.flipped = false; mat10FcRender(); }
function mat10FcPrev() { _mat10Fc.idx = (_mat10Fc.idx - 1 + (_mat10Fc.cards.length || 1)) % (_mat10Fc.cards.length || 1); _mat10Fc.flipped = false; mat10FcRender(); }

/* ════════════════════════════════════════════════════════════════
   SUB-MODO: TESTE CRONOMETRADO
   ════════════════════════════════════════════════════════════════ */
var _mat10Teste = { cap: 1, sel: null, nivel: 'medio', qtd: 10, tempo: 600, exs: [], answered: {}, score: { correct: 0, total: 0 }, timer: null, restante: 0 };

function _mat10TesteSel() { if (!_mat10Teste.sel) _mat10Teste.sel = _selNew(); return _mat10Teste.sel; }

function mat10TesteBuildNav() {
  var row = document.getElementById('mat10-teste-cap-row');
  if (row) row.innerHTML = _selBarsHTML(_mat10TesteSel(), _mat10SelCfg(), 'mat10TesteToggleCap', 'mat10TesteToggleSt');
  var st = document.getElementById('mat10-teste-st-row'); if (st) st.style.display = 'none';
  mat10TesteRenderConfig();
}

function mat10TesteToggleCap(cap) {
  _selToggleCap(_mat10TesteSel(), _mat10SelCfg(), cap);
  mat10TesteBuildNav();
}
function mat10TesteToggleSt(cap, st) {
  _selToggleSt(_mat10TesteSel(), cap, st);
  mat10TesteBuildNav();
}

function mat10TesteRenderConfig() {
  var app = document.getElementById('mat10-teste-app');
  if (!app) return;
  if (_mat10Teste.timer) { clearInterval(_mat10Teste.timer); _mat10Teste.timer = null; }
  app.innerHTML =
    '<div class="card">' +
      '<div class="card-title">Configurar teste</div>' +
      '<div class="flex flex-wrap gap-6 items-end">' +
        '<div><div class="label-small">Nível</div>' +
          '<div class="gen-level-group" id="mat10-teste-nivel">' +
            '<button class="gen-level-btn' + (_mat10Teste.nivel==='facil'?' active':'') + '" onclick="mat10TesteSetNivel(\'facil\',this)"><span class="status-dot status-dot--easy"></span> Fácil</button>' +
            '<button class="gen-level-btn' + (_mat10Teste.nivel==='medio'?' active':'') + '" onclick="mat10TesteSetNivel(\'medio\',this)"><span class="status-dot status-dot--medium"></span> Médio</button>' +
            '<button class="gen-level-btn' + (_mat10Teste.nivel==='dificil'?' active':'') + '" onclick="mat10TesteSetNivel(\'dificil\',this)"><span class="status-dot status-dot--hard"></span> Difícil</button>' +
          '</div></div>' +
        '<div><div class="label-small">N.º questões</div>' +
          '<select class="ai-select" id="mat10-teste-qtd"><option value="10">10</option><option value="15">15</option><option value="20">20</option></select></div>' +
        '<div><div class="label-small">Tempo</div>' +
          '<select class="ai-select" id="mat10-teste-tempo"><option value="600">10 min</option><option value="900">15 min</option><option value="1800">30 min</option></select></div>' +
        '<button class="btn btn-primary" onclick="mat10TesteStart()">▶ Iniciar teste</button>' +
      '</div>' +
    '</div>';
}

function mat10TesteSetNivel(nivel, btn) {
  _mat10Teste.nivel = nivel;
  var grp = document.getElementById('mat10-teste-nivel');
  if (grp) grp.querySelectorAll('.gen-level-btn').forEach(function(b){ b.classList.remove('active'); });
  if (btn) btn.classList.add('active');
}

function mat10TesteStart() {
  var pares = _selPares(_mat10TesteSel(), _mat10SelCfg());
  if (!pares.length) return;
  pares = pares.slice();
  for (var sp = pares.length - 1; sp > 0; sp--) { var rsp = Math.floor(Math.random() * (sp + 1)); var tsp = pares[sp]; pares[sp] = pares[rsp]; pares[rsp] = tsp; }
  _mat10Teste.cap = (_mat10TesteSel().caps[0]) || (pares[0] && pares[0].cap) || 1;
  var qtdEl = document.getElementById('mat10-teste-qtd'), tempoEl = document.getElementById('mat10-teste-tempo');
  _mat10Teste.qtd = qtdEl ? parseInt(qtdEl.value) : 10;
  _mat10Teste.tempo = tempoEl ? parseInt(tempoEl.value) : 600;
  var tipos = ['mc', 'fill', 'mc', 'vf', 'fill'];
  var exs = [];
  for (var i = 0; i < _mat10Teste.qtd; i++) {
    var par = pares[i % pares.length];
    var gen = _mat10Gerador(par.cap); if (!gen) continue;
    var ex = gen(par.tema, tipos[i % tipos.length], _mat10Teste.nivel);
    if (ex) exs.push(Object.assign({}, ex, { num: i + 1 }));
  }
  _mat10Teste.exs = exs; _mat10Teste.answered = {}; _mat10Teste.score = { correct: 0, total: 0 };
  _mat10Teste.restante = _mat10Teste.tempo;

  var app = document.getElementById('mat10-teste-app');
  var quizHTML = (typeof _capBuildQuizHTML === 'function') ? _capBuildQuizHTML(exs, 'm8teste', 'mat10TesteCheck') : '';
  app.innerHTML =
    '<div class="exam-progress-bar" style="position:sticky;top:0;z-index:5;background:var(--surface);padding:.75rem;border-radius:12px;display:flex;align-items:center;gap:1rem;flex-wrap:wrap">' +
      '<div style="font-family:\'Cormorant Garamond\',serif;font-size:1.8rem;font-weight:900" id="mat10-teste-timer">' + _mat10FmtTime(_mat10Teste.restante) + '</div>' +
      '<div style="font-size:.78rem;color:var(--ink3)">Respondidas: <span id="mat10-teste-answered">0 / ' + _mat10Teste.qtd + '</span></div>' +
      '<button class="btn btn-ghost ml-auto" onclick="mat10TesteFinish()">⏹ Terminar</button>' +
    '</div>' +
    '<div id="mat10-teste-questions" style="margin-top:1rem">' + quizHTML + '</div>';

  _mat10Teste.timer = setInterval(function() {
    _mat10Teste.restante--;
    var t = document.getElementById('mat10-teste-timer');
    if (t) t.textContent = _mat10FmtTime(_mat10Teste.restante);
    if (_mat10Teste.restante <= 0) mat10TesteFinish();
  }, 1000);
}

function _mat10FmtTime(s) {
  var m = Math.floor(s / 60), sec = s % 60;
  return (m < 10 ? '0' : '') + m + ':' + (sec < 10 ? '0' : '') + sec;
}

function mat10TesteCheck(qid, tipo, val, btn) {
  if (_mat10Teste.answered[qid]) return;
  if (typeof _capCheckAnswer !== 'function') return;
  var r = _capCheckAnswer(qid, tipo, val);
  if (!r) return;
  _mat10Teste.answered[qid] = true;
  if (r.correct) _mat10Teste.score.correct++;
  _mat10Teste.score.total++;
  if (typeof _capShowFeedback === 'function') _capShowFeedback(qid, r.correct, r.expl, val, btn);
  var a = document.getElementById('mat10-teste-answered');
  if (a) a.textContent = _mat10Teste.score.total + ' / ' + _mat10Teste.qtd;
  mat10SaveProgress(_mat10Teste.cap, r.correct);
  if (_mat10Teste.score.total >= _mat10Teste.qtd) setTimeout(mat10TesteFinish, 600);
}

function mat10TesteFinish() {
  if (_mat10Teste.timer) { clearInterval(_mat10Teste.timer); _mat10Teste.timer = null; }
  var app = document.getElementById('mat10-teste-app');
  if (!app) return;
  var total = _mat10Teste.qtd;
  var correct = _mat10Teste.score.correct;
  var pct = total > 0 ? Math.round(correct / total * 100) : 0;
  _mat10PM(_mat10Teste.cap, 'quiz', { pontuacao: correct, total: total });
  var nota = Math.round(correct / total * 20 * 10) / 10;
  var emoji = pct >= 90 ? '🏆' : pct >= 70 ? '⭐' : pct >= 50 ? '👍' : '📚';
  app.innerHTML =
    '<div style="text-align:center;padding:2.5rem 1rem">' +
      '<div style="font-size:3.5rem;margin-bottom:.75rem">' + emoji + '</div>' +
      '<div style="font-family:\'Cormorant Garamond\',serif;font-size:2.2rem;font-weight:900;color:var(--ink)">' + nota + ' / 20</div>' +
      '<div style="color:var(--ink3);margin:.5rem 0 1.5rem">' + correct + ' certas em ' + total + ' questões (' + pct + '%)</div>' +
      '<button class="btn btn-primary" onclick="mat10TesteRenderConfig()">↺ Novo teste</button>' +
    '</div>';
}

/* ════════════════════════════════════════════════════════════════
   SUB-MODO: JOGOS (reutiliza o motor genérico _j24AutoInit)
   ════════════════════════════════════════════════════════════════ */
var _mat10JogosInited = false;
function mat10JogosInit() {
  (function(){ var pj=document.getElementById('mat10p-jogos'); if(pj && !document.getElementById('mat10-jogos-atr')){ var d=document.createElement('div'); d.id='mat10-jogos-atr'; d.style.margin='0 0 .8rem'; if(pj.firstChild) pj.insertBefore(d,pj.firstChild); else pj.appendChild(d); } if(typeof Atribuir!=='undefined'&&Atribuir.montar) Atribuir.montar('mat10-jogos-atr',{curso:'mat10',cursoNome:'Matemática 10.º',tipo:'jogo',nivel:'',caps:_mat10CapMeta.map(function(mm){return {n:mm.n,label:mm.label};})}); })();
  _mat10PM(_mat10Prat.cap || 1, 'jogo');
  if (_mat10JogosInited) return;
  if (typeof _j24AutoInit === 'function') {
    // Regista o curso nos jogos (matéria correta + filtro capítulo/subtema).
    if (typeof _gRegisterGameCourse === 'function') {
      _gRegisterGameCourse('mat10-jogos-app', {
        capMeta: _mat10CapMeta,
        subtemas: _mat10Subtemas,
        subtemaTemas: (typeof _mat10SubtemaTemas !== 'undefined') ? _mat10SubtemaTemas : null,
        temasCount: _mat10TemasCount,
        gerador: _mat10Gerador,
        banco: (typeof _mat10Banco !== 'undefined') ? _mat10Banco : null,
        qFor: function (level, sel) { return _jogoQForCourse(this, level, sel); }
      });
    }
    _j24AutoInit('mat10-jogos-app', 'medio');
    _mat10JogosInited = true;
  } else {
    var app = document.getElementById('mat10-jogos-app');
    if (app) app.innerHTML = '<p style="color:var(--ink4);padding:2rem;text-align:center">Jogos indisponíveis (motor não carregado).</p>';
  }
}

/* ════════════════════════════════════════════════════════════════
   TAB PROGRESSO
   Lê edupt_mat10_capN (gravado por mat10SaveProgress). Mostra resumo
   global, stats, barras por capítulo, Relatório PDF e Limpar.
   ════════════════════════════════════════════════════════════════ */
function _mat10ProgGetCaps() {
  var out = [];
  var nCaps = _mat10CapMeta.length;
  for (var cap = 1; cap <= nCaps; cap++) {
    var correct = 0, total = 0;
    try {
      var d = JSON.parse(localStorage.getItem('edupt_mat10_cap' + cap) || '{}');
      if (d.sections) Object.keys(d.sections).forEach(function(k) {
        correct += (d.sections[k].correct || 0);
        total += (d.sections[k].total || 0);
      });
    } catch (e) {}
    out.push({ cap: cap, correct: correct, total: total, pct: total > 0 ? Math.round(correct / total * 100) : 0 });
  }
  return out;
}

function mat10RenderProgresso() {
  var el = document.getElementById('mat10-progresso-content');
  if (!el) return;
  var caps = _mat10ProgGetCaps();
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
     + '<button onclick="mat10ProgDownloadPDF()" style="font-family:inherit;font-size:.82rem;font-weight:700;color:#8b3a35;background:none;border:none;cursor:pointer;text-decoration:underline;padding:0">Guarda o relatório PDF</button> para o manteres.</span>'
     + '</div>';

  // Resumo global (gradiente terracota do 10.º ano)
  h += '<div style="background:var(--m10c1-base);border:1.5px solid var(--m10c1-mid);border-radius:16px;padding:1.1rem 1.25rem;margin-bottom:1.25rem;display:flex;align-items:center;gap:1rem;flex-wrap:wrap">'
     +   '<div style="width:52px;height:52px;border-radius:50%;background:var(--m10c1-mid);display:flex;align-items:center;justify-content:center;flex-shrink:0"><i class="ph ' + icon + '" style="font-size:1.4rem;color:#fff"></i></div>'
     +   '<div style="flex:1;min-width:180px">'
     +     '<div style="font-family:\'Cormorant Garamond\',serif;font-size:1.6rem;font-weight:900;color:var(--ink);line-height:1">' + (totalT > 0 ? globalPct + '<span style="font-size:1rem">%</span>' : '-') + '</div>'
     +     '<div style="font-size:.82rem;color:var(--ink2);margin-top:3px">' + msg + '</div>'
     +   '</div>'
     +   '<button class="btn btn-ghost" onclick="mat10ProgDownloadPDF()" style="font-size:.78rem;padding:7px 14px;display:inline-flex;align-items:center;gap:5px"><i class="ph ph-file-text"></i>Relatório PDF</button>'
     + '</div>';

  // XP + streak do ProgressManager (apenas dos capítulos do 10.º ano)
  var pmXp = 0, pmStreak = 0;
  if (typeof ProgressManager !== 'undefined') {
    try {
      var sum = ProgressManager.getSummary();
      pmStreak = sum.streak || 0;
      if (sum.caps) Object.keys(sum.caps).forEach(function(k) { if (k.indexOf('m10cap') === 0) pmXp += (sum.caps[k].xp || 0); });
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
    var m = _mat10CapMeta[c.cap - 1];
    var color = _mat10CapColors[c.cap] || '#516860';
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
      var mp = _mat10CapMeta[pior.cap - 1];
      var colorp = _mat10CapColors[pior.cap] || '#516860';
      h += '<div class="card mt-4" style="border-color:' + colorp + '">'
        + '<div class="card-title" style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:.5rem">'
        + '<span>🎯 Treino Direcionado</span></div>'
        + '<div style="font-size:.85rem;color:var(--ink2);margin:.3rem 0 .8rem">O capítulo onde tens mais a melhorar é <strong>' + mp.label + '</strong> (' + pior.pct + '%). Pratica mais um pouco para subir a tua taxa!</div>'
        + '<button class="btn btn-primary" onclick="mat10TreinarCap(' + pior.cap + ')" style="display:inline-flex;align-items:center;gap:6px"><i class="ph ph-target"></i> Treinar ' + mp.label + '</button>'
        + '</div>';
    }
  }

  // Última atualização
  h += '<div style="font-size:.72rem;color:var(--ink4);margin-top:1rem">Última atualização: ' + new Date().toLocaleString('pt-PT', { hour: '2-digit', minute: '2-digit', day: '2-digit', month: '2-digit' }) + '</div>';

  // Limpar
  h += '<div class="mt-4 flex flex-wrap gap-3"><button class="btn btn-ghost" onclick="mat10ProgReset()"><i class="ph ph-trash"></i> Limpar progresso</button></div>';

  el.innerHTML = h;
}

// Abre a tab Exercícios da Praticar já no capítulo indicado (treino direcionado).
function mat10TreinarCap(cap) {
  _mat10Prat.cap = cap;
  _mat10Prat.st = 0;
  _mat10Prat.sel = { caps: [cap], stsByCap: {} };
  mat10SwitchTab('exercicios', null);
}

function mat10ProgReset() {
  if (typeof window !== 'undefined' && window.confirm && !window.confirm('Limpar todo o progresso do 10.º ano? Esta ação não pode ser desfeita.')) return;
  for (var cap = 1; cap <= _mat10CapMeta.length; cap++) { try { localStorage.removeItem('edupt_mat10_cap' + cap); } catch (e) {} }
  // Remove só os capítulos do 10.º ano (m10cap*) do ProgressManager, preservando os outros anos.
  try {
    var raw = localStorage.getItem('edupt_progress_v2');
    if (raw) {
      var d = JSON.parse(raw);
      if (d.caps) { Object.keys(d.caps).forEach(function(k) { if (k.indexOf('m10cap') === 0) delete d.caps[k]; }); }
      localStorage.setItem('edupt_progress_v2', JSON.stringify(d));
    }
  } catch (e) {}
  mat10RenderProgresso();
  if (typeof eduToast === 'function') eduToast('Progresso do 10.º ano limpo.', 'ok');
}

function mat10ProgDownloadPDF() {
  var caps = _mat10ProgGetCaps();
  var totalC = 0, totalT = 0;
  caps.forEach(function(c) { totalC += c.correct; totalT += c.total; });
  var globalPct = totalT > 0 ? Math.round(totalC / totalT * 100) : 0;
  var rows = caps.map(function(c) {
    var m = _mat10CapMeta[c.cap - 1];
    return '<tr><td style="padding:6px 10px;border-bottom:1px solid #eee">' + m.label + '</td>'
      + '<td style="padding:6px 10px;border-bottom:1px solid #eee;text-align:center">' + (c.total > 0 ? c.correct + ' / ' + c.total : '-') + '</td>'
      + '<td style="padding:6px 10px;border-bottom:1px solid #eee;text-align:center">' + (c.total > 0 ? c.pct + '%' : '-') + '</td></tr>';
  }).join('');
  var html = '<div style="font-family:Arial,sans-serif;max-width:680px;margin:0 auto;padding:24px">'
    + '<h1 style="font-size:20px;margin:0 0 4px">Relatório de Progresso · Matemática 10.º Ano</h1>'
    + '<div style="color:#666;font-size:13px;margin-bottom:16px">3ponto14 · ' + new Date().toLocaleString('pt-PT', { day: '2-digit', month: '2-digit', year: 'numeric' }) + '</div>'
    + eduAlunoLinhaPDF()
    + '<div style="background:#eef2f0;border:1px solid #9ab5aa;border-radius:8px;padding:12px 16px;margin-bottom:16px">'
    + '<strong>Taxa global:</strong> ' + (totalT > 0 ? globalPct + '%' : '-') + ' &nbsp;·&nbsp; ' + totalC + ' certas em ' + totalT + ' questões.</div>'
    + '<table style="width:100%;border-collapse:collapse;font-size:14px"><thead><tr style="background:#516860;color:#fff">'
    + '<th style="padding:8px 10px;text-align:left">Capítulo</th><th style="padding:8px 10px">Certas</th><th style="padding:8px 10px">%</th></tr></thead>'
    + '<tbody>' + rows + '</tbody></table></div>';
  if (typeof htmlToPdfDownload === 'function') htmlToPdfDownload(html, 'progresso-mat10.pdf');
  else if (typeof eduToast === 'function') eduToast('Geração de PDF indisponível.', 'warn');
}

/* ════════════════════════════════════════════════════════════════
   TAB FICHAS - gerador rico (multi-capítulo), igual ao 7.º ano.
   Tipos: resumo teórico, exercícios, teste, minitestes, soluções.
   Seleção de vários capítulos; nível; nº de exercícios; PDF ou HTML.
   ════════════════════════════════════════════════════════════════ */
var _mat10gf = {
  caps: {},
  sts: {},             // { cap: { stIdx: true } } subtemas por capítulo; vazio = todos            // { cap: true } selecionados
  tipos: { resumo: true, exercicios: true, teste: true, minitestes: false, solucoes: true },
  dif: 'facil',
  qty: 10
};

// Constrói a lista de capítulos selecionáveis (só os com gerador).
function mat10FichasBuildNav() {
  if(typeof Atribuir!=='undefined'&&Atribuir.fixo) Atribuir.fixo('mat10-fichas-atr','mat10AtribuirFicha');
  var el = document.getElementById('mat10-fichas-caps');
  if (!el) return;
  // por defeito, seleciona o primeiro capítulo com gerador
  var temAlgum = false;
  for (var k in _mat10gf.caps) { if (_mat10gf.caps[k]) { temAlgum = true; break; } }
  var h = '';
  _mat10CapMeta.forEach(function(m) {
    var hasGen = !!_mat10Gerador(m.n);
    if (!hasGen) return;
    if (!temAlgum) { _mat10gf.caps[m.n] = true; temAlgum = true; } // 1.º disponível
    var sel = !!_mat10gf.caps[m.n];
    var color = _mat10CapColors[m.n] || '#516860';
    var style = sel ? 'background:' + color + ';border-color:' + color + ';color:#fff' : '';
    h += '<button class="gf-cap-btn' + (sel ? ' active' : '') + '" data-cap="' + m.n + '" onclick="mat10gfToggleCap(' + m.n + ',this)" style="' + style + '">' + m.icon + ' ' + m.label + '</button>';
    // subtemas do capítulo selecionado (gerar ficha só de um subtema)
    if (sel) {
      var _sts = (typeof _mat10Subtemas !== 'undefined' && _mat10Subtemas[m.n]) ? _mat10Subtemas[m.n] : [];
      if (_sts.length) {
        var _esc = _mat10gf.sts[m.n] || {};
        var _alg = _mat10gfStsSel(m.n) !== null;
        h += '<div style="margin:.15rem 0 .55rem 1.1rem;display:flex;flex-wrap:wrap;gap:.3rem;align-items:center">';
        h += '<span style="font-size:.66rem;font-weight:800;color:var(--ink4);text-transform:uppercase;letter-spacing:.06em;margin-right:.2rem">Subtemas:</span>';
        h += '<button onclick="mat10gfToggleSt(' + m.n + ',0,this)" style="' + _mat10gfStStyle(!_alg, color) + '">Todos</button>';
        _sts.forEach(function (st, i) {
          var on = !!_esc[i + 1];
          h += '<button onclick="mat10gfToggleSt(' + m.n + ',' + (i + 1) + ',this)" style="' + _mat10gfStStyle(on, color) + '">' + st + '</button>';
        });
        h += '</div>';
      }
    }
  });
  el.innerHTML = h;
}

// Subtemas (índices 1..n) escolhidos para um capítulo; null = todos.
function _mat10gfStsSel(cap) {
  var sel = _mat10gf.sts[cap];
  if (!sel) return null;
  var out = [];
  Object.keys(sel).forEach(function (i) { if (sel[i]) out.push(parseInt(i)); });
  return out.length ? out : null;
}

// Chaves de tema correspondentes aos subtemas escolhidos; null = todos.
function _mat10gfTemasSel(cap) {
  var sts = _mat10gfStsSel(cap);
  if (!sts) return null;
  var mapa = (typeof _mat10SubtemaTemas !== 'undefined' && _mat10SubtemaTemas[cap]) ? _mat10SubtemaTemas[cap] : {};
  var temas = [];
  sts.forEach(function (i) { (mapa[i] || [String(i)]).forEach(function (t) { if (temas.indexOf(t) === -1) temas.push(t); }); });
  return temas.length ? temas : null;
}

function _mat10gfStStyle(on, color) {
  return 'border-radius:999px;padding:3px 11px;font-size:.7rem;font-weight:700;cursor:pointer;font-family:Montserrat,sans-serif;transition:all .15s;'
    + (on ? 'background:' + color + ';border:1.5px solid ' + color + ';color:#fff'
          : 'background:var(--white);border:1.5px solid var(--border);color:var(--ink3)');
}

function mat10gfToggleCap(cap, btn) {
  _mat10gf.caps[cap] = !_mat10gf.caps[cap];
  if (!_mat10gf.caps[cap]) delete _mat10gf.sts[cap]; // desmarcar cap limpa os subtemas
  mat10FichasBuildNav(); // re-render para mostrar/esconder a linha de subtemas
}

// idx 0 = «Todos» (limpa a seleção); idx 1..n alterna o subtema.
function mat10gfToggleSt(cap, idx, btn) {
  if (idx === 0) { delete _mat10gf.sts[cap]; }
  else {
    if (!_mat10gf.sts[cap]) _mat10gf.sts[cap] = {};
    _mat10gf.sts[cap][idx] = !_mat10gf.sts[cap][idx];
    if (_mat10gfStsSel(cap) === null) delete _mat10gf.sts[cap]; // tudo desmarcado = todos
  }
  mat10FichasBuildNav();
}

function mat10gfToggleType(btn) {
  var t = btn.getAttribute('data-type');
  _mat10gf.tipos[t] = !_mat10gf.tipos[t];
  btn.classList.toggle('active', _mat10gf.tipos[t]);
  var tick = btn.querySelector('.gf-tick'); if (tick) tick.textContent = _mat10gf.tipos[t] ? '✓' : '';
}

function mat10gfSetDif(btn) {
  _mat10gf.dif = btn.getAttribute('data-dif');
  var grp = document.getElementById('mat10-fichas-dif');
  if (grp) grp.querySelectorAll('.gf-dif-btn').forEach(function(b){ b.classList.remove('active'); });
  btn.classList.add('active');
}

function mat10gfSetQty(btn) {
  _mat10gf.qty = parseInt(btn.getAttribute('data-qty')) || 10;
  var grp = document.getElementById('mat10-fichas-qty');
  if (grp) grp.querySelectorAll('.gf-dif-btn').forEach(function(b){ b.classList.remove('active'); });
  btn.classList.add('active');
}

// Renderiza um bloco de exercícios (com ou sem espaço de resposta).
function _mat10gfExBloco(exs, startNum) {
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

function _mat10gfGenExs(cap, n) {
  var gen = _mat10Gerador(cap); if (!gen) return [];
  var _temasFiltro = _mat10gfTemasSel(cap); // subtemas escolhidos → temas; null = todos
  var nTemas = _mat10TemasCount[cap] || 1;
  var tipos = ['mc', 'fill', 'vf', 'fill', 'mc', 'mc'];
  var geradas = [], vistos = {};
  // gera até n questões DISTINTAS (evita enunciados repetidos na ficha)
  for (var i = 0, tent = 0; geradas.length < n && tent < n * 6; tent++) {
    var _tk = _temasFiltro ? _temasFiltro[i % _temasFiltro.length] : String((i % nTemas) + 1);
    var ex = gen(_tk, tipos[i % tipos.length], _mat10gf.dif);
    i++;
    if (!ex) continue;
    var chave = String(ex.enun || '').replace(/<[^>]+>/g, '').trim();
    if (vistos[chave]) continue;
    vistos[chave] = 1;
    geradas.push(ex);
  }
  // mistura questões reais do banco (multi-passo, com contexto/figuras)
  var banco = (typeof _mat10Banco !== 'undefined' && _mat10Banco[cap]) ? _mat10Banco[cap] : [];
  if (banco.length && typeof _mixBancoGeradas === 'function') {
    return _mixBancoGeradas(banco, geradas, n, Math.min(Math.ceil(n / 3), banco.length), _mat10gf.dif);
  }
  return geradas;
}

function mat10gfGerar(formato) {
  // capítulos selecionados
  var capsSel = [];
  _mat10CapMeta.forEach(function(m) { if (_mat10gf.caps[m.n] && _mat10Gerador(m.n)) capsSel.push(m.n); });
  var status = document.getElementById('mat10-fichas-status');
  if (!capsSel.length) { if (status) status.textContent = 'Seleciona pelo menos um capítulo.'; return; }
  var algumTipo = _mat10gf.tipos.resumo || _mat10gf.tipos.exercicios || _mat10gf.tipos.teste || _mat10gf.tipos.minitestes;
  if (!algumTipo) { if (status) status.textContent = 'Seleciona pelo menos um tipo de conteúdo.'; return; }
  if (status) status.textContent = 'A gerar…';

  var difLabel = { facil: 'Fácil', medio: 'Médio', dificil: 'Difícil' }[_mat10gf.dif];
  var solucoes = []; // {num, ex} acumuladas para a secção final
  var solCounter = 0;

  var corpo = '';
  capsSel.forEach(function(cap, ci) {
    _mat10PM(cap, 'ficha'); // gerou ficha deste capítulo
    var m = _mat10CapMeta[cap - 1];
    var color = _mat10CapColors[cap] || '#36527a';
    corpo += '<div style="' + (ci > 0 ? 'page-break-before:always;' : '') + 'margin-bottom:6px">'
      + '<h2 style="font-size:16px;color:' + color + ';border-bottom:2px solid ' + color + ';padding-bottom:4px;margin:0 0 10px">' + cap + '. ' + m.label + '</h2>';

    // Resumo teórico (das flashcards)
    if (_mat10gf.tipos.resumo) {
      var cards = _mat10Cards[cap] || [];
      if (cards.length) {
        corpo += '<div style="margin-bottom:12px"><h3 style="font-size:13px;color:#444;margin:0 0 5px">Resumo teórico</h3>';
        cards.slice(0, 8).forEach(function(c) {
          corpo += '<div style="font-size:11.5px;margin-bottom:4px"><strong>' + c.q + '</strong> ' + c.a + (c.v ? '<div style="margin:3px 0">' + c.v + '</div>' : '') + '</div>';
        });
        corpo += '</div>';
      }
    }
    // Exercícios
    if (_mat10gf.tipos.exercicios) {
      var exs = _mat10gfGenExs(cap, _mat10gf.qty);
      corpo += '<div style="margin-bottom:12px"><h3 style="font-size:13px;color:#444;margin:0 0 5px">Exercícios</h3>'
        + _mat10gfExBloco(exs, solCounter + 1) + '</div>';
      exs.forEach(function(ex) { solCounter++; solucoes.push({ num: solCounter, ex: ex }); });
    }
    // Teste de avaliação (8 questões mistas)
    if (_mat10gf.tipos.teste) {
      var exsT = _mat10gfGenExs(cap, 8);
      corpo += '<div style="margin-bottom:12px"><h3 style="font-size:13px;color:#444;margin:0 0 5px">Teste de avaliação</h3>'
        + _mat10gfExBloco(exsT, solCounter + 1) + '</div>';
      exsT.forEach(function(ex) { solCounter++; solucoes.push({ num: solCounter, ex: ex }); });
    }
    // Minitestes (um por subtema, 4 questões cada)
    if (_mat10gf.tipos.minitestes) {
      var subt = _mat10Subtemas[cap] || [];
      var mapa = _mat10SubtemaTemas[cap] || {};
      corpo += '<div style="margin-bottom:12px"><h3 style="font-size:13px;color:#444;margin:0 0 5px">Minitestes</h3>';
      subt.forEach(function(st, si) {
        var temas = mapa[si + 1] || [String(si + 1)];
        var gen = _mat10Gerador(cap);
        var exsM = [];
        for (var q = 0; q < 4; q++) {
          var tema = temas[q % temas.length];
          var ex = gen(tema, (q % 2 === 0) ? 'mc' : 'fill', _mat10gf.dif);
          if (ex) exsM.push(ex);
        }
        corpo += '<div style="margin-bottom:8px"><div style="font-size:12px;font-weight:700;color:#555">Mini ' + (si + 1) + ' · ' + st + '</div>'
          + _mat10gfExBloco(exsM, solCounter + 1) + '</div>';
        exsM.forEach(function(ex) { solCounter++; solucoes.push({ num: solCounter, ex: ex }); });
      });
      corpo += '</div>';
    }
    corpo += '</div>';
  });

  // Secção de soluções
  var solHTML = '';
  if (_mat10gf.tipos.solucoes && solucoes.length) {
    var _lmS = (typeof _limpaMath === 'function') ? _limpaMath : function(x){ return x; };
    var fmS = (typeof formatMath === 'function') ? function(x){ return formatMath(_lmS(x)); } : function(x){ return _lmS(x); };
    var lst = solucoes.map(function(s) {
      return '<div style="font-size:11.5px;margin-bottom:7px;line-height:1.5;page-break-inside:avoid">'
        + '<strong>' + s.num + '.</strong> <strong style="color:#1a6b4a">' + fmS(String(s.ex.resposta)) + '</strong>'
        + (s.ex.expl ? '<br><span style="color:#555">' + fmS(s.ex.expl) + '</span>' : '') + '</div>';
    }).join('');
    solHTML = '<div style="page-break-before:always;padding-top:8px"><h2 style="font-size:16px;border-bottom:2px solid #36527a;padding-bottom:4px">Soluções</h2>' + lst + '</div>';
  }

  var nomesCaps = capsSel.map(function(c) { return _mat10CapMeta[c - 1].label; }).join(', ');
  var html = '<div style="font-family:Arial,sans-serif;max-width:740px;margin:0 auto;padding:24px;color:#222">'
    + '<div style="display:flex;justify-content:space-between;align-items:baseline;border-bottom:2px solid #36527a;padding-bottom:8px;margin-bottom:14px">'
    + '<div><h1 style="font-size:18px;margin:0">Ficha de Trabalho · Matemática 10.º Ano</h1>'
    + '<div style="font-size:11.5px;color:#666">' + nomesCaps + ' · Nível ' + difLabel + '</div></div>'
    + '<div style="font-size:11.5px;color:#888">3ponto14</div></div>'
    + '<div style="font-size:11.5px;color:#666;margin-bottom:12px">Nome: ____________________________  Data: ____ / ____ / ______</div>'
    + corpo + solHTML + '</div>';

  var _temasNomes = capsSel.map(function(c){ return _mat10CapMeta[c-1].label; });
  var fname = (typeof _nomeFicha === 'function') ? _nomeFicha('10', 'matematica', _temasNomes, formato) : ('ficha-mat10.' + (formato === 'html' ? 'html' : 'pdf'));
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
function _mat10Init() {
  if (typeof _addStatsTeoriaVisuais === 'function') _addStatsTeoriaVisuais(_mat10Cards[5], '#5a5ea0'); // cap5 Estatística
  if (typeof _addFuncTeoriaVisuais === 'function') _addFuncTeoriaVisuais(_mat10Cards[4], '#3f7a9a'); // cap4 Funções Reais
  // arranca na tab Teoria com o cap 1 selecionado
  mat10BuildResumoNav();
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _mat10Init);
else _mat10Init();

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
   GERADORES DE EXERCÍCIOS - Matemática A · 10.º ano
   Reutilizam os helpers genéricos acima (rnd_m81, shuffle_m81…).
   ════════════════════════════════════════════════════════════════ */
function _opts4_m10(correct, distractors) {
  var opts = [String(correct)];
  for (var i = 0; i < distractors.length && opts.length < 4; i++) {
    var d = String(distractors[i]);
    if (opts.indexOf(d) === -1) opts.push(d);
  }
  var bump = 1;
  while (opts.length < 4) { var c = String(Number(correct) + bump); if (opts.indexOf(c) === -1) opts.push(c); bump++; if (bump > 50) break; }
  return shuffle_m81(opts.slice(0, 4));
}

// ═══ CAP 1 · Lógica e Conjuntos ═══
// Temas: 1 Valor lógico · 2 Negação de quantificadores · 3 Operações com intervalos
function buildEx_m10c1(tema, tipo, dif) {
  tema = String(tema);
  if (tema === '1') {
    var p = Math.random() < 0.5, q = Math.random() < 0.5;
    var ops = [
      { s: 'p ∧ q', v: p && q }, { s: 'p ∨ q', v: p || q },
      { s: 'p ⇒ q', v: (!p) || q }, { s: 'p ⇔ q', v: p === q }, { s: '¬p ∨ q', v: (!p) || q }
    ];
    var o = ops[rnd_m81(0, ops.length - 1)];
    return {
      enun: 'Sendo p ' + (p ? 'verdadeira' : 'falsa') + ' e q ' + (q ? 'verdadeira' : 'falsa') + ', qual é o valor lógico de <strong>' + o.s + '</strong>?',
      tipo: 'mc', opcoes: ['Verdadeira', 'Falsa'], resposta: o.v ? 'Verdadeira' : 'Falsa',
      expl: 'Com p=' + (p ? 'V' : 'F') + ' e q=' + (q ? 'V' : 'F'), tema: 'T1 · Lógica'
    };
  }
  if (tema === '2') {
    var frases = [
      { e: 'Todos os alunos passaram.', n: 'Existe (pelo menos) um aluno que não passou.' },
      { e: 'Existe um número par maior que 100.', n: 'Todos os números pares são menores ou iguais a 100.' },
      { e: 'Qualquer triângulo tem 3 lados.', n: 'Existe (pelo menos) um triângulo que não tem 3 lados.' },
      { e: 'Algum aluno chegou atrasado.', n: 'Nenhum aluno chegou atrasado (todos chegaram a horas).' }
    ];
    var fr = frases[rnd_m81(0, frases.length - 1)];
    // distratores: trocar quantificador sem negar a condição
    var dist = ['Todos os elementos verificam a condição.', 'Existe um elemento que verifica a condição.', 'Nenhuma das anteriores.'];
    var opts = shuffle_m81([fr.n].concat(dist).filter(function (v, i, a) { return a.indexOf(v) === i; })).slice(0, 4);
    if (opts.indexOf(fr.n) === -1) opts[0] = fr.n;
    return {
      enun: 'Qual é a negação de: <strong>"' + fr.e + '"</strong>?',
      tipo: 'mc', opcoes: opts, resposta: fr.n,
      expl: 'A negação troca ∀ por ∃ (e vice-versa) e nega a condição: ' + fr.n,
      tema: 'T2 · Quantificadores'
    };
  }
  // tema 3 · interseção/reunião de intervalos
  var a = rnd_m81(-4, 2), b = a + rnd_m81(2, 5);
  var c = a + rnd_m81(1, 3), d = c + rnd_m81(2, 5);
  var op = Math.random() < 0.5;
  // A=[a,b], B=[c,d] - visual na reta numérica (A acima, B abaixo no mesmo eixo)
  var lo0 = Math.min(a, c) - 1, hi0 = Math.max(b, d) + 1;
  var visI = (typeof EduVisual !== 'undefined') ? EduVisual.retaNumerica(lo0, hi0, {
    intervals: [{ from: a, to: b, openL: false, openR: false }],
    points: [{ x: a, label: 'A' }, { x: b }], color: '#3f6b8a'
  }) : '';
  if (op) {
    var lo = Math.max(a, c), hi = Math.min(b, d);
    var res = lo <= hi ? '[' + lo + ', ' + hi + ']' : '∅ (vazio)';
    return {
      enun: 'Calcula <strong>[' + a + ', ' + b + '] ∩ [' + c + ', ' + d + ']</strong>. (A figura mostra o intervalo A.)',
      visual: visI,
      tipo: 'fill_frac', resposta: res.replace(/ /g, ''),
      expl: 'A interseção são os reais em AMBOS: de ' + Math.max(a, c) + ' a ' + Math.min(b, d) + ' → ' + res + '.',
      tema: 'T3 · Conjuntos'
    };
  }
  var lo2 = Math.min(a, c), hi2 = Math.max(b, d);
  var res2 = (Math.max(a, c) <= Math.min(b, d)) ? '[' + lo2 + ', ' + hi2 + ']' : '[' + a + ', ' + b + '] ∪ [' + c + ', ' + d + ']';
  return {
    enun: 'Calcula [' + a + ', ' + b + '] ∪ [' + c + ', ' + d + '].',
    tipo: 'fill_frac', resposta: res2.replace(/ /g, ''),
    expl: 'A reunião são os reais em PELO MENOS UM dos intervalos → ' + res2 + '.',
    tema: 'T3 · Conjuntos'
  };
}

// ═══ CAP 2 · Álgebra ═══
// Temas: 1 Simplificar radicais · 2 Teorema do resto · 3 Equação 2.º grau / discriminante
function buildEx_m10c2(tema, tipo, dif) {
  tema = String(tema);
  if (tema === '1') {
    // simplificar √(k²·m) = k√m
    var k = rnd_m81(2, 6), m = [2, 3, 5, 6, 7][rnd_m81(0, 4)];
    var dentro = k * k * m;
    var correct = k + '√' + m;
    return {
      enun: 'Simplifica o radical <strong>√' + dentro + '</strong>.',
      tipo: 'fill_frac', resposta: correct.replace(/ /g, ''),
      expl: '√' + dentro + ' = √(' + (k * k) + '×' + m + ') = ' + k + '√' + m + '.',
      tema: 'T1 · Radicais'
    };
  }
  if (tema === '2') {
    // resto de P(x) por (x-a) = P(a). P(x)=x²+bx+c
    var b = rndNZ_m81(-5, 5), c = rndNZ_m81(-6, 6), a = rndNZ_m81(-3, 4);
    var Pa = a * a + b * a + c;
    var pol = 'x²' + _termoX(b) + _termoC(c);
    // fator (x − a): se a<0 escreve (x + |a|); se a>0 (x − a)
    var fator = (a < 0) ? '(x + ' + Math.abs(a) + ')' : '(x − ' + a + ')';
    var aStr = _parenSeNeg(a);
    return {
      enun: 'Pelo teorema do resto, qual é o resto da divisão de <strong>P(x) = ' + pol + '</strong> por ' + fator + '?',
      tipo: 'fill', resposta: String(Pa),
      expl: 'O resto é P(' + aStr + ') = ' + aStr + '² ' + (b >= 0 ? '+ ' + b : '− ' + Math.abs(b)) + '×' + aStr + _termoC(c) + ' = ' + Pa + '.',
      tema: 'T2 · Polinómios'
    };
  }
  // tema 3 · equação 2.º grau (soluções inteiras) ou discriminante
  var kind = rnd_m81(0, 1);
  if (kind === 0) {
    var r1 = rnd_m81(-5, 6), r2 = rnd_m81(-5, 6);
    var bC = -(r1 + r2), cC = r1 * r2;
    var eqn = 'x²' + _termoX(bC) + _termoC(cC) + ' = 0';
    return {
      enun: 'Resolve <strong>' + eqn + '</strong>. Indica a MENOR solução.',
      tipo: 'fill', resposta: String(Math.min(r1, r2)),
      expl: 'As soluções são ' + Math.min(r1, r2) + ' e ' + Math.max(r1, r2) + ' (a menor: ' + Math.min(r1, r2) + ').',
      tema: 'T3 · Equações'
    };
  }
  var b4 = rndNZ_m81(-6, 6), c4 = rndNZ_m81(-6, 9);
  var delta = b4 * b4 - 4 * c4;
  var eqn4 = 'x²' + _termoX(b4) + _termoC(c4) + ' = 0';
  return {
    enun: 'Calcula o discriminante Δ de <strong>' + eqn4 + '</strong>.',
    tipo: 'fill', resposta: String(delta),
    expl: 'Δ = b² − 4ac = ' + _parenSeNeg(b4) + '² − 4×1×' + _parenSeNeg(c4) + ' = ' + (b4 * b4) + ' − ' + _parenSeNeg(4 * c4) + ' = ' + delta + '.',
    tema: 'T3 · Equações'
  };
}

// ═══ CAP 3 · Geometria Analítica ═══
// Temas: 1 Distância · 2 Ponto médio · 3 Circunferência (centro/raio) · 4 Norma de vetor
function buildEx_m10c3(tema, tipo, dif) {
  tema = String(tema);
  var TERNOS = [[3, 4, 5], [6, 8, 10], [5, 12, 13], [8, 15, 17], [9, 12, 15]];
  if (tema === '1') {
    // terno pequeno (3,4,5) para os dois pontos caberem no referencial
    var t = TERNOS[rnd_m81(0, 1)]; // (3,4,5) ou (6,8,10)
    var ax = rnd_m81(-3, 1), ay = rnd_m81(-3, 1);
    var sgx = Math.random() < 0.5 ? 1 : -1, sgy = Math.random() < 0.5 ? 1 : -1;
    var bx = ax + t[0] * sgx, by = ay + t[1] * sgy;
    var rangeD = Math.max(6, Math.abs(ax), Math.abs(ay), Math.abs(bx), Math.abs(by) + 1);
    var visD = (typeof EduVisual !== 'undefined') ? EduVisual.referencial({
      range: rangeD,
      points: [{ x: ax, y: ay, label: 'A' }, { x: bx, y: by, label: 'B' }],
      vectors: [{ x1: ax, y1: ay, x2: bx, y2: by }],
      color: '#4a5ea0'
    }) : '';
    return {
      enun: 'Calcula a distância entre A(' + ax + ', ' + ay + ') e B(' + bx + ', ' + by + ').',
      visual: visD,
      tipo: 'fill', resposta: String(t[2]),
      expl: 'd = √((' + bx + ' − ' + _parenSeNeg(ax) + ')² + (' + by + ' − ' + _parenSeNeg(ay) + ')²) = √(' + (t[0] * t[0]) + ' + ' + (t[1] * t[1]) + ') = √' + (t[2] * t[2]) + ' = ' + t[2] + '.',
      tema: 'T1 · Distância'
    };
  }
  if (tema === '2') {
    var ax2 = rnd_m81(-6, 6) * 2, ay2 = rnd_m81(-6, 6) * 2; // pares → ponto médio inteiro
    var bx2 = rnd_m81(-6, 6) * 2, by2 = rnd_m81(-6, 6) * 2;
    var mx = (ax2 + bx2) / 2, my = (ay2 + by2) / 2;
    return {
      enun: 'Qual é o ponto médio de [A(' + ax2 + ', ' + ay2 + '), B(' + bx2 + ', ' + by2 + ')]? (forma (x, y))',
      tipo: 'fill_frac', resposta: '(' + mx + ',' + my + ')',
      expl: 'M = ((' + ax2 + '+' + bx2 + ')/2, (' + ay2 + '+' + by2 + ')/2) = (' + mx + ', ' + my + ').',
      tema: 'T2 · Ponto Médio'
    };
  }
  if (tema === '3') {
    var ca = rnd_m81(-5, 5), cb = rnd_m81(-5, 5), r = rnd_m81(2, 7);
    var pedeRaio = Math.random() < 0.5;
    var eq = '(x ' + (ca === 0 ? '' : (ca > 0 ? '− ' + ca : '+ ' + (-ca))) + ')² + (y ' + (cb === 0 ? '' : (cb > 0 ? '− ' + cb : '+ ' + (-cb))) + ')² = ' + (r * r);
    if (pedeRaio) {
      return {
        enun: 'Qual é o raio da circunferência <strong>' + eq + '</strong>?',
        tipo: 'fill', resposta: String(r),
        expl: 'A equação é (x−a)²+(y−b)²=r², logo r² = ' + (r * r) + ' → r = ' + r + '.',
        tema: 'T3 · Circunferência'
      };
    }
    return {
      enun: 'Qual é o centro da circunferência <strong>' + eq + '</strong>? (forma (a, b))',
      tipo: 'fill_frac', resposta: '(' + ca + ',' + cb + ')',
      expl: 'Centro = (a, b) = (' + ca + ', ' + cb + ').',
      tema: 'T3 · Circunferência'
    };
  }
  // tema 4 · norma de vetor (usa ternos)
  var t4 = TERNOS[rnd_m81(0, TERNOS.length - 1)];
  var v1 = t4[0] * (Math.random() < 0.5 ? 1 : -1), v2 = t4[1] * (Math.random() < 0.5 ? 1 : -1);
  return {
    enun: 'Calcula a norma do vetor <strong>v(' + v1 + ', ' + v2 + ')</strong>.',
    tipo: 'fill', resposta: String(t4[2]),
    expl: '‖v‖ = √(' + _parenSeNeg(v1) + '² + ' + _parenSeNeg(v2) + '²) = √(' + (v1 * v1) + ' + ' + (v2 * v2) + ') = √' + (t4[2] * t4[2]) + ' = ' + t4[2] + '.',
    tema: 'T4 · Vetores'
  };
}

// ═══ CAP 4 · Funções Reais ═══
// Temas: 1 Domínio · 2 Vértice de quadrática · 3 Módulo / imagem
function buildEx_m10c4(tema, tipo, dif) {
  tema = String(tema);
  if (tema === '1') {
    var kind = rnd_m81(0, 1);
    if (kind === 0) {
      // f(x) = 1/(x-a) → domínio R\{a}
      var a = rndNZ_m81(-6, 6); // a≠0 para não colidir com o distrator ℝ\{0}
      var resp1 = 'ℝ \\ {' + a + '}';
      var opts1 = [resp1, 'ℝ', '[' + a + ', +∞[', 'ℝ \\ {0}'].filter(function (v, i, ar) { return ar.indexOf(v) === i; });
      return {
        enun: 'Qual é o domínio de <strong>f(x) = 1/(x ' + (a >= 0 ? '− ' + a : '+ ' + (-a)) + ')</strong>?',
        tipo: 'mc', opcoes: shuffle_m81(opts1), resposta: resp1,
        expl: 'O denominador não pode ser 0: x ' + (a >= 0 ? '− ' + a : '+ ' + (-a)) + ' ≠ 0 → x ≠ ' + a + '. Domínio: ℝ \\ {' + a + '}.',
        tema: 'T1 · Domínio'
      };
    }
    // f(x) = √(x-a) → domínio [a, +∞[
    var a2 = rndNZ_m81(-5, 6);
    var resp2 = '[' + a2 + ', +∞[';
    var opts2 = [resp2, ']−∞, ' + a2 + ']', 'ℝ', 'ℝ \\ {' + a2 + '}'].filter(function (v, i, ar) { return ar.indexOf(v) === i; });
    return {
      enun: 'Qual é o domínio de <strong>f(x) = √(x ' + (a2 >= 0 ? '− ' + a2 : '+ ' + (-a2)) + ')</strong>?',
      tipo: 'mc', opcoes: shuffle_m81(opts2), resposta: resp2,
      expl: 'O radicando deve ser ≥ 0: x ' + (a2 >= 0 ? '− ' + a2 : '+ ' + (-a2)) + ' ≥ 0 → x ≥ ' + a2 + '. Domínio: [' + a2 + ', +∞[.',
      tema: 'T1 · Domínio'
    };
  }
  if (tema === '2') {
    // vértice de x²+bx+c (b par para x_v inteiro); valores pequenos p/ caber no gráfico
    var bv = rnd_m81(-2, 2) * 2, cv = rnd_m81(-3, 3);
    var xv = -bv / 2, yv = xv * xv + bv * xv + cv;
    // termos limpos: omite bx se b=0, coeficiente 1; omite c se c=0
    var _tb = bv === 0 ? '' : (bv > 0 ? ' + ' : ' − ') + (Math.abs(bv) === 1 ? '' : Math.abs(bv)) + 'x';
    var _tc = cv === 0 ? '' : (cv > 0 ? ' + ' : ' − ') + Math.abs(cv);
    var f = 'f(x) = x²' + _tb + _tc;
    var visP = (typeof EduVisual !== 'undefined') ? EduVisual.grafico(
      function (x) { return x * x + bv * x + cv; },
      { range: 5, color: '#3f7a9a', markers: [{ x: xv, y: yv, label: 'V' }] }
    ) : '';
    var pedeX = Math.random() < 0.5;
    if (pedeX) {
      return {
        enun: 'A figura mostra o gráfico de <strong>' + f + '</strong>. Qual é a abcissa do vértice?',
        visual: visP,
        tipo: 'fill', resposta: String(xv),
        expl: 'x_v = −b/(2a) = −(' + bv + ')/2 = ' + xv + '.',
        tema: 'T2 · Quadrática'
      };
    }
    return {
      enun: 'A figura mostra o gráfico de <strong>' + f + '</strong>. Qual é a ordenada do vértice?',
      visual: visP,
      tipo: 'fill', resposta: String(yv),
      expl: 'x_v = ' + xv + '; y_v = f(' + xv + ') = ' + yv + '.',
      tema: 'T2 · Quadrática'
    };
  }
  // tema 3 · módulo / imagem
  var kind3 = rnd_m81(0, 1);
  if (kind3 === 0) {
    var n = rndNZ_m81(-12, 12);
    return {
      enun: 'Calcula <strong>|' + n + '|</strong>.',
      tipo: 'fill', resposta: String(Math.abs(n)),
      expl: '|' + n + '| = ' + Math.abs(n) + ' (distância ao zero).',
      tema: 'T3 · Módulo'
    };
  }
  // imagem de função afim
  var m = rndNZ_m81(-5, 5), b = rnd_m81(-6, 6), x0 = rnd_m81(-5, 5);
  var fx = m * x0 + b;
  return {
    enun: 'Sendo f(x) = ' + (m === 1 ? 'x' : m === -1 ? '−x' : (m + 'x').replace('-', '−')) + (b === 0 ? '' : (b > 0 ? ' + ' + b : ' − ' + Math.abs(b))) + ', calcula f(' + x0 + ').',
    tipo: 'fill', resposta: String(fx),
    expl: 'f(' + x0 + ') = ' + m + '×(' + x0 + ') ' + (b >= 0 ? '+ ' + b : '− ' + Math.abs(b)) + ' = ' + fx + '.',
    tema: 'T3 · Imagem'
  };
}

// ═══ CAP 5 · Estatística ═══
// Temas: 1 Média · 2 Mediana · 3 Amplitude / amplitude interquartis
function buildEx_m10c5(tema, tipo, dif) {
  tema = String(tema);
  function dados(n, lo, hi) { var a = []; for (var i = 0; i < n; i++) a.push(rnd_m81(lo, hi)); return a; }
  function ord(a) { return a.slice().sort(function (x, y) { return x - y; }); }
  if (tema === '1') {
    // dificuldade: números maiores no difícil
    var hiVal = (dif === 'dificil') ? 50 : (dif === 'medio') ? 30 : 12;
    var arr; var s;
    do { arr = dados(5, 1, hiVal); s = arr.reduce(function (acc, v) { return acc + v; }, 0); } while (s % 5 !== 0);
    if (typeof EduVisual !== 'undefined' && Math.random() < 0.4) {
      var cats10 = ['A', 'B', 'C', 'D', 'E'];
      var data10 = cats10.map(function (c, k) { return { label: c, value: arr[k] }; });
      return {
        enun: 'O gráfico mostra as vendas (em milhares) de 5 produtos. Qual é a <strong>média</strong>?',
        visual: EduVisual.barras(data10, '#5a5ea0'),
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
    var arr2 = dados(5, 1, 25);
    var o = ord(arr2);
    return {
      enun: 'Qual é a mediana de: <strong>' + arr2.join(', ') + '</strong>?',
      tipo: 'fill', resposta: String(o[2]),
      expl: 'Ordena: ' + o.join(', ') + '. Com 5 valores (ímpar), a mediana é o central → ' + o[2] + '.',
      tema: 'T2 · Mediana'
    };
  }
  // tema 3 · amplitude ou AIQ
  var kind = rnd_m81(0, 1);
  if (kind === 0) {
    var arr3 = dados(6, 1, 40);
    var o3 = ord(arr3);
    var amp = o3[o3.length - 1] - o3[0];
    return {
      enun: 'Qual é a amplitude de: <strong>' + arr3.join(', ') + '</strong>?',
      tipo: 'fill', resposta: String(amp),
      expl: 'Amplitude = máximo − mínimo = ' + o3[o3.length - 1] + ' − ' + o3[0] + ' = ' + amp + '.',
      tema: 'T3 · Dispersão'
    };
  }
  var q1 = rnd_m81(5, 15), q3 = q1 + rnd_m81(4, 14);
  return {
    enun: 'Num conjunto de dados, Q1 = ' + q1 + ' e Q3 = ' + q3 + '. Qual é a amplitude interquartis (AIQ)?',
    tipo: 'fill', resposta: String(q3 - q1),
    expl: 'AIQ = Q3 − Q1 = ' + q3 + ' − ' + q1 + ' = ' + (q3 - q1) + '.',
    tema: 'T3 · Dispersão'
  };
}

// ═══ CAP 6 · Trigonometria ═══
// Temas: 1 Razões (ternos) · 2 Fórmula fundamental · 3 Conversão graus↔rad / valores notáveis
function buildEx_m10c6(tema, tipo, dif) {
  tema = String(tema);
  var TERNOS = [[3, 4, 5], [6, 8, 10], [5, 12, 13], [8, 15, 17]];
  if (tema === '1') {
    var t = TERNOS[rnd_m81(0, TERNOS.length - 1)];
    var op = t[0], adj = t[1], hip = t[2];
    var razao = ['sen', 'cos', 'tg'][rnd_m81(0, 2)];
    var resp;
    if (razao === 'sen') resp = fmtFrac_m81(op, hip);
    else if (razao === 'cos') resp = fmtFrac_m81(adj, hip);
    else resp = fmtFrac_m81(op, adj);
    return {
      enun: 'Num triângulo retângulo, o cateto oposto a α mede ' + op + ', o adjacente ' + adj + ' e a hipotenusa ' + hip + '. Qual é <strong>' + razao + '(α)</strong>?',
      tipo: 'fill_frac', resposta: resp,
      expl: razao + '(α) = ' + (razao === 'sen' ? 'oposto/hipotenusa = ' + op + '/' + hip : razao === 'cos' ? 'adjacente/hipotenusa = ' + adj + '/' + hip : 'oposto/adjacente = ' + op + '/' + adj) + ' = ' + resp + '.',
      tema: 'T1 · Razões'
    };
  }
  if (tema === '2') {
    // dado sen, achar cos (ângulo agudo). Só pares com 1 casa decimal EXATA,
    // para o valor do enunciado e o da solução serem coerentes (evita "sen=0,4" mas "1−0,15").
    var pares = [[0.6, 0.8], [0.8, 0.6]];
    var pr = pares[rnd_m81(0, pares.length - 1)];
    var senV = pr[0], cosV = pr[1];
    var fmt = function (x) { return x.toFixed(1).replace('.', ','); };
    var sq = function (x) { return (x * x).toFixed(2).replace('.', ','); };
    return {
      enun: 'Sabendo que sen(α) = ' + fmt(senV) + ' e que α é agudo, calcula cos(α). (usa sen²+cos²=1)',
      tipo: 'fill_frac', resposta: fmt(cosV),
      expl: 'cos²α = 1 − sen²α = 1 − ' + sq(senV) + ' = ' + sq(cosV) + ' → cos α = ' + fmt(cosV) + '.',
      tema: 'T2 · Fórmula Fundamental'
    };
  }
  // tema 3 · conversão graus → radianos (múltiplos de 30/45/60/90)
  var graus = [30, 45, 60, 90, 120, 135, 150, 180][rnd_m81(0, 7)];
  var fracs = { 30: 'π/6', 45: 'π/4', 60: 'π/3', 90: 'π/2', 120: '2π/3', 135: '3π/4', 150: '5π/6', 180: 'π' };
  return {
    enun: 'Converte <strong>' + graus + '°</strong> para radianos.',
    tipo: 'fill_frac', resposta: fracs[graus],
    expl: graus + '° × π/180 = ' + fracs[graus] + ' rad.',
    tema: 'T3 · Radianos'
  };
}

/* ════════════════════════════════════════════════════════════════
   BANCO DE QUESTÕES (reais/ricas) - Matemática A · 10.º ano
   Questões de raciocínio e multi-passo, no estilo das fichas/exames.
   Misturadas com as geradas por _mixBancoGeradas.
   ════════════════════════════════════════════════════════════════ */
var _mat10Banco = {
  1: [ // Lógica e Conjuntos
    { t: '1', tipo: 'mc', enun: 'Considera as afirmações: I. ¬(p ∧ q) ⇔ ¬p ∨ ¬q;  II. p ⇒ q é equivalente a ¬q ⇒ ¬p (contrarrecíproco);  III. p ∨ ¬p é sempre verdadeira. Quais são verdadeiras?', opcoes: ['Todas', 'Apenas I e II', 'Apenas I e III', 'Apenas II'], resposta: 'Todas', expl: 'I é a Lei de De Morgan; II é o contrarrecíproco (válido); III é o princípio do terço excluído. Todas verdadeiras.', tema: 'T1 · Lógica' },
    { t: '2', tipo: 'mc', enun: 'A negação de "∀x ∈ ℝ, x² ≥ 0" é:', opcoes: ['∃x ∈ ℝ: x² < 0', '∀x ∈ ℝ, x² < 0', '∃x ∈ ℝ: x² ≥ 0', '∀x ∈ ℝ, x² ≤ 0'], resposta: '∃x ∈ ℝ: x² < 0', expl: 'Nega-se trocando ∀ por ∃ e negando a condição (≥ passa a <).', tema: 'T2 · Quantificadores' },
    { t: '1', tipo: 'vf', enun: 'Verdadeiro ou Falso: se p é falsa, então a implicação p ⇒ q é sempre verdadeira (qualquer que seja q).', resposta: 'V', expl: 'A implicação só é falsa quando o antecedente é V e o consequente F. Com p falsa, é sempre verdadeira.', tema: 'T1 · Lógica' },
    { t: '3', tipo: 'fill_frac', enun: 'Considera A = ]−∞, 3] e B = [0, +∞[. Indica A ∩ B (em intervalo).', resposta: '[0,3]', expl: 'A interseção são os reais ≤ 3 E ≥ 0 → [0, 3].', tema: 'T3 · Conjuntos' },
    { t: '1', tipo: 'mc', enun: 'Qual das condições é necessária mas NÃO suficiente para "um número é múltiplo de 6"?', opcoes: ['Ser múltiplo de 2', 'Ser múltiplo de 6', 'Ser múltiplo de 12', 'Ser par e múltiplo de 3'], resposta: 'Ser múltiplo de 2', expl: 'Todo o múltiplo de 6 é par (necessária), mas ser par não garante ser múltiplo de 6 (não suficiente).', tema: 'T1 · Lógica' }
  ],
  2: [ // Álgebra
    { t: '1', tipo: 'fill_frac', enun: 'Simplifica e racionaliza: 6/√3.', resposta: '2√3', expl: '6/√3 = 6√3/3 = 2√3.', tema: 'T1 · Radicais' },
    { t: '3', tipo: 'mc', enun: 'A equação x² + 2x + 5 = 0:', opcoes: ['não tem soluções reais', 'tem uma solução', 'tem duas soluções reais', 'tem solução x = 5'], resposta: 'não tem soluções reais', expl: 'Δ = 4 − 20 = −16 < 0 → sem soluções reais.', tema: 'T3 · Equações' },
    { t: '2', tipo: 'fill', enun: 'Sabendo que (x − 2) é fator de P(x) = x³ − 3x² + 4, qual é o resto da divisão de P(x) por (x − 2)?', resposta: '0', expl: 'Se (x−2) é fator, P(2) = 0, logo o resto é 0 (teorema do resto).', tema: 'T2 · Polinómios' },
    { t: '3', tipo: 'fill', enun: 'A soma das soluções da equação x² − 7x + 12 = 0 é:', resposta: '7', expl: 'As soluções são 3 e 4 (3×4=12, 3+4=7). Soma = 7. (Ou: soma = −b/a = 7.)', tema: 'T3 · Equações' },
    { t: '1', tipo: 'mc', enun: 'A expressão ³√(x⁶) (x ≥ 0) é igual a:', opcoes: ['x²', 'x³', 'x⁹', 'x⁰·⁵'], resposta: 'x²', expl: '³√(x⁶) = x^(6/3) = x².', tema: 'T1 · Radicais' },
    { t: '3', tipo: 'fill', enun: 'A soma das soluções de x² − 8x + 12 = 0 é S e o produto é P. Calcula S + P.', resposta: '20', expl: 'Passo 1: por Cardano-Viète, S = −b/a = 8 e P = c/a = 12. Passo 2: S + P = 8 + 12 = 20. (Soluções: 2 e 6.)', tema: 'T3 · Equações' },
    { t: '1', tipo: 'fill_frac', enun: 'Simplifica a expressão (√8 + √2) / √2.', resposta: '3', expl: 'Passo 1: √8 = 2√2. Passo 2: numerador = 2√2 + √2 = 3√2. Passo 3: (3√2)/√2 = 3.', tema: 'T1 · Radicais' }
  ],
  3: [ // Geometria Analítica
    { t: '1', tipo: 'fill', enun: 'Os pontos A(1, 2) e B(4, 6) e C(1, 6) formam um triângulo retângulo em C. Qual é a área do triângulo [ABC]?', resposta: '6', expl: 'Catetos: AC = 6−2 = 4 e BC = 4−1 = 3. Área = (3 × 4)/2 = 6.', tema: 'T1 · Distância' },
    { t: '2', tipo: 'mc', enun: 'M(3, 5) é o ponto médio de [AB]. Se A(1, 2), quais são as coordenadas de B?', opcoes: ['(5, 8)', '(2, 3)', '(4, 7)', '(6, 10)'], resposta: '(5, 8)', expl: 'M = ((1+xB)/2, (2+yB)/2) = (3, 5) → xB = 5, yB = 8.', tema: 'T2 · Ponto Médio' },
    { t: '3', tipo: 'mc', enun: 'A equação x² + y² − 4x + 6y − 3 = 0 representa uma circunferência. Qual é o seu centro?', opcoes: ['(2, −3)', '(−2, 3)', '(4, −6)', '(−4, 6)'], resposta: '(2, −3)', expl: 'Completando o quadrado: (x−2)² + (y+3)² = 16. Centro (2, −3), raio 4.', tema: 'T3 · Circunferência' },
    { t: '4', tipo: 'mc', enun: 'Os vetores u(2, −3) e v(−4, 6) são:', opcoes: ['colineares (v = −2u)', 'perpendiculares', 'iguais', 'simétricos'], resposta: 'colineares (v = −2u)', expl: 'v = (−4, 6) = −2×(2, −3) = −2u → colineares.', tema: 'T4 · Vetores' },
    { t: '1', tipo: 'fill', enun: 'Qual é o perímetro do triângulo de vértices A(0,0), B(3,0) e C(0,4)?', resposta: '12', expl: 'AB = 3, AC = 4, BC = √(3²+4²) = 5. Perímetro = 3 + 4 + 5 = 12.', tema: 'T1 · Distância' },
    { t: '3', tipo: 'mc', enun: 'A circunferência de centro C(1, −2) e que passa no ponto P(4, 2) tem que equação?', opcoes: ['(x−1)² + (y+2)² = 25', '(x−1)² + (y+2)² = 5', '(x+1)² + (y−2)² = 25', '(x−1)² + (y−2)² = 25'], resposta: '(x−1)² + (y+2)² = 25', expl: 'Passo 1: raio = distância C a P = √((4−1)²+(2+2)²) = √(9+16) = 5. Passo 2: equação (x−1)²+(y+2)² = 5² = 25.', tema: 'T3 · Circunferência' },
    { t: '1', tipo: 'mc', enun: 'O triângulo de vértices A(1,1), B(5,1) e C(5,4) é:', opcoes: ['retângulo em B', 'equilátero', 'retângulo em A', 'isósceles não retângulo'], resposta: 'retângulo em B', expl: 'Passo 1: AB = (4,0), BC = (0,3). Passo 2: AB·BC = 0 → lados perpendiculares em B. Logo é retângulo em B.', tema: 'T1 · Distância' }
  ],
  4: [ // Funções Reais
    { t: '1', tipo: 'mc', enun: 'Qual é o domínio de f(x) = √(x − 1) / (x − 4)?', opcoes: ['[1, 4[ ∪ ]4, +∞[', '[1, +∞[', 'ℝ \\ {4}', ']1, 4['], resposta: '[1, 4[ ∪ ]4, +∞[', expl: 'Precisa de x − 1 ≥ 0 (x ≥ 1) E x − 4 ≠ 0 (x ≠ 4). Domínio: [1, 4[ ∪ ]4, +∞[.', tema: 'T1 · Domínio' },
    { t: '2', tipo: 'mc', enun: 'A função f(x) = −2(x − 3)² + 5 tem:', opcoes: ['máximo 5 em x = 3', 'mínimo 5 em x = 3', 'máximo 3 em x = 5', 'mínimo −2'], resposta: 'máximo 5 em x = 3', expl: 'Forma canónica a(x−h)²+k com a = −2 < 0 → concavidade para baixo → vértice (3, 5) é máximo.', tema: 'T2 · Quadrática' },
    { t: '3', tipo: 'mc', enun: 'O gráfico de g(x) = f(x) − 3 obtém-se a partir do de f por:', opcoes: ['translação 3 unidades para baixo', 'translação 3 para cima', 'reflexão no eixo Ox', 'translação 3 para a direita'], resposta: 'translação 3 unidades para baixo', expl: 'y = f(x) + k com k = −3 → desce 3 unidades.', tema: 'T3 · Transformações' },
    { t: '1', tipo: 'vf', enun: 'Verdadeiro ou Falso: a função f(x) = x² é injetiva em ℝ.', resposta: 'F', expl: 'Não é injetiva: f(−2) = f(2) = 4 (objetos diferentes, mesma imagem).', tema: 'T1 · Funções' },
    { t: '2', tipo: 'fill', enun: 'Os zeros de f(x) = x² − x − 6 são dois números. Qual é o produto desses zeros?', resposta: '-6', expl: 'Zeros: 3 e −2 (3×(−2) = −6). Ou: produto = c/a = −6.', tema: 'T2 · Quadrática' },
    { t: '2', tipo: 'fill', enun: 'Uma bola é lançada e a sua altura (em metros) é h(t) = −5t² + 20t, com t em segundos. Qual é a altura MÁXIMA atingida?', resposta: '20', expl: 'Passo 1: o máximo ocorre no vértice, em t = −b/(2a) = −20/(2×(−5)) = 2 s. Passo 2: h(2) = −5×4 + 20×2 = −20 + 40 = 20 m.', tema: 'T2 · Quadrática' },
    { t: '1', tipo: 'mc', enun: 'Seja f(x) = √(6 − 2x). Qual é o domínio de f?', opcoes: [']−∞, 3]', '[3, +∞[', 'ℝ \\ {3}', ']−∞, 3['], resposta: ']−∞, 3]', expl: 'Passo 1: o radicando tem de ser ≥ 0: 6 − 2x ≥ 0. Passo 2: −2x ≥ −6 → x ≤ 3 (inverte ao dividir por −2). Domínio: ]−∞, 3].', tema: 'T1 · Domínio' }
  ],
  5: [ // Estatística
    { t: '1', tipo: 'fill', enun: 'Num conjunto de 10 valores, a média é 6. Se for acrescentado o valor 17, qual passa a ser a média?', resposta: '7', expl: 'Soma inicial = 10×6 = 60. Nova soma = 77, com 11 valores → 77/11 = 7.', tema: 'T1 · Média' },
    { t: '2', tipo: 'mc', enun: 'Numa distribuição, se a todos os valores se somar 5, a média e o desvio-padrão:', opcoes: ['média aumenta 5, desvio-padrão não muda', 'ambos aumentam 5', 'média não muda, desvio aumenta 5', 'nenhum muda'], resposta: 'média aumenta 5, desvio-padrão não muda', expl: 'Somar uma constante desloca todos os valores (média +5) mas não altera a dispersão (desvio-padrão igual).', tema: 'T2 · Dispersão' },
    { t: '3', tipo: 'mc', enun: 'Se o coeficiente de correlação é r = −0,9, então:', opcoes: ['correlação forte e negativa', 'correlação fraca', 'não há correlação', 'correlação positiva'], resposta: 'correlação forte e negativa', expl: 'r próximo de −1 → forte e negativa (uma variável cresce, a outra decresce).', tema: 'T3 · Regressão' },
    { t: '1', tipo: 'fill', enun: 'Dados ordenados: 2, 4, 4, 6, 8, 10, 12, 14. Qual é a mediana?', resposta: '7', expl: '8 valores (par): mediana = média dos 2 centrais (6 e 8) = (6+8)/2 = 7.', tema: 'T1 · Mediana' },
    { t: '1', tipo: 'fill', enun: 'A média de 8 valores é 12. Retira-se o valor 19 e fica um conjunto de 7 valores. Qual é a nova média?', resposta: '11', expl: 'Passo 1: soma dos 8 = 8 × 12 = 96. Passo 2: retirando 19, soma = 96 − 19 = 77. Passo 3: nova média = 77 ÷ 7 = 11.', tema: 'T1 · Média' }
  ],
  6: [ // Trigonometria
    { t: '2', tipo: 'mc', enun: 'Se sen(α) = 12/13 e α é agudo, qual é tg(α)?', opcoes: ['12/5', '5/13', '13/12', '5/12'], resposta: '12/5', expl: 'cos α = 5/13 (terno 5,12,13). tg α = sen/cos = (12/13)/(5/13) = 12/5.', tema: 'T2 · Fórmula Fundamental' },
    { t: '3', tipo: 'fill_frac', enun: 'Quanto vale, em radianos, um ângulo de 225°?', resposta: '5π/4', expl: '225 × π/180 = 5π/4.', tema: 'T3 · Radianos' },
    { t: '1', tipo: 'fill_frac', enun: 'Num triângulo retângulo, a hipotenusa mede 10 e um cateto mede 6. Qual é o cosseno do ângulo adjacente a esse cateto?', resposta: '3/5', expl: 'cos = cateto adjacente / hipotenusa = 6/10 = 3/5.', tema: 'T1 · Razões' },
    { t: '2', tipo: 'mc', enun: 'O valor de sen²(40°) + cos²(40°) é:', opcoes: ['1', '0', '40', 'sen(80°)'], resposta: '1', expl: 'Pela fórmula fundamental, sen²α + cos²α = 1 para qualquer α.', tema: 'T2 · Fórmula Fundamental' }
  ]
};
/* atribuir: deep-link mat10 */
function _mat10DeepLinkAuto(){ try{ var p=new URLSearchParams(window.location.search); if(p.get('abrir')==='fichas'){ var cs=(p.get('caps')||'').split(',').filter(Boolean); if(_mat10gf){ _mat10gf.caps={}; cs.forEach(function(n){ _mat10gf.caps[parseInt(n,10)]=true; }); if(p.get('dif')) _mat10gf.dif=p.get('dif'); } if(p.get('tarefa'))setTimeout(function(){tarefaEntregaBar(p.get('tarefa'),'Ficha concluída');},400); setTimeout(function(){ mat10SwitchTab('fichas',null); },350); return; }
    if(p.get('abrir')==='jogos'){ var jc=parseInt(p.get('cap'),10); if(jc&&_mat10Prat) _mat10Prat.cap=jc; if(p.get('tarefa'))setTimeout(function(){tarefaEntregaBar(p.get('tarefa'),'Jogo concluído');},400); setTimeout(function(){ mat10SwitchTab('jogos',null); var jg=p.get('jogo'); if(jg&&typeof gTabSwitch==='function')setTimeout(function(){try{gTabSwitch('mat10-jogos-app',jg);}catch(e){}},250); },350); return; }
    if(p.get('abrir')!=='praticar')return; if(p.get('tarefa')){_mat10TarefaAtiva=p.get('tarefa');_mat10TarefaResp={};} var cap=parseInt(p.get('cap'),10)||1, st=parseInt(p.get('st'),10)||0, nivel=p.get('nivel')||'medio'; _mat10Prat.cap=cap; _mat10Prat.st=st; _mat10Prat.nivel=nivel; _mat10Prat.sel={caps:[cap],stsByCap:(st?(function(){var o={};o[cap]=[st];return o;})():{})}; setTimeout(function(){ mat10SwitchTab('exercicios',null); if(typeof mat10GerarExercicios==='function') mat10GerarExercicios(); },350); }catch(e){} }
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',function(){setTimeout(_mat10DeepLinkAuto,300);});else setTimeout(_mat10DeepLinkAuto,300);

function mat10AtribuirFicha(){
  var caps=[]; _mat10CapMeta.forEach(function(m){ if(_mat10gf.caps[m.n]) caps.push(m.n); });
  if(!caps.length){ var st=document.getElementById('mat10-fichas-status'); if(st) st.textContent='Escolhe pelo menos um capítulo para atribuir.'; return null; }
  var nomes=caps.map(function(n){ var mm=_mat10CapMeta[n-1]||{}; return mm.label||('Cap. '+n); });
  return { curso:'mat10', cursoNome:'Matemática 10.º', tema:caps.join('.'), temaNome:nomes.join(', '), sub:'', subNome:'', tipo:'ficha', nivel:_mat10gf.dif };
}

function mat10EntregarTarefa(){
  if(!_mat10TarefaAtiva||typeof Turmas==='undefined'||!Turmas.guardarResultado)return;
  var qids=Object.keys(_mat10TarefaResp||{});
  if(!qids.length){alert('Responde a pelo menos uma pergunta antes de entregar.');return;}
  var certas=0,detalhe=[];
  qids.forEach(function(qid,i){ var ok=!!_mat10TarefaResp[qid]; if(ok)certas++; var ex=_mat10Prat.exs[i]||{}; detalhe.push({q:(ex.enun||ex.pergunta||('Pergunta '+(i+1))),certo:ok}); });
  Turmas.guardarResultado(_mat10TarefaAtiva,certas,qids.length,detalhe).then(function(){
    if(typeof eduToast==='function')eduToast('Trabalho entregue! Acertaste '+certas+' de '+qids.length+'. \u2705','success'); else alert('Entregue! '+certas+'/'+qids.length);
    _mat10TarefaAtiva=null; _mat10TarefaResp={}; mat10GerarExercicios();
  }).catch(function(e){alert(e.message||'Não foi possível entregar.');});
}
