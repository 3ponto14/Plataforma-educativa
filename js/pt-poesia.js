// pt-poesia.js - Poesia (texto lírico): Guia de Estudo e Quiz
// Português 9.º Ano (curso port9/ · domínio Educação Literária)
// As antologias variam de manual para manual, por isso o guia dá as
// FERRAMENTAS de análise (versificação, sujeito poético, recursos) e
// mini-análises de poemas frequentes nos manuais do 9.º ano.
// Renderiza em #pt-poesia-content (aberto via ptObrasOpen em pt-obras.js);
// o quiz usa o motor partilhado ptObraQuizStart (pt-obras.js).

/* ══════════════════════════════════════════════════════
   FERRAMENTAS · noções essenciais
══════════════════════════════════════════════════════ */
var PT_POESIA_NOCOES = [
  ['🗣️', 'Sujeito poético', 'A «voz» que fala no poema. NÃO é o autor: o autor é a pessoa real que escreve; o sujeito poético é a entidade criada no texto que exprime emoções e ideias.'],
  ['📏', 'Verso e estrofe', 'O verso é cada linha do poema; a estrofe é um grupo de versos. Nomes: dístico (2 versos), terceto (3), quadra (4), quintilha (5), sextilha (6), oitava (8), décima (10).'],
  ['🎵', 'Métrica', 'Contagem das sílabas métricas, feita até à última sílaba TÓNICA do verso. Versos comuns: redondilha menor (5 sílabas), redondilha maior (7), decassílabo (10), alexandrino (12).'],
  ['🔔', 'Rima', 'Correspondência de sons no fim dos versos. Esquemas: emparelhada (AABB), cruzada (ABAB), interpolada (ABBA). Verso solto/branco = sem rima; verso livre = sem métrica nem rima regulares.']
];

/* ══════════════════════════════════════════════════════
   COMO ANALISAR UM POEMA (passo a passo)
══════════════════════════════════════════════════════ */
var PT_POESIA_PASSOS = [
  { passo: '1. Ler duas vezes', desc: 'Primeira leitura corrida; segunda leitura lenta, a sublinhar palavras-chave e imagens.' },
  { passo: '2. Identificar o tema', desc: 'De que fala o poema? (amor, sonho, igualdade, tempo, natureza…) E o que DIZ sobre esse tema?' },
  { passo: '3. Observar a forma', desc: 'Quantas estrofes e versos? Há esquema rimático? Que métrica? A forma reforça o sentido?' },
  { passo: '4. Encontrar os recursos', desc: 'Metáforas, comparações, anáforas, personificações… O que acrescenta cada recurso ao sentido?' },
  { passo: '5. Concluir', desc: 'Liga tudo: o tema + a forma + os recursos = a interpretação. Justifica sempre com versos do poema.' }
];

