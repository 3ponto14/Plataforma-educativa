/* ════════════════════════════════════════════════════════════════
   MAT8 HUB - Matemática 8.º ano
   Modelo de HUB ÚNICO espelhado no mat7 (NUNCA páginas por capítulo).
   Tabs: Teoria · Praticar · Fichas · Progresso.
   Capítulos são botões de seleção; conteúdo renderizado por JS.
   ════════════════════════════════════════════════════════════════ */

// ═══ Capítulos do 8.º ano (Prisma 8) ═══
var _mat8CapMeta = [
  {n:1, icon:'<i class="ph ph-list-numbers"></i>',         label:'Números'},
  {n:2, icon:'<i class="ph ph-arrows-out-cardinal"></i>',  label:'Vetores e Isometrias'},
  {n:3, icon:'<i class="ph ph-function"></i>',             label:'Polinómios e Equações'},
  {n:4, icon:'<i class="ph ph-triangle"></i>',             label:'Teorema de Pitágoras'},
  {n:5, icon:'<i class="ph ph-chart-line"></i>',           label:'Equações Literais e Funções'},
  {n:6, icon:'<i class="ph ph-equals"></i>',               label:'Sistemas de Equações'},
  {n:7, icon:'<i class="ph ph-cube"></i>',                 label:'Figuras no Espaço e Volumes'},
  {n:8, icon:'<i class="ph ph-chart-pie-slice"></i>',      label:'Dados e Probabilidades'}
];

// Cores por capítulo (alinhadas com --m8cN-* do CSS)
var _mat8CapColors = {
  1:'#5a7fa8', 2:'#4d978f', 3:'#7d6aa8', 4:'#b06a6a',
  5:'#5e9676', 6:'#a8854d', 7:'#4f86b0', 8:'#9a5e96'
};

// Subtemas por capítulo
var _mat8Subtemas = {
  1: ['Dízimas', 'Multiplicação e divisão', 'Propriedades e expressões', 'Potências', 'Raízes', 'Notação científica'],
  2: ['Translação de pontos', 'Soma de vetores', 'Tipos de simetria', 'Vetor simétrico'],
  3: ['Monómios', 'Operações com monómios', 'Polinómios', 'Operações com polinómios', 'Equações do 1.º grau', 'Equações com denominadores'],
  4: ['Teorema de Pitágoras', 'Recíproco', 'Aplicações a áreas'],
  5: ['Equações literais', 'Imagem de uma função', 'Função afim', 'Declive de uma reta'],
  6: ['Equação com 2 incógnitas', 'Resolver sistema (valor de x)', 'Resolver sistema (valor de y)', 'Solução do sistema'],
  7: ['Volume do prisma', 'Volume do cilindro', 'Volume da pirâmide', 'Volume do cone', 'Volume da esfera', 'Área do círculo'],
  8: ['Média', 'Moda', 'Mediana', 'Amplitude', 'Probabilidade', 'Frequência relativa']
};

