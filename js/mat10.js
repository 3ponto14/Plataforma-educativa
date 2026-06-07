/* ════════════════════════════════════════════════════════════════
   MAT10 HUB — Matemática A · 10.º ano (6 capítulos)
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
// Cap 1 (Números) — conteúdo real, fiel ao Prisma 8.
// Caps 2-8 — placeholders honestos até serem construídos.
// ═══ FLASHCARDS / TEORIA por capítulo (10.º ano) ═══
// ═══ FLASHCARDS / TEORIA por capítulo (10.º ano · Matemática A) ═══
var _mat10Cards = {
  1: [
    { tag: 'Definição', q: 'O que é uma proposição?', a: 'Uma afirmação à qual se pode atribuir um e um só valor lógico: Verdadeiro (V) ou Falso (F). Ex: "2 é par" é verdadeira.' },
    { tag: 'Definição', q: 'O que é a negação (¬p)?', a: 'A proposição com o valor lógico contrário de p. Se p é V, ¬p é F (e vice-versa).' },
    { tag: 'Definição', q: 'O que é a conjunção (p ∧ q)?', a: 'A proposição "p e q". É verdadeira apenas quando p e q são ambas verdadeiras.' },
    { tag: 'Definição', q: 'O que é a disjunção (p ∨ q)?', a: 'A proposição "p ou q". É falsa apenas quando p e q são ambas falsas.' },
    { tag: 'Definição', q: 'O que é a implicação (p ⇒ q)?', a: 'A proposição "se p então q". Só é falsa quando p é verdadeira e q é falsa.' },
    { tag: 'Definição', q: 'O que é a equivalência (p ⇔ q)?', a: 'A proposição "p se e só se q". É verdadeira quando p e q têm o mesmo valor lógico.' },
    { tag: 'Propriedade', q: 'Leis de De Morgan', a: '¬(p ∧ q) ⇔ ¬p ∨ ¬q  e  ¬(p ∨ q) ⇔ ¬p ∧ ¬q. A negação troca ∧ por ∨ e nega cada parcela.' },
    { tag: 'Definição', q: 'O que é uma condição?', a: 'Uma expressão com variáveis que se torna proposição quando se atribuem valores às variáveis. Ex: x > 3.' },
    { tag: 'Definição', q: 'Quantificador universal (∀)', a: '"∀x, p(x)" lê-se "qualquer que seja x, p(x)" — a condição é verdadeira para TODOS os valores.' },
    { tag: 'Definição', q: 'Quantificador existencial (∃)', a: '"∃x: p(x)" lê-se "existe x tal que p(x)" — há PELO MENOS UM valor que verifica a condição.' },
    { tag: 'Propriedade', q: 'Negação de quantificadores', a: '¬(∀x, p(x)) ⇔ ∃x: ¬p(x)  e  ¬(∃x: p(x)) ⇔ ∀x, ¬p(x).' },
    { tag: 'Definição', q: 'Condição necessária e suficiente', a: 'Em p ⇒ q: p é suficiente para q; q é necessária para p. Se p ⇔ q, é necessária E suficiente.' },
    { tag: 'Definição', q: 'Operações com conjuntos', a: 'Reunião (A ∪ B): elementos de A ou B. Interseção (A ∩ B): elementos comuns. A \\ B: em A mas não em B.' },
    { tag: 'Exemplo', q: 'Nega "todos os alunos passaram"', a: '"Existe (pelo menos) um aluno que não passou."' },
    { tag: 'Exemplo', q: 'Valor lógico de (V ∧ F) ∨ V', a: '(V ∧ F) = F; depois F ∨ V = V. Resultado: Verdadeiro.' },
    { tag: 'Exemplo', q: '[2, 5] ∩ [4, 8] = ?', a: '[4, 5] (os reais que pertencem a ambos os intervalos).' }
  ],
  2: [
    { tag: 'Definição', q: 'O que é a raiz de índice n?', a: 'ⁿ√a é o número que, elevado a n, dá a. Ex: ³√8 = 2 porque 2³ = 8.' },
    { tag: 'Regra', q: 'Radical como potência de expoente fracionário', a: 'ⁿ√(aᵐ) = a^(m/n). Ex: √(a³) = a^(3/2); ³√a = a^(1/3).' },
    { tag: 'Regra', q: 'Produto e quociente de radicais (mesmo índice)', a: 'ⁿ√a × ⁿ√b = ⁿ√(a×b)  e  ⁿ√a ÷ ⁿ√b = ⁿ√(a÷b).' },
    { tag: 'Regra', q: 'Como racionalizar um denominador?', a: 'Multiplica numerador e denominador por um fator que elimine a raiz. Ex: 1/√2 = √2/2.' },
    { tag: 'Propriedade', q: 'Propriedades das potências (expoente racional)', a: 'aᵐ × aⁿ = aᵐ⁺ⁿ; aᵐ ÷ aⁿ = aᵐ⁻ⁿ; (aᵐ)ⁿ = aᵐⁿ; a⁻ⁿ = 1/aⁿ; a^(1/n) = ⁿ√a.' },
    { tag: 'Definição', q: 'O que é um polinómio?', a: 'Uma expressão aₙxⁿ + … + a₁x + a₀. O grau é o maior expoente com coeficiente não nulo.' },
    { tag: 'Definição', q: 'O que é uma raiz (ou zero) de um polinómio?', a: 'Um valor a tal que P(a) = 0. Se a é raiz, então (x − a) é fator de P(x).' },
    { tag: 'Regra', q: 'Teorema do resto', a: 'O resto da divisão de P(x) por (x − a) é P(a). Se P(a) = 0, (x − a) divide P(x) exatamente.' },
    { tag: 'Estratégia', q: 'Regra de Ruffini', a: 'Método rápido para dividir um polinómio por (x − a): usa só os coeficientes e o valor a. Dá o quociente e o resto.' },
    { tag: 'Estratégia', q: 'Como fatorizar um polinómio?', a: 'Encontra uma raiz a (entre os divisores do termo independente), divide por (x − a) e repete com o quociente.' },
    { tag: 'Definição', q: 'Fórmula resolvente (2.º grau)', a: 'x = (−b ± √(b² − 4ac)) / (2a) para ax² + bx + c = 0.' },
    { tag: 'Regra', q: 'Discriminante e nº de soluções', a: 'Δ = b² − 4ac. Δ > 0 → duas raízes; Δ = 0 → uma; Δ < 0 → nenhuma real.' },
    { tag: 'Exemplo', q: 'Simplifica √8', a: '√8 = √(4×2) = 2√2.' },
    { tag: 'Exemplo', q: 'Resolve x² − 5x + 6 = 0', a: 'Δ = 25 − 24 = 1; x = (5 ± 1)/2 → x = 3 ou x = 2.' },
    { tag: 'Exemplo', q: 'Resto de P(x)=x²−3x+2 por (x−1)?', a: 'P(1) = 1 − 3 + 2 = 0 → resto 0 (e (x−1) é fator).' },
    { tag: 'Exemplo', q: 'Escreve ⁴√(x²) como potência', a: 'x^(2/4) = x^(1/2) = √x.' }
  ],
  3: [
    { tag: 'Fórmula', q: 'Distância entre dois pontos no plano', a: 'd(A,B) = √((x_B − x_A)² + (y_B − y_A)²). É a aplicação do Teorema de Pitágoras.' },
    { tag: 'Fórmula', q: 'Ponto médio de um segmento [AB]', a: 'M = ((x_A + x_B)/2, (y_A + y_B)/2). É a média das coordenadas.' },
    { tag: 'Fórmula', q: 'Equação reduzida da reta', a: 'y = mx + b, com declive m e ordenada na origem b. Declive: m = (y₂ − y₁)/(x₂ − x₁).' },
    { tag: 'Regra', q: 'Retas paralelas e perpendiculares', a: 'Paralelas: mesmo declive (m₁ = m₂). Perpendiculares: m₁ × m₂ = −1.' },
    { tag: 'Fórmula', q: 'Equação da circunferência', a: '(x − a)² + (y − b)² = r², com centro (a, b) e raio r.' },
    { tag: 'Definição', q: 'O que é um vetor?', a: 'Um segmento orientado, caracterizado por direção, sentido e norma. Em coordenadas: v(v₁, v₂).' },
    { tag: 'Fórmula', q: 'Norma de um vetor', a: '‖v(v₁, v₂)‖ = √(v₁² + v₂²). É o comprimento do vetor.' },
    { tag: 'Regra', q: 'Operações com vetores em coordenadas', a: 'Soma: (a₁+b₁, a₂+b₂). Produto por escalar: k·v = (k·v₁, k·v₂). Vetor AB = B − A.' },
    { tag: 'Definição', q: 'Vetores colineares', a: 'Dois vetores são colineares (paralelos) se um é múltiplo escalar do outro: u = k·v.' },
    { tag: 'Fórmula', q: 'Equação vetorial da reta', a: '(x, y) = (x₀, y₀) + k(v₁, v₂), k ∈ ℝ, onde (x₀, y₀) é um ponto e (v₁, v₂) um vetor diretor.' },
    { tag: 'Definição', q: 'Mediatriz de um segmento', a: 'O lugar geométrico dos pontos equidistantes dos extremos. Obtém-se igualando distâncias: d(P,A) = d(P,B).' },
    { tag: 'Definição', q: 'O que é a elipse?', a: 'O lugar geométrico dos pontos cuja soma das distâncias a dois pontos fixos (focos) é constante.' },
    { tag: 'Exemplo', q: 'Distância entre A(1,2) e B(4,6)?', a: '√((4−1)² + (6−2)²) = √(9+16) = √25 = 5.' },
    { tag: 'Exemplo', q: 'Ponto médio de [A(2,4), B(6,8)]?', a: '((2+6)/2, (4+8)/2) = (4, 6).' },
    { tag: 'Exemplo', q: 'Centro e raio de (x−1)² + (y+3)² = 16?', a: 'Centro (1, −3) e raio √16 = 4.' },
    { tag: 'Exemplo', q: 'Norma do vetor v(3, 4)?', a: '√(3² + 4²) = √25 = 5.' }
  ],
  4: [
    { tag: 'Definição', q: 'O que é o domínio de uma função?', a: 'O conjunto de todos os objetos (valores de x) para os quais a função está definida.' },
    { tag: 'Definição', q: 'O que é o contradomínio?', a: 'O conjunto de todas as imagens (valores de y) que a função efetivamente atinge.' },
    { tag: 'Definição', q: 'O que são os zeros de uma função?', a: 'Os valores de x para os quais f(x) = 0. Graficamente, onde o gráfico corta o eixo Ox.' },
    { tag: 'Definição', q: 'Função injetiva', a: 'Objetos diferentes têm imagens diferentes. Graficamente: qualquer reta horizontal corta o gráfico no máximo uma vez.' },
    { tag: 'Definição', q: 'Monotonia de uma função', a: 'Crescente: x aumenta → f(x) aumenta. Decrescente: x aumenta → f(x) diminui. Pode variar por intervalos.' },
    { tag: 'Definição', q: 'Função par e função ímpar', a: 'Par: f(−x) = f(x) (simétrica em Oy). Ímpar: f(−x) = −f(x) (simétrica na origem).' },
    { tag: 'Definição', q: 'Função quadrática e o vértice', a: 'f(x) = ax² + bx + c. Vértice em x = −b/(2a); a > 0 concavidade para cima, a < 0 para baixo.' },
    { tag: 'Definição', q: 'Função módulo', a: 'f(x) = |x|: vale x se x ≥ 0 e −x se x < 0. O gráfico é um "V" com vértice na origem.' },
    { tag: 'Regra', q: 'Transformação: y = f(x) + k', a: 'Translação vertical: sobe k unidades (k > 0) ou desce (k < 0).' },
    { tag: 'Regra', q: 'Transformação: y = f(x − a)', a: 'Translação horizontal: a unidades para a direita (a > 0) ou esquerda (a < 0).' },
    { tag: 'Regra', q: 'Transformação: y = −f(x) e y = f(−x)', a: 'y = −f(x): reflexão no eixo Ox. y = f(−x): reflexão no eixo Oy.' },
    { tag: 'Definição', q: 'Função definida por ramos', a: 'Tem expressões diferentes em diferentes intervalos do domínio. Avalia-se com o ramo correspondente a x.' },
    { tag: 'Exemplo', q: 'Domínio de f(x) = √(x − 2)?', a: 'Precisa de x − 2 ≥ 0 → x ≥ 2. Domínio: [2, +∞[.' },
    { tag: 'Exemplo', q: 'Domínio de f(x) = 1/(x − 3)?', a: 'O denominador não pode ser 0 → x ≠ 3. Domínio: ℝ \\ {3}.' },
    { tag: 'Exemplo', q: 'Vértice de f(x) = x² − 6x + 5?', a: 'x_v = 6/2 = 3; f(3) = 9 − 18 + 5 = −4. Vértice (3, −4).' },
    { tag: 'Exemplo', q: 'Calcula |−7| e |4|', a: '|−7| = 7 e |4| = 4.' }
  ],
  5: [
    { tag: 'Definição', q: 'O que é a média?', a: 'A soma de todos os valores a dividir pelo número de valores (x̄). Sensível a valores extremos.' },
    { tag: 'Definição', q: 'O que é a mediana?', a: 'O valor central dos dados ordenados. Divide a amostra em duas metades. Resistente a extremos.' },
    { tag: 'Definição', q: 'O que são os quartis?', a: 'Q1, Q2 (mediana) e Q3 dividem os dados em quatro partes de 25%. AIQ = Q3 − Q1.' },
    { tag: 'Definição', q: 'O que é o desvio-padrão?', a: 'Mede a dispersão: indica quanto, em média, os dados se afastam da média. Maior → mais dispersos.' },
    { tag: 'Definição', q: 'O que é a variância?', a: 'A média dos quadrados dos desvios em relação à média. O desvio-padrão é a sua raiz quadrada.' },
    { tag: 'Definição', q: 'O que é a amplitude?', a: 'A diferença entre o maior e o menor valor (máximo − mínimo).' },
    { tag: 'Definição', q: 'O que é a frequência relativa?', a: 'A frequência absoluta dividida pelo total. Costuma exprimir-se em %.' },
    { tag: 'Definição', q: 'Diagrama de extremos e quartis', a: 'A "caixa de bigodes": mostra mínimo, Q1, mediana, Q3 e máximo. Resume e compara distribuições.' },
    { tag: 'Definição', q: 'O que é a reta de regressão linear?', a: 'A reta y = ax + b que melhor se ajusta a uma nuvem de pontos (mínimos quadrados), para descrever a relação entre duas variáveis.' },
    { tag: 'Definição', q: 'O que é o coeficiente de correlação (r)?', a: 'Mede a força e o sentido da relação linear entre duas variáveis. Varia entre −1 e 1; perto de ±1 → forte correlação.' },
    { tag: 'Estratégia', q: 'Como interpretar o declive da reta de regressão?', a: 'Indica quanto y varia, em média, quando x aumenta uma unidade. Permite fazer previsões.' },
    { tag: 'Definição', q: 'Variável qualitativa vs quantitativa', a: 'Qualitativa: não numérica (cor). Quantitativa: numérica — discreta (nº filhos) ou contínua (altura).' },
    { tag: 'Exemplo', q: 'Média de 4, 6, 8, 10, 12?', a: '(4+6+8+10+12)/5 = 40/5 = 8.' },
    { tag: 'Exemplo', q: 'Mediana de 3, 7, 8, 12, 20?', a: '5 valores ordenados → o central é 8.' },
    { tag: 'Exemplo', q: 'Amplitude interquartis se Q1=10 e Q3=18?', a: 'AIQ = 18 − 10 = 8.' },
    { tag: 'Exemplo', q: 'Se r = 0,95, a correlação é…?', a: 'Forte e positiva (perto de 1): as variáveis crescem juntas de forma quase linear.' }
  ],
  6: [
    { tag: 'Fórmula', q: 'Seno de um ângulo agudo', a: 'sen(α) = cateto oposto / hipotenusa (num triângulo retângulo).' },
    { tag: 'Fórmula', q: 'Cosseno de um ângulo agudo', a: 'cos(α) = cateto adjacente / hipotenusa.' },
    { tag: 'Fórmula', q: 'Tangente de um ângulo agudo', a: 'tg(α) = cateto oposto / cateto adjacente = sen(α) / cos(α).' },
    { tag: 'Fórmula', q: 'Fórmula fundamental da trigonometria', a: 'sen²(α) + cos²(α) = 1. Permite obter uma razão a partir da outra.' },
    { tag: 'Fórmula', q: 'Relação entre tangente, seno e cosseno', a: 'tg(α) = sen(α)/cos(α). E 1 + tg²(α) = 1/cos²(α).' },
    { tag: 'Definição', q: 'Valores notáveis (30°, 45°, 60°)', a: 'sen30°=½, cos30°=√3/2, tg30°=√3/3; sen45°=cos45°=√2/2, tg45°=1; sen60°=√3/2, cos60°=½, tg60°=√3.' },
    { tag: 'Estratégia', q: 'Como determinar um lado com trigonometria?', a: 'Identifica o ângulo e os lados (oposto/adjacente/hipotenusa), escolhe a razão e resolve a equação.' },
    { tag: 'Definição', q: 'O que é o círculo trigonométrico?', a: 'Uma circunferência de raio 1 centrada na origem. As coordenadas do ponto associado ao ângulo α são (cos α, sen α).' },
    { tag: 'Definição', q: 'O que é o radiano?', a: 'Uma unidade de medida de ângulo. 180° = π radianos; 360° = 2π. Converte: rad = graus × π/180.' },
    { tag: 'Regra', q: 'Sinais das razões por quadrante', a: '1.º Q: tudo positivo. 2.º Q: só sen positivo. 3.º Q: só tg positiva. 4.º Q: só cos positivo.' },
    { tag: 'Estratégia', q: 'Como calcular cos a partir de sen (ângulo agudo)?', a: 'Usa cos²(α) = 1 − sen²(α) e tira a raiz (positiva para ângulo agudo).' },
    { tag: 'Definição', q: 'Ângulos complementares em trigonometria', a: 'sen(90° − α) = cos(α) e cos(90° − α) = sen(α).' },
    { tag: 'Exemplo', q: 'Cateto oposto 3, hipotenusa 5. sen(α)?', a: 'sen(α) = 3/5 = 0,6.' },
    { tag: 'Exemplo', q: 'Se sen(α) = 0,6, quanto é cos(α) (ângulo agudo)?', a: 'cos²α = 1 − 0,36 = 0,64 → cos α = 0,8.' },
    { tag: 'Exemplo', q: 'Converte 90° para radianos', a: '90 × π/180 = π/2 radianos.' },
    { tag: 'Exemplo', q: 'tg(45°) = ?', a: '1 (porque sen45° = cos45°).' }
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
  var h = '<div class="resumo-st-label">Subtema</div>';
  sts.forEach(function(st, i) {
    var isActive = (_mat10Sel['resumo-st'] || 0) === (i + 1);
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
  var cards = allCards;
  if (stIdx > 0 && _mat10Subtemas[cap]) {
    var stLabel = (_mat10Subtemas[cap][stIdx - 1] || '').toLowerCase();
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

  _mat10PM(cap, 'teoria'); // estudou a teoria deste capítulo

  // Acordeão partilhado: grupos colapsáveis + perguntas que abrem a resposta.
  dest.innerHTML = _teoriaAccordionHTML(cards, color, tagIcons);
}

/* ════════════════════════════════════════════════════════════════
   TAB PRATICAR — exercícios gerados com correção imediata
   Renderiza tudo no painel (sem páginas externas). Reutiliza os
   motores genéricos do chapter-engine: _capBuildQuizHTML,
   _capCheckAnswer, _capShowFeedback.
   ════════════════════════════════════════════════════════════════ */

