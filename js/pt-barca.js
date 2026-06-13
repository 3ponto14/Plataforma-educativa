// pt-barca.js - Auto da Barca do Inferno: Guia de Estudo e Quiz
// Português 9.º Ano (curso port9/ · domínio Educação Literária)
// Renderiza em #pt-obras-content (aberto via ptObrasOpen em pt-obras.js);
// o quiz usa o motor partilhado ptObraQuizStart (pt-obras.js).

/* ══════════════════════════════════════════════════════
   ESTRUTURA DA OBRA
══════════════════════════════════════════════════════ */
var PT_BARCA_ESTRUTURA = {
  autor: 'Gil Vicente',
  ano: '1517',
  genero: 'Auto · teatro alegórico de crítica social',
  forma: 'Peça em verso (redondilha maior), num só ato',
  tema_central: 'O julgamento das almas à chegada da morte: num cais estão duas barcas, a do Inferno (Diabo) e a da Glória (Anjo): e cada figura embarca conforme a vida que levou.'
};

/* ══════════════════════════════════════════════════════
   SÍMBOLOS DO CENÁRIO
══════════════════════════════════════════════════════ */
var PT_BARCA_SIMBOLOS = [
  ['⚓', 'O cais', 'Espaço entre a vida e a morte, onde as almas chegam para serem julgadas.'],
  ['🔥', 'Barca do Inferno', 'Comandada pelo Diabo (o «arrais» trocista) e pelo seu Companheiro - leva os condenados.'],
  ['😇', 'Barca da Glória', 'Comandada pelo Anjo - só embarca quem viveu com retidão.'],
  ['🎭', 'Objetos de cena', 'Cada figura traz consigo o símbolo do seu pecado: o bolsão do Onzeneiro, a vara do Corregedor, o baraço do Enforcado…']
];

/* ══════════════════════════════════════════════════════
   AS FIGURAS (personagens-tipo) · pecado, defesa, destino
══════════════════════════════════════════════════════ */
var PT_BARCA_FIGURAS = [
  { nome: 'Fidalgo (D. Anrique)', simbolo: 'Pajem que leva um manto e uma cadeira de espaldas', pecado: 'Tirania e presunção - desprezava o povo e vivia na vaidade', defesa: 'Alega que «deixou cá quem reze» por ele; o Diabo desengana-o', destino: 'inferno' },
  { nome: 'Onzeneiro', simbolo: 'Bolsão (bolsa de dinheiro) - vazio', pecado: 'Usura - emprestava dinheiro com juros excessivos', defesa: 'Pede para voltar à vida para ir buscar o dinheiro que ficou', destino: 'inferno' },
  { nome: 'Parvo (Joane)', simbolo: '(sem símbolo de pecado)', pecado: 'Nenhum pecado grave - é simples, sem malícia', defesa: 'Responde ao Diabo com insultos populares e cómicos', destino: 'gloria' },
  { nome: 'Sapateiro (Joane Antão)', simbolo: 'Avental e formas de sapateiro', pecado: 'Enganou o povo no ofício durante 30 anos', defesa: 'Alega que morreu confessado e comungado - não basta, porque não restituiu o que roubou', destino: 'inferno' },
  { nome: 'Frade (Frei Babriel)', simbolo: 'Entra a dançar, com a moça (Florença), espada e broquel', pecado: 'Vida mundana - amante, esgrima e vaidades, contra os votos religiosos', defesa: 'Alega o hábito que veste e as missas que rezou', destino: 'inferno' },
  { nome: 'Alcoviteira (Brísida Vaz)', simbolo: 'Carrega arcas com «seiscentos virgos postiços» e artes de enganar', pecado: 'Alcovitice e feitiçaria - enganava raparigas e homens', defesa: 'Apresenta-se ao Anjo como «mártir» e quase santa, «apóstola» que juntava casais', destino: 'inferno' },
  { nome: 'Judeu', simbolo: 'Bode às costas', pecado: 'Condenado por não ser cristão (reflexo da intolerância da época) e por profanação', defesa: 'Oferece dinheiro ao Diabo pela passagem', destino: 'reboque' },
  { nome: 'Corregedor', simbolo: 'Vara da justiça e «feitos» (processos)', pecado: 'Corrupção na justiça - aceitava «peitas» (subornos)', defesa: 'Tenta impressionar com latim jurídico (macarrónico)', destino: 'inferno' },
  { nome: 'Procurador', simbolo: 'Livros de leis', pecado: 'Cumplicidade na justiça corrupta', defesa: 'Junta-se aos argumentos do Corregedor - em vão', destino: 'inferno' },
  { nome: 'Enforcado', simbolo: 'Baraço (corda da forca) ao pescoço', pecado: 'Ladrão condenado à forca', defesa: 'Acreditava que morrer enforcado o salvava, como lhe tinham dito; o Diabo desengana-o', destino: 'inferno' },
  { nome: 'Quatro Cavaleiros', simbolo: 'Cruz de Cristo ao peito', pecado: '(sem pecado a julgar)', defesa: 'Morreram a combater pela fé cristã «nas partes de além»', destino: 'gloria' }
];

