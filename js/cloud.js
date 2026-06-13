/* ════════════════════════════════════════════════════════════════
   cloud.js — Contas e sincronização na nuvem (Supabase)
   Camada NÃO destrutiva por cima do localStorage: sem login, tudo
   funciona como antes (offline). Com login, o progresso/streak/XP/
   conquistas seguem o aluno em qualquer dispositivo.

   Login o mais simples possível: email + palavra-passe, sem
   confirmação de email (configurado no Supabase).

   Se o Supabase não carregar (sem net, CDN em baixo), tudo continua
   a funcionar localmente — Cloud.disponivel() devolve false e o
   resto da plataforma ignora-o.
   ════════════════════════════════════════════════════════════════ */

var Cloud = (function () {
  var URL = 'https://sojhpgmqpwaeaxvyzicd.supabase.co';
  var KEY = 'sb_publishable_M9PQNL8UMQ4UmTzdMbUlMg_p5ZxsIMw';
  var PROG_KEY = 'edupt_progress_v2';   // mesmo do ProgressManager
  var DESAFIO_KEY = 'edupt_desafio';
  var ANO_KEY = 'edupt_desafio_ano';

  var sb = null;       // cliente supabase (null se indisponível)
  var user = null;     // utilizador atual (null = anónimo)

  function disponivel() { return !!sb; }
  function utilizador() { return user; }
  /* Tipo de conta: 'professor' ou 'aluno' (guardado nos metadados). */
  function tipo() { return (user && user.user_metadata && user.user_metadata.tipo) || 'aluno'; }
  function ehProfessor() { return tipo() === 'professor'; }

  /* ── Arranque: cria o cliente se a lib do Supabase estiver carregada ── */
  function init(onReady) {
    try {
      if (typeof supabase === 'undefined' || !supabase.createClient) {
        if (onReady) onReady();
        return;
      }
      sb = supabase.createClient(URL, KEY);
      // recupera sessão existente (aluno já tinha entrado neste dispositivo)
      sb.auth.getSession().then(function (res) {
        var s = res && res.data && res.data.session;
        if (s && s.user) { user = s.user; _puxarDaNuvem().then(function () { _notifica(); if (onReady) onReady(); }); }
        else { if (onReady) onReady(); }
      }).catch(function () { if (onReady) onReady(); });
      // reage a login/logout
      sb.auth.onAuthStateChange(function (_evt, session) {
        user = (session && session.user) || null;
        _notifica();
      });
    } catch (e) { sb = null; if (onReady) onReady(); }
  }

  function _notifica() {
    document.dispatchEvent(new CustomEvent('cloud:auth', { detail: { user: user } }));
  }

  /* ── Registo / Entrada / Saída ── */
  function registar(email, pass, tipoConta) {
    if (!sb) return Promise.reject(new Error('Serviço indisponível.'));
    var t = tipoConta === 'professor' ? 'professor' : 'aluno';
    return sb.auth.signUp({ email: email, password: pass, options: { data: { tipo: t } } }).then(function (res) {
      if (res.error) throw res.error;
      // com "Confirm email" OFF, a sessão vem logo; se não vier, faz login
      if (res.data && res.data.session) { user = res.data.session.user; return _aoEntrar(); }
      return entrar(email, pass);
    });
  }

  function entrar(email, pass) {
    if (!sb) return Promise.reject(new Error('Serviço indisponível.'));
    return sb.auth.signInWithPassword({ email: email, password: pass }).then(function (res) {
      if (res.error) throw res.error;
      user = res.data.user;
      return _aoEntrar();
    });
  }

  function sair() {
    if (!sb) return Promise.resolve();
    return sb.auth.signOut().then(function () { user = null; _notifica(); });
  }

  /* Ao entrar: funde o progresso da nuvem com o do dispositivo e guarda. */
  function _aoEntrar() {
    return _puxarDaNuvem().then(function () { return enviarParaNuvem(); }).then(function () { _notifica(); });
  }

  /* ── Sincronização ── */
  function _lerLocal(k) { try { return JSON.parse(localStorage.getItem(k)); } catch (e) { return null; } }
  function _guardarLocal(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }

  /* Funde dois "saves" de progresso, ficando o MELHOR de cada campo
     (maior XP, maior streak, mais recente). Nunca apaga progresso. */
  function _fundeProgresso(local, nuvem) {
    local = local || { caps: {}, streak: 0, lastDay: null, totalXp: 0 };
    nuvem = nuvem || { caps: {}, streak: 0, lastDay: null, totalXp: 0 };
    var out = { caps: {}, streak: 0, lastDay: null, totalXp: 0 };
    out.totalXp = Math.max(local.totalXp || 0, nuvem.totalXp || 0);
    // streak: fica o do lastDay mais recente (a ofensiva viva)
    if ((local.lastDay || '') >= (nuvem.lastDay || '')) { out.streak = local.streak || 0; out.lastDay = local.lastDay; }
    else { out.streak = nuvem.streak || 0; out.lastDay = nuvem.lastDay; }
    // caps: une os dois, ficando o de maior xp por capítulo
    var ids = {};
    Object.keys(local.caps || {}).forEach(function (id) { ids[id] = 1; });
    Object.keys(nuvem.caps || {}).forEach(function (id) { ids[id] = 1; });
    Object.keys(ids).forEach(function (id) {
      var a = (local.caps || {})[id], b = (nuvem.caps || {})[id];
      out.caps[id] = (!b || ((a && a.xp) || 0) >= ((b && b.xp) || 0)) ? a : b;
    });
    return out;
  }

  /* Funde o estado do desafio (totais maiores, conquistas unidas). */
  function _fundeDesafio(local, nuvem) {
    local = local || {}; nuvem = nuvem || {};
    var out = {};
    out.feitos = Math.max(local.feitos || 0, nuvem.feitos || 0);
    out.perfeitos = Math.max(local.perfeitos || 0, nuvem.perfeitos || 0);
    out.certasTotal = Math.max(local.certasTotal || 0, nuvem.certasTotal || 0);
    out.maxStreak = Math.max(local.maxStreak || 0, nuvem.maxStreak || 0);
    // "feito hoje": fica o registo mais recente
    var maisRecente = (local.dia || '') >= (nuvem.dia || '') ? local : nuvem;
    out.dia = maisRecente.dia; out.ano = maisRecente.ano; out.certas = maisRecente.certas;
    // conquistas: união
    out.conquistas = {};
    [local.conquistas, nuvem.conquistas].forEach(function (cs) {
      if (cs) Object.keys(cs).forEach(function (k) { if (!out.conquistas[k]) out.conquistas[k] = cs[k]; });
    });
    return out;
  }

  /* Puxa o que está na nuvem e funde com o local (deixa o resultado no
     localStorage, para o resto da plataforma ver). */
  function _puxarDaNuvem() {
    if (!sb || !user) return Promise.resolve();
    return sb.from('progresso').select('dados, desafio, ano').eq('user_id', user.id).maybeSingle().then(function (res) {
      if (res.error) return;
      var linha = res.data;
      if (!linha) return; // ainda não tem linha; será criada no primeiro envio
      _guardarLocal(PROG_KEY, _fundeProgresso(_lerLocal(PROG_KEY), linha.dados));
      _guardarLocal(DESAFIO_KEY, _fundeDesafio(_lerLocal(DESAFIO_KEY), linha.desafio));
      if (linha.ano && !localStorage.getItem(ANO_KEY)) _guardarLocal(ANO_KEY, linha.ano);
      // refresca a topbar/conquistas se as funções existirem
      if (typeof pmUpdateTopbar === 'function') pmUpdateTopbar();
      if (typeof desafioRender === 'function') desafioRender();
      if (typeof desafioRenderConquistas === 'function') desafioRenderConquistas();
    });
  }

  /* Envia o progresso local atual para a nuvem (upsert). */
  var _enviar_pendente = false, _enviar_timer = null;
  function enviarParaNuvem() {
    if (!sb || !user) return Promise.resolve();
    var linha = {
      user_id: user.id,
      dados: _lerLocal(PROG_KEY) || {},
      desafio: _lerLocal(DESAFIO_KEY) || {},
      ano: parseInt(localStorage.getItem(ANO_KEY)) || null,
      atualizado: new Date().toISOString()
    };
    return sb.from('progresso').upsert(linha, { onConflict: 'user_id' }).then(function (res) {
      if (res.error) { /* silencioso: o local nunca se perde */ }
    });
  }

  /* Envio com "debounce": agrupa gravações seguidas numa só (evita
     spam de pedidos quando o aluno acerta várias perguntas seguidas). */
  function enviarDebounce() {
    if (!sb || !user) return;
    _enviar_pendente = true;
    if (_enviar_timer) clearTimeout(_enviar_timer);
    _enviar_timer = setTimeout(function () { if (_enviar_pendente) { _enviar_pendente = false; enviarParaNuvem(); } }, 1500);
  }

  return {
    init: init, disponivel: disponivel, utilizador: utilizador,
    tipo: tipo, ehProfessor: ehProfessor,
    registar: registar, entrar: entrar, sair: sair,
    enviarParaNuvem: enviarParaNuvem, enviarDebounce: enviarDebounce
  };
})();

/* Sempre que o progresso muda (XP/streak/conquista), envia para a nuvem. */
document.addEventListener('edupt:progress', function () { if (typeof Cloud !== 'undefined') Cloud.enviarDebounce(); });
