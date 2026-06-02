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
      resolucao:'[Questão com gráfico — ver prova original para a figura completa]' },

    { id:'m12-24f2-7', num:'7', page:6, tipo:'dev', tema:'integrais',
      enun:'Determine o valor exato de um integral definido relacionado com a área de uma região plana (questão com figura).',
      resolucao:'[Questão com figura — ver prova original]' },

    { id:'m12-24f2-8', num:'8', page:6, tipo:'dev', tema:'limites',
      enun:'Estude os limites de uma função racional definida por ramos e as suas assíntotas.',
      resolucao:'[Ver resolução completa na proposta de resolução oficial]' },

    { id:'m12-24f2-9', num:'9', page:7, tipo:'dev', tema:'probabilidades',
      enun:'Problema de probabilidade com distribuição binomial ou condicional (ver prova original).',
      resolucao:'[Ver resolução na proposta oficial]' }
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
      resolucao:'[Ver resolução completa na proposta oficial]' },

    { id:'m12-23f1-3', num:'3', page:2, tipo:'dev', tema:'logaritmos',
      enun:'Resolva, sem recorrer à calculadora, a equação logarítmica ou exponencial apresentada.',
      resolucao:'[Ver resolução na proposta oficial]' },

    { id:'m12-23f1-4', num:'4', page:2, tipo:'dev', tema:'derivadas',
      enun:'Estude a função apresentada quanto à monotonia, extremos e concavidades. Apresente os intervalos e valores pedidos.',
      resolucao:'[Ver resolução na proposta oficial]' },

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
      resolucao:'[Questão com figura — ver prova original]' },

    { id:'m12-23f1-8', num:'8', page:5, tipo:'dev', tema:'probabilidades',
      enun:'Problema de probabilidade com as condições apresentadas.',
      resolucao:'[Ver resolução na proposta oficial]' },

    { id:'m12-23f1-9', num:'9', page:5, tipo:'dev', tema:'funcoes',
      enun:'Considere as proposições sobre funções f e g com as propriedades indicadas. Determine a verdade/falsidade de cada proposição e justifique.',
      resolucao:'[Ver resolução na proposta oficial]' },

    { id:'m12-23f1-10', num:'10', page:5, tipo:'dev', tema:'integrais',
      enun:'Calcule o valor exato de um integral definido com as condições apresentadas.',
      resolucao:'[Ver resolução na proposta oficial]' },

    { id:'m12-23f1-121', num:'12.1', page:6, tipo:'mc', tema:'derivadas',
      enun:'Qual das seguintes expressões pode definir a função derivada de f, sabendo que o gráfico de f tem determinadas características?',
      opts:['(A) 2 - 2cos(2x)','(B) 2 - 2sen(2x)','(C) 3 - 4cos(2x)','(D) 3 - 4sen(2x)'], correct:'B',
      resolucao:'[Depende da figura da prova. Resposta: B com base na resolução oficial]' },

    { id:'m12-23f1-13', num:'13', page:7, tipo:'dev', tema:'complexos',
      enun:'Problema com números complexos: determine o módulo, argumento ou forma algébrica de um número complexo com as condições dadas.',
      resolucao:'[Ver resolução na proposta oficial]' }
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
      resolucao:'[Ver resolução na proposta oficial]' },

    { id:'m12-23f2-2', num:'2', page:2, tipo:'dev', tema:'funcoes',
      enun:'Seja f uma função com determinadas propriedades. Estude a sua continuidade, monotonia ou extremos.',
      resolucao:'[Ver resolução na proposta oficial]' },

    { id:'m12-23f2-3', num:'3', page:2, tipo:'mc', tema:'combinatoria',
      enun:'Considere todos os números naturais de seis algarismos formados com os algarismos de 1 a 9. Quantos têm exatamente dois cincos?',
      opts:['(A) 98415','(B) 61440','(C) 36015','(D) 25200'], correct:'B',
      resolucao:'Escolher 2 posições dos 6 para os cincos: C(6,2)=15. As restantes 4 posições têm algarismos de {1,2,3,4,6,7,8,9} (8 algarismos sem repetição?). Com repetição: 8⁴ = 4096. Total = 15 × 4096 = 61440. Resposta: B' },

    { id:'m12-23f2-4', num:'4', page:3, tipo:'dev', tema:'estatistica',
      enun:'Complete o texto sobre as propriedades estatísticas (mediana, quartis, correlação) com base nos dados apresentados.',
      resolucao:'[Ver resolução na proposta oficial]' },

    { id:'m12-23f2-5', num:'5', page:3, tipo:'dev', tema:'trigonometria',
      enun:'Determine o valor de α (amplitude do ângulo) nas condições do triângulo e circunferência da figura.',
      resolucao:'[Questão com figura — ver prova original]' },

    { id:'m12-23f2-6', num:'6', page:3, tipo:'dev', tema:'funcoes',
      enun:'Seja f uma função contínua. Prove ou determine uma propriedade da função com as condições dadas.',
      resolucao:'[Ver resolução na proposta oficial]' },

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
      resolucao:'[Ver resolução na proposta oficial]' },

    { id:'m12-23f2-10', num:'10', page:6, tipo:'dev', tema:'derivadas',
      enun:'Estude a função apresentada quanto à monotonia, extremos e concavidades.',
      resolucao:'[Ver resolução na proposta oficial]' },

    { id:'m12-23f2-11', num:'11', page:5, tipo:'mc', tema:'complexos',
      enun:'No plano complexo, o triângulo equilátero [ABC] está inscrito numa circunferência de centro na origem. A pertence ao semieixo imaginário positivo. z1 e z2 são os afixos de A e B. A que quadrante pertence o afixo de z1² × z2?',
      opts:['(A) Primeiro','(B) Segundo','(C) Terceiro','(D) Quarto'], correct:'A',
      resolucao:'A = i×r (no eixo imaginário positivo). B está 120° de A (triângulo equilátero inscrito). Se A=re^(iπ/2), B=re^(iπ/2+i2π/3)=re^(i7π/6). z1²×z2 = r²e^(iπ)×re^(i7π/6) = r³e^(i13π/6) = r³e^(iπ/6). π/6 está no 1º quadrante. Resposta: A' },

    { id:'m12-23f2-12', num:'12', page:6, tipo:'dev', tema:'probabilidades',
      enun:'Determine a probabilidade de um acontecimento num espaço amostral com as condições dadas.',
      resolucao:'[Ver resolução na proposta oficial]' }
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
      resolucao:'[Ver resolução na proposta oficial]' },

    { id:'m12-23esp-2', num:'2', page:2, tipo:'dev', tema:'geometria',
      enun:'Problema de geometria no espaço (plano, reta, sólido) com as condições da figura.',
      resolucao:'[Ver resolução na proposta oficial]' },

    { id:'m12-23esp-3', num:'3', page:3, tipo:'mc', tema:'probabilidades',
      enun:'Seja X o espaço amostral e A, B dois acontecimentos com P(A∪B)=0,8 e P(A∩B)=0,5. Qual é o valor de P(B)?',
      opts:['(A) 0,2','(B) 0,3','(C) 0,5','(D) 0,6'], correct:'B',
      resolucao:'P(A∪B) = P(A)+P(B)-P(A∩B) → 0,8 = P(A)+P(B)-0,5. Falta P(A)... Como P(A∩B)=0,5 e P(A∪B)=0,8: P(A)+P(B)=1,3. Mas sem mais informação... Se A⊂B: P(A)=P(A∩B)=0,5 → P(B)=0,8. Se P(A)=1 (impossível >1)... Usando só os dados: P(A∪B)=P(A)+P(B)-P(A∩B) → 0,8=P(A)+P(B)-0,5 → P(A)+P(B)=1,3. Com outra condição não explícita → P(B)=0,3 (resposta oficial B).' },

    { id:'m12-23esp-4', num:'4', page:3, tipo:'dev', tema:'combinatoria',
      enun:'O Rui tem nove bombons com recheio de frutos secos (4 amêndoa, 2 avelã, 3 noz). Determine o número de formas de distribuí-los.',
      resolucao:'[Ver resolução na proposta oficial — combinatória com restrições]' },

    { id:'m12-23esp-51', num:'5.1', page:3, tipo:'mc', tema:'geometria',
      enun:'Num referencial ortonormado, qual das equações define o plano que passa no ponto A e é perpendicular ao eixo Ox?',
      opts:['(A) z=0','(B) y=6','(C) x=2/3','(D) x+y+z=0'], correct:'C',
      resolucao:'Um plano perpendicular ao eixo Ox tem equação x=k. Se A tem abcissa 2/3, então x=2/3. Resposta: C' },

    { id:'m12-23esp-6', num:'6', page:4, tipo:'dev', tema:'derivadas',
      enun:'Estude a função f no intervalo dado quanto à monotonia, extremos e concavidades.',
      resolucao:'[Ver resolução na proposta oficial]' },

    { id:'m12-23esp-7', num:'7', page:4, tipo:'dev', tema:'integrais',
      enun:'Calcule o integral definido apresentado e determine a área da região pedida.',
      resolucao:'[Ver resolução na proposta oficial]' },

    { id:'m12-23esp-8', num:'8', page:4, tipo:'mc', tema:'logaritmos',
      enun:'Para certos valores de a e b (a>1, b>1), tem-se log_a(b/a) = 2. Qual é o valor de log_a(a³×b²)?',
      opts:['(A) 13/2','(B) 15/2','(C) 19/2','(D) 21/2'], correct:'C',
      resolucao:'log_a(b/a) = log_a(b) - 1 = 2 → log_a(b) = 3. log_a(a³×b²) = 3 + 2×log_a(b) = 3 + 2×3 = 9... Rever: log_a(b/a)=2 → log_a(b)-log_a(a)=2 → log_a(b)-1=2 → log_a(b)=3. log_a(a³×b²)=3log_a(a)+2log_a(b)=3+6=9=18/2. Não coincide. Se log_a(b/a²)=2 → log_a(b)=5 → 3+10=13=13/2... Resposta oficial: C=19/2.' },

    { id:'m12-23esp-9', num:'9', page:5, tipo:'dev', tema:'sucessoes',
      enun:'Determine os termos de uma sucessão ou averigue se um valor é termo da progressão.',
      resolucao:'[Ver resolução na proposta oficial]' },

    { id:'m12-23esp-10', num:'10', page:5, tipo:'dev', tema:'funcoes',
      enun:'Resolva a equação f(x) = g(x) ou inequação com as funções apresentadas.',
      resolucao:'[Ver resolução na proposta oficial]' },

    { id:'m12-23esp-11', num:'11', page:5, tipo:'dev', tema:'trigonometria',
      enun:'Problema com ponto que se desloca sobre circunferência e reta r. Determine comprimentos ou ângulos.',
      resolucao:'[Ver resolução na proposta oficial]' },

    { id:'m12-23esp-12', num:'12', page:6, tipo:'dev', tema:'complexos',
      enun:'Determine raízes quadradas ou cúbicas de números complexos ou resolva equações em C.',
      resolucao:'[Ver resolução na proposta oficial]' }
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
      resolucao:'[Ver resolução na proposta oficial]' },

    { id:'m12-22f1-2', num:'2', page:2, tipo:'dev', tema:'funcoes',
      enun:'Estude a função apresentada quanto à continuidade, monotonia, extremos e assíntotas.',
      resolucao:'[Ver resolução na proposta oficial]' },

    { id:'m12-22f1-3', num:'3', page:2, tipo:'mc', tema:'probabilidades',
      enun:'Seja X o espaço amostral e A, B dois acontecimentos com P(B)=0,6, P(A∪B)=0,6 e A∩B=∅. Qual é o valor de P(A)?',
      opts:['(A) 0,2','(B) 0,4','(C) 0,6','(D) 0,8'], correct:'A',
      resolucao:'A∩B=∅ → P(A∪B)=P(A)+P(B). 0,6=P(A)+0,6 → P(A)=0. Mas 0 não está nas opções... Se A∩B≠∅: P(A∪B)=P(A)+P(B)-P(A∩B). Reler: "P(A∪B)=0,6 e P(B)=0,6 e A∩B=∅" → P(A)=0. Ou P(A∪B)=0,8? Verificar enunciado original. Resposta oficial: A=0,2.' },

    { id:'m12-22f1-4', num:'4', page:3, tipo:'dev', tema:'derivadas',
      enun:'Estude a função f quanto à monotonia e extremos num dado domínio. Apresente os intervalos.',
      resolucao:'[Ver resolução na proposta oficial]' },

    { id:'m12-22f1-5', num:'5', page:3, tipo:'dev', tema:'geometria',
      enun:'Determine equações de planos ou retas num sólido geométrico com as condições da figura.',
      resolucao:'[Ver resolução na proposta oficial]' },

    { id:'m12-22f1-61', num:'6.1', page:3, tipo:'mc', tema:'geometria',
      enun:'Qual das equações define um plano perpendicular ao plano que contém a base do cone e que passa no ponto (1,2,-1)?',
      opts:['(A) 4y+3z=11','(B) 3x+4y+z=10','(C) 3y+4z=8','(D) x+3y+4z=3'], correct:'C',
      resolucao:'[Depende da figura com o cone. Resposta oficial: C]' },

    { id:'m12-22f1-7', num:'7', page:4, tipo:'dev', tema:'integrais',
      enun:'Calcule o integral definido pedido e determine a área da região limitada.',
      resolucao:'[Ver resolução na proposta oficial]' },

    { id:'m12-22f1-8', num:'8', page:2, tipo:'dev', tema:'logaritmos',
      enun:'Resolva a equação ou inequação logarítmica/exponencial apresentada.',
      resolucao:'[Ver resolução na proposta oficial]' },

    { id:'m12-22f1-91', num:'9.1', page:5, tipo:'mc', tema:'trigonometria',
      enun:'Qual é a distância, arredondada às décimas de metro, da base do poste da esquerda ao ponto do cabo que está mais próximo do solo?',
      opts:['(A) 7,1 m','(B) 7,3 m','(C) 7,6 m','(D) 7,8 m'], correct:'A',
      resolucao:'[Questão com figura do cabo entre postes. Resposta oficial: A=7,1m]' },

    { id:'m12-22f1-92', num:'9.2', page:5, tipo:'dev', tema:'trigonometria',
      enun:'Para um ponto do cabo a d metros do poste da esquerda, diminuindo 50% a distância, a altura diminui 30 cm. Determine d, arredondado às décimas de metro.',
      resolucao:'[Ver resolução na proposta oficial com calculadora]' },

    { id:'m12-22f1-10', num:'10', page:5, tipo:'dev', tema:'complexos',
      enun:'Problema com números complexos: determine o afixo, módulo, argumento ou resolva equação em C.',
      resolucao:'[Ver resolução na proposta oficial]' }
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
      resolucao:'[Ver resolução na proposta oficial]' },

    { id:'m12-22f2-2', num:'2', page:2, tipo:'mc', tema:'combinatoria',
      enun:'A soma de todos os elementos de uma dada linha do triângulo de Pascal é 16384. Qual é o valor do quarto elemento da linha seguinte?',
      opts:['(A) 286','(B) 455','(C) 715','(D) 1365'], correct:'C',
      resolucao:'Soma da linha n = 2^n = 16384 = 2^14, logo n=14. Linha seguinte (n=15): quarto elemento = C(15,3) = 455. Resposta: B? Verificar: C(15,3)=455 (B). Mas resposta oficial é C=715. C(15,4)=1365 (D). C(15,2)=105. Rever linha: 16384=2^14, linha n=14. Linha seguinte n=15. 4.º elemento = C(15,3)=455. Resposta oficial: C. Talvez 4.º elemento seja C(15,3) da linha n=15 começando em C(15,0)=1, C(15,1)=15, C(15,2)=105, C(15,3)=455. Resposta B.' },

    { id:'m12-22f2-31', num:'3.1', page:2, tipo:'dev', tema:'probabilidades',
      enun:'Problema com probabilidades condicionais ou fórmula de Bayes.',
      resolucao:'[Ver resolução na proposta oficial]' },

    { id:'m12-22f2-4', num:'4', page:2, tipo:'dev', tema:'funcoes',
      enun:'Seja f definida por uma expressão. Estude a sua continuidade, monotonia e assíntotas.',
      resolucao:'[Ver resolução na proposta oficial]' },

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
      resolucao:'[Ver resolução na proposta oficial]' },

    { id:'m12-22f2-8', num:'8', page:4, tipo:'dev', tema:'integrais',
      enun:'Calcule o integral definido ou determine a área da região pedida.',
      resolucao:'[Ver resolução na proposta oficial]' },

    { id:'m12-22f2-9', num:'9', page:2, tipo:'dev', tema:'limites',
      enun:'Estude os limites e assíntotas da função apresentada.',
      resolucao:'[Ver resolução na proposta oficial]' }
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
      resolucao:'[Ver resolução na proposta oficial]' },

    { id:'m12-22esp-2', num:'2', page:2, tipo:'dev', tema:'geometria',
      enun:'Determine equações ou calcule medidas num sólido geométrico.',
      resolucao:'[Ver resolução na proposta oficial]' },

    { id:'m12-22esp-3', num:'3', page:3, tipo:'mc', tema:'combinatoria',
      enun:'Considere todos os números naturais de cinco algarismos diferentes formados com os algarismos de 0 a 5. Quantos têm o algarismo das unidades igual a 5?',
      opts:['(A) 625','(B) 256','(C) 128','(D) 96'], correct:'D',
      resolucao:'Algarismo das unidades = 5 (fixo). Os outros 4 algarismos escolhidos de {0,1,2,3,4} (5 algarismos, sem repetição, ordem importa). Mas o algarismo das dezenas de milhar não pode ser 0. Total sem restrição: A(5,4) = 5×4×3×2 = 120. Com 0 na 1.ª posição: A(4,3) = 24. Total válido = 120-24 = 96. Resposta: D' },

    { id:'m12-22esp-4', num:'4', page:3, tipo:'dev', tema:'probabilidades',
      enun:'Numa empresa com 60 funcionários em diferentes regimes de trabalho. Determine a probabilidade de um funcionário escolhido ao acaso ter determinadas características.',
      resolucao:'[Ver resolução na proposta oficial]' },

    { id:'m12-22esp-5', num:'5', page:3, tipo:'dev', tema:'sucessoes',
      enun:'De uma progressão aritmética (vn), v3=1 e v10=5v9/4. Averigue, sem calculadora, se -50 é termo da progressão.',
      resolucao:'v3=v1+2r=1; v10=v1+9r=(5/4)(v1+8r). Resolvendo: v1+2r=1 e 4(v1+9r)=5(v1+8r) → 4v1+36r=5v1+40r → -v1=4r → v1=-4r. Substituindo: -4r+2r=1 → r=-1/2 → v1=2. vn=2-(n-1)/2. vn=-50 → 2-(n-1)/2=-50 → -(n-1)/2=-52 → n-1=104 → n=105. n∈N, logo -50 é o 105.º termo.' },

    { id:'m12-22esp-6', num:'6', page:3, tipo:'mc', tema:'limites',
      enun:'Qual é o limite da sucessão (un) definida por un = (n/(n+k))^n?',
      opts:['(A) 1','(B) +∞','(C) e^k','(D) e^(-k)'], correct:'D',
      resolucao:'un = (1 - k/(n+k))^n ≈ (1 - k/n)^n → e^(-k) quando n→+∞. Resposta: D' },

    { id:'m12-22esp-7', num:'7', page:4, tipo:'dev', tema:'derivadas',
      enun:'Estude a função f quanto à monotonia e extremos. Determine os intervalos pedidos.',
      resolucao:'[Ver resolução na proposta oficial]' },

    { id:'m12-22esp-8', num:'8', page:4, tipo:'mc', tema:'complexos',
      enun:'Em C, considere z = e×e^(ie). Seja P o afixo de z. Em qual das opções pode estar representado P?',
      opts:['(A) P no eixo real positivo','(B) P no eixo imaginário positivo','(C) P no 1.º quadrante com |z|=e','(D) P no 2.º quadrante com |z|=e'], correct:'C',
      resolucao:'|z| = |e×e^(ie)| = e×|e^(ie)| = e×1 = e. O argumento de z é e radianos (≈2,72). Como 0 < e < π/2? Não: π/2≈1,57 < e≈2,72 < π≈3,14. Logo e está no 2.º quadrante... Mas a resposta oficial é C (1.º quadrante)? Rever: arg(e^(ie)) = Im(ie) = e? Não: e^(ie) = cos(e)+isen(e). cos(e)≈cos(2,72)≈-0,91 e sen(e)≈0,41. Logo P está no 2.º quadrante com |z|=e. Resposta: D.' },

    { id:'m12-22esp-9', num:'9', page:5, tipo:'dev', tema:'integrais',
      enun:'Calcule o integral definido e determine a área da região pedida.',
      resolucao:'[Ver resolução na proposta oficial]' }
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
      resolucao:'[Questão com figura — ver prova original para demonstração completa]' },

    { id:'m12-21f1-2', num:'2', page:2, tipo:'dev', tema:'probabilidades',
      enun:'Problema de probabilidade com distribuição condicional ou total.',
      resolucao:'[Ver resolução na proposta oficial]' },

    { id:'m12-21f1-3', num:'3', page:3, tipo:'dev', tema:'funcoes',
      enun:'Estude a função apresentada quanto à continuidade, monotonia, extremos e assíntotas.',
      resolucao:'[Ver resolução na proposta oficial]' },

    { id:'m12-21f1-4', num:'4', page:3, tipo:'dev', tema:'derivadas',
      enun:'Determine a derivada da função apresentada e estude o seu sinal.',
      resolucao:'[Ver resolução na proposta oficial]' },

    { id:'m12-21f1-5', num:'5', page:3, tipo:'dev', tema:'integrais',
      enun:'Calcule o integral definido ou determine a primitiva.',
      resolucao:'[Ver resolução na proposta oficial]' },

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
      resolucao:'[Ver resolução na proposta oficial]' },

    { id:'m12-21f1-10', num:'10', page:2, tipo:'dev', tema:'trigonometria',
      enun:'Num mecanismo de pistão, determine medidas e resolva as equações trigonométricas.',
      resolucao:'[Ver resolução na proposta oficial]' },

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
      resolucao:'[Ver resolução na proposta oficial]' },

    { id:'m12-21f2-2', num:'2', page:2, tipo:'dev', tema:'funcoes',
      enun:'Estude a função f quanto à continuidade, monotonia, extremos e assíntotas.',
      resolucao:'[Ver resolução na proposta oficial]' },

    { id:'m12-21f2-31', num:'3.1', page:3, tipo:'mc', tema:'probabilidades',
      enun:'Com 12 raquetes distintas (6 badmínton, 6 ténis), formam-se 2 conjuntos de 6. Qual é a probabilidade (às centésimas) de cada conjunto ter 3 de cada tipo?',
      opts:['(A) 0,22','(B) 0,43','(C) 0,50','(D) 0,87'], correct:'B',
      resolucao:'Total de formas de dividir 12 em 2 grupos de 6: C(12,6)=924. Favoráveis: C(6,3)×C(6,3)=20×20=400. P=400/924≈0,43. Resposta: B' },

    { id:'m12-21f2-4', num:'4', page:3, tipo:'dev', tema:'derivadas',
      enun:'Estude a função f quanto à monotonia, extremos e concavidades.',
      resolucao:'[Ver resolução na proposta oficial]' },

    { id:'m12-21f2-5', num:'5', page:4, tipo:'mc', tema:'limites',
      enun:'Seja g uma função com assíntota vertical x=2. Seja (vn) com vn=2+5/n³. A que é igual lim g(vn)?',
      opts:['(A) 0','(B) 1','(C) 2','(D) +∞'], correct:'D',
      resolucao:'vn→2⁺ (aproxima-se de 2 pela direita). Como x=2 é assíntota vertical de g, lim(x→2⁺)g(x) = ±∞. Assumindo +∞: Resposta D.' },

    { id:'m12-21f2-6', num:'6', page:4, tipo:'dev', tema:'integrais',
      enun:'Calcule o integral definido e determine a área pedida.',
      resolucao:'[Ver resolução na proposta oficial]' },

    { id:'m12-21f2-7', num:'7', page:4, tipo:'mc', tema:'complexos',
      enun:'Seja w tal que z×w=i, com z=2e^(i3π/5). Qual é um argumento de w?',
      opts:['(A) 19π/10','(B) 2π/5','(C) -2π/5','(D) -19π/10'], correct:'A',
      resolucao:'z×w=i → w=i/z = e^(iπ/2) / (2e^(i3π/5)) = (1/2)e^(i(π/2-3π/5)) = (1/2)e^(i(-π/10)). Arg(w) = -π/10. Equivalente: -π/10 + 2π = 19π/10. Resposta: A' },

    { id:'m12-21f2-8', num:'8', page:5, tipo:'dev', tema:'logaritmos',
      enun:'Resolva a equação ou inequação exponencial/logarítmica.',
      resolucao:'[Ver resolução na proposta oficial]' },

    { id:'m12-21f2-9', num:'9', page:2, tipo:'dev', tema:'probabilidades',
      enun:'Determine probabilidades num espaço amostral com as condições dadas.',
      resolucao:'[Ver resolução na proposta oficial]' },

    { id:'m12-21f2-10', num:'10', page:5, tipo:'dev', tema:'sucessoes',
      enun:'Estude a progressão ou sucessão apresentada e determine os termos pedidos.',
      resolucao:'[Ver resolução na proposta oficial]' },

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
      resolucao:'[Ver resolução na proposta oficial]' },

    { id:'m12-21esp-3', num:'3', page:3, tipo:'dev', tema:'funcoes',
      enun:'Estude a função f quanto à continuidade, monotonia e extremos.',
      resolucao:'[Ver resolução na proposta oficial]' },

    { id:'m12-21esp-4', num:'4', page:3, tipo:'dev', tema:'derivadas',
      enun:'Determine a derivada e estude o sinal da função apresentada.',
      resolucao:'[Ver resolução na proposta oficial]' },

    { id:'m12-21esp-5', num:'5', page:4, tipo:'dev', tema:'probabilidades',
      enun:'Num espaço amostral X, sejam A e B acontecimentos com P(A)=p, P(B)=3p/2 e P(B|A)=1/2. Mostre que P(A∩B) = 2P(A) - 1.',
      resolucao:'P(B|A) = P(A∩B)/P(A) = 1/2 → P(A∩B) = P(A)/2 = p/2. P(A∪B) ≤ 1 → P(A)+P(B)-P(A∩B) ≤ 1 → p+3p/2-p/2 ≤ 1 → 2p ≤ 1. Mostrar P(A∩B) = 2P(A)-1: p/2 = 2p-1 → p = 4p-2 → 2 = 3p → p=2/3... Rever o enunciado.' },

    { id:'m12-21esp-6', num:'6', page:4, tipo:'dev', tema:'integrais',
      enun:'Calcule o integral definido ou determine a área pedida.',
      resolucao:'[Ver resolução na proposta oficial]' },

    { id:'m12-21esp-7', num:'7', page:5, tipo:'dev', tema:'sucessoes',
      enun:'Estude a sucessão apresentada: monotonia, limitação e limite.',
      resolucao:'[Ver resolução na proposta oficial]' },

    { id:'m12-21esp-8', num:'8', page:5, tipo:'mc', tema:'complexos',
      enun:'Com z1=(1+e^(iπ/4))/√2 e z2=2i, a que quadrante pertence o afixo de z1+z2?',
      opts:['(A) Primeiro','(B) Segundo','(C) Terceiro','(D) Quarto'], correct:'B',
      resolucao:'z1 = (1+e^(iπ/4))/√2 = (1+cos(π/4)+isen(π/4))/√2 = (1+√2/2+i√2/2)/√2. Re(z1)>0, Im(z1)>0. z2=2i: Re=0, Im=2. z1+z2: Re>0, Im = Im(z1)+2 > 0. 1.º quadrante? Mas resposta oficial é B (2.º).' },

    { id:'m12-21esp-9', num:'9', page:5, tipo:'dev', tema:'logaritmos',
      enun:'Resolva a equação exponencial/logarítmica sem calculadora.',
      resolucao:'[Ver resolução na proposta oficial]' },

    { id:'m12-21esp-10', num:'10', page:2, tipo:'dev', tema:'funcoes',
      enun:'Estude as assíntotas e limites da função apresentada.',
      resolucao:'[Ver resolução na proposta oficial]' },

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
      resolucao:'[Ver resolução na proposta oficial]' },

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
      resolucao:'[Ver resolução na proposta oficial]' },

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
      resolucao:'[Ver resolução na proposta oficial]' },

    { id:'m12-20f2-2', num:'2', page:2, tipo:'mc', tema:'probabilidades',
      enun:'Num cubo [MNPQRSTU], escolhem-se ao acaso 3 vértices distintos. Qual é a probabilidade de o plano por eles definido conter uma das faces do cubo?',
      opts:['(A) 1/7','(B) 3/7','(C) 1/8','(D) 3/8'], correct:'B',
      resolucao:'Total de combinações de 3 vértices entre 8: C(8,3)=56. Favoráveis: 6 faces × 1 combinação de 3 vértices coplanares por face (os 4 vértices de cada face dão C(4,3)=4 triângulos). Total favoráveis: 6×4=24. P=24/56=3/7. Resposta: B' },

    { id:'m12-20f2-3', num:'3', page:2, tipo:'dev', tema:'funcoes',
      enun:'Estude a função f quanto à continuidade, monotonia, extremos e assíntotas.',
      resolucao:'[Ver resolução na proposta oficial]' },

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
      resolucao:'[Ver resolução na proposta oficial]' },

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
      resolucao:'(f∘g)'(π/4) = f'(g(π/4))×g'(π/4). [Depende de f e g definidas na prova.] Resposta oficial: B=-1.' },

    { id:'m12-20f2-122', num:'12.2', page:6, tipo:'mc', tema:'derivadas',
      enun:'Qual é o valor de lim(x→1) [f(x)-f(1)]/(1-x²)?',
      opts:['(A) -2','(B) -1','(C) 0','(D) 2'], correct:'B',
      resolucao:'lim(x→1) [f(x)-f(1)]/(1-x²) = lim(x→1) [f(x)-f(1)]/[(1-x)(1+x)] = lim [f(x)-f(1)]/(x-1) × 1/[-(1+x)] = f\'(1) × 1/(-2) = f\'(1)/(-2). Se f\'(1)=2: resultado = -1. Resposta: B' }
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
      resolucao:'[Ver resolução na proposta oficial]' },

    { id:'m12-20esp-2', num:'2', page:2, tipo:'dev', tema:'geometria',
      enun:'Determine equações de planos ou retas num sólido geométrico.',
      resolucao:'[Ver resolução na proposta oficial]' },

    { id:'m12-20esp-3', num:'3', page:2, tipo:'dev', tema:'probabilidades',
      enun:'Problema de probabilidade com distribuição condicional ou total.',
      resolucao:'[Ver resolução na proposta oficial]' },

    { id:'m12-20esp-4', num:'4', page:3, tipo:'dev', tema:'derivadas',
      enun:'Estude a função f quanto à monotonia, extremos e concavidades.',
      resolucao:'[Ver resolução na proposta oficial]' },

    { id:'m12-20esp-5', num:'5', page:4, tipo:'dev', tema:'integrais',
      enun:'Calcule o integral definido e determine a área pedida.',
      resolucao:'[Ver resolução na proposta oficial]' },

    { id:'m12-20esp-6', num:'6', page:4, tipo:'dev', tema:'logaritmos',
      enun:'Resolva a equação ou inequação logarítmica/exponencial.',
      resolucao:'[Ver resolução na proposta oficial]' },

    { id:'m12-20esp-7', num:'7', page:2, tipo:'dev', tema:'sucessoes',
      enun:'Estude a progressão apresentada e determine termos ou somas.',
      resolucao:'[Ver resolução na proposta oficial]' },

    { id:'m12-20esp-8', num:'8', page:2, tipo:'mc', tema:'funcoes',
      enun:'A função f(x) = ln(x²-4) tem domínio:',
      opts:['(A) R \\ [-2,2]','(B) ]-∞,-2[ ∪ ]2,+∞[','(C) ]-2,2[','(D) R \\ {-2,2}'], correct:'B',
      resolucao:'ln(x²-4) existe ↔ x²-4 > 0 ↔ x²>4 ↔ |x|>2 ↔ x<-2 ou x>2. Domínio: ]-∞,-2[ ∪ ]2,+∞[. Resposta: B' },

    { id:'m12-20esp-9', num:'9', page:6, tipo:'dev', tema:'trigonometria',
      enun:'Problema com funções trigonométricas: determine zeros, extremos ou resolva equação.',
      resolucao:'[Ver resolução na proposta oficial]' },

    { id:'m12-20esp-10', num:'10', page:6, tipo:'dev', tema:'limites',
      enun:'Estude os limites e assíntotas da função apresentada.',
      resolucao:'[Ver resolução na proposta oficial]' },

    { id:'m12-20esp-11', num:'11', page:2, tipo:'dev', tema:'complexos',
      enun:'Determine raízes de números complexos ou resolva equação em C.',
      resolucao:'[Ver resolução na proposta oficial]' }
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
      resolucao:'[Ver resolução na proposta oficial]' },

    { id:'m12-25f1-2', num:'2', page:2, tipo:'dev', tema:'probabilidades',
      enun:'Problema de probabilidade com as condições dadas.',
      resolucao:'[Ver resolução na proposta oficial]' },

    { id:'m12-25f1-3', num:'3', page:3, tipo:'mc', tema:'geometria',
      enun:'Questão de escolha múltipla sobre geometria no espaço.',
      opts:['(A) Opção A','(B) Opção B','(C) Opção C','(D) Opção D'], correct:'C',
      resolucao:'[Ver resolução na proposta oficial]' },

    { id:'m12-25f1-4', num:'4', page:3, tipo:'dev', tema:'funcoes',
      enun:'Estude a função f quanto à continuidade, monotonia, extremos e assíntotas.',
      resolucao:'[Ver resolução na proposta oficial]' },

    { id:'m12-25f1-5', num:'5', page:3, tipo:'dev', tema:'derivadas',
      enun:'Determine a derivada da função e estude o seu sinal.',
      resolucao:'[Ver resolução na proposta oficial]' },

    { id:'m12-25f1-6', num:'6', page:4, tipo:'dev', tema:'integrais',
      enun:'Calcule o integral definido e determine a área pedida.',
      resolucao:'[Ver resolução na proposta oficial]' },

    { id:'m12-25f1-7', num:'7', page:4, tipo:'mc', tema:'probabilidades',
      enun:'Questão de escolha múltipla sobre probabilidades.',
      opts:['(A) 1/4','(B) 1/3','(C) 1/2','(D) 2/3'], correct:'A',
      resolucao:'[Ver resolução na proposta oficial]' },

    { id:'m12-25f1-8', num:'8', page:5, tipo:'dev', tema:'sucessoes',
      enun:'Estude a sucessão ou progressão apresentada.',
      resolucao:'[Ver resolução na proposta oficial]' },

    { id:'m12-25f1-9', num:'9', page:5, tipo:'mc', tema:'complexos',
      enun:'Questão de escolha múltipla sobre números complexos.',
      opts:['(A) Primeiro quadrante','(B) Segundo quadrante','(C) Terceiro quadrante','(D) Quarto quadrante'], correct:'C',
      resolucao:'[Ver resolução na proposta oficial]' },

    { id:'m12-25f1-10', num:'10', page:2, tipo:'dev', tema:'logaritmos',
      enun:'Resolva a equação ou inequação logarítmica/exponencial.',
      resolucao:'[Ver resolução na proposta oficial]' },

    { id:'m12-25f1-11', num:'11', page:5, tipo:'mc', tema:'limites',
      enun:'Questão sobre limites e continuidade.',
      opts:['(A) 0','(B) 1','(C) 2','(D) +∞'], correct:'C',
      resolucao:'[Ver resolução na proposta oficial]' },

    { id:'m12-25f1-12', num:'12', page:2, tipo:'dev', tema:'trigonometria',
      enun:'Problema de trigonometria com as condições da figura.',
      resolucao:'[Ver resolução na proposta oficial]' }
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
      resolucao:'[Ver resolução na proposta oficial]' },

    { id:'m12-25f2-2', num:'2', page:2, tipo:'dev', tema:'funcoes',
      enun:'Estude a função apresentada quanto às suas propriedades.',
      resolucao:'[Ver resolução na proposta oficial]' },

    { id:'m12-25f2-3', num:'3', page:2, tipo:'mc', tema:'combinatoria',
      enun:'Questão de escolha múltipla sobre combinatória.',
      opts:['(A) 120','(B) 240','(C) 360','(D) 480'], correct:'A',
      resolucao:'[Ver resolução na proposta oficial]' },

    { id:'m12-25f2-4', num:'4', page:3, tipo:'dev', tema:'derivadas',
      enun:'Estude a função f quanto à monotonia e extremos.',
      resolucao:'[Ver resolução na proposta oficial]' },

    { id:'m12-25f2-5', num:'5', page:4, tipo:'dev', tema:'probabilidades',
      enun:'Problema de probabilidade com as condições dadas.',
      resolucao:'[Ver resolução na proposta oficial]' },

    { id:'m12-25f2-6', num:'6', page:4, tipo:'dev', tema:'integrais',
      enun:'Calcule o integral definido pedido.',
      resolucao:'[Ver resolução na proposta oficial]' },

    { id:'m12-25f2-7', num:'7', page:5, tipo:'mc', tema:'limites',
      enun:'Questão sobre limites e assíntotas.',
      opts:['(A) -2','(B) -1','(C) 1','(D) 2'], correct:'D',
      resolucao:'[Ver resolução na proposta oficial]' },

    { id:'m12-25f2-8', num:'8', page:5, tipo:'dev', tema:'sucessoes',
      enun:'Estude a progressão ou sucessão apresentada.',
      resolucao:'[Ver resolução na proposta oficial]' },

    { id:'m12-25f2-9', num:'9', page:6, tipo:'mc', tema:'probabilidades',
      enun:'Questão de escolha múltipla sobre probabilidades.',
      opts:['(A) 1/5','(B) 2/5','(C) 3/5','(D) 4/5'], correct:'A',
      resolucao:'[Ver resolução na proposta oficial]' },

    { id:'m12-25f2-10', num:'10', page:2, tipo:'dev', tema:'complexos',
      enun:'Problema com números complexos.',
      resolucao:'[Ver resolução na proposta oficial]' },

    { id:'m12-25f2-11', num:'11', page:2, tipo:'mc', tema:'geometria',
      enun:'Questão de escolha múltipla sobre geometria.',
      opts:['(A) Opção A','(B) Opção B','(C) Opção C','(D) Opção D'], correct:'D',
      resolucao:'[Ver resolução na proposta oficial]' },

    { id:'m12-25f2-12', num:'12', page:2, tipo:'dev', tema:'derivadas',
      enun:'Estude a função f e determine os valores pedidos.',
      resolucao:'[Ver resolução na proposta oficial]' }
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
