/* ════════════════════════════════════════════════════════════════
   MAT5 HUB - Matemática 5.º ano (7 capítulos)
   Modelo de HUB ÚNICO (ver MODELO BASE no CLAUDE.md). NUNCA páginas
   por capítulo. Tabs: Teoria · Praticar · Fichas · Progresso.
   ════════════════════════════════════════════════════════════════ */

// ═══ Capítulos do 5.º ano (Missão Mat) ═══
var _mat5CapMeta = [
  {n:1, icon:'<i class="ph ph-list-numbers"></i>',     label:'Números Naturais'},
  {n:2, icon:'<i class="ph ph-divide"></i>',           label:'Frações'},
  {n:3, icon:'<i class="ph ph-percent"></i>',          label:'Decimais e Percentagens'},
  {n:4, icon:'<i class="ph ph-triangle"></i>',         label:'Figuras Geométricas'},
  {n:5, icon:'<i class="ph ph-cube"></i>',             label:'Sólidos Geométricos'},
  {n:6, icon:'<i class="ph ph-chart-line"></i>',       label:'Sequências'},
  {n:7, icon:'<i class="ph ph-chart-bar"></i>',        label:'Organização de Dados'}
];

// Cores por capítulo (alinhadas com --m5cN-* do CSS)
var _mat5CapColors = {
  1:'#4a9e6e', 2:'#6a9e4a', 3:'#4a8e9e', 4:'#8a9e4a', 5:'#4a9e88', 6:'#7a9e4a', 7:'#4a9e72'
};

// Subtemas por capítulo
var _mat5Subtemas = {
  1: ['Múltiplos e divisores', 'Potências e quadrados', 'Operações e expressões'],
  2: ['Frações equivalentes', 'Comparar frações', 'Adição e subtração de frações'],
  3: ['Comparar decimais', 'Percentagens', 'Operações com decimais'],
  4: ['Ângulos', 'Triângulos', 'Polígonos e quadriláteros'],
  5: ['Faces, vértices e arestas', 'Pirâmides e prismas'],
  6: ['Termo seguinte', 'Lei de formação'],
  7: ['Ler gráficos', 'Frequência', 'Média']
};

// ═══ FLASHCARDS / TEORIA por capítulo ═══
// Cap 1 (Números) - conteúdo real, fiel ao Prisma 8.
// Caps 2-8 - placeholders honestos até serem construídos.
// ═══ FLASHCARDS / TEORIA por capítulo (5.º ano) ═══
// ═══ FLASHCARDS / TEORIA por capítulo (5.º ano) ═══
var _mat5Cards = {
  1: [
    { tag: 'Definição', q: 'O que é um múltiplo de um número?', a: 'É o resultado de multiplicar esse número por 0, 1, 2, 3, … Ex: múltiplos de 4 → 0, 4, 8, 12, 16, …' },
    { tag: 'Definição', q: 'O que é um divisor de um número?', a: 'É um número que divide outro deixando resto 0. Ex: os divisores de 12 são 1, 2, 3, 4, 6 e 12.' },
    { tag: 'Regra', q: 'Como saber se um número é múltiplo de 2?', a: 'Se terminar em 0, 2, 4, 6 ou 8 (é par). Ex: 38 é múltiplo de 2.' },
    { tag: 'Regra', q: 'Como saber se um número é múltiplo de 5?', a: 'Se terminar em 0 ou 5. Ex: 35 e 70 são múltiplos de 5.' },
    { tag: 'Regra', q: 'Como saber se um número é múltiplo de 10?', a: 'Se terminar em 0. Ex: 40, 90, 200.' },
    { tag: 'Regra', q: 'Como saber se um número é múltiplo de 3?', a: 'Se a soma dos seus algarismos for múltiplo de 3. Ex: 51 → 5+1=6, que é múltiplo de 3 → 51 é múltiplo de 3.' },
    { tag: 'Definição', q: 'O que é uma potência?', a: 'Uma forma curta de escrever uma multiplicação de fatores iguais. Ex: 2×2×2 = 2³ (base 2, expoente 3).' },
    { tag: 'Definição', q: 'O que é o quadrado de um número?', a: 'O número multiplicado por si próprio. Ex: o quadrado de 7 é 7² = 7×7 = 49.' },
    { tag: 'Definição', q: 'O que é o cubo de um número?', a: 'O número multiplicado por si próprio três vezes. Ex: 2³ = 2×2×2 = 8.' },
    { tag: 'Definição', q: 'O que são a base e o expoente?', a: 'Em 5³, a base é 5 (o que se multiplica) e o expoente é 3 (quantas vezes). Lê-se "cinco ao cubo".' },
    { tag: 'Estratégia', q: 'Prioridade das operações', a: '1.º parênteses; 2.º potências; 3.º multiplicação e divisão (esquerda→direita); 4.º adição e subtração.' },
    { tag: 'Definição', q: 'O que é um número primo?', a: 'Um número maior que 1 que só tem dois divisores: 1 e ele próprio. Ex: 2, 3, 5, 7, 11, 13.' },
    { tag: 'Exemplo', q: 'Quais os primeiros 5 múltiplos de 6?', a: '0, 6, 12, 18, 24 (multiplicar 6 por 0, 1, 2, 3, 4).' },
    { tag: 'Exemplo', q: 'Calcula 3² + 4²', a: '3² = 9 e 4² = 16. Soma: 9 + 16 = 25.' },
    { tag: 'Exemplo', q: 'Quais os divisores de 20?', a: '1, 2, 4, 5, 10 e 20.' },
    { tag: 'Exemplo', q: '6 é múltiplo de 4 e de 6?', a: 'De 6 sim; de 4 não (6 ÷ 4 não dá resto 0). Múltiplos de 4 e 6 ao mesmo tempo: 12, 24, …' }
  ],
  2: [
    { tag: 'Definição', q: 'O que é uma fração?', a: 'Representa uma ou mais partes iguais de um todo. Em 3/4: o 4 (denominador) é o nº de partes do todo, o 3 (numerador) é quantas se consideram.' },
    { tag: 'Definição', q: 'O que é o numerador e o denominador?', a: 'Numerador: o número de cima (partes consideradas). Denominador: o número de baixo (partes iguais do todo).' },
    { tag: 'Definição', q: 'O que são frações equivalentes?', a: 'Frações que representam a mesma quantidade. Ex: 1/2 = 2/4 = 3/6. Obtêm-se multiplicando ou dividindo numerador e denominador pelo mesmo número.' },
    { tag: 'Regra', q: 'Como obter uma fração equivalente?', a: 'Multiplica (ou divide) o numerador E o denominador pelo mesmo número (≠ 0). Ex: 2/3 = (2×2)/(3×2) = 4/6.' },
    { tag: 'Definição', q: 'O que é uma fração irredutível?', a: 'Uma fração que já não se pode simplificar mais (numerador e denominador não têm divisores comuns além de 1). Ex: 2/3.' },
    { tag: 'Regra', q: 'Como simplificar uma fração?', a: 'Divide o numerador e o denominador pelo mesmo número, até não dar mais. Ex: 6/8 = 3/4.' },
    { tag: 'Regra', q: 'Como comparar frações com o mesmo denominador?', a: 'Maior numerador → maior fração. Ex: 3/7 < 5/7.' },
    { tag: 'Regra', q: 'Como comparar frações com o mesmo numerador?', a: 'Menor denominador → maior fração (partes maiores). Ex: 2/3 > 2/5.' },
    { tag: 'Regra', q: 'Como somar frações com o mesmo denominador?', a: 'Somam-se os numeradores e mantém-se o denominador. Ex: 2/7 + 3/7 = 5/7.' },
    { tag: 'Regra', q: 'Como subtrair frações com o mesmo denominador?', a: 'Subtraem-se os numeradores e mantém-se o denominador. Ex: 5/8 − 2/8 = 3/8.' },
    { tag: 'Definição', q: 'O que é uma fração própria e imprópria?', a: 'Própria: numerador < denominador (< 1), ex: 3/4. Imprópria: numerador ≥ denominador (≥ 1), ex: 7/4.' },
    { tag: 'Definição', q: 'O que é um numeral misto?', a: 'Uma parte inteira mais uma fração. Ex: 1 e 3/4 = 7/4.' },
    { tag: 'Exemplo', q: 'Simplifica 8/12', a: 'Divide por 4: 8÷4 = 2, 12÷4 = 3 → 2/3.' },
    { tag: 'Exemplo', q: '3/5 é equivalente a quê (denominador 10)?', a: 'Multiplica por 2: 3/5 = 6/10.' },
    { tag: 'Exemplo', q: 'Calcula 1/4 + 2/4', a: '1/4 + 2/4 = 3/4.' },
    { tag: 'Exemplo', q: 'Qual é maior: 2/3 ou 2/5?', a: '2/3 (mesmo numerador, denominador menor → partes maiores).' }
  ],
  3: [
    { tag: 'Definição', q: 'O que é um número decimal?', a: 'Um número com parte inteira e parte decimal, separadas por vírgula. Ex: 3,57 (3 inteiros e 57 centésimas).' },
    { tag: 'Definição', q: 'Valor posicional das casas decimais', a: 'Depois da vírgula: 1.ª casa = décimas, 2.ª = centésimas, 3.ª = milésimas. Ex: em 0,4 = 4 décimas.' },
    { tag: 'Regra', q: 'Como comparar dois números decimais?', a: 'Compara primeiro a parte inteira; se igual, compara décimas, depois centésimas… Ex: 4,57 > 4,07.' },
    { tag: 'Regra', q: 'Acrescentar zeros à direita muda o valor?', a: 'Não: 0,5 = 0,50 = 0,500. Os zeros à direita da parte decimal não alteram o valor.' },
    { tag: 'Definição', q: 'O que é uma percentagem?', a: 'Uma forma de exprimir uma parte em 100. Ex: 45% = 45/100 = 0,45.' },
    { tag: 'Regra', q: 'Como passar de percentagem para decimal?', a: 'Divide por 100 (move a vírgula 2 casas para a esquerda). Ex: 30% = 0,30.' },
    { tag: 'Regra', q: 'Como passar de fração para percentagem?', a: 'Escreve uma fração equivalente com denominador 100. Ex: 1/4 = 25/100 = 25%.' },
    { tag: 'Fórmula', q: 'Como calcular p% de um valor?', a: 'p% de N = (p ÷ 100) × N. Ex: 20% de 50 = 0,20 × 50 = 10.' },
    { tag: 'Regra', q: 'Como somar números decimais?', a: 'Alinha as vírgulas (e as casas) e soma como números inteiros, mantendo a vírgula. Ex: 2,5 + 1,75 = 4,25.' },
    { tag: 'Regra', q: 'Como multiplicar um decimal por 10, 100, 1000?', a: 'Move a vírgula para a direita: 1 casa (×10), 2 casas (×100), 3 casas (×1000). Ex: 3,4 × 100 = 340.' },
    { tag: 'Regra', q: 'Como dividir um decimal por 10, 100, 1000?', a: 'Move a vírgula para a esquerda. Ex: 56 ÷ 100 = 0,56.' },
    { tag: 'Definição', q: 'Equivalências úteis (fração-decimal-%)', a: '1/2 = 0,5 = 50%; 1/4 = 0,25 = 25%; 3/4 = 0,75 = 75%; 1/10 = 0,1 = 10%.' },
    { tag: 'Exemplo', q: 'Quanto é 50% de 80?', a: '0,50 × 80 = 40 (metade de 80).' },
    { tag: 'Exemplo', q: 'Escreve 0,45 em percentagem', a: '0,45 = 45/100 = 45%.' },
    { tag: 'Exemplo', q: 'Compara 0,45 e 40%', a: '40% = 0,40. Como 0,45 > 0,40, então 0,45 > 40%.' },
    { tag: 'Exemplo', q: 'Calcula 2,3 + 0,75', a: 'Alinha vírgulas: 2,30 + 0,75 = 3,05.' }
  ],
  4: [
    { tag: 'Definição', q: 'O que é um ângulo?', a: 'A abertura entre duas semirretas com a mesma origem (o vértice). Mede-se em graus (°).' },
    { tag: 'Definição', q: 'Tipos de ângulos pela amplitude', a: 'Agudo: < 90°. Reto: = 90°. Obtuso: entre 90° e 180°. Raso: = 180°. Giro: = 360°.' },
    { tag: 'Definição', q: 'O que são ângulos complementares?', a: 'Dois ângulos cuja soma é 90°. Ex: 30° e 60° são complementares.' },
    { tag: 'Definição', q: 'O que são ângulos suplementares?', a: 'Dois ângulos cuja soma é 180°. Ex: 110° e 70° são suplementares.' },
    { tag: 'Definição', q: 'Classificação de triângulos pelos lados', a: 'Equilátero: 3 lados iguais. Isósceles: 2 lados iguais. Escaleno: 3 lados diferentes.' },
    { tag: 'Definição', q: 'Classificação de triângulos pelos ângulos', a: 'Acutângulo: 3 ângulos agudos. Retângulo: 1 ângulo reto. Obtusângulo: 1 ângulo obtuso.' },
    { tag: 'Propriedade', q: 'Soma dos ângulos internos de um triângulo', a: 'É sempre 180°. Ex: se dois ângulos medem 60° e 70°, o terceiro mede 180° − 130° = 50°.' },
    { tag: 'Definição', q: 'O que é um polígono?', a: 'Uma figura plana fechada formada por segmentos de reta (lados). Ex: triângulo, quadrado, pentágono.' },
    { tag: 'Definição', q: 'O que é um quadrilátero?', a: 'Um polígono com 4 lados. Ex: quadrado, retângulo, losango, trapézio, paralelogramo.' },
    { tag: 'Propriedade', q: 'Soma dos ângulos internos de um quadrilátero', a: 'É sempre 360°.' },
    { tag: 'Definição', q: 'O que é o perímetro de uma figura?', a: 'A soma dos comprimentos de todos os lados. Ex: quadrado de lado 5 → perímetro = 4 × 5 = 20.' },
    { tag: 'Regra', q: 'Critério de igualdade de triângulos (LLL)', a: 'Dois triângulos são iguais se tiverem os três lados correspondentes iguais.' },
    { tag: 'Definição', q: 'O que são retas paralelas e perpendiculares?', a: 'Paralelas: nunca se cruzam (mesma direção). Perpendiculares: cruzam-se formando ângulos de 90°.' },
    { tag: 'Exemplo', q: 'Um triângulo tem ângulos 90° e 45°. Quanto mede o terceiro?', a: '180° − 90° − 45° = 45°.' },
    { tag: 'Exemplo', q: 'Perímetro de um retângulo 6 cm × 4 cm?', a: '6 + 4 + 6 + 4 = 20 cm (ou 2×(6+4) = 20).' },
    { tag: 'Exemplo', q: 'Complementar de 35°?', a: '90° − 35° = 55°.' }
  ],
  5: [
    { tag: 'Definição', q: 'O que é um sólido geométrico?', a: 'Uma figura no espaço (3 dimensões). Ex: cubo, prisma, pirâmide, cilindro, cone, esfera.' },
    { tag: 'Definição', q: 'O que são faces, arestas e vértices?', a: 'Faces: as superfícies planas. Arestas: os segmentos onde duas faces se encontram. Vértices: os "cantos" (pontos).' },
    { tag: 'Definição', q: 'O que é um poliedro?', a: 'Um sólido cujas faces são todas polígonos (planas). Ex: cubo, prisma, pirâmide. (A esfera não é poliedro.)' },
    { tag: 'Definição', q: 'O que é um prisma?', a: 'Um poliedro com duas bases iguais e paralelas (polígonos) e faces laterais retangulares. Ex: prisma triangular, cubo.' },
    { tag: 'Definição', q: 'O que é uma pirâmide?', a: 'Um poliedro com uma base (polígono) e faces laterais triangulares que se unem num vértice (o topo).' },
    { tag: 'Definição', q: 'O cubo: faces, arestas e vértices', a: 'O cubo tem 6 faces (quadrados), 12 arestas e 8 vértices.' },
    { tag: 'Regra', q: 'Quantas faces tem uma pirâmide?', a: 'O número de lados da base + 1 (a base). Ex: pirâmide quadrangular → 4 faces laterais + 1 base = 5 faces.' },
    { tag: 'Regra', q: 'Quantos vértices tem uma pirâmide?', a: 'O número de vértices da base + 1 (o topo). Ex: pirâmide triangular → 3 + 1 = 4 vértices.' },
    { tag: 'Definição', q: 'O que é a planificação de um sólido?', a: 'O sólido "aberto" e estendido num plano, mostrando todas as faces. Serve para construir o sólido em papel.' },
    { tag: 'Definição', q: 'Sólidos com superfícies curvas', a: 'Cilindro (2 bases circulares), cone (1 base circular e ponta) e esfera (toda curva). Não são poliedros.' },
    { tag: 'Propriedade', q: 'Relação de Euler (poliedros)', a: 'Vértices − Arestas + Faces = 2. Ex: cubo → 8 − 12 + 6 = 2. ✓' },
    { tag: 'Definição', q: 'Como se nomeia uma pirâmide?', a: 'Pela forma da base: base triangular → pirâmide triangular; base quadrada → pirâmide quadrangular.' },
    { tag: 'Exemplo', q: 'Quantas arestas tem um prisma triangular?', a: '9 arestas (3 em cada base + 3 laterais).' },
    { tag: 'Exemplo', q: 'Uma pirâmide pentagonal tem quantas faces?', a: '5 faces laterais + 1 base = 6 faces.' },
    { tag: 'Exemplo', q: 'Que sólido tem 6 faces quadradas iguais?', a: 'O cubo.' },
    { tag: 'Exemplo', q: 'Quantos vértices tem um cubo?', a: '8 vértices.' }
  ],
  6: [
    { tag: 'Definição', q: 'O que é uma sequência?', a: 'Uma lista ordenada de elementos (termos) que seguem uma regra. Ex: 2, 4, 6, 8, … (somar 2).' },
    { tag: 'Definição', q: 'O que é um termo de uma sequência?', a: 'Cada elemento da sequência. O 1.º termo, o 2.º termo, etc. A posição chama-se ordem.' },
    { tag: 'Definição', q: 'O que é a lei de formação?', a: 'A regra que diz como se passa de um termo para o seguinte (ou como calcular qualquer termo). Ex: "somar 3".' },
    { tag: 'Estratégia', q: 'Como descobrir o termo seguinte?', a: 'Procura o padrão entre termos consecutivos (somar, subtrair, multiplicar…) e aplica-o ao último termo.' },
    { tag: 'Exemplo', q: 'Próximo termo de 3, 6, 9, 12, …?', a: 'A regra é "somar 3" → 12 + 3 = 15.' },
    { tag: 'Exemplo', q: 'Próximo termo de 1, 2, 4, 8, …?', a: 'A regra é "multiplicar por 2" → 8 × 2 = 16.' },
    { tag: 'Estratégia', q: 'Como calcular um termo distante (ex: o 18.º)?', a: 'Se a regra for somar sempre r: termo = 1.º termo + (ordem − 1) × r. Ex: 5, 8, 11… o 18.º = 5 + 17×3 = 56.' },
    { tag: 'Definição', q: 'Sequência crescente ou decrescente', a: 'Crescente: os termos aumentam (ex: 2, 5, 8). Decrescente: os termos diminuem (ex: 20, 15, 10).' },
    { tag: 'Definição', q: 'O que é uma regularidade?', a: 'Um padrão que se repete numa sequência de números ou de figuras. Permite prever os termos seguintes.' },
    { tag: 'Exemplo', q: 'Termos em falta: 4, __, 12, 16?', a: 'A regra é "somar 4" → o termo em falta é 8.' },
    { tag: 'Exemplo', q: 'Próximo termo de 20, 17, 14, 11, …?', a: 'A regra é "subtrair 3" → 11 − 3 = 8.' },
    { tag: 'Estratégia', q: 'Sequência de figuras: como contar?', a: 'Conta os elementos de cada figura e procura como aumentam de uma para a seguinte (ex: +2 quadrados de cada vez).' },
    { tag: 'Exemplo', q: 'Próximo termo de 1, 4, 9, 16, …?', a: 'São os quadrados: 1², 2², 3², 4² → o seguinte é 5² = 25.' },
    { tag: 'Exemplo', q: 'Qual a regra de 2, 4, 6, 8?', a: 'Somar 2 (números pares). São os múltiplos de 2.' },
    { tag: 'Exemplo', q: 'O 10.º termo de 3, 6, 9, … (múltiplos de 3)?', a: '3 × 10 = 30.' },
    { tag: 'Definição', q: 'Termo geral (intuitivo)', a: 'Uma expressão que dá qualquer termo a partir da ordem n. Ex: para 3, 6, 9, … o termo geral é 3 × n.' }
  ],
  7: [
    { tag: 'Definição', q: 'O que é a frequência absoluta?', a: 'O número de vezes que um valor (ou categoria) aparece nos dados. Ex: se 8 alunos escolheram futebol, a frequência absoluta é 8.' },
    { tag: 'Definição', q: 'O que é uma tabela de frequências?', a: 'Uma tabela que organiza os dados, mostrando cada valor/categoria e quantas vezes ocorre.' },
    { tag: 'Definição', q: 'Tipos de gráficos', a: 'Gráfico de barras (categorias), pictograma (com símbolos), gráfico de linhas (evolução) e gráfico circular (proporções).' },
    { tag: 'Estratégia', q: 'Como ler um gráfico de barras?', a: 'A altura (ou comprimento) de cada barra indica a frequência. Lê o valor no eixo correspondente.' },
    { tag: 'Definição', q: 'O que é a média?', a: 'A soma de todos os valores a dividir pelo número de valores. Ex: média de 4, 6, 8 = (4+6+8)/3 = 6.' },
    { tag: 'Definição', q: 'O que é a moda?', a: 'O valor (ou categoria) que aparece mais vezes. Ex: em 3, 5, 5, 5, 7 a moda é 5.' },
    { tag: 'Definição', q: 'O que é o máximo e o mínimo?', a: 'Máximo: o maior valor dos dados. Mínimo: o menor valor. A diferença chama-se amplitude.' },
    { tag: 'Definição', q: 'O que é a amplitude?', a: 'A diferença entre o maior e o menor valor (máximo − mínimo). Mostra o quanto os dados variam.' },
    { tag: 'Estratégia', q: 'Como calcular a média?', a: 'Soma todos os valores e divide pelo número de valores. Ex: (10+20+30)/3 = 60/3 = 20.' },
    { tag: 'Definição', q: 'O que é uma população e uma amostra?', a: 'População: o conjunto total que se estuda. Amostra: uma parte da população escolhida para a representar.' },
    { tag: 'Estratégia', q: 'Como construir um gráfico de barras?', a: 'Cada categoria tem uma barra; a altura corresponde à frequência. Mantém a mesma largura e espaçamento entre barras.' },
    { tag: 'Definição', q: 'O que é um pictograma?', a: 'Um gráfico onde se usam símbolos/imagens para representar quantidades. Cada símbolo vale um certo número.' },
    { tag: 'Exemplo', q: 'Média de 10, 15, 20?', a: '(10+15+20)/3 = 45/3 = 15.' },
    { tag: 'Exemplo', q: 'Moda de 2, 3, 3, 4, 3, 5?', a: 'O valor mais frequente é 3 (aparece 3 vezes).' },
    { tag: 'Exemplo', q: 'Amplitude de 5, 12, 8, 20?', a: 'Máximo 20 − mínimo 5 = 15.' },
    { tag: 'Exemplo', q: 'Num gráfico, 50 clientes responderam. Se 20 disseram "Muito Satisfeito", que fração é?', a: '20/50 = 2/5 = 40%.' }
  ]
};