// Gerador por capítulo (resolução lazy — os buildEx_m10cN são definidos no fim do ficheiro).
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

function _mat10PratStorageKey(cap) { return 'edupt_mat10_cap' + cap; }

function mat10BuildPraticarNav() {
  var capRow = document.getElementById('mat10-praticar-cap-row');
  if (!capRow) return;
  var activeCap = _mat10Prat.cap || 1;
  var h = '';
  _mat10CapMeta.forEach(function(m) {
    var hasGen = !!_mat10Gerador(m.n);
    var color = _mat10CapColors[m.n] || '#516860';
    var isActive = activeCap === m.n;
    var activeStyle = isActive ? 'background:' + color + ';border-color:' + color + ';color:#fff' : '';
    var disabledStyle = hasGen ? '' : 'opacity:.45;cursor:not-allowed';
    var onclick = hasGen ? 'mat10PraticarSelectCap(' + m.n + ',this)' : '';
    var title = hasGen ? '' : ' title="Em preparação"';
    h += '<button class="resumo-cap-btn' + (isActive ? ' active' : '') + '" data-cap="' + m.n + '" onclick="' + onclick + '" style="' + activeStyle + ';' + disabledStyle + '"' + title + '>'
       + '<span class="resumo-cap-icon">' + m.icon + '</span>' + m.label + (hasGen ? '' : ' ·') + '</button>';
  });
  capRow.innerHTML = h;
  mat10PraticarShowSts(activeCap);
}

