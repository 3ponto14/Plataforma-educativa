/* ── Block 1 (from line 807) ── */
// ═══ MAT7 HUB subtema data ═══
var _mat7Subtemas = {
  1: ['Conjunto ℤ', 'Valor absoluto e simétrico', 'Adição de inteiros', 'Subtração de inteiros', 'Expressões com parênteses'],
  2: ['Comparação e ordenação', 'Adição e subtração de frações', 'Percentagens', 'Potências', 'Notação científica'],
  3: ['Ângulos internos de polígonos', 'Triângulos e congruência', 'Semelhança de triângulos', 'Áreas de figuras planas', 'Circunferência'],
  4: ['Sequências e termo geral', 'Expressões algébricas', 'Simplificação', 'Equações do 1.º grau', 'Inequações'],
  5: ['Sequências e Termo Geral', 'Problemas com Sequências'],
  6: ['Referencial Cartesiano', 'Conceito de Função', 'Representação Gráfica', 'Formas de Representar', 'Proporcionalidade Direta', 'Gráficos em Contexto Real'],
  7: ['Figuras Semelhantes', 'Polígonos Semelhantes', 'Homotetia', 'Semelhança de Triângulos', 'Perímetros e Áreas', 'Poliedros e Euler'],
  8: ['População e Amostra', 'Mediana, Média e Moda', 'Representações Gráficas', 'Probabilidade', 'Probabilidade Composta']
};

/* ═══ Flashcards/teoria próprias do mat7 (portadas dos cap1-8) ═══
   Formato {tag,q,a}, igual ao _mat8Cards. Conteúdo já validado. */
var _mat7Cards = {
  1: [
  { st: 1, tag:'Definição', q:'O que são os números inteiros (ℤ)?', a:'ℤ = {…, −3, −2, −1, 0, 1, 2, 3, …} todos os números inteiros positivos, negativos e o zero.'},
  { st: 1, tag:'Hierarquia', q:'Qual a relação entre ℕ e ℤ?', a:'ℕ ⊂ ℤ. Todos os naturais são inteiros, mas nem todos os inteiros são naturais (ex: −5 ∈ ℤ mas −5 ∉ ℕ).'},
  { st: 1, tag:'Definição', q:'O que é ℤ⁺ e ℤ⁻?', a:'ℤ⁺ = {1, 2, 3, …} inteiros positivos. ℤ⁻ = {…, −3, −2, −1} inteiros negativos. O 0 não pertence a nenhum deles.'},
  { st: 2, tag:'Definição', q:'O que é o valor absoluto |a|?', a:'|a| é a distância de a ao zero na reta numérica. |a| ≥ 0 sempre. Exemplo: |−5| = 5, |3| = 3.'},
  { st: 2, tag:'Regra', q:'Como calcular |a| para a < 0?', a:'Se a < 0, então |a| = −a (inverte o sinal). Exemplo: |−7| = −(−7) = 7.'},
  { st: 2, tag:'Definição', q:'O que é o simétrico de a?', a:'O simétrico de a é −a (sinal oposto). a + (−a) = 0. Exemplo: simétrico de 5 é −5; simétrico de −3 é 3.'},
  { st: 3, tag:'Regra', q:'Adição: mesmos sinais', a:'Somam-se os valores absolutos e conserva-se o sinal comum. Ex: (−3) + (−4) = −7.'},
  { st: 3, tag:'Regra', q:'Adição: sinais diferentes', a:'Subtrai-se o menor valor absoluto do maior e usa-se o sinal do maior. Ex: (−5) + 3 = −2.'},
  { st: 4, tag:'Regra', q:'Como subtrair inteiros?', a:'a − b = a + (−b). Troca-se a subtração por adição do simétrico. Ex: 4 − (−3) = 4 + 3 = 7.'},
  { st: 1, tag:'Regra', q:'Regra do sinal: +(+a)', a:'+(+a) = +a. O sinal mantém-se. Ex: +(+5) = 5.'},
  { st: 1, tag:'Regra', q:'Regra do sinal: −(−a)', a:'−(−a) = +a. Dois sinais iguais dão +. Ex: −(−5) = +5.'},
  { st: 5, tag:'Regra', q:'Regra do sinal: −(+a)', a:'−(+a) = −a. Dois sinais diferentes dão −. Ex: −(+5) = −5.'},
  { st: 5, tag:'Regra', q:'Como retirar parênteses precedidos de −?', a:'Invertem-se todos os sinais dentro. Ex: −(3 − 5 + 2) = −3 + 5 − 2.'},
  { st: 5, tag:'Propriedade', q:'Qual a ordem para retirar parênteses aninhados?', a:'Sempre de dentro para fora: primeiro ( ), depois [ ], por fim { }.'},
  { st: 5, tag:'Exemplo', q:'Calcula: −[5 − (3 − 7)]', a:'= −[5 − (−4)] = −[5 + 4] = −[9] = −9'},
  { st: 3, tag:'Exemplo', q:'Calcula: (−8) + (+3)', a:'= −8 + 3 = −5 (sinais diferentes, |−8| > |3|, usa-se −)'},
  { st: 4, tag:'Exemplo', q:'Calcula: (−4) − (−6)', a:'= (−4) + 6 = +2'},
  { st: 1, tag:'Exemplo', q:'Ordena por ordem crescente: 3, −5, 0, −2, 7', a:'−5 < −2 < 0 < 3 < 7'},
  { st: 2, tag:'Exemplo', q:'Calcula: |−9| − |4|', a:'= 9 − 4 = 5'},
  { st: 3, tag:'Síntese', q:'Quando é que a + b < a?', a:'Quando b < 0 (b é negativo). Somar um número negativo diminui o resultado.'},
  { st: 1, tag:'Notação', q:'O que significam os símbolos ∈ e ∉?', a:'∈ significa "pertence a" e ∉ significa "não pertence a". Ex: −3 ∈ ℤ⁻ (−3 pertence aos inteiros negativos) e −3 ∉ ℕ (−3 não pertence aos naturais).'},
  { st: 1, tag:'Notação', q:'O que significam ⊂ e ⊄?', a:'⊂ significa "está contido em" (subconjunto de). ⊄ significa "não está contido em". Ex: ℕ ⊂ ℤ (os naturais estão contidos nos inteiros), mas ℤ ⊄ ℕ.'},
  { st: 3, tag:'Propriedade', q:'Qual é a propriedade comutativa da adição?', a:'a + b = b + a. A ordem das parcelas não altera a soma. Ex: (−3) + 5 = 5 + (−3) = 2.'},
  { st: 3, tag:'Propriedade', q:'Qual é a propriedade associativa da adição?', a:'(a + b) + c = a + (b + c). O agrupamento das parcelas não altera a soma. Ex: [(−2) + 3] + (−1) = (−2) + [3 + (−1)] = 0.'},
  { st: 3, tag:'Propriedade', q:'O que é o elemento neutro da adição?', a:'O 0 é o elemento neutro da adição: a + 0 = 0 + a = a. Somar zero não altera o número.'},
  { st: 2, tag:'Propriedade', q:'O que é o elemento simétrico de um inteiro a?', a:'O simétrico de a é −a, tal que a + (−a) = 0. Ex: simétrico de 7 é −7; simétrico de −4 é 4.'},
],
  2: [
  { st: 1, tag:'Definição',q:'O que é um número racional?',a:'Todo o número que pode ser escrito como p/q, com p,q ∈ ℤ e q ≠ 0. Exemplos: ½, −¾, 0,3, 5.'},
  { st: 1, tag:'Hierarquia',q:'Qual a relação entre ℕ, ℤ e ℚ?',a:'ℕ ⊂ ℤ ⊂ ℚ. Todos os naturais são inteiros e todos os inteiros são racionais.'},
  { st: 1, tag:'Definição',q:'O que é ℚ⁺ e ℚ⁻?',a:'ℚ⁺ são os racionais positivos (>0). ℚ⁻ são os racionais negativos (<0). ℚ₀⁺ inclui o zero.'},
  { st: 1, tag:'Regra',q:'Como arredondar 2/3 às décimas?',a:'2/3 = 0,666… → às décimas: 0,7 (por excesso, pois o algarismo seguinte é 6 ≥ 5).'},
  { st: 1, tag:'Regra',q:'Como comparar −½ e −⅓?',a:'Reduz ao mesmo denominador: −3/6 vs −2/6. Como −3 < −2, temos −½ < −⅓.'},
  { st: 2, tag:'Regra',q:'Como somar frações de denominadores diferentes?',a:'Calcular o mmc dos denominadores, converter, e somar os numeradores. Ex: ½ + ⅓ = 3/6 + 2/6 = 5/6.'},
  { st: 3, tag:'Fórmula',q:'Como calcular p% de N?',a:'p% de N = (p/100) × N. Exemplo: 20% de 150 = 0,20 × 150 = 30.'},
  { st: 3, tag:'Fórmula',q:'Fórmula para aumento de p%',a:'Valor final = Valor inicial × (1 + p/100). Aumento de 15%: multiplica por 1,15.'},
  { st: 3, tag:'Fórmula',q:'Fórmula para desconto de p%',a:'Valor final = Valor inicial × (1 − p/100). Desconto de 20%: multiplica por 0,80.'},
  { st: 3, tag:'Fórmula',q:'Como calcular a % de variação?',a:'% var = (Vf − Vi) / Vi × 100. Se Vf < Vi, é desconto; se Vf > Vi, é aumento.'},
  { st: 4, tag:'Propriedade',q:'Produto de potências de mesma base',a:'aᵐ × aⁿ = aᵐ⁺ⁿ. Exemplo: 2³ × 2⁵ = 2⁸.'},
  { st: 4, tag:'Propriedade',q:'Quociente de potências de mesma base',a:'aᵐ ÷ aⁿ = aᵐ⁻ⁿ. Exemplo: 10⁷ ÷ 10³ = 10⁴.'},
  { st: 5, tag:'Definição',q:'O que é notação científica?',a:'Um número em notação científica tem a forma a × 10ⁿ, onde 1 ≤ a < 10 e n ∈ ℤ. Ex: 25000 = 2,5 × 10⁴.'},
  { st: 5, tag:'Regra',q:'Como converter 0,0016 para notação científica?',a:'0,0016 = 1,6 × 10⁻³ (mover a vírgula 3 casas para a direita → expoente −3).'},
  { st: 5, tag:'Regra',q:'Como somar em notação científica?',a:'Igualar os expoentes, depois somar as partes decimais. Ex: 3,2 × 10³ + 8,7 × 10² = 3,2 × 10³ + 0,87 × 10³ = 4,07 × 10³.'},
  { st: 5, tag:'Regra',q:'Como multiplicar em notação científica?',a:'(a × 10ᵐ) × (b × 10ⁿ) = (a × b) × 10ᵐ⁺ⁿ. Se a×b ≥ 10, ajustar.'},
  { st: 2, tag:'Exemplo',q:'Calcula: ½ + (−⅓)',a:'½ + (−⅓) = 3/6 − 2/6 = 1/6'},
  { st: 3, tag:'Exemplo',q:'Calcula: 35% de 200',a:'35% de 200 = 0,35 × 200 = 70'},
  { st: 5, tag:'Exemplo',q:'Escreve 183750 em notação científica',a:'183750 = 1,8375 × 10⁵ (mover vírgula 5 casas para a esquerda)'},
  { st: 4, tag:'Exemplo',q:'Simplifica: 10⁵ × 10⁷',a:'10⁵ × 10⁷ = 10^(5+7) = 10¹²'},
],
  3: [
  { st: 1, tag:'Fórmula',q:'Soma dos ângulos internos de um polígono convexo com n lados',a:'S = (n \u2212 2) \xd7 180\xb0\nEx: pentágono \u2192 (5\u22122)\xd7180 = 540\xb0'},
  { st: 1, tag:'Fórmula',q:'Amplitude de cada ângulo interno de um polígono regular com n lados',a:'\xe2 = (n\u22122)\xd7180\xb0 \xf7 n\nEx: hexágono \u2192 720\xf76 = 120\xb0'},
  { st: 1, tag:'Regra',q:'Qual é a soma dos ângulos externos de qualquer polígono convexo?',a:'Sempre 360\xb0, independentemente do número de lados.'},
  { st: 1, tag:'Fórmula',q:'Como calcular o número de lados dado o ângulo externo de um polígono regular?',a:'n = 360\xb0 \xf7 â_ext\nEx: â_ext = 45\xb0 \u2192 n = 360\xf745 = 8 (octógono)'},
  { st: 1, tag:'Definição',q:'O que são ângulos alternos internos?',a:'Ângulos formados entre retas paralelas, em lados opostos da secante. São iguais quando as retas são paralelas.'},
  { st: 1, tag:'Definição',q:'O que são ângulos verticalmente opostos?',a:'Ângulos formados na interseção de duas retas, em lados opostos. São sempre iguais (congruentes).'},
  { st: 1, tag:'Regra',q:'O que são ângulos co-internos (colaterais)?',a:'Ângulos entre retas paralelas, do mesmo lado da secante. A sua soma é sempre 180\xb0 (são suplementares).'},
  { st: 2, tag:'Propriedade',q:'Propriedades do paralelogramo',a:'\u2022 Lados opostos paralelos e iguais\n\u2022 Ângulos opostos iguais\n\u2022 Ângulos adjacentes suplementares\n\u2022 Diagonais bissetam-se'},
  { st: 2, tag:'Propriedade',q:'O que distingue o losango do retângulo?',a:'Losango: 4 lados iguais, diagonais perpendiculares.\nRetângulo: 4 ângulos retos, diagonais iguais.\nAmbos são paralelogramos.'},
  { st: 2, tag:'Definição',q:'O que é um trapézio isósceles?',a:'Trapézio com as pernas (lados não paralelos) iguais. Os ângulos da mesma base são iguais.'},
  { st: 4, tag:'Fórmula',q:'Área do triângulo',a:'A = (base \xd7 altura) \xf7 2'},
  { st: 4, tag:'Fórmula',q:'Área do paralelogramo',a:'A = base \xd7 altura'},
  { st: 4, tag:'Fórmula',q:'Área do trapézio',a:'A = (b\u2081 + b\u2082) \xf7 2 \xd7 altura\n(média das bases \xd7 altura)'},
  { st: 4, tag:'Fórmula',q:'Área do losango ou papagaio',a:'A = (d\u2081 \xd7 d\u2082) \xf7 2\n(produto das diagonais a dividir por 2)'},
  { st: 5, tag:'Fórmula',q:'Área do círculo e do semicírculo',a:'Círculo: A = \u03c0 \xd7 r\xb2\nSemicírculo: A = (\u03c0 \xd7 r\xb2) \xf7 2'},
  { st: 1, tag:'Exemplo',q:'Quantos lados tem um polígono cuja soma dos ângulos internos é 1440\xb0?',a:'(n\u22122)\xd7180 = 1440 \u2192 n\u22122 = 8 \u2192 n = 10\nÉ um decágono.'},
  { st: 1, tag:'Exemplo',q:'Ângulo externo de 24\xb0 \u2014 que polígono é?',a:'n = 360\xf724 = 15 \u2192 Pentadecágono (15 lados)'},
  { st: 4, tag:'Exemplo',q:'Trapézio com bases 8 e 4 cm, altura 3 cm. Qual é a área?',a:'A = (8+4)/2 \xd7 3 = 6 \xd7 3 = 18 cm\xb2'},
  { st: 4, tag:'Exemplo',q:'Losango com diagonais 10 cm e 6 cm. Qual é a área?',a:'A = (10\xd76)/2 = 30 cm\xb2'},
  { st: 1, tag:'Exemplo',q:'Um ângulo mede 65\xb0. Qual é o ângulo co-interno (paralelas cortadas por secante)?',a:'Co-internos são suplementares: 180\xb0 \u2212 65\xb0 = 115\xb0'},
],
  4: [
    { st: 2, tag:'Definição',q:'O que é uma expressão algébrica?',a:'Combinação de números, variáveis (letras) e operações. Ex: 2x+7, 3(n−1), x²+5'},
    { st: 2, tag:'Definição',q:'O que é um monómio?',a:'Produto de um número (coeficiente) pelo produto de variáveis (parte literal).\nEx: em −5x, coeficiente = −5, parte literal = x'},
    { st: 2, tag:'Definição',q:'O que são termos semelhantes?',a:'Termos com a mesma parte literal (mesmas variáveis com os mesmos expoentes). Só estes se podem somar/subtrair.'},
    { st: 3, tag:'Regra',q:'Como simplificar termos semelhantes?',a:'Soma os coeficientes, mantém a parte literal.\nEx: 3x + 5x = 8x\nEx: 7y − 2y + y = 6y'},
    { st: 4, tag:'Definição',q:'O que é uma equação?',a:'Igualdade com uma ou mais incógnitas. Tem 1.º membro (antes do =) e 2.º membro (depois do =).'},
    { st: 4, tag:'Definição',q:'O que é a solução de uma equação?',a:'Valor da incógnita que torna a igualdade verdadeira. Para verificar: substitui e confirma se os dois membros são iguais.'},
    { st: 4, tag:'Definição',q:'O que são equações equivalentes?',a:'Equações que têm exatamente o mesmo conjunto-solução.\nEx: x+3=5 e 2x=4 são equivalentes (ambas têm x=2).'},
    { st: 4, tag:'Princípio',q:'Enuncia o Princípio Aditivo das equações.',a:'Se adicionarmos (ou subtrairmos) o mesmo número a ambos os membros, obtemos uma equação equivalente.'},
    { st: 4, tag:'Princípio',q:'Enuncia o Princípio Multiplicativo das equações.',a:'Se multiplicarmos (ou dividirmos) ambos os membros pelo mesmo número ≠ 0, obtemos uma equação equivalente.'},
    { st: 4, tag:'Regra',q:'O que é a transposição de termos?',a:'Mudar um termo de membro trocando o sinal.\nÉ consequência do princípio aditivo.\nEx: 3x + 5 = 11 ⟺ 3x = 11 − 5'},
    { st: 4, tag:'Classificação',q:'O que é uma equação Possível Determinada (PD)?',a:'Tem exatamente uma solução.\nForma reduzida: c·x = k com c ≠ 0\nS = {k/c}'},
    { st: 4, tag:'Classificação',q:'O que é uma equação Impossível (I)?',a:'Não tem solução.\nForma reduzida: 0·x = k com k ≠ 0\nS = ∅ (conjunto vazio)'},
    { st: 4, tag:'Classificação',q:'O que é uma equação Possível Indeterminada (PI)?',a:'Tem infinitas soluções.\nForma reduzida: 0·x = 0\nS = ℝ (todos os reais)'},
    { st: 4, tag:'Estratégia',q:'Como resolver um problema com equações?',a:'1) Define a variável\n2) Escreve a equação\n3) Resolve\n4) Verifica se faz sentido no contexto'},
    { st: 4, tag:'Nota',q:'O que são números consecutivos?',a:'Inteiros com diferença 1: n, n+1, n+2, …\nPares consecutivos: n, n+2, n+4, …\nÍmpares consecutivos: n, n+2, n+4, … (n ímpar)'},
    { st: 5, tag:'Desafio',q:'Quando é que ax+b=c é impossível?',a:'Quando a=0 e b≠c. Fica 0x = c−b (com c−b≠0).'},
    { st: 4, tag:'Estratégia',q:'Como resolver problemas com idades?',a:'1) Variável para idade atual\n2) "Daqui a k anos" → soma k\n3) Escreve equação\n4) Resolve e verifica'}
  ],
  5: [
    { st: 1, tag:'Definição',q:'O que é uma sequência numérica?',a:'Lista ordenada de números chamados termos. Cada termo tem uma posição (ordem n). Escreve-se a₁, a₂, a₃, …, aₙ'},
    { st: 1, tag:'Definição',q:'O que é o termo geral aₙ?',a:'Expressão algébrica que permite calcular qualquer termo da sequência conhecendo a sua ordem n.'},
    { st: 1, tag:'Fórmula',q:'Qual a fórmula do termo geral de uma sequência aritmética?',a:'aₙ = a₁ + (n−1)×r\naₙ = r·n + (a₁ − r)\n(r = razão = diferença entre termos consecutivos)'},
    { st: 1, tag:'Definição',q:'O que é uma sequência aritmética?',a:'Uma sequência em que a diferença entre termos consecutivos é constante. Essa diferença chama-se razão (r).\nEx: 2, 5, 8, 11, … (r = 3)'},
    { st: 1, tag:'Definição',q:'O que é uma sequência geométrica?',a:'Uma sequência em que o quociente entre termos consecutivos é constante. Esse quociente chama-se razão.\nEx: 2, 6, 18, 54, … (r = 3)'},
    { st: 1, tag:'Estratégia',q:'Como encontrar o termo geral de uma sequência aritmética?',a:'1) Calcula a razão: r = a₂ − a₁\n2) Usa: aₙ = a₁ + (n−1)×r\nOu: aₙ = r·n + (a₁ − r)'},
    { st: 2, tag:'Desafio',q:'Se Sₙ = n²+2n, como encontrar aₙ?',a:'aₙ = Sₙ − Sₙ₋₁ para n≥2, e a₁=S₁.\nExemplo: aₙ = 2n+1'},
    { st: 2, tag:'Estratégia',q:'Como verificar se um número pertence a uma sequência?',a:'Substitui aₙ = valor no termo geral e resolve para n.\nSe n é inteiro positivo → pertence.\nEx: aₙ=2n−1, pertence 15? 2n−1=15 → n=8 ✓'},
    { st: 1, tag:'Definição',q:'O que é o termo de ordem n?',a:'É o termo que ocupa a posição n na sequência. O 1.º termo tem ordem 1 (a₁), o 2.º tem ordem 2 (a₂), e assim por diante.'},
    { st: 1, tag:'Estratégia',q:'Como calcular um termo conhecendo o termo geral?',a:'Substitui n pela ordem pretendida. Ex: se aₙ = 2n + 3, o 5.º termo é a₅ = 2×5 + 3 = 13.'},
    { st: 2, tag:'Exemplo',q:'Termo geral da sequência 5, 8, 11, 14, …?',a:'A razão é r = 3 e a₁ = 5. Então aₙ = 5 + (n−1)×3 = 3n + 2. (Confirma: a₁ = 3×1+2 = 5 ✓)'},
    { st: 2, tag:'Exemplo',q:'Termo geral da sequência 5, 7, 9, 11, …?',a:'Razão r = 2, a₁ = 5 → aₙ = 2n + 3.'},
    { st: 1, tag:'Estratégia',q:'Como descobrir a razão de uma sequência aritmética?',a:'Subtrai dois termos consecutivos: r = a₂ − a₁ = a₃ − a₂. Se for sempre o mesmo valor, a sequência é aritmética.'},
    { st: 1, tag:'Definição',q:'Sequência crescente, decrescente ou constante?',a:'Numa aritmética: razão positiva → crescente; razão negativa → decrescente; razão nula → constante (todos os termos iguais).'},
    { st: 2, tag:'Estratégia',q:'Como completar termos em falta numa sequência?',a:'Descobre a razão a partir de dois termos conhecidos e soma-a (ou subtrai) sucessivamente para encontrar os termos vizinhos.'},
    { st: 2, tag:'Exemplo',q:'Qual o 10.º termo de aₙ = 3n − 2?',a:'a₁₀ = 3×10 − 2 = 28.'}
  ],
  6: [
    { st: 1, tag:'Definição',q:'O que é um referencial cartesiano?',a:'Sistema de dois eixos perpendiculares (Ox e Oy) que se cruzam na origem O. Permite localizar pontos no plano com coordenadas (x, y) = (abcissa, ordenada).'},
    { st: 1, tag:'Definição',q:'O que são a abcissa e a ordenada de um ponto P(x, y)?',a:'Abcissa = coordenada horizontal (x). Ordenada = coordenada vertical (y).\nEixo Ox: ordenada = 0. Eixo Oy: abcissa = 0.'},
    { st: 2, tag:'Definição',q:'O que é uma função?',a:'Correspondência entre dois conjuntos A e B em que a cada elemento de A (objeto) corresponde EXATAMENTE uma imagem em B.\nSe um objeto não tiver imagem ou tiver mais de uma → não é função.'},
    { st: 2, tag:'Definição',q:'O que é o domínio e o contradomínio de uma função?',a:'Domínio (D_f): conjunto de todos os objetos (conjunto A).\nContradomínio (D\'_f): conjunto de todas as imagens efetivas.\nD\'_f ⊆ B (pode ser menor que o conjunto de chegada B).'},
    { st: 5, tag:'Fórmula',q:'Como se define uma função de proporcionalidade direta?',a:'f(x) = kx, onde k é a constante de proporcionalidade (k ≠ 0).\nO gráfico é uma reta que PASSA PELA ORIGEM O(0,0).\nComo calcular k: k = f(x)/x = y/x.'},
    { st: 1, tag:'Propriedade',q:'Como se identificam os quadrantes no referencial cartesiano?',a:'1.º Q: x > 0, y > 0 (direita/cima)\n2.º Q: x < 0, y > 0 (esquerda/cima)\n3.º Q: x < 0, y < 0 (esquerda/baixo)\n4.º Q: x > 0, y < 0 (direita/baixo)'},
    { st: 3, tag:'Definição',q:'O que é o teste da reta vertical?',a:'Um gráfico representa uma função se qualquer reta vertical intersecta o gráfico em NO MÁXIMO um ponto.\nSe cortar em 2+ pontos → não é função.'},
    { st: 1, tag:'Fórmula',q:'Reflexão axial: como ficam as coordenadas?',a:'Reflexão em relação ao eixo Ox: (x, y) → (x, −y)\nA ordenada muda de sinal, abcissa mantém-se.\n\nReflexão em relação ao eixo Oy: (x, y) → (−x, y)\nA abcissa muda de sinal, ordenada mantém-se.'},
    { st: 2, tag:'Definição',q:'O que é a imagem de um objeto por uma função?',a:'É o valor f(x) que a função associa ao objeto x. Ex: se f(x) = 3x, a imagem de 2 é f(2) = 3×2 = 6.'},
    { st: 2, tag:'Estratégia',q:'Como calcular f(x) para um valor dado?',a:'Substitui x pelo valor pretendido na expressão da função. Ex: f(x) = 2x + 1 → f(4) = 2×4 + 1 = 9.'},
    { st: 4, tag:'Estratégia',q:'Formas de representar uma função',a:'Por: tabela (objetos e imagens), gráfico (pontos no referencial), expressão algébrica (y = f(x)) ou diagrama de setas.'},
    { st: 5, tag:'Definição',q:'O que é a constante de proporcionalidade k?',a:'Numa função de proporcionalidade direta f(x) = kx, k é o valor constante de y/x. Ex: se f(3) = 12, então k = 12/3 = 4.'},
    { st: 5, tag:'Propriedade',q:'Como reconhecer uma proporcionalidade direta numa tabela?',a:'O quociente y/x é constante em todas as colunas. Esse quociente é k. Se variar, NÃO é proporcionalidade direta.'},
    { st: 6, tag:'Exemplo',q:'1 kg de maçãs custa 2 €. Qual a função do custo?',a:'f(x) = 2x (proporcionalidade direta, k = 2). Custo de 5 kg: f(5) = 10 €.'},
    { st: 3, tag:'Estratégia',q:'Como ler coordenadas de um ponto no gráfico?',a:'Projeta o ponto no eixo Ox (lê a abcissa x) e no eixo Oy (lê a ordenada y). O ponto é P(x, y).'},
    { st: 1, tag:'Exemplo',q:'O ponto A(0, 5) está em que eixo?',a:'Como a abcissa é 0, está no eixo das ordenadas (Oy), à altura 5.'}
  ],
  7: [
    { st: 1, tag:'Definição',q:'O que são figuras semelhantes?',a:'Duas figuras são semelhantes quando têm a mesma forma: os ângulos correspondentes são iguais e os lados correspondentes são proporcionais. A razão entre lados correspondentes chama-se razão de semelhança k.'},
    { st: 5, tag:'Fórmula',q:'Qual é a relação entre os perímetros de figuras semelhantes?',a:'Se k é a razão de semelhança, a razão dos perímetros é também k.\nPerímetro₂ = k × Perímetro₁'},
    { st: 5, tag:'Fórmula',q:'Qual é a relação entre as áreas de figuras semelhantes?',a:'Se k é a razão de semelhança, a razão das áreas é k².\nÁrea₂ = k² × Área₁'},
    { st: 3, tag:'Definição',q:'O que é uma homotetia?',a:'Uma homotetia de centro O e razão k transforma cada ponto P no ponto P\' tal que OP\' = k × OP.\n• k > 0: a figura fica do mesmo lado de O\n• k < 0: a figura fica do lado oposto\n• |k| > 1: ampliação; |k| < 1: redução'},
    { st: 4, tag:'Critério',q:'Quais são os critérios de semelhança de triângulos?',a:'• AA: dois ângulos iguais\n• LLL: três pares de lados proporcionais (mesma razão k)\n• LAL: dois pares de lados proporcionais e ângulo entre eles igual'},
    { st: 6, tag:'Fórmula',q:'Qual é a Relação de Euler para poliedros convexos?',a:'V − A + F = 2\nonde:\nV = número de vértices\nA = número de arestas\nF = número de faces\nExemplo: cubo → 8 − 12 + 6 = 2 ✓'},
    { st: 6, tag:'Definição',q:'Quais são os cinco poliedros regulares (sólidos de Platão)?',a:'1. Tetraedro: 4 faces triangulares\n2. Cubo (hexaedro): 6 faces quadradas\n3. Octaedro: 8 faces triangulares\n4. Dodecaedro: 12 faces pentagonais\n5. Icosaedro: 20 faces triangulares'},
    { st: 2, tag:'Propriedade',q:'Como verificar se dois polígonos são semelhantes?',a:'É necessário verificar AS DUAS condições:\n1. Ângulos correspondentes iguais\n2. Lados correspondentes proporcionais (mesma razão k)\nAtenção: para triângulos basta verificar uma das condições (AA, LLL ou LAL).'},
    { st: 1, tag:'Definição',q:'O que é a razão de semelhança k?',a:'É o quociente entre lados correspondentes de duas figuras semelhantes. Ex: se um lado mede 6 e o correspondente mede 3, então k = 6/3 = 2.'},
    { st: 1, tag:'Estratégia',q:'Como calcular um lado desconhecido em figuras semelhantes?',a:'Usa a proporção entre lados correspondentes. Ex: se k = 2 e um lado original mede 5, o lado correspondente mede 5 × 2 = 10.'},
    { st: 5, tag:'Exemplo',q:'Dois quadrados semelhantes com k = 3. Se a área do menor é 4 cm², qual a do maior?',a:'Área₂ = k² × Área₁ = 3² × 4 = 9 × 4 = 36 cm².'},
    { st: 5, tag:'Exemplo',q:'Perímetro de um triângulo é 12 cm. Um semelhante com k = 2,5?',a:'Perímetro₂ = k × Perímetro₁ = 2,5 × 12 = 30 cm.'},
    { st: 1, tag:'Definição',q:'Ampliação ou redução?',a:'Se k > 1, a figura imagem é maior (ampliação). Se 0 < k < 1, é menor (redução). Se k = 1, as figuras são congruentes (iguais).'},
    { st: 6, tag:'Definição',q:'O que é um poliedro?',a:'Um sólido geométrico limitado por faces planas (polígonos). Tem vértices, arestas e faces. Ex: cubo, pirâmide, prisma.'},
    { st: 6, tag:'Exemplo',q:'Um poliedro tem 6 faces e 12 arestas. Quantos vértices (Euler)?',a:'V − A + F = 2 → V = 2 + A − F = 2 + 12 − 6 = 8 vértices.'},
    { st: 2, tag:'Estratégia',q:'Como identificar lados correspondentes?',a:'São os lados que ocupam a mesma posição relativa nas duas figuras (entre ângulos iguais). Em triângulos semelhantes, o maior lado de um corresponde ao maior do outro.'}
  ],
  8: [
    { st: 1, tag:'Definição',q:'O que é a população e a amostra em estatística?',a:'População: conjunto de todos os elementos em estudo.\nAmostra: subconjunto representativo da população, usado quando é impossível estudar toda a população.\nDimensão da amostra: número de elementos da amostra.'},
    { st: 1, tag:'Definição',q:'Como se classificam as variáveis estatísticas?',a:'Qualitativas: características não numéricas (cor favorita, nacionalidade, meio de transporte).\nQuantitativas discretas: valores inteiros (número de filhos, golos).\nQuantitativas contínuas: qualquer valor num intervalo (altura, peso, temperatura, tempo).'},
    { st: 2, tag:'Fórmula',q:'Como se calcula a média, mediana e moda?',a:'Média: soma de todos os valores ÷ número de valores.\nMediana: valor central após ordenar os dados (se n par: média dos dois centrais).\nModa: valor que aparece mais vezes (pode haver mais de uma moda ou nenhuma).'},
    { st: 1, tag:'Definição',q:'O que é a frequência absoluta e a frequência relativa?',a:'Frequência absoluta (fi): número de vezes que um valor aparece.\nFrequência relativa (fri): fri = fi / n (onde n = total de dados).\nfri pode ser expressa em percentagem: fri × 100%.'},
    { st: 3, tag:'Definição',q:'Quais as principais representações gráficas em estatística?',a:'• Gráfico de barras: frequências por categorias (qualitativas ou discretas)\n• Histograma: dados agrupados em classes (contínuas ou grande amplitude)\n• Gráfico circular (pizza): proporções do total (ângulo = fri × 360°)\n• Diagrama caule-e-folhas: mostra a distribuição preservando os dados originais\n• Diagrama de Venn: conjuntos e intersecções'},
    { st: 4, tag:'Fórmula',q:'O que é a probabilidade e como se calcula?',a:'Probabilidade de um acontecimento A:\nP(A) = número de casos favoráveis / número de casos possíveis\nPropriedades: 0 ≤ P(A) ≤ 1\nP(impossível) = 0 · P(certo) = 1\nP(A) + P(Ā) = 1 (acontecimento contrário)'},
    { st: 4, tag:'Definição',q:'O que são acontecimentos equiprováveis?',a:'Dois ou mais acontecimentos são equiprováveis quando têm a mesma probabilidade de ocorrer.\nExemplo: lançar um dado cada face tem P = 1/6; sair "par" e sair "ímpar" são equiprováveis (P = 1/2 cada).'},
    { st: 5, tag:'Fórmula',q:'Como se calcula a probabilidade em experiências compostas?',a:'Usa-se uma tabela de dupla entrada ou diagrama de árvore para listar todos os casos possíveis.\nSe A e B são independentes: P(A e B) = P(A) × P(B)\nSe sem reposição: P(B|A) muda após A ocorrer.\nContam-se os casos favoráveis sobre o total de casos possíveis.'},
    { st: 2, tag:'Exemplo',q:'Notas: 12, 14, 14, 16, 19. Qual a média?',a:'(12+14+14+16+19) ÷ 5 = 75 ÷ 5 = 15 valores.'},
    { st: 2, tag:'Exemplo',q:'Qual a moda de 3, 5, 5, 5, 8, 9?',a:'O valor que aparece mais vezes é 5 (três vezes). Moda = 5.'},
    { st: 2, tag:'Exemplo',q:'Qual a mediana de 7, 3, 9, 4, 6?',a:'Ordena: 3, 4, 6, 7, 9. Com 5 valores (ímpar), a mediana é o do meio → 6.'},
    { st: 2, tag:'Estratégia',q:'Mediana com número par de dados?',a:'Ordena e calcula a média dos DOIS valores centrais. Ex: 4, 6, 8, 10 → mediana = (6+8)/2 = 7.'},
    { st: 4, tag:'Exemplo',q:'P de tirar uma bola azul (3 azuis em 12)?',a:'P = 3/12 = 1/4 = 0,25 = 25%.'},
    { st: 2, tag:'Definição',q:'O que é a amplitude de um conjunto de dados?',a:'É a diferença entre o maior e o menor valor (máximo − mínimo). Mede o quanto os dados se espalham.'},
    { st: 3, tag:'Estratégia',q:'Como construir um gráfico circular (pizza)?',a:'O ângulo de cada setor é a frequência relativa × 360°. Ex: 25% dos dados → 0,25 × 360° = 90°.'},
    { st: 4, tag:'Exemplo',q:'Num dado, P de sair número maior que 4?',a:'Favoráveis: 5 e 6 → 2 casos; possíveis: 6. P = 2/6 = 1/3.'}
  ],
};


