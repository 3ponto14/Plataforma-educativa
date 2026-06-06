/* ════════════════════════════════════════════════════════════════
   MAT9 HUB — Matemática 9.º ano (6 capítulos)
   Modelo de HUB ÚNICO (ver MODELO BASE no CLAUDE.md). NUNCA páginas
   por capítulo. Tabs: Teoria · Praticar · Fichas · Progresso.
   Capítulos são botões de seleção; conteúdo renderizado por JS.
   ════════════════════════════════════════════════════════════════ */

// ═══ Capítulos do 9.º ano (MX9 / Prisma 9 / Mat9) ═══
var _mat9CapMeta = [
  {n:1, icon:'<i class="ph ph-infinity"></i>',        label:'Números Reais e Inequações'},
  {n:2, icon:'<i class="ph ph-function"></i>',        label:'Equações do 2.º Grau'},
  {n:3, icon:'<i class="ph ph-chart-line"></i>',      label:'Funções'},
  {n:4, icon:'<i class="ph ph-triangle"></i>',        label:'Trigonometria e Circunferência'},
  {n:5, icon:'<i class="ph ph-chart-pie-slice"></i>', label:'Probabilidades'},
  {n:6, icon:'<i class="ph ph-chart-bar"></i>',       label:'Estatística'}
];

// Cores por capítulo (alinhadas com --m9cN-* do CSS)
var _mat9CapColors = {
  1:'#b06a3a', 2:'#7f8a4d', 3:'#4d8f87', 4:'#9c5e80', 5:'#5a72a0', 6:'#a87a4d'
};

// Subtemas por capítulo
var _mat9Subtemas = {
  1: ['Conjuntos numéricos', 'Intervalos de números reais', 'Inequações do 1.º grau'],
  2: ['Casos notáveis', 'Operações com polinómios', 'Equações do 2.º grau (fórmula resolvente)', 'Forma canónica'],
  3: ['Função afim', 'Função quadrática', 'Proporcionalidade inversa'],
  4: ['Razões trigonométricas', 'Lados de triângulos retângulos', 'Ângulos ao centro e arcos'],
  5: ['Espaço de resultados', 'Probabilidade de um acontecimento', 'Operações com acontecimentos'],
  6: ['Medidas de localização', 'Quartis e amplitude interquartis', 'Frequências']
};

// ═══ FLASHCARDS / TEORIA por capítulo ═══
// Cap 1 (Números) — conteúdo real, fiel ao Prisma 8.
// Caps 2-8 — placeholders honestos até serem construídos.
// ═══ FLASHCARDS / TEORIA por capítulo (9.º ano) ═══
var _mat9Cards = {
  1: [
    { tag: 'Definição', q: 'O que são os números reais (ℝ)?', a: 'O conjunto que reúne os racionais (ℚ) e os irracionais. Inclui todos os números que se podem representar na reta numérica. ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ.' },
    { tag: 'Definição', q: 'O que é um número irracional?', a: 'Um número que NÃO se pode escrever como fração de inteiros. A sua dízima é infinita e não periódica. Ex: √2, π, √3.' },
    { tag: 'Definição', q: 'O que é uma dízima infinita não periódica?', a: 'Uma representação decimal com infinitas casas que nunca se repetem num período. Corresponde sempre a um número irracional. Ex: π = 3,14159…' },
    { tag: 'Definição', q: 'O que é um intervalo de números reais?', a: 'Um conjunto de todos os reais entre dois extremos. Ex: [2, 5] = todos os x com 2 ≤ x ≤ 5. Usa [ ] para incluir o extremo e ] [ para excluir.' },
    { tag: 'Regra', q: 'Diferença entre intervalo aberto e fechado', a: 'Fechado [a, b]: inclui a e b (≤). Aberto ]a, b[: exclui a e b (<). Pode ser misto: [a, b[ inclui a mas não b.' },
    { tag: 'Notação', q: 'Como se escreve "x ≥ 3" como intervalo?', a: '[3, +∞[. O +∞ usa-se sempre com parêntese aberto. "x > 3" seria ]3, +∞[.' },
    { tag: 'Definição', q: 'O que é uma inequação?', a: 'Uma desigualdade com uma incógnita (<, >, ≤, ≥). A solução é, em geral, um intervalo de valores. Ex: 2x + 1 > 5.' },
    { tag: 'Regra', q: 'Regra de OURO ao resolver inequações', a: 'Ao multiplicar ou dividir ambos os membros por um número NEGATIVO, INVERTE-SE o sentido da desigualdade (< passa a >).' },
    { tag: 'Estratégia', q: 'Como resolver uma inequação do 1.º grau?', a: 'Procede como numa equação: isola x. Mas atenção: se multiplicares/dividires por negativo, inverte o sinal. Apresenta a solução como intervalo.' },
    { tag: 'Definição', q: 'O que é a reunião e a interseção de intervalos?', a: 'Reunião (∪): todos os elementos de ambos. Interseção (∩): apenas os elementos comuns a ambos.' },
    { tag: 'Regra', q: 'Como representar a solução de uma inequação?', a: 'Por uma condição (x ≥ 2), por um intervalo ([2, +∞[) e/ou na reta numérica (bola cheia = incluído, bola vazia = excluído).' },
    { tag: 'Exemplo', q: 'Resolve 2x − 4 > 6', a: '2x > 10 → x > 5. Solução: ]5, +∞[.' },
    { tag: 'Exemplo', q: 'Resolve −3x ≥ 9', a: 'Divide por −3 e INVERTE: x ≤ −3. Solução: ]−∞, −3].' },
    { tag: 'Exemplo', q: '√2 é racional ou irracional?', a: 'Irracional: não se pode escrever como fração e a dízima é infinita não periódica (√2 ≈ 1,41421…).' },
    { tag: 'Definição', q: 'O que é o valor absoluto de um número real?', a: '|x| é a distância de x ao zero na reta; é sempre ≥ 0. |−5| = 5 e |5| = 5.' },
    { tag: 'Exemplo', q: 'Escreve ]−∞, 4] como condição', a: 'x ≤ 4 (todos os reais menores ou iguais a 4).' }
  ],
  2: [
    { tag: 'Fórmula', q: 'Caso notável: quadrado da soma', a: '(a + b)² = a² + 2ab + b². Ex: (x + 3)² = x² + 6x + 9.' },
    { tag: 'Fórmula', q: 'Caso notável: quadrado da diferença', a: '(a − b)² = a² − 2ab + b². Ex: (x − 5)² = x² − 10x + 25.' },
    { tag: 'Fórmula', q: 'Caso notável: diferença de quadrados', a: '(a + b)(a − b) = a² − b². Ex: (x + 2)(x − 2) = x² − 4.' },
    { tag: 'Definição', q: 'O que é uma equação do 2.º grau?', a: 'Uma equação da forma ax² + bx + c = 0, com a ≠ 0. Pode ter 0, 1 ou 2 soluções.' },
    { tag: 'Fórmula', q: 'Fórmula resolvente', a: 'x = (−b ± √(b² − 4ac)) / (2a). Serve para resolver qualquer equação ax² + bx + c = 0.' },
    { tag: 'Definição', q: 'O que é o binómio discriminante?', a: 'Δ = b² − 4ac. Δ > 0 → duas soluções; Δ = 0 → uma solução; Δ < 0 → nenhuma solução real.' },
    { tag: 'Estratégia', q: 'Equação incompleta ax² + bx = 0', a: 'Põe x em evidência: x(ax + b) = 0. Soluções: x = 0 ou x = −b/a. (Lei do anulamento do produto.)' },
    { tag: 'Estratégia', q: 'Equação incompleta ax² + c = 0', a: 'Isola x²: x² = −c/a. Se −c/a ≥ 0, x = ±√(−c/a); se < 0, não tem solução real.' },
    { tag: 'Regra', q: 'Lei do anulamento do produto', a: 'Se A × B = 0, então A = 0 ou B = 0. Usa-se para resolver equações fatorizadas. Ex: (x−2)(x+3)=0 → x=2 ou x=−3.' },
    { tag: 'Definição', q: 'O que é a forma canónica de uma equação do 2.º grau?', a: 'a(x − h)² + k = 0, onde (h, k) é o vértice da parábola associada. Obtém-se completando o quadrado.' },
    { tag: 'Definição', q: 'O que é um monómio e um polinómio?', a: 'Monómio: produto de um número por potências de letras (ex: 3x²). Polinómio: soma de monómios (ex: x² + 2x − 1).' },
    { tag: 'Regra', q: 'Como multiplicar dois polinómios?', a: 'Aplica a distributiva: multiplica cada termo do primeiro por cada termo do segundo e junta os semelhantes.' },
    { tag: 'Exemplo', q: 'Resolve x² − 5x + 6 = 0', a: 'Δ = 25 − 24 = 1; x = (5 ± 1)/2 → x = 3 ou x = 2.' },
    { tag: 'Exemplo', q: 'Resolve x² − 9 = 0', a: 'x² = 9 → x = ±3. (Ou diferença de quadrados: (x−3)(x+3)=0.)' },
    { tag: 'Exemplo', q: 'Desenvolve (x − 4)²', a: 'x² − 2·x·4 + 4² = x² − 8x + 16.' },
    { tag: 'Exemplo', q: 'Quantas soluções tem x² + x + 5 = 0?', a: 'Δ = 1 − 20 = −19 < 0 → não tem soluções reais.' }
  ],
  3: [
    { tag: 'Definição', q: 'O que é uma função afim?', a: 'Uma função do tipo f(x) = ax + b. O gráfico é uma reta; a é o declive e b a ordenada na origem.' },
    { tag: 'Definição', q: 'O que é uma função linear?', a: 'Uma função afim com b = 0: f(x) = ax. O gráfico passa na origem. Traduz proporcionalidade direta.' },
    { tag: 'Definição', q: 'O que é uma função quadrática?', a: 'Uma função do tipo f(x) = ax² + bx + c (a ≠ 0). O gráfico é uma parábola.' },
    { tag: 'Definição', q: 'O que é o vértice de uma parábola?', a: 'O ponto mais alto (a < 0) ou mais baixo (a > 0). A sua abcissa é x = −b/(2a).' },
    { tag: 'Regra', q: 'Concavidade de uma parábola', a: 'Se a > 0, a parábola tem concavidade voltada para cima (∪); se a < 0, para baixo (∩).' },
    { tag: 'Definição', q: 'O que são os zeros de uma função?', a: 'Os valores de x para os quais f(x) = 0. Graficamente, onde o gráfico corta o eixo Ox. Numa quadrática, resolvem-se com a fórmula resolvente.' },
    { tag: 'Definição', q: 'O que é a função de proporcionalidade inversa?', a: 'f(x) = k/x (k ≠ 0). O gráfico é uma hipérbole. O produto x·y = k é constante.' },
    { tag: 'Regra', q: 'Como reconhecer proporcionalidade inversa numa tabela?', a: 'O produto x × y é constante (= k) em todas as colunas. Quando x duplica, y reduz-se a metade.' },
    { tag: 'Definição', q: 'O que é o domínio e o contradomínio?', a: 'Domínio: conjunto dos objetos (valores de x). Contradomínio: conjunto das imagens (valores de y efetivamente atingidos).' },
    { tag: 'Estratégia', q: 'Como calcular a imagem f(x)?', a: 'Substitui x pelo valor pretendido na expressão. Ex: f(x) = x² − 1 → f(3) = 9 − 1 = 8.' },
    { tag: 'Definição', q: 'O que é o declive de uma reta?', a: 'O valor a em f(x) = ax + b. Mede a inclinação: m = (y₂ − y₁)/(x₂ − x₁). Positivo → cresce; negativo → decresce.' },
    { tag: 'Definição', q: 'O que é a ordenada na origem?', a: 'O valor b em f(x) = ax + b: a ordenada do ponto onde a reta corta o eixo Oy (x = 0).' },
    { tag: 'Exemplo', q: 'Calcula o vértice de f(x) = x² − 4x + 3', a: 'x_v = −(−4)/(2·1) = 2; y_v = f(2) = 4 − 8 + 3 = −1. Vértice (2, −1).' },
    { tag: 'Exemplo', q: 'Zeros de f(x) = x² − 4', a: 'x² − 4 = 0 → x = ±2. Os zeros são −2 e 2.' },
    { tag: 'Exemplo', q: 'Numa proporcionalidade inversa, se y = 6 quando x = 2, qual k?', a: 'k = x·y = 2·6 = 12. A função é f(x) = 12/x.' },
    { tag: 'Exemplo', q: 'f(x) = 3x − 2, calcula f(4)', a: 'f(4) = 3·4 − 2 = 10.' }
  ],
  4: [
    { tag: 'Definição', q: 'O que são as razões trigonométricas?', a: 'Num triângulo retângulo, para um ângulo agudo: seno, cosseno e tangente — quocientes entre os lados do triângulo.' },
    { tag: 'Fórmula', q: 'Definição de seno de um ângulo agudo', a: 'sen(α) = cateto oposto / hipotenusa.' },
    { tag: 'Fórmula', q: 'Definição de cosseno de um ângulo agudo', a: 'cos(α) = cateto adjacente / hipotenusa.' },
    { tag: 'Fórmula', q: 'Definição de tangente de um ângulo agudo', a: 'tg(α) = cateto oposto / cateto adjacente = sen(α)/cos(α).' },
    { tag: 'Fórmula', q: 'Fórmula fundamental da trigonometria', a: 'sen²(α) + cos²(α) = 1. Permite calcular uma razão a partir da outra.' },
    { tag: 'Definição', q: 'Valores notáveis: 30°, 45° e 60°', a: 'sen30°=½, cos30°=√3/2; sen45°=cos45°=√2/2; sen60°=√3/2, cos60°=½; tg45°=1.' },
    { tag: 'Estratégia', q: 'Como determinar um lado com trigonometria?', a: 'Identifica o ângulo e os lados (oposto/adjacente/hipotenusa), escolhe a razão adequada (sen, cos ou tg) e resolve a equação.' },
    { tag: 'Definição', q: 'O que é um ângulo ao centro?', a: 'Um ângulo com o vértice no centro da circunferência. A sua amplitude é igual à do arco correspondente.' },
    { tag: 'Definição', q: 'O que é um ângulo inscrito?', a: 'Um ângulo com o vértice na circunferência. A sua amplitude é METADE do arco (ou do ângulo ao centro) correspondente.' },
    { tag: 'Fórmula', q: 'Comprimento de um arco de circunferência', a: 'Comprimento = (amplitude/360°) × 2πr. É a fração da circunferência correspondente ao ângulo.' },
    { tag: 'Definição', q: 'O que é um lugar geométrico?', a: 'O conjunto de todos os pontos que satisfazem uma dada condição. Ex: a circunferência é o lugar dos pontos a distância r de um centro.' },
    { tag: 'Definição', q: 'O que é a mediatriz de um segmento?', a: 'O lugar geométrico dos pontos equidistantes dos dois extremos do segmento. É uma reta perpendicular ao segmento no seu ponto médio.' },
    { tag: 'Definição', q: 'O que é a bissetriz de um ângulo?', a: 'O lugar geométrico dos pontos equidistantes dos dois lados do ângulo. Divide o ângulo em dois ângulos iguais.' },
    { tag: 'Exemplo', q: 'Num triângulo retângulo, cateto oposto 3 e hipotenusa 5. sen(α)?', a: 'sen(α) = 3/5 = 0,6.' },
    { tag: 'Exemplo', q: 'Arco correspondente a um ângulo ao centro de 90° numa circunferência?', a: 'É 90°, igual ao ângulo ao centro. O comprimento é ¼ da circunferência.' },
    { tag: 'Exemplo', q: 'Ângulo inscrito que "vê" um arco de 80°. Quanto mede?', a: 'Metade do arco: 80°/2 = 40°.' }
  ],
  5: [
    { tag: 'Definição', q: 'O que é uma experiência aleatória?', a: 'Uma experiência cujo resultado não se consegue prever com certeza, embora se conheçam os resultados possíveis. Ex: lançar um dado.' },
    { tag: 'Definição', q: 'O que é o espaço de resultados (ou amostral)?', a: 'O conjunto de TODOS os resultados possíveis de uma experiência aleatória. Representa-se por S ou Ω. Ex: dado → {1,2,3,4,5,6}.' },
    { tag: 'Definição', q: 'O que é um acontecimento?', a: 'Um subconjunto do espaço de resultados. Ex: "sair par" = {2, 4, 6}.' },
    { tag: 'Definição', q: 'Acontecimento certo, impossível e elementar', a: 'Certo: ocorre sempre (P = 1). Impossível: nunca ocorre (P = 0). Elementar: tem um só resultado.' },
    { tag: 'Fórmula', q: 'Regra de Laplace (probabilidade)', a: 'Em casos equiprováveis: P(A) = nº de casos favoráveis / nº de casos possíveis. O valor está entre 0 e 1.' },
    { tag: 'Definição', q: 'O que são acontecimentos incompatíveis (disjuntos)?', a: 'Não podem ocorrer ao mesmo tempo: A ∩ B = ∅. Ex: "sair 1" e "sair 6" num dado.' },
    { tag: 'Definição', q: 'O que é o acontecimento contrário?', a: 'O contrário de A (Ā) ocorre quando A não ocorre. P(Ā) = 1 − P(A).' },
    { tag: 'Fórmula', q: 'Probabilidade da reunião (acontecimentos)', a: 'P(A ∪ B) = P(A) + P(B) − P(A ∩ B). Se forem incompatíveis: P(A ∪ B) = P(A) + P(B).' },
    { tag: 'Definição', q: 'Operações com acontecimentos', a: 'Reunião (A ∪ B): ocorre A ou B. Interseção (A ∩ B): ocorrem ambos. Contrário (Ā): não ocorre A.' },
    { tag: 'Estratégia', q: 'Como contar casos em experiências compostas?', a: 'Usa uma tabela de dupla entrada ou um diagrama de árvore para listar todos os resultados possíveis.' },
    { tag: 'Regra', q: 'Valores possíveis de uma probabilidade', a: '0 ≤ P(A) ≤ 1. A soma das probabilidades de todos os resultados de S é sempre 1.' },
    { tag: 'Exemplo', q: 'P de sair número par num dado?', a: 'Favoráveis {2,4,6} = 3; possíveis = 6. P = 3/6 = 1/2.' },
    { tag: 'Exemplo', q: 'P de NÃO sair o 5 num dado?', a: 'P(sair 5) = 1/6, logo P(não sair 5) = 1 − 1/6 = 5/6.' },
    { tag: 'Exemplo', q: 'Espaço de resultados ao lançar duas moedas?', a: '{CC, CK, KC, KK} → 4 resultados (C = cara, K = coroa).' },
    { tag: 'Exemplo', q: 'P de tirar uma bola vermelha (4 em 10)?', a: 'P = 4/10 = 2/5 = 0,4 = 40%.' },
    { tag: 'Exemplo', q: 'P de sair um número maior que 4 num dado?', a: 'Favoráveis {5, 6} = 2; P = 2/6 = 1/3.' }
  ],
  6: [
    { tag: 'Definição', q: 'O que são as medidas de localização?', a: 'Valores que resumem onde se "centram" os dados: média, moda, mediana e quartis.' },
    { tag: 'Definição', q: 'O que é a média?', a: 'A soma de todos os valores a dividir pelo número de valores. Sensível a valores extremos.' },
    { tag: 'Definição', q: 'O que é a mediana?', a: 'O valor central dos dados ORDENADOS. Se o número de dados for par, é a média dos dois centrais. Resistente a extremos.' },
    { tag: 'Definição', q: 'O que é a moda?', a: 'O valor (ou valores) que ocorre com maior frequência. Pode haver mais de uma moda ou nenhuma.' },
    { tag: 'Definição', q: 'O que são os quartis (Q1, Q2, Q3)?', a: 'Dividem os dados ordenados em quatro partes iguais (25% cada). Q2 é a mediana. Q1 = 1.º quartil, Q3 = 3.º quartil.' },
    { tag: 'Fórmula', q: 'O que é a amplitude interquartis (AIQ)?', a: 'AIQ = Q3 − Q1. Mede a dispersão dos 50% centrais dos dados; é resistente a valores extremos.' },
    { tag: 'Definição', q: 'O que é a amplitude?', a: 'A diferença entre o maior e o menor valor: máximo − mínimo. Mede a dispersão total.' },
    { tag: 'Definição', q: 'O que é o diagrama de extremos e quartis?', a: 'A "caixa de bigodes": mostra mínimo, Q1, mediana, Q3 e máximo. Resume a distribuição e permite comparar conjuntos.' },
    { tag: 'Definição', q: 'O que é a frequência absoluta e relativa?', a: 'Absoluta (fi): nº de vezes que um valor ocorre. Relativa (fri): fi/n (total), muitas vezes em %.' },
    { tag: 'Definição', q: 'O que é um histograma?', a: 'Um gráfico de barras contíguas para dados agrupados em classes (variáveis contínuas). A área de cada barra representa a frequência.' },
    { tag: 'Definição', q: 'Variável qualitativa vs quantitativa', a: 'Qualitativa: não numérica (cor, desporto). Quantitativa: numérica — discreta (nº de irmãos) ou contínua (altura).' },
    { tag: 'Estratégia', q: 'Como calcular a mediana?', a: 'Ordena os dados. Se n é ímpar, é o do meio; se n é par, é a média dos dois centrais.' },
    { tag: 'Exemplo', q: 'Média de 10, 12, 14, 16, 18?', a: '(10+12+14+16+18)/5 = 70/5 = 14.' },
    { tag: 'Exemplo', q: 'Mediana de 3, 7, 8, 12, 15?', a: 'Já ordenados, 5 valores (ímpar): a mediana é o central → 8.' },
    { tag: 'Exemplo', q: 'Amplitude interquartis se Q1 = 10 e Q3 = 22?', a: 'AIQ = Q3 − Q1 = 22 − 10 = 12.' },
    { tag: 'Exemplo', q: 'Moda de 4, 4, 5, 7, 7, 7, 9?', a: 'O valor mais frequente é 7 (três vezes). Moda = 7.' }
  ]
};

