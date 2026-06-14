/* ════════════════════════════════════════════════════════════════
   desafio.js — Desafio do Dia (portal)
   3 perguntas por dia, ADEQUADAS AO ANO do aluno (seletor 5.º-9.º
   sempre visível). Sempre as mesmas no mesmo dia/ano (determinístico).
   Ao concluir, soma XP e mantém o streak 🔥 — reutiliza o
   ProgressManager (shared.js), por isso a ofensiva e o XP são OS
   MESMOS do resto da plataforma. Guardado no dispositivo, sem contas.

   REGRA DE OURO: um aluno do 5.º NUNCA recebe perguntas do 9.º. Cada
   pergunta vive no banco do seu ano. PT só existe a partir do 7.º.
   ════════════════════════════════════════════════════════════════ */

/* Banco por ANO. Cada item: { d:'MAT'|'PT', enun, opcoes[4], resp, expl }.
   Conteúdo ao nível das Aprendizagens Essenciais de cada ano. */
var DESAFIO_POR_ANO = {
  5: [
    { d: 'MAT', enun: 'Quanto é 7 × 8?', opcoes: ['56', '54', '64', '48'], resp: '56', expl: '7 × 8 = 56.' },
    { d: 'MAT', enun: 'Qual é o valor de 3/4 + 1/4?', opcoes: ['1', '4/8', '3/8', '1/2'], resp: '1', expl: '3/4 + 1/4 = 4/4 = 1 (um inteiro).' },
    { d: 'MAT', enun: 'Metade de 50 é:', opcoes: ['25', '20', '30', '100'], resp: '25', expl: 'Metade = ÷2: 50 ÷ 2 = 25.' },
    { d: 'MAT', enun: 'Quanto é 0,5 + 0,5?', opcoes: ['1', '0,10', '0,55', '10'], resp: '1', expl: '0,5 + 0,5 = 1 (meia + meia unidade).' },
    { d: 'MAT', enun: 'Quantos minutos tem 1 hora e meia?', opcoes: ['90', '60', '120', '100'], resp: '90', expl: '1 hora = 60 min; meia hora = 30 min → 90 minutos.' },
    { d: 'MAT', enun: 'Qual destes é um número par?', opcoes: ['14', '7', '9', '21'], resp: '14', expl: 'Os pares terminam em 0, 2, 4, 6 ou 8: 14 é par.' },
    { d: 'MAT', enun: 'O perímetro de um quadrado de lado 3 cm é:', opcoes: ['12 cm', '9 cm', '6 cm', '3 cm'], resp: '12 cm', expl: 'Perímetro = 4 × lado = 4 × 3 = 12 cm.' },
    { d: 'MAT', enun: '25% corresponde à fração:', opcoes: ['1/4', '1/2', '1/3', '2/5'], resp: '1/4', expl: '25% = 25/100 = 1/4.' },
    { d: 'MAT', enun: 'Quanto é 100 − 37?', opcoes: ['63', '67', '73', '57'], resp: '63', expl: '100 − 37 = 63.' },
    { d: 'MAT', enun: 'Um cubo tem quantas faces?', opcoes: ['6', '4', '8', '12'], resp: '6', expl: 'O cubo tem 6 faces quadradas.' },
    { d: 'MAT', enun: 'Qual é o resultado de 9 × 6?', opcoes: ['54', '56', '45', '63'], resp: '54', expl: '9 × 6 = 54.' },
    { d: 'MAT', enun: 'Quanto é 1/2 de 30?', opcoes: ['15', '20', '10', '60'], resp: '15', expl: 'Metade de 30 = 15.' },
    { d: 'MAT', enun: 'Quanto é 3,5 + 1,5?', opcoes: ['5', '4,10', '5,5', '2'], resp: '5', expl: '3,5 + 1,5 = 5.' },
    { d: 'MAT', enun: 'Quantos lados tem um hexágono?', opcoes: ['6', '5', '8', '4'], resp: '6', expl: 'Hexágono = 6 lados (penta=5, octo=8).' },
    { d: 'MAT', enun: '10% de 200 é:', opcoes: ['20', '10', '2', '100'], resp: '20', expl: '10% = 1/10; 200 ÷ 10 = 20.' },
    { d: 'MAT', enun: 'Quanto é 48 ÷ 6?', opcoes: ['8', '7', '6', '9'], resp: '8', expl: '48 ÷ 6 = 8.' },
    { d: 'MAT', enun: 'A fração 2/4 é igual a:', opcoes: ['1/2', '1/4', '2/2', '4/2'], resp: '1/2', expl: '2/4 simplifica para 1/2 (dividindo por 2).' },
    { d: 'MAT', enun: 'Qual é o dobro de 35?', opcoes: ['70', '65', '60', '75'], resp: '70', expl: 'Dobro = ×2: 35 × 2 = 70.' },
    { d: 'MAT', enun: 'Um ângulo reto mede:', opcoes: ['90°', '180°', '45°', '60°'], resp: '90°', expl: 'O ângulo reto tem 90°.' },
    { d: 'MAT', enun: 'Quanto é 7 + 8 + 5?', opcoes: ['20', '21', '19', '22'], resp: '20', expl: '7 + 8 = 15; 15 + 5 = 20.' },
    { d: 'MAT', enun: 'Quantos centímetros tem 1 metro?', opcoes: ['100', '10', '1000', '60'], resp: '100', expl: '1 m = 100 cm.' },
    { d: 'MAT', enun: 'Qual é o triplo de 4?', opcoes: ['12', '8', '7', '16'], resp: '12', expl: 'Triplo = ×3: 4 × 3 = 12.' },
    { d: 'MAT', enun: 'Quanto é 5²?', opcoes: ['25', '10', '52', '20'], resp: '25', expl: '5² = 5 × 5 = 25.' },
    { d: 'MAT', enun: 'Qual destes é um número ímpar?', opcoes: ['17', '12', '8', '20'], resp: '17', expl: 'Os ímpares terminam em 1, 3, 5, 7 ou 9: 17 é ímpar.' },
    { d: 'MAT', enun: 'A área de um quadrado de lado 4 é:', opcoes: ['16', '8', '12', '4'], resp: '16', expl: 'Área = lado × lado = 4 × 4 = 16.' }
  ],
  6: [
    { d: 'MAT', enun: 'Qual é o máximo divisor comum de 12 e 18?', opcoes: ['6', '3', '12', '36'], resp: '6', expl: 'Divisores comuns de 12 e 18: 1, 2, 3, 6, o maior é 6.' },
    { d: 'MAT', enun: 'Quanto é 2/3 de 9?', opcoes: ['6', '3', '9', '4,5'], resp: '6', expl: '9 ÷ 3 = 3; 3 × 2 = 6.' },
    { d: 'MAT', enun: 'Quanto é 2³ (2 ao cubo)?', opcoes: ['8', '6', '9', '23'], resp: '8', expl: '2³ = 2 × 2 × 2 = 8.' },
    { d: 'MAT', enun: 'A área de um retângulo de 4 por 5 é:', opcoes: ['20', '18', '9', '40'], resp: '20', expl: 'Área = comprimento × largura = 4 × 5 = 20.' },
    { d: 'MAT', enun: '30% de 200 é:', opcoes: ['60', '30', '600', '70'], resp: '60', expl: '30% = 30/100; 200 × 0,3 = 60.' },
    { d: 'MAT', enun: 'Qual destes números é primo?', opcoes: ['13', '15', '21', '9'], resp: '13', expl: '13 só é divisível por 1 e por si próprio: é primo.' },
    { d: 'MAT', enun: 'Quanto é 1/2 + 1/3?', opcoes: ['5/6', '2/5', '1/6', '2/6'], resp: '5/6', expl: 'Reduzindo a sextos: 3/6 + 2/6 = 5/6.' },
    { d: 'MAT', enun: 'Se 3 cadernos custam 6 €, quanto custam 5 cadernos?', opcoes: ['10 €', '9 €', '12 €', '8 €'], resp: '10 €', expl: 'Cada caderno = 2 €; 5 × 2 = 10 € (proporcionalidade direta).' },
    { d: 'MAT', enun: 'Quanto é 4,2 × 10?', opcoes: ['42', '4,2', '420', '0,42'], resp: '42', expl: 'Multiplicar por 10 desloca a vírgula uma casa: 42.' },
    { d: 'MAT', enun: 'O volume de um cubo de aresta 2 é:', opcoes: ['8', '6', '4', '12'], resp: '8', expl: 'Volume = aresta³ = 2 × 2 × 2 = 8.' },
    { d: 'MAT', enun: 'O mínimo múltiplo comum de 4 e 6 é:', opcoes: ['12', '24', '10', '2'], resp: '12', expl: 'Múltiplos comuns de 4 e 6: 12, 24… o menor é 12.' },
    { d: 'MAT', enun: 'Quanto é 3/4 de 20?', opcoes: ['15', '5', '12', '16'], resp: '15', expl: '20 ÷ 4 = 5; 5 × 3 = 15.' },
    { d: 'MAT', enun: 'Quanto é (−2) + (−5)?', opcoes: ['−7', '−3', '7', '3'], resp: '−7', expl: 'Somar dois negativos: −2 − 5 = −7.' },
    { d: 'MAT', enun: '50% de 64 é:', opcoes: ['32', '50', '16', '128'], resp: '32', expl: '50% = metade; 64 ÷ 2 = 32.' },
    { d: 'MAT', enun: 'O perímetro de um retângulo 6 por 4 é:', opcoes: ['20', '24', '10', '14'], resp: '20', expl: 'Perímetro = 2 × (6 + 4) = 20.' },
    { d: 'MAT', enun: 'Quanto é 0,25 em fração?', opcoes: ['1/4', '1/2', '25', '1/25'], resp: '1/4', expl: '0,25 = 25/100 = 1/4.' },
    { d: 'MAT', enun: 'Quanto é 12 ÷ 0,5?', opcoes: ['24', '6', '12', '0,5'], resp: '24', expl: 'Dividir por 0,5 é o mesmo que multiplicar por 2: 24.' },
    { d: 'MAT', enun: 'Quantos divisores tem o número 6?', opcoes: ['4 (1, 2, 3, 6)', '2', '6', '3'], resp: '4 (1, 2, 3, 6)', expl: 'Os divisores de 6 são 1, 2, 3 e 6: quatro divisores.' },
    { d: 'MAT', enun: 'Qual é o valor de 10²?', opcoes: ['100', '20', '1000', '102'], resp: '100', expl: '10² = 10 × 10 = 100.' },
    { d: 'MAT', enun: 'A razão entre 8 e 4 é:', opcoes: ['2', '4', '12', '0,5'], resp: '2', expl: 'Razão = 8 ÷ 4 = 2.' },
    { d: 'MAT', enun: 'Se 2 kg de maçãs custam 3 €, 6 kg custam:', opcoes: ['9 €', '6 €', '12 €', '18 €'], resp: '9 €', expl: '6 kg = 3 × 2 kg → 3 × 3 € = 9 €.' },
    { d: 'MAT', enun: 'Quanto é 7/10 em decimal?', opcoes: ['0,7', '7', '0,07', '70'], resp: '0,7', expl: '7/10 = 0,7 (sete décimas).' },
    { d: 'MAT', enun: 'Quanto é 15% de 60?', opcoes: ['9', '15', '45', '6'], resp: '9', expl: '60 × 0,15 = 9.' },
    { d: 'MAT', enun: 'Um número múltiplo de 5 termina sempre em:', opcoes: ['0 ou 5', '2 ou 4', '1 ou 3', '5 apenas'], resp: '0 ou 5', expl: 'Múltiplos de 5: 5, 10, 15, 20… terminam em 0 ou 5.' },
    { d: 'MAT', enun: 'O volume de um paralelepípedo 2×3×4 é:', opcoes: ['24', '9', '14', '12'], resp: '24', expl: 'Volume = 2 × 3 × 4 = 24.' }
  ],
  7: [
    { d: 'MAT', enun: 'Quanto é (−5) + 8?', opcoes: ['3', '−3', '13', '−13'], resp: '3', expl: '−5 + 8 = 3.' },
    { d: 'MAT', enun: 'Quanto é (−4) × (−3)?', opcoes: ['12', '−12', '7', '−7'], resp: '12', expl: 'Menos vezes menos dá mais: 4 × 3 = 12.' },
    { d: 'MAT', enun: 'A solução de x + 7 = 12 é:', opcoes: ['x = 5', 'x = 19', 'x = 7', 'x = −5'], resp: 'x = 5', expl: 'x = 12 − 7 = 5.' },
    { d: 'MAT', enun: 'A soma dos ângulos internos de um triângulo é:', opcoes: ['180°', '360°', '90°', '270°'], resp: '180°', expl: 'Em qualquer triângulo, os ângulos internos somam 180°.' },
    { d: 'MAT', enun: 'Quanto é (−3)²?', opcoes: ['9', '−9', '6', '−6'], resp: '9', expl: '(−3)² = (−3) × (−3) = 9.' },
    { d: 'PT', enun: 'Em «O vento sussurrava entre as árvores.», a figura de estilo é:', opcoes: ['Personificação', 'Comparação', 'Hipérbole', 'Metáfora'], resp: 'Personificação', expl: 'Sussurrar é próprio de seres humanos: atribuído ao vento, é personificação.' },
    { d: 'PT', enun: 'Em «A Rita comeu o bolo.», «o bolo» é:', opcoes: ['Complemento direto', 'Sujeito', 'Complemento indireto', 'Vocativo'], resp: 'Complemento direto', expl: 'Comeu o quê? O bolo: substituível por «o».' },
    { d: 'PT', enun: 'Uma narrativa com animais e uma moralidade é uma:', opcoes: ['Fábula', 'Lenda', 'Crónica', 'Biografia'], resp: 'Fábula', expl: 'A fábula tem animais que agem como pessoas e termina com uma lição.' },
    { d: 'PT', enun: 'A palavra «infeliz» forma-se por:', opcoes: ['Prefixação', 'Sufixação', 'Composição', 'Onomatopeia'], resp: 'Prefixação', expl: 'in- + feliz: acrescenta-se um prefixo negativo.' },
    { d: 'PT', enun: 'Quem conta a história num texto narrativo é o:', opcoes: ['Narrador', 'Autor', 'Sujeito poético', 'Leitor'], resp: 'Narrador', expl: 'O narrador conta; o autor é a pessoa real que escreveu.' },
    { d: 'MAT', enun: 'Quanto é (−8) − (−3)?', opcoes: ['−5', '−11', '5', '11'], resp: '−5', expl: 'Subtrair um negativo: −8 + 3 = −5.' },
    { d: 'MAT', enun: 'A solução de 3x = 21 é:', opcoes: ['x = 7', 'x = 18', 'x = 24', 'x = 63'], resp: 'x = 7', expl: 'x = 21 ÷ 3 = 7.' },
    { d: 'MAT', enun: 'Quanto é 2/3 + 1/6?', opcoes: ['5/6', '3/9', '1/2', '3/6'], resp: '5/6', expl: '4/6 + 1/6 = 5/6.' },
    { d: 'MAT', enun: 'Um ângulo de 90° chama-se:', opcoes: ['reto', 'agudo', 'obtuso', 'raso'], resp: 'reto', expl: 'Reto = 90°; agudo < 90°; obtuso > 90°; raso = 180°.' },
    { d: 'MAT', enun: 'O simétrico de −7 é:', opcoes: ['7', '−7', '0', '1/7'], resp: '7', expl: 'O simétrico troca o sinal: −7 → 7.' },
    { d: 'PT', enun: 'Em «veloz como o vento», a figura de estilo é:', opcoes: ['Comparação', 'Metáfora', 'Personificação', 'Hipérbole'], resp: 'Comparação', expl: 'A palavra «como» liga os dois elementos: comparação.' },
    { d: 'PT', enun: 'O plural de «cão» é:', opcoes: ['cães', 'cãos', 'cans', 'cãoes'], resp: 'cães', expl: 'Plural irregular: cão → cães (como pão → pães).' },
    { d: 'PT', enun: 'Em «Pedro, fecha a porta!», «Pedro» é:', opcoes: ['Vocativo', 'Sujeito', 'Complemento direto', 'Predicado'], resp: 'Vocativo', expl: 'É um chamamento, separado por vírgula: vocativo.' },
    { d: 'PT', enun: 'No discurso indireto, «hoje» passa a:', opcoes: ['naquele dia', 'amanhã', 'ontem', 'agora'], resp: 'naquele dia', expl: 'hoje → naquele dia; amanhã → no dia seguinte.' },
    { d: 'PT', enun: 'Uma estrofe de quatro versos chama-se:', opcoes: ['Quadra', 'Terceto', 'Oitava', 'Dístico'], resp: 'Quadra', expl: '2 = dístico; 3 = terceto; 4 = quadra; 8 = oitava.' },
    { d: 'PT', enun: 'Em «o vento uivava», a figura de estilo é:', opcoes: ['Personificação', 'Comparação', 'Hipérbole', 'Antítese'], resp: 'Personificação', expl: 'Uivar é próprio de animais: atribuído ao vento, é personificação.' },
    { d: 'PT', enun: 'A palavra «guarda-chuva» forma-se por:', opcoes: ['Composição', 'Prefixação', 'Sufixação', 'Onomatopeia'], resp: 'Composição', expl: 'Junta duas palavras (guarda + chuva): composição.' },
    { d: 'PT', enun: 'Em «Estudei, mas falhei.», «mas» liga orações:', opcoes: ['Adversativas', 'Copulativas', 'Disjuntivas', 'Conclusivas'], resp: 'Adversativas', expl: '«Mas» exprime oposição: coordenação adversativa.' },
    { d: 'PT', enun: 'Uma narrativa tradicional caracteriza-se por ser:', opcoes: ['de autor anónimo e transmitida oralmente', 'sempre em verso', 'de autor conhecido', 'verídica'], resp: 'de autor anónimo e transmitida oralmente', expl: 'O conto tradicional passou de boca em boca: autor anónimo (o povo).' },
    { d: 'PT', enun: 'A lenda distingue-se do conto por:', opcoes: ['misturar factos reais com o maravilhoso', 'ser sempre cómica', 'não ter personagens', 'ser escrita em verso'], resp: 'misturar factos reais com o maravilhoso', expl: 'A lenda parte de algo real e acrescenta-lhe o maravilhoso.' },
    { d: 'MAT', enun: 'Quanto é (−6) ÷ 2?', opcoes: ['−3', '3', '−4', '4'], resp: '−3', expl: '−6 ÷ 2 = −3 (sinais diferentes dão negativo).' },
    { d: 'MAT', enun: 'O valor absoluto de −9 é:', opcoes: ['9', '−9', '0', '1/9'], resp: '9', expl: 'O valor absoluto (módulo) é a distância a zero: |−9| = 9.' },
    { d: 'MAT', enun: 'A solução de x/4 = 5 é:', opcoes: ['x = 20', 'x = 9', 'x = 1,25', 'x = 45'], resp: 'x = 20', expl: 'x = 5 × 4 = 20.' },
    { d: 'MAT', enun: 'Quanto é 2,5 × 4?', opcoes: ['10', '8', '12,5', '6,5'], resp: '10', expl: '2,5 × 4 = 10.' },
    { d: 'MAT', enun: 'Num triângulo, dois ângulos medem 50° e 60°. O terceiro mede:', opcoes: ['70°', '110°', '80°', '90°'], resp: '70°', expl: '180° − 50° − 60° = 70°.' }
  ],
  8: [
    { d: 'MAT', enun: 'Pelo Teorema de Pitágoras, se os catetos são 3 e 4, a hipotenusa é:', opcoes: ['5', '7', '12', '25'], resp: '5', expl: '3² + 4² = 9 + 16 = 25; √25 = 5.' },
    { d: 'MAT', enun: 'Quanto é 2⁴ × 2³ (mesma base)?', opcoes: ['2⁷', '2¹²', '4⁷', '2¹'], resp: '2⁷', expl: 'Mesma base: somam-se os expoentes → 2^(4+3) = 2⁷.' },
    { d: 'MAT', enun: 'A solução de 2x = 10 é:', opcoes: ['x = 5', 'x = 20', 'x = 8', 'x = 12'], resp: 'x = 5', expl: 'x = 10 ÷ 2 = 5.' },
    { d: 'MAT', enun: 'Num lançamento de um dado, a probabilidade de sair 6 é:', opcoes: ['1/6', '1/2', '6', '1/3'], resp: '1/6', expl: 'Um caso favorável (o 6) em 6 possíveis → 1/6.' },
    { d: 'MAT', enun: 'Quanto é 5⁰?', opcoes: ['1', '0', '5', '50'], resp: '1', expl: 'Qualquer número (≠0) elevado a 0 é igual a 1.' },
    { d: 'PT', enun: 'Quem é o autor de «O Gato Malhado e a Andorinha Sinhá»?', opcoes: ['Jorge Amado', 'Miguel Torga', 'Sophia de Mello Breyner', 'Eça de Queirós'], resp: 'Jorge Amado', expl: 'É uma narrativa do escritor brasileiro Jorge Amado.' },
    { d: 'PT', enun: 'No texto dramático, as indicações cénicas chamam-se:', opcoes: ['Didascálias', 'Apartes', 'Réplicas', 'Monólogos'], resp: 'Didascálias', expl: 'As didascálias orientam a encenação e não são ditas pelos atores.' },
    { d: 'PT', enun: 'Em «Consideram-no um herói.», «um herói» é:', opcoes: ['Predicativo do complemento direto', 'Complemento direto', 'Predicativo do sujeito', 'Sujeito'], resp: 'Predicativo do complemento direto', expl: 'Com «considerar», a qualidade atribuída ao CD é predicativo do complemento direto.' },
    { d: 'PT', enun: 'Um texto em que a própria pessoa conta a sua vida é:', opcoes: ['Autobiografia', 'Biografia', 'Notícia', 'Anúncio'], resp: 'Autobiografia', expl: 'Autobiografia/diário = a própria pessoa narra a sua vida (1.ª pessoa).' },
    { d: 'PT', enun: 'A palavra «entristecer» forma-se por:', opcoes: ['Parassíntese', 'Sufixação', 'Prefixação', 'Composição'], resp: 'Parassíntese', expl: 'en- + triste + -ecer ao mesmo tempo: parassíntese.' },
    { d: 'MAT', enun: 'Quanto é 3⁵ ÷ 3² (mesma base)?', opcoes: ['3³', '3⁷', '3¹⁰', '1³'], resp: '3³', expl: 'Mesma base na divisão: subtraem-se os expoentes → 3^(5−2) = 3³.' },
    { d: 'MAT', enun: 'Num triângulo retângulo com catetos 6 e 8, a hipotenusa é:', opcoes: ['10', '14', '48', '100'], resp: '10', expl: '6² + 8² = 36 + 64 = 100; √100 = 10.' },
    { d: 'MAT', enun: 'A solução de x − 4 = 9 é:', opcoes: ['x = 13', 'x = 5', 'x = 36', 'x = −5'], resp: 'x = 13', expl: 'x = 9 + 4 = 13.' },
    { d: 'MAT', enun: 'Ao lançar uma moeda, a probabilidade de sair coroa é:', opcoes: ['1/2', '1', '1/4', '2'], resp: '1/2', expl: 'Dois casos possíveis (cara/coroa), um favorável → 1/2.' },
    { d: 'MAT', enun: 'Quanto é (−2)³?', opcoes: ['−8', '8', '−6', '6'], resp: '−8', expl: '(−2)³ = (−2)(−2)(−2) = −8 (expoente ímpar mantém o sinal).' },
    { d: 'PT', enun: 'No texto dramático, uma fala dirigida ao público que as outras personagens «não ouvem» é:', opcoes: ['o aparte', 'o monólogo', 'a didascália', 'a réplica'], resp: 'o aparte', expl: 'O aparte é dito ao público; o monólogo é a personagem a falar sozinha.' },
    { d: 'PT', enun: 'Em «O livro foi lido pelos alunos.», «pelos alunos» é:', opcoes: ['Complemento agente da passiva', 'Complemento oblíquo', 'Sujeito', 'Modificador'], resp: 'Complemento agente da passiva', expl: 'Frase passiva: quem age vem com «por», agente da passiva.' },
    { d: 'PT', enun: 'A obra «O Diário de Anne Frank» é, quanto ao género:', opcoes: ['um texto autobiográfico (diário)', 'um conto tradicional', 'um texto dramático', 'uma epopeia'], resp: 'um texto autobiográfico (diário)', expl: 'É o diário real de Anne Frank: texto autobiográfico, na 1.ª pessoa.' },
    { d: 'PT', enun: 'Completa no conjuntivo: «Espero que tu ___ a tempo.» (verbo chegar)', opcoes: ['chegues', 'chegas', 'chegarás', 'chegavas'], resp: 'chegues', expl: '«Espero que» pede o presente do conjuntivo: chegues.' },
    { d: 'PT', enun: 'A palavra «pluvioso» (pluvi- + -oso) forma-se por:', opcoes: ['Composição por radicais', 'Composição por palavras', 'Prefixação', 'Parassíntese'], resp: 'Composição por radicais', expl: 'Junta radicais (pluvi-): composição morfológica por radicais.' },
    { d: 'PT', enun: 'Quem escreveu o conto «Natal» (o pedinte Garrinchas)?', opcoes: ['Miguel Torga', 'Jorge Amado', 'Eça de Queirós', 'Sophia de Mello Breyner'], resp: 'Miguel Torga', expl: 'O conto «Natal», sobre o Garrinchas, é de Miguel Torga.' },
    { d: 'PT', enun: 'Em «Disse que tinha chegado.», a oração «que tinha chegado» é subordinada:', opcoes: ['Substantiva completiva', 'Adjetiva relativa', 'Adverbial causal', 'Coordenada'], resp: 'Substantiva completiva', expl: 'Completa o verbo «dizer»: substantiva completiva.' },
    { d: 'PT', enun: 'Uma reportagem distingue-se da notícia porque:', opcoes: ['aprofunda o tema com factos e testemunhos', 'é mais curta', 'não tem título', 'só dá opiniões'], resp: 'aprofunda o tema com factos e testemunhos', expl: 'A reportagem desenvolve o assunto em profundidade.' },
    { d: 'PT', enun: 'Em «A cidade adormeceu.», a figura de estilo é:', opcoes: ['Personificação', 'Comparação', 'Metáfora', 'Hipérbole'], resp: 'Personificação', expl: 'Adormecer é próprio de seres vivos: atribuído à cidade, é personificação.' },
    { d: 'PT', enun: 'A obra «O Gato Malhado e a Andorinha Sinhá» é de que autor?', opcoes: ['Jorge Amado', 'Gil Vicente', 'Luís de Camões', 'Vergílio Ferreira'], resp: 'Jorge Amado', expl: 'É uma narrativa do brasileiro Jorge Amado.' },
    { d: 'MAT', enun: 'Quanto é √81?', opcoes: ['9', '8', '40,5', '18'], resp: '9', expl: '9 × 9 = 81, logo √81 = 9.' },
    { d: 'MAT', enun: 'A solução de 3x + 1 = 10 é:', opcoes: ['x = 3', 'x = 11/3', 'x = 9', 'x = 33'], resp: 'x = 3', expl: '3x = 9 → x = 3.' },
    { d: 'MAT', enun: 'Quanto é (2³)² (potência de potência)?', opcoes: ['2⁶', '2⁵', '2⁹', '4⁵'], resp: '2⁶', expl: 'Multiplicam-se os expoentes: 2^(3×2) = 2⁶.' },
    { d: 'MAT', enun: 'Ao lançar um dado, a probabilidade de sair par é:', opcoes: ['1/2', '1/6', '1/3', '3'], resp: '1/2', expl: '3 pares (2,4,6) em 6 → 3/6 = 1/2.' },
    { d: 'MAT', enun: 'A área de um triângulo de base 6 e altura 4 é:', opcoes: ['12', '24', '10', '6'], resp: '12', expl: 'Área = (base × altura) ÷ 2 = (6 × 4) ÷ 2 = 12.' }
  ],
  9: [
    { d: 'MAT', enun: 'A solução de x² = 49 é:', opcoes: ['x = 7 ou x = −7', 'x = 7', 'x = 24,5', 'x = 2401'], resp: 'x = 7 ou x = −7', expl: 'x² = 49 tem duas soluções: 7 e −7 (ambas ao quadrado dão 49).' },
    { d: 'MAT', enun: 'Quanto é √49?', opcoes: ['7', '8', '6', '24,5'], resp: '7', expl: '7 × 7 = 49, logo √49 = 7.' },
    { d: 'MAT', enun: 'Num triângulo retângulo, sen(30°) é igual a:', opcoes: ['0,5', '1', '0', '0,87'], resp: '0,5', expl: 'sen(30°) = 1/2 = 0,5 (valor notável).' },
    { d: 'MAT', enun: 'A expressão 2(x + 3) é igual a:', opcoes: ['2x + 6', '2x + 3', 'x + 6', '2x + 5'], resp: '2x + 6', expl: 'Propriedade distributiva: 2·x + 2·3 = 2x + 6.' },
    { d: 'MAT', enun: 'A probabilidade de um acontecimento certo é:', opcoes: ['1', '0', '0,5', '100'], resp: '1', expl: 'Um acontecimento certo tem probabilidade 1 (100%).' },
    { d: 'PT', enun: 'Quem é o autor de «Os Lusíadas»?', opcoes: ['Luís de Camões', 'Fernando Pessoa', 'Gil Vicente', 'Eça de Queirós'], resp: 'Luís de Camões', expl: 'A epopeia «Os Lusíadas» (1572) é de Luís Vaz de Camões.' },
    { d: 'PT', enun: 'No «Auto da Barca do Inferno», o Onzeneiro representa o pecado da:', opcoes: ['Usura (cobiça)', 'Preguiça', 'Gula', 'Vaidade'], resp: 'Usura (cobiça)', expl: 'O Onzeneiro emprestava dinheiro a juros excessivos: figura-tipo da usura.' },
    { d: 'PT', enun: 'O Adamastor, em «Os Lusíadas», simboliza:', opcoes: ['os perigos do mar desconhecido', 'o amor entre os marinheiros', 'a riqueza da Índia', 'a paz após a viagem'], resp: 'os perigos do mar desconhecido', expl: 'O gigante do Cabo das Tormentas personifica os perigos da navegação.' },
    { d: 'PT', enun: 'Em «Disse que vinha», a oração «que vinha» é subordinada:', opcoes: ['Substantiva completiva', 'Adjetiva relativa', 'Adverbial causal', 'Coordenada'], resp: 'Substantiva completiva', expl: 'Completa o sentido do verbo «dizer»: substantiva completiva.' },
    { d: 'PT', enun: 'Um verso de 10 sílabas métricas chama-se:', opcoes: ['Decassílabo', 'Redondilha maior', 'Alexandrino', 'Octossílabo'], resp: 'Decassílabo', expl: 'Dez sílabas métricas = decassílabo (a medida de Os Lusíadas).' },
    { d: 'MAT', enun: 'A solução de x² − 9 = 0 é:', opcoes: ['x = 3 ou x = −3', 'x = 3', 'x = 9', 'x = 81'], resp: 'x = 3 ou x = −3', expl: 'x² = 9 → x = 3 ou x = −3.' },
    { d: 'MAT', enun: 'cos(60°) é igual a:', opcoes: ['0,5', '1', '0', '0,87'], resp: '0,5', expl: 'cos(60°) = 1/2 = 0,5 (valor notável).' },
    { d: 'MAT', enun: 'A expressão (x + 2)(x − 2) é igual a:', opcoes: ['x² − 4', 'x² + 4', 'x² − 4x', 'x²− 2'], resp: 'x² − 4', expl: 'Caso notável (a+b)(a−b) = a² − b² → x² − 4.' },
    { d: 'MAT', enun: 'A solução da inequação x + 2 > 5 é:', opcoes: ['x > 3', 'x < 3', 'x > 7', 'x = 3'], resp: 'x > 3', expl: 'x > 5 − 2 → x > 3.' },
    { d: 'MAT', enun: 'Num conjunto de dados, a moda é:', opcoes: ['o valor mais frequente', 'a média', 'o valor do meio', 'o maior valor'], resp: 'o valor mais frequente', expl: 'A moda é o valor que aparece mais vezes.' },
    { d: 'PT', enun: 'O episódio de Inês de Castro, em Os Lusíadas, é uma história de:', opcoes: ['amor e morte (tragédia)', 'guerra naval', 'descoberta de terras', 'vingança dos deuses'], resp: 'amor e morte (tragédia)', expl: 'Inês, amada de D. Pedro, é assassinada por razões de Estado: amor e tragédia.' },
    { d: 'PT', enun: 'No «Auto da Barca do Inferno», quem comanda a barca do Paraíso é:', opcoes: ['o Anjo', 'o Diabo', 'o Parvo', 'o Fidalgo'], resp: 'o Anjo', expl: 'O Anjo comanda a barca da Glória; o Diabo a do Inferno.' },
    { d: 'PT', enun: 'Os Lusíadas estão organizados em estrofes de:', opcoes: ['oito versos (oitavas)', 'quatro versos', 'dois versos', 'dez versos'], resp: 'oito versos (oitavas)', expl: 'A oitava camoniana: 8 versos decassílabos, esquema ABABABCC.' },
    { d: 'PT', enun: 'Em «É urgente o amor.», a repetição de «É urgente» ao longo do poema é:', opcoes: ['anáfora', 'metáfora', 'eufemismo', 'comparação'], resp: 'anáfora', expl: 'Repetição no início de versos: anáfora.' },
    { d: 'PT', enun: 'Em «Não o vi.», o pronome está antes do verbo (próclise) por causa:', opcoes: ['da negação', 'do futuro', 'de uma pergunta', 'do imperativo'], resp: 'da negação', expl: 'A negação obriga o pronome a ir para antes do verbo.' },
    { d: 'PT', enun: 'Em «o amor é fogo que arde sem se ver», a figura dominante é:', opcoes: ['antítese', 'anáfora', 'comparação', 'aliteração'], resp: 'antítese', expl: 'Confronta opostos (arde / não se vê): antítese.' },
    { d: 'PT', enun: 'A frase passiva de «O poeta escreveu o poema» é:', opcoes: ['O poema foi escrito pelo poeta.', 'O poema escreveu o poeta.', 'O poeta foi escrito.', 'Escreveu-se o poema.'], resp: 'O poema foi escrito pelo poeta.', expl: 'O CD passa a sujeito e o agente vem com «por».' },
    { d: 'PT', enun: 'O sujeito poético é:', opcoes: ['a voz que fala no poema', 'o autor do poema', 'o leitor', 'a personagem principal'], resp: 'a voz que fala no poema', expl: 'O sujeito poético é a entidade que fala no texto: não é o autor.' },
    { d: 'PT', enun: 'O Velho do Restelo, em Os Lusíadas, representa:', opcoes: ['a voz crítica à expansão marítima', 'o herói da viagem', 'um deus do Olimpo', 'o rei de Portugal'], resp: 'a voz crítica à expansão marítima', expl: 'O Velho do Restelo condena a «vã cobiça» e a «glória de mandar».' },
    { d: 'PT', enun: 'Uma oração introduzida por «porque» é subordinada adverbial:', opcoes: ['causal', 'final', 'temporal', 'condicional'], resp: 'causal', expl: '«Porque» introduz a causa: adverbial causal.' },
    { d: 'MAT', enun: 'A solução de 2x − 6 = 0 é:', opcoes: ['x = 3', 'x = −3', 'x = 6', 'x = 12'], resp: 'x = 3', expl: '2x = 6 → x = 3.' },
    { d: 'MAT', enun: 'tan(45°) é igual a:', opcoes: ['1', '0', '0,5', '0,87'], resp: '1', expl: 'tan(45°) = 1 (valor notável).' },
    { d: 'MAT', enun: 'A expressão (x + 3)² é igual a:', opcoes: ['x² + 6x + 9', 'x² + 9', 'x² + 6x', 'x² + 3x + 9'], resp: 'x² + 6x + 9', expl: 'Caso notável (a+b)² = a² + 2ab + b² → x² + 6x + 9.' },
    { d: 'MAT', enun: 'A média de 4, 6 e 8 é:', opcoes: ['6', '18', '4', '8'], resp: '6', expl: '(4 + 6 + 8) ÷ 3 = 18 ÷ 3 = 6.' },
    { d: 'MAT', enun: 'A solução da inequação 2x ≤ 8 é:', opcoes: ['x ≤ 4', 'x ≥ 4', 'x ≤ 16', 'x = 4'], resp: 'x ≤ 4', expl: 'x ≤ 8 ÷ 2 → x ≤ 4.' }
  ]
};