/* ══════════════════════════════════════════════════════
   CRÍTICA SOCIAL E CÓMICO
══════════════════════════════════════════════════════ */
var PT_BARCA_CRITICA = [
  { tema: 'Nobreza', desc: 'O Fidalgo representa a tirania e a vaidade dos poderosos que oprimem o povo.' },
  { tema: 'Clero', desc: 'O Frade denuncia a vida mundana de parte da Igreja - votos esquecidos, amante e esgrima.' },
  { tema: 'Justiça', desc: 'Corregedor e Procurador mostram uma justiça vendida a quem paga («peitas»).' },
  { tema: 'Dinheiro', desc: 'Onzeneiro e Sapateiro condenados pela ganância - juros excessivos e enganos no ofício.' },
  { tema: 'Costumes', desc: 'Brísida Vaz expõe os enganos e a hipocrisia nos costumes e na vida amorosa.' },
  { tema: 'Falsa salvação', desc: 'O Sapateiro (confessado) e o Enforcado mostram que os ritos sem mudança de vida não salvam.' }
];

var PT_BARCA_COMICO = [
  ['😂', 'Cómico de carácter', 'Ri-se do que cada figura É: a vaidade do Fidalgo, a hipocrisia do Frade, a falsa santidade de Brísida Vaz.'],
  ['🎬', 'Cómico de situação', 'Ri-se do que ACONTECE em cena: o Frade entra a dançar com a moça e faz esgrima; Brísida quer convencer o Anjo.'],
  ['💬', 'Cómico de linguagem', 'Ri-se de COMO se fala: os insultos populares do Parvo, o latim macarrónico do Corregedor, as ironias do Diabo.']
];