// Seleção atual por tab
var _mat9Sel = { resumo: 1, 'resumo-st': 0 };

// ═══ NAVEGAÇÃO DE TABS ═══
function mat9SwitchTab(tab, btn) {
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
  var panel = document.getElementById('mat9p-' + tab);
  if (panel) { panel.classList.add('active'); panel.style.setProperty('display','block','important'); }

  var titles = { resumo:'Teoria', praticar:'Praticar', fichas:'Fichas', progresso:'Progresso',
                 exercicios:'Exercícios', quiz:'Quiz', flashcards:'Flashcards', teste:'Teste', jogos:'Jogos' };
  if (titles[tab]) document.title = 'Mat. 9.º ' + titles[tab] + ' · 3ponto14';

  if (tab === 'resumo') mat9BuildResumoNav();
  else if (tab === 'exercicios') mat9BuildPraticarNav();
  else if (tab === 'quiz') mat9QuizBuildNav();
  else if (tab === 'flashcards') mat9FcBuildNav();
  else if (tab === 'teste') mat9TesteBuildNav();
  else if (tab === 'jogos') mat9JogosInit();
  else if (tab === 'fichas') mat9FichasBuildNav();
  else if (tab === 'progresso') mat9RenderProgresso();
}

// Abre um sub-modo de prática a partir dos cartões do menu Praticar.
function mat9OpenPraticar(modo) { mat9SwitchTab(modo, null); }

// ═══ TAB TEORIA ═══
function mat9BuildResumoNav() {
  var capRow = document.getElementById('mat9-resumo-cap-row');
  if (!capRow) return;
  var activeCap = _mat9Sel['resumo'] || 1;
  var h = '';
  _mat9CapMeta.forEach(function(m) {
    var color = _mat9CapColors[m.n] || '#516860';
    var isActive = activeCap === m.n;
    var activeStyle = isActive ? 'background:' + color + ';border-color:' + color + ';color:#fff' : '';
    var hoverCode = isActive ? '' : ' onmouseover="this.style.borderColor=\'' + color + '\';this.style.color=\'' + color + '\'" onmouseout="this.style.borderColor=\'\';this.style.color=\'\'"';
    h += '<button class="resumo-cap-btn' + (isActive ? ' active' : '') + '" data-cap="' + m.n + '" onclick="mat9ResumoSelectCap(' + m.n + ',this)" style="' + activeStyle + '"' + hoverCode + '>'
       + '<span class="resumo-cap-icon">' + m.icon + '</span>' + m.label + '</button>';
  });
  capRow.innerHTML = h;
  mat9ResumoShowSts(activeCap);
  mat9RenderResumoInline();
}

function mat9ResumoSelectCap(cap, btn) {
  _mat9Sel['resumo'] = cap;
  _mat9Sel['resumo-st'] = 0;
  var capRow = document.getElementById('mat9-resumo-cap-row');
  if (capRow) {
    capRow.querySelectorAll('.resumo-cap-btn').forEach(function(b) {
      b.classList.remove('active'); b.style.background = ''; b.style.borderColor = ''; b.style.color = '';
    });
  }
  if (btn) {
    var color = _mat9CapColors[cap] || '#516860';
    btn.classList.add('active');
    btn.style.background = color; btn.style.borderColor = color; btn.style.color = '#fff';
  }
  mat9ResumoShowSts(cap);
  mat9RenderResumoInline();
}

function mat9ResumoShowSts(cap) {
  var stRow = document.getElementById('mat9-resumo-st-row');
  if (!stRow) return;
  var sts = _mat9Subtemas[cap] || [];
  if (!sts.length) { stRow.style.display = 'none'; return; }
  var h = '<div class="resumo-st-label">Subtema</div>';
  sts.forEach(function(st, i) {
    var isActive = (_mat9Sel['resumo-st'] || 0) === (i + 1);
    h += '<button class="resumo-st-btn' + (isActive ? ' active' : '') + '" data-st="' + (i + 1) + '" onclick="mat9ResumoSelectSt(this,' + cap + ',' + (i + 1) + ')">' + st + '</button>';
  });
  stRow.innerHTML = h;
  stRow.style.display = 'flex';
}

function mat9ResumoSelectSt(btn, cap, stIdx) {
  var stRow = document.getElementById('mat9-resumo-st-row');
  if (stRow) stRow.querySelectorAll('.resumo-st-btn').forEach(function(b) { b.classList.remove('active'); });
  if (btn) btn.classList.add('active');
  _mat9Sel['resumo'] = cap;
  _mat9Sel['resumo-st'] = stIdx;
  mat9RenderResumoInline();
}