var DESAFIO_ANOS = [5, 6, 7, 8, 9];

/* Ano escolhido (guardado no dispositivo). Sem escolha = 7.º por defeito. */
var DESAFIO_ANO_KEY = 'edupt_desafio_ano';
function _desafioAno() {
  var a = parseInt(localStorage.getItem(DESAFIO_ANO_KEY));
  return (DESAFIO_ANOS.indexOf(a) !== -1) ? a : 7;
}
function desafioSetAno(ano) {
  localStorage.setItem(DESAFIO_ANO_KEY, ano);
  if (typeof Cloud !== 'undefined' && Cloud.enviarDebounce) { try { Cloud.enviarDebounce(); } catch (e) {} }
  _desafioEstado = { idx: 0, certas: 0, respondido: false, qs: [] }; // reinicia
  desafioRender();
}

/* Semente diária (muda com o dia E com o ano). */
function _desafioHoje() { return new Date().toISOString().slice(0, 10); }
function _desafioSeed(s) { var h = 0; for (var i = 0; i < s.length; i++) { h = (h * 31 + s.charCodeAt(i)) | 0; } return Math.abs(h); }

/* Disciplina do dia, ROTATIVA (o aluno não escolhe — a plataforma alterna
   por ele). Anos com PT (>=7) alternam Mat/PT consoante o dia do ano;
   anos só de Matemática (5.º/6.º) são sempre Mat. As 3 perguntas do dia
   são todas da mesma disciplina, para o desafio ser coerente e rápido. */