function mat10PraticarShowSts(cap) {
  var stRow = document.getElementById('mat10-praticar-st-row');
  if (!stRow) return;
  var sts = _mat10Subtemas[cap] || [];
  if (!sts.length) { stRow.style.display = 'none'; return; }
  var h = '<div class="resumo-st-label">Subtema</div>';
  h += '<button class="resumo-st-btn' + (_mat10Prat.st === 0 ? ' active' : '') + '" data-st="0" onclick="mat10PraticarSelectSt(this,0)">Todos</button>';
  sts.forEach(function(st, i) {
    h += '<button class="resumo-st-btn' + (_mat10Prat.st === (i + 1) ? ' active' : '') + '" data-st="' + (i + 1) + '" onclick="mat10PraticarSelectSt(this,' + (i + 1) + ')">' + st + '</button>';
  });
  stRow.innerHTML = h;
  stRow.style.display = 'flex';
}

function mat10PraticarSelectCap(cap, btn) {
  if (!_mat10Gerador(cap)) return;
  _mat10Prat.cap = cap;
  _mat10Prat.st = 0;
  var capRow = document.getElementById('mat10-praticar-cap-row');
  if (capRow) capRow.querySelectorAll('.resumo-cap-btn').forEach(function(b) { b.classList.remove('active'); b.style.background = ''; b.style.borderColor = ''; b.style.color = ''; });
  if (btn) { var color = _mat10CapColors[cap] || '#516860'; btn.classList.add('active'); btn.style.background = color; btn.style.borderColor = color; btn.style.color = '#fff'; }
  mat10PraticarShowSts(cap);
  mat10GerarExercicios();
}

