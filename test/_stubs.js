// ════════════════════════════════════════════════════════════════════════
// STUBS para correr os geradores das matN headless (sem browser/DOM).
// Carregado ANTES de cada matN.js pelo validador (validate-geradores.js).
//
// Os helpers matemáticos reais (_limpaMath, _normalizaOpcoes, _termoX, …)
// são injetados a partir do shared.js verdadeiro pelo runner, para o teste
// nunca divergir do código de produção. Aqui ficam só os mocks de ambiente.
// ════════════════════════════════════════════════════════════════════════

var window = { addEventListener: function () {}, location: { pathname: '/' } };
var document = {
  getElementById: function () { return null; },
  createElement: function () { return { style: {}, appendChild: function () {}, setAttribute: function () {}, classList: { add: function () {}, remove: function () {} } }; },
  addEventListener: function () {}, querySelector: function () { return null; }, querySelectorAll: function () { return []; },
  body: { appendChild: function () {}, removeChild: function () {} }, head: { appendChild: function () {} }
};
var localStorage = { _d: {}, getItem: function (k) { return this._d[k] || null; }, setItem: function (k, v) { this._d[k] = '' + v; }, removeItem: function (k) { delete this._d[k]; } };
var navigator = {};
function setInterval() { return 0; } function clearInterval() {} function setTimeout() { return 0; } function alert() {}

// ProgressManager (usado pelos matN para XP/streak) — mock inerte.
var ProgressManager = { record: function () {}, get: function () { return {}; }, getAll: function () { return {}; } };

// EduVisual: todos os métodos devolvem '' (não precisamos de SVG no teste).
var EduVisual = (function () {
  var noop = function () { return ''; };
  return {
    barras: noop, grafico: noop, referencial: noop, retaNumerica: noop, circulo: noop,
    triangulo: noop, retangulo: noop, reta: noop, parabola: noop, poligono: noop,
    angulo: noop, funcao: noop, histograma: noop
  };
})();

// Helpers de visual soltos que alguns geradores chamam diretamente.
var svgCoordGrid = function () { return ''; };
var svgHistogram = function () { return ''; };
var svgPiecewiseGraph = function () { return ''; };
var svgStemLeaf = function () { return ''; };
var svgBars = function () { return ''; };
var svgFunctionGraph = function () { return ''; };
var svgParabola = function () { return ''; };

// chapter-engine.js stubs (matN chamam estes no registo).
function _capRegisterWrappers() {}
function _tplTopicGrid() { return ''; }
function formatMath(s) { return s; }