// ═══ FLASHCARDS / TEORIA por capítulo ═══
// Cap 1 (Números) - conteúdo real, fiel ao Prisma 8.
// Caps 2-8 - placeholders honestos até serem construídos.
var _mat8Cards = {
  1: [
    { tag: 'Definição', q: 'O que é uma dízima finita?', a: 'Uma dízima com um número finito de casas decimais. Acontece quando o denominador (reduzido) só tem fatores 2 e/ou 5. Ex: 3/5 = 0,6.' },
    { tag: 'Definição', q: 'O que é uma dízima infinita periódica?', a: 'Uma dízima cujas casas decimais se repetem infinitamente, num período. Ex: 1/3 = 0,(3); 1/6 = 0,1(6).' },
    { tag: 'Regra', q: 'Como multiplicar duas frações?', a: 'Multiplicam-se os numeradores entre si e os denominadores entre si: a/b × c/d = (a×c)/(b×d). Simplifica no fim.' },
    { tag: 'Regra', q: 'Como dividir duas frações?', a: 'Multiplica-se a primeira pelo inverso da segunda: a/b ÷ c/d = a/b × d/c.' },
    { tag: 'Definição', q: 'O que é o simétrico de um número?', a: 'É o número com sinal trocado. O simétrico de 3/5 é −3/5. A soma de um número com o seu simétrico é 0.' },
    { tag: 'Definição', q: 'O que é o valor absoluto?', a: '|x| é a distância de x ao zero, é sempre ≥ 0. |−3/4| = 3/4 e |3/4| = 3/4.' },
    { tag: 'Propriedade', q: 'Propriedade comutativa', a: 'A ordem dos fatores não altera o produto: a × b = b × a. Vale também para a adição.' },
    { tag: 'Propriedade', q: 'Propriedade associativa', a: 'A forma de agrupar não altera o resultado: (a × b) × c = a × (b × c).' },
    { tag: 'Propriedade', q: 'Propriedade distributiva', a: 'a × (b + c) = a × b + a × c. Permite "distribuir" a multiplicação pela soma/subtração.' },
    { tag: 'Regra', q: 'Sinal de uma potência de base negativa', a: 'Expoente par → resultado positivo. Expoente ímpar → resultado negativo. (−2)⁴ = 16; (−2)³ = −8.' },
    { tag: 'Propriedade', q: 'Produto de potências com a mesma base', a: 'aᵐ × aⁿ = aᵐ⁺ⁿ (mantém-se a base, somam-se os expoentes). Ex: 2³ × 2⁵ = 2⁸.' },
    { tag: 'Propriedade', q: 'Quociente de potências com a mesma base', a: 'aᵐ ÷ aⁿ = aᵐ⁻ⁿ (mantém-se a base, subtraem-se os expoentes). Ex: 10⁷ ÷ 10³ = 10⁴.' },
    { tag: 'Propriedade', q: 'Potência de uma potência', a: '(aᵐ)ⁿ = aᵐˣⁿ (mantém-se a base, multiplicam-se os expoentes). Ex: (2³)² = 2⁶.' },
    { tag: 'Propriedade', q: 'Potências com o mesmo expoente', a: 'Produto: aⁿ × bⁿ = (a×b)ⁿ. Quociente: aⁿ ÷ bⁿ = (a÷b)ⁿ.' },
    { tag: 'Regra', q: 'Potência de expoente negativo', a: 'a⁻ⁿ = 1/aⁿ (com a ≠ 0). Ex: 2⁻³ = 1/2³ = 1/8.' },
    { tag: 'Regra', q: 'Potência de expoente 0', a: 'a⁰ = 1 para qualquer a ≠ 0.' },
    { tag: 'Definição', q: 'O que é a raiz quadrada?', a: '√a é o número não negativo cujo quadrado é a. √64 = 8 porque 8² = 64.' },
    { tag: 'Definição', q: 'O que é a raiz cúbica?', a: '∛a é o número cujo cubo é a. ∛27 = 3 porque 3³ = 27. Existe também para negativos: ∛(−8) = −2.' },
    { tag: 'Definição', q: 'O que é notação científica?', a: 'Forma a × 10ⁿ, com 1 ≤ a < 10 e n inteiro. Ex: 225 000 000 = 2,25 × 10⁸.' },
    { tag: 'Regra', q: 'Multiplicar em notação científica', a: '(a × 10ᵐ) × (b × 10ⁿ) = (a×b) × 10ᵐ⁺ⁿ. Se a×b ≥ 10, ajusta a mantissa e o expoente.' },
    { tag: 'Regra', q: 'Dividir em notação científica', a: '(a × 10ᵐ) ÷ (b × 10ⁿ) = (a÷b) × 10ᵐ⁻ⁿ.' },
    { tag: 'Exemplo', q: 'Escreve 0,0016 em notação científica', a: '0,0016 = 1,6 × 10⁻³.' },
    { tag: 'Exemplo', q: 'Calcula (3 × 10⁴) × (6 × 10²)', a: '(3×6) × 10⁴⁺² = 18 × 10⁶ = 1,8 × 10⁷.' },
    { tag: 'Exemplo', q: 'Calcula √64 − √36', a: '√64 − √36 = 8 − 6 = 2.' },
    { tag: 'Definição', q: 'Que conjuntos numéricos conheces?', a: 'ℕ (naturais), ℤ (inteiros), ℚ (racionais). Todo o inteiro é racional e todo o natural é inteiro: ℕ ⊂ ℤ ⊂ ℚ.' },
    { tag: 'Definição', q: 'O que é uma fração decimal?', a: 'Uma fração cujo denominador é uma potência de 10 (10, 100, 1000…). Ex: 3/10, 17/100. Dá sempre origem a uma dízima finita.' },
    { tag: 'Regra', q: 'Como comparar dois números racionais?', a: 'Reduz ao mesmo denominador e compara os numeradores; ou converte ambos a dízima. Atenção aos negativos: quanto "mais negativo", menor.' },
    { tag: 'Regra', q: 'Como transformar uma dízima finita em fração?', a: 'Escreve os algarismos sem vírgula sobre 10, 100… conforme as casas decimais. Ex: 0,24 = 24/100 = 6/25 (simplificada).' },
    { tag: 'Regra', q: 'Regra dos sinais na multiplicação/divisão', a: 'Sinais iguais → resultado positivo; sinais diferentes → resultado negativo. Ex: (−2)×(−3)=6; (−2)×3=−6.' },
    { tag: 'Definição', q: 'O que é o inverso de um número?', a: 'O inverso de a (≠0) é 1/a; o produto de um número pelo seu inverso é 1. O inverso de 3/5 é 5/3. (Não confundir com simétrico!)' },
    { tag: 'Fórmula', q: 'Como calcular p% de um valor N?', a: 'p% de N = (p/100) × N. Ex: 5% de 6750 € = 0,05 × 6750 = 337,50 €.' },
    { tag: 'Estratégia', q: 'Hierarquia das operações', a: '1.º parênteses; 2.º potências e raízes; 3.º multiplicação e divisão (da esquerda para a direita); 4.º adição e subtração.' },
    { tag: 'Exemplo', q: 'Problema: Cândido pagou 4000 € em 4 prestações', a: 'Se já pagou frações conhecidas nas 3 primeiras, a 4.ª é o que falta para o todo (1): subtrai a soma das outras a 1 e multiplica por 4000 €.' },
    { tag: 'Exemplo', q: 'Calcula (2/3)² × (3/4)', a: '(2/3)² = 4/9; 4/9 × 3/4 = 12/36 = 1/3.' }
  ],
  2: [
    { tag: 'Definição', q: 'O que é um vetor?', a: 'Um segmento orientado caracterizado por direção, sentido e comprimento (norma). Em coordenadas: v(x, y). Representa-se por uma seta.' },
    { tag: 'Definição', q: 'O que são vetores equipolentes?', a: 'Vetores com a mesma direção, o mesmo sentido e o mesmo comprimento. São representações do mesmo vetor.' },
    { tag: 'Definição', q: 'O que é o vetor simétrico?', a: 'O vetor com a mesma direção e comprimento mas sentido oposto. As componentes têm o sinal trocado: −v de (3, −2) é (−3, 2).' },
    { tag: 'Regra', q: 'Como somar vetores em coordenadas?', a: 'Somam-se as componentes: u(a, b) + v(c, d) = (a+c, b+d).' },
    { tag: 'Definição', q: 'O que é uma translação?', a: 'A isometria que desloca todos os pontos a mesma distância, na mesma direção e sentido - segundo um vetor. P(x, y) → (x + vₓ, y + v_y).' },
    { tag: 'Regra', q: 'Como aplicar uma translação a um ponto?', a: 'Soma as componentes do vetor às coordenadas do ponto. Ex: P(2, −5) pela translação de v(3, 7) → (5, 2).' },
    { tag: 'Definição', q: 'O que é uma isometria?', a: 'Uma transformação que preserva as distâncias (e a forma). As quatro isometrias: translação, reflexão, rotação e reflexão deslizante.' },
    { tag: 'Definição', q: 'O que é uma reflexão?', a: 'A isometria que produz a imagem "ao espelho" em relação a uma reta (o eixo de reflexão).' },
    { tag: 'Definição', q: 'O que é uma rotação?', a: 'A isometria que faz girar a figura em torno de um ponto (centro) segundo um determinado ângulo e sentido.' },
    { tag: 'Definição', q: 'O que é uma reflexão deslizante?', a: 'A composição de uma reflexão num eixo com uma translação segundo a direção desse eixo.' },
    { tag: 'Conceito', q: 'Que tipos de simetria pode ter uma figura?', a: 'Simetria de translação, de reflexão (axial), de rotação e de reflexão deslizante. Os frisos e padrões (como os de Escher) combinam-nas.' },
    { tag: 'Definição', q: 'O que é a norma (comprimento) de um vetor?', a: 'É o comprimento do segmento orientado. Em coordenadas, ‖v(a, b)‖ = √(a² + b²) (Teorema de Pitágoras).' },
    { tag: 'Regra', q: 'Como subtrair vetores?', a: 'u − v = u + (−v): soma o primeiro com o simétrico do segundo. Em coordenadas: (a−c, b−d).' },
    { tag: 'Definição', q: 'O que é o vetor nulo?', a: 'O vetor de comprimento zero, com componentes (0, 0). Somar o vetor nulo a outro não o altera.' },
    { tag: 'Regra', q: 'Composição de duas translações', a: 'Aplicar a translação de u seguida da de v é o mesmo que uma única translação do vetor soma u + v.' },
    { tag: 'Propriedade', q: 'As isometrias preservam o quê?', a: 'Preservam comprimentos, amplitudes de ângulos e áreas. A figura transformada é geometricamente igual à original (congruente).' },
    { tag: 'Estratégia', q: 'Como identificar a simetria de um friso/padrão?', a: 'Procura: desliza e repete (translação); dobra num eixo (reflexão); roda em torno de um ponto (rotação); reflete e desliza (reflexão deslizante).' },
    { tag: 'Exemplo', q: 'Contexto: um robô em (2, 1) move-se segundo v(4, −3)', a: 'A nova posição é (2+4, 1−3) = (6, −2). Cada movimento "soma" o vetor à posição atual.' },
    { tag: 'Exemplo', q: 'Norma do vetor v(3, 4)?', a: '‖v‖ = √(3² + 4²) = √(9+16) = √25 = 5.' }
  ],
  3: [
    { tag: 'Definição', q: 'O que é um monómio?', a: 'É o produto de um número (coeficiente) por uma parte literal com expoentes naturais. Ex: 5x⁴ tem coeficiente 5 e parte literal x⁴.' },
    { tag: 'Definição', q: 'Qual é o grau de um monómio?', a: 'É a soma dos expoentes da parte literal. 5x⁴ tem grau 4; 4x²y² tem grau 4 (2+2).' },
    { tag: 'Definição', q: 'O que são monómios semelhantes?', a: 'São monómios com a mesma parte literal. Ex: 3x²y e −7x²y são semelhantes. Só estes se podem somar/subtrair.' },
    { tag: 'Regra', q: 'Como multiplicar monómios?', a: 'Multiplicam-se os coeficientes e somam-se os expoentes das mesmas variáveis. Ex: 3x² × 4x³ = 12x⁵.' },
    { tag: 'Regra', q: 'Como somar monómios semelhantes?', a: 'Somam-se os coeficientes e mantém-se a parte literal. Ex: 5x³ + 9x³ = 14x³. (Não semelhantes não se somam.)' },
    { tag: 'Definição', q: 'O que é um polinómio?', a: 'É uma soma de monómios. Ex: x² + 3x + 1. O grau do polinómio é o maior grau dos seus monómios.' },
    { tag: 'Regra', q: 'Como simplificar um polinómio?', a: 'Juntam-se os termos semelhantes (mesma parte literal). Ex: 4xy + 3x − 2xy − 7x = 2xy − 4x.' },
    { tag: 'Propriedade', q: 'Propriedade distributiva em polinómios', a: 'a(b + c) = ab + ac. Ex: 5(3x + 7) = 15x + 35. Usa-se para multiplicar um monómio por um polinómio.' },
    { tag: 'Definição', q: 'O que é uma equação do 1.º grau?', a: 'Uma equação em que a incógnita aparece com expoente 1. Ex: 3x + 5 = 11. Tem (no máximo) uma solução.' },
    { tag: 'Estratégia', q: 'Como resolver ax + b = c?', a: 'Isola o termo com x: ax = c − b. Depois divide: x = (c − b) / a. Ex: 3x + 5 = 11 → 3x = 6 → x = 2.' },
    { tag: 'Estratégia', q: 'Como desembaraçar de denominadores?', a: 'Multiplica todos os termos pelo m.m.c. dos denominadores. Atenção: o sinal "−" antes de uma fração troca o sinal de todo o numerador.' },
    { tag: 'Definição', q: 'O que são equações equivalentes?', a: 'Equações com a mesma solução. Obtêm-se aplicando os princípios de equivalência (somar/multiplicar o mesmo nos dois membros).' },
    { tag: 'Exemplo', q: 'Resolve x/3 = 5', a: 'Multiplica ambos os membros por 3: x = 3 × 5 = 15.' },
    { tag: 'Exemplo', q: 'Resolve 5(3x + 7)', a: 'Distributiva: 5 × 3x + 5 × 7 = 15x + 35.' },
    { tag: 'Definição', q: 'O que é o coeficiente de um monómio?', a: 'É a parte numérica que multiplica a parte literal. Em −7x³, o coeficiente é −7. Um monómio sem letra (ex: 5) é um termo independente.' },
    { tag: 'Definição', q: 'O que é um binómio e um trinómio?', a: 'Polinómios com 2 termos (binómio, ex: 3x + 1) ou 3 termos (trinómio, ex: x² + 2x + 1).' },
    { tag: 'Regra', q: 'Princípios de equivalência das equações', a: '1) Somar/subtrair o mesmo nos dois membros. 2) Multiplicar/dividir os dois membros pelo mesmo número (≠0). A solução não muda.' },
    { tag: 'Estratégia', q: 'Passos para resolver uma equação com parênteses e frações', a: '1.º desembaraça parênteses (distributiva); 2.º desembaraça denominadores (×m.m.c.); 3.º agrupa termos com x num membro; 4.º isola x.' },
    { tag: 'Estratégia', q: 'Como traduzir um problema numa equação?', a: 'Chama x à quantidade desconhecida, escreve as relações do enunciado como uma igualdade, resolve e interpreta a solução no contexto.' },
    { tag: 'Exemplo', q: 'Problema: o triplo de um número mais 4 é 19. Que número?', a: '3x + 4 = 19 → 3x = 15 → x = 5.' },
    { tag: 'Exemplo', q: 'Simplifica 3x² × 2x³', a: 'Coeficientes: 3×2 = 6. Expoentes: 2+3 = 5. Resultado: 6x⁵.' },
    { tag: 'Exemplo', q: 'Grau de 4x³ + 5x² + 10?', a: 'É o maior grau dos monómios: grau 3.' }
  ],
  4: [
    { tag: 'Teorema', q: 'Enuncia o Teorema de Pitágoras', a: 'Num triângulo retângulo, o quadrado da hipotenusa é igual à soma dos quadrados dos catetos: a² + b² = c² (c = hipotenusa).' },
    { tag: 'Definição', q: 'O que é a hipotenusa?', a: 'É o lado maior de um triângulo retângulo, oposto ao ângulo reto. Os outros dois lados são os catetos.' },
    { tag: 'Regra', q: 'Como calcular a hipotenusa?', a: 'c = √(a² + b²). Ex: catetos 3 e 4 → c = √(9+16) = √25 = 5.' },
    { tag: 'Regra', q: 'Como calcular um cateto?', a: 'Cateto = √(hipotenusa² − outro cateto²). Ex: hip 13, cateto 5 → √(169−25) = √144 = 12.' },
    { tag: 'Propriedade', q: 'Recíproco do Teorema de Pitágoras', a: 'Se num triângulo o quadrado do maior lado for igual à soma dos quadrados dos outros dois, então o triângulo é retângulo.' },
    { tag: 'Exemplo', q: '3, 4, 5 formam triângulo retângulo?', a: 'Sim: 3² + 4² = 9 + 16 = 25 = 5². É um terno pitagórico.' },
    { tag: 'Exemplo', q: 'Ternos pitagóricos comuns', a: '(3,4,5), (5,12,13), (8,15,17), (7,24,25) e os seus múltiplos, como (6,8,10).' },
    { tag: 'Estratégia', q: 'Diagonal de um retângulo', a: 'A diagonal é a hipotenusa do triângulo formado por dois lados: d = √(comprimento² + largura²).' },
    { tag: 'Estratégia', q: 'Diagonal de um quadrado de lado L', a: 'd = √(L² + L²) = √(2L²) = L√2 ≈ 1,41 × L.' },
    { tag: 'Definição', q: 'O que é o apótema de um polígono regular?', a: 'É a distância do centro ao ponto médio de um lado. Usa-se na área: A = (Perímetro × apótema) / 2.' },
    { tag: 'Estratégia', q: 'Quando se usa o Teorema de Pitágoras em problemas?', a: 'Sempre que houver um ângulo reto: escadas encostadas a paredes, distâncias na diagonal, alturas, diagonais de retângulos e ecrãs.' },
    { tag: 'Exemplo', q: 'Uma escada de 5 m encostada a uma parede, com a base a 3 m. A que altura chega?', a: 'altura = √(5² − 3²) = √(25−9) = √16 = 4 m.' },
    { tag: 'Exemplo', q: 'Qual a diagonal de um ecrã 16 cm × 12 cm?', a: 'd = √(16² + 12²) = √(256+144) = √400 = 20 cm.' },
    { tag: 'Regra', q: 'Como classificar um triângulo pelos lados (com o recíproco)?', a: 'Compara o maior lado² com a soma dos quadrados dos outros: igual → retângulo; maior² menor → acutângulo; maior² maior → obtusângulo.' },
    { tag: 'Definição', q: 'O que é um terno pitagórico?', a: 'Um trio de números inteiros (a, b, c) com a² + b² = c². Ex: (3,4,5). Servem para encontrar triângulos retângulos com lados inteiros.' },
    { tag: 'Estratégia', q: 'A raiz quadrada não é exata - o que fazer?', a: 'Deixa o resultado na forma de raiz (ex: √20) ou apresenta um valor aproximado às décimas com a calculadora (√20 ≈ 4,5).' }
  ],
  5: [
    { tag: 'Definição', q: 'O que é uma equação literal?', a: 'Uma equação com mais do que uma letra (variáveis/parâmetros). Pode resolver-se "em ordem a" uma delas, isolando-a. Ex: P = 2(c + l) → c = P/2 − l.' },
    { tag: 'Estratégia', q: 'Como resolver em ordem a uma variável?', a: 'Trata as outras letras como números: isola a variável pretendida usando as operações inversas, como numa equação normal.' },
    { tag: 'Definição', q: 'O que é uma função?', a: 'Uma correspondência que associa a cada objeto (x) uma e uma só imagem (y). Escreve-se y = f(x).' },
    { tag: 'Definição', q: 'O que é a imagem de um objeto?', a: 'É o valor f(x) que a função associa a x. Ex: se f(x) = 2x + 1, a imagem de 3 é f(3) = 2×3 + 1 = 7.' },
    { tag: 'Definição', q: 'O que é uma função afim?', a: 'Uma função da forma y = mx + b. m é o declive e b é a ordenada na origem. O gráfico é uma reta.' },
    { tag: 'Definição', q: 'O que é uma função linear?', a: 'Uma função afim com b = 0, ou seja y = mx. O gráfico é uma reta que passa na origem. Traduz proporcionalidade direta.' },
    { tag: 'Definição', q: 'O que é o declive?', a: 'O declive m mede a inclinação da reta: quanto y varia quando x aumenta 1 unidade. m = (y₂ − y₁) / (x₂ − x₁).' },
    { tag: 'Definição', q: 'O que é a ordenada na origem?', a: 'É o valor de y quando x = 0 (o b em y = mx + b). É o ponto onde a reta corta o eixo das ordenadas (Oy).' },
    { tag: 'Regra', q: 'Retas paralelas - que relação têm?', a: 'Duas retas são paralelas se tiverem o mesmo declive (m igual). Ex: y = 2x + 1 e y = 2x − 3 são paralelas.' },
    { tag: 'Exemplo', q: 'Calcula o declive entre A(1, 2) e B(3, 8)', a: 'm = (8 − 2) / (3 − 1) = 6 / 2 = 3.' },
    { tag: 'Exemplo', q: 'Em y = −4x + 5, qual o declive e a ordenada na origem?', a: 'Declive m = −4; ordenada na origem b = 5.' },
    { tag: 'Definição', q: 'O que é uma função constante?', a: 'Uma função do tipo y = b (declive 0). O gráfico é uma reta horizontal: o valor de y é sempre o mesmo, qualquer que seja x.' },
    { tag: 'Estratégia', q: 'Como saber se um gráfico representa uma função?', a: 'Teste da reta vertical: se qualquer reta vertical corta o gráfico no máximo uma vez, é função (cada x tem uma só imagem).' },
    { tag: 'Estratégia', q: 'Como descobrir a expressão de uma reta a partir do gráfico?', a: 'Lê a ordenada na origem (b, onde corta o eixo Oy) e calcula o declive (m) com dois pontos. A expressão é y = mx + b.' },
    { tag: 'Definição', q: 'O que significa o declive ser positivo, negativo ou zero?', a: 'Positivo → reta cresce; negativo → reta decresce; zero → reta horizontal (função constante).' },
    { tag: 'Exemplo', q: 'Tarifário: 5 € fixos + 2 € por GB. Expressão do custo?', a: 'C(x) = 2x + 5, onde x é o nº de GB. É uma função afim: declive 2 (€/GB), ordenada na origem 5 (€ fixos).' },
    { tag: 'Exemplo', q: 'Um táxi cobra 3 € de partida + 1,5 €/km. Custo de 10 km?', a: 'C(x) = 1,5x + 3 → C(10) = 1,5×10 + 3 = 18 €.' },
    { tag: 'Estratégia', q: 'Como traduzir uma situação real numa função afim?', a: 'A parte fixa é a ordenada na origem (b); o valor por unidade é o declive (m). Escreve y = mx + b.' }
  ],
  6: [
    { tag: 'Definição', q: 'O que é uma equação com duas incógnitas?', a: 'Uma equação com duas letras, como 4x − 2y = 12. Tem infinitas soluções (pares ordenados) - o seu gráfico é uma reta.' },
    { tag: 'Definição', q: 'O que é um sistema de equações?', a: 'Um conjunto de duas (ou mais) equações que se consideram em simultâneo. Escreve-se com uma chaveta { ... ; ... }.' },
    { tag: 'Definição', q: 'O que é a solução de um sistema?', a: 'É o par (x, y) que satisfaz TODAS as equações ao mesmo tempo. Graficamente, é o ponto de interseção das retas.' },
    { tag: 'Estratégia', q: 'Método de substituição', a: '1) Isola uma incógnita numa equação. 2) Substitui essa expressão na outra equação. 3) Resolve. 4) Substitui de volta para achar a outra incógnita.' },
    { tag: 'Definição', q: 'Forma canónica de um sistema', a: 'Cada equação escrita como ax + by = c (termos com incógnitas de um lado, constante do outro), depois de desembaraçar parênteses e denominadores.' },
    { tag: 'Definição', q: 'Sistemas equivalentes', a: 'Sistemas com a mesma solução. Obtêm-se aplicando os princípios de equivalência (somar/multiplicar o mesmo nos dois membros de uma equação).' },
    { tag: 'Estratégia', q: 'Interpretação gráfica de um sistema', a: 'Cada equação é uma reta. A solução é o ponto onde as retas se cruzam. Retas paralelas → sem solução; coincidentes → infinitas soluções.' },
    { tag: 'Exemplo', q: 'Como verificar se um par é solução do sistema?', a: 'Substitui o par nas duas equações. Só é solução se AMBAS se verificarem. Ex: (6, 2) em { x + 2y = 10 ; 3x − y = 16 } → 6+4=10 ✓ e 18−2=16 ✓ → é solução.' },
    { tag: 'Exemplo', q: 'Resolve { x + y = 3 ; 4x − 3y = 33 }', a: 'Da 1.ª: x = 3 − y. Substitui: 4(3−y) − 3y = 33 → 12 − 7y = 33 → y = −3, x = 6. Solução (6, −3).' },
    { tag: 'Estratégia', q: 'Como traduzir um problema num sistema?', a: 'Escolhe duas incógnitas (x e y) e escreve duas equações a partir das duas condições do enunciado. Resolve o sistema e interpreta.' },
    { tag: 'Exemplo', q: 'Problema: 2 cadernos + 1 caneta custam 7 €; 1 caderno + 1 caneta custam 5 €. Preços?', a: 'Sistema { 2x + y = 7 ; x + y = 5 }. Subtraindo: x = 2 (caderno). Logo y = 3 (caneta).' },
    { tag: 'Exemplo', q: 'Problema: a soma de dois números é 10 e a diferença é 4. Que números?', a: 'Sistema { x + y = 10 ; x − y = 4 }. Somando: 2x = 14 → x = 7, y = 3.' },
    { tag: 'Definição', q: 'Quantas soluções pode ter um sistema do 1.º grau?', a: 'Uma só (retas concorrentes), nenhuma (retas paralelas) ou infinitas (retas coincidentes).' },
    { tag: 'Estratégia', q: 'Método de redução (alternativa à substituição)', a: 'Multiplica as equações para igualar os coeficientes de uma incógnita e soma/subtrai as equações para a eliminar.' }
  ],
  7: [
    { tag: 'Fórmula', q: 'Volume de um prisma', a: 'V = área da base × altura. Aplica-se a qualquer prisma (e ao cilindro). Ex: base 12 cm², altura 5 cm → V = 60 cm³.' },
    { tag: 'Fórmula', q: 'Volume de um cilindro', a: 'V = π × r² × h (a base é um círculo de área πr²). Ex: r = 4, h = 4 → V = π·16·4 = 64π cm³.' },
    { tag: 'Fórmula', q: 'Volume de uma pirâmide', a: 'V = (área da base × altura) ÷ 3. É um terço do prisma com a mesma base e altura.' },
    { tag: 'Fórmula', q: 'Volume de um cone', a: 'V = (π × r² × h) ÷ 3. É um terço do cilindro com a mesma base e altura.' },
    { tag: 'Fórmula', q: 'Volume de uma esfera', a: 'V = (4 × π × r³) ÷ 3. Ex: r = 3 → V = (4·π·27)/3 = 36π cm³.' },
    { tag: 'Fórmula', q: 'Área de um círculo', a: 'A = π × r². Perímetro (comprimento) da circunferência: P = 2 × π × r.' },
    { tag: 'Definição', q: 'O que é a área lateral de um cilindro?', a: 'A superfície lateral planificada é um retângulo: A_lateral = 2πr × h (perímetro da base × altura).' },
    { tag: 'Definição', q: 'O que é o apótema de uma pirâmide?', a: 'É a altura de uma face lateral (triângulo). Usa-se para calcular a área lateral da pirâmide.' },
    { tag: 'Estratégia', q: 'Área total de um sólido', a: 'Soma das áreas de todas as faces/superfícies: A_total = A_base(s) + A_lateral. Usa a planificação para identificar todas as partes.' },
    { tag: 'Definição', q: 'O que é um setor circular?', a: 'É uma "fatia" do círculo, limitada por dois raios e um arco. A sua área é proporcional à amplitude do ângulo ao centro.' },
    { tag: 'Regra', q: 'O que é 1 litro em cm³ e dm³?', a: '1 litro = 1 dm³ = 1000 cm³. Útil para passar volumes de sólidos para capacidades (água, depósitos).' },
    { tag: 'Estratégia', q: 'Como calcular o volume de um sólido composto?', a: 'Divide o sólido em partes simples (prisma, cilindro, cone…), calcula cada volume e soma-os (ou subtrai, se houver "buracos").' },
    { tag: 'Exemplo', q: 'Volume de um depósito cilíndrico (r = 2 m, h = 5 m)?', a: 'V = π·r²·h = π·4·5 = 20π m³ ≈ 62,8 m³.' },
    { tag: 'Exemplo', q: 'Volume de uma caixa (prisma) 10 × 4 × 3 cm?', a: 'V = área da base × altura = (10×4) × 3 = 120 cm³.' },
    { tag: 'Definição', q: 'O que é a capacidade de um recipiente?', a: 'É o volume de líquido que ele pode conter, normalmente em litros. Calcula-se o volume e converte-se (1 L = 1000 cm³).' },
    { tag: 'Estratégia', q: 'Quando se deixa o resultado em função de π?', a: 'Quando se quer o valor exato (ex: 20π cm³). Para um valor prático, multiplica-se por π ≈ 3,14 e arredonda-se.' }
  ],
  8: [
    { tag: 'Definição', q: 'O que é a média?', a: 'A soma de todos os valores dividida pelo número de valores. Ex: média de 2, 4, 6 = (2+4+6)/3 = 4.' },
    { tag: 'Definição', q: 'O que é a moda?', a: 'O valor (ou valores) que aparece mais vezes num conjunto de dados. Ex: em 3, 6, 6, 6, 7 a moda é 6.' },
    { tag: 'Definição', q: 'O que é a mediana?', a: 'O valor central dos dados ORDENADOS. Se o nº de dados for par, é a média dos dois valores centrais.' },
    { tag: 'Estratégia', q: 'Como calcular a mediana?', a: '1) Ordena os dados. 2) Se forem ímpares, é o do meio. 3) Se forem pares, é a média dos dois centrais. Ex: 8,9,10,14,20 → mediana = 10.' },
    { tag: 'Definição', q: 'O que é a amplitude?', a: 'A diferença entre o maior e o menor valor: amplitude = máximo − mínimo. Mede a dispersão dos dados.' },
    { tag: 'Definição', q: 'O que são os quartis?', a: 'Q1, Q2 (mediana) e Q3 dividem os dados ordenados em quatro partes iguais (25% cada). A amplitude interquartis é Q3 − Q1.' },
    { tag: 'Definição', q: 'O que é a frequência absoluta?', a: 'O número de vezes que um valor (ou classe) ocorre nos dados.' },
    { tag: 'Definição', q: 'O que é a frequência relativa?', a: 'A frequência absoluta dividida pelo total. Costuma exprimir-se em % : (fa ÷ total) × 100.' },
    { tag: 'Regra', q: 'Como calcular uma probabilidade?', a: 'Em casos equiprováveis: P = casos favoráveis ÷ casos possíveis. O resultado está sempre entre 0 e 1.' },
    { tag: 'Exemplo', q: 'P de sair par num dado?', a: 'Casos favoráveis (2,4,6) = 3; possíveis = 6. P = 3/6 = 1/2.' },
    { tag: 'Exemplo', q: 'Probabilidade de um acontecimento certo / impossível', a: 'Acontecimento certo: P = 1. Acontecimento impossível: P = 0.' },
    { tag: 'Definição', q: 'O que é população e amostra?', a: 'População é o conjunto total que se estuda; amostra é uma parte da população, escolhida para a representar.' },
    { tag: 'Estratégia', q: 'Qual medida central usar?', a: 'Média: dados sem valores extremos. Mediana: resistente a extremos (ex: salários). Moda: dados qualitativos ou para o valor mais comum.' },
    { tag: 'Exemplo', q: 'Notas de um aluno: 12, 14, 14, 16, 19. Média?', a: '(12+14+14+16+19)/5 = 75/5 = 15 valores.' },
    { tag: 'Exemplo', q: 'P de tirar uma bola vermelha (5 em 20)?', a: 'P = 5/20 = 1/4 = 0,25 = 25%.' },
    { tag: 'Regra', q: 'Como se exprime uma probabilidade?', a: 'Como fração (1/4), decimal (0,25) ou percentagem (25%) - formas equivalentes. Está sempre entre 0 e 1 (ou 0% e 100%).' },
    { tag: 'Definição', q: 'O que é o diagrama de extremos e quartis?', a: 'Um gráfico (caixa de bigodes) que mostra o mínimo, Q1, mediana, Q3 e o máximo. Resume a distribuição e mostra a dispersão.' },
    { tag: 'Estratégia', q: 'Como construir uma tabela de frequências?', a: 'Conta cada valor/classe (frequência absoluta), divide pelo total (frequência relativa) e acumula (frequência acumulada).' }
  ]
};

