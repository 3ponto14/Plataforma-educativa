/* ════════════════════════════════════════════════════════════════
   MAT11 HUB - Matemática A · 12.º ano (6 capítulos)
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
// ═══ FLASHCARDS / TEORIA por capítulo (12.º ano) ═══
// ═══ FLASHCARDS / TEORIA por capítulo (12.º ano · Matemática A) ═══
// ═══ FLASHCARDS / TEORIA por capítulo (12.º ano · Matemática A) ═══
var _mat12Cards = {
  // ── Cap 1 · Cálculo Combinatório ──
  1: [
    { st: 1, tag: 'Definição', q: 'O que é um arranjo sem repetição?', a: 'Uma sequência ORDENADA de p elementos escolhidos de n distintos, sem repetir. ⁿAₚ = n!/(n−p)!.' },
    { st: 1, tag: 'Fórmula', q: 'Arranjos com repetição', a: 'Sequências ordenadas de p elementos de n, podendo repetir: n^p.' },
    { st: 1, tag: 'Definição', q: 'O que é uma permutação?', a: 'Uma ordenação de TODOS os n elementos. Pₙ = n! = ⁿAₙ.' },
    { st: 1, tag: 'Fórmula', q: 'Definição de fatorial', a: 'n! = n × (n−1) × … × 2 × 1, com 0! = 1 por convenção.' },
    { st: 2, tag: 'Definição', q: 'O que é uma combinação?', a: 'Um subconjunto NÃO ordenado de p elementos de n distintos. ⁿCₚ = n!/(p!(n−p)!).' },
    { st: 2, tag: 'Regra', q: 'Quando uso arranjos e quando uso combinações?', a: 'Se a ORDEM importa → arranjos. Se a ordem NÃO importa → combinações.' },
    { st: 2, tag: 'Propriedade', q: 'Propriedade de simetria das combinações', a: 'ⁿCₚ = ⁿC₍ₙ₋ₚ₎. Ex.: ¹⁰C₃ = ¹⁰C₇.' },
    { st: 2, tag: 'Propriedade', q: 'Casos particulares das combinações', a: 'ⁿC₀ = ⁿCₙ = 1;  ⁿC₁ = n.' },
    { st: 3, tag: 'Fórmula', q: 'Binómio de Newton', a: '(a+b)ⁿ = Σ (ⁿCₖ) a^(n−k) b^k, com k de 0 a n.' },
    { st: 3, tag: 'Definição', q: 'O que é o triângulo de Pascal?', a: 'Disposição dos coeficientes binomiais ⁿCₖ; cada número é a soma dos dois acima. Linha n dá os coeficientes de (a+b)ⁿ.' },
    { st: 3, tag: 'Propriedade', q: 'Regra de Pascal (lei do triângulo)', a: 'ⁿCₖ + ⁿC₍ₖ₊₁₎ = ⁿ⁺¹C₍ₖ₊₁₎.' },
    { st: 3, tag: 'Propriedade', q: 'Soma de uma linha do triângulo de Pascal', a: 'ⁿC₀ + ⁿC₁ + … + ⁿCₙ = 2ⁿ (número de subconjuntos de um conjunto com n elementos).' },
    { st: 1, tag: 'Exemplo', q: 'De quantas formas 5 pessoas se sentam numa fila?', a: 'P₅ = 5! = 120.' },
    { st: 2, tag: 'Exemplo', q: 'Quantas comissões de 3 em 10 pessoas?', a: '¹⁰C₃ = 120 (a ordem não conta).' },
    { st: 1, tag: 'Exemplo', q: 'Quantos códigos de 3 algarismos distintos com {1..9}?', a: '⁹A₃ = 9×8×7 = 504 (ordenado, sem repetir).' },
    { st: 3, tag: 'Exemplo', q: 'Termo geral no desenvolvimento de (a+b)ⁿ', a: 'O termo de ordem k+1 é ⁿCₖ · a^(n−k) · b^k.' }
  ],
  // ── Cap 2 · Probabilidades ──
  2: [
    { st: 1, tag: 'Definição', q: 'Lei de Laplace', a: 'Em equiprobabilidade: P(A) = casos favoráveis ÷ casos possíveis.' },
    { st: 1, tag: 'Definição', q: 'Axiomas de probabilidade', a: '0 ≤ P(A) ≤ 1;  P(Ω) = 1;  se A e B incompatíveis, P(A∪B) = P(A) + P(B).' },
    { st: 1, tag: 'Fórmula', q: 'Probabilidade da união (regra geral)', a: 'P(A∪B) = P(A) + P(B) − P(A∩B).' },
    { st: 1, tag: 'Fórmula', q: 'Probabilidade do acontecimento contrário', a: 'P(Ā) = 1 − P(A).' },
    { st: 2, tag: 'Fórmula', q: 'Probabilidade condicionada', a: 'P(A|B) = P(A∩B) ÷ P(B), com P(B) > 0. "Probabilidade de A sabendo que B ocorreu."' },
    { st: 2, tag: 'Fórmula', q: 'Regra do produto', a: 'P(A∩B) = P(B) × P(A|B) = P(A) × P(B|A).' },
    { st: 2, tag: 'Definição', q: 'Teorema da probabilidade total', a: 'Se B e B̄ partem Ω: P(A) = P(A|B)P(B) + P(A|B̄)P(B̄).' },
    { st: 3, tag: 'Definição', q: 'Acontecimentos independentes', a: 'A e B são independentes se P(A∩B) = P(A) × P(B), ou seja P(A|B) = P(A).' },
    { st: 3, tag: 'Regra', q: 'Incompatíveis ≠ independentes', a: 'Incompatíveis: A∩B = ∅ (não ocorrem juntos). Independentes: um não afeta o outro. Em geral, incompatíveis com P>0 são DEPENDENTES.' },
    { st: 1, tag: 'Definição', q: 'Acontecimentos incompatíveis (disjuntos)', a: 'A∩B = ∅: P(A∩B) = 0; logo P(A∪B) = P(A) + P(B).' },
    { st: 2, tag: 'Estratégia', q: 'Como ler uma tabela de dupla entrada para P(A|B)?', a: 'P(A|B) = (casos em A∩B) ÷ (total da linha/coluna de B).' },
    { st: 3, tag: 'Definição', q: 'Distribuição de probabilidade', a: 'Tabela que associa a cada valor de uma variável a sua probabilidade; a soma de todas é 1.' },
    { st: 1, tag: 'Exemplo', q: 'P de sair par num dado?', a: '{2,4,6} → 3/6 = 1/2.' },
    { st: 2, tag: 'Exemplo', q: 'Dois ases seguidos de um baralho (sem reposição)?', a: '4/52 × 3/51 = 12/2652 = 1/221.' },
    { st: 3, tag: 'Exemplo', q: 'P(A∪B) com P(A)=0,5, P(B)=0,4, P(A∩B)=0,2', a: '0,5 + 0,4 − 0,2 = 0,7.' },
    { st: 2, tag: 'Exemplo', q: 'P(A|B) com P(A∩B)=0,2 e P(B)=0,5', a: '0,2 ÷ 0,5 = 0,4.' }
  ],
  // ── Cap 3 · Funções Reais de Variável Real ──
  3: [
    { st: 1, tag: 'Definição', q: 'O que é o limite de f(x) quando x→a?', a: 'O valor para que f(x) tende quando x se aproxima de a. Existe se os limites laterais forem iguais.' },
    { st: 1, tag: 'Regra', q: 'Indeterminações mais comuns', a: '0/0, ∞/∞, ∞−∞, 0×∞, 1^∞. É preciso levantar (fatorizar, racionalizar, regras…).' },
    { st: 1, tag: 'Estratégia', q: 'Limite de função racional em ±∞', a: 'Compara os graus: numerador < denominador → 0; iguais → quociente dos coeficientes; maior → ±∞.' },
    { st: 1, tag: 'Estratégia', q: 'Levantar 0/0 numa função racional', a: 'Fatoriza numerador e denominador e simplifica o fator comum (x−a).' },
    { st: 2, tag: 'Definição', q: 'Função contínua num ponto', a: 'f é contínua em a se existe f(a), existe lim(x→a)f(x), e são iguais.' },
    { st: 2, tag: 'Teorema', q: 'Teorema de Bolzano-Cauchy', a: 'Se f é contínua em [a,b] e f(a), f(b) têm sinais contrários, então existe c em ]a,b[ com f(c)=0.' },
    { st: 2, tag: 'Teorema', q: 'Teorema de Weierstrass', a: 'Uma função contínua num intervalo fechado [a,b] tem máximo e mínimo absolutos nesse intervalo.' },
    { st: 3, tag: 'Definição', q: 'Assíntota vertical', a: 'x = a é assíntota vertical se lim(x→a) f(x) = ±∞ (em geral nos pontos onde a função não está definida).' },
    { st: 3, tag: 'Fórmula', q: 'Assíntota não vertical (oblíqua/horizontal)', a: 'y = mx + b, com m = lim(x→±∞) f(x)/x e b = lim(x→±∞) [f(x) − mx]. Se m=0, é horizontal.' },
    { st: 4, tag: 'Definição', q: 'Derivada de f num ponto', a: "f'(a) = lim(h→0) [f(a+h) − f(a)]/h. É o declive da reta tangente em (a, f(a))." },
    { st: 4, tag: 'Regra', q: 'Sinal da 1.ª derivada e monotonia', a: "f'>0 → f crescente; f'<0 → f decrescente; f'=0 com mudança de sinal → extremo." },
    { st: 4, tag: 'Regra', q: 'Sinal da 2.ª derivada e concavidade', a: "f''>0 → concavidade para cima; f''<0 → para baixo; f''=0 com mudança → ponto de inflexão." },
    { st: 1, tag: 'Exemplo', q: 'lim(x→+∞) (3x²+1)/(x²−5)', a: 'Graus iguais → quociente dos coeficientes dos termos de maior grau = 3/1 = 3.' },
    { st: 1, tag: 'Exemplo', q: 'lim(x→2) (x²−4)/(x−2)', a: 'Fatoriza: (x−2)(x+2)/(x−2) = x+2 → 4.' },
    { st: 2, tag: 'Exemplo', q: 'Aplica Bolzano a f(x)=x³−x−1 em [1,2]', a: 'f(1)=−1<0 e f(2)=5>0; f contínua → existe zero em ]1,2[.' },
    { st: 4, tag: 'Exemplo', q: "Derivada de f(x)=x³−2x", a: "f'(x)=3x²−2." }
  ],
  // ── Cap 4 · Trigonometria e Funções Trigonométricas ──
  4: [
    { st: 1, tag: 'Fórmula', q: 'Fórmula fundamental da trigonometria', a: 'sen²x + cos²x = 1.' },
    { st: 1, tag: 'Fórmula', q: 'Seno e cosseno da soma', a: 'sen(a+b)=sen a cos b + cos a sen b;  cos(a+b)=cos a cos b − sen a sen b.' },
    { st: 1, tag: 'Fórmula', q: 'Seno e cosseno do ângulo duplo', a: 'sen(2a)=2 sen a cos a;  cos(2a)=cos²a − sen²a = 2cos²a − 1 = 1 − 2sen²a.' },
    { st: 1, tag: 'Fórmula', q: 'Fórmulas de diferença', a: 'sen(a−b)=sen a cos b − cos a sen b;  cos(a−b)=cos a cos b + sen a sen b.' },
    { st: 2, tag: 'Fórmula', q: 'Derivada do seno e do cosseno', a: "(sen x)' = cos x;  (cos x)' = −sen x." },
    { st: 2, tag: 'Fórmula', q: 'Derivada de funções trigonométricas compostas', a: "(sen u)' = u' cos u;  (cos u)' = −u' sen u, pela regra da cadeia." },
    { st: 2, tag: 'Fórmula', q: 'Derivada da tangente', a: "(tg x)' = 1/cos²x = sec²x." },
    { st: 3, tag: 'Fórmula', q: 'Limite notável do seno', a: 'lim(x→0) sen(x)/x = 1. Base para as derivadas trigonométricas.' },
    { st: 3, tag: 'Fórmula', q: 'Outro limite notável', a: 'lim(x→0) (1 − cos x)/x = 0.' },
    { st: 1, tag: 'Definição', q: 'Oscilador harmónico', a: 'Movimento descrito por x(t)=A sen(ωt+φ): A=amplitude, ω=pulsação, φ=fase. Período T = 2π/ω.' },
    { st: 1, tag: 'Definição', q: 'Radiano', a: 'Ângulo cujo arco tem comprimento igual ao raio. 180° = π rad.' },
    { st: 2, tag: 'Definição', q: 'Equação diferencial do oscilador', a: "x'' = −ω²x: a 2.ª derivada é proporcional (com sinal −) à própria função." },
    { st: 1, tag: 'Exemplo', q: 'sen(2x) em x=π/4', a: 'sen(π/2) = 1.' },
    { st: 2, tag: 'Exemplo', q: "Derivada de f(x)=sen(3x)", a: "f'(x)=3cos(3x)." },
    { st: 3, tag: 'Exemplo', q: 'lim(x→0) sen(5x)/x', a: '= 5 · lim sen(5x)/(5x) = 5×1 = 5.' },
    { st: 1, tag: 'Exemplo', q: 'Período de x(t)=sen(2t)', a: 'T = 2π/2 = π.' }
  ],
  // ── Cap 5 · Funções Exponenciais e Logarítmicas ──
  5: [
    { st: 1, tag: 'Definição', q: 'O que é o número de Neper (e)?', a: 'e ≈ 2,718…  É o limite de (1 + 1/n)ⁿ quando n→+∞. Base da exponencial natural.' },
    { st: 1, tag: 'Propriedade', q: 'Propriedades das potências (exponencial)', a: 'aˣ·aʸ = aˣ⁺ʸ;  aˣ/aʸ = aˣ⁻ʸ;  (aˣ)ʸ = aˣʸ;  a⁰ = 1.' },
    { st: 1, tag: 'Definição', q: 'Função exponencial', a: 'f(x)=aˣ com a>0, a≠1. Se a>1 é crescente; se 0<a<1 é decrescente. Contradomínio ]0, +∞[.' },
    { st: 2, tag: 'Definição', q: 'Logaritmo: definição', a: 'log_a(b) = c  ⟺  aᶜ = b (a>0, a≠1, b>0). ln = log de base e.' },
    { st: 2, tag: 'Propriedade', q: 'Propriedades dos logaritmos', a: 'log(xy)=log x+log y;  log(x/y)=log x−log y;  log(xⁿ)=n log x;  log_a(a)=1;  log_a(1)=0.' },
    { st: 2, tag: 'Fórmula', q: 'Mudança de base', a: 'log_a(b) = log_c(b) / log_c(a). Útil para calcular na calculadora (base 10 ou e).' },
    { st: 3, tag: 'Estratégia', q: 'Resolver aˣ = b', a: 'Aplica logaritmo a ambos os lados: x = log_a(b) = ln b / ln a.' },
    { st: 3, tag: 'Estratégia', q: 'Resolver uma equação logarítmica', a: 'Junta os logs num só, passa à forma exponencial e VERIFICA o domínio (argumentos > 0).' },
    { st: 1, tag: 'Fórmula', q: 'Derivada da exponencial', a: "(eˣ)' = eˣ;  (aˣ)' = aˣ · ln a;  (e^u)' = u' e^u." },
    { st: 2, tag: 'Fórmula', q: 'Derivada do logaritmo', a: "(ln x)' = 1/x;  (ln u)' = u'/u;  (log_a x)' = 1/(x ln a)." },
    { st: 3, tag: 'Fórmula', q: 'Limites notáveis (exponencial/log)', a: 'lim(x→+∞) eˣ/xⁿ = +∞ (a exponencial cresce mais que qualquer potência); lim(x→0) (eˣ−1)/x = 1.' },
    { st: 1, tag: 'Definição', q: 'Função logarítmica', a: 'f(x)=log_a x é a inversa da exponencial. Domínio ]0,+∞[, contradomínio ℝ. Assíntota vertical x=0.' },
    { st: 1, tag: 'Exemplo', q: 'log₂(8)', a: '2³ = 8 → log₂(8) = 3.' },
    { st: 3, tag: 'Exemplo', q: 'Resolve 2ˣ = 16', a: '2ˣ = 2⁴ → x = 4.' },
    { st: 2, tag: 'Exemplo', q: 'ln(e³)', a: '= 3, porque ln e = 1.' },
    { st: 1, tag: 'Exemplo', q: "Derivada de f(x)=e^(2x)", a: "f'(x)=2e^(2x)." }
  ],
  // ── Cap 6 · Primitivas e Cálculo Integral ──
  6: [
    { st: 1, tag: 'Definição', q: 'O que é uma primitiva de f?', a: "Uma função F tal que F'(x) = f(x). As primitivas diferem por uma constante: F(x) + C." },
    { st: 1, tag: 'Fórmula', q: 'Primitiva de uma potência', a: 'P(xⁿ) = x^(n+1)/(n+1) + C, para n ≠ −1.' },
    { st: 1, tag: 'Fórmula', q: 'Primitiva de 1/x', a: 'P(1/x) = ln|x| + C.' },
    { st: 1, tag: 'Fórmula', q: 'Primitivas elementares', a: 'P(eˣ)=eˣ+C;  P(sen x)=−cos x+C;  P(cos x)=sen x+C.' },
    { st: 1, tag: 'Propriedade', q: 'Linearidade da primitivação', a: 'P(af + bg) = a·P(f) + b·P(g): primitiva-se termo a termo.' },
    { st: 2, tag: 'Definição', q: 'Integral definido', a: '∫ₐᵇ f(x) dx representa a área algébrica entre o gráfico de f e o eixo Ox, de a a b.' },
    { st: 2, tag: 'Teorema', q: 'Teorema Fundamental do Cálculo (Barrow)', a: '∫ₐᵇ f(x) dx = F(b) − F(a), onde F é uma primitiva de f.' },
    { st: 2, tag: 'Propriedade', q: 'Propriedades do integral definido', a: '∫ₐᵃ f = 0;  ∫ₐᵇ f = −∫ᵦᵃ f;  ∫ₐᵇ f = ∫ₐᶜ f + ∫ᶜᵇ f.' },
    { st: 3, tag: 'Estratégia', q: 'Área entre o gráfico e o eixo Ox', a: 'A = ∫ₐᵇ |f(x)| dx. Onde f<0, a área conta-se em módulo (ou separa-se nos zeros).' },
    { st: 3, tag: 'Estratégia', q: 'Área entre duas curvas f e g', a: 'A = ∫ₐᵇ [f(x) − g(x)] dx, com f ≥ g no intervalo (senão usa-se o módulo).' },
    { st: 2, tag: 'Regra', q: 'Sinal do integral', a: 'Se f ≥ 0 em [a,b], ∫ₐᵇ f ≥ 0. Onde f é negativa, o integral é negativo (área "abaixo" do eixo).' },
    { st: 1, tag: 'Exemplo', q: 'Primitiva de f(x)=x²', a: 'x³/3 + C.' },
    { st: 2, tag: 'Exemplo', q: '∫₀¹ x² dx', a: '[x³/3]₀¹ = 1/3 − 0 = 1/3.' },
    { st: 2, tag: 'Exemplo', q: '∫₁ᵉ (1/x) dx', a: '[ln|x|]₁ᵉ = ln e − ln 1 = 1 − 0 = 1.' },
    { st: 1, tag: 'Exemplo', q: 'Primitiva de f(x)=cos x', a: 'sen x + C.' },
    { st: 3, tag: 'Exemplo', q: 'Área sob y=2x entre x=0 e x=3', a: '∫₀³ 2x dx = [x²]₀³ = 9.' }
  ],
  // ── Cap 7 · Números Complexos ──
  7: [
    { st: 1, tag: 'Definição', q: 'Unidade imaginária', a: 'i é o número tal que i² = −1. Logo √(−1) = i.' },
    { st: 1, tag: 'Definição', q: 'Forma algébrica de um complexo', a: 'z = a + bi, com a = parte real Re(z) e b = parte imaginária Im(z).' },
    { st: 1, tag: 'Definição', q: 'Conjugado de um complexo', a: 'Se z = a + bi, o conjugado é z̄ = a − bi. Reflete z no eixo real.' },
    { st: 1, tag: 'Fórmula', q: 'Módulo de um complexo', a: '|z| = √(a² + b²). É a distância de z à origem no plano de Argand.' },
    { st: 1, tag: 'Regra', q: 'Potências de i', a: 'i¹=i, i²=−1, i³=−i, i⁴=1 e repete com período 4. Ex.: i²⁷ = i^(4×6+3) = i³ = −i.' },
    { st: 2, tag: 'Estratégia', q: 'Como dividir complexos?', a: 'Multiplica numerador e denominador pelo conjugado do denominador. Ex.: 1/(a+bi) = (a−bi)/(a²+b²).' },
    { st: 2, tag: 'Definição', q: 'Forma trigonométrica', a: 'z = ρ(cos θ + i sen θ) = ρ cis θ, com ρ = |z| e θ = argumento (ângulo).' },
    { st: 2, tag: 'Fórmula', q: 'Argumento de um complexo', a: 'θ tal que cos θ = a/ρ e sen θ = b/ρ. Atenção ao quadrante onde z se encontra.' },
    { st: 3, tag: 'Fórmula', q: 'Produto na forma trigonométrica', a: 'ρ₁cis θ₁ × ρ₂cis θ₂ = (ρ₁ρ₂) cis(θ₁+θ₂): multiplicam-se módulos e somam-se argumentos.' },
    { st: 3, tag: 'Fórmula', q: 'Fórmula de De Moivre', a: '(ρ cis θ)ⁿ = ρⁿ cis(nθ).' },
    { st: 3, tag: 'Fórmula', q: 'Raízes de índice n', a: 'Um complexo tem n raízes de índice n: ⁿ√ρ · cis((θ+2kπ)/n), k=0,…,n−1. Formam um polígono regular.' },
    { st: 2, tag: 'Definição', q: 'Plano de Argand (complexo)', a: 'Plano onde z=a+bi é o ponto (a,b): eixo Ox = parte real, eixo Oy = parte imaginária.' },
    { st: 1, tag: 'Exemplo', q: '(2+3i) + (1−i)', a: '= 3 + 2i (soma-se parte real com real e imaginária com imaginária).' },
    { st: 1, tag: 'Exemplo', q: '(1+i)(1−i)', a: '= 1 − i² = 1 − (−1) = 2.' },
    { st: 1, tag: 'Exemplo', q: 'Módulo de z = 3 + 4i', a: '√(9+16) = √25 = 5.' },
    { st: 3, tag: 'Exemplo', q: 'i¹⁰⁰', a: '100 = 4×25 → i¹⁰⁰ = (i⁴)²⁵ = 1.' }
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
  if (titles[tab]) document.title = 'Mat. 12.º ' + titles[tab] + ' · 3ponto14';

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
  if (cap === 7 && typeof buildEx_m12c7 === 'function') return buildEx_m12c7;
  return null;
}
var _mat12TemasCount = { 1: 3, 2: 3, 3: 4, 4: 3, 5: 3, 6: 3, 7: 3 };

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
  1: { 1: ['1'], 2: ['2'], 3: ['3'] },        // Arranjos/permutações · Combinações · Binómio
  2: { 1: ['1'], 2: ['2'], 3: ['3'] },        // Laplace/axiomas · Condicionada · Independentes
  3: { 1: ['1'], 2: ['2'], 3: ['3'], 4: ['4'] }, // Limites · Continuidade/Bolzano · Assíntotas · Derivadas
  4: { 1: ['1'], 2: ['2'], 3: ['3'] },        // Fórmulas · Derivadas sen/cos · Limites notáveis
  5: { 1: ['1'], 2: ['2'], 3: ['3'] },        // Exponencial · Logarítmica · Equações
  6: { 1: ['1'], 2: ['2'], 3: ['3'] },        // Primitivas · Integral · Áreas
  7: { 1: ['1'], 2: ['2'], 3: ['3'] }         // Forma algébrica · Forma trigonométrica · Operações
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
    Atribuir.montar('mat12-atribuir', { curso: 'mat12', cursoNome: 'Matemática 12.º', tema: String(cap), temaNome: (_cm.label || ('Cap. ' + cap)), sub: String(_stA || ''), subNome: _sn, tipo: 'quiz', nivel: _mat12Prat.nivel });
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

// Regista atividade no ProgressManager (XP + streak), com capId próprio do 12.º ano
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
  (function(){ var pj=document.getElementById('mat12p-jogos'); if(pj && !document.getElementById('mat12-jogos-atr')){ var d=document.createElement('div'); d.id='mat12-jogos-atr'; d.style.margin='0 0 .8rem'; if(pj.firstChild) pj.insertBefore(d,pj.firstChild); else pj.appendChild(d); } if(typeof Atribuir!=='undefined'&&Atribuir.montar) Atribuir.montar('mat12-jogos-atr',{curso:'mat12',cursoNome:'Matemática 12.º',tipo:'jogo',nivel:'',caps:_mat12CapMeta.map(function(mm){return {n:mm.n,label:mm.label};})}); })();
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

  // Resumo global (gradiente terracota do 12.º ano)
  h += '<div style="background:var(--m12c1-base);border:1.5px solid var(--m12c1-mid);border-radius:16px;padding:1.1rem 1.25rem;margin-bottom:1.25rem;display:flex;align-items:center;gap:1rem;flex-wrap:wrap">'
     +   '<div style="width:52px;height:52px;border-radius:50%;background:var(--m12c1-mid);display:flex;align-items:center;justify-content:center;flex-shrink:0"><i class="ph ' + icon + '" style="font-size:1.4rem;color:#fff"></i></div>'
     +   '<div style="flex:1;min-width:180px">'
     +     '<div style="font-family:\'Cormorant Garamond\',serif;font-size:1.6rem;font-weight:900;color:var(--ink);line-height:1">' + (totalT > 0 ? globalPct + '<span style="font-size:1rem">%</span>' : '-') + '</div>'
     +     '<div style="font-size:.82rem;color:var(--ink2);margin-top:3px">' + msg + '</div>'
     +   '</div>'
     +   '<button class="btn btn-ghost" onclick="mat12ProgDownloadPDF()" style="font-size:.78rem;padding:7px 14px;display:inline-flex;align-items:center;gap:5px"><i class="ph ph-file-text"></i>Relatório PDF</button>'
     + '</div>';

  // XP + streak do ProgressManager (apenas dos capítulos do 12.º ano)
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
  if (typeof window !== 'undefined' && window.confirm && !window.confirm('Limpar todo o progresso do 12.º ano? Esta ação não pode ser desfeita.')) return;
  for (var cap = 1; cap <= _mat12CapMeta.length; cap++) { try { localStorage.removeItem('edupt_mat12_cap' + cap); } catch (e) {} }
  // Remove só os capítulos do 12.º ano (m12cap*) do ProgressManager, preservando os outros anos.
  try {
    var raw = localStorage.getItem('edupt_progress_v2');
    if (raw) {
      var d = JSON.parse(raw);
      if (d.caps) { Object.keys(d.caps).forEach(function(k) { if (k.indexOf('m12cap') === 0) delete d.caps[k]; }); }
      localStorage.setItem('edupt_progress_v2', JSON.stringify(d));
    }
  } catch (e) {}
  mat12RenderProgresso();
  if (typeof eduToast === 'function') eduToast('Progresso do 12.º ano limpo.', 'ok');
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
    + '<h1 style="font-size:20px;margin:0 0 4px">Relatório de Progresso · Matemática 12.º Ano</h1>'
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
  if (_mat12gf.tipos.solucoes && eduPodeSolucoes() && solucoes.length) {
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
    + '<div><h1 style="font-size:18px;margin:0">Ficha de Trabalho · Matemática 12.º Ano</h1>'
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
   GERADORES DE EXERCÍCIOS - Matemática A · 12.º ano
   Reutilizam os helpers genéricos acima (rnd_m81, shuffle_m81…).
   ════════════════════════════════════════════════════════════════ */

