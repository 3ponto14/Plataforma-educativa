/* ════════════════════════════════════════════════════════════════
   MAT11 HUB - Matemática A · 11.º ano (6 capítulos)
   Modelo de HUB ÚNICO (ver MODELO BASE no CLAUDE.md).
   Tabs: Teoria · Praticar · Fichas · Progresso.
   ════════════════════════════════════════════════════════════════ */

// ═══ Capítulos do 12.º ano · Matemática A (7 domínios oficiais do Programa) ═══
var _mat12CapMeta = [
  {n:1, icon:'<i class="ph ph-list-checks"></i>',       label:'Cálculo Combinatório'},
  {n:2, icon:'<i class="ph ph-chart-pie-slice"></i>',   label:'Probabilidades'},
  {n:3, icon:'<i class="ph ph-function"></i>',          label:'Funções Reais (FRVR)'},
  {n:4, icon:'<i class="ph ph-wave-sine"></i>',         label:'Trigonometria'},
  {n:5, icon:'<i class="ph ph-trend-up"></i>',          label:'Exponenciais e Logaritmos'},
  {n:6, icon:'<i class="ph ph-integral"></i>',          label:'Primitivas e Integral'},
  {n:7, icon:'<i class="ph ph-compass-tool"></i>',      label:'Números Complexos'}
];

// Cores por capítulo (alinhadas com --m12cN-* do CSS)
var _mat12CapColors = {
  1:'#5a6e7e', 2:'#7a5a8a', 3:'#4a7a8a', 4:'#8a7058', 5:'#4a8a74', 6:'#8a5a5a', 7:'#5a7a6e'
};

// Subtemas por capítulo (fiéis ao Programa e Metas do 12.º Mat A)
var _mat12Subtemas = {
  1: ['Arranjos e permutações', 'Combinações', 'Binómio de Newton'],
  2: ['Probabilidade (Laplace e axiomas)', 'Probabilidade condicionada', 'Acontecimentos independentes'],
  3: ['Limites de funções', 'Continuidade e Bolzano', 'Assíntotas', 'Derivadas e concavidade'],
  4: ['Fórmulas trigonométricas', 'Derivadas de seno e cosseno', 'Limites notáveis'],
  5: ['Função exponencial', 'Função logarítmica', 'Equações exp. e log.'],
  6: ['Primitivas', 'Integral definido', 'Áreas'],
  7: ['Forma algébrica', 'Forma trigonométrica', 'Operações e raízes']
};

// ═══ FLASHCARDS / TEORIA por capítulo ═══
// Cap 1 (Números) - conteúdo real, fiel ao Prisma 8.
// Caps 2-8 - placeholders honestos até serem construídos.
// ═══ FLASHCARDS / TEORIA por capítulo (11.º ano) ═══
// ═══ FLASHCARDS / TEORIA por capítulo (11.º ano · Matemática A) ═══
// ═══ FLASHCARDS / TEORIA por capítulo (11.º ano · Matemática A) ═══
var _mat12Cards = {
  1: [
    { st: 1, tag: 'Definição', q: 'O que é um radiano?', a: 'A medida do ângulo ao centro que corresponde a um arco de comprimento igual ao raio. 180° = π rad; 360° = 2π rad.' },
    { st: 1, tag: 'Regra', q: 'Conversão graus ↔ radianos', a: 'rad = graus × π/180  e  graus = rad × 180/π. Ex: 90° = π/2; π/3 = 60°.' },
    { st: 2, tag: 'Fórmula', q: 'Fórmula fundamental da trigonometria', a: 'sen²(α) + cos²(α) = 1. Permite obter uma razão a partir da outra.' },
    { st: 2, tag: 'Fórmula', q: 'Relações com a tangente', a: 'tg(α) = sen(α)/cos(α)  e  1 + tg²(α) = 1/cos²(α) = sec²(α).' },
    { st: 1, tag: 'Definição', q: 'Círculo trigonométrico', a: 'Circunferência de raio 1 centrada na origem. O ponto associado a α tem coordenadas (cos α, sen α).' },
    { st: 1, tag: 'Regra', q: 'Sinais por quadrante', a: '1.º Q: tudo +. 2.º Q: só sen +. 3.º Q: só tg +. 4.º Q: só cos +. (Regra "ASTC".)' },
    { st: 1, tag: 'Fórmula', q: 'Redução ao 1.º quadrante (alguns casos)', a: 'sen(π − α) = sen α; cos(π − α) = −cos α; sen(−α) = −sen α; cos(−α) = cos α.' },
    { st: 2, tag: 'Definição', q: 'Período de uma função trigonométrica', a: 'sen e cos têm período 2π; tg tem período π. f(x + P) = f(x) para todo o x.' },
    { st: 2, tag: 'Definição', q: 'Funções seno, cosseno e tangente', a: 'y = sen x e y = cos x têm contradomínio [−1, 1]. y = tg x tem domínio ℝ \\ {π/2 + kπ}.' },
    { st: 3, tag: 'Estratégia', q: 'Como resolver sen x = a?', a: 'Se −1 ≤ a ≤ 1: x = arcsen(a) + 2kπ ∨ x = π − arcsen(a) + 2kπ, k ∈ ℤ.' },
    { st: 3, tag: 'Estratégia', q: 'Como resolver cos x = a?', a: 'Se −1 ≤ a ≤ 1: x = ± arccos(a) + 2kπ, k ∈ ℤ.' },
    { st: 2, tag: 'Definição', q: 'Valores notáveis', a: 'sen30°=½, cos30°=√3/2; sen45°=cos45°=√2/2; sen60°=√3/2, cos60°=½; tg45°=1.' },
    { st: 1, tag: 'Exemplo', q: 'Converte 120° para radianos', a: '120 × π/180 = 2π/3 rad.' },
    { st: 2, tag: 'Exemplo', q: 'Se cos α = 0,6 e α agudo, quanto é sen α?', a: 'sen²α = 1 − 0,36 = 0,64 → sen α = 0,8.' },
    { st: 3, tag: 'Exemplo', q: 'Resolve sen x = 1', a: 'x = π/2 + 2kπ, k ∈ ℤ.' },
    { st: 2, tag: 'Exemplo', q: 'Período de y = sen(2x)?', a: '2π ÷ 2 = π.' }
  ],
  2: [
    { st: 1, tag: 'Fórmula', q: 'Distância entre pontos no espaço', a: 'd(A,B) = √((x_B−x_A)² + (y_B−y_A)² + (z_B−z_A)²).' },
    { st: 1, tag: 'Fórmula', q: 'Ponto médio no espaço', a: 'M = ((x_A+x_B)/2, (y_A+y_B)/2, (z_A+z_B)/2).' },
    { st: 1, tag: 'Fórmula', q: 'Equação da superfície esférica', a: '(x−a)² + (y−b)² + (z−c)² = r², com centro (a,b,c) e raio r.' },
    { st: 2, tag: 'Definição', q: 'Vetor no espaço', a: 'v(v₁, v₂, v₃). Norma: ‖v‖ = √(v₁² + v₂² + v₃²). Vetor AB = B − A.' },
    { st: 2, tag: 'Fórmula', q: 'Produto escalar de dois vetores', a: 'u · v = u₁v₁ + u₂v₂ + u₃v₃. Também u · v = ‖u‖‖v‖cos(θ).' },
    { st: 2, tag: 'Regra', q: 'Vetores perpendiculares', a: 'u ⊥ v  ⟺  u · v = 0 (produto escalar nulo).' },
    { st: 2, tag: 'Fórmula', q: 'Ângulo entre dois vetores', a: 'cos(θ) = (u · v) / (‖u‖ · ‖v‖).' },
    { st: 3, tag: 'Fórmula', q: 'Equação do plano (forma cartesiana)', a: 'ax + by + cz + d = 0, onde (a, b, c) é um vetor normal ao plano.' },
    { st: 3, tag: 'Definição', q: 'Vetor normal a um plano', a: 'Um vetor perpendicular ao plano. Em ax + by + cz + d = 0, o vetor normal é (a, b, c).' },
    { st: 3, tag: 'Fórmula', q: 'Equação vetorial da reta no espaço', a: '(x,y,z) = (x₀,y₀,z₀) + k(v₁,v₂,v₃), k ∈ ℝ.' },
    { st: 2, tag: 'Regra', q: 'Planos paralelos e perpendiculares', a: 'Paralelos: vetores normais colineares. Perpendiculares: vetores normais perpendiculares (produto escalar 0).' },
    { st: 2, tag: 'Definição', q: 'Vetores colineares (espaço)', a: 'u e v são colineares se u = k·v para algum escalar k.' },
    { st: 2, tag: 'Exemplo', q: 'Norma de v(2, 3, 6)?', a: '√(4 + 9 + 36) = √49 = 7.' },
    { st: 1, tag: 'Exemplo', q: 'Produto escalar de (1,2,3) e (4,−1,2)?', a: '1×4 + 2×(−1) + 3×2 = 4 − 2 + 6 = 8.' },
    { st: 3, tag: 'Exemplo', q: 'Centro e raio de (x−1)²+(y+2)²+z²=9?', a: 'Centro (1, −2, 0) e raio 3.' },
    { st: 2, tag: 'Exemplo', q: 'Vetor normal ao plano 2x − y + 3z − 5 = 0?', a: '(2, −1, 3).' }
  ],
  3: [
    { st: 1, tag: 'Definição', q: 'O que é uma sucessão?', a: 'Uma função de domínio ℕ: a cada ordem n associa um termo uₙ. Ex: uₙ = 2n + 1.' },
    { st: 1, tag: 'Definição', q: 'Termo geral de uma sucessão', a: 'A expressão uₙ que dá qualquer termo em função da ordem n. Ex: uₙ = n² calcula o n-ésimo termo.' },
    { st: 1, tag: 'Definição', q: 'Sucessão monótona', a: 'Crescente se uₙ₊₁ > uₙ para todo o n; decrescente se uₙ₊₁ < uₙ. Estuda-se o sinal de uₙ₊₁ − uₙ.' },
    { st: 2, tag: 'Definição', q: 'Progressão aritmética (PA)', a: 'A diferença entre termos consecutivos é constante (razão r). uₙ = u₁ + (n−1)r.' },
    { st: 2, tag: 'Fórmula', q: 'Soma de n termos de uma PA', a: 'Sₙ = (u₁ + uₙ) × n / 2.' },
    { st: 3, tag: 'Definição', q: 'Progressão geométrica (PG)', a: 'O quociente entre termos consecutivos é constante (razão r). uₙ = u₁ × r^(n−1).' },
    { st: 3, tag: 'Fórmula', q: 'Soma de n termos de uma PG', a: 'Sₙ = u₁ × (1 − rⁿ)/(1 − r), com r ≠ 1.' },
    { st: 1, tag: 'Definição', q: 'Sucessão limitada', a: 'Existe um intervalo [m, M] que contém todos os termos. Tem majorante e minorante.' },
    { st: 1, tag: 'Definição', q: 'Sucessão definida por recorrência', a: 'Cada termo define-se a partir do(s) anterior(es). Ex: u₁ = 2, uₙ₊₁ = uₙ + 3.' },
    { st: 2, tag: 'Estratégia', q: 'Como verificar se uma sucessão é PA?', a: 'Calcula uₙ₊₁ − uₙ. Se for constante, é PA e essa constante é a razão.' },
    { st: 3, tag: 'Estratégia', q: 'Como verificar se uma sucessão é PG?', a: 'Calcula uₙ₊₁ ÷ uₙ. Se for constante (≠0), é PG e esse quociente é a razão.' },
    { st: 1, tag: 'Definição', q: 'Sucessão convergente', a: 'Aproxima-se de um valor finito (limite) quando n → +∞. Ex: uₙ = 1/n → 0.' },
    { st: 2, tag: 'Exemplo', q: 'PA com u₁=3 e r=4: o 10.º termo?', a: 'u₁₀ = 3 + 9×4 = 39.' },
    { st: 3, tag: 'Exemplo', q: 'PG com u₁=2 e r=3: o 4.º termo?', a: 'u₄ = 2 × 3³ = 2 × 27 = 54.' },
    { st: 1, tag: 'Exemplo', q: 'A sucessão uₙ = 2n − 1 é crescente?', a: 'uₙ₊₁ − uₙ = 2 > 0 → é crescente.' },
    { st: 2, tag: 'Exemplo', q: 'Soma dos 5 primeiros termos da PA 2,5,8,11,14?', a: 'S₅ = (2 + 14)×5/2 = 40.' }
  ],
  4: [
    { st: 1, tag: 'Definição', q: 'O que é o limite de uma sucessão?', a: 'O valor de que os termos se aproximam quando n → +∞. Escreve-se lim uₙ.' },
    { st: 1, tag: 'Regra', q: 'Limites notáveis de sucessões', a: 'lim 1/n = 0; lim (1 + 1/n)ⁿ = e ≈ 2,718; lim rⁿ = 0 se |r| < 1.' },
    { st: 1, tag: 'Definição', q: 'Sucessão divergente', a: 'Não tende para um valor finito: tende para +∞, −∞ ou oscila sem limite.' },
    { st: 2, tag: 'Definição', q: 'Limite de uma função num ponto', a: 'lim(x→a) f(x) = L significa que f(x) se aproxima de L quando x se aproxima de a.' },
    { st: 2, tag: 'Regra', q: 'Limites laterais', a: 'O limite existe num ponto se os limites à esquerda e à direita forem iguais: lim(x→a⁻) = lim(x→a⁺).' },
    { st: 2, tag: 'Estratégia', q: 'Indeterminação 0/0', a: 'Fatoriza numerador e denominador e simplifica o fator comum, depois substitui. Ex: (x²−1)/(x−1) → x+1 → 2 (x→1).' },
    { st: 2, tag: 'Estratégia', q: 'Indeterminação ∞/∞ (funções racionais)', a: 'Compara os graus: divide tudo pela maior potência ou usa o quociente dos termos de maior grau.' },
    { st: 2, tag: 'Definição', q: 'O que é uma assíntota vertical?', a: 'A reta x = a tal que lim(x→a) f(x) = ±∞. Surge onde a função "explode" (ex: denominador zero).' },
    { st: 2, tag: 'Definição', q: 'O que é uma assíntota horizontal?', a: 'A reta y = b tal que lim(x→±∞) f(x) = b. Descreve o comportamento da função no infinito.' },
    { st: 3, tag: 'Definição', q: 'Função contínua num ponto', a: 'f é contínua em a se existe f(a), existe lim(x→a) f(x) e são iguais: lim(x→a) f(x) = f(a).' },
    { st: 3, tag: 'Definição', q: 'Continuidade num intervalo', a: 'f é contínua em [a,b] se é contínua em todos os pontos. O seu gráfico não tem "saltos".' },
    { st: 3, tag: 'Teorema', q: 'Teorema de Bolzano (valor intermédio)', a: 'Se f é contínua em [a,b] e f(a)·f(b) < 0, então existe c em ]a,b[ tal que f(c) = 0 (há um zero).' },
    { st: 2, tag: 'Exemplo', q: 'lim(x→2) (x² − 4)/(x − 2)?', a: '(x²−4)/(x−2) = (x−2)(x+2)/(x−2) = x+2 → 4.' },
    { st: 2, tag: 'Exemplo', q: 'lim(x→+∞) (3x² + 1)/(x² − 5)?', a: 'Mesmo grau: quociente dos coeficientes principais = 3/1 = 3.' },
    { st: 1, tag: 'Exemplo', q: 'lim 1/n quando n→+∞?', a: '0.' },
    { st: 2, tag: 'Exemplo', q: 'Assíntota horizontal de f(x)=(2x)/(x+1)?', a: 'lim(x→±∞) = 2 → assíntota y = 2.' }
  ],
  5: [
    { st: 1, tag: 'Definição', q: 'O que é a taxa de variação média?', a: 'tvm = (f(b) − f(a))/(b − a). É o declive da reta secante entre os pontos (a, f(a)) e (b, f(b)).' },
    { st: 1, tag: 'Definição', q: 'O que é a derivada num ponto?', a: 'f\'(a) = lim(h→0) (f(a+h) − f(a))/h. É o declive da reta tangente ao gráfico em (a, f(a)).' },
    { st: 2, tag: 'Regra', q: 'Derivada de uma potência', a: '(xⁿ)\' = n·x^(n−1). Ex: (x³)\' = 3x²; (x)\' = 1; (constante)\' = 0.' },
    { st: 2, tag: 'Regra', q: 'Derivada da soma e do produto por constante', a: '(f + g)\' = f\' + g\'  e  (k·f)\' = k·f\'.' },
    { st: 2, tag: 'Regra', q: 'Regra do produto', a: '(f·g)\' = f\'·g + f·g\'.' },
    { st: 2, tag: 'Regra', q: 'Regra do quociente', a: '(f/g)\' = (f\'·g − f·g\') / g².' },
    { st: 2, tag: 'Regra', q: 'Derivada da função composta (regra da cadeia)', a: '(f(g(x)))\' = f\'(g(x)) · g\'(x).' },
    { st: 3, tag: 'Estratégia', q: 'Como estudar a monotonia com a derivada?', a: 'f\'(x) > 0 → f crescente; f\'(x) < 0 → f decrescente. Os zeros de f\' são candidatos a extremos.' },
    { st: 3, tag: 'Definição', q: 'O que é um extremo relativo?', a: 'Um máximo ou mínimo local. Ocorre onde f\' muda de sinal (de + para − → máximo; de − para + → mínimo).' },
    { st: 3, tag: 'Estratégia', q: 'Equação da reta tangente num ponto a', a: 'y = f(a) + f\'(a)·(x − a). O declive é f\'(a).' },
    { st: 2, tag: 'Definição', q: 'Pontos críticos', a: 'Os valores de x onde f\'(x) = 0 ou f\' não existe. São candidatos a máximos/mínimos.' },
    { st: 1, tag: 'Definição', q: 'Derivada de funções trigonométricas', a: '(sen x)\' = cos x; (cos x)\' = −sen x.' },
    { st: 2, tag: 'Exemplo', q: 'Deriva f(x) = 3x² − 5x + 2', a: 'f\'(x) = 6x − 5.' },
    { st: 1, tag: 'Exemplo', q: 'tvm de f(x)=x² em [1, 3]?', a: '(9 − 1)/(3 − 1) = 8/2 = 4.' },
    { st: 2, tag: 'Exemplo', q: 'Deriva f(x) = x⁴', a: 'f\'(x) = 4x³.' },
    { st: 1, tag: 'Exemplo', q: 'Declive da tangente a f(x)=x² em x=2?', a: 'f\'(x) = 2x → f\'(2) = 4.' }
  ],
  6: [
    { st: 1, tag: 'Definição', q: 'O que é o fatorial n!?', a: 'O produto de todos os naturais de 1 a n: n! = n × (n−1) × … × 2 × 1. Por convenção, 0! = 1.' },
    { st: 1, tag: 'Fórmula', q: 'Arranjos (sem repetição)', a: 'ⁿAₚ = n!/(n−p)!. Conta sequências ordenadas de p elementos de um conjunto de n.' },
    { st: 1, tag: 'Fórmula', q: 'Combinações', a: 'ⁿCₚ = n!/(p!(n−p)!). Conta subconjuntos de p elementos (ordem não importa).' },
    { st: 1, tag: 'Fórmula', q: 'Permutações', a: 'O número de ordenações de n elementos distintos é n!.' },
    { st: 1, tag: 'Regra', q: 'Triângulo de Pascal', a: 'Cada número é a soma dos dois acima. As linhas dão os coeficientes ⁿCₚ do binómio de Newton.' },
    { st: 1, tag: 'Fórmula', q: 'Binómio de Newton', a: '(a + b)ⁿ = Σ ⁿCₖ · a^(n−k) · bᵏ, para k de 0 a n.' },
    { st: 2, tag: 'Fórmula', q: 'Regra de Laplace', a: 'P(A) = casos favoráveis / casos possíveis (em casos equiprováveis). 0 ≤ P(A) ≤ 1.' },
    { st: 2, tag: 'Fórmula', q: 'Probabilidade condicionada', a: 'P(A|B) = P(A ∩ B) / P(B), com P(B) ≠ 0. É a probabilidade de A sabendo que B ocorreu.' },
    { st: 2, tag: 'Regra', q: 'Acontecimentos independentes', a: 'A e B são independentes se P(A ∩ B) = P(A) × P(B), ou seja P(A|B) = P(A).' },
    { st: 2, tag: 'Fórmula', q: 'Probabilidade da reunião', a: 'P(A ∪ B) = P(A) + P(B) − P(A ∩ B). Se incompatíveis: P(A ∪ B) = P(A) + P(B).' },
    { st: 3, tag: 'Definição', q: 'Acontecimento contrário', a: 'P(Ā) = 1 − P(A).' },
    { st: 1, tag: 'Definição', q: 'Valor médio de uma variável aleatória', a: 'μ = Σ xᵢ · P(X = xᵢ). É a "média esperada" da distribuição.' },
    { st: 1, tag: 'Exemplo', q: 'Quanto é 5!?', a: '5 × 4 × 3 × 2 × 1 = 120.' },
    { st: 2, tag: 'Exemplo', q: 'Quantas combinações ⁵C₂?', a: '5!/(2!3!) = (5×4)/(2×1) = 10.' },
    { st: 2, tag: 'Exemplo', q: 'P(A|B) se P(A∩B)=0,2 e P(B)=0,5?', a: '0,2 / 0,5 = 0,4.' },
    { st: 1, tag: 'Exemplo', q: 'P de duas caras ao lançar 2 moedas?', a: 'Independentes: ½ × ½ = ¼ = 0,25.' }
  ]
};

