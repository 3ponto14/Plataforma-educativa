/* ════════════════════════════════════════════════════════════════
   games-edu.js — Jogos EDUCATIVOS por faixa etária (lazy-loaded)
   Um único construtor GameEdu(panelId, modo, qFn, level) faz 3 modos:
     'corrida'     — Corrida de Cálculo: responder rápido contra o tempo
     'pares'       — Caça ao Par: associar enunciado ↔ resposta (memória)
     'vfrelampago' — V/F Relâmpago: afirmações certas/erradas contra o tempo
   Todos usam qFn(level) → {q, opts:[4 strings], ans} do conteúdo do ano.
   ES5 only. Sem frameworks.
   ════════════════════════════════════════════════════════════════ */
function GameEdu(panelId, modo, qFn, level) {
  var self = this;
  self.panelId = panelId;
  self.modo = modo;
  self.qFn = qFn || function () { return null; };
  self.level = level || 'medio';
  self.el = document.getElementById(panelId);
  self.timer = null;
  if (!self.el) return;
  self.renderStart();
}

GameEdu.prototype._meta = function () {
  if (this.modo === 'corrida') return { titulo: 'Corrida de Cálculo', icone: 'ph-timer', cor: '#2f9e63',
    desc: 'Quantas questões consegues acertar contra o relógio?',
    regras: '<b>Como jogar:</b><br>• Tens <b>60 segundos</b>.<br>• Em cada questão, escolhe a opção certa entre as 4.<br>• Cada acerto vale <b>1 ponto</b> — erros não tiram pontos.<br>• Responde o mais rápido que conseguires para somar o máximo!' };
  if (this.modo === 'pares') return { titulo: 'Caça ao Par', icone: 'ph-cards', cor: '#7b61c4',
    desc: 'Um jogo de memória com a matéria do teu ano.',
    regras: '<b>Como jogar:</b><br>• Há <b>8 cartas</b> viradas para baixo: 4 questões e 4 respostas.<br>• Toca em duas para as virar.<br>• Se a questão e a resposta <b>combinarem</b>, o par fica resolvido.<br>• Se não, viram-se de novo — <b>memoriza</b> onde estão!<br>• Encontra os 4 pares com o menor número de jogadas.' };
  return { titulo: 'V/F Relâmpago', icone: 'ph-lightning', cor: '#c4892f',
    desc: 'Verdadeiro ou Falso, contra o tempo.',
    regras: '<b>Como jogar:</b><br>• Tens <b>45 segundos</b>.<br>• Aparece uma afirmação com uma resposta.<br>• Decide se está <b>Verdadeira ✓</b> ou <b>Falsa ✗</b>.<br>• Cada acerto vale <b>1 ponto</b>. Pensa depressa!' };
};

GameEdu.prototype.renderStart = function () {
  var m = this._meta();
  this.el.innerHTML =
    '<div class="edu-game-card" style="--eg:' + m.cor + '">' +
    '  <div class="edu-game-head"><i class="ph ' + m.icone + '"></i> ' + m.titulo + '</div>' +
    '  <p class="edu-game-desc">' + m.desc + '</p>' +
    '  <div class="edu-rules">' + m.regras + '</div>' +
    '  <button class="btn btn-primary edu-game-start" onclick="_eduStart(\'' + this.panelId + '\')"><i class="ph ph-play"></i> Começar</button>' +
    '</div>';
};

// ── helper: pede uma questão válida ao provedor do ano ──
GameEdu.prototype.nextQ = function () {
  for (var i = 0; i < 8; i++) {
    var q = this.qFn(this.level);
    if (q && q.q && q.opts && q.opts.length === 4 && q.ans >= 0 && q.ans < 4) return q;
  }
  return null;
};

/* ───────────── MODO 1: CORRIDA DE CÁLCULO ───────────── */
GameEdu.prototype.startCorrida = function () {
  var self = this;
  self.score = 0; self.tempo = 60; self.over = false;
  self._tick();
  self._corridaQ();
};
GameEdu.prototype._tick = function () {
  var self = this;
  if (self.timer) clearInterval(self.timer);
  self.timer = setInterval(function () {
    self.tempo--;
    var t = document.getElementById(self.panelId + '-time');
    if (t) t.textContent = self.tempo + 's';
    if (self.tempo <= 0) { clearInterval(self.timer); self.endTimed(); }
  }, 1000);
};
GameEdu.prototype._corridaQ = function () {
  var self = this;
  var q = self.nextQ();
  if (!q) { self.endTimed(); return; }
  var opts = q.opts.map(function (o, i) {
    return '<button class="edu-opt" onclick="_eduAns(\'' + self.panelId + '\',' + i + ')">' +
      (typeof formatMath === 'function' ? formatMath(o) : o) + '</button>';
  }).join('');
  self.curAns = q.ans;
  self.el.innerHTML =
    '<div class="edu-game-card" style="--eg:#2f9e63">' +
    '  <div class="edu-game-bar"><span><i class="ph ph-trophy"></i> <b id="' + self.panelId + '-score">' + self.score + '</b></span>' +
    '  <span class="edu-time" id="' + self.panelId + '-time">' + self.tempo + 's</span></div>' +
    '  <div class="edu-q">' + (typeof formatMath === 'function' ? formatMath(q.q) : q.q) + '</div>' +
    '  <div class="edu-opts">' + opts + '</div>' +
    '</div>';
};