/* ══════════════════════════════════════════════════════
   POEMAS FREQUENTES NOS MANUAIS DO 9.º ANO (mini-análises)
══════════════════════════════════════════════════════ */
var PT_POESIA_POEMAS = [
  {
    titulo: 'Pedra filosofal',
    autor: 'António Gedeão',
    verso: '«Eles não sabem que o sonho / é uma constante da vida»',
    tema: 'O poder do sonho como motor do progresso e da humanidade - quem não sonha não transforma o mundo.',
    recursos: 'Anáfora («Eles não sabem»), enumeração, metáfora (o sonho como «pedra filosofal» que tudo transforma).'
  },
  {
    titulo: 'Lágrima de preta',
    autor: 'António Gedeão',
    verso: '«Encontrei uma preta / que estava a chorar, / pedi-lhe uma lágrima / para a analisar.»',
    tema: 'A igualdade entre todos os seres humanos: analisada «em laboratório», a lágrima não tem raça - é água e sal como a de qualquer pessoa.',
    recursos: 'Linguagem científica com intenção crítica, ironia, quadras com rima cruzada - a forma simples reforça a evidência da conclusão.'
  },
  {
    titulo: 'As palavras',
    autor: 'Eugénio de Andrade',
    verso: '«São como um cristal, / as palavras.»',
    tema: 'O poder e a fragilidade das palavras - podem ferir ou consolar, conforme quem as usa e como.',
    recursos: 'Comparação inicial («como um cristal»), enumerações e contrastes (punhal/incêndio vs. orvalho), versos curtos e livres.'
  },
  {
    titulo: 'Urgentemente',
    autor: 'Eugénio de Andrade',
    verso: '«É urgente o amor. / É urgente um barco no mar.»',
    tema: 'Apelo à transformação do mundo pelo amor e pela esperança - há coisas que não podem esperar.',
    recursos: 'Anáfora insistente («É urgente»), enumeração, metáforas - o ritmo repetitivo cria o tom de urgência.'
  },
  {
    titulo: 'Porque',
    autor: 'Sophia de Mello Breyner Andresen',
    verso: '«Porque os outros se mascaram mas tu não»',
    tema: 'Elogio da integridade e da coerência - o «tu» é exaltado por recusar máscaras, medos e cedências.',
    recursos: 'Anáfora («Porque»), antítese constante entre «os outros» e «tu», enumeração de atitudes.'
  }
];

/* ══════════════════════════════════════════════════════
   BANCO DE QUESTÕES - POESIA
══════════════════════════════════════════════════════ */
var PT_POESIA_BANCO = [
  {
    enun: 'O sujeito poético é',
    opts: ['(A) o autor do poema, identificado na capa do livro.', '(B) a «voz» criada no texto, que exprime emoções e ideias.', '(C) a personagem principal de uma narrativa.', '(D) o leitor do poema.'],
    correct: 'B',
    exp: 'O sujeito poético é uma entidade textual - não se confunde com o autor (a pessoa real que escreveu).'
  },
  {
    enun: 'Uma estrofe de três versos e uma de oito versos chamam-se, respetivamente,',
    opts: ['(A) terceto e oitava.', '(B) quadra e décima.', '(C) dístico e sextilha.', '(D) quintilha e oitava.'],
    correct: 'A',
    exp: '3 versos = terceto; 8 versos = oitava (a estrofe de Os Lusíadas). 2 = dístico, 4 = quadra, 5 = quintilha, 10 = décima.'
  },
  {
    enun: 'Um verso com sete sílabas métricas chama-se',
    opts: ['(A) redondilha menor.', '(B) decassílabo.', '(C) redondilha maior.', '(D) alexandrino.'],
    correct: 'C',
    exp: 'Redondilha maior = 7 sílabas (o verso mais comum na poesia popular portuguesa); menor = 5; decassílabo = 10; alexandrino = 12.'
  },
  {
    enun: 'Na contagem das sílabas métricas de um verso, conta-se',
    opts: ['(A) até à última sílaba tónica.', '(B) todas as sílabas gramaticais.', '(C) apenas as palavras com mais de duas sílabas.', '(D) até ao primeiro sinal de pontuação.'],
    correct: 'A',
    exp: 'A escansão pára na última sílaba acentuada: em «Amor é fogo que arde sem se ver», conta-se até «ver» (10.ª sílaba) - decassílabo.'
  },
  {
    enun: 'O esquema rimático ABAB corresponde à rima',
    opts: ['(A) emparelhada.', '(B) cruzada.', '(C) interpolada.', '(D) livre.'],
    correct: 'B',
    exp: 'Cruzada = ABAB (os versos rimam alternadamente); emparelhada = AABB; interpolada = ABBA.'
  },
  {
    enun: 'Um poema sem métrica regular nem esquema de rima escreve-se em',
    opts: ['(A) verso livre.', '(B) redondilha.', '(C) soneto.', '(D) oitava rima.'],
    correct: 'A',
    exp: 'Verso livre = sem regras fixas de métrica nem rima (comum na poesia do século XX). Verso branco/solto = tem métrica mas não rima.'
  },
  {
    enun: 'Em «Pedra filosofal», de António Gedeão, o verso «o sonho é uma constante da vida» exprime a ideia de que',
    opts: ['(A) sonhar é perda de tempo.', '(B) só as crianças sonham.', '(C) o sonho acompanha sempre a vida humana e move o progresso.', '(D) os sonhos se esquecem ao acordar.'],
    correct: 'C',
    exp: 'O poema defende que o sonho é permanente («constante») e transformador - é a «pedra filosofal» que muda o mundo.'
  },
  {
    enun: 'A repetição de «Eles não sabem» no início de vários versos de «Pedra filosofal» é',
    opts: ['(A) uma anáfora.', '(B) uma metáfora.', '(C) um eufemismo.', '(D) uma hipérbole.'],
    correct: 'A',
    exp: 'Anáfora = repetição da mesma expressão no início de versos ou frases consecutivas - aqui sublinha a ignorância «deles».'
  },
  {
    enun: 'Em «Lágrima de preta», de António Gedeão, a análise química da lágrima conclui que',
    opts: ['(A) a lágrima é igual à de qualquer outra pessoa - água e sal.', '(B) a lágrima tem componentes únicos.', '(C) a tristeza altera a composição da lágrima.', '(D) o laboratório se enganou.'],
    correct: 'A',
    exp: 'A «experiência» prova a igualdade entre os seres humanos: na lágrima não há raça - é a denúncia poética do racismo.'
  },
  {
    enun: 'Em «É urgente o amor. / É urgente um barco no mar.» (Eugénio de Andrade), o recurso dominante é',
    opts: ['(A) o eufemismo.', '(B) a anáfora, que cria um tom de urgência.', '(C) a ironia.', '(D) o pleonasmo.'],
    correct: 'B',
    exp: 'A repetição de «É urgente» no início dos versos (anáfora) imprime ritmo e insistência ao apelo do poema.'
  }
];