// Seleção atual por tab
var _mat12Sel = { resumo: 1, 'resumo-st': 0 };

// ═══ NAVEGAÇÃO DE TABS ═══
function mat12SwitchTab(tab, btn) {
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
  var panel = document.getElementById('mat12p-' + tab);
  if (panel) { panel.classList.add('active'); panel.style.setProperty('display','block','important'); }

  var titles = { resumo:'Teoria', praticar:'Praticar', fichas:'Fichas', progresso:'Progresso',
                 exercicios:'Exercícios', quiz:'Quiz', flashcards:'Flashcards', teste:'Teste', jogos:'Jogos' };
  if (titles[tab]) document.title = 'Mat. 11.º ' + titles[tab] + ' · 3ponto14';

  if (tab === 'resumo') mat12BuildResumoNav();
  else if (tab === 'exercicios') mat12BuildPraticarNav();
  else if (tab === 'quiz') mat12QuizBuildNav();
  else if (tab === 'flashcards') mat12FcBuildNav();
  else if (tab === 'teste') mat12TesteBuildNav();
  else if (tab === 'jogos') mat12JogosInit();
  else if (tab === 'fichas') mat12FichasBuildNav();
  else if (tab === 'progresso') mat12RenderProgresso();
}

// Abre um sub-modo de prática a partir dos cartões do menu Praticar.
function mat12OpenPraticar(modo) { mat12SwitchTab(modo, null); }

// ═══ TAB TEORIA ═══
function mat12BuildResumoNav() {
  var capRow = document.getElementById('mat12-resumo-cap-row');
  if (!capRow) return;
  var activeCap = _mat12Sel['resumo'] || 1;
  var h = '';
  _mat12CapMeta.forEach(function(m) {
    var color = _mat12CapColors[m.n] || '#516860';
    var isActive = activeCap === m.n;
    var activeStyle = isActive ? 'background:' + color + ';border-color:' + color + ';color:#fff' : '';
    var hoverCode = isActive ? '' : ' onmouseover="this.style.borderColor=\'' + color + '\';this.style.color=\'' + color + '\'" onmouseout="this.style.borderColor=\'\';this.style.color=\'\'"';
    h += '<button class="resumo-cap-btn' + (isActive ? ' active' : '') + '" data-cap="' + m.n + '" onclick="mat12ResumoSelectCap(' + m.n + ',this)" style="' + activeStyle + '"' + hoverCode + '>'
       + '<span class="resumo-cap-icon">' + m.icon + '</span>' + m.label + '</button>';
  });
  capRow.innerHTML = h;
  mat12ResumoShowSts(activeCap);
  mat12RenderResumoInline();
}

function mat12ResumoSelectCap(cap, btn) {
  _mat12Sel['resumo'] = cap;
  _mat12Sel['resumo-st'] = 0;
  var capRow = document.getElementById('mat12-resumo-cap-row');
  if (capRow) {
    capRow.querySelectorAll('.resumo-cap-btn').forEach(function(b) {
      b.classList.remove('active'); b.style.background = ''; b.style.borderColor = ''; b.style.color = '';
    });
  }
  if (btn) {
    var color = _mat12CapColors[cap] || '#516860';
    btn.classList.add('active');
    btn.style.background = color; btn.style.borderColor = color; btn.style.color = '#fff';
  }
  mat12ResumoShowSts(cap);
  mat12RenderResumoInline();
}

function mat12ResumoShowSts(cap) {
  var stRow = document.getElementById('mat12-resumo-st-row');
  if (!stRow) return;
  var sts = _mat12Subtemas[cap] || [];
  if (!sts.length) { stRow.style.display = 'none'; return; }
  var _stSel = _mat12Sel['resumo-st'] || 0;
  var h = '<div class="resumo-st-label">Subtema</div>';
  h += '<button class="resumo-st-btn' + (_stSel === 0 ? ' active' : '') + '" data-st="0" onclick="mat12ResumoSelectSt(this,' + cap + ',0)">Todos</button>';
  sts.forEach(function(st, i) {
    var isActive = _stSel === (i + 1);
    h += '<button class="resumo-st-btn' + (isActive ? ' active' : '') + '" data-st="' + (i + 1) + '" onclick="mat12ResumoSelectSt(this,' + cap + ',' + (i + 1) + ')">' + st + '</button>';
  });
  stRow.innerHTML = h;
  stRow.style.display = 'flex';
}

function mat12ResumoSelectSt(btn, cap, stIdx) {
  var stRow = document.getElementById('mat12-resumo-st-row');
  if (stRow) stRow.querySelectorAll('.resumo-st-btn').forEach(function(b) { b.classList.remove('active'); });
  if (btn) btn.classList.add('active');
  _mat12Sel['resumo'] = cap;
  _mat12Sel['resumo-st'] = stIdx;
  mat12RenderResumoInline();
}

function mat12RenderResumoInline() {
  var cap = _mat12Sel['resumo'] || 1;
  var dest = document.getElementById('mat12-resumo-content');
  if (!dest) return;

  var color = (function(){
    var c = _mat12CapColors[cap] || '#516860';
    return c;
  })();

  var tagIcons = {
    'Definição':'ph-book-bookmark', 'Fórmula':'ph-function', 'Regra':'ph-check-square',
    'Propriedade':'ph-star', 'Exemplo':'ph-pencil-line', 'Estratégia':'ph-lightbulb',
    'Síntese':'ph-seal-check', 'Notação':'ph-at', 'Hierarquia':'ph-tree-structure',
    'Teorema':'ph-intersect', 'Conceito':'ph-cube'
  };

  var allCards = _mat12Cards[cap] || [];

  // Filtrar por subtema, se selecionado
  var stIdx = _mat12Sel['resumo-st'] || 0;
  // Filtro por subtema usa o campo st de cada flashcard (fiável); 0 = Todos.
  var cards = (stIdx > 0) ? allCards.filter(function(card){ return card.st === stIdx; }) : allCards;

  if (!cards.length) {
    dest.innerHTML = '<div class="resumo-empty">'
      + '<i class="ph ph-book-open-text resumo-empty-icon"></i>'
      + '<div class="resumo-empty-title">Conteúdo em preparação</div>'
      + '<div class="resumo-empty-sub">A teoria deste capítulo está a ser elaborada.</div></div>';
    return;
  }

  _mat12PM(cap, 'teoria'); // estudou a teoria deste capítulo

  // Acordeão partilhado: grupos colapsáveis + perguntas que abrem a resposta.
  dest.innerHTML = _teoriaAccordionHTML(cards, color, tagIcons);
}

/* ════════════════════════════════════════════════════════════════
   TAB PRATICAR - exercícios gerados com correção imediata
   Renderiza tudo no painel (sem páginas externas). Reutiliza os
   motores genéricos do chapter-engine: _capBuildQuizHTML,
   _capCheckAnswer, _capShowFeedback.
   ════════════════════════════════════════════════════════════════ */

// Gerador por capítulo (resolução lazy - os buildEx_m12cN são definidos no fim do ficheiro).
// Só os caps com gerador são "praticáveis".
function _mat12Gerador(cap) {
  if (cap === 1 && typeof buildEx_m12c1 === 'function') return buildEx_m12c1;
  if (cap === 2 && typeof buildEx_m12c2 === 'function') return buildEx_m12c2;
  if (cap === 3 && typeof buildEx_m12c3 === 'function') return buildEx_m12c3;
  if (cap === 4 && typeof buildEx_m12c4 === 'function') return buildEx_m12c4;
  if (cap === 5 && typeof buildEx_m12c5 === 'function') return buildEx_m12c5;
  if (cap === 6 && typeof buildEx_m12c6 === 'function') return buildEx_m12c6;
  return null;
}
var _mat12TemasCount = { 1: 3, 2: 3, 3: 3, 4: 3, 5: 3, 6: 3 };

// Estado da prática
var _mat12Prat = { cap: 1, st: 0, nivel: 'medio', score: { correct: 0, total: 0 }, answered: {}, exs: [] };
var _mat12TarefaAtiva=null, _mat12TarefaResp={};

function _mat12PratStorageKey(cap) { return 'edupt_mat12_cap' + cap; }

function _mat12SelCfg() {
  return { capMeta: _mat12CapMeta, capColors: _mat12CapColors, subtemas: _mat12Subtemas,
    subtemaTemas: _mat12SubtemaTemas, temasCount: _mat12TemasCount, gerador: _mat12Gerador };
}
function _mat12PratSel() {
  if (!_mat12Prat.sel) {
    _mat12Prat.sel = _selNew();
    if (_mat12Prat.cap) { _mat12Prat.sel.caps = [_mat12Prat.cap]; if (_mat12Prat.st) _mat12Prat.sel.stsByCap[_mat12Prat.cap] = [_mat12Prat.st]; }
  }
  return _mat12Prat.sel;
}

function mat12BuildPraticarNav() {
  var capRow = document.getElementById('mat12-praticar-cap-row');
  if (!capRow) return;
  var stRow = document.getElementById('mat12-praticar-st-row');
  if (stRow) stRow.style.display = 'none';
  capRow.innerHTML = _selBarsHTML(_mat12PratSel(), _mat12SelCfg(), 'mat12PratToggleCap', 'mat12PratToggleSt');
}

function mat12PratToggleCap(cap) {
  _selToggleCap(_mat12PratSel(), _mat12SelCfg(), cap);
  mat12BuildPraticarNav();
  mat12GerarExercicios();
}
function mat12PratToggleSt(cap, st) {
  _selToggleSt(_mat12PratSel(), cap, st);
  mat12BuildPraticarNav();
  mat12GerarExercicios();
}