// ═══ CAP SELECTOR BUILDER generates chapter/subtema selector HTML ═══
var _capMeta = [
  {n:1, icon:'±', label:'Números Inteiros'},
  {n:2, icon:'½', label:'Números Racionais'},
  {n:3, icon:'<i class="ph ph-triangle"></i>', label:'Geometria'},
  {n:4, icon:'𝑥', label:'Equações'},
  {n:5, icon:'<i class="ph ph-list-numbers"></i>', label:'Sequências'},
  {n:6, icon:'<i class="ph ph-chart-line"></i>', label:'Funções'},
  {n:7, icon:'<i class="ph ph-shapes"></i>', label:'Figuras Semelhantes'},
  {n:8, icon:'<i class="ph ph-chart-bar"></i>', label:'Dados e Probabilidades'}
];
// Short subtema labels per chapter (mat7 tabs use these)
var _capStShort = {
  1: ['Conjunto ℤ','Valor absoluto','Adição','Subtração','Parênteses'],
  2: ['Comparação','Adição/Subt.','Percentagens','Potências','Not. Científica'],
  3: ['Ângulos','Triângulos','Semelhança','Áreas','Circunferência'],
  4: ['Sequências','Expressões','Simplificação','Equações','Inequações'],
  5: ['Termo Geral','Problemas com Sequências'],
  6: ['Referencial','Conceito de Função','Representação Gráfica','Formas de Representar','Prop. Direta','Gráficos Reais'],
  7: ['Semelhantes','Polígonos','Homotetia','Critérios','Perímetros/Áreas','Poliedros'],
  8: ['Pop./Amostra','Medidas Centrais','Rep. Gráficas','Probabilidade','Prob. Composta']
};
// Fichas panel uses slightly different labels
var _capStFichas = {
  1: ['Conjunto ℤ','Valor absoluto','Adição','Subtração','Parênteses'],
  2: ['Comparação','Adição/Subtração','Percentagens','Potências','Not. Científica'],
  3: ['Ângulos internos','Ângulos externos','Retas paralelas','Quadriláteros','Áreas'],
  4: ['Expressões Algébricas','Simplificação','Equações','Problemas'],
  5: ['Termo Geral','Sequências Aritméticas','Problemas'],
  6: ['Referencial','Função','Gráfica','Formas','Prop. Direta','Contexto Real'],
  7: ['Semelhantes','Polígonos','Homotetia','Critérios','Perímetros/Áreas','Poliedros'],
  8: ['Pop./Amostra','Medidas Centrais','Rep. Gráficas','Probabilidade','Prob. Composta']
};

/**
 * Build cap selector HTML.
 * @param {string} tab - tab identifier (e.g. 'resumo', 'jogos')
 * @param {object} opts - { type:'mat7tab'|'gf'|'simple', panelId:string, caps:[1,2,3,4], stData:object, numbered:boolean }
 */