/* ══════════════════════════════════════════════════════
   BANCO DE QUESTÕES - AUTO DA BARCA DO INFERNO
══════════════════════════════════════════════════════ */
var PT_BARCA_BANCO = [
  {
    enun: 'No Auto da Barca do Inferno, quem são as únicas figuras que embarcam na barca da Glória?',
    opts: ['(A) O Fidalgo e o Frade.', '(B) O Parvo e os Quatro Cavaleiros.', '(C) A Alcoviteira e o Judeu.', '(D) O Corregedor e o Procurador.'],
    correct: 'B',
    exp: 'O Parvo é aceite pela sua simplicidade sem malícia; os Quatro Cavaleiros morreram a combater pela fé e entram sem julgamento.'
  },
  {
    enun: 'Os objetos de cena que cada figura transporta (bolsão, vara, baraço…) simbolizam',
    opts: ['(A) a profissão de que mais se orgulhavam.', '(B) presentes para amansar o Diabo.', '(C) o pecado que condena cada figura.', '(D) a riqueza acumulada em vida.'],
    correct: 'C',
    exp: 'Cada objeto denuncia o pecado: o bolsão do Onzeneiro (usura), a vara e os processos do Corregedor (justiça corrupta), o baraço do Enforcado…'
  },
  {
    enun: 'O Onzeneiro é condenado por',
    opts: ['(A) usura - emprestar dinheiro com juros excessivos.', '(B) roubar o povo no seu ofício.', '(C) corromper a justiça.', '(D) enganar raparigas.'],
    correct: 'A',
    exp: '«Onzena» era o empréstimo com juros abusivos - o Onzeneiro é a figura-tipo da ganância financeira.'
  },
  {
    enun: 'Porque é o Parvo aceite pelo Anjo?',
    opts: ['(A) Porque rezou muito em vida.', '(B) Porque era rico e generoso.', '(C) Porque morreu a defender a fé.', '(D) Porque a sua simplicidade não tem malícia - não pecou com intenção.'],
    correct: 'D',
    exp: 'O Anjo aceita-o porque «per malícia não erraste»: a simplicidade do Parvo (Joane) vale mais do que as falsas virtudes das outras figuras.'
  },
  {
    enun: 'O Sapateiro alega que morreu «confessado e comungado». Qual é a resposta do Auto a este argumento?',
    opts: ['(A) Os ritos não bastam: roubou o povo trinta anos e não restituiu nada.', '(B) O argumento convence o Anjo e ele salva-se.', '(C) O Diabo aceita o argumento mas não tem lugar na barca.', '(D) O Anjo manda-o esperar pelo juízo final.'],
    correct: 'A',
    exp: 'É uma das críticas centrais da obra: os ritos religiosos sem mudança de vida (e sem restituir o roubado) não garantem a salvação.'
  },
  {
    enun: 'Com a figura do Frade, Gil Vicente critica',
    opts: ['(A) a pobreza dos mosteiros.', '(B) a vida mundana de parte do clero, que esquecia os votos religiosos.', '(C) a falta de instrução dos religiosos.', '(D) o excesso de orações.'],
    correct: 'B',
    exp: 'O Frade entra a dançar, traz a moça Florença e faz esgrima - símbolos de uma vida mundana contrária aos votos.'
  },
  {
    enun: 'Brísida Vaz tenta convencer o Anjo apresentando-se como',
    opts: ['(A) uma pobre vítima das outras figuras.', '(B) mãe de família exemplar.', '(C) uma espécie de mártir e «apóstola» que juntava casais.', '(D) freira devota.'],
    correct: 'C',
    exp: 'A Alcoviteira inverte os papéis com ironia: apresenta os seus enganos como obra santa - cómico de carácter e de linguagem.'
  },
  {
    enun: 'O Corregedor e o Procurador representam a crítica à',
    opts: ['(A) medicina da época.', '(B) justiça corrupta, que se vendia a quem pagava.', '(C) nobreza guerreira.', '(D) vida nos tribunais eclesiásticos.'],
    correct: 'B',
    exp: 'O Corregedor aceitava «peitas» (subornos); o Procurador era cúmplice. A vara e os «feitos» (processos) são os símbolos desta corrupção.'
  },
  {
    enun: 'O Enforcado chega ao cais convencido de que se salva. Porquê?',
    opts: ['(A) Tinham-lhe dito que morrer na forca lavava as culpas e o levava ao Paraíso.', '(B) Porque devolveu tudo o que roubou.', '(C) Porque o Anjo lho prometera em vida.', '(D) Porque era amigo do Corregedor.'],
    correct: 'A',
    exp: 'O Diabo desengana-o: a morte na forca não santifica ninguém. É outra crítica às falsas garantias de salvação.'
  },
  {
    enun: 'O cómico de linguagem está presente, por exemplo,',
    opts: ['(A) na entrada do Frade a dançar.', '(B) no manto e na cadeira do Fidalgo.', '(C) no bode que o Judeu carrega.', '(D) no latim macarrónico do Corregedor e nos insultos do Parvo.'],
    correct: 'D',
    exp: 'O cómico de linguagem nasce da FALA: o falso latim jurídico do Corregedor e a linguagem popular e insultuosa do Parvo.'
  },
  {
    enun: 'As duas barcas do Auto simbolizam',
    opts: ['(A) os dois destinos da alma após a morte: a condenação e a salvação.', '(B) o comércio marítimo do século XVI.', '(C) a viagem de Vasco da Gama.', '(D) a guerra entre Portugal e Castela.'],
    correct: 'A',
    exp: 'A peça é uma alegoria: o cais é a morte, e as barcas do Inferno e da Glória são os destinos possíveis de cada alma.'
  },
  {
    enun: 'O pajem do Fidalgo carrega um manto e uma cadeira de espaldas. Estes objetos simbolizam',
    opts: ['(A) a generosidade do Fidalgo.', '(B) a vaidade e o poder tirânico com que viveu.', '(C) o frio do cais.', '(D) a sua profissão de juiz.'],
    correct: 'B',
    exp: 'O manto e a cadeira são símbolos do estatuto e da presunção - o Fidalgo é condenado pela tirania e pelo desprezo do povo.'
  }
];