function mat12PraticarSetNivel(nivel, btn) {
  _mat12Prat.nivel = nivel;
  var grp = document.getElementById('mat12-praticar-nivel');
  if (grp) grp.querySelectorAll('.gen-level-btn').forEach(function(b) { b.classList.remove('active'); });
  if (btn) btn.classList.add('active');
  mat12GerarExercicios();
}

// Mapa subtema → temas a usar no gerador (Cap 1 Números)
var _mat12SubtemaTemas = {
  1: { 1: ['1'], 2: ['2'], 3: ['3'] },  // Radianos · Fórmula fundamental · Equações trig
  2: { 1: ['1'], 2: ['2'], 3: ['3'] },  // Distâncias/esfera · Vetores/produto escalar · Planos
  3: { 1: ['1'], 2: ['2'], 3: ['3'] },  // Termo geral/monotonia · PA · PG
  4: { 1: ['1'], 2: ['2'], 3: ['3'] },  // Limites de sucessões · Limites de funções · Continuidade
  5: { 1: ['1'], 2: ['2'], 3: ['3'] },  // tvm/derivada · Regras · Tangente
  6: { 1: ['1'], 2: ['2'], 3: ['3'] }   // Combinatória · Probabilidade condicionada · Laplace
};

function mat12GerarExercicios() {
  var dest = document.getElementById('mat12-praticar-content');
  if (!dest) return;
  var pares = _selPares(_mat12PratSel(), _mat12SelCfg());
  if (!pares.length) { dest.innerHTML = ''; return; }
  pares = pares.slice();
  for (var pz = pares.length - 1; pz > 0; pz--) { var rz = Math.floor(Math.random() * (pz + 1)); var tz = pares[pz]; pares[pz] = pares[rz]; pares[rz] = tz; }
  var cap = _mat12PratSel().caps[0] || (pares[0] && pares[0].cap) || 1;

  var QTD = 8;
  var tipos = ['mc', 'fill', 'mc', 'vf', 'fill', 'mc', 'fill', 'mc'];
  var geradas = [];
  for (var i = 0; i < QTD; i++) {
    var par = pares[i % pares.length];
    var gen = _mat12Gerador(par.cap);
    if (!gen) continue;
    var ex = gen(par.tema, tipos[i % tipos.length], _mat12Prat.nivel);
    if (ex) geradas.push(ex);
  }
  var temasPorCap = {};
  pares.forEach(function (pr) { (temasPorCap[pr.cap] = temasPorCap[pr.cap] || []).push(pr.tema); });
  var banco = [];
  if (typeof _mat12Banco !== "undefined") {
    Object.keys(temasPorCap).forEach(function (c) {
      if (_mat12Banco[c]) banco = banco.concat(_mat12Banco[c].filter(function (q) { return temasPorCap[c].indexOf(String(q.t)) !== -1; }));
    });
  }
  var exs = (typeof _mixBancoGeradas === 'function') ? _mixBancoGeradas(banco, geradas, QTD, 3, _mat12Prat.nivel)
    : geradas.map(function (e, idx) { return Object.assign({}, e, { num: idx + 1 }); });
  _mat12Prat.exs = exs;
  _mat12Prat.answered = {};
  _mat12Prat.score = { correct: 0, total: 0 };

  // Score bar + questões (reutiliza motor genérico do chapter-engine)
  var scoreBar = '<div class="score-bar" id="mat12-prat-scorebar">'
    + '<div><div class="score-num" id="mat12-prat-score">0</div><div class="score-label">pontos</div></div>'
    + '<div><div class="score-num" id="mat12-prat-total">/ 0</div><div class="score-label">respondidas</div></div>'
    + '<div class="progress-track"><div class="progress-fill" id="mat12-prat-prog" style="width:0%"></div></div>'
    + '<button class="btn btn-ghost ml-auto" onclick="mat12GerarExercicios()">↺ Novas questões</button>'
    + (_mat12TarefaAtiva ? '<button class="btn" style="background:#2e7d52;color:#fff;border:none;border-radius:999px;padding:6px 14px;font-weight:800;cursor:pointer;margin-left:.4rem" onclick="mat12EntregarTarefa()">\u2713 Terminar e entregar</button>' : '')
    + '</div>';
  var quizHTML = (typeof _capBuildQuizHTML === 'function')
    ? _capBuildQuizHTML(exs, 'm8ex', 'mat12CheckEx')
    : '<p style="color:var(--ink4)">Motor de exercícios indisponível.</p>';
  dest.innerHTML = scoreBar + '<div id="mat12-atribuir" style="margin:.2rem 0 .8rem"></div>' + quizHTML;
  _mat12Prat.cap = cap;
  if (typeof Atribuir !== 'undefined' && Atribuir.montar) {
    var _cm = _mat12CapMeta.filter(function (m) { return m.n === cap; })[0] || {};
    var _selA = _mat12PratSel();
    var _stA = (_selA.caps.length === 1 && (_selA.stsByCap[cap] || []).length === 1) ? _selA.stsByCap[cap][0] : 0;
    var _sn = (_mat12Subtemas[cap] && _stA > 0) ? (_mat12Subtemas[cap][_stA - 1] || '') : '';
    Atribuir.montar('mat12-atribuir', { curso: 'mat12', cursoNome: 'Matemática 11.º', tema: String(cap), temaNome: (_cm.label || ('Cap. ' + cap)), sub: String(_stA || ''), subNome: _sn, tipo: 'quiz', nivel: _mat12Prat.nivel });
  }
}

function mat12CheckEx(qid, tipo, val, btn) {
  if (_mat12Prat.answered[qid]) return;
  if (typeof _capCheckAnswer !== 'function') return;
  var r = _capCheckAnswer(qid, tipo, val);
  if (!r) return; // resposta vazia
  _mat12Prat.answered[qid] = true;
  if (r.correct) _mat12Prat.score.correct++;
  _mat12Prat.score.total++; if(_mat12TarefaAtiva){_mat12TarefaResp[qid]=!!r.correct;}
  if (typeof _capShowFeedback === 'function') _capShowFeedback(qid, r.correct, r.expl, val, btn);
  var se = document.getElementById('mat12-prat-score'); if (se) se.textContent = _mat12Prat.score.correct;
  var te = document.getElementById('mat12-prat-total'); if (te) te.textContent = '/ ' + _mat12Prat.score.total;
  var pe = document.getElementById('mat12-prat-prog'); if (pe && _mat12Prat.exs.length) pe.style.width = (_mat12Prat.score.total / _mat12Prat.exs.length * 100) + '%';
  mat12SaveProgress(_mat12Prat.cap, r.correct);
}

// ═══ PROGRESSO (localStorage por capítulo) ═══
function mat12SaveProgress(cap, correct) {
  try {
    var key = _mat12PratStorageKey(cap);
    var d = JSON.parse(localStorage.getItem(key) || '{}');
    if (!d.sections) d.sections = {};
    if (!d.sections.praticar) d.sections.praticar = { correct: 0, total: 0 };
    d.sections.praticar.total++;
    if (correct) d.sections.praticar.correct++;
    d.lastActivity = Date.now();
    localStorage.setItem(key, JSON.stringify(d));
  } catch (e) {}
}

// Regista atividade no ProgressManager (XP + streak), com capId próprio do 11.º ano
// ('m12capN') para não misturar com o progresso do 7.º ano.
function _mat12PM(cap, tipo, opts) {
  if (typeof ProgressManager === 'undefined') return;
  try { ProgressManager.record('m12cap' + cap, tipo, opts || {}); } catch (e) {}
}

/* ════════════════════════════════════════════════════════════════
   HELPER: linha de capítulos para sub-modos (quiz, flashcards, teste)
   Só capítulos com gerador ficam ativos.
   ════════════════════════════════════════════════════════════════ */
