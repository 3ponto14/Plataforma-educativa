/* ════════════════════════════════════════════════════════════════
   desafio.js — Desafio do Dia (portal)
   3 perguntas por dia, sempre as mesmas no mesmo dia (semente = data),
   mistura de Matemática e Português. Cria HÁBITO: ao acertar, soma XP e
   mantém o streak 🔥 — reutiliza o ProgressManager (shared.js), por isso
   o streak e o XP são OS MESMOS do resto da plataforma. Guardado no
   dispositivo (localStorage), sem contas nem servidor.
   ════════════════════════════════════════════════════════════════ */

/* Banco curado e leve (não depende dos cursos). Perguntas rápidas,
   variadas e de cultura escolar geral — Mat e PT do 3.º ciclo. */
var DESAFIO_BANCO = [
  // ── Português ──
  { d: 'PT', enun: 'Em «O vento sussurrava entre as árvores.», a figura de estilo é:', opcoes: ['Personificação', 'Comparação', 'Hipérbole', 'Metáfora'], resp: 'Personificação', expl: 'Sussurrar é próprio de seres humanos — atribuído ao vento, é personificação.' },
  { d: 'PT', enun: 'Em «A Rita comeu o bolo.», «o bolo» é:', opcoes: ['Complemento direto', 'Sujeito', 'Complemento indireto', 'Vocativo'], resp: 'Complemento direto', expl: 'Comeu o quê? O bolo — substituível por «o»: comeu-o.' },
  { d: 'PT', enun: 'Qual é o autor de «Os Lusíadas»?', opcoes: ['Luís de Camões', 'Fernando Pessoa', 'Gil Vicente', 'Eça de Queirós'], resp: 'Luís de Camões', expl: 'A epopeia «Os Lusíadas» (1572) é de Luís Vaz de Camões.' },
  { d: 'PT', enun: 'Uma estrofe de quatro versos chama-se:', opcoes: ['Quadra', 'Terceto', 'Oitava', 'Dístico'], resp: 'Quadra', expl: '2 = dístico; 3 = terceto; 4 = quadra; 8 = oitava.' },
  { d: 'PT', enun: 'O plural de «cão» é:', opcoes: ['cães', 'cãos', 'cães-es', 'cans'], resp: 'cães', expl: 'Plural irregular: cão → cães (como pão → pães).' },
  { d: 'PT', enun: 'Em «Estudei muito, mas a nota foi baixa.», «mas» liga orações:', opcoes: ['Adversativas', 'Copulativas', 'Disjuntivas', 'Conclusivas'], resp: 'Adversativas', expl: '«Mas» exprime oposição/contraste — coordenação adversativa.' },
  { d: 'PT', enun: 'Em «veloz como o vento», a figura de estilo é:', opcoes: ['Comparação', 'Metáfora', 'Personificação', 'Antítese'], resp: 'Comparação', expl: 'A palavra «como» liga os dois elementos — comparação.' },
  { d: 'PT', enun: 'Quem conta a história num texto narrativo é o:', opcoes: ['Narrador', 'Autor', 'Sujeito poético', 'Leitor'], resp: 'Narrador', expl: 'O narrador é a entidade que conta; o autor é a pessoa real que escreveu.' },
  { d: 'PT', enun: 'A palavra «infeliz» forma-se por:', opcoes: ['Prefixação', 'Sufixação', 'Composição', 'Onomatopeia'], resp: 'Prefixação', expl: 'in- + feliz: acrescenta-se um prefixo de valor negativo.' },
  { d: 'PT', enun: 'No discurso indireto, «hoje» passa a:', opcoes: ['naquele dia', 'amanhã', 'ontem', 'agora'], resp: 'naquele dia', expl: 'hoje → naquele dia; amanhã → no dia seguinte; aqui → ali.' },
  { d: 'PT', enun: 'Em «Pedro, fecha a porta!», a palavra «Pedro» é:', opcoes: ['Vocativo', 'Sujeito', 'Complemento direto', 'Predicado'], resp: 'Vocativo', expl: 'É um chamamento, separado por vírgula — vocativo.' },
  { d: 'PT', enun: 'Uma narrativa com animais e uma moralidade é uma:', opcoes: ['Fábula', 'Lenda', 'Crónica', 'Biografia'], resp: 'Fábula', expl: 'A fábula tem animais que agem como pessoas e termina com uma lição.' },

  // ── Matemática ──
  { d: 'MAT', enun: 'Quanto é (−5) + 8?', opcoes: ['3', '−3', '13', '−13'], resp: '3', expl: '−5 + 8 = 3 (avança 8 a partir de −5).' },
  { d: 'MAT', enun: 'Quanto é (−4) × (−3)?', opcoes: ['12', '−12', '7', '−7'], resp: '12', expl: 'Menos vezes menos dá mais: 4 × 3 = 12.' },
  { d: 'MAT', enun: 'Metade de 3/4 é:', opcoes: ['3/8', '3/2', '6/4', '1/4'], resp: '3/8', expl: 'Metade = ÷2: (3/4) ÷ 2 = 3/8.' },
  { d: 'MAT', enun: 'Quanto é 2³ (2 ao cubo)?', opcoes: ['8', '6', '9', '23'], resp: '8', expl: '2³ = 2 × 2 × 2 = 8.' },
  { d: 'MAT', enun: '25% de 80 é:', opcoes: ['20', '25', '40', '15'], resp: '20', expl: '25% = 1/4; 80 ÷ 4 = 20.' },
  { d: 'MAT', enun: 'A solução de x + 7 = 12 é:', opcoes: ['x = 5', 'x = 19', 'x = 7', 'x = −5'], resp: 'x = 5', expl: 'x = 12 − 7 = 5.' },
  { d: 'MAT', enun: 'Quanto é √49?', opcoes: ['7', '8', '6', '24,5'], resp: '7', expl: '7 × 7 = 49, logo √49 = 7.' },
  { d: 'MAT', enun: 'A soma dos ângulos internos de um triângulo é:', opcoes: ['180°', '360°', '90°', '270°'], resp: '180°', expl: 'Em qualquer triângulo, os ângulos internos somam sempre 180°.' },
  { d: 'MAT', enun: 'Quanto é 0,1 + 0,2?', opcoes: ['0,3', '0,12', '0,03', '3'], resp: '0,3', expl: '0,1 + 0,2 = 0,3 (uma décima + duas décimas).' },
  { d: 'MAT', enun: 'O perímetro de um quadrado de lado 5 é:', opcoes: ['20', '25', '10', '15'], resp: '20', expl: 'Perímetro = 4 × lado = 4 × 5 = 20.' },
  { d: 'MAT', enun: 'Qual destes números é primo?', opcoes: ['7', '9', '15', '21'], resp: '7', expl: '7 só é divisível por 1 e por si próprio — é primo.' },
  { d: 'MAT', enun: 'Quanto é 3/5 em percentagem?', opcoes: ['60%', '35%', '53%', '15%'], resp: '60%', expl: '3 ÷ 5 = 0,6 = 60%.' }
];