function _buildCapSelHTML(tab, opts) {
  var type = opts.type || 'mat7tab';
  var panelId = opts.panelId || tab;
  var caps = opts.caps || [1,2,3,4,5,6,7,8];
  var stData = opts.stData || _capStShort;
  var numbered = opts.numbered || false;
  var h = '';
  caps.forEach(function(cn, ci) {
    var m = _capMeta[cn-1];
    var isFirst = (ci === 0);
    // Cap button
    if (type === 'simple') {
      var handler = opts.handler ? opts.handler.replace('{cap}', cn) : "mat7TabCapClick('"+tab+"',"+cn+",this)";
      h += '<button class="gf-cap-btn'+(isFirst?' active':'')+'" data-cap="'+cn+'" onclick="'+handler+'">'+m.icon+' '+m.label+'</button>';
      return;
    }
    h += '<div class="gf-cap-block"><div class="gf-cap-row">';
    if (type === 'gf') {
      h += '<button class="gf-cap-btn" data-cap="'+cn+'" onclick="gfCapClick(this,\''+panelId+'\','+cn+')">'+m.icon+' '+m.label+' <span class="level-label">▾</span></button>';
    } else {
      h += '<button class="gf-cap-btn'+(isFirst?' active':'')+'" data-cap="'+cn+'" onclick="mat7TabCapClick(\''+tab+'\','+cn+',this)">'+m.icon+' '+m.label+' <span class="level-label">▾</span></button>';
    }
    h += '</div>';
    // Subtema tray
    var sts = stData[cn] || [];
    if (sts.length > 0) {
      var trayId = type === 'gf' ? 'gf-st-'+cn+'-'+panelId : 'mat7-st-'+cn+'-'+tab;
      var trayClass = '';
      var trayStyle = '';
      if (type === 'gf') { /* tray starts closed; opened when cap is selected */ }
      else if (type !== 'gf' && isFirst) { trayStyle = ' style="display:flex;flex-wrap:wrap;gap:.3rem;align-items:center"'; }
      else if (type !== 'gf') { trayStyle = ' style="display:none"'; }
      h += '<div class="gf-st-tray'+trayClass+'"'+trayStyle+' id="'+trayId+'"><span class="gf-st-tray-label">Subtemas:</span>';
      sts.forEach(function(st, si) {
        var mark = numbered ? '<span class="gf-st-num">'+(si+1)+'</span>' : '<span class="gf-st-check">✓</span>';
        if (type === 'gf') {
          h += '<button class="gf-st-chip active" data-cap="'+cn+'" data-st="'+(si+1)+'" onclick="this.classList.toggle(\'active\')">'+mark+st+'</button>';
        } else {
          h += '<button class="gf-st-chip active" data-cap="'+cn+'" data-st="'+(si+1)+'" onclick="mat7TabStClick(this,\''+tab+'\','+cn+')">'+mark+st+'</button>';
        }
      });
      // Todos/Nenhum actions
      if (type === 'gf') {
        h += '<div class="gf-st-tray-actions"><button class="gf-st-tray-action" onclick="gfStAll(\''+panelId+'\','+cn+',true)">Todos</button><button class="gf-st-tray-action" onclick="gfStAll(\''+panelId+'\','+cn+',false)">Nenhum</button></div>';
      } else {
        h += '<div class="gf-st-tray-actions"><button class="gf-st-tray-action" onclick="mat7TabStAll(\''+tab+'\','+cn+',true);mat7TabReload(\''+tab+'\')">Todos</button><button class="gf-st-tray-action" onclick="mat7TabStAll(\''+tab+'\','+cn+',false);mat7TabReload(\''+tab+'\')">Nenhum</button></div>';
      }
      h += '</div>';
    }
    h += '</div>';
  });
  return h;
}

// Populate all cap selectors on page load
function _mat7BuildSelectors() {
  var sets = [
    {id:'gf-caps-mat7-downloads', tab:'fichas', opts:{type:'gf', panelId:'mat7-downloads', stData:_capStFichas}},
    {id:'mat7-caps-resumo',      tab:'resumo', opts:{type:'mat7tab'}},
    {id:'mat7-caps-exercicios',  tab:'exercicios', opts:{type:'mat7tab', numbered:true}},
    {id:'mat7-caps-jogos',       tab:'jogos', opts:{type:'mat7tab'}},
    {id:'mat7-caps-flashcards',  tab:'flashcards', opts:{type:'mat7tab'}},
    {id:'mat7-caps-exame',       tab:'exame', opts:{type:'mat7tab'}},
    {id:'mat7-caps-quiz',        tab:'quiz', opts:{type:'simple', handler:"qgHubSelectCap({cap},this)"}}
  ];
  sets.forEach(function(s) {
    var el = document.getElementById(s.id);
    if (el) el.innerHTML = _buildCapSelHTML(s.tab, s.opts);
  });
}
// Auto-run when DOM is ready
function _mat7Init() {
  _mat7BuildSelectors();
  // visuais de teoria no cap 8 (Dados e Probabilidades)
  var _cards8 = (typeof _mat7Cards !== 'undefined' && _mat7Cards[8]) ? _mat7Cards[8] : (typeof BANCO8 !== 'undefined' ? BANCO8.flashcards : null);
  if (typeof _addStatsTeoriaVisuais === 'function' && _cards8) {
    _addStatsTeoriaVisuais(_cards8, '#61afef');
  }
  // visuais de teoria no cap 6 (Funções) - gráficos de reta e parábola
  var _cards6 = (typeof _mat7Cards !== 'undefined' && _mat7Cards[6]) ? _mat7Cards[6] : (typeof BANCO6 !== 'undefined' ? BANCO6.flashcards : null);
  if (typeof _addFuncTeoriaVisuais === 'function' && _cards6) {
    _addFuncTeoriaVisuais(_cards6, '#56b6c2');
  }
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _mat7Init);
else _mat7Init();

// ── "Por onde começar?" continue banner ──────────────────────────────────────
var _mat7CapNames = {
  1:'Números Inteiros', 2:'Números Racionais', 3:'Geometria',
  4:'Equações', 5:'Sequências', 6:'Funções',
  7:'Figuras Semelhantes', 8:'Dados e Probabilidades'
};
var _mat7CapColors = {
  1:'var(--c1-main,#4f8ef7)', 2:'var(--c2-main,#e06c75)', 3:'var(--c3-main,#98c379)',
  4:'var(--c4-main,#e5c07b)', 5:'var(--c5-main,#c678dd)', 6:'var(--c6-main,#56b6c2)',
  7:'var(--c7-main,#d19a66)', 8:'var(--c8-main,#61afef)'
};
var _mat7StorageKeys = {
  1:'edupt_cap1', 2:'edupt_cap2', 3:'edupt_cap3', 4:'edupt_cap4',
  5:'edupt_cap5', 6:'edupt_cap6', 7:'edupt_cap7', 8:'edupt_cap8'
};

// Section scroll targets per tab and cap
var _mat7Targets = {
  resumo:      { 1:'bloco1-resumo', 2:'sec-temas2', 3:'sec-temas3', 4:'sec-temas4', 5:'sec-temas5', 6:'sec-temas6', 7:'sec-temas7', 8:'sec-temas8' },
  questoes:    { 1:'sec-questoes',  2:'sec-questoes2', 3:'sec-questoes3', 4:'sec-questoes4', 5:'sec-questoes5', 6:'sec-questoes6', 7:'sec-questoes7', 8:'sec-questoes8' },
  miniteste:   { 1:'sec-minitestes', 2:'sec-minitestes2', 3:'sec-minitestes3', 4:'sec-minitestes4', 5:'sec-minitestes5', 6:'sec-minitestes6', 7:'sec-minitestes7', 8:'sec-minitestes8' },
  teste:       { 1:'sec-teste',     2:'sec-teste2', 3:'sec-teste3', 4:'sec-teste4', 5:'sec-teste5', 6:'sec-teste6', 7:'sec-teste7', 8:'sec-teste8' },
  jogos:       { 1:'sec-jogos',     2:'sec-jogos2', 3:'sec-jogos3', 4:'sec-jogos4', 5:'sec-jogos5', 6:'sec-jogos6', 7:'sec-jogos7', 8:'sec-jogos8' },
  flashcards:  { 1:'sec-flashcards',2:'sec-flashcards2', 3:'sec-flashcards3', 4:'sec-flashcards4', 5:'sec-flashcards5', 6:'sec-flashcards6', 7:'sec-flashcards7', 8:'sec-flashcards8' },
  exame:       { 1:'sec-exame',     2:'sec-exame2', 3:'sec-exame3', 4:'sec-exame4', 5:'sec-exame5', 6:'sec-exame6', 7:'sec-exame7', 8:'sec-exame8' }
};

// Current selections per tab
var _mat7Sel = { resumo:1, exercicios:1, testes:1, jogos:1, flashcards:1, exame:1 };
var _mat7TarefaAtiva = null; // id da tarefa, em modo-tarefa (deep-link)

// ── Map: which section ID to grab from which view, per cap ──
var _mat7SecMap = {
  exercicios: { 1:'sec-questoes',    2:'sec-questoes2',   3:'sec-questoes3',   4:'sec-questoes4',  5:'sec-questoes5',  6:'sec-questoes6',  7:'sec-questoes7',  8:'sec-questoes8' },
  minitestes: { 1:'sec-minitestes',  2:'sec-minitestes2', 3:'sec-minitestes3', 4:'sec-minitestes4', 5:'sec-minitestes5', 6:'sec-minitestes6', 7:'sec-minitestes7', 8:'sec-minitestes8' },
  jogos:      { 1:'sec-jogos',       2:'sec-jogos2',      3:'sec-jogos3',      4:'sec-jogos4',     5:'sec-jogos5',     6:'sec-jogos6',     7:'sec-jogos7',     8:'sec-jogos8' },
  flashcards: { 1:'sec-flashcards',  2:'sec-flashcards2', 3:'sec-flashcards3', 4:'sec-flashcards4', 5:'sec-flashcards5', 6:'sec-flashcards6', 7:'sec-flashcards7', 8:'sec-flashcards8' },
  exame:      { 1:'sec-exame',       2:'sec-exame2',      3:'sec-exame3',      4:'sec-exame4',     5:'sec-exame5',     6:'sec-exame6',     7:'sec-exame7',     8:'sec-exame8' },
  // progresso: handled by renderProgressoUnificado not in secMap
  quiz:       { 1:'sec-quiz-game',   2:'sec-quiz-game2',  3:'sec-quiz-game3',  4:'sec-quiz-game4', 5:'sec-quiz-game5', 6:'sec-quiz-game6', 7:'sec-quiz-game7', 8:'sec-quiz-game8' }
};

// ── Init functions per section ──
var _mat7InitMap = {
  'sec-questoes':    function(){ var el=document.getElementById('q-container');  if(el && !el.innerHTML && typeof gerarQuestoes==='function') gerarQuestoes(); if(typeof gerarMiniAtual==='function'&&document.getElementById('m-container')&&!document.getElementById('m-container').innerHTML)gerarMiniAtual(); if(typeof gerarTeste==='function'&&document.getElementById('t-container')&&!document.getElementById('t-container').innerHTML)gerarTeste(); },
  'sec-questoes2':   function(){ var el=document.getElementById('q2-container'); if(el && !el.innerHTML && typeof gerarQuestoes2==='function') gerarQuestoes2(); if(typeof gerarMiniAtual2==='function'&&document.getElementById('m2-container')&&!document.getElementById('m2-container').innerHTML)gerarMiniAtual2(); if(typeof gerarTeste2==='function'&&document.getElementById('t2-container')&&!document.getElementById('t2-container').innerHTML)gerarTeste2(); },
  'sec-questoes3':   function(){ var el=document.getElementById('q3-container'); if(el && !el.innerHTML && typeof gerarQuestoes3==='function') gerarQuestoes3(); if(typeof gerarMiniAtual3==='function'&&document.getElementById('m3-container')&&!document.getElementById('m3-container').innerHTML)gerarMiniAtual3(); if(typeof gerarTeste3==='function'&&document.getElementById('t3-container')&&!document.getElementById('t3-container').innerHTML)gerarTeste3(); },
  'sec-questoes4':   function(){ var el=document.getElementById('q4-container'); if(el && !el.innerHTML && typeof renderQuestoes4==='function') renderQuestoes4(); if(document.getElementById('m4-container')&&!document.getElementById('m4-container').innerHTML&&typeof showMini4==='function')showMini4(0,null); if(document.getElementById('t4-container')&&!document.getElementById('t4-container').innerHTML&&typeof renderTeste4==='function')renderTeste4(); },
  'sec-teste':       function(){ var el=document.getElementById('t-container');  if(el && !el.innerHTML && typeof gerarTeste==='function') gerarTeste(); },
  'sec-teste2':      function(){ var el=document.getElementById('t2-container'); if(el && !el.innerHTML && typeof gerarTeste2==='function') gerarTeste2(); },
  'sec-teste3':      function(){ var el=document.getElementById('t3-container'); if(el && !el.innerHTML && typeof gerarTeste3==='function') gerarTeste3(); },
  'sec-teste4':      function(){ var el=document.getElementById('t4-container'); if(el && !el.innerHTML && typeof renderTeste4==='function') renderTeste4(); },
  'sec-minitestes':  function(){ var el=document.getElementById('m-container');  if(el && !el.innerHTML && typeof gerarMiniAtual==='function') gerarMiniAtual(); },
  'sec-minitestes2': function(){ var el=document.getElementById('m2-container'); if(el && !el.innerHTML && typeof gerarMiniAtual2==='function') gerarMiniAtual2(); },
  'sec-minitestes3': function(){ var el=document.getElementById('m3-container'); if(el && !el.innerHTML && typeof gerarMiniAtual3==='function') gerarMiniAtual3(); },
  'sec-minitestes4': function(){ var el=document.getElementById('m4-container'); if(el && !el.innerHTML && typeof showMini4==='function') showMini4(0,null); },
  'sec-jogos':       function(){ if(typeof _gInited!=='undefined') delete _gInited['j24-wrap-cap1']; if(typeof _j24AutoInit==='function') _j24AutoInit('j24-wrap-cap1','facil'); },
  'sec-jogos2':       function(){ if(typeof _gInited!=='undefined') delete _gInited['j24-wrap-cap2']; if(typeof _j24AutoInit==='function') _j24AutoInit('j24-wrap-cap2','medio'); },
  'sec-jogos3':       function(){ if(typeof _gInited!=='undefined') delete _gInited['j24-wrap-cap3']; if(typeof _j24AutoInit==='function') _j24AutoInit('j24-wrap-cap3','medio'); },
  'sec-jogos4':       function(){ if(typeof _gInited!=='undefined') delete _gInited['j24-wrap-cap4']; if(typeof _j24AutoInit==='function') _j24AutoInit('j24-wrap-cap4','dificil'); },
  'sec-flashcards':  function(){ FC_CARDS=FC_CARDS_CAP1; SRS_KEY='edupt_srs_cap1'; if(typeof fcStartSession==='function') fcStartSession(); },
  'sec-flashcards2': function(){ if(typeof fcRender2==='function') fcRender2(); },
  'sec-flashcards3': function(){ if(typeof fcRender3==='function') fcRender3(); },
  'sec-flashcards4': function(){ if(typeof initFlashcards4==='function') initFlashcards4(); },
  'sec-exame':       function(){ if(typeof exameReset==='function') exameReset(); },
  'sec-exame2':      function(){ if(typeof exame2Reset==='function') exame2Reset(); },
  'sec-exame3':      function(){ if(typeof exame3Reset==='function') exame3Reset(); },
  'sec-exame4':      function(){ var c=document.getElementById('exame4-config');var r=document.getElementById('exame4-running');var rs=document.getElementById('exame4-result');if(c)c.style.display='block';if(r)r.style.display='none';if(rs)rs.style.display='none'; },
  'sec-progresso':   function(){ if(typeof progRenderSection==='function') progRenderSection(); },
  'sec-progresso2':  function(){ if(typeof progRenderSection2==='function') progRenderSection2(); },
  'sec-progresso3':  function(){ if(typeof progRenderSection3==='function') progRenderSection3(); },
  'sec-progresso4':  function(){ if(typeof renderProg4==='function') renderProg4(); },
  'sec-quiz-game':   function(){ if(typeof qgStartForCap==='function') qgStartForCap(1); },
  'sec-quiz-game2':  function(){ if(typeof qgStartForCap==='function') qgStartForCap(2); },
  'sec-quiz-game3':  function(){ if(typeof qgStartForCap==='function') qgStartForCap(3); },
  'sec-quiz-game4':  function(){ if(typeof qgStartForCap==='function') qgStartForCap(4); },
  'sec-questoes5':   function(){ var el=document.getElementById('q5-container');  if(el && !el.innerHTML && typeof renderQuestoes5==='function') renderQuestoes5(); if(typeof showMini5==='function'&&document.getElementById('m5-container')&&!document.getElementById('m5-container').innerHTML)showMini5(0,null); if(typeof renderTeste5==='function'&&document.getElementById('t5-container')&&!document.getElementById('t5-container').innerHTML)renderTeste5(); },
  'sec-minitestes5': function(){ var el=document.getElementById('m5-container');  if(el && !el.innerHTML && typeof showMini5==='function') showMini5(0,null); },
  'sec-teste5':      function(){ var el=document.getElementById('t5-container');  if(el && !el.innerHTML && typeof renderTeste5==='function') renderTeste5(); },
  'sec-jogos5':      function(){ if(typeof _gInited!=='undefined') delete _gInited['j24-wrap-cap5']; if(typeof _j24AutoInit==='function') _j24AutoInit('j24-wrap-cap5','dificil'); },
  'sec-flashcards5': function(){ if(typeof initFlashcards5==='function') initFlashcards5(); },
  'sec-exame5':      function(){ var c=document.getElementById('exame5-config');var r=document.getElementById('exame5-running');var rs=document.getElementById('exame5-result');if(c)c.style.display='block';if(r)r.style.display='none';if(rs)rs.style.display='none'; },
  'sec-quiz-game5':  function(){ if(typeof qgStartForCap==='function') qgStartForCap(5); },
  'sec-questoes6':   function(){ var el=document.getElementById('q6-container');  if(el && !el.innerHTML && typeof renderQuestoes6==='function') renderQuestoes6(); if(typeof showMini6==='function'&&document.getElementById('m6-container')&&!document.getElementById('m6-container').innerHTML)showMini6(0,null); if(typeof renderTeste6==='function'&&document.getElementById('t6-container')&&!document.getElementById('t6-container').innerHTML)renderTeste6(); },
  'sec-minitestes6': function(){ var el=document.getElementById('m6-container');  if(el && !el.innerHTML && typeof showMini6==='function') showMini6(0,null); },
  'sec-teste6':      function(){ var el=document.getElementById('t6-container');  if(el && !el.innerHTML && typeof renderTeste6==='function') renderTeste6(); },
  'sec-jogos6':      function(){ if(typeof _gInited!=='undefined') delete _gInited['j24-wrap-cap6']; if(typeof _j24AutoInit==='function') _j24AutoInit('j24-wrap-cap6','dificil'); },
  'sec-flashcards6': function(){ if(typeof initFlashcards6==='function') initFlashcards6(); },
  'sec-exame6':      function(){ var c=document.getElementById('exame6-config');var r=document.getElementById('exame6-running');var rs=document.getElementById('exame6-result');if(c)c.style.display='block';if(r)r.style.display='none';if(rs)rs.style.display='none'; },
  'sec-quiz-game6':  function(){ if(typeof qgStartForCap==='function') qgStartForCap(6); },
  'sec-questoes7':   function(){ var el=document.getElementById('q7-container');  if(el && !el.innerHTML && typeof renderQuestoes7==='function') renderQuestoes7(); if(typeof showMini7==='function'&&document.getElementById('m7-container')&&!document.getElementById('m7-container').innerHTML)showMini7(0,null); if(typeof renderTeste7==='function'&&document.getElementById('t7-container')&&!document.getElementById('t7-container').innerHTML)renderTeste7(); },
  'sec-minitestes7': function(){ var el=document.getElementById('m7-container');  if(el && !el.innerHTML && typeof showMini7==='function') showMini7(0,null); },
  'sec-teste7':      function(){ var el=document.getElementById('t7-container');  if(el && !el.innerHTML && typeof renderTeste7==='function') renderTeste7(); },
  'sec-jogos7':      function(){ if(typeof _gInited!=='undefined') delete _gInited['j24-wrap-cap7']; if(typeof _j24AutoInit==='function') _j24AutoInit('j24-wrap-cap7','dificil'); },
  'sec-flashcards7': function(){ if(typeof initFlashcards7==='function') initFlashcards7(); },
  'sec-exame7':      function(){ var c=document.getElementById('exame7-config');var r=document.getElementById('exame7-running');var rs=document.getElementById('exame7-result');if(c)c.style.display='block';if(r)r.style.display='none';if(rs)rs.style.display='none'; },
  'sec-quiz-game7':  function(){ if(typeof qgStartForCap==='function') qgStartForCap(7); },
  'sec-questoes8':   function(){ var el=document.getElementById('q8-container');  if(el && !el.innerHTML && typeof renderQuestoes8==='function') renderQuestoes8(); if(typeof showMini8==='function'&&document.getElementById('m8-container')&&!document.getElementById('m8-container').innerHTML)showMini8(0,null); if(typeof renderTeste8==='function'&&document.getElementById('t8-container')&&!document.getElementById('t8-container').innerHTML)renderTeste8(); },
  'sec-minitestes8': function(){ var el=document.getElementById('m8-container');  if(el && !el.innerHTML && typeof showMini8==='function') showMini8(0,null); },
  'sec-teste8':      function(){ var el=document.getElementById('t8-container');  if(el && !el.innerHTML && typeof renderTeste8==='function') renderTeste8(); },
  'sec-jogos8':      function(){ if(typeof _gInited!=='undefined') delete _gInited['j24-wrap-cap8']; if(typeof _j24AutoInit==='function') _j24AutoInit('j24-wrap-cap8','dificil'); },
  'sec-flashcards8': function(){ if(typeof initFlashcards8==='function') initFlashcards8(); },
  'sec-exame8':      function(){ var c=document.getElementById('exame8-config');var r=document.getElementById('exame8-running');var rs=document.getElementById('exame8-result');if(c)c.style.display='block';if(r)r.style.display='none';if(rs)rs.style.display='none'; },
  'sec-quiz-game8':  function(){ if(typeof qgStartForCap==='function') qgStartForCap(8); }
};

