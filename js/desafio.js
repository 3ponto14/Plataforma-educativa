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
    { d: 'MAT', enun: 'Qual destes é um número par?', opcoes: ['14', '7', '9', '21'], resp: '14', expl: 'Os pares terminam em 0, 2, 4, 6 ou 8 — 14 é par.' },
    { d: 'MAT', enun: 'O perímetro de um quadrado de lado 3 cm é:', opcoes: ['12 cm', '9 cm', '6 cm', '3 cm'], resp: '12 cm', expl: 'Perímetro = 4 × lado = 4 × 3 = 12 cm.' },
    { d: 'MAT', enun: '25% corresponde à fração:', opcoes: ['1/4', '1/2', '1/3', '2/5'], resp: '1/4', expl: '25% = 25/100 = 1/4.' },
    { d: 'MAT', enun: 'Quanto é 100 − 37?', opcoes: ['63', '67', '73', '57'], resp: '63', expl: '100 − 37 = 63.' },
    { d: 'MAT', enun: 'Um cubo tem quantas faces?', opcoes: ['6', '4', '8', '12'], resp: '6', expl: 'O cubo tem 6 faces quadradas.' }
  ],
  6: [
    { d: 'MAT', enun: 'Qual é o máximo divisor comum de 12 e 18?', opcoes: ['6', '3', '12', '36'], resp: '6', expl: 'Divisores comuns de 12 e 18: 1, 2, 3, 6 — o maior é 6.' },
    { d: 'MAT', enun: 'Quanto é 2/3 de 9?', opcoes: ['6', '3', '9', '4,5'], resp: '6', expl: '9 ÷ 3 = 3; 3 × 2 = 6.' },
    { d: 'MAT', enun: 'Quanto é 2³ (2 ao cubo)?', opcoes: ['8', '6', '9', '23'], resp: '8', expl: '2³ = 2 × 2 × 2 = 8.' },
    { d: 'MAT', enun: 'A área de um retângulo de 4 por 5 é:', opcoes: ['20', '18', '9', '40'], resp: '20', expl: 'Área = comprimento × largura = 4 × 5 = 20.' },
    { d: 'MAT', enun: '30% de 200 é:', opcoes: ['60', '30', '600', '70'], resp: '60', expl: '30% = 30/100; 200 × 0,3 = 60.' },
    { d: 'MAT', enun: 'Qual destes números é primo?', opcoes: ['13', '15', '21', '9'], resp: '13', expl: '13 só é divisível por 1 e por si próprio — é primo.' },
    { d: 'MAT', enun: 'Quanto é 1/2 + 1/3?', opcoes: ['5/6', '2/5', '1/6', '2/6'], resp: '5/6', expl: 'Reduzindo a sextos: 3/6 + 2/6 = 5/6.' },
    { d: 'MAT', enun: 'Se 3 cadernos custam 6 €, quanto custam 5 cadernos?', opcoes: ['10 €', '9 €', '12 €', '8 €'], resp: '10 €', expl: 'Cada caderno = 2 €; 5 × 2 = 10 € (proporcionalidade direta).' },
    { d: 'MAT', enun: 'Quanto é 4,2 × 10?', opcoes: ['42', '4,2', '420', '0,42'], resp: '42', expl: 'Multiplicar por 10 desloca a vírgula uma casa: 42.' },
    { d: 'MAT', enun: 'O volume de um cubo de aresta 2 é:', opcoes: ['8', '6', '4', '12'], resp: '8', expl: 'Volume = aresta³ = 2 × 2 × 2 = 8.' }
  ],
  7: [
    { d: 'MAT', enun: 'Quanto é (−5) + 8?', opcoes: ['3', '−3', '13', '−13'], resp: '3', expl: '−5 + 8 = 3.' },
    { d: 'MAT', enun: 'Quanto é (−4) × (−3)?', opcoes: ['12', '−12', '7', '−7'], resp: '12', expl: 'Menos vezes menos dá mais: 4 × 3 = 12.' },
    { d: 'MAT', enun: 'A solução de x + 7 = 12 é:', opcoes: ['x = 5', 'x = 19', 'x = 7', 'x = −5'], resp: 'x = 5', expl: 'x = 12 − 7 = 5.' },
    { d: 'MAT', enun: 'A soma dos ângulos internos de um triângulo é:', opcoes: ['180°', '360°', '90°', '270°'], resp: '180°', expl: 'Em qualquer triângulo, os ângulos internos somam 180°.' },
    { d: 'MAT', enun: 'Quanto é (−3)²?', opcoes: ['9', '−9', '6', '−6'], resp: '9', expl: '(−3)² = (−3) × (−3) = 9.' },
    { d: 'PT', enun: 'Em «O vento sussurrava entre as árvores.», a figura de estilo é:', opcoes: ['Personificação', 'Comparação', 'Hipérbole', 'Metáfora'], resp: 'Personificação', expl: 'Sussurrar é próprio de seres humanos — atribuído ao vento, é personificação.' },
    { d: 'PT', enun: 'Em «A Rita comeu o bolo.», «o bolo» é:', opcoes: ['Complemento direto', 'Sujeito', 'Complemento indireto', 'Vocativo'], resp: 'Complemento direto', expl: 'Comeu o quê? O bolo — substituível por «o».' },
    { d: 'PT', enun: 'Uma narrativa com animais e uma moralidade é uma:', opcoes: ['Fábula', 'Lenda', 'Crónica', 'Biografia'], resp: 'Fábula', expl: 'A fábula tem animais que agem como pessoas e termina com uma lição.' },
    { d: 'PT', enun: 'A palavra «infeliz» forma-se por:', opcoes: ['Prefixação', 'Sufixação', 'Composição', 'Onomatopeia'], resp: 'Prefixação', expl: 'in- + feliz: acrescenta-se um prefixo negativo.' },
    { d: 'PT', enun: 'Quem conta a história num texto narrativo é o:', opcoes: ['Narrador', 'Autor', 'Sujeito poético', 'Leitor'], resp: 'Narrador', expl: 'O narrador conta; o autor é a pessoa real que escreveu.' }
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
    { d: 'PT', enun: 'A palavra «entristecer» forma-se por:', opcoes: ['Parassíntese', 'Sufixação', 'Prefixação', 'Composição'], resp: 'Parassíntese', expl: 'en- + triste + -ecer ao mesmo tempo — parassíntese.' }
  ],
  9: [
    { d: 'MAT', enun: 'A solução de x² = 49 é:', opcoes: ['x = 7 ou x = −7', 'x = 7', 'x = 24,5', 'x = 2401'], resp: 'x = 7 ou x = −7', expl: 'x² = 49 tem duas soluções: 7 e −7 (ambas ao quadrado dão 49).' },
    { d: 'MAT', enun: 'Quanto é √49?', opcoes: ['7', '8', '6', '24,5'], resp: '7', expl: '7 × 7 = 49, logo √49 = 7.' },
    { d: 'MAT', enun: 'Num triângulo retângulo, sen(30°) é igual a:', opcoes: ['0,5', '1', '0', '0,87'], resp: '0,5', expl: 'sen(30°) = 1/2 = 0,5 (valor notável).' },
    { d: 'MAT', enun: 'A expressão 2(x + 3) é igual a:', opcoes: ['2x + 6', '2x + 3', 'x + 6', '2x + 5'], resp: '2x + 6', expl: 'Propriedade distributiva: 2·x + 2·3 = 2x + 6.' },
    { d: 'MAT', enun: 'A probabilidade de um acontecimento certo é:', opcoes: ['1', '0', '0,5', '100'], resp: '1', expl: 'Um acontecimento certo tem probabilidade 1 (100%).' },
    { d: 'PT', enun: 'Quem é o autor de «Os Lusíadas»?', opcoes: ['Luís de Camões', 'Fernando Pessoa', 'Gil Vicente', 'Eça de Queirós'], resp: 'Luís de Camões', expl: 'A epopeia «Os Lusíadas» (1572) é de Luís Vaz de Camões.' },
    { d: 'PT', enun: 'No «Auto da Barca do Inferno», o Onzeneiro representa o pecado da:', opcoes: ['Usura (cobiça)', 'Preguiça', 'Gula', 'Vaidade'], resp: 'Usura (cobiça)', expl: 'O Onzeneiro emprestava dinheiro a juros excessivos — figura-tipo da usura.' },
    { d: 'PT', enun: 'O Adamastor, em «Os Lusíadas», simboliza:', opcoes: ['os perigos do mar desconhecido', 'o amor entre os marinheiros', 'a riqueza da Índia', 'a paz após a viagem'], resp: 'os perigos do mar desconhecido', expl: 'O gigante do Cabo das Tormentas personifica os perigos da navegação.' },
    { d: 'PT', enun: 'Em «Disse que vinha», a oração «que vinha» é subordinada:', opcoes: ['Substantiva completiva', 'Adjetiva relativa', 'Adverbial causal', 'Coordenada'], resp: 'Substantiva completiva', expl: 'Completa o sentido do verbo «dizer» — substantiva completiva.' },
    { d: 'PT', enun: 'Um verso de 10 sílabas métricas chama-se:', opcoes: ['Decassílabo', 'Redondilha maior', 'Alexandrino', 'Octossílabo'], resp: 'Decassílabo', expl: 'Dez sílabas métricas = decassílabo (a medida de Os Lusíadas).' }
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
function _desafioSave(d) { try { localStorage.setItem(DESAFIO_KEY, JSON.stringify(d)); } catch (e) {} }
function _desafioFeitoHoje() { var r = _desafioLoad(); return r.dia === _desafioHoje() && r.ano === _desafioAno(); }

var _desafioEstado = { idx: 0, certas: 0, respondido: false, qs: [] };

/* Barra de seleção de ano (sempre visível no topo do cartão). */
function _desafioBarraAno() {
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
    var discHoje = _desafioDisciplina(_desafioAno()) === 'PT' ? 'Português' : 'Matemática';
    wrap.innerHTML = _desafioCartao(_desafioBarraAno()
      + '<div style="font-size:2.2rem;margin-bottom:.3rem">🎯</div>'
      + '<div style="font-size:1.15rem;font-weight:800;color:#fff">Desafio do Dia · ' + _desafioAno() + '.º ano</div>'
      + '<div style="font-size:.85rem;color:rgba(255,255,255,.85);margin-top:.25rem">Hoje são 3 perguntas de <strong>' + discHoje + '</strong>.'
      + (streak > 1 ? ' Estás em <strong>' + streak + ' dias</strong> seguidos 🔥 — não percas a ofensiva!' : ' Começa a tua ofensiva 🔥') + '</div>'
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
  _desafioSave({ dia: _desafioHoje(), ano: _desafioAno(), certas: e.certas });
  if (typeof ProgressManager !== 'undefined') {
    ProgressManager.record('desafio', 'quiz', { pontuacao: e.certas, total: 3 });
  }
  var streak = (typeof ProgressManager !== 'undefined') ? (ProgressManager.getSummary().streak || 0) : 0;
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
  var s = ProgressManager.getSummary();
  var streak = s.streak || 0, xp = s.totalXp || 0;
  // só mostra streak se houver ofensiva ativa hoje ou ontem (não "fogo morto")
  var hoje = new Date().toISOString().slice(0, 10);
  var ontem = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
  var ofensivaViva = s.lastDay === hoje || s.lastDay === ontem;

  var h = '<div class="pm-portal-stats" style="display:flex;align-items:center;gap:.5rem">';
  if (streak > 0 && ofensivaViva) {
    var apagada = s.lastDay === ontem; // fogo prestes a apagar se não fizer hoje
    h += '<span title="' + (apagada ? 'Faz o desafio de hoje para manteres a ofensiva!' : 'Dias seguidos a estudar') + '" style="display:inline-flex;align-items:center;gap:.25rem;background:' + (apagada ? '#fff3e0' : '#fdeede') + ';color:#c2410c;border:1px solid ' + (apagada ? '#ffd8a8' : '#f7d3a8') + ';border-radius:999px;padding:4px 11px;font-family:Montserrat,sans-serif;font-size:.82rem;font-weight:800' + (apagada ? ';opacity:.75' : '') + '">🔥 ' + streak + '</span>';
  }
  if (xp > 0) {
    h += '<span title="Pontos de experiência" style="display:inline-flex;align-items:center;gap:.25rem;background:#f0edf7;color:#4a3f7a;border:1px solid #ddd8f5;border-radius:999px;padding:4px 11px;font-family:Montserrat,sans-serif;font-size:.82rem;font-weight:800">⭐ ' + xp + '</span>';
  }
  h += '</div>';
  slot.innerHTML = (streak > 0 && ofensivaViva) || xp > 0 ? h : '';
}

// Atualiza a topbar ao carregar o portal e sempre que o progresso muda.
document.addEventListener('DOMContentLoaded', function () { pmUpdateTopbar(); });
document.addEventListener('edupt:progress', function () { pmUpdateTopbar(); });