// ═══════════════════════════════════════════════════════════════
//   GERADORES DE EXERCÍCIOS · Matemática A · 12.º ano (7 domínios)
//   Cada buildEx_m12cN(tema, tipo, dif) → {enun, tipo, opcoes?, resposta, expl, tema}
//   Helpers usados: rnd_m81, reduce_m81, fmtFrac_m81, _fatorial_m12, _comb_m12, _arr_m12
// ═══════════════════════════════════════════════════════════════
function _fatorial_m12(n){ var r=1; for(var i=2;i<=n;i++) r*=i; return r; }
function _arr_m12(n,p){ var r=1; for(var i=0;i<p;i++) r*=(n-i); return r; }              // arranjos n A p
function _comb_m12(n,p){ return _arr_m12(n,p)/_fatorial_m12(p); }                          // combinações n C p

// ═══ CAP 1 · Cálculo Combinatório ═══
// Temas: 1 Arranjos/Permutações · 2 Combinações · 3 Binómio/Pascal
function buildEx_m12c1(tema, tipo, dif) {
  tema = String(tema);
  if (tema === '1') {
    if (Math.random() < 0.5) {
      var nP = rnd_m81(3, 6);
      return { enun: 'De quantas formas diferentes se podem sentar <strong>' + nP + ' pessoas</strong> numa fila?',
        tipo: 'fill', resposta: String(_fatorial_m12(nP)),
        expl: 'É uma permutação: P' + nP + ' = ' + nP + '! = ' + _fatorial_m12(nP) + '.', tema: 'T1 · Permutações' };
    }
    var n = rnd_m81(5, 9), p = rnd_m81(2, 3);
    return { enun: 'Quantas sequências ordenadas de <strong>' + p + '</strong> elementos distintos se formam a partir de <strong>' + n + '</strong> elementos?',
      tipo: 'fill', resposta: String(_arr_m12(n, p)),
      expl: 'Arranjos sem repetição: ' + n + 'A' + p + ' = ' + n + '!/(' + n + '−' + p + ')! = ' + _arr_m12(n, p) + '.', tema: 'T1 · Arranjos' };
  }
  if (tema === '2') {
    var n2 = rnd_m81(5, 10), p2 = rnd_m81(2, 3);
    return { enun: 'Quantos grupos (não ordenados) de <strong>' + p2 + '</strong> se podem formar a partir de <strong>' + n2 + '</strong> pessoas?',
      tipo: 'fill', resposta: String(_comb_m12(n2, p2)),
      expl: 'Combinações (ordem não conta): ' + n2 + 'C' + p2 + ' = ' + _comb_m12(n2, p2) + '.', tema: 'T2 · Combinações' };
  }
  // tema 3 · binómio / Pascal
  if (Math.random() < 0.5) {
    var nB = rnd_m81(4, 8);
    return { enun: 'Quantos termos tem o desenvolvimento de <strong>(a + b)<sup>' + nB + '</sup></strong>?',
      tipo: 'fill', resposta: String(nB + 1),
      expl: '(a+b)ⁿ tem n+1 termos: ' + nB + ' + 1 = ' + (nB + 1) + '.', tema: 'T3 · Binómio' };
  }
  var nL = rnd_m81(3, 7);
  return { enun: 'Qual é a soma de todos os elementos da linha <strong>' + nL + '</strong> do triângulo de Pascal?',
    tipo: 'fill', resposta: String(Math.pow(2, nL)),
    expl: 'A soma da linha n é 2ⁿ = 2^' + nL + ' = ' + Math.pow(2, nL) + '.', tema: 'T3 · Pascal' };
}