/* ───────────── MODO 2: V/F RELÂMPAGO ───────────── */
GameEdu.prototype.startVF = function () {
  var self = this;
  self.score = 0; self.tempo = 45; self.over = false;
  self._tick();
  self._vfQ();
};
GameEdu.prototype._vfQ = function () {
  var self = this;
  var q = self.nextQ();
  if (!q) { self.endTimed(); return; }
  // monta uma afirmação: "<enunciado> A resposta é <opção>." — V se for a correta
  var mostrarCorreta = Math.random() < 0.5;
  var idx = mostrarCorreta ? q.ans : (function () {
    var o; do { o = Math.floor(Math.random() * 4); } while (o === q.ans); return o;
  })();
  self.vfVerdade = mostrarCorreta;
  var afirm = q.q + ' &nbsp;<b>Resposta: ' + (typeof formatMath === 'function' ? formatMath(q.opts[idx]) : q.opts[idx]) + '</b>';
  self.el.innerHTML =
    '<div class="edu-game-card" style="--eg:#c4892f">' +
    '  <div class="edu-game-bar"><span><i class="ph ph-trophy"></i> <b id="' + self.panelId + '-score">' + self.score + '</b></span>' +
    '  <span class="edu-time" id="' + self.panelId + '-time">' + self.tempo + 's</span></div>' +
    '  <div class="edu-q">' + afirm + '</div>' +
    '  <div class="edu-vf-btns">' +
    '    <button class="edu-vf edu-vf-v" onclick="_eduVF(\'' + self.panelId + '\',true)"><i class="ph ph-check"></i> Verdadeiro</button>' +
    '    <button class="edu-vf edu-vf-f" onclick="_eduVF(\'' + self.panelId + '\',false)"><i class="ph ph-x"></i> Falso</button>' +
    '  </div>' +
    '</div>';
};

// Encurta um enunciado para caber numa carta de memória:
// remove HTML, prefixos verbais ("Calcula", "Qual é", "Sendo … ,"),
// e devolve a parte essencial (a expressão a calcular).
GameEdu.prototype.curtaQ = function (q) {
  if (!q) return '';
  var s = String(q).replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
  // "Sendo f(x) = …, calcula f'(-3)." → fica "f'(-3), f(x)=…"? Simplificamos:
  // tira a parte "Sendo " inicial e junta o pedido ao fim.
  s = s.replace(/^Sendo\s+/i, '');
  // remove verbos de comando comuns no início
  s = s.replace(/^(Calcula(?:r)?|Determina(?:r)?|Indica(?:r)?|Qual é (?:o|a)?|Quanto (?:é|vale)|Resolve|Simplifica|Escreve)\s*:?\s*/i, '');
  // remove pontuação final e "."
  s = s.replace(/[.?]\s*$/, '').trim();
  return s;
};