function _desafioDisciplina(ano) {
  var banco = DESAFIO_POR_ANO[ano] || [];
  var temPt = banco.some(function (q) { return q.d === 'PT'; });
  if (!temPt) return 'MAT';
  // alterna pela data: dias pares → MAT, ímpares → PT
  var diaDoAno = Math.floor((Date.now() - Date.UTC(new Date().getUTCFullYear(), 0, 0)) / 86400000);
  return diaDoAno % 2 === 0 ? 'MAT' : 'PT';
}

/* 3 perguntas determinísticas do dia: mesmo ano, mesma disciplina (a do dia). */
function _desafioPerguntas() {
  var ano = _desafioAno();
  var disc = _desafioDisciplina(ano);
  var banco = (DESAFIO_POR_ANO[ano] || []).filter(function (q) { return q.d === disc; });
  if (!banco.length) banco = DESAFIO_POR_ANO[ano] || []; // salvaguarda
  var seed = _desafioSeed(_desafioHoje() + '#' + ano + '#' + disc);
  var idxs = [], usados = {};
  for (var k = 0; k < 3 && k < banco.length; k++) {
    var i = (seed + k * 7) % banco.length;
    while (usados[i]) i = (i + 1) % banco.length;
    usados[i] = 1; idxs.push(i);
  }
  return idxs.map(function (i) { return banco[i]; });
}