/* ══════════════════════════════════════════════════════
   GUIA DE ESTUDO (renderiza em #pt-poesia-content)
══════════════════════════════════════════════════════ */
function ptPoesiaQuiz() {
  ptObraQuizStart({
    banco: PT_POESIA_BANCO,
    titulo: 'Poesia',
    icone: 'ph-feather',
    cor1: '#6e3a56',
    cor2: '#9c5e80',
    voltar: 'ptPoesiaRenderMenu',
    containerId: 'pt-poesia-content'
  });
}

function ptPoesiaRenderMenu() {
  var wrap = document.getElementById('pt-poesia-content');
  if (!wrap) return;

  var h = '';

  // Cabeçalho
  h += '<div style="background:linear-gradient(135deg,#4a2438,#9c5e80);border-radius:20px;padding:1.75rem;margin-bottom:1.25rem;color:#fff">';
  h += '<h3 style="font-family:Cormorant Garamond,serif;font-size:1.5rem;font-weight:700;margin-bottom:.5rem"><i class="ph ph-feather"></i> Poesia · Texto Lírico</h3>';
  h += '<div style="font-size:.85rem;color:rgba(255,255,255,.85);line-height:1.65">As antologias do 9.º ano variam de manual para manual. Este guia dá-te as <strong>ferramentas de análise</strong> que servem para QUALQUER poema - e mini-análises dos poemas que mais aparecem nos manuais.</div>';
  h += '</div>';

  // Noções essenciais
  h += '<div style="background:var(--white);border:1.5px solid var(--border);border-radius:16px;padding:1.25rem 1.5rem;margin-bottom:1.25rem">';
  h += '<div style="font-size:.78rem;font-weight:800;color:var(--ink2);text-transform:uppercase;letter-spacing:.08em;margin-bottom:.75rem">Noções Essenciais</div>';
  h += '<div style="display:grid;gap:.6rem">';
  PT_POESIA_NOCOES.forEach(function (p) {
    h += '<div style="display:flex;gap:.75rem;align-items:flex-start;padding:.6rem .75rem;background:var(--surface);border-radius:10px">';
    h += '<span style="font-size:1.2rem">' + p[0] + '</span>';
    h += '<div><div style="font-size:.82rem;font-weight:800;color:var(--ink1)">' + p[1] + '</div><div style="font-size:.75rem;color:var(--ink3);margin-top:.15rem;line-height:1.55">' + p[2] + '</div></div></div>';
  });
  h += '</div></div>';

  // Como analisar
  h += '<div style="background:var(--white);border:1.5px solid var(--border);border-radius:16px;padding:1.25rem 1.5rem;margin-bottom:1.25rem">';
  h += '<div style="font-size:.78rem;font-weight:800;color:var(--ink2);text-transform:uppercase;letter-spacing:.08em;margin-bottom:.75rem">Como Analisar um Poema (5 passos)</div>';
  PT_POESIA_PASSOS.forEach(function (p) {
    h += '<div style="display:flex;gap:.6rem;align-items:flex-start;padding:.45rem 0;border-bottom:1px dashed var(--border)">';
    h += '<div style="font-size:.8rem;font-weight:800;color:#9c5e80;white-space:nowrap">' + p.passo + '</div>';
    h += '<div style="font-size:.78rem;color:var(--ink2);line-height:1.55">' + p.desc + '</div></div>';
  });
  h += '</div>';

  // Poemas frequentes
  h += '<div style="font-size:.78rem;font-weight:800;color:var(--ink2);text-transform:uppercase;letter-spacing:.08em;margin-bottom:.75rem;margin-top:1.25rem">Poemas Frequentes nos Manuais do 9.º</div>';
  PT_POESIA_POEMAS.forEach(function (p) {
    h += '<div style="background:var(--white);border:1.5px solid var(--border);border-radius:14px;padding:1.1rem 1.25rem;margin-bottom:.6rem;border-left:3px solid #9c5e80">';
    h += '<div style="display:flex;align-items:baseline;gap:.5rem;flex-wrap:wrap;margin-bottom:.35rem">';
    h += '<div style="font-size:.9rem;font-weight:800;color:var(--ink1)">' + p.titulo + '</div>';
    h += '<div style="font-size:.72rem;color:var(--ink4);font-weight:600">' + p.autor + '</div>';
    h += '</div>';
    h += '<div style="font-family:Cormorant Garamond,serif;font-size:.95rem;color:#6e3a56;font-style:italic;padding:.5rem .75rem;background:#faf2f6;border-radius:8px;margin-bottom:.45rem">' + p.verso + '</div>';
    h += '<div style="font-size:.8rem;color:var(--ink2);line-height:1.6;margin-bottom:.3rem"><strong>Tema:</strong> ' + p.tema + '</div>';
    h += '<div style="font-size:.76rem;color:#5c4e8a;line-height:1.55"><i class="ph ph-sparkle"></i> <strong>Recursos:</strong> ' + p.recursos + '</div>';
    h += '</div>';
  });
  h += '<div style="font-size:.72rem;color:var(--ink4);line-height:1.5;margin:.25rem 0 1.25rem">Estuda sempre os poemas do TEU manual - estes são os mais comuns, mas a antologia de cada escola pode variar.</div>';

  // Botão quiz
  h += '<button onclick="ptPoesiaQuiz()" style="width:100%;background:linear-gradient(135deg,#6e3a56,#9c5e80);color:#fff;border:none;border-radius:14px;padding:1rem 2rem;font-family:Montserrat,sans-serif;font-size:.9rem;font-weight:800;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:.5rem"><i class="ph ph-play"></i> Quiz: Poesia e Versificação (' + PT_POESIA_BANCO.length + ' questões)</button>';

  wrap.innerHTML = h;
}