function mat10PraticarSelectSt(btn, stIdx) {
  var stRow = document.getElementById('mat10-praticar-st-row');
  if (stRow) stRow.querySelectorAll('.resumo-st-btn').forEach(function(b) { b.classList.remove('active'); });
  if (btn) btn.classList.add('active');
  _mat10Prat.st = stIdx;
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
  var cap = _mat10Prat.cap, gen = _mat10Gerador(cap);
  if (!gen) { dest.innerHTML = ''; return; }

  // Que temas usar?
  var temas;
  if (_mat10Prat.st > 0 && _mat10SubtemaTemas[cap] && _mat10SubtemaTemas[cap][_mat10Prat.st]) {
    temas = _mat10SubtemaTemas[cap][_mat10Prat.st];
  } else {
    temas = [];
    for (var t = 1; t <= (_mat10TemasCount[cap] || 1); t++) temas.push(String(t));
  }

  var QTD = 8;
  var tipos = ['mc', 'fill', 'mc', 'vf', 'fill', 'mc', 'fill', 'mc'];
  var exs = [];
  for (var i = 0; i < QTD; i++) {
    var tema = temas[i % temas.length];
    var ex = gen(tema, tipos[i % tipos.length], _mat10Prat.nivel);
    if (ex) exs.push(Object.assign({}, ex, { num: i + 1 }));
  }
  _mat10Prat.exs = exs;
  _mat10Prat.answered = {};
  _mat10Prat.score = { correct: 0, total: 0 };

  // Score bar + questões (reutiliza motor genérico do chapter-engine)
  var scoreBar = '<div class="score-bar" id="mat10-prat-scorebar">'
    + '<div><div class="score-num" id="mat10-prat-score">0</div><div class="score-label">pontos</div></div>'
    + '<div><div class="score-num" id="mat10-prat-total">/ 0</div><div class="score-label">respondidas</div></div>'
    + '<div class="progress-track"><div class="progress-fill" id="mat10-prat-prog" style="width:0%"></div></div>'
    + '<button class="btn btn-ghost ml-auto" onclick="mat10GerarExercicios()">↺ Novas questões</button>'
    + '</div>';
  var quizHTML = (typeof _capBuildQuizHTML === 'function')
    ? _capBuildQuizHTML(exs, 'm8ex', 'mat10CheckEx')
    : '<p style="color:var(--ink4)">Motor de exercícios indisponível.</p>';
  dest.innerHTML = scoreBar + quizHTML;
}