/* Estado: registo de "feito hoje" é POR ANO (mudar de ano dá novo desafio). */
var DESAFIO_KEY = 'edupt_desafio';
function _desafioLoad() { try { return JSON.parse(localStorage.getItem(DESAFIO_KEY)) || {}; } catch (e) { return {}; } }
function _desafioSave(d) {
  try { localStorage.setItem(DESAFIO_KEY, JSON.stringify(d)); } catch (e) {}
  // sincroniza com a conta (nuvem), para o desafio/conquistas não se perderem ao limpar a cache
  if (typeof Cloud !== 'undefined' && Cloud.enviarDebounce) { try { Cloud.enviarDebounce(); } catch (e) {} }
}
function _desafioFeitoHoje() { var r = _desafioLoad(); return r.dia === _desafioHoje() && r.ano === _desafioAno(); }

var _desafioEstado = { idx: 0, certas: 0, respondido: false, qs: [] };

/* Barra de seleção de ano. Só aparece COM sessão — para o visitante da
   porta de entrada o Desafio é apenas uma amostra, sem pedir o ano. */
function _desafioBarraAno() {
  var semSessao = typeof Cloud !== 'undefined' && Cloud.disponivel && Cloud.disponivel() && (!Cloud.utilizador || !Cloud.utilizador());
  if (semSessao) return '';
  var ano = _desafioAno();
  var h = '<div style="display:flex;align-items:center;gap:.35rem;flex-wrap:wrap;justify-content:center;margin-bottom:.9rem">';
  h += '<span style="font-size:.68rem;font-weight:800;color:rgba(255,255,255,.7);text-transform:uppercase;letter-spacing:.06em;margin-right:.15rem">O teu ano:</span>';
  DESAFIO_ANOS.forEach(function (a) {
    var on = a === ano;
    h += '<button onclick="desafioSetAno(' + a + ')" style="border-radius:999px;padding:3px 11px;font-size:.74rem;font-weight:800;cursor:pointer;font-family:Montserrat,sans-serif;border:1.5px solid ' + (on ? '#fff' : 'rgba(255,255,255,.35)') + ';background:' + (on ? '#fff' : 'transparent') + ';color:' + (on ? '#4a3f7a' : 'rgba(255,255,255,.85)') + '">' + a + '.º</button>';
  });
  h += '</div>';
  return h;
}

