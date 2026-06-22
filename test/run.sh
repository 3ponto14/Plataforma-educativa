#!/bin/bash
# ════════════════════════════════════════════════════════════════════════
# Rede de testes dos geradores de exercícios (5.º ao 11.º ano).
#
#   bash test/run.sh          → testa todos os anos
#   bash test/run.sh 8        → testa só o 8.º ano
#
# Corre headless. Usa o JavaScriptCore (jsc) do macOS se existir (sem
# instalar nada); caso contrário cai para o node (ex.: no CI Linux do
# GitHub), carregando um shim que define print()/quit(). Devolve exit 1 se
# algum ano tiver bugs estruturais (resposta fora das opções, opção
# duplicada, Quiz vazio, etc.).
# ════════════════════════════════════════════════════════════════════════
set -euo pipefail

JS_DIR="$(cd "$(dirname "$0")/../js" && pwd)"
TEST_DIR="$(cd "$(dirname "$0")" && pwd)"
JSC="/System/Library/Frameworks/JavaScriptCore.framework/Versions/A/Helpers/jsc"

# Deteção do motor: jsc (macOS) > node (CI/Linux). ENGINE guarda qual usar.
if [ -x "$JSC" ]; then
  ENGINE="jsc"
elif command -v node >/dev/null 2>&1; then
  ENGINE="node"
else
  echo "ERRO: nenhum motor JS encontrado (precisa do jsc do macOS ou do node)."; exit 2
fi

# Corre um ficheiro JS no motor detetado. Com node, antepõe o shim que
# define print()/quit() (o jsc já os tem nativos).
run_js() {
  local file="$1"
  if [ "$ENGINE" = "jsc" ]; then
    "$JSC" "$file"
  else
    local wrapped; wrapped="$(mktemp /tmp/valida_node_XXXX.js)"
    cat "$TEST_DIR/_shim-node.js" "$file" > "$wrapped"
    node "$wrapped"; local rc=$?
    rm -f "$wrapped"
    return $rc
  fi
}

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

# O 7.º ano usa cap1.js/cap2.js/cap3.js + bancos cap4..8.js — motor diferente.
run_mat7() {
  for f in cap1 cap2 cap3 cap4 cap5 cap6 cap7 cap8; do
    if [ ! -f "$JS_DIR/$f.js" ]; then echo "  (7.º: $f.js não existe — saltado)"; return 0; fi
  done
  local tmp; tmp="$(mktemp /tmp/valida_mat7_XXXX.js)"
  {
    cat "$TEST_DIR/_stubs.js"
    echo ""
    # helpers globais que cap1/2/3 esperam do shared.js
    node_like_extract "$JS_DIR/shared.js" rnd rndNZ shuffle fmt gcd _limpaMath _normalizaOpcoes
    echo ""
    cat "$JS_DIR/cap1.js" "$JS_DIR/cap2.js" "$JS_DIR/cap3.js" \
        "$JS_DIR/cap4.js" "$JS_DIR/cap5.js" "$JS_DIR/cap6.js" "$JS_DIR/cap7.js" "$JS_DIR/cap8.js"
    echo ""
    cat "$TEST_DIR/validate-mat7.js"
  } > "$tmp"
  local out; out="$(run_js "$tmp" 2>&1)"
  echo "$out" | grep -v '__VALIDATION_FAILED__'
  rm -f "$tmp"
  if echo "$out" | grep -q '__VALIDATION_FAILED__'; then return 1; fi
  return 0
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
  local out; out="$(run_js "$tmp" 2>&1)"
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
# 7.º ano (motor próprio)
if [ -z "$ONLY" ] || [ "$ONLY" = "7" ]; then
  if ! run_mat7; then FAIL=1; fi
fi

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
if [ "$FAIL" -eq 0 ]; then
  echo "✓ Todos os anos passaram."
else
  echo "✗ Há anos com problemas (ver acima)."
fi
exit "$FAIL"