// ═══ CAP 2 · Probabilidades ═══
// Temas: 1 Laplace/contrário · 2 União/condicionada · 3 Independentes
function buildEx_m12c2(tema, tipo, dif) {
  tema = String(tema);
  if (tema === '1') {
    var ctx = [
      { e: 'sair número par no lançamento de um dado', f: 3, t: 6 },
      { e: 'sair número maior que 4 num dado', f: 2, t: 6 },
      { e: 'tirar uma carta de copas de um baralho de 40', f: 10, t: 40 },
      { e: 'sair uma figura num naipe de 10 cartas', f: 3, t: 10 }
    ];
    var c = ctx[rnd_m81(0, ctx.length - 1)];
    var rr = reduce_m81(c.f, c.t);
    return { enun: 'Qual é a probabilidade de <strong>' + c.e + '</strong>? (fração irredutível)',
      tipo: 'fill_frac', resposta: fmtFrac_m81(rr[0], rr[1]),
      expl: 'P = casos favoráveis / casos possíveis = ' + c.f + '/' + c.t + ' = ' + fmtFrac_m81(rr[0], rr[1]) + '.', tema: 'T1 · Laplace' };
  }
  if (tema === '2') {
    // P(A|B) = P(A∩B)/P(B), frações com mesmo denominador
    var total = [8, 10, 12, 20][rnd_m81(0, 3)];
    var inter = rnd_m81(1, total / 2);
    var pbNum = rnd_m81(inter, total);
    var res = reduce_m81(inter, pbNum);
    return { enun: 'Sabendo que P(A ∩ B) = ' + inter + '/' + total + ' e P(B) = ' + pbNum + '/' + total + ', calcula P(A | B). (fração irredutível)',
      tipo: 'fill_frac', resposta: fmtFrac_m81(res[0], res[1]),
      expl: 'P(A|B) = P(A∩B)/P(B) = ' + inter + '/' + pbNum + ' = ' + fmtFrac_m81(res[0], res[1]) + '.', tema: 'T2 · Condicionada' };
  }
  // tema 3 · independentes: P(A∩B)=P(A)×P(B)
  var pa = [[1, 2], [1, 3], [2, 3], [1, 4], [3, 4]][rnd_m81(0, 4)];
  var pb = [[1, 2], [1, 3], [2, 5], [1, 5]][rnd_m81(0, 3)];
  var num = pa[0] * pb[0], den = pa[1] * pb[1];
  var r3 = reduce_m81(num, den);
  return { enun: 'A e B são independentes, com P(A) = ' + fmtFrac_m81(pa[0], pa[1]) + ' e P(B) = ' + fmtFrac_m81(pb[0], pb[1]) + '. Calcula P(A ∩ B). (fração irredutível)',
    tipo: 'fill_frac', resposta: fmtFrac_m81(r3[0], r3[1]),
    expl: 'Independentes: P(A∩B) = P(A) × P(B) = ' + fmtFrac_m81(pa[0], pa[1]) + ' × ' + fmtFrac_m81(pb[0], pb[1]) + ' = ' + fmtFrac_m81(r3[0], r3[1]) + '.', tema: 'T3 · Independentes' };
}