/* Renderiza o cartão do desafio em #portal-desafio. */
function desafioRender() {
  var wrap = document.getElementById('portal-desafio');
  if (!wrap) return;
  var streak = (typeof ProgressManager !== 'undefined') ? (ProgressManager.getSummary().streak || 0) : 0;

  if (_desafioFeitoHoje()) {
    var r = _desafioLoad();
    wrap.innerHTML = _desafioCartao(_desafioBarraAno()
      + '<div style="font-size:2.2rem;margin-bottom:.3rem">' + (streak > 1 ? '🔥' : '✅') + '</div>'
      + '<div style="font-size:1.05rem;font-weight:800;color:#fff">Desafio de hoje concluído!</div>'
      + '<div style="font-size:.85rem;color:rgba(255,255,255,.85);margin-top:.2rem">Acertaste ' + (r.certas || 0) + ' de 3'
      + (streak > 1 ? ' · ofensiva de <strong>' + streak + ' dias</strong> 🔥' : '') + '</div>'
      + '<div style="font-size:.78rem;color:rgba(255,255,255,.65);margin-top:.6rem">Volta amanhã para manteres a ofensiva!</div>');
    return;
  }

  if (!_desafioEstado.qs.length) {
    var semSessao = typeof Cloud !== 'undefined' && Cloud.disponivel && Cloud.disponivel() && (!Cloud.utilizador || !Cloud.utilizador());
    var discHoje = _desafioDisciplina(_desafioAno()) === 'PT' ? 'Português' : 'Matemática';
    var titulo = semSessao ? 'Desafio do Dia' : 'Desafio do Dia · ' + _desafioAno() + '.º ano';
    var sub = semSessao
      ? '3 perguntas rápidas para experimentares. Cria conta para guardares a tua ofensiva 🔥 e teres perguntas do teu ano.'
      : 'Hoje são 3 perguntas de <strong>' + discHoje + '</strong>.' + (streak > 1 ? ' Estás em <strong>' + streak + ' dias</strong> seguidos 🔥: não percas a ofensiva!' : ' Começa a tua ofensiva 🔥');
    wrap.innerHTML = _desafioCartao(_desafioBarraAno()
      + '<div style="font-size:2.2rem;margin-bottom:.3rem">🎯</div>'
      + '<div style="font-size:1.15rem;font-weight:800;color:#fff">' + titulo + '</div>'
      + '<div style="font-size:.85rem;color:rgba(255,255,255,.85);margin-top:.25rem">' + sub + '</div>'
      + '<button onclick="desafioStart()" style="margin-top:.9rem;background:#fff;color:#4a3f7a;border:none;border-radius:999px;padding:.65rem 1.6rem;font-family:Montserrat,sans-serif;font-size:.9rem;font-weight:800;cursor:pointer">Começar</button>');
    return;
  }

  _desafioRenderPergunta();
}

