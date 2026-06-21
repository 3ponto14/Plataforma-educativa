/* ════════════════════════════════════════════════════════════════
   notificacoes.js — Sino 🔔 na barra (aluno e professor)
   Aluno:     avisos do professor + respostas às suas dúvidas/feedback.
   Professor: dúvidas e respostas novas dos alunos.
   Conta como "novo" o que chegou depois da última vez que abriu o sino
   (guardado em localStorage por utilizador). Só COM sessão.
   ════════════════════════════════════════════════════════════════ */

(function () {
  function _temSessao() {
    return typeof Cloud !== 'undefined' && Cloud.disponivel && Cloud.disponivel() && Cloud.utilizador && Cloud.utilizador();
  }
  function _uid() { var u = Cloud.utilizador(); return (u && u.id) || ''; }
  function _seenKey() { return 'edupt_notif_seen_' + _uid(); }
  function _lastSeen() { try { return localStorage.getItem(_seenKey()) || ''; } catch (e) { return ''; } }
  function _marcarVisto() { try { localStorage.setItem(_seenKey(), new Date().toISOString()); } catch (e) {} }
  function _esc(s) { return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }

  /* Busca a lista de notificações conforme o papel. Cada item:
     {texto, quando, etiqueta, autor}. */
  function _carregar() {
    if (typeof Turmas === 'undefined') return Promise.resolve([]);
    var prof = typeof Cloud.ehProfessor === 'function' && Cloud.ehProfessor();
    if (prof) {
      if (!Turmas.respostasDeAlunos) return Promise.resolve([]);
      return Turmas.respostasDeAlunos().then(function (ms) {
        return ms.map(function (m) {
          return { texto: m.texto, quando: m.criado, autor: m.de_nome || 'aluno',
            etiqueta: m.alcance === 'duvida' ? '❓ Dúvida' : '↩ Resposta' };
        });
      });
    }
    // ALUNO: mensagens do professor (avisos/feedback/respostas) + TRABALHO
    // atribuído (tarefas por fazer). Exclui o que o próprio aluno escreveu.
    var pMsgs = Turmas.muralDoAluno ? Turmas.muralDoAluno().then(function (ms) {
      return ms.filter(function (m) { return m.autor_tipo !== 'aluno'; }).map(function (m) {
        var et = m.alcance === 'aluno' ? '💬 Para ti' : (m.alcance === 'grupo' ? '👥 Grupo' : '📣 Aviso');
        return { texto: m.texto, quando: m.criado, autor: m.prof_nome || 'professor', etiqueta: et };
      });
    }) : Promise.resolve([]);
    // tarefas por fazer → notificação «Novo trabalho» (com prazo se houver)
    var pTar = Turmas.tarefasDoAluno ? Turmas.tarefasDoAluno().then(function (ts) {
      return ts.filter(function (t) { return !t.feito; }).map(function (t) {
        var prazoTxt = '';
        if (t.prazo) {
          var hoje = new Date().toISOString().slice(0, 10);
          prazoTxt = t.prazo < hoje ? ' (atrasado!)' : (t.prazo === hoje ? ' (entrega hoje)' : ' — até ' + t.prazo);
        }
        return { texto: t.titulo + prazoTxt, quando: t.criado, autor: t.prof_nome || 'professor', etiqueta: '📋 Novo trabalho' };
      });
    }) : Promise.resolve([]);
    return Promise.all([pMsgs, pTar]).then(function (r) {
      return r[0].concat(r[1]).sort(function (a, b) { return (a.quando || '') < (b.quando || '') ? 1 : -1; });
    });
  }

  /* Cria/atualiza o sino na topbar. */
  function render() {
    var slot = document.querySelector('.site-topbar-actions');
    if (!slot) return;
    var velho = document.getElementById('notif-bell');
    if (!_temSessao()) { if (velho) velho.remove(); return; }

    _carregar().then(function (itens) {
      var slot2 = document.querySelector('.site-topbar-actions');
      if (!slot2 || !_temSessao()) return;
      var ls = _lastSeen();
      var novos = itens.filter(function (i) { return (i.quando || '') > ls; }).length;

      var bell = document.getElementById('notif-bell');
      if (!bell) {
        bell = document.createElement('div');
        bell.id = 'notif-bell';
        bell.style.cssText = 'position:relative;display:inline-flex;align-items:center';
        // inserir à esquerda das ações (antes dos chips/auth)
        slot2.insertBefore(bell, slot2.firstChild);
      }
      var h = '<button id="notif-btn" aria-label="Notificações" style="position:relative;display:inline-flex;align-items:center;justify-content:center;width:38px;height:38px;border:1.5px solid var(--border);background:var(--white);border-radius:11px;color:var(--ink2);font-size:1.15rem;cursor:pointer"><i class="ph ph-bell"></i>'
        + (novos > 0 ? '<span style="position:absolute;top:-5px;right:-5px;min-width:17px;height:17px;background:#e23b3b;color:#fff;border-radius:999px;font-size:.66rem;font-weight:800;display:flex;align-items:center;justify-content:center;padding:0 4px;font-family:Montserrat,sans-serif">' + (novos > 9 ? '9+' : novos) + '</span>' : '')
        + '</button>';
      // popover
      h += '<div id="notif-pop" style="display:none;position:absolute;top:120%;right:0;width:300px;max-height:60vh;overflow-y:auto;background:var(--white);border:1.5px solid var(--border);border-radius:14px;box-shadow:0 12px 32px rgba(0,0,0,.18);padding:.6rem;z-index:300;text-align:left">';
      h += '<div style="font-weight:800;color:var(--ink1);font-size:.85rem;padding:.2rem .3rem .5rem">Notificações</div>';
      if (!itens.length) {
        h += '<div style="font-size:.82rem;color:var(--ink4);padding:.3rem">Sem notificações por agora.</div>';
      } else {
        itens.slice(0, 12).forEach(function (i) {
          var ehNovo = (i.quando || '') > ls;
          h += '<div onclick="notifAbrir()" style="border-radius:10px;padding:.45rem .55rem;margin-bottom:.3rem;background:' + (ehNovo ? '#f0edf7' : 'var(--cream)') + ';cursor:pointer">'
            + '<div style="font-size:.68rem;font-weight:800;color:var(--ink4)">' + _esc(i.etiqueta) + ' · ' + _esc(i.autor) + (ehNovo ? ' <span style="color:#e23b3b">•</span>' : '') + '</div>'
            + '<div style="font-size:.82rem;color:var(--ink1);line-height:1.4;margin-top:.1rem">' + _esc(i.texto) + '</div>'
            + '</div>';
        });
      }
      h += '<div style="font-size:.72rem;color:var(--ink4);text-align:center;padding:.4rem .3rem 0;border-top:1px solid var(--border);margin-top:.3rem"><a href="#" onclick="notifAbrir();return false" style="color:#4a3f7a;font-weight:700">Ir para as Turmas →</a></div>';
      h += '</div>';
      bell.innerHTML = h;

      document.getElementById('notif-btn').onclick = function (e) {
        e.stopPropagation();
        var pop = document.getElementById('notif-pop');
        if (!pop) return;
        var abrir = pop.style.display === 'none';
        pop.style.display = abrir ? 'block' : 'none';
        if (abrir) { _marcarVisto(); var badge = bell.querySelector('span[style*="e23b3b"]'); if (badge && badge.parentNode === document.getElementById('notif-btn')) badge.remove(); }
      };
    });
  }

  // fechar o popover ao clicar fora
  document.addEventListener('click', function (e) {
    var bell = document.getElementById('notif-bell');
    if (bell && !bell.contains(e.target)) {
      var pop = document.getElementById('notif-pop');
      if (pop) pop.style.display = 'none';
    }
  });

  /* Clicar numa notificação → vai à secção Turmas e abre o sítio certo. */
  window.notifAbrir = function () {
    var pop = document.getElementById('notif-pop');
    if (pop) pop.style.display = 'none';
    _marcarVisto();
    var prof = typeof Cloud.ehProfessor === 'function' && Cloud.ehProfessor();
    // Fora do portal (num hub de curso) portalIrPara não existe: vai ao portal,
    // secção Turmas. O destino interno (accordion) só faz sentido lá.
    if (typeof portalIrPara !== 'function') {
      var base = (typeof eduRootPath === 'function') ? eduRootPath()
        : (/\/(mat\d+|port\d+|fq\d+)(\/|$)/.test(window.location.pathname) ? '../' : '');
      window.location.href = base + 'index.html#apoio';
      return;
    }
    portalIrPara('apoio');
    // a vista re-renderiza; espera e depois abre/realça o destino
    setTimeout(function () {
      if (prof) {
        // abre a secção "Dúvidas dos alunos" (accordion key 'avisos')
        if (typeof accToggle === 'function') {
          var body = document.getElementById('acc-body-avisos');
          if (body && body.style.display === 'none') accToggle('avisos');
        }
        var alvo = document.getElementById('turmas-duvidas');
        if (alvo) alvo.scrollIntoView({ behavior: 'smooth', block: 'center' });
      } else {
        var msgs = document.getElementById('turmas-mensagens-aluno');
        if (msgs) msgs.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      render(); // atualiza o badge (já visto)
    }, 450);
  };

  window.notificacoesRender = render;
  document.addEventListener('cloud:auth', function () { setTimeout(render, 300); });
  document.addEventListener('DOMContentLoaded', function () { setTimeout(render, 900); });
  // atualiza quando o progresso/turmas mudam (ex.: aluno mandou dúvida)
  document.addEventListener('edupt:turmas', function () { render(); });
})();