// ═══ CAP 3 · Funções Reais de Variável Real ═══
// Temas: 1 Limites · 2 Continuidade/Bolzano · 3 Assíntotas · 4 Derivadas
function buildEx_m12c3(tema, tipo, dif) {
  tema = String(tema);
  if (tema === '1') {
    if (Math.random() < 0.5) {
      // limite racional em +inf, graus iguais
      var a = rnd_m81(2, 6), b = rnd_m81(1, 5);
      var rl = reduce_m81(a, b);
      return { enun: 'Calcula <strong>lim<sub>x→+∞</sub> (' + a + 'x² + 1)/(' + b + 'x² − 3)</strong>. (fração irredutível)',
        tipo: 'fill_frac', resposta: fmtFrac_m81(rl[0], rl[1]),
        expl: 'Graus iguais → quociente dos coeficientes de maior grau = ' + a + '/' + b + ' = ' + fmtFrac_m81(rl[0], rl[1]) + '.', tema: 'T1 · Limites' };
    }
    // 0/0: (x²-k²)/(x-k) -> 2k
    var k = rnd_m81(2, 7);
    return { enun: 'Calcula <strong>lim<sub>x→' + k + '</sub> (x² − ' + (k * k) + ')/(x − ' + k + ')</strong>.',
      tipo: 'fill', resposta: String(2 * k),
      expl: 'Fatoriza: (x−' + k + ')(x+' + k + ')/(x−' + k + ') = x+' + k + ' → ' + (2 * k) + '.', tema: 'T1 · Limites' };
  }
  if (tema === '2') {
    // Bolzano: f(x)=x³+? com sinais opostos em [a,a+1]
    var aa = rnd_m81(1, 3);
    return { enun: 'A função f(x) = x³ − x − ' + (aa + 1) + ' é contínua. Em qual intervalo o Teorema de Bolzano garante um zero?',
      tipo: 'mc', opcoes: ['[' + aa + ', ' + (aa + 1) + ']', '[−1, 0]', '[0, 1]', '[' + (aa + 3) + ', ' + (aa + 4) + ']'],
      resposta: '[' + aa + ', ' + (aa + 1) + ']',
      expl: 'Bolzano exige f com sinais contrários nos extremos; isso ocorre em [' + aa + ', ' + (aa + 1) + '] (f muda de − para +).', tema: 'T2 · Bolzano' };
  }
  if (tema === '3') {
    // assíntota horizontal de função racional graus iguais
    var p = rnd_m81(2, 6), q = rnd_m81(1, 4);
    var rh = reduce_m81(p, q);
    return { enun: 'Qual é a assíntota horizontal do gráfico de <strong>f(x) = (' + p + 'x + 1)/(' + q + 'x − 2)</strong>?',
      tipo: 'fill_frac', resposta: 'y=' + fmtFrac_m81(rh[0], rh[1]),
      expl: 'Graus iguais → y = ' + p + '/' + q + ' = ' + fmtFrac_m81(rh[0], rh[1]) + '. (escreve y=valor)', tema: 'T3 · Assíntotas' };
  }
  // tema 4 · derivada de polinómio, avaliar em ponto
  var c2 = rnd_m81(2, 5), c1 = rnd_m81(1, 6), x0 = rnd_m81(1, 4);
  var deriv = 2 * c2 * x0 - c1;
  return { enun: 'Sendo f(x) = ' + c2 + 'x² − ' + c1 + 'x + 3, calcula f′(' + x0 + ').',
    tipo: 'fill', resposta: String(deriv),
    expl: 'f′(x) = ' + (2 * c2) + 'x − ' + c1 + '; f′(' + x0 + ') = ' + (2 * c2) + '×' + x0 + ' − ' + c1 + ' = ' + deriv + '.', tema: 'T4 · Derivadas' };
}