function _desafioCartao(interior) {
  return '<div style="background:linear-gradient(135deg,#4a3f7a,#6b5fa0);border-radius:20px;padding:1.5rem;text-align:center;box-shadow:0 8px 24px rgba(74,63,122,.25)">' + interior + '</div>';
}

function desafioStart() {
  _desafioEstado = { idx: 0, certas: 0, respondido: false, qs: _desafioPerguntas() };
  desafioRender();
}

function _desafioRenderPergunta() {
  var wrap = document.getElementById('portal-desafio');
  var e = _desafioEstado;
  var q = e.qs[e.idx];
  if (!q) { _desafioFim(); return; }
  var opts = q.opcoes.slice();

  var h = '<div style="background:var(--white);border:1.5px solid var(--border);border-radius:20px;padding:1.4rem 1.5rem">';
  h += '<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:.9rem">';
  h += '<span style="font-size:.65rem;font-weight:800;letter-spacing:.06em;text-transform:uppercase;background:' + (q.d === 'PT' ? '#ede8f5;color:#4a3f7a' : '#e8f0f7;color:#36527a') + ';border-radius:999px;padding:3px 10px">' + (q.d === 'PT' ? 'Português' : 'Matemática') + ' · ' + _desafioAno() + '.º</span>';
  h += '<span style="font-size:.72rem;font-weight:700;color:var(--ink4)">Pergunta ' + (e.idx + 1) + ' de 3</span>';
  h += '</div>';
  h += '<div style="font-size:.98rem;font-weight:700;color:var(--ink1);line-height:1.5;margin-bottom:1rem">' + q.enun + '</div>';
  h += '<div id="desafio-opts" style="display:grid;gap:.5rem">';
  opts.forEach(function (o) {
    h += '<button class="desafio-opt" onclick="desafioResp(this,\'' + encodeURIComponent(o) + '\')" style="text-align:left;background:var(--white);border:1.5px solid var(--border);border-radius:12px;padding:.75rem 1rem;cursor:pointer;font-family:Montserrat,sans-serif;font-size:.88rem;font-weight:600;color:var(--ink1);transition:all .15s">' + o + '</button>';
  });
  h += '</div>';
  h += '<div id="desafio-fb" style="margin-top:.8rem;font-size:.83rem;min-height:1rem"></div>';
  h += '</div>';
  wrap.innerHTML = h;
  _desafioEstado.respondido = false;
}