function _mat12BuildCapRow(rowId, activeCap, onclickName) {
  var row = document.getElementById(rowId);
  if (!row) return;
  var h = '';
  _mat12CapMeta.forEach(function(m) {
    var hasGen = !!_mat12Gerador(m.n);
    var color = _mat12CapColors[m.n] || '#516860';
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

function _mat12SetActiveCapBtn(rowId, btn, cap) {
  var row = document.getElementById(rowId);
  if (row) row.querySelectorAll('.resumo-cap-btn').forEach(function(b){ b.classList.remove('active'); b.style.background=''; b.style.borderColor=''; b.style.color=''; });
  if (btn) { var color = _mat12CapColors[cap] || '#516860'; btn.classList.add('active'); btn.style.background=color; btn.style.borderColor=color; btn.style.color='#fff'; }
}

// Converte uma questão de resposta aberta em escolha múltipla. Delega no
// helper partilhado _fillParaMc (shared.js), com distratores pedagógicos.
function _mat12FillToMc(ex) {
  return (typeof _fillParaMc === 'function') ? _fillParaMc(ex) : null;
}

function _mat12BuildMcQuestion(cap) {
  var gen = _mat12Gerador(cap);
  if (!gen) return null;
  var nTemas = _mat12TemasCount[cap] || 1;
  for (var i = 0; i < 10; i++) {
    var tema = String(rnd_m81(1, nTemas));
    var ex = gen(tema, 'mc', 'medio');
    if (ex && ex.tipo === 'mc' && ex.opcoes && ex.opcoes.length >= 2) return ex;
  }
  // Sem MC nativo: converte uma questão de resposta aberta em MC.
  for (var k = 0; k < 14; k++) {
    var tema2 = String(rnd_m81(1, nTemas));
    var conv = _mat12FillToMc(gen(tema2, 'fill', 'medio'));
    if (conv && conv.opcoes && conv.opcoes.length >= 2) return conv;
  }
  return null;
}

/* ════════════════════════════════════════════════════════════════
   SUB-MODO: QUIZ RELÂMPAGO (3 vidas, streak)
   ════════════════════════════════════════════════════════════════ */
var _mat12Quiz = { cap: 1, sel: null, lives: 3, streak: 0, maxStreak: 0, score: 0, total: 0, answered: false, current: null };

function _mat12QuizSel() { if (!_mat12Quiz.sel) _mat12Quiz.sel = _selNew(); return _mat12Quiz.sel; }

function mat12QuizBuildNav() {
  var row = document.getElementById('mat12-quiz-cap-row');
  if (row) row.innerHTML = _selBarsHTML(_mat12QuizSel(), _mat12SelCfg(), 'mat12QuizToggleCap', 'mat12QuizToggleSt');
  var st = document.getElementById('mat12-quiz-st-row'); if (st) st.style.display = 'none';
  mat12QuizStart();
}

function mat12QuizToggleCap(cap) {
  _selToggleCap(_mat12QuizSel(), _mat12SelCfg(), cap);
  mat12QuizBuildNav();
}
function mat12QuizToggleSt(cap, st) {
  _selToggleSt(_mat12QuizSel(), cap, st);
  mat12QuizBuildNav();
}

function mat12QuizStart() {
  _mat12Quiz.lives = 3; _mat12Quiz.streak = 0; _mat12Quiz.maxStreak = 0;
  _mat12Quiz.score = 0; _mat12Quiz.total = 0; _mat12Quiz.answered = false;
  mat12QuizNext();
}

function mat12QuizNext() {
  var app = document.getElementById('mat12-quiz-app');
  if (!app) return;
  if (_mat12Quiz.lives <= 0) { mat12QuizGameOver(app); return; }
  var _qpares = _selPares(_mat12QuizSel(), _mat12SelCfg());
  _mat12Quiz.cap = (_mat12QuizSel().caps[0]) || (_qpares[0] && _qpares[0].cap) || 1;
  var ex = _selMcQuestion(_mat12QuizSel(), _mat12SelCfg(), _mat12FillToMc);
  if (!ex) { app.innerHTML = '<p style="color:var(--ink4);padding:2rem;text-align:center">Sem questões disponíveis para esta seleção.</p>'; return; }
  _mat12Quiz.current = ex; _mat12Quiz.answered = false;
  var lives = '';
  for (var i = 0; i < 3; i++) lives += (i < _mat12Quiz.lives ? '❤️' : '🖤') + ' ';
  var opts = '';
  ex.opcoes.forEach(function(opt, idx) {
    opts += '<button class="qg-opt-btn" id="mat12qopt-' + idx + '" onclick="mat12QuizAnswer(' + idx + ')">' + opt + '</button>';
  });
  app.innerHTML =
    '<div class="qg-hub-bar">' +
      '<div class="qg-hub-lives">' + lives + '</div>' +
      '<div class="qg-hub-streak">' + (_mat12Quiz.streak > 1 ? '🔥 ' + _mat12Quiz.streak + ' seguidas' : '') + '</div>' +
      '<div class="qg-hub-score">✓ ' + _mat12Quiz.score + ' / ' + _mat12Quiz.total + '</div>' +
    '</div>' +
    '<div class="qg-hub-question">' + ex.enun + '</div>' +
    '<div class="qg-hub-opts">' + opts + '</div>' +
    '<div class="qg-hub-feedback" id="mat12-quiz-fb" style="min-height:2.5rem"></div>';
}

function mat12QuizAnswer(idx) {
  if (_mat12Quiz.answered) return;
  _mat12Quiz.answered = true;
  var ex = _mat12Quiz.current; if (!ex) return;
  var correct = String(ex.opcoes[idx]) === String(ex.resposta);
  _mat12Quiz.total++;
  document.querySelectorAll('.qg-opt-btn').forEach(function(b, i) {
    b.disabled = true;
    if (String(ex.opcoes[i]) === String(ex.resposta)) { b.style.background = '#4caf50'; b.style.color = '#fff'; }
  });
  var clicked = document.getElementById('mat12qopt-' + idx);
  if (clicked && !correct) { clicked.style.background = '#f44336'; clicked.style.color = '#fff'; }
  var fb = document.getElementById('mat12-quiz-fb');
  if (correct) {
    _mat12Quiz.score++; _mat12Quiz.streak++;
    if (_mat12Quiz.streak > _mat12Quiz.maxStreak) _mat12Quiz.maxStreak = _mat12Quiz.streak;
    if (fb) fb.innerHTML = '<span style="color:var(--correct,#3ecf8e);font-weight:700">✓ Certo!</span> ' + (ex.expl || '');
  } else {
    _mat12Quiz.lives--; _mat12Quiz.streak = 0;
    if (fb) fb.innerHTML = '<span style="color:var(--wrong,#ff6b6b);font-weight:700">✗ Errado.</span> ' + (ex.expl || '');
  }
  mat12SaveProgress(_mat12Quiz.cap, correct);
  setTimeout(function(){ mat12QuizNext(); }, 1400);
}

function mat12QuizGameOver(app) {
  var pct = _mat12Quiz.total > 0 ? Math.round(_mat12Quiz.score / _mat12Quiz.total * 100) : 0;
  _mat12PM(_mat12Quiz.cap, 'quiz', { pontuacao: _mat12Quiz.score, total: _mat12Quiz.total });
  var emoji = pct >= 90 ? '🏆' : pct >= 70 ? '⭐' : pct >= 50 ? '👍' : '📚';
  app.innerHTML =
    '<div style="text-align:center;padding:2.5rem 1rem">' +
      '<div style="font-size:3.5rem;margin-bottom:.75rem">' + emoji + '</div>' +
      '<div style="font-family:\'Cormorant Garamond\',serif;font-size:2rem;font-weight:900;color:var(--ink)">' + pct + '%</div>' +
      '<div style="color:var(--ink3);margin:.5rem 0 1.5rem">' + _mat12Quiz.score + ' certas em ' + _mat12Quiz.total + ' questões</div>' +
      '<div style="font-size:1.5rem;margin-bottom:1.5rem">Melhor sequência: ' + (_mat12Quiz.maxStreak || 0) + ' 🔥</div>' +
      '<button class="btn btn-primary" onclick="mat12QuizStart()">↺ Jogar novamente</button>' +
    '</div>';
}

/* ════════════════════════════════════════════════════════════════
   SUB-MODO: FLASHCARDS
   ════════════════════════════════════════════════════════════════ */
var _mat12Fc = { cap: 1, idx: 0, flipped: false, cards: [] };

function mat12FcBuildNav() {
  // primeiro capítulo com cartões
  if (!(_mat12Cards[_mat12Fc.cap] && _mat12Cards[_mat12Fc.cap].length)) {
    for (var c = 1; c <= _mat12CapMeta.length; c++) { if (_mat12Cards[c] && _mat12Cards[c].length) { _mat12Fc.cap = c; break; } }
  }
  // linha de capítulos: só os que têm cartões
  var row = document.getElementById('mat12-fc-cap-row');
  if (row) {
    var h = '';
    _mat12CapMeta.forEach(function(m) {
      var has = !!(_mat12Cards[m.n] && _mat12Cards[m.n].length);
      var color = _mat12CapColors[m.n] || '#516860';
      var isActive = _mat12Fc.cap === m.n;
      var activeStyle = isActive ? 'background:' + color + ';border-color:' + color + ';color:#fff' : '';
      var disabled = has ? '' : 'opacity:.45;cursor:not-allowed';
      var onclick = has ? ('mat12FcSelectCap(' + m.n + ',this)') : '';
      var title = has ? '' : ' title="Em preparação"';
      h += '<button class="resumo-cap-btn' + (isActive ? ' active' : '') + '" onclick="' + onclick + '" style="' + activeStyle + ';' + disabled + '"' + title + '>'
         + '<span class="resumo-cap-icon">' + m.icon + '</span>' + m.label + (has ? '' : ' ·') + '</button>';
    });
    row.innerHTML = h;
  }
  mat12FcSelectCap(_mat12Fc.cap, null);
}

function mat12FcSelectCap(cap, btn) {
  if (!(_mat12Cards[cap] && _mat12Cards[cap].length)) return;
  if (btn) _mat12SetActiveCapBtn('mat12-fc-cap-row', btn, cap);
  _mat12Fc.cap = cap;
  _mat12Fc.cards = _mat12Cards[cap].slice();
  _mat12Fc.idx = 0; _mat12Fc.flipped = false;
  _mat12PM(cap, 'flashcard');
  mat12FcRender();
}

function mat12FcRender() {
  var app = document.getElementById('mat12-fc-app');
  if (!app) return;
  var cards = _mat12Fc.cards;
  if (!cards.length) { app.innerHTML = '<p style="color:var(--ink4);padding:2rem;text-align:center">Sem flashcards para este capítulo.</p>'; return; }
  var card = cards[_mat12Fc.idx];
  var color = _mat12CapColors[_mat12Fc.cap] || '#516860';
  var pct = Math.round((_mat12Fc.idx + 1) / cards.length * 100);
  app.innerHTML =
    '<div class="card card-narrow">' +
      '<div class="flex items-center justify-between mb-3">' +
        '<span class="fc2-tag-pill" style="background:' + color + ';color:#fff">' + (card.tag || '') + '</span>' +
        '<span class="fc-counter">' + (_mat12Fc.idx + 1) + ' / ' + cards.length + '</span>' +
      '</div>' +
      '<div class="fc2-prog-track"><div class="fc2-prog-fill" style="width:' + pct + '%;background:' + color + '"></div></div>' +
      '<div onclick="mat12FcFlip()" class="fc2-card-inner" style="cursor:pointer;min-height:140px">' +
        '<div>' +
          '<p style="font-size:1.05rem;font-weight:600;color:var(--ink);line-height:1.4">' + (card.q || '') + '</p>' +
          '<p style="font-size:.9rem;color:' + color + ';margin-top:.75rem;line-height:1.5;display:' + (_mat12Fc.flipped ? 'block' : 'none') + '">' + (card.a || '') + '</p>' +
          '<p style="font-size:.75rem;color:var(--ink4);margin-top:.5rem">' + (_mat12Fc.flipped ? '' : 'Carrega para ver a resposta') + '</p>' +
        '</div>' +
      '</div>' +
      '<div class="flex flex-wrap gap-3 justify-center mt-5">' +
        '<button class="btn btn-ghost" onclick="mat12FcPrev()">← Anterior</button>' +
        '<button class="btn btn-primary" onclick="mat12FcFlip()">↕ Virar</button>' +
        '<button class="btn btn-ghost" onclick="mat12FcNext()">Seguinte →</button>' +
      '</div>' +
    '</div>';
}

function mat12FcFlip() { _mat12Fc.flipped = !_mat12Fc.flipped; mat12FcRender(); }
function mat12FcNext() { _mat12Fc.idx = (_mat12Fc.idx + 1) % (_mat12Fc.cards.length || 1); _mat12Fc.flipped = false; mat12FcRender(); }
function mat12FcPrev() { _mat12Fc.idx = (_mat12Fc.idx - 1 + (_mat12Fc.cards.length || 1)) % (_mat12Fc.cards.length || 1); _mat12Fc.flipped = false; mat12FcRender(); }

/* ════════════════════════════════════════════════════════════════
   SUB-MODO: TESTE CRONOMETRADO
   ════════════════════════════════════════════════════════════════ */
var _mat12Teste = { cap: 1, sel: null, nivel: 'medio', qtd: 10, tempo: 600, exs: [], answered: {}, score: { correct: 0, total: 0 }, timer: null, restante: 0 };

function _mat12TesteSel() { if (!_mat12Teste.sel) _mat12Teste.sel = _selNew(); return _mat12Teste.sel; }

function mat12TesteBuildNav() {
  var row = document.getElementById('mat12-teste-cap-row');
  if (row) row.innerHTML = _selBarsHTML(_mat12TesteSel(), _mat12SelCfg(), 'mat12TesteToggleCap', 'mat12TesteToggleSt');
  var st = document.getElementById('mat12-teste-st-row'); if (st) st.style.display = 'none';
  mat12TesteRenderConfig();
}

function mat12TesteToggleCap(cap) {
  _selToggleCap(_mat12TesteSel(), _mat12SelCfg(), cap);
  mat12TesteBuildNav();
}
function mat12TesteToggleSt(cap, st) {
  _selToggleSt(_mat12TesteSel(), cap, st);
  mat12TesteBuildNav();
}

function mat12TesteRenderConfig() {
  var app = document.getElementById('mat12-teste-app');
  if (!app) return;
  if (_mat12Teste.timer) { clearInterval(_mat12Teste.timer); _mat12Teste.timer = null; }
  app.innerHTML =
    '<div class="card">' +
      '<div class="card-title">Configurar teste</div>' +
      '<div class="flex flex-wrap gap-6 items-end">' +
        '<div><div class="label-small">Nível</div>' +
          '<div class="gen-level-group" id="mat12-teste-nivel">' +
            '<button class="gen-level-btn' + (_mat12Teste.nivel==='facil'?' active':'') + '" onclick="mat12TesteSetNivel(\'facil\',this)"><span class="status-dot status-dot--easy"></span> Fácil</button>' +
            '<button class="gen-level-btn' + (_mat12Teste.nivel==='medio'?' active':'') + '" onclick="mat12TesteSetNivel(\'medio\',this)"><span class="status-dot status-dot--medium"></span> Médio</button>' +
            '<button class="gen-level-btn' + (_mat12Teste.nivel==='dificil'?' active':'') + '" onclick="mat12TesteSetNivel(\'dificil\',this)"><span class="status-dot status-dot--hard"></span> Difícil</button>' +
          '</div></div>' +
        '<div><div class="label-small">N.º questões</div>' +
          '<select class="ai-select" id="mat12-teste-qtd"><option value="10">10</option><option value="15">15</option><option value="20">20</option></select></div>' +
        '<div><div class="label-small">Tempo</div>' +
          '<select class="ai-select" id="mat12-teste-tempo"><option value="600">10 min</option><option value="900">15 min</option><option value="1800">30 min</option></select></div>' +
        '<button class="btn btn-primary" onclick="mat12TesteStart()">▶ Iniciar teste</button>' +
      '</div>' +
    '</div>';
}

function mat12TesteSetNivel(nivel, btn) {
  _mat12Teste.nivel = nivel;
  var grp = document.getElementById('mat12-teste-nivel');
  if (grp) grp.querySelectorAll('.gen-level-btn').forEach(function(b){ b.classList.remove('active'); });
  if (btn) btn.classList.add('active');
}

function mat12TesteStart() {
  var pares = _selPares(_mat12TesteSel(), _mat12SelCfg());
  if (!pares.length) return;
  pares = pares.slice();
  for (var sp = pares.length - 1; sp > 0; sp--) { var rsp = Math.floor(Math.random() * (sp + 1)); var tsp = pares[sp]; pares[sp] = pares[rsp]; pares[rsp] = tsp; }
  _mat12Teste.cap = (_mat12TesteSel().caps[0]) || (pares[0] && pares[0].cap) || 1;
  var qtdEl = document.getElementById('mat12-teste-qtd'), tempoEl = document.getElementById('mat12-teste-tempo');
  _mat12Teste.qtd = qtdEl ? parseInt(qtdEl.value) : 10;
  _mat12Teste.tempo = tempoEl ? parseInt(tempoEl.value) : 600;
  var tipos = ['mc', 'fill', 'mc', 'vf', 'fill'];
  var exs = [];
  for (var i = 0; i < _mat12Teste.qtd; i++) {
    var par = pares[i % pares.length];
    var gen = _mat12Gerador(par.cap); if (!gen) continue;
    var ex = gen(par.tema, tipos[i % tipos.length], _mat12Teste.nivel);
    if (ex) exs.push(Object.assign({}, ex, { num: i + 1 }));
  }
  _mat12Teste.exs = exs; _mat12Teste.answered = {}; _mat12Teste.score = { correct: 0, total: 0 };
  _mat12Teste.restante = _mat12Teste.tempo;

  var app = document.getElementById('mat12-teste-app');
  var quizHTML = (typeof _capBuildQuizHTML === 'function') ? _capBuildQuizHTML(exs, 'm8teste', 'mat12TesteCheck') : '';
  app.innerHTML =
    '<div class="exam-progress-bar" style="position:sticky;top:0;z-index:5;background:var(--surface);padding:.75rem;border-radius:12px;display:flex;align-items:center;gap:1rem;flex-wrap:wrap">' +
      '<div style="font-family:\'Cormorant Garamond\',serif;font-size:1.8rem;font-weight:900" id="mat12-teste-timer">' + _mat12FmtTime(_mat12Teste.restante) + '</div>' +
      '<div style="font-size:.78rem;color:var(--ink3)">Respondidas: <span id="mat12-teste-answered">0 / ' + _mat12Teste.qtd + '</span></div>' +
      '<button class="btn btn-ghost ml-auto" onclick="mat12TesteFinish()">⏹ Terminar</button>' +
    '</div>' +
    '<div id="mat12-teste-questions" style="margin-top:1rem">' + quizHTML + '</div>';

  _mat12Teste.timer = setInterval(function() {
    _mat12Teste.restante--;
    var t = document.getElementById('mat12-teste-timer');
    if (t) t.textContent = _mat12FmtTime(_mat12Teste.restante);
    if (_mat12Teste.restante <= 0) mat12TesteFinish();
  }, 1000);
}

function _mat12FmtTime(s) {
  var m = Math.floor(s / 60), sec = s % 60;
  return (m < 10 ? '0' : '') + m + ':' + (sec < 10 ? '0' : '') + sec;
}

function mat12TesteCheck(qid, tipo, val, btn) {
  if (_mat12Teste.answered[qid]) return;
  if (typeof _capCheckAnswer !== 'function') return;
  var r = _capCheckAnswer(qid, tipo, val);
  if (!r) return;
  _mat12Teste.answered[qid] = true;
  if (r.correct) _mat12Teste.score.correct++;
  _mat12Teste.score.total++;
  if (typeof _capShowFeedback === 'function') _capShowFeedback(qid, r.correct, r.expl, val, btn);
  var a = document.getElementById('mat12-teste-answered');
  if (a) a.textContent = _mat12Teste.score.total + ' / ' + _mat12Teste.qtd;
  mat12SaveProgress(_mat12Teste.cap, r.correct);
  if (_mat12Teste.score.total >= _mat12Teste.qtd) setTimeout(mat12TesteFinish, 600);
}

function mat12TesteFinish() {
  if (_mat12Teste.timer) { clearInterval(_mat12Teste.timer); _mat12Teste.timer = null; }
  var app = document.getElementById('mat12-teste-app');
  if (!app) return;
  var total = _mat12Teste.qtd;
  var correct = _mat12Teste.score.correct;
  var pct = total > 0 ? Math.round(correct / total * 100) : 0;
  _mat12PM(_mat12Teste.cap, 'quiz', { pontuacao: correct, total: total });
  var nota = Math.round(correct / total * 20 * 10) / 10;
  var emoji = pct >= 90 ? '🏆' : pct >= 70 ? '⭐' : pct >= 50 ? '👍' : '📚';
  app.innerHTML =
    '<div style="text-align:center;padding:2.5rem 1rem">' +
      '<div style="font-size:3.5rem;margin-bottom:.75rem">' + emoji + '</div>' +
      '<div style="font-family:\'Cormorant Garamond\',serif;font-size:2.2rem;font-weight:900;color:var(--ink)">' + nota + ' / 20</div>' +
      '<div style="color:var(--ink3);margin:.5rem 0 1.5rem">' + correct + ' certas em ' + total + ' questões (' + pct + '%)</div>' +
      '<button class="btn btn-primary" onclick="mat12TesteRenderConfig()">↺ Novo teste</button>' +
    '</div>';
}

/* ════════════════════════════════════════════════════════════════
   SUB-MODO: JOGOS (reutiliza o motor genérico _j24AutoInit)
   ════════════════════════════════════════════════════════════════ */
var _mat12JogosInited = false;
function mat12JogosInit() {
  (function(){ var pj=document.getElementById('mat12p-jogos'); if(pj && !document.getElementById('mat12-jogos-atr')){ var d=document.createElement('div'); d.id='mat12-jogos-atr'; d.style.margin='0 0 .8rem'; if(pj.firstChild) pj.insertBefore(d,pj.firstChild); else pj.appendChild(d); } if(typeof Atribuir!=='undefined'&&Atribuir.montar) Atribuir.montar('mat12-jogos-atr',{curso:'mat12',cursoNome:'Matemática 11.º',tipo:'jogo',nivel:'',caps:_mat12CapMeta.map(function(mm){return {n:mm.n,label:mm.label};})}); })();
  _mat12PM(_mat12Prat.cap || 1, 'jogo');
  if (_mat12JogosInited) return;
  if (typeof _j24AutoInit === 'function') {
    // Regista o curso nos jogos (matéria correta + filtro capítulo/subtema).
    if (typeof _gRegisterGameCourse === 'function') {
      _gRegisterGameCourse('mat12-jogos-app', {
        capMeta: _mat12CapMeta,
        subtemas: _mat12Subtemas,
        subtemaTemas: (typeof _mat12SubtemaTemas !== 'undefined') ? _mat12SubtemaTemas : null,
        temasCount: _mat12TemasCount,
        gerador: _mat12Gerador,
        banco: (typeof _mat12Banco !== 'undefined') ? _mat12Banco : null,
        qFor: function (level, sel) { return _jogoQForCourse(this, level, sel); }
      });
    }
    _j24AutoInit('mat12-jogos-app', 'medio');
    _mat12JogosInited = true;
  } else {
    var app = document.getElementById('mat12-jogos-app');
    if (app) app.innerHTML = '<p style="color:var(--ink4);padding:2rem;text-align:center">Jogos indisponíveis (motor não carregado).</p>';
  }
}

/* ════════════════════════════════════════════════════════════════
   TAB PROGRESSO
   Lê edupt_mat12_capN (gravado por mat12SaveProgress). Mostra resumo
   global, stats, barras por capítulo, Relatório PDF e Limpar.
   ════════════════════════════════════════════════════════════════ */
function _mat12ProgGetCaps() {
  var out = [];
  var nCaps = _mat12CapMeta.length;
  for (var cap = 1; cap <= nCaps; cap++) {
    var correct = 0, total = 0;
    try {
      var d = JSON.parse(localStorage.getItem('edupt_mat12_cap' + cap) || '{}');
      if (d.sections) Object.keys(d.sections).forEach(function(k) {
        correct += (d.sections[k].correct || 0);
        total += (d.sections[k].total || 0);
      });
    } catch (e) {}
    out.push({ cap: cap, correct: correct, total: total, pct: total > 0 ? Math.round(correct / total * 100) : 0 });
  }
  return out;
}

function mat12RenderProgresso() {
  var el = document.getElementById('mat12-progresso-content');
  if (!el) return;
  var caps = _mat12ProgGetCaps();
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
     + '<button onclick="mat12ProgDownloadPDF()" style="font-family:inherit;font-size:.82rem;font-weight:700;color:#8b3a35;background:none;border:none;cursor:pointer;text-decoration:underline;padding:0">Guarda o relatório PDF</button> para o manteres.</span>'
     + '</div>';

  // Resumo global (gradiente terracota do 11.º ano)
  h += '<div style="background:var(--m12c1-base);border:1.5px solid var(--m12c1-mid);border-radius:16px;padding:1.1rem 1.25rem;margin-bottom:1.25rem;display:flex;align-items:center;gap:1rem;flex-wrap:wrap">'
     +   '<div style="width:52px;height:52px;border-radius:50%;background:var(--m12c1-mid);display:flex;align-items:center;justify-content:center;flex-shrink:0"><i class="ph ' + icon + '" style="font-size:1.4rem;color:#fff"></i></div>'
     +   '<div style="flex:1;min-width:180px">'
     +     '<div style="font-family:\'Cormorant Garamond\',serif;font-size:1.6rem;font-weight:900;color:var(--ink);line-height:1">' + (totalT > 0 ? globalPct + '<span style="font-size:1rem">%</span>' : '-') + '</div>'
     +     '<div style="font-size:.82rem;color:var(--ink2);margin-top:3px">' + msg + '</div>'
     +   '</div>'
     +   '<button class="btn btn-ghost" onclick="mat12ProgDownloadPDF()" style="font-size:.78rem;padding:7px 14px;display:inline-flex;align-items:center;gap:5px"><i class="ph ph-file-text"></i>Relatório PDF</button>'
     + '</div>';

  // XP + streak do ProgressManager (apenas dos capítulos do 11.º ano)
  var pmXp = 0, pmStreak = 0;
  if (typeof ProgressManager !== 'undefined') {
    try {
      var sum = ProgressManager.getSummary();
      pmStreak = sum.streak || 0;
      if (sum.caps) Object.keys(sum.caps).forEach(function(k) { if (k.indexOf('m12cap') === 0) pmXp += (sum.caps[k].xp || 0); });
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
    var m = _mat12CapMeta[c.cap - 1];
    var color = _mat12CapColors[c.cap] || '#516860';
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
      var mp = _mat12CapMeta[pior.cap - 1];
      var colorp = _mat12CapColors[pior.cap] || '#516860';
      h += '<div class="card mt-4" style="border-color:' + colorp + '">'
        + '<div class="card-title" style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:.5rem">'
        + '<span>🎯 Treino Direcionado</span></div>'
        + '<div style="font-size:.85rem;color:var(--ink2);margin:.3rem 0 .8rem">O capítulo onde tens mais a melhorar é <strong>' + mp.label + '</strong> (' + pior.pct + '%). Pratica mais um pouco para subir a tua taxa!</div>'
        + '<button class="btn btn-primary" onclick="mat12TreinarCap(' + pior.cap + ')" style="display:inline-flex;align-items:center;gap:6px"><i class="ph ph-target"></i> Treinar ' + mp.label + '</button>'
        + '</div>';
    }
  }

  // Última atualização
  h += '<div style="font-size:.72rem;color:var(--ink4);margin-top:1rem">Última atualização: ' + new Date().toLocaleString('pt-PT', { hour: '2-digit', minute: '2-digit', day: '2-digit', month: '2-digit' }) + '</div>';

  // Limpar
  h += '<div class="mt-4 flex flex-wrap gap-3"><button class="btn btn-ghost" onclick="mat12ProgReset()"><i class="ph ph-trash"></i> Limpar progresso</button></div>';

  el.innerHTML = h;
}

// Abre a tab Exercícios da Praticar já no capítulo indicado (treino direcionado).
function mat12TreinarCap(cap) {
  _mat12Prat.cap = cap;
  _mat12Prat.st = 0;
  _mat12Prat.sel = { caps: [cap], stsByCap: {} };
  mat12SwitchTab('exercicios', null);
}

function mat12ProgReset() {
  if (typeof window !== 'undefined' && window.confirm && !window.confirm('Limpar todo o progresso do 11.º ano? Esta ação não pode ser desfeita.')) return;
  for (var cap = 1; cap <= _mat12CapMeta.length; cap++) { try { localStorage.removeItem('edupt_mat12_cap' + cap); } catch (e) {} }
  // Remove só os capítulos do 11.º ano (m12cap*) do ProgressManager, preservando os outros anos.
  try {
    var raw = localStorage.getItem('edupt_progress_v2');
    if (raw) {
      var d = JSON.parse(raw);
      if (d.caps) { Object.keys(d.caps).forEach(function(k) { if (k.indexOf('m12cap') === 0) delete d.caps[k]; }); }
      localStorage.setItem('edupt_progress_v2', JSON.stringify(d));
    }
  } catch (e) {}
  mat12RenderProgresso();
  if (typeof eduToast === 'function') eduToast('Progresso do 11.º ano limpo.', 'ok');
}

function mat12ProgDownloadPDF() {
  var caps = _mat12ProgGetCaps();
  var totalC = 0, totalT = 0;
  caps.forEach(function(c) { totalC += c.correct; totalT += c.total; });
  var globalPct = totalT > 0 ? Math.round(totalC / totalT * 100) : 0;
  var rows = caps.map(function(c) {
    var m = _mat12CapMeta[c.cap - 1];
    return '<tr><td style="padding:6px 10px;border-bottom:1px solid #eee">' + m.label + '</td>'
      + '<td style="padding:6px 10px;border-bottom:1px solid #eee;text-align:center">' + (c.total > 0 ? c.correct + ' / ' + c.total : '-') + '</td>'
      + '<td style="padding:6px 10px;border-bottom:1px solid #eee;text-align:center">' + (c.total > 0 ? c.pct + '%' : '-') + '</td></tr>';
  }).join('');
  var html = '<div style="font-family:Arial,sans-serif;max-width:680px;margin:0 auto;padding:24px">'
    + '<h1 style="font-size:20px;margin:0 0 4px">Relatório de Progresso · Matemática 11.º Ano</h1>'
    + '<div style="color:#666;font-size:13px;margin-bottom:16px">3ponto14 · ' + new Date().toLocaleString('pt-PT', { day: '2-digit', month: '2-digit', year: 'numeric' }) + '</div>'
    + eduAlunoLinhaPDF()
    + '<div style="background:#eef2f0;border:1px solid #9ab5aa;border-radius:8px;padding:12px 16px;margin-bottom:16px">'
    + '<strong>Taxa global:</strong> ' + (totalT > 0 ? globalPct + '%' : '-') + ' &nbsp;·&nbsp; ' + totalC + ' certas em ' + totalT + ' questões.</div>'
    + '<table style="width:100%;border-collapse:collapse;font-size:14px"><thead><tr style="background:#516860;color:#fff">'
    + '<th style="padding:8px 10px;text-align:left">Capítulo</th><th style="padding:8px 10px">Certas</th><th style="padding:8px 10px">%</th></tr></thead>'
    + '<tbody>' + rows + '</tbody></table></div>';
  if (typeof htmlToPdfDownload === 'function') htmlToPdfDownload(html, 'progresso-mat12.pdf');
  else if (typeof eduToast === 'function') eduToast('Geração de PDF indisponível.', 'warn');
}

/* ════════════════════════════════════════════════════════════════
   TAB FICHAS - gerador rico (multi-capítulo), igual ao 7.º ano.
   Tipos: resumo teórico, exercícios, teste, minitestes, soluções.
   Seleção de vários capítulos; nível; nº de exercícios; PDF ou HTML.
   ════════════════════════════════════════════════════════════════ */
var _mat12gf = {
  caps: {},
  sts: {},             // { cap: { stIdx: true } } subtemas por capítulo; vazio = todos            // { cap: true } selecionados
  tipos: { resumo: true, exercicios: true, teste: true, minitestes: false, solucoes: true },
  dif: 'facil',
  qty: 10
};

// Constrói a lista de capítulos selecionáveis (só os com gerador).
function mat12FichasBuildNav() {
  if(typeof Atribuir!=='undefined'&&Atribuir.fixo) Atribuir.fixo('mat12-fichas-atr','mat12AtribuirFicha');
  var el = document.getElementById('mat12-fichas-caps');
  if (!el) return;
  // por defeito, seleciona o primeiro capítulo com gerador
  var temAlgum = false;
  for (var k in _mat12gf.caps) { if (_mat12gf.caps[k]) { temAlgum = true; break; } }
  var h = '';
  _mat12CapMeta.forEach(function(m) {
    var hasGen = !!_mat12Gerador(m.n);
    if (!hasGen) return;
    if (!temAlgum) { _mat12gf.caps[m.n] = true; temAlgum = true; } // 1.º disponível
    var sel = !!_mat12gf.caps[m.n];
    var color = _mat12CapColors[m.n] || '#516860';
    var style = sel ? 'background:' + color + ';border-color:' + color + ';color:#fff' : '';
    h += '<button class="gf-cap-btn' + (sel ? ' active' : '') + '" data-cap="' + m.n + '" onclick="mat12gfToggleCap(' + m.n + ',this)" style="' + style + '">' + m.icon + ' ' + m.label + '</button>';
    // subtemas do capítulo selecionado (gerar ficha só de um subtema)
    if (sel) {
      var _sts = (typeof _mat12Subtemas !== 'undefined' && _mat12Subtemas[m.n]) ? _mat12Subtemas[m.n] : [];
      if (_sts.length) {
        var _esc = _mat12gf.sts[m.n] || {};
        var _alg = _mat12gfStsSel(m.n) !== null;
        h += '<div style="margin:.15rem 0 .55rem 1.1rem;display:flex;flex-wrap:wrap;gap:.3rem;align-items:center">';
        h += '<span style="font-size:.66rem;font-weight:800;color:var(--ink4);text-transform:uppercase;letter-spacing:.06em;margin-right:.2rem">Subtemas:</span>';
        h += '<button onclick="mat12gfToggleSt(' + m.n + ',0,this)" style="' + _mat12gfStStyle(!_alg, color) + '">Todos</button>';
        _sts.forEach(function (st, i) {
          var on = !!_esc[i + 1];
          h += '<button onclick="mat12gfToggleSt(' + m.n + ',' + (i + 1) + ',this)" style="' + _mat12gfStStyle(on, color) + '">' + st + '</button>';
        });
        h += '</div>';
      }
    }
  });
  el.innerHTML = h;
}

// Subtemas (índices 1..n) escolhidos para um capítulo; null = todos.
function _mat12gfStsSel(cap) {
  var sel = _mat12gf.sts[cap];
  if (!sel) return null;
  var out = [];
  Object.keys(sel).forEach(function (i) { if (sel[i]) out.push(parseInt(i)); });
  return out.length ? out : null;
}

// Chaves de tema correspondentes aos subtemas escolhidos; null = todos.
function _mat12gfTemasSel(cap) {
  var sts = _mat12gfStsSel(cap);
  if (!sts) return null;
  var mapa = (typeof _mat12SubtemaTemas !== 'undefined' && _mat12SubtemaTemas[cap]) ? _mat12SubtemaTemas[cap] : {};
  var temas = [];
  sts.forEach(function (i) { (mapa[i] || [String(i)]).forEach(function (t) { if (temas.indexOf(t) === -1) temas.push(t); }); });
  return temas.length ? temas : null;
}

function _mat12gfStStyle(on, color) {
  return 'border-radius:999px;padding:3px 11px;font-size:.7rem;font-weight:700;cursor:pointer;font-family:Montserrat,sans-serif;transition:all .15s;'
    + (on ? 'background:' + color + ';border:1.5px solid ' + color + ';color:#fff'
          : 'background:var(--white);border:1.5px solid var(--border);color:var(--ink3)');
}

function mat12gfToggleCap(cap, btn) {
  _mat12gf.caps[cap] = !_mat12gf.caps[cap];
  if (!_mat12gf.caps[cap]) delete _mat12gf.sts[cap]; // desmarcar cap limpa os subtemas
  mat12FichasBuildNav(); // re-render para mostrar/esconder a linha de subtemas
}

// idx 0 = «Todos» (limpa a seleção); idx 1..n alterna o subtema.
function mat12gfToggleSt(cap, idx, btn) {
  if (idx === 0) { delete _mat12gf.sts[cap]; }
  else {
    if (!_mat12gf.sts[cap]) _mat12gf.sts[cap] = {};
    _mat12gf.sts[cap][idx] = !_mat12gf.sts[cap][idx];
    if (_mat12gfStsSel(cap) === null) delete _mat12gf.sts[cap]; // tudo desmarcado = todos
  }
  mat12FichasBuildNav();
}

function mat12gfToggleType(btn) {
  var t = btn.getAttribute('data-type');
  _mat12gf.tipos[t] = !_mat12gf.tipos[t];
  btn.classList.toggle('active', _mat12gf.tipos[t]);
  var tick = btn.querySelector('.gf-tick'); if (tick) tick.textContent = _mat12gf.tipos[t] ? '✓' : '';
}

function mat12gfSetDif(btn) {
  _mat12gf.dif = btn.getAttribute('data-dif');
  var grp = document.getElementById('mat12-fichas-dif');
  if (grp) grp.querySelectorAll('.gf-dif-btn').forEach(function(b){ b.classList.remove('active'); });
  btn.classList.add('active');
}

function mat12gfSetQty(btn) {
  _mat12gf.qty = parseInt(btn.getAttribute('data-qty')) || 10;
  var grp = document.getElementById('mat12-fichas-qty');
  if (grp) grp.querySelectorAll('.gf-dif-btn').forEach(function(b){ b.classList.remove('active'); });
  btn.classList.add('active');
}

// Renderiza um bloco de exercícios (com ou sem espaço de resposta).
function _mat12gfExBloco(exs, startNum) {
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

function _mat12gfGenExs(cap, n) {
  var gen = _mat12Gerador(cap); if (!gen) return [];
  var _temasFiltro = _mat12gfTemasSel(cap); // subtemas escolhidos → temas; null = todos
  var nTemas = _mat12TemasCount[cap] || 1;
  var tipos = ['mc', 'fill', 'vf', 'fill', 'mc', 'mc'];
  var geradas = [], vistos = {};
  // gera até n questões DISTINTAS (evita enunciados repetidos na ficha)
  for (var i = 0, tent = 0; geradas.length < n && tent < n * 6; tent++) {
    var _tk = _temasFiltro ? _temasFiltro[i % _temasFiltro.length] : String((i % nTemas) + 1);
    var ex = gen(_tk, tipos[i % tipos.length], _mat12gf.dif);
    i++;
    if (!ex) continue;
    var chave = String(ex.enun || '').replace(/<[^>]+>/g, '').trim();
    if (vistos[chave]) continue;
    vistos[chave] = 1;
    geradas.push(ex);
  }
  // mistura questões reais do banco (multi-passo, com contexto/figuras)
  var banco = (typeof _mat12Banco !== 'undefined' && _mat12Banco[cap]) ? _mat12Banco[cap] : [];
  if (banco.length && typeof _mixBancoGeradas === 'function') {
    return _mixBancoGeradas(banco, geradas, n, Math.min(Math.ceil(n / 3), banco.length), _mat12gf.dif);
  }
  return geradas;
}

function mat12gfGerar(formato) {
  // capítulos selecionados
  var capsSel = [];
  _mat12CapMeta.forEach(function(m) { if (_mat12gf.caps[m.n] && _mat12Gerador(m.n)) capsSel.push(m.n); });
  var status = document.getElementById('mat12-fichas-status');
  if (!capsSel.length) { if (status) status.textContent = 'Seleciona pelo menos um capítulo.'; return; }
  var algumTipo = _mat12gf.tipos.resumo || _mat12gf.tipos.exercicios || _mat12gf.tipos.teste || _mat12gf.tipos.minitestes;
  if (!algumTipo) { if (status) status.textContent = 'Seleciona pelo menos um tipo de conteúdo.'; return; }
  if (status) status.textContent = 'A gerar…';

  var difLabel = { facil: 'Fácil', medio: 'Médio', dificil: 'Difícil' }[_mat12gf.dif];
  var solucoes = []; // {num, ex} acumuladas para a secção final
  var solCounter = 0;

  var corpo = '';
  capsSel.forEach(function(cap, ci) {
    _mat12PM(cap, 'ficha'); // gerou ficha deste capítulo
    var m = _mat12CapMeta[cap - 1];
    var color = _mat12CapColors[cap] || '#36527a';
    corpo += '<div style="' + (ci > 0 ? 'page-break-before:always;' : '') + 'margin-bottom:6px">'
      + '<h2 style="font-size:16px;color:' + color + ';border-bottom:2px solid ' + color + ';padding-bottom:4px;margin:0 0 10px">' + cap + '. ' + m.label + '</h2>';

    // Resumo teórico (das flashcards)
    if (_mat12gf.tipos.resumo) {
      var cards = _mat12Cards[cap] || [];
      if (cards.length) {
        corpo += '<div style="margin-bottom:12px"><h3 style="font-size:13px;color:#444;margin:0 0 5px">Resumo teórico</h3>';
        cards.slice(0, 8).forEach(function(c) {
          corpo += '<div style="font-size:11.5px;margin-bottom:4px"><strong>' + c.q + '</strong> ' + c.a + (c.v ? '<div style="margin:3px 0">' + c.v + '</div>' : '') + '</div>';
        });
        corpo += '</div>';
      }
    }
    // Exercícios
    if (_mat12gf.tipos.exercicios) {
      var exs = _mat12gfGenExs(cap, _mat12gf.qty);
      corpo += '<div style="margin-bottom:12px"><h3 style="font-size:13px;color:#444;margin:0 0 5px">Exercícios</h3>'
        + _mat12gfExBloco(exs, solCounter + 1) + '</div>';
      exs.forEach(function(ex) { solCounter++; solucoes.push({ num: solCounter, ex: ex }); });
    }
    // Teste de avaliação (8 questões mistas)
    if (_mat12gf.tipos.teste) {
      var exsT = _mat12gfGenExs(cap, 8);
      corpo += '<div style="margin-bottom:12px"><h3 style="font-size:13px;color:#444;margin:0 0 5px">Teste de avaliação</h3>'
        + _mat12gfExBloco(exsT, solCounter + 1) + '</div>';
      exsT.forEach(function(ex) { solCounter++; solucoes.push({ num: solCounter, ex: ex }); });
    }
    // Minitestes (um por subtema, 4 questões cada)
    if (_mat12gf.tipos.minitestes) {
      var subt = _mat12Subtemas[cap] || [];
      var mapa = _mat12SubtemaTemas[cap] || {};
      corpo += '<div style="margin-bottom:12px"><h3 style="font-size:13px;color:#444;margin:0 0 5px">Minitestes</h3>';
      subt.forEach(function(st, si) {
        var temas = mapa[si + 1] || [String(si + 1)];
        var gen = _mat12Gerador(cap);
        var exsM = [];
        for (var q = 0; q < 4; q++) {
          var tema = temas[q % temas.length];
          var ex = gen(tema, (q % 2 === 0) ? 'mc' : 'fill', _mat12gf.dif);
          if (ex) exsM.push(ex);
        }
        corpo += '<div style="margin-bottom:8px"><div style="font-size:12px;font-weight:700;color:#555">Mini ' + (si + 1) + ' · ' + st + '</div>'
          + _mat12gfExBloco(exsM, solCounter + 1) + '</div>';
        exsM.forEach(function(ex) { solCounter++; solucoes.push({ num: solCounter, ex: ex }); });
      });
      corpo += '</div>';
    }
    corpo += '</div>';
  });

  // Secção de soluções
  var solHTML = '';
  if (_mat12gf.tipos.solucoes && solucoes.length) {
    var _lmS = (typeof _limpaMath === 'function') ? _limpaMath : function(x){ return x; };
    var fmS = (typeof formatMath === 'function') ? function(x){ return formatMath(_lmS(x)); } : function(x){ return _lmS(x); };
    var lst = solucoes.map(function(s) {
      return '<div style="font-size:11.5px;margin-bottom:7px;line-height:1.5;page-break-inside:avoid">'
        + '<strong>' + s.num + '.</strong> <strong style="color:#1a6b4a">' + fmS(String(s.ex.resposta)) + '</strong>'
        + (s.ex.expl ? '<br><span style="color:#555">' + fmS(s.ex.expl) + '</span>' : '') + '</div>';
    }).join('');
    solHTML = '<div style="page-break-before:always;padding-top:8px"><h2 style="font-size:16px;border-bottom:2px solid #36527a;padding-bottom:4px">Soluções</h2>' + lst + '</div>';
  }

  var nomesCaps = capsSel.map(function(c) { return _mat12CapMeta[c - 1].label; }).join(', ');
  var html = '<div style="font-family:Arial,sans-serif;max-width:740px;margin:0 auto;padding:24px;color:#222">'
    + '<div style="display:flex;justify-content:space-between;align-items:baseline;border-bottom:2px solid #36527a;padding-bottom:8px;margin-bottom:14px">'
    + '<div><h1 style="font-size:18px;margin:0">Ficha de Trabalho · Matemática 11.º Ano</h1>'
    + '<div style="font-size:11.5px;color:#666">' + nomesCaps + ' · Nível ' + difLabel + '</div></div>'
    + '<div style="font-size:11.5px;color:#888">3ponto14</div></div>'
    + '<div style="font-size:11.5px;color:#666;margin-bottom:12px">Nome: ____________________________  Data: ____ / ____ / ______</div>'
    + corpo + solHTML + '</div>';

  var _temasNomes = capsSel.map(function(c){ return _mat12CapMeta[c-1].label; });
  var fname = (typeof _nomeFicha === 'function') ? _nomeFicha('11', 'matematica', _temasNomes, formato) : ('ficha-mat12.' + (formato === 'html' ? 'html' : 'pdf'));
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
function _mat12Init() {
  if (typeof _addFuncTeoriaVisuais === 'function') _addFuncTeoriaVisuais(_mat12Cards[5], '#4a8a74'); // cap5 Derivadas
  // arranca na tab Teoria com o cap 1 selecionado
  mat12BuildResumoNav();
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _mat12Init);
else _mat12Init();

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
   GERADORES DE EXERCÍCIOS - Matemática A · 11.º ano
   Reutilizam os helpers genéricos acima (rnd_m81, shuffle_m81…).
   ════════════════════════════════════════════════════════════════ */

// ═══ CAP 1 · Trigonometria ═══
// Temas: 1 Conversão graus↔rad · 2 Fórmula fundamental · 3 Período / valores
function buildEx_m12c1(tema, tipo, dif) {
  tema = String(tema);
  if (tema === '1') {
    var graus = [30, 45, 60, 90, 120, 135, 150, 180, 270, 360][rnd_m81(0, 9)];
    var fracs = { 30: 'π/6', 45: 'π/4', 60: 'π/3', 90: 'π/2', 120: '2π/3', 135: '3π/4', 150: '5π/6', 180: 'π', 270: '3π/2', 360: '2π' };
    return {
      enun: 'Converte <strong>' + graus + '°</strong> para radianos.',
      tipo: 'fill_frac', resposta: fracs[graus],
      expl: graus + '° × π/180 = ' + fracs[graus] + ' rad.',
      tema: 'T1 · Radianos'
    };
  }
  if (tema === '2') {
    // dado sen, achar cos (ângulo agudo). Só pares com 1 casa decimal EXATA
    // (sen,cos): garantem que sen²+cos²=1 e que arredondam sem ambiguidade.
    var pares = [[0.6, 0.8], [0.8, 0.6]];
    var pr = pares[rnd_m81(0, pares.length - 1)];
    var dadoSen = Math.random() < 0.5;
    var senV = pr[0], cosV = pr[1];
    var fmt = function (x) { return x.toFixed(1).replace('.', ','); };
    var sq = function (x) { return (x * x).toFixed(2).replace('.', ','); };
    if (dadoSen) {
      return {
        enun: 'Sendo sen(α) = ' + fmt(senV) + ' e α agudo, calcula cos(α). (usa sen²+cos²=1)',
        tipo: 'fill_frac', resposta: fmt(cosV),
        expl: 'cos²α = 1 − sen²α = 1 − ' + sq(senV) + ' = ' + sq(cosV) + ' → cos α = ' + fmt(cosV) + '.',
        tema: 'T2 · Fórmula Fundamental'
      };
    }
    return {
      enun: 'Sendo cos(α) = ' + fmt(cosV) + ' e α agudo, calcula sen(α). (usa sen²+cos²=1)',
      tipo: 'fill_frac', resposta: fmt(senV),
      expl: 'sen²α = 1 − cos²α = 1 − ' + sq(cosV) + ' = ' + sq(senV) + ' → sen α = ' + fmt(senV) + '.',
      tema: 'T2 · Fórmula Fundamental'
    };
  }
  // tema 3 · período de sen/cos(kx)
  var k = rnd_m81(2, 6);
  var fn = Math.random() < 0.5 ? 'sen' : 'cos';
  var periodos = { 2: '2π/2 = π', 3: '2π/3', 4: '2π/4 = π/2', 5: '2π/5', 6: '2π/6 = π/3' };
  var resp = { 2: 'π', 3: '2π/3', 4: 'π/2', 5: '2π/5', 6: 'π/3' };
  return {
    enun: 'Qual é o período da função <strong>y = ' + fn + '(' + k + 'x)</strong>?',
    tipo: 'fill_frac', resposta: resp[k],
    expl: 'Período = 2π ÷ ' + k + ' = ' + resp[k] + '.',
    tema: 'T3 · Período'
  };
}

// ═══ CAP 2 · Geometria no Espaço ═══
// Temas: 1 Norma/distância 3D · 2 Produto escalar · 3 Esfera (centro/raio)
function buildEx_m12c2(tema, tipo, dif) {
  tema = String(tema);
  // ternos pitagóricos 3D: (a,b,c) com a²+b²+c²=d²
  var QUAD = [[1, 2, 2, 3], [2, 3, 6, 7], [1, 4, 8, 9], [4, 4, 7, 9], [2, 6, 9, 11], [6, 6, 7, 11]];
  if (tema === '1') {
    var q = QUAD[rnd_m81(0, QUAD.length - 1)];
    var v1 = q[0] * (Math.random() < 0.5 ? 1 : -1), v2 = q[1] * (Math.random() < 0.5 ? 1 : -1), v3 = q[2] * (Math.random() < 0.5 ? 1 : -1);
    return {
      enun: 'Calcula a norma do vetor <strong>v(' + v1 + ', ' + v2 + ', ' + v3 + ')</strong>.',
      tipo: 'fill', resposta: String(q[3]),
      expl: '‖v‖ = √(' + _parenSeNeg(v1) + '² + ' + _parenSeNeg(v2) + '² + ' + _parenSeNeg(v3) + '²) = √(' + (v1 * v1) + ' + ' + (v2 * v2) + ' + ' + (v3 * v3) + ') = √' + (q[3] * q[3]) + ' = ' + q[3] + '.',
      tema: 'T1 · Distâncias'
    };
  }
  if (tema === '2') {
    var a1 = rnd_m81(-5, 5), a2 = rnd_m81(-5, 5), a3 = rnd_m81(-5, 5);
    var b1 = rnd_m81(-5, 5), b2 = rnd_m81(-5, 5), b3 = rnd_m81(-5, 5);
    var pe = a1 * b1 + a2 * b2 + a3 * b3;
    return {
      enun: 'Calcula o produto escalar de <strong>u(' + a1 + ', ' + a2 + ', ' + a3 + ')</strong> e <strong>v(' + b1 + ', ' + b2 + ', ' + b3 + ')</strong>.',
      tipo: 'fill', resposta: String(pe),
      expl: 'u · v = ' + a1 + '×' + b1 + ' + ' + a2 + '×' + b2 + ' + ' + a3 + '×' + b3 + ' = ' + pe + '.' + (pe === 0 ? ' (São perpendiculares!)' : ''),
      tema: 'T2 · Produto Escalar'
    };
  }
  // tema 3 · esfera centro/raio
  var ca = rnd_m81(-4, 4), cb = rnd_m81(-4, 4), cc = rnd_m81(-4, 4), r = rnd_m81(2, 6);
  var eq = '(x ' + (ca === 0 ? '' : (ca > 0 ? '− ' + ca : '+ ' + (-ca))) + ')² + (y ' + (cb === 0 ? '' : (cb > 0 ? '− ' + cb : '+ ' + (-cb))) + ')² + (z ' + (cc === 0 ? '' : (cc > 0 ? '− ' + cc : '+ ' + (-cc))) + ')² = ' + (r * r);
  var pedeRaio = Math.random() < 0.5;
  if (pedeRaio) {
    return {
      enun: 'Qual é o raio da superfície esférica <strong>' + eq + '</strong>?',
      tipo: 'fill', resposta: String(r),
      expl: 'r² = ' + (r * r) + ' → r = ' + r + '.',
      tema: 'T3 · Esfera'
    };
  }
  return {
    enun: 'Qual é o centro da superfície esférica <strong>' + eq + '</strong>? (forma (a, b, c))',
    tipo: 'fill_frac', resposta: '(' + ca + ',' + cb + ',' + cc + ')',
    expl: 'Centro = (' + ca + ', ' + cb + ', ' + cc + ').',
    tema: 'T3 · Esfera'
  };
}

// ═══ CAP 3 · Sucessões ═══
// Temas: 1 Termo geral · 2 PA · 3 PG
function buildEx_m12c3(tema, tipo, dif) {
  tema = String(tema);
  if (tema === '1') {
    // termo de ordem n de uma sucessão dada por termo geral
    var a = rnd_m81(1, 5), b = rnd_m81(-5, 5), n = rnd_m81(3, 12);
    var un = a * n + b;
    var expr = (a === 1 ? 'n' : a + 'n') + (b === 0 ? '' : (b > 0 ? ' + ' + b : ' − ' + Math.abs(b)));
    return {
      enun: 'Considera a sucessão de termo geral <strong>uₙ = ' + expr + '</strong>. Calcula u' + _sub_m12(n) + '.',
      tipo: 'fill', resposta: String(un),
      expl: 'u' + _sub_m12(n) + ' = ' + a + '×' + n + (b >= 0 ? ' + ' + b : ' − ' + Math.abs(b)) + ' = ' + un + '.',
      tema: 'T1 · Termo Geral'
    };
  }
  if (tema === '2') {
    // PA: u1, razão r, termo de ordem n
    var u1 = rnd_m81(1, 8), r = rndNZ_m81(-4, 5), n = rnd_m81(5, 15);
    var un = u1 + (n - 1) * r;
    return {
      enun: 'Numa progressão aritmética, u₁ = ' + u1 + ' e a razão é ' + r + '. Qual é o ' + n + '.º termo?',
      tipo: 'fill', resposta: String(un),
      expl: 'uₙ = u₁ + (n−1)×r = ' + u1 + ' + ' + (n - 1) + '×' + r + ' = ' + un + '.',
      tema: 'T2 · Progressão Aritmética'
    };
  }
  // tema 3 · PG: termo de ordem n
  var u1g = rnd_m81(1, 4), rg = rnd_m81(2, 3), ng = rnd_m81(3, 6);
  var ung = u1g * Math.pow(rg, ng - 1);
  return {
    enun: 'Numa progressão geométrica, u₁ = ' + u1g + ' e a razão é ' + rg + '. Qual é o ' + ng + '.º termo?',
    tipo: 'fill', resposta: String(ung),
    expl: 'uₙ = u₁ × r^(n−1) = ' + u1g + ' × ' + rg + '^' + (ng - 1) + ' = ' + u1g + ' × ' + Math.pow(rg, ng - 1) + ' = ' + ung + '.',
    tema: 'T3 · Progressão Geométrica'
  };
}
function _sub_m12(n) { var m = { '0': '₀', '1': '₁', '2': '₂', '3': '₃', '4': '₄', '5': '₅', '6': '₆', '7': '₇', '8': '₈', '9': '₉' }; return String(n).split('').map(function (c) { return m[c] || c; }).join(''); }

// ═══ CAP 4 · Limites e Continuidade ═══
// Temas: 1 Limite de sucessão · 2 Limite racional (∞/∞) · 3 Limite 0/0 (fatorizar)
function buildEx_m12c4(tema, tipo, dif) {
  tema = String(tema);
  if (tema === '1') {
    // lim de (a n + b)/(c n + d) = a/c ; ou de constante/n = 0
    var kind = rnd_m81(0, 1);
    if (kind === 0) {
      var a = rnd_m81(2, 8), c = rnd_m81(2, 8);
      while (c === 0) c = rnd_m81(2, 8);
      var g = _gcd_m12(a, c);
      var resp = (c / g === 1) ? String(a / g) : (a / g) + '/' + (c / g);
      return {
        enun: 'Calcula lim(n→+∞) de <strong>(' + a + 'n + 1)/(' + c + 'n − 2)</strong>.',
        tipo: 'fill_frac', resposta: resp,
        expl: 'Mesmo grau (n): o limite é o quociente dos coeficientes de n → ' + a + '/' + c + (resp !== a + '/' + c ? ' = ' + resp : '') + '.',
        tema: 'T1 · Limite de Sucessão'
      };
    }
    var k = rnd_m81(2, 20);
    return {
      enun: 'Calcula lim(n→+∞) de <strong>' + k + '/n</strong>.',
      tipo: 'fill', resposta: '0',
      expl: 'Quando n → +∞, ' + k + '/n aproxima-se de 0.',
      tema: 'T1 · Limite de Sucessão'
    };
  }
  if (tema === '2') {
    // lim x→∞ de função racional, mesmo grau
    var a2 = rnd_m81(2, 9), c2 = rnd_m81(2, 9);
    var g2 = _gcd_m12(a2, c2);
    var resp2 = (c2 / g2 === 1) ? String(a2 / g2) : (a2 / g2) + '/' + (c2 / g2);
    return {
      enun: 'Calcula lim(x→+∞) de <strong>(' + a2 + 'x² + 1)/(' + c2 + 'x² − 5)</strong>.',
      tipo: 'fill_frac', resposta: resp2,
      expl: 'Mesmo grau (x²): quociente dos coeficientes principais = ' + a2 + '/' + c2 + (resp2 !== a2 + '/' + c2 ? ' = ' + resp2 : '') + '.',
      tema: 'T2 · Limite de Função'
    };
  }
  // tema 3 · 0/0 do tipo (x²−a²)/(x−a) → x→a dá 2a
  var a3 = rnd_m81(1, 8);
  var lim = 2 * a3;
  return {
    enun: 'Calcula lim(x→' + a3 + ') de <strong>(x² − ' + (a3 * a3) + ')/(x − ' + a3 + ')</strong>.',
    tipo: 'fill', resposta: String(lim),
    expl: '(x² − ' + (a3 * a3) + ') = (x − ' + a3 + ')(x + ' + a3 + '). Simplifica → x + ' + a3 + '. Para x = ' + a3 + ': ' + a3 + ' + ' + a3 + ' = ' + lim + '.',
    tema: 'T3 · Indeterminação 0/0'
  };
}
function _gcd_m12(a, b) { a = Math.abs(a); b = Math.abs(b); while (b) { var t = b; b = a % b; a = t; } return a || 1; }

// ═══ CAP 5 · Derivadas ═══
// Temas: 1 Derivar polinómio (valor num ponto) · 2 tvm · 3 Declive da tangente
function buildEx_m12c5(tema, tipo, dif) {
  tema = String(tema);
  if (tema === '1') {
    // f(x)=a x² + b x + c ; f'(x)=2a x + b ; pede f'(x0)
    var a = rndNZ_m81(1, 5), b = rnd_m81(-6, 6), c = rnd_m81(-6, 6), x0 = rnd_m81(-4, 4);
    var dval = 2 * a * x0 + b;
    var bx = (Math.abs(b) === 1 ? 'x' : Math.abs(b) + 'x');
    var _tc11 = c === 0 ? '' : (c > 0 ? ' + ' + c : ' − ' + Math.abs(c)); // omite termo c se 0
    var f = 'f(x) = ' + (a === 1 ? 'x²' : a + 'x²') + (b === 0 ? '' : (b > 0 ? ' + ' + bx : ' − ' + bx)) + _tc11;
    return {
      enun: 'Sendo <strong>' + f + '</strong>, calcula f\'(' + x0 + ').',
      tipo: 'fill', resposta: String(dval),
      expl: 'f\'(x) = ' + (2 * a) + 'x ' + (b >= 0 ? '+ ' + b : '− ' + Math.abs(b)) + '. f\'(' + x0 + ') = ' + (2 * a) + '×' + x0 + (b >= 0 ? ' + ' + b : ' − ' + Math.abs(b)) + ' = ' + dval + '.',
      tema: 'T1 · Derivar'
    };
  }
  if (tema === '2') {
    // tvm de f(x)=x² em [a,b]
    var aa = rnd_m81(-3, 3), bb = aa + rnd_m81(2, 5);
    var tvm = (bb * bb - aa * aa) / (bb - aa); // = a+b
    return {
      enun: 'Calcula a taxa de variação média de <strong>f(x) = x²</strong> no intervalo [' + aa + ', ' + bb + '].',
      tipo: 'fill', resposta: String(tvm),
      expl: 'tvm = (f(' + bb + ') − f(' + aa + '))/(' + bb + ' − ' + aa + ') = (' + (bb * bb) + ' − ' + (aa * aa) + ')/' + (bb - aa) + ' = ' + tvm + '.',
      tema: 'T2 · Taxa de Variação'
    };
  }
  // tema 3 · declive da tangente a f(x)=x² em x0 (a=1 p/ caber no gráfico)
  var a3 = 1, x3 = rnd_m81(-2, 2);
  var decl = 2 * a3 * x3;
  var y3 = a3 * x3 * x3;
  var visTg = (typeof EduVisual !== 'undefined') ? EduVisual.grafico(
    function (x) { return a3 * x * x; },
    { range: 5, color: '#4a8a74', markers: [{ x: x3, y: y3, label: 'P' }] }
  ) : '';
  return {
    enun: 'A figura mostra o gráfico de <strong>f(x) = x²</strong>. Qual é o declive da reta tangente no ponto de abcissa ' + x3 + '?',
    visual: visTg,
    tipo: 'fill', resposta: String(decl),
    expl: 'O declive é f\'(' + x3 + '). f\'(x) = 2x → f\'(' + x3 + ') = 2×' + x3 + ' = ' + decl + '.',
    tema: 'T3 · Tangente'
  };
}

// ═══ CAP 6 · Probabilidades e Combinatória ═══
// Temas: 1 Fatorial/combinações · 2 Probabilidade condicionada · 3 Laplace
function buildEx_m12c6(tema, tipo, dif) {
  tema = String(tema);
  function fat(n) { var r = 1; for (var i = 2; i <= n; i++) r *= i; return r; }
  function comb(n, p) { return fat(n) / (fat(p) * fat(n - p)); }
  if (tema === '1') {
    var kind = rnd_m81(0, 1);
    if (kind === 0) {
      var n = rnd_m81(3, 6);
      return {
        enun: 'Calcula <strong>' + n + '!</strong> (fatorial de ' + n + ').',
        tipo: 'fill', resposta: String(fat(n)),
        expl: n + '! = ' + (function () { var a = []; for (var i = n; i >= 1; i--) a.push(i); return a.join(' × '); })() + ' = ' + fat(n) + '.',
        tema: 'T1 · Combinatória'
      };
    }
    var nn = rnd_m81(4, 8), pp = rnd_m81(2, nn - 1);
    return {
      enun: 'Calcula o número de combinações <strong>' + nn + 'C' + pp + '</strong>.',
      tipo: 'fill', resposta: String(comb(nn, pp)),
      expl: nn + 'C' + pp + ' = ' + nn + '! / (' + pp + '! × ' + (nn - pp) + '!) = ' + comb(nn, pp) + '.',
      tema: 'T1 · Combinatória'
    };
  }
  if (tema === '2') {
    // P(A|B) = P(A∩B)/P(B), valores "redondos"
    var inter = [1, 2, 2, 3][rnd_m81(0, 3)], total = [4, 5, 8, 10][rnd_m81(0, 3)];
    var pb = [4, 5, 8, 10][rnd_m81(0, 3)];
    // usar frações simples: P(A∩B)=inter/total, P(B)=pbNum/total
    var pbNum = rnd_m81(inter, total); // P(B) >= P(A∩B)
    var res = reduce_m81(inter, pbNum);
    return {
      enun: 'Sabendo que P(A ∩ B) = ' + inter + '/' + total + ' e P(B) = ' + pbNum + '/' + total + ', calcula P(A | B). (fração irredutível)',
      tipo: 'fill_frac', resposta: fmtFrac_m81(res[0], res[1]),
      expl: 'P(A|B) = P(A∩B)/P(B) = (' + inter + '/' + total + ') ÷ (' + pbNum + '/' + total + ') = ' + inter + '/' + pbNum + ' = ' + fmtFrac_m81(res[0], res[1]) + '.',
      tema: 'T2 · Prob. Condicionada'
    };
  }
  // tema 3 · Laplace (dado/baralho)
  var ctx = [
    { e: 'sair um número par num dado', f: 3, t: 6 },
    { e: 'sair um número maior que 4 num dado', f: 2, t: 6 },
    { e: 'tirar uma carta de copas de um baralho de 40', f: 10, t: 40 },
    { e: 'sair uma figura (rei, dama ou valete) num naipe de 10 cartas', f: 3, t: 10 }
  ];
  var c = ctx[rnd_m81(0, ctx.length - 1)];
  var rr = reduce_m81(c.f, c.t);
  return {
    enun: 'Qual é a probabilidade de <strong>' + c.e + '</strong>? (fração irredutível)',
    tipo: 'fill_frac', resposta: fmtFrac_m81(rr[0], rr[1]),
    expl: 'P = casos favoráveis / casos possíveis = ' + c.f + '/' + c.t + ' = ' + fmtFrac_m81(rr[0], rr[1]) + '.',
    tema: 'T3 · Laplace'
  };
}

/* ════════════════════════════════════════════════════════════════
   BANCO DE QUESTÕES (reais/ricas) - Matemática A · 11.º ano
   ════════════════════════════════════════════════════════════════ */
var _mat12Banco = {
  1: [ // Trigonometria
    { t: '2', tipo: 'mc', enun: 'Se cos(α) = −3/5 e α pertence ao 2.º quadrante, qual é sen(α)?', opcoes: ['4/5', '−4/5', '3/5', '−3/5'], resposta: '4/5', expl: 'sen²α = 1 − 9/25 = 16/25 → sen α = ±4/5. No 2.º quadrante o seno é positivo → 4/5.', tema: 'T2 · Fórmula Fundamental' },
    { t: '1', tipo: 'fill_frac', enun: 'Converte 5π/6 radianos para graus.', resposta: '150', expl: '5π/6 × 180/π = 5×180/6 = 150°.', tema: 'T1 · Radianos' },
    { t: '3', tipo: 'mc', enun: 'Quantas soluções tem a equação sen(x) = 1/2 no intervalo [0, 2π]?', opcoes: ['2', '1', '3', '4'], resposta: '2', expl: 'sen x = 1/2 em [0,2π]: x = π/6 e x = 5π/6 → duas soluções.', tema: 'T3 · Equações Trig.' },
    { t: '2', tipo: 'vf', enun: 'Verdadeiro ou Falso: para qualquer ângulo α, tem-se sen(α) ≤ 1.', resposta: 'V', expl: 'O contradomínio do seno é [−1, 1], logo sen α ≤ 1 sempre.', tema: 'T2 · Razões' },
    { t: '2', tipo: 'fill_frac', enun: 'Sabe-se que tg(α) = 2 e que α é um ângulo agudo. Determina o valor de sen(α).', resposta: '2√5/5', expl: 'Passo 1: tg α = sen/cos = 2, logo sen = 2cos. Passo 2: na fórmula fundamental, sen²+cos²=1 → (2cos)²+cos²=1 → 5cos²=1 → cos²=1/5. Passo 3: cos=1/√5 (agudo, positivo) e sen=2/√5 = 2√5/5.', tema: 'T2 · Fórmula Fundamental' },
    { t: '3', tipo: 'mc', enun: 'Considera a função f(x) = 2sen(x) + 1. Qual é o contradomínio de f?', opcoes: ['[−1, 3]', '[−2, 2]', '[0, 2]', '[1, 3]'], resposta: '[−1, 3]', expl: 'Passo 1: sen(x) varia em [−1, 1]. Passo 2: 2sen(x) varia em [−2, 2]. Passo 3: somando 1, f(x) varia em [−2+1, 2+1] = [−1, 3].', tema: 'T3 · Funções Trigonométricas' }
  ],
  2: [ // Geometria no Espaço
    { t: '2', tipo: 'mc', enun: 'Os vetores u(1, 2, −1) e v(3, −1, 1) são perpendiculares?', opcoes: ['Sim, porque u·v = 0', 'Não', 'Só se forem unitários', 'São colineares'], resposta: 'Sim, porque u·v = 0', expl: 'u·v = 1×3 + 2×(−1) + (−1)×1 = 3 − 2 − 1 = 0 → perpendiculares.', tema: 'T2 · Produto Escalar' },
    { t: '1', tipo: 'fill', enun: 'Calcula a distância entre A(1, 0, 2) e B(1, 4, 5).', resposta: '5', expl: 'd = √(0² + 4² + 3²) = √(0+16+9) = √25 = 5.', tema: 'T1 · Distâncias' },
    { t: '3', tipo: 'mc', enun: 'Um vetor normal ao plano de equação 3x − 2y + z − 7 = 0 é:', opcoes: ['(3, −2, 1)', '(3, 2, 1)', '(−7, 0, 0)', '(1, 1, 1)'], resposta: '(3, −2, 1)', expl: 'Em ax+by+cz+d=0, o vetor normal é (a, b, c) = (3, −2, 1).', tema: 'T3 · Planos' },
    { t: '1', tipo: 'fill', enun: 'Qual é o raio da superfície esférica x² + y² + z² = 49?', resposta: '7', expl: 'r² = 49 → r = 7. (Centro na origem.)', tema: 'T1 · Esfera' },
    { t: '2', tipo: 'mc', enun: 'Os pontos A(1, 2, 0), B(3, 2, 0) e C(1, 2, 4) definem um triângulo. Qual é a sua área?', opcoes: ['4', '8', '6', '2√5'], resposta: '4', expl: 'Passo 1: AB = (2,0,0), ‖AB‖=2. Passo 2: AC = (0,0,4), ‖AC‖=4. Passo 3: AB·AC = 0 → são perpendiculares (triângulo retângulo em A). Passo 4: área = (2×4)/2 = 4.', tema: 'T2 · Produto Escalar' },
    { t: '3', tipo: 'mc', enun: 'A interseção da esfera x²+y²+z²=25 com o plano z=3 é uma circunferência. Qual é o seu raio?', opcoes: ['4', '3', '5', '√34'], resposta: '4', expl: 'Passo 1: substituindo z=3: x²+y²+9=25 → x²+y²=16. Passo 2: é uma circunferência de raio √16 = 4 (no plano z=3).', tema: 'T1 · Esfera' }
  ],
  3: [ // Sucessões
    { t: '2', tipo: 'mc', enun: 'Numa progressão aritmética, u₃ = 7 e u₇ = 19. Qual é a razão?', opcoes: ['3', '4', '2', '12'], resposta: '3', expl: 'De u₃ a u₇ vão 4 razões: 19 − 7 = 12 = 4r → r = 3.', tema: 'T2 · PA' },
    { t: '2', tipo: 'fill', enun: 'A soma dos 20 primeiros termos da PA com u₁ = 2 e razão 3 é:', resposta: '610', expl: 'u₂₀ = 2 + 19×3 = 59. S₂₀ = (2 + 59)×20/2 = 61×10 = 610.', tema: 'T2 · PA' },
    { t: '3', tipo: 'fill', enun: 'Numa progressão geométrica de razão 2, o 1.º termo é 3. Qual é o 5.º termo?', resposta: '48', expl: 'u₅ = 3 × 2⁴ = 3 × 16 = 48.', tema: 'T3 · PG' },
    { t: '1', tipo: 'mc', enun: 'A sucessão uₙ = (n − 5) é:', opcoes: ['crescente', 'decrescente', 'constante', 'não monótona'], resposta: 'crescente', expl: 'uₙ₊₁ − uₙ = (n+1−5) − (n−5) = 1 > 0 → crescente.', tema: 'T1 · Monotonia' },
    { t: '2', tipo: 'fill', enun: 'Numa PA, a soma do 2.º com o 5.º termo é 17 e u₁ = 1. Determina a razão r.', resposta: '3', expl: 'Passo 1: u₂ = 1+r e u₅ = 1+4r. Passo 2: soma = (1+r)+(1+4r) = 2+5r = 17. Passo 3: 5r = 15 → r = 3.', tema: 'T2 · PA' },
    { t: '3', tipo: 'mc', enun: 'Numa PG de termos positivos, u₂ = 6 e u₄ = 54. Qual é a razão r?', opcoes: ['3', '9', '6', '√3'], resposta: '3', expl: 'Passo 1: u₄/u₂ = r² = 54/6 = 9. Passo 2: r = √9 = 3 (termos positivos → r>0).', tema: 'T3 · PG' }
  ],
  4: [ // Limites e Continuidade
    { t: '2', tipo: 'mc', enun: 'O valor de lim(x→+∞) (5x² − 3x + 1)/(2x² + 7) é:', opcoes: ['5/2', '0', '+∞', '5/7'], resposta: '5/2', expl: 'Mesmo grau (x²): quociente dos coeficientes principais = 5/2.', tema: 'T2 · Limite de Função' },
    { t: '3', tipo: 'fill', enun: 'A função f tem domínio ℝ, é contínua, f(1) = −2 e f(3) = 4. Pelo Teorema de Bolzano, quantos zeros TEM DE existir em ]1, 3[ (no mínimo)?', resposta: '1', expl: 'f(1)·f(3) = (−2)(4) < 0 → existe pelo menos UM zero em ]1, 3[.', tema: 'T3 · Bolzano' },
    { t: '2', tipo: 'fill', enun: 'Calcula lim(x→3) (x² − 9)/(x − 3).', resposta: '6', expl: '(x²−9)/(x−3) = (x−3)(x+3)/(x−3) = x+3 → para x=3 dá 6.', tema: 'T2 · Indeterminação' },
    { t: '2', tipo: 'mc', enun: 'A reta y = 4 é assíntota horizontal de f(x) = (4x + 1)/(x − 2) porque:', opcoes: ['lim(x→±∞) f(x) = 4', 'f(4) = 0', 'f(2) não existe', 'o gráfico passa em (0, 4)'], resposta: 'lim(x→±∞) f(x) = 4', expl: 'No infinito, o quociente tende para 4/1 = 4 → assíntota horizontal y = 4.', tema: 'T2 · Assíntotas' },
    { t: '2', tipo: 'fill', enun: 'Calcula lim(x→2) (x² + x − 6)/(x − 2).', resposta: '5', expl: 'Passo 1: substituir x=2 dá 0/0 (indeterminação). Passo 2: fatorizar o numerador: x²+x−6 = (x−2)(x+3). Passo 3: simplificar (x−2)(x+3)/(x−2) = x+3. Passo 4: para x=2 → 2+3 = 5.', tema: 'T2 · Indeterminação' },
    { t: '1', tipo: 'mc', enun: 'A função f(x) = (3x − 6)/(x² − 4) tem uma assíntota vertical em:', opcoes: ['x = −2', 'x = 2', 'x = 0', 'não tem'], resposta: 'x = −2', expl: 'Passo 1: x²−4 = (x−2)(x+2) anula-se em x=2 e x=−2. Passo 2: simplificar f = 3(x−2)/[(x−2)(x+2)] = 3/(x+2) (x≠2). Passo 3: em x=2 há um buraco; a assíntota vertical é em x=−2.', tema: 'T2 · Assíntotas' }
  ],
  5: [ // Derivadas
    { t: '1', tipo: 'fill', enun: 'Sendo f(x) = x³ − 3x, calcula f\'(2).', resposta: '9', expl: 'f\'(x) = 3x² − 3 → f\'(2) = 3×4 − 3 = 9.', tema: 'T1 · Derivar' },
    { t: '3', tipo: 'mc', enun: 'A função f(x) = x² − 4x tem, em x = 2:', opcoes: ['um mínimo', 'um máximo', 'um ponto de inflexão', 'uma assíntota'], resposta: 'um mínimo', expl: 'f\'(x) = 2x − 4 = 0 → x = 2. f\' passa de − para + → mínimo.', tema: 'T3 · Extremos' },
    { t: '2', tipo: 'fill', enun: 'Calcula a taxa de variação média de f(x) = x² no intervalo [2, 5].', resposta: '7', expl: 'tvm = (25 − 4)/(5 − 2) = 21/3 = 7.', tema: 'T2 · Taxa de Variação' },
    { t: '3', tipo: 'mc', enun: 'Se f\'(x) > 0 para todo o x ∈ ]a, b[, então f é, nesse intervalo:', opcoes: ['estritamente crescente', 'estritamente decrescente', 'constante', 'descontínua'], resposta: 'estritamente crescente', expl: 'Derivada positiva ⟺ função estritamente crescente.', tema: 'T3 · Monotonia' },
    { t: '1', tipo: 'fill', enun: 'Considera f(x) = x³ − 6x² + 9x. A reta tangente ao gráfico no ponto de abcissa x = 1 tem que declive?', resposta: '0', expl: 'Passo 1: o declive da tangente é f\'(1). Passo 2: f\'(x) = 3x² − 12x + 9. Passo 3: f\'(1) = 3 − 12 + 9 = 0. (A tangente é horizontal.)', tema: 'T1 · Tangente' },
    { t: '3', tipo: 'mc', enun: 'A função f(x) = x³ − 3x² tem extremos em:', opcoes: ['x = 0 (máx) e x = 2 (mín)', 'x = 0 (mín) e x = 2 (máx)', 'apenas x = 2', 'não tem extremos'], resposta: 'x = 0 (máx) e x = 2 (mín)', expl: 'Passo 1: f\'(x) = 3x² − 6x = 3x(x−2), zeros em x=0 e x=2. Passo 2: f\' é positiva antes de 0, negativa entre 0 e 2, positiva depois. Passo 3: em x=0 passa de + para − (máximo); em x=2 de − para + (mínimo).', tema: 'T3 · Extremos' }
  ],
  6: [ // Probabilidades e Combinatória
    { t: '1', tipo: 'fill', enun: 'De quantas maneiras se podem sentar 4 pessoas em 4 cadeiras em fila?', resposta: '24', expl: 'Permutações de 4: 4! = 4×3×2×1 = 24.', tema: 'T1 · Combinatória' },
    { t: '1', tipo: 'fill', enun: 'Quantas comissões de 3 pessoas se podem formar a partir de 6 pessoas?', resposta: '20', expl: '⁶C₃ = 6!/(3!3!) = (6×5×4)/(3×2×1) = 20. (A ordem não conta.)', tema: 'T1 · Combinatória' },
    { t: '2', tipo: 'fill_frac', enun: 'P(A∩B) = 0,3 e P(B) = 0,6. Calcula P(A|B) (fração irredutível).', resposta: '1/2', expl: 'P(A|B) = P(A∩B)/P(B) = 0,3/0,6 = 1/2.', tema: 'T2 · Prob. Condicionada' },
    { t: '3', tipo: 'fill_frac', enun: 'Lança-se um dado. Qual a probabilidade de sair um número primo? (2, 3 e 5 são primos)', resposta: '1/2', expl: 'Primos no dado: 2, 3, 5 → 3 casos. P = 3/6 = 1/2.', tema: 'T3 · Laplace' },
    { t: '2', tipo: 'fill_frac', enun: 'Numa turma, 60% dos alunos pratica desporto e, destes, metade joga futebol. Escolhido um aluno ao acaso, qual a probabilidade de praticar desporto E jogar futebol? (fração irredutível)', resposta: '3/10', expl: 'Passo 1: P(desporto) = 0,6. Passo 2: P(futebol | desporto) = 0,5. Passo 3: P(desporto ∩ futebol) = 0,6 × 0,5 = 0,3 = 3/10.', tema: 'T2 · Prob. Condicionada' },
    { t: '1', tipo: 'fill', enun: 'Quantos números de 3 algarismos DIFERENTES se podem formar com os algarismos 1, 2, 3, 4 e 5?', resposta: '60', expl: 'Passo 1: ordem conta e sem repetir → arranjos de 5, 3 a 3. Passo 2: ⁵A₃ = 5×4×3 = 60.', tema: 'T1 · Combinatória' }
  ]
};
/* atribuir: deep-link mat12 */
function _mat12DeepLinkAuto(){ try{ var p=new URLSearchParams(window.location.search); if(p.get('abrir')==='fichas'){ var cs=(p.get('caps')||'').split(',').filter(Boolean); if(_mat12gf){ _mat12gf.caps={}; cs.forEach(function(n){ _mat12gf.caps[parseInt(n,10)]=true; }); if(p.get('dif')) _mat12gf.dif=p.get('dif'); } if(p.get('tarefa'))setTimeout(function(){tarefaEntregaBar(p.get('tarefa'),'Ficha concluída');},400); setTimeout(function(){ mat12SwitchTab('fichas',null); },350); return; }
    if(p.get('abrir')==='jogos'){ var jc=parseInt(p.get('cap'),10); if(jc&&_mat12Prat) _mat12Prat.cap=jc; if(p.get('tarefa'))setTimeout(function(){tarefaEntregaBar(p.get('tarefa'),'Jogo concluído');},400); setTimeout(function(){ mat12SwitchTab('jogos',null); var jg=p.get('jogo'); if(jg&&typeof gTabSwitch==='function')setTimeout(function(){try{gTabSwitch('mat12-jogos-app',jg);}catch(e){}},250); },350); return; }
    if(p.get('abrir')!=='praticar')return; if(p.get('tarefa')){_mat12TarefaAtiva=p.get('tarefa');_mat12TarefaResp={};} var cap=parseInt(p.get('cap'),10)||1, st=parseInt(p.get('st'),10)||0, nivel=p.get('nivel')||'medio'; _mat12Prat.cap=cap; _mat12Prat.st=st; _mat12Prat.nivel=nivel; _mat12Prat.sel={caps:[cap],stsByCap:(st?(function(){var o={};o[cap]=[st];return o;})():{})}; setTimeout(function(){ mat12SwitchTab('exercicios',null); if(typeof mat12GerarExercicios==='function') mat12GerarExercicios(); },350); }catch(e){} }
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',function(){setTimeout(_mat12DeepLinkAuto,300);});else setTimeout(_mat12DeepLinkAuto,300);

function mat12AtribuirFicha(){
  var caps=[]; _mat12CapMeta.forEach(function(m){ if(_mat12gf.caps[m.n]) caps.push(m.n); });
  if(!caps.length){ var st=document.getElementById('mat12-fichas-status'); if(st) st.textContent='Escolhe pelo menos um capítulo para atribuir.'; return null; }
  var nomes=caps.map(function(n){ var mm=_mat12CapMeta[n-1]||{}; return mm.label||('Cap. '+n); });
  return { curso:'mat12', cursoNome:'Matemática 11.º', tema:caps.join('.'), temaNome:nomes.join(', '), sub:'', subNome:'', tipo:'ficha', nivel:_mat12gf.dif };
}

function mat12EntregarTarefa(){
  if(!_mat12TarefaAtiva||typeof Turmas==='undefined'||!Turmas.guardarResultado)return;
  var qids=Object.keys(_mat12TarefaResp||{});
  if(!qids.length){alert('Responde a pelo menos uma pergunta antes de entregar.');return;}
  var certas=0,detalhe=[];
  qids.forEach(function(qid,i){ var ok=!!_mat12TarefaResp[qid]; if(ok)certas++; var ex=_mat12Prat.exs[i]||{}; detalhe.push({q:(ex.enun||ex.pergunta||('Pergunta '+(i+1))),certo:ok}); });
  Turmas.guardarResultado(_mat12TarefaAtiva,certas,qids.length,detalhe).then(function(){
    if(typeof eduToast==='function')eduToast('Trabalho entregue! Acertaste '+certas+' de '+qids.length+'. \u2705','success'); else alert('Entregue! '+certas+'/'+qids.length);
    _mat12TarefaAtiva=null; _mat12TarefaResp={}; mat12GerarExercicios();
  }).catch(function(e){alert(e.message||'Não foi possível entregar.');});
}