function mat9RenderResumoInline() {
  var cap = _mat9Sel['resumo'] || 1;
  var dest = document.getElementById('mat9-resumo-content');
  if (!dest) return;

  var color = (function(){
    var c = _mat9CapColors[cap] || '#516860';
    return c;
  })();

  var tagIcons = {
    'Definição':'ph-book-bookmark', 'Fórmula':'ph-function', 'Regra':'ph-check-square',
    'Propriedade':'ph-star', 'Exemplo':'ph-pencil-line', 'Estratégia':'ph-lightbulb',
    'Síntese':'ph-seal-check', 'Notação':'ph-at', 'Hierarquia':'ph-tree-structure',
    'Teorema':'ph-intersect', 'Conceito':'ph-cube'
  };

  var allCards = _mat9Cards[cap] || [];

  // Filtrar por subtema, se selecionado
  var stIdx = _mat9Sel['resumo-st'] || 0;
  var cards = allCards;
  if (stIdx > 0 && _mat9Subtemas[cap]) {
    var stLabel = (_mat9Subtemas[cap][stIdx - 1] || '').toLowerCase();
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

  _mat9PM(cap, 'teoria'); // estudou a teoria deste capítulo

  // Acordeão partilhado: grupos colapsáveis + perguntas que abrem a resposta.
  dest.innerHTML = _teoriaAccordionHTML(cards, color, tagIcons);
}

/* ════════════════════════════════════════════════════════════════
   TAB PRATICAR — exercícios gerados com correção imediata
   Renderiza tudo no painel (sem páginas externas). Reutiliza os
   motores genéricos do chapter-engine: _capBuildQuizHTML,
   _capCheckAnswer, _capShowFeedback.
   ════════════════════════════════════════════════════════════════ */

// Gerador por capítulo (resolução lazy — os buildEx_m9cN são definidos no fim do ficheiro).
// Só os caps com gerador são "praticáveis".
function _mat9Gerador(cap) {
  if (cap === 1 && typeof buildEx_m9c1 === 'function') return buildEx_m9c1;
  if (cap === 2 && typeof buildEx_m9c2 === 'function') return buildEx_m9c2;
  if (cap === 3 && typeof buildEx_m9c3 === 'function') return buildEx_m9c3;
  if (cap === 4 && typeof buildEx_m9c4 === 'function') return buildEx_m9c4;
  if (cap === 5 && typeof buildEx_m9c5 === 'function') return buildEx_m9c5;
  if (cap === 6 && typeof buildEx_m9c6 === 'function') return buildEx_m9c6;
  return null;
}
var _mat9TemasCount = { 1: 3, 2: 4, 3: 4, 4: 3, 5: 4, 6: 4 };

// Estado da prática
var _mat9Prat = { cap: 1, st: 0, nivel: 'medio', score: { correct: 0, total: 0 }, answered: {}, exs: [] };

function _mat9PratStorageKey(cap) { return 'edupt_mat9_cap' + cap; }

function mat9BuildPraticarNav() {
  var capRow = document.getElementById('mat9-praticar-cap-row');
  if (!capRow) return;
  var activeCap = _mat9Prat.cap || 1;
  var h = '';
  _mat9CapMeta.forEach(function(m) {
    var hasGen = !!_mat9Gerador(m.n);
    var color = _mat9CapColors[m.n] || '#516860';
    var isActive = activeCap === m.n;
    var activeStyle = isActive ? 'background:' + color + ';border-color:' + color + ';color:#fff' : '';
    var disabledStyle = hasGen ? '' : 'opacity:.45;cursor:not-allowed';
    var onclick = hasGen ? 'mat9PraticarSelectCap(' + m.n + ',this)' : '';
    var title = hasGen ? '' : ' title="Em preparação"';
    h += '<button class="resumo-cap-btn' + (isActive ? ' active' : '') + '" data-cap="' + m.n + '" onclick="' + onclick + '" style="' + activeStyle + ';' + disabledStyle + '"' + title + '>'
       + '<span class="resumo-cap-icon">' + m.icon + '</span>' + m.label + (hasGen ? '' : ' ·') + '</button>';
  });
  capRow.innerHTML = h;
  mat9PraticarShowSts(activeCap);
}

function mat9PraticarShowSts(cap) {
  var stRow = document.getElementById('mat9-praticar-st-row');
  if (!stRow) return;
  var sts = _mat9Subtemas[cap] || [];
  if (!sts.length) { stRow.style.display = 'none'; return; }
  var h = '<div class="resumo-st-label">Subtema</div>';
  h += '<button class="resumo-st-btn' + (_mat9Prat.st === 0 ? ' active' : '') + '" data-st="0" onclick="mat9PraticarSelectSt(this,0)">Todos</button>';
  sts.forEach(function(st, i) {
    h += '<button class="resumo-st-btn' + (_mat9Prat.st === (i + 1) ? ' active' : '') + '" data-st="' + (i + 1) + '" onclick="mat9PraticarSelectSt(this,' + (i + 1) + ')">' + st + '</button>';
  });
  stRow.innerHTML = h;
  stRow.style.display = 'flex';
}

function mat9PraticarSelectCap(cap, btn) {
  if (!_mat9Gerador(cap)) return;
  _mat9Prat.cap = cap;
  _mat9Prat.st = 0;
  var capRow = document.getElementById('mat9-praticar-cap-row');
  if (capRow) capRow.querySelectorAll('.resumo-cap-btn').forEach(function(b) { b.classList.remove('active'); b.style.background = ''; b.style.borderColor = ''; b.style.color = ''; });
  if (btn) { var color = _mat9CapColors[cap] || '#516860'; btn.classList.add('active'); btn.style.background = color; btn.style.borderColor = color; btn.style.color = '#fff'; }
  mat9PraticarShowSts(cap);
  mat9GerarExercicios();
}

function mat9PraticarSelectSt(btn, stIdx) {
  var stRow = document.getElementById('mat9-praticar-st-row');
  if (stRow) stRow.querySelectorAll('.resumo-st-btn').forEach(function(b) { b.classList.remove('active'); });
  if (btn) btn.classList.add('active');
  _mat9Prat.st = stIdx;
  mat9GerarExercicios();
}

function mat9PraticarSetNivel(nivel, btn) {
  _mat9Prat.nivel = nivel;
  var grp = document.getElementById('mat9-praticar-nivel');
  if (grp) grp.querySelectorAll('.gen-level-btn').forEach(function(b) { b.classList.remove('active'); });
  if (btn) btn.classList.add('active');
  mat9GerarExercicios();
}

// Mapa subtema → temas a usar no gerador (Cap 1 Números)
var _mat9SubtemaTemas = {
  1: { // Cap 1 Números Reais e Inequações (3 temas)
    1: ['1'],  // Conjuntos numéricos
    2: ['2'],  // Intervalos
    3: ['3']   // Inequações do 1.º grau
  },
  2: { // Cap 2 Equações do 2.º grau (4 temas)
    1: ['1'],  // Casos notáveis
    2: ['2'],  // Operações com polinómios
    3: ['3'],  // Equações do 2.º grau (resolvente)
    4: ['4']   // Forma canónica / discriminante
  },
  3: { // Cap 3 Funções (4 temas)
    1: ['1'],  // Função afim
    2: ['2'],  // Função quadrática
    3: ['3'],  // Proporcionalidade inversa
    4: ['4']   // Imagem / declive
  },
  4: { // Cap 4 Trigonometria e Circunferência (3 temas)
    1: ['1'],  // Razões trigonométricas
    2: ['2'],  // Lados de triângulos retângulos
    3: ['3']   // Ângulos ao centro e arcos
  },
  5: { // Cap 5 Probabilidades (4 temas)
    1: ['1'],  // Espaço de resultados
    2: ['2'],  // Probabilidade (Laplace)
    3: ['3'],  // Acontecimento contrário
    4: ['4']   // Operações com acontecimentos
  },
  6: { // Cap 6 Estatística (4 temas)
    1: ['1'],  // Média
    2: ['2'],  // Mediana
    3: ['3'],  // Quartis / AIQ
    4: ['4']   // Amplitude
  }
};

function mat9GerarExercicios() {
  var dest = document.getElementById('mat9-praticar-content');
  if (!dest) return;
  var cap = _mat9Prat.cap, gen = _mat9Gerador(cap);
  if (!gen) { dest.innerHTML = ''; return; }

  // Que temas usar?
  var temas;
  if (_mat9Prat.st > 0 && _mat9SubtemaTemas[cap] && _mat9SubtemaTemas[cap][_mat9Prat.st]) {
    temas = _mat9SubtemaTemas[cap][_mat9Prat.st];
  } else {
    temas = [];
    for (var t = 1; t <= (_mat9TemasCount[cap] || 1); t++) temas.push(String(t));
  }

  var QTD = 8;
  var tipos = ['mc', 'fill', 'mc', 'vf', 'fill', 'mc', 'fill', 'mc'];
  var exs = [];
  for (var i = 0; i < QTD; i++) {
    var tema = temas[i % temas.length];
    var ex = gen(tema, tipos[i % tipos.length], _mat9Prat.nivel);
    if (ex) exs.push(Object.assign({}, ex, { num: i + 1 }));
  }
  _mat9Prat.exs = exs;
  _mat9Prat.answered = {};
  _mat9Prat.score = { correct: 0, total: 0 };

  // Score bar + questões (reutiliza motor genérico do chapter-engine)
  var scoreBar = '<div class="score-bar" id="mat9-prat-scorebar">'
    + '<div><div class="score-num" id="mat9-prat-score">0</div><div class="score-label">pontos</div></div>'
    + '<div><div class="score-num" id="mat9-prat-total">/ 0</div><div class="score-label">respondidas</div></div>'
    + '<div class="progress-track"><div class="progress-fill" id="mat9-prat-prog" style="width:0%"></div></div>'
    + '<button class="btn btn-ghost ml-auto" onclick="mat9GerarExercicios()">↺ Novas questões</button>'
    + '</div>';
  var quizHTML = (typeof _capBuildQuizHTML === 'function')
    ? _capBuildQuizHTML(exs, 'm8ex', 'mat9CheckEx')
    : '<p style="color:var(--ink4)">Motor de exercícios indisponível.</p>';
  dest.innerHTML = scoreBar + quizHTML;
}

function mat9CheckEx(qid, tipo, val, btn) {
  if (_mat9Prat.answered[qid]) return;
  if (typeof _capCheckAnswer !== 'function') return;
  var r = _capCheckAnswer(qid, tipo, val);
  if (!r) return; // resposta vazia
  _mat9Prat.answered[qid] = true;
  if (r.correct) _mat9Prat.score.correct++;
  _mat9Prat.score.total++;
  if (typeof _capShowFeedback === 'function') _capShowFeedback(qid, r.correct, r.expl, val, btn);
  var se = document.getElementById('mat9-prat-score'); if (se) se.textContent = _mat9Prat.score.correct;
  var te = document.getElementById('mat9-prat-total'); if (te) te.textContent = '/ ' + _mat9Prat.score.total;
  var pe = document.getElementById('mat9-prat-prog'); if (pe && _mat9Prat.exs.length) pe.style.width = (_mat9Prat.score.total / _mat9Prat.exs.length * 100) + '%';
  mat9SaveProgress(_mat9Prat.cap, r.correct);
}

// ═══ PROGRESSO (localStorage por capítulo) ═══
function mat9SaveProgress(cap, correct) {
  try {
    var key = _mat9PratStorageKey(cap);
    var d = JSON.parse(localStorage.getItem(key) || '{}');
    if (!d.sections) d.sections = {};
    if (!d.sections.praticar) d.sections.praticar = { correct: 0, total: 0 };
    d.sections.praticar.total++;
    if (correct) d.sections.praticar.correct++;
    d.lastActivity = Date.now();
    localStorage.setItem(key, JSON.stringify(d));
  } catch (e) {}
}

// Regista atividade no ProgressManager (XP + streak), com capId próprio do 9.º ano
// ('m9capN') para não misturar com o progresso do 7.º ano.
function _mat9PM(cap, tipo, opts) {
  if (typeof ProgressManager === 'undefined') return;
  try { ProgressManager.record('m9cap' + cap, tipo, opts || {}); } catch (e) {}
}

/* ════════════════════════════════════════════════════════════════
   HELPER: linha de capítulos para sub-modos (quiz, flashcards, teste)
   Só capítulos com gerador ficam ativos.
   ════════════════════════════════════════════════════════════════ */
function _mat9BuildCapRow(rowId, activeCap, onclickName) {
  var row = document.getElementById(rowId);
  if (!row) return;
  var h = '';
  _mat9CapMeta.forEach(function(m) {
    var hasGen = !!_mat9Gerador(m.n);
    var color = _mat9CapColors[m.n] || '#516860';
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

function _mat9SetActiveCapBtn(rowId, btn, cap) {
  var row = document.getElementById(rowId);
  if (row) row.querySelectorAll('.resumo-cap-btn').forEach(function(b){ b.classList.remove('active'); b.style.background=''; b.style.borderColor=''; b.style.color=''; });
  if (btn) { var color = _mat9CapColors[cap] || '#516860'; btn.classList.add('active'); btn.style.background=color; btn.style.borderColor=color; btn.style.color='#fff'; }
}

// Gera uma questão de escolha múltipla para um capítulo (usada por quiz).
function _mat9BuildMcQuestion(cap) {
  var gen = _mat9Gerador(cap);
  if (!gen) return null;
  var nTemas = _mat9TemasCount[cap] || 1;
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
var _mat9Quiz = { cap: 1, lives: 3, streak: 0, maxStreak: 0, score: 0, total: 0, answered: false, current: null };

function mat9QuizBuildNav() {
  if (!_mat9Gerador(_mat9Quiz.cap)) _mat9Quiz.cap = 1;
  _mat9BuildCapRow('mat9-quiz-cap-row', _mat9Quiz.cap, 'mat9QuizSelectCap');
  mat9QuizStart();
}

function mat9QuizSelectCap(cap, btn) {
  if (!_mat9Gerador(cap)) return;
  _mat9SetActiveCapBtn('mat9-quiz-cap-row', btn, cap);
  _mat9Quiz.cap = cap;
  mat9QuizStart();
}

function mat9QuizStart() {
  _mat9Quiz.lives = 3; _mat9Quiz.streak = 0; _mat9Quiz.maxStreak = 0;
  _mat9Quiz.score = 0; _mat9Quiz.total = 0; _mat9Quiz.answered = false;
  mat9QuizNext();
}

function mat9QuizNext() {
  var app = document.getElementById('mat9-quiz-app');
  if (!app) return;
  if (_mat9Quiz.lives <= 0) { mat9QuizGameOver(app); return; }
  var ex = _mat9BuildMcQuestion(_mat9Quiz.cap);
  if (!ex) { app.innerHTML = '<p style="color:var(--ink4);padding:2rem;text-align:center">Sem questões disponíveis para este capítulo.</p>'; return; }
  _mat9Quiz.current = ex; _mat9Quiz.answered = false;
  var lives = '';
  for (var i = 0; i < 3; i++) lives += (i < _mat9Quiz.lives ? '❤️' : '🖤') + ' ';
  var opts = '';
  ex.opcoes.forEach(function(opt, idx) {
    opts += '<button class="qg-opt-btn" id="mat9qopt-' + idx + '" onclick="mat9QuizAnswer(' + idx + ')">' + opt + '</button>';
  });
  app.innerHTML =
    '<div class="qg-hub-bar">' +
      '<div class="qg-hub-lives">' + lives + '</div>' +
      '<div class="qg-hub-streak">' + (_mat9Quiz.streak > 1 ? '🔥 ' + _mat9Quiz.streak + ' seguidas' : '') + '</div>' +
      '<div class="qg-hub-score">✓ ' + _mat9Quiz.score + ' / ' + _mat9Quiz.total + '</div>' +
    '</div>' +
    '<div class="qg-hub-question">' + ex.enun + '</div>' +
    '<div class="qg-hub-opts">' + opts + '</div>' +
    '<div class="qg-hub-feedback" id="mat9-quiz-fb" style="min-height:2.5rem"></div>';
}

function mat9QuizAnswer(idx) {
  if (_mat9Quiz.answered) return;
  _mat9Quiz.answered = true;
  var ex = _mat9Quiz.current; if (!ex) return;
  var correct = String(ex.opcoes[idx]) === String(ex.resposta);
  _mat9Quiz.total++;
  document.querySelectorAll('.qg-opt-btn').forEach(function(b, i) {
    b.disabled = true;
    if (String(ex.opcoes[i]) === String(ex.resposta)) { b.style.background = '#4caf50'; b.style.color = '#fff'; }
  });
  var clicked = document.getElementById('mat9qopt-' + idx);
  if (clicked && !correct) { clicked.style.background = '#f44336'; clicked.style.color = '#fff'; }
  var fb = document.getElementById('mat9-quiz-fb');
  if (correct) {
    _mat9Quiz.score++; _mat9Quiz.streak++;
    if (_mat9Quiz.streak > _mat9Quiz.maxStreak) _mat9Quiz.maxStreak = _mat9Quiz.streak;
    if (fb) fb.innerHTML = '<span style="color:var(--correct,#3ecf8e);font-weight:700">✓ Certo!</span> ' + (ex.expl || '');
  } else {
    _mat9Quiz.lives--; _mat9Quiz.streak = 0;
    if (fb) fb.innerHTML = '<span style="color:var(--wrong,#ff6b6b);font-weight:700">✗ Errado.</span> ' + (ex.expl || '');
  }
  mat9SaveProgress(_mat9Quiz.cap, correct);
  setTimeout(function(){ mat9QuizNext(); }, 1400);
}

function mat9QuizGameOver(app) {
  var pct = _mat9Quiz.total > 0 ? Math.round(_mat9Quiz.score / _mat9Quiz.total * 100) : 0;
  _mat9PM(_mat9Quiz.cap, 'quiz', { pontuacao: _mat9Quiz.score, total: _mat9Quiz.total });
  var emoji = pct >= 90 ? '🏆' : pct >= 70 ? '⭐' : pct >= 50 ? '👍' : '📚';
  app.innerHTML =
    '<div style="text-align:center;padding:2.5rem 1rem">' +
      '<div style="font-size:3.5rem;margin-bottom:.75rem">' + emoji + '</div>' +
      '<div style="font-family:\'Cormorant Garamond\',serif;font-size:2rem;font-weight:900;color:var(--ink)">' + pct + '%</div>' +
      '<div style="color:var(--ink3);margin:.5rem 0 1.5rem">' + _mat9Quiz.score + ' certas em ' + _mat9Quiz.total + ' questões</div>' +
      '<div style="font-size:1.5rem;margin-bottom:1.5rem">Melhor sequência: ' + (_mat9Quiz.maxStreak || 0) + ' 🔥</div>' +
      '<button class="btn btn-primary" onclick="mat9QuizStart()">↺ Jogar novamente</button>' +
    '</div>';
}

/* ════════════════════════════════════════════════════════════════
   SUB-MODO: FLASHCARDS
   ════════════════════════════════════════════════════════════════ */
var _mat9Fc = { cap: 1, idx: 0, flipped: false, cards: [] };

function mat9FcBuildNav() {
  // primeiro capítulo com cartões
  if (!(_mat9Cards[_mat9Fc.cap] && _mat9Cards[_mat9Fc.cap].length)) {
    for (var c = 1; c <= _mat9CapMeta.length; c++) { if (_mat9Cards[c] && _mat9Cards[c].length) { _mat9Fc.cap = c; break; } }
  }
  // linha de capítulos: só os que têm cartões
  var row = document.getElementById('mat9-fc-cap-row');
  if (row) {
    var h = '';
    _mat9CapMeta.forEach(function(m) {
      var has = !!(_mat9Cards[m.n] && _mat9Cards[m.n].length);
      var color = _mat9CapColors[m.n] || '#516860';
      var isActive = _mat9Fc.cap === m.n;
      var activeStyle = isActive ? 'background:' + color + ';border-color:' + color + ';color:#fff' : '';
      var disabled = has ? '' : 'opacity:.45;cursor:not-allowed';
      var onclick = has ? ('mat9FcSelectCap(' + m.n + ',this)') : '';
      var title = has ? '' : ' title="Em preparação"';
      h += '<button class="resumo-cap-btn' + (isActive ? ' active' : '') + '" onclick="' + onclick + '" style="' + activeStyle + ';' + disabled + '"' + title + '>'
         + '<span class="resumo-cap-icon">' + m.icon + '</span>' + m.label + (has ? '' : ' ·') + '</button>';
    });
    row.innerHTML = h;
  }
  mat9FcSelectCap(_mat9Fc.cap, null);
}

function mat9FcSelectCap(cap, btn) {
  if (!(_mat9Cards[cap] && _mat9Cards[cap].length)) return;
  if (btn) _mat9SetActiveCapBtn('mat9-fc-cap-row', btn, cap);
  _mat9Fc.cap = cap;
  _mat9Fc.cards = _mat9Cards[cap].slice();
  _mat9Fc.idx = 0; _mat9Fc.flipped = false;
  _mat9PM(cap, 'flashcard');
  mat9FcRender();
}

function mat9FcRender() {
  var app = document.getElementById('mat9-fc-app');
  if (!app) return;
  var cards = _mat9Fc.cards;
  if (!cards.length) { app.innerHTML = '<p style="color:var(--ink4);padding:2rem;text-align:center">Sem flashcards para este capítulo.</p>'; return; }
  var card = cards[_mat9Fc.idx];
  var color = _mat9CapColors[_mat9Fc.cap] || '#516860';
  var pct = Math.round((_mat9Fc.idx + 1) / cards.length * 100);
  app.innerHTML =
    '<div class="card card-narrow">' +
      '<div class="flex items-center justify-between mb-3">' +
        '<span class="fc2-tag-pill" style="background:' + color + ';color:#fff">' + (card.tag || '') + '</span>' +
        '<span class="fc-counter">' + (_mat9Fc.idx + 1) + ' / ' + cards.length + '</span>' +
      '</div>' +
      '<div class="fc2-prog-track"><div class="fc2-prog-fill" style="width:' + pct + '%;background:' + color + '"></div></div>' +
      '<div onclick="mat9FcFlip()" class="fc2-card-inner" style="cursor:pointer;min-height:140px">' +
        '<div>' +
          '<p style="font-size:1.05rem;font-weight:600;color:var(--ink);line-height:1.4">' + (card.q || '') + '</p>' +
          '<p style="font-size:.9rem;color:' + color + ';margin-top:.75rem;line-height:1.5;display:' + (_mat9Fc.flipped ? 'block' : 'none') + '">' + (card.a || '') + '</p>' +
          '<p style="font-size:.75rem;color:var(--ink4);margin-top:.5rem">' + (_mat9Fc.flipped ? '' : 'Carrega para ver a resposta') + '</p>' +
        '</div>' +
      '</div>' +
      '<div class="flex flex-wrap gap-3 justify-center mt-5">' +
        '<button class="btn btn-ghost" onclick="mat9FcPrev()">← Anterior</button>' +
        '<button class="btn btn-primary" onclick="mat9FcFlip()">↕ Virar</button>' +
        '<button class="btn btn-ghost" onclick="mat9FcNext()">Seguinte →</button>' +
      '</div>' +
    '</div>';
}

function mat9FcFlip() { _mat9Fc.flipped = !_mat9Fc.flipped; mat9FcRender(); }
function mat9FcNext() { _mat9Fc.idx = (_mat9Fc.idx + 1) % (_mat9Fc.cards.length || 1); _mat9Fc.flipped = false; mat9FcRender(); }
function mat9FcPrev() { _mat9Fc.idx = (_mat9Fc.idx - 1 + (_mat9Fc.cards.length || 1)) % (_mat9Fc.cards.length || 1); _mat9Fc.flipped = false; mat9FcRender(); }

/* ════════════════════════════════════════════════════════════════
   SUB-MODO: TESTE CRONOMETRADO
   ════════════════════════════════════════════════════════════════ */
var _mat9Teste = { cap: 1, nivel: 'medio', qtd: 10, tempo: 600, exs: [], answered: {}, score: { correct: 0, total: 0 }, timer: null, restante: 0 };

function mat9TesteBuildNav() {
  if (!_mat9Gerador(_mat9Teste.cap)) _mat9Teste.cap = 1;
  _mat9BuildCapRow('mat9-teste-cap-row', _mat9Teste.cap, 'mat9TesteSelectCap');
  mat9TesteRenderConfig();
}

function mat9TesteSelectCap(cap, btn) {
  if (!_mat9Gerador(cap)) return;
  _mat9SetActiveCapBtn('mat9-teste-cap-row', btn, cap);
  _mat9Teste.cap = cap;
  mat9TesteRenderConfig();
}

function mat9TesteRenderConfig() {
  var app = document.getElementById('mat9-teste-app');
  if (!app) return;
  if (_mat9Teste.timer) { clearInterval(_mat9Teste.timer); _mat9Teste.timer = null; }
  app.innerHTML =
    '<div class="card">' +
      '<div class="card-title">Configurar teste</div>' +
      '<div class="flex flex-wrap gap-6 items-end">' +
        '<div><div class="label-small">Nível</div>' +
          '<div class="gen-level-group" id="mat9-teste-nivel">' +
            '<button class="gen-level-btn' + (_mat9Teste.nivel==='facil'?' active':'') + '" onclick="mat9TesteSetNivel(\'facil\',this)"><span class="status-dot status-dot--easy"></span> Fácil</button>' +
            '<button class="gen-level-btn' + (_mat9Teste.nivel==='medio'?' active':'') + '" onclick="mat9TesteSetNivel(\'medio\',this)"><span class="status-dot status-dot--medium"></span> Médio</button>' +
            '<button class="gen-level-btn' + (_mat9Teste.nivel==='dificil'?' active':'') + '" onclick="mat9TesteSetNivel(\'dificil\',this)"><span class="status-dot status-dot--hard"></span> Difícil</button>' +
          '</div></div>' +
        '<div><div class="label-small">N.º questões</div>' +
          '<select class="ai-select" id="mat9-teste-qtd"><option value="10">10</option><option value="15">15</option><option value="20">20</option></select></div>' +
        '<div><div class="label-small">Tempo</div>' +
          '<select class="ai-select" id="mat9-teste-tempo"><option value="600">10 min</option><option value="900">15 min</option><option value="1800">30 min</option></select></div>' +
        '<button class="btn btn-primary" onclick="mat9TesteStart()">▶ Iniciar teste</button>' +
      '</div>' +
    '</div>';
}

function mat9TesteSetNivel(nivel, btn) {
  _mat9Teste.nivel = nivel;
  var grp = document.getElementById('mat9-teste-nivel');
  if (grp) grp.querySelectorAll('.gen-level-btn').forEach(function(b){ b.classList.remove('active'); });
  if (btn) btn.classList.add('active');
}

function mat9TesteStart() {
  var gen = _mat9Gerador(_mat9Teste.cap); if (!gen) return;
  var qtdEl = document.getElementById('mat9-teste-qtd'), tempoEl = document.getElementById('mat9-teste-tempo');
  _mat9Teste.qtd = qtdEl ? parseInt(qtdEl.value) : 10;
  _mat9Teste.tempo = tempoEl ? parseInt(tempoEl.value) : 600;
  var nTemas = _mat9TemasCount[_mat9Teste.cap] || 1;
  var tipos = ['mc', 'fill', 'mc', 'vf', 'fill'];
  var exs = [];
  for (var i = 0; i < _mat9Teste.qtd; i++) {
    var ex = gen(String((i % nTemas) + 1), tipos[i % tipos.length], _mat9Teste.nivel);
    if (ex) exs.push(Object.assign({}, ex, { num: i + 1 }));
  }
  _mat9Teste.exs = exs; _mat9Teste.answered = {}; _mat9Teste.score = { correct: 0, total: 0 };
  _mat9Teste.restante = _mat9Teste.tempo;

  var app = document.getElementById('mat9-teste-app');
  var quizHTML = (typeof _capBuildQuizHTML === 'function') ? _capBuildQuizHTML(exs, 'm8teste', 'mat9TesteCheck') : '';
  app.innerHTML =
    '<div class="exam-progress-bar" style="position:sticky;top:0;z-index:5;background:var(--surface);padding:.75rem;border-radius:12px;display:flex;align-items:center;gap:1rem;flex-wrap:wrap">' +
      '<div style="font-family:\'Cormorant Garamond\',serif;font-size:1.8rem;font-weight:900" id="mat9-teste-timer">' + _mat9FmtTime(_mat9Teste.restante) + '</div>' +
      '<div style="font-size:.78rem;color:var(--ink3)">Respondidas: <span id="mat9-teste-answered">0 / ' + _mat9Teste.qtd + '</span></div>' +
      '<button class="btn btn-ghost ml-auto" onclick="mat9TesteFinish()">⏹ Terminar</button>' +
    '</div>' +
    '<div id="mat9-teste-questions" style="margin-top:1rem">' + quizHTML + '</div>';

  _mat9Teste.timer = setInterval(function() {
    _mat9Teste.restante--;
    var t = document.getElementById('mat9-teste-timer');
    if (t) t.textContent = _mat9FmtTime(_mat9Teste.restante);
    if (_mat9Teste.restante <= 0) mat9TesteFinish();
  }, 1000);
}

function _mat9FmtTime(s) {
  var m = Math.floor(s / 60), sec = s % 60;
  return (m < 10 ? '0' : '') + m + ':' + (sec < 10 ? '0' : '') + sec;
}

function mat9TesteCheck(qid, tipo, val, btn) {
  if (_mat9Teste.answered[qid]) return;
  if (typeof _capCheckAnswer !== 'function') return;
  var r = _capCheckAnswer(qid, tipo, val);
  if (!r) return;
  _mat9Teste.answered[qid] = true;
  if (r.correct) _mat9Teste.score.correct++;
  _mat9Teste.score.total++;
  if (typeof _capShowFeedback === 'function') _capShowFeedback(qid, r.correct, r.expl, val, btn);
  var a = document.getElementById('mat9-teste-answered');
  if (a) a.textContent = _mat9Teste.score.total + ' / ' + _mat9Teste.qtd;
  mat9SaveProgress(_mat9Teste.cap, r.correct);
  if (_mat9Teste.score.total >= _mat9Teste.qtd) setTimeout(mat9TesteFinish, 600);
}

function mat9TesteFinish() {
  if (_mat9Teste.timer) { clearInterval(_mat9Teste.timer); _mat9Teste.timer = null; }
  var app = document.getElementById('mat9-teste-app');
  if (!app) return;
  var total = _mat9Teste.qtd;
  var correct = _mat9Teste.score.correct;
  var pct = total > 0 ? Math.round(correct / total * 100) : 0;
  _mat9PM(_mat9Teste.cap, 'quiz', { pontuacao: correct, total: total });
  var nota = Math.round(correct / total * 20 * 10) / 10;
  var emoji = pct >= 90 ? '🏆' : pct >= 70 ? '⭐' : pct >= 50 ? '👍' : '📚';
  app.innerHTML =
    '<div style="text-align:center;padding:2.5rem 1rem">' +
      '<div style="font-size:3.5rem;margin-bottom:.75rem">' + emoji + '</div>' +
      '<div style="font-family:\'Cormorant Garamond\',serif;font-size:2.2rem;font-weight:900;color:var(--ink)">' + nota + ' / 20</div>' +
      '<div style="color:var(--ink3);margin:.5rem 0 1.5rem">' + correct + ' certas em ' + total + ' questões (' + pct + '%)</div>' +
      '<button class="btn btn-primary" onclick="mat9TesteRenderConfig()">↺ Novo teste</button>' +
    '</div>';
}

/* ════════════════════════════════════════════════════════════════
   SUB-MODO: JOGOS (reutiliza o motor genérico _j24AutoInit)
   ════════════════════════════════════════════════════════════════ */
var _mat9JogosInited = false;
function mat9JogosInit() {
  _mat9PM(_mat9Prat.cap || 1, 'jogo');
  if (_mat9JogosInited) return;
  if (typeof _j24AutoInit === 'function') {
    _j24AutoInit('mat9-jogos-app', 'medio');
    _mat9JogosInited = true;
  } else {
    var app = document.getElementById('mat9-jogos-app');
    if (app) app.innerHTML = '<p style="color:var(--ink4);padding:2rem;text-align:center">Jogos indisponíveis (motor não carregado).</p>';
  }
}

/* ════════════════════════════════════════════════════════════════
   TAB PROGRESSO
   Lê edupt_mat9_capN (gravado por mat9SaveProgress). Mostra resumo
   global, stats, barras por capítulo, Relatório PDF e Limpar.
   ════════════════════════════════════════════════════════════════ */
function _mat9ProgGetCaps() {
  var out = [];
  var nCaps = _mat9CapMeta.length;
  for (var cap = 1; cap <= nCaps; cap++) {
    var correct = 0, total = 0;
    try {
      var d = JSON.parse(localStorage.getItem('edupt_mat9_cap' + cap) || '{}');
      if (d.sections) Object.keys(d.sections).forEach(function(k) {
        correct += (d.sections[k].correct || 0);
        total += (d.sections[k].total || 0);
      });
    } catch (e) {}
    out.push({ cap: cap, correct: correct, total: total, pct: total > 0 ? Math.round(correct / total * 100) : 0 });
  }
  return out;
}

function mat9RenderProgresso() {
  var el = document.getElementById('mat9-progresso-content');
  if (!el) return;
  var caps = _mat9ProgGetCaps();
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
     + '<button onclick="mat9ProgDownloadPDF()" style="font-family:inherit;font-size:.82rem;font-weight:700;color:#8b3a35;background:none;border:none;cursor:pointer;text-decoration:underline;padding:0">Guarda o relatório PDF</button> para o manteres.</span>'
     + '</div>';

  // Resumo global (gradiente terracota do 9.º ano)
  h += '<div style="background:var(--m9c1-base);border:1.5px solid var(--m9c1-mid);border-radius:16px;padding:1.1rem 1.25rem;margin-bottom:1.25rem;display:flex;align-items:center;gap:1rem;flex-wrap:wrap">'
     +   '<div style="width:52px;height:52px;border-radius:50%;background:var(--m9c1-mid);display:flex;align-items:center;justify-content:center;flex-shrink:0"><i class="ph ' + icon + '" style="font-size:1.4rem;color:#fff"></i></div>'
     +   '<div style="flex:1;min-width:180px">'
     +     '<div style="font-family:\'Cormorant Garamond\',serif;font-size:1.6rem;font-weight:900;color:var(--ink);line-height:1">' + (totalT > 0 ? globalPct + '<span style="font-size:1rem">%</span>' : '—') + '</div>'
     +     '<div style="font-size:.82rem;color:var(--ink2);margin-top:3px">' + msg + '</div>'
     +   '</div>'
     +   '<button class="btn btn-ghost" onclick="mat9ProgDownloadPDF()" style="font-size:.78rem;padding:7px 14px;display:inline-flex;align-items:center;gap:5px"><i class="ph ph-file-text"></i>Relatório PDF</button>'
     + '</div>';

  // XP + streak do ProgressManager (apenas dos capítulos do 9.º ano)
  var pmXp = 0, pmStreak = 0;
  if (typeof ProgressManager !== 'undefined') {
    try {
      var sum = ProgressManager.getSummary();
      pmStreak = sum.streak || 0;
      if (sum.caps) Object.keys(sum.caps).forEach(function(k) { if (k.indexOf('m9cap') === 0) pmXp += (sum.caps[k].xp || 0); });
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
    var m = _mat9CapMeta[c.cap - 1];
    var color = _mat9CapColors[c.cap] || '#516860';
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
      var mp = _mat9CapMeta[pior.cap - 1];
      var colorp = _mat9CapColors[pior.cap] || '#516860';
      h += '<div class="card mt-4" style="border-color:' + colorp + '">'
        + '<div class="card-title" style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:.5rem">'
        + '<span>🎯 Treino Direcionado</span></div>'
        + '<div style="font-size:.85rem;color:var(--ink2);margin:.3rem 0 .8rem">O capítulo onde tens mais a melhorar é <strong>' + mp.label + '</strong> (' + pior.pct + '%). Pratica mais um pouco para subir a tua taxa!</div>'
        + '<button class="btn btn-primary" onclick="mat9TreinarCap(' + pior.cap + ')" style="display:inline-flex;align-items:center;gap:6px"><i class="ph ph-target"></i> Treinar ' + mp.label + '</button>'
        + '</div>';
    }
  }

  // Última atualização
  h += '<div style="font-size:.72rem;color:var(--ink4);margin-top:1rem">Última atualização: ' + new Date().toLocaleString('pt-PT', { hour: '2-digit', minute: '2-digit', day: '2-digit', month: '2-digit' }) + '</div>';

  // Limpar
  h += '<div class="mt-4 flex flex-wrap gap-3"><button class="btn btn-ghost" onclick="mat9ProgReset()"><i class="ph ph-trash"></i> Limpar progresso</button></div>';

  el.innerHTML = h;
}

// Abre a tab Exercícios da Praticar já no capítulo indicado (treino direcionado).
function mat9TreinarCap(cap) {
  _mat9Prat.cap = cap;
  _mat9Prat.st = 0;
  mat9SwitchTab('exercicios', null);
}

function mat9ProgReset() {
  if (typeof window !== 'undefined' && window.confirm && !window.confirm('Limpar todo o progresso do 9.º ano? Esta ação não pode ser desfeita.')) return;
  for (var cap = 1; cap <= _mat9CapMeta.length; cap++) { try { localStorage.removeItem('edupt_mat9_cap' + cap); } catch (e) {} }
  // Remove só os capítulos do 9.º ano (m9cap*) do ProgressManager, preservando os outros anos.
  try {
    var raw = localStorage.getItem('edupt_progress_v2');
    if (raw) {
      var d = JSON.parse(raw);
      if (d.caps) { Object.keys(d.caps).forEach(function(k) { if (k.indexOf('m9cap') === 0) delete d.caps[k]; }); }
      localStorage.setItem('edupt_progress_v2', JSON.stringify(d));
    }
  } catch (e) {}
  mat9RenderProgresso();
  if (typeof eduToast === 'function') eduToast('Progresso do 9.º ano limpo.', 'ok');
}

function mat9ProgDownloadPDF() {
  var caps = _mat9ProgGetCaps();
  var totalC = 0, totalT = 0;
  caps.forEach(function(c) { totalC += c.correct; totalT += c.total; });
  var globalPct = totalT > 0 ? Math.round(totalC / totalT * 100) : 0;
  var rows = caps.map(function(c) {
    var m = _mat9CapMeta[c.cap - 1];
    return '<tr><td style="padding:6px 10px;border-bottom:1px solid #eee">' + m.label + '</td>'
      + '<td style="padding:6px 10px;border-bottom:1px solid #eee;text-align:center">' + (c.total > 0 ? c.correct + ' / ' + c.total : '—') + '</td>'
      + '<td style="padding:6px 10px;border-bottom:1px solid #eee;text-align:center">' + (c.total > 0 ? c.pct + '%' : '—') + '</td></tr>';
  }).join('');
  var html = '<div style="font-family:Arial,sans-serif;max-width:680px;margin:0 auto;padding:24px">'
    + '<h1 style="font-size:20px;margin:0 0 4px">Relatório de Progresso · Matemática 9.º Ano</h1>'
    + '<div style="color:#666;font-size:13px;margin-bottom:16px">3ponto14 · ' + new Date().toLocaleString('pt-PT', { day: '2-digit', month: '2-digit', year: 'numeric' }) + '</div>'
    + '<div style="background:#eef3f9;border:1px solid #5a7fa8;border-radius:8px;padding:12px 16px;margin-bottom:16px">'
    + '<strong>Taxa global:</strong> ' + (totalT > 0 ? globalPct + '%' : '—') + ' &nbsp;·&nbsp; ' + totalC + ' certas em ' + totalT + ' questões.</div>'
    + '<table style="width:100%;border-collapse:collapse;font-size:14px"><thead><tr style="background:#36527a;color:#fff">'
    + '<th style="padding:8px 10px;text-align:left">Capítulo</th><th style="padding:8px 10px">Certas</th><th style="padding:8px 10px">%</th></tr></thead>'
    + '<tbody>' + rows + '</tbody></table></div>';
  if (typeof htmlToPdfDownload === 'function') htmlToPdfDownload(html, 'progresso-mat9.pdf');
  else if (typeof eduToast === 'function') eduToast('Geração de PDF indisponível.', 'warn');
}

/* ════════════════════════════════════════════════════════════════
   TAB FICHAS — gerador rico (multi-capítulo), igual ao 7.º ano.
   Tipos: resumo teórico, exercícios, teste, minitestes, soluções.
   Seleção de vários capítulos; nível; nº de exercícios; PDF ou HTML.
   ════════════════════════════════════════════════════════════════ */
var _mat9gf = {
  caps: {},            // { cap: true } selecionados
  tipos: { resumo: true, exercicios: true, teste: true, minitestes: false, solucoes: true },
  dif: 'facil',
  qty: 10
};

// Constrói a lista de capítulos selecionáveis (só os com gerador).
function mat9FichasBuildNav() {
  var el = document.getElementById('mat9-fichas-caps');
  if (!el) return;
  // por defeito, seleciona o primeiro capítulo com gerador
  var temAlgum = false;
  for (var k in _mat9gf.caps) { if (_mat9gf.caps[k]) { temAlgum = true; break; } }
  var h = '';
  _mat9CapMeta.forEach(function(m) {
    var hasGen = !!_mat9Gerador(m.n);
    if (!hasGen) return;
    if (!temAlgum) { _mat9gf.caps[m.n] = true; temAlgum = true; } // 1.º disponível
    var sel = !!_mat9gf.caps[m.n];
    var color = _mat9CapColors[m.n] || '#516860';
    var style = sel ? 'background:' + color + ';border-color:' + color + ';color:#fff' : '';
    h += '<button class="gf-cap-btn' + (sel ? ' active' : '') + '" data-cap="' + m.n + '" onclick="mat9gfToggleCap(' + m.n + ',this)" style="' + style + '">' + m.icon + ' ' + m.label + '</button>';
  });
  el.innerHTML = h;
}

function mat9gfToggleCap(cap, btn) {
  _mat9gf.caps[cap] = !_mat9gf.caps[cap];
  var color = _mat9CapColors[cap] || '#516860';
  if (_mat9gf.caps[cap]) { btn.classList.add('active'); btn.style.background = color; btn.style.borderColor = color; btn.style.color = '#fff'; }
  else { btn.classList.remove('active'); btn.style.background = ''; btn.style.borderColor = ''; btn.style.color = ''; }
}

function mat9gfToggleType(btn) {
  var t = btn.getAttribute('data-type');
  _mat9gf.tipos[t] = !_mat9gf.tipos[t];
  btn.classList.toggle('active', _mat9gf.tipos[t]);
  var tick = btn.querySelector('.gf-tick'); if (tick) tick.textContent = _mat9gf.tipos[t] ? '✓' : '';
}

function mat9gfSetDif(btn) {
  _mat9gf.dif = btn.getAttribute('data-dif');
  var grp = document.getElementById('mat9-fichas-dif');
  if (grp) grp.querySelectorAll('.gf-dif-btn').forEach(function(b){ b.classList.remove('active'); });
  btn.classList.add('active');
}

function mat9gfSetQty(btn) {
  _mat9gf.qty = parseInt(btn.getAttribute('data-qty')) || 10;
  var grp = document.getElementById('mat9-fichas-qty');
  if (grp) grp.querySelectorAll('.gf-dif-btn').forEach(function(b){ b.classList.remove('active'); });
  btn.classList.add('active');
}

// Renderiza um bloco de exercícios (com ou sem espaço de resposta).
function _mat9gfExBloco(exs, startNum) {
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

function _mat9gfGenExs(cap, n) {
  var gen = _mat9Gerador(cap); if (!gen) return [];
  var nTemas = _mat9TemasCount[cap] || 1;
  var tipos = ['mc', 'fill', 'vf', 'fill', 'mc', 'mc'];
  var exs = [];
  for (var i = 0; i < n; i++) {
    var ex = gen(String((i % nTemas) + 1), tipos[i % tipos.length], _mat9gf.dif);
    if (ex) exs.push(ex);
  }
  return exs;
}

function mat9gfGerar(formato) {
  // capítulos selecionados
  var capsSel = [];
  _mat9CapMeta.forEach(function(m) { if (_mat9gf.caps[m.n] && _mat9Gerador(m.n)) capsSel.push(m.n); });
  var status = document.getElementById('mat9-fichas-status');
  if (!capsSel.length) { if (status) status.textContent = 'Seleciona pelo menos um capítulo.'; return; }
  var algumTipo = _mat9gf.tipos.resumo || _mat9gf.tipos.exercicios || _mat9gf.tipos.teste || _mat9gf.tipos.minitestes;
  if (!algumTipo) { if (status) status.textContent = 'Seleciona pelo menos um tipo de conteúdo.'; return; }
  if (status) status.textContent = 'A gerar…';

  var difLabel = { facil: 'Fácil', medio: 'Médio', dificil: 'Difícil' }[_mat9gf.dif];
  var solucoes = []; // {num, ex} acumuladas para a secção final
  var solCounter = 0;

  var corpo = '';
  capsSel.forEach(function(cap, ci) {
    _mat9PM(cap, 'ficha'); // gerou ficha deste capítulo
    var m = _mat9CapMeta[cap - 1];
    var color = _mat9CapColors[cap] || '#36527a';
    corpo += '<div style="' + (ci > 0 ? 'page-break-before:always;' : '') + 'margin-bottom:6px">'
      + '<h2 style="font-size:16px;color:' + color + ';border-bottom:2px solid ' + color + ';padding-bottom:4px;margin:0 0 10px">' + cap + '. ' + m.label + '</h2>';

    // Resumo teórico (das flashcards)
    if (_mat9gf.tipos.resumo) {
      var cards = _mat9Cards[cap] || [];
      if (cards.length) {
        corpo += '<div style="margin-bottom:12px"><h3 style="font-size:13px;color:#444;margin:0 0 5px">Resumo teórico</h3>';
        cards.slice(0, 8).forEach(function(c) {
          corpo += '<div style="font-size:11.5px;margin-bottom:4px"><strong>' + c.q + '</strong> ' + c.a + '</div>';
        });
        corpo += '</div>';
      }
    }
    // Exercícios
    if (_mat9gf.tipos.exercicios) {
      var exs = _mat9gfGenExs(cap, _mat9gf.qty);
      corpo += '<div style="margin-bottom:12px"><h3 style="font-size:13px;color:#444;margin:0 0 5px">Exercícios</h3>'
        + _mat9gfExBloco(exs, solCounter + 1) + '</div>';
      exs.forEach(function(ex) { solCounter++; solucoes.push({ num: solCounter, ex: ex }); });
    }
    // Teste de avaliação (8 questões mistas)
    if (_mat9gf.tipos.teste) {
      var exsT = _mat9gfGenExs(cap, 8);
      corpo += '<div style="margin-bottom:12px"><h3 style="font-size:13px;color:#444;margin:0 0 5px">Teste de avaliação</h3>'
        + _mat9gfExBloco(exsT, solCounter + 1) + '</div>';
      exsT.forEach(function(ex) { solCounter++; solucoes.push({ num: solCounter, ex: ex }); });
    }
    // Minitestes (um por subtema, 4 questões cada)
    if (_mat9gf.tipos.minitestes) {
      var subt = _mat9Subtemas[cap] || [];
      var mapa = _mat9SubtemaTemas[cap] || {};
      corpo += '<div style="margin-bottom:12px"><h3 style="font-size:13px;color:#444;margin:0 0 5px">Minitestes</h3>';
      subt.forEach(function(st, si) {
        var temas = mapa[si + 1] || [String(si + 1)];
        var gen = _mat9Gerador(cap);
        var exsM = [];
        for (var q = 0; q < 4; q++) {
          var tema = temas[q % temas.length];
          var ex = gen(tema, (q % 2 === 0) ? 'mc' : 'fill', _mat9gf.dif);
          if (ex) exsM.push(ex);
        }
        corpo += '<div style="margin-bottom:8px"><div style="font-size:12px;font-weight:700;color:#555">Mini ' + (si + 1) + ' · ' + st + '</div>'
          + _mat9gfExBloco(exsM, solCounter + 1) + '</div>';
        exsM.forEach(function(ex) { solCounter++; solucoes.push({ num: solCounter, ex: ex }); });
      });
      corpo += '</div>';
    }
    corpo += '</div>';
  });

  // Secção de soluções
  var solHTML = '';
  if (_mat9gf.tipos.solucoes && solucoes.length) {
    var lst = solucoes.map(function(s) {
      return '<div style="font-size:11px;margin-bottom:2px"><strong>' + s.num + '.</strong> ' + s.ex.resposta + (s.ex.expl ? ' — <span style="color:#666">' + s.ex.expl + '</span>' : '') + '</div>';
    }).join('');
    solHTML = '<div style="page-break-before:always;padding-top:8px"><h2 style="font-size:16px;border-bottom:2px solid #36527a;padding-bottom:4px">Soluções</h2>' + lst + '</div>';
  }

  var nomesCaps = capsSel.map(function(c) { return _mat9CapMeta[c - 1].label; }).join(', ');
  var html = '<div style="font-family:Arial,sans-serif;max-width:740px;margin:0 auto;padding:24px;color:#222">'
    + '<div style="display:flex;justify-content:space-between;align-items:baseline;border-bottom:2px solid #36527a;padding-bottom:8px;margin-bottom:14px">'
    + '<div><h1 style="font-size:18px;margin:0">Ficha de Trabalho · Matemática 9.º Ano</h1>'
    + '<div style="font-size:11.5px;color:#666">' + nomesCaps + ' · Nível ' + difLabel + '</div></div>'
    + '<div style="font-size:11.5px;color:#888">3ponto14</div></div>'
    + '<div style="font-size:11.5px;color:#666;margin-bottom:12px">Nome: ____________________________  Data: ____ / ____ / ______</div>'
    + corpo + solHTML + '</div>';

  var fname = 'ficha-mat9.' + (formato === 'html' ? 'html' : 'pdf');
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
function _mat9Init() {
  // arranca na tab Teoria com o cap 1 selecionado
  mat9BuildResumoNav();
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _mat9Init);
else _mat9Init();

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
   GERADORES DE EXERCÍCIOS — Matemática 9.º ano
   Reutilizam os helpers genéricos acima (rnd_m81, shuffle_m81, sup_m81…).
   ════════════════════════════════════════════════════════════════ */

// ═══ CAP 1 · Números Reais e Inequações ═══
// Temas: 1 Conjuntos numéricos · 2 Intervalos · 3 Inequações do 1.º grau
function buildEx_m9c1(tema, tipo, dif) {
  tema = String(tema);
  var easy = (dif === 'facil'), hard = (dif === 'dificil');

  // ── TEMA 1 · Conjuntos numéricos (racional vs irracional) ──
  if (tema === '1') {
    var irr = [['√2', true], ['√3', true], ['π', true], ['√5', true], ['√7', true]];
    var rac = [['√4', false, '= 2'], ['√9', false, '= 3'], ['0,5', false], ['3/4', false], ['√16', false, '= 4'], ['−7', false], ['2,(3)', false]];
    var useIrr = Math.random() < 0.5;
    var item = useIrr ? irr[rnd_m81(0, irr.length - 1)] : rac[rnd_m81(0, rac.length - 1)];
    return {
      enun: 'O número <strong>' + item[0] + '</strong>' + (item[2] ? ' (' + item[2] + ')' : '') + ' é:',
      tipo: 'mc', opcoes: ['racional', 'irracional'],
      resposta: item[1] ? 'irracional' : 'racional',
      expl: item[1] ? item[0] + ' tem dízima infinita não periódica → é irracional.' : item[0] + (item[2] ? ' ' + item[2] + ', que' : '') + ' pode escrever-se como fração → é racional.',
      tema: 'T1 · Conjuntos'
    };
  }

  // ── TEMA 2 · Intervalos de números reais ──
  if (tema === '2') {
    var a = rnd_m81(-6, 4), b = a + rnd_m81(2, 6);
    var tipos2 = [
      { cond: 'x ≥ ' + a, intv: '[' + a + ', +∞[' },
      { cond: 'x > ' + a, intv: ']' + a + ', +∞[' },
      { cond: 'x ≤ ' + b, intv: ']−∞, ' + b + ']' },
      { cond: 'x < ' + b, intv: ']−∞, ' + b + '[' },
      { cond: a + ' ≤ x ≤ ' + b, intv: '[' + a + ', ' + b + ']' },
      { cond: a + ' < x < ' + b, intv: ']' + a + ', ' + b + '[' }
    ];
    var t2 = tipos2[rnd_m81(0, tipos2.length - 1)];
    var pedeIntv = Math.random() < 0.5;
    if (pedeIntv) {
      var wrongs = tipos2.filter(function (x) { return x.intv !== t2.intv; }).map(function (x) { return x.intv; });
      var opts = shuffle_m81([t2.intv].concat(wrongs)).slice(0, 4);
      if (opts.indexOf(t2.intv) === -1) opts[0] = t2.intv;
      return {
        enun: 'Escreve a condição <strong>' + t2.cond + '</strong> na forma de intervalo.',
        tipo: 'mc', opcoes: opts, resposta: t2.intv,
        expl: t2.cond + ' corresponde ao intervalo ' + t2.intv + '. (Usa [ ] para incluir o extremo, ] [ para excluir; ∞ tem sempre parêntese aberto.)',
        tema: 'T2 · Intervalos'
      };
    }
    return {
      enun: 'Escreve o intervalo <strong>' + t2.intv + '</strong> como condição em x.',
      tipo: 'fill_frac', resposta: t2.cond.replace(/ /g, ''),
      expl: t2.intv + ' significa ' + t2.cond + '.',
      tema: 'T2 · Intervalos'
    };
  }

  // ── TEMA 3 · Inequações do 1.º grau ──
  if (tema === '3') {
    // a x + b (sinal) c, garante solução inteira simples
    var a3 = rnd_m81(1, easy ? 4 : 6);
    var neg = (!easy && Math.random() < 0.4); // coeficiente negativo (inverte sinal)
    if (neg) a3 = -a3;
    var sol = rnd_m81(-5, 6);
    var b3 = rnd_m81(-8, 8);
    var c3 = a3 * sol + b3;
    var sinais = ['>', '<', '≥', '≤'];
    var s = sinais[rnd_m81(0, 3)];
    // ao dividir por a3<0, inverte
    var sFinal = s;
    if (a3 < 0) { sFinal = (s === '>') ? '<' : (s === '<') ? '>' : (s === '≥') ? '≤' : '≥'; }
    var aberto = (sFinal === '>' || sFinal === '<');
    var lado = (sFinal === '>' || sFinal === '≥');
    var intv = lado ? (aberto ? ']' : '[') + sol + ', +∞[' : ']−∞, ' + sol + (aberto ? '[' : ']');
    var ax3 = (a3 === 1) ? 'x' : (a3 === -1) ? '−x' : (a3 < 0 ? '−' + Math.abs(a3) + 'x' : a3 + 'x');
    var bx3 = (b3 === 0) ? '' : (b3 > 0 ? ' + ' + b3 : ' − ' + Math.abs(b3));
    var enunSinal = ax3 + bx3 + ' ' + s + ' ' + c3;
    return {
      enun: 'Resolve a inequação <strong>' + enunSinal + '</strong> e indica a solução em intervalo.',
      tipo: 'fill_frac', resposta: intv.replace(/ /g, ''),
      expl: 'Isola x: ' + (a3 < 0 ? '−' + Math.abs(a3) : a3) + 'x ' + s + ' ' + (c3 - b3) + '. ' + (a3 < 0 ? 'Divide por ' + a3 + ' e INVERTE o sinal → ' : 'Divide por ' + a3 + ' → ') + 'x ' + sFinal + ' ' + sol + '. Solução: ' + intv + '.',
      tema: 'T3 · Inequações'
    };
  }

  return { enun: '√2 é racional?', tipo: 'mc', opcoes: ['Sim', 'Não'], resposta: 'Não', expl: '√2 é irracional.', tema: 'Números Reais' };
}

// ═══ CAP 2 · Equações do 2.º grau ═══
// Temas: 1 Casos notáveis · 2 Operações polinómios · 3 Eq. 2.º grau (resolvente) · 4 Discriminante/nº soluções
function buildEx_m9c2(tema, tipo, dif) {
  tema = String(tema);
  var easy = (dif === 'facil'), hard = (dif === 'dificil');

  // ── TEMA 1 · Casos notáveis ──
  if (tema === '1') {
    var b = rnd_m81(1, easy ? 5 : 9);
    var kind = rnd_m81(0, 2);
    if (kind === 0) { // (x+b)²
      var res = 'x' + sup_m81(2) + ' + ' + (2 * b) + 'x + ' + (b * b);
      return {
        enun: 'Desenvolve o caso notável: <strong>(x + ' + b + ')' + sup_m81(2) + '</strong>',
        tipo: 'fill_frac', resposta: ('x2+' + (2 * b) + 'x+' + (b * b)),
        expl: '(a+b)² = a² + 2ab + b² → x² + ' + (2 * b) + 'x + ' + (b * b) + '.',
        tema: 'T1 · Casos Notáveis'
      };
    }
    if (kind === 1) { // (x−b)²
      return {
        enun: 'Desenvolve o caso notável: <strong>(x − ' + b + ')' + sup_m81(2) + '</strong>',
        tipo: 'fill_frac', resposta: ('x2-' + (2 * b) + 'x+' + (b * b)),
        expl: '(a−b)² = a² − 2ab + b² → x² − ' + (2 * b) + 'x + ' + (b * b) + '.',
        tema: 'T1 · Casos Notáveis'
      };
    }
    // (x+b)(x−b) = x²−b²
    return {
      enun: 'Desenvolve: <strong>(x + ' + b + ')(x − ' + b + ')</strong>',
      tipo: 'fill_frac', resposta: ('x2-' + (b * b)),
      expl: '(a+b)(a−b) = a² − b² → x² − ' + (b * b) + '.',
      tema: 'T1 · Casos Notáveis'
    };
  }

  // ── TEMA 2 · Operações com polinómios (produto monómio×binómio) ──
  if (tema === '2') {
    var a2 = rndNZ_m81(2, easy ? 5 : 8), b2 = rndNZ_m81(1, 6), c2 = rndNZ_m81(1, 8);
    var t1 = a2 * b2, t2 = a2 * c2;
    var resp = t1 + 'x' + (t2 >= 0 ? '+' + t2 : '-' + Math.abs(t2));
    return {
      enun: 'Aplica a distributiva: <strong>' + a2 + '(' + b2 + 'x + ' + c2 + ')</strong>',
      tipo: 'fill_frac', resposta: resp,
      expl: a2 + '×' + b2 + 'x + ' + a2 + '×' + c2 + ' = ' + t1 + 'x + ' + t2 + '.',
      tema: 'T2 · Polinómios'
    };
  }

  // ── TEMA 3 · Equações do 2.º grau (resolvente, soluções inteiras) ──
  if (tema === '3') {
    // (x − r1)(x − r2) = 0 → x² − (r1+r2)x + r1·r2 = 0
    var r1 = rnd_m81(-5, 6), r2 = rnd_m81(-5, 6);
    var bC = -(r1 + r2), cC = r1 * r2;
    var eqn = 'x' + sup_m81(2) + ' ' + (bC >= 0 ? '+ ' + bC : '− ' + Math.abs(bC)) + 'x ' + (cC >= 0 ? '+ ' + cC : '− ' + Math.abs(cC)) + ' = 0';
    var lo = Math.min(r1, r2), hi = Math.max(r1, r2);
    var sols = (r1 === r2) ? ('x = ' + r1) : ('x = ' + lo + ' ou x = ' + hi);
    if (tipo === 'mc') {
      // distratores garantidamente únicos e diferentes da resposta
      function _pair(a, b) { var x = Math.min(a, b), y = Math.max(a, b); return (x === y) ? ('x = ' + x) : ('x = ' + x + ' ou x = ' + y); }
      var cand = [_pair(lo + 1, hi), _pair(lo, hi + 1), _pair(-lo, -hi), _pair(lo - 1, hi), _pair(lo, hi - 1)];
      var opts = [sols];
      for (var di = 0; di < cand.length && opts.length < 4; di++) {
        if (opts.indexOf(cand[di]) === -1) opts.push(cand[di]);
      }
      // se ainda faltarem (caso raro), preenche com pares afastados
      var bump = 2;
      while (opts.length < 4) { var c2 = _pair(lo + bump, hi + bump); if (opts.indexOf(c2) === -1) opts.push(c2); bump++; }
      opts = shuffle_m81(opts);
      return {
        enun: 'Resolve a equação <strong>' + eqn + '</strong>',
        tipo: 'mc', opcoes: opts, resposta: sols,
        expl: 'Δ = ' + bC + '² − 4×1×' + cC + ' = ' + (bC * bC - 4 * cC) + '. Aplicando a resolvente: ' + sols + '.',
        tema: 'T3 · Eq. 2.º grau'
      };
    }
    return {
      enun: 'Resolve <strong>' + eqn + '</strong>. Indica a MENOR solução.',
      tipo: 'fill', resposta: String(Math.min(r1, r2)),
      expl: 'As soluções são ' + sols.replace('x = ', '') + '. A menor é ' + Math.min(r1, r2) + '.',
      tema: 'T3 · Eq. 2.º grau'
    };
  }

  // ── TEMA 4 · Discriminante / número de soluções ──
  if (tema === '4') {
    var a4 = 1, b4 = rnd_m81(-6, 6), c4 = rnd_m81(-6, 9);
    var delta = b4 * b4 - 4 * a4 * c4;
    var nsol = delta > 0 ? 'duas soluções' : delta === 0 ? 'uma solução' : 'nenhuma solução real';
    var eqn4 = 'x' + sup_m81(2) + ' ' + (b4 >= 0 ? '+ ' + b4 : '− ' + Math.abs(b4)) + 'x ' + (c4 >= 0 ? '+ ' + c4 : '− ' + Math.abs(c4)) + ' = 0';
    if (tipo === 'mc') {
      return {
        enun: 'Quantas soluções reais tem <strong>' + eqn4 + '</strong>?',
        tipo: 'mc', opcoes: ['duas soluções', 'uma solução', 'nenhuma solução real'],
        resposta: nsol,
        expl: 'Δ = b² − 4ac = ' + b4 + '² − 4×1×' + c4 + ' = ' + delta + '. ' + (delta > 0 ? 'Δ > 0 → duas.' : delta === 0 ? 'Δ = 0 → uma.' : 'Δ < 0 → nenhuma real.'),
        tema: 'T4 · Discriminante'
      };
    }
    return {
      enun: 'Calcula o discriminante Δ de ' + eqn4,
      tipo: 'fill', resposta: String(delta),
      expl: 'Δ = b² − 4ac = ' + (b4 * b4) + ' − ' + (4 * c4) + ' = ' + delta + '.',
      tema: 'T4 · Discriminante'
    };
  }

  return { enun: 'Δ de x²−5x+6?', tipo: 'fill', resposta: '1', expl: '25−24=1.', tema: 'Eq. 2.º grau' };
}

// ═══ CAP 3 · Funções ═══
// Temas: 1 Função afim · 2 Função quadrática (vértice/zeros) · 3 Proporcionalidade inversa · 4 Imagem/declive
function buildEx_m9c3(tema, tipo, dif) {
  tema = String(tema);
  var easy = (dif === 'facil'), hard = (dif === 'dificil');

  // ── TEMA 1 · Função afim (declive e ordenada na origem) ──
  if (tema === '1') {
    var m = rndNZ_m81(-6, 6), b = rnd_m81(-6, 6);
    var fn = 'f(x) = ' + (m === 1 ? 'x' : m === -1 ? '−x' : (m + 'x').replace('-', '−')) + (b === 0 ? '' : (b > 0 ? ' + ' + b : ' − ' + Math.abs(b)));
    var pedeDecl = Math.random() < 0.5;
    var resp = pedeDecl ? m : b;
    return {
      enun: 'Na função afim <strong>' + fn + '</strong>, qual é ' + (pedeDecl ? 'o declive' : 'a ordenada na origem') + '?',
      tipo: 'fill', resposta: String(resp),
      expl: 'Na forma f(x) = ax + b: declive a = ' + m + ', ordenada na origem b = ' + b + '. Pedido: ' + resp + '.',
      tema: 'T1 · Função Afim'
    };
  }

  // ── TEMA 2 · Função quadrática (vértice / zeros) ──
  if (tema === '2') {
    // f(x) = x² + bx + c com zeros inteiros r1, r2
    var r1 = rnd_m81(-4, 5), r2 = rnd_m81(-4, 5);
    var b = -(r1 + r2), c = r1 * r2;
    var fn = 'f(x) = x' + sup_m81(2) + ' ' + (b >= 0 ? '+ ' + b : '− ' + Math.abs(b)) + 'x ' + (c >= 0 ? '+ ' + c : '− ' + Math.abs(c));
    var kind = rnd_m81(0, 1);
    if (kind === 0) {
      // abcissa do vértice = -b/2
      var xv = -b / 2;
      return {
        enun: 'Qual é a abcissa do vértice de <strong>' + fn + '</strong>?',
        tipo: 'fill', resposta: String(xv),
        expl: 'x_vértice = −b/(2a) = −(' + b + ')/(2×1) = ' + xv + '.',
        tema: 'T2 · Função Quadrática'
      };
    }
    // menor zero
    return {
      enun: 'Indica o MENOR zero de <strong>' + fn + '</strong>.',
      tipo: 'fill', resposta: String(Math.min(r1, r2)),
      expl: 'Os zeros (f(x)=0) são ' + Math.min(r1, r2) + ' e ' + Math.max(r1, r2) + '. O menor é ' + Math.min(r1, r2) + '.',
      tema: 'T2 · Função Quadrática'
    };
  }

  // ── TEMA 3 · Proporcionalidade inversa ──
  if (tema === '3') {
    var k = [12, 18, 24, 36, 48, 60][rnd_m81(0, 5)];
    var x0 = [2, 3, 4, 6][rnd_m81(0, 3)];
    while (k % x0 !== 0) x0 = [2, 3, 4, 6][rnd_m81(0, 3)];
    var y0 = k / x0;
    var kind3 = rnd_m81(0, 1);
    if (kind3 === 0) {
      return {
        enun: 'Numa proporcionalidade inversa, y = ' + y0 + ' quando x = ' + x0 + '. Qual é a constante k?',
        tipo: 'fill', resposta: String(k),
        expl: 'k = x × y = ' + x0 + ' × ' + y0 + ' = ' + k + '. A função é f(x) = ' + k + '/x.',
        tema: 'T3 · Prop. Inversa'
      };
    }
    var x1 = [2, 3, 4, 6, 12].filter(function (v) { return k % v === 0 && v !== x0; })[0] || x0;
    return {
      enun: 'A função f(x) = ' + k + '/x. Calcula f(' + x1 + ').',
      tipo: 'fill', resposta: String(k / x1),
      expl: 'f(' + x1 + ') = ' + k + ' ÷ ' + x1 + ' = ' + (k / x1) + '.',
      tema: 'T3 · Prop. Inversa'
    };
  }

  // ── TEMA 4 · Imagem de uma função ──
  if (tema === '4') {
    var m4 = rndNZ_m81(-5, 5), b4 = rnd_m81(-6, 6), x4 = rnd_m81(-4, 5);
    var fx = m4 * x4 + b4;
    var fn4 = 'f(x) = ' + (m4 === 1 ? 'x' : m4 === -1 ? '−x' : (m4 + 'x').replace('-', '−')) + (b4 === 0 ? '' : (b4 > 0 ? ' + ' + b4 : ' − ' + Math.abs(b4)));
    return {
      enun: 'Sendo <strong>' + fn4 + '</strong>, calcula f(' + x4 + ').',
      tipo: 'fill', resposta: String(fx),
      expl: 'f(' + x4 + ') = ' + m4 + '×(' + x4 + ') ' + (b4 >= 0 ? '+ ' + b4 : '− ' + Math.abs(b4)) + ' = ' + fx + '.',
      tema: 'T4 · Imagem f(x)'
    };
  }

  return { enun: 'f(x)=2x, f(3)?', tipo: 'fill', resposta: '6', expl: '2×3=6.', tema: 'Funções' };
}

// ═══ CAP 4 · Trigonometria e Circunferência ═══
// Temas: 1 Razões trigonométricas (ternos) · 2 Lados (valores notáveis) · 3 Ângulos ao centro/inscrito e arcos
function buildEx_m9c4(tema, tipo, dif) {
  tema = String(tema);
  var easy = (dif === 'facil'), hard = (dif === 'dificil');
  var TERNOS = [[3, 4, 5], [6, 8, 10], [5, 12, 13], [8, 15, 17]];

  // ── TEMA 1 · Razões trigonométricas (a partir de um terno) ──
  if (tema === '1') {
    var t = TERNOS[rnd_m81(0, easy ? 1 : TERNOS.length - 1)];
    var op = t[0], adj = t[1], hip = t[2]; // ângulo cujo cateto oposto é op
    var razao = ['sen', 'cos', 'tg'][rnd_m81(0, 2)];
    var resp, expl;
    if (razao === 'sen') { resp = fmtFrac_m81(op, hip); expl = 'sen = cateto oposto / hipotenusa = ' + op + '/' + hip + ' = ' + resp + '.'; }
    else if (razao === 'cos') { resp = fmtFrac_m81(adj, hip); expl = 'cos = cateto adjacente / hipotenusa = ' + adj + '/' + hip + ' = ' + resp + '.'; }
    else { resp = fmtFrac_m81(op, adj); expl = 'tg = cateto oposto / cateto adjacente = ' + op + '/' + adj + ' = ' + resp + '.'; }
    return {
      enun: 'Num triângulo retângulo, o cateto oposto ao ângulo α mede ' + op + ', o adjacente ' + adj + ' e a hipotenusa ' + hip + '. Qual é <strong>' + razao + '(α)</strong>?',
      tipo: 'fill_frac', resposta: resp,
      expl: expl,
      tema: 'T1 · Razões Trig.'
    };
  }

  // ── TEMA 2 · Determinar um lado (valores notáveis simples) ──
  if (tema === '2') {
    // usa terno: dado hipotenusa e seno, achar cateto oposto, etc.
    var t2 = TERNOS[rnd_m81(0, TERNOS.length - 1)];
    var op2 = t2[0], hip2 = t2[2];
    return {
      enun: 'Num triângulo retângulo, sen(α) = ' + op2 + '/' + hip2 + ' e a hipotenusa mede ' + hip2 + '. Quanto mede o cateto oposto a α?',
      tipo: 'fill', resposta: String(op2),
      expl: 'sen(α) = oposto/hipotenusa → oposto = sen(α) × hipotenusa = (' + op2 + '/' + hip2 + ') × ' + hip2 + ' = ' + op2 + '.',
      tema: 'T2 · Lados'
    };
  }

  // ── TEMA 3 · Ângulos ao centro / inscrito e arcos ──
  if (tema === '3') {
    var ang = [30, 40, 60, 80, 90, 100, 120][rnd_m81(0, 6)];
    var kind = rnd_m81(0, 1);
    if (kind === 0) {
      // ângulo inscrito = metade do arco/ângulo ao centro
      return {
        enun: 'Um ângulo inscrito numa circunferência corresponde a um arco de ' + ang + '°. Qual é a amplitude do ângulo inscrito?',
        tipo: 'fill', resposta: String(ang / 2),
        expl: 'O ângulo inscrito é METADE do arco correspondente: ' + ang + '° ÷ 2 = ' + (ang / 2) + '°.',
        tema: 'T3 · Ângulos e Arcos'
      };
    }
    // ângulo ao centro = arco
    return {
      enun: 'Um ângulo ao centro tem amplitude ' + ang + '°. Qual é a amplitude do arco correspondente?',
      tipo: 'fill', resposta: String(ang),
      expl: 'O arco correspondente a um ângulo ao centro tem a MESMA amplitude: ' + ang + '°.',
      tema: 'T3 · Ângulos e Arcos'
    };
  }

  return { enun: 'sen(α)=3/5, oposto se hip=5?', tipo: 'fill', resposta: '3', expl: '3/5×5=3.', tema: 'Trigonometria' };
}

// ═══ CAP 5 · Probabilidades ═══
// Temas: 1 Espaço de resultados · 2 Probabilidade (Laplace) · 3 Acontecimento contrário · 4 Operações (reunião)
function buildEx_m9c5(tema, tipo, dif) {
  tema = String(tema);
  var easy = (dif === 'facil'), hard = (dif === 'dificil');

  // ── TEMA 1 · Espaço de resultados (número de casos) ──
  if (tema === '1') {
    var exps = [
      { e: 'lançar um dado', n: 6 },
      { e: 'lançar uma moeda', n: 2 },
      { e: 'lançar duas moedas', n: 4 },
      { e: 'tirar uma carta do naipe de copas (13 cartas)', n: 13 },
      { e: 'rodar uma roleta com 8 setores iguais', n: 8 }
    ];
    var ex = exps[rnd_m81(0, exps.length - 1)];
    return {
      enun: 'Quantos resultados possíveis tem a experiência: <strong>' + ex.e + '</strong>?',
      tipo: 'fill', resposta: String(ex.n),
      expl: 'O espaço de resultados de "' + ex.e + '" tem ' + ex.n + ' elementos.',
      tema: 'T1 · Espaço de Resultados'
    };
  }

  // ── TEMA 2 · Probabilidade (regra de Laplace), resposta como fração ──
  if (tema === '2') {
    var contextos = [
      { tot: 6, fav: function () { var f = [[3, 'par'], [3, 'ímpar'], [2, 'maior que 4'], [4, 'menor que 5']][rnd_m81(0, 3)]; return { n: f[0], d: 'sair um número ' + f[1] }; }, obj: 'lançar um dado' },
      { tot: rnd_m81(8, 15), fav: null, obj: 'saco' }
    ];
    var useDado = Math.random() < 0.5;
    if (useDado) {
      var opcoesD = [[3, 'par'], [3, 'ímpar'], [2, 'maior que 4'], [4, 'menor que 5'], [1, 'igual a 6']];
      var od = opcoesD[rnd_m81(0, opcoesD.length - 1)];
      var r = reduce_m81(od[0], 6);
      return {
        enun: 'Ao lançar um dado equilibrado, qual é a probabilidade de ' + od[1] + '? (forma de fração irredutível)',
        tipo: 'fill_frac', resposta: fmtFrac_m81(r[0], r[1]),
        expl: 'P = casos favoráveis / casos possíveis = ' + od[0] + '/6 = ' + fmtFrac_m81(r[0], r[1]) + '.',
        tema: 'T2 · Probabilidade'
      };
    }
    var tot = rnd_m81(8, 15), fav = rnd_m81(1, tot - 1);
    var rr = reduce_m81(fav, tot);
    return {
      enun: 'Num saco há ' + tot + ' bolas, ' + fav + ' das quais são vermelhas. Qual é a probabilidade de tirar uma vermelha? (fração irredutível)',
      tipo: 'fill_frac', resposta: fmtFrac_m81(rr[0], rr[1]),
      expl: 'P = ' + fav + '/' + tot + ' = ' + fmtFrac_m81(rr[0], rr[1]) + '.',
      tema: 'T2 · Probabilidade'
    };
  }

  // ── TEMA 3 · Acontecimento contrário ──
  if (tema === '3') {
    var dens = [4, 5, 6, 8, 10];
    var d = dens[rnd_m81(0, dens.length - 1)];
    var num = rnd_m81(1, d - 1);
    var rContr = reduce_m81(d - num, d);
    return {
      enun: 'A probabilidade de um acontecimento A é ' + num + '/' + d + '. Qual é a probabilidade do acontecimento contrário (Ā)? (fração irredutível)',
      tipo: 'fill_frac', resposta: fmtFrac_m81(rContr[0], rContr[1]),
      expl: 'P(Ā) = 1 − P(A) = 1 − ' + num + '/' + d + ' = ' + (d - num) + '/' + d + ' = ' + fmtFrac_m81(rContr[0], rContr[1]) + '.',
      tema: 'T3 · Contrário'
    };
  }

  // ── TEMA 4 · Operações com acontecimentos (reunião de incompatíveis) ──
  if (tema === '4') {
    // dois acontecimentos incompatíveis num dado: P(A ∪ B) = P(A) + P(B)
    var d4 = 6;
    var nA = rnd_m81(1, 2), nB = rnd_m81(1, 2);
    var rUn = reduce_m81(nA + nB, d4);
    return {
      enun: 'Num dado, A = "sair ' + (nA === 1 ? 'o 1' : 'o 1 ou o 2') + '" e B = "sair ' + (nB === 1 ? 'o 6' : 'o 5 ou o 6') + '" (incompatíveis). Qual é P(A ∪ B)? (fração irredutível)',
      tipo: 'fill_frac', resposta: fmtFrac_m81(rUn[0], rUn[1]),
      expl: 'Acontecimentos incompatíveis: P(A ∪ B) = P(A) + P(B) = ' + nA + '/6 + ' + nB + '/6 = ' + (nA + nB) + '/6 = ' + fmtFrac_m81(rUn[0], rUn[1]) + '.',
      tema: 'T4 · Operações'
    };
  }

  return { enun: 'P de par num dado?', tipo: 'fill_frac', resposta: '1/2', expl: '3/6=1/2.', tema: 'Probabilidades' };
}

// ═══ CAP 6 · Estatística ═══
// Temas: 1 Média · 2 Mediana · 3 Quartis/AIQ · 4 Amplitude
function buildEx_m9c6(tema, tipo, dif) {
  tema = String(tema);
  var easy = (dif === 'facil'), hard = (dif === 'dificil');
  function dados(len, lo, hi) { var a = []; for (var i = 0; i < len; i++) a.push(rnd_m81(lo, hi)); return a; }
  function media(a) { var s = 0; for (var i = 0; i < a.length; i++) s += a[i]; return s / a.length; }
  function ord(a) { return a.slice().sort(function (x, y) { return x - y; }); }

  // ── TEMA 1 · Média (inteira) ──
  if (tema === '1') {
    var arr; do { arr = dados(5, 1, easy ? 12 : 20); } while (media(arr) % 1 !== 0);
    var m = media(arr);
    return {
      enun: 'Calcula a média do conjunto: <strong>' + arr.join(', ') + '</strong>',
      tipo: 'fill', resposta: String(m),
      expl: 'Média = (' + arr.join(' + ') + ') ÷ 5 = ' + arr.reduce(function (s, v) { return s + v; }, 0) + ' ÷ 5 = ' + m + '.',
      tema: 'T1 · Média'
    };
  }

  // ── TEMA 2 · Mediana (n ímpar) ──
  if (tema === '2') {
    var arr2 = dados(5, 1, 20);
    var o = ord(arr2);
    var med = o[2];
    return {
      enun: 'Qual é a mediana de: <strong>' + arr2.join(', ') + '</strong>?',
      tipo: 'fill', resposta: String(med),
      expl: 'Ordena: ' + o.join(', ') + '. Com 5 valores (ímpar), a mediana é o central → ' + med + '.',
      tema: 'T2 · Mediana'
    };
  }

  // ── TEMA 3 · Amplitude interquartis (a partir de Q1 e Q3 dados) ──
  if (tema === '3') {
    var q1 = rnd_m81(5, 15), q3 = q1 + rnd_m81(4, 15);
    return {
      enun: 'Num conjunto de dados, Q1 = ' + q1 + ' e Q3 = ' + q3 + '. Qual é a amplitude interquartis (AIQ)?',
      tipo: 'fill', resposta: String(q3 - q1),
      expl: 'AIQ = Q3 − Q1 = ' + q3 + ' − ' + q1 + ' = ' + (q3 - q1) + '.',
      tema: 'T3 · Quartis / AIQ'
    };
  }

  // ── TEMA 4 · Amplitude ──
  if (tema === '4') {
    var arr4 = dados(6, 1, 35);
    var o4 = ord(arr4);
    var amp = o4[o4.length - 1] - o4[0];
    return {
      enun: 'Qual é a amplitude do conjunto: <strong>' + arr4.join(', ') + '</strong>?',
      tipo: 'fill', resposta: String(amp),
      expl: 'Amplitude = máximo − mínimo = ' + o4[o4.length - 1] + ' − ' + o4[0] + ' = ' + amp + '.',
      tema: 'T4 · Amplitude'
    };
  }

  return { enun: 'Média de 2,4,6?', tipo: 'fill', resposta: '4', expl: '(2+4+6)/3=4.', tema: 'Estatística' };
}
