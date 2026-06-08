# Testes dos geradores de exercícios

Rede de segurança que corre **todos os exercícios** dos anos de Matemática
(5.º, 6.º, 8.º, 9.º, 10.º, 11.º) e falha se encontrar um bug que um aluno
apanharia — sem precisar de abrir o browser.

## Como correr

```bash
bash test/run.sh        # testa todos os anos
bash test/run.sh 8      # testa só o 8.º ano
```

Devolve **exit 0** se estiver tudo bem, **exit 1** se houver problemas.
Usa o `jsc` (JavaScriptCore) que já vem no macOS — não instala nada.

## O que verifica (por ano, ~15.000–32.000 questões)

| Erro | Significado |
|---|---|
| `SEM-RESPOSTA` | exercício sem campo `resposta` |
| `MC-RESP-FORA` | a resposta certa não está entre as opções → **impossível acertar** |
| `MC-OPCAO-DUPLICADA` | duas opções iguais |
| `MC-VAZIO` | o Quiz Relâmpago não gera questões num capítulo |
| `VF-INVALIDA` | pergunta "Verdadeiro/Falso" com resposta que não é V/F |
| `NOTACAO-PARTIDA` | `1x`, `− -3`, `× -3`, `NaN`, `undefined` no enunciado/explicação |

O teste aplica o mesmo `_limpaMath` que o hub aplica no render, por isso
testa o que o aluno **vê de facto**.

## Quando correr

- **Sempre que mexeres num `js/matN.js`** (gerador, banco, distratores).
- **Antes de fazer commit** de alterações aos exercícios.
- Ao **adicionar um ano novo**: junta-o ao array `ANOS` no `run.sh` com o
  nº de temas por capítulo (tem de espelhar `_matNTemasCount`).

## Ficheiros

- `run.sh` — orquestrador (config dos anos + jsc).
- `_stubs.js` — mocks de ambiente (DOM, EduVisual, localStorage).
- `validate-geradores.js` — a lógica de validação propriamente dita.

> Nota: os helpers matemáticos reais (`_limpaMath`, `_normalizaOpcoes`,
> `_termoX`, …) são extraídos do `js/shared.js` verdadeiro em cada execução,
> para o teste nunca divergir do código de produção.
>
> O 7.º ano usa um motor diferente (`cap1.js`/`buildExercicio`) e não está
> coberto por este runner.