/* ───────────── MODO 3: CAÇA AO PAR (memória) ───────────── */
GameEdu.prototype.startPares = function () {
  var self = this;
  self.pairsFound = 0; self.flipped = []; self.lock = false; self.moves = 0;
  // 4 questões CURTAS → 8 cartas (Q + R). Cartas de memória precisam de
  // texto curto, por isso encurtamos o enunciado e evitamos problemas longos.
  var qs = [], seen = {};
  for (var tries = 0; tries < 40 && qs.length < 4; tries++) {
    var q = self.nextQ();
    if (!q) continue;
    var curta = self.curtaQ(q.q);
    if (!curta || curta.length > 38) continue;     // só enunciados curtos
    if (seen[curta]) continue;                     // sem repetir
    seen[curta] = true;
    qs.push({ q: curta, resp: q.opts[q.ans] });
  }
  if (qs.length < 4) { self.el.innerHTML = '<div class="edu-game-card"><p class="edu-game-desc">A preparar o jogo… toca em "Começar" outra vez.</p><button class="btn btn-primary" style="margin-top:.8rem" onclick="_eduStart(\'' + self.panelId + '\')">↻ Tentar</button></div>'; return; }
  var cards = [];
  qs.forEach(function (q, k) {
    cards.push({ pair: k, txt: q.q, tipo: 'q' });
    cards.push({ pair: k, txt: String(q.resp), tipo: 'r' });
  });
  // baralhar
  for (var j = cards.length - 1; j > 0; j--) { var r = Math.floor(Math.random() * (j + 1)); var t = cards[j]; cards[j] = cards[r]; cards[r] = t; }
  self.cards = cards;
  self.renderPares();
};
GameEdu.prototype.renderPares = function () {
  var self = this;
  var cells = self.cards.map(function (c, i) {
    var done = c.found, up = self.flipped.indexOf(i) !== -1 || done;
    // texto puro nas cartas (sem formatMath: spans de expoente/fração partem
    // feio em cartas estreitas). O texto já vem com símbolos unicode.
    var inner = up ? '<span class="edu-card-txt">' + c.txt + '</span>' : '<i class="ph ph-question"></i>';
    return '<button class="edu-card' + (up ? ' up' : '') + (done ? ' done' : '') + (c.tipo === 'r' ? ' isr' : '') + '"' +
      (done ? ' disabled' : '') + ' onclick="_eduFlip(\'' + self.panelId + '\',' + i + ')">' + inner + '</button>';
  }).join('');
  self.el.innerHTML =
    '<div class="edu-game-card" style="--eg:#7b61c4">' +
    '  <div class="edu-game-bar"><span><i class="ph ph-cards"></i> Pares: <b>' + self.pairsFound + '/4</b></span>' +
    '  <span>Jogadas: <b>' + self.moves + '</b></span></div>' +
    '  <div class="edu-mem-grid">' + cells + '</div>' +
    '</div>';
};
GameEdu.prototype.flip = function (i) {
  var self = this;
  if (self.lock || self.cards[i].found || self.flipped.indexOf(i) !== -1) return;
  self.flipped.push(i);
  self.renderPares();
  if (self.flipped.length === 2) {
    self.moves++;
    var a = self.cards[self.flipped[0]], b = self.cards[self.flipped[1]];
    if (a.pair === b.pair && self.flipped[0] !== self.flipped[1]) {
      a.found = b.found = true; self.pairsFound++;
      self.flipped = [];
      self.renderPares();
      if (typeof eduToast === 'function') eduToast('Par certo! 🎉', 'success');
      if (self.pairsFound === 4) self.endPares();
    } else {
      self.lock = true;
      setTimeout(function () { self.flipped = []; self.lock = false; self.renderPares(); }, 900);
    }
  }
};
GameEdu.prototype.endPares = function () {
  var self = this;
  setTimeout(function () {
    self.el.innerHTML =
      '<div class="edu-game-card edu-game-end" style="--eg:#7b61c4">' +
      '  <div class="edu-end-emoji">🏆</div>' +
      '  <h3>Boa! Encontraste todos os pares.</h3>' +
      '  <p class="edu-game-desc">Em <b>' + self.moves + '</b> jogadas.</p>' +
      '  <button class="btn btn-primary" onclick="_eduStart(\'' + self.panelId + '\')"><i class="ph ph-arrow-clockwise"></i> Jogar outra vez</button>' +
      '</div>';
  }, 700);
};

/* ───────────── partilhado: resposta certa/errada e fim ───────────── */
GameEdu.prototype.answer = function (i) {
  var self = this;
  var ok = (i === self.curAns);
  if (ok) { self.score++; var s = document.getElementById(self.panelId + '-score'); if (s) s.textContent = self.score; }
  if (typeof eduToast === 'function') eduToast(ok ? 'Certo! +1' : 'Errado', ok ? 'success' : 'error');
  self._corridaQ();
};
GameEdu.prototype.answerVF = function (val) {
  var self = this;
  var ok = (val === self.vfVerdade);
  if (ok) { self.score++; var s = document.getElementById(self.panelId + '-score'); if (s) s.textContent = self.score; }
  if (typeof eduToast === 'function') eduToast(ok ? 'Certo! +1' : 'Errado', ok ? 'success' : 'error');
  self._vfQ();
};
GameEdu.prototype.endTimed = function () {
  var self = this;
  if (self.timer) clearInterval(self.timer);
  self.over = true;
  var m = self._meta();
  var msg = self.score >= 10 ? 'Impressionante! 🔥' : self.score >= 5 ? 'Muito bem! 👏' : 'Continua a praticar! 💪';
  self.el.innerHTML =
    '<div class="edu-game-card edu-game-end" style="--eg:' + m.cor + '">' +
    '  <div class="edu-end-emoji">⏱️</div>' +
    '  <h3>Tempo!</h3>' +
    '  <p class="edu-game-desc">Pontuação: <b style="font-size:1.4rem;color:var(--eg)">' + self.score + '</b><br>' + msg + '</p>' +
    '  <button class="btn btn-primary" onclick="_eduStart(\'' + self.panelId + '\')"><i class="ph ph-arrow-clockwise"></i> Jogar outra vez</button>' +
    '</div>';
};

/* ───────────── handlers globais (onclick) ───────────── */
function _eduInst(panelId) {
  // procura a instância em qualquer wrapper
  for (var w in _gInstances) {
    var inst = _gInstances[w];
    for (var k in inst) { if (k.indexOf('edu_') === 0 && inst[k] && inst[k].panelId === panelId) return inst[k]; }
  }
  return null;
}
function _eduStart(panelId) {
  var g = _eduInst(panelId); if (!g) return;
  if (g.modo === 'corrida') g.startCorrida();
  else if (g.modo === 'vfrelampago') g.startVF();
  else g.startPares();
}
function _eduAns(panelId, i) { var g = _eduInst(panelId); if (g && !g.over) g.answer(i); }
function _eduVF(panelId, val) { var g = _eduInst(panelId); if (g && !g.over) g.answerVF(val); }
function _eduFlip(panelId, i) { var g = _eduInst(panelId); if (g) g.flip(i); }