// ── Load content inline into a hub panel ──
// Uses DOM move (not clone) so all event handlers stay alive
var _mat7MovedSections = {}; // track where we moved sections: { tab: [ {el, parent}, ... ] }

// MULTI-CAP UNIFIED RENDERING
// When multiple chapters are selected, merge content into one
// unified component instead of stacking separate sections.

var _mat7CapNames = {1:'Números Inteiros', 2:'Números Racionais', 3:'Geometria', 4:'Equações', 5:'Sequências', 6:'Funções', 7:'Figuras Semelhantes', 8:'Dados e Probabilidades'};

// ── UNIFIED FLASHCARDS ──────────────────────────────────────
var _uniFC = { cards: [], idx: 0, flipped: false };

function mat7RenderUnifiedFlashcards(caps, inlineEl) {
  // Build merged card deck from all selected caps, tagged with cap name
  // flashcards próprias do mat7 (_mat7Cards); fallback aos legados se faltar
  var capCardSources = (typeof _mat7Cards !== 'undefined') ? _mat7Cards : {
    1: typeof FC_CARDS_CAP1 !== 'undefined' ? FC_CARDS_CAP1 : (typeof FC1_CARDS !== 'undefined' ? FC1_CARDS : []),
    2: typeof FC2_CARDS !== 'undefined' ? FC2_CARDS : [],
    3: typeof FC3_CARDS !== 'undefined' ? FC3_CARDS : [],
    4: typeof BANCO4 !== 'undefined' && BANCO4.flashcards ? BANCO4.flashcards : [],
    5: typeof BANCO5 !== 'undefined' && BANCO5.flashcards ? BANCO5.flashcards : [],
    6: typeof BANCO6 !== 'undefined' && BANCO6.flashcards ? BANCO6.flashcards : [],
    7: typeof BANCO7 !== 'undefined' && BANCO7.flashcards ? BANCO7.flashcards : [],
    8: typeof BANCO8 !== 'undefined' && BANCO8.flashcards ? BANCO8.flashcards : []
  };
  var merged = [];
  caps.forEach(function(cap) {
    var src = capCardSources[cap] || [];
    src.forEach(function(card) {
      merged.push({ tag: card.tag, q: card.q, a: card.a });
    });
  });
  // Shuffle
  for (var i = merged.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var tmp = merged[i]; merged[i] = merged[j]; merged[j] = tmp;
  }

  // Swap the active deck and SRS key for a multi-cap session
  FC_CARDS = merged;
  SRS_KEY = 'edupt_srs_multi_' + caps.join('_');

  // Update the sec-header title to reflect mixed caps
  var secFC = document.getElementById('sec-flashcards');
  if (secFC) {
    var h2 = secFC.querySelector('.sec-header h2');
    if (h2) h2.innerHTML = '<span class="num"><i class="ph ph-stack"></i></span> Flashcards ' + caps.length + ' Capítulos';
    var p = secFC.querySelector('.sec-header p');
    if (p) p.textContent = merged.length + ' cartões misturados de ' + caps.length + ' capítulos com repetição espaçada';
  }

  // Move sec-flashcards into the inline panel (same as single-cap flow)
  if (!_mat7MovedSections['flashcards']) _mat7MovedSections['flashcards'] = [];
  if (secFC) {
    _mat7MovedSections['flashcards'].push({ el: secFC, parent: secFC.parentElement });
    secFC.style.display = '';
    secFC.classList.add('active');
    inlineEl.appendChild(secFC);
  }

  // Start the real SRS session
  if (typeof fcStartSession === 'function') setTimeout(fcStartSession, 50);
}
function _uniFC_render() {
  var cards = _uniFC.cards;
  if (!cards.length) return;
  var card = cards[_uniFC.idx];
  var el = function(id) { return document.getElementById(id); };
  el('ufc-cap-label').textContent = card.capName;
  el('ufc-tag').textContent = card.tag;
  el('ufc-q').textContent = card.q;
  el('ufc-a').textContent = card.a;
  el('ufc-counter').textContent = (_uniFC.idx + 1) + ' / ' + cards.length;
  var pct = Math.round((_uniFC.idx + 1) / cards.length * 100);
  if (el('ufc-prog')) el('ufc-prog').style.width = pct + '%';
  _uniFC.flipped = false;
  var inner = el('ufc-inner');
  if (inner) inner.style.transform = '';
  var flipBtn = el('ufc-flip-btn');
  if (flipBtn) flipBtn.textContent = 'Virar';
}

function _uniFC_flip() {
  _uniFC.flipped = !_uniFC.flipped;
  var inner = document.getElementById('ufc-inner');
  if (inner) inner.style.transform = _uniFC.flipped ? 'rotateY(180deg)' : '';
  var flipBtn = document.getElementById('ufc-flip-btn');
  if (flipBtn) flipBtn.textContent = _uniFC.flipped ? 'Ocultar' : 'Virar';
}

function _uniFC_next() {
  if (_uniFC.idx < _uniFC.cards.length - 1) { _uniFC.idx++; _uniFC_render(); }
}

function _uniFC_prev() {
  if (_uniFC.idx > 0) { _uniFC.idx--; _uniFC_render(); }
}

function _uniFC_shuffle() {
  var cards = _uniFC.cards;
  for (var i = cards.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var tmp = cards[i]; cards[i] = cards[j]; cards[j] = tmp;
  }
  _uniFC.idx = 0;
  _uniFC_render();
}

// ── Safe top-level stubs overwritten by mat7RenderUnifiedExercicios when the panel loads.
// Without these, clicking the level/refresh buttons before the panel has ever initialised
// throws "mat7UnifiedQuizLevel is not a function".
window.mat7UnifiedQuizLevel = window.mat7UnifiedQuizLevel || function(level, btn) {
  // No-op until mat7RenderUnifiedExercicios sets the real implementation.
};
window.mat7UnifiedQuizRefresh = window.mat7UnifiedQuizRefresh || function() {
  // No-op until mat7RenderUnifiedExercicios sets the real implementation.
};

// ── UNIFIED JOGOS ───────────────────────────────────────────
function mat7RenderUnifiedJogos(caps, inlineEl) {
  var maxCap = Math.max.apply(null, caps);
  var level = maxCap >= 5 ? 'dificil' : maxCap >= 3 ? 'dificil' : maxCap >= 2 ? 'medio' : 'facil';
  var capStr = caps.map(function(c){ return _mat7CapNames[c] || ('Cap.'+c); }).join(' + ');

  // Tell the question provider which caps to mix
  if (typeof _gActiveCaps !== 'undefined') _gActiveCaps = caps;

  inlineEl.innerHTML = [
    '<div class="sec-header"><h2><i class="ph ph-game-controller"></i> Jogos ' + capStr + '</h2>',
    '<p>Todos os jogos com perguntas dos capítulos selecionados: ' + capStr + '</p></div>',
    '<div id="j24-wrap-unified"></div>'
  ].join('\n');

  if (typeof _j24AutoInit === 'function') {
    if (typeof _gInited !== 'undefined') delete _gInited['j24-wrap-unified'];
    _j24AutoInit('j24-wrap-unified', level);
  }
}

// ── UNIFIED EXERCÍCIOS ──────────────────────────────────────
function mat7RenderUnifiedExercicios(caps, inlineEl) {
  var capNames = _mat7CapNames || {1:'Inteiros',2:'Racionais',3:'Geometria',4:'Equações',5:'Sequências'};
  var currentLevel = 'medio';

  function buildMixedQuiz(level) {
    var allExs = [];
    var dif = level;
    var limObj = typeof lim === 'function' ? lim(dif) : { min: -20, max: 20 };
    var min = limObj.min, max = limObj.max;

    // Per cap: generate 20 questions mixing all types (questoes + minitestes + teste)
    var numPerCap = Math.max(20, Math.ceil(20 / caps.length));

    caps.forEach(function(cap) {
      var capExs = [];

      // Geradores próprios dos caps 5-8 (substituem os bancos BANCO5-8)
      var _m7genCap = { 5: (typeof buildEx_m7c5 === 'function' ? buildEx_m7c5 : null), 6: (typeof buildEx_m7c6 === 'function' ? buildEx_m7c6 : null), 7: (typeof buildEx_m7c7 === 'function' ? buildEx_m7c7 : null), 8: (typeof buildEx_m7c8 === 'function' ? buildEx_m7c8 : null) };
      var _m7nTemas = { 5: 2, 6: 6, 7: 6, 8: 5 };
      if (cap >= 5 && cap <= 8 && _m7genCap[cap]) {
        var gen58 = _m7genCap[cap], nT = _m7nTemas[cap];
        var tipos58 = ['fill', 'mc', 'fill', 'vf', 'mc', 'fill', 'mc', 'fill', 'vf', 'mc'];
        for (var _i58 = 0; _i58 < numPerCap; _i58++) {
          var ex58 = gen58(String((_i58 % nT) + 1), tipos58[_i58 % tipos58.length], dif) || gen58(String((_i58 % nT) + 1), 'fill', dif);
          if (ex58) { ex58._capId = cap; ex58._capLabel = capNames[cap]; ex58.num = allExs.length + capExs.length + 1; capExs.push(ex58); }
        }
      } else {
        // Procedural generation for caps 1-4
        var temas = ['1','2','3','4','5'];

        // Build a varied plan mixing fill, mc, vf, contexto
        var tipos = ['fill','mc','fill','mc','vf','fill','mc','fill','mc','fill',
                     'mc','fill','vf','mc','fill','mc','fill','mc','vf','fill'];

        for (var i = 0; i < numPerCap; i++) {
          var tema = temas[i % temas.length];
          var tipo = tipos[i % tipos.length];
          var ex = null;
          if (cap === 4 && typeof buildEx_m7c4 === 'function') {
            // Cap 4 (Álgebra): gerador leve próprio
            ex = buildEx_m7c4(tema, tipo, dif) || buildEx_m7c4(tema, 'fill', dif);
          } else if (cap === 3 && typeof buildEx_m7c3 === 'function') {
            // Cap 3 (Geometria): gerador leve próprio
            ex = buildEx_m7c3(tema, tipo, dif) || buildEx_m7c3(tema, 'fill', dif);
          } else if (cap === 2 && typeof buildEx_m7c2 === 'function') {
            // Cap 2 (Racionais): gerador leve próprio
            ex = buildEx_m7c2(tema, tipo, dif) || buildEx_m7c2(tema, 'fill', dif);
          } else if (cap === 1 && typeof buildEx_m7c1 === 'function') {
            // Cap 1 (Inteiros): gerador leve próprio (substitui o legado)
            ex = buildEx_m7c1(tema, tipo, dif) || buildEx_m7c1(tema, 'fill', dif);
          } else {
            if (typeof buildExercicio === 'function') {
              ex = buildExercicio(tema, tipo, min, max, capExs.length+1, dif)
                || buildExercicio(tema, 'fill', min, max, capExs.length+1, dif);
            }
          }
          if (ex) {
            ex._capId = cap;
            ex._capLabel = capNames[cap];
            ex.num = allExs.length + capExs.length + 1;
            capExs.push(ex);
          }
        }
      }
      // Shuffle cap questions (Fisher-Yates)
      for (var _si = capExs.length - 1; _si > 0; _si--) {
        var _sj = Math.floor(Math.random() * (_si + 1));
        var _st = capExs[_si]; capExs[_si] = capExs[_sj]; capExs[_sj] = _st;
      }
      allExs = allExs.concat(capExs);
    });

    // Number sequentially
    allExs.forEach(function(ex, i){ ex.num = i + 1; });
    return allExs;
  }

  function renderUnifiedQuiz(level) {
    currentLevel = level;
    var exercicios = buildMixedQuiz(level);
    if (!exercicios.length) {
      inlineEl.innerHTML = '<p style="color:var(--ink4);padding:2rem;text-align:center">Selecciona pelo menos um capítulo.</p>';
      return;
    }

    var capLabels = caps.map(function(c){ return capNames[c] || 'Cap.'+c; }).join(' + ');
    var levelLabel = level === 'facil' ? 'Fácil' : level === 'dificil' ? 'Difícil' : 'Médio';

    var html = [
      '<div class="sec-header"><h2><i class="ph ph-pencil-simple"></i> Exercícios ' + capLabels + '</h2>',
      '<p>' + exercicios.length + ' questões · nível ' + levelLabel + ' · mistura de todos os tipos</p></div>',
      '<div class="level-bar" style="margin-bottom:1.25rem">',
      '  <div class="gen-level-group">',
      '    <span class="gen-level-label">Nível:</span>',
      '    <button class="gen-level-btn' + (level==='facil'?' active':'') + '" onclick="mat7UnifiedQuizLevel(\'facil\',this)"><span style="width:8px;height:8px;border-radius:50%;background:#4caf50;display:inline-block;margin-right:4px"></span>Fácil</button>',
      '    <button class="gen-level-btn' + (level==='medio'?' active':'') + '" onclick="mat7UnifiedQuizLevel(\'medio\',this)"><span style="width:8px;height:8px;border-radius:50%;background:#ff9800;display:inline-block;margin-right:4px"></span>Médio</button>',
      '    <button class="gen-level-btn' + (level==='dificil'?' active':'') + '" onclick="mat7UnifiedQuizLevel(\'dificil\',this)"><span style="width:8px;height:8px;border-radius:50%;background:#f44336;display:inline-block;margin-right:4px"></span>Difícil</button>',
      '  </div>',
      '  <button class="btn btn-ghost" style="margin-left:auto" onclick="mat7UnifiedQuizRefresh()">↺ Novas questões</button>',
      '</div>',
      '<div id="uq-container"></div>',
    ].join('\n');

    inlineEl.innerHTML = html;

    window._mat7UnifiedCaps = caps;
    window._mat7UnifiedLevel = level;

    // Use quiz engine
    if (typeof qzInit === 'function') {
      var sec = 'uq' + caps.join('');
      qzInit('uq-container', exercicios, sec, function(correct, total) {
        // Log progress for each cap
        caps.forEach(function(cap) {
          var capExercises = exercicios.filter(function(ex){ return ex._capId===cap; });
          var capTotal = capExercises.length;
          // Estimate per-cap correct proportionally by cap share
          var capCorrect = capTotal > 0 ? Math.round(correct * capTotal / (exercicios.length || 1)) : 0;
          if (cap===1 && typeof progLog==='function') progLog('questoes', capCorrect > 0);
          else if (cap===2 && typeof progLog2==='function') progLog2('questoes', capCorrect > 0);
          else if (cap===3 && typeof progLog3==='function') progLog3('questoes', capCorrect > 0);
          else if (cap===4 && typeof progLog4==='function') progLog4('questoes', capCorrect > 0);
          if (typeof ProgressManager !== 'undefined') _pmRecord('cap'+cap, 'quiz', {pontuacao:capCorrect, total:capTotal});
        });
        // modo-tarefa: entrega automática do resultado ao terminar o quiz
        if (_mat7TarefaAtiva && typeof Turmas !== 'undefined' && Turmas.guardarResultado) {
          var _st = (typeof _qzState !== 'undefined') ? _qzState['uq-container'] : null;
          var det = (_st && _st.detalhe && _st.detalhe.length)
            ? _st.detalhe
            : exercicios.map(function (ex, i) { return { q: (ex.enun || ('Pergunta ' + (i + 1))), certo: null }; });
          Turmas.guardarResultado(_mat7TarefaAtiva, correct, total, det).then(function () {
            if (typeof eduToast === 'function') eduToast('Trabalho entregue! Acertaste ' + correct + ' de ' + total + '. ✅', 'success');
            _mat7TarefaAtiva = null;
          }).catch(function (e) {
            // falha de rede: avisa e mantém a tarefa ativa para poder tentar de novo
            if (typeof eduToast === 'function') eduToast((e && e.message) || 'Não foi possível entregar. Tenta de novo.', 'error');
            else alert((e && e.message) || 'Não foi possível entregar. Tenta de novo.');
          });
        }
      });
    }
  }

  // Expose level change and refresh
  window.mat7UnifiedQuizLevel = function(level, btn) {
    document.querySelectorAll('#mat7-inline-exercicios .gen-level-btn').forEach(function(b){ b.classList.remove('active'); });
    if (btn) btn.classList.add('active');
    renderUnifiedQuiz(level);
  };
  window.mat7UnifiedQuizRefresh = function() {
    renderUnifiedQuiz(currentLevel);
  };

  renderUnifiedQuiz(currentLevel);
}

function mat7LoadInline(tab) {
  var inlineEl = document.getElementById('mat7-inline-' + tab);
  if (!inlineEl) return;
  
  // Get active caps (may be array for multi-select)
  var caps = _mat7GetActiveCaps(tab);
  
  // Return all previously moved sections for this tab
  mat7ReturnSections(tab);
  
  inlineEl.innerHTML = '';
  var loaded = false;
  
  // ── UNIFIED MULTI-CAP RENDERING ──────────────────────────
  // exercicios: always use unified quiz (1 or more caps)
  if (tab === 'exercicios') {
    mat7RenderUnifiedExercicios(caps, inlineEl);
    return;
  }
  if (caps.length > 1) {
    if (tab === 'flashcards') {
      mat7RenderUnifiedFlashcards(caps, inlineEl);
      return;
    }
    if (tab === 'jogos') {
      mat7RenderUnifiedJogos(caps, inlineEl);
      return;
    }
  }
  
  caps.forEach(function(cap) {
    var secId = (_mat7SecMap[tab] || {})[cap];
    if (!secId) return;
    
    var secEl = document.getElementById(secId);
    if (!secEl) return;
    
    // Save reference to original parent
    if (!_mat7MovedSections[tab]) _mat7MovedSections[tab] = [];
    _mat7MovedSections[tab].push({ el: secEl, parent: secEl.parentElement });
    
    // Add cap divider if multiple caps
    if (caps.length > 1 && loaded) {
      var sep = document.createElement('div');
      sep.style.cssText = 'border-top:2px dashed var(--border2);margin:2rem 0;';
      inlineEl.appendChild(sep);
    }
    if (caps.length > 1) {
      var capLabel = document.createElement('div');
      var capNames = {1:'Números Inteiros', 2:'Números Racionais', 3:'Geometria', 4:'Equações', 5:'Sequências', 6:'Funções', 7:'Figuras Semelhantes', 8:'Dados e Probabilidades'};
      capLabel.style.cssText = 'font-family:"Cormorant Garamond",serif;font-size:1.15rem;font-weight:800;color:var(--sage-dark);margin-bottom:.75rem;display:flex;align-items:center;gap:.5rem';
      capLabel.innerHTML = '<span style="width:28px;height:28px;border-radius:50%;background:var(--sage-dark);color:#fff;display:flex;align-items:center;justify-content:center;font-size:.75rem;font-weight:900">' + cap + '</span> ' + (capNames[cap] || 'Cap. ' + cap);
      inlineEl.appendChild(capLabel);
    }
    
    // Move it
    secEl.style.display = '';
    secEl.classList.add('active');
    inlineEl.appendChild(secEl);
    loaded = true;
    
    // Run init function
    var initFn = _mat7InitMap[secId];
    if (initFn) setTimeout(initFn, 50);
  });
  
  if (!loaded) {
    inlineEl.innerHTML = '<p style="color:var(--ink4);padding:2rem;text-align:center">Conteúdo em preparação para este capítulo.</p>';
  }
}

// Get array of active cap numbers for a tab
function _mat7GetActiveCaps(tab) {
  var row = document.getElementById('mat7-caps-' + tab);
  if (!row) return [1];
  var caps = [];
  row.querySelectorAll('.mat7-cap-btn.active, .gf-cap-btn.active').forEach(function(b) {
    var n = parseInt(b.dataset.cap);
    if (!isNaN(n) && caps.indexOf(n) === -1) caps.push(n);
  });
  return caps.length ? caps : [1];
}

function mat7SwitchTab(tab, btn) {
  // Devolver todas as secções movidas de volta ao stubs antes de trocar painel
  ['exercicios','jogos','flashcards','exame','quiz','testes'].forEach(function(t){ mat7ReturnSections(t); });
  document.querySelectorAll('.mat7-hub-tab').forEach(function(b){ b.classList.remove('active'); });
  // Activar a tab correcta na barra se btn é null, encontrar pela correspondência
  if (btn) {
    btn.classList.add('active');
  } else {
    // Tabs de prática não têm botão próprio activar o botão "Praticar"
    var pratTabs = ['exercicios','jogos','quiz','flashcards','exame'];
    var targetTab = pratTabs.indexOf(tab) !== -1 ? 'praticar' : tab;
    var tabBtn = document.querySelector('.mat7-hub-tab[data-tab="' + targetTab + '"]');
    if (tabBtn) tabBtn.classList.add('active');
  }
  document.querySelectorAll('.mat7-panel').forEach(function(p){ p.classList.remove('active'); p.style.setProperty('display','none','important'); });
  var panel = document.getElementById('mat7p-' + tab);
  if (panel) { panel.classList.add('active'); panel.style.setProperty('display','block','important'); }
  // Update document title
  var _tabTitles = { resumo:'Teoria', exercicios:'Exercícios', flashcards:'Flashcards',
    jogos:'Jogos', exame:'Teste', progresso:'Progresso', quiz:'Quiz', fichas:'Fichas', praticar:'Praticar' };
  if (_tabTitles[tab]) document.title = 'Mat. 7.º ' + _tabTitles[tab] + ' · 3ponto14';
  // Auto-render content
  if (tab === 'resumo') mat7BuildResumoNav();
  else if (tab === 'quiz') { if (typeof qgHubInit === 'function') qgHubInit(); }
  else if (tab === 'progresso') { if (typeof renderProgressoUnificado === 'function') renderProgressoUnificado(); }
  else if (tab === 'exercicios') { mat7LoadInline('exercicios'); }
  else if (_mat7SecMap[tab]) mat7LoadInline(tab);

  // Botão fixo «Atribuir» (só professores) nas tabs Exercícios e Jogos
  if (tab === 'exercicios' && typeof Atribuir !== 'undefined' && Atribuir.fixo) Atribuir.fixo('mat7-ex-atr', 'mat7AtribuirEx');
  if (tab === 'jogos' && typeof Atribuir !== 'undefined' && Atribuir.fixo) Atribuir.fixo('mat7-jogos-atr', 'mat7AtribuirJogo');
}

/* Contexto p/ atribuir EXERCÍCIOS do mat7 (lê o capítulo ativo). */
function mat7AtribuirEx() {
  var cap = _mat7Sel['exercicios'] || 1;
  return { curso: 'mat7', cursoNome: 'Matemática 7.º', tema: String(cap),
    temaNome: _mat7CapNames[cap] || ('Cap. ' + cap), sub: '', subNome: '', tipo: 'quiz', nivel: 'medio' };
}
/* Contexto p/ atribuir JOGOS do mat7 (escolhe-se o tema no overlay). */
function mat7AtribuirJogo() {
  var caps = [];
  for (var n = 1; n <= 8; n++) caps.push({ n: n, label: _mat7CapNames[n] || ('Cap. ' + n) });
  return { curso: 'mat7', cursoNome: 'Matemática 7.º', tipo: 'jogo', nivel: '', caps: caps };
}

/* Deep-link do mat7: ?abrir=praticar|jogos&cap=N abre a tab e o capítulo. */
function _mat7DeepLink() {
  try {
    var p = new URLSearchParams(window.location.search);
    var abrir = p.get('abrir');
    if (abrir !== 'praticar' && abrir !== 'jogos') return;
    var cap = parseInt(p.get('cap'), 10) || 1;
    var tab = abrir === 'jogos' ? 'jogos' : 'exercicios';
    if (p.get('tarefa')) _mat7TarefaAtiva = p.get('tarefa');  // modo-tarefa em praticar OU jogos
    _mat7Sel[tab] = cap;
    setTimeout(function () {
      mat7SwitchTab(tab, null);
      // seleciona o capítulo no seletor desta tab
      var capBtn = document.querySelector('#mat7-caps-' + tab + ' .gf-cap-btn[data-cap="' + cap + '"]');
      if (capBtn) mat7TabCapClick(tab, cap, capBtn);
      // entrega genérica (igual a todos os anos): barra «✓ Já fiz — entregar»
      if (abrir === 'jogos' && _mat7TarefaAtiva && typeof tarefaEntregaBar === 'function') tarefaEntregaBar(_mat7TarefaAtiva, 'Jogo concluído');
    }, 300);
  } catch (e) {}
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', function () { setTimeout(_mat7DeepLink, 350); });
else setTimeout(_mat7DeepLink, 350);

// mat7SwitchHub activa uma tab de "hub" (como Praticar) sem despacho adicional
function mat7SwitchHub(tab, btn) {
  mat7SwitchTab(tab, btn);
}


function mat7RenderSt(tab, cap) {
  var stRow = document.getElementById('mat7-st-' + tab);
  if (!stRow) return;
  var subtemas = _mat7Subtemas[cap] || [];
  var html = '<span class="mat7-st-label">Subtema</span>';
  html += '<button class="mat7-st-chip active" data-st="0" onclick="mat7StSelect(this,\'' + tab + '\')" >Todos</button>';
  subtemas.forEach(function(st, i) {
    html += '<button class="mat7-st-chip" data-st="' + (i+1) + '" onclick="mat7StSelect(this,\'' + tab + '\')">' + st + '</button>';
  });
  stRow.innerHTML = html;
}

function mat7StSelect(btn, tab) {
  var row = btn.closest('.mat7-st-row');
  if (!row) return;
  row.querySelectorAll('.mat7-st-chip').forEach(function(b){ b.classList.remove('active'); });
  btn.classList.add('active');
  // Auto-render inline content for resumo tab
  if (tab === 'resumo') mat7BuildResumoNav();
}

// ═══ TESTES novo sistema cap+subtema igual ao gerador de fichas ═══
var _testeDif = 'facil';


function testeReloadFromGf() {
  // Read active caps from the new gf-style selector
  var activeCaps = [];
  document.querySelectorAll('#gf-caps-testes .gf-cap-btn.active').forEach(function(b) {
    activeCaps.push(parseInt(b.dataset.cap));
  });
  if (!activeCaps.length) activeCaps = [1];

  // Map cap → section
  var secMap = { 1:'sec-teste', 2:'sec-teste2', 3:'sec-teste3', 4:'sec-teste4', 5:'sec-teste5', 6:'sec-teste6' };
  var initMap = {
    'sec-teste':  function(){ var el=document.getElementById('t-container');  if(el && !el.innerHTML && typeof gerarTeste==='function') gerarTeste(); },
    'sec-teste2': function(){ var el=document.getElementById('t2-container'); if(el && !el.innerHTML && typeof gerarTeste2==='function') gerarTeste2(); },
    'sec-teste3': function(){ var el=document.getElementById('t3-container'); if(el && !el.innerHTML && typeof gerarTeste3==='function') gerarTeste3(); },
    'sec-teste4': function(){ var el=document.getElementById('t4-container'); if(el && !el.innerHTML && typeof renderTeste4==='function') renderTeste4(); },
    'sec-teste5': function(){ var el=document.getElementById('t5-container'); if(el && !el.innerHTML && typeof renderTeste5==='function') renderTeste5(); },
    'sec-teste6': function(){ var el=document.getElementById('t6-container'); if(el && !el.innerHTML && typeof renderTeste6==='function') renderTeste6(); }
  };

  // Return previously moved sections
  mat7ReturnSections('testes');
  var inlineEl = document.getElementById('mat7-inline-testes');
  if (!inlineEl) return;
  inlineEl.innerHTML = '';

  var loaded = false;
  var capNames = {1:'Números Inteiros', 2:'Números Racionais', 3:'Geometria', 4:'Equações', 5:'Sequências', 6:'Funções'};

  activeCaps.forEach(function(cap) {
    var secId = secMap[cap];
    if (!secId) return;
    var secEl = document.getElementById(secId);
    if (!secEl) return;

    if (!_mat7MovedSections['testes']) _mat7MovedSections['testes'] = [];
    _mat7MovedSections['testes'].push({ el: secEl, parent: secEl.parentElement });

    if (loaded) {
      var sep = document.createElement('div');
      sep.style.cssText = 'border-top:2px dashed var(--border2);margin:2rem 0;';
      inlineEl.appendChild(sep);
    }

    // Cap label header
    var capLabel = document.createElement('div');
    capLabel.style.cssText = 'font-family:"Cormorant Garamond",serif;font-size:1.15rem;font-weight:800;color:var(--sage-dark);margin-bottom:.75rem;display:flex;align-items:center;gap:.5rem';
    capLabel.innerHTML = '<span style="width:28px;height:28px;border-radius:50%;background:var(--sage-dark);color:#fff;display:flex;align-items:center;justify-content:center;font-size:.75rem;font-weight:900">' + cap + '</span> ' + (capNames[cap] || 'Cap. ' + cap);
    inlineEl.appendChild(capLabel);

    secEl.style.display = '';
    secEl.classList.add('active');
    inlineEl.appendChild(secEl);
    loaded = true;

    var initFn = initMap[secId];
    if (initFn) setTimeout(initFn, 50);
  });

  if (!loaded) {
    inlineEl.innerHTML = '<p style="color:var(--ink4);padding:2rem;text-align:center">Seleciona pelo menos um capítulo.</p>';
  }
}

// ── Render compact study cards in the resumo panel ──

// ══ NOVO SELETOR DE TEORIA ══════════════════════════════════════

function mat7BuildResumoNav() {
  var capRow = document.getElementById('resumo-cap-row');
  if (!capRow) return;

  var capColors = {
    1:'#4f8ef7', 2:'#e06c75', 3:'#98c379', 4:'#e5c07b',
    5:'#c678dd', 6:'#56b6c2', 7:'#d19a66', 8:'#61afef'
  };

  var activeCap = _mat7Sel['resumo'] || 1;
  var h = '';
  _capMeta.forEach(function(m) {
    var color = capColors[m.n] || '#516860';
    var isActive = activeCap === m.n;
    var activeStyle = isActive ? 'background:' + color + ';border-color:' + color + ';color:#fff' : '';
    var hoverCode = isActive ? '' : ' onmouseover="this.style.borderColor=\'' + color + '\';this.style.color=\'' + color + '\'" onmouseout="this.style.borderColor=\'\';this.style.color=\'\'"';
    h += '<button class="resumo-cap-btn' + (isActive ? ' active' : '') + '" data-cap="' + m.n + '" onclick="mat7ResumoSelectCap(' + m.n + ',this)" style="' + activeStyle + '"' + hoverCode + '>'
       + '<span class="resumo-cap-icon">' + m.icon + '</span>' + m.label + '</button>';
  });
  capRow.innerHTML = h;

  mat7ResumoShowSts(activeCap);
  mat7RenderResumoInline();
}

function mat7ResumoSelectCap(cap, btn) {
  _mat7Sel['resumo'] = cap;
  delete _mat7Sel['resumo-st'];

  var capColors = {
    1:'#4f8ef7', 2:'#e06c75', 3:'#98c379', 4:'#e5c07b',
    5:'#c678dd', 6:'#56b6c2', 7:'#d19a66', 8:'#61afef'
  };
  var color = capColors[cap] || '#516860';

  var capRow = document.getElementById('resumo-cap-row');
  if (capRow) {
    capRow.querySelectorAll('.resumo-cap-btn').forEach(function(b) {
      b.classList.remove('active');
      b.style.background = '';
      b.style.borderColor = '';
      b.style.color = '';
    });
  }
  if (btn) {
    btn.classList.add('active');
    btn.style.background = color;
    btn.style.borderColor = color;
    btn.style.color = '#fff';
  }

  mat7ResumoShowSts(cap);
  mat7RenderResumoInline();
}

function mat7ResumoShowSts(cap) {
  var stRow = document.getElementById('resumo-st-row');
  if (!stRow) return;

  var sts = _mat7Subtemas[cap] || [];
  if (!sts.length) { stRow.style.display = 'none'; return; }

  // conta cards por subtema para esconder chips de subtemas sem teoria
  var cardsCap = (typeof _mat7Cards !== 'undefined' && _mat7Cards[cap]) ? _mat7Cards[cap] : [];
  var nPorSt = {};
  cardsCap.forEach(function(c){ if (c.st) nPorSt[c.st] = (nPorSt[c.st] || 0) + 1; });

  var _stSel = _mat7Sel['resumo-st'] || 0;
  var h = '<div class="resumo-st-label">Subtema</div>';
  h += '<button class="resumo-st-btn' + (_stSel === 0 ? ' active' : '') + '" data-st="0" onclick="mat7ResumoSelectSt(this,' + cap + ',0)">Todos</button>';
  sts.forEach(function(st, i) {
    if (!nPorSt[i + 1]) return; // subtema sem flashcards → não mostra o chip
    var isActive = _stSel === (i + 1);
    h += '<button class="resumo-st-btn' + (isActive ? ' active' : '') + '" data-st="' + (i+1) + '" onclick="mat7ResumoSelectSt(this,' + cap + ',' + (i+1) + ')">' + st + '</button>';
  });

  stRow.innerHTML = h;
  stRow.style.display = 'flex';
}

function mat7ResumoSelectSt(btn, cap, stIdx) {
  var stRow = document.getElementById('resumo-st-row');
  if (stRow) {
    stRow.querySelectorAll('.resumo-st-btn').forEach(function(b) { b.classList.remove('active'); });
  }
  if (btn) btn.classList.add('active');
  _mat7Sel['resumo'] = cap;
  _mat7Sel['resumo-st'] = stIdx;
  mat7RenderResumoInline();
}

// ════════════════════════════════════════════════════════════════

function mat7RenderResumoInline() {
  var cap = _mat7Sel['resumo'] || 1;
  var dest = document.getElementById('mat7-resumo-content');
  if (!dest) return;

  // Flashcard sources per cap (same map as mat7RenderUnifiedFlashcards)
  // flashcards próprias do mat7 (_mat7Cards); fallback aos legados se faltar
  var capCardSources = (typeof _mat7Cards !== 'undefined') ? _mat7Cards : {
    1: typeof FC_CARDS_CAP1 !== 'undefined' ? FC_CARDS_CAP1 : (typeof FC1_CARDS !== 'undefined' ? FC1_CARDS : []),
    2: typeof FC2_CARDS !== 'undefined' ? FC2_CARDS : [],
    3: typeof FC3_CARDS !== 'undefined' ? FC3_CARDS : [],
    4: typeof BANCO4 !== 'undefined' && BANCO4.flashcards ? BANCO4.flashcards : [],
    5: typeof BANCO5 !== 'undefined' && BANCO5.flashcards ? BANCO5.flashcards : [],
    6: typeof BANCO6 !== 'undefined' && BANCO6.flashcards ? BANCO6.flashcards : [],
    7: typeof BANCO7 !== 'undefined' && BANCO7.flashcards ? BANCO7.flashcards : [],
    8: typeof BANCO8 !== 'undefined' && BANCO8.flashcards ? BANCO8.flashcards : []
  };

  // Cap colors for accent strip
  var capColors = { 1:'var(--c1-main,#4f8ef7)', 2:'var(--c2-main,#e06c75)', 3:'var(--c3-main,#98c379)',
                    4:'var(--c4-main,#e5c07b)', 5:'var(--c5-main,#c678dd)', 6:'var(--c6-main,#56b6c2)',
                    7:'var(--c7-main,#d19a66)', 8:'var(--c8-main,#61afef)' };
  var color = capColors[cap] || 'var(--sage)';

  // Tag → icon mapping
  var tagIcons = {
    'Definição':'ph-book-bookmark', 'Fórmula':'ph-function', 'Regra':'ph-check-square',
    'Propriedade':'ph-star', 'Exemplo':'ph-pencil-line', 'Estratégia':'ph-lightbulb',
    'Síntese':'ph-seal-check', 'Notação':'ph-at', 'Hierarquia':'ph-tree-structure',
    'Desafio':'ph-lightning', 'Conceito':'ph-cube', 'Teorema':'ph-intersect'
  };

  var allCards = capCardSources[cap] || [];

  // Filtro por subtema usa o campo st de cada flashcard (fiável); 0 = Todos.
  var stIdx = _mat7Sel['resumo-st'] || 0;
  var cards = (stIdx > 0) ? allCards.filter(function(card){ return card.st === stIdx; }) : allCards;

  if (!cards.length) {
    dest.innerHTML = '<p style="color:var(--ink4);padding:2rem;text-align:center">Conteúdo em preparação para este capítulo.</p>';
    return;
  }

  // Acordeão partilhado: grupos colapsáveis + perguntas que abrem a resposta.
  dest.innerHTML = _teoriaAccordionHTML(cards, color, tagIcons);
}

// Return moved sections for a specific tab
function mat7ReturnSections(tab) {
  var prevArr = _mat7MovedSections[tab];
  if (prevArr && prevArr.length) {
    prevArr.forEach(function(prev) {
      if (prev.el && prev.parent) {
        prev.el.classList.remove('active');
        prev.el.style.display = '';
        prev.parent.appendChild(prev.el);
      }
    });
  }
  _mat7MovedSections[tab] = [];
}

// Init subtema rows on load content is rendered lazily when tab is first opened
// mat7RenderResumoInline() is called from mat7SwitchTab when 'resumo' tab is activated

// ═══ MAT7 TAB SUBTEMA SELECTOR nova UI estilo gerador ═══

// Reload de conteúdo por tab
function mat7TabReload(tab) {
  if (tab === 'resumo') {
    // Para o resumo: relê o capítulo activo e re-renderiza
    var row = document.getElementById('mat7-caps-resumo');
    if (row) {
      var activeBtn = row.querySelector('.gf-cap-btn.active');
      if (activeBtn) _mat7Sel['resumo'] = parseInt(activeBtn.dataset.cap) || 1;
    }
    mat7BuildResumoNav();
  } else if (_mat7SecMap[tab]) {
    mat7LoadInline(tab);
  }
}

// Clique num botão de capítulo num tab
function mat7TabCapClick(tab, cap, btn) {
  var container = document.getElementById('mat7-caps-' + tab);
  if (!container) return;
  if (!btn) return;

  if (tab === 'resumo') {
    // Single-select para o resumo
    container.querySelectorAll('.gf-cap-btn').forEach(function(b) { b.classList.remove('active'); });
    btn.classList.add('active');
    _mat7Sel['resumo'] = cap;
  } else {
    // Multi-select toggle para os outros tabs
    btn.classList.toggle('active');
    // Garante que pelo menos 1 está activo
    if (!container.querySelector('.gf-cap-btn.active')) btn.classList.add('active');
  }

  // Toggle tray (abre/fecha subtemas deste capítulo)
  var tray = document.getElementById('mat7-st-' + cap + '-' + tab);
  if (tray) {
    var isActive = btn.classList.contains('active');
    if (!isActive) {
      tray.style.display = 'none';
      tray.classList.remove('hidden');
    } else {
      var isHidden = tray.style.display === 'none' || tray.classList.contains('hidden');
      tray.classList.remove('hidden');
      tray.style.display = isHidden ? 'flex' : 'none';
      tray.style.flexWrap = isHidden ? 'wrap' : '';
      tray.style.gap = isHidden ? '.3rem' : '';
      tray.style.alignItems = isHidden ? 'center' : '';
    }
  }

  mat7TabReload(tab);
}

// Clique num chip de subtema num tab
function mat7TabStClick(btn, tab, cap) {
  if (tab === 'resumo') {
    // Single-select: desactiva todos os chips deste tray e activa só este
    var tray = document.getElementById('mat7-st-' + cap + '-' + tab);
    if (tray) {
      tray.querySelectorAll('.gf-st-chip').forEach(function(c) { c.classList.remove('active'); });
    }
    btn.classList.add('active');
  } else {
    // Multi-select toggle, com garantia de ao menos 1 activo
    btn.classList.toggle('active');
    var tray = document.getElementById('mat7-st-' + cap + '-' + tab);
    if (tray && !tray.querySelector('.gf-st-chip.active')) {
      btn.classList.add('active');
    }
  }
  mat7TabReload(tab);
}

// Seleccionar / desseleccionar todos os subtemas de um cap num tab
function mat7TabStAll(tab, cap, selectAll) {
  var tray = document.getElementById('mat7-st-' + cap + '-' + tab);
  if (!tray) return;
  tray.querySelectorAll('.gf-st-chip').forEach(function(c) {
    if (selectAll) c.classList.add('active');
    else c.classList.remove('active');
  });
  // Para o resumo garante pelo menos 1 activo
  if (tab === 'resumo' && !selectAll) {
    var first = tray.querySelector('.gf-st-chip');
    if (first) first.classList.add('active');
  }
  mat7TabReload(tab);
}

// ══════════════════════════════════════════════════════════════
// ⚡ MODO QUIZ Hub quiz game (3 vidas, streak, game over)
// ══════════════════════════════════════════════════════════════

var _qgHub = {
  cap: 1,
  lives: 3,
  streak: 0,
  maxStreak: 0,
  score: 0,
  total: 0,
  current: null,
  answered: false
};

function qgHubInit() {
  var row = document.getElementById('mat7-caps-quiz');
  var active = row ? row.querySelector('.gf-cap-btn.active') : null;
  _qgHub.cap = active ? (parseInt(active.dataset.cap) || 1) : 1;
  _qgHub.lives = 3;
  _qgHub.streak = 0;
  _qgHub.maxStreak = 0;
  _qgHub.score = 0;
  _qgHub.total = 0;
  _qgHub.answered = false;
  _qgHubNext();
}

function qgHubSelectCap(cap, btn) {
  var row = document.getElementById('mat7-caps-quiz');
  if (row) row.querySelectorAll('.gf-cap-btn').forEach(function(b){ b.classList.remove('active'); });
  if (btn) btn.classList.add('active');
  _qgHub.cap = cap;
  _qgHub.lives = 3;
  _qgHub.streak = 0;
  _qgHub.maxStreak = 0;
  _qgHub.score = 0;
  _qgHub.total = 0;
  _qgHub.answered = false;
  _qgHubNext();
}

function _qgHubBuildQuestion(cap) {
  // Caps 5-8: pull from BANCO relampago pool
  var bancoMap = { 5: (typeof BANCO5 !== 'undefined' ? BANCO5 : null),
                   6: (typeof BANCO6 !== 'undefined' ? BANCO6 : null),
                   7: (typeof BANCO7 !== 'undefined' ? BANCO7 : null),
                   8: (typeof BANCO8 !== 'undefined' ? BANCO8 : null) };
  if (cap >= 5 && bancoMap[cap]) {
    var banco = bancoMap[cap];
    var pool = (banco.relampago && banco.relampago.length) ? banco.relampago : banco.questoes;
    if (!pool || !pool.length) return null;
    var item = pool[Math.floor(Math.random() * pool.length)];
    var correctIdx = (typeof item.c !== 'undefined') ? item.c : 0;
    return {
      enun: item.q || item.enunciado || '',
      opcoes: item.opts || [],
      resposta: item.opts ? item.opts[correctIdx] : '',
      tipo: 'mc',
      expl: item.fb || ''
    };
  }

  var temas = ['1','2','3','4','5'];
  var tema = temas[Math.floor(Math.random() * temas.length)];
  var ex = null;
  if (cap === 4) {
    if (typeof buildEx4 === 'function') ex = buildEx4(tema, 'medio');
  } else if (cap === 3) {
    if (typeof buildEx3 === 'function') ex = buildEx3(tema, 'mc', 'medio');
  } else if (cap === 2) {
    if (typeof buildEx2 === 'function') ex = buildEx2(tema, 'mc', 'medio');
  } else {
    if (typeof buildExercicio === 'function') ex = buildExercicio(tema, 'mc', -12, 12, 1, 'medio');
  }
  // fallback: try mc, then fill
  if (!ex || ex.tipo !== 'mc') {
    for (var i = 0; i < 8; i++) {
      tema = temas[Math.floor(Math.random() * temas.length)];
      if (cap === 2 && typeof buildEx2 === 'function') ex = buildEx2(tema, 'mc', 'medio');
      else if (cap === 3 && typeof buildEx3 === 'function') ex = buildEx3(tema, 'mc', 'medio');
      else if (cap === 4 && typeof buildEx4 === 'function') ex = buildEx4(tema, 'medio');
      else if (typeof buildExercicio === 'function') ex = buildExercicio(tema, 'mc', -12, 12, 1, 'medio');
      if (ex && ex.tipo === 'mc' && ex.opcoes && ex.opcoes.length >= 2) break;
    }
  }
  return (ex && ex.tipo === 'mc' && ex.opcoes && ex.opcoes.length >= 2) ? ex : null;
}

function _qgHubNext() {
  var app = document.getElementById('qg-hub-app');
  if (!app) return;

  if (_qgHub.lives <= 0) {
    _qgHubGameOver(app);
    return;
  }

  var ex = _qgHubBuildQuestion(_qgHub.cap);
  if (!ex) {
    app.innerHTML = '<p style="color:var(--ink4);padding:2rem;text-align:center">Sem questões disponíveis para este capítulo.</p>';
    return;
  }
  _qgHub.current = ex;
  _qgHub.answered = false;

  var livesHtml = '';
  for (var i = 0; i < 3; i++) livesHtml += (i < _qgHub.lives ? '❤️' : '🖤') + ' ';

  var optsHtml = '';
  ex.opcoes.forEach(function(opt, idx) {
    optsHtml += '<button class="qg-opt-btn" id="qgopt-' + idx + '" onclick="qgHubAnswer(' + idx + ')">' + opt + '</button>';
  });

  app.innerHTML =
    '<div class="qg-hub-bar">' +
      '<div class="qg-hub-lives">' + livesHtml + '</div>' +
      '<div class="qg-hub-streak">' + (_qgHub.streak > 1 ? '🔥 ' + _qgHub.streak + ' seguidas' : '') + '</div>' +
      '<div class="qg-hub-score">✓ ' + _qgHub.score + ' / ' + _qgHub.total + '</div>' +
    '</div>' +
    '<div class="qg-hub-question">' + ex.enun + '</div>' +
    '<div class="qg-hub-opts">' + optsHtml + '</div>' +
    '<div class="qg-hub-feedback" id="qg-hub-fb" style="min-height:2.5rem"></div>';
}

function qgHubAnswer(idx) {
  if (_qgHub.answered) return;
  _qgHub.answered = true;
  var ex = _qgHub.current;
  if (!ex) return;

  var correct = ex.opcoes[idx] === ex.resposta;
  _qgHub.total++;

  var allBtns = document.querySelectorAll('.qg-opt-btn');
  allBtns.forEach(function(b, i) {
    b.disabled = true;
    if (ex.opcoes[i] === ex.resposta) { b.style.background = '#4caf50'; b.style.color = '#fff'; }
  });
  var clicked = document.getElementById('qgopt-' + idx);
  if (clicked && !correct) { clicked.style.background = '#f44336'; clicked.style.color = '#fff'; }

  var fb = document.getElementById('qg-hub-fb');
  if (correct) {
    _qgHub.score++;
    _qgHub.streak++;
    if (_qgHub.streak > _qgHub.maxStreak) _qgHub.maxStreak = _qgHub.streak;
    if (fb) fb.innerHTML = '<span style="color:#4caf50;font-weight:700">✓ Correto!' + (_qgHub.streak >= 3 ? ' 🔥 Streak de ' + _qgHub.streak + '!' : '') + '</span>' + (ex.expl ? ' <span style="color:var(--ink3);font-size:.85rem">' + ex.expl + '</span>' : '');
  } else {
    _qgHub.lives--;
    _qgHub.streak = 0;
    if (fb) fb.innerHTML = '<span style="color:#f44336;font-weight:700">✗ Errado.</span> A resposta era <strong>' + ex.resposta + '</strong>.' + (ex.expl ? ' <span style="color:var(--ink3);font-size:.85rem">' + ex.expl + '</span>' : '');
  }

  var app = document.getElementById('qg-hub-app');
  if (_qgHub.lives <= 0) {
    setTimeout(function(){ if(app) _qgHubGameOver(app); }, 1400);
  } else {
    var btn = document.createElement('button');
    btn.className = 'btn btn-primary';
    btn.style.cssText = 'margin-top:1rem';
    btn.textContent = 'Próxima →';
    btn.onclick = _qgHubNext;
    if (fb) fb.appendChild(btn);
  }
}

function _qgHubGameOver(app) {
  var pct = _qgHub.total > 0 ? Math.round(_qgHub.score / _qgHub.total * 100) : 0;
  var emoji = pct >= 90 ? '🏆' : pct >= 70 ? '⭐' : pct >= 50 ? '👍' : '📚';
  app.innerHTML =
    '<div style="text-align:center;padding:2.5rem 1rem">' +
      '<div style="font-size:3.5rem;margin-bottom:.75rem">' + emoji + '</div>' +
      '<div style="font-family:\'Cormorant Garamond\',serif;font-size:2rem;font-weight:900;color:var(--ink)">' + pct + '%</div>' +
      '<div style="color:var(--ink3);margin:.5rem 0 1.5rem">' + _qgHub.score + ' certas em ' + _qgHub.total + ' questões</div>' +
      '<div style="font-size:1.5rem;margin-bottom:1.5rem">Melhor sequência: ' + (_qgHub.maxStreak || 0) + ' 🔥</div>' +
      '<button class="btn btn-primary" onclick="qgHubInit()">↺ Jogar novamente</button>' +
    '</div>';
}


/* ═══════════════════════════════════════════════════════════════════
   GERADOR LEVE Cap 1 — Números Inteiros (7.º ano)
   Substitui o legado buildExercicio (cap1.js) por geradores próprios,
   no estilo dos outros cursos. Temas:
     1 Conjunto ℤ · 2 Valor absoluto e simétrico · 3 Adição de inteiros
     4 Subtração de inteiros · 5 Expressões com parênteses
   Matemática validada por amostragem. tipo: 'mc' | 'fill' | 'vf'.
   ═══════════════════════════════════════════════════════════════════ */
function _m7rnd(a, b) { return Math.floor(Math.random() * (b - a + 1)) + a; }
function _m7rndNZ(a, b) { var v; do { v = _m7rnd(a, b); } while (v === 0); return v; }
function _m7shuffle(arr) { for (var i = arr.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = arr[i]; arr[i] = arr[j]; arr[j] = t; } return arr; }
/* opções de escolha múltipla a partir da resposta certa + distratores */
function _m7mc(correta, distratores) {
  var opc = [String(correta)];
  for (var i = 0; i < distratores.length && opc.length < 4; i++) {
    var d = String(distratores[i]);
    if (opc.indexOf(d) === -1) opc.push(d);
  }
  _m7shuffle(opc);
  return { opcoes: opc, resposta: String(correta) };
}

function buildEx_m7c1(tema, tipo, dif) {
  tema = String(tema);
  var amp = (dif === 'facil') ? 9 : (dif === 'dificil' ? 30 : 15); // amplitude dos números

  // ── TEMA 1: Conjunto dos Inteiros (ℤ, ℤ⁺, ℤ⁻, ℕ) ──
  if (tema === '1') {
    var n = _m7rndNZ(-amp, amp);
    var ehNatural = n > 0;            // ℕ = {1,2,3,…}
    if (tipo === 'vf') {
      var afirmacoes = [
        { txt: 'O número <strong>' + n + '</strong> pertence a ℤ (inteiros).', v: true },
        { txt: 'O número <strong>' + n + '</strong> pertence a ℤ⁺ (inteiros positivos).', v: n > 0 },
        { txt: 'O número <strong>' + n + '</strong> pertence a ℤ⁻ (inteiros negativos).', v: n < 0 },
        { txt: 'O número <strong>' + n + '</strong> é um número natural (ℕ).', v: ehNatural }
      ];
      var a = afirmacoes[_m7rnd(0, afirmacoes.length - 1)];
      return { enun: a.txt, tipo: 'vf', resposta: a.v ? 'Verdadeiro' : 'Falso', opcoes: ['Verdadeiro', 'Falso'], expl: 'ℤ inclui positivos, negativos e o zero. ℕ são só os positivos (1, 2, 3, …).' };
    }
    if (tipo === 'mc') {
      var conj = n > 0 ? 'ℤ⁺' : 'ℤ⁻';
      var mc = _m7mc(conj, ['ℤ⁺', 'ℤ⁻', 'ℕ₀']);
      return { enun: 'A que conjunto pertence <strong>' + n + '</strong> (positivos ℤ⁺ ou negativos ℤ⁻)?', tipo: 'mc', opcoes: mc.opcoes, resposta: mc.resposta, expl: n + (n > 0 ? ' é positivo → ℤ⁺.' : ' é negativo → ℤ⁻.') };
    }
    return { enun: 'O número <strong>' + n + '</strong> é positivo ou negativo? (escreve «positivo» ou «negativo»)', tipo: 'fill', resposta: n > 0 ? 'positivo' : 'negativo', expl: 'Os números à direita do zero são positivos; à esquerda, negativos.' };
  }

  // ── TEMA 2: Valor absoluto e simétrico ──
  if (tema === '2') {
    var x = _m7rndNZ(-amp, amp);
    var abs = Math.abs(x), sim = -x;
    var modo = _m7rnd(0, 1);
    if (tipo === 'mc') {
      if (modo === 0) { var m1 = _m7mc(abs, [sim, x, abs + 1]); return { enun: 'Qual é o valor absoluto de <strong>' + x + '</strong>, ou seja |' + x + '|?', tipo: 'mc', opcoes: m1.opcoes, resposta: m1.resposta, expl: 'O valor absoluto é a distância ao zero: |' + x + '| = ' + abs + '.' }; }
      var m2 = _m7mc(sim, [x, abs, -abs]); return { enun: 'Qual é o simétrico de <strong>' + x + '</strong>?', tipo: 'mc', opcoes: m2.opcoes, resposta: m2.resposta, expl: 'O simétrico troca o sinal: o simétrico de ' + x + ' é ' + sim + '.' };
    }
    if (tipo === 'vf') {
      var op = _m7rnd(0, 1);
      var txt2 = op === 0 ? ('|' + x + '| = ' + abs) : ('O simétrico de ' + x + ' é ' + (-x));
      return { enun: '<strong>' + txt2 + '</strong> — verdadeiro ou falso?', tipo: 'vf', resposta: 'Verdadeiro', opcoes: ['Verdadeiro', 'Falso'], expl: '|' + x + '| = ' + abs + ' e o simétrico de ' + x + ' é ' + (-x) + '.' };
    }
    if (modo === 0) return { enun: 'Calcula o valor absoluto: |' + x + '| = ?', tipo: 'fill', resposta: String(abs), expl: 'A distância de ' + x + ' ao zero é ' + abs + '.' };
    return { enun: 'Escreve o simétrico de <strong>' + x + '</strong>:', tipo: 'fill', resposta: String(sim), expl: 'Troca-se o sinal: ' + sim + '.' };
  }

  // ── TEMA 3: Adição de inteiros ──
  if (tema === '3') {
    var a3 = _m7rndNZ(-amp, amp), b3 = _m7rndNZ(-amp, amp);
    var soma = a3 + b3;
    var enun3 = '(' + a3 + ') + (' + b3 + ')';
    if (tipo === 'mc') { var m3 = _m7mc(soma, [a3 - b3, soma + 1, -soma, soma - 2]); return { enun: 'Calcula: <strong>' + enun3 + '</strong>', tipo: 'mc', opcoes: m3.opcoes, resposta: m3.resposta, expl: enun3 + ' = ' + soma + '. (Sinais iguais: somam-se e mantém-se o sinal; sinais diferentes: subtrai-se e fica o sinal do maior em módulo.)' }; }
    if (tipo === 'vf') { var errada = (Math.random() < .5); var mostrado = errada ? soma + _m7rndNZ(-3, 3) : soma; return { enun: '<strong>' + enun3 + ' = ' + mostrado + '</strong> — verdadeiro ou falso?', tipo: 'vf', resposta: (mostrado === soma) ? 'Verdadeiro' : 'Falso', opcoes: ['Verdadeiro', 'Falso'], expl: enun3 + ' = ' + soma + '.' }; }
    return { enun: 'Calcula: <strong>' + enun3 + '</strong> =', tipo: 'fill', resposta: String(soma), expl: enun3 + ' = ' + soma + '.' };
  }

  // ── TEMA 4: Subtração de inteiros ──
  if (tema === '4') {
    var a4 = _m7rndNZ(-amp, amp), b4 = _m7rndNZ(-amp, amp);
    var dif4 = a4 - b4;
    var enun4 = '(' + a4 + ') − (' + b4 + ')';
    if (tipo === 'mc') { var m4 = _m7mc(dif4, [a4 + b4, dif4 + 1, -dif4, dif4 - 2]); return { enun: 'Calcula: <strong>' + enun4 + '</strong>', tipo: 'mc', opcoes: m4.opcoes, resposta: m4.resposta, expl: 'Subtrair é somar o simétrico: ' + enun4 + ' = ' + a4 + ' + (' + (-b4) + ') = ' + dif4 + '.' }; }
    if (tipo === 'vf') { var err4 = (Math.random() < .5); var mos4 = err4 ? dif4 + _m7rndNZ(-3, 3) : dif4; return { enun: '<strong>' + enun4 + ' = ' + mos4 + '</strong> — verdadeiro ou falso?', tipo: 'vf', resposta: (mos4 === dif4) ? 'Verdadeiro' : 'Falso', opcoes: ['Verdadeiro', 'Falso'], expl: enun4 + ' = ' + dif4 + '.' }; }
    return { enun: 'Calcula: <strong>' + enun4 + '</strong> =', tipo: 'fill', resposta: String(dif4), expl: 'Subtrair é somar o simétrico: = ' + dif4 + '.' };
  }

  // ── TEMA 5: Expressões com parênteses ──
  if (tema === '5') {
    var a5 = _m7rndNZ(-amp, amp), b5 = _m7rndNZ(-amp, amp), c5 = _m7rndNZ(-amp, amp);
    // a - (b - c)  ou  a + (b - c)
    var maisOuMenos = _m7rnd(0, 1);
    var val, enun5;
    if (maisOuMenos === 0) { val = a5 - (b5 - c5); enun5 = a5 + ' − (' + b5 + ' − ' + c5 + ')'; }
    else { val = a5 + (b5 - c5); enun5 = a5 + ' + (' + b5 + ' − ' + c5 + ')'; }
    enun5 = enun5.replace(/− -/g, '+ ').replace(/\+ -/g, '− ');
    if (tipo === 'mc') { var m5 = _m7mc(val, [val + _m7rndNZ(1, 4), val - _m7rndNZ(1, 4), -val]); return { enun: 'Calcula, tirando os parênteses: <strong>' + enun5 + '</strong>', tipo: 'mc', opcoes: m5.opcoes, resposta: m5.resposta, expl: 'Resolve primeiro os parênteses. = ' + val + '. (Um «−» antes do parênteses troca os sinais lá dentro.)' }; }
    return { enun: 'Calcula: <strong>' + enun5 + '</strong> =', tipo: 'fill', resposta: String(val), expl: 'Primeiro os parênteses; atenção ao sinal antes deles. = ' + val + '.' };
  }

  return null;
}

/* ── helpers de fração para os geradores do mat7 ── */
function _m7gcd(a, b) { a = Math.abs(a); b = Math.abs(b); while (b) { var t = b; b = a % b; a = t; } return a || 1; }
function _m7reduz(p, q) { if (q < 0) { p = -p; q = -q; } var g = _m7gcd(p, q); return [p / g, q / g]; }
function _m7frac(p, q) { var r = _m7reduz(p, q); return r[1] === 1 ? String(r[0]) : (r[0] + '/' + r[1]); }

/* ═══ GERADOR Cap 2 — Números Racionais (7.º ano) ═══
   1 Comparação/ordenação · 2 Frações (+/−) · 3 Percentagens
   4 Potências · 5 Notação científica */
function buildEx_m7c2(tema, tipo, dif) {
  tema = String(tema);
  var amp = (dif === 'facil') ? 6 : (dif === 'dificil' ? 12 : 9);

  // ── TEMA 1: Comparação e ordenação de racionais ──
  if (tema === '1') {
    var p1 = _m7rnd(1, amp), q1 = _m7rnd(2, amp), p2 = _m7rnd(1, amp), q2 = _m7rnd(2, amp);
    var v1 = p1 / q1, v2 = p2 / q2;
    if (v1 === v2) q2 = q2 + 1; v2 = p2 / q2;
    var maior = (v1 > v2) ? (p1 + '/' + q1) : (p2 + '/' + q2);
    if (tipo === 'fill') return { enun: 'Qual é a maior fração: <strong>' + p1 + '/' + q1 + '</strong> ou <strong>' + p2 + '/' + q2 + '</strong>? (escreve a fração)', tipo: 'fill', resposta: maior, expl: 'Compara os valores: ' + p1 + '/' + q1 + ' ≈ ' + v1.toFixed(2) + ' e ' + p2 + '/' + q2 + ' ≈ ' + v2.toFixed(2) + '.' };
    var sinal = v1 > v2 ? '>' : '<';
    var mc = _m7mc(sinal, ['>', '<', '=']);
    return { enun: 'Compara: ' + p1 + '/' + q1 + ' ___ ' + p2 + '/' + q2 + ' (qual o sinal correto?)', tipo: 'mc', opcoes: mc.opcoes, resposta: mc.resposta, expl: p1 + '/' + q1 + ' ≈ ' + v1.toFixed(2) + ', ' + p2 + '/' + q2 + ' ≈ ' + v2.toFixed(2) + '.' };
  }

  // ── TEMA 2: Adição e subtração de frações ──
  if (tema === '2') {
    var a = _m7rnd(1, amp), b = _m7rnd(2, amp), c = _m7rnd(1, amp), d = _m7rnd(2, amp);
    var soma = (Math.random() < .5);
    var np = soma ? (a * d + c * b) : (a * d - c * b), nq = b * d;
    var resp = _m7frac(np, nq);
    var op = soma ? '+' : '−';
    if (tipo === 'mc') {
      var errado = _m7frac(np + nq, nq);
      var mc2 = _m7mc(resp, [errado, _m7frac(a + c, b + d), _m7frac(np, nq + 1)]);
      return { enun: 'Calcula: <strong>' + a + '/' + b + ' ' + op + ' ' + c + '/' + d + '</strong>', tipo: 'mc', opcoes: mc2.opcoes, resposta: mc2.resposta, expl: 'Reduz ao mesmo denominador (' + nq + ') e ' + (soma ? 'soma' : 'subtrai') + ' os numeradores → ' + resp + '.' };
    }
    return { enun: 'Calcula (simplifica se der): <strong>' + a + '/' + b + ' ' + op + ' ' + c + '/' + d + '</strong>', tipo: 'fill_frac', resposta: resp, expl: 'Denominador comum ' + nq + ' → ' + resp + '.' };
  }

  // ── TEMA 3: Percentagens ──
  if (tema === '3') {
    var pcts = [10, 20, 25, 50, 5, 75, 30];
    var pct = pcts[_m7rnd(0, pcts.length - 1)];
    // base múltipla de 100 / divisor da %: garante resultado SEMPRE inteiro
    var base = _m7rnd(2, 12) * 100; // múltiplo de 100 → todas estas % dão inteiro
    var val = base * pct / 100;
    if (tipo === 'mc') { var mc3 = _m7mc(val, [base * pct / 10, val + 5, val * 2]); return { enun: 'Quanto é <strong>' + pct + '% de ' + base + '</strong>?', tipo: 'mc', opcoes: mc3.opcoes, resposta: mc3.resposta, expl: pct + '% = ' + pct + '/100. ' + pct + '% de ' + base + ' = ' + base + '×' + pct + '/100 = ' + val + '.' }; }
    return { enun: 'Calcula <strong>' + pct + '% de ' + base + '</strong>:', tipo: 'fill', resposta: String(val), expl: base + ' × ' + pct + ' ÷ 100 = ' + val + '.' };
  }

  // ── TEMA 4: Potências ──
  if (tema === '4') {
    var base4 = _m7rnd(2, (dif === 'facil' ? 5 : 9)), exp4 = _m7rnd(2, (dif === 'dificil' ? 4 : 3));
    var val4 = Math.pow(base4, exp4);
    if (tipo === 'mc') { var mc4 = _m7mc(val4, [base4 * exp4, val4 + base4, Math.pow(base4, exp4 - 1)]); return { enun: 'Calcula a potência: <strong>' + base4 + '<sup>' + exp4 + '</sup></strong>', tipo: 'mc', opcoes: mc4.opcoes, resposta: mc4.resposta, expl: base4 + '<sup>' + exp4 + '</sup> = ' + base4 + ' multiplicado por si próprio ' + exp4 + ' vezes = ' + val4 + '.' }; }
    if (tipo === 'vf') { var mostrado = (Math.random() < .5) ? val4 : base4 * exp4; return { enun: '<strong>' + base4 + '<sup>' + exp4 + '</sup> = ' + mostrado + '</strong> — verdadeiro ou falso?', tipo: 'vf', resposta: (mostrado === val4) ? 'Verdadeiro' : 'Falso', opcoes: ['Verdadeiro', 'Falso'], expl: base4 + '<sup>' + exp4 + '</sup> = ' + val4 + ' (não confundir com ' + base4 + '×' + exp4 + ').' }; }
    return { enun: 'Calcula: <strong>' + base4 + '<sup>' + exp4 + '</sup></strong> =', tipo: 'fill', resposta: String(val4), expl: '= ' + val4 + '.' };
  }

  // ── TEMA 5: Notação científica ──
  if (tema === '5') {
    var mant = _m7rnd(1, 9), ordem = _m7rnd(2, 6);
    var numero = mant * Math.pow(10, ordem);
    var sci = mant + ' × 10^' + ordem;
    if (Math.random() < .5) {
      // dar número, pedir notação científica (mantissa)
      return { enun: 'Escreve <strong>' + numero.toLocaleString('pt-PT') + '</strong> em notação científica: ___ × 10^' + ordem + ' (qual a mantissa?)', tipo: 'fill', resposta: String(mant), expl: numero + ' = ' + mant + ' × 10^' + ordem + '.' };
    }
    // dar notação científica, pedir número
    return { enun: 'Qual é o número correspondente a <strong>' + sci + '</strong>?', tipo: 'fill', resposta: String(numero), expl: mant + ' × 10^' + ordem + ' = ' + mant + ' seguido de ' + ordem + ' zeros = ' + numero + '.' };
  }

  return null;
}

/* ═══ GERADOR Cap 4 — Álgebra (7.º ano) ═══
   1 Sequências/termo geral · 2 Expressões algébricas · 3 Simplificação
   4 Equações do 1.º grau · 5 Inequações */
function buildEx_m7c4(tema, tipo, dif) {
  tema = String(tema);
  var amp = (dif === 'facil') ? 5 : (dif === 'dificil' ? 12 : 8);

  // ── TEMA 1: Sequências e termo geral (an = a + (n-1)d ou linear) ──
  if (tema === '1') {
    var a0 = _m7rnd(1, amp), d = _m7rndNZ(-4, 6); // termo geral: a0 + d*n  (n=1,2,3…) -> usamos un = a0 + d*(n-1)? simplificamos: termo n = m*n + b
    var m = _m7rndNZ(2, 6), b = _m7rnd(-5, 8);
    var t1 = m * 1 + b, t2 = m * 2 + b, t3 = m * 3 + b;
    var nPed = _m7rnd(4, 8);
    var alvo = m * nPed + b;
    if (tipo === 'mc') { var mc = _m7mc(alvo, [alvo + m, alvo - m, m * nPed]); return { enun: 'Numa sequência, o termo de ordem n é <strong>' + m + 'n ' + (b >= 0 ? '+ ' + b : '− ' + (-b)) + '</strong>. Qual é o termo de ordem ' + nPed + '?', tipo: 'mc', opcoes: mc.opcoes, resposta: mc.resposta, expl: 'Substitui n = ' + nPed + ': ' + m + '×' + nPed + ' ' + (b >= 0 ? '+ ' + b : '− ' + (-b)) + ' = ' + alvo + '.' }; }
    return { enun: 'O termo geral de uma sequência é <strong>' + m + 'n ' + (b >= 0 ? '+ ' + b : '− ' + (-b)) + '</strong>. Calcula o termo de ordem ' + nPed + ':', tipo: 'fill', resposta: String(alvo), expl: m + '×' + nPed + ' ' + (b >= 0 ? '+ ' + b : '− ' + (-b)) + ' = ' + alvo + '.' };
  }

  // ── TEMA 2: Expressões algébricas (valor numérico) ──
  if (tema === '2') {
    var coef = _m7rndNZ(2, amp), cons = _m7rnd(-amp, amp), xv = _m7rndNZ(-6, 6);
    var val = coef * xv + cons;
    var expr = coef + 'x ' + (cons >= 0 ? '+ ' + cons : '− ' + (-cons));
    if (tipo === 'mc') { var mc2 = _m7mc(val, [coef * xv, val + coef, coef + xv + cons]); return { enun: 'Calcula o valor de <strong>' + expr + '</strong> para <strong>x = ' + xv + '</strong>.', tipo: 'mc', opcoes: mc2.opcoes, resposta: mc2.resposta, expl: 'Substitui x por ' + xv + ': ' + coef + '×(' + xv + ') ' + (cons >= 0 ? '+ ' + cons : '− ' + (-cons)) + ' = ' + val + '.' }; }
    return { enun: 'Determina o valor numérico de <strong>' + expr + '</strong> quando <strong>x = ' + xv + '</strong>:', tipo: 'fill', resposta: String(val), expl: coef + '×(' + xv + ') ' + (cons >= 0 ? '+ ' + cons : '− ' + (-cons)) + ' = ' + val + '.' };
  }

  // ── TEMA 3: Simplificação (juntar termos semelhantes) ──
  if (tema === '3') {
    var ax = _m7rndNZ(1, amp), bx = _m7rndNZ(-amp, amp), k1 = _m7rndNZ(-amp, amp), k2 = _m7rndNZ(-amp, amp);
    var cx = ax + bx, ck = k1 + k2;
    var expr3 = ax + 'x ' + (k1 >= 0 ? '+ ' + k1 : '− ' + (-k1)) + ' ' + (bx >= 0 ? '+ ' + bx + 'x' : '− ' + (-bx) + 'x') + ' ' + (k2 >= 0 ? '+ ' + k2 : '− ' + (-k2));
    var resp3 = (cx === 0 ? '' : (cx === 1 ? 'x' : (cx === -1 ? '−x' : cx + 'x'))) + (ck === 0 ? '' : (cx === 0 ? String(ck) : (ck > 0 ? ' + ' + ck : ' − ' + (-ck))));
    if (resp3 === '') resp3 = '0';
    return { enun: 'Simplifica (junta os termos semelhantes): <strong>' + expr3 + '</strong>', tipo: 'fill', resposta: resp3, expl: 'Termos em x: ' + ax + 'x ' + (bx >= 0 ? '+ ' + bx + 'x' : '− ' + (-bx) + 'x') + ' = ' + cx + 'x. Constantes: ' + k1 + ' ' + (k2 >= 0 ? '+ ' + k2 : '− ' + (-k2)) + ' = ' + ck + '. → ' + resp3 + '.' };
  }

  // ── TEMA 4: Equações do 1.º grau (ax + b = c) ──
  if (tema === '4') {
    var a4 = _m7rndNZ(2, 6), x4 = _m7rnd(-6, 6), b4 = _m7rnd(-amp, amp);
    var c4 = a4 * x4 + b4; // garante solução inteira
    var eq = a4 + 'x ' + (b4 >= 0 ? '+ ' + b4 : '− ' + (-b4)) + ' = ' + c4;
    if (tipo === 'mc') { var mc4 = _m7mc(x4, [x4 + 1, x4 - 1, -x4]); return { enun: 'Resolve a equação: <strong>' + eq + '</strong>. Qual é o valor de x?', tipo: 'mc', opcoes: mc4.opcoes, resposta: mc4.resposta, expl: a4 + 'x = ' + c4 + ' ' + (b4 >= 0 ? '− ' + b4 : '+ ' + (-b4)) + ' = ' + (c4 - b4) + '; x = ' + (c4 - b4) + ' ÷ ' + a4 + ' = ' + x4 + '.' }; }
    return { enun: 'Resolve em ordem a x: <strong>' + eq + '</strong>. x =', tipo: 'fill', resposta: String(x4), expl: a4 + 'x = ' + (c4 - b4) + '; x = ' + x4 + '.' };
  }

  // ── TEMA 5: Inequações simples (ax > c, a>0) ──
  if (tema === '5') {
    var a5 = _m7rnd(2, 5), x5 = _m7rnd(-5, 8);
    var c5 = a5 * x5;
    var ineq = a5 + 'x > ' + c5;
    // solução: x > x5
    if (tipo === 'mc') { var mc5 = _m7mc('x > ' + x5, ['x > ' + x5, 'x < ' + x5, 'x > ' + (x5 + 1)]); return { enun: 'Resolve a inequação: <strong>' + ineq + '</strong>', tipo: 'mc', opcoes: mc5.opcoes, resposta: mc5.resposta, expl: 'Divide ambos os lados por ' + a5 + ' (positivo, mantém o sinal): x > ' + c5 + '÷' + a5 + ' = ' + x5 + '.' }; }
    return { enun: 'Resolve a inequação <strong>' + ineq + '</strong>. Escreve a solução na forma «x > k» ou «x < k»:', tipo: 'fill', resposta: 'x > ' + x5, expl: 'Como ' + a5 + ' > 0, o sinal mantém-se: x > ' + x5 + '.' };
  }

  return null;
}

/* ═══ GERADOR Cap 3 — Geometria (7.º ano) ═══
   1 Ângulos internos de polígonos · 2 Triângulos · 3 Semelhança
   4 Áreas de figuras planas · 5 Circunferência (π) */
function buildEx_m7c3(tema, tipo, dif) {
  tema = String(tema);

  // ── TEMA 1: Soma dos ângulos internos = (n−2)×180 ──
  if (tema === '1') {
    var n = _m7rnd(3, 8);
    var nomes = { 3: 'triângulo', 4: 'quadrilátero', 5: 'pentágono', 6: 'hexágono', 7: 'heptágono', 8: 'octógono' };
    var soma = (n - 2) * 180;
    if (tipo === 'mc') { var mc = _m7mc(soma + 'º', [(n * 180) + 'º', ((n - 1) * 180) + 'º', (soma + 180) + 'º']); return { enun: 'Qual é a soma dos ângulos internos de um <strong>' + nomes[n] + '</strong> (' + n + ' lados)?', tipo: 'mc', opcoes: mc.opcoes, resposta: mc.resposta, expl: 'Soma = (n − 2) × 180º = (' + n + ' − 2) × 180º = ' + soma + 'º.' }; }
    return { enun: 'Calcula a soma dos ângulos internos de um polígono com <strong>' + n + ' lados</strong> (em graus, só o número):', tipo: 'fill', resposta: String(soma), expl: '(n − 2) × 180 = (' + n + ' − 2) × 180 = ' + soma + '.' };
  }

  // ── TEMA 2: Triângulos — 3.º ângulo (soma = 180º) ──
  if (tema === '2') {
    var a = _m7rnd(30, 80), b = _m7rnd(30, 80);
    if (a + b >= 170) b = 180 - a - _m7rnd(20, 50);
    var c = 180 - a - b;
    if (tipo === 'mc') { var mc2 = _m7mc(c + 'º', [(c + 10) + 'º', (180 - a) + 'º', (a + b) + 'º']); return { enun: 'Num triângulo, dois ângulos medem <strong>' + a + 'º</strong> e <strong>' + b + 'º</strong>. Quanto mede o terceiro?', tipo: 'mc', opcoes: mc2.opcoes, resposta: mc2.resposta, expl: 'Os ângulos de um triângulo somam 180º: 180 − ' + a + ' − ' + b + ' = ' + c + 'º.' }; }
    return { enun: 'Dois ângulos de um triângulo medem ' + a + 'º e ' + b + 'º. Quanto mede o terceiro (em graus)?', tipo: 'fill', resposta: String(c), expl: '180 − ' + a + ' − ' + b + ' = ' + c + '.' };
  }

  // ── TEMA 3: Semelhança — razão e lado correspondente ──
  if (tema === '3') {
    var k = _m7rnd(2, 4), lado = _m7rnd(2, 9);
    var grande = lado * k;
    if (tipo === 'mc') { var mc3 = _m7mc(String(grande), [String(lado + k), String(grande + k), String(lado * (k + 1))]); return { enun: 'Dois triângulos são semelhantes com razão <strong>' + k + '</strong>. Se um lado do menor mede <strong>' + lado + '</strong>, quanto mede o lado correspondente do maior?', tipo: 'mc', opcoes: mc3.opcoes, resposta: mc3.resposta, expl: 'Multiplica pela razão: ' + lado + ' × ' + k + ' = ' + grande + '.' }; }
    return { enun: 'Em figuras semelhantes de razão ' + k + ', um lado mede ' + lado + ' na figura pequena. Quanto mede o correspondente na grande?', tipo: 'fill', resposta: String(grande), expl: lado + ' × ' + k + ' = ' + grande + '.' };
  }

  // ── TEMA 4: Áreas (retângulo, triângulo, quadrado) ──
  if (tema === '4') {
    var fig = _m7rnd(0, 2);
    if (fig === 0) { var bb = _m7rnd(2, 12), hh = _m7rnd(2, 12); var ar = bb * hh; return tipo === 'mc'
        ? (function () { var mc = _m7mc(ar, [bb + hh, 2 * (bb + hh), ar + bb]); return { enun: 'Qual é a área de um <strong>retângulo</strong> de ' + bb + ' por ' + hh + '?', tipo: 'mc', opcoes: mc.opcoes, resposta: mc.resposta, expl: 'Área do retângulo = base × altura = ' + bb + ' × ' + hh + ' = ' + ar + '.' }; })()
        : { enun: 'Calcula a área de um retângulo de base ' + bb + ' e altura ' + hh + ':', tipo: 'fill', resposta: String(ar), expl: bb + ' × ' + hh + ' = ' + ar + '.' };
    } else if (fig === 1) { var bt = _m7rnd(2, 12) * 2, ht = _m7rnd(2, 12); var art = bt * ht / 2; return tipo === 'mc'
        ? (function () { var mc = _m7mc(art, [bt * ht, bt + ht, art + bt]); return { enun: 'Qual é a área de um <strong>triângulo</strong> de base ' + bt + ' e altura ' + ht + '?', tipo: 'mc', opcoes: mc.opcoes, resposta: mc.resposta, expl: 'Área do triângulo = (base × altura) ÷ 2 = (' + bt + ' × ' + ht + ') ÷ 2 = ' + art + '.' }; })()
        : { enun: 'Calcula a área de um triângulo de base ' + bt + ' e altura ' + ht + ':', tipo: 'fill', resposta: String(art), expl: '(' + bt + ' × ' + ht + ') ÷ 2 = ' + art + '.' };
    } else { var l = _m7rnd(2, 12); var aq = l * l; return tipo === 'mc'
        ? (function () { var mc = _m7mc(aq, [4 * l, l + l, aq + l]); return { enun: 'Qual é a área de um <strong>quadrado</strong> de lado ' + l + '?', tipo: 'mc', opcoes: mc.opcoes, resposta: mc.resposta, expl: 'Área do quadrado = lado × lado = ' + l + ' × ' + l + ' = ' + aq + '.' }; })()
        : { enun: 'Calcula a área de um quadrado de lado ' + l + ':', tipo: 'fill', resposta: String(aq), expl: l + ' × ' + l + ' = ' + aq + '.' };
    }
  }

  // ── TEMA 5: Circunferência (diâmetro, raio, e perímetro = 2πr) ──
  if (tema === '5') {
    var r = _m7rnd(2, 10);
    var diam = 2 * r;
    var perimN = +(2 * 3.14 * r).toFixed(2);
    var perim = String(perimN).replace('.', ',');   // convenção PT: vírgula decimal
    var qual = _m7rnd(0, 2);
    if (qual === 0) {
      return { enun: 'Qual é o <strong>diâmetro</strong> de uma circunferência de raio ' + r + '?', tipo: 'fill', resposta: String(diam), expl: 'Diâmetro = 2 × raio = 2 × ' + r + ' = ' + diam + '.' };
    }
    if (qual === 1) {
      return { enun: 'O diâmetro de uma circunferência é ' + diam + '. Qual é o <strong>raio</strong>?', tipo: 'fill', resposta: String(r), expl: 'Raio = diâmetro ÷ 2 = ' + diam + ' ÷ 2 = ' + r + '.' };
    }
    // perímetro (escolha múltipla, p/ evitar a vírgula no preenchimento)
    var distrA = String((+(3.14 * r).toFixed(2))).replace('.', ',');
    var mc5 = _m7mc(perim, [distrA, String(diam), String((+(2 * 3.14 * r * r).toFixed(2))).replace('.', ',')]);
    return { enun: 'Qual é o <strong>perímetro</strong> (comprimento) de uma circunferência de raio ' + r + '? (usa π ≈ 3,14)', tipo: 'mc', opcoes: mc5.opcoes, resposta: mc5.resposta, expl: 'Perímetro = 2 × π × r ≈ 2 × 3,14 × ' + r + ' = ' + perim + '.' };
  }

  return null;
}

/* ═══ GERADOR Cap 5 — Sequências e Regularidades (7.º ano) ═══
   1 Termo geral · 2 Problemas com sequências */
function buildEx_m7c5(tema, tipo, dif) {
  tema = String(tema);
  var m = _m7rndNZ(2, 7), b = _m7rnd(-4, 6); // termo geral an = m·n + b
  function termo(n) { return m * n + b; }
  var tgTxt = m + 'n ' + (b >= 0 ? '+ ' + b : '− ' + (-b));
  if (b === 0) tgTxt = m + 'n';

  // ── TEMA 1: Termo de uma certa ordem ──
  if (tema === '1') {
    var ordem = _m7rnd(3, 12);
    var val = termo(ordem);
    if (tipo === 'mc') { var mc = _m7mc(val, [val + m, val - m, m * ordem]); return { enun: 'O termo geral de uma sequência é <strong>a<sub>n</sub> = ' + tgTxt + '</strong>. Qual é o termo de ordem ' + ordem + '?', tipo: 'mc', opcoes: mc.opcoes, resposta: mc.resposta, expl: 'Substitui n = ' + ordem + ': ' + m + '×' + ordem + ' ' + (b >= 0 ? '+ ' + b : '− ' + (-b)) + ' = ' + val + '.' }; }
    return { enun: 'Numa sequência, a<sub>n</sub> = <strong>' + tgTxt + '</strong>. Calcula o termo de ordem ' + ordem + ':', tipo: 'fill', resposta: String(val), expl: m + '×' + ordem + ' ' + (b >= 0 ? '+ ' + b : '− ' + (-b)) + ' = ' + val + '.' };
  }

  // ── TEMA 2: Problemas com sequências (contexto + qual a ordem dado o termo) ──
  if (tema === '2') {
    var coisas = ['segmentos', 'balões', 'quadrados', 'palitos', 'bolas'];
    var coisa = coisas[_m7rnd(0, coisas.length - 1)];
    if (Math.random() < .5) {
      var ordem2 = _m7rnd(4, 10), val2 = termo(ordem2);
      return { enun: 'Uma sequência de figuras tem termo geral <strong>a<sub>n</sub> = ' + tgTxt + '</strong> (' + coisa + '). Quantos ' + coisa + ' tem a figura ' + ordem2 + '?', tipo: 'fill', resposta: String(val2), expl: m + '×' + ordem2 + ' ' + (b >= 0 ? '+ ' + b : '− ' + (-b)) + ' = ' + val2 + ' ' + coisa + '.' };
    }
    // dado o valor, achar a ordem (garante inteiro)
    var ord3 = _m7rnd(3, 9), val3 = termo(ord3);
    return { enun: 'Numa sequência com a<sub>n</sub> = <strong>' + tgTxt + '</strong>, uma figura tem ' + val3 + ' ' + coisa + '. Qual é a sua ordem (n)?', tipo: 'fill', resposta: String(ord3), expl: 'Resolve ' + tgTxt + ' = ' + val3 + ' → n = ' + ord3 + '.' };
  }

  return null;
}

/* ═══ GERADOR Cap 6 — Funções (7.º ano) ═══
   1 Referencial · 2 Conceito de função · 3 Representação gráfica
   4 Formas de representar · 5 Proporcionalidade direta · 6 Gráficos em contexto */
function buildEx_m7c6(tema, tipo, dif) {
  tema = String(tema);

  // ── TEMA 1: Referencial cartesiano (quadrante de um ponto) ──
  if (tema === '1') {
    var x = _m7rndNZ(-8, 8), y = _m7rndNZ(-8, 8);
    var q = (x > 0 && y > 0) ? '1.º' : (x < 0 && y > 0) ? '2.º' : (x < 0 && y < 0) ? '3.º' : '4.º';
    var mc = _m7mc(q + ' quadrante', ['1.º quadrante', '2.º quadrante', '3.º quadrante', '4.º quadrante']);
    return { enun: 'Em que quadrante está o ponto <strong>(' + x + ', ' + y + ')</strong>?', tipo: 'mc', opcoes: mc.opcoes, resposta: mc.resposta, expl: 'x ' + (x > 0 ? '> 0' : '< 0') + ' e y ' + (y > 0 ? '> 0' : '< 0') + ' → ' + q + ' quadrante.' };
  }

  // ── TEMA 2/4: Conceito de função / formas de representar (imagem de um objeto) ──
  if (tema === '2' || tema === '4') {
    var a = _m7rndNZ(2, 5), bb = _m7rnd(-4, 6), obj = _m7rndNZ(-5, 6);
    var img = a * obj + bb;
    var lei = 'f(x) = ' + a + 'x ' + (bb >= 0 ? '+ ' + bb : '− ' + (-bb));
    if (tipo === 'mc') { var mc2 = _m7mc(img, [a * obj, img + a, a + obj + bb]); return { enun: 'Dada a função <strong>' + lei + '</strong>, qual é a imagem de ' + obj + ', ou seja f(' + obj + ')?', tipo: 'mc', opcoes: mc2.opcoes, resposta: mc2.resposta, expl: 'f(' + obj + ') = ' + a + '×(' + obj + ') ' + (bb >= 0 ? '+ ' + bb : '− ' + (-bb)) + ' = ' + img + '.' }; }
    return { enun: 'Considera <strong>' + lei + '</strong>. Calcula f(' + obj + '):', tipo: 'fill', resposta: String(img), expl: a + '×(' + obj + ') ' + (bb >= 0 ? '+ ' + bb : '− ' + (-bb)) + ' = ' + img + '.' };
  }

  // ── TEMA 3: Representação gráfica (pertença de um ponto à reta) ──
  if (tema === '3') {
    var k = _m7rndNZ(2, 5), px = _m7rndNZ(1, 6);
    var py = k * px; // ponto na reta y = kx
    var naReta = (Math.random() < .5);
    var pyMostra = naReta ? py : py + _m7rndNZ(1, 4);
    return { enun: 'A função é <strong>y = ' + k + 'x</strong>. O ponto (' + px + ', ' + pyMostra + ') pertence ao gráfico?', tipo: 'vf', resposta: (pyMostra === py) ? 'Verdadeiro' : 'Falso', opcoes: ['Verdadeiro', 'Falso'], expl: 'Para x = ' + px + ', y = ' + k + '×' + px + ' = ' + py + '. ' + (pyMostra === py ? 'Coincide → pertence.' : 'Mas o ponto tem y = ' + pyMostra + ' → não pertence.') };
  }

  // ── TEMA 5: Proporcionalidade direta (constante k = y/x) ──
  if (tema === '5') {
    var kk = _m7rnd(2, 9), xv = _m7rnd(2, 8), yv = kk * xv;
    if (Math.random() < .5) {
      if (tipo === 'mc') { var mc5 = _m7mc(kk, [yv, xv, kk + 1]); return { enun: 'Numa proporcionalidade direta, a ' + xv + ' corresponde ' + yv + '. Qual é a constante de proporcionalidade?', tipo: 'mc', opcoes: mc5.opcoes, resposta: mc5.resposta, expl: 'k = y ÷ x = ' + yv + ' ÷ ' + xv + ' = ' + kk + '.' }; }
      return { enun: 'Numa proporcionalidade direta, a x = ' + xv + ' corresponde y = ' + yv + '. Qual é a constante (k = y/x)?', tipo: 'fill', resposta: String(kk), expl: yv + ' ÷ ' + xv + ' = ' + kk + '.' };
    }
    var xNovo = _m7rnd(2, 8), yNovo = kk * xNovo;
    return { enun: 'y é diretamente proporcional a x, com constante ' + kk + '. Qual é y quando x = ' + xNovo + '?', tipo: 'fill', resposta: String(yNovo), expl: 'y = k × x = ' + kk + ' × ' + xNovo + ' = ' + yNovo + '.' };
  }

  // ── TEMA 6: Gráficos em contexto (velocidade/distância simples) ──
  if (tema === '6') {
    var vel = _m7rnd(2, 12), tempo = _m7rnd(2, 9), dist = vel * tempo;
    if (Math.random() < .5) return { enun: 'Um carro anda a ' + vel + ' km por hora (proporcionalidade direta). Que distância percorre em ' + tempo + ' horas?', tipo: 'fill', resposta: String(dist), expl: 'distância = velocidade × tempo = ' + vel + ' × ' + tempo + ' = ' + dist + ' km.' };
    return { enun: 'Num gráfico distância-tempo, a ' + tempo + ' h correspondem ' + dist + ' km. Qual é a velocidade (km/h)?', tipo: 'fill', resposta: String(vel), expl: 'velocidade = distância ÷ tempo = ' + dist + ' ÷ ' + tempo + ' = ' + vel + ' km/h.' };
  }

  return null;
}

/* ═══ GERADOR Cap 7 — Semelhança (7.º ano) ═══
   1 Figuras semelhantes · 2 Polígonos · 3 Homotetia · 4 Semelhança triângulos
   5 Perímetros e áreas · 6 Poliedros e Euler (V−A+F=2) */
function buildEx_m7c7(tema, tipo, dif) {
  tema = String(tema);

  // ── TEMA 1/2/4: razão de semelhança e lado correspondente ──
  if (tema === '1' || tema === '2' || tema === '4') {
    var k = _m7rnd(2, 5), lado = _m7rnd(2, 9), grande = lado * k;
    if (Math.random() < .5) {
      if (tipo === 'mc') { var mc = _m7mc(grande, [lado + k, grande + k, lado * (k + 1)]); return { enun: 'Dois polígonos são semelhantes com razão <strong>' + k + '</strong>. Um lado do menor mede ' + lado + '. Quanto mede o lado correspondente do maior?', tipo: 'mc', opcoes: mc.opcoes, resposta: mc.resposta, expl: lado + ' × ' + k + ' = ' + grande + '.' }; }
      return { enun: 'Figuras semelhantes de razão ' + k + ': um lado mede ' + lado + ' na menor. Quanto mede o correspondente na maior?', tipo: 'fill', resposta: String(grande), expl: lado + ' × ' + k + ' = ' + grande + '.' };
    }
    // dar os dois lados, pedir a razão
    return { enun: 'Dois polígonos semelhantes têm lados correspondentes ' + lado + ' e ' + grande + '. Qual é a razão de semelhança (do maior para o menor)?', tipo: 'fill', resposta: String(k), expl: grande + ' ÷ ' + lado + ' = ' + k + '.' };
  }

  // ── TEMA 3: Homotetia (ampliar coordenadas por k) ──
  if (tema === '3') {
    var k3 = _m7rnd(2, 4), x = _m7rndNZ(1, 6), y = _m7rndNZ(1, 6);
    return { enun: 'Uma homotetia de centro na origem e razão ' + k3 + ' transforma o ponto (' + x + ', ' + y + '). Qual é a imagem?', tipo: 'fill', resposta: '(' + (k3 * x) + ', ' + (k3 * y) + ')', expl: 'Multiplica cada coordenada por ' + k3 + ': (' + (k3 * x) + ', ' + (k3 * y) + ').' };
  }

  // ── TEMA 5: Perímetros e áreas em semelhança (perím ×k, área ×k²) ──
  if (tema === '5') {
    var k5 = _m7rnd(2, 4), per = _m7rnd(5, 20), are = _m7rnd(4, 30);
    if (Math.random() < .5) { var mc5 = _m7mc(per * k5, [per + k5, per * k5 * k5, per + k5 * 2]); return { enun: 'Numa ampliação de razão ' + k5 + ', o perímetro fica multiplicado por quanto? (um polígono de perímetro ' + per + ' passa a…)', tipo: 'mc', opcoes: mc5.opcoes, resposta: mc5.resposta, expl: 'O perímetro multiplica pela razão: ' + per + ' × ' + k5 + ' = ' + (per * k5) + '.' }; }
    var mc5b = _m7mc(are * k5 * k5, [are * k5, are + k5 * k5, are * k5 * k5 * k5]); return { enun: 'Numa ampliação de razão ' + k5 + ', a área fica multiplicada por k². Uma figura de área ' + are + ' passa a ter que área?', tipo: 'mc', opcoes: mc5b.opcoes, resposta: mc5b.resposta, expl: 'A área multiplica por k² = ' + k5 + '² = ' + (k5 * k5) + '. ' + are + ' × ' + (k5 * k5) + ' = ' + (are * k5 * k5) + '.' };
  }

  // ── TEMA 6: Relação de Euler (V − A + F = 2) ──
  if (tema === '6') {
    var solidos = [
      { nome: 'cubo', V: 8, A: 12, F: 6 },
      { nome: 'tetraedro', V: 4, A: 6, F: 4 },
      { nome: 'prisma triangular', V: 6, A: 9, F: 5 },
      { nome: 'pirâmide quadrangular', V: 5, A: 8, F: 5 },
      { nome: 'octaedro', V: 6, A: 12, F: 8 }
    ];
    var s = solidos[_m7rnd(0, solidos.length - 1)];
    var qual = _m7rnd(0, 2);
    if (qual === 0) return { enun: 'Num <strong>' + s.nome + '</strong> há ' + s.A + ' arestas e ' + s.F + ' faces. Pela relação de Euler (V − A + F = 2), quantos vértices tem?', tipo: 'fill', resposta: String(s.V), expl: 'V = 2 + A − F = 2 + ' + s.A + ' − ' + s.F + ' = ' + s.V + '.' };
    if (qual === 1) return { enun: 'Num <strong>' + s.nome + '</strong> há ' + s.V + ' vértices e ' + s.F + ' faces. Quantas arestas tem? (V − A + F = 2)', tipo: 'fill', resposta: String(s.A), expl: 'A = V + F − 2 = ' + s.V + ' + ' + s.F + ' − 2 = ' + s.A + '.' };
    return { enun: 'Verifica a relação de Euler num <strong>' + s.nome + '</strong> (V=' + s.V + ', A=' + s.A + ', F=' + s.F + '): quanto dá V − A + F?', tipo: 'fill', resposta: '2', expl: s.V + ' − ' + s.A + ' + ' + s.F + ' = 2 (vale para todos os poliedros convexos).' };
  }

  return null;
}

/* ═══ GERADOR Cap 8 — Estatística e Probabilidade (7.º ano) ═══
   1 População/amostra · 2 Média, mediana, moda · 3 Representações
   4 Probabilidade · 5 Probabilidade composta */
function buildEx_m7c8(tema, tipo, dif) {
  tema = String(tema);

  // ── TEMA 1: População e amostra (conceitos) ──
  if (tema === '1') {
    var cenarios = [
      { txt: 'Para saber a altura média dos alunos de uma escola, mediram-se 50 alunos.', pop: 'todos os alunos da escola', am: 'os 50 alunos medidos' },
      { txt: 'Numa fábrica testaram-se 100 lâmpadas de um lote de 10000.', pop: 'as 10000 lâmpadas do lote', am: 'as 100 lâmpadas testadas' }
    ];
    var c = cenarios[_m7rnd(0, cenarios.length - 1)];
    var perguntaPop = (Math.random() < .5);
    var mc = _m7mc(perguntaPop ? c.pop : c.am, [c.pop, c.am]);
    return { enun: c.txt + ' Qual é a <strong>' + (perguntaPop ? 'população' : 'amostra') + '</strong>?', tipo: 'mc', opcoes: mc.opcoes, resposta: mc.resposta, expl: 'População = o conjunto todo; amostra = a parte estudada.' };
  }

  // ── TEMA 2: Média, mediana, moda ──
  if (tema === '2') {
    var n = 5, dados = [];
    for (var i = 0; i < n; i++) dados.push(_m7rnd(1, 10));
    var soma = dados.reduce(function (a, b) { return a + b; }, 0);
    var media = soma / n;
    var ord = dados.slice().sort(function (a, b) { return a - b; });
    var mediana = ord[2];
    // moda: valor mais frequente
    var cont = {}; dados.forEach(function (d) { cont[d] = (cont[d] || 0) + 1; });
    var moda = null, maxc = 0; for (var kk in cont) { if (cont[kk] > maxc) { maxc = cont[kk]; moda = +kk; } }
    var dadosTxt = dados.join(', ');
    var qual = _m7rnd(0, 2);
    if (qual === 0) {
      // garantir média inteira: ajustar último dado
      var resto = soma % n;
      if (resto !== 0) { dados[n - 1] = dados[n - 1] + (n - resto); soma = dados.reduce(function (a, b) { return a + b; }, 0); media = soma / n; dadosTxt = dados.join(', '); }
      return { enun: 'Calcula a <strong>média</strong> dos dados: ' + dadosTxt, tipo: 'fill', resposta: String(media), expl: 'Soma ÷ quantidade = ' + soma + ' ÷ ' + n + ' = ' + media + '.' };
    }
    if (qual === 1) return { enun: 'Qual é a <strong>mediana</strong> de: ' + ord.join(', ') + '? (dados já ordenados)', tipo: 'fill', resposta: String(mediana), expl: 'A mediana é o valor do meio: ' + mediana + '.' };
    return { enun: 'Qual é a <strong>moda</strong> de: ' + dadosTxt + '? (valor mais frequente)', tipo: 'fill', resposta: String(moda), expl: 'O valor que aparece mais vezes é ' + moda + '.' };
  }

  // ── TEMA 3: Representações (frequência absoluta) ──
  if (tema === '3') {
    var total = _m7rnd(20, 40), fa = _m7rnd(2, total - 2);
    var fr = +(fa / total).toFixed(2);
    return { enun: 'Num total de ' + total + ' alunos, ' + fa + ' escolheram futebol. Qual é a frequência absoluta do futebol?', tipo: 'fill', resposta: String(fa), expl: 'A frequência absoluta é a contagem: ' + fa + '.' };
  }

  // ── TEMA 4: Probabilidade simples (casos favoráveis / possíveis) ──
  if (tema === '4') {
    var contextos = [
      { txt: 'lançar um dado e sair número par', fav: 3, pos: 6 },
      { txt: 'lançar um dado e sair o 5', fav: 1, pos: 6 },
      { txt: 'lançar uma moeda e sair cara', fav: 1, pos: 2 },
      { txt: 'tirar uma bola vermelha de um saco com 2 vermelhas e 3 azuis', fav: 2, pos: 5 }
    ];
    var c4 = contextos[_m7rnd(0, contextos.length - 1)];
    var resp = _m7frac(c4.fav, c4.pos);
    return { enun: 'Qual é a probabilidade de <strong>' + c4.txt + '</strong>? (escreve em fração)', tipo: 'fill_frac', resposta: resp, expl: 'P = casos favoráveis ÷ casos possíveis = ' + c4.fav + '/' + c4.pos + (resp !== (c4.fav + '/' + c4.pos) ? ' = ' + resp : '') + '.' };
  }

  // ── TEMA 5: Probabilidade composta (dois eventos independentes) ──
  if (tema === '5') {
    // sair cara duas vezes, ou dois pares, etc. — multiplicar probabilidades simples
    var casos = [
      { txt: 'sair cara nas duas vezes ao lançar uma moeda 2 vezes', p1: '1/2', p2: '1/2', f: 1, q: 4 },
      { txt: 'sair número par nos dois lançamentos de um dado', p1: '1/2', p2: '1/2', f: 1, q: 4 },
      { txt: 'sair o 6 nos dois lançamentos de um dado', p1: '1/6', p2: '1/6', f: 1, q: 36 }
    ];
    var c5 = casos[_m7rnd(0, casos.length - 1)];
    return { enun: 'Qual é a probabilidade de <strong>' + c5.txt + '</strong>? (eventos independentes — multiplica)', tipo: 'fill_frac', resposta: _m7frac(c5.f, c5.q), expl: 'P = ' + c5.p1 + ' × ' + c5.p2 + ' = ' + _m7frac(c5.f, c5.q) + '.' };
  }

  return null;
}
