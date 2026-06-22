// ════════════════════════════════════════════════════════════════════════
// SHIM para correr a rede de testes com node (em vez do jsc do macOS).
//
// O jsc tem globais próprios que os validadores usam: print() e quit().
// O node não os tem — este shim define-os. Carregado SEMPRE em PRIMEIRO,
// antes dos _stubs.js, quando o runner deteta que está a usar node (ex.: no
// CI do GitHub, que corre em Linux e não tem jsc).
//
// O run.sh local em macOS continua a usar o jsc e NÃO carrega este ficheiro.
// ════════════════════════════════════════════════════════════════════════

// print(): no jsc escreve uma linha no stdout. No node, console.log faz o mesmo.
if (typeof print === 'undefined') {
  globalThis.print = function () {
    console.log(Array.prototype.join.call(arguments, ' '));
  };
}

// quit(code): no jsc termina o processo. No node, process.exit.
// (Os validadores não dependem do exit code — usam a sentinela
// __VALIDATION_FAILED__ na saída — mas mantemos o comportamento por fidelidade.)
if (typeof quit === 'undefined') {
  globalThis.quit = function (code) { process.exit(code || 0); };
}
