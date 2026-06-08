#!/bin/bash
# ════════════════════════════════════════════════════════════════════════
# Rede de testes dos geradores de exercícios (5.º ao 11.º ano).
#
#   bash test/run.sh          → testa todos os anos
#   bash test/run.sh 8        → testa só o 8.º ano
#
# Corre headless com o JavaScriptCore (jsc) que já existe no macOS — sem
# instalar nada. Devolve exit 1 se algum ano tiver bugs estruturais
# (resposta fora das opções, opção duplicada, Quiz vazio, etc.).
# ════════════════════════════════════════════════════════════════════════
set -euo pipefail

JS_DIR="$(cd "$(dirname "$0")/../js" && pwd)"
TEST_DIR="$(cd "$(dirname "$0")" && pwd)"
JSC="/System/Library/Frameworks/JavaScriptCore.framework/Versions/A/Helpers/jsc"

if [ ! -x "$JSC" ]; then
  echo "ERRO: jsc não encontrado em $JSC (precisa de macOS)."; exit 2
fi

# Config de cada ano: nº de temas por capítulo (tem de espelhar _matNTemasCount).
# n|"cap:nTemas,cap:nTemas,..."
declare -a ANOS=(
  '5|1:3,2:3,3:3,4:3,5:2,6:2,7:3'
  '6|1:3,2:3,3:3,4:3,5:2,6:3,7:3'
  '8|1:11,2:4,3:6,4:4,5:4,6:4,7:6,8:6'
  '9|1:3,2:4,3:4,4:3,5:4,6:4'
  '10|1:3,2:3,3:4,4:3,5:3,6:3'
  '11|1:3,2:3,3:3,4:3,5:3,6:3'
)
# (o 7.º usa um motor diferente — cap1.js/buildExercicio — não entra aqui.)

# Extrai os helpers puros do shared.js (sem o código de DOM/widgets que não
# carrega headless). São funções autónomas que os geradores usam.
extract_shared_helpers() {
  node_like_extract "$JS_DIR/shared.js" \
    _termoX _termoC _parenSeNeg _escalaNum _nivelQuestao \
    _limpaMath _normalizaOpcoes _distratorDe _fabricarOpcoes _fillParaMc _mixBancoGeradas
}

# Extrai funções nomeadas de um ficheiro por balanceamento de chavetas (awk).
node_like_extract() {
  local file="$1"; shift
  local names="$*"
  awk -v names="$names" '
    BEGIN { nn=split(names, arr, " "); for(i=1;i<=nn;i++) want[arr[i]]=1 }
    {
      if (!collecting) {
        for (n in want) {
          if (index($0, "function " n "(") || index($0, "function " n " (")) {
            collecting=n; depth=0; buf=""
          }
        }
      }
      if (collecting) {
        buf = buf $0 "\n"
        for (i=1;i<=length($0);i++) {
          c=substr($0,i,1)
          if (c=="{") depth++
          else if (c=="}") { depth--; if (depth==0) { print buf; collecting=""; break } }
        }
      }
    }
  ' "$file"
}

run_year() {
  local n="$1" temas_csv="$2"
  local matfile="$JS_DIR/mat${n}.js"
  if [ ! -f "$matfile" ]; then echo "  (mat${n}.js não existe — saltado)"; return 0; fi

  # Constrói o objeto __ANO__ com os temas.
  local temas_js="{"
  IFS=',' read -ra PARES <<< "$temas_csv"
  for p in "${PARES[@]}"; do
    local cap="${p%%:*}" nt="${p##*:}"
    temas_js+="$cap:$nt,"
  done
  temas_js="${temas_js%,}}"

  local tmp; tmp="$(mktemp /tmp/valida_mat${n}_XXXX.js)"
  {
    cat "$TEST_DIR/_stubs.js"
    echo ""
    extract_shared_helpers
    echo ""
    cat "$matfile"
    echo ""
    echo "var __ANO__ = { n: ${n}, temas: ${temas_js} };"
    echo ""
    cat "$TEST_DIR/validate-geradores.js"
  } > "$tmp"

  # jsc não devolve exit code com quit(1); detetamos a sentinela na saída.
  local out; out="$("$JSC" "$tmp" 2>&1)"
  echo "$out" | grep -v '__VALIDATION_FAILED__'
  rm -f "$tmp"
  if echo "$out" | grep -q '__VALIDATION_FAILED__'; then
    return 1
  fi
  return 0
}

ONLY="${1:-}"
FAIL=0
echo "━━━ Validação dos geradores de exercícios ━━━"
for entry in "${ANOS[@]}"; do
  n="${entry%%|*}"; temas="${entry##*|}"
  if [ -n "$ONLY" ] && [ "$ONLY" != "$n" ]; then continue; fi
  if ! run_year "$n" "$temas"; then FAIL=1; fi
done

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
if [ "$FAIL" -eq 0 ]; then
  echo "✓ Todos os anos passaram."
else
  echo "✗ Há anos com problemas (ver acima)."
fi
exit "$FAIL"
