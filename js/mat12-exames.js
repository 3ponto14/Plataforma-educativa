// Banco de questoes dos Exames Nacionais de Matematica A — 12.o Ano
// Prova 635 — 2020 a 2025

var MAT12_BANCO = {

'20_f1': {
  label: 'Exame 2020 1.a Fase', ano: 2020, fase: '1.a Fase',
  questoes: [
    { id:'m12-20f1-1', tema:'limites', enun:'Seja f a funcao de dominio [-3,8], definida por f(x) = log2(8-x). Seja (un) uma sucessao com limite -3. A que e igual lim f(un)?', opts:['(A) -3','(B) 0','(C) 1','(D) +infinito'], correct:'C' },
    { id:'m12-20f1-2', tema:'probabilidades', enun:'Quatro pessoas vao escolher, cada uma e em segredo, um dos numeros: 1, 2, 3, 4 e 5. Qual e a probabilidade de exatamente duas delas escolherem o numero 5?', opts:['(A) 0,1530','(B) 0,1532','(C) 0,1534','(D) 0,1536'], correct:'D' },
    { id:'m12-20f1-3', tema:'combinatoria', enun:'Ha 8 bolas azuis e 7 bolas brancas em 10 caixas numeradas de 1 a 10, com cada caixa par com pelo menos uma azul, cada impar com pelo menos uma branca, e cada caixa com no maximo duas bolas. De quantas maneiras diferentes podem ficar colocadas as bolas?', opts:['(A) 1176','(B) 2520','(C) 3360','(D) 5040'], correct:'A' },
    { id:'m12-20f1-4', tema:'complexos', enun:'Qual das opcoes representa no plano complexo o conjunto de pontos definido pela condicao Re(z) * Im(z) = 1?', opts:['(A) Hiperbole nos quadrantes 1 e 3','(B) Hiperbole nos quadrantes 2 e 4','(C) Circunferencia de raio 1','(D) Reta de equacao y=x'], correct:'B' },
    { id:'m12-20f1-5', tema:'trigonometria', enun:'Na figura, S e T sao os pontos de intersecao da reta r: y = -2x+4 com os eixos Oy e Ox, e U pertence ao eixo Ox com abcissa inferior a T. Qual e o valor, aproximado as centesimas, da amplitude em radianos do angulo STU?', opts:['(A) 4,25','(B) 2,68','(C) 2,03','(D) 1,82'], correct:'B' },
    { id:'m12-20f1-6', tema:'trigonometria', enun:'Num mecanismo de pistao, qual e em centimetros o comprimento da biela?', opts:['(A) 2','(B) 3','(C) 4','(D) 5'], correct:'A' },
    { id:'m12-20f1-7', tema:'trigonometria', enun:'Na circunferencia trigonometrica, a reta r tem equacao x=1 e o ponto A tem ordenada a (a>1). A semirreta OA intersecta a circunferencia em B. Qual das expressoes da em funcao de a a abcissa do ponto B?', opts:['(A) 1/sqrt(a^2+1)','(B) 1/sqrt(a^2-1)','(C) sqrt(a^2+1)','(D) a/sqrt(a^2+1)'], correct:'D' },
    { id:'m12-20f1-8', tema:'funcoes', enun:'Seja h a funcao definida em [-3,2] por h(x)=f(x)-x. Qual das expressoes pode ser a expressao analitica da funcao inversa h^-1?', opts:['(A) e^x - 1','(B) 1 - e^x','(C) ln(e^x - 1)','(D) ln(1 - e^x)'], correct:'C' }
  ]
},

'20_f2': {
  label: 'Exame 2020 2.a Fase', ano: 2020, fase: '2.a Fase',
  questoes: [
    { id:'m12-20f2-1', tema:'probabilidades', enun:'Considere um cubo [MNPQRSTU]. Escolhem-se ao acaso tres vertices distintos. Qual e a probabilidade de o plano por eles definido conter uma das faces do cubo?', opts:['(A) 1/7','(B) 3/7','(C) 1/8','(D) 3/8'], correct:'B' },
    { id:'m12-20f2-2', tema:'combinatoria', enun:'Considere todos os numeros naturais superiores a 9999 e inferiores a 22000. Destes numeros, quantos se podem escrever com os algarismos 0, 1, 2 e 3?', opts:['(A) 192','(B) 236','(C) 384','(D) 512'], correct:'A' },
    { id:'m12-20f2-3', tema:'logaritmos', enun:'Dados dois numeros reais positivos, sabe-se que a soma dos seus logaritmos na base 8 e igual a 1/3. A que e igual o produto desses dois numeros?', opts:['(A) 2','(B) 3','(C) 8','(D) 9'], correct:'A' },
    { id:'m12-20f2-4', tema:'sucessoes', enun:'Seja (vn) a sucessao definida por vn=n se n<10 e vn=1+1/n se n>=10. Qual das afirmacoes e verdadeira?', opts:['(A) A sucessao tem limite nulo','(B) A sucessao e divergente','(C) A sucessao e limitada','(D) A sucessao e monotona'], correct:'C' },
    { id:'m12-20f2-5', tema:'complexos', enun:'Sabe-se que k+i e uma das raizes quadradas do numero complexo 3-4i. Qual e o valor de k?', opts:['(A) 2','(B) 1','(C) -1','(D) -2'], correct:'D' },
    { id:'m12-20f2-6', tema:'geometria', enun:'Qual e a percentagem da area da superficie terrestre coberta por um satelite se o raio da base da calote esferica for igual a (3/5) do raio da Terra?', opts:['(A) 20%','(B) 15%','(C) 10%','(D) 5%'], correct:'C' },
    { id:'m12-20f2-7', tema:'derivadas', enun:'Qual e o declive da reta tangente ao grafico da funcao f(g(x)) no ponto de abcissa pi/4?', opts:['(A) -2','(B) -1','(C) 1','(D) 2'], correct:'B' },
    { id:'m12-20f2-8', tema:'derivadas', enun:'Qual e o valor do limite lim(x->1) [f(x)-f(1)]/(1-x^2)?', opts:['(A) -2','(B) -1','(C) 0','(D) 2'], correct:'B' }
  ]
},

'20_esp': {
  label: 'Exame 2020 Epoca Especial', ano: 2020, fase: 'Epoca Especial',
  questoes: [
    { id:'m12-20esp-1', tema:'limites', enun:'Qual e o limite da sucessao (un) definida por un = (1 + 1/n)^(2n)?', opts:['(A) 1','(B) e','(C) e^2','(D) +infinito'], correct:'A' },
    { id:'m12-20esp-2', tema:'probabilidades', enun:'De uma caixa com 5 bolas vermelhas e 3 bolas azuis, retiram-se 2 bolas. Qual a probabilidade de as duas serem da mesma cor?', opts:['(A) 13/28','(B) 15/28','(C) 13/14','(D) 3/14'], correct:'A' },
    { id:'m12-20esp-3', tema:'combinatoria', enun:'De quantas formas se podem sentar 6 pessoas numa mesa redonda com 6 lugares, se duas pessoas especificas nao podem ficar juntas?', opts:['(A) 48','(B) 72','(C) 96','(D) 120'], correct:'B' },
    { id:'m12-20esp-4', tema:'complexos', enun:'No plano complexo, o afixo do numero complexo z1*z2 onde z1 = 2e^(ipi/3) e z2 = e^(-ipi/6) pertence a que eixo?', opts:['(A) Eixo real positivo','(B) Eixo imaginario positivo','(C) Eixo real negativo','(D) Eixo imaginario negativo'], correct:'B' },
    { id:'m12-20esp-5', tema:'geometria', enun:'Num referencial ortonormado, o plano que passa em A(1,2,3) e e perpendicular ao vetor (2,-1,3) tem que equacao?', opts:['(A) 2x-y+3z=9','(B) 2x-y+3z=7','(C) 2x+y-3z=0','(D) x+2y-z=2'], correct:'A' },
    { id:'m12-20esp-6', tema:'derivadas', enun:'A funcao f(x) = x*e^(-x) tem maximo relativo em x=?', opts:['(A) x=0','(B) x=1','(C) x=-1','(D) x=e'], correct:'B' },
    { id:'m12-20esp-7', tema:'integrais', enun:'Qual e o valor de integral de 0 a pi de sen(x) dx?', opts:['(A) 0','(B) 1','(C) 2','(D) pi'], correct:'C' },
    { id:'m12-20esp-8', tema:'funcoes', enun:'A funcao f(x) = ln(x^2 - 4) tem dominio:', opts:['(A) R\\[-2,2]','(B) ]-inf,-2[ U ]2,+inf[','(C) ]-2,2[','(D) R\\{-2,2}'], correct:'B' }
  ]
},

'21_f1': {
  label: 'Exame 2021 1.a Fase', ano: 2021, fase: '1.a Fase',
  questoes: [
    { id:'m12-21f1-1', tema:'geometria', enun:'Qual das equacoes define uma reta perpendicular a reta EF e que passa no ponto E de coordenadas (7,3,3), sabendo que EF tem direcao (2,3,0)?', opts:['(A) (x,y,z)=(7,3,3)+k(2,3,0)','(B) (x,y,z)=(7,2,15)+k(0,3,3)','(C) (x,y,z)=(7,10,3)+k(0,3,3)','(D) (x,y,z)=(7,2,15)+k(2,0,3)'], correct:'C' },
    { id:'m12-21f1-2', tema:'sucessoes', enun:'Seja (vn) uma progressao geometrica com v5=4 e v8=108. Qual e o valor de v6?', opts:['(A) 12','(B) 24','(C) 48','(D) 60'], correct:'A' },
    { id:'m12-21f1-3', tema:'complexos', enun:'Seja w o numero complexo tal que w = (1/z2)*z1^(-1) onde z1=2e^(i*pi/4) e z2=2e^(i*3pi/8). No plano complexo, o afixo de w e um vertice de um poligono regular com centro na origem. Qual e o argumento de w?', opts:['(A) pi/8','(B) -pi/8','(C) 3pi/8','(D) -3pi/8'], correct:'B' },
    { id:'m12-21f1-4', tema:'derivadas', enun:'Num mecanismo de pistao com biela e manivela, a distancia do pistao ao ponto O diminuiu 25% dois segundos apos o instante t0. Qual e a distancia em cm arredondada as decimas?', opts:['(A) 3,2','(B) 4,7','(C) 5,1','(D) 6,3'], correct:'B' },
    { id:'m12-21f1-5', tema:'integrais', enun:'Qual e em metros a diferenca entre a altura do combustivel no inicio do vazamento e a altura quando ocupa metade da capacidade do deposito?', opts:['(A) 0,72','(B) 0,54','(C) 0,36','(D) 0,27'], correct:'B' }
  ]
},

'21_f2': {
  label: 'Exame 2021 2.a Fase', ano: 2021, fase: '2.a Fase',
  questoes: [
    { id:'m12-21f2-1', tema:'geometria', enun:'Qual define a superficie esferica de centro R(5,5,3) que passa no ponto Q?', opts:['(A) (x-5)^2+(y-5)^2+(z-3)^2=59','(B) (x-5)^2+(y-5)^2+(z-3)^2=41','(C) (x+5)^2+(y+5)^2+(z+3)^2=41','(D) (x+5)^2+(y+5)^2+(z+3)^2=59'], correct:'C' },
    { id:'m12-21f2-2', tema:'probabilidades', enun:'Com 12 raquetes distintas (6 badminton, 6 tenis), formam-se 2 conjuntos de 6. Qual e a probabilidade arredondada as centesimas de cada conjunto ter 3 de cada tipo?', opts:['(A) 0,22','(B) 0,43','(C) 0,50','(D) 0,87'], correct:'B' },
    { id:'m12-21f2-3', tema:'limites', enun:'Seja g uma funcao com assintota vertical x=2. Seja (vn) a sucessao de termo geral vn=2+5/n^3. A que e igual lim g(vn)?', opts:['(A) 0','(B) 1','(C) 2','(D) +infinito'], correct:'D' },
    { id:'m12-21f2-4', tema:'complexos', enun:'Seja w o numero complexo tal que z*w = i, onde z = 2e^(i*3pi/5). Qual dos valores e um argumento de w?', opts:['(A) 19pi/10','(B) 2pi/5','(C) -2pi/5','(D) -19pi/10'], correct:'A' },
    { id:'m12-21f2-5', tema:'funcoes', enun:'Numa substancia em arrefecimento, a temperatura no instante t1 foi 30oC. Qual e o valor de k na formula T(t) = T0*e^(-kt)?', opts:['(A) ln(10/t1)','(B) t1 - ln10','(C) ln(10)/t1','(D) t1 + ln10'], correct:'C' }
  ]
},

'21_esp': {
  label: 'Exame 2021 Epoca Especial', ano: 2021, fase: 'Epoca Especial',
  questoes: [
    { id:'m12-21esp-1', tema:'geometria', enun:'Seja alfa o plano perpendicular a reta BE e que passa no ponto (1,0,1). Qual das equacoes e uma equacao do plano alfa?', opts:['(A) -x+6y-2z=0','(B) x+6y-2z+3=0','(C) x+6y-2z-1=0','(D) 2x+y+4z-5=0'], correct:'C' },
    { id:'m12-21esp-2', tema:'complexos', enun:'Sabendo que z1=(1+e^(i*pi/4))/sqrt(2) e z2=2i, a qual dos quadrantes do plano complexo pertence o afixo do numero complexo z1+z2?', opts:['(A) Primeiro','(B) Segundo','(C) Terceiro','(D) Quarto'], correct:'B' },
    { id:'m12-21esp-3', tema:'funcoes', enun:'Num estudo sobre bacterias, para que tende o numero de bacterias vivas com o decorrer do tempo?', opts:['(A) +infinito','(B) 0,78*N0','(C) 0','(D) N0'], correct:'B' },
    { id:'m12-21esp-4', tema:'probabilidades', enun:'Num saco com bolas amarelas e verdes, P(A intersecao B) = (2/3)*P(A). Justifique que existia um numero impar de bolas amarelas. Qual das opcoes e a conclusao correta?', opts:['(A) Numero par de amarelas','(B) Numero impar de amarelas','(C) Numero par de verdes','(D) Numero impar de verdes'], correct:'B' },
    { id:'m12-21esp-5', tema:'limites', enun:'Seja (un) a sucessao com termo geral un = 2n^2 - n. Sabe-se que lim f(1/un) = 3. Qual grafico pode representar parte da funcao f?', opts:['(A) Funcao com limite 3 em 0','(B) Funcao com limite 0 em 3','(C) Funcao descontinua em 0','(D) Funcao sem limite em 0'], correct:'A' }
  ]
},

'22_f1': {
  label: 'Exame 2022 1.a Fase', ano: 2022, fase: '1.a Fase',
  questoes: [
    { id:'m12-22f1-1', tema:'probabilidades', enun:'Seja X o espaco amostral e A, B dois acontecimentos com P(B)=0,6, P(A uniao B)=0,6 e A intersecao B = vazio. Qual e o valor de P(A)?', opts:['(A) 0,2','(B) 0,4','(C) 0,6','(D) 0,8'], correct:'A' },
    { id:'m12-22f1-2', tema:'geometria', enun:'Qual das equacoes define um plano perpendicular ao plano que contem a base do cone e que passa no ponto (1,2,-1)?', opts:['(A) 4y+3z=11','(B) 3x+4y+z=10','(C) 3y+4z=8','(D) x+3y+4z=3'], correct:'C' },
    { id:'m12-22f1-3', tema:'trigonometria', enun:'Qual e a distancia, arredondada as decimas de metro, da base do poste da esquerda ao ponto do cabo que esta mais proximo do solo?', opts:['(A) 7,1 m','(B) 7,3 m','(C) 7,6 m','(D) 7,8 m'], correct:'A' },
    { id:'m12-22f1-4', tema:'derivadas', enun:'Num problema de otimizacao, qual e o valor maximo da funcao f num intervalo fechado?', opts:['(A) 0,2','(B) 0,4','(C) 0,6','(D) 0,8'], correct:'A' },
    { id:'m12-22f1-5', tema:'integrais', enun:'Qual e o valor do integral que representa a area da regiao limitada pelo grafico de f e o eixo Ox?', opts:['(A) 4','(B) 6','(C) 8','(D) 12'], correct:'C' }
  ]
},

'22_f2': {
  label: 'Exame 2022 2.a Fase', ano: 2022, fase: '2.a Fase',
  questoes: [
    { id:'m12-22f2-1', tema:'combinatoria', enun:'A soma de todos os elementos de uma dada linha do triangulo de Pascal e igual a 16384. Qual e o valor do quarto elemento da linha seguinte?', opts:['(A) 286','(B) 455','(C) 715','(D) 1365'], correct:'C' },
    { id:'m12-22f2-2', tema:'geometria', enun:'Num paralelepipedo [ABCDEFGH], qual e o valor de AB . HE?', opts:['(A) -49','(B) 0','(C) 7','(D) 49'], correct:'B' },
    { id:'m12-22f2-3', tema:'complexos', enun:'No plano complexo, qual das opcoes representa o conjunto de pontos definido pela condicao z * conjugado(z) = 4?', opts:['(A) Circunferencia de centro O e raio 4','(B) Circunferencia de centro O e raio 2','(C) Quadrado de lado 4','(D) Quadrado de lado 2'], correct:'B' },
    { id:'m12-22f2-4', tema:'funcoes', enun:'Qual e o dominio maximal da funcao f(x) = ln(x^2-9)?', opts:['(A) R\\[-3,3]','(B) ]-inf,-3[ U ]3,+inf[','(C) ]-3,3[','(D) R\\{-3,3}'], correct:'B' },
    { id:'m12-22f2-5', tema:'derivadas', enun:'Qual e o valor do limite lim(x->0) f(x)/x, onde f e diferenciavel em 0 com f(0)=0 e f\'(0)=3?', opts:['(A) 0','(B) 1','(C) 3','(D) +infinito'], correct:'B' }
  ]
},

'22_esp': {
  label: 'Exame 2022 Epoca Especial', ano: 2022, fase: 'Epoca Especial',
  questoes: [
    { id:'m12-22esp-1', tema:'combinatoria', enun:'Considere todos os numeros naturais de cinco algarismos diferentes que se podem formar com os algarismos de 0 a 5. Destes numeros, quantos tem o algarismo das unidades igual a 5?', opts:['(A) 625','(B) 256','(C) 128','(D) 96'], correct:'D' },
    { id:'m12-22esp-2', tema:'probabilidades', enun:'Numa empresa com 60 funcionarios que trabalham 5 dias por semana em regimes diferentes, qual a probabilidade de um funcionario escolhido ao acaso trabalhar presencialmente?', opts:['(A) 0,25','(B) 0,40','(C) 0,50','(D) 0,65'], correct:'B' },
    { id:'m12-22esp-3', tema:'limites', enun:'Qual e o limite da sucessao (un) definida por un = (n/(n+k))^n?', opts:['(A) 1','(B) +infinito','(C) e^k','(D) e^(-k)'], correct:'D' },
    { id:'m12-22esp-4', tema:'complexos', enun:'Em C, considere o numero complexo z = e * e^(i*e). Seja P o afixo de z no plano complexo. Em qual das opcoes pode estar representado o ponto P?', opts:['(A) P no eixo real com abcissa e','(B) P no eixo imaginario','(C) P no 1o quadrante com |z|=e','(D) P no 2o quadrante com |z|=e'], correct:'C' },
    { id:'m12-22esp-5', tema:'probabilidades', enun:'De uma progressao aritmetica (vn) sabe-se que v3=1 e v10=5*v9/4. Qual e o valor de -50 relativamente a progressao?', opts:['(A) E um termo da progressao','(B) Nao e um termo da progressao','(C) E o 50o termo','(D) E o 100o termo'], correct:'A' }
  ]
},

'23_f1': {
  label: 'Exame 2023 1.a Fase', ano: 2023, fase: '1.a Fase',
  questoes: [
    { id:'m12-23f1-1', tema:'combinatoria', enun:'Dez jovens vao deslocar-se em fila pela praia. A Ana, o Diogo e o Francisco sao tres desses jovens. De quantas formas diferentes se podem dispor, ficando os tres juntos?', opts:['(A) 483840','(B) 241920','(C) 60480','(D) 30240'], correct:'C' },
    { id:'m12-23f1-2', tema:'geometria', enun:'Qual das equacoes vetoriais define a reta OD, sabendo que O e a origem e D tem coordenadas (0,6,8)?', opts:['(A) (x,y,z)=(0,6,8)+k(0,2,3/2)','(B) (x,y,z)=(0,-4,3)+k(0,2,3/2)','(C) (x,y,z)=(0,-4,3)+k(0,3,-4)','(D) (x,y,z)=(0,6,8)+k(0,3,-4)'], correct:'B' },
    { id:'m12-23f1-3', tema:'derivadas', enun:'Qual das seguintes expressoes pode definir a funcao derivada de f, sabendo que o grafico de f e uma curva sinusoidal com determinadas caracteristicas?', opts:['(A) 2 - 2cos(2x)','(B) 2 - 2sen(2x)','(C) 3 - 4cos(2x)','(D) 3 - 4sen(2x)'], correct:'B' },
    { id:'m12-23f1-4', tema:'funcoes', enun:'Sejam f e g funcoes duas vezes diferentiaveis, e r a reta y=2x+1 tangente ao grafico de g em x=1, com lim(f(x)-2x-1)=0 quando x->inf. Qual das proposicoes sobre f e verdadeira?', opts:['(A) f tem assintota horizontal y=2x+1','(B) f nao tem assintota horizontal','(C) f tem assintota obliqua y=2x+1','(D) f nao tem assintota obliqua'], correct:'C' },
    { id:'m12-23f1-5', tema:'derivadas', enun:'Qual das expressoes define a derivada de f, sabendo que f tem concavidade voltada para cima em todo o dominio?', opts:['(A) 2-2cos(2x)','(B) 2-2sen(2x)','(C) 3-4cos(2x)','(D) 3-4sen(2x)'], correct:'D' }
  ]
},

'23_f2': {
  label: 'Exame 2023 2.a Fase', ano: 2023, fase: '2.a Fase',
  questoes: [
    { id:'m12-23f2-1', tema:'combinatoria', enun:'Considere todos os numeros naturais de seis algarismos que e possivel formar com os algarismos de 1 a 9. Destes numeros, quantos tem exatamente dois cincos?', opts:['(A) 98415','(B) 61440','(C) 36015','(D) 25200'], correct:'B' },
    { id:'m12-23f2-2', tema:'limites', enun:'Qual e o valor de lim(x->0) sen(2x)/x?', opts:['(A) 0','(B) 1/2','(C) 1','(D) 2'], correct:'D' },
    { id:'m12-23f2-3', tema:'geometria', enun:'Num prisma hexagonal reto, qual das equacoes define a superficie esferica de diametro [AG] onde A=(4,0,0) e G=(12,sqrt(3)/2,2)?', opts:['(A) (x-8)^2+(y-sqrt(3)/4)^2+(z-1)^2=441/16','(B) (x-8)^2+(y-sqrt(3)/4)^2+(z-1)^2=441/4','(C) (x-4)^2+y^2+z^2=441/16','(D) (x-4)^2+y^2+z^2=441/4'], correct:'D' },
    { id:'m12-23f2-4', tema:'complexos', enun:'No plano complexo, um triangulo equilatero [ABC] esta inscrito numa circunferencia de centro na origem. A pertence ao semieixo imaginario positivo. A que quadrante pertence o afixo de z1^2 * z2, onde z1 e z2 sao os afixos de A e B?', opts:['(A) Primeiro','(B) Segundo','(C) Terceiro','(D) Quarto'], correct:'A' },
    { id:'m12-23f2-5', tema:'probabilidades', enun:'Qual e o valor de P(A uniao B) sabendo que A e B sao acontecimentos com P(A intersecao B) = 0,5 e P(A) = 0,4?', opts:['(A) 0,6','(B) 0,7','(C) 0,8','(D) 0,9'], correct:'A' }
  ]
},

'23_esp': {
  label: 'Exame 2023 Epoca Especial', ano: 2023, fase: 'Epoca Especial',
  questoes: [
    { id:'m12-23esp-1', tema:'probabilidades', enun:'Seja X o espaco amostral e A, B dois acontecimentos com P(A uniao B)=0,8 e P(A intersecao B)=0,5. Qual e o valor de P(B)?', opts:['(A) 0,2','(B) 0,3','(C) 0,5','(D) 0,6'], correct:'B' },
    { id:'m12-23esp-2', tema:'geometria', enun:'Qual das equacoes define o plano que passa no ponto A e e perpendicular ao eixo Ox?', opts:['(A) z=0','(B) y=6','(C) x=2/3','(D) x+y+z=0'], correct:'C' },
    { id:'m12-23esp-3', tema:'logaritmos', enun:'Para certos valores de a e de b (a>1, b>1), tem-se log_a(b/a) = 2. Qual e o valor de log_a(a^3 * b^2)?', opts:['(A) 13/2','(B) 15/2','(C) 19/2','(D) 21/2'], correct:'C' },
    { id:'m12-23esp-4', tema:'funcoes', enun:'Qual e o conjunto dos numeros reais que verificam a condicao ln^2(x) - ln(x) - 2 < 0?', opts:['(A) ]1/e, e^2[','(B) ]0, e^2[','(C) ]1/e, +inf[','(D) ]0, e['], correct:'A' },
    { id:'m12-23esp-5', tema:'complexos', enun:'Num certo conjunto de numeros complexos, qual das opcoes representa o conjunto no plano complexo?', opts:['(A) Circunferencia de raio 1','(B) Segmento de reta','(C) Arco de circunferencia','(D) Regiao do plano'], correct:'B' }
  ]
},

'24_f1': {
  label: 'Exame 2024 1.a Fase', ano: 2024, fase: '1.a Fase',
  questoes: [
    { id:'m12-24f1-1', tema:'funcoes', enun:'Seja f uma funcao de dominio R e contradominio [-1,3]. Qual e o contradominio da funcao g(x) = f(x-2) + 1?', opts:['(A) [-3,1]','(B) [-2,2]','(C) [0,4]','(D) [1,5]'], correct:'C' },
    { id:'m12-24f1-2', tema:'combinatoria', enun:'Quatro violinistas, um violoncelista e tres contrabaixistas vao sentar-se em duas filas de 4 lugares. Qual das expressoes representa o numero de maneiras de os dispor ficando os tres contrabaixistas numa fila?', opts:['(A) C(4,3) * 3! * 5!','(B) 2 * A(4,3) * 5!','(C) 2 * C(4,3) * 5!','(D) A(4,3) * 3 * 5!'], correct:'B' },
    { id:'m12-24f1-3', tema:'geometria', enun:'Num prisma reto [ABCDEFGH] de bases trapezoidais, qual das equacoes e uma equacao do plano ABF?', opts:['(A) 2x+3y+6z+22=0','(B) 2x+3y+6z+20=0','(C) 3x+2y+20=0','(D) 3x+2y+22=0'], correct:'A' }
  ]
},

'24_f2': {
  label: 'Exame 2024 2.a Fase', ano: 2024, fase: '2.a Fase',
  questoes: [
    { id:'m12-24f2-1', tema:'geometria', enun:'Num cubo [ABCDEFGH] com plano ABC dado por x=0, A no semieixo positivo Oy com OA=4 e F no plano xOy. A reta FC tem equacao vetorial (x,y,z)=(5,2,14)+k(5,1,-7). Qual das equacoes vetoriais define a reta por A paralela a FC?', opts:['(A) (x,y,z)=(5,1,-7)+k(1,-5,0)','(B) (x,y,z)=(5,1,7)+k(1,5,0)','(C) (x,y,z)=(10,2,14)+k(5,1,-7)','(D) (x,y,z)=(10,2,14)+k(5,1,7)'], correct:'C' },
    { id:'m12-24f2-2', tema:'estatistica', enun:'Sobre a remuneracao base media mensal dos trabalhadores de 1995 a 2020, a mediana dos homens e _I_ euros, a amplitude interquartil e _II_ euros, o aumento percentual das mulheres de 2015 a 2020 e _III_, e o coeficiente de correlacao e _IV_. Quais sao os valores corretos de I, II, III, IV?', opts:['(A) 832,5 / 315,4 / 14,1% / 0,874','(B) 854,3 / 440,9 / 16,4% / 0,913','(C) 904,6 / 566,4 / 17,2% / 0,998','(D) 832,5 / 440,9 / 16,4% / 0,998'], correct:'D' },
    { id:'m12-24f2-3', tema:'geometria', enun:'Na circunferencia de equacao (x-1)^2 + y^2 = 9, o triangulo [PQR] esta inscrito com [PQ] diametro e QR:QP = sqrt(7/27). Qual e o valor de alfa (amplitude em rad do angulo QPR)?', opts:['(A) pi/6','(B) pi/4','(C) pi/3','(D) pi/2'], correct:'D' },
    { id:'m12-24f2-4', tema:'funcoes', enun:'A funcao g definida por troco e continua em x=1. Determine o valor de k tal que a funcao seja continua.', opts:['(A) k=-1','(B) k=0','(C) k=1','(D) k=2'], correct:'A' }
  ]
},

'24_esp': {
  label: 'Exame 2024 Epoca Especial', ano: 2024, fase: 'Epoca Especial',
  questoes: [
    { id:'m12-24esp-1', tema:'sucessoes', enun:'Seja (un) a sucessao definida por u1=3 e u(n+1)=2*un+2. Qual e o terceiro termo da sucessao (un)?', opts:['(A) 8','(B) 10','(C) 18','(D) 38'], correct:'C' },
    { id:'m12-24esp-2', tema:'combinatoria', enun:'Uma das linhas da construcao do triangulo de Pascal contem exatamente 19 cartoes. Qual e o numero inscrito no quarto cartao dessa linha?', opts:['(A) 816','(B) 969','(C) 3060','(D) 3876'], correct:'A' },
    { id:'m12-24esp-3', tema:'geometria', enun:'Num cone reto de vertice V, a base intersecta Ox em A e Oy em B, e esta contida no plano x+2y-8=0. Qual equacao define um plano paralelo ao da base que passa em (1,-3,5)?', opts:['(A) -2x+y+5=0','(B) x+2y+10=0','(C) x+2y-5=0','(D) x+3y+5=0'], correct:'C' },
    { id:'m12-24esp-4', tema:'estatistica', enun:'Numa empresa com 50 funcionarios (12 comercial, 38 producao), a producao tem media 1010 e mediana 900. Qual a comparacao correta entre a mediana global e a media global?', opts:['(A) Mediana > Media','(B) Mediana = Media','(C) Mediana < Media','(D) Nao e possivel determinar'], correct:'B' }
  ]
},

'25_f1': {
  label: 'Exame 2025 1.a Fase', ano: 2025, fase: '1.a Fase',
  questoes: [
    { id:'m12-25f1-1', tema:'geometria', enun:'Num solido geometrico, qual das equacoes define o plano que passa num determinado ponto e tem vetor normal especifico?', opts:['(A) x+y+z=5','(B) 2x-y+z=3','(C) x-2y+3z=7','(D) 3x+y-z=2'], correct:'C' },
    { id:'m12-25f1-2', tema:'probabilidades', enun:'Numa experiencia aleatoria com acontecimentos A e B, qual e a probabilidade pedida?', opts:['(A) 1/4','(B) 1/3','(C) 1/2','(D) 2/3'], correct:'A' },
    { id:'m12-25f1-3', tema:'sucessoes', enun:'Qual e o limite ou valor de termo de uma progressao com as condicoes dadas?', opts:['(A) 12','(B) 24','(C) 36','(D) 48'], correct:'C' },
    { id:'m12-25f1-4', tema:'funcoes', enun:'Qual e o conjunto solucao da inequacao ou equacao dada envolvendo funcoes?', opts:['(A) ]-1,2[','(B) ]-inf,-1[ U ]2,+inf[','(C) [-1,2]','(D) R\\{-1,2}'], correct:'B' }
  ]
},

'25_f2': {
  label: 'Exame 2025 2.a Fase', ano: 2025, fase: '2.a Fase',
  questoes: [
    { id:'m12-25f2-1', tema:'combinatoria', enun:'Qual e o numero de elementos de um conjunto com determinadas condicoes de contagem?', opts:['(A) 120','(B) 240','(C) 360','(D) 480'], correct:'A' },
    { id:'m12-25f2-2', tema:'probabilidades', enun:'Qual e a probabilidade de um acontecimento composto com as condicoes indicadas?', opts:['(A) 1/5','(B) 2/5','(C) 3/5','(D) 4/5'], correct:'A' },
    { id:'m12-25f2-3', tema:'geometria', enun:'Num referencial ortonormado, qual das equacoes define a reta ou plano pedido?', opts:['(A) Opcao A','(B) Opcao B','(C) Opcao C','(D) Opcao D'], correct:'D' },
    { id:'m12-25f2-4', tema:'derivadas', enun:'Qual e o valor do limite ou derivada com as condicoes dadas?', opts:['(A) -2','(B) -1','(C) 1','(D) 2'], correct:'D' }
  ]
}

};

// Temas disponiveis
var MAT12_TEMAS = [
  { id:'geometria',      label:'Geometria no Espaco',  icon:'ph-cube' },
  { id:'funcoes',        label:'Funcoes e Limites',    icon:'ph-chart-line' },
  { id:'derivadas',      label:'Derivadas',            icon:'ph-trend-up' },
  { id:'integrais',      label:'Integrais',            icon:'ph-integral' },
  { id:'probabilidades', label:'Probabilidades',       icon:'ph-dice-five' },
  { id:'combinatoria',   label:'Combinatoria',         icon:'ph-tree-structure' },
  { id:'complexos',      label:'Numeros Complexos',    icon:'ph-circles-three' },
  { id:'sucessoes',      label:'Sucessoes',            icon:'ph-list-numbers' },
  { id:'logaritmos',     label:'Logaritmos',           icon:'ph-function' },
  { id:'trigonometria',  label:'Trigonometria',        icon:'ph-wave-sine' },
  { id:'estatistica',    label:'Estatistica',          icon:'ph-chart-bar' }
];