/* Semente diária: o mesmo dia dá sempre as mesmas 3 perguntas. */
function _desafioHoje() { return new Date().toISOString().slice(0, 10); }
function _desafioSeed(s) { var h = 0; for (var i = 0; i < s.length; i++) { h = (h * 31 + s.charCodeAt(i)) | 0; } return Math.abs(h); }

/* Escolhe 3 perguntas determinísticas do dia (2 de uma área, 1 da outra,
   alternando conforme o dia para variar). */
function _desafioPerguntas() {
  var seed = _desafioSeed(_desafioHoje());
  var pt = DESAFIO_BANCO.filter(function (q) { return q.d === 'PT'; });
  var mat = DESAFIO_BANCO.filter(function (q) { return q.d === 'MAT'; });
  function pick(arr, n, off) {
    var out = [], usados = {};
    for (var k = 0; k < n; k++) {
      var i = (seed + off + k * 7) % arr.length;
      while (usados[i]) i = (i + 1) % arr.length;
      usados[i] = 1; out.push(arr[i]);
    }
    return out;
  }
  // dias pares: 2 PT + 1 MAT; ímpares: 1 PT + 2 MAT
  var par = seed % 2 === 0;
  var qs = par ? pick(pt, 2, 0).concat(pick(mat, 1, 3)) : pick(pt, 1, 0).concat(pick(mat, 2, 3));
  // baralhar a ordem (determinístico)
  for (var i = qs.length - 1; i > 0; i--) { var j = (seed + i) % (i + 1); var t = qs[i]; qs[i] = qs[j]; qs[j] = t; }
  return qs;
}

/* Estado local do desafio (separado do progresso geral). */
var DESAFIO_KEY = 'edupt_desafio';
function _desafioLoad() { try { return JSON.parse(localStorage.getItem(DESAFIO_KEY)) || {}; } catch (e) { return {}; } }
function _desafioSave(d) { try { localStorage.setItem(DESAFIO_KEY, JSON.stringify(d)); } catch (e) {} }
function _desafioFeitoHoje() { return _desafioLoad().dia === _desafioHoje(); }

var _desafioEstado = { idx: 0, certas: 0, respondido: false, qs: [] };