function desafioResp(btn, encOpt) {
  var e = _desafioEstado;
  if (e.respondido) return;
  e.respondido = true;
  var q = e.qs[e.idx];
  var certo = decodeURIComponent(encOpt) === q.resp;
  if (certo) e.certas++;

  document.querySelectorAll('#desafio-opts .desafio-opt').forEach(function (b) {
    b.style.cursor = 'default'; b.onclick = null;
    if (b.textContent === q.resp) { b.style.borderColor = '#2e7d52'; b.style.background = '#e8f5ee'; b.style.color = '#1a5c38'; b.style.fontWeight = '800'; }
    else if (b === btn && !certo) { b.style.borderColor = '#c0392b'; b.style.background = '#fdecea'; b.style.color = '#922b21'; }
  });

  var fb = document.getElementById('desafio-fb');
  if (fb) {
    var cor = certo ? '#2e7d52' : '#922b21';
    fb.innerHTML = '<div style="color:' + cor + '"><strong>' + (certo ? '✓ Certo!' : '✗ Era: ' + q.resp) + '</strong> ' + (q.expl || '') + '</div>'
      + '<button onclick="desafioProx()" style="margin-top:.7rem;background:linear-gradient(135deg,#4a3f7a,#6b5fa0);color:#fff;border:none;border-radius:10px;padding:.6rem 1.3rem;font-family:Montserrat,sans-serif;font-size:.84rem;font-weight:800;cursor:pointer">' + (e.idx < 2 ? 'Próxima' : 'Ver resultado') + ' →</button>';
  }
}

function desafioProx() {
  _desafioEstado.idx++;
  if (_desafioEstado.idx >= 3) { _desafioFim(); return; }
  _desafioRenderPergunta();
}

function _desafioFim() {
  var e = _desafioEstado;
  // estatísticas acumuladas para as conquistas (totais que o ProgressManager não guarda)
  var r = _desafioLoad();
  r.dia = _desafioHoje(); r.ano = _desafioAno(); r.certas = e.certas;
  r.feitos = (r.feitos || 0) + 1;                        // total de desafios completados
  r.certasTotal = (r.certasTotal || 0) + e.certas;       // total de respostas certas
  if (e.certas === 3) r.perfeitos = (r.perfeitos || 0) + 1; // total de 3/3
  _desafioSave(r);
  if (typeof ProgressManager !== 'undefined') {
    ProgressManager.record('desafio', 'quiz', { pontuacao: e.certas, total: 3 });
  }
  var streak = (typeof ProgressManager !== 'undefined') ? (ProgressManager.getSummary().streak || 0) : 0;
  // guarda o MAIOR streak já alcançado (para a conquista persistir mesmo que o fogo apague)
  if (streak > (r.maxStreak || 0)) { r.maxStreak = streak; _desafioSave(r); }
  // verifica novas conquistas e avisa
  _desafioVerificaConquistas();
  var emoji = e.certas === 3 ? '🏆' : e.certas === 2 ? '🎯' : e.certas === 1 ? '👍' : '💪';
  document.getElementById('portal-desafio').innerHTML = _desafioCartao(
    '<div style="font-size:2.4rem;margin-bottom:.3rem">' + emoji + '</div>'
    + '<div style="font-size:1.15rem;font-weight:800;color:#fff">Acertaste ' + e.certas + ' de 3!</div>'
    + (streak > 1 ? '<div style="font-size:.95rem;color:#fff;margin-top:.4rem;font-weight:700">🔥 Ofensiva de ' + streak + ' dias!</div>'
      : '<div style="font-size:.85rem;color:rgba(255,255,255,.85);margin-top:.3rem">Começaste a tua ofensiva 🔥</div>')
    + '<div style="font-size:.78rem;color:rgba(255,255,255,.65);margin-top:.6rem">Volta amanhã para um novo desafio!</div>'
  );
  if (typeof eduToast === 'function' && e.certas === 3) eduToast('Boa! 3 em 3 no Desafio do Dia 🏆', 'success');
}

/* ════════════════════════════════════════════════════════════════
   INDICADOR DE OFENSIVA — streak 🔥 + XP sempre visíveis na topbar do
   portal. Lê o ProgressManager e atualiza-se sozinho quando o
   progresso muda (evento edupt:progress). É o que faz o aluno ver a
   ofensiva a crescer cada vez que entra.
   ════════════════════════════════════════════════════════════════ */
function pmUpdateTopbar() {
  var slot = document.querySelector('.site-topbar-actions');
  if (!slot || typeof ProgressManager === 'undefined') return;
  // Sem sessão (mas com o serviço disponível), os chips 🔥/⭐/🏆 não fazem
  // sentido — são pontos sem dono e contradizem o convite a criar conta.
  // Só os mostramos com sessão. Offline (sem Cloud) mantém-se como antes.
  var temCloud = typeof Cloud !== 'undefined' && Cloud.disponivel && Cloud.disponivel();
  var semSessao = temCloud && (!Cloud.utilizador || !Cloud.utilizador());
  if (semSessao) {
    var velho = document.getElementById('pm-portal-stats');
    if (velho) velho.parentNode.removeChild(velho);
    return;
  }
  // contentor próprio dos chips, para NÃO apagar o bloco de auth (login)
  var box = document.getElementById('pm-portal-stats');
  if (!box) {
    box = document.createElement('div');
    box.id = 'pm-portal-stats';
    box.style.cssText = 'display:flex;align-items:center;gap:.5rem';
    slot.insertBefore(box, slot.firstChild); // chips à esquerda, auth à direita
  }
  var hoje = new Date().toISOString().slice(0, 10);
  var ontem = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
  var ehProf = typeof Cloud !== 'undefined' && Cloud.ehProfessor && Cloud.ehProfessor();

  // Professor e aluno têm contas SEPARADAS: o professor lê de edupt_prof
  // (Momento do Professor); o aluno do ProgressManager (Desafio/prática).
  var streak, xp, lastDay, tipFogo, tipXp;
  if (ehProf) {
    var p = {}; try { p = JSON.parse(localStorage.getItem('edupt_prof')) || {}; } catch (e) { p = {}; }
    streak = p.streak || 0; xp = p.xp || 0; lastDay = p.dia || null;
    tipFogo = 'A tua ofensiva 🔥 — dias seguidos a ver o Momento do Professor. Volta todos os dias!';
    tipXp = 'Os teus pontos ⭐ — ganhas XP ao completar o Momento do Professor de cada dia.';
  } else {
    var s = ProgressManager.getSummary();
    streak = s.streak || 0; xp = s.totalXp || 0; lastDay = s.lastDay;
    tipFogo = 'Ofensiva 🔥 — dias seguidos a estudar. Volta todos os dias para a aumentares!';
    tipXp = 'Pontos de experiência (XP) ⭐ — ganhas a praticar, no desafio e a jogar. Quanto mais estudas, mais sobem!';
  }
  var ofensivaViva = lastDay === hoje || lastDay === ontem;

  var h = '';
  if (streak > 0 && ofensivaViva) {
    var apagada = lastDay === ontem;
    h += '<span title="' + tipFogo + '" style="display:inline-flex;align-items:center;gap:.25rem;background:' + (apagada ? '#fff3e0' : '#fdeede') + ';color:#c2410c;border:1px solid ' + (apagada ? '#ffd8a8' : '#f7d3a8') + ';border-radius:999px;padding:4px 11px;font-family:Montserrat,sans-serif;font-size:.82rem;font-weight:800;cursor:help' + (apagada ? ';opacity:.75' : '') + '">🔥 ' + streak + '</span>';
  }
  if (xp > 0) {
    h += '<span title="' + tipXp + '" style="display:inline-flex;align-items:center;gap:.25rem;background:#f0edf7;color:#4a3f7a;border:1px solid #ddd8f5;border-radius:999px;padding:4px 11px;font-family:Montserrat,sans-serif;font-size:.82rem;font-weight:800;cursor:help">⭐ ' + xp + '</span>';
  }
  box.innerHTML = h;            // chips de fogo/XP (recria o conteúdo)
  // 🏆 conquistas é só do aluno (desafio); não mostrar a professores
  if (ehProf) { var cq = document.getElementById('pm-conq-chip'); if (cq) cq.remove(); }
  else _desafioChipConquistas();
}