function mat10CheckEx(qid, tipo, val, btn) {
  if (_mat10Prat.answered[qid]) return;
  if (typeof _capCheckAnswer !== 'function') return;
  var r = _capCheckAnswer(qid, tipo, val);
  if (!r) return; // resposta vazia
  _mat10Prat.answered[qid] = true;
  if (r.correct) _mat10Prat.score.correct++;
  _mat10Prat.score.total++;
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

// Gera uma questão de escolha múltipla para um capítulo (usada por quiz).
function _mat10BuildMcQuestion(cap) {
  var gen = _mat10Gerador(cap);
  if (!gen) return null;
  var nTemas = _mat10TemasCount[cap] || 1;
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
var _mat10Quiz = { cap: 1, lives: 3, streak: 0, maxStreak: 0, score: 0, total: 0, answered: false, current: null };

function mat10QuizBuildNav() {
  if (!_mat10Gerador(_mat10Quiz.cap)) _mat10Quiz.cap = 1;
  _mat10BuildCapRow('mat10-quiz-cap-row', _mat10Quiz.cap, 'mat10QuizSelectCap');
  mat10QuizStart();
}

function mat10QuizSelectCap(cap, btn) {
  if (!_mat10Gerador(cap)) return;
  _mat10SetActiveCapBtn('mat10-quiz-cap-row', btn, cap);
  _mat10Quiz.cap = cap;
  mat10QuizStart();
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
  var ex = _mat10BuildMcQuestion(_mat10Quiz.cap);
  if (!ex) { app.innerHTML = '<p style="color:var(--ink4);padding:2rem;text-align:center">Sem questões disponíveis para este capítulo.</p>'; return; }
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
var _mat10Teste = { cap: 1, nivel: 'medio', qtd: 10, tempo: 600, exs: [], answered: {}, score: { correct: 0, total: 0 }, timer: null, restante: 0 };

function mat10TesteBuildNav() {
  if (!_mat10Gerador(_mat10Teste.cap)) _mat10Teste.cap = 1;
  _mat10BuildCapRow('mat10-teste-cap-row', _mat10Teste.cap, 'mat10TesteSelectCap');
  mat10TesteRenderConfig();
}

function mat10TesteSelectCap(cap, btn) {
  if (!_mat10Gerador(cap)) return;
  _mat10SetActiveCapBtn('mat10-teste-cap-row', btn, cap);
  _mat10Teste.cap = cap;
  mat10TesteRenderConfig();
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
  var gen = _mat10Gerador(_mat10Teste.cap); if (!gen) return;
  var qtdEl = document.getElementById('mat10-teste-qtd'), tempoEl = document.getElementById('mat10-teste-tempo');
  _mat10Teste.qtd = qtdEl ? parseInt(qtdEl.value) : 10;
  _mat10Teste.tempo = tempoEl ? parseInt(tempoEl.value) : 600;
  var nTemas = _mat10TemasCount[_mat10Teste.cap] || 1;
  var tipos = ['mc', 'fill', 'mc', 'vf', 'fill'];
  var exs = [];
  for (var i = 0; i < _mat10Teste.qtd; i++) {
    var ex = gen(String((i % nTemas) + 1), tipos[i % tipos.length], _mat10Teste.nivel);
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
  _mat10PM(_mat10Prat.cap || 1, 'jogo');
  if (_mat10JogosInited) return;
  if (typeof _j24AutoInit === 'function') {
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
    : 'Começaste! Pratica com regularidade — cada questão conta.';
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
     +     '<div style="font-family:\'Cormorant Garamond\',serif;font-size:1.6rem;font-weight:900;color:var(--ink);line-height:1">' + (totalT > 0 ? globalPct + '<span style="font-size:1rem">%</span>' : '—') + '</div>'
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
  [{ v: totalT, l: 'Questões respondidas' }, { v: totalC, l: 'Respostas certas' }, { v: totalT > 0 ? globalPct + '%' : '—', l: 'Taxa global' }, { v: pmXp + ' XP', l: 'XP total' }, { v: pmStreak + (pmStreak === 1 ? ' dia' : ' dias'), l: 'Streak atual' }].forEach(function(s) {
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
      + '<td style="padding:6px 10px;border-bottom:1px solid #eee;text-align:center">' + (c.total > 0 ? c.correct + ' / ' + c.total : '—') + '</td>'
      + '<td style="padding:6px 10px;border-bottom:1px solid #eee;text-align:center">' + (c.total > 0 ? c.pct + '%' : '—') + '</td></tr>';
  }).join('');
  var html = '<div style="font-family:Arial,sans-serif;max-width:680px;margin:0 auto;padding:24px">'
    + '<h1 style="font-size:20px;margin:0 0 4px">Relatório de Progresso · Matemática 10.º Ano</h1>'
    + '<div style="color:#666;font-size:13px;margin-bottom:16px">3ponto14 · ' + new Date().toLocaleString('pt-PT', { day: '2-digit', month: '2-digit', year: 'numeric' }) + '</div>'
    + '<div style="background:#eef3f9;border:1px solid #5a7fa8;border-radius:8px;padding:12px 16px;margin-bottom:16px">'
    + '<strong>Taxa global:</strong> ' + (totalT > 0 ? globalPct + '%' : '—') + ' &nbsp;·&nbsp; ' + totalC + ' certas em ' + totalT + ' questões.</div>'
    + '<table style="width:100%;border-collapse:collapse;font-size:14px"><thead><tr style="background:#36527a;color:#fff">'
    + '<th style="padding:8px 10px;text-align:left">Capítulo</th><th style="padding:8px 10px">Certas</th><th style="padding:8px 10px">%</th></tr></thead>'
    + '<tbody>' + rows + '</tbody></table></div>';
  if (typeof htmlToPdfDownload === 'function') htmlToPdfDownload(html, 'progresso-mat10.pdf');
  else if (typeof eduToast === 'function') eduToast('Geração de PDF indisponível.', 'warn');
}

/* ════════════════════════════════════════════════════════════════
   TAB FICHAS — gerador rico (multi-capítulo), igual ao 7.º ano.
   Tipos: resumo teórico, exercícios, teste, minitestes, soluções.
   Seleção de vários capítulos; nível; nº de exercícios; PDF ou HTML.
   ════════════════════════════════════════════════════════════════ */
var _mat10gf = {
  caps: {},            // { cap: true } selecionados
  tipos: { resumo: true, exercicios: true, teste: true, minitestes: false, solucoes: true },
  dif: 'facil',
  qty: 10
};

// Constrói a lista de capítulos selecionáveis (só os com gerador).
function mat10FichasBuildNav() {
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
  });
  el.innerHTML = h;
}

function mat10gfToggleCap(cap, btn) {
  _mat10gf.caps[cap] = !_mat10gf.caps[cap];
  var color = _mat10CapColors[cap] || '#516860';
  if (_mat10gf.caps[cap]) { btn.classList.add('active'); btn.style.background = color; btn.style.borderColor = color; btn.style.color = '#fff'; }
  else { btn.classList.remove('active'); btn.style.background = ''; btn.style.borderColor = ''; btn.style.color = ''; }
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
  exs.forEach(function(ex, i) {
    h += '<div style="margin-bottom:13px;page-break-inside:avoid">'
      + '<div style="font-weight:600;font-size:12.5px;margin-bottom:3px">' + (startNum + i) + '. ' + ex.enun + '</div>';
    if (ex.tipo === 'mc' && ex.opcoes) {
      h += '<div style="font-size:12px;color:#333;padding-left:14px">';
      ex.opcoes.forEach(function(o, k) { h += '(' + 'ABCD'[k] + ') ' + o + '&nbsp;&nbsp;&nbsp; '; });
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

function _mat10gfGenExs(cap, n) {
  var gen = _mat10Gerador(cap); if (!gen) return [];
  var nTemas = _mat10TemasCount[cap] || 1;
  var tipos = ['mc', 'fill', 'vf', 'fill', 'mc', 'mc'];
  var exs = [];
  for (var i = 0; i < n; i++) {
    var ex = gen(String((i % nTemas) + 1), tipos[i % tipos.length], _mat10gf.dif);
    if (ex) exs.push(ex);
  }
  return exs;
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
          corpo += '<div style="font-size:11.5px;margin-bottom:4px"><strong>' + c.q + '</strong> ' + c.a + '</div>';
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
    var lst = solucoes.map(function(s) {
      return '<div style="font-size:11px;margin-bottom:2px"><strong>' + s.num + '.</strong> ' + s.ex.resposta + (s.ex.expl ? ' — <span style="color:#666">' + s.ex.expl + '</span>' : '') + '</div>';
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

  var fname = 'ficha-mat10.' + (formato === 'html' ? 'html' : 'pdf');
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

/* ═══ GERADOR DE EXERCÍCIOS — Cap 1 Números (fiel ao Prisma 8) ═══ */
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
   GERADORES DE EXERCÍCIOS — Matemática A · 10.º ano
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
  // A=[a,b], B=[c,d] — visual na reta numérica (A acima, B abaixo no mesmo eixo)
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
    var b = rnd_m81(-5, 5), c = rnd_m81(-6, 6), a = rnd_m81(-3, 4);
    var Pa = a * a + b * a + c;
    var pol = 'x² ' + (b >= 0 ? '+ ' + b : '− ' + Math.abs(b)) + 'x ' + (c >= 0 ? '+ ' + c : '− ' + Math.abs(c));
    return {
      enun: 'Pelo teorema do resto, qual é o resto da divisão de <strong>P(x) = ' + pol + '</strong> por (x − ' + a + ')?',
      tipo: 'fill', resposta: String(Pa),
      expl: 'O resto é P(' + a + ') = ' + a + '² ' + (b >= 0 ? '+ ' + b : '− ' + Math.abs(b)) + '×' + a + ' ' + (c >= 0 ? '+ ' + c : '− ' + Math.abs(c)) + ' = ' + Pa + '.',
      tema: 'T2 · Polinómios'
    };
  }
  // tema 3 · equação 2.º grau (soluções inteiras) ou discriminante
  var kind = rnd_m81(0, 1);
  if (kind === 0) {
    var r1 = rnd_m81(-5, 6), r2 = rnd_m81(-5, 6);
    var bC = -(r1 + r2), cC = r1 * r2;
    var eqn = 'x² ' + (bC >= 0 ? '+ ' + bC : '− ' + Math.abs(bC)) + 'x ' + (cC >= 0 ? '+ ' + cC : '− ' + Math.abs(cC)) + ' = 0';
    return {
      enun: 'Resolve <strong>' + eqn + '</strong>. Indica a MENOR solução.',
      tipo: 'fill', resposta: String(Math.min(r1, r2)),
      expl: 'As soluções são ' + Math.min(r1, r2) + ' e ' + Math.max(r1, r2) + ' (a menor: ' + Math.min(r1, r2) + ').',
      tema: 'T3 · Equações'
    };
  }
  var b4 = rnd_m81(-6, 6), c4 = rnd_m81(-6, 9);
  var delta = b4 * b4 - 4 * c4;
  var eqn4 = 'x² ' + (b4 >= 0 ? '+ ' + b4 : '− ' + Math.abs(b4)) + 'x ' + (c4 >= 0 ? '+ ' + c4 : '− ' + Math.abs(c4)) + ' = 0';
  return {
    enun: 'Calcula o discriminante Δ de <strong>' + eqn4 + '</strong>.',
    tipo: 'fill', resposta: String(delta),
    expl: 'Δ = b² − 4ac = ' + (b4 * b4) + ' − ' + (4 * c4) + ' = ' + delta + '.',
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
      expl: 'd = √((' + bx + '−' + ax + ')² + (' + by + '−' + ay + ')²) = √(' + (t[0] * t[0]) + '+' + (t[1] * t[1]) + ') = √' + (t[2] * t[2]) + ' = ' + t[2] + '.',
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
    expl: '‖v‖ = √(' + v1 + '² + ' + v2 + '²) = √(' + (v1 * v1) + '+' + (v2 * v2) + ') = √' + (t4[2] * t4[2]) + ' = ' + t4[2] + '.',
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
    var f = 'f(x) = x² ' + (bv >= 0 ? '+ ' + bv : '− ' + Math.abs(bv)) + 'x ' + (cv >= 0 ? '+ ' + cv : '− ' + Math.abs(cv));
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
    var arr; var s;
    do { arr = dados(5, 1, 20); s = arr.reduce(function (acc, v) { return acc + v; }, 0); } while (s % 5 !== 0);
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
    // dado sen (decimal de terno), achar cos (ângulo agudo)
    var pares = [[3, 5, 4], [4, 5, 3], [6, 10, 8], [8, 10, 6], [5, 13, 12], [12, 13, 5]];
    var pr = pares[rnd_m81(0, pares.length - 1)];
    var senV = (pr[0] / pr[1]).toFixed(1);
    var cosV = (pr[2] / pr[1]);
    var cosStr = (cosV === Math.round(cosV * 10) / 10) ? cosV.toFixed(1).replace('.', ',') : cosV.toFixed(2).replace('.', ',');
    return {
      enun: 'Sabendo que sen(α) = ' + (pr[0] / pr[1]).toFixed(1).replace('.', ',') + ' e que α é agudo, calcula cos(α). (usa sen²+cos²=1)',
      tipo: 'fill_frac', resposta: cosStr,
      expl: 'cos²α = 1 − sen²α = 1 − ' + (Math.pow(pr[0] / pr[1], 2)).toFixed(2) + ' = ' + (Math.pow(pr[2] / pr[1], 2)).toFixed(2) + ' → cos α = ' + cosStr + '.',
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