/* Renderiza o cartão do desafio no contentor #portal-desafio. */
function desafioRender() {
  var wrap = document.getElementById('portal-desafio');
  if (!wrap) return;

  var streak = (typeof ProgressManager !== 'undefined') ? (ProgressManager.getSummary().streak || 0) : 0;

  // Já feito hoje → estado "concluído" com o streak
  if (_desafioFeitoHoje()) {
    var r = _desafioLoad();
    wrap.innerHTML = _desafioCartao(
      '<div style="font-size:2.2rem;margin-bottom:.3rem">' + (streak > 1 ? '🔥' : '✅') + '</div>'
      + '<div style="font-size:1.05rem;font-weight:800;color:#fff">Desafio de hoje concluído!</div>'
      + '<div style="font-size:.85rem;color:rgba(255,255,255,.85);margin-top:.2rem">Acertaste ' + (r.certas || 0) + ' de 3'
      + (streak > 1 ? ' · ofensiva de <strong>' + streak + ' dias</strong> 🔥' : '') + '</div>'
      + '<div style="font-size:.78rem;color:rgba(255,255,255,.65);margin-top:.6rem">Volta amanhã para manteres a ofensiva!</div>'
    );
    return;
  }

  // Por começar
  if (!_desafioEstado.qs.length) {
    wrap.innerHTML = _desafioCartao(
      '<div style="font-size:2.2rem;margin-bottom:.3rem">🎯</div>'
      + '<div style="font-size:1.15rem;font-weight:800;color:#fff">Desafio do Dia</div>'
      + '<div style="font-size:.85rem;color:rgba(255,255,255,.85);margin-top:.25rem">3 perguntas rápidas de Matemática e Português.'
      + (streak > 1 ? ' Estás em <strong>' + streak + ' dias</strong> seguidos 🔥 — não percas a ofensiva!' : ' Começa a tua ofensiva 🔥') + '</div>'
      + '<button onclick="desafioStart()" style="margin-top:.9rem;background:#fff;color:#4a3f7a;border:none;border-radius:999px;padding:.65rem 1.6rem;font-family:Montserrat,sans-serif;font-size:.9rem;font-weight:800;cursor:pointer">Começar</button>'
    );
    return;
  }

  // A decorrer
  _desafioRenderPergunta();
}

function _desafioCartao(interior) {
  return '<div style="background:linear-gradient(135deg,#4a3f7a,#6b5fa0);border-radius:20px;padding:1.5rem 1.5rem;text-align:center;box-shadow:0 8px 24px rgba(74,63,122,.25)">' + interior + '</div>';
}

function desafioStart() {
  _desafioEstado = { idx: 0, certas: 0, respondido: false, qs: _desafioPerguntas() };
  desafioRender();
}

function _desafioRenderPergunta() {
  var wrap = document.getElementById('portal-desafio');
  var e = _desafioEstado;
  var q = e.qs[e.idx];
  var opts = q.opcoes.slice();

  var h = '<div style="background:var(--white);border:1.5px solid var(--border);border-radius:20px;padding:1.4rem 1.5rem">';
  h += '<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:.9rem">';
  h += '<span style="font-size:.65rem;font-weight:800;letter-spacing:.06em;text-transform:uppercase;background:' + (q.d === 'PT' ? '#ede8f5;color:#4a3f7a' : '#e8f0f7;color:#36527a') + ';border-radius:999px;padding:3px 10px">' + (q.d === 'PT' ? 'Português' : 'Matemática') + '</span>';
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
  var escolha = decodeURIComponent(encOpt);
  var certo = escolha === q.resp;
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
  var e = _desafioEstado;
  e.idx++;
  if (e.idx >= 3) { _desafioFim(); return; }
  _desafioRenderPergunta();
}

function _desafioFim() {
  var e = _desafioEstado;
  // marca como feito hoje e regista no ProgressManager (XP + streak partilhados)
  _desafioSave({ dia: _desafioHoje(), certas: e.certas });
  if (typeof ProgressManager !== 'undefined') {
    // capId próprio para não interferir com os capítulos dos cursos
    ProgressManager.record('desafio', 'quiz', { pontuacao: e.certas, total: 3 });
  }
  var streak = (typeof ProgressManager !== 'undefined') ? (ProgressManager.getSummary().streak || 0) : 0;
  var emoji = e.certas === 3 ? '🏆' : e.certas === 2 ? '🎯' : e.certas === 1 ? '👍' : '💪';
  var wrap = document.getElementById('portal-desafio');
  wrap.innerHTML = _desafioCartao(
    '<div style="font-size:2.4rem;margin-bottom:.3rem">' + emoji + '</div>'
    + '<div style="font-size:1.15rem;font-weight:800;color:#fff">Acertaste ' + e.certas + ' de 3!</div>'
    + (streak > 1 ? '<div style="font-size:.95rem;color:#fff;margin-top:.4rem;font-weight:700">🔥 Ofensiva de ' + streak + ' dias!</div>'
                   : '<div style="font-size:.85rem;color:rgba(255,255,255,.85);margin-top:.3rem">Começaste a tua ofensiva 🔥</div>')
    + '<div style="font-size:.78rem;color:rgba(255,255,255,.65);margin-top:.6rem">Volta amanhã para um novo desafio!</div>'
  );
  if (typeof eduToast === 'function' && e.certas === 3) eduToast('Boa! 3 em 3 no Desafio do Dia 🏆', 'success');
}