// Seleção atual por tab
var _mat8Sel = { resumo: 1, 'resumo-st': 0 };

// ═══ NAVEGAÇÃO DE TABS ═══
function mat8SwitchTab(tab, btn) {
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
  var panel = document.getElementById('mat8p-' + tab);
  if (panel) { panel.classList.add('active'); panel.style.setProperty('display','block','important'); }

  var titles = { resumo:'Teoria', praticar:'Praticar', fichas:'Fichas', progresso:'Progresso',
                 exercicios:'Exercícios', quiz:'Quiz', flashcards:'Flashcards', teste:'Teste', jogos:'Jogos' };
  if (titles[tab]) document.title = 'Mat. 8.º ' + titles[tab] + ' · 3ponto14';

  if (tab === 'resumo') mat8BuildResumoNav();
  else if (tab === 'exercicios') mat8BuildPraticarNav();
  else if (tab === 'quiz') mat8QuizBuildNav();
  else if (tab === 'flashcards') mat8FcBuildNav();
  else if (tab === 'teste') mat8TesteBuildNav();
  else if (tab === 'jogos') mat8JogosInit();
  else if (tab === 'fichas') mat8FichasBuildNav();
  else if (tab === 'progresso') mat8RenderProgresso();
}

// Abre um sub-modo de prática a partir dos cartões do menu Praticar.
function mat8OpenPraticar(modo) { mat8SwitchTab(modo, null); }

// ═══ TAB TEORIA ═══
function mat8BuildResumoNav() {
  var capRow = document.getElementById('mat8-resumo-cap-row');
  if (!capRow) return;
  var activeCap = _mat8Sel['resumo'] || 1;
  var h = '';
  _mat8CapMeta.forEach(function(m) {
    var color = _mat8CapColors[m.n] || '#516860';
    var isActive = activeCap === m.n;
    var activeStyle = isActive ? 'background:' + color + ';border-color:' + color + ';color:#fff' : '';
    var hoverCode = isActive ? '' : ' onmouseover="this.style.borderColor=\'' + color + '\';this.style.color=\'' + color + '\'" onmouseout="this.style.borderColor=\'\';this.style.color=\'\'"';
    h += '<button class="resumo-cap-btn' + (isActive ? ' active' : '') + '" data-cap="' + m.n + '" onclick="mat8ResumoSelectCap(' + m.n + ',this)" style="' + activeStyle + '"' + hoverCode + '>'
       + '<span class="resumo-cap-icon">' + m.icon + '</span>' + m.label + '</button>';
  });
  capRow.innerHTML = h;
  mat8ResumoShowSts(activeCap);
  mat8RenderResumoInline();
}

function mat8ResumoSelectCap(cap, btn) {
  _mat8Sel['resumo'] = cap;
  _mat8Sel['resumo-st'] = 0;
  var capRow = document.getElementById('mat8-resumo-cap-row');
  if (capRow) {
    capRow.querySelectorAll('.resumo-cap-btn').forEach(function(b) {
      b.classList.remove('active'); b.style.background = ''; b.style.borderColor = ''; b.style.color = '';
    });
  }
  if (btn) {
    var color = _mat8CapColors[cap] || '#516860';
    btn.classList.add('active');
    btn.style.background = color; btn.style.borderColor = color; btn.style.color = '#fff';
  }
  mat8ResumoShowSts(cap);
  mat8RenderResumoInline();
}

function mat8ResumoShowSts(cap) {
  var stRow = document.getElementById('mat8-resumo-st-row');
  if (!stRow) return;
  var sts = _mat8Subtemas[cap] || [];
  if (!sts.length) { stRow.style.display = 'none'; return; }
  var h = '<div class="resumo-st-label">Subtema</div>';
  sts.forEach(function(st, i) {
    var isActive = (_mat8Sel['resumo-st'] || 0) === (i + 1);
    h += '<button class="resumo-st-btn' + (isActive ? ' active' : '') + '" data-st="' + (i + 1) + '" onclick="mat8ResumoSelectSt(this,' + cap + ',' + (i + 1) + ')">' + st + '</button>';
  });
  stRow.innerHTML = h;
  stRow.style.display = 'flex';
}

function mat8ResumoSelectSt(btn, cap, stIdx) {
  var stRow = document.getElementById('mat8-resumo-st-row');
  if (stRow) stRow.querySelectorAll('.resumo-st-btn').forEach(function(b) { b.classList.remove('active'); });
  if (btn) btn.classList.add('active');
  _mat8Sel['resumo'] = cap;
  _mat8Sel['resumo-st'] = stIdx;
  mat8RenderResumoInline();
}