// Seleção atual por tab
var _mat5Sel = { resumo: 1, 'resumo-st': 0 };

// ═══ NAVEGAÇÃO DE TABS ═══
function mat5SwitchTab(tab, btn) {
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
  var panel = document.getElementById('mat5p-' + tab);
  if (panel) { panel.classList.add('active'); panel.style.setProperty('display','block','important'); }

  var titles = { resumo:'Teoria', praticar:'Praticar', fichas:'Fichas', progresso:'Progresso',
                 exercicios:'Exercícios', quiz:'Quiz', flashcards:'Flashcards', teste:'Teste', jogos:'Jogos' };
  if (titles[tab]) document.title = 'Mat. 5.º ' + titles[tab] + ' · 3ponto14';

  if (tab === 'resumo') mat5BuildResumoNav();
  else if (tab === 'exercicios') mat5BuildPraticarNav();
  else if (tab === 'quiz') mat5QuizBuildNav();
  else if (tab === 'flashcards') mat5FcBuildNav();
  else if (tab === 'teste') mat5TesteBuildNav();
  else if (tab === 'jogos') mat5JogosInit();
  else if (tab === 'fichas') mat5FichasBuildNav();
  else if (tab === 'progresso') mat5RenderProgresso();
}

// Abre um sub-modo de prática a partir dos cartões do menu Praticar.
function mat5OpenPraticar(modo) { mat5SwitchTab(modo, null); }

// ═══ TAB TEORIA ═══
function mat5BuildResumoNav() {
  var capRow = document.getElementById('mat5-resumo-cap-row');
  if (!capRow) return;
  var activeCap = _mat5Sel['resumo'] || 1;
  var h = '';
  _mat5CapMeta.forEach(function(m) {
    var color = _mat5CapColors[m.n] || '#516860';
    var isActive = activeCap === m.n;
    var activeStyle = isActive ? 'background:' + color + ';border-color:' + color + ';color:#fff' : '';
    var hoverCode = isActive ? '' : ' onmouseover="this.style.borderColor=\'' + color + '\';this.style.color=\'' + color + '\'" onmouseout="this.style.borderColor=\'\';this.style.color=\'\'"';
    h += '<button class="resumo-cap-btn' + (isActive ? ' active' : '') + '" data-cap="' + m.n + '" onclick="mat5ResumoSelectCap(' + m.n + ',this)" style="' + activeStyle + '"' + hoverCode + '>'
       + '<span class="resumo-cap-icon">' + m.icon + '</span>' + m.label + '</button>';
  });
  capRow.innerHTML = h;
  mat5ResumoShowSts(activeCap);
  mat5RenderResumoInline();
}

function mat5ResumoSelectCap(cap, btn) {
  _mat5Sel['resumo'] = cap;
  _mat5Sel['resumo-st'] = 0;
  var capRow = document.getElementById('mat5-resumo-cap-row');
  if (capRow) {
    capRow.querySelectorAll('.resumo-cap-btn').forEach(function(b) {
      b.classList.remove('active'); b.style.background = ''; b.style.borderColor = ''; b.style.color = '';
    });
  }
  if (btn) {
    var color = _mat5CapColors[cap] || '#516860';
    btn.classList.add('active');
    btn.style.background = color; btn.style.borderColor = color; btn.style.color = '#fff';
  }
  mat5ResumoShowSts(cap);
  mat5RenderResumoInline();
}

function mat5ResumoShowSts(cap) {
  var stRow = document.getElementById('mat5-resumo-st-row');
  if (!stRow) return;
  var sts = _mat5Subtemas[cap] || [];
  if (!sts.length) { stRow.style.display = 'none'; return; }
  var h = '<div class="resumo-st-label">Subtema</div>';
  sts.forEach(function(st, i) {
    var isActive = (_mat5Sel['resumo-st'] || 0) === (i + 1);
    h += '<button class="resumo-st-btn' + (isActive ? ' active' : '') + '" data-st="' + (i + 1) + '" onclick="mat5ResumoSelectSt(this,' + cap + ',' + (i + 1) + ')">' + st + '</button>';
  });
  stRow.innerHTML = h;
  stRow.style.display = 'flex';
}

function mat5ResumoSelectSt(btn, cap, stIdx) {
  var stRow = document.getElementById('mat5-resumo-st-row');
  if (stRow) stRow.querySelectorAll('.resumo-st-btn').forEach(function(b) { b.classList.remove('active'); });
  if (btn) btn.classList.add('active');
  _mat5Sel['resumo'] = cap;
  _mat5Sel['resumo-st'] = stIdx;
  mat5RenderResumoInline();
}