// ═══ CAP 4 · Trigonometria e Funções Trigonométricas ═══
// Temas: 1 Valores/fórmulas · 2 Derivadas sen/cos · 3 Limites notáveis
function buildEx_m12c4(tema, tipo, dif) {
  tema = String(tema);
  if (tema === '1') {
    // ângulo duplo: sen(2a)=2 sen a cos a com (sen,cos) conhecidos
    var pares = [[0.6, 0.8], [0.8, 0.6]];
    var pr = pares[rnd_m81(0, 1)];
    var d2 = (2 * pr[0] * pr[1]); // sen(2a)
    return { enun: 'Sendo sen(a) = ' + String(pr[0]).replace('.', ',') + ' e cos(a) = ' + String(pr[1]).replace('.', ',') + ', calcula sen(2a). (usa sen 2a = 2 sen a cos a)',
      tipo: 'fill', resposta: String(d2).replace('.', ','),
      expl: 'sen(2a) = 2 × ' + String(pr[0]).replace('.', ',') + ' × ' + String(pr[1]).replace('.', ',') + ' = ' + String(d2).replace('.', ',') + '.', tema: 'T1 · Fórmulas' };
  }
  if (tema === '2') {
    // derivada de sen(kx) ou cos(kx) em x: forma simbólica
    var k = rnd_m81(2, 6);
    if (Math.random() < 0.5) {
      return { enun: 'Qual é a derivada de <strong>f(x) = sen(' + k + 'x)</strong>?',
        tipo: 'mc', opcoes: [k + 'cos(' + k + 'x)', 'cos(' + k + 'x)', '−' + k + 'cos(' + k + 'x)', k + 'sen(' + k + 'x)'],
        resposta: k + 'cos(' + k + 'x)',
        expl: '(sen u)′ = u′ cos u, com u = ' + k + 'x → ' + k + 'cos(' + k + 'x).', tema: 'T2 · Derivadas sen/cos' };
    }
    return { enun: 'Qual é a derivada de <strong>f(x) = cos(' + k + 'x)</strong>?',
      tipo: 'mc', opcoes: ['−' + k + 'sen(' + k + 'x)', k + 'sen(' + k + 'x)', '−sen(' + k + 'x)', k + 'cos(' + k + 'x)'],
      resposta: '−' + k + 'sen(' + k + 'x)',
      expl: '(cos u)′ = −u′ sen u, com u = ' + k + 'x → −' + k + 'sen(' + k + 'x).', tema: 'T2 · Derivadas sen/cos' };
  }
  // tema 3 · limite notável lim sen(kx)/x = k
  var k3 = rnd_m81(2, 8);
  return { enun: 'Calcula <strong>lim<sub>x→0</sub> sen(' + k3 + 'x)/x</strong>.',
    tipo: 'fill', resposta: String(k3),
    expl: 'lim sen(' + k3 + 'x)/x = ' + k3 + ' × lim sen(' + k3 + 'x)/(' + k3 + 'x) = ' + k3 + ' × 1 = ' + k3 + '.', tema: 'T3 · Limites notáveis' };
}