/* ══════════════════════════════════════════════════════
   GUIA DE ESTUDO (renderiza em #pt-obras-content)
══════════════════════════════════════════════════════ */
function ptBarcaQuiz() {
  ptObraQuizStart({
    banco: PT_BARCA_BANCO,
    titulo: 'Auto da Barca do Inferno',
    icone: 'ph-boat',
    cor1: '#1a4a2e',
    cor2: '#2e7d52',
    voltar: 'ptBarcaRenderMenu',
    containerId: 'pt-barca-content'
  });
}

function ptBarcaRenderMenu() {
  var wrap = document.getElementById('pt-barca-content');
  if (!wrap) return;

  var h = '';

  // Estrutura da obra
  h += '<div style="background:linear-gradient(135deg,#0f3320,#2e7d52);border-radius:20px;padding:1.75rem;margin-bottom:1.25rem;color:#fff">';
  h += '<h3 style="font-family:Cormorant Garamond,serif;font-size:1.5rem;font-weight:700;margin-bottom:.75rem"><i class="ph ph-boat"></i> Estrutura da Obra</h3>';
  h += '<div style="display:grid;grid-template-columns:1fr 1fr;gap:.75rem">';
  h += '<div><div style="font-size:.68rem;font-weight:800;opacity:.6;text-transform:uppercase;letter-spacing:.08em">Autor</div><div style="font-size:.88rem;font-weight:600">' + PT_BARCA_ESTRUTURA.autor + '</div></div>';
  h += '<div><div style="font-size:.68rem;font-weight:800;opacity:.6;text-transform:uppercase;letter-spacing:.08em">Data</div><div style="font-size:.88rem;font-weight:600">' + PT_BARCA_ESTRUTURA.ano + '</div></div>';
  h += '<div><div style="font-size:.68rem;font-weight:800;opacity:.6;text-transform:uppercase;letter-spacing:.08em">Género</div><div style="font-size:.88rem;font-weight:600">' + PT_BARCA_ESTRUTURA.genero + '</div></div>';
  h += '<div><div style="font-size:.68rem;font-weight:800;opacity:.6;text-transform:uppercase;letter-spacing:.08em">Forma</div><div style="font-size:.88rem;font-weight:600">' + PT_BARCA_ESTRUTURA.forma + '</div></div>';
  h += '</div>';
  h += '<div style="margin-top:1rem;font-size:.85rem;color:rgba(255,255,255,.8);line-height:1.6"><strong>Tema central:</strong> ' + PT_BARCA_ESTRUTURA.tema_central + '</div>';
  h += '</div>';

  // Símbolos do cenário
  h += '<div style="background:var(--white);border:1.5px solid var(--border);border-radius:16px;padding:1.25rem 1.5rem;margin-bottom:1.25rem">';
  h += '<div style="font-size:.78rem;font-weight:800;color:var(--ink2);text-transform:uppercase;letter-spacing:.08em;margin-bottom:.75rem">O Cenário Alegórico</div>';
  h += '<div style="display:grid;gap:.6rem">';
  PT_BARCA_SIMBOLOS.forEach(function (p) {
    h += '<div style="display:flex;gap:.75rem;align-items:flex-start;padding:.6rem .75rem;background:var(--surface);border-radius:10px">';
    h += '<span style="font-size:1.2rem">' + p[0] + '</span>';
    h += '<div><div style="font-size:.82rem;font-weight:800;color:var(--ink1)">' + p[1] + '</div><div style="font-size:.75rem;color:var(--ink3);margin-top:.15rem">' + p[2] + '</div></div></div>';
  });
  h += '</div></div>';

  // Figuras
  h += '<div style="font-size:.78rem;font-weight:800;color:var(--ink2);text-transform:uppercase;letter-spacing:.08em;margin-bottom:.75rem;margin-top:1.25rem">As Figuras, uma a uma</div>';
  PT_BARCA_FIGURAS.forEach(function (f) {
    var dest = f.destino === 'gloria'
      ? '<span style="font-size:.62rem;font-weight:800;background:#e8f5ee;color:#1a5c38;border:1px solid #bfe3c9;border-radius:999px;padding:2px 9px">😇 Glória</span>'
      : f.destino === 'reboque'
        ? '<span style="font-size:.62rem;font-weight:800;background:#fef3e2;color:#7a4a10;border:1px solid #f4d99a;border-radius:999px;padding:2px 9px">⚓ A reboque do Inferno</span>'
        : '<span style="font-size:.62rem;font-weight:800;background:#fdecea;color:#922b21;border:1px solid #e8a8a0;border-radius:999px;padding:2px 9px">🔥 Inferno</span>';
    h += '<div style="background:var(--white);border:1.5px solid var(--border);border-radius:14px;padding:1.1rem 1.25rem;margin-bottom:.6rem;border-left:3px solid ' + (f.destino === 'gloria' ? '#2e7d52' : f.destino === 'reboque' ? '#b07030' : '#c0392b') + '">';
    h += '<div style="display:flex;align-items:center;gap:.5rem;margin-bottom:.4rem;flex-wrap:wrap">';
    h += '<div style="font-size:.9rem;font-weight:800;color:var(--ink1)">' + f.nome + '</div>' + dest;
    h += '</div>';
    h += '<div style="font-size:.76rem;color:var(--ink3);margin-bottom:.3rem"><strong style="color:var(--ink2)">Símbolo:</strong> ' + f.simbolo + '</div>';
    h += '<div style="font-size:.8rem;color:var(--ink2);line-height:1.55;margin-bottom:.3rem"><strong>Pecado:</strong> ' + f.pecado + '</div>';
    h += '<div style="font-size:.76rem;color:#5c4e8a;line-height:1.5"><i class="ph ph-chat-circle-text"></i> <strong>Defesa:</strong> ' + f.defesa + '</div>';
    h += '</div>';
  });
  h += '<div style="font-size:.72rem;color:var(--ink4);line-height:1.5;margin:.25rem 0 1rem">Nota: a figura do Judeu reflete a mentalidade intolerante do século XVI, hoje lê-se como documento da época, não como modelo.</div>';

  // Crítica social
  h += '<div style="font-size:.78rem;font-weight:800;color:var(--ink2);text-transform:uppercase;letter-spacing:.08em;margin-bottom:.75rem;margin-top:1.5rem">A Crítica Social</div>';
  h += '<div style="display:grid;grid-template-columns:1fr 1fr;gap:.6rem;margin-bottom:1.25rem">';
  PT_BARCA_CRITICA.forEach(function (t) {
    h += '<div style="background:var(--white);border:1.5px solid var(--border);border-radius:12px;padding:.85rem 1rem">';
    h += '<div style="font-size:.82rem;font-weight:800;color:var(--ink1);margin-bottom:.25rem">' + t.tema + '</div>';
    h += '<div style="font-size:.74rem;color:var(--ink3);line-height:1.5">' + t.desc + '</div></div>';
  });
  h += '</div>';

  // Tipos de cómico
  h += '<div style="background:var(--white);border:1.5px solid var(--border);border-radius:16px;padding:1.25rem 1.5rem;margin-bottom:1.5rem">';
  h += '<div style="font-size:.78rem;font-weight:800;color:var(--ink2);text-transform:uppercase;letter-spacing:.08em;margin-bottom:.75rem">Os 3 Tipos de Cómico</div>';
  h += '<div style="display:grid;gap:.6rem">';
  PT_BARCA_COMICO.forEach(function (p) {
    h += '<div style="display:flex;gap:.75rem;align-items:flex-start;padding:.6rem .75rem;background:var(--surface);border-radius:10px">';
    h += '<span style="font-size:1.2rem">' + p[0] + '</span>';
    h += '<div><div style="font-size:.82rem;font-weight:800;color:var(--ink1)">' + p[1] + '</div><div style="font-size:.75rem;color:var(--ink3);margin-top:.15rem">' + p[2] + '</div></div></div>';
  });
  h += '</div></div>';

  // Botão quiz
  h += '<button onclick="ptBarcaQuiz()" style="width:100%;background:linear-gradient(135deg,#1a4a2e,#2e7d52);color:#fff;border:none;border-radius:14px;padding:1rem 2rem;font-family:Montserrat,sans-serif;font-size:.9rem;font-weight:800;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:.5rem"><i class="ph ph-play"></i> Quiz: Auto da Barca do Inferno (' + PT_BARCA_BANCO.length + ' questões)</button>';

  wrap.innerHTML = h;
}