function mat5RenderResumoInline() {
  var cap = _mat5Sel['resumo'] || 1;
  var dest = document.getElementById('mat5-resumo-content');
  if (!dest) return;

  var color = (function(){
    var c = _mat5CapColors[cap] || '#516860';
    return c;
  })();

  var tagIcons = {
    'Definição':'ph-book-bookmark', 'Fórmula':'ph-function', 'Regra':'ph-check-square',
    'Propriedade':'ph-star', 'Exemplo':'ph-pencil-line', 'Estratégia':'ph-lightbulb',
    'Síntese':'ph-seal-check', 'Notação':'ph-at', 'Hierarquia':'ph-tree-structure',
    'Teorema':'ph-intersect', 'Conceito':'ph-cube'
  };

  var allCards = _mat5Cards[cap] || [];

  // Filtrar por subtema, se selecionado
  var stIdx = _mat5Sel['resumo-st'] || 0;
  var cards = allCards;
  if (stIdx > 0 && _mat5Subtemas[cap]) {
    var stLabel = (_mat5Subtemas[cap][stIdx - 1] || '').toLowerCase();
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

  _mat5PM(cap, 'teoria'); // estudou a teoria deste capítulo

  // Acordeão partilhado: grupos colapsáveis + perguntas que abrem a resposta.
  dest.innerHTML = _teoriaAccordionHTML(cards, color, tagIcons);
}

/* ════════════════════════════════════════════════════════════════
   TAB PRATICAR - exercícios gerados com correção imediata
   Renderiza tudo no painel (sem páginas externas). Reutiliza os
   motores genéricos do chapter-engine: _capBuildQuizHTML,
   _capCheckAnswer, _capShowFeedback.
   ════════════════════════════════════════════════════════════════ */

// Gerador por capítulo (resolução lazy - os buildEx_m5cN são definidos no fim do ficheiro).
// Só os caps com gerador são "praticáveis".
function _mat5Gerador(cap) {
  if (cap === 1 && typeof buildEx_m5c1 === 'function') return buildEx_m5c1;
  if (cap === 2 && typeof buildEx_m5c2 === 'function') return buildEx_m5c2;
  if (cap === 3 && typeof buildEx_m5c3 === 'function') return buildEx_m5c3;
  if (cap === 4 && typeof buildEx_m5c4 === 'function') return buildEx_m5c4;
  if (cap === 5 && typeof buildEx_m5c5 === 'function') return buildEx_m5c5;
  if (cap === 6 && typeof buildEx_m5c6 === 'function') return buildEx_m5c6;
  if (cap === 7 && typeof buildEx_m5c7 === 'function') return buildEx_m5c7;
  return null;
}
var _mat5TemasCount = { 1: 3, 2: 3, 3: 3, 4: 3, 5: 2, 6: 2, 7: 3 };

// Estado da prática
var _mat5Prat = { cap: 1, st: 0, nivel: 'medio', score: { correct: 0, total: 0 }, answered: {}, exs: [] };

function _mat5PratStorageKey(cap) { return 'edupt_mat5_cap' + cap; }

function mat5BuildPraticarNav() {
  var capRow = document.getElementById('mat5-praticar-cap-row');
  if (!capRow) return;
  var activeCap = _mat5Prat.cap || 1;
  var h = '';
  _mat5CapMeta.forEach(function(m) {
    var hasGen = !!_mat5Gerador(m.n);
    var color = _mat5CapColors[m.n] || '#516860';
    var isActive = activeCap === m.n;
    var activeStyle = isActive ? 'background:' + color + ';border-color:' + color + ';color:#fff' : '';
    var disabledStyle = hasGen ? '' : 'opacity:.45;cursor:not-allowed';
    var onclick = hasGen ? 'mat5PraticarSelectCap(' + m.n + ',this)' : '';
    var title = hasGen ? '' : ' title="Em preparação"';
    h += '<button class="resumo-cap-btn' + (isActive ? ' active' : '') + '" data-cap="' + m.n + '" onclick="' + onclick + '" style="' + activeStyle + ';' + disabledStyle + '"' + title + '>'
       + '<span class="resumo-cap-icon">' + m.icon + '</span>' + m.label + (hasGen ? '' : ' ·') + '</button>';
  });
  capRow.innerHTML = h;
  mat5PraticarShowSts(activeCap);
}

function mat5PraticarShowSts(cap) {
  var stRow = document.getElementById('mat5-praticar-st-row');
  if (!stRow) return;
  var sts = _mat5Subtemas[cap] || [];
  if (!sts.length) { stRow.style.display = 'none'; return; }
  var h = '<div class="resumo-st-label">Subtema</div>';
  h += '<button class="resumo-st-btn' + (_mat5Prat.st === 0 ? ' active' : '') + '" data-st="0" onclick="mat5PraticarSelectSt(this,0)">Todos</button>';
  sts.forEach(function(st, i) {
    h += '<button class="resumo-st-btn' + (_mat5Prat.st === (i + 1) ? ' active' : '') + '" data-st="' + (i + 1) + '" onclick="mat5PraticarSelectSt(this,' + (i + 1) + ')">' + st + '</button>';
  });
  stRow.innerHTML = h;
  stRow.style.display = 'flex';
}

function mat5PraticarSelectCap(cap, btn) {
  if (!_mat5Gerador(cap)) return;
  _mat5Prat.cap = cap;
  _mat5Prat.st = 0;
  var capRow = document.getElementById('mat5-praticar-cap-row');
  if (capRow) capRow.querySelectorAll('.resumo-cap-btn').forEach(function(b) { b.classList.remove('active'); b.style.background = ''; b.style.borderColor = ''; b.style.color = ''; });
  if (btn) { var color = _mat5CapColors[cap] || '#516860'; btn.classList.add('active'); btn.style.background = color; btn.style.borderColor = color; btn.style.color = '#fff'; }
  mat5PraticarShowSts(cap);
  mat5GerarExercicios();
}

function mat5PraticarSelectSt(btn, stIdx) {
  var stRow = document.getElementById('mat5-praticar-st-row');
  if (stRow) stRow.querySelectorAll('.resumo-st-btn').forEach(function(b) { b.classList.remove('active'); });
  if (btn) btn.classList.add('active');
  _mat5Prat.st = stIdx;
  mat5GerarExercicios();
}

function mat5PraticarSetNivel(nivel, btn) {
  _mat5Prat.nivel = nivel;
  var grp = document.getElementById('mat5-praticar-nivel');
  if (grp) grp.querySelectorAll('.gen-level-btn').forEach(function(b) { b.classList.remove('active'); });
  if (btn) btn.classList.add('active');
  mat5GerarExercicios();
}

// Mapa subtema → temas a usar no gerador (Cap 1 Números)
var _mat5SubtemaTemas = {
  1: { 1: ['1'], 2: ['2'], 3: ['3'] },  // Múltiplos/divisores · Potências · Expressões
  2: { 1: ['1'], 2: ['2'], 3: ['3'] },  // Equivalentes · Comparar · Somar/subtrair
  3: { 1: ['1'], 2: ['2'], 3: ['3'] },  // Comparar decimais · Percentagens · Operações
  4: { 1: ['1'], 2: ['2'], 3: ['3'] },  // Ângulos · Triângulos · Polígonos
  5: { 1: ['1'], 2: ['2'] },            // Faces/vértices/arestas · Pirâmides/prismas
  6: { 1: ['1'], 2: ['2'] },            // Termo seguinte · Lei de formação
  7: { 1: ['1'], 2: ['2'], 3: ['3'] }   // Ler gráficos · Frequência · Média
};

function mat5GerarExercicios() {
  var dest = document.getElementById('mat5-praticar-content');
  if (!dest) return;
  var cap = _mat5Prat.cap, gen = _mat5Gerador(cap);
  if (!gen) { dest.innerHTML = ''; return; }

  // Que temas usar?
  var temas;
  if (_mat5Prat.st > 0 && _mat5SubtemaTemas[cap] && _mat5SubtemaTemas[cap][_mat5Prat.st]) {
    temas = _mat5SubtemaTemas[cap][_mat5Prat.st];
  } else {
    temas = [];
    for (var t = 1; t <= (_mat5TemasCount[cap] || 1); t++) temas.push(String(t));
  }

  var QTD = 8;
  var tipos = ['mc', 'fill', 'mc', 'vf', 'fill', 'mc', 'fill', 'mc'];
  var geradas = [];
  for (var i = 0; i < QTD; i++) {
    var tema = temas[i % temas.length];
    var ex = gen(tema, tipos[i % tipos.length], _mat5Prat.nivel);
    if (ex) geradas.push(ex);
  }
  var banco = (typeof _mat5Banco !== "undefined" && _mat5Banco[cap]) ? _mat5Banco[cap].filter(function (q) { return temas.indexOf(q.t) !== -1; }) : [];
  var exs = (typeof _mixBancoGeradas === "function") ? _mixBancoGeradas(banco, geradas, QTD, 2, _mat5Prat.nivel)
    : geradas.map(function (e, idx) { return Object.assign({}, e, { num: idx + 1 }); });
  _mat5Prat.exs = exs;
  _mat5Prat.answered = {};
  _mat5Prat.score = { correct: 0, total: 0 };

  // Score bar + questões (reutiliza motor genérico do chapter-engine)
  var scoreBar = '<div class="score-bar" id="mat5-prat-scorebar">'
    + '<div><div class="score-num" id="mat5-prat-score">0</div><div class="score-label">pontos</div></div>'
    + '<div><div class="score-num" id="mat5-prat-total">/ 0</div><div class="score-label">respondidas</div></div>'
    + '<div class="progress-track"><div class="progress-fill" id="mat5-prat-prog" style="width:0%"></div></div>'
    + '<button class="btn btn-ghost ml-auto" onclick="mat5GerarExercicios()">↺ Novas questões</button>'
    + '</div>';
  var quizHTML = (typeof _capBuildQuizHTML === 'function')
    ? _capBuildQuizHTML(exs, 'm8ex', 'mat5CheckEx')
    : '<p style="color:var(--ink4)">Motor de exercícios indisponível.</p>';
  dest.innerHTML = scoreBar + '<div id="mat5-atribuir" style="margin:.2rem 0 .8rem"></div>' + quizHTML;
  if (typeof Atribuir !== 'undefined' && Atribuir.montar) {
    var _cm = _mat5CapMeta.filter(function (m) { return m.n === cap; })[0] || {};
    var _sn = (_mat5Subtemas[cap] && _mat5Prat.st > 0) ? (_mat5Subtemas[cap][_mat5Prat.st - 1] || '') : '';
    Atribuir.montar('mat5-atribuir', { curso: 'mat5', cursoNome: 'Matemática 5.º', tema: String(cap), temaNome: (_cm.label || ('Cap. ' + cap)), sub: String(_mat5Prat.st || ''), subNome: _sn, tipo: 'quiz', nivel: _mat5Prat.nivel });
  }
}

function mat5CheckEx(qid, tipo, val, btn) {
  if (_mat5Prat.answered[qid]) return;
  if (typeof _capCheckAnswer !== 'function') return;
  var r = _capCheckAnswer(qid, tipo, val);
  if (!r) return; // resposta vazia
  _mat5Prat.answered[qid] = true;
  if (r.correct) _mat5Prat.score.correct++;
  _mat5Prat.score.total++;
  if (typeof _capShowFeedback === 'function') _capShowFeedback(qid, r.correct, r.expl, val, btn);
  var se = document.getElementById('mat5-prat-score'); if (se) se.textContent = _mat5Prat.score.correct;
  var te = document.getElementById('mat5-prat-total'); if (te) te.textContent = '/ ' + _mat5Prat.score.total;
  var pe = document.getElementById('mat5-prat-prog'); if (pe && _mat5Prat.exs.length) pe.style.width = (_mat5Prat.score.total / _mat5Prat.exs.length * 100) + '%';
  mat5SaveProgress(_mat5Prat.cap, r.correct);
}

// ═══ PROGRESSO (localStorage por capítulo) ═══
function mat5SaveProgress(cap, correct) {
  try {
    var key = _mat5PratStorageKey(cap);
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
// ('m5capN') para não misturar com o progresso do 7.º ano.
function _mat5PM(cap, tipo, opts) {
  if (typeof ProgressManager === 'undefined') return;
  try { ProgressManager.record('m5cap' + cap, tipo, opts || {}); } catch (e) {}
}

/* ════════════════════════════════════════════════════════════════
   HELPER: linha de capítulos para sub-modos (quiz, flashcards, teste)
   Só capítulos com gerador ficam ativos.
   ════════════════════════════════════════════════════════════════ */
function _mat5BuildCapRow(rowId, activeCap, onclickName) {
  var row = document.getElementById(rowId);
  if (!row) return;
  var h = '';
  _mat5CapMeta.forEach(function(m) {
    var hasGen = !!_mat5Gerador(m.n);
    var color = _mat5CapColors[m.n] || '#516860';
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

function _mat5SetActiveCapBtn(rowId, btn, cap) {
  var row = document.getElementById(rowId);
  if (row) row.querySelectorAll('.resumo-cap-btn').forEach(function(b){ b.classList.remove('active'); b.style.background=''; b.style.borderColor=''; b.style.color=''; });
  if (btn) { var color = _mat5CapColors[cap] || '#516860'; btn.classList.add('active'); btn.style.background=color; btn.style.borderColor=color; btn.style.color='#fff'; }
}

// Converte uma questão de resposta aberta em escolha múltipla. Delega no
// helper partilhado _fillParaMc (shared.js), com distratores pedagógicos.
function _mat5FillToMc(ex) {
  return (typeof _fillParaMc === 'function') ? _fillParaMc(ex) : null;
}

// Gera uma questão de escolha múltipla para um capítulo (usada por quiz).
function _mat5BuildMcQuestion(cap) {
  var gen = _mat5Gerador(cap);
  if (!gen) return null;
  var nTemas = _mat5TemasCount[cap] || 1;
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
    var mc = _mat5FillToMc(fillEx);
    if (mc && mc.opcoes && mc.opcoes.length >= 2) return mc;
  }
  return null;
}

/* ════════════════════════════════════════════════════════════════
   SUB-MODO: QUIZ RELÂMPAGO (3 vidas, streak)
   ════════════════════════════════════════════════════════════════ */
var _mat5Quiz = { cap: 1, lives: 3, streak: 0, maxStreak: 0, score: 0, total: 0, answered: false, current: null };

function mat5QuizBuildNav() {
  if (!_mat5Gerador(_mat5Quiz.cap)) _mat5Quiz.cap = 1;
  _mat5BuildCapRow('mat5-quiz-cap-row', _mat5Quiz.cap, 'mat5QuizSelectCap');
  mat5QuizStart();
}

function mat5QuizSelectCap(cap, btn) {
  if (!_mat5Gerador(cap)) return;
  _mat5SetActiveCapBtn('mat5-quiz-cap-row', btn, cap);
  _mat5Quiz.cap = cap;
  mat5QuizStart();
}

function mat5QuizStart() {
  _mat5Quiz.lives = 3; _mat5Quiz.streak = 0; _mat5Quiz.maxStreak = 0;
  _mat5Quiz.score = 0; _mat5Quiz.total = 0; _mat5Quiz.answered = false;
  mat5QuizNext();
}

function mat5QuizNext() {
  var app = document.getElementById('mat5-quiz-app');
  if (!app) return;
  if (_mat5Quiz.lives <= 0) { mat5QuizGameOver(app); return; }
  var ex = _mat5BuildMcQuestion(_mat5Quiz.cap);
  if (!ex) { app.innerHTML = '<p style="color:var(--ink4);padding:2rem;text-align:center">Sem questões disponíveis para este capítulo.</p>'; return; }
  _mat5Quiz.current = ex; _mat5Quiz.answered = false;
  var lives = '';
  for (var i = 0; i < 3; i++) lives += (i < _mat5Quiz.lives ? '❤️' : '🖤') + ' ';
  var opts = '';
  ex.opcoes.forEach(function(opt, idx) {
    opts += '<button class="qg-opt-btn" id="mat5qopt-' + idx + '" onclick="mat5QuizAnswer(' + idx + ')">' + opt + '</button>';
  });
  app.innerHTML =
    '<div class="qg-hub-bar">' +
      '<div class="qg-hub-lives">' + lives + '</div>' +
      '<div class="qg-hub-streak">' + (_mat5Quiz.streak > 1 ? '🔥 ' + _mat5Quiz.streak + ' seguidas' : '') + '</div>' +
      '<div class="qg-hub-score">✓ ' + _mat5Quiz.score + ' / ' + _mat5Quiz.total + '</div>' +
    '</div>' +
    '<div class="qg-hub-question">' + ex.enun + '</div>' +
    '<div class="qg-hub-opts">' + opts + '</div>' +
    '<div class="qg-hub-feedback" id="mat5-quiz-fb" style="min-height:2.5rem"></div>';
}

function mat5QuizAnswer(idx) {
  if (_mat5Quiz.answered) return;
  _mat5Quiz.answered = true;
  var ex = _mat5Quiz.current; if (!ex) return;
  var correct = String(ex.opcoes[idx]) === String(ex.resposta);
  _mat5Quiz.total++;
  document.querySelectorAll('.qg-opt-btn').forEach(function(b, i) {
    b.disabled = true;
    if (String(ex.opcoes[i]) === String(ex.resposta)) { b.style.background = '#4caf50'; b.style.color = '#fff'; }
  });
  var clicked = document.getElementById('mat5qopt-' + idx);
  if (clicked && !correct) { clicked.style.background = '#f44336'; clicked.style.color = '#fff'; }
  var fb = document.getElementById('mat5-quiz-fb');
  if (correct) {
    _mat5Quiz.score++; _mat5Quiz.streak++;
    if (_mat5Quiz.streak > _mat5Quiz.maxStreak) _mat5Quiz.maxStreak = _mat5Quiz.streak;
    if (fb) fb.innerHTML = '<span style="color:var(--correct,#3ecf8e);font-weight:700">✓ Certo!</span> ' + (ex.expl || '');
  } else {
    _mat5Quiz.lives--; _mat5Quiz.streak = 0;
    if (fb) fb.innerHTML = '<span style="color:var(--wrong,#ff6b6b);font-weight:700">✗ Errado.</span> ' + (ex.expl || '');
  }
  mat5SaveProgress(_mat5Quiz.cap, correct);
  setTimeout(function(){ mat5QuizNext(); }, 1400);
}

function mat5QuizGameOver(app) {
  var pct = _mat5Quiz.total > 0 ? Math.round(_mat5Quiz.score / _mat5Quiz.total * 100) : 0;
  _mat5PM(_mat5Quiz.cap, 'quiz', { pontuacao: _mat5Quiz.score, total: _mat5Quiz.total });
  var emoji = pct >= 90 ? '🏆' : pct >= 70 ? '⭐' : pct >= 50 ? '👍' : '📚';
  app.innerHTML =
    '<div style="text-align:center;padding:2.5rem 1rem">' +
      '<div style="font-size:3.5rem;margin-bottom:.75rem">' + emoji + '</div>' +
      '<div style="font-family:\'Cormorant Garamond\',serif;font-size:2rem;font-weight:900;color:var(--ink)">' + pct + '%</div>' +
      '<div style="color:var(--ink3);margin:.5rem 0 1.5rem">' + _mat5Quiz.score + ' certas em ' + _mat5Quiz.total + ' questões</div>' +
      '<div style="font-size:1.5rem;margin-bottom:1.5rem">Melhor sequência: ' + (_mat5Quiz.maxStreak || 0) + ' 🔥</div>' +
      '<button class="btn btn-primary" onclick="mat5QuizStart()">↺ Jogar novamente</button>' +
    '</div>';
}

/* ════════════════════════════════════════════════════════════════
   SUB-MODO: FLASHCARDS
   ════════════════════════════════════════════════════════════════ */
var _mat5Fc = { cap: 1, idx: 0, flipped: false, cards: [] };

function mat5FcBuildNav() {
  // primeiro capítulo com cartões
  if (!(_mat5Cards[_mat5Fc.cap] && _mat5Cards[_mat5Fc.cap].length)) {
    for (var c = 1; c <= _mat5CapMeta.length; c++) { if (_mat5Cards[c] && _mat5Cards[c].length) { _mat5Fc.cap = c; break; } }
  }
  // linha de capítulos: só os que têm cartões
  var row = document.getElementById('mat5-fc-cap-row');
  if (row) {
    var h = '';
    _mat5CapMeta.forEach(function(m) {
      var has = !!(_mat5Cards[m.n] && _mat5Cards[m.n].length);
      var color = _mat5CapColors[m.n] || '#516860';
      var isActive = _mat5Fc.cap === m.n;
      var activeStyle = isActive ? 'background:' + color + ';border-color:' + color + ';color:#fff' : '';
      var disabled = has ? '' : 'opacity:.45;cursor:not-allowed';
      var onclick = has ? ('mat5FcSelectCap(' + m.n + ',this)') : '';
      var title = has ? '' : ' title="Em preparação"';
      h += '<button class="resumo-cap-btn' + (isActive ? ' active' : '') + '" onclick="' + onclick + '" style="' + activeStyle + ';' + disabled + '"' + title + '>'
         + '<span class="resumo-cap-icon">' + m.icon + '</span>' + m.label + (has ? '' : ' ·') + '</button>';
    });
    row.innerHTML = h;
  }
  mat5FcSelectCap(_mat5Fc.cap, null);
}

function mat5FcSelectCap(cap, btn) {
  if (!(_mat5Cards[cap] && _mat5Cards[cap].length)) return;
  if (btn) _mat5SetActiveCapBtn('mat5-fc-cap-row', btn, cap);
  _mat5Fc.cap = cap;
  _mat5Fc.cards = _mat5Cards[cap].slice();
  _mat5Fc.idx = 0; _mat5Fc.flipped = false;
  _mat5PM(cap, 'flashcard');
  mat5FcRender();
}

function mat5FcRender() {
  var app = document.getElementById('mat5-fc-app');
  if (!app) return;
  var cards = _mat5Fc.cards;
  if (!cards.length) { app.innerHTML = '<p style="color:var(--ink4);padding:2rem;text-align:center">Sem flashcards para este capítulo.</p>'; return; }
  var card = cards[_mat5Fc.idx];
  var color = _mat5CapColors[_mat5Fc.cap] || '#516860';
  var pct = Math.round((_mat5Fc.idx + 1) / cards.length * 100);
  app.innerHTML =
    '<div class="card card-narrow">' +
      '<div class="flex items-center justify-between mb-3">' +
        '<span class="fc2-tag-pill" style="background:' + color + ';color:#fff">' + (card.tag || '') + '</span>' +
        '<span class="fc-counter">' + (_mat5Fc.idx + 1) + ' / ' + cards.length + '</span>' +
      '</div>' +
      '<div class="fc2-prog-track"><div class="fc2-prog-fill" style="width:' + pct + '%;background:' + color + '"></div></div>' +
      '<div onclick="mat5FcFlip()" class="fc2-card-inner" style="cursor:pointer;min-height:140px">' +
        '<div>' +
          '<p style="font-size:1.05rem;font-weight:600;color:var(--ink);line-height:1.4">' + (card.q || '') + '</p>' +
          '<p style="font-size:.9rem;color:' + color + ';margin-top:.75rem;line-height:1.5;display:' + (_mat5Fc.flipped ? 'block' : 'none') + '">' + (card.a || '') + '</p>' +
          '<p style="font-size:.75rem;color:var(--ink4);margin-top:.5rem">' + (_mat5Fc.flipped ? '' : 'Carrega para ver a resposta') + '</p>' +
        '</div>' +
      '</div>' +
      '<div class="flex flex-wrap gap-3 justify-center mt-5">' +
        '<button class="btn btn-ghost" onclick="mat5FcPrev()">← Anterior</button>' +
        '<button class="btn btn-primary" onclick="mat5FcFlip()">↕ Virar</button>' +
        '<button class="btn btn-ghost" onclick="mat5FcNext()">Seguinte →</button>' +
      '</div>' +
    '</div>';
}

function mat5FcFlip() { _mat5Fc.flipped = !_mat5Fc.flipped; mat5FcRender(); }
function mat5FcNext() { _mat5Fc.idx = (_mat5Fc.idx + 1) % (_mat5Fc.cards.length || 1); _mat5Fc.flipped = false; mat5FcRender(); }
function mat5FcPrev() { _mat5Fc.idx = (_mat5Fc.idx - 1 + (_mat5Fc.cards.length || 1)) % (_mat5Fc.cards.length || 1); _mat5Fc.flipped = false; mat5FcRender(); }

/* ════════════════════════════════════════════════════════════════
   SUB-MODO: TESTE CRONOMETRADO
   ════════════════════════════════════════════════════════════════ */
var _mat5Teste = { cap: 1, nivel: 'medio', qtd: 10, tempo: 600, exs: [], answered: {}, score: { correct: 0, total: 0 }, timer: null, restante: 0 };

function mat5TesteBuildNav() {
  if (!_mat5Gerador(_mat5Teste.cap)) _mat5Teste.cap = 1;
  _mat5BuildCapRow('mat5-teste-cap-row', _mat5Teste.cap, 'mat5TesteSelectCap');
  mat5TesteRenderConfig();
}

function mat5TesteSelectCap(cap, btn) {
  if (!_mat5Gerador(cap)) return;
  _mat5SetActiveCapBtn('mat5-teste-cap-row', btn, cap);
  _mat5Teste.cap = cap;
  mat5TesteRenderConfig();
}

function mat5TesteRenderConfig() {
  var app = document.getElementById('mat5-teste-app');
  if (!app) return;
  if (_mat5Teste.timer) { clearInterval(_mat5Teste.timer); _mat5Teste.timer = null; }
  app.innerHTML =
    '<div class="card">' +
      '<div class="card-title">Configurar teste</div>' +
      '<div class="flex flex-wrap gap-6 items-end">' +
        '<div><div class="label-small">Nível</div>' +
          '<div class="gen-level-group" id="mat5-teste-nivel">' +
            '<button class="gen-level-btn' + (_mat5Teste.nivel==='facil'?' active':'') + '" onclick="mat5TesteSetNivel(\'facil\',this)"><span class="status-dot status-dot--easy"></span> Fácil</button>' +
            '<button class="gen-level-btn' + (_mat5Teste.nivel==='medio'?' active':'') + '" onclick="mat5TesteSetNivel(\'medio\',this)"><span class="status-dot status-dot--medium"></span> Médio</button>' +
            '<button class="gen-level-btn' + (_mat5Teste.nivel==='dificil'?' active':'') + '" onclick="mat5TesteSetNivel(\'dificil\',this)"><span class="status-dot status-dot--hard"></span> Difícil</button>' +
          '</div></div>' +
        '<div><div class="label-small">N.º questões</div>' +
          '<select class="ai-select" id="mat5-teste-qtd"><option value="10">10</option><option value="15">15</option><option value="20">20</option></select></div>' +
        '<div><div class="label-small">Tempo</div>' +
          '<select class="ai-select" id="mat5-teste-tempo"><option value="600">10 min</option><option value="900">15 min</option><option value="1800">30 min</option></select></div>' +
        '<button class="btn btn-primary" onclick="mat5TesteStart()">▶ Iniciar teste</button>' +
      '</div>' +
    '</div>';
}

function mat5TesteSetNivel(nivel, btn) {
  _mat5Teste.nivel = nivel;
  var grp = document.getElementById('mat5-teste-nivel');
  if (grp) grp.querySelectorAll('.gen-level-btn').forEach(function(b){ b.classList.remove('active'); });
  if (btn) btn.classList.add('active');
}

function mat5TesteStart() {
  var gen = _mat5Gerador(_mat5Teste.cap); if (!gen) return;
  var qtdEl = document.getElementById('mat5-teste-qtd'), tempoEl = document.getElementById('mat5-teste-tempo');
  _mat5Teste.qtd = qtdEl ? parseInt(qtdEl.value) : 10;
  _mat5Teste.tempo = tempoEl ? parseInt(tempoEl.value) : 600;
  var nTemas = _mat5TemasCount[_mat5Teste.cap] || 1;
  var tipos = ['mc', 'fill', 'mc', 'vf', 'fill'];
  var exs = [];
  for (var i = 0; i < _mat5Teste.qtd; i++) {
    var ex = gen(String((i % nTemas) + 1), tipos[i % tipos.length], _mat5Teste.nivel);
    if (ex) exs.push(Object.assign({}, ex, { num: i + 1 }));
  }
  _mat5Teste.exs = exs; _mat5Teste.answered = {}; _mat5Teste.score = { correct: 0, total: 0 };
  _mat5Teste.restante = _mat5Teste.tempo;

  var app = document.getElementById('mat5-teste-app');
  var quizHTML = (typeof _capBuildQuizHTML === 'function') ? _capBuildQuizHTML(exs, 'm8teste', 'mat5TesteCheck') : '';
  app.innerHTML =
    '<div class="exam-progress-bar" style="position:sticky;top:0;z-index:5;background:var(--surface);padding:.75rem;border-radius:12px;display:flex;align-items:center;gap:1rem;flex-wrap:wrap">' +
      '<div style="font-family:\'Cormorant Garamond\',serif;font-size:1.8rem;font-weight:900" id="mat5-teste-timer">' + _mat5FmtTime(_mat5Teste.restante) + '</div>' +
      '<div style="font-size:.78rem;color:var(--ink3)">Respondidas: <span id="mat5-teste-answered">0 / ' + _mat5Teste.qtd + '</span></div>' +
      '<button class="btn btn-ghost ml-auto" onclick="mat5TesteFinish()">⏹ Terminar</button>' +
    '</div>' +
    '<div id="mat5-teste-questions" style="margin-top:1rem">' + quizHTML + '</div>';

  _mat5Teste.timer = setInterval(function() {
    _mat5Teste.restante--;
    var t = document.getElementById('mat5-teste-timer');
    if (t) t.textContent = _mat5FmtTime(_mat5Teste.restante);
    if (_mat5Teste.restante <= 0) mat5TesteFinish();
  }, 1000);
}

function _mat5FmtTime(s) {
  var m = Math.floor(s / 60), sec = s % 60;
  return (m < 10 ? '0' : '') + m + ':' + (sec < 10 ? '0' : '') + sec;
}

function mat5TesteCheck(qid, tipo, val, btn) {
  if (_mat5Teste.answered[qid]) return;
  if (typeof _capCheckAnswer !== 'function') return;
  var r = _capCheckAnswer(qid, tipo, val);
  if (!r) return;
  _mat5Teste.answered[qid] = true;
  if (r.correct) _mat5Teste.score.correct++;
  _mat5Teste.score.total++;
  if (typeof _capShowFeedback === 'function') _capShowFeedback(qid, r.correct, r.expl, val, btn);
  var a = document.getElementById('mat5-teste-answered');
  if (a) a.textContent = _mat5Teste.score.total + ' / ' + _mat5Teste.qtd;
  mat5SaveProgress(_mat5Teste.cap, r.correct);
  if (_mat5Teste.score.total >= _mat5Teste.qtd) setTimeout(mat5TesteFinish, 600);
}

function mat5TesteFinish() {
  if (_mat5Teste.timer) { clearInterval(_mat5Teste.timer); _mat5Teste.timer = null; }
  var app = document.getElementById('mat5-teste-app');
  if (!app) return;
  var total = _mat5Teste.qtd;
  var correct = _mat5Teste.score.correct;
  var pct = total > 0 ? Math.round(correct / total * 100) : 0;
  _mat5PM(_mat5Teste.cap, 'quiz', { pontuacao: correct, total: total });
  var nota = Math.round(correct / total * 20 * 10) / 10;
  var emoji = pct >= 90 ? '🏆' : pct >= 70 ? '⭐' : pct >= 50 ? '👍' : '📚';
  app.innerHTML =
    '<div style="text-align:center;padding:2.5rem 1rem">' +
      '<div style="font-size:3.5rem;margin-bottom:.75rem">' + emoji + '</div>' +
      '<div style="font-family:\'Cormorant Garamond\',serif;font-size:2.2rem;font-weight:900;color:var(--ink)">' + nota + ' / 20</div>' +
      '<div style="color:var(--ink3);margin:.5rem 0 1.5rem">' + correct + ' certas em ' + total + ' questões (' + pct + '%)</div>' +
      '<button class="btn btn-primary" onclick="mat5TesteRenderConfig()">↺ Novo teste</button>' +
    '</div>';
}

/* ════════════════════════════════════════════════════════════════
   SUB-MODO: JOGOS (reutiliza o motor genérico _j24AutoInit)
   ════════════════════════════════════════════════════════════════ */
var _mat5JogosInited = false;
function mat5JogosInit() {
  (function(){ var pj=document.getElementById('mat5p-jogos'); if(pj && !document.getElementById('mat5-jogos-atr')){ var d=document.createElement('div'); d.id='mat5-jogos-atr'; d.style.margin='0 0 .8rem'; if(pj.firstChild) pj.insertBefore(d,pj.firstChild); else pj.appendChild(d); } if(typeof Atribuir!=='undefined'&&Atribuir.montar) Atribuir.montar('mat5-jogos-atr',{curso:'mat5',cursoNome:'Matemática 5.º',tipo:'jogo',nivel:'',caps:_mat5CapMeta.map(function(mm){return {n:mm.n,label:mm.label};})}); })();
  _mat5PM(_mat5Prat.cap || 1, 'jogo');
  if (_mat5JogosInited) return;
  if (typeof _j24AutoInit === 'function') {
    // Regista o provedor de perguntas DESTE ano (matéria correta nos jogos)
    if (typeof _gRegisterProvider === 'function') {
      _gRegisterProvider('mat5-jogos-app', function (level) {
        var nCaps = _mat5CapMeta.length;
        for (var att = 0; att < 6; att++) {
          var cap = 1 + Math.floor(Math.random() * nCaps);
          var gen = _mat5Gerador(cap);
          var banco = (typeof _mat5Banco !== 'undefined' && _mat5Banco[cap]) ? _mat5Banco[cap] : null;
          var q = _jogoQFromGerador(gen, _mat5TemasCount[cap], banco, level);
          if (q) return q;
        }
        return null;
      });
    }
    _j24AutoInit('mat5-jogos-app', 'medio');
    _mat5JogosInited = true;
  } else {
    var app = document.getElementById('mat5-jogos-app');
    if (app) app.innerHTML = '<p style="color:var(--ink4);padding:2rem;text-align:center">Jogos indisponíveis (motor não carregado).</p>';
  }
}

/* ════════════════════════════════════════════════════════════════
   TAB PROGRESSO
   Lê edupt_mat5_capN (gravado por mat5SaveProgress). Mostra resumo
   global, stats, barras por capítulo, Relatório PDF e Limpar.
   ════════════════════════════════════════════════════════════════ */
function _mat5ProgGetCaps() {
  var out = [];
  var nCaps = _mat5CapMeta.length;
  for (var cap = 1; cap <= nCaps; cap++) {
    var correct = 0, total = 0;
    try {
      var d = JSON.parse(localStorage.getItem('edupt_mat5_cap' + cap) || '{}');
      if (d.sections) Object.keys(d.sections).forEach(function(k) {
        correct += (d.sections[k].correct || 0);
        total += (d.sections[k].total || 0);
      });
    } catch (e) {}
    out.push({ cap: cap, correct: correct, total: total, pct: total > 0 ? Math.round(correct / total * 100) : 0 });
  }
  return out;
}

function mat5RenderProgresso() {
  var el = document.getElementById('mat5-progresso-content');
  if (!el) return;
  var caps = _mat5ProgGetCaps();
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
     + '<button onclick="mat5ProgDownloadPDF()" style="font-family:inherit;font-size:.82rem;font-weight:700;color:#8b3a35;background:none;border:none;cursor:pointer;text-decoration:underline;padding:0">Guarda o relatório PDF</button> para o manteres.</span>'
     + '</div>';

  // Resumo global (gradiente terracota do 5.º ano)
  h += '<div style="background:var(--m5c1-base);border:1.5px solid var(--m5c1-mid);border-radius:16px;padding:1.1rem 1.25rem;margin-bottom:1.25rem;display:flex;align-items:center;gap:1rem;flex-wrap:wrap">'
     +   '<div style="width:52px;height:52px;border-radius:50%;background:var(--m5c1-mid);display:flex;align-items:center;justify-content:center;flex-shrink:0"><i class="ph ' + icon + '" style="font-size:1.4rem;color:#fff"></i></div>'
     +   '<div style="flex:1;min-width:180px">'
     +     '<div style="font-family:\'Cormorant Garamond\',serif;font-size:1.6rem;font-weight:900;color:var(--ink);line-height:1">' + (totalT > 0 ? globalPct + '<span style="font-size:1rem">%</span>' : '-') + '</div>'
     +     '<div style="font-size:.82rem;color:var(--ink2);margin-top:3px">' + msg + '</div>'
     +   '</div>'
     +   '<button class="btn btn-ghost" onclick="mat5ProgDownloadPDF()" style="font-size:.78rem;padding:7px 14px;display:inline-flex;align-items:center;gap:5px"><i class="ph ph-file-text"></i>Relatório PDF</button>'
     + '</div>';

  // XP + streak do ProgressManager (apenas dos capítulos do 5.º ano)
  var pmXp = 0, pmStreak = 0;
  if (typeof ProgressManager !== 'undefined') {
    try {
      var sum = ProgressManager.getSummary();
      pmStreak = sum.streak || 0;
      if (sum.caps) Object.keys(sum.caps).forEach(function(k) { if (k.indexOf('m5cap') === 0) pmXp += (sum.caps[k].xp || 0); });
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
    var m = _mat5CapMeta[c.cap - 1];
    var color = _mat5CapColors[c.cap] || '#516860';
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
      var mp = _mat5CapMeta[pior.cap - 1];
      var colorp = _mat5CapColors[pior.cap] || '#516860';
      h += '<div class="card mt-4" style="border-color:' + colorp + '">'
        + '<div class="card-title" style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:.5rem">'
        + '<span>🎯 Treino Direcionado</span></div>'
        + '<div style="font-size:.85rem;color:var(--ink2);margin:.3rem 0 .8rem">O capítulo onde tens mais a melhorar é <strong>' + mp.label + '</strong> (' + pior.pct + '%). Pratica mais um pouco para subir a tua taxa!</div>'
        + '<button class="btn btn-primary" onclick="mat5TreinarCap(' + pior.cap + ')" style="display:inline-flex;align-items:center;gap:6px"><i class="ph ph-target"></i> Treinar ' + mp.label + '</button>'
        + '</div>';
    }
  }

  // Última atualização
  h += '<div style="font-size:.72rem;color:var(--ink4);margin-top:1rem">Última atualização: ' + new Date().toLocaleString('pt-PT', { hour: '2-digit', minute: '2-digit', day: '2-digit', month: '2-digit' }) + '</div>';

  // Limpar
  h += '<div class="mt-4 flex flex-wrap gap-3"><button class="btn btn-ghost" onclick="mat5ProgReset()"><i class="ph ph-trash"></i> Limpar progresso</button></div>';

  el.innerHTML = h;
}

// Abre a tab Exercícios da Praticar já no capítulo indicado (treino direcionado).
function mat5TreinarCap(cap) {
  _mat5Prat.cap = cap;
  _mat5Prat.st = 0;
  mat5SwitchTab('exercicios', null);
}

function mat5ProgReset() {
  if (typeof window !== 'undefined' && window.confirm && !window.confirm('Limpar todo o progresso do 5.º ano? Esta ação não pode ser desfeita.')) return;
  for (var cap = 1; cap <= _mat5CapMeta.length; cap++) { try { localStorage.removeItem('edupt_mat5_cap' + cap); } catch (e) {} }
  // Remove só os capítulos do 5.º ano (m5cap*) do ProgressManager, preservando os outros anos.
  try {
    var raw = localStorage.getItem('edupt_progress_v2');
    if (raw) {
      var d = JSON.parse(raw);
      if (d.caps) { Object.keys(d.caps).forEach(function(k) { if (k.indexOf('m5cap') === 0) delete d.caps[k]; }); }
      localStorage.setItem('edupt_progress_v2', JSON.stringify(d));
    }
  } catch (e) {}
  mat5RenderProgresso();
  if (typeof eduToast === 'function') eduToast('Progresso do 5.º ano limpo.', 'ok');
}

function mat5ProgDownloadPDF() {
  var caps = _mat5ProgGetCaps();
  var totalC = 0, totalT = 0;
  caps.forEach(function(c) { totalC += c.correct; totalT += c.total; });
  var globalPct = totalT > 0 ? Math.round(totalC / totalT * 100) : 0;
  var rows = caps.map(function(c) {
    var m = _mat5CapMeta[c.cap - 1];
    return '<tr><td style="padding:6px 10px;border-bottom:1px solid #eee">' + m.label + '</td>'
      + '<td style="padding:6px 10px;border-bottom:1px solid #eee;text-align:center">' + (c.total > 0 ? c.correct + ' / ' + c.total : '-') + '</td>'
      + '<td style="padding:6px 10px;border-bottom:1px solid #eee;text-align:center">' + (c.total > 0 ? c.pct + '%' : '-') + '</td></tr>';
  }).join('');
  var html = '<div style="font-family:Arial,sans-serif;max-width:680px;margin:0 auto;padding:24px">'
    + '<h1 style="font-size:20px;margin:0 0 4px">Relatório de Progresso · Matemática 5.º Ano</h1>'
    + '<div style="color:#666;font-size:13px;margin-bottom:16px">3ponto14 · ' + new Date().toLocaleString('pt-PT', { day: '2-digit', month: '2-digit', year: 'numeric' }) + '</div>'
    + '<div style="background:#eef3f9;border:1px solid #5a7fa8;border-radius:8px;padding:12px 16px;margin-bottom:16px">'
    + '<strong>Taxa global:</strong> ' + (totalT > 0 ? globalPct + '%' : '-') + ' &nbsp;·&nbsp; ' + totalC + ' certas em ' + totalT + ' questões.</div>'
    + '<table style="width:100%;border-collapse:collapse;font-size:14px"><thead><tr style="background:#36527a;color:#fff">'
    + '<th style="padding:8px 10px;text-align:left">Capítulo</th><th style="padding:8px 10px">Certas</th><th style="padding:8px 10px">%</th></tr></thead>'
    + '<tbody>' + rows + '</tbody></table></div>';
  if (typeof htmlToPdfDownload === 'function') htmlToPdfDownload(html, 'progresso-mat5.pdf');
  else if (typeof eduToast === 'function') eduToast('Geração de PDF indisponível.', 'warn');
}

/* ════════════════════════════════════════════════════════════════
   TAB FICHAS - gerador rico (multi-capítulo), igual ao 7.º ano.
   Tipos: resumo teórico, exercícios, teste, minitestes, soluções.
   Seleção de vários capítulos; nível; nº de exercícios; PDF ou HTML.
   ════════════════════════════════════════════════════════════════ */
var _mat5gf = {
  caps: {},            // { cap: true } selecionados
  tipos: { resumo: true, exercicios: true, teste: true, minitestes: false, solucoes: true },
  dif: 'facil',
  qty: 10
};

// Constrói a lista de capítulos selecionáveis (só os com gerador).
function mat5FichasBuildNav() {
  if(typeof Atribuir!=='undefined'&&Atribuir.fixo) Atribuir.fixo('mat5-fichas-atr','mat5AtribuirFicha');
  var el = document.getElementById('mat5-fichas-caps');
  if (!el) return;
  // por defeito, seleciona o primeiro capítulo com gerador
  var temAlgum = false;
  for (var k in _mat5gf.caps) { if (_mat5gf.caps[k]) { temAlgum = true; break; } }
  var h = '';
  _mat5CapMeta.forEach(function(m) {
    var hasGen = !!_mat5Gerador(m.n);
    if (!hasGen) return;
    if (!temAlgum) { _mat5gf.caps[m.n] = true; temAlgum = true; } // 1.º disponível
    var sel = !!_mat5gf.caps[m.n];
    var color = _mat5CapColors[m.n] || '#516860';
    var style = sel ? 'background:' + color + ';border-color:' + color + ';color:#fff' : '';
    h += '<button class="gf-cap-btn' + (sel ? ' active' : '') + '" data-cap="' + m.n + '" onclick="mat5gfToggleCap(' + m.n + ',this)" style="' + style + '">' + m.icon + ' ' + m.label + '</button>';
  });
  el.innerHTML = h;
}

function mat5gfToggleCap(cap, btn) {
  _mat5gf.caps[cap] = !_mat5gf.caps[cap];
  var color = _mat5CapColors[cap] || '#516860';
  if (_mat5gf.caps[cap]) { btn.classList.add('active'); btn.style.background = color; btn.style.borderColor = color; btn.style.color = '#fff'; }
  else { btn.classList.remove('active'); btn.style.background = ''; btn.style.borderColor = ''; btn.style.color = ''; }
}

function mat5gfToggleType(btn) {
  var t = btn.getAttribute('data-type');
  _mat5gf.tipos[t] = !_mat5gf.tipos[t];
  btn.classList.toggle('active', _mat5gf.tipos[t]);
  var tick = btn.querySelector('.gf-tick'); if (tick) tick.textContent = _mat5gf.tipos[t] ? '✓' : '';
}

function mat5gfSetDif(btn) {
  _mat5gf.dif = btn.getAttribute('data-dif');
  var grp = document.getElementById('mat5-fichas-dif');
  if (grp) grp.querySelectorAll('.gf-dif-btn').forEach(function(b){ b.classList.remove('active'); });
  btn.classList.add('active');
}

function mat5gfSetQty(btn) {
  _mat5gf.qty = parseInt(btn.getAttribute('data-qty')) || 10;
  var grp = document.getElementById('mat5-fichas-qty');
  if (grp) grp.querySelectorAll('.gf-dif-btn').forEach(function(b){ b.classList.remove('active'); });
  btn.classList.add('active');
}

// Renderiza um bloco de exercícios (com ou sem espaço de resposta).
function _mat5gfExBloco(exs, startNum) {
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

function _mat5gfGenExs(cap, n) {
  var gen = _mat5Gerador(cap); if (!gen) return [];
  var nTemas = _mat5TemasCount[cap] || 1;
  var tipos = ['mc', 'fill', 'vf', 'fill', 'mc', 'mc'];
  var geradas = [], vistos = {};
  // gera até n questões DISTINTAS (evita enunciados repetidos na ficha)
  for (var i = 0, tent = 0; geradas.length < n && tent < n * 6; tent++) {
    var ex = gen(String((i % nTemas) + 1), tipos[i % tipos.length], _mat5gf.dif);
    i++;
    if (!ex) continue;
    var chave = String(ex.enun || '').replace(/<[^>]+>/g, '').trim();
    if (vistos[chave]) continue;
    vistos[chave] = 1;
    geradas.push(ex);
  }
  // mistura questões reais do banco (multi-passo, com contexto/figuras)
  var banco = (typeof _mat5Banco !== 'undefined' && _mat5Banco[cap]) ? _mat5Banco[cap] : [];
  if (banco.length && typeof _mixBancoGeradas === 'function') {
    return _mixBancoGeradas(banco, geradas, n, Math.min(Math.ceil(n / 3), banco.length), _mat5gf.dif);
  }
  return geradas;
}

function mat5gfGerar(formato) {
  // capítulos selecionados
  var capsSel = [];
  _mat5CapMeta.forEach(function(m) { if (_mat5gf.caps[m.n] && _mat5Gerador(m.n)) capsSel.push(m.n); });
  var status = document.getElementById('mat5-fichas-status');
  if (!capsSel.length) { if (status) status.textContent = 'Seleciona pelo menos um capítulo.'; return; }
  var algumTipo = _mat5gf.tipos.resumo || _mat5gf.tipos.exercicios || _mat5gf.tipos.teste || _mat5gf.tipos.minitestes;
  if (!algumTipo) { if (status) status.textContent = 'Seleciona pelo menos um tipo de conteúdo.'; return; }
  if (status) status.textContent = 'A gerar…';

  var difLabel = { facil: 'Fácil', medio: 'Médio', dificil: 'Difícil' }[_mat5gf.dif];
  var solucoes = []; // {num, ex} acumuladas para a secção final
  var solCounter = 0;

  var corpo = '';
  capsSel.forEach(function(cap, ci) {
    _mat5PM(cap, 'ficha'); // gerou ficha deste capítulo
    var m = _mat5CapMeta[cap - 1];
    var color = _mat5CapColors[cap] || '#36527a';
    corpo += '<div style="' + (ci > 0 ? 'page-break-before:always;' : '') + 'margin-bottom:6px">'
      + '<h2 style="font-size:16px;color:' + color + ';border-bottom:2px solid ' + color + ';padding-bottom:4px;margin:0 0 10px">' + cap + '. ' + m.label + '</h2>';

    // Resumo teórico (das flashcards)
    if (_mat5gf.tipos.resumo) {
      var cards = _mat5Cards[cap] || [];
      if (cards.length) {
        corpo += '<div style="margin-bottom:12px"><h3 style="font-size:13px;color:#444;margin:0 0 5px">Resumo teórico</h3>';
        cards.slice(0, 8).forEach(function(c) {
          corpo += '<div style="font-size:11.5px;margin-bottom:4px"><strong>' + c.q + '</strong> ' + c.a + (c.v ? '<div style="margin:3px 0">' + c.v + '</div>' : '') + '</div>';
        });
        corpo += '</div>';
      }
    }
    // Exercícios
    if (_mat5gf.tipos.exercicios) {
      var exs = _mat5gfGenExs(cap, _mat5gf.qty);
      corpo += '<div style="margin-bottom:12px"><h3 style="font-size:13px;color:#444;margin:0 0 5px">Exercícios</h3>'
        + _mat5gfExBloco(exs, solCounter + 1) + '</div>';
      exs.forEach(function(ex) { solCounter++; solucoes.push({ num: solCounter, ex: ex }); });
    }
    // Teste de avaliação (8 questões mistas)
    if (_mat5gf.tipos.teste) {
      var exsT = _mat5gfGenExs(cap, 8);
      corpo += '<div style="margin-bottom:12px"><h3 style="font-size:13px;color:#444;margin:0 0 5px">Teste de avaliação</h3>'
        + _mat5gfExBloco(exsT, solCounter + 1) + '</div>';
      exsT.forEach(function(ex) { solCounter++; solucoes.push({ num: solCounter, ex: ex }); });
    }
    // Minitestes (um por subtema, 4 questões cada)
    if (_mat5gf.tipos.minitestes) {
      var subt = _mat5Subtemas[cap] || [];
      var mapa = _mat5SubtemaTemas[cap] || {};
      corpo += '<div style="margin-bottom:12px"><h3 style="font-size:13px;color:#444;margin:0 0 5px">Minitestes</h3>';
      subt.forEach(function(st, si) {
        var temas = mapa[si + 1] || [String(si + 1)];
        var gen = _mat5Gerador(cap);
        var exsM = [];
        for (var q = 0; q < 4; q++) {
          var tema = temas[q % temas.length];
          var ex = gen(tema, (q % 2 === 0) ? 'mc' : 'fill', _mat5gf.dif);
          if (ex) exsM.push(ex);
        }
        corpo += '<div style="margin-bottom:8px"><div style="font-size:12px;font-weight:700;color:#555">Mini ' + (si + 1) + ' · ' + st + '</div>'
          + _mat5gfExBloco(exsM, solCounter + 1) + '</div>';
        exsM.forEach(function(ex) { solCounter++; solucoes.push({ num: solCounter, ex: ex }); });
      });
      corpo += '</div>';
    }
    corpo += '</div>';
  });

  // Secção de soluções
  var solHTML = '';
  if (_mat5gf.tipos.solucoes && solucoes.length) {
    var _lmS = (typeof _limpaMath === 'function') ? _limpaMath : function(x){ return x; };
    var fmS = (typeof formatMath === 'function') ? function(x){ return formatMath(_lmS(x)); } : function(x){ return _lmS(x); };
    var lst = solucoes.map(function(s) {
      return '<div style="font-size:11.5px;margin-bottom:7px;line-height:1.5;page-break-inside:avoid">'
        + '<strong>' + s.num + '.</strong> <strong style="color:#1a6b4a">' + fmS(String(s.ex.resposta)) + '</strong>'
        + (s.ex.expl ? '<br><span style="color:#555">' + fmS(s.ex.expl) + '</span>' : '') + '</div>';
    }).join('');
    solHTML = '<div style="page-break-before:always;padding-top:8px"><h2 style="font-size:16px;border-bottom:2px solid #36527a;padding-bottom:4px">Soluções</h2>' + lst + '</div>';
  }

  var nomesCaps = capsSel.map(function(c) { return _mat5CapMeta[c - 1].label; }).join(', ');
  var html = '<div style="font-family:Arial,sans-serif;max-width:740px;margin:0 auto;padding:24px;color:#222">'
    + '<div style="display:flex;justify-content:space-between;align-items:baseline;border-bottom:2px solid #36527a;padding-bottom:8px;margin-bottom:14px">'
    + '<div><h1 style="font-size:18px;margin:0">Ficha de Trabalho · Matemática 5.º Ano</h1>'
    + '<div style="font-size:11.5px;color:#666">' + nomesCaps + ' · Nível ' + difLabel + '</div></div>'
    + '<div style="font-size:11.5px;color:#888">3ponto14</div></div>'
    + '<div style="font-size:11.5px;color:#666;margin-bottom:12px">Nome: ____________________________  Data: ____ / ____ / ______</div>'
    + corpo + solHTML + '</div>';

  var _temasNomes = capsSel.map(function(c){ return _mat5CapMeta[c-1].label; });
  var fname = (typeof _nomeFicha === 'function') ? _nomeFicha('5', 'matematica', _temasNomes, formato) : ('ficha-mat5.' + (formato === 'html' ? 'html' : 'pdf'));
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
function _mat5Init() {
  if (typeof _addStatsTeoriaVisuais === 'function') _addStatsTeoriaVisuais(_mat5Cards[7], '#4a9e72'); // cap7 Dados
  if (typeof _addGeoTeoriaVisuais === 'function') _addGeoTeoriaVisuais(_mat5Cards[4], '#8a9e4a'); // cap4 Figuras
  // arranca na tab Teoria com o cap 1 selecionado
  mat5BuildResumoNav();
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _mat5Init);
else _mat5Init();

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
function _opts4_m5(correct, distractors) {
  // garante 4 opções únicas incluindo a correta
  var opts = [correct];
  for (var i = 0; i < distractors.length && opts.length < 4; i++) {
    if (opts.indexOf(distractors[i]) === -1) opts.push(distractors[i]);
  }
  var bump = 1;
  while (opts.length < 4) { var c = correct + bump; if (opts.indexOf(c) === -1) opts.push(c); bump++; }
  return shuffle_m81(opts.slice(0, 4)).map(String);
}

// ═══ CAP 1 · Números Naturais ═══
// Temas: 1 Múltiplos e divisores · 2 Potências/quadrados · 3 Expressões
function buildEx_m5c1(tema, tipo, dif) {
  tema = String(tema);
  var easy = (dif === 'facil'), hard = (dif === 'dificil');
  if (tema === '1') {
    var kind = rnd_m81(0, 1);
    if (kind === 0) {
      // é múltiplo?
      var base = [2, 3, 4, 5, 6, 10][rnd_m81(0, 5)];
      var ehMult = Math.random() < 0.5;
      var num = ehMult ? base * rnd_m81(2, 9) : base * rnd_m81(2, 9) + rnd_m81(1, base - 1);
      var realMult = (num % base === 0);
      return {
        enun: 'O número <strong>' + num + '</strong> é múltiplo de ' + base + '?',
        tipo: 'mc', opcoes: ['Sim', 'Não'], resposta: realMult ? 'Sim' : 'Não',
        expl: num + ' ÷ ' + base + (realMult ? ' = ' + (num / base) + ' (resto 0) → é múltiplo.' : ' não dá resto 0 → não é múltiplo.'),
        tema: 'T1 · Múltiplos'
      };
    }
    // qual NÃO é múltiplo / divisor
    var d = [2, 3, 4, 5][rnd_m81(0, 3)];
    var n3 = d * rnd_m81(3, 9);
    var menorD = _menorDivisor_m5(n3);
    return {
      enun: 'Qual é o menor divisor de ' + n3 + ' diferente de 1?',
      tipo: 'fill', resposta: String(menorD),
      expl: 'Procura-se o menor número (maior que 1) que divide ' + n3 + ' com resto 0. É ' + menorD + '.',
      tema: 'T1 · Divisores'
    };
  }
  if (tema === '2') {
    var kind2 = rnd_m81(0, 1);
    if (kind2 === 0) {
      var b = rnd_m81(2, easy ? 6 : 9);
      return {
        enun: 'Calcula o quadrado de ' + b + ' (ou seja, ' + b + '²).',
        tipo: 'fill', resposta: String(b * b),
        expl: b + '² = ' + b + ' × ' + b + ' = ' + (b * b) + '.',
        tema: 'T2 · Potências'
      };
    }
    var b2 = rnd_m81(2, 5);
    return {
      enun: 'Calcula ' + b2 + '³ (o cubo de ' + b2 + ').',
      tipo: 'fill', resposta: String(b2 * b2 * b2),
      expl: b2 + '³ = ' + b2 + ' × ' + b2 + ' × ' + b2 + ' = ' + (b2 * b2 * b2) + '.',
      tema: 'T2 · Potências'
    };
  }
  // tema 3 · expressões com prioridade
  var a = rnd_m81(2, 9), bb = rnd_m81(2, 9), c = rnd_m81(2, 6);
  var r = a + bb * c;
  return {
    enun: 'Calcula, respeitando a prioridade das operações: <strong>' + a + ' + ' + bb + ' × ' + c + '</strong>',
    tipo: 'fill', resposta: String(r),
    expl: 'Primeiro a multiplicação: ' + bb + ' × ' + c + ' = ' + (bb * c) + '. Depois soma: ' + a + ' + ' + (bb * c) + ' = ' + r + '.',
    tema: 'T3 · Expressões'
  };
}
function _menorDivisor_m5(n) { for (var i = 2; i <= n; i++) { if (n % i === 0) return i; } return n; }

// ═══ CAP 2 · Frações ═══
// Temas: 1 Equivalentes · 2 Comparar · 3 Somar/subtrair (mesmo denominador)
function buildEx_m5c2(tema, tipo, dif) {
  tema = String(tema);
  if (tema === '1') {
    var num = rnd_m81(1, 5), den = rnd_m81(num + 1, 8), k = rnd_m81(2, 4);
    return {
      enun: 'Completa a fração equivalente: <strong>' + num + '/' + den + ' = ?/' + (den * k) + '</strong>',
      tipo: 'fill', resposta: String(num * k),
      expl: 'Multiplica o numerador pelo mesmo número (' + k + '): ' + num + ' × ' + k + ' = ' + (num * k) + '. Logo ' + num + '/' + den + ' = ' + (num * k) + '/' + (den * k) + '.',
      tema: 'T1 · Equivalentes'
    };
  }
  if (tema === '2') {
    // comparar duas frações
    var den2 = rnd_m81(3, 9);
    var sameDen = Math.random() < 0.5;
    if (sameDen) {
      var n1 = rnd_m81(1, den2 - 1), n2; do { n2 = rnd_m81(1, den2 - 1); } while (n2 === n1);
      var maior = n1 > n2 ? n1 + '/' + den2 : n2 + '/' + den2;
      return {
        enun: 'Qual é a maior fração: <strong>' + n1 + '/' + den2 + '</strong> ou <strong>' + n2 + '/' + den2 + '</strong>?',
        tipo: 'mc', opcoes: shuffle_m81([n1 + '/' + den2, n2 + '/' + den2]), resposta: maior,
        expl: 'Com o mesmo denominador, a maior é a de maior numerador: ' + maior + '.',
        tema: 'T2 · Comparar'
      };
    }
    // mesmo numerador, denominadores diferentes — só frações próprias (num < denominador)
    var num2 = rnd_m81(1, 4), d1 = rnd_m81(num2 + 1, 6), d2; do { d2 = rnd_m81(num2 + 1, 8); } while (d2 === d1);
    var maior2 = d1 < d2 ? num2 + '/' + d1 : num2 + '/' + d2;
    return {
      enun: 'Qual é a maior fração: <strong>' + num2 + '/' + d1 + '</strong> ou <strong>' + num2 + '/' + d2 + '</strong>?',
      tipo: 'mc', opcoes: shuffle_m81([num2 + '/' + d1, num2 + '/' + d2]), resposta: maior2,
      expl: 'Com o mesmo numerador, a maior é a de MENOR denominador (partes maiores): ' + maior2 + '.',
      tema: 'T2 · Comparar'
    };
  }
  // tema 3 · somar/subtrair com mesmo denominador
  var den3 = rnd_m81(4, 10), x = rnd_m81(1, den3 - 2), y = rnd_m81(1, den3 - x - 1);
  var soma = Math.random() < 0.6;
  if (soma) {
    var r = reduce_m81(x + y, den3);
    return {
      enun: 'Calcula: <strong>' + x + '/' + den3 + ' + ' + y + '/' + den3 + '</strong> (fração irredutível)',
      tipo: 'fill_frac', resposta: fmtFrac_m81(r[0], r[1]),
      expl: 'Mesmo denominador: soma os numeradores → ' + (x + y) + '/' + den3 + (r[1] !== den3 ? ' = ' + fmtFrac_m81(r[0], r[1]) : '') + '.',
      tema: 'T3 · Adição'
    };
  }
  var big = Math.max(x, y) + 1, small = Math.min(x, y);
  var rr = reduce_m81(big - small, den3);
  return {
    enun: 'Calcula: <strong>' + big + '/' + den3 + ' − ' + small + '/' + den3 + '</strong> (fração irredutível)',
    tipo: 'fill_frac', resposta: fmtFrac_m81(rr[0], rr[1]),
    expl: 'Mesmo denominador: subtrai os numeradores → ' + (big - small) + '/' + den3 + (rr[1] !== den3 ? ' = ' + fmtFrac_m81(rr[0], rr[1]) : '') + '.',
    tema: 'T3 · Subtração'
  };
}

// ═══ CAP 3 · Decimais e Percentagens ═══
// Temas: 1 Comparar decimais · 2 Percentagens · 3 Operações com decimais
function buildEx_m5c3(tema, tipo, dif) {
  tema = String(tema);
  if (tema === '1') {
    var i1 = rnd_m81(0, 9), i2 = rnd_m81(0, 9), d1 = rnd_m81(0, 99), d2 = rnd_m81(0, 99);
    var n1 = i1 + d1 / 100, n2 = i2 + d2 / 100;
    while (Math.abs(n1 - n2) < 0.001) { d2 = rnd_m81(0, 99); n2 = i2 + d2 / 100; }
    var s1 = n1.toFixed(2).replace('.', ','), s2 = n2.toFixed(2).replace('.', ',');
    var sinal = n1 > n2 ? '>' : '<';
    return {
      enun: 'Completa com > ou <: <strong>' + s1 + ' ___ ' + s2 + '</strong>',
      tipo: 'mc', opcoes: ['>', '<'], resposta: sinal,
      expl: s1 + ' ' + sinal + ' ' + s2 + ' (compara a parte inteira e depois as casas decimais).',
      tema: 'T1 · Comparar Decimais'
    };
  }
  if (tema === '2') {
    var pcts = [10, 20, 25, 50, 75];
    var p = pcts[rnd_m81(0, pcts.length - 1)];
    var bases = [20, 40, 60, 80, 100, 200];
    var N = bases[rnd_m81(0, bases.length - 1)];
    var res = N * p / 100;
    return {
      enun: 'Calcula <strong>' + p + '% de ' + N + '</strong>.',
      tipo: 'fill', resposta: String(res),
      expl: p + '% de ' + N + ' = (' + p + ' ÷ 100) × ' + N + ' = ' + (p / 100) + ' × ' + N + ' = ' + res + '.',
      tema: 'T2 · Percentagens'
    };
  }
  // tema 3 · operações com decimais (soma/×10)
  var kind = rnd_m81(0, 1);
  if (kind === 0) {
    var a = (rnd_m81(10, 99) / 10), b = (rnd_m81(10, 99) / 10);
    var soma = Math.round((a + b) * 10) / 10;
    return {
      enun: 'Calcula: <strong>' + a.toString().replace('.', ',') + ' + ' + b.toString().replace('.', ',') + '</strong>',
      tipo: 'fill', resposta: soma.toString().replace('.', ','),
      expl: 'Alinha as vírgulas e soma: ' + soma.toString().replace('.', ',') + '.',
      tema: 'T3 · Operações'
    };
  }
  var dec = (rnd_m81(11, 99) / 10), mult = [10, 100][rnd_m81(0, 1)];
  var prod = Math.round(dec * mult * 100) / 100;
  return {
    enun: 'Calcula: <strong>' + dec.toString().replace('.', ',') + ' × ' + mult + '</strong>',
    tipo: 'fill', resposta: (prod % 1 === 0 ? String(prod) : prod.toString().replace('.', ',')),
    expl: 'Multiplicar por ' + mult + ' = mover a vírgula ' + (mult === 10 ? '1 casa' : '2 casas') + ' para a direita → ' + (prod % 1 === 0 ? prod : prod.toString().replace('.', ',')) + '.',
    tema: 'T3 · Operações'
  };
}

// ═══ CAP 4 · Figuras Geométricas ═══
// Temas: 1 Ângulos · 2 Triângulos (3.º ângulo) · 3 Perímetro
function buildEx_m5c4(tema, tipo, dif) {
  tema = String(tema);
  if (tema === '1') {
    var kind = rnd_m81(0, 1);
    if (kind === 0) {
      var ang = rnd_m81(10, 80);
      return {
        enun: 'Qual é o ângulo complementar de ' + ang + '°? (soma 90°)',
        tipo: 'fill', resposta: String(90 - ang),
        expl: 'Complementar = 90° − ' + ang + '° = ' + (90 - ang) + '°.',
        tema: 'T1 · Ângulos'
      };
    }
    var ang2 = rnd_m81(20, 160);
    return {
      enun: 'Qual é o ângulo suplementar de ' + ang2 + '°? (soma 180°)',
      tipo: 'fill', resposta: String(180 - ang2),
      expl: 'Suplementar = 180° − ' + ang2 + '° = ' + (180 - ang2) + '°.',
      tema: 'T1 · Ângulos'
    };
  }
  if (tema === '2') {
    var a1 = rnd_m81(30, 80), a2 = rnd_m81(30, 80);
    while (a1 + a2 >= 175) { a2 = rnd_m81(20, 70); }
    var a3 = 180 - a1 - a2;
    return {
      enun: 'Num triângulo, dois ângulos medem ' + a1 + '° e ' + a2 + '°. Quanto mede o terceiro?',
      tipo: 'fill', resposta: String(a3),
      expl: 'A soma dos ângulos internos é 180°: 180° − ' + a1 + '° − ' + a2 + '° = ' + a3 + '°.',
      tema: 'T2 · Triângulos'
    };
  }
  // tema 3 · perímetro
  var forma = rnd_m81(0, 2);
  if (forma === 0) {
    var lado = rnd_m81(3, 12);
    return {
      enun: 'Qual é o perímetro deste quadrado de lado ' + lado + ' cm?',
      visual: (typeof EduVisual !== 'undefined') ? EduVisual.retangulo(lado, lado, { compLabel: lado + ' cm', largLabel: lado + ' cm', color: '#8a9e4a' }) : '',
      tipo: 'fill', resposta: String(4 * lado),
      expl: 'Perímetro do quadrado = 4 × lado = 4 × ' + lado + ' = ' + (4 * lado) + ' cm.',
      tema: 'T3 · Perímetro'
    };
  }
  if (forma === 1) {
    var comp = rnd_m81(4, 12), larg = rnd_m81(2, comp - 1);
    return {
      enun: 'Qual é o perímetro deste retângulo de ' + comp + ' cm por ' + larg + ' cm?',
      visual: (typeof EduVisual !== 'undefined') ? EduVisual.retangulo(comp, larg, { compLabel: comp + ' cm', largLabel: larg + ' cm', color: '#8a9e4a' }) : '',
      tipo: 'fill', resposta: String(2 * (comp + larg)),
      expl: 'Perímetro = 2 × (comprimento + largura) = 2 × (' + comp + ' + ' + larg + ') = ' + (2 * (comp + larg)) + ' cm.',
      tema: 'T3 · Perímetro'
    };
  }
  var l = rnd_m81(3, 10);
  return {
    enun: 'Qual é o perímetro de um triângulo equilátero de lado ' + l + ' cm?',
    tipo: 'fill', resposta: String(3 * l),
    expl: 'Perímetro = 3 × lado = 3 × ' + l + ' = ' + (3 * l) + ' cm.',
    tema: 'T3 · Perímetro'
  };
}

// ═══ CAP 5 · Sólidos Geométricos ═══
// Temas: 1 Faces/vértices/arestas · 2 Pirâmides e prismas
function buildEx_m5c5(tema, tipo, dif) {
  tema = String(tema);
  var solidos = [
    { nome: 'cubo', f: 6, v: 8, a: 12 },
    { nome: 'paralelepípedo', f: 6, v: 8, a: 12 },
    { nome: 'prisma triangular', f: 5, v: 6, a: 9 },
    { nome: 'pirâmide quadrangular', f: 5, v: 5, a: 8 },
    { nome: 'pirâmide triangular (tetraedro)', f: 4, v: 4, a: 6 }
  ];
  if (tema === '1') {
    var s = solidos[rnd_m81(0, solidos.length - 1)];
    var prop = ['faces', 'vértices', 'arestas'][rnd_m81(0, 2)];
    var val = prop === 'faces' ? s.f : prop === 'vértices' ? s.v : s.a;
    // concordância: "vértices" é masculino ("Quantos"); pirâmide é feminino ("uma")
    var quant = (prop === 'vértices') ? 'Quantos' : 'Quantas';
    var artigo = (s.nome.indexOf('pirâmide') === 0) ? 'uma' : 'um';
    return {
      enun: quant + ' <strong>' + prop + '</strong> tem ' + artigo + ' ' + s.nome + '?',
      tipo: 'fill', resposta: String(val),
      expl: artigo.charAt(0).toUpperCase() + artigo.slice(1) + ' ' + s.nome + ' tem ' + s.f + ' faces, ' + s.v + ' vértices e ' + s.a + ' arestas.',
      tema: 'T1 · Faces/Vértices/Arestas'
    };
  }
  // tema 2 · pirâmides (faces/vértices a partir da base)
  var lados = rnd_m81(3, 6);
  var nomes = { 3: 'triangular', 4: 'quadrangular', 5: 'pentagonal', 6: 'hexagonal' };
  var pergFaces = Math.random() < 0.5;
  if (pergFaces) {
    return {
      enun: 'Quantas faces tem uma pirâmide ' + nomes[lados] + ' (base com ' + lados + ' lados)?',
      tipo: 'fill', resposta: String(lados + 1),
      expl: 'Uma pirâmide tem (nº de lados da base) faces laterais + 1 base = ' + lados + ' + 1 = ' + (lados + 1) + ' faces.',
      tema: 'T2 · Pirâmides'
    };
  }
  return {
    enun: 'Quantos vértices tem uma pirâmide ' + nomes[lados] + ' (base com ' + lados + ' lados)?',
    tipo: 'fill', resposta: String(lados + 1),
    expl: 'Uma pirâmide tem (nº de vértices da base) + 1 (o topo) = ' + lados + ' + 1 = ' + (lados + 1) + ' vértices.',
    tema: 'T2 · Pirâmides'
  };
}

// ═══ CAP 6 · Sequências ═══
// Temas: 1 Termo seguinte · 2 Lei de formação (termo de ordem n)
function buildEx_m5c6(tema, tipo, dif) {
  tema = String(tema);
  if (tema === '1') {
    var op = rnd_m81(0, 2);
    var a1 = rnd_m81(1, 9);
    if (op === 0) { // somar r
      var r = rnd_m81(2, 6);
      var seq = [a1, a1 + r, a1 + 2 * r, a1 + 3 * r];
      return {
        enun: 'Qual é o próximo termo da sequência: <strong>' + seq.join(', ') + ', …</strong>?',
        tipo: 'fill', resposta: String(a1 + 4 * r),
        expl: 'A regra é somar ' + r + ': ' + (a1 + 3 * r) + ' + ' + r + ' = ' + (a1 + 4 * r) + '.',
        tema: 'T1 · Termo Seguinte'
      };
    }
    if (op === 1) { // subtrair r
      var r2 = rnd_m81(2, 5), start = rnd_m81(20, 40);
      var seq2 = [start, start - r2, start - 2 * r2, start - 3 * r2];
      return {
        enun: 'Qual é o próximo termo da sequência: <strong>' + seq2.join(', ') + ', …</strong>?',
        tipo: 'fill', resposta: String(start - 4 * r2),
        expl: 'A regra é subtrair ' + r2 + ': ' + (start - 3 * r2) + ' − ' + r2 + ' = ' + (start - 4 * r2) + '.',
        tema: 'T1 · Termo Seguinte'
      };
    }
    // multiplicar por 2
    var seq3 = [a1, a1 * 2, a1 * 4, a1 * 8];
    return {
      enun: 'Qual é o próximo termo da sequência: <strong>' + seq3.join(', ') + ', …</strong>?',
      tipo: 'fill', resposta: String(a1 * 16),
      expl: 'A regra é multiplicar por 2: ' + (a1 * 8) + ' × 2 = ' + (a1 * 16) + '.',
      tema: 'T1 · Termo Seguinte'
    };
  }
  // tema 2 · termo de ordem n (regra somar r): an = a1 + (n-1)*r
  var a1b = rnd_m81(1, 8), rb = rnd_m81(2, 5), ordem = rnd_m81(6, 12);
  var termo = a1b + (ordem - 1) * rb;
  var seqb = [a1b, a1b + rb, a1b + 2 * rb, a1b + 3 * rb];
  return {
    enun: 'Na sequência <strong>' + seqb.join(', ') + ', …</strong> (regra: somar ' + rb + '), qual é o ' + ordem + '.º termo?',
    tipo: 'fill', resposta: String(termo),
    expl: 'Termo = 1.º termo + (ordem − 1) × ' + rb + ' = ' + a1b + ' + ' + (ordem - 1) + ' × ' + rb + ' = ' + termo + '.',
    tema: 'T2 · Lei de Formação'
  };
}

// ═══ CAP 7 · Organização de Dados ═══
// Temas: 1 Ler gráficos (interpretar) · 2 Frequência (fração) · 3 Média
function buildEx_m5c7(tema, tipo, dif) {
  tema = String(tema);
  if (tema === '1') {
    // Ler um GRÁFICO DE BARRAS real (SVG): máximo, mínimo ou total
    var cats = ['Azul', 'Verde', 'Vermelho', 'Amarelo'];
    var _hiV5 = (dif === 'dificil') ? 45 : (dif === 'medio') ? 25 : 12;
    var vals = []; for (var i = 0; i < 4; i++) vals.push(rnd_m81(2, _hiV5));
    var dataG = cats.map(function (c, k) { return { label: c, value: vals[k] }; });
    var modo = rnd_m81(0, 2); // 0 máximo, 1 mínimo, 2 total
    var maxV = Math.max.apply(null, vals), minV = Math.min.apply(null, vals);
    var totalV = vals.reduce(function (s, v) { return s + v; }, 0);
    var perg, resp, expl;
    if (modo === 0) { perg = 'Qual é a cor preferida (a barra mais alta) - quantos votos tem?'; resp = maxV; expl = 'A barra mais alta tem ' + maxV + ' votos.'; }
    else if (modo === 1) { perg = 'Qual é a cor menos votada (a barra mais baixa) - quantos votos tem?'; resp = minV; expl = 'A barra mais baixa tem ' + minV + ' votos.'; }
    else { perg = 'Quantas pessoas foram inquiridas ao todo (soma de todas as barras)?'; resp = totalV; expl = 'Soma das barras: ' + vals.join(' + ') + ' = ' + totalV + '.'; }
    return {
      enun: 'O gráfico mostra a cor preferida de um grupo de alunos. ' + perg,
      visual: (typeof EduVisual !== 'undefined') ? EduVisual.barras(dataG, '#4a9e72') : '',
      tipo: 'fill', resposta: String(resp),
      expl: expl,
      tema: 'T1 · Ler Gráficos'
    };
  }
  if (tema === '2') {
    var total = [10, 20, 25, 50][rnd_m81(0, 3)];
    var fav = rnd_m81(1, total - 1);
    var r = reduce_m81(fav, total);
    return {
      enun: 'Num inquérito a ' + total + ' pessoas, ' + fav + ' escolheram futebol. Que fração (irredutível) representa?',
      tipo: 'fill_frac', resposta: fmtFrac_m81(r[0], r[1]),
      expl: 'Fração = ' + fav + '/' + total + ' = ' + fmtFrac_m81(r[0], r[1]) + '.',
      tema: 'T2 · Frequência'
    };
  }
  // tema 3 · média (inteira) - por vezes a partir de um gráfico
  var arr; var s;
  do { arr = []; for (var j = 0; j < 4; j++) arr.push(rnd_m81(2, 20)); s = arr.reduce(function (acc, v) { return acc + v; }, 0); } while (s % 4 !== 0);
  if (typeof EduVisual !== 'undefined' && Math.random() < 0.4) {
    var dias = ['Seg', 'Ter', 'Qua', 'Qui'];
    var dataM = dias.map(function (d, k) { return { label: d, value: arr[k] }; });
    return {
      enun: 'O gráfico mostra os golos marcados em cada dia. Qual é a <strong>média</strong> diária?',
      visual: EduVisual.barras(dataM, '#4a9e72'),
      tipo: 'fill', resposta: String(s / 4),
      expl: 'Média = (' + arr.join(' + ') + ') ÷ 4 = ' + s + ' ÷ 4 = ' + (s / 4) + '.',
      tema: 'T3 · Média'
    };
  }
  return {
    enun: 'Calcula a média de: <strong>' + arr.join(', ') + '</strong>',
    tipo: 'fill', resposta: String(s / 4),
    expl: 'Média = (' + arr.join(' + ') + ') ÷ 4 = ' + s + ' ÷ 4 = ' + (s / 4) + '.',
    tema: 'T3 · Média'
  };
}

/* ════════════════════════════════════════════════════════════════
   BANCO DE QUESTÕES (contexto/problema) - Matemática · 5.º ano
   ════════════════════════════════════════════════════════════════ */
var _mat5Banco = {
  1: [ // Números Naturais
    { t: '1', tipo: 'fill', enun: 'Uma carteira de cromos tem 5 cromos. Quantos cromos há em 23 carteiras?', resposta: '115', expl: '23 × 5 = 115 cromos.', tema: 'T1 · Múltiplos' },
    { t: '1', tipo: 'mc', enun: 'Qual é o número compreendido entre 50 e 60 que é múltiplo de 6, de 10 e de 12 ao mesmo tempo?', opcoes: ['60', '54', '50', '56'], resposta: '60', expl: 'm.m.c.(6,10,12) = 60. O único entre 50 e 60 (inclusive) é 60.', tema: 'T1 · Múltiplos' },
    { t: '2', tipo: 'fill', enun: 'O Tomás guardou os seus 24 berlindes em caixas iguais, com 4 berlindes cada. Quantas caixas usou?', resposta: '6', expl: '24 ÷ 4 = 6 caixas.', tema: 'T2 · Potências' },
    { t: '3', tipo: 'fill', enun: 'Numa expressão, calcula 5 + 3 × 4 (respeita a prioridade das operações).', resposta: '17', expl: 'Primeiro 3×4 = 12; depois 5 + 12 = 17.', tema: 'T3 · Expressões' }
  ],
  2: [ // Frações
    { t: '2', tipo: 'mc', enun: 'A Maria comeu 2/8 de uma piza e o João comeu 3/8. Que fração da piza comeram juntos?', opcoes: ['5/8', '5/16', '1/8', '6/8'], resposta: '5/8', expl: 'Mesmo denominador: 2/8 + 3/8 = 5/8.', tema: 'T2 · Adição' },
    { t: '1', tipo: 'fill', enun: 'Simplifica a fração 9/12 (escreve no formato a/b).', resposta: '3/4', expl: 'Divide por 3: 9/12 = 3/4.', tema: 'T1 · Equivalentes' },
    { t: '3', tipo: 'mc', enun: 'Numa turma, 3/5 dos alunos têm cão. Que fração NÃO tem cão?', opcoes: ['2/5', '3/5', '1/5', '5/5'], resposta: '2/5', expl: 'O todo é 5/5. 5/5 − 3/5 = 2/5 não têm cão.', tema: 'T3 · Subtração' }
  ],
  3: [ // Decimais e Percentagens
    { t: '2', tipo: 'fill', enun: 'Um casaco custa 80 € e tem 25% de desconto. Quanto se poupa (em €)?', resposta: '20', expl: '25% de 80 = 0,25 × 80 = 20 €.', tema: 'T2 · Percentagens' },
    { t: '3', tipo: 'fill', enun: 'A Rita comprou 1,5 kg de maçãs a 2 € o quilo. Quanto pagou (em €)?', resposta: '3', expl: '1,5 × 2 = 3 €.', tema: 'T3 · Operações' },
    { t: '1', tipo: 'mc', enun: 'Qual é maior?', opcoes: ['0,7', '0,68', '0,7 e 0,68 são iguais', '0,07'], resposta: '0,7', expl: '0,7 = 0,70 > 0,68.', tema: 'T1 · Comparar Decimais' }
  ],
  4: [ // Figuras Geométricas
    { t: '2', tipo: 'fill', enun: 'Num triângulo, dois ângulos medem 50° e 60°. Quanto mede o terceiro? (em graus)', resposta: '70', expl: '180° − 50° − 60° = 70°.', tema: 'T2 · Triângulos' },
    { t: '3', tipo: 'fill', enun: 'Uma horta retangular tem 8 m de comprimento e 5 m de largura. Quantos metros de rede são precisos para a cercar (perímetro)?', resposta: '26', expl: 'Perímetro = 2 × (8 + 5) = 26 m.', tema: 'T3 · Perímetro' },
    { t: '1', tipo: 'fill', enun: 'Qual é o ângulo complementar de 35°? (em graus)', resposta: '55', expl: '90° − 35° = 55°.', tema: 'T1 · Ângulos' }
  ],
  5: [ // Sólidos Geométricos
    { t: '1', tipo: 'fill', enun: 'Quantas arestas tem um cubo?', resposta: '12', expl: 'O cubo tem 12 arestas (e 6 faces, 8 vértices).', tema: 'T1 · Faces/Vértices/Arestas' },
    { t: '2', tipo: 'fill', enun: 'Uma pirâmide tem base quadrada. Quantas faces tem ao todo?', resposta: '5', expl: '4 faces laterais (triângulos) + 1 base = 5 faces.', tema: 'T2 · Pirâmides' }
  ],
  6: [ // Sequências
    { t: '1', tipo: 'fill', enun: 'Observa a sequência 4, 7, 10, 13, … Qual é o termo seguinte?', resposta: '16', expl: 'Regra: somar 3 → 13 + 3 = 16.', tema: 'T1 · Termo Seguinte' },
    { t: '2', tipo: 'fill', enun: 'Numa sequência que começa em 2 e soma sempre 5, qual é o 6.º termo?', resposta: '27', expl: '2 + 5×(6−1) = 2 + 25 = 27.', tema: 'T2 · Lei de Formação' }
  ],
  7: [ // Organização de Dados
    { t: '3', tipo: 'fill', enun: 'As idades de 4 amigos são 10, 11, 12 e 15 anos. Qual é a média (em anos)?', resposta: '12', expl: '(10+11+12+15)/4 = 48/4 = 12.', tema: 'T3 · Média' },
    { t: '2', tipo: 'fill_frac', enun: 'Num inquérito a 20 alunos, 8 preferem futebol. Que fração (irredutível) representa?', resposta: '2/5', expl: '8/20 = 2/5.', tema: 'T2 · Frequência' }
  ]
};
/* atribuir: deep-link mat5 */
function _mat5DeepLinkAuto(){ try{ var p=new URLSearchParams(window.location.search); if(p.get('abrir')==='fichas'){ var cs=(p.get('caps')||'').split(',').filter(Boolean); if(_mat5gf){ _mat5gf.caps={}; cs.forEach(function(n){ _mat5gf.caps[parseInt(n,10)]=true; }); if(p.get('dif')) _mat5gf.dif=p.get('dif'); } setTimeout(function(){ mat5SwitchTab('fichas',null); },350); return; }
    if(p.get('abrir')==='jogos'){ var jc=parseInt(p.get('cap'),10); if(jc&&_mat5Prat) _mat5Prat.cap=jc; setTimeout(function(){ mat5SwitchTab('jogos',null); },350); return; }
    if(p.get('abrir')!=='praticar')return; var cap=parseInt(p.get('cap'),10)||1, st=parseInt(p.get('st'),10)||0, nivel=p.get('nivel')||'medio'; _mat5Prat.cap=cap; _mat5Prat.st=st; _mat5Prat.nivel=nivel; setTimeout(function(){ mat5SwitchTab('exercicios',null); if(typeof mat5GerarExercicios==='function') mat5GerarExercicios(); },350); }catch(e){} }
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',function(){setTimeout(_mat5DeepLinkAuto,300);});else setTimeout(_mat5DeepLinkAuto,300);

function mat5AtribuirFicha(){
  var caps=[]; _mat5CapMeta.forEach(function(m){ if(_mat5gf.caps[m.n]) caps.push(m.n); });
  if(!caps.length){ var st=document.getElementById('mat5-fichas-status'); if(st) st.textContent='Escolhe pelo menos um capítulo para atribuir.'; return null; }
  var nomes=caps.map(function(n){ var mm=_mat5CapMeta[n-1]||{}; return mm.label||('Cap. '+n); });
  return { curso:'mat5', cursoNome:'Matemática 5.º', tema:caps.join('.'), temaNome:nomes.join(', '), sub:'', subNome:'', tipo:'ficha', nivel:_mat5gf.dif };
}