// ═══ CAP 5 · Funções Exponenciais e Logarítmicas ═══
// Temas: 1 Exponencial/equações · 2 Logaritmos · 3 Derivadas
function buildEx_m12c5(tema, tipo, dif) {
  tema = String(tema);
  if (tema === '1') {
    // a^x = a^k -> x=k
    var base = [2, 3, 5][rnd_m81(0, 2)], exp = rnd_m81(2, 5);
    return { enun: 'Resolve a equação <strong>' + base + '<sup>x</sup> = ' + Math.pow(base, exp) + '</strong>.',
      tipo: 'fill', resposta: String(exp),
      expl: base + '^x = ' + base + '^' + exp + ' → x = ' + exp + '.', tema: 'T1 · Exponencial' };
  }
  if (tema === '2') {
    // log_b(b^k)=k
    var b = [2, 3, 10][rnd_m81(0, 2)], v = rnd_m81(2, 4);
    return { enun: 'Calcula <strong>log<sub>' + b + '</sub>(' + Math.pow(b, v) + ')</strong>.',
      tipo: 'fill', resposta: String(v),
      expl: 'log_' + b + '(' + b + '^' + v + ') = ' + v + '.', tema: 'T2 · Logaritmos' };
  }
  // tema 3 · derivada de e^(kx)
  var k = rnd_m81(2, 6);
  return { enun: 'Qual é a derivada de <strong>f(x) = e<sup>' + k + 'x</sup></strong>?',
    tipo: 'mc', opcoes: [k + 'e^(' + k + 'x)', 'e^(' + k + 'x)', k + 'x·e^(' + k + 'x)', '(' + k + 'x)e^(' + (k - 1) + 'x)'],
    resposta: k + 'e^(' + k + 'x)',
    expl: '(e^u)′ = u′ e^u, com u = ' + k + 'x → ' + k + 'e^(' + k + 'x).', tema: 'T3 · Derivadas' };
}

// ═══ CAP 6 · Primitivas e Cálculo Integral ═══
// Temas: 1 Primitivas · 2 Integral definido · 3 Áreas
function buildEx_m12c6(tema, tipo, dif) {
  tema = String(tema);
  if (tema === '1') {
    // primitiva de x^n -> x^(n+1)/(n+1)
    var n = rnd_m81(2, 5);
    return { enun: 'Qual é uma primitiva de <strong>f(x) = x<sup>' + n + '</sup></strong>?',
      tipo: 'mc', opcoes: ['x^' + (n + 1) + '/' + (n + 1) + ' + C', n + 'x^' + (n - 1) + ' + C', (n + 1) + 'x^' + n + ' + C', 'x^' + n + ' + C'],
      resposta: 'x^' + (n + 1) + '/' + (n + 1) + ' + C',
      expl: 'P(xⁿ) = x^(n+1)/(n+1) + C → x^' + (n + 1) + '/' + (n + 1) + ' + C.', tema: 'T1 · Primitivas' };
  }
  if (tema === '2') {
    // integral de a*x de 0 a b = a*b²/2  (escolher a,b com resultado inteiro)
    var a = [2, 4, 6][rnd_m81(0, 2)], b = rnd_m81(1, 4);
    var val = a * b * b / 2;
    return { enun: 'Calcula <strong>∫<sub>0</sub><sup>' + b + '</sup> ' + a + 'x dx</strong>.',
      tipo: 'fill', resposta: String(val),
      expl: '∫ ' + a + 'x dx = ' + a + 'x²/2 = ' + (a / 2) + 'x². De 0 a ' + b + ': ' + (a / 2) + '×' + (b * b) + ' = ' + val + '.', tema: 'T2 · Integral' };
  }
  // tema 3 · área sob y=x² de 0 a b = b³/3 (b múltiplo de 3 p/ inteiro)
  var bb = [3, 6][rnd_m81(0, 1)];
  var area = bb * bb * bb / 3;
  return { enun: 'Qual é a área entre o gráfico de <strong>y = x²</strong>, o eixo Ox e a reta x = ' + bb + '?',
    tipo: 'fill', resposta: String(area),
    expl: 'A = ∫₀^' + bb + ' x² dx = [x³/3]₀^' + bb + ' = ' + (bb * bb * bb) + '/3 = ' + area + '.', tema: 'T3 · Áreas' };
}

// ═══ CAP 7 · Números Complexos ═══
// Temas: 1 Operações forma algébrica · 2 Módulo/conjugado · 3 Potências de i
function buildEx_m12c7(tema, tipo, dif) {
  tema = String(tema);
  if (tema === '1') {
    var a = rnd_m81(1, 5), b = rnd_m81(1, 5), c = rnd_m81(1, 5), d = rnd_m81(1, 5);
    if (Math.random() < 0.5) {
      return { enun: 'Calcula <strong>(' + a + ' + ' + b + 'i) + (' + c + ' + ' + d + 'i)</strong>.',
        tipo: 'fill', resposta: (a + c) + '+' + (b + d) + 'i',
        expl: 'Soma parte real com real e imaginária com imaginária: (' + a + '+' + c + ') + (' + b + '+' + d + ')i = ' + (a + c) + '+' + (b + d) + 'i.', tema: 'T1 · Forma algébrica' };
    }
    // (a+bi)(a-bi) = a²+b² (real)
    return { enun: 'Calcula <strong>(' + a + ' + ' + b + 'i)(' + a + ' − ' + b + 'i)</strong>.',
      tipo: 'fill', resposta: String(a * a + b * b),
      expl: '(a+bi)(a−bi) = a² + b² = ' + (a * a) + ' + ' + (b * b) + ' = ' + (a * a + b * b) + '.', tema: 'T1 · Forma algébrica' };
  }
  if (tema === '2') {
    // módulo de a+bi com (a,b) terno pitagórico -> inteiro
    var ter = [[3, 4, 5], [6, 8, 10], [5, 12, 13], [8, 15, 17]][rnd_m81(0, 3)];
    return { enun: 'Calcula o módulo do número complexo <strong>z = ' + ter[0] + ' + ' + ter[1] + 'i</strong>.',
      tipo: 'fill', resposta: String(ter[2]),
      expl: '|z| = √(' + ter[0] + '² + ' + ter[1] + '²) = √(' + (ter[0] * ter[0] + ter[1] * ter[1]) + ') = ' + ter[2] + '.', tema: 'T2 · Módulo' };
  }
  // tema 3 · potência de i
  var exp = rnd_m81(2, 30);
  var r = exp % 4;
  var vals = { 0: '1', 1: 'i', 2: '−1', 3: '−i' };
  return { enun: 'Simplifica <strong>i<sup>' + exp + '</sup></strong>.',
    tipo: 'mc', opcoes: ['1', 'i', '−1', '−i'], resposta: vals[r],
    expl: 'i tem período 4. ' + exp + ' = 4×' + Math.floor(exp / 4) + ' + ' + r + ' → i^' + exp + ' = i^' + r + ' = ' + vals[r] + '.', tema: 'T3 · Potências de i' };
}
/* ════════════════════════════════════════════════════════════════
   BANCO DE QUESTÕES (reais/ricas) - Matemática A · 12.º ano
   ════════════════════════════════════════════════════════════════ */
var _mat12Banco = {
  1: [ // Cálculo Combinatório
    { t: '1', tipo: 'mc', enun: 'De quantas formas se podem ordenar 4 livros distintos numa prateleira?', opcoes: ['24', '12', '16', '256'], resposta: '24', expl: 'Permutações de 4: 4! = 24.', tema: 'T1 · Permutações' },
    { t: '1', tipo: 'fill', enun: 'Quantos números de 2 algarismos DIFERENTES se formam com {1,2,3,4,5}?', resposta: '20', expl: 'Arranjos: ⁵A₂ = 5×4 = 20 (ordem conta, sem repetir).', tema: 'T1 · Arranjos' },
    { t: '2', tipo: 'mc', enun: 'Quantas comissões de 2 pessoas se formam a partir de 7?', opcoes: ['21', '42', '14', '49'], resposta: '21', expl: '⁷C₂ = (7×6)/2 = 21 (ordem não conta).', tema: 'T2 · Combinações' },
    { t: '3', tipo: 'mc', enun: 'Quantos termos tem o desenvolvimento de (a + b)⁶?', opcoes: ['7', '6', '12', '64'], resposta: '7', expl: '(a+b)ⁿ tem n+1 termos: 6+1 = 7.', tema: 'T3 · Binómio' },
    { t: '1', tipo: 'mc', enun: 'Numa turma de 25 alunos, vai eleger-se um delegado e um subdelegado (cargos distintos). De quantas formas?', opcoes: ['600', '300', '625', '50'], resposta: '600', expl: 'Cargos distintos → arranjos: ²⁵A₂ = 25×24 = 600.', tema: 'T1 · Arranjos' },
    { t: '2', tipo: 'mc', enun: 'De um grupo de 8 raparigas e 5 rapazes, quantas equipas de 3 raparigas e 2 rapazes se formam?', opcoes: ['560', '286', '6840', '120'], resposta: '560', expl: '⁸C₃ × ⁵C₂ = 56 × 10 = 560.', tema: 'T2 · Combinações' },
    { t: '3', tipo: 'mc', enun: 'No desenvolvimento de (x + 2)⁵, qual é o coeficiente do termo em x³?', opcoes: ['40', '10', '80', '20'], resposta: '40', expl: 'Termo: ⁵C₂ · x³ · 2² = 10 × 4 · x³ = 40x³ → coeficiente 40.', tema: 'T3 · Binómio' },
    { t: '1', tipo: 'mc', enun: 'Quantos anagramas (com ou sem sentido) tem a palavra «LIVRO»?', opcoes: ['120', '25', '60', '24'], resposta: '120', expl: '5 letras distintas → P₅ = 5! = 120.', tema: 'T1 · Permutações' }
  ],
  2: [ // Probabilidades
    { t: '1', tipo: 'fill_frac', enun: 'Lança-se um dado. Qual a probabilidade de sair um número primo? (2, 3, 5)', resposta: '1/2', expl: 'Primos {2,3,5}: 3 casos → 3/6 = 1/2.', tema: 'T1 · Laplace' },
    { t: '2', tipo: 'fill_frac', enun: 'P(A∩B) = 0,3 e P(B) = 0,6. Calcula P(A|B). (fração irredutível)', resposta: '1/2', expl: 'P(A|B) = 0,3/0,6 = 1/2.', tema: 'T2 · Condicionada' },
    { t: '2', tipo: 'mc', enun: 'P(A) = 0,5, P(B) = 0,4, P(A∩B) = 0,2. Quanto é P(A∪B)?', opcoes: ['0,7', '0,9', '0,6', '1,1'], resposta: '0,7', expl: 'P(A∪B) = 0,5 + 0,4 − 0,2 = 0,7.', tema: 'T1 · União' },
    { t: '3', tipo: 'mc', enun: 'A e B são independentes com P(A)=0,5 e P(B)=0,4. Quanto é P(A∩B)?', opcoes: ['0,2', '0,9', '0,1', '0,45'], resposta: '0,2', expl: 'Independentes: P(A∩B) = 0,5 × 0,4 = 0,2.', tema: 'T3 · Independentes' },
    { t: '1', tipo: 'fill_frac', enun: 'Um saco tem 10 bolas numeradas de 0 a 9. Tira-se uma ao acaso. Qual a probabilidade de o número ser primo? (2,3,5,7) (fração irredutível)', resposta: '2/5', expl: 'Primos de 0 a 9: {2,3,5,7} → 4 casos em 10 = 4/10 = 2/5.', tema: 'T1 · Laplace' },
    { t: '2', tipo: 'fill_frac', enun: 'Num baralho de 40 cartas tira-se uma e vê-se que é de copas (10 cartas, das quais 3 figuras). Qual a probabilidade de ser figura? (fração irredutível)', resposta: '3/10', expl: 'Condicionada ao naipe copas: 3 figuras em 10 cartas = 3/10.', tema: 'T2 · Condicionada' },
    { t: '2', tipo: 'fill_frac', enun: 'Tiram-se 2 bolas, sem reposição, de um saco com 4 vermelhas e 6 azuis. Probabilidade de ambas vermelhas? (fração irredutível)', resposta: '2/15', expl: '(4/10) × (3/9) = 12/90 = 2/15.', tema: 'T2 · Sem reposição' },
    { t: '3', tipo: 'fill_frac', enun: 'Lançam-se 2 moedas. Probabilidade de sair pelo menos uma cara? (fração irredutível)', resposta: '3/4', expl: 'Contrário de "nenhuma cara" (CC): 1 − 1/4 = 3/4.', tema: 'T3 · Contrário' }
  ],
  3: [ // Funções Reais de Variável Real
    { t: '1', tipo: 'mc', enun: 'O valor de lim(x→+∞) (5x² − 3x + 1)/(2x² + 7) é:', opcoes: ['5/2', '0', '+∞', '5/7'], resposta: '5/2', expl: 'Mesmo grau (x²): quociente dos coeficientes principais = 5/2.', tema: 'T1 · Limites' },
    { t: '1', tipo: 'fill', enun: 'Calcula lim(x→3) (x² − 9)/(x − 3).', resposta: '6', expl: '(x−3)(x+3)/(x−3) = x+3 → 6.', tema: 'T1 · Indeterminação' },
    { t: '2', tipo: 'mc', enun: 'f é contínua, f(1) = −2 e f(3) = 4. Pelo Teorema de Bolzano, em ]1,3[:', opcoes: ['existe pelo menos um zero', 'não há zeros', 'há exatamente dois zeros', 'f é constante'], resposta: 'existe pelo menos um zero', expl: 'f(1)·f(3) < 0 e f contínua → pelo menos um zero (Bolzano).', tema: 'T2 · Bolzano' },
    { t: '4', tipo: 'fill', enun: 'Sendo f(x) = x³ − 3x, calcula f′(2).', resposta: '9', expl: "f′(x) = 3x² − 3 → f′(2) = 12 − 3 = 9.", tema: 'T4 · Derivadas' },
    { t: '1', tipo: 'fill', enun: 'Calcula lim(x→+∞) (2x³ − x)/(x² + 5). (escreve +∞ ou −∞ se for infinito)', resposta: '+∞', expl: 'Grau do numerador (3) > do denominador (2) e coeficientes positivos → +∞.', tema: 'T1 · Limites' },
    { t: '3', tipo: 'mc', enun: 'A reta y = 2 é assíntota horizontal de f(x) = (2x − 1)/(x + 3). A função tem assíntota vertical em:', opcoes: ['x = −3', 'x = 3', 'x = 2', 'não tem'], resposta: 'x = −3', expl: 'O denominador x+3 anula-se em x = −3 → assíntota vertical.', tema: 'T3 · Assíntotas' },
    { t: '4', tipo: 'mc', enun: 'A função f(x) = x³ − 3x² tem concavidade voltada para cima quando:', opcoes: ['x > 1', 'x < 1', 'x > 0', 'sempre'], resposta: 'x > 1', expl: "f''(x) = 6x − 6 > 0 ⟺ x > 1.", tema: 'T4 · Concavidade' },
    { t: '4', tipo: 'fill', enun: 'A reta tangente ao gráfico de f(x) = x² no ponto de abcissa x = 3 tem que declive?', resposta: '6', expl: "f′(x) = 2x → f′(3) = 6 (declive da tangente).", tema: 'T4 · Tangente' }
  ],
  4: [ // Trigonometria
    { t: '1', tipo: 'mc', enun: 'Usando sen(2a) = 2 sen a cos a, com sen a = 0,6 e cos a = 0,8, quanto é sen(2a)?', opcoes: ['0,96', '1,2', '0,48', '1,4'], resposta: '0,96', expl: 'sen(2a) = 2 × 0,6 × 0,8 = 0,96.', tema: 'T1 · Fórmulas' },
    { t: '2', tipo: 'mc', enun: 'Qual é a derivada de f(x) = cos(3x)?', opcoes: ['−3sen(3x)', '3sen(3x)', '−sen(3x)', '3cos(3x)'], resposta: '−3sen(3x)', expl: '(cos u)′ = −u′ sen u → −3sen(3x).', tema: 'T2 · Derivadas sen/cos' },
    { t: '3', tipo: 'fill', enun: 'Calcula lim(x→0) sen(4x)/x.', resposta: '4', expl: 'lim sen(4x)/x = 4 × lim sen(4x)/(4x) = 4×1 = 4.', tema: 'T3 · Limites notáveis' },
    { t: '1', tipo: 'mc', enun: 'Qual é o período da função x(t) = sen(2t)?', opcoes: ['π', '2π', 'π/2', '4π'], resposta: 'π', expl: 'T = 2π/ω = 2π/2 = π.', tema: 'T1 · Osciladores' },
    { t: '1', tipo: 'mc', enun: 'Sabendo que cos(a) = 0,8 e a é agudo, qual é cos(2a)? (usa cos 2a = 2cos²a − 1)', opcoes: ['0,28', '0,6', '0,96', '1,28'], resposta: '0,28', expl: 'cos(2a) = 2×0,64 − 1 = 1,28 − 1 = 0,28.', tema: 'T1 · Fórmulas' },
    { t: '2', tipo: 'mc', enun: 'Qual é a derivada de f(x) = sen(x²)?', opcoes: ['2x·cos(x²)', 'cos(x²)', '2x·sen(x²)', '−2x·cos(x²)'], resposta: '2x·cos(x²)', expl: "(sen u)′ = u′cos u, com u = x² → u′ = 2x → 2x·cos(x²).", tema: 'T2 · Derivadas sen/cos' },
    { t: '3', tipo: 'fill', enun: 'Calcula lim(x→0) sen(3x)/sen(x). (escreve um inteiro)', resposta: '3', expl: 'sen(3x)/sen(x) = [sen(3x)/3x]·3·[x/sen(x)] → 1·3·1 = 3.', tema: 'T3 · Limites notáveis' },
    { t: '1', tipo: 'mc', enun: 'A amplitude do oscilador x(t) = 5sen(2t + π/3) é:', opcoes: ['5', '2', 'π/3', '10'], resposta: '5', expl: 'Em x = A sen(ωt + φ), a amplitude é A = 5.', tema: 'T1 · Osciladores' }
  ],
  5: [ // Exponenciais e Logaritmos
    { t: '1', tipo: 'fill', enun: 'Resolve a equação 3ˣ = 81.', resposta: '4', expl: '81 = 3⁴ → x = 4.', tema: 'T1 · Exponencial' },
    { t: '2', tipo: 'fill', enun: 'Calcula log₂(32).', resposta: '5', expl: '2⁵ = 32 → log₂(32) = 5.', tema: 'T2 · Logaritmos' },
    { t: '2', tipo: 'mc', enun: 'Qual é o valor de ln(e⁴)?', opcoes: ['4', 'e', '1', '4e'], resposta: '4', expl: 'ln(eⁿ) = n, porque ln e = 1.', tema: 'T2 · Logaritmos' },
    { t: '3', tipo: 'mc', enun: 'Qual é a derivada de f(x) = e^(3x)?', opcoes: ['3e^(3x)', 'e^(3x)', '3x·e^(3x)', 'e^(3x)/3'], resposta: '3e^(3x)', expl: '(e^u)′ = u′ e^u → 3e^(3x).', tema: 'T3 · Derivadas' },
    { t: '1', tipo: 'fill', enun: 'Resolve a equação 2^(x+1) = 16.', resposta: '3', expl: '16 = 2⁴ → x+1 = 4 → x = 3.', tema: 'T1 · Exponencial' },
    { t: '2', tipo: 'mc', enun: 'Aplicando as propriedades, log₃(9 × 27) é igual a:', opcoes: ['5', '6', '243', '36'], resposta: '5', expl: 'log₃9 + log₃27 = 2 + 3 = 5.', tema: 'T2 · Logaritmos' },
    { t: '3', tipo: 'mc', enun: 'Qual é a derivada de f(x) = ln(x² + 1)?', opcoes: ['2x/(x²+1)', '1/(x²+1)', '2x', 'ln(2x)'], resposta: '2x/(x²+1)', expl: "(ln u)′ = u′/u, com u = x²+1 → 2x/(x²+1).", tema: 'T3 · Derivadas' },
    { t: '1', tipo: 'mc', enun: 'A função f(x) = (1/2)ˣ é:', opcoes: ['decrescente', 'crescente', 'constante', 'não monótona'], resposta: 'decrescente', expl: 'Base entre 0 e 1 (0 < 1/2 < 1) → função exponencial decrescente.', tema: 'T1 · Exponencial' }
  ],
  6: [ // Primitivas e Cálculo Integral
    { t: '1', tipo: 'mc', enun: 'Qual é uma primitiva de f(x) = x³?', opcoes: ['x⁴/4 + C', '3x² + C', 'x⁴ + C', '4x⁴ + C'], resposta: 'x⁴/4 + C', expl: 'P(xⁿ) = x^(n+1)/(n+1) + C → x⁴/4 + C.', tema: 'T1 · Primitivas' },
    { t: '2', tipo: 'fill', enun: 'Calcula ∫₀¹ x² dx. (escreve como fração, ex.: 1/3)', resposta: '1/3', expl: '[x³/3]₀¹ = 1/3 − 0 = 1/3.', tema: 'T2 · Integral' },
    { t: '2', tipo: 'fill', enun: 'Calcula ∫₀² 4x dx.', resposta: '8', expl: '[2x²]₀² = 2×4 = 8.', tema: 'T2 · Integral' },
    { t: '3', tipo: 'fill', enun: 'Qual é a área entre y = x², o eixo Ox e x = 3?', resposta: '9', expl: '∫₀³ x² dx = [x³/3]₀³ = 27/3 = 9.', tema: 'T3 · Áreas' },
    { t: '1', tipo: 'mc', enun: 'Qual é uma primitiva de f(x) = cos(x) + 2x?', opcoes: ['sen(x) + x² + C', '−sen(x) + x² + C', 'sen(x) + 2 + C', 'cos(x) + x² + C'], resposta: 'sen(x) + x² + C', expl: 'P(cos x) = sen x; P(2x) = x². Soma → sen(x) + x² + C.', tema: 'T1 · Primitivas' },
    { t: '2', tipo: 'fill', enun: 'Calcula ∫₁³ 2x dx.', resposta: '8', expl: '[x²]₁³ = 9 − 1 = 8.', tema: 'T2 · Integral' },
    { t: '2', tipo: 'fill', enun: 'Calcula ∫₀¹ eˣ dx. (escreve em função de e, ex.: e-1)', resposta: 'e-1', expl: '[eˣ]₀¹ = e¹ − e⁰ = e − 1.', tema: 'T2 · Integral' },
    { t: '3', tipo: 'fill', enun: 'Qual é a área entre y = x³, o eixo Ox e x = 2?', resposta: '4', expl: '∫₀² x³ dx = [x⁴/4]₀² = 16/4 = 4.', tema: 'T3 · Áreas' }
  ],
  7: [ // Números Complexos
    { t: '1', tipo: 'fill', enun: 'Calcula (3 + 2i) + (1 + 5i).', resposta: '4+7i', expl: 'Soma parte real e imaginária: (3+1) + (2+5)i = 4+7i.', tema: 'T1 · Forma algébrica' },
    { t: '1', tipo: 'fill', enun: 'Calcula (2 + i)(2 − i).', resposta: '5', expl: '(a+bi)(a−bi) = a²+b² = 4+1 = 5.', tema: 'T1 · Forma algébrica' },
    { t: '2', tipo: 'fill', enun: 'Calcula o módulo de z = 5 + 12i.', resposta: '13', expl: '|z| = √(25+144) = √169 = 13.', tema: 'T2 · Módulo' },
    { t: '3', tipo: 'mc', enun: 'Simplifica i²⁷.', opcoes: ['−i', 'i', '1', '−1'], resposta: '−i', expl: '27 = 4×6 + 3 → i²⁷ = i³ = −i.', tema: 'T3 · Potências de i' },
    { t: '1', tipo: 'fill', enun: 'Calcula (4 + 3i) − (1 + 5i).', resposta: '3-2i', expl: '(4−1) + (3−5)i = 3 − 2i.', tema: 'T1 · Forma algébrica' },
    { t: '2', tipo: 'mc', enun: 'Qual é o conjugado de z = −2 + 7i?', opcoes: ['−2 − 7i', '2 − 7i', '2 + 7i', '−2 + 7i'], resposta: '−2 − 7i', expl: 'O conjugado de a+bi é a−bi → −2 − 7i.', tema: 'T2 · Conjugado' },
    { t: '1', tipo: 'fill', enun: 'Calcula (1 + i)². (forma a+bi)', resposta: '2i', expl: '(1+i)² = 1 + 2i + i² = 1 + 2i − 1 = 2i.', tema: 'T1 · Forma algébrica' },
    { t: '3', tipo: 'mc', enun: 'No plano de Argand, o número z = −3i está representado:', opcoes: ['no eixo imaginário, abaixo da origem', 'no eixo real, à esquerda', 'no 1.º quadrante', 'na origem'], resposta: 'no eixo imaginário, abaixo da origem', expl: 'z = 0 − 3i: parte real 0 (está no eixo Oy) e parte imaginária negativa (abaixo).', tema: 'T3 · Plano de Argand' }
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
  return { curso:'mat12', cursoNome:'Matemática 12.º', tema:caps.join('.'), temaNome:nomes.join(', '), sub:'', subNome:'', tipo:'ficha', nivel:_mat12gf.dif };
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