// Atualiza a topbar ao carregar o portal e sempre que o progresso muda.
document.addEventListener('DOMContentLoaded', function () { pmUpdateTopbar(); });
document.addEventListener('edupt:progress', function () { pmUpdateTopbar(); });
// login/logout: mostra (com sessão) ou esconde (sem sessão) os chips
document.addEventListener('cloud:auth', function () { pmUpdateTopbar(); });
// o Cloud resolve a sessão de forma assíncrona no arranque; reaplica
document.addEventListener('DOMContentLoaded', function () { setTimeout(pmUpdateTopbar, 700); });

/* ════════════════════════════════════════════════════════════════
   CONQUISTAS: metas concretas que reforçam o hábito ("faltam 3 dias
   para os 10 seguidos!"). Lêem-se de ProgressManager (streak/XP) e do
   estado do desafio (maxStreak, feitos, perfeitos, certasTotal).
   Guardadas no dispositivo; cada uma desbloqueia uma vez.
   ════════════════════════════════════════════════════════════════ */
var DESAFIO_CONQUISTAS = [
  { id: 'primeiro',  icon: '🎯', nome: 'Primeiro passo',     desc: 'Completa o teu primeiro desafio.',          meta: function (st) { return [st.feitos, 1]; } },
  { id: 'streak3',   icon: '🔥', nome: 'Em chamas',          desc: '3 dias seguidos.',                          meta: function (st) { return [st.maxStreak, 3]; } },
  { id: 'streak7',   icon: '🔥', nome: 'Semana perfeita',    desc: '7 dias seguidos.',                          meta: function (st) { return [st.maxStreak, 7]; } },
  { id: 'streak30',  icon: '🏔️', nome: 'Imparável',          desc: '30 dias seguidos.',                         meta: function (st) { return [st.maxStreak, 30]; } },
  { id: 'feitos10',  icon: '📅', nome: 'Habituado',          desc: 'Completa 10 desafios.',                     meta: function (st) { return [st.feitos, 10]; } },
  { id: 'feitos50',  icon: '🎖️', nome: 'Veterano',           desc: 'Completa 50 desafios.',                     meta: function (st) { return [st.feitos, 50]; } },
  { id: 'perfeito1', icon: '⭐', nome: 'Pontaria certeira',  desc: 'Acerta as 3 perguntas num desafio.',        meta: function (st) { return [st.perfeitos, 1]; } },
  { id: 'perfeito10',icon: '💯', nome: 'Mestre',             desc: '10 desafios com 3 em 3.',                   meta: function (st) { return [st.perfeitos, 10]; } },
  { id: 'xp100',     icon: '🌱', nome: 'A crescer',          desc: 'Junta 100 XP.',                             meta: function (st) { return [st.xp, 100]; } },
  { id: 'xp500',     icon: '🚀', nome: 'Em órbita',          desc: 'Junta 500 XP.',                             meta: function (st) { return [st.xp, 500]; } }
];

function _desafioStats() {
  var r = _desafioLoad();
  var xp = (typeof ProgressManager !== 'undefined') ? (ProgressManager.getSummary().totalXp || 0) : 0;
  return {
    feitos: r.feitos || 0,
    perfeitos: r.perfeitos || 0,
    certasTotal: r.certasTotal || 0,
    maxStreak: r.maxStreak || 0,
    xp: xp,
    desbloqueadas: r.conquistas || {}
  };
}

/* Marca como desbloqueadas as conquistas atingidas; devolve as NOVAS. */
function _desafioVerificaConquistas() {
  var st = _desafioStats();
  var r = _desafioLoad();
  if (!r.conquistas) r.conquistas = {};
  var novas = [];
  DESAFIO_CONQUISTAS.forEach(function (c) {
    var m = c.meta(st);
    if (m[0] >= m[1] && !r.conquistas[c.id]) {
      r.conquistas[c.id] = _desafioHoje();
      novas.push(c);
    }
  });
  if (novas.length) {
    _desafioSave(r);
    if (typeof eduToast === 'function') {
      novas.forEach(function (c) { eduToast('Conquista desbloqueada: ' + c.icon + ' ' + c.nome + '!', 'success'); });
    }
  }
  if (typeof desafioRenderConquistas === 'function') desafioRenderConquistas();
  return novas;
}

/* Conquistas: chip 🏆 discreto na topbar (ao lado do 🔥 e ⭐), com um
   popover que aparece ao passar o rato. Simples e não invasivo —
   chamado por pmUpdateTopbar. */
function _desafioChipConquistas() {
  var box = document.getElementById('pm-portal-stats');
  if (!box) return;
  var st = _desafioStats();
  var feitas = DESAFIO_CONQUISTAS.filter(function (c) { return st.desbloqueadas[c.id]; }).length;
  // só mostra o chip quando o aluno já tem alguma atividade (XP ou desafios)
  if (st.xp <= 0 && st.feitos <= 0) { var c0 = document.getElementById('pm-conq-chip'); if (c0) c0.remove(); return; }

  var chip = document.getElementById('pm-conq-chip');
  if (!chip) {
    chip = document.createElement('span');
    chip.id = 'pm-conq-chip';
    chip.title = 'Conquistas 🏆 — medalhas que ganhas ao atingir metas (dias seguidos, desafios certos, XP). Passa o rato para veres todas.';
    chip.style.cssText = 'position:relative;display:inline-flex;align-items:center;gap:.25rem;background:#fbf3df;color:#9a6a10;border:1px solid #f0dca8;border-radius:999px;padding:4px 11px;font-family:Montserrat,sans-serif;font-size:.82rem;font-weight:800;cursor:help';
    chip.onmouseenter = function () { var p = document.getElementById('pm-conq-pop'); if (p) p.style.display = 'block'; };
    chip.onmouseleave = function () { var p = document.getElementById('pm-conq-pop'); if (p) p.style.display = 'none'; };
    box.appendChild(chip);
  }
  // conteúdo do chip + popover
  var pop = '<div id="pm-conq-pop" style="display:none;position:absolute;top:130%;right:0;width:300px;max-height:60vh;overflow-y:auto;background:var(--white);border:1.5px solid var(--border);border-radius:14px;box-shadow:0 12px 32px rgba(0,0,0,.18);padding:.85rem;z-index:200;text-align:left;cursor:default">';
  pop += '<div style="font-weight:800;color:var(--ink1);font-size:.85rem;margin-bottom:.5rem">As tuas conquistas · ' + feitas + '/' + DESAFIO_CONQUISTAS.length + '</div>';
  DESAFIO_CONQUISTAS.forEach(function (c) {
    var on = !!st.desbloqueadas[c.id];
    var m = c.meta(st);
    var prog = Math.min(m[0], m[1]);
    pop += '<div style="display:flex;align-items:center;gap:.55rem;padding:.3rem 0;' + (on ? '' : 'opacity:.6') + '">';
    pop += '<span style="font-size:1.15rem;filter:' + (on ? 'none' : 'grayscale(1)') + '">' + c.icon + '</span>';
    pop += '<div style="flex:1;min-width:0">';
    pop += '<div style="font-size:.76rem;font-weight:700;color:var(--ink1)">' + c.nome + (on ? ' <span style="color:#2e7d52">✓</span>' : '') + '</div>';
    if (!on) pop += '<div style="height:4px;background:var(--border);border-radius:999px;overflow:hidden;margin-top:.2rem"><div style="height:100%;width:' + Math.round(prog / m[1] * 100) + '%;background:#c9a84c;border-radius:999px"></div></div>';
    pop += '</div>';
    if (!on) pop += '<span style="font-size:.66rem;color:var(--ink4);white-space:nowrap">' + prog + '/' + m[1] + '</span>';
    pop += '</div>';
  });
  pop += '</div>';
  chip.innerHTML = '🏆 ' + feitas + pop;
}

/* Compatibilidade: chamadas antigas a desafioRenderConquistas redirigem
   para o chip (já não há painel grande no portal). */
function desafioRenderConquistas() { _desafioChipConquistas(); }