function mat8RenderResumoInline() {
  var cap = _mat8Sel['resumo'] || 1;
  var dest = document.getElementById('mat8-resumo-content');
  if (!dest) return;

  var color = (function(){
    var c = _mat8CapColors[cap] || '#516860';
    return c;
  })();

  var tagIcons = {
    'Definição':'ph-book-bookmark', 'Fórmula':'ph-function', 'Regra':'ph-check-square',
    'Propriedade':'ph-star', 'Exemplo':'ph-pencil-line', 'Estratégia':'ph-lightbulb',
    'Síntese':'ph-seal-check', 'Notação':'ph-at', 'Hierarquia':'ph-tree-structure',
    'Teorema':'ph-intersect', 'Conceito':'ph-cube'
  };

  var allCards = _mat8Cards[cap] || [];

  // Filtrar por subtema, se selecionado
  var stIdx = _mat8Sel['resumo-st'] || 0;
  var cards = allCards;
  if (stIdx > 0 && _mat8Subtemas[cap]) {
    var stLabel = (_mat8Subtemas[cap][stIdx - 1] || '').toLowerCase();
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

  _mat8PM(cap, 'teoria'); // estudou a teoria deste capítulo

  // Acordeão partilhado: grupos colapsáveis + perguntas que abrem a resposta.
  dest.innerHTML = _teoriaAccordionHTML(cards, color, tagIcons);
}

/* ════════════════════════════════════════════════════════════════
   TAB PRATICAR - exercícios gerados com correção imediata
   Renderiza tudo no painel (sem páginas externas). Reutiliza os
   motores genéricos do chapter-engine: _capBuildQuizHTML,
   _capCheckAnswer, _capShowFeedback.
   ════════════════════════════════════════════════════════════════ */

// Gerador por capítulo (resolução lazy - buildEx_m81 é definida no fim do ficheiro).
// Só os caps com gerador são "praticáveis".
function _mat8Gerador(cap) {
  if (cap === 1 && typeof buildEx_m81 === 'function') return buildEx_m81;
  if (cap === 2 && typeof buildEx_m82 === 'function') return buildEx_m82;
  if (cap === 3 && typeof buildEx_m83 === 'function') return buildEx_m83;
  if (cap === 4 && typeof buildEx_m84 === 'function') return buildEx_m84;
  if (cap === 5 && typeof buildEx_m85 === 'function') return buildEx_m85;
  if (cap === 6 && typeof buildEx_m86 === 'function') return buildEx_m86;
  if (cap === 7 && typeof buildEx_m87 === 'function') return buildEx_m87;
  if (cap === 8 && typeof buildEx_m88 === 'function') return buildEx_m88;
  return null;
}
var _mat8TemasCount = { 1: 11, 2: 4, 3: 6, 4: 4, 5: 4, 6: 4, 7: 6, 8: 6 };

// Estado da prática
var _mat8Prat = { cap: 1, st: 0, nivel: 'medio', score: { correct: 0, total: 0 }, answered: {}, exs: [] };

function _mat8PratStorageKey(cap) { return 'edupt_mat8_cap' + cap; }

function mat8BuildPraticarNav() {
  var capRow = document.getElementById('mat8-praticar-cap-row');
  if (!capRow) return;
  var activeCap = _mat8Prat.cap || 1;
  var h = '';
  _mat8CapMeta.forEach(function(m) {
    var hasGen = !!_mat8Gerador(m.n);
    var color = _mat8CapColors[m.n] || '#516860';
    var isActive = activeCap === m.n;
    var activeStyle = isActive ? 'background:' + color + ';border-color:' + color + ';color:#fff' : '';
    var disabledStyle = hasGen ? '' : 'opacity:.45;cursor:not-allowed';
    var onclick = hasGen ? 'mat8PraticarSelectCap(' + m.n + ',this)' : '';
    var title = hasGen ? '' : ' title="Em preparação"';
    h += '<button class="resumo-cap-btn' + (isActive ? ' active' : '') + '" data-cap="' + m.n + '" onclick="' + onclick + '" style="' + activeStyle + ';' + disabledStyle + '"' + title + '>'
       + '<span class="resumo-cap-icon">' + m.icon + '</span>' + m.label + (hasGen ? '' : ' ·') + '</button>';
  });
  capRow.innerHTML = h;
  mat8PraticarShowSts(activeCap);
}

function mat8PraticarShowSts(cap) {
  var stRow = document.getElementById('mat8-praticar-st-row');
  if (!stRow) return;
  var sts = _mat8Subtemas[cap] || [];
  if (!sts.length) { stRow.style.display = 'none'; return; }
  var h = '<div class="resumo-st-label">Subtema</div>';
  h += '<button class="resumo-st-btn' + (_mat8Prat.st === 0 ? ' active' : '') + '" data-st="0" onclick="mat8PraticarSelectSt(this,0)">Todos</button>';
  sts.forEach(function(st, i) {
    h += '<button class="resumo-st-btn' + (_mat8Prat.st === (i + 1) ? ' active' : '') + '" data-st="' + (i + 1) + '" onclick="mat8PraticarSelectSt(this,' + (i + 1) + ')">' + st + '</button>';
  });
  stRow.innerHTML = h;
  stRow.style.display = 'flex';
}

function mat8PraticarSelectCap(cap, btn) {
  if (!_mat8Gerador(cap)) return;
  _mat8Prat.cap = cap;
  _mat8Prat.st = 0;
  var capRow = document.getElementById('mat8-praticar-cap-row');
  if (capRow) capRow.querySelectorAll('.resumo-cap-btn').forEach(function(b) { b.classList.remove('active'); b.style.background = ''; b.style.borderColor = ''; b.style.color = ''; });
  if (btn) { var color = _mat8CapColors[cap] || '#516860'; btn.classList.add('active'); btn.style.background = color; btn.style.borderColor = color; btn.style.color = '#fff'; }
  mat8PraticarShowSts(cap);
  mat8GerarExercicios();
}

function mat8PraticarSelectSt(btn, stIdx) {
  var stRow = document.getElementById('mat8-praticar-st-row');
  if (stRow) stRow.querySelectorAll('.resumo-st-btn').forEach(function(b) { b.classList.remove('active'); });
  if (btn) btn.classList.add('active');
  _mat8Prat.st = stIdx;
  mat8GerarExercicios();
}

function mat8PraticarSetNivel(nivel, btn) {
  _mat8Prat.nivel = nivel;
  var grp = document.getElementById('mat8-praticar-nivel');
  if (grp) grp.querySelectorAll('.gen-level-btn').forEach(function(b) { b.classList.remove('active'); });
  if (btn) btn.classList.add('active');
  mat8GerarExercicios();
}

// Mapa subtema → temas a usar no gerador (Cap 1 Números)
var _mat8SubtemaTemas = {
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

function mat8GerarExercicios() {
  var dest = document.getElementById('mat8-praticar-content');
  if (!dest) return;
  var cap = _mat8Prat.cap, gen = _mat8Gerador(cap);
  if (!gen) { dest.innerHTML = ''; return; }

  // Que temas usar?
  var temas;
  if (_mat8Prat.st > 0 && _mat8SubtemaTemas[cap] && _mat8SubtemaTemas[cap][_mat8Prat.st]) {
    temas = _mat8SubtemaTemas[cap][_mat8Prat.st];
  } else {
    temas = [];
    for (var t = 1; t <= (_mat8TemasCount[cap] || 1); t++) temas.push(String(t));
  }

  var QTD = 8;
  var tipos = ['mc', 'fill', 'mc', 'vf', 'fill', 'mc', 'fill', 'mc'];
  var geradas = [];
  for (var i = 0; i < QTD; i++) {
    var tema = temas[i % temas.length];
    var ex = gen(tema, tipos[i % tipos.length], _mat8Prat.nivel);
    if (ex) geradas.push(ex);
  }
  var banco = (typeof _mat8Banco !== "undefined" && _mat8Banco[cap]) ? _mat8Banco[cap].filter(function (q) { return temas.indexOf(q.t) !== -1; }) : [];
  var exs = (typeof _mixBancoGeradas === "function") ? _mixBancoGeradas(banco, geradas, QTD, 2)
    : geradas.map(function (e, idx) { return Object.assign({}, e, { num: idx + 1 }); });
  _mat8Prat.exs = exs;
  _mat8Prat.answered = {};
  _mat8Prat.score = { correct: 0, total: 0 };

  // Score bar + questões (reutiliza motor genérico do chapter-engine)
  var scoreBar = '<div class="score-bar" id="mat8-prat-scorebar">'
    + '<div><div class="score-num" id="mat8-prat-score">0</div><div class="score-label">pontos</div></div>'
    + '<div><div class="score-num" id="mat8-prat-total">/ 0</div><div class="score-label">respondidas</div></div>'
    + '<div class="progress-track"><div class="progress-fill" id="mat8-prat-prog" style="width:0%"></div></div>'
    + '<button class="btn btn-ghost ml-auto" onclick="mat8GerarExercicios()">↺ Novas questões</button>'
    + '</div>';
  var quizHTML = (typeof _capBuildQuizHTML === 'function')
    ? _capBuildQuizHTML(exs, 'm8ex', 'mat8CheckEx')
    : '<p style="color:var(--ink4)">Motor de exercícios indisponível.</p>';
  dest.innerHTML = scoreBar + quizHTML;
}

function mat8CheckEx(qid, tipo, val, btn) {
  if (_mat8Prat.answered[qid]) return;
  if (typeof _capCheckAnswer !== 'function') return;
  var r = _capCheckAnswer(qid, tipo, val);
  if (!r) return; // resposta vazia
  _mat8Prat.answered[qid] = true;
  if (r.correct) _mat8Prat.score.correct++;
  _mat8Prat.score.total++;
  if (typeof _capShowFeedback === 'function') _capShowFeedback(qid, r.correct, r.expl, val, btn);
  var se = document.getElementById('mat8-prat-score'); if (se) se.textContent = _mat8Prat.score.correct;
  var te = document.getElementById('mat8-prat-total'); if (te) te.textContent = '/ ' + _mat8Prat.score.total;
  var pe = document.getElementById('mat8-prat-prog'); if (pe && _mat8Prat.exs.length) pe.style.width = (_mat8Prat.score.total / _mat8Prat.exs.length * 100) + '%';
  mat8SaveProgress(_mat8Prat.cap, r.correct);
}

// ═══ PROGRESSO (localStorage por capítulo) ═══
function mat8SaveProgress(cap, correct) {
  try {
    var key = _mat8PratStorageKey(cap);
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
// ('m8capN') para não misturar com o progresso do 7.º ano.
function _mat8PM(cap, tipo, opts) {
  if (typeof ProgressManager === 'undefined') return;
  try { ProgressManager.record('m8cap' + cap, tipo, opts || {}); } catch (e) {}
}

/* ════════════════════════════════════════════════════════════════
   HELPER: linha de capítulos para sub-modos (quiz, flashcards, teste)
   Só capítulos com gerador ficam ativos.
   ════════════════════════════════════════════════════════════════ */
function _mat8BuildCapRow(rowId, activeCap, onclickName) {
  var row = document.getElementById(rowId);
  if (!row) return;
  var h = '';
  _mat8CapMeta.forEach(function(m) {
    var hasGen = !!_mat8Gerador(m.n);
    var color = _mat8CapColors[m.n] || '#516860';
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

function _mat8SetActiveCapBtn(rowId, btn, cap) {
  var row = document.getElementById(rowId);
  if (row) row.querySelectorAll('.resumo-cap-btn').forEach(function(b){ b.classList.remove('active'); b.style.background=''; b.style.borderColor=''; b.style.color=''; });
  if (btn) { var color = _mat8CapColors[cap] || '#516860'; btn.classList.add('active'); btn.style.background=color; btn.style.borderColor=color; btn.style.color='#fff'; }
}

// Gera uma questão de escolha múltipla para um capítulo (usada por quiz).
function _mat8BuildMcQuestion(cap) {
  var gen = _mat8Gerador(cap);
  if (!gen) return null;
  var nTemas = _mat8TemasCount[cap] || 1;
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
var _mat8Quiz = { cap: 1, lives: 3, streak: 0, maxStreak: 0, score: 0, total: 0, answered: false, current: null };

function mat8QuizBuildNav() {
  if (!_mat8Gerador(_mat8Quiz.cap)) _mat8Quiz.cap = 1;
  _mat8BuildCapRow('mat8-quiz-cap-row', _mat8Quiz.cap, 'mat8QuizSelectCap');
  mat8QuizStart();
}

function mat8QuizSelectCap(cap, btn) {
  if (!_mat8Gerador(cap)) return;
  _mat8SetActiveCapBtn('mat8-quiz-cap-row', btn, cap);
  _mat8Quiz.cap = cap;
  mat8QuizStart();
}

function mat8QuizStart() {
  _mat8Quiz.lives = 3; _mat8Quiz.streak = 0; _mat8Quiz.maxStreak = 0;
  _mat8Quiz.score = 0; _mat8Quiz.total = 0; _mat8Quiz.answered = false;
  mat8QuizNext();
}

function mat8QuizNext() {
  var app = document.getElementById('mat8-quiz-app');
  if (!app) return;
  if (_mat8Quiz.lives <= 0) { mat8QuizGameOver(app); return; }
  var ex = _mat8BuildMcQuestion(_mat8Quiz.cap);
  if (!ex) { app.innerHTML = '<p style="color:var(--ink4);padding:2rem;text-align:center">Sem questões disponíveis para este capítulo.</p>'; return; }
  _mat8Quiz.current = ex; _mat8Quiz.answered = false;
  var lives = '';
  for (var i = 0; i < 3; i++) lives += (i < _mat8Quiz.lives ? '❤️' : '🖤') + ' ';
  var opts = '';
  ex.opcoes.forEach(function(opt, idx) {
    opts += '<button class="qg-opt-btn" id="mat8qopt-' + idx + '" onclick="mat8QuizAnswer(' + idx + ')">' + opt + '</button>';
  });
  app.innerHTML =
    '<div class="qg-hub-bar">' +
      '<div class="qg-hub-lives">' + lives + '</div>' +
      '<div class="qg-hub-streak">' + (_mat8Quiz.streak > 1 ? '🔥 ' + _mat8Quiz.streak + ' seguidas' : '') + '</div>' +
      '<div class="qg-hub-score">✓ ' + _mat8Quiz.score + ' / ' + _mat8Quiz.total + '</div>' +
    '</div>' +
    '<div class="qg-hub-question">' + ex.enun + '</div>' +
    '<div class="qg-hub-opts">' + opts + '</div>' +
    '<div class="qg-hub-feedback" id="mat8-quiz-fb" style="min-height:2.5rem"></div>';
}

function mat8QuizAnswer(idx) {
  if (_mat8Quiz.answered) return;
  _mat8Quiz.answered = true;
  var ex = _mat8Quiz.current; if (!ex) return;
  var correct = String(ex.opcoes[idx]) === String(ex.resposta);
  _mat8Quiz.total++;
  document.querySelectorAll('.qg-opt-btn').forEach(function(b, i) {
    b.disabled = true;
    if (String(ex.opcoes[i]) === String(ex.resposta)) { b.style.background = '#4caf50'; b.style.color = '#fff'; }
  });
  var clicked = document.getElementById('mat8qopt-' + idx);
  if (clicked && !correct) { clicked.style.background = '#f44336'; clicked.style.color = '#fff'; }
  var fb = document.getElementById('mat8-quiz-fb');
  if (correct) {
    _mat8Quiz.score++; _mat8Quiz.streak++;
    if (_mat8Quiz.streak > _mat8Quiz.maxStreak) _mat8Quiz.maxStreak = _mat8Quiz.streak;
    if (fb) fb.innerHTML = '<span style="color:var(--correct,#3ecf8e);font-weight:700">✓ Certo!</span> ' + (ex.expl || '');
  } else {
    _mat8Quiz.lives--; _mat8Quiz.streak = 0;
    if (fb) fb.innerHTML = '<span style="color:var(--wrong,#ff6b6b);font-weight:700">✗ Errado.</span> ' + (ex.expl || '');
  }
  mat8SaveProgress(_mat8Quiz.cap, correct);
  setTimeout(function(){ mat8QuizNext(); }, 1400);
}

function mat8QuizGameOver(app) {
  var pct = _mat8Quiz.total > 0 ? Math.round(_mat8Quiz.score / _mat8Quiz.total * 100) : 0;
  _mat8PM(_mat8Quiz.cap, 'quiz', { pontuacao: _mat8Quiz.score, total: _mat8Quiz.total });
  var emoji = pct >= 90 ? '🏆' : pct >= 70 ? '⭐' : pct >= 50 ? '👍' : '📚';
  app.innerHTML =
    '<div style="text-align:center;padding:2.5rem 1rem">' +
      '<div style="font-size:3.5rem;margin-bottom:.75rem">' + emoji + '</div>' +
      '<div style="font-family:\'Cormorant Garamond\',serif;font-size:2rem;font-weight:900;color:var(--ink)">' + pct + '%</div>' +
      '<div style="color:var(--ink3);margin:.5rem 0 1.5rem">' + _mat8Quiz.score + ' certas em ' + _mat8Quiz.total + ' questões</div>' +
      '<div style="font-size:1.5rem;margin-bottom:1.5rem">Melhor sequência: ' + (_mat8Quiz.maxStreak || 0) + ' 🔥</div>' +
      '<button class="btn btn-primary" onclick="mat8QuizStart()">↺ Jogar novamente</button>' +
    '</div>';
}

/* ════════════════════════════════════════════════════════════════
   SUB-MODO: FLASHCARDS
   ════════════════════════════════════════════════════════════════ */
var _mat8Fc = { cap: 1, idx: 0, flipped: false, cards: [] };

function mat8FcBuildNav() {
  // primeiro capítulo com cartões
  if (!(_mat8Cards[_mat8Fc.cap] && _mat8Cards[_mat8Fc.cap].length)) {
    for (var c = 1; c <= 8; c++) { if (_mat8Cards[c] && _mat8Cards[c].length) { _mat8Fc.cap = c; break; } }
  }
  // linha de capítulos: só os que têm cartões
  var row = document.getElementById('mat8-fc-cap-row');
  if (row) {
    var h = '';
    _mat8CapMeta.forEach(function(m) {
      var has = !!(_mat8Cards[m.n] && _mat8Cards[m.n].length);
      var color = _mat8CapColors[m.n] || '#516860';
      var isActive = _mat8Fc.cap === m.n;
      var activeStyle = isActive ? 'background:' + color + ';border-color:' + color + ';color:#fff' : '';
      var disabled = has ? '' : 'opacity:.45;cursor:not-allowed';
      var onclick = has ? ('mat8FcSelectCap(' + m.n + ',this)') : '';
      var title = has ? '' : ' title="Em preparação"';
      h += '<button class="resumo-cap-btn' + (isActive ? ' active' : '') + '" onclick="' + onclick + '" style="' + activeStyle + ';' + disabled + '"' + title + '>'
         + '<span class="resumo-cap-icon">' + m.icon + '</span>' + m.label + (has ? '' : ' ·') + '</button>';
    });
    row.innerHTML = h;
  }
  mat8FcSelectCap(_mat8Fc.cap, null);
}

function mat8FcSelectCap(cap, btn) {
  if (!(_mat8Cards[cap] && _mat8Cards[cap].length)) return;
  if (btn) _mat8SetActiveCapBtn('mat8-fc-cap-row', btn, cap);
  _mat8Fc.cap = cap;
  _mat8Fc.cards = _mat8Cards[cap].slice();
  _mat8Fc.idx = 0; _mat8Fc.flipped = false;
  _mat8PM(cap, 'flashcard');
  mat8FcRender();
}

function mat8FcRender() {
  var app = document.getElementById('mat8-fc-app');
  if (!app) return;
  var cards = _mat8Fc.cards;
  if (!cards.length) { app.innerHTML = '<p style="color:var(--ink4);padding:2rem;text-align:center">Sem flashcards para este capítulo.</p>'; return; }
  var card = cards[_mat8Fc.idx];
  var color = _mat8CapColors[_mat8Fc.cap] || '#516860';
  var pct = Math.round((_mat8Fc.idx + 1) / cards.length * 100);
  app.innerHTML =
    '<div class="card card-narrow">' +
      '<div class="flex items-center justify-between mb-3">' +
        '<span class="fc2-tag-pill" style="background:' + color + ';color:#fff">' + (card.tag || '') + '</span>' +
        '<span class="fc-counter">' + (_mat8Fc.idx + 1) + ' / ' + cards.length + '</span>' +
      '</div>' +
      '<div class="fc2-prog-track"><div class="fc2-prog-fill" style="width:' + pct + '%;background:' + color + '"></div></div>' +
      '<div onclick="mat8FcFlip()" class="fc2-card-inner" style="cursor:pointer;min-height:140px">' +
        '<div>' +
          '<p style="font-size:1.05rem;font-weight:600;color:var(--ink);line-height:1.4">' + (card.q || '') + '</p>' +
          '<p style="font-size:.9rem;color:' + color + ';margin-top:.75rem;line-height:1.5;display:' + (_mat8Fc.flipped ? 'block' : 'none') + '">' + (card.a || '') + '</p>' +
          '<p style="font-size:.75rem;color:var(--ink4);margin-top:.5rem">' + (_mat8Fc.flipped ? '' : 'Carrega para ver a resposta') + '</p>' +
        '</div>' +
      '</div>' +
      '<div class="flex flex-wrap gap-3 justify-center mt-5">' +
        '<button class="btn btn-ghost" onclick="mat8FcPrev()">← Anterior</button>' +
        '<button class="btn btn-primary" onclick="mat8FcFlip()">↕ Virar</button>' +
        '<button class="btn btn-ghost" onclick="mat8FcNext()">Seguinte →</button>' +
      '</div>' +
    '</div>';
}

function mat8FcFlip() { _mat8Fc.flipped = !_mat8Fc.flipped; mat8FcRender(); }
function mat8FcNext() { _mat8Fc.idx = (_mat8Fc.idx + 1) % (_mat8Fc.cards.length || 1); _mat8Fc.flipped = false; mat8FcRender(); }
function mat8FcPrev() { _mat8Fc.idx = (_mat8Fc.idx - 1 + (_mat8Fc.cards.length || 1)) % (_mat8Fc.cards.length || 1); _mat8Fc.flipped = false; mat8FcRender(); }

/* ════════════════════════════════════════════════════════════════
   SUB-MODO: TESTE CRONOMETRADO
   ════════════════════════════════════════════════════════════════ */
var _mat8Teste = { cap: 1, nivel: 'medio', qtd: 10, tempo: 600, exs: [], answered: {}, score: { correct: 0, total: 0 }, timer: null, restante: 0 };

function mat8TesteBuildNav() {
  if (!_mat8Gerador(_mat8Teste.cap)) _mat8Teste.cap = 1;
  _mat8BuildCapRow('mat8-teste-cap-row', _mat8Teste.cap, 'mat8TesteSelectCap');
  mat8TesteRenderConfig();
}

function mat8TesteSelectCap(cap, btn) {
  if (!_mat8Gerador(cap)) return;
  _mat8SetActiveCapBtn('mat8-teste-cap-row', btn, cap);
  _mat8Teste.cap = cap;
  mat8TesteRenderConfig();
}

function mat8TesteRenderConfig() {
  var app = document.getElementById('mat8-teste-app');
  if (!app) return;
  if (_mat8Teste.timer) { clearInterval(_mat8Teste.timer); _mat8Teste.timer = null; }
  app.innerHTML =
    '<div class="card">' +
      '<div class="card-title">Configurar teste</div>' +
      '<div class="flex flex-wrap gap-6 items-end">' +
        '<div><div class="label-small">Nível</div>' +
          '<div class="gen-level-group" id="mat8-teste-nivel">' +
            '<button class="gen-level-btn' + (_mat8Teste.nivel==='facil'?' active':'') + '" onclick="mat8TesteSetNivel(\'facil\',this)"><span class="status-dot status-dot--easy"></span> Fácil</button>' +
            '<button class="gen-level-btn' + (_mat8Teste.nivel==='medio'?' active':'') + '" onclick="mat8TesteSetNivel(\'medio\',this)"><span class="status-dot status-dot--medium"></span> Médio</button>' +
            '<button class="gen-level-btn' + (_mat8Teste.nivel==='dificil'?' active':'') + '" onclick="mat8TesteSetNivel(\'dificil\',this)"><span class="status-dot status-dot--hard"></span> Difícil</button>' +
          '</div></div>' +
        '<div><div class="label-small">N.º questões</div>' +
          '<select class="ai-select" id="mat8-teste-qtd"><option value="10">10</option><option value="15">15</option><option value="20">20</option></select></div>' +
        '<div><div class="label-small">Tempo</div>' +
          '<select class="ai-select" id="mat8-teste-tempo"><option value="600">10 min</option><option value="900">15 min</option><option value="1800">30 min</option></select></div>' +
        '<button class="btn btn-primary" onclick="mat8TesteStart()">▶ Iniciar teste</button>' +
      '</div>' +
    '</div>';
}

function mat8TesteSetNivel(nivel, btn) {
  _mat8Teste.nivel = nivel;
  var grp = document.getElementById('mat8-teste-nivel');
  if (grp) grp.querySelectorAll('.gen-level-btn').forEach(function(b){ b.classList.remove('active'); });
  if (btn) btn.classList.add('active');
}

function mat8TesteStart() {
  var gen = _mat8Gerador(_mat8Teste.cap); if (!gen) return;
  var qtdEl = document.getElementById('mat8-teste-qtd'), tempoEl = document.getElementById('mat8-teste-tempo');
  _mat8Teste.qtd = qtdEl ? parseInt(qtdEl.value) : 10;
  _mat8Teste.tempo = tempoEl ? parseInt(tempoEl.value) : 600;
  var nTemas = _mat8TemasCount[_mat8Teste.cap] || 1;
  var tipos = ['mc', 'fill', 'mc', 'vf', 'fill'];
  var exs = [];
  for (var i = 0; i < _mat8Teste.qtd; i++) {
    var ex = gen(String((i % nTemas) + 1), tipos[i % tipos.length], _mat8Teste.nivel);
    if (ex) exs.push(Object.assign({}, ex, { num: i + 1 }));
  }
  _mat8Teste.exs = exs; _mat8Teste.answered = {}; _mat8Teste.score = { correct: 0, total: 0 };
  _mat8Teste.restante = _mat8Teste.tempo;

  var app = document.getElementById('mat8-teste-app');
  var quizHTML = (typeof _capBuildQuizHTML === 'function') ? _capBuildQuizHTML(exs, 'm8teste', 'mat8TesteCheck') : '';
  app.innerHTML =
    '<div class="exam-progress-bar" style="position:sticky;top:0;z-index:5;background:var(--surface);padding:.75rem;border-radius:12px;display:flex;align-items:center;gap:1rem;flex-wrap:wrap">' +
      '<div style="font-family:\'Cormorant Garamond\',serif;font-size:1.8rem;font-weight:900" id="mat8-teste-timer">' + _mat8FmtTime(_mat8Teste.restante) + '</div>' +
      '<div style="font-size:.78rem;color:var(--ink3)">Respondidas: <span id="mat8-teste-answered">0 / ' + _mat8Teste.qtd + '</span></div>' +
      '<button class="btn btn-ghost ml-auto" onclick="mat8TesteFinish()">⏹ Terminar</button>' +
    '</div>' +
    '<div id="mat8-teste-questions" style="margin-top:1rem">' + quizHTML + '</div>';

  _mat8Teste.timer = setInterval(function() {
    _mat8Teste.restante--;
    var t = document.getElementById('mat8-teste-timer');
    if (t) t.textContent = _mat8FmtTime(_mat8Teste.restante);
    if (_mat8Teste.restante <= 0) mat8TesteFinish();
  }, 1000);
}

function _mat8FmtTime(s) {
  var m = Math.floor(s / 60), sec = s % 60;
  return (m < 10 ? '0' : '') + m + ':' + (sec < 10 ? '0' : '') + sec;
}

function mat8TesteCheck(qid, tipo, val, btn) {
  if (_mat8Teste.answered[qid]) return;
  if (typeof _capCheckAnswer !== 'function') return;
  var r = _capCheckAnswer(qid, tipo, val);
  if (!r) return;
  _mat8Teste.answered[qid] = true;
  if (r.correct) _mat8Teste.score.correct++;
  _mat8Teste.score.total++;
  if (typeof _capShowFeedback === 'function') _capShowFeedback(qid, r.correct, r.expl, val, btn);
  var a = document.getElementById('mat8-teste-answered');
  if (a) a.textContent = _mat8Teste.score.total + ' / ' + _mat8Teste.qtd;
  mat8SaveProgress(_mat8Teste.cap, r.correct);
  if (_mat8Teste.score.total >= _mat8Teste.qtd) setTimeout(mat8TesteFinish, 600);
}

function mat8TesteFinish() {
  if (_mat8Teste.timer) { clearInterval(_mat8Teste.timer); _mat8Teste.timer = null; }
  var app = document.getElementById('mat8-teste-app');
  if (!app) return;
  var total = _mat8Teste.qtd;
  var correct = _mat8Teste.score.correct;
  var pct = total > 0 ? Math.round(correct / total * 100) : 0;
  _mat8PM(_mat8Teste.cap, 'quiz', { pontuacao: correct, total: total });
  var nota = Math.round(correct / total * 20 * 10) / 10;
  var emoji = pct >= 90 ? '🏆' : pct >= 70 ? '⭐' : pct >= 50 ? '👍' : '📚';
  app.innerHTML =
    '<div style="text-align:center;padding:2.5rem 1rem">' +
      '<div style="font-size:3.5rem;margin-bottom:.75rem">' + emoji + '</div>' +
      '<div style="font-family:\'Cormorant Garamond\',serif;font-size:2.2rem;font-weight:900;color:var(--ink)">' + nota + ' / 20</div>' +
      '<div style="color:var(--ink3);margin:.5rem 0 1.5rem">' + correct + ' certas em ' + total + ' questões (' + pct + '%)</div>' +
      '<button class="btn btn-primary" onclick="mat8TesteRenderConfig()">↺ Novo teste</button>' +
    '</div>';
}

/* ════════════════════════════════════════════════════════════════
   SUB-MODO: JOGOS (reutiliza o motor genérico _j24AutoInit)
   ════════════════════════════════════════════════════════════════ */
var _mat8JogosInited = false;
function mat8JogosInit() {
  _mat8PM(_mat8Prat.cap || 1, 'jogo');
  if (_mat8JogosInited) return;
  if (typeof _j24AutoInit === 'function') {
    // Regista o provedor de perguntas DESTE ano (matéria correta nos jogos)
    if (typeof _gRegisterProvider === 'function') {
      _gRegisterProvider('mat8-jogos-app', function (level) {
        var nCaps = _mat8CapMeta.length;
        for (var att = 0; att < 6; att++) {
          var cap = 1 + Math.floor(Math.random() * nCaps);
          var gen = _mat8Gerador(cap);
          var banco = (typeof _mat8Banco !== 'undefined' && _mat8Banco[cap]) ? _mat8Banco[cap] : null;
          var q = _jogoQFromGerador(gen, _mat8TemasCount[cap], banco, level);
          if (q) return q;
        }
        return null;
      });
    }
    _j24AutoInit('mat8-jogos-app', 'medio');
    _mat8JogosInited = true;
  } else {
    var app = document.getElementById('mat8-jogos-app');
    if (app) app.innerHTML = '<p style="color:var(--ink4);padding:2rem;text-align:center">Jogos indisponíveis (motor não carregado).</p>';
  }
}

/* ════════════════════════════════════════════════════════════════
   TAB PROGRESSO
   Lê edupt_mat8_capN (gravado por mat8SaveProgress). Mostra resumo
   global, stats, barras por capítulo, Relatório PDF e Limpar.
   ════════════════════════════════════════════════════════════════ */
function _mat8ProgGetCaps() {
  var out = [];
  for (var cap = 1; cap <= 8; cap++) {
    var correct = 0, total = 0;
    try {
      var d = JSON.parse(localStorage.getItem('edupt_mat8_cap' + cap) || '{}');
      if (d.sections) Object.keys(d.sections).forEach(function(k) {
        correct += (d.sections[k].correct || 0);
        total += (d.sections[k].total || 0);
      });
    } catch (e) {}
    out.push({ cap: cap, correct: correct, total: total, pct: total > 0 ? Math.round(correct / total * 100) : 0 });
  }
  return out;
}

function mat8RenderProgresso() {
  var el = document.getElementById('mat8-progresso-content');
  if (!el) return;
  var caps = _mat8ProgGetCaps();
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
     + '<button onclick="mat8ProgDownloadPDF()" style="font-family:inherit;font-size:.82rem;font-weight:700;color:#8b3a35;background:none;border:none;cursor:pointer;text-decoration:underline;padding:0">Guarda o relatório PDF</button> para o manteres.</span>'
     + '</div>';

  // Resumo global (gradiente índigo do 8.º ano)
  h += '<div style="background:var(--m8c1-base);border:1.5px solid var(--m8c1-mid);border-radius:16px;padding:1.1rem 1.25rem;margin-bottom:1.25rem;display:flex;align-items:center;gap:1rem;flex-wrap:wrap">'
     +   '<div style="width:52px;height:52px;border-radius:50%;background:var(--m8c1-mid);display:flex;align-items:center;justify-content:center;flex-shrink:0"><i class="ph ' + icon + '" style="font-size:1.4rem;color:#fff"></i></div>'
     +   '<div style="flex:1;min-width:180px">'
     +     '<div style="font-family:\'Cormorant Garamond\',serif;font-size:1.6rem;font-weight:900;color:var(--ink);line-height:1">' + (totalT > 0 ? globalPct + '<span style="font-size:1rem">%</span>' : '-') + '</div>'
     +     '<div style="font-size:.82rem;color:var(--ink2);margin-top:3px">' + msg + '</div>'
     +   '</div>'
     +   '<button class="btn btn-ghost" onclick="mat8ProgDownloadPDF()" style="font-size:.78rem;padding:7px 14px;display:inline-flex;align-items:center;gap:5px"><i class="ph ph-file-text"></i>Relatório PDF</button>'
     + '</div>';

  // XP + streak do ProgressManager (apenas dos capítulos do 8.º ano)
  var pmXp = 0, pmStreak = 0;
  if (typeof ProgressManager !== 'undefined') {
    try {
      var sum = ProgressManager.getSummary();
      pmStreak = sum.streak || 0;
      if (sum.caps) Object.keys(sum.caps).forEach(function(k) { if (k.indexOf('m8cap') === 0) pmXp += (sum.caps[k].xp || 0); });
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
    var m = _mat8CapMeta[c.cap - 1];
    var color = _mat8CapColors[c.cap] || '#516860';
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
      var mp = _mat8CapMeta[pior.cap - 1];
      var colorp = _mat8CapColors[pior.cap] || '#516860';
      h += '<div class="card mt-4" style="border-color:' + colorp + '">'
        + '<div class="card-title" style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:.5rem">'
        + '<span>🎯 Treino Direcionado</span></div>'
        + '<div style="font-size:.85rem;color:var(--ink2);margin:.3rem 0 .8rem">O capítulo onde tens mais a melhorar é <strong>' + mp.label + '</strong> (' + pior.pct + '%). Pratica mais um pouco para subir a tua taxa!</div>'
        + '<button class="btn btn-primary" onclick="mat8TreinarCap(' + pior.cap + ')" style="display:inline-flex;align-items:center;gap:6px"><i class="ph ph-target"></i> Treinar ' + mp.label + '</button>'
        + '</div>';
    }
  }

  // Última atualização
  h += '<div style="font-size:.72rem;color:var(--ink4);margin-top:1rem">Última atualização: ' + new Date().toLocaleString('pt-PT', { hour: '2-digit', minute: '2-digit', day: '2-digit', month: '2-digit' }) + '</div>';

  // Limpar
  h += '<div class="mt-4 flex flex-wrap gap-3"><button class="btn btn-ghost" onclick="mat8ProgReset()"><i class="ph ph-trash"></i> Limpar progresso</button></div>';

  el.innerHTML = h;
}

// Abre a tab Exercícios da Praticar já no capítulo indicado (treino direcionado).
function mat8TreinarCap(cap) {
  _mat8Prat.cap = cap;
  _mat8Prat.st = 0;
  mat8SwitchTab('exercicios', null);
}

function mat8ProgReset() {
  if (typeof window !== 'undefined' && window.confirm && !window.confirm('Limpar todo o progresso do 8.º ano? Esta ação não pode ser desfeita.')) return;
  for (var cap = 1; cap <= 8; cap++) { try { localStorage.removeItem('edupt_mat8_cap' + cap); } catch (e) {} }
  // Remove só os capítulos do 8.º ano (m8cap*) do ProgressManager, preservando o 7.º.
  try {
    var raw = localStorage.getItem('edupt_progress_v2');
    if (raw) {
      var d = JSON.parse(raw);
      if (d.caps) { Object.keys(d.caps).forEach(function(k) { if (k.indexOf('m8cap') === 0) delete d.caps[k]; }); }
      localStorage.setItem('edupt_progress_v2', JSON.stringify(d));
    }
  } catch (e) {}
  mat8RenderProgresso();
  if (typeof eduToast === 'function') eduToast('Progresso do 8.º ano limpo.', 'ok');
}

function mat8ProgDownloadPDF() {
  var caps = _mat8ProgGetCaps();
  var totalC = 0, totalT = 0;
  caps.forEach(function(c) { totalC += c.correct; totalT += c.total; });
  var globalPct = totalT > 0 ? Math.round(totalC / totalT * 100) : 0;
  var rows = caps.map(function(c) {
    var m = _mat8CapMeta[c.cap - 1];
    return '<tr><td style="padding:6px 10px;border-bottom:1px solid #eee">' + m.label + '</td>'
      + '<td style="padding:6px 10px;border-bottom:1px solid #eee;text-align:center">' + (c.total > 0 ? c.correct + ' / ' + c.total : '-') + '</td>'
      + '<td style="padding:6px 10px;border-bottom:1px solid #eee;text-align:center">' + (c.total > 0 ? c.pct + '%' : '-') + '</td></tr>';
  }).join('');
  var html = '<div style="font-family:Arial,sans-serif;max-width:680px;margin:0 auto;padding:24px">'
    + '<h1 style="font-size:20px;margin:0 0 4px">Relatório de Progresso · Matemática 8.º Ano</h1>'
    + '<div style="color:#666;font-size:13px;margin-bottom:16px">3ponto14 · ' + new Date().toLocaleString('pt-PT', { day: '2-digit', month: '2-digit', year: 'numeric' }) + '</div>'
    + '<div style="background:#eef3f9;border:1px solid #5a7fa8;border-radius:8px;padding:12px 16px;margin-bottom:16px">'
    + '<strong>Taxa global:</strong> ' + (totalT > 0 ? globalPct + '%' : '-') + ' &nbsp;·&nbsp; ' + totalC + ' certas em ' + totalT + ' questões.</div>'
    + '<table style="width:100%;border-collapse:collapse;font-size:14px"><thead><tr style="background:#36527a;color:#fff">'
    + '<th style="padding:8px 10px;text-align:left">Capítulo</th><th style="padding:8px 10px">Certas</th><th style="padding:8px 10px">%</th></tr></thead>'
    + '<tbody>' + rows + '</tbody></table></div>';
  if (typeof htmlToPdfDownload === 'function') htmlToPdfDownload(html, 'progresso-mat8.pdf');
  else if (typeof eduToast === 'function') eduToast('Geração de PDF indisponível.', 'warn');
}

/* ════════════════════════════════════════════════════════════════
   TAB FICHAS - gerador rico (multi-capítulo), igual ao 7.º ano.
   Tipos: resumo teórico, exercícios, teste, minitestes, soluções.
   Seleção de vários capítulos; nível; nº de exercícios; PDF ou HTML.
   ════════════════════════════════════════════════════════════════ */
var _mat8gf = {
  caps: {},            // { cap: true } selecionados
  tipos: { resumo: true, exercicios: true, teste: true, minitestes: false, solucoes: true },
  dif: 'facil',
  qty: 10
};

// Constrói a lista de capítulos selecionáveis (só os com gerador).
function mat8FichasBuildNav() {
  var el = document.getElementById('mat8-fichas-caps');
  if (!el) return;
  // por defeito, seleciona o primeiro capítulo com gerador
  var temAlgum = false;
  for (var k in _mat8gf.caps) { if (_mat8gf.caps[k]) { temAlgum = true; break; } }
  var h = '';
  _mat8CapMeta.forEach(function(m) {
    var hasGen = !!_mat8Gerador(m.n);
    if (!hasGen) return;
    if (!temAlgum) { _mat8gf.caps[m.n] = true; temAlgum = true; } // 1.º disponível
    var sel = !!_mat8gf.caps[m.n];
    var color = _mat8CapColors[m.n] || '#516860';
    var style = sel ? 'background:' + color + ';border-color:' + color + ';color:#fff' : '';
    h += '<button class="gf-cap-btn' + (sel ? ' active' : '') + '" data-cap="' + m.n + '" onclick="mat8gfToggleCap(' + m.n + ',this)" style="' + style + '">' + m.icon + ' ' + m.label + '</button>';
  });
  el.innerHTML = h;
}

function mat8gfToggleCap(cap, btn) {
  _mat8gf.caps[cap] = !_mat8gf.caps[cap];
  var color = _mat8CapColors[cap] || '#516860';
  if (_mat8gf.caps[cap]) { btn.classList.add('active'); btn.style.background = color; btn.style.borderColor = color; btn.style.color = '#fff'; }
  else { btn.classList.remove('active'); btn.style.background = ''; btn.style.borderColor = ''; btn.style.color = ''; }
}

function mat8gfToggleType(btn) {
  var t = btn.getAttribute('data-type');
  _mat8gf.tipos[t] = !_mat8gf.tipos[t];
  btn.classList.toggle('active', _mat8gf.tipos[t]);
  var tick = btn.querySelector('.gf-tick'); if (tick) tick.textContent = _mat8gf.tipos[t] ? '✓' : '';
}

function mat8gfSetDif(btn) {
  _mat8gf.dif = btn.getAttribute('data-dif');
  var grp = document.getElementById('mat8-fichas-dif');
  if (grp) grp.querySelectorAll('.gf-dif-btn').forEach(function(b){ b.classList.remove('active'); });
  btn.classList.add('active');
}

function mat8gfSetQty(btn) {
  _mat8gf.qty = parseInt(btn.getAttribute('data-qty')) || 10;
  var grp = document.getElementById('mat8-fichas-qty');
  if (grp) grp.querySelectorAll('.gf-dif-btn').forEach(function(b){ b.classList.remove('active'); });
  btn.classList.add('active');
}

// Renderiza um bloco de exercícios (com ou sem espaço de resposta).
function _mat8gfExBloco(exs, startNum) {
  var h = '';
  var fm = (typeof formatMath === 'function') ? formatMath : function(x){ return x; };
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

function _mat8gfGenExs(cap, n) {
  var gen = _mat8Gerador(cap); if (!gen) return [];
  var nTemas = _mat8TemasCount[cap] || 1;
  var tipos = ['mc', 'fill', 'vf', 'fill', 'mc', 'mc'];
  var geradas = [];
  for (var i = 0; i < n; i++) {
    var ex = gen(String((i % nTemas) + 1), tipos[i % tipos.length], _mat8gf.dif);
    if (ex) geradas.push(ex);
  }
  // mistura questões reais do banco (multi-passo, com contexto/figuras)
  var banco = (typeof _mat8Banco !== 'undefined' && _mat8Banco[cap]) ? _mat8Banco[cap] : [];
  if (banco.length && typeof _mixBancoGeradas === 'function') {
    return _mixBancoGeradas(banco, geradas, n, Math.min(Math.ceil(n / 3), banco.length));
  }
  return geradas;
}

function mat8gfGerar(formato) {
  // capítulos selecionados
  var capsSel = [];
  _mat8CapMeta.forEach(function(m) { if (_mat8gf.caps[m.n] && _mat8Gerador(m.n)) capsSel.push(m.n); });
  var status = document.getElementById('mat8-fichas-status');
  if (!capsSel.length) { if (status) status.textContent = 'Seleciona pelo menos um capítulo.'; return; }
  var algumTipo = _mat8gf.tipos.resumo || _mat8gf.tipos.exercicios || _mat8gf.tipos.teste || _mat8gf.tipos.minitestes;
  if (!algumTipo) { if (status) status.textContent = 'Seleciona pelo menos um tipo de conteúdo.'; return; }
  if (status) status.textContent = 'A gerar…';

  var difLabel = { facil: 'Fácil', medio: 'Médio', dificil: 'Difícil' }[_mat8gf.dif];
  var solucoes = []; // {num, ex} acumuladas para a secção final
  var solCounter = 0;

  var corpo = '';
  capsSel.forEach(function(cap, ci) {
    _mat8PM(cap, 'ficha'); // gerou ficha deste capítulo
    var m = _mat8CapMeta[cap - 1];
    var color = _mat8CapColors[cap] || '#36527a';
    corpo += '<div style="' + (ci > 0 ? 'page-break-before:always;' : '') + 'margin-bottom:6px">'
      + '<h2 style="font-size:16px;color:' + color + ';border-bottom:2px solid ' + color + ';padding-bottom:4px;margin:0 0 10px">' + cap + '. ' + m.label + '</h2>';

    // Resumo teórico (das flashcards)
    if (_mat8gf.tipos.resumo) {
      var cards = _mat8Cards[cap] || [];
      if (cards.length) {
        corpo += '<div style="margin-bottom:12px"><h3 style="font-size:13px;color:#444;margin:0 0 5px">Resumo teórico</h3>';
        cards.slice(0, 8).forEach(function(c) {
          corpo += '<div style="font-size:11.5px;margin-bottom:4px"><strong>' + c.q + '</strong> ' + c.a + (c.v ? '<div style="margin:3px 0">' + c.v + '</div>' : '') + '</div>';
        });
        corpo += '</div>';
      }
    }
    // Exercícios
    if (_mat8gf.tipos.exercicios) {
      var exs = _mat8gfGenExs(cap, _mat8gf.qty);
      corpo += '<div style="margin-bottom:12px"><h3 style="font-size:13px;color:#444;margin:0 0 5px">Exercícios</h3>'
        + _mat8gfExBloco(exs, solCounter + 1) + '</div>';
      exs.forEach(function(ex) { solCounter++; solucoes.push({ num: solCounter, ex: ex }); });
    }
    // Teste de avaliação (8 questões mistas)
    if (_mat8gf.tipos.teste) {
      var exsT = _mat8gfGenExs(cap, 8);
      corpo += '<div style="margin-bottom:12px"><h3 style="font-size:13px;color:#444;margin:0 0 5px">Teste de avaliação</h3>'
        + _mat8gfExBloco(exsT, solCounter + 1) + '</div>';
      exsT.forEach(function(ex) { solCounter++; solucoes.push({ num: solCounter, ex: ex }); });
    }
    // Minitestes (um por subtema, 4 questões cada)
    if (_mat8gf.tipos.minitestes) {
      var subt = _mat8Subtemas[cap] || [];
      var mapa = _mat8SubtemaTemas[cap] || {};
      corpo += '<div style="margin-bottom:12px"><h3 style="font-size:13px;color:#444;margin:0 0 5px">Minitestes</h3>';
      subt.forEach(function(st, si) {
        var temas = mapa[si + 1] || [String(si + 1)];
        var gen = _mat8Gerador(cap);
        var exsM = [];
        for (var q = 0; q < 4; q++) {
          var tema = temas[q % temas.length];
          var ex = gen(tema, (q % 2 === 0) ? 'mc' : 'fill', _mat8gf.dif);
          if (ex) exsM.push(ex);
        }
        corpo += '<div style="margin-bottom:8px"><div style="font-size:12px;font-weight:700;color:#555">Mini ' + (si + 1) + ' · ' + st + '</div>'
          + _mat8gfExBloco(exsM, solCounter + 1) + '</div>';
        exsM.forEach(function(ex) { solCounter++; solucoes.push({ num: solCounter, ex: ex }); });
      });
      corpo += '</div>';
    }
    corpo += '</div>';
  });

  // Secção de soluções
  var solHTML = '';
  if (_mat8gf.tipos.solucoes && solucoes.length) {
    var fmS = (typeof formatMath === 'function') ? formatMath : function(x){ return x; };
    var lst = solucoes.map(function(s) {
      return '<div style="font-size:11.5px;margin-bottom:7px;line-height:1.5;page-break-inside:avoid">'
        + '<strong>' + s.num + '.</strong> <strong style="color:#1a6b4a">' + fmS(String(s.ex.resposta)) + '</strong>'
        + (s.ex.expl ? '<br><span style="color:#555">' + fmS(s.ex.expl) + '</span>' : '') + '</div>';
    }).join('');
    solHTML = '<div style="page-break-before:always;padding-top:8px"><h2 style="font-size:16px;border-bottom:2px solid #36527a;padding-bottom:4px">Soluções</h2>' + lst + '</div>';
  }

  var nomesCaps = capsSel.map(function(c) { return _mat8CapMeta[c - 1].label; }).join(', ');
  var html = '<div style="font-family:Arial,sans-serif;max-width:740px;margin:0 auto;padding:24px;color:#222">'
    + '<div style="display:flex;justify-content:space-between;align-items:baseline;border-bottom:2px solid #36527a;padding-bottom:8px;margin-bottom:14px">'
    + '<div><h1 style="font-size:18px;margin:0">Ficha de Trabalho · Matemática 8.º Ano</h1>'
    + '<div style="font-size:11.5px;color:#666">' + nomesCaps + ' · Nível ' + difLabel + '</div></div>'
    + '<div style="font-size:11.5px;color:#888">3ponto14</div></div>'
    + '<div style="font-size:11.5px;color:#666;margin-bottom:12px">Nome: ____________________________  Data: ____ / ____ / ______</div>'
    + corpo + solHTML + '</div>';

  var _temasNomes = capsSel.map(function(c){ return _mat8CapMeta[c-1].label; });
  var fname = (typeof _nomeFicha === 'function') ? _nomeFicha('8', 'matematica', _temasNomes, formato) : ('ficha-mat8.' + (formato === 'html' ? 'html' : 'pdf'));
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
function _mat8Init() {
  if (typeof _addStatsTeoriaVisuais === 'function') _addStatsTeoriaVisuais(_mat8Cards[8], '#9a5e96'); // cap8 Dados
  if (typeof _addGeoTeoriaVisuais === 'function') _addGeoTeoriaVisuais(_mat8Cards[4], '#b06a6a', { pitagoras: true }); // cap4 Pitágoras
  // arranca na tab Teoria com o cap 1 selecionado
  mat8BuildResumoNav();
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _mat8Init);
else _mat8Init();

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


function buildEx_m81(tema, tipo, dif) {
  tema = String(tema);
  var L = lim_m81(dif || 'medio');
  var hard = (dif === 'dificil'), easy = (dif === 'facil');

  // ── TEMA 1 · Frações decimais e dízimas ──
  if (tema === '1') {
    // dízima finita se denominador (reduzido) só tem fatores 2 e 5
    var dens1 = [2, 4, 5, 8, 10, 20, 25];          // finitas
    var dens1inf = [3, 6, 7, 9, 11, 12];           // periódicas
    if (tipo === 'mc') {
      var useFin = Math.random() < 0.5;
      var d = useFin ? dens1[rnd_m81(0, dens1.length - 1)] : dens1inf[rnd_m81(0, dens1inf.length - 1)];
      var num = rnd_m81(1, d - 1);
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
      var s = samples[rnd_m81(0, samples.length - 1)];
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
    var p1 = pairs1[rnd_m81(0, pairs1.length - 1)];
    return {
      enun: 'Escreve a fração ' + p1[0] + '/' + p1[1] + ' na forma de dízima.', tipo: 'fill',
      resposta: p1[2], expl: p1[0] + '/' + p1[1] + ' = ' + p1[0] + ' ÷ ' + p1[1] + ' = ' + p1[2] + '.',
      tema: 'T1 · Dízimas'
    };
  }

  // ── TEMA 2 · Multiplicação de racionais ──
  if (tema === '2') {
    var a2 = rndNZ_m81(1, L.mx), b2 = rndNZ_m81(2, L.mx);
    var c2 = rndNZ_m81(1, L.mx), d2 = rndNZ_m81(2, L.mx);
    var rp = a2 * c2, rq = b2 * d2;
    var res2 = reduce_m81(rp, rq);
    if (tipo === 'mc') {
      var correct2 = fmtFrac_m81(res2[0], res2[1]);
      var wrongs2 = [fmtFrac_m81(a2 * c2, b2 + d2), fmtFrac_m81(a2 + c2, b2 * d2), fmtFrac_m81(-rp, rq)];
      var opts2 = shuffle_m81([correct2].concat(wrongs2).filter(function (v, i, arr) { return arr.indexOf(v) === i; })).slice(0, 4);
      if (opts2.indexOf(correct2) === -1) opts2[0] = correct2;
      return {
        enun: 'Calcula: ' + fmtFracHTML_m81(a2, b2) + ' × ' + fmtFracHTML_m81(c2, d2),
        tipo: 'mc', opcoes: opts2, resposta: correct2,
        expl: 'Multiplica numeradores e denominadores: (' + a2 + '×' + c2 + ')/(' + b2 + '×' + d2 + ') = ' + fmtFrac_m81(rp, rq) + ' = ' + correct2 + '.',
        tema: 'T2 · Multiplicação'
      };
    }
    if (tipo === 'vf') {
      var simetrico = Math.random() < 0.5;
      var n2v = rndNZ_m81(2, L.mx), d2v = rndNZ_m81(2, L.mx);
      var stmt2 = 'o simétrico de ' + fmtFrac_m81(n2v, d2v) + ' é ' + fmtFrac_m81(simetrico ? -n2v : n2v, d2v);
      return {
        enun: 'Verdadeiro ou Falso: ' + stmt2 + '.', tipo: 'vf', resposta: simetrico ? 'V' : 'F',
        expl: 'O simétrico de ' + fmtFrac_m81(n2v, d2v) + ' é ' + fmtFrac_m81(-n2v, d2v) + ' (troca-se o sinal).',
        tema: 'T2 · Multiplicação'
      };
    }
    return {
      enun: 'Calcula: ' + fmtFracHTML_m81(a2, b2) + ' × ' + fmtFracHTML_m81(c2, d2), tipo: 'fill',
      resposta: fmtFrac_m81(res2[0], res2[1]),
      expl: '(' + a2 + '×' + c2 + ')/(' + b2 + '×' + d2 + ') = ' + fmtFrac_m81(res2[0], res2[1]) + '.',
      tema: 'T2 · Multiplicação'
    };
  }

  // ── TEMA 3 · Divisão de racionais ──
  if (tema === '3') {
    var a3 = rndNZ_m81(1, L.mx), b3 = rndNZ_m81(2, L.mx);
    var c3 = rndNZ_m81(1, L.mx), d3 = rndNZ_m81(2, L.mx);
    // a/b ÷ c/d = a/b × d/c
    var rp3 = a3 * d3, rq3 = b3 * c3;
    var res3 = reduce_m81(rp3, rq3);
    if (tipo === 'mc') {
      var correct3 = fmtFrac_m81(res3[0], res3[1]);
      var wrongs3 = [fmtFrac_m81(a3 * c3, b3 * d3), fmtFrac_m81(rp3, -rq3), fmtFrac_m81(b3 * c3, a3 * d3)];
      var opts3 = shuffle_m81([correct3].concat(wrongs3).filter(function (v, i, arr) { return arr.indexOf(v) === i; })).slice(0, 4);
      if (opts3.indexOf(correct3) === -1) opts3[0] = correct3;
      return {
        enun: 'Calcula: ' + fmtFracHTML_m81(a3, b3) + ' ÷ ' + fmtFracHTML_m81(c3, d3),
        tipo: 'mc', opcoes: opts3, resposta: correct3,
        expl: 'Dividir é multiplicar pelo inverso: ' + fmtFrac_m81(a3, b3) + ' × ' + d3 + '/' + c3 + ' = ' + correct3 + '.',
        tema: 'T3 · Divisão'
      };
    }
    return {
      enun: 'Calcula: ' + fmtFracHTML_m81(a3, b3) + ' ÷ ' + fmtFracHTML_m81(c3, d3), tipo: 'fill',
      resposta: fmtFrac_m81(res3[0], res3[1]),
      expl: 'Multiplica pelo inverso: ' + fmtFrac_m81(a3, b3) + ' × ' + fmtFrac_m81(d3, c3) + ' = ' + fmtFrac_m81(res3[0], res3[1]) + '.',
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
    var pr = props[rnd_m81(0, props.length - 1)];
    if (tipo === 'mc' || tipo === 'vf') {
      var opts4 = shuffle_m81(props.map(function (x) { return x.nome; })).slice(0, 4);
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
      var p5 = [5, 10, 15, 20, 25][rnd_m81(0, 4)];
      var V5 = [200, 350, 500, 800, 1200, 6750][rnd_m81(0, 5)];
      var qual = rnd_m81(0, 1);
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
    var a5 = rndNZ_m81(1, L.mx), b5 = rndNZ_m81(2, 6);
    var c5 = rndNZ_m81(1, L.mx), d5 = rndNZ_m81(2, 6);
    var e5 = rndNZ_m81(1, L.mx), f5 = rndNZ_m81(2, 6);
    var prodP = a5 * c5, prodQ = b5 * d5;
    // soma com e/f: prodP/prodQ + e5/f5
    var lcm5 = prodQ * f5 / gcd_m81(prodQ, f5);
    var sp5 = prodP * (lcm5 / prodQ) + e5 * (lcm5 / f5);
    var res5 = reduce_m81(sp5, lcm5);
    return {
      enun: 'Calcula: ' + fmtFracHTML_m81(a5, b5) + ' × ' + fmtFracHTML_m81(c5, d5) + ' + ' + fmtFracHTML_m81(e5, f5),
      tipo: 'fill', resposta: fmtFrac_m81(res5[0], res5[1]),
      expl: 'Primeiro o produto: ' + fmtFrac_m81(prodP, prodQ) + '. Depois soma ' + fmtFrac_m81(e5, f5) + ' = ' + fmtFrac_m81(res5[0], res5[1]) + ' (respeita a hierarquia das operações).',
      tema: 'T5 · Expressões'
    };
  }

  // ── TEMA 6 · Potências de base racional ──
  if (tema === '6') {
    var base6n = rnd_m81(2, 4), base6d = rnd_m81(2, 5), exp6 = rnd_m81(2, hard ? 4 : 3);
    var pn = Math.pow(base6n, exp6), pd = Math.pow(base6d, exp6);
    if (tipo === 'mc') {
      var correct6 = pn + '/' + pd;
      var wrongs6 = [(base6n * exp6) + '/' + (base6d * exp6), pn + '/' + base6d, base6n + '/' + pd];
      var opts6 = shuffle_m81([correct6].concat(wrongs6).filter(function (v, i, arr) { return arr.indexOf(v) === i; })).slice(0, 4);
      if (opts6.indexOf(correct6) === -1) opts6[0] = correct6;
      return {
        enun: 'Calcula: (' + base6n + '/' + base6d + ')' + sup_m81(exp6),
        tipo: 'mc', opcoes: opts6, resposta: correct6,
        expl: '(a/b)ⁿ = aⁿ/bⁿ → ' + base6n + sup_m81(exp6) + '/' + base6d + sup_m81(exp6) + ' = ' + correct6 + '.',
        tema: 'T6 · Potências'
      };
    }
    // vf: sinal de potência de base negativa
    var bneg = rnd_m81(2, 5), eneg = rnd_m81(2, 5);
    var isEven = (eneg % 2 === 0);
    var claimPos = Math.random() < 0.5;
    return {
      enun: 'Verdadeiro ou Falso: (−' + bneg + ')' + sup_m81(eneg) + ' é um número ' + (claimPos ? 'positivo' : 'negativo') + '.',
      tipo: 'vf', resposta: (claimPos === isEven) ? 'V' : 'F',
      expl: 'Base negativa com expoente ' + (isEven ? 'par → positivo' : 'ímpar → negativo') + '.',
      tema: 'T6 · Potências'
    };
  }

  // ── TEMA 7 · Propriedades das potências ──
  if (tema === '7') {
    var base7 = rnd_m81(2, 6);
    var kind7 = rnd_m81(0, 2);
    if (kind7 === 0) { // mesmo base, produto
      var m7 = rnd_m81(2, 6), n7 = rnd_m81(2, 6);
      var r7 = m7 + n7;
      return {
        enun: 'Simplifica: ' + base7 + sup_m81(m7) + ' × ' + base7 + sup_m81(n7) + ' = ' + base7 + '^?',
        tipo: 'fill', resposta: String(r7),
        expl: 'Mesma base no produto: somam-se os expoentes → ' + base7 + sup_m81(m7) + '⁺' + sup_m81(n7) + ' = ' + base7 + sup_m81(r7) + '.',
        tema: 'T7 · Prop. Potências'
      };
    }
    if (kind7 === 1) { // mesmo base, quociente
      var big7 = rnd_m81(5, 9), sm7 = rnd_m81(1, 4);
      return {
        enun: 'Simplifica: ' + base7 + sup_m81(big7) + ' ÷ ' + base7 + sup_m81(sm7) + ' = ' + base7 + '^?',
        tipo: 'fill', resposta: String(big7 - sm7),
        expl: 'Mesma base no quociente: subtraem-se os expoentes → ' + base7 + sup_m81(big7 - sm7) + '.',
        tema: 'T7 · Prop. Potências'
      };
    }
    // potência de potência
    var pp7a = rnd_m81(2, 5), pp7b = rnd_m81(2, 4);
    return {
      enun: 'Simplifica: (' + base7 + sup_m81(pp7a) + ')' + sup_m81(pp7b) + ' = ' + base7 + '^?',
      tipo: 'fill', resposta: String(pp7a * pp7b),
      expl: 'Potência de potência: multiplicam-se os expoentes → ' + base7 + sup_m81(pp7a * pp7b) + '.',
      tema: 'T7 · Prop. Potências'
    };
  }

  // ── TEMA 8 · Potências de expoente negativo ──
  if (tema === '8') {
    var base8 = rnd_m81(2, 5), exp8 = rnd_m81(1, hard ? 4 : 3);
    var val8 = Math.pow(base8, exp8);
    if (tipo === 'mc') {
      var correct8 = '1/' + val8;
      var wrongs8 = ['1/' + (base8 * exp8), '−' + val8, String(val8)];
      var opts8 = shuffle_m81([correct8].concat(wrongs8).filter(function (v, i, arr) { return arr.indexOf(v) === i; })).slice(0, 4);
      if (opts8.indexOf(correct8) === -1) opts8[0] = correct8;
      return {
        enun: 'Calcula: ' + base8 + sup_m81('-' + exp8),
        tipo: 'mc', opcoes: opts8, resposta: correct8,
        expl: 'a⁻ⁿ = 1/aⁿ → ' + base8 + sup_m81('-' + exp8) + ' = 1/' + base8 + sup_m81(exp8) + ' = 1/' + val8 + '.',
        tema: 'T8 · Expoente Negativo'
      };
    }
    return {
      enun: 'Escreve com expoente positivo: ' + base8 + sup_m81('-' + exp8) + ' = 1/__', tipo: 'fill',
      resposta: String(val8), expl: base8 + sup_m81('-' + exp8) + ' = 1/' + base8 + sup_m81(exp8) + ' = 1/' + val8 + '.',
      tema: 'T8 · Expoente Negativo'
    };
  }

  // ── TEMA 9 · Raízes quadradas e cúbicas ──
  if (tema === '9') {
    var cubica = (Math.random() < 0.4);
    if (cubica) {
      var roots3 = [1, 2, 3, 4, 5];
      var r3 = roots3[rnd_m81(0, roots3.length - 1)];
      var cube = r3 * r3 * r3;
      if (tipo === 'mc') {
        var opts9c = shuffle_m81([r3, r3 + 1, r3 - 1 || r3 + 2, r3 * 3].filter(function (v, i, a) { return a.indexOf(v) === i; })).slice(0, 4).map(String);
        if (opts9c.indexOf(String(r3)) === -1) opts9c[0] = String(r3);
        return {
          enun: 'Calcula: ∛' + cube, tipo: 'mc', opcoes: opts9c, resposta: String(r3),
          expl: '∛' + cube + ' = ' + r3 + ' porque ' + r3 + '³ = ' + cube + '.', tema: 'T9 · Raízes'
        };
      }
      return { enun: 'Calcula: ∛' + cube, tipo: 'fill', resposta: String(r3), expl: r3 + '³ = ' + cube + ', logo ∛' + cube + ' = ' + r3 + '.', tema: 'T9 · Raízes' };
    }
    var roots2 = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    var r2 = roots2[rnd_m81(0, roots2.length - 1)];
    var sq = r2 * r2;
    if (tipo === 'mc') {
      var opts9 = shuffle_m81([r2, r2 + 1, r2 - 1, sq].filter(function (v, i, a) { return a.indexOf(v) === i; })).slice(0, 4).map(String);
      if (opts9.indexOf(String(r2)) === -1) opts9[0] = String(r2);
      return { enun: 'Calcula: √' + sq, tipo: 'mc', opcoes: opts9, resposta: String(r2), expl: '√' + sq + ' = ' + r2 + ' porque ' + r2 + '² = ' + sq + '.', tema: 'T9 · Raízes' };
    }
    return { enun: 'Calcula: √' + sq, tipo: 'fill', resposta: String(r2), expl: r2 + '² = ' + sq + ', logo √' + sq + ' = ' + r2 + '.', tema: 'T9 · Raízes' };
  }

  // ── TEMA 10 · Notação científica ──
  if (tema === '10') {
    // gera a × 10^n a partir de um número
    var aMant = rnd_m81(1, 9), dec = rnd_m81(0, 9);
    var mant = aMant + (Math.random() < 0.5 ? '' : ',' + dec);
    var mantNum = parseFloat(mant.replace(',', '.'));
    var expo = rnd_m81(easy ? 2 : 3, hard ? 9 : 7);
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
      var correct10 = mant + ' × 10' + sup_m81(realExp);
      var wrongs10 = [mant + ' × 10' + sup_m81(realExp + 1), mant + ' × 10' + sup_m81(-realExp), (mantNum * 10) + ' × 10' + sup_m81(realExp - 1)];
      var opts10 = shuffle_m81([correct10].concat(wrongs10).filter(function (v, i, a) { return a.indexOf(v) === i; })).slice(0, 4);
      if (opts10.indexOf(correct10) === -1) opts10[0] = correct10;
      return {
        enun: 'Escreve <strong>' + bigNum + '</strong> em notação científica.',
        tipo: 'mc', opcoes: opts10, resposta: correct10,
        expl: bigNum + ' = ' + correct10 + ' (mantissa entre 1 e 10, expoente ' + realExp + ').',
        tema: 'T10 · Notação Científica'
      };
    }
    // vf: validade da forma a×10^n (1 ≤ a < 10)
    var aTest = [2.5, 25, 0.7, 8.1, 14][rnd_m81(0, 4)];
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
    var a11 = rnd_m81(1, 9), b11 = rnd_m81(1, 9);
    var m11 = rnd_m81(2, 8), n11 = rnd_m81(2, 8);
    var mult = (Math.random() < 0.5);
    if (mult) {
      var prod = a11 * b11, sumE = m11 + n11;
      var mantOut = prod, expOut = sumE;
      if (prod >= 10) { mantOut = prod / 10; expOut = sumE + 1; }
      var correct11 = String(mantOut).replace('.', ',') + ' × 10' + sup_m81(expOut);
      return {
        enun: 'Calcula: (' + a11 + ' × 10' + sup_m81(m11) + ') × (' + b11 + ' × 10' + sup_m81(n11) + ')',
        tipo: 'fill', resposta: correct11,
        expl: 'Multiplica as mantissas (' + a11 + '×' + b11 + '=' + prod + ') e soma os expoentes (' + m11 + '+' + n11 + '=' + sumE + ') → ' + correct11 + '.',
        tema: 'T11 · Operações N.C.'
      };
    }
    // divisão (garante mantissa exata)
    var bigA = a11 * b11; // para divisão exacta: (bigA × 10^M) ÷ (b11 × 10^n) = a11 × 10^(M-n)
    var M = n11 + rnd_m81(1, 5);
    var correctD = a11 + ' × 10' + sup_m81(M - n11);
    return {
      enun: 'Calcula: (' + bigA + ' × 10' + sup_m81(M) + ') ÷ (' + b11 + ' × 10' + sup_m81(n11) + ')',
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
   Reutiliza helpers _m81 (rnd_m81, etc.) já definidos no mat8.js.
   ════════════════════════════════════════════════════════════════ */
// expoente unicode para x^n
function _expX_m83(n) { return n === 1 ? 'x' : ('x' + sup_m81(n)); }

function buildEx_m83(tema, tipo, dif) {
  tema = String(tema);
  var hard = (dif === 'dificil'), easy = (dif === 'facil');
  var maxC = easy ? 6 : hard ? 12 : 9;

  // ── TEMA 1 · Monómios ──
  if (tema === '1') {
    if (tipo === 'mc') {
      var c1 = rndNZ_m81(2, maxC), g1 = rnd_m81(1, 4);
      var correct1 = String(g1);
      var opts1 = shuffle_m81([g1, g1 + 1, g1 - 1 || g1 + 2, g1 + 2].filter(function (v, i, a) { return a.indexOf(v) === i; })).slice(0, 4).map(String);
      if (opts1.indexOf(correct1) === -1) opts1[0] = correct1;
      return {
        enun: 'Qual é o grau do monómio <strong>' + c1 + _expX_m83(g1) + '</strong>?',
        tipo: 'mc', opcoes: opts1, resposta: correct1,
        expl: 'O grau de um monómio é o expoente da parte literal: ' + c1 + _expX_m83(g1) + ' tem grau ' + g1 + '.',
        tema: 'T1 · Monómios'
      };
    }
    if (tipo === 'vf') {
      var c2 = rndNZ_m81(2, maxC), g2 = rnd_m81(2, 4);
      var claimC = Math.random() < 0.5;
      var stmt = 'o coeficiente do monómio ' + c2 + _expX_m83(g2) + ' é ' + (claimC ? c2 : g2);
      return {
        enun: 'Verdadeiro ou Falso: ' + stmt + '.', tipo: 'vf', resposta: claimC ? 'V' : 'F',
        expl: 'No monómio ' + c2 + _expX_m83(g2) + ', o coeficiente é ' + c2 + ' e a parte literal é ' + _expX_m83(g2) + '.',
        tema: 'T1 · Monómios'
      };
    }
    var cf = rndNZ_m81(2, maxC), gf = rnd_m81(1, 4);
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
      var a = rndNZ_m81(2, maxC), m = rnd_m81(1, 3);
      var b = rndNZ_m81(2, maxC), n = rnd_m81(1, 3);
      var coef = a * b, exp = m + n;
      var res = coef + _expX_m83(exp);
      if (tipo === 'mc') {
        var w = [(a + b) + _expX_m83(exp), coef + _expX_m83(m * n), (a * b) + _expX_m83(Math.abs(m - n) || 1)];
        var opts = shuffle_m81([res].concat(w).filter(function (v, i, ar) { return ar.indexOf(v) === i; })).slice(0, 4);
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
    var aa = rndNZ_m81(2, maxC), bb = rndNZ_m81(2, maxC), mm = rnd_m81(1, 3);
    var soma = aa + bb;
    var rsoma = soma + _expX_m83(mm);
    if (tipo === 'mc') {
      var ws = [soma + _expX_m83(mm * 2), (aa * bb) + _expX_m83(mm), soma + _expX_m83(mm + 1)];
      var optsS = shuffle_m81([rsoma].concat(ws).filter(function (v, i, ar) { return ar.indexOf(v) === i; })).slice(0, 4);
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
      var g = rnd_m81(2, 4);
      var poly = rnd_m81(2, maxC) + _expX_m83(g) + ' + ' + rnd_m81(2, maxC) + _expX_m83(g - 1) + ' + ' + rnd_m81(2, maxC);
      var optsG = shuffle_m81([g, g + 1, g - 1, g + 2].filter(function (v, i, a) { return a.indexOf(v) === i; })).slice(0, 4).map(String);
      if (optsG.indexOf(String(g)) === -1) optsG[0] = String(g);
      return {
        enun: 'Qual é o grau do polinómio <strong>' + poly + '</strong>?',
        tipo: 'mc', opcoes: optsG, resposta: String(g),
        expl: 'O grau de um polinómio é o maior dos graus dos seus monómios: ' + g + '.',
        tema: 'T3 · Polinómios'
      };
    }
    // simplificação: ax + bx = (a+b)x  (termos semelhantes)
    var p1 = rndNZ_m81(2, maxC), p2 = rndNZ_m81(2, maxC), k = rndNZ_m81(1, maxC);
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
    var a4 = rndNZ_m81(2, easy ? 5 : 8), b4 = rndNZ_m81(1, 6), c4 = rndNZ_m81(1, 8);
    var t1 = a4 * b4, t2 = a4 * c4;
    var res4 = t1 + 'x' + (t2 >= 0 ? ' + ' + t2 : ' − ' + Math.abs(t2));
    if (tipo === 'mc') {
      var w4 = [(a4 + b4) + 'x + ' + t2, t1 + 'x + ' + (a4 + c4), (a4 * b4) + 'x + ' + c4];
      var opts4 = shuffle_m81([t1 + 'x + ' + t2].concat(w4).filter(function (v, i, ar) { return ar.indexOf(v) === i; })).slice(0, 4);
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
      var solC = rnd_m81(2, 12);
      var mult = rnd_m81(2, 5), add = rnd_m81(1, 15);
      var tot = mult * solC + add;
      var cenas = [
        { e: 'O ' + (mult === 2 ? 'dobro' : mult === 3 ? 'triplo' : mult + ' vezes') + ' de um número, mais ' + add + ', é igual a ' + tot + '. Qual é o número?', r: solC },
        { e: 'A Rita tem ' + add + ' € e poupa ' + mult + ' € por semana. Ao fim de quantas semanas terá ' + tot + ' €?', r: solC }
      ];
      var pc = cenas[rnd_m81(0, cenas.length - 1)];
      return {
        enun: pc.e, tipo: 'fill', resposta: String(pc.r),
        expl: 'Traduz por uma equação: ' + mult + 'x + ' + add + ' = ' + tot + '. Resolve: ' + mult + 'x = ' + (tot - add) + ', x = ' + solC + '.',
        tema: 'T5 · Equações'
      };
    }
    // ax + b = c  → x = (c-b)/a, garante solução inteira
    var a5 = rndNZ_m81(2, easy ? 5 : 9);
    var sol = rnd_m81(-6, 6);
    var b5 = rndNZ_m81(-10, 10);
    var c5 = a5 * sol + b5;
    var eqn = a5 + 'x ' + (b5 >= 0 ? '+ ' + b5 : '− ' + Math.abs(b5)) + ' = ' + c5;
    if (tipo === 'mc') {
      var opts5 = shuffle_m81([sol, sol + 1, sol - 1, -sol || sol + 2].filter(function (v, i, a) { return a.indexOf(v) === i; })).slice(0, 4).map(String);
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
    var a6 = rnd_m81(2, 6);
    var sol6 = rnd_m81(-6, 8);
    var b6 = sol6; // x/a + 0 = ... mantemos simples
    var rhs = sol6; // x/a = (sol6)/a ... usamos forma x/a = k
    var k6 = rnd_m81(1, 6);
    var solK = a6 * k6;
    if (tipo === 'mc') {
      var opts6 = shuffle_m81([solK, solK + a6, solK - a6, a6 + k6].filter(function (v, i, a) { return a.indexOf(v) === i; })).slice(0, 4).map(String);
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

function buildEx_m84(tema, tipo, dif) {
  tema = String(tema);
  var hard = (dif === 'dificil'), easy = (dif === 'facil');

  // ── TEMA 1 · Pitágoras: calcular a hipotenusa ──
  if (tema === '1') {
    var t = _TERNOS_m84[rnd_m81(0, easy ? 3 : _TERNOS_m84.length - 1)];
    var a = t[0], b = t[1], c = t[2]; // c = hipotenusa
    var visT1 = (typeof EduVisual !== 'undefined') ? EduVisual.triangulo({ right: true, aLabel: '?', bLabel: b + '', cLabel: a + '', color: '#c4733a' }) : '';
    if (tipo === 'mc') {
      var opts = shuffle_m81([c, c + 1, c - 1, a + b].filter(function (v, i, ar) { return ar.indexOf(v) === i; })).slice(0, 4).map(String);
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
    var t2 = _TERNOS_m84[rnd_m81(0, easy ? 3 : _TERNOS_m84.length - 1)];
    var cat = t2[0], hip = t2[2], outro = t2[1]; // dado hip e um cateto, achar 'outro'
    if (tipo === 'mc') {
      var opts2 = shuffle_m81([outro, outro + 1, outro - 1, hip - cat].filter(function (v, i, ar) { return ar.indexOf(v) === i; })).slice(0, 4).map(String);
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
      var tr = _TERNOS_m84[rnd_m81(0, _TERNOS_m84.length - 1)];
      a3 = tr[0]; b3 = tr[1]; c3 = tr[2];
    } else {
      // não pitagórico
      a3 = rnd_m81(3, 9); b3 = rnd_m81(4, 10); c3 = a3 + b3 - rnd_m81(1, 2);
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
    var t4 = _TERNOS_m84[rnd_m81(0, easy ? 3 : _TERNOS_m84.length - 1)];
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
    var kind = rnd_m81(0, 1);
    if (kind === 0) {
      // diagonal de retângulo
      if (tipo === 'mc') {
        var opts4 = shuffle_m81([diag, diag + 1, diag - 1, l1 + l2].filter(function (v, i, ar) { return ar.indexOf(v) === i; })).slice(0, 4).map(String);
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
function buildEx_m85(tema, tipo, dif) {
  tema = String(tema);
  var hard = (dif === 'dificil'), easy = (dif === 'facil');
  var mx = easy ? 6 : hard ? 12 : 9;

  // ── TEMA 1 · Equações literais ──
  if (tema === '1') {
    // ax + b = y  → x = (y - b)/a  (apresentar resolução em ordem a x)
    var a = rndNZ_m81(2, 5);
    var sol = rnd_m81(-5, 6);
    var b = rndNZ_m81(-8, 8);
    var yval = a * sol + b;
    if (tipo === 'mc') {
      var correct = 'x = (' + yval + ' − ' + b + ') ÷ ' + a;
      var opts = shuffle_m81([correct, 'x = (' + yval + ' + ' + b + ') ÷ ' + a, 'x = ' + yval + ' ÷ ' + a + ' − ' + b, 'x = (' + yval + ' − ' + b + ') × ' + a]).slice(0, 4);
      return {
        enun: 'Resolve em ordem a x: <strong>' + a + 'x + ' + b + ' = ' + yval + '</strong>',
        tipo: 'mc', opcoes: opts, resposta: correct,
        expl: 'Isola x: ' + a + 'x = ' + yval + ' − ' + b + ', logo x = (' + yval + ' − ' + b + ') ÷ ' + a + ' = ' + sol + '.',
        tema: 'T1 · Eq. Literais'
      };
    }
    return {
      enun: 'Resolve em ordem a x e indica o valor: ' + _afim_m85(a, b) + ' = ' + yval, tipo: 'fill',
      resposta: String(sol), expl: a + 'x = ' + (yval - b) + ', x = ' + sol + '.',
      tema: 'T1 · Eq. Literais'
    };
  }

  // ── TEMA 2 · Calcular imagem f(x) ──
  if (tema === '2') {
    // Variante de contexto (tarifário / táxi)
    if (!easy && Math.random() < 0.4) {
      var fixo = rnd_m81(2, 8), porU = rnd_m81(1, 4), unid = rnd_m81(3, 12);
      var custo = porU * unid + fixo;
      var cen = [
        { e: 'Um tarifário cobra ' + fixo + ' € fixos e ' + porU + ' € por GB. Quanto custam ' + unid + ' GB? (em €)', },
        { e: 'Um táxi cobra ' + fixo + ' € de partida e ' + porU + ' € por km. Quanto custa uma viagem de ' + unid + ' km? (em €)' }
      ];
      var pc5 = cen[rnd_m81(0, cen.length - 1)];
      return {
        enun: pc5.e, tipo: 'fill', resposta: String(custo),
        expl: 'Modela com C(x) = ' + porU + 'x + ' + fixo + '. Para x = ' + unid + ': ' + porU + '×' + unid + ' + ' + fixo + ' = ' + custo + ' €.',
        tema: 'T2 · Imagem f(x)'
      };
    }
    var m = rndNZ_m81(-mx, mx), bb = rnd_m81(-mx, mx);
    var x0 = rnd_m81(-5, 6);
    var fx = m * x0 + bb;
    var fnStr = 'f(x) = ' + _afim_m85(m, bb);
    if (tipo === 'mc') {
      var opts2 = shuffle_m81([fx, fx + m, fx - 1, m + bb].filter(function (v, i, ar) { return ar.indexOf(v) === i; })).slice(0, 4).map(String);
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
    var m3 = rndNZ_m81(-mx, mx), b3 = rnd_m81(-mx, mx);
    var fnStr3 = 'y = ' + _afim_m85(m3, b3);
    var pedeDeclive = Math.random() < 0.5;
    var resposta = pedeDeclive ? m3 : b3;
    if (tipo === 'mc') {
      var opts3 = shuffle_m81([resposta, m3 + b3, -resposta, (pedeDeclive ? b3 : m3)].filter(function (v, i, ar) { return ar.indexOf(v) === i; })).slice(0, 4).map(String);
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
    var m4 = rndNZ_m81(-4, 4);
    var x1 = rnd_m81(-4, 2), x2 = x1 + rnd_m81(1, 4);
    var y1 = rnd_m81(-5, 5), y2 = y1 + m4 * (x2 - x1);
    if (tipo === 'mc') {
      var opts4 = shuffle_m81([m4, m4 + 1, m4 - 1, -m4 || m4 + 2].filter(function (v, i, ar) { return ar.indexOf(v) === i; })).slice(0, 4).map(String);
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

function buildEx_m86(tema, tipo, dif) {
  tema = String(tema);
  var easy = (dif === 'facil'), hard = (dif === 'dificil');

  // solução inteira do sistema
  var x = rnd_m81(-5, 6), y = rnd_m81(-5, 6);

  // ── TEMA 1 · Equação com duas incógnitas: par solução? ──
  if (tema === '1') {
    var a = rndNZ_m81(1, 4), b = rndNZ_m81(1, 4);
    var c = a * x + b * y;
    var eq = _eq_m86(a, b, c);
    var isSol = Math.random() < 0.5;
    var px = x, py = y;
    if (!isSol) { px = x + rnd_m81(1, 2); } // par que não satisfaz
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
      var n1 = rnd_m81(4, 15), n2 = rnd_m81(1, n1 - 1); // n1 > n2 > 0
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
    var b1 = rndNZ_m81(1, 3);
    var c1 = x + b1 * y;
    var a2 = rndNZ_m81(2, 4), b2 = rndNZ_m81(-3, 3); if (b2 === 0) b2 = 1;
    var c2 = a2 * x + b2 * y;
    var eq1 = 'x' + _byTerm_m86(b1) + ' = ' + c1;
    var eq2 = a2 + 'x' + _byTerm_m86(b2) + ' = ' + c2;
    var pede = (tema === '2') ? 'x' : 'y';
    var resp = (tema === '2') ? x : y;
    var sistema = '{ ' + eq1 + ' ; ' + eq2 + ' }';
    if (tipo === 'mc') {
      var opts = shuffle_m81([resp, resp + 1, resp - 1, (tema === '2' ? y : x)].filter(function (v, i, ar) { return ar.indexOf(v) === i; })).slice(0, 4).map(String);
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
    var ba = rndNZ_m81(1, 3), bb = rndNZ_m81(1, 3);
    var ca = x + ba * y, cb = 2 * x + bb * y;
    var e1 = 'x' + _byTerm_m86(ba) + ' = ' + ca;
    var e2 = '2x' + _byTerm_m86(bb) + ' = ' + cb;
    var isSol = Math.random() < 0.5;
    var px = x, py = y;
    if (!isSol) { py = y + rnd_m81(1, 2); }
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

function buildEx_m88(tema, tipo, dif) {
  tema = String(tema);
  var easy = (dif === 'facil'), hard = (dif === 'dificil');
  var n = easy ? 5 : hard ? 7 : 5; // tamanho do conjunto (ímpar para mediana limpa)

  // gera conjunto pequeno de dados
  function dados(len, lo, hi) {
    var a = [];
    for (var i = 0; i < len; i++) a.push(rnd_m81(lo, hi));
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
      var opts = shuffle_m81([media, media + 1, media - 1, Math.max.apply(null, arr)].filter(function (v, i, a) { return a.indexOf(v) === i; })).slice(0, 4).map(String);
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
    var modaVal = base[rnd_m81(0, base.length - 1)];
    var arr2 = base.concat([modaVal, modaVal]); // garante que modaVal aparece mais vezes
    shuffle_m81(arr2);
    // confirma moda única
    var freq = {}; arr2.forEach(function (v) { freq[v] = (freq[v] || 0) + 1; });
    var maxF = 0, moda = modaVal, ties = 0;
    Object.keys(freq).forEach(function (k) { if (freq[k] > maxF) { maxF = freq[k]; moda = parseInt(k); } });
    Object.keys(freq).forEach(function (k) { if (freq[k] === maxF) ties++; });
    if (ties > 1) { arr2.push(moda); } // reforça
    if (tipo === 'mc') {
      var distintos = Object.keys(freq).map(Number).filter(function (v) { return v !== moda; });
      var opts2arr = [moda].concat(shuffle_m81(distintos));
      // garante 4 opções únicas, preenchendo com valores próximos da moda
      var extra = 1;
      while (opts2arr.length < 4) {
        var cand = moda + extra; if (opts2arr.indexOf(cand) === -1 && cand > 0) opts2arr.push(cand);
        var cand2 = moda - extra; if (opts2arr.length < 4 && opts2arr.indexOf(cand2) === -1 && cand2 > 0) opts2arr.push(cand2);
        extra++;
        if (extra > 20) break;
      }
      var opts2 = shuffle_m81(opts2arr.slice(0, 4)).map(String);
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
      var opts3 = shuffle_m81([mediana, mediana + 1, mediana - 1, ord[0]].filter(function (v, i, a) { return a.indexOf(v) === i; })).slice(0, 4).map(String);
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
      var opts4 = shuffle_m81([amp, amp + 1, amp - 1, ord4[ord4.length - 1]].filter(function (v, i, a) { return a.indexOf(v) === i; })).slice(0, 4).map(String);
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
      { tot: 6, desc: 'lançar um dado', fav: rnd_m81(1, 3), o: 'sair um número' },
      { tot: rnd_m81(8, 12), desc: 'tirar uma bola de um saco' }
    ];
    var ctx = contextos[rnd_m81(0, contextos.length - 1)];
    var total = ctx.tot, fav = rnd_m81(1, total - 1);
    var r = reduce_m81(fav, total);
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
    var tot6 = [10, 20, 25, 50, 100][rnd_m81(0, 4)];
    var abs = rnd_m81(1, tot6);
    var pct = Math.round(abs / tot6 * 100);
    if (tipo === 'mc') {
      var opts6 = shuffle_m81([pct, pct + 5, pct - 5, abs].filter(function (v, i, a) { return a.indexOf(v) === i; })).slice(0, 4).map(String);
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
function buildEx_m87(tema, tipo, dif) {
  tema = String(tema);
  var easy = (dif === 'facil'), hard = (dif === 'dificil');
  function piStr(k) { return k === 1 ? 'π' : k + 'π'; }
  // tipo "fill" pedido mas com π → usa fill_frac (texto)
  function fillTipoPi(t) { return (t === 'fill') ? 'fill_frac' : t; }

  // ── TEMA 1 · Volume de prisma ──
  if (tema === '1') {
    // Variante de contexto (caixa / aquário) - paralelepípedo c × l × a
    if (!easy && Math.random() < 0.4) {
      var c1 = rnd_m81(4, 12), l1 = rnd_m81(3, 8), a1 = rnd_m81(2, 6);
      var Vcx = c1 * l1 * a1;
      var obj = ['Uma caixa', 'Um aquário', 'Um depósito'][rnd_m81(0, 2)];
      return {
        enun: obj + ' tem a forma de um paralelepípedo de ' + c1 + ' cm de comprimento, ' + l1 + ' cm de largura e ' + a1 + ' cm de altura. Qual é o volume? (em cm³)',
        tipo: 'fill', resposta: String(Vcx),
        expl: 'V = comprimento × largura × altura = ' + c1 + ' × ' + l1 + ' × ' + a1 + ' = ' + Vcx + ' cm³.',
        tema: 'T1 · Volume Prisma'
      };
    }
    var Ab = rnd_m81(easy ? 4 : 6, hard ? 30 : 20), h = rnd_m81(2, hard ? 12 : 8);
    var V = Ab * h;
    if (tipo === 'mc') {
      var opts = shuffle_m81([V, V + Ab, V - h, Ab + h].filter(function (v, i, a) { return a.indexOf(v) === i; })).slice(0, 4).map(String);
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
    var r = rnd_m81(1, easy ? 4 : 6), hc = rnd_m81(2, hard ? 10 : 7);
    var k = r * r * hc;
    if (tipo === 'mc') {
      var opts2 = shuffle_m81([k, r * hc, r * r + hc, 2 * r * hc].filter(function (v, i, a) { return a.indexOf(v) === i; })).slice(0, 4);
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
    var Ab3 = rnd_m81(2, 12) * 3, h3 = rnd_m81(2, hard ? 12 : 8);
    var V3 = Ab3 * h3 / 3;
    if (tipo === 'mc') {
      var opts3 = shuffle_m81([V3, Ab3 * h3, V3 + h3, V3 - 1].filter(function (v, i, a) { return a.indexOf(v) === i; })).slice(0, 4).map(String);
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
    do { r4 = rnd_m81(1, 6); h4 = rnd_m81(2, 9); k4 = r4 * r4 * h4; } while (k4 % 3 !== 0);
    var Vk = k4 / 3;
    if (tipo === 'mc') {
      var opts4 = shuffle_m81([Vk, k4, Vk + r4, r4 * h4].filter(function (v, i, a) { return a.indexOf(v) === i; })).slice(0, 4);
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
    var r5 = [3, 6][rnd_m81(0, 1)];
    var k5 = 4 * r5 * r5 * r5 / 3;
    if (tipo === 'mc') {
      var opts5 = shuffle_m81([k5, k5 / 2, k5 + r5, r5 * r5 * r5].filter(function (v, i, a) { return a.indexOf(v) === i; })).slice(0, 4);
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
    var r6 = rnd_m81(1, easy ? 5 : 9);
    var k6 = r6 * r6;
    if (tipo === 'mc') {
      var opts6 = shuffle_m81([k6, 2 * r6, k6 + r6, 4 * r6].filter(function (v, i, a) { return a.indexOf(v) === i; })).slice(0, 4);
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
function buildEx_m82(tema, tipo, dif) {
  tema = String(tema);
  var easy = (dif === 'facil'), hard = (dif === 'dificil');
  var lim = easy ? 5 : hard ? 10 : 7;

  // ── TEMA 1 · Translação de um ponto por um vetor ──
  if (tema === '1') {
    var px = rnd_m81(-lim, lim), py = rnd_m81(-lim, lim);
    var vx = rndNZ_m81(-lim, lim), vy = rndNZ_m81(-lim, lim);
    var rx = px + vx, ry = py + vy;
    var resp = '(' + rx + ', ' + ry + ')';
    // Variante de contexto (movimento de um objeto)
    if (!easy && Math.random() < 0.4) {
      var ator = ['Um robô', 'Uma peça do jogo', 'Um drone'][rnd_m81(0, 2)];
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
      var opts = shuffle_m81([resp, '(' + (px - vx) + ', ' + (py - vy) + ')', '(' + rx + ', ' + (py - vy) + ')', '(' + (px * vx) + ', ' + (py * vy) + ')'].filter(function (v, i, a) { return a.indexOf(v) === i; })).slice(0, 4);
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
    var ax = rndNZ_m81(-lim, lim), ay = rndNZ_m81(-lim, lim);
    var bx = rndNZ_m81(-lim, lim), by = rndNZ_m81(-lim, lim);
    var sx = ax + bx, sy = ay + by;
    var resp2 = '(' + sx + ', ' + sy + ')';
    if (tipo === 'mc') {
      var opts2 = shuffle_m81([resp2, '(' + (ax - bx) + ', ' + (ay - by) + ')', '(' + sx + ', ' + (ay - by) + ')', '(' + (ax * bx) + ', ' + (ay * by) + ')'].filter(function (v, i, a) { return a.indexOf(v) === i; })).slice(0, 4);
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
    var p = perguntas[rnd_m81(0, perguntas.length - 1)];
    var opts3 = shuffle_m81([p.r].concat(p.w)).slice(0, 4);
    if (opts3.indexOf(p.r) === -1) opts3[0] = p.r;
    return {
      enun: p.q, tipo: 'mc', opcoes: opts3, resposta: p.r,
      expl: 'A resposta é: ' + p.r + '. As quatro isometrias são translação, reflexão, rotação e reflexão deslizante.',
      tema: 'T3 · Simetrias'
    };
  }

  // ── TEMA 4 · Vetor simétrico ──
  if (tema === '4') {
    var vx4 = rndNZ_m81(-lim, lim), vy4 = rndNZ_m81(-lim, lim);
    var resp4 = '(' + (-vx4) + ', ' + (-vy4) + ')';
    if (tipo === 'mc') {
      var opts4 = shuffle_m81([resp4, '(' + vx4 + ', ' + vy4 + ')', '(' + (-vx4) + ', ' + vy4 + ')', '(' + vy4 + ', ' + vx4 + ')'].filter(function (v, i, a) { return a.indexOf(v) === i; })).slice(0, 4);
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

/* ════════════════════════════════════════════════════════════════
   BANCO DE QUESTÕES (contexto/problema) - Matemática · 8.º ano
   ════════════════════════════════════════════════════════════════ */
var _mat8Banco = {
  1: [ // Números (racionais, potências, notação científica)
    { t: '5', tipo: 'fill', enun: 'Um telemóvel custa 240 € e tem 15% de desconto. Quanto se paga (em €)?', resposta: '204', expl: '240 × (1 − 0,15) = 240 × 0,85 = 204 €.', tema: 'T5 · Expressões' },
    { t: '10', tipo: 'fill_frac', enun: 'A distância da Terra ao Sol é cerca de 150 000 000 km. Escreve em notação científica.', resposta: '1,5×10⁸', expl: '150 000 000 = 1,5 × 10⁸.', tema: 'T10 · Notação Científica' },
    { t: '11', tipo: 'fill_frac', enun: 'Calcula (3 × 10⁴) × (2 × 10³) em notação científica.', resposta: '6×10⁷', expl: '(3×2) × 10⁴⁺³ = 6 × 10⁷.', tema: 'T11 · Operações N.C.' },
    { t: '9', tipo: 'fill', enun: 'Um quadrado tem área 64 cm². Qual é o comprimento do lado (em cm)?', resposta: '8', expl: 'lado = √64 = 8 cm.', tema: 'T9 · Raízes' }
  ],
  2: [ // Vetores e Isometrias
    { t: '1', tipo: 'fill_frac', enun: 'Um drone está em (2, −1) e desloca-se segundo o vetor (3, 4). Qual é a nova posição? (forma (x, y))', resposta: '(5,3)', expl: '(2+3, −1+4) = (5, 3).', tema: 'T1 · Translação' },
    { t: '3', tipo: 'mc', enun: 'A imagem de uma figura por uma isometria é sempre:', opcoes: ['geometricamente igual (congruente)', 'maior', 'menor', 'de forma diferente'], resposta: 'geometricamente igual (congruente)', expl: 'As isometrias preservam distâncias e ângulos → figuras congruentes.', tema: 'T3 · Isometrias' }
  ],
  3: [ // Polinómios e Equações
    { t: '5', tipo: 'fill', enun: 'O triplo de um número, mais 7, é igual a 22. Qual é o número?', resposta: '5', expl: '3x + 7 = 22 → 3x = 15 → x = 5.', tema: 'T5 · Equações' },
    { t: '1', tipo: 'fill', enun: 'Simplifica 3x² × 2x³ (escreve no formato axⁿ, ex: 6x5).', resposta: '6x5', expl: 'Coeficientes 3×2=6; expoentes 2+3=5 → 6x⁵.', tema: 'T1 · Monómios' },
    { t: '5', tipo: 'fill', enun: 'A Rita tem 5 € e poupa 3 € por semana. Ao fim de quantas semanas terá 26 €?', resposta: '7', expl: '3x + 5 = 26 → 3x = 21 → x = 7 semanas.', tema: 'T5 · Equações' }
  ],
  4: [ // Teorema de Pitágoras
    { t: '4', tipo: 'fill', enun: 'Uma escada de 10 m está encostada a uma parede, com a base a 6 m. A que altura chega? (em m)', resposta: '8', expl: 'altura = √(10² − 6²) = √(100 − 36) = √64 = 8 m.', tema: 'T4 · Aplicações' },
    { t: '1', tipo: 'fill', enun: 'Um triângulo retângulo tem catetos 9 e 12. Qual é a hipotenusa?', resposta: '15', expl: 'h = √(9² + 12²) = √(81 + 144) = √225 = 15.', tema: 'T1 · Hipotenusa' },
    { t: '4', tipo: 'fill', enun: 'Um ecrã de TV tem 16 cm de largura e 12 cm de altura. Qual é a diagonal (em cm)?', resposta: '20', expl: 'd = √(16² + 12²) = √(256 + 144) = √400 = 20 cm.', tema: 'T4 · Aplicações' }
  ],
  5: [ // Equações Literais e Funções
    { t: '2', tipo: 'fill', enun: 'Um táxi cobra 3 € de partida e 1 € por km. Quanto custa uma viagem de 8 km (em €)?', resposta: '11', expl: 'C(x) = x + 3 → C(8) = 8 + 3 = 11 €.', tema: 'T2 · Imagem' },
    { t: '3', tipo: 'fill', enun: 'Na função f(x) = 2x − 1, qual é o declive?', resposta: '2', expl: 'Na forma f(x) = ax + b, o declive é a = 2.', tema: 'T3 · Função Afim' }
  ],
  6: [ // Sistemas de Equações
    { t: '2', tipo: 'fill', enun: 'A soma de dois números é 12 e a diferença é 4. Qual é o número maior?', resposta: '8', expl: 'Sistema {x+y=12; x−y=4}. Somando: 2x=16 → x=8 (maior), y=4.', tema: 'T2 · Sistema (x)' },
    { t: '3', tipo: 'fill', enun: '2 bolas e 1 raquete custam 13 €. 1 bola e 1 raquete custam 10 €. Quanto custa uma bola (em €)?', resposta: '3', expl: 'Subtraindo as equações: 1 bola = 13 − 10 = 3 €.', tema: 'T3 · Sistema (y)' }
  ],
  7: [ // Figuras no Espaço e Volumes
    { t: '1', tipo: 'fill', enun: 'Um depósito tem a forma de uma caixa de 5 m × 3 m × 2 m. Qual é o volume (em m³)?', resposta: '30', expl: 'V = 5 × 3 × 2 = 30 m³.', tema: 'T1 · Volume Prisma' },
    { t: '1', tipo: 'fill', enun: 'Um prisma tem base de área 12 cm² e altura 5 cm. Qual é o volume (em cm³)?', resposta: '60', expl: 'V = área da base × altura = 12 × 5 = 60 cm³.', tema: 'T1 · Volume Prisma' }
  ],
  8: [ // Dados e Probabilidades
    { t: '1', tipo: 'fill', enun: 'As notas de um teste foram 10, 12, 14, 16, 18. Qual é a média (em valores)?', resposta: '14', expl: '(10+12+14+16+18)/5 = 70/5 = 14.', tema: 'T1 · Média' },
    { t: '5', tipo: 'fill_frac', enun: 'Num saco há 4 bolas verdes e 6 vermelhas. Qual a probabilidade de tirar uma verde? (fração irredutível)', resposta: '2/5', expl: 'P = 4/(4+6) = 4/10 = 2/5.', tema: 'T5 · Probabilidade' }
  ]
};