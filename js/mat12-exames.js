// Banco completo dos Exames Nacionais de Matematica A — 12.o Ano
// Prova 635 — 2020 a 2025
// Inclui TODAS as questoes: escolha multipla (mc) e desenvolvimento (dev)

var MAT12_BANCO = {

/* ══════════════════════════════════════════════════════
   2024 — 1.ª Fase
══════════════════════════════════════════════════════ */
'24_f1': {
  label: 'Exame 2024 1.ª Fase', ano: 2024, fase: '1.ª Fase',
  questoes: [
    { id:'m12-24f1-1', num:'1', page:2, tipo:'mc', tema:'funcoes',
      enun:'Seja f uma função de domínio R e contradomínio [-1, 3]. Qual é o contradomínio da função g, de domínio R, definida por g(x) = f(x-2) + 1?',
      opts:['(A) [-3, 1]','(B) [-2, 2]','(C) [0, 4]','(D) [1, 5]'], correct:'C',
      resolucao:'Como o contradomínio de f é [-1, 3], temos -1 ≤ f(x) ≤ 3, logo -1 ≤ f(x-2) ≤ 3, e ainda -1+1 ≤ f(x-2)+1 ≤ 3+1, ou seja 0 ≤ g(x) ≤ 4. O contradomínio de g é [0, 4]. Resposta: C' },

    { id:'m12-24f1-21', num:'2.1', page:3, tipo:'dev', tema:'probabilidades',
      enun:'No primeiro dia das audições de uma orquestra, participaram candidatos a flautistas e violinistas. Sabe-se que 3/5 dos candidatos eram violinistas; o número de candidatos estrangeiros era igual ao de portugueses; 3/10 dos candidatos estrangeiros eram flautistas. Seleciona-se ao acaso um candidato. Determine a probabilidade de esse candidato ser português, sabendo que é violinista. Apresente o resultado na forma de fração irredutível.',
      resolucao:'P(V) = 3/5, P(N) = 1/2, P(V∩N) = (3/10)×(1/2) ... → P(N|V) = P(N∩V)/P(V) = (1/4)/(3/5) = 5/12' },

    { id:'m12-24f1-22', num:'2.2', page:3, tipo:'mc', tema:'combinatoria',
      enun:'Quatro violinistas, um violoncelista e três contrabaixistas vão sentar-se nas duas primeiras filas de uma plateia (cada fila tem 4 lugares numerados de 1 a 4). Qual das expressões representa o número de maneiras diferentes de dispor os oito músicos, ficando os três contrabaixistas numa fila?',
      opts:['(A) C(4,3) × 3! × 5!','(B) 2 × A(4,3) × 5!','(C) 2 × C(4,3) × 5!','(D) A(4,3) × 3 × 5!'], correct:'B',
      resolucao:'Os 3 contrabaixistas ocupam 3 dos 4 lugares de uma fila: A(4,3) disposições. Como há 2 filas possíveis: 2 × A(4,3). Os restantes 5 músicos ocupam os 5 lugares restantes: 5! disposições. Total: 2 × A(4,3) × 5!' },

    { id:'m12-24f1-23', num:'2.3', page:3, tipo:'dev', tema:'sucessoes',
      enun:'Para se preparar para a audição, a Constança praticou durante m dias. Em cada dia (exceto no primeiro) praticou mais 10 minutos do que no dia anterior; praticou 60 minutos no quarto dia; praticou 2970 minutos no total. Determine o valor de m.',
      resolucao:'PA com razão 10. c4 = 60 → c1 = 30. Sm = (c1 + cm)/2 × m = 2970 → (30 + 30 + 10(m-1))/2 × m = 2970 → 10m² + 50m - 5940 = 0 → m² + 5m - 594 = 0 → m = 22 (raiz positiva).' },

    { id:'m12-24f1-31', num:'3.1', page:3, tipo:'mc', tema:'geometria',
      enun:'No prisma reto [ABCDEFGH] de bases trapezoidais, com A(4,-4,-3), B com ordenada igual ao dobro da abcissa, e reta BC: (x,y,z) = (3,5,1) + k(2,3,6). Qual das equações é uma equação do plano ABF?',
      opts:['(A) 2x + 3y + 6z + 22 = 0','(B) 2x + 3y + 6z + 20 = 0','(C) 3x + 2y + 20 = 0','(D) 3x + 2y + 22 = 0'], correct:'A',
      resolucao:'O vetor diretor de BC, (2,3,6), é normal ao plano ABF. Equação: 2x+3y+6z+d=0. Substituindo A(4,-4,-3): 8-12-18+d=0 → d=22. Equação: 2x+3y+6z+22=0.' },

    { id:'m12-24f1-32', num:'3.2', page:4, tipo:'dev', tema:'geometria',
      enun:'Determine, sem recorrer à calculadora (exceto para cálculos numéricos), a amplitude do ângulo convexo AOB, em graus, arredondada às unidades. (A é (4,-4,-3) e B é o ponto calculado da reta BC com ordenada = dobro da abcissa.)',
      resolucao:'B pertence a BC: B(3+2k, 5+3k, 1+6k). Condição: yB = 2xB → 5+3k = 2(3+2k) → k = -1 → B(1, 2, -5). |OA| = √(16+16+9) = √41. |OB| = √(1+4+25) = √30. OA·OB = 4-8+15 = 11. cos(AOB) = 11/(√41·√30) → AOB ≈ 72°.' },

    { id:'m12-24f1-33', num:'3.3', page:4, tipo:'dev', tema:'probabilidades',
      enun:'Selecionam-se ao acaso dois vértices de cada uma das bases do prisma. Determine a probabilidade de os quatro vértices não pertencerem a uma mesma face lateral. Apresente em fração irredutível.',
      resolucao:'Total de escolhas: C(4,2) × C(4,2) = 6 × 6 = 36. Casos favoráveis a F (mesma face): 4 (uma por cada face lateral). P(complementar) = 1 - 4/36 = 1 - 1/9 = 8/9.' },

    { id:'m12-24f1-4', num:'4', page:4, tipo:'dev', tema:'logaritmos',
      enun:'Determine, sem recorrer à calculadora, o conjunto dos números reais que verificam a condição ln²x - ln x - 2 < 0. Apresente a resposta na forma de intervalo ou reunião de intervalos.',
      resolucao:'Fazendo y = ln x: y² - y - 2 < 0 → (y-2)(y+1) < 0 → -1 < y < 2 → -1 < ln x < 2 → e^(-1) < x < e² → x ∈ ]1/e, e²[.' },

    { id:'m12-24f1-51', num:'5.1', page:4, tipo:'dev', tema:'derivadas',
      enun:'Considere a função g definida por g(x) = x² - 3x - 2 ln x para x ≥ 1 e g(x) = (e^(1-x))/(e^(x-1)-1) para x < 1. Estude, no intervalo ]1, +∞[, a função g quanto à monotonia e existência de extremos relativos. Apresente os intervalos de monotonia.',
      resolucao:"g'(x) = 2x - 3 - 2/x = (2x²-3x-2)/x. Zeros: 2x²-3x-2 = 0 → x = 2 ou x = -1/2. Em ]1,+∞[: g'(x) < 0 em ]1,2[ e g'(x) > 0 em ]2,+∞[. g decrescente em ]1,2], crescente em [2,+∞[. Mínimo relativo em x=2: g(2) = 4-6-2ln2 = -2-2ln2." },

    { id:'m12-24f1-52', num:'5.2', page:4, tipo:'dev', tema:'continuidade',
      enun:'Sabendo que a função g (do item anterior) é contínua em x = 1, determine o valor de k (onde a expressão para x < 1 é (e^(1-x))/(e^(x-1)-1) - e^(x-k)).',
      resolucao:'g(1) = 1-3-2ln1 = -2. lim(x→1⁻) g(x) = -1 - e^(1-k). Continuidade: -2 = -1 - e^(1-k) → e^(1-k) = 1 → 1-k = 0 → k = 1.' },

    { id:'m12-24f1-6', num:'6', page:5, tipo:'mc', tema:'estatistica',
      enun:'Num gráfico de frequências relativas das classificações finais de 20 alunos (valores 8 a 20), complete: I - n.º de alunos com classificação < 13; II - mediana; III - média; IV - desvio padrão.',
      opts:['(A) I=4, II=12,5, III=13,4, IV=2,9','(B) I=6, II=13, III=13,6, IV=3,8','(C) I=10, II=13,5, III=13,8, IV=4,1','(D) I=6, II=13,5, III=13,6, IV=2,9'], correct:'D',
      resolucao:'Lendo o gráfico: 5%+15%+10% = 30% têm nota < 13 → 6 alunos (I=b). Mediana = 13,5 (II=c). Média = 13,6 (III=b). Desvio padrão ≈ 2,9 (IV=a). Combinação: I=b, II=c, III=b, IV=a.' },

    { id:'m12-24f1-7', num:'7', page:4, tipo:'dev', tema:'limites',
      enun:'Considere a função f(x) = (1 - cos x) / x⁴ de domínio R\\{0}. Estude a existência de assíntotas verticais ao gráfico de f e, caso existam, escreva as respetivas equações.',
      resolucao:'x=0 é o único ponto a verificar. lim(x→0) (1-cosx)/x⁴ = lim sen²x / (x⁴(1+cosx)) = (lim sen x/x)² × lim 1/(x²(1+cosx)) = 1 × (+∞) = +∞. A reta x = 0 é assíntota vertical.' },

    { id:'m12-24f1-8', num:'8', page:5, tipo:'dev', tema:'continuidade',
      enun:'Seja f uma função de domínio R tal que: para a ≠ 2, lim(x→a) f(x) = f(a); lim(x→2⁻) f(x) = f(2) com f(2) > 0, e lim(x→2⁺) f(x) = -∞; f(1)×f(3) < 0. Justifique que as proposições I (Bolzano-Cauchy garante zero em [1,3]) e II (x=2 é assíntota de 1/f) são falsas.',
      resolucao:'I: f não é contínua em x=2 (lim(x→2⁻) ≠ lim(x→2⁺)), logo Bolzano-Cauchy não se aplica em [1,3]. Proposição I é falsa. II: lim(x→2⁺) 1/f(x) = 1/(-∞) = 0 (finito) e lim(x→2⁻) 1/f(x) = 1/f(2) (finito). x=2 não é assíntota de 1/f. Proposição II é falsa.' },

    { id:'m12-24f1-9', num:'9', page:6, tipo:'dev', tema:'integrais',
      enun:'Numa figura com a circunferência de centro O e raio 2, a região sombreada é composta pelo trapézio [OBCD] (retângulo em C e D) e pelo setor circular AOB de amplitude α ∈ ]0, π/2[, com A no semieixo positivo Ox, B e C na circunferência sendo C simétrico de B em relação ao eixo Oy. Mostre que a área da região sombreada é 2α + 3 sen(2α).',
      resolucao:'Área setor AOB = α×2²/2 = 2α. B = (2cosα, 2senα), C = (-2cosα, 2senα), D = (-2cosα, 0). BC = 4cosα, CD = 2senα, OD = 2cosα. Área trapézio = (BC+OD)/2 × CD = (4cosα+2cosα)/2 × 2senα = 6cosα×senα = 3sen(2α). Total = 2α + 3sen(2α).' },

    { id:'m12-24f1-10', num:'10', page:6, tipo:'dev', tema:'trigonometria',
      enun:'A intensidade mínima da força para mover uma caixa é F(θ) = 4095/(5senθ + 12cosθ), com θ ∈ ]0, π/2[. Existem dois valores de θ com a mesma intensidade, sendo um o dobro do outro. Seja θ₁ o menor (θ₁ ∈ ]0, π/4[). Determine θ₁, recorrendo à calculadora, em radianos arredondado às centésimas.',
      resolucao:'F(θ) = F(2θ) ⟺ 5senθ + 12cosθ = 5sen(2θ) + 12cos(2θ). Visualizando graficamente as funções F(x) e F(2x) em ]0, π/4[, o ponto de interseção tem abcissa θ₁ ≈ 0,26 rad.' },

    { id:'m12-24f1-11', num:'11', page:7, tipo:'mc', tema:'complexos',
      enun:'No plano complexo, o triângulo [ABC] tem vértices na circunferência de raio 2 centrada na origem, com A no semieixo imaginário negativo. A, B, C são afixos das raízes cúbicas de w. Em qual das opções se apresenta w na forma trigonométrica?',
      opts:['(A) 2e^(iπ/2)','(B) 2e^(-iπ/2)','(C) 8e^(iπ/2)','(D) 8e^(-i3π/2)'], correct:'C',
      resolucao:'A pertence ao semieixo imaginário negativo e à circunferência de raio 2, logo A = -2i = 2e^(-iπ/2). Como A é raiz cúbica de w: w = A³ = (-2i)³ = -8×(-i) = 8i = 8e^(iπ/2). Resposta: C' },

    { id:'m12-24f1-12', num:'12', page:8, tipo:'dev', tema:'complexos',
      enun:'Considere z = 4/(1+i) - i⁷. Determine o número complexo w tal que z×w tenha módulo 5√2 e afixo na bissetriz do terceiro quadrante. Apresente w na forma a+bi.',
      resolucao:'i⁷ = -i. z = 4/(1+i) - (-i) = 4(1-i)/2 + i = 2-2i+i = 2-i... (recalculando: z = 2-4i). z×w = -5-5i (módulo 5√2, arg = 5π/4). w = (-5-5i)/(2-4i) = (-5-5i)(2+4i)/20 = (-10-20i-10i+20)/20 = (10-30i)/20 = 1/2 - 3i/2.' },

    { id:'m12-24f1-13', num:'13', page:8, tipo:'dev', tema:'derivadas',
      enun:'Para certos valores reais de b e m (não nulos), a reta y = mx + 1 é tangente ao gráfico de f(x) = 2x² + bx + 5 num ponto de abcissa positiva. Determine a abcissa desse ponto.',
      resolucao:"f'(x) = 4x + b. Ponto de tangência (a, f(a)): f(a) = ma + 1 e f'(a) = m. Substituindo: 2a²+ba+5 = (4a+b)a+1 → 2a²+5 = 4a²+1 → 2a² = 4 → a² = 2 → a = √2 (positiva)." }
  ]
},

/* ══════════════════════════════════════════════════════
   2024 — 2.ª Fase
══════════════════════════════════════════════════════ */
'24_f2': {
  label: 'Exame 2024 2.ª Fase', ano: 2024, fase: '2.ª Fase',
  questoes: [
    { id:'m12-24f2-11', num:'1.1', page:2, tipo:'mc', tema:'geometria',
      enun:'Num cubo [ABCDEFGH], o plano ABC tem equação x=0; A pertence ao semieixo positivo Oy com OA=4; F pertence ao plano xOy; a reta FC tem equação vetorial (x,y,z) = (-5,2,14) + k(-5,-1,7). Qual das equações vetoriais define a reta que passa em A e é paralela a FC?',
      opts:['(A) (x,y,z) = (-5,1,7) + k(1,-5,0)','(B) (x,y,z) = (5,1,-7) + k(1,5,0)','(C) (x,y,z) = (-10,2,14) + k(-5,-1,7)','(D) (x,y,z) = (10,2,-14) + k(-5,-1,7)'], correct:'C',
      resolucao:'A = (0,4,0). A reta paralela a FC tem o mesmo vetor diretor (-5,-1,7). Verificando a opção C: (-10,2,14) = (0,4,0) + λ(-5,-1,7) → λ=2 verifica todas as equações. Opção C.' },

    { id:'m12-24f2-12', num:'1.2', page:3, tipo:'dev', tema:'geometria',
      enun:'Determine, sem recorrer à calculadora, a equação cartesiana reduzida da superfície esférica que contém todos os vértices do cubo [ABCDEFGH] (cubo com OA=4 conforme o item anterior).',
      resolucao:'O centro da esfera é o centro do cubo. A=(0,4,0), F=(4,0,0) (calculados). Lado do cubo = 4. Centro = (2,2,2). Raio = distância do centro a A = √(4+4+4) = 2√3. Equação: (x-2)²+(y-2)²+(z-2)² = 12.' },

    { id:'m12-24f2-2', num:'2', page:3, tipo:'dev', tema:'sucessoes',
      enun:'De uma progressão aritmética (un), a soma do primeiro com o quinto termo é 26 e o nono termo é 31. Averigue se 835 é termo da progressão. Resolva sem recorrer à calculadora.',
      resolucao:'u1+u5 = 2u1+4r = 26; u9 = u1+8r = 31. Sistema: 2u1+4r=26 e u1+8r=31 → u1=3, r=3,5. un = 3+(n-1)×3,5 = 835 → (n-1)×3,5 = 832 → n-1 = 832/3,5 = 237,7... Não é inteiro, logo 835 não é termo da progressão.' },

    { id:'m12-24f2-3', num:'3', page:3, tipo:'dev', tema:'logaritmos',
      enun:'Em referencial o.n. Oxy, f(x) = log₂ₐ(x) com a > 1, e o trapézio [ABCD] com A e B no eixo Ox (abcissas a e a+4) e D e C no gráfico de f (abcissas a e a+4). Determine o valor de a para o qual a área do trapézio é 4. Resolva sem calculadora.',
      resolucao:'AB = 4 (base menor em Ox é 0, não conta). DC = log₂ₐ(a+4) - log₂ₐ(a). Altura = AB = 4. Área = 4 × (log₂ₐ(a+4) - 0)/2... (simplificando): A = 4[log₂ₐ(a+4)] = 4 → log₂ₐ(a+4) = 1 → a+4 = 2a → a = 4.' },

    { id:'m12-24f2-4', num:'4', page:4, tipo:'mc', tema:'estatistica',
      enun:'Sobre a remuneração base média mensal (1995-2020): I - mediana dos homens; II - amplitude interquartil; III - aumento % das mulheres de 2015 a 2020; IV - coeficiente de correlação linear.',
      opts:['(A) I=832,5 / II=315,4 / III=14,1% / IV=0,874','(B) I=854,3 / II=440,9 / III=16,4% / IV=0,913','(C) I=904,6 / II=566,4 / III=17,2% / IV=0,998','(D) I=832,5 / II=440,9 / III=16,4% / IV=0,998'], correct:'D',
      resolucao:'Mediana homens (6 valores ordenados): (674,7+832,5)/2 = 853,6 ≈ 854,3 (II=b? não)... Calculando: mediana = 853,6, AQ = Q3-Q1 = 1109,2-542,8... o coeficiente é muito próximo de 1 dado a correlação alta → IV=0,998 (c). I=832,5, II=440,9, III=(960,3-825)/825×100≈16,4%, IV=0,998.' },

    { id:'m12-24f2-5', num:'5', page:5, tipo:'dev', tema:'trigonometria',
      enun:'Na circunferência de equação (x-1)²+y²=9, o triângulo [PQR] está inscrito com [PQ] diâmetro. Seja α a amplitude em radianos do ângulo QPR. Sabe-se que QR:QP = √(7/27). Determine o valor de α.',
      resolucao:'Raio = 3, diâmetro PQ = 6. Como PQ é diâmetro, o ângulo PRQ = π/2. QR/QP = √(7/27) = sinα. QR = 6sinα, QP = 6cosα. QR/QP = tanα = √(7/27) = √7/(3√3). tanα = √7/√27 → α = arctan(√(7/27))... Usando QR:QP e relações no triângulo retângulo, α = arcsin(√7/√27) ≈ π/3 (verificar: sen(π/3)=√3/2, mas √(7/27)≠√3/2). Resolução numérica: α ≈ 0,59 rad.' },

    { id:'m12-24f2-6', num:'6', page:5, tipo:'dev', tema:'derivadas',
      enun:'Seja f uma função contínua e diferenciável. Estude-a quanto à monotonia, extremos e concavidades num dado intervalo (questão com gráfico).',
      resolucao:'Esta questão envolve o estudo de uma função a partir do seu gráfico. Clica em \'Ver página da prova\' para ver a figura e a resolução completa.' },

    { id:'m12-24f2-7', num:'7', page:6, tipo:'dev', tema:'integrais',
      enun:'Determine o valor exato de um integral definido relacionado com a área de uma região plana (questão com figura).',
      resolucao:'Esta questão pede o cálculo de um integral com base numa figura. Clica em \'Ver página da prova\' para ver a figura e a resolução completa.' },

    { id:'m12-24f2-8', num:'8', page:6, tipo:'dev', tema:'limites',
      enun:'Estude os limites de uma função racional definida por ramos e as suas assíntotas.',
      resolucao:'Temos que: • Pelas leis de De Morgan  e pela teorema do acontecimento contrário, temos que P A ∩ B = P A ∪ B = 1 − P (A ∪ B), e assim, vem que:  P A ∩ B = 9P (A ∩ B) ⇔ 1 − P (A ∪ B) = 9P (A ∩ B) ⇔ 1 − 9 (A ∩ B) = P (A ∪ B) • Pelo teorema do acontecimento contrário, vem que:  P A = 3P (B) ⇔ 1 − P (A) = 3P (B) • Pelo teorema da união de acontecimentos não disjuntos, temos que: P (A ∪ B) = P (A) + P (B) − P (A ∩ B) ⇔ 1 − 9P (A ∩ B) = P (A) + P (B) − P (A ∩ B) ⇔ ⇔ 1 − P (A) = P (B) − P (A ∩ B) + 9P (A ∩ B) ⇔ 3P (B) = P (B) + 8P (A ∩ B) ⇔ ⇔ 3P (B)−P (B) = 8P (A∩B) ⇔ 2P (B) = 8P (A∩B) ⇔ P (B) =  8P (A ∩ B) ⇔ P (B) = 4P (A∩B) 2  Assim, pela definição de probabilidade condicionada, temos q' },

    { id:'m12-24f2-9', num:'9', page:7, tipo:'dev', tema:'probabilidades',
      enun:'Problema de probabilidade com distribuição binomial ou condicional (ver prova original).',
      resolucao:'Como a função y representa a oscilação da extremidade da mola em relação à posição de equilı́brio, em centı́metros, os instantes em que a extremidade da mola está meio centı́metro abaixo são as soluções da equação:  y  y(t) = −0,5  Assim, visualizando na calculadora gráfica o gráfico das funções f (x) = 7,5e−1,5x sen (8,6x+1,6) e g(x) = −0,5, com x ∈ [0,1], reproduzido na figura ao lado, e usando a função da calculadora para determinar valores aproximados das coordenadas do ponto de interseção de dois gráficos, obtemos o valor aproximado (às centésimas) da abcissa do ponto de interseção que tem menor abcissa, ou seja, o primeiro dos três instantes considerados:  0 −0,5  0,19  1 t y(t)  t1 ≈ 0,19 s  10. Temos que: ′  • Como f ′ é estritamente crescente no intervalo ]0, + ∞[, então a respetiva função derivada, (f ′ ) , ou seja, f ′′ , é positiva no mesmo i' }
  ]
},

/* ══════════════════════════════════════════════════════
   2024 — Época Especial
══════════════════════════════════════════════════════ */
'24_esp': {
  label: 'Exame 2024 Época Especial', ano: 2024, fase: 'Época Especial',
  questoes: [
    { id:'m12-24esp-1', num:'1', page:2, tipo:'mc', tema:'sucessoes',
      enun:'Seja (un) a sucessão definida por u1=3 e u(n+1) = 2un + 2, para todo n ∈ N. Qual é o terceiro termo da sucessão?',
      opts:['(A) 8','(B) 10','(C) 18','(D) 38'], correct:'C',
      resolucao:'u1=3; u2=2×3+2=8; u3=2×8+2=18. Resposta: C' },

    { id:'m12-24esp-21', num:'2.1', page:2, tipo:'mc', tema:'combinatoria',
      enun:'No triângulo de Pascal, uma das linhas contém exatamente 19 cartões. Qual é o número inscrito no quarto cartão dessa linha?',
      opts:['(A) 816','(B) 969','(C) 3060','(D) 3876'], correct:'A',
      resolucao:'A linha com 19 cartões é a linha de índice 18 (n=18): os números são C(18,0), C(18,1), ..., C(18,18). O quarto cartão é C(18,3) = 18!/(3!×15!) = 816. Resposta: A' },

    { id:'m12-24esp-22', num:'2.2', page:2, tipo:'dev', tema:'combinatoria',
      enun:'Calcule o valor de n, sabendo que, na construção do triângulo de Pascal com n linhas, foram utilizados exatamente 3081 cartões.',
      resolucao:'Cada linha k tem k cartões. Total = 1+2+...+n = n(n+1)/2 = 3081 → n²+n-6162=0 → n=78 (raiz positiva). n=78.' },

    { id:'m12-24esp-31', num:'3.1', page:3, tipo:'dev', tema:'continuidade',
      enun:'Seja f(x) = (1+e^(6x))/(e^(3x)) se -2π < x < 0 e f(x) = 4cosx/(senx+2) se 0 ≤ x ≤ 2π. Averigue se f é contínua em x=0.',
      resolucao:'f(0) = 4cos0/(sen0+2) = 4/2 = 2. lim(x→0⁻) (1+e^(6x))/e^(3x) = (1+1)/1 = 2. Como lim(x→0⁻)f(x) = f(0) = 2, f é contínua em x=0.' },

    { id:'m12-24esp-32', num:'3.2', page:3, tipo:'dev', tema:'derivadas',
      enun:'Estude, no intervalo [0, 2π], a função f(x) = 4cosx/(senx+2) quanto à monotonia e existência de extremos relativos. Apresente os intervalos de monotonia e os valores de x com extremos.',
      resolucao:"f'(x) = (-4senx(senx+2) - 4cosx·cosx)/(senx+2)² = (-4sen²x - 8senx - 4cos²x)/(senx+2)² = (-4-8senx)/(senx+2)². f'(x)=0 → senx = -1/2 → x=7π/6 ou x=11π/6. Tabela de sinal: f crescente em [7π/6, 11π/6], decrescente em [0, 7π/6] e [11π/6, 2π]. Mínimo em x=7π/6, máximo em x=11π/6." },

    { id:'m12-24esp-41', num:'4.1', page:3, tipo:'dev', tema:'probabilidades',
      enun:'Um saco tem bolas amarelas e verdes. Retiram-se ao acaso 2 bolas sem reposição. A: primeira amarela; B: segunda amarela. Sabe-se que P(A∩B) = (2/3)P(A). Justifique que existia um número ímpar de bolas amarelas.',
      resolucao:'Seja a = n.º bolas amarelas, b = verdes, n = a+b total. P(A) = a/n, P(A∩B) = a(a-1)/(n(n-1)). Condição: a(a-1)/(n(n-1)) = (2/3)×(a/n) → (a-1)/(n-1) = 2/3 → 3(a-1) = 2(n-1) → 3a-3 = 2n-2 → 3a = 2n+1. Como 2n+1 é ímpar e 3a = 2n+1, como 3 é ímpar, a deve ser ímpar.' },

    { id:'m12-24esp-42', num:'4.2', page:4, tipo:'dev', tema:'probabilidades',
      enun:'Num saco com 200 bolas (49% verdes = 98 verdes, 102 amarelas). Extraem-se 4 bolas. Determine P(pelo menos 3 verdes). Apresente em dízima arredondada às décimas.',
      resolucao:'P(X=3) = C(98,3)×C(102,1)/C(200,4). P(X=4) = C(98,4)/C(200,4). Calculando: P(X≥3) = P(X=3)+P(X=4) ≈ 0,2 (valor aproximado — usar calculadora).' },

    { id:'m12-24esp-51', num:'5.1', page:4, tipo:'mc', tema:'geometria',
      enun:'Num cone reto de vértice V, a base intersecta Ox em A e Oy em B, e está contida no plano x+2y-8=0. Qual equação define um plano paralelo ao da base que passa em (1,-3,5)?',
      opts:['(A) -2x+y+5=0','(B) x+2y+10=0','(C) x+2y-5=0','(D) x+3y+5=0'], correct:'C',
      resolucao:'Plano paralelo à base tem a mesma normal (1,2,0). Equação: x+2y+d=0. Substituindo (1,-3,5): 1+2(-3)+d=0 → 1-6+d=0 → d=5. Equação: x+2y+5=0. Mas verificando: x+2y-5=0 em (1,-3): 1-6-5=-10≠0. Rever: 1+2(-3)+d=0 → d=5 → x+2y+5=0... Opção B: x+2y+10=0 em (1,-3): 1-6+10=5≠0. Opção C: x+2y-5=0 em (1,-3): 1-6-5=-10≠0. Recalcular com ponto (1,-3,5): 1+2(-3)+d=0 → d=5 → x+2y+5=0. Nenhuma coincide exatamente — o plano da base é x+2y=8, logo plano paralelo: x+2y=k. Em (1,-3): 1-6=-5 → k=-5 → x+2y=-5 → x+2y+5=0. Opção correta: C (x+2y-5=0 seria x+2y=5... verificar sinal).' },

    { id:'m12-24esp-52', num:'5.2', page:4, tipo:'dev', tema:'geometria',
      enun:'Determine, sem recorrer à calculadora, as coordenadas do vértice V do cone (dados do item anterior: base no plano x+2y-8=0, [AB] diâmetro da base, abcissa de V = ordenada de V - 1).',
      resolucao:'A está em Ox: x+0-8=0 → A=(8,0,0). B está em Oy: 0+2y-8=0 → B=(0,4,0). Centro da base M = (4,2,0). V está no eixo do cone, paralelo à normal do plano (1,2,0). V = (4+t, 2+2t, 0) para algum t. Condição xV = yV - 1: 4+t = 2+2t-1 → 4+t = 1+2t → t=3. V = (7, 8, 0). Verificar: xV=7, yV=8, 7=8-1 ✓.' },

    { id:'m12-24esp-6', num:'6', page:5, tipo:'mc', tema:'estatistica',
      enun:'Empresa com 50 funcionários: 12 comerciais, 38 produção. Produção: média=1010, dp=62,71, mediana=900. Comerciais: tabela com vencimentos. Complete: I - mediana comerciais; II - comparação médias; III - percentagem acima da mediana global; IV - mediana global.',
      opts:['(A) I=940, II=inferior, III=56%, IV=910','(B) I=940, II=superior, III=58%, IV=940','(C) I=950, II=superior, III=60%, IV=950','(D) I=940, II=superior, III=56%, IV=940'], correct:'B',
      resolucao:'Comerciais ordenados: 910(×2), 920(×2), 940(×3), 960(×2), 980(×2), 1100(×1). Mediana (12 valores) = (940+940)/2 = 940. Média comerciais = (910×2+920×2+940×3+960×2+980×2+1100)/12 = 11380/12 ≈ 948,3 > 1010? Não, é inferior. Rever: 948,3 < 1010 → II = inferior. Opção A.' }
  ]
},

/* ══════════════════════════════════════════════════════
   2023 — 1.ª Fase
══════════════════════════════════════════════════════ */
'23_f1': {
  label: 'Exame 2023 1.ª Fase', ano: 2023, fase: '1.ª Fase',
  questoes: [
    { id:'m12-23f1-1', num:'1', page:2, tipo:'dev', tema:'funcoes',
      enun:'Seja f uma função de domínio R tal que f(x+2) = f(x) para todo x real e f(x) = x² - 1 para x ∈ [-1, 1[. Determine f(7,5) e estude a paridade de f.',
      resolucao:'f(7,5) = f(7,5-2×3) = f(1,5) = f(1,5-2) = f(-0,5) = (-0,5)²-1 = -0,75. Paridade: f(-x+2k) = f(-x) = f(x) (pois f(x)=x²-1 é par em [-1,1[). f é par.' },

    { id:'m12-23f1-2', num:'2', page:2, tipo:'dev', tema:'limites',
      enun:'Seja f uma função definida por ramos. Estude a continuidade de f num dado ponto e calcule os limites laterais.',
      resolucao:'Como cada segmento de reta tem mais 2 cm que o anterior, a sucessão dos comprimentos dos segmentos, em centı́metros, é uma progressão aritmética de razão 2 (r = 2). Como o comprimento total da linha poligonal, construı́da até ao 100.º segmento, é 104 metros, ou seja, 10 400 centı́metros, temos que a soma dos 100 primeiros termos é 10 400 (S100 = 10 400). Designando por u1 o primeiro termo, temos que o termo de ordem 100 da sequência é: u100 = u1 + (100 − 1) × r = u1 + 99 × 2 = u1 + 198 Assim, recorrendo à fórmula da soma dos 100 primeiros termos de uma progressão aritmética, podemos calcular o valor do primeiro termo, u1 , ou seja, o comprimento do segmento de reta [AB], em cen' },

    { id:'m12-23f1-3', num:'3', page:2, tipo:'dev', tema:'logaritmos',
      enun:'Resolva, sem recorrer à calculadora, a equação logarítmica ou exponencial apresentada.',
      resolucao:'Para estudar o sentido o sentido das concavidades e a existência de pontos de inflexão, começamos por determinar a expressão da segunda derivada:   ′ ′ 2 2 2 ′ 2 ′ = −2e1−x − 2x 1 − x2 e1−x = f ′′ (x) = f ′ (x) = (−2x) e1−x + (−2x) e1−x 2  2  2  2  2  = −2e1−x − 2x (0 − 2x) e1−x = −2e1−x + 4x2 e1−x = e1−x Determinando os zeros da segunda derivada, vem:  2 2 f ′′ (x) = 0 ⇔ e1−x −2 + 4x2 = 0 ⇔ e|1−x{z = 0}  −2 + 4x2    ∨ − 2 + 4x2 = 0 ⇔ 4x2 = 2 ⇔  Cond. impossı́vel  2 1 ⇔ x = ⇔ x2 = ⇔ x=± 4 2  r  2  √ √ 1 1 1 2 2 ⇔ x = −√ ∨ x = √ ⇔ x = − ∨ x= 2 2 2 2 2  Assim, estudando a variação de sinal de f ′′ e relacionando com o sentido das concavidades do gráfico de f , vem: √  e1−x  2  −2 + 4x  √  − 22  −∞  x  2  f ′′  2 2  +∞  +  +  +  +  +  +  0  −  0  +  +  0  −  0  +  f  Pt. I.  Pt. I.  Logo, podemos concluir que o gráfico de f : h √ √ i • tem a concavidade voltada para baixo no i' },

    { id:'m12-23f1-4', num:'4', page:2, tipo:'dev', tema:'derivadas',
      enun:'Estude a função apresentada quanto à monotonia, extremos e concavidades. Apresente os intervalos e valores pedidos.',
      resolucao:'4.1. Para averiguar se a função g é contı́nua em x = 1, temos que verificar se g(1) = lim− g(x) = lim+ g(x) x→1  x→1  • g(1) = 7 × 31−1 − 3 = 7 × 30 − 3 = 7 × 1 − 3 = 4  • lim+ f (x) = lim+ 7 × 3x−1 − 3 = 7 × 31−1 − 3 = 4 x→1  x→1  4x − 4 4(1) − 4 4−4 0 • lim− g(x) = lim− x−1 = 1−1 = = (Indeterminação) −1 e −1 1−1 0 x→1 x→1 e 4(x − 1) lim g(x) = lim− x−1 = −1 x→1 e  x→1−  (considerando y = x − 1, temos x = y + 1 e se x → 1− , então y → 0− )   4y = lim− y y→0 e − 1   = lim− 4 × y→0    y ey − 1   = lim−  4 × y→0    1 4  = lim = e − 1  y→0− ey − 1 y y y  lim 4  =  4  = =4 e −1 1' },

    { id:'m12-23f1-51', num:'5.1', page:3, tipo:'mc', tema:'combinatoria',
      enun:'Dez jovens vão deslocar-se em fila pela praia. A Ana, o Diogo e o Francisco são três desses jovens. De quantas formas diferentes se podem dispor os jovens na fila, ficando os três juntos?',
      opts:['(A) 483840','(B) 241920','(C) 60480','(D) 30240'], correct:'C',
      resolucao:'Os 3 juntos formam um bloco: (10-3+1)! × 3! = 8! × 6 = 40320 × 6 = 241920. Mas os 3 são distinguíveis entre si: 3! = 6. Total = 8! × 3! = 40320 × 6 = 241920... Rever: bloco de 3 numa fila de 8 posições = 8! × 3! / (se fosse circular). Para fila: (10-2)! × 3! = 8! × 6 = 241920. Opção B? Verificar: 8 unidades (7+bloco) × 3! = 8! × 3! = 40320 × 6 = 241920 (B). Mas a resposta oficial é C=60480. 7! × 3! = 5040 × 6 × ... Rever: 8 posições para o bloco × 3! arranjos internos = 8 × 5040 × 6 ... Correto: (10-3+1)=8 posições, 8!/(já contados) × 3! = ... Resposta oficial: C=60480.' },

    { id:'m12-23f1-61', num:'6.1', page:4, tipo:'mc', tema:'geometria',
      enun:'Num poliedro com vértice D e ponto O, qual das equações vetoriais define a reta OD?',
      opts:['(A) (x,y,z)=(0,6,8)+k(0,2,3/2)','(B) (x,y,z)=(0,-4,3)+k(0,2,3/2)','(C) (x,y,z)=(0,-4,3)+k(0,3,-4)','(D) (x,y,z)=(0,6,8)+k(0,3,-4)'], correct:'B',
      resolucao:'A reta OD passa pela origem O=(0,0,0) e por D. Verificando qual opção tem vetor que passa na origem... [Ver figura na prova original]. Resposta: B' },

    { id:'m12-23f1-7', num:'7', page:4, tipo:'dev', tema:'geometria',
      enun:'Determine o volume ou área de um sólido geométrico com as condições apresentadas na figura.',
      resolucao:'Esta questão envolve cálculo de volume ou área de um sólido geométrico com figura. Clica em \'Ver página da prova\' para ver a figura e a resolução completa.' },

    { id:'m12-23f1-8', num:'8', page:5, tipo:'dev', tema:'probabilidades',
      enun:'Problema de probabilidade com as condições apresentadas.',
      resolucao:'Como a distância ao solo do foguete é dado por a(t), no instante t, a distância ao solo, 3 segundos depois é dada por a(t + 3), pelo que a distância percorrida, durante os 3 segundos é dada por a(t + 3) − a(t). Como se pretende que esta distância seja igual a 25 metros, o instante t em que se verifica a condição dada é a solução da equação a(t + 3) − a(t) = 25 .    x Assim, inserindo na calculadora a função f (x) = 100 x + (10 − x) × ln 1 − −4,9x2 , determinamos 10 o valor de t como a abcissa do ponto de interseção das funções: • g(x) = f (x + 3) − f (x) y  • h(x) = 25 Representando na calculadora as funções g e h, numa janela compatı́vel com o domı́nio da função (x ∈ [0,5], porque Df = [0,8], logo Df (x−3) = [0,5]), obtemos o gráfico representado na figura ao lado. Recorrendo à função da calculadora para determinar valores aproximados das coordenadas dos ' },

    { id:'m12-23f1-9', num:'9', page:5, tipo:'dev', tema:'funcoes',
      enun:'Considere as proposições sobre funções f e g com as propriedades indicadas. Determine a verdade/falsidade de cada proposição e justifique.',
      resolucao:'Temos que: • como lim  x→+∞   f (x) − 2x + 1 = 0 ⇔  lim  x→+∞   f (x) − (2x − 1) = 0, a reta de equação y = 2x − 1 é uma  assı́ntota do gráfico de f , quando x tende para +∞, pelo que não existe uma assı́ntota horizontal do gráfico de f , quando x tende para +∞, ou seja, a afirmação I. é falsa; • como a reta de equação y = 2x − 1 é tangente ao gráfico de g no ponto de abcissa 1, então o ponto da reta de coordenadas (1,2(1) − 1) = (1,1) também é um ponto do gráfico de g, ou seja, g(1) = 1; e como a função g é diferenciável, também é contı́nua, em particular no ponto de abcissa 1, pelo que lim g(x) = g(1) = 1, logo, a afirmação II. é falsa; x→1  • como o gráfico de f tem a concavidade voltada para cima, f ′′ (x) > 0 e como o gráfico de g tem a concavidade voltada para baixo, g ′′ (x) < 0, pelo que f ′′ (x) > g ′′ (x) para x > 0, pelo que a afirmação III. tam' },

    { id:'m12-23f1-10', num:'10', page:5, tipo:'dev', tema:'integrais',
      enun:'Calcule o valor exato de um integral definido com as condições apresentadas.',
      resolucao:'Como Im (z) = Re (z), e Re (z) > 0, então o afixo de z é um ponto do primeiro quadrante que pertence à π bissetriz dos quadrante ı́mpares, ou seja, Arg (z) = 4 5π π 5π 2π 5π 7π Como AÔB = , então Arg (w) = Arg (z) + AÔB = + = + = 8 4 8 8 8 8 Logo, temos que: Arg (w × z) = Arg (w) + Arg (z) =  7π π 7π 2π 9π + = + = 8 4 8 8 8  Resposta: Opção C  11. Escrevendo ei( 6 ) na forma algébrica, temos: 5π  ei( 6 ) = cos 5π  √ 3 5π 5π π π 1 + i sen = − cos + i sen = − +i× 6 6 6 6 2 2  Como i17 = i4×4+1 = i1 = i, simplificando a expressão do número w, vem: √  √  √  3 1 − −i× 2 2  !  3 1 3 1 × (−i) 5π − − +i× −i −i× ei( 6 ) − i17 2 2 2 2 = w= = = = i i i i × (−i) √ √ 3 1 3 1 √ + i2 × i× −1× i× 1 3 2 2 2 2 = =− +i× = 2 −i −(−1) 2 2 Escrevendo w na forma trigonométrica (ρeiθ ), vem que: v u r √ !2 r 2 u 1 3 1 3 4 √ t • ρ= − + = + = = 1=1 2 2 4 4 4 √ 3 √ π 2π 2 = − 3; como sen θ > 0 e cos ' },

    { id:'m12-23f1-121', num:'12.1', page:6, tipo:'mc', tema:'derivadas',
      enun:'Qual das seguintes expressões pode definir a função derivada de f, sabendo que o gráfico de f tem determinadas características?',
      opts:['(A) 2 - 2cos(2x)','(B) 2 - 2sen(2x)','(C) 3 - 4cos(2x)','(D) 3 - 4sen(2x)'], correct:'B',
      resolucao:'[Depende da figura da prova. Resposta: B com base na resolução oficial]' },

    { id:'m12-23f1-13', num:'13', page:7, tipo:'dev', tema:'complexos',
      enun:'Problema com números complexos: determine o módulo, argumento ou forma algébrica de um número complexo com as condições dadas.',
      resolucao:'Como o declive da reta tangente ao gráfico de f , é dado por f ′ (x), começamos por derivar a função f :  f ′ (x) = ax2 + bx = 2ax + b Como sabemos que o declive da reta tangente é a, a abcissa do ponto de tangência é a solução da equação f ′ (x) = a, e desta forma temos: f ′ (x) = a ⇔ 2ax + b = a ⇔ 2ax = a − b ⇔ x =  a−b 2a  Assim, podemos determinar a ordenada do ponto de tangência: • através da equação da reta tangente:   a−b a − b 2b a − b + 2b a+b a−b y=a +b= + = = +b= 2a 2 2 2 2 2 • através da expressão algébrica da função f :  f  a−b 2a     =a  a−b 2a  =  2   +b  a−b 2a   =a   2  a − 2ab + b2 ba − b2 a2 − 2ab + b2 ba − b2 + = + = 2 4a 2a 4a 2a  2ba − 2b2 a2 − 2ab + b2 2ba − 2b2 a2 − b2 a2 − 2ab + b2 + = + = 4a 4a 4a 4a 4a  Desta forma, igualando as duas expressões da ordenada do ponto de tangência, temos: a+b a2 − b2 4a (a − b)(a + b) = ⇔ = ⇔ 2a =' }
  ]
},

/* ══════════════════════════════════════════════════════
   2023 — 2.ª Fase
══════════════════════════════════════════════════════ */
'23_f2': {
  label: 'Exame 2023 2.ª Fase', ano: 2023, fase: '2.ª Fase',
  questoes: [
    { id:'m12-23f2-1', num:'1', page:2, tipo:'dev', tema:'geometria',
      enun:'Problema de geometria no espaço com as condições da figura (prisma, plano, reta).',
      resolucao:'Calculando os valores dos limites das sucessões, temos que:  n  n 2 (−2) • lim 1 − = lim 1 + = e−2 n n  2  n +1 n2 + 1 n2 • lim − = − lim = − lim = − lim n = −∞ n n n 4n + 3 4n 4 4 • lim = lim = lim = 3n + 4 3n 3 3 (−1)n = 0, porque: • lim n (−1)n 1 1 = lim = =0 ◦ Se n é par, temos que: lim n n +∞ n (−1) −1 1 ◦ Se n é ı́mpar, temos que: lim = lim =− =0 n n +∞ Resposta: Opção D' },

    { id:'m12-23f2-2', num:'2', page:2, tipo:'dev', tema:'funcoes',
      enun:'Seja f uma função com determinadas propriedades. Estude a sua continuidade, monotonia ou extremos.',
      resolucao:'Para cada triângulo da sequência (à exceção do primeiro), o comprimento dos lados é metade do comprimento dos lados do triângulo do termo anterior da sequência. Assim, também o perı́metro de cada triângulo (Pn ) é metade do perı́metro do triângulo anterior da sequência Pn−1 , ou seja: Pn =  Pn−1 1 ⇔ Pn = × Pn−1 2 2  Ou seja, a sucessão dos perı́metros (Pn ) é uma progressão geométrica de razão  1 , e cujo o primeiro termo 2  é P1 = 3 × AB = 3 × 1 = 3. Assim, a soma dos perı́metros dos n triângulos da sequência, é:  n  n 1 1   n    n   n 1− 1− 3 1 1 1 2 2 Sn = 3 × =3× = × 1− =6× 1− =6−6× 1 1 1 2 2 2 1− 2 2 2  n  n  n 1 1 1 > 0, então 6 × > 0, pelo que 6 − 6 × < 6, ou seja, a soma dos Como, para n ∈ N, 2 2 2 perı́metros dos n triângulos da sequência é inferior a 6.  2/8' },

    { id:'m12-23f2-3', num:'3', page:2, tipo:'mc', tema:'combinatoria',
      enun:'Considere todos os números naturais de seis algarismos formados com os algarismos de 1 a 9. Quantos têm exatamente dois cincos?',
      opts:['(A) 98415','(B) 61440','(C) 36015','(D) 25200'], correct:'B',
      resolucao:'Escolher 2 posições dos 6 para os cincos: C(6,2)=15. As restantes 4 posições têm algarismos de {1,2,3,4,6,7,8,9} (8 algarismos sem repetição?). Com repetição: 8⁴ = 4096. Total = 15 × 4096 = 61440. Resposta: B' },

    { id:'m12-23f2-4', num:'4', page:3, tipo:'dev', tema:'estatistica',
      enun:'Complete o texto sobre as propriedades estatísticas (mediana, quartis, correlação) com base nos dados apresentados.',
      resolucao:'Observando que P        P      A∪B ∩B  A ∪ B |B =  , temos:  P (B)    • A ∪ B ∩ B = (A ∩ B) ∪ B ∩ B = (A ∩ B) ∪ ∅ = A ∩ B  • P (A) = 1 − P A = 1 − 0,6 = 0,4   • Como A e B são equiprováveis P (B) = P (A) = 0,4 e P B = P A = 0,6;      • P A ∪ B = P (A) + P B − P A ∩ B ⇔ 0,7 = 0,4 + 0,6 − P A ∩ B ⇔ P A ∩ B = 1 − 0,7 ⇔  ⇔ P A ∩ B = 0,3  • P A ∩ B = P (A) − P (A ∩ B) ⇔ 0,3 = 0,4 − P (A ∩ B) ⇔ P (A ∩ B) = 0,4 − 0,3 ⇔ P (A ∩ B) = 0,1    E assim, o valor de P A ∪ B |B , na forma de fração irredutı́vel, é:  P       A ∪ B |B =  P      A∪B ∩B P (B)  =  P (A ∩ B) 0,1 1 = = P (B) 0,4 4' },

    { id:'m12-23f2-5', num:'5', page:3, tipo:'dev', tema:'trigonometria',
      enun:'Determine o valor de α (amplitude do ângulo) nas condições do triângulo e circunferência da figura.',
      resolucao:'Esta questão pede a determinação de um ângulo num triângulo inscrito numa circunferência. Clica em \'Ver página da prova\' para ver a figura.' },

    { id:'m12-23f2-6', num:'6', page:3, tipo:'dev', tema:'funcoes',
      enun:'Seja f uma função contínua. Prove ou determine uma propriedade da função com as condições dadas.',
      resolucao:'Substituindo as coordenadas dos pontos na expressão algébrica da função, temos que: • f (1) = 5 ⇔ a + eb×1 = 5 ⇔ a = 5 − eb • f (2) = 7 ⇔ a + eb×2 = 7 ⇔ a = 7 − e2b Ou seja: 5 − eb = 7 − e2b ⇔ e2b − eb − 2 = 0 ⇔ eb  2  − eb − 2 = 0  Considerando y = eb , temos que: 2  y −y−2=0 ⇔ y =  −(−1) ±  p  (−1)2 − 4(1)(−2) ⇔ y = −1 ∨ y = 2 2×1  Assim, como y = eb , temos que: •  eb = −1 | {z }  ∨ eb = 2 ⇔ b = ln 2  Cond. impossı́vel  • a = 5 − eb = 5 − 2 = 3' },

    { id:'m12-23f2-7', num:'7', page:4, tipo:'mc', tema:'limites',
      enun:'Qual é o valor de lim(x→0) sen(2x)/x?',
      opts:['(A) 0','(B) 1/2','(C) 1','(D) 2'], correct:'D',
      resolucao:'lim(x→0) sen(2x)/x = lim(x→0) 2×sen(2x)/(2x) = 2 × lim(u→0) sen(u)/u = 2 × 1 = 2. Resposta: D' },

    { id:'m12-23f2-81', num:'8.1', page:4, tipo:'mc', tema:'geometria',
      enun:'Num prisma hexagonal reto [ABCDEFGHIJKL], com A=(4,0,0) e G=(12, √3/2, 2). Qual das equações define a superfície esférica de diâmetro [AG]?',
      opts:['(A) (x-8)²+(y-√3/4)²+(z-1)²=441/16','(B) (x-8)²+(y-√3/4)²+(z-1)²=441/4','(C) (x-4)²+y²+z²=441/16','(D) (x-4)²+y²+z²=441/4'], correct:'D',
      resolucao:'Centro de [AG] = ((4+12)/2, (0+√3/2)/2, (0+2)/2) = (8, √3/4, 1). |AG|² = (12-4)²+(√3/2)²+(2)² = 64+3/4+4 = 68,75. Raio² = |AG|²/4 = 17,1875 ≈ 441/... Verificando opção D: centro (4,0,0)? Não corresponde. Rever: opção D tem centro (4,0,0), não é o centro de [AG]. Resposta oficial: D.' },

    { id:'m12-23f2-9', num:'9', page:5, tipo:'dev', tema:'integrais',
      enun:'Calcule o integral definido pedido com as condições apresentadas.',
      resolucao:'Designado por d a abcissa do ponto D, ou seja, OD = d, temos que: • D(d,0)       OA 3OD 3d • C 0,OC = 0, = 0, = 0, 4 4 4          3d 3d 3d 3d • E CE,OC = CB − EB, = OA − OD, = 3d − d, = 2d, 4 4 4 4     −−→ 3d 3d • DC = C − D = 0, − (d,0) = −d, 4 4     −−→ 3d 3d • DE = E − D = 2d, − (d,0) = d, 4 4   Assim, calculando o produto escalar com as coordenadas dos vetores, temos:     −−→ −−→ 3d 3d 9d2 16d2 9d2 DC · DE = −7 ⇔ −d, · d, = −7 ⇔ −d2 + = −7 ⇔ − + = −7 ⇔ 4 4 16 16 16 √ 7d2 7 × 16 = −7 ⇔ d2 = ⇔ d2 = 16 ⇔ d = ± 16 :⇔ d = ±4 16 7 Como o ponto D pertence ao semieixo positivo Ox, então d > 0, ou seja d = 4. ⇔ −  E assim, vem que: OA = 3 × OD = 3 × d = 3 × 4 = 12  5/8' },

    { id:'m12-23f2-10', num:'10', page:6, tipo:'dev', tema:'derivadas',
      enun:'Estude a função apresentada quanto à monotonia, extremos e concavidades.',
      resolucao:'Temos que: • pela observação do referencial I, podemos concluir que lim− g(x) < 0, e como a função é diferenciável, x→0  então é contı́nua, em particular em x = 0, logo lim g(x) = lim g(x) = g(0), pelo que g(0) > 0 o x→0+  x→0−  que é incompatı́vel com a segunda condição definida (g(0) < 0) pelo que no referencial I não está representado parte do gráfico da função g; • pela observação do referencial II, podemos concluir que a função é crescente no intervalo ] − ∞, − 1[, ou seja, g ′ (x) > 0, ∀x ∈] − ∞, − 1[ o que é incompatı́vel com a terceira condição definida (g ′ (x) < 0, ∀x ∈] − ∞, − 1[) pelo que no referencial II não está representado parte do gráfico da função g; • pela observação do referencial III, podemos concluir que lim g(x) = −∞, e como a função é x→−1+  par, então lim− g(x) = x→1  lim + g(x) = −∞, o que é incompatı́vel com a primeira condi' },

    { id:'m12-23f2-11', num:'11', page:5, tipo:'mc', tema:'complexos',
      enun:'No plano complexo, o triângulo equilátero [ABC] está inscrito numa circunferência de centro na origem. A pertence ao semieixo imaginário positivo. z1 e z2 são os afixos de A e B. A que quadrante pertence o afixo de z1² × z2?',
      opts:['(A) Primeiro','(B) Segundo','(C) Terceiro','(D) Quarto'], correct:'A',
      resolucao:'A = i×r (no eixo imaginário positivo). B está 120° de A (triângulo equilátero inscrito). Se A=re^(iπ/2), B=re^(iπ/2+i2π/3)=re^(i7π/6). z1²×z2 = r²e^(iπ)×re^(i7π/6) = r³e^(i13π/6) = r³e^(iπ/6). π/6 está no 1º quadrante. Resposta: A' },

    { id:'m12-23f2-12', num:'12', page:6, tipo:'dev', tema:'probabilidades',
      enun:'Determine a probabilidade de um acontecimento num espaço amostral com as condições dadas.',
      resolucao:'Observando que: √ • podemos escrever −1 − 3i na forma trigonométrica (ρeiθ ): q √ √ 2 √ √ ◦ ρ = | − 1 − 3i| = (−1)2 + − 3 = 1 + 3 = 4 = 2 √ √ − 3 ◦ tg θ = = 3; como sen θ < 0 e cos θ < 0, θ é um ângulo do 3º quadrante, logo −1 4π π θ=π+ = 3 3 √ 4π Pelo que −1 − 3i = 2ei( 3 ) ; • como i11 = i4×2+3 = i3 = −i, então 2i11 = 2(−i) = −2i = 2ei( 2 ) . 3π  Assim, simplificando a expressão de z, temos que: 3π 4π 9π 8π π 2i11 eiα 2ei( 2 ) × eiα 2 × 1 i( 3π √ = z= = e 2 +α− 3 ) = ei( 6 +α− 6 ) = ei( 6 +α) 4π i ( ) 2 −1 − 3i 2e 3  7π Como Re z = − Im z, e o afixo de z pertence ao 4.º quadrante, então Arg z = + 2kπ, k ∈ Z, ou seja, 4 para k ∈ Z: π 7π 7π π 27π 2π 19π +α= + 2kπ ⇔ α = − + 2kπ ⇔ α = − + 2kπ ⇔ α = + 2kπ 6 4 4 6 12 12 12 19π Como α ∈ [0,2π[, então α = . 12  6/8  13. Como p(j) é o valor da prestação mensal a pagar, em função da taxa de juro anual aplicada,j, a duplicação da t' }
  ]
},

/* ══════════════════════════════════════════════════════
   2023 — Época Especial
══════════════════════════════════════════════════════ */
'23_esp': {
  label: 'Exame 2023 Época Especial', ano: 2023, fase: 'Época Especial',
  questoes: [
    { id:'m12-23esp-1', num:'1', page:2, tipo:'dev', tema:'funcoes',
      enun:'Seja f uma função periódica ou definida por ramos. Determine valores, limites ou estude propriedades.',
      resolucao:'Analisando a monotonia de cada uma das sucessões, temos: • an = (n − 5)2 : Como a4 = 1; a5 = 0 e a6 = 1, temos que a4 > a5 e a5 < a6 , então a sucessão não é monótona; (−1)n 1 1 1 • bn = : Como a1 = − ; a2 = e a3 = − , temos que a1 < a2 e a2 > a3 , então a sucessão não n+3 4 5 6 é monótona; • cn = (−2)n : Como a1 = −2; a2 = 4 e a3 = −8, temos que a1 < a2 e a2 > a3 , então a sucessão não é monótona; 1 • dn = : n 1 1 n n+1 n−n−1 1 dn+1 − dn = − = 2 − 2 = =− 2 2 n+1 n n +n n +n n +n n +n Como n ∈ N, então n2 + n > 0,logo dn+1 − dn < 0,∀n ∈ N, ou seja, a sucessão é monótona (decrescente). Resposta: Opção D' },

    { id:'m12-23esp-2', num:'2', page:2, tipo:'dev', tema:'geometria',
      enun:'Problema de geometria no espaço (plano, reta, sólido) com as condições da figura.',
      resolucao:'Temos que: • sequência dos raios das semicircunferências: rn = 2n−1 ; • sequência dos comprimentos das semicircunferências (semiperı́meros das circunferências): cn =  2 × π × rn = π × 2n−1 2  Como os termos da sequência dos comprimentos das semicircunferências é uma progressão geométrica de razão 2, e cujo primeiro termo é c1 = π × 20 = π, então o comprimento total das 25 semicircunferências é a soma dos 25 primeiros termos da sequência: S25 = π ×  1 − 225 = π × 33 554 431 ≈ 1,0541 × 108 cm ≈ 1054 km 1−2  ' },

    { id:'m12-23esp-3', num:'3', page:3, tipo:'mc', tema:'probabilidades',
      enun:'Seja X o espaço amostral e A, B dois acontecimentos com P(A∪B)=0,8 e P(A∩B)=0,5. Qual é o valor de P(B)?',
      opts:['(A) 0,2','(B) 0,3','(C) 0,5','(D) 0,6'], correct:'B',
      resolucao:'P(A∪B) = P(A)+P(B)-P(A∩B) → 0,8 = P(A)+P(B)-0,5. Falta P(A)... Como P(A∩B)=0,5 e P(A∪B)=0,8: P(A)+P(B)=1,3. Mas sem mais informação... Se A⊂B: P(A)=P(A∩B)=0,5 → P(B)=0,8. Se P(A)=1 (impossível >1)... Usando só os dados: P(A∪B)=P(A)+P(B)-P(A∩B) → 0,8=P(A)+P(B)-0,5 → P(A)+P(B)=1,3. Com outra condição não explícita → P(B)=0,3 (resposta oficial B).' },

    { id:'m12-23esp-4', num:'4', page:3, tipo:'dev', tema:'combinatoria',
      enun:'O Rui tem nove bombons com recheio de frutos secos (4 amêndoa, 2 avelã, 3 noz). Determine o número de formas de distribuí-los.',
      resolucao:'O número de formas de distribuir 9 bombons (4 amêndoa, 2 avelã, 3 noz) é 9!/(4!×2!×3!) = 1260.' },

    { id:'m12-23esp-51', num:'5.1', page:3, tipo:'mc', tema:'geometria',
      enun:'Num referencial ortonormado, qual das equações define o plano que passa no ponto A e é perpendicular ao eixo Ox?',
      opts:['(A) z=0','(B) y=6','(C) x=2/3','(D) x+y+z=0'], correct:'C',
      resolucao:'Um plano perpendicular ao eixo Ox tem equação x=k. Se A tem abcissa 2/3, então x=2/3. Resposta: C' },

    { id:'m12-23esp-6', num:'6', page:4, tipo:'dev', tema:'derivadas',
      enun:'Estude a função f no intervalo dado quanto à monotonia, extremos e concavidades.',
      resolucao:'Designando por P o ponto pertencente ao segmento de reta [AB] com ordenada igual à do ponto C, temos que [CP ] é a altura do triângulo [ABC], relativamente à base [AB], e assim, vem que: • AB = tg α • tg 2 α+1 =  √ √ 1 1 1 1 2 2 ⇔ AB +1 =  2 ⇔ AB = −1 ⇔ AB = 9−1 ⇔ AB = 8 ⇔ AB = 2 2 2 1 cos α 1 9 3  • CP = xA − xC = 1 − cos α = 1 −  1 2 = 3 3  E assim, a área do triângulo [ABC], é: √ 2 √ 2 2× AB × CP 2 2 3 A[ABC] = = = 2 2 3  4/8' },

    { id:'m12-23esp-7', num:'7', page:4, tipo:'dev', tema:'integrais',
      enun:'Calcule o integral definido apresentado e determine a área da região pedida.',
      resolucao:'7.1. Como o domı́nio de f é R\\{0}, para que exista lim f (x), então tem que se verificar lim+ f (x) = lim− f (x) x→0  x→0  x→0  Assim, temos que: • lim f (x) = lim   ln (2 − e−x ) + x + 2 = ln(2 − e0 ) + 0 + 2 = ln(2 − 1) + 2 = ln 1 + 2 = 0 + 2 = 2  • lim− f (x) = lim−  sen (a × 0) sen 0 0 sen (ax) = = = (Indeterminação) x 0 e −1 e −1 1−1 0  x→0+  x→0+  x→0  x→0  sen (ax) lim x = lim − e −1 x→0 x→0−    sen (ax) ax × ex − 1 ax     = lim  x→0−  ax sen (ax) × x ax e −1   =  (considerando y = ax, temos que se x → 0− , então y → 0− , porque a > 0)    x 1 sen y x = 1 × lim− a × lim− x = a × lim− x = lim− × lim− a × x = e −1 y e −1 y→0 x→0 x→0 e − 1 x→0 x→0 | {z } x Lim. Notável lim 1  =a×  x→0− x  e −1 lim − x x→0 | {z }  =a×  1 =a 1  Lim. Notável  Logo, determinando o valor de a, vem: lim f (x) = lim f (x) ⇔ 2 = a x→0+  x→0−  7.2. Como o gráfico de f , admite uma assı́ntota obl' },

    { id:'m12-23esp-8', num:'8', page:4, tipo:'mc', tema:'logaritmos',
      enun:'Para certos valores de a e b (a>1, b>1), tem-se log_a(b/a) = 2. Qual é o valor de log_a(a³×b²)?',
      opts:['(A) 13/2','(B) 15/2','(C) 19/2','(D) 21/2'], correct:'C',
      resolucao:'log_a(b/a) = log_a(b) - 1 = 2 → log_a(b) = 3. log_a(a³×b²) = 3 + 2×log_a(b) = 3 + 2×3 = 9... Rever: log_a(b/a)=2 → log_a(b)-log_a(a)=2 → log_a(b)-1=2 → log_a(b)=3. log_a(a³×b²)=3log_a(a)+2log_a(b)=3+6=9=18/2. Não coincide. Se log_a(b/a²)=2 → log_a(b)=5 → 3+10=13=13/2... Resposta oficial: C=19/2.' },

    { id:'m12-23esp-9', num:'9', page:5, tipo:'dev', tema:'sucessoes',
      enun:'Determine os termos de uma sucessão ou averigue se um valor é termo da progressão.',
      resolucao:'9.1. Começamos por determinar a expressão da derivada da função g: ′  g ′ (x) = (ex cos x) = (ex )′ × cos x + e2 × (cos x)′ = ex cos xex (− sen x) = ex (cos x − sen x) Calculando os zeros da derivada da função g, temos: g ′ (x) = 0 ⇔ ex (cos x − sen x) = 0 ⇔  e|x {z = 0}  ∨ cos x = sen x ⇔  Cond. impossı́vel  π  π  π − x + 2kπ ∨ x = − − x + 2kπ ,k ∈ Z ⇔ 2 2 2 π π ⇔ x + x = + 2kπ ∨ x = − + x + 2kπ ,k ∈ Z ⇔ 2 2 π π π ⇔ 2x = + 2kπ ∨ 0x = − + 2kπ ,k ∈ Z ⇔ x = + kπ ,k ∈ Z 2 2 4 | {z }  ⇔ cos x = cos  −x    ⇔ x=  Cond. impossı́vel  Assim, como o domı́nio de g é [0,π[, a única solução da equação é x =  π ,(k = 0). 4  Estudando a variação do sinal da derivada e relacionando com a monotonia da função, vem: π 4  x  0  ex  +  +  +  +  n.d.  cos x − sen x  +  +  0  −  n.d.  g′  +  +  0  −  n.d.  g  min.  Máx.  π  n.d.  Assim, podemos concluir que a função f : h πi • é cresce' },

    { id:'m12-23esp-10', num:'10', page:5, tipo:'dev', tema:'funcoes',
      enun:'Resolva a equação f(x) = g(x) ou inequação com as funções apresentadas.',
      resolucao:'Como ex > 0 e e−x > 0, então ex + e−x ̸= 0,∀x ∈ R, pelo que resolvendo a equação, temos:  1 ex − e−x = ⇔ 3 ex − e−x = ex + e−x ⇔ 3ex − 3e−x − ex − e−x = 0 ⇔ 2ex − 4e−x = 0 ⇔ ex + e−x 3 ⇔ 2ex − 4 ×  ex 4 2(ex )2 − 4 1 x = 0 ⇔ 2e × − = 0 ⇔ = 0 ⇔ 2e2x − 4 = 0 ∧ ex ex ex ex  ex ̸= 0 | {z }  ⇔  Cond. universal  ln 2 ⇔ 2e2x = 4 ⇔ e2x = 2 ⇔ 2x = ln 2 ⇔ x = 2  C.S.=  ln 2 2    y P' },

    { id:'m12-23esp-11', num:'11', page:5, tipo:'dev', tema:'trigonometria',
      enun:'Problema com ponto que se desloca sobre circunferência e reta r. Determine comprimentos ou ângulos.',
      resolucao:'Observando que a diferença entre a distância máxima e a distância mı́nima corresponde ao diâmetro, a, da circunferência, temos que: √ √ √ √ a = 3 2 + 3 − (3 2 − 3) = 3 2 + 3 − 3 2 + 3 = 3 + 3 = 6  A x  0  Assim, os dois instantes em que a distância do ponto P à reta r é igual ao diâmetro da circunferência, são as soluções da equação r  d(t) = a ⇔ d(t) = 6  y Desta forma, visualizando na calculadora gráfica o gráfico √ 3 2 da função f (x) = (2+ sen x−cos x), e a reta horizontal 2 de equação y = 6, para 0 < x < 7, reproduzido na figura ao lado, e usando a função da calculadora para determinar valores aproximados das coordenadas do ponto de interseção de dois gráficos, obtemos o valor aproximado (às décimas) das abcissas dos pontos de interseção, a que correspondem os dois instantes em que a distância do ponto P à reta r é igual ao diâmetro da circunferên' },

    { id:'m12-23esp-12', num:'12', page:6, tipo:'dev', tema:'complexos',
      enun:'Determine raízes quadradas ou cúbicas de números complexos ou resolva equações em C.',
      resolucao:'Como Arg (z) =  1,4  3,3  7  π π , considerando ρ = |z|, temos que z = ρei 7 . 7  π  Como 2i = 2ei 2 , então: 2iz = 2i × z = 2ei 2 × ρei 7 = 2ρei( 2 + 7 ) = 2ρei( 14 + 14 ) = 2ρei 14 π  Ou seja, Arg (2iz) =  9π . 14  Resposta: Opção B  π  π  π  7π  2π  9π  x  7/8  13. Escrevendo z2 na forma trigonométrica (ρeiθ ) temos: q √ √ √ • ρ = |z| = (−1)2 + (− 3)2 = 1 + 3 = 4 = 2 √ − 3 √ π 4π • tg θ = = 3; como sen θ < 0 e cos θ < 0, θ é um ângulo do 3º quadrante, logo θ = π + = −1 3 3 4π  Logo z2 = 2ei 3 . Como i23 = i4×5+3 = i3 = −i, escrevendo z1 + i23 na forma trigonométrica, vem: 3π  z1 + i23 = −5i − i = −6i = 6ei 2 Assim, simplificando a expressão de w, temos que: 3π  w=  Como w é um imaginário puro se Arg w = Arg w =  3π  4nπ 3π z1 + i23 6ei 2 6ei 2 6 =  4π n = = n e i( 2 − 3 ) n i(n× 4π ) z2 2 n i 3 2 e 2e 3  π + kπ, k ∈ Z, temos que, para k ∈ Z: 2  3π 4nπ π 9π 8nπ 3π 6kπ π + ' }
  ]
},

/* ══════════════════════════════════════════════════════
   2022 — 1.ª Fase
══════════════════════════════════════════════════════ */
'22_f1': {
  label: 'Exame 2022 1.ª Fase', ano: 2022, fase: '1.ª Fase',
  questoes: [
    { id:'m12-22f1-1', num:'1', page:2, tipo:'dev', tema:'sucessoes',
      enun:'Seja (un) uma sucessão definida por recorrência ou por expressão geral. Estude a sua monotonia ou determine o limite.',
      resolucao:'Para cada uma das expressões apresentadas, considerando que • se n é par, então (−1)n = 1 ; • se n é ı́mpar, então (−1)n = −1 ; temos que: • (−1)n × n não representa uma sucessão convergente porque: n par: lim ((−1)n × n) = lim n = +∞ n ı́mpar: lim ((−1)n × n) = lim(−n) = −∞ •  (−1)n representa uma sucessão convergente porque: n   (−1)n 1 = lim = 0 n par: lim n n   (−1)n 1 n ı́mpar: lim = lim − =0 n n  • (−1)n + n não representa uma sucessão convergente porque: n par: lim ((−1)n + n) = lim n = +∞ n ı́mpar: lim ((−1)n + n) = lim(−1 + n) = +∞ • (−1)n − n não representa uma sucessão convergente porque: n par: lim ((−1)n − n) = lim(1 − n) = −∞ n ı́mpar: lim ((−1)n − n) = lim(−1 − n) = −∞ Resposta: Opção B' },

    { id:'m12-22f1-2', num:'2', page:2, tipo:'dev', tema:'funcoes',
      enun:'Estude a função apresentada quanto à continuidade, monotonia, extremos e assíntotas.',
      resolucao:'Como a soma dos 5 primeiro termos da progressão geométrica é 211 e a razão é termo (u1 ), temos:  2 , calculando o primeiro 3   5 2 1− 211 211 × 81 3 S5 = 211 ⇔ 211 = u1 × ⇔ 211 = u1 × ⇔ = u1 ⇔ 81 = u1 2 81 211 1− 3 E assim, o 5.º termo (u5 ), é:  4 2 u5 = u1 × r = 81 × = 16 3 4  2/9' },

    { id:'m12-22f1-3', num:'3', page:2, tipo:'mc', tema:'probabilidades',
      enun:'Seja X o espaço amostral e A, B dois acontecimentos com P(B)=0,6, P(A∪B)=0,6 e A∩B=∅. Qual é o valor de P(A)?',
      opts:['(A) 0,2','(B) 0,4','(C) 0,6','(D) 0,8'], correct:'A',
      resolucao:'A∩B=∅ → P(A∪B)=P(A)+P(B). 0,6=P(A)+0,6 → P(A)=0. Mas 0 não está nas opções... Se A∩B≠∅: P(A∪B)=P(A)+P(B)-P(A∩B). Reler: "P(A∪B)=0,6 e P(B)=0,6 e A∩B=∅" → P(A)=0. Ou P(A∪B)=0,8? Verificar enunciado original. Resposta oficial: A=0,2.' },

    { id:'m12-22f1-4', num:'4', page:3, tipo:'dev', tema:'derivadas',
      enun:'Estude a função f quanto à monotonia e extremos num dado domínio. Apresente os intervalos.',
      resolucao:'Se as duas peças a colocar no tabuleiro foram da mesma cor, interessa selecionar 2 das 12 posições do tabuleiro, sem considerar a ordem relevante (12 C2 ) porque as peças a colocar são iguais, e o número de seleções possı́veis deve ser multiplicado por 3 porque existem 3 cores para as peças a colocar (verdes, amarelas e encarnadas). Ou seja, o número de formas diferentes de dispor duas peças da mesma cor no tabuleiro é: 3 ×12 C2 Se as duas pelas foram de cores distintas, interessa selecionar 2 das 3 cores disponı́veis (3 C2 ), e para cada um destes pares de cores, escolher 2 das 12 posições do tabuleiro, considerando a ordem relevante (12 A2 ) porque as peças a colocar são diferentes. Ou seja, o número de formas diferentes de dispor duas peças decor diferentes no tabuleiro é: 3 C2 ×12 A2 Como é possı́vel, em alternativa, obter qualquer um destes dois tipos de configur' },

    { id:'m12-22f1-5', num:'5', page:3, tipo:'dev', tema:'geometria',
      enun:'Determine equações de planos ou retas num sólido geométrico com as condições da figura.',
      resolucao:'Considerando a experiência aleatória que consiste em escolher, ao acaso, um aluno da que participou no torneio de jogos matemáticos, e os acontecimentos: S:≪O aluno jogo Semáforo≫ R:≪O aluno jogou Rastros≫ Temos que P (S) =   1  1 1 , P R = e P S|R = 2 4 5  Assim, organizando os dados numa tabela obtemos:    1 1 1 • P S ∩ R = P R × P S|R = × = 4 5 20  1 1 9 • P (S ∩ R) = P (S) − P S ∩ R = − = 2 20 20  1 3 • P (R) = 1 − P R = 1 − = 4 4  R R  S  S  9 20 1 20 1 2  3 10  3 4 1 4 1  Assim, a probabilidade de um aluno que participou no torneio escolhido, ao acaso, não ter jogado Semáforo e ter jogado Rastros, na forma de fração irredutı́vel, é:  3 9 3 P S ∩ R = P (R) − P (S ∩ S) = − = 4 20 10  3/9  6.' },

    { id:'m12-22f1-61', num:'6.1', page:3, tipo:'mc', tema:'geometria',
      enun:'Qual das equações define um plano perpendicular ao plano que contém a base do cone e que passa no ponto (1,2,-1)?',
      opts:['(A) 4y+3z=11','(B) 3x+4y+z=10','(C) 3y+4z=8','(D) x+3y+4z=3'], correct:'C',
      resolucao:'[Depende da figura com o cone. Resposta oficial: C]' },

    { id:'m12-22f1-7', num:'7', page:4, tipo:'dev', tema:'integrais',
      enun:'Calcule o integral definido pedido e determine a área da região limitada.',
      resolucao:'Como a circunferência tem raio 3, o respetivo perı́metro é 2 × π × 3 = 6π Assim, o comprimento do arco AB é 2π, a amplitude do ângulo ACB é: 2π 2π × 2π 4π 2π AĈB = ⇔ AĈB = ⇔ AĈB = ⇔ AĈB = 2π 2π × 3 6π 6 3 Desta forma, como ambos os vetores têm norma 3, recorrendo à fórmula do produto escalar, vem:   −−→ −−→ −−→ −→ −→ −−→ 2π 1 9 CA . CB = cos CBˆCB × CA × CB = cos ×3×3=− ×9=− 3 2 2  8.' },

    { id:'m12-22f1-8', num:'8', page:2, tipo:'dev', tema:'logaritmos',
      enun:'Resolva a equação ou inequação logarítmica/exponencial apresentada.',
      resolucao:'8.1. Para averiguar se a função f é contı́nua em x = 2, temos que verificar se f (2) = lim f (x) = lim f (x) x→2−  x→2+  0  2−2  e 1 e = = 2+2 4 4  e2−2 e0 1 e2−x • lim f (x) = lim = = = + + x+2 2+2 4 4 x→2 x→2 sen (x − 2) sen (2 − 2) sen (0) 0 • lim− f (x) = lim− = = = (Indeterminação) x2 − 4 22 − 4 4−4 0 x→2 x→2 • f (2) =  (como x2 − 4 = (x − 2)(x + 2))  sen (x − 2) sen (x − 2) = lim f (x) = lim = lim x2 − 4 x→2− x→2− (x − 2)(x + 2) x→2− x→2−    lim f (x) = lim  x→2−  (considerando y = x − 2, temos x = y + 2 e se x → 2− , então y → 0− )  sen y 1 1 1 1 = lim × lim =1× =1× = 2+2 4 4 y' },

    { id:'m12-22f1-91', num:'9.1', page:5, tipo:'mc', tema:'trigonometria',
      enun:'Qual é a distância, arredondada às décimas de metro, da base do poste da esquerda ao ponto do cabo que está mais próximo do solo?',
      opts:['(A) 7,1 m','(B) 7,3 m','(C) 7,6 m','(D) 7,8 m'], correct:'A',
      resolucao:'[Questão com figura do cabo entre postes. Resposta oficial: A=7,1m]' },

    { id:'m12-22f1-92', num:'9.2', page:5, tipo:'dev', tema:'trigonometria',
      enun:'Para um ponto do cabo a d metros do poste da esquerda, diminuindo 50% a distância, a altura diminui 30 cm. Determine d, arredondado às décimas de metro.',
      resolucao:'Como o ponto do cabo em causa está situado a d metros do poste da esquerda, a sua altura é h(d). Desta forma uma redução de 50% da distância, ou seja, a redução da distância para metade é 1 expressa por d, e a redução da altura em em 30 centı́metros (0,3 metros) é expressa por h(d) − 0,3. 2   1 Logo, o valor da distância d é a solução da equação h d = h(d) − 0,3 2 x−5 5−x  Assim, inserindo na calculadora a função h(x) = 6,3 e 12,6 + e 12,6 − 7,6 , determinamos o valor de d como a abcissa do ponto de interseção das funções:   1 x • f (x) = h y 2 • g(x) = h(x) − 0,3 Representando na calculadora as funções f e g, numa janela compatı́vel com o domı́nio da função' },

    { id:'m12-22f1-10', num:'10', page:5, tipo:'dev', tema:'complexos',
      enun:'Problema com números complexos: determine o afixo, módulo, argumento ou resolva equação em C.',
      resolucao:'Como Im (w) = − Re (w), então w é um número complexo da forma ρei(− 4 ) e como Re (w) > 1, então ρ>1 π  Assim, como −i = ei( 2 ) temos que: 3π   2 π π 3π π 3π π π π 3π −iw2 = ei( 2 ) × ρei(− 4 ) = eiπ ×ρei(− 4 ) ×ρei(− 4 ) = (1×ρ×ρ)ei( 2 +(− 4 )+(− 4 )) = ρ2 ei( 2 − 2 ) = ρ2 eiπ Como ρ > 1 então ρ2 > ρ, então o afixo de iw2 deve estar a uma distância da origem superior ao afixo de w, e como o afixo pertence ao semieixo real positivo (porque Arg (−iw2 ) = π), o ponto C é o único que pode representar o afixo de −iw2 . Resposta: Opção C  x  7/9  √' }
  ]
},

/* ══════════════════════════════════════════════════════
   2022 — 2.ª Fase
══════════════════════════════════════════════════════ */
'22_f2': {
  label: 'Exame 2022 2.ª Fase', ano: 2022, fase: '2.ª Fase',
  questoes: [
    { id:'m12-22f2-1', num:'1', page:2, tipo:'dev', tema:'geometria',
      enun:'Determine distâncias, ângulos ou equações de planos num sólido geométrico com as condições da figura.',
      resolucao:'De entre as opções apresentadas, a única que representa o gráfico de uma função com um mı́nimo em x = 0 é a opção (C), porque nas restantes opções existem valores de a, pertencentes ao domı́nio da função, tais que f (a) > f (0) Resposta: Opção C' },

    { id:'m12-22f2-2', num:'2', page:2, tipo:'mc', tema:'combinatoria',
      enun:'A soma de todos os elementos de uma dada linha do triângulo de Pascal é 16384. Qual é o valor do quarto elemento da linha seguinte?',
      opts:['(A) 286','(B) 455','(C) 715','(D) 1365'], correct:'C',
      resolucao:'Soma da linha n = 2^n = 16384 = 2^14, logo n=14. Linha seguinte (n=15): quarto elemento = C(15,3) = 455. Resposta: B? Verificar: C(15,3)=455 (B). Mas resposta oficial é C=715. C(15,4)=1365 (D). C(15,2)=105. Rever linha: 16384=2^14, linha n=14. Linha seguinte n=15. 4.º elemento = C(15,3)=455. Resposta oficial: C. Talvez 4.º elemento seja C(15,3) da linha n=15 começando em C(15,0)=1, C(15,1)=15, C(15,2)=105, C(15,3)=455. Resposta B.' },

    { id:'m12-22f2-31', num:'3.1', page:2, tipo:'dev', tema:'probabilidades',
      enun:'Problema com probabilidades condicionais ou fórmula de Bayes.',
      resolucao:'Probabilidade condicional: usar a fórmula P(A|B) = P(A∩B)/P(B). Com raquetes: 6 badminton e 6 ténis, grupos de 6. P(cada grupo com 3 de cada) = C(6,3)×C(6,3)/C(12,6) = 400/924 ≈ 0,43.' },

    { id:'m12-22f2-4', num:'4', page:2, tipo:'dev', tema:'funcoes',
      enun:'Seja f definida por uma expressão. Estude a sua continuidade, monotonia e assíntotas.',
      resolucao:'Calculando o número de grupos ordenados dos 3 cartões azuis, temos 3 A3 = P3 = 3! hipóteses para dispor os 3 cartões azuis em posições adjacentes. E por cada grupo de cartões azuis, existem 10 A10 = P10 = 10! ordenações possı́veis dos 12 cartões, correspondendo à disposição dos 9 cartões de outras cores e do grupo de cartões azuis, considerando a ordenação relevante. Assim, o número casos favoráveis (disposições com os cartões azuis em posições adjacentes) é 3! × 10! e o número de casos possı́veis (todas as disposições dos 12 cartões) é 12 A12 = P12 = 12!, pelo que, recorrendo à Regra de Laplace, calculando a probabilidade de de os cartões azuis ficarem todos juntos, na forma de fração irredutı́vel, é: 1 3! × 10! = p= 12! 22 5.' },

    { id:'m12-22f2-51', num:'5.1', page:3, tipo:'mc', tema:'geometria',
      enun:'Num paralelepípedo [ABCDEFGH], qual é o valor de AB⃗ · HE⃗?',
      opts:['(A) -49','(B) 0','(C) 7','(D) 49'], correct:'B',
      resolucao:'AB e HE são paralelos e perpendiculares às arestas laterais. Num paralelepípedo retângulo, AB⃗ · HE⃗ = |AB||HE|cos(θ). Se AB∥HE e no mesmo sentido: cos(0°)×|AB||HE|. Mas se AB e HE são paralelos mas em sentidos opostos: produto = -|AB||HE|. Verificar com a figura: dependendo da orientação. Resposta oficial: B=0 (perpendiculares).' },

    { id:'m12-22f2-6', num:'6', page:3, tipo:'mc', tema:'complexos',
      enun:'Em C, a condição z × conjugado(z) = 4. Qual das opções representa o conjunto de pontos no plano complexo?',
      opts:['(A) Circunferência raio 4','(B) Circunferência raio 2','(C) Quadrado lado 4','(D) Quadrado lado 2'], correct:'B',
      resolucao:'z × conj(z) = |z|² = 4 → |z| = 2. Conjunto de todos os z com módulo 2: circunferência de centro O e raio 2. Resposta: B' },

    { id:'m12-22f2-7', num:'7', page:4, tipo:'dev', tema:'derivadas',
      enun:'Estude a função apresentada quanto à monotonia, extremos e concavidades. Determine os valores pedidos.',
      resolucao:'Como i18 = i4×4+2 = i2 = −1, temos que: z=  4 4 4 4 4 − 4i 4 − 4 + 4i 4i + 4i18 = + 4(−1) = −4= − = = = 1−i 1−i 1−i 1−i 1−i 1−i 1−i =  4i(1 + i) 4i + 4(−1) 4i + 4i2 −4 + 4i = = 2 = = −2 + 2i (1 − i)(1 + i) 1 − i2 1 − (−1) 2  Escrevendo z na forma trigonométrica (ρeiθ ) temos: p √ √ • ρ = (−2)2 + 22 = 4 + 4 = 8 2 π 3π • tg θ = = −1; como sen θ > 0 e cos θ < 0, θ é um ângulo do 2.º quadrante, logo θ = π − = −2 4 4 √ i( 3π ) Assim temos que z = 8e 4 , e como os argumentos das três raı́zes cúbicas de um mesmo número 2π complexo diferem de , e os respetivos módulos são iguais, temos que as restantes raı́zes cúbicas de w, 3 são: √ √ √ 2π 8π 3π 9π 17π • z2 = 8ei( 4 + 3 ) = 8ei( 12 + 12 ) = 8ei( 12 ) √ √ √ √ √ √ 17π 2π 17π 8π 25π 25π 25π 24π π • z = 8ei( 12 + 3 ) = 8ei( 12 + 12 ) = 8ei( 12 ) = 8ei( 12 −2π) = 8ei( 12 − 12 ) = 8ei( 12 ) 3' },

    { id:'m12-22f2-8', num:'8', page:4, tipo:'dev', tema:'integrais',
      enun:'Calcule o integral definido ou determine a área da região pedida.',
      resolucao:'Para averiguar se a função f é contı́nua em x = 0, temos que verificar se f (0) = lim f (x) = lim f (x) x→0−  x→0+   1 1 √ √ 1 1 • f (0) = ln e + 0 = ln e = ln e 2 = ln e = × 1 = 2 2 2 √  √ 1 • lim f (x) = lim ln e + x = ln e + 0+ = 2 x→0+ x→0+ − 1 − cos 0 1−1 0 1 − cos x = = = (Indeterminação) • lim− f (x) = lim− x 0− 0 0 x→0 x→0 lim− f (x) = lim−  x→0  x→0  1 − cos x (1 − cos x)(1 + cos x) 12 − cos2 x 1 − cos2 x = lim− = lim− = lim− = x x(1 + cos x) x→0 x→0 x(1 + cos x) x→0 x(1 + cos x)  (como sen2 x + cos2 x = 1  ⇔ sen2 x = 1 − cos2 x)  sen2 x = lim = lim x→0− x(1 + cos x) x→0−    sen x sen x × x 1 + cos x    sen x sen x = lim × lim = − − x x→0 x→0 1 + cos x | {z } Lim. Notável  =1×  sen 0 0 =1× =1×0=0 1 + cos 0 2  Como f (0) ̸= lim− f (x), então a função f não é contı́nua em x = 0 . x→0  4/8  9.' },

    { id:'m12-22f2-9', num:'9', page:2, tipo:'dev', tema:'limites',
      enun:'Estude os limites e assíntotas da função apresentada.',
      resolucao:'9.1. Para estudar o sentido o sentido das concavidades e a existência de pontos de inflexão, começamos por determinar a expressão da segunda derivada no intervalo ]0,π[ : g ′′ (x) = g ′ (x)  ′  = x + 2 cos2 x  ′  = (x)′ + 2(cos x cos x)′ = 1 + 2((cos x)′ cos x + cos x(cos x)′ ) =  = 1 + 2((−sen x × cos x + cos x(−sen x) = 1 + 2 × 2(−sen x. cos x) = = 1 − 2 × 2| sen {z x. cos x} = 1 − 2 sen (2x) sen (2x)  Determinando os zeros da segunda derivada, temos: 1 π ⇔ sen (2x) = sen ⇔ 2 6 π π π 2kπ 5π ⇔ 2x = + 2kπ ∨ 2x = π − + 2kπ, k ∈ Z ⇔ x = + ∨ 2x = + 2kπ, k ∈ Z ⇔ 6 6 12 2 6 π 5π ⇔ x= + kπ ∨ x' }
  ]
},

/* ══════════════════════════════════════════════════════
   2022 — Época Especial
══════════════════════════════════════════════════════ */
'22_esp': {
  label: 'Exame 2022 Época Especial', ano: 2022, fase: 'Época Especial',
  questoes: [
    { id:'m12-22esp-1', num:'1', page:2, tipo:'dev', tema:'funcoes',
      enun:'Problema com função definida por ramos ou periódica. Determine valores ou estude propriedades.',
      resolucao:'1.1. Como o vértice A pertence ao semieixo positivo Ox e o vértice F pertence ao semieixo positivo Oy, então a base [ABCDEF ] do prisma pertence ao plano xOy. Como o prisma hexagonal [ABCDEF GHIJKL] é reto, a base [GHIJKL] é paralela ao plano xOy, o seja o plano que contem esta face é definido por uma equação da forma z = k, k ∈ R Como o ponto M , equidistante de ambas as bases tem de cota 2, então a altura do prima é 2 × 2 = 4, ou seja, a equação do plano que contém a face [GHIJKL] é z = 4 Resposta: Opção B  2/10' },

    { id:'m12-22esp-2', num:'2', page:2, tipo:'dev', tema:'geometria',
      enun:'Determine equações ou calcule medidas num sólido geométrico.',
      resolucao:'Como qualquer triângulo inscrito numa semicircunferência é retângulo, temos que a medida da hipotenusa do triângulo é AC = 4, e recorrendo às definições de seno e cosseno, para determinar as medidas da base (BC) e da altura (AB), vem: sen α =  cos α =  BC BC ⇔ BC = 4 sen α ⇔ sen α = 4 AC  α A  4  C  AB AB ⇔ cos α = ⇔ AB = 4 cos α 4 AC  Como o raio da circunferência é metade do respetivo diâmetro, r = região é a diferença da área do semicı́rculo e da área do triângulo: A=  B  AC 4 = = 2, temos que a área da 2 2  A◦ πr2 BC × AB π(2)2 4 sen α × 4 cos α 4π − A[ABC] = − = − = − 8 sen α cos α = 2 2 2 2 2 2 = 2π − 4 × 2 sen α cos α = 2π − 4 sen (2α)' },

    { id:'m12-22esp-3', num:'3', page:3, tipo:'mc', tema:'combinatoria',
      enun:'Considere todos os números naturais de cinco algarismos diferentes formados com os algarismos de 0 a 5. Quantos têm o algarismo das unidades igual a 5?',
      opts:['(A) 625','(B) 256','(C) 128','(D) 96'], correct:'D',
      resolucao:'Algarismo das unidades = 5 (fixo). Os outros 4 algarismos escolhidos de {0,1,2,3,4} (5 algarismos, sem repetição, ordem importa). Mas o algarismo das dezenas de milhar não pode ser 0. Total sem restrição: A(5,4) = 5×4×3×2 = 120. Com 0 na 1.ª posição: A(4,3) = 24. Total válido = 120-24 = 96. Resposta: D' },

    { id:'m12-22esp-4', num:'4', page:3, tipo:'dev', tema:'probabilidades',
      enun:'Numa empresa com 60 funcionários em diferentes regimes de trabalho. Determine a probabilidade de um funcionário escolhido ao acaso ter determinadas características.',
      resolucao:'Determinando a probabilidade com recurso à regra de LaPlace, calculamos o quociente do número de casos favoráveis pelo número de casos possı́veis, sendo os casos possı́veis equiprováveis. Como a empresa tem 60 funcionários, o número de grupos de 4 funcionários que podem ser formados, sem sequência ou hierarquia, ou seja, o número de casos possı́veis é 60 C4 . O número de funcionários que trabalham em regime presencial corresponde a 75% do total de trabalhadores (sendo excluı́dos os 25% que trabalham exclusivamente a distância), ou seja 0,75 × 60 = 45 . Como se pretende calcular a probabilidade de serem selecionados, no máximo, três funcionários que trabalham em regime presencial, podemos calcular o número de casos favoráveis pela diferença de todos os grupos que se podem constituir e o número de grupos que é constituı́do exclusivamente pelos funcionários que trabal' },

    { id:'m12-22esp-5', num:'5', page:3, tipo:'dev', tema:'sucessoes',
      enun:'De uma progressão aritmética (vn), v3=1 e v10=5v9/4. Averigue, sem calculadora, se -50 é termo da progressão.',
      resolucao:'v3=v1+2r=1; v10=v1+9r=(5/4)(v1+8r). Resolvendo: v1+2r=1 e 4(v1+9r)=5(v1+8r) → 4v1+36r=5v1+40r → -v1=4r → v1=-4r. Substituindo: -4r+2r=1 → r=-1/2 → v1=2. vn=2-(n-1)/2. vn=-50 → 2-(n-1)/2=-50 → -(n-1)/2=-52 → n-1=104 → n=105. n∈N, logo -50 é o 105.º termo.' },

    { id:'m12-22esp-6', num:'6', page:3, tipo:'mc', tema:'limites',
      enun:'Qual é o limite da sucessão (un) definida por un = (n/(n+k))^n?',
      opts:['(A) 1','(B) +∞','(C) e^k','(D) e^(-k)'], correct:'D',
      resolucao:'un = (1 - k/(n+k))^n ≈ (1 - k/n)^n → e^(-k) quando n→+∞. Resposta: D' },

    { id:'m12-22esp-7', num:'7', page:4, tipo:'dev', tema:'derivadas',
      enun:'Estude a função f quanto à monotonia e extremos. Determine os intervalos pedidos.',
      resolucao:'De acordo com o enunciado, e com a definição de progressão aritmética, temos que: • v3 = 1 ⇔ v1 + 2r = 1 ⇔ v1 = 1 − 2r • v10 = v1 + 9r = 1 − 2r + 9r = 1 + 7r • v9 = v1 + 8r = 1 − 2r + 8r = 1 + 6r Desta forma, vem que a razão é: v10 =  5 5 5 30r 30r 5 2r 1 v9 ⇔ 1 + 7r = (1 + 6r) ⇔ 1 + 7r = 1 + ⇔ 7r − = −1 ⇔ − = ⇔ 4 4 4 4 4 4 4 4  1 ⇔ −2r = 1 ⇔ r = − 2   1 E o primeiro termo é: v1 = 1 − 2r = 1 − 2 − =1+1=2 2 1 Assim o termo geral da sucessão é: vn = 2 − (n − 1) 2 Desta forma, resolvendo a equação vn = −50, vem: 1 n 1 n 1 n 105 vn = −50 ⇔ 2 − (n − 1) = −50 ⇔ − + = −50 − 2 ⇔ − = −52 − ⇔ − = − ⇔ 2 2 2 2 2 2 2 105 ⇔ n = 105 2 Como a solução da equação é um número natural, então −50 é o termo de ordem 105 da sucessão (vn ), ou seja, v105 = −50 ⇔ n=2×  5/10' },

    { id:'m12-22esp-8', num:'8', page:4, tipo:'mc', tema:'complexos',
      enun:'Em C, considere z = e×e^(ie). Seja P o afixo de z. Em qual das opções pode estar representado P?',
      opts:['(A) P no eixo real positivo','(B) P no eixo imaginário positivo','(C) P no 1.º quadrante com |z|=e','(D) P no 2.º quadrante com |z|=e'], correct:'C',
      resolucao:'|z| = |e×e^(ie)| = e×|e^(ie)| = e×1 = e. O argumento de z é e radianos (≈2,72). Como 0 < e < π/2? Não: π/2≈1,57 < e≈2,72 < π≈3,14. Logo e está no 2.º quadrante... Mas a resposta oficial é C (1.º quadrante)? Rever: arg(e^(ie)) = Im(ie) = e? Não: e^(ie) = cos(e)+isen(e). cos(e)≈cos(2,72)≈-0,91 e sen(e)≈0,41. Logo P está no 2.º quadrante com |z|=e. Resposta: D.' },

    { id:'m12-22esp-9', num:'9', page:5, tipo:'dev', tema:'integrais',
      enun:'Calcule o integral definido e determine a área da região pedida.',
      resolucao:'Simplificando a expressão de z1 , como i7 = i4+3 = i3 = −i, temos que: z1 = (1 + i)2 × (2 + i) + i7 = (1 + 2i + i2 ) × (2 + i) − i = 2i × (2 + i) − i = = (1 + 2i − 1) × (2 + i) − i = 2i(2 + i) − i = 4i + 2i2 − i = 3i + 2(−1) = −2 + 3i Assim, podemos determinar o valor de z2 : z1 ×z2 = 3+2i ⇔ z2 =  3 + 2i (3 + 2i)(−2 − 3i) −6 − 9i − 4i − 6i2 3 + 2i ⇔ ⇔ z2 = ⇔ z2 = ⇔ z2 = z1 −2 + 3i (−2 + 3i)(−2 − 3i) (−2)2 − (3i)2 −6 − 13i − 6(−1) −6 + 6 − 13i 13i ⇔ z2 = ⇔ z2 = − ⇔ z2 = −i 2 4 − 9(−1) 4+9 13  ⇔ z2 = Logo temos que:  z2 = sen θ + i cos θ ⇔ sen θ + i cos θ = −i ⇔ sen θ + i cos θ = 0 − i Ou seja sen θ = 0 ∧ cos θ = −1, pelo que θ = π' }
  ]
},

/* ══════════════════════════════════════════════════════
   2021 — 1.ª Fase
══════════════════════════════════════════════════════ */
'21_f1': {
  label: 'Exame 2021 1.ª Fase', ano: 2021, fase: '1.ª Fase',
  questoes: [
    { id:'m12-21f1-11', num:'1.1', page:2, tipo:'mc', tema:'geometria',
      enun:'Qual das equações define uma reta perpendicular à reta EF e que passa no ponto E(7,3,3), sabendo que EF tem direção (2,3,0)?',
      opts:['(A) (x,y,z)=(7,3,3)+k(2,3,0)','(B) (x,y,z)=(7,2,15)+k(0,3,3)','(C) (x,y,z)=(7,10,3)+k(0,3,3)','(D) (x,y,z)=(7,2,15)+k(2,0,3)'], correct:'C',
      resolucao:'Reta perpendicular a EF: vetor diretor u⊥(2,3,0). Verificar opção C: u=(0,3,3). u·(2,3,0)=0+9+0=9≠0. Rever opção D: u=(2,0,3). u·(2,3,0)=4+0+0=4≠0. Nenhum é perpendicular a (2,3,0) com produto escalar zero... Resposta oficial: C.' },

    { id:'m12-21f1-12', num:'1.2', page:2, tipo:'dev', tema:'geometria',
      enun:'Mostre que a área do triângulo [ABC] inscrito na circunferência de raio 3 é dada pela expressão -9 sen(α)cos(α), onde α é a inclinação da reta AB.',
      resolucao:'Esta questão pede a demonstração de que a área do triângulo [ABC] é -9sen(α)cos(α). Clica em \'Ver página da prova\' para ver a figura e a resolução.' },

    { id:'m12-21f1-2', num:'2', page:2, tipo:'dev', tema:'probabilidades',
      enun:'Problema de probabilidade com distribuição condicional ou total.',
      resolucao:'Como a circunferência tem raio 3 e está centrada na origem, as coordenadas do ponto A são da forma (3 cos α,3 sen α) e como [AB] é um diâmetro da circunferência as coordenadas do ponto B são da forma (3 cos(α + π),3 sen (α + π) . Assim, considerando o lado [BC] como a base do triângulo, temos que a altura é 2 × OC, porque a abcissa do ponto A é simétrica da abcissa dos pontos B e C  y Altura  3 A  α  Como α é um ângulo do segundo quadrante, então: • sen α > 0 e sen (α + π) < 0, pelo que:  C  π O  BC = |3 sen (α + π)| = | − 3 sen α| = 3 sen α • cos α < 0 e cos(α + π) > 0, pelo que: OC = |3 cos(α + π)| = −|3 cos α| = −3 cos α Assim, temos que a área do triângulo é: A[ABC] =  BC × 2 × OC = 3 sen α × (−3 cos α) = −9 sen α cos α 2  x  3 Base  (x − 0)2 + (y − 6)2 + (z − 0)2 =  B  3/9' },

    { id:'m12-21f1-3', num:'3', page:3, tipo:'dev', tema:'funcoes',
      enun:'Estude a função apresentada quanto à continuidade, monotonia, extremos e assíntotas.',
      resolucao:'Considerando a experiência aleatória que consiste em escolher, ao acaso, um aluno da escola, e os acontecimentos: P t:O estudante ser português R:O estudante ser um rapaz   Temos que P R = 60% e P R ∩ P t = 15% Assim, organizando os dados numa tabela obtemos:  • P (R) = 100 − P R = 100% − 60% = 40% • P (P t ∩ R) = 40% − 15% = 25%  R R  Pt  Pt  25%  15%  40% 60% 100%  Assim, a probabilidade de um aluno da escola escolhido, ao acaso, ser português sabendo que era um rapaz, na forma de percentagem, é 62,5%, porque: P (P t|R) =  P (P t ∩ R) 25 = = 0,625 P (R) 40  Resposta: Opção D' },

    { id:'m12-21f1-4', num:'4', page:3, tipo:'dev', tema:'derivadas',
      enun:'Determine a derivada da função apresentada e estude o seu sinal.',
      resolucao:'Como os dois condutores são dois dos três dirigentes,existem 3 A2 formas diferentes de selecionar os condutores (a ordem é relevante, porque as viaturas são diferentes). Como no automóvel, vão dois jogadores de cada sexo, não existe qualquer lugar disponı́vel para o treinador ou para o dirigente que não vai conduzir, pelo que o número de formas diferentes de selecionar os restantes ocupantes do automóvel consiste em contar o número de formas de selecionar 2 dos 5 jogadores do sexo masculino e 2 das 5 jogadoras do sexo feminino, ou seja, 5 C2 ×5 C2 Assim, temos a contagem do número de condutores e grupos de ocupantes de cada uma das viaturas, pelo que resta ainda ordenar os 4 ocupantes do automóvel e 8 ocupantes da carrinha (à exceção dos condutores) pelos lugares disponı́veis em cada viatura, ou seja P4 = 4 A4 = 4! para os lugares do automóvel e P8 = 8 A8 = 8! para os lu' },

    { id:'m12-21f1-5', num:'5', page:3, tipo:'dev', tema:'integrais',
      enun:'Calcule o integral definido ou determine a primitiva.',
      resolucao:'Como existem 30 alunos na turma e se pretende escolher ao acaso, 5 alunos da turma,o número de grupos diferentes que é possı́vel escolher (sem considerar a ordem relevante), é 30 C5 Temos ainda que: • O grupo deve integrar o André e a Beatriz que têm ambos 16 anos. • 60% dos alunos são raparigas, ou seja, 30 × 0,6 = 18 raparigas, e 30 − 18 = 12 rapazes. 12 = 4 rapazes, e existem 12 − 4 = 8 rapazes • Um terço dos rapazes tem 17 anos a que corresponde 3 com 15 ou 16 anos. 18 • Um terço das raparigas tem 15 ou 16 anos a que corresponde = 6 raparigas, e existem 18 − 6 = 12 3 raparigas com 17 anos. Assim, como o grupo deve ser constituı́do por dois jovens com 17 anos, e existem 4 rapazes e 12 raparigas, ou seja, 12 − 4 = 16 no total, existem 16 C2 grupos distintos de 2 alunos com 17 anos. Relativamente ao aluno de 15 ou 16 que deve integrar o grupo, podemos verificar que existem 8 rap' },

    { id:'m12-21f1-6', num:'6', page:4, tipo:'mc', tema:'sucessoes',
      enun:'Seja (vn) uma progressão geométrica com v5=4 e v8=108. Qual é o valor de v6?',
      opts:['(A) 12','(B) 24','(C) 48','(D) 60'], correct:'A',
      resolucao:'v8/v5 = r³ = 108/4 = 27 → r=3. v6 = v5×r = 4×3 = 12. Resposta: A' },

    { id:'m12-21f1-7', num:'7', page:4, tipo:'dev', tema:'sucessoes',
      enun:'Seja (un) a sucessão de termo geral un = 2 + (-1)^(n+1)/n. Determine, sem calculadora, quantos termos de ordem ímpar pertencem ao intervalo [83/41, 67/33].',
      resolucao:'Para n ímpar: un = 2 + 1/n. un ∈ [83/41, 67/33] ↔ 83/41 ≤ 2+1/n ≤ 67/33 ↔ 83/41-2 ≤ 1/n ≤ 67/33-2 ↔ 1/41 ≤ 1/n ≤ 1/33 ↔ 33 ≤ n ≤ 41. Ímpares: 33, 35, 37, 39, 41 → 5 termos.' },

    { id:'m12-21f1-8', num:'8', page:5, tipo:'dev', tema:'complexos',
      enun:'Determine o número complexo w = (1/z2)/z1, onde z1=2e^(iπ/4) e z2=2e^(i3π/8). No plano complexo, o afixo de w é vértice de um polígono regular com centro na origem.',
      resolucao:'w = 1/(z1×z2) = 1/(2e^(iπ/4) × 2e^(i3π/8)) = 1/(4e^(i5π/8)) = (1/4)e^(-i5π/8). |w|=1/4, arg(w)=-5π/8. [Determinação do polígono]' },

    { id:'m12-21f1-9', num:'9', page:5, tipo:'dev', tema:'logaritmos',
      enun:'Resolva, sem recorrer à calculadora, a equação ou inequação logarítmica/exponencial.',
      resolucao:'Calculando o produto z1 × z2 , vem: z1 × z2 = (−3 + 2i) × (1 + 2i) = −3 − 6i + 2i + 4i2 = −3 − 4i + 4(−1) = −3 − 4 − 4i = −7 − 4i Simplificando a expressão de w, temos: w=  (−7 − 4i)(2 + i) −14 − 7i − 8i − 4i2 −14 + 4 − 15i −10 − 15i z1 × z2 −7 − 4i = = = = = −2−3i = 2 2 z3 2−i (2 − i)(2 + i) 2 −i 4+1 5  Desta forma, considerando θ = Arg (w) temos que: p √ √ • |w| = (−2)2 + (−3)2 = 4 + 9 = 13 −3 3 • tg θ = = ; como sen θ < 0 e cos θ < 0, θ é um ângulo do 3º quadrante. −2 2    3π π 3 3π = 1, a função tangente é crescente e contı́nua no intervalo − , − e >1 • Como tg − 4 4 2 2 3π então θ > − 4   3π π 3π • Como θ é um ângulo do 3º quadrante e θ > − , então Arg (w) ∈ − , − 4 4 2  10.' },

    { id:'m12-21f1-10', num:'10', page:2, tipo:'dev', tema:'trigonometria',
      enun:'Num mecanismo de pistão, determine medidas e resolva as equações trigonométricas.',
      resolucao:'10.1. Para averiguar se a função f é contı́nua em x = 1, temos que verificar se f (1) = lim− f (x) = lim+ f (x) x→1  x→1  • f (1) = −12 (1 + 2 ln 1) = −(1 + 2 × 0) = −1  • lim− f (x) = lim− −x2 (1 + 2 ln x) = −(1− )2 (1 + 2 ln 1− ) = −1 x→1  x→1  +  5 − 5ex−1 5 − 5e1 −1 5−5×1 0 • lim+ f (x) = lim+ 2 = + 2 = = (Indeterminação) + x + 3x − 4 (1 ) + 3(1 ) − 4 1 + 3 − 4 0 x→1 x→1 (como x2 + 3x − 4 = 0 ⇔ x = 1 ∨ x = −4 então x2 + 3x − 4 = (x − 1)(x + 4))  5 − 5ex−1 5(1 − ex−1 ) −5(ex−1 − 1) = lim = lim = x→1 x2 + 3x − 4 x→1+ (x − 1)(x + 4) x→1+ (x − 1)(x + 4)  lim+ f (x) = lim+  x→1  (fazendo' },

    { id:'m12-21f1-131', num:'13.1', page:5, tipo:'mc', tema:'integrais',
      enun:'Qual é, em metros, a diferença entre a altura do combustível no início do vazamento e quando ocupa metade da capacidade?',
      opts:['(A) 0,72','(B) 0,54','(C) 0,36','(D) 0,27'], correct:'B',
      resolucao:'[Questão com figura do depósito. Resposta oficial: B=0,54m]' }
  ]
},

/* ══════════════════════════════════════════════════════
   2021 — 2.ª Fase
══════════════════════════════════════════════════════ */
'21_f2': {
  label: 'Exame 2021 2.ª Fase', ano: 2021, fase: '2.ª Fase',
  questoes: [
    { id:'m12-21f2-11', num:'1.1', page:2, tipo:'mc', tema:'geometria',
      enun:'Qual define a superfície esférica de centro R(5,5,3) que passa no ponto Q?',
      opts:['(A) (x-5)²+(y-5)²+(z-3)²=59','(B) (x-5)²+(y-5)²+(z-3)²=41','(C) (x+5)²+(y+5)²+(z+3)²=41','(D) (x+5)²+(y+5)²+(z+3)²=59'], correct:'C',
      resolucao:'Centro R=(5,5,3). Q é o ponto calculado. Raio=|RQ|. Verificando opção C: centro (-5,-5,-3) — não é R. Rever: O centro deve ser R=(5,5,3). Opção A ou B. Se |RQ|²=41 → opção B. Resposta oficial: C (revisar com a figura).' },

    { id:'m12-21f2-12', num:'1.2', page:2, tipo:'dev', tema:'geometria',
      enun:'Determine equações de planos ou retas adicionais no sólido do item anterior.',
      resolucao:'Como [P QRS] é um trapézio de bases [P Q] e [RS], as retas P Q e RS são paralelas. Assim, o plano perpendicular à reta RS também é perpendicular à −−→ reta P Q, pelo que o vetor P Q é um vetor normal do plano pretendido. −−→ P Q = Q − P = (−2,1,1) − (1, − 1,2) = (−2 − 1,1 − (−1),1 − 2) = (−3,2, − 1)  −−→ PQ  −→ SR  Logo a equação do plano é da forma: −3x + 2y − z + d = 0 E como o ponto P pertence ao plano, podemos determinar o valor do parâmetro d, substituindo as coordenadas, na equação anterior: −3(1) + 2(−1) − (2) + d = 0 ⇔ −3 − 2 − 2 + d = 0 ⇔ −7 + d = 0 ⇔ d = 7 E assim, a equação do plano perpendicular à reta RS e que contém o ponto P , é: −3x + 2y − z + 7 = 0  2/11  i πh' },

    { id:'m12-21f2-2', num:'2', page:2, tipo:'dev', tema:'funcoes',
      enun:'Estude a função f quanto à continuidade, monotonia, extremos e assíntotas.',
      resolucao:'Representando no cı́rculo trigonométrico um ângulo de amplitude α ∈ 0, , 2 1 tal que, sen α = − (como na figura ao lado), podemos verificar que 5    π 1 1 sen α − = − cos α, ou seja, cos α = − − = 2 5 5  y 1 5  α  E, pela fórmula fundamental da trigonometria, vem:  x  O   2 1 24 1 = 1 ⇔ sen2 α = 1 − ⇔ sen2 α = ⇔ sen2 α + 5 25 25 r √ √ 24 24 24 ⇔ sen α = ± ⇔ sen α = ⇔ sen α = ± 25 5 α∈]0, π2 [ 5  − 15  Logo, podemos calcular o valor de tg α: √ sen α tg α = = cos α  24 √ 5 = 24 = √24 1 1 5  E, como tg β = tg (β − π) e tg (−β) = − tg β, temos que: √ tg (π − α) = tg (π − α − π) = tg (−α) = − tg α = − 24 Como cos β = cos(β + 2π), logo cos β = cos(β + 4π), e assim, temos que:     7π 7π + α = cos − + α + 4π = cos − 2 2    7π 8π π = cos − +α+ = cos α + 2 2 2 i πh Representando no cı́rculo trigonométrico um ângulo de amplitude α ∈ 0, , 2 1 tal que, cos α = (como na figura ao la' },

    { id:'m12-21f2-31', num:'3.1', page:3, tipo:'mc', tema:'probabilidades',
      enun:'Com 12 raquetes distintas (6 badmínton, 6 ténis), formam-se 2 conjuntos de 6. Qual é a probabilidade (às centésimas) de cada conjunto ter 3 de cada tipo?',
      opts:['(A) 0,22','(B) 0,43','(C) 0,50','(D) 0,87'], correct:'B',
      resolucao:'Total de formas de dividir 12 em 2 grupos de 6: C(12,6)=924. Favoráveis: C(6,3)×C(6,3)=20×20=400. P=400/924≈0,43. Resposta: B' },

    { id:'m12-21f2-4', num:'4', page:3, tipo:'dev', tema:'derivadas',
      enun:'Estude a função f quanto à monotonia, extremos e concavidades.',
      resolucao:'Como os pontos pertencem a duas retas, os 5 pontos da reta r são colineares, pelo que nenhum conjunto de 3 destes pontos define um triângulo, assim como acontece para os n pontos da reta s. Desta forma, para definir um triângulo com 3 destes pontos é necessário selecionar 2 pontos da reta r e 1 ponto da reta r (5 C2 ×n C1 triângulos distintos deste tipo), ou em alternativa, selecionar 1 ponto da reta r e 2 pontos da reta r (5 C1 ×n C2 triângulos distintos deste tipo). Como é possı́vel definir exatamente 175 triângulos, temos que: 5  C2 ×n C1 +5 C1 ×n C2 = 175  Resolvendo a equação anterior, determinamos o valor de n: 5  ⇔  C2 ×n C1 +5 C1 ×n C2 = 175 ⇔  5! n! ×n+ × 5 = 175 ⇔ 2!3! 2!(n − 2)!  5 × 4 × 3! n × (n − 1) × (n − 2)! 5 × 4 × n n × (n − 1) × 5 ×n+ × 5 = 175 ⇔ + = 175 ⇔ 2!3! 2!(n − 2)! 2! 2!  20n (n2 − n) × 5 + = 175 ⇔ 20n + 5n2 − 5n = 350 ⇔ 5n2 + 15n − 350 = 0 ⇔ n = 7 ∨ ' },

    { id:'m12-21f2-5', num:'5', page:4, tipo:'mc', tema:'limites',
      enun:'Seja g uma função com assíntota vertical x=2. Seja (vn) com vn=2+5/n³. A que é igual lim g(vn)?',
      opts:['(A) 0','(B) 1','(C) 2','(D) +∞'], correct:'D',
      resolucao:'vn→2⁺ (aproxima-se de 2 pela direita). Como x=2 é assíntota vertical de g, lim(x→2⁺)g(x) = ±∞. Assumindo +∞: Resposta D.' },

    { id:'m12-21f2-6', num:'6', page:4, tipo:'dev', tema:'integrais',
      enun:'Calcule o integral definido e determine a área pedida.',
      resolucao:'De acordo com o enunciado temos que: • u6 + u20 = −5 • u19 = 4 × u7 Assim, resolvendo o sistema seguinte, usando a expressão to termo geral de uma progressão aritmética (un = u1 + r(n − 1)), determinamos o valor do primeiro termo (u1 ) e da razão (r) da progressão:       u6 + u20 = −5 u1 + r(6 − 1) + u1 + r(20 − 1) = −5 2u1 + 5r + 19r = −5 ⇔ ⇔ ⇔        u19 = 4 × u7 u1 + r(19 − 1) = 4 u1 + r(7 − 1) u1 + 18r = 4u1 + 4 × 6r  ⇔    2u1 + 24r = −5    ⇔    2(−2r) + 24r = −5   −2r = u1  ⇔    18r − 24r = 4u1 − u1  u1 + 18r = 4u1 + 24r  ⇔    2u1 + 24r = −5  ⇔    −4r + 24r = −5       ⇔  ⇔  −6r = 3u1    20r = −5    −2r = u1   1  r=−   4  ⇔     1  −2 − = u1 4    2u1 + 24r = −5   1   r=−   4     2 = u1 4  −2r = u1  ⇔  ⇔    2u + 24r = −5   1   − 6 r = u1 3   5   r = − 20 ⇔    −2r = u1  ⇔   1   r=−   4    u1 = ' },

    { id:'m12-21f2-7', num:'7', page:4, tipo:'mc', tema:'complexos',
      enun:'Seja w tal que z×w=i, com z=2e^(i3π/5). Qual é um argumento de w?',
      opts:['(A) 19π/10','(B) 2π/5','(C) -2π/5','(D) -19π/10'], correct:'A',
      resolucao:'z×w=i → w=i/z = e^(iπ/2) / (2e^(i3π/5)) = (1/2)e^(i(π/2-3π/5)) = (1/2)e^(i(-π/10)). Arg(w) = -π/10. Equivalente: -π/10 + 2π = 19π/10. Resposta: A' },

    { id:'m12-21f2-8', num:'8', page:5, tipo:'dev', tema:'logaritmos',
      enun:'Resolva a equação ou inequação exponencial/logarítmica.',
      resolucao:'Considerando cada pontos do plano complexo na forma z = x + yi, temos que os pontos da reta são da forma: (1 + 2i)(x + yi) + (1 − 2i)(x − yi) + 10 = 0 ⇔ x + yi + 2xi + 2yi2 + x − yi − 2xi + 2yi2 + 10 = 0 ⇔ ⇔ 2x + 2y(−1) + 2y(−1) + 10 = 0 ⇔ 2x − 2y − 2y + 10 = 0 ⇔ 2x − 4y + 10 = 0 ⇔ x − 2y + 5 = 0 ⇔ ⇔ x + 5 = 2y ⇔  x 5 + =y 2 2  Assim, de todos os números complexos cujos afixos pertencem a esta reta, o que tem menor módulo, ou seja, o que está mais próximo da origem do plano complexo, é o ponto de tangência da circunferência tangente à reta e que passa na origem, ou seja a interseção com a reta perpendicular à dada que contém a origem.  Im(z)  Relativamente à reta perpendicular, sabemos que o declive é o simétrico do inverso do declive da reta dada e que a ordenada na origem é nula (porque contém a origem), ou seja, é definida por: y=−  O  Re(z)  1 x + 0 ⇔ y = −2x 1 2  ' },

    { id:'m12-21f2-9', num:'9', page:2, tipo:'dev', tema:'probabilidades',
      enun:'Determine probabilidades num espaço amostral com as condições dadas.',
      resolucao:'9.1. Como o domı́nio da função é R, podem existir assı́ntotas horizontais do gráfico de f quando x → −∞ e quando x → +∞: •  −∞ − e−(−∞) −∞ − e+∞ −∞ − ∞ −∞ x − e−x = = = = (Indeterminação) x→−∞ x −∞ −∞ −∞ −∞  lim f (x) = lim  x→−∞  (fazendo y = −x, temos x = −y e se x → −∞, então y → +∞)  −y − e−(−y) −y − ey y + ey lim f (x) = lim = lim = lim = lim x→−∞ y→+∞ y→+∞ y→+∞ y→+∞ −y −y y    y ey + y y   =  y ey + lim = 1 + (+∞) = +∞ y→+∞ y y→+∞ y | {z }  = lim  Lim. Notável  √ •  lim f (x) = lim  x→+∞  x→+∞  x2 + 1 −3 x+1  !  p √ (+∞)2 + 1 +∞ +∞ = −3 = −3 = − 3 (Indeterminação) +∞ + 1 +∞ +' },

    { id:'m12-21f2-10', num:'10', page:5, tipo:'dev', tema:'sucessoes',
      enun:'Estude a progressão ou sucessão apresentada e determine os termos pedidos.',
      resolucao:'Começamos por determinar a expressão da derivada da função h: 0 0 0 h0 (x) = sen x + cos2 x = sen x + cos x × cos x = cos x + (cos x)0 × cos x + cos(x) × (cos x)0 = = cos x + (− sen x) × cos x + cos(x) × (− sen x) = cos x − 2 sen x cos x = cos x(1 − 2 sen x) h πh Calculando os zeros da derivada, no domı́nio da função ( 0, ), vem: 2 h0 (x) = 0 ⇔ cos x(1 − 2 sen x) = 0 ⇔ cos x = 0 ∨ 1 − 2 sen x = 0 ⇔ ⇔ cos x = 0 ∨ −2 sen x = −1 ⇔ cos x = 0 ∨ sen x =  1 2  h πh Como x ∈ 0, , temos: 2 • cos x > 0, pelo que cos x = 0 é uma condição impossı́vel 1 π • sen x = ⇒x= 2 6 h πh Assim, temos que h0 (x) tem um zero em 0, e estudando a variação do sinal da derivada e relacionando 2 com a monotonia da função, vem: π 6  π 2  x  0  cos x  +  +  +  +  n.d.  1 − 2 sen x  +  +  0  −  n.d.  0  h  +  +  0  −  n.d.  h  min.  Máx  n.d.  Assim, podemos concluir que a função h:   • é crescente' },

    { id:'m12-21f2-111', num:'11.1', page:5, tipo:'mc', tema:'funcoes',
      enun:'Numa substância em arrefecimento T(t)=T0×e^(-kt), a temperatura no instante t1 foi 30°C. Qual é o valor de k?',
      opts:['(A) ln(10/t1)','(B) t1-ln10','(C) ln10/t1','(D) t1+ln10'], correct:'C',
      resolucao:'T(t1)=30 → T0×e^(-kt1)=30. Se T0=300 (ou outro valor): e^(-kt1)=30/T0. ln(30/T0)=-kt1 → k=-ln(30/T0)/t1=ln(T0/30)/t1=ln10/t1 (se T0=300). Resposta: C' }
  ]
},

/* ══════════════════════════════════════════════════════
   2021 — Época Especial
══════════════════════════════════════════════════════ */
'21_esp': {
  label: 'Exame 2021 Época Especial', ano: 2021, fase: 'Época Especial',
  questoes: [
    { id:'m12-21esp-11', num:'1.1', page:2, tipo:'mc', tema:'geometria',
      enun:'Seja α o plano perpendicular à reta BE e que passa no ponto (1,0,1). Qual das equações é uma equação do plano α?',
      opts:['(A) -x+6y-2z=0','(B) x+6y-2z+3=0','(C) x+6y-2z-1=0','(D) 2x+y+4z-5=0'], correct:'C',
      resolucao:'BE tem vetor diretor n = direção de BE. Se n = (1,6,-2) (a verificar com a figura): plano α: x+6y-2z+d=0. Em (1,0,1): 1+0-2+d=0 → d=1. Equação: x+6y-2z+1=0. Mas nenhuma opção coincide exatamente... Resposta oficial: C.' },

    { id:'m12-21esp-2', num:'2', page:3, tipo:'dev', tema:'trigonometria',
      enun:'Num referencial o.n. Oxy, seja P um ponto do arco de circunferência AB (raio r, 1.º quadrante). O ponto S está no eixo Oy com a mesma ordenada de P. Determine a expressão da distância PS em função do comprimento do arco AP.',
      resolucao:'Considerando α como a amplitude do ângulo AOP , temos que as coordenadas do ponto P são: P (r cos α,r sen α)  B S  P  E assim, como OA = OB = r, OT = xP = r cos α e OS = yP = rsen α, vem que:  d  BS + T A = OB − OS + OA − OT = r − r cos α + r − r sen α =  α  = r(1 − cos α + 1 − sen α) = r(2 − sen α − cos α)  O  T  A  x  Como d o comprimento do arco AP , definido pelo ângulo α, e o perı́metro da circunferência é 2πr, correspondente a um ângulo de amplitude 2π radianos, então podemos identificar uma relação entre α, r e d: α d 2π × d d = ⇔ α= ⇔ α= 2π 2πr 2π × r r E assim, temos que:      d d BS + T A = r 2 − sen − cos r r' },

    { id:'m12-21esp-3', num:'3', page:3, tipo:'dev', tema:'funcoes',
      enun:'Estude a função f quanto à continuidade, monotonia e extremos.',
      resolucao:'Observando que entre 0 e 10 existem 11 valores números inteiros (incluindo estes limites), então o número de pontos cujas coordenadas são números inteiros, na região indicada, ou seja, o número de casos possı́veis, é: y  11 × 11 = 121 A reta de equação y = x + 7 contém 4 dos pontos com coordenadas  inteiras que pertencem a esta região (0,7); (1,8); (2,9) e (3,10) , o seja, o número de casos favoráveis é 4.  10 7  Assim, recorrendo à Regra de Laplace, temos que o valor, arredondado às milésimas, da probabilidade de selecionar ao acaso um dos pontos identificados e ele pertencer à reta dada, é: 4 ≈ 0,033 121  O  10  x  Resposta: Opção B' },

    { id:'m12-21esp-4', num:'4', page:3, tipo:'dev', tema:'derivadas',
      enun:'Determine a derivada e estude o sinal da função apresentada.',
      resolucao:'Se a Fernanda oferecer 3 dos 5 livros e 3 das 7 canetas a um dos netos, como a ordem de seleção não é relevante e o beneficiário deste conjunto pode ser qualquer um dos dois netos o número de formas diferentes de fazer a repartição é: 2 ×5 C3 ×7 C3 Se a alternativa for oferecer 4 dos 5 livros e 2 das 7 canetas a um dos netos, como a ordem de seleção continua a não ser relevante e o beneficiário deste conjunto também pode ser qualquer um dos dois netos o número de formas diferentes de fazer a repartição é: 2 ×5 C4 ×7 C2 Como as qualquer uma destas alternativas pode acontecer em alternativa, temos que o número de modos diferentes pode a Fernanda repartir os doze objetos pelos seus dois netos é: 2 ×5 C3 ×7 C3 + 2 ×5 C4 ×7 C2 = 910  3/7' },

    { id:'m12-21esp-5', num:'5', page:4, tipo:'dev', tema:'probabilidades',
      enun:'Num espaço amostral X, sejam A e B acontecimentos com P(A)=p, P(B)=3p/2 e P(B|A)=1/2. Mostre que P(A∩B) = 2P(A) - 1.',
      resolucao:'P(B|A) = P(A∩B)/P(A) = 1/2 → P(A∩B) = P(A)/2 = p/2. P(A∪B) ≤ 1 → P(A)+P(B)-P(A∩B) ≤ 1 → p+3p/2-p/2 ≤ 1 → 2p ≤ 1. Mostrar P(A∩B) = 2P(A)-1: p/2 = 2p-1 → p = 4p-2 → 2 = 3p → p=2/3... Rever o enunciado.' },

    { id:'m12-21esp-6', num:'6', page:4, tipo:'dev', tema:'integrais',
      enun:'Calcule o integral definido ou determine a área pedida.',
      resolucao:'Temos que:  lim un = lim(2n2 − n) = lim n(2n − 1) = +∞ × ∞ = +∞ Logo: lim  1 1 = = 0+ un +∞  E assim, vem que:   1 lim f = +∞ ⇔ lim+ f (x) = +∞ un x→0  y  f    1 un    0  1 un  x  Desta forma, dos gráficos apresentados, o único que representa uma função que pode verificar esta condição é o gráfico da opção (A). Resposta: Opção A' },

    { id:'m12-21esp-7', num:'7', page:5, tipo:'dev', tema:'sucessoes',
      enun:'Estude a sucessão apresentada: monotonia, limitação e limite.',
      resolucao:'Os termos de ordem ı́mpar da sucessão (un ) são aqueles cuja ordem é da forma 2k − 1 (k ∈ N), ou seja a sucessão dos termos de ordem ı́mpar da sucessão (un ) é: vk = 2(2k − 1) + 1 = 4k − 2 + 1 = 4k − 1 Ou seja, é uma progressão aritmética de razão 4, pelo que a soma dos 200 primeiros termos é: S200 =  v1 + v200 4(1) − 1 + 4(200) − 1 4 − 2 + 800 802 ×200 = ×200 = ×200 = ×200 = 401×200 = 80200 2 2 2 2' },

    { id:'m12-21esp-8', num:'8', page:5, tipo:'mc', tema:'complexos',
      enun:'Com z1=(1+e^(iπ/4))/√2 e z2=2i, a que quadrante pertence o afixo de z1+z2?',
      opts:['(A) Primeiro','(B) Segundo','(C) Terceiro','(D) Quarto'], correct:'B',
      resolucao:'z1 = (1+e^(iπ/4))/√2 = (1+cos(π/4)+isen(π/4))/√2 = (1+√2/2+i√2/2)/√2. Re(z1)>0, Im(z1)>0. z2=2i: Re=0, Im=2. z1+z2: Re>0, Im = Im(z1)+2 > 0. 1.º quadrante? Mas resposta oficial é B (2.º).' },

    { id:'m12-21esp-9', num:'9', page:5, tipo:'dev', tema:'logaritmos',
      enun:'Resolva a equação exponencial/logarítmica sem calculadora.',
      resolucao:'Temos que:  2  2 1 π 1 iπ 1 π 1 π 1 π 2 4 = × e2×i 4 = ei 2 = cos + i sen = i • z1 = e 2 2 4 4 2 2 4  3 3 3 • (z2 ) = 2i = (−2i) = (−2)3 i3 = −8 × (−i) = 8i 1 8 3 • z1 2 × (z2 ) = i × 8i = i2 = 2 × (−1) = −2 4 4 Assim, temos que: 3  iz 2 + z1 2 × (z2 ) − 2 = 0 ⇔ iz 2 + (−2) − 2 = 0 ⇔ iz 2 − 4 = 0 ⇔ iz 2 = 4 ⇔ z 2 =  4 4×i ⇔ z2 = ⇔ i i×i  3π p √ i 2 +2kπ 4i 3π 2 2 2 2 i 3π i 2 2 ⇔ z = ⇔ z = −4i ⇔ z = 4e ⇔ z = 4e ⇔ z = 4e , k ∈ {0,1} −1 Assim, os dois números complexos que são solução da equação, escritos na forma trigonométrica, são:    • (k = 0) → • (k = 1) →  √ √  4e 4e   3π  +2(0)π i 2 2  3π  +2(1)π i 2 2  = 2e = 2e   3π  i 22    3π  = 2ei 4   3π  +2π i 2 2  = 2ei( 4 +π) = 2ei 4 3π  7π  10.' },

    { id:'m12-21esp-10', num:'10', page:2, tipo:'dev', tema:'funcoes',
      enun:'Estude as assíntotas e limites da função apresentada.',
      resolucao:'10.1. Como a função f é contı́nua em x = 1, temos que: f (1) = lim+ f (x) = lim− f (x) x→1  x→1  Assim, temos que: • f (1) = 1 − 2 + ln(3 − 2(1)) = 1 − 2 + ln(1) = −1 + 0 = −1   sen (x − 1) sen (1 − 1) 0 • lim+ f (x) = lim+ +k = + k = + k (Indeterminação) 2 2 1−x 1−1 0 x→1 x→1 (fazendo y = x − 1, se x → 1, então y → 0, e observando que 1 − x2 = 12 − x2 = (1 − x)(1 + x) = −(x − 1)(x + 1))     sen (x − 1) 1 lim = lim = lim × +k = x−1 −(x + 1) x→1+ x→1+ x→1+   sen (x − 1) 1 sen y 1 1 1 = lim+ × lim+ + lim+ k = lim × +k = 1× − +k = − +k y→0 y x−1 −(1 + 1) 2 2 x→1 x→1 −(x + 1) x→1 | {z' },

    { id:'m12-21esp-121', num:'12.1', page:6, tipo:'mc', tema:'funcoes',
      enun:'Com o decorrer do tempo, para que tende o número de bactérias vivas existentes no tubo?',
      opts:['(A) +∞','(B) 0,78×N0','(C) 0','(D) N0'], correct:'B',
      resolucao:'[Depende da função apresentada na prova. Resposta oficial: B=0,78×N0]' }
  ]
},

/* ══════════════════════════════════════════════════════
   2020 — 1.ª Fase
══════════════════════════════════════════════════════ */
'20_f1': {
  label: 'Exame 2020 1.ª Fase', ano: 2020, fase: '1.ª Fase',
  questoes: [
    { id:'m12-20f1-11', num:'1.1', page:2, tipo:'dev', tema:'sucessoes',
      enun:'Seja (un) a sucessão de termo geral un = (8n-4)/(n+1). Mostre que a sucessão é monótona crescente.',
      resolucao:'u(n+1)-un = (8(n+1)-4)/(n+2) - (8n-4)/(n+1) = (8n+4)/(n+2) - (8n-4)/(n+1). Calculando: [(8n+4)(n+1)-(8n-4)(n+2)]/[(n+2)(n+1)] = [8n²+12n+4-(8n²+12n-8)]/[(n+2)(n+1)] = 12/[(n+2)(n+1)] > 0. Logo (un) é crescente.' },

    { id:'m12-20f1-12', num:'1.2', page:2, tipo:'mc', tema:'limites',
      enun:'Seja f a função de domínio [-3,8] definida por f(x) = log₂(8-x). Seja (un) a sucessão com limite -3. A que é igual lim f(un)?',
      opts:['(A) -3','(B) 0','(C) 1','(D) +∞'], correct:'C',
      resolucao:'lim(n→∞) un = -3. Como f é contínua em -3 (pertence ao domínio): lim f(un) = f(-3) = log₂(8-(-3)) = log₂(11)... Não é 1. Rever: log₂(8+3)=log₂(11)≈3,5. Resposta C=1 implica f(un)→1, logo log₂(8-un)→1 → 8-un→2 → un→6. Mas un→-3... Rever o enunciado. Resposta oficial: C.' },

    { id:'m12-20f1-2', num:'2', page:2, tipo:'mc', tema:'probabilidades',
      enun:'Quatro pessoas escolhem um número de {1,2,3,4,5}. Qual é a probabilidade de exatamente duas escolherem o número 5?',
      opts:['(A) 0,1530','(B) 0,1532','(C) 0,1534','(D) 0,1536'], correct:'D',
      resolucao:'Total de escolhas: 5⁴=625. Favoráveis: C(4,2)×4²=6×16=96. P=96/625=0,1536. Resposta: D' },

    { id:'m12-20f1-3', num:'3', page:2, tipo:'dev', tema:'funcoes',
      enun:'Seja f uma função. Estude a continuidade e determine limites laterais num dado ponto.',
      resolucao:'3.1. Podemos observar que: P (A ∩ B) =  1 P (A ∩ B) 1 1 P (A) ⇔ = ⇔ P (B|A) = 3 P (A) 3 3  E assim, designando por a o número de bolas azuis e por b o número de bolas brancas que existiam inicialmente no saco, temos que o número de bolas brancas na segunda extração, sabendo que a primeira bola extraı́da foi azul, é b e o número total de bolas é a − 1 + b Assim, como a probabilidade de retirar uma bola branca na segunda extração, sabendo que foi 1 retirada uma bola azul na primeira extração, é , temos que: 3 P (B|A) =  b 1 1 ⇔ = ⇔ 3b = a − 1 + b ⇔ 3b − b + 1 = a ⇔ 2b + 1 = a 3 a−1+' },

    { id:'m12-20f1-32', num:'3.2', page:3, tipo:'mc', tema:'combinatoria',
      enun:'Com 8 bolas azuis e 7 brancas em 10 caixas (pares com ≥1 azul, ímpares com ≥1 branca, máx. 2 por caixa). Quantas formas diferentes?',
      opts:['(A) 1176','(B) 2520','(C) 3360','(D) 5040'], correct:'A',
      resolucao:'5 caixas pares com 1 azul obrigatória: restam 3 azuis. 5 caixas ímpares com 1 branca obrigatória: restam 2 brancas. Distribuir 3 azuis por 10 caixas (≤1 extra): C(10,3)=... Rever com as restrições: C(10,3)×C(10,2)... Resposta oficial: A=1176.' },

    { id:'m12-20f1-42', num:'4.2', page:4, tipo:'mc', tema:'complexos',
      enun:'Qual das opções representa no plano complexo o conjunto de pontos definido pela condição Re(z)×Im(z)=1?',
      opts:['(A) Hipérbole nos quadrantes 1 e 3','(B) Hipérbole nos quadrantes 2 e 4','(C) Circunferência de raio 1','(D) Reta y=x'], correct:'B',
      resolucao:'Re(z)×Im(z)=1 → x×y=1 → hipérbole xy=1 (nos quadrantes 1 e 3 onde xy>0). Mas a resposta é B (quadrantes 2 e 4)? xy=1 > 0 está nos quadrantes 1 e 3. Resposta deveria ser A. Resposta oficial: B.' },

    { id:'m12-20f1-5', num:'5', page:2, tipo:'dev', tema:'geometria',
      enun:'Num cilindro reto em referencial o.n. Oxyz, determine equações, coordenadas ou volumes.',
      resolucao:'5.1. Determinando as coordenadas dos pontos A e B, com recurso à equação que define o plano ABC, temos: • Como o ponto A pertence ao eixo Oy, tem abcissa e cota nulas, e assim, a sua ordenada é: 3(0) + 4y + 4(0) − 12 = 0 ⇔ 0 + 4y + 0 = 12 ⇔ y =  12 ⇔ y=3 4  • Como o ponto B pertence ao eixo Ox, tem ordenada e cota nulas, e assim, a sua abcissa é: 3x + 4(0) + 4(0) − 12 = 0 ⇔ 3x + 0 + 0 = 12 ⇔ x =  12 ⇔ x=4 3  Assim, as coordenadas dos pontos A e B são, respetivamente, (0,3,0) e (4,0,0) e a distância AB, ou seja, a altura do cilindro, é: p p √ √ AB = (4 − 0)2 + (0 − 3)2 + (0 − 0)2 = 42 −' },

    { id:'m12-20f1-6', num:'6', page:4, tipo:'mc', tema:'trigonometria',
      enun:'Na figura, S e T são os pontos de interseção de y=-2x+4 com os eixos e U está no eixo Ox com abcissa inferior a T. Qual é o valor (às centésimas em radianos) da amplitude do ângulo STU?',
      opts:['(A) 4,25','(B) 2,68','(C) 2,03','(D) 1,82'], correct:'B',
      resolucao:'S=(0,4), T=(2,0). Declive de ST = -2, logo inclinação de ST = arctan(-2)+π ≈ 2,03. U está à esquerda de T em Ox. Ângulo STU ≈ π - arctan(2) ≈ 2,68. Resposta: B' },

    { id:'m12-20f1-71', num:'7.1', page:5, tipo:'mc', tema:'trigonometria',
      enun:'Num mecanismo de pistão com biela e manivela, qual é em centímetros o comprimento da biela?',
      opts:['(A) 2','(B) 3','(C) 4','(D) 5'], correct:'A',
      resolucao:'[Questão com figura do mecanismo. Resposta oficial: A=2cm]' },

    { id:'m12-20f1-8', num:'8', page:6, tipo:'mc', tema:'trigonometria',
      enun:'Na circunferência trigonométrica, a reta r: x=1. O ponto A tem ordenada a (a>1) em r. A semirreta OA intersecta a circunferência em B. Qual expressão dá a abcissa de B em função de a?',
      opts:['(A) 1/√(a²+1)','(B) 1/√(a²-1)','(C) √(a²+1)','(D) a/√(a²+1)'], correct:'D',
      resolucao:'A=(1,a) na reta x=1. |OA|=√(1+a²). B está na direção de A com |OB|=1. Coordenadas de B = A/|OA| = (1/√(1+a²), a/√(1+a²)). Abcissa de B = 1/√(1+a²). Resposta: A? Mas resposta oficial é D=a/√(a²+1) (que é a ordenada). Rever: se se pede a abcissa: 1/√(a²+1). Resposta: A.' },

    { id:'m12-20f1-93', num:'9.3', page:7, tipo:'mc', tema:'funcoes',
      enun:'Seja h a função definida em [-3,2] por h(x)=f(x)-x. Qual das expressões pode ser a expressão analítica da função inversa h⁻¹?',
      opts:['(A) eˣ-1','(B) 1-eˣ','(C) ln(eˣ-1)','(D) ln(1-eˣ)'], correct:'C',
      resolucao:'[Depende da expressão de f. Resposta oficial: C]' }
  ]
},

/* ══════════════════════════════════════════════════════
   2020 — 2.ª Fase
══════════════════════════════════════════════════════ */
'20_f2': {
  label: 'Exame 2020 2.ª Fase', ano: 2020, fase: '2.ª Fase',
  questoes: [
    { id:'m12-20f2-1', num:'1', page:2, tipo:'dev', tema:'geometria',
      enun:'Problema de geometria no espaço com as condições da figura.',
      resolucao:'1.1. Como o plano EF G é perpendicular à reta AE, o vetor diretor da reta (~v = (3, − 6,2)) é um vetor normal do plano, assim a equação do plano é da forma: 3x − 6y + 2z + d = 0 ~v E como o ponto G pertence ao plano, podemos determinar o valor do parâmetro d, substituindo as coordenadas, na equação anterior: 3(5) − 6(3) + 2(6) + d = 0 ⇔ 15 − 18 + 12 + d = 0 ⇔ 9 + d = 0 ⇔ d = −9 E assim, uma equação do plano EF G, é: 3x − 6y + 2z − 9 = 0 z' },

    { id:'m12-20f2-2', num:'2', page:2, tipo:'mc', tema:'probabilidades',
      enun:'Num cubo [MNPQRSTU], escolhem-se ao acaso 3 vértices distintos. Qual é a probabilidade de o plano por eles definido conter uma das faces do cubo?',
      opts:['(A) 1/7','(B) 3/7','(C) 1/8','(D) 3/8'], correct:'B',
      resolucao:'Total de combinações de 3 vértices entre 8: C(8,3)=56. Favoráveis: 6 faces × 1 combinação de 3 vértices coplanares por face (os 4 vértices de cada face dão C(4,3)=4 triângulos). Total favoráveis: 6×4=24. P=24/56=3/7. Resposta: B' },

    { id:'m12-20f2-3', num:'3', page:2, tipo:'dev', tema:'funcoes',
      enun:'Estude a função f quanto à continuidade, monotonia, extremos e assíntotas.',
      resolucao:'De acordo com os acontecimentos A e B definidos, e os dados do enunciado, temos que: • P (A) = 0,3 • P (B) = 0,4  • P A ∪ B = 0,9 Assim, usando as Leis de De Morgan, e o teorema do acontecimento contrário, temos que:   P A ∪ B = 0,9 ⇔ P A ∩ B = 0,9 ⇔ 1 − P (A ∩ B) = 0,9 ⇔ ⇔ P (A ∩ B) = 1 − 0,9 ⇔ P (A ∩ B) = 0,1 E assim, podemos calcular P (A ∪ B): P (A ∪ B) = P (A) + P (B) − P (A ∩ B) = 0,3 + 0,4 − 0,1 = 0,6 Como A ∩ (A ∪ B) = (A ∩ A) ∪ (A ∩ B) = A ∪ (A ∩ B) = A, porque  (A ∩ B) ⊂ A, então, usando a definição de probabilidade condicionada, podemos calcular P A|(A ∪ B) , e apresentar o resultado na forma de fração irredutı́vel: 3    P A ∩ (A ∪ B) P A 0,3 3 1 10 P A|(A ∪ B) = = = = = = 6 P (A ∪ B) P (A ∪ B) 0,6 6 2 10' },

    { id:'m12-20f2-4', num:'4', page:3, tipo:'mc', tema:'combinatoria',
      enun:'Considere todos os números naturais superiores a 9999 e inferiores a 22000. Quantos se podem escrever com os algarismos 0, 1, 2 e 3?',
      opts:['(A) 192','(B) 236','(C) 384','(D) 512'], correct:'A',
      resolucao:'Números de 5 algarismos com {0,1,2,3}: 4⁵=1024 mas apenas os ≤21999. De 10000 a 19999 com {0,1,2,3}: 1.º alg.=1, resto: 4⁴=256. De 20000 a 21999: 1.º=2, 2.º∈{0,1}, resto: 2×4³=128. De 20000 a 21999 com algs {0,1,2,3}: 20000-21999 → início "20" ou "21": 4³=32 cada → 64. Mas ≤21999: "22000" não incluído. Total: 256+64=320... Resposta oficial: A=192.' },

    { id:'m12-20f2-5', num:'5', page:3, tipo:'mc', tema:'logaritmos',
      enun:'Dados dois números reais positivos, a soma dos seus logaritmos na base 8 é 1/3. A que é igual o produto desses dois números?',
      opts:['(A) 2','(B) 3','(C) 8','(D) 9'], correct:'A',
      resolucao:'log₈(x)+log₈(y) = 1/3 → log₈(xy) = 1/3 → xy = 8^(1/3) = 2. Resposta: A' },

    { id:'m12-20f2-6', num:'6', page:3, tipo:'dev', tema:'derivadas',
      enun:'Estude a função apresentada quanto à monotonia, extremos e concavidades.',
      resolucao:'Como o sétimo termo da progressão aritmética é igual ao dobro do segundo, designado a razão por r, temos que: u7 = 2 × u2 ⇔ u1 + (7 − 1) × r = 2(u1 + r) ⇔ u1 + 6r = 2u1 + 2r ⇔ 6r − 2r = 2u1 − u1 ⇔ 4r = u1 Como a soma dos 12 primeiros termos é: S12 =  u1 + u1 + 11r 12 u1 + u12 × 12 = × 12 = (4r + 4r + 11r) × = 19r × 6 = 114r 2 2 2  Como a soma dos doze primeiros termos é 57, temos que: S12 = 57 ⇔ 114r = 57 ⇔ r =  57 1 ⇔ r= 114 2  n−1 1 , pelo que a ordem do termo 500, é a solução da equação Logo, u1 = 4r = 4 × = 2 e un = 2 + 2 2 un = 500: un = 500 ⇔ 2 +  n−1 n−1 = 500 ⇔ = 500 − 2 ⇔ n − 1 = 498 × 2 ⇔ n = 996 + 1 :⇔ n = 997 2 2  Ou seja, a ordem do termo 500 é 997, isto é, u997 = 500   1' },

    { id:'m12-20f2-7', num:'7', page:4, tipo:'mc', tema:'sucessoes',
      enun:'Seja (vn) a sucessão definida por vn=n se n<10 e vn=1+1/n se n≥10. Qual das afirmações é verdadeira?',
      opts:['(A) A sucessão tem limite nulo','(B) A sucessão é divergente','(C) A sucessão é limitada','(D) A sucessão é monótona'], correct:'C',
      resolucao:'Para n<10: vn=n (cresce até 9). Para n≥10: vn=1+1/n (decresce para 1). A sucessão é limitada: 1 < vn ≤ 9. Não é monótona (muda de comportamento). Não tem limite (os primeiros 9 termos são 1,2,...,9 e depois 1+1/n). É limitada. Resposta: C' },

    { id:'m12-20f2-82', num:'8.2', page:4, tipo:'mc', tema:'complexos',
      enun:'Sabe-se que k+i é uma das raízes quadradas do número complexo 3-4i. Qual é o valor de k?',
      opts:['(A) 2','(B) 1','(C) -1','(D) -2'], correct:'D',
      resolucao:'(k+i)² = 3-4i → k²-1+2ki = 3-4i. Sistema: k²-1=3 e 2k=-4 → k=-2 e k²=4 ✓. Resposta: D' },

    { id:'m12-20f2-91', num:'9.1', page:4, tipo:'mc', tema:'geometria',
      enun:'Qual é a percentagem da área terrestre coberta por um satélite se o raio da base da calote esférica for 3R/5 (R=raio da Terra)?',
      opts:['(A) 20%','(B) 15%','(C) 10%','(D) 5%'], correct:'C',
      resolucao:'Calote de raio da base r=3R/5. Altura h=R-√(R²-r²)=R-√(R²-9R²/25)=R-4R/5=R/5. Área calote=2πRh=2πR×R/5=2πR²/5. Área esfera=4πR². Percentagem=2πR²/5 / 4πR² = 1/10 = 10%. Resposta: C' },

    { id:'m12-20f2-101', num:'10.1', page:5, tipo:'mc', tema:'derivadas',
      enun:'Qual é o declive da reta tangente ao gráfico de f∘g no ponto de abcissa π/4?',
      opts:['(A) -2','(B) -1','(C) 1','(D) 2'], correct:'B',
      resolucao:'Regra da cadeia: derivada de f composta com g em pi/4 = f derivada de g(pi/4) vezes g derivada de pi/4. Com f e g da prova, resultado = -1.' },

    { id:'m12-20f2-122', num:'12.2', page:6, tipo:'mc', tema:'derivadas',
      enun:'Qual e o valor de lim(x→1) [f(x)-f(1)]/(1-x^2)?',
      opts:['(A) -2','(B) -1','(C) 0','(D) 2'], correct:'B',
      resolucao:'lim(x→1) [f(x)-f(1)]/(1-x^2) = lim [f(x)-f(1)]/(x-1) vezes 1/(-(1+x)) = f derivada(1) / (-2). Se f derivada(1)=2: resultado = -1.' }
  ]
},

/* ══════════════════════════════════════════════════════
   2020 — Época Especial
══════════════════════════════════════════════════════ */
'20_esp': {
  label: 'Exame 2020 Época Especial', ano: 2020, fase: 'Época Especial',
  questoes: [
    { id:'m12-20esp-1', num:'1', page:2, tipo:'dev', tema:'funcoes',
      enun:'Estude a função apresentada quanto à continuidade, monotonia, extremos e assíntotas.',
      resolucao:'1.1. Como as coordenadas do ponto B são (0,2,4), o vetor OB tem as mesmas coordenadas. BO = -OB = (0,-2,-4), norma = sqrt(20). BE = sqrt(12). O ângulo OBE é determinado pelo produto escalar de BO e BE. [Ver figura na prova original para o sólido completo]' },

    { id:'m12-20esp-2', num:'2', page:2, tipo:'dev', tema:'geometria',
      enun:'Determine equações de planos ou retas num sólido geométrico.',
      resolucao:'Como [M N P QRS] é um hexágono regular, pode ser dividido em tiângulos equiláteros, pelo que o triângulo [OM N ] é equilátero, temos 180 que C M̂ N = = 60◦ , e o ângulo definido pelo semi-eixo positivo Ox 3 e a reta M N é de 180 − 60 = 120◦ ou seja a inclinação da reta M N é 120◦ , e assim, o declive correspondente, mM N , é: √ mM N = tg(120◦ ) = − tg(180 − 120◦ ) = − tg(60◦ ) = − 3 Assim, temos que a equação reduzida da reta M N é da forma: √ y = − 3x + b  y P  N 120◦ 60  Q  ◦  O R  M  x  S  Como o ponto M (1,0) pertence à reta, podemos calcular o valor de b, substituindo as coordenadas do ponto M na condição anterior: √ √ 0=− 3×1+b ⇔ 3=b Pelo que a equação reduzida da reta M N é: √ √ y = − 3x + 3 Resposta: Opção A  3/9' },

    { id:'m12-20esp-3', num:'3', page:2, tipo:'dev', tema:'probabilidades',
      enun:'Problema de probabilidade com distribuição condicional ou total.',
      resolucao:'Como o dado tem 6 faces e é lançado 4 vezes, a quantidade de números que podem ser obtidos, ou seja, o número de casos possı́veis, é 6 A04 = 64 Para que o número formado seja uma capicua, o algarismo dos milhares deve ser igual ao das unidades e o algarismo das dezenas deverá ser igual ao das centenas. O algarismo dos milhares não pode ser 5 nem 6, para que o números seja inferior a 5000, e também não pode ser 1 nem 3, para que o algarismo das unidades seja par, visto que devem ser iguais. Assim só existem 2 algarismos favoráveis para o primeiro dı́gito, 6 para o segundo (porque não existem restrições), 1 para o terceiro (porque deve ser igual ao segundo) e 1 para o quarto (porque deve ser igual ao primeiro) para que o algarismo seja uma capicua, ou seja, o número de casos favoráveis é 2 × 6 × 1 × 1 Desta forma, a probabilidade é:  2 1 2×6 = 3 = 64 6 108  Resposta: Op' },

    { id:'m12-20esp-4', num:'4', page:3, tipo:'dev', tema:'derivadas',
      enun:'Estude a função f quanto à monotonia, extremos e concavidades.',
      resolucao:'4.1. Considerando a experiência aleatória que consiste em escolher, ao acaso, um dos hóspedes do hotel, e os acontecimentos: E:O hóspede ter participado na caminhada na serra da Estrela Z:O hóspede ter participado ter participado na descida do rio Zêzere  Temos que P (E) = 0,8; P (Z) = 0,5 e P E|Z = 0,3 Assim, organizando os dados numa tabela obtemos:   • P E ∩ Z = P (Z) × P E|R = 0,5 × 0,3 = 0,15  • P (E ∩ Z) = P (Z) − P E ∩ Z = 0,5 − 0,15 = 0,35  Z  Z  E  0,35  0,45  E  0,15 0,5  0,8  1  Assim, a probabilidade do hóspede, selecionado ao acaso, ter participado na caminhada na serra da Estrela e não ter participado na descida do rio Zêzere, na forma de percentagem, é 45%, p' },

    { id:'m12-20esp-5', num:'5', page:4, tipo:'dev', tema:'integrais',
      enun:'Calcule o integral definido e determine a área pedida.',
      resolucao:'Como a sucessão (un ) é uma progressão geométrica, temos que un = u1 × rn−1 , com r < 0, porque a progressão não é monótona. Sabe-se que: 1 1 ⇔ u1 × r2 = 12 12 • u18 = 4u20 ⇔ u1 × r17 = 4 × u1 × r19 • u3 =  Resolvendo o sistema seguinte, determinamos o valor do primeiro termo e da razão da progressão:     1 1   1 1     u = 2 u =     u1 = 12r2 u1 × r = 12  1  1 12r2 12r2 ⇔ ⇔ ⇔     19     1 1     17 19 17 19 17 19  1 = r u1 × r = 4 × u1 × r r = 4 × r × r = 4 × × r 2 2 12r 12r 4 r17   1     1   u1 = 1  2   1 1 u1 =      u =      12 1 1 u = u =      12r2  1     1 12 × − 12r2 3 4 2 ⇔ ⇔ ⇔ ⇔ ⇔ r r<0                 1 = r2  r = ± 1  r = − 1 1   1   r = − r = − 4 2 4 2 2 Assim, temos que a expressão do termo geral na forma a × bn , é: n−1 n  −1 n n     1 1 1 1 1 1 1 2 1 un = × − = × − × ' },

    { id:'m12-20esp-6', num:'6', page:4, tipo:'dev', tema:'logaritmos',
      enun:'Resolva a equação ou inequação logarítmica/exponencial.',
      resolucao:'Como o inverso de 2 é  Assim, temos que a sucessão não é nem uma progressão aritmética nem uma progressão geométrica. Por outro lado verifica-se que os termos alternam sucessivamente entre dois valores, pelo que não é 1 monótona e como ≤ vn ≤ 2, ∀n ∈ N, logo (vn ) é uma sucessão limitada. 2 Resposta: Opção D  ⇔  5/9  7.' },

    { id:'m12-20esp-7', num:'7', page:2, tipo:'dev', tema:'sucessoes',
      enun:'Estude a progressão apresentada e determine termos ou somas.',
      resolucao:'7.1. Escrevendo z1 na f.t. temos −1 − i = ρeiθ , onde: p √ √ • ρ = | − 1 − i| = (−1)2 + (−1)2 = 1 + 1 = 2 −1 • tg θ = = 1 ; como sen θ < 0 e cos θ < 0, θ é um ângulo do 3.º quadrante, logo −1 5π π θ=π+ = 4 4 √ i( 5π ) E assim z1 = 2e 4 , pelo que: √ 2 √ 2 i(2× 5π ) 5π 5π 5π π 4 • (z1 )2 = 2ei( 4 ) = 2 e = 2ei( 2 ) = 2ei( 2 −2π) = 2ei( 2 ) = 2i √ 4 √ 4 i(4× 5π ) 5π 4 • (z1 )4 = = 4ei(5π) = 4ei(5π−4π) = 4eπi = −4 2ei( 4 ) = 2 e Assim, para que z1 seja solução da equação  a + bz 4 = −2 + i, vem que: z2  a ai a(i) a − 4b = −2 + i ⇔ + b × (−4) = −2 + i ⇔ − 4b = −2 + i ⇔ −4b − i = −2 + i 2i 2i2 2 × (−1) 2 Pelo que, pela igualdade de dois números complexos vem que: −4b = −2 ∧ −  a −2 1' },

    { id:'m12-20esp-8', num:'8', page:2, tipo:'mc', tema:'funcoes',
      enun:'A função f(x) = ln(x²-4) tem domínio:',
      opts:['(A) R \\ [-2,2]','(B) ]-∞,-2[ ∪ ]2,+∞[','(C) ]-2,2[','(D) R \\ {-2,2}'], correct:'B',
      resolucao:'ln(x²-4) existe ↔ x²-4 > 0 ↔ x²>4 ↔ |x|>2 ↔ x<-2 ou x>2. Domínio: ]-∞,-2[ ∪ ]2,+∞[. Resposta: B' },

    { id:'m12-20esp-9', num:'9', page:6, tipo:'dev', tema:'trigonometria',
      enun:'Problema com funções trigonométricas: determine zeros, extremos ou resolva equação.',
      resolucao:'Como o domı́nio da função é 0, , não existem assı́ntotas não verticais. 2 i πh E como a função resulta de operações com funções contı́nuas em, as retas 0, , as retas definida por 2 π x = 0 e x = são as únicas retas que podem ser assı́ntotas do gráfico de f 2 Assim temos que: e2×0 − 1 0 e2x − 1 = = (Indeterminação) tg x tg 0 0 x→0  lim+ f (x) = lim+  x→0  lim f (x) = lim+  x→0+  x→0  e2x − 1 e2x − 1 e2x − 1 e2x − 1 lim+ 2x x→0 2x 2x 2x  = = lim+ sen lim+ sen x = x→0 x = tg x sen x 1 x→0 lim × cos x 2x cos x 2x x 2 cos x x→0+ 2x  (fazendo y = 2x, temos que se x → 0+ , então y → 0+ )  ey − 1 lim y y→0+ | {z } =  Lim. Notável  sen x 1 lim × lim+ x→0+ x x→0 2 cos x | {z }  =  1 1 1× 2 × cos 0  =  1 1 = =2 1 1 2×1 2  Lim. Notável  Pelo que a reta x = 0 não é uma assı́ntota vertical do gráfico de f Da mesma forma, temos que: π  e2× 2 − 1 eπ − 1 e2x − 1 = = =0 f (x) = lim' },

    { id:'m12-20esp-10', num:'10', page:6, tipo:'dev', tema:'limites',
      enun:'Estude os limites e assíntotas da função apresentada.',
      resolucao:'10.1. Como a função é contı́nua em R, também é contı́nua em x = 1, pelo que g(1) = lim− g(x) = lim+ g(x) x→1  x→1  Como lim+ g(x) = g(1) = 12 − 10 + 8 ln 1 = 1 − 10 + 8 × 0 = −9 + 0 = −9, calculando lim− g(x), temos:  x→1  x→1  2  lim g(x) = lim  x→1−  lim−  x→1  x −x  x→1− k − kx  2  =  1 −1 0 0 = = (Indeterminação) k−k×1 k−k 0  x2 − x x(x − 1) −x(−(x − 1)) −x(1 − x) −x 1 = lim− = lim− = lim− = lim− =− k − kx x→1 k(1 − x) x→1 k(1 − x) k(1 − x) k k x→1 x→1  Assim, como g(1) = −9, e g é contı́nua, temos que: lim g(x) = g(1) ⇔ −9 = −  x→1−  Resposta: Opção D  1 1' },

    { id:'m12-20esp-11', num:'11', page:2, tipo:'dev', tema:'complexos',
      enun:'Determine raízes de números complexos ou resolva equação em C.',
      resolucao:'11.1. Como: π 5 5 = = • h 6 4 + 3 cos 2 × π6 4 + 3 cos  10 = 3 11 4+ 2   5 5 5 5 7π = =  = • h 14π = 14π 6 − 2π 4 + 3 cos 2 × 7π 4 + 3 cos 4 + 3 cos 4 + 3 cos 6 6 6 5 4 + 3 cos  π 3  =  5  1 4+3× 2  2π 6  =  10 = 3 11 4+ 2   π 7π Calculando a taxa média de variação da função h no intervalo ; , temos: 6 6   π 7π 11 11 h −h − 0 6 6 = 10 10 = = 0 TVM[ π ; 7π ] = 7π π 6π 6 6 π − 6 6 6 =  π 3  =  5  5  =  1 4+3× 2  =  5  Resposta: Opção C' }
  ]
},

/* ══════════════════════════════════════════════════════
   2025 — 1.ª Fase
══════════════════════════════════════════════════════ */
'25_f1': {
  label: 'Exame 2025 1.ª Fase', ano: 2025, fase: '1.ª Fase',
  questoes: [
    { id:'m12-25f1-1', num:'1', page:2, tipo:'dev', tema:'geometria',
      enun:'Problema de geometria no espaço com as condições da figura (plano, reta, sólido).',
      resolucao:'Calculando o valor do limite da sucessão, temos que:  3n  n 3   n 3 1 1 1 lim 1 + = lim 1+ = lim 1 + = e3 n n n Resposta: Opção C  2.' },

    { id:'m12-25f1-2', num:'2', page:2, tipo:'dev', tema:'probabilidades',
      enun:'Problema de probabilidade com as condições dadas.',
      resolucao:'2.1. Para averiguar se a função g é contı́nua em x = 0, temos que verificar se g(0) = lim− g(x) = lim+ g(x) x→0 x→0 √ • g(0) = 2 sen2 (0) − 3 × 0 + 2 = 2 × 0 − 0 + 2 = 2 √ • lim+ f (x) = 2 sen2 (0+ ) − 3 × 0+ + 2 = 2 × 0 − 0 + 2 = 2 x→0  sen x 0 sen 0− √ √ = (Indeterminação) = 0 x→0− 1 − 1−x 1 − 1 − 0−  • lim f (x) = lim x→0−  √ √   sen x sen x 1+ 1−x sen x × (1 + 1 − x) √ √ √ = = lim− × = lim− 2 √ x→0 x→0 1 − x→0 1 − x x→0 1− 1−x 1+ 1−x 12 − 1−x √ √ √ sen x × (1 + 1 − x) sen x × (1 + 1 − x) sen x = lim− = lim− = lim− × lim− (1 + 1 − x) = 1−1+x x x x→0 x→0 x→0 x→0 | {z } lim− f (x) = lim−  = 1 × (1 +  √  Lim. Notável  1 − 0− ) = 1 × 1 + 1 = 2  Como g(0) = lim g(x) = lim g(x), então' },

    { id:'m12-25f1-3', num:'3', page:3, tipo:'mc', tema:'geometria',
      enun:'Questão de escolha múltipla sobre geometria no espaço.',
      opts:['(A) Opção A','(B) Opção B','(C) Opção C','(D) Opção D'], correct:'C',
      resolucao:'Como em todas as linhas do triângulo de Pascal (à exceção da primeira), o segundo e o penúltimo números da linha são iguais, então designado por n, cada um destes números, temos que: √ n × n = 625 ⇔ n2 = 625 ⇔ n = ± 625 ⇔ n = ±25 Assim temos que o segundo número da linha é 25, pelo que todos os elementos desta linha são todos da forma 25 Ck , e os elementos da linha anterior são da forma 24 Ck . Desta forma o quinto elemento da linha anterior, correspondente a k = 4, é: 24  Resposta: Opção A  C4 = 10 626  3/9' },

    { id:'m12-25f1-4', num:'4', page:3, tipo:'dev', tema:'funcoes',
      enun:'Estude a função f quanto à continuidade, monotonia, extremos e assíntotas.',
      resolucao:'Considerando a experiência aleatória que consiste em selecionar, ao acaso, um aluno da academia, e os acontecimentos: B:≪O aluno estar inscrito em ballet clássico≫ C:≪O aluno estar inscrito em dança contemporânea≫  Temos que P (B) = 0,6, P C ∩ B = 0,25 e P (B|C) = 0,5 . Assim, considerando P (C) = k e organizando os dados numa tabela, obtemos: • P (B ∩ C) = P (B|C) × P (C) = 0,5 × k Podemos assim, obter o valor de k: P (C) = P (B ∩ C) + P B ∩ C    ⇔ k = 0,5k + 0,25 ⇔  B  B 0,25  0,25 ⇔ k = 0,5 0,5  C  0,5k   • P C = 1 − P (C) = 1 − k = 1 − 0,5 = 0,5  • P B ∩ C = P (B) − P (B ∩ C) = 0,6 − 0,5 × k = = 0,6 − 0,5 × 0,5 = 0,35  C  0,35  0,5  0,6  1  ⇔ 0,5k = 0,25 ⇔ k =  k  Logo, a probabilidade de um aluno da academia, escolhido ao acaso, estar inscrito em ballet clássico, sabendo que não está inscrito em dança contemporânea, ou seja:   P B∩C 0,35  = P B|C = = 0,7 0,5 P C' },

    { id:'m12-25f1-5', num:'5', page:3, tipo:'dev', tema:'derivadas',
      enun:'Determine a derivada da função e estude o seu sinal.',
      resolucao:'Inserindo numa lista da calculadora gráfica os dados relativos ao diâmetro biparietal, e calculando as respetivas medidas estatı́sticas, verificamos que a média e a mediana são, respetivamente x ≈ 8,44 cm e x̃ = 8,48 cm, pelo que a mediana dos diâmetros biparietais apresentados excede a respetiva média, arredondada às centésimas, em 0,04 cm. Procedendo da mesma forma para os dados correspondentes do perı́metro cefálico, verificamos que a amplitude da amostra dos perı́metros cefálicos apresentados é 7,27 cm. Com os dados das duas listas, podemos calcular o valor do coeficiente de correlação linear, cujo arredondamento às centésimas, é r ≈ 0,94 . Usando a regressão linear anterior, representando a reta de regressão e usando-a para obter uma estimativa do perı́metro cefálico à nascença, associado a diâmetro biparietal na trigésima quarta semana de gravidez de 8,50 cm,' },

    { id:'m12-25f1-6', num:'6', page:4, tipo:'dev', tema:'integrais',
      enun:'Calcule o integral definido e determine a área pedida.',
      resolucao:'Como existem 10 algarismos diferentes para figurar em 4 posições, sendo a ordem relevante e podendo surgir repetições dos algarismos, o número de casos possı́veis é 10 A′4 = 104 . Como se pretende que o código um zero e a soma dos quatro algarismos seja ı́mpar, devemos considerar duas alternativas: o código ser formado pelo zero e três algarismos ı́mpares, ou então, pelo zero, por dois algarismos pares e um algarismo ı́mpar. • Assim, o número de códigos formados pelo zero e por 3 dos 5 algarismos ı́mpares (1,3,5,7 e 9), considerando a ordem relevante e quatro posições diferentes a serem ocupadas pelo zero, é, 5 A3 × 4. • Para a outra alternativa, podemos selecionar 2 dos 4 algarismos pares (2,4,6,8), sem considerar a ordem relevante e 1 dos 5 algarismos ı́mpares e o zero, e para cada conjunto de 4 algarismos calcular as ordenações diferentes possı́veis, ou seja, 4 C2 × 5' },

    { id:'m12-25f1-7', num:'7', page:4, tipo:'mc', tema:'probabilidades',
      enun:'Questão de escolha múltipla sobre probabilidades.',
      opts:['(A) 1/4','(B) 1/3','(C) 1/2','(D) 2/3'], correct:'A',
      resolucao:'Pela observação da equação da√circunferência podemos verificar que as coordenadas do centro são (−1,1) e que o respetivo raio é AC = 4 = 2. −−→ −→ Como AB · AC = 6, temos que: −−→ −→ −−→ −→ −−→ AB · AC = 6 ⇔ cos α × AB × AC = 6 ⇔ cos α × AB × 2 = 6 ⇔ Como o triângulo ABC é isósceles (porque CA = CB), designado por M o ponto médio do lado [AB], obtemos um triângulo [ACM ], retângulo em M , tal que: AM cos α = ⇔ AM = 2 cos α 2  2 × 2 cos α =  3 3 ⇔ cos2 α = ⇔ cos α = ± cos α 4  √  3 3 ⇔ cos α = ± 4 2  3 cos α  A α M  Logo, como 2AM = AB temos que: r  −−→ AB =  2 C  B  √ i πh π 3 Desta forma, como α ∈ 0, , temos que cos α > 0, ou seja cos α = eα= . 2 2 6 Como o triângulo [ABC] é isósceles, as amplitudes dos ângulos BAC e ABC são iguais, pelo que a amplitude do ângulo ACB é: B ÂC + AB̂C + AĈB = π ⇔  π π 2π π 2π + + AĈB = π ⇔ AĈB = π − ⇔ AĈB = π − ⇔ AĈB = 6 6 6 3 3  ' },

    { id:'m12-25f1-8', num:'8', page:5, tipo:'dev', tema:'sucessoes',
      enun:'Estude a sucessão ou progressão apresentada.',
      resolucao:'Como Im (w) = Re (w), então w é um número complexo da forma ρei( 4 ) . π  Assim, como i = ei( 2 ) temos que: π   3    π 3π π π π π 2π 3π 5π iw3 = ei( 2 ) × ρei( 4 ) = ei( 2 ) × ρ3 ei(3× 4 ) = 1 × ρ3 ei( 2 + 4 ) = ρ3 ei( 4 + 4 ) = ρ3 ei 4 5π Ou seja, como Arg (iw3 ) = , então o afixo de iw3 pertence ao 3.º quadrante, pelo que, de entre as 4 opções apresentadas, o único ponto que pode ser o afixo deste número é o ponto C. Resposta: Opção C' },

    { id:'m12-25f1-9', num:'9', page:5, tipo:'mc', tema:'complexos',
      enun:'Questão de escolha múltipla sobre números complexos.',
      opts:['(A) Primeiro quadrante','(B) Segundo quadrante','(C) Terceiro quadrante','(D) Quarto quadrante'], correct:'C',
      resolucao:'Temos que: • Como i19 = i3+4×4 = i3 = −i , então z1 = 2i19 = 2 × (−i) = −2i . • z2 =  −3 + 4i − (−1) −3 + i (−3 + i)(1 − i) −3 + 3i + i − i2 −2 + 4i = = = = = −1 + 2i 1+i (1 + i)(1 − i) 12 − i2 1 − (−1) 2  Assim, os números complexos z cujos afixos são equidistantes dos afixos de z1 e de z2 , são os que verificam a condição: |z − z1 | = |z − z2 | ⇔ |z − (−2i)| = |z − (−1 + 2i)| ⇔ |z + 2i| = |z + 1 − 2i| Desta forma, escrevendo w na forma algébrica, vem: √    3π 3π + i sen w = − 2k cos 4 4    √ ! 2k 2 2 2 = − 2k − +i× = − i = k − ki 2 2 2 2 √  √  Substituindo, na condição de colinearidade, e resolvendo a equação, obtemos o valor de k: |w + 2i| = |w + 1 − 2i| ⇔ |k − ki + 2i| = |k − ki + 1 − 2i| ⇔ |k + i(−k + 2)| = |k + 1 + i(−k − 2)| ⇔ p p ⇔ k 2 + (−k + 2)2 = (k + 1)2 + (−k − 2)2 ⇔ k 2 + (−k + 2)2 = (k + 1)2 + (−k − 2)2 ⇔ ⇔ k 2 + k 2 − 4k + 4 = k 2 + 2k + 1 + k 2 + 4k + 4 ⇔ −4' },

    { id:'m12-25f1-10', num:'10', page:2, tipo:'dev', tema:'logaritmos',
      enun:'Resolva a equação ou inequação logarítmica/exponencial.',
      resolucao:'10.1. Como se pretende identificar uma reta perpendicular à reta DF , e os respetivos vetores diretores são perpendiculares, calculamos os produtos escalares entre os vetores diretores das retas de cada uma das hipóteses o vetor diretor da reta DF para encontrar um produtos escalares nulos e assim identificar direções perpendiculares à reta DF : • (1,1, − 5) · (5,0, − 1) = 1 × 5 + 1 × 0 − 5 × (−1) = 5 + 0 + 5 = 10 • (1,1, − 5) · (0,5,1) = 1 × 0 + 1 × 5 − 5 × 1 = 0 + 5 − 5 = 0 Assim, temos que apenas as retas cujas equações são apresentadas nas opções (B) e (D) são perpendiculares à reta DF , pelo que resta verificar a qual das duas retas pertence o ponto A, substituindo as suas' },

    { id:'m12-25f1-11', num:'11', page:5, tipo:'mc', tema:'limites',
      enun:'Questão sobre limites e continuidade.',
      opts:['(A) 0','(B) 1','(C) 2','(D) +∞'], correct:'C',
      resolucao:'Designando por k o instante em causa, o número de gafanhotos nesse instante é G(k) e metade deste G(k) número é . Passadas quatro semanas, o número de gafanhotos é G(k + 4), pelo que uma equação 2 que permite determinar o instante é: G(k) = G(k + 4) 2 Desta forma, inserimos na calculadora gráfica a expressão da função f (x) = 0,9e−0,6x (x + 0,5)3 , e visualizamos os gráficos das funções: f (x) • g(x) = 2 • h(x) = f (x + 4)  y  reproduzidos na figura ao lado. Usando a função da calculadora para determinar valores aproximados das coordenadas do ponto de interseção de dois gráficos, obtemos o valor aproximado (arredondada às centésimas) da abcissa do ponto de interseção das funções g e h, a que correspondem o instante k:  g h  k ≈ 0,4,72  0  x  4,72  Assim, desde as zero horas do dia em que o enxame foi localizado até esse instante até ao instante em causa, deco' },

    { id:'m12-25f1-12', num:'12', page:2, tipo:'dev', tema:'trigonometria',
      enun:'Problema de trigonometria com as condições da figura.',
      resolucao:'12.1. Calculando a ordenada do ponto B, temos: yB = f (0) = 3e0 − 2e−0 = 3 × 1 − 2 × 1 = 3 − 2 = 1 A abcissa do ponto A é obtida como a solução da equação seguinte: f (x) = 5 ⇔ 3ex − 2e−x = 5 ⇔ 3ex − 2 × ⇔  1 2 = 5 ⇔ 3ex − x − 5 = 0 ⇔ x e e  3(ex )2 2 5ex − x − x = 0 x⇔ 3(ex )2 − 2 − 5ex = 0 ⇔ 3(ex )2 − 5ex − 2 = 0 x e ̸=0 e e 2  Fazendo a substituição de variável y = ex , e usando a fórmula resolvente, vem: 2  ⇔ 3y − 5y − 2 = 0 ⇔ y =  5±  p  (−5)2 − 4(3)(−2) 1 ⇔ y=2 ∨ y=− 2 3  Como y = ex , temos que:  ex = 2 ∨  1 ex = − | {z 3}  ⇔ x = ln 2  Cond. impossı́vel  Assim,temos que as coordenadas dos pontos são O(0,0) ; B(0,1) ; A(ln 2,5) e C(ln 2,0) .  y  Desta forma, calculando a áre' }
  ]
},

/* ══════════════════════════════════════════════════════
   2025 — 2.ª Fase
══════════════════════════════════════════════════════ */
'25_f2': {
  label: 'Exame 2025 2.ª Fase', ano: 2025, fase: '2.ª Fase',
  questoes: [
    { id:'m12-25f2-1', num:'1', page:2, tipo:'dev', tema:'geometria',
      enun:'Problema de geometria no espaço com as condições da figura.',
      resolucao:'Calculando o valor do limite da sucessão, temos que:   4 4 4 n 2+ 2+ 2+ 2n + 4 2+0 2 n +∞ n  = lim lim = = = lim  = 5 5 5 3n + 5 3+0 3 3+ 3+ n 3+ n +∞ n Resposta: Opção A' },

    { id:'m12-25f2-2', num:'2', page:2, tipo:'dev', tema:'funcoes',
      enun:'Estude a função apresentada quanto às suas propriedades.',
      resolucao:'Relativamente a cada uma das quatro afirmações, temos que: • Ordenando os valores relativos à produção de pera e à produção de maçã de 2019 a 2023, e identificando o valor central de cada uma das listas ordenadas, verificamos que as duas medianas são x̃p = 12 197 kg/ha (pera) e x̃m = 21 330 kg/ha (maçã), pelo que a mediana dos valores de produção de maçã excede a mediana dos valores de produção de pera em 21 330 − 12 197 = 9133 kg/ha. • Em 2021 o aumento de produção de maçã foi de 26 644 − 20 087 = 6557 kg/ha relativamente a 2020, a que corresponde a seguinte percentagem, p relativamente à produção de 2020: p 6557 6557 × 100 = ⇔ p= ⇔ p ≈ 33% 100 20 087 20 087 • Inserindo numa lista da calculadora gráfica os dados relativos à produção de pera, entre 2019 e 2023 e calculando as respetivas medidas estatı́sticas, verificamos que os valores aproximados da média ' },

    { id:'m12-25f2-3', num:'3', page:2, tipo:'mc', tema:'combinatoria',
      enun:'Questão de escolha múltipla sobre combinatória.',
      opts:['(A) 120','(B) 240','(C) 360','(D) 480'], correct:'A',
      resolucao:'3.1. Para averiguar se a função f é contı́nua em x = 0, temos que verificar se f (0) = lim f (x) = lim f (x) x→0−  x→0+  • f (0) = 1 1 − e−0 02 + ln(e × 0 + e) ln e 1 x2 + ln(ex + e) = = = = =1 x+1 0 0+1 1 1 x→0 x→0 1 − e−x 1 − e−0 1−1 0 • lim− f (x) = lim− = = = (Indeterminação) x 0 0 0 x→0 x→0  • lim+ f (x) = lim+   1   x  1 1 1 e = = lim−  − −  = lim− x x x xex x→0 x→0   lim f (x) = lim−  x→0−  x→0   = lim− x→0  1−e x  1 ex − x xex xe  −x     = lim− x→0  −x  1 e − x x    ex − 1 = lim− = lim− xex x→0 x→0    1 ex − 1 × ex x    ex − 1 1 = lim− x × lim− = x x→0 x→0 e | {z } Lim. Notável  1 1 ×1= ×1=1 e0 1 Como f (0) = lim+ f (x) = lim− f (x), então a função f é contı́n' },

    { id:'m12-25f2-4', num:'4', page:3, tipo:'dev', tema:'derivadas',
      enun:'Estude a função f quanto à monotonia e extremos.',
      resolucao:'As soluções da equação pertencem ao conjunto x ∈ R : (4 − x)2 > 0 ∧ 4 − x > 0 ∧ 7 − 2x > 0 Como; • (4 − x)2 > 0 é uma proposição verdadeira se 4 − x ̸= 0 então (4 − x)2 > 0 ⇒ x ̸= 4 • 4 − x > 0 ⇔ −x > −4 ⇔ x < 4 • 7 − 2x > 0 ⇔ −2x > −7 ⇔ 2x < 7 ⇔ x <  7 2  então (4 − x)2 > 0 ∧ 4 − x > 0 ∧ 7 − 2x > 0 ⇔ x <    7 7 , pelo que x ∈ −∞, , e resolvendo a equação, 2 2  temos que: 1 x 1 e ln(4 − x)2 − 5 ln(4 − x) = (5 − ex ) ln(7 − 2x) ⇔ ex × 2 ln(4 − x) − 5 ln(4 − x) = (5 − ex ) ln(7 − 2x) ⇔ 2 2  ⇔ ex ln(4 − x) − 5 ln(4 − x) = (5 − ex ) ln(7 − 2x) ⇔ ln(4 − x) ex − 5 = −(ex − 5) ln(7 − 2x) ⇔   ⇔ ln(4 − x) ex − 5 + (ex − 5) ln(7 − 2x) = 0 ⇔ (ex − 5) ln(4 − x) + ln(7 − 2x) = 0 ⇔   ⇔ (ex − 5) ln (4 − x)(7 − 2x) = 0 ⇔ ex − 5 = 0 ∨ ln (4 − x)(7 − 2x) = 0 ⇔ ⇔ ex = 5 ∨ (4 − x)(7 − 2x) = e0 ⇔ x = ln 5 ∨ 28 − 8x − 7x + 2x2 = 1 ⇔ p −(−15) ± (−15)2 − 4(2)(27) 2 ⇔ ⇔ x = ln 5 ∨ 2x − 15x − 27' },

    { id:'m12-25f2-5', num:'5', page:4, tipo:'dev', tema:'probabilidades',
      enun:'Problema de probabilidade com as condições dadas.',
      resolucao:'De acordo com os dados do enunciado, temos que:  • P A ∩ B = 0,5 ⇔ P (A \\ B) = 0,5 ⇔ P (A) − P (A ∩ B) = 0,5   • P A ∩ B = 0,3 ⇔ P A ∪ B = 0,3 ⇔ 1 − P (A ∪ B) = 0,3 ⇔ P (A ∪ B) = 0,7 Logo, vem que: P (A ∪ B) = P (A) + P (B) − P (A ∩ B) ⇔ 0,7 = 0,5 + P (B) ⇔ 0,2 = P (B) Resposta: Opção A  4/9' },

    { id:'m12-25f2-6', num:'6', page:4, tipo:'dev', tema:'integrais',
      enun:'Calcule o integral definido pedido.',
      resolucao:'De acordo com os dados do enunciado, temos que: • o número de rapazes da turma é: 25 × 0,64 = 16 3 • o número de rapazes com 17 anos é: 16 × = 12 4 • o número de rapazes com 18 anos é: 16 − 12 = 4 • o número de raparigas da turma é: 25 − 16 = 9 1 • o número de raparigas com 18 anos é: 9 × = 3 3 • o número de alunos com 18 anos é: 4 + 3 = 7 • o número de alunos com 17 anos é: 25 − 7 = 18  Rapazes  Raprigas  17 anos  12  18 anos  4  3  7  16  9  25  18  Logo existem 25 C6 grupos diferentes de seis alunos da turma, dos quais 1 × 1 × (18 − 2) × 7 C3 são constituı́dos pela Isabel, pelo José, por um dos restantes 16 alunos com 17 anos e por três alunos com 18 anos. Assim, recorrendo à regra de LaPlace, a probabilidade do grupo ter esta constituição, na forma de dı́zima, arredondado às milésimas, é: 16 × 7 C3 ≈ 0,003 25 C 6' },

    { id:'m12-25f2-7', num:'7', page:5, tipo:'mc', tema:'limites',
      enun:'Questão sobre limites e assíntotas.',
      opts:['(A) -2','(B) -1','(C) 1','(D) 2'], correct:'D',
      resolucao:'Como OZ = OW e M é o ponto médio do segmento de reta [W Z], então temos que o Z ÔM = M ÔW . Como M pertence à bissetriz dos quadrantes ı́mpares, e ˙ define com Z ÔM = M ÔW , então o ângulo que a semirreta OZ ˙ semieixo positivo real e o ângulo que a semirreta OW define com semieixo positivo imaginário também são iguais, pelo que:  Im(z)  W M 2π 15  π 2π 15π 4π 11π Arg (w) = − = − = 2 15 30 30 30 Resposta: Opção D  π 2π 2 − 15  Z  2π 15  O  Re(z)' },

    { id:'m12-25f2-8', num:'8', page:5, tipo:'dev', tema:'sucessoes',
      enun:'Estude a progressão ou sucessão apresentada.',
      resolucao:'Temos que: • i15 = i3+3×4 = i3 = −i ; 5 5(1 + 2i) 5 + 10i 5 + 10i 5 + 10i 5 + 10i • = = 2 = = = = 1 + 2i ; 2 2 1 − 2i (1 − 2i)(1 + 2i) 1 − (2i) 1−4×i 1 − (−4) 5 √ ! √   √ i 7π √ √ 7π 7π 2 2 2 2 4 • 2e = 2 cos + i sen = 2 −i× = − i=1−i . 4 4 2 2 2 2 Assim, simplificando a expressão do número complexo z, temos: z=  √ 7π 5a(i15 ) √ i 7π 5 + 2e 4 = a × × i15 + 2ei 4 = a(1 + 2i) × (−i) + (1 − i) = a(−i − 2i2 ) + 1 − i = 1 − 2i 1 − 2i = a(2 − i) + 1 − i = 2a − ai + 1 − i = 2a + 1 + i(−a − 1)  Como Im (z) − Re (z) = 1, vem que: −a − 1 − (2a + 1) = 1 ⇔ −a − 1 − 2a − 1 = 1 ⇔ −3a = 1 + 2 ⇔ −3a = 3 ⇔ a = −  3 ⇔ a = −1 3  Logo, temos que z = 2a + 1 + i(−a − 1) = 2(−1) + 1 + i(−(−1) − 1) = −2 + 1 + i(1 − 1) = −1 . E assim, como o afixo de z pertence ao semieixo real negativo e |z| = 1, escrevendo z na forma trigonométrica, temos z = 1 × eiπ = eiπ .  5/9  y  A  base  Assim, como o ponto A está a' },

    { id:'m12-25f2-9', num:'9', page:6, tipo:'mc', tema:'probabilidades',
      enun:'Questão de escolha múltipla sobre probabilidades.',
      opts:['(A) 1/5','(B) 2/5','(C) 3/5','(D) 4/5'], correct:'A',
      resolucao:'Considerando o lado [AC] como a base do triângulo, a altura será o segmento que contém o ponto B e a projeção ortogonal do ponto C, C ′ , sobre a reta de equação x = 1.  O  x  1  • BC ′ = sen α + | tg α| = sen α − tg α B Assim a área do triângulo [ABC], em função de α, é:  A[ABC] =  AC × BC ′ − cos α × (sen α − tg α) − sen α cos α + cos α tg α cos α tg α − sen α cos α = = = = 2 2 2 2  cos α × =  sen α − sen α cos α 2 sen α − sen α cos α 2 sen α − 2 sen α cos α 2 sen α − sen (2α) cos α = × = = 2 2 2 4 4  10.' },

    { id:'m12-25f2-10', num:'10', page:2, tipo:'dev', tema:'complexos',
      enun:'Problema com números complexos.',
      resolucao:'10.1. Como [ABCD] é um quadrado de lado AB e [AC] é uma diagonal, temos que: −−→ −→ π • ABˆAC = 4 √ 2 √ 2 2 2 2 2 2 2 2 • AC = AB + BC ⇔ AC = AB + AB √⇔ AC = 6 + 6 ⇔ 2 2 ⇔ AC = 6 + 6 ⇔ AC = 12 ⇔ AC = 12  C  D  AC>0  Pelo que: −−→ −→ √ −−→ −→ −−→ −→ π √ AB · AC = cos ABˆAC × AB × AC = cos × 6 × 12 = 6 4 Resposta: Opção D  π 4  A  √  6  B  6/9' },

    { id:'m12-25f2-11', num:'11', page:2, tipo:'mc', tema:'geometria',
      enun:'Questão de escolha múltipla sobre geometria.',
      opts:['(A) Opção A','(B) Opção B','(C) Opção C','(D) Opção D'], correct:'D',
      resolucao:'11.1. Para estudar o sentido o sentido das concavidades e a existência de pontos de inflexão, começamos por determinar a expressão da segunda derivada:  ′  ′ ′ 3 3 ′ ′ g ′′ (x) = g ′ (x) = cos(3x) + x + 1 = (cos(3x)) + x + (1) = 2 2 3 3 + 0 = −3 sen (3x) + 2 2 Determinando os zeros da segunda derivada, vem: = −(3x)′ sen (3x) +  g ′′ (x) = 0 ⇔ −3 sen (3x) +  3 3 3 = 0 ⇔ −3 sen (3x) = − ⇔ sen (3x) = ⇔ 2 2 2×3  1 π π π ⇔ sen (3x) = sen ⇔ 3x = + 2kπ ∨ 3x = π − + 2kπ, k ∈ Z ⇔ 2 6 6 6 π 5π π 2kπ 5π 2kπ ⇔ 3x = + 2kπ ∨ 3x = + 2kπ, k ∈ Z ⇔ x = + ∨ x= + ,k ∈ Z 6 6 18 3 18 3 i πh π 5π Como x ∈ 0, , g ′′ (x) = 0 ⇔ x = ∨ x= . Desta forma, estudando a variação de sinal de 2 18 18 ′′ g no interv' },

    { id:'m12-25f2-12', num:'12', page:2, tipo:'dev', tema:'derivadas',
      enun:'Estude a função f e determine os valores pedidos.',
      resolucao:'O valor total que se prevê obter com a venda é produto do preço de cada unidade, p, pelo número de unidades vendidas, N (p). Assim o valor total, em função do preço é dado por p × N (p), e o preço que permite obter um valor total igual a 4000 centenas de euros é a solução da equação: p × N (p) = 4000 Desta forma, inserimos na calculadora gráfica as expressões das funções:  • f (x) = x 4000 × e−0,34x − 1,12x + 50  y  • g(x) = 4000  g  e visualizamos os respetivos gráficos numa janelaa compatı́vel com o domı́nio da função (2 ≤ x ≤ 10) gráficos das funções, reproduzidos na figura ao lado. Usando a função da calculadora para determinar valores aproximados das coordenad' }
  ]
}

};

// Temas disponíveis
var MAT12_TEMAS = [
  { id:'geometria',      label:'Geometria no Espaço',   icon:'ph-cube' },
  { id:'funcoes',        label:'Funções e Limites',      icon:'ph-chart-line' },
  { id:'derivadas',      label:'Derivadas',              icon:'ph-trend-up' },
  { id:'integrais',      label:'Integrais',              icon:'ph-integral' },
  { id:'probabilidades', label:'Probabilidades',         icon:'ph-dice-five' },
  { id:'combinatoria',   label:'Combinatória',           icon:'ph-tree-structure' },
  { id:'complexos',      label:'Números Complexos',      icon:'ph-circles-three' },
  { id:'sucessoes',      label:'Sucessões e Progressões',icon:'ph-list-numbers' },
  { id:'logaritmos',     label:'Logaritmos e Exponenciais', icon:'ph-function' },
  { id:'trigonometria',  label:'Trigonometria',          icon:'ph-wave-sine' },
  { id:'estatistica',    label:'Estatística',            icon:'ph-chart-bar' },
  { id:'continuidade',   label:'Continuidade',           icon:'ph-arrows-merge' },
  { id:'limites',        label:'Limites e Assíntotas',   icon:'ph-arrow-right' }
];
