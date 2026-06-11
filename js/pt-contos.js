// pt-contos.js - Leitura de Contos e Crónicas: Guia de Estudo e Quiz
// Português 9.º Ano (curso port9/ · domínio Educação Literária)
// Baseado nas 7 fichas de Educação Literária do manual «Mensagens 9»
// (pasta "9º ano_portugues/"), com factos conferidos nas Soluções.
// No EXAME, a leitura usa contos/excertos que mudam todos os anos —
// por isso este guia treina os contos do manual E as estratégias.
// Renderiza em #pt-contos-content (via ptObrasOpen); quiz partilhado.

/* ══════════════════════════════════════════════════════
   OS 7 TEXTOS DO MANUAL
══════════════════════════════════════════════════════ */
var PT_CONTOS = [
  {
    titulo: 'A Aia',
    autor: 'Eça de Queirós',
    genero: 'Conto',
    icon: '👑',
    resumo: 'Num reino do Oriente, o rei morre e o tio bastardo ataca para usurpar o trono. Para salvar o pequeno príncipe, a aia troca-o pelo seu próprio filho — que é morto no lugar dele. Recompensada com o tesouro real, a aia escolhe… um punhal, e crava-o no coração: «Salvei o meu príncipe — e agora vou dar de mamar ao meu filho!»',
    temas: 'Lealdade e sacrifício extremos; o amor de mãe; a crença na vida para além da morte (o suicídio como reencontro com o filho). A antítese «mãe ditosa» / «mãe dolorosa» opõe a felicidade da rainha ao desgosto da serva.'
  },
  {
    titulo: 'A Galinha',
    autor: 'Vergílio Ferreira',
    genero: 'Conto',
    icon: '🐔',
    resumo: 'Uma alegada troca de galinhas na feira incendeia um conflito entre a mãe do narrador e a tia — uma discussão mesquinha que escala até à rutura familiar, contada pelos olhos de uma criança.',
    temas: 'Os pequenos conflitos que destroem famílias; o ridículo das disputas por ninharias. O narrador é participante e subjetivo: toma o partido da mãe («cheia de compreensão cristã») e culpa a tia.'
  },
  {
    titulo: 'A Palavra Mágica',
    autor: 'Vergílio Ferreira',
    genero: 'Conto',
    icon: '✨',
    resumo: 'Uma palavra desconhecida — «inócuo» — cai numa aldeia como um insulto misterioso. De boca em boca, vai ganhando sentidos cada vez piores («vadio», «bêbado»), quando na verdade significa… inofensivo. O filho do Gomes tenta reabilitar a palavra excomungada.',
    temas: 'A ignorância como origem de mal-entendidos com consequências graves; o poder (e o perigo) das palavras; a dificuldade de corrigir uma injustiça depois de instalada.'
  },
  {
    titulo: 'A Consequência dos Semáforos',
    autor: 'António Lobo Antunes',
    genero: 'Crónica',
    icon: '🚦',
    resumo: 'A partir de um episódio banal do quotidiano (acidentes e semáforos), o cronista ironiza sobre as companhias de seguros que fogem às responsabilidades e os taxistas que cobram «um dinheirão».',
    temas: 'É o exemplo de CRÓNICA do manual: tema do quotidiano tratado na 1.ª pessoa, texto curto, registo corrente com marcas de oralidade, ironia, anáfora e hipérbole — reflexão pessoal e crítica sobre a sociedade.'
  },
  {
    titulo: 'O Fantasma de Canterville',
    autor: 'Oscar Wilde',
    genero: 'Conto',
    icon: '👻',
    resumo: 'A família americana Otis compra um castelo inglês assombrado — e não se assusta com nada. O fantasma tenta tudo (até se disfarça de «Judas, o Desenterrado»), mas os gémeos perseguem-no de tal forma que é ELE quem ganha medo de assustar.',
    temas: 'Humor e sátira na oposição entre o conservadorismo da cultura aristocrática britânica e o pragmatismo da nova cultura americana; a inversão cómica (o assustador assustado); ambientes sombrios com alusões ao sobrenatural, marca da escrita de Wilde.'
  },
  {
    titulo: 'Aventuras de João Sem Medo',
    autor: 'José Gomes Ferreira',
    genero: 'Novela',
    icon: '🛡️',
    resumo: 'Para aceder ao caminho da Felicidade Completa, João teria de deixar cortar a cabeça e usar correntes de ouro nas mãos e nos pés (ou deixar que lhe sugassem o cérebro). João recusa — e segue, «orgulhoso de sentir a cabeça nos ombros», pelo caminho dos cardos.',
    temas: 'Alegoria e ironia: a felicidade «fácil» custa a liberdade de pensar; quem aceita ser subjugado tem a vida facilitada mas deixa de agir por vontade própria. O herói prefere o caminho difícil com a cabeça no lugar.'
  },
  {
    titulo: 'Um Dia Destes',
    autor: 'Gabriel García Márquez',
    genero: 'Conto',
    icon: '🦷',
    resumo: 'O alcaide, com uma dor de dentes insuportável, ameaça o dentista Aurelio Escovar com um tiro se não o atender. O dentista, pobre mas digno, arranca-lhe o dente — sem anestesia. No fim, as contas do município e as do alcaide são «o mesmo saco».',
    temas: 'Crítica à prepotência e arrogância de quem ocupa cargos de poder face aos mais humildes; denúncia da corrupção. Contraste de caracterização: Escovar humilde, competente e corajoso vs. alcaide arrogante, corrupto e prepotente.'
  }
];

/* ══════════════════════════════════════════════════════
   ESTRATÉGIAS PARA O EXAME (os textos mudam, o método não)
══════════════════════════════════════════════════════ */
var PT_CONTOS_ESTRATEGIAS = [
  ['📖', 'Os textos do exame mudam todos os anos', 'Treinar ESTES contos dá-te o método: personagens, conflito, narrador, recursos — as perguntas repetem o padrão, mesmo com textos novos.'],
  ['🗣️', 'Identifica sempre o narrador', 'Participante ou não participante? Objetivo ou subjetivo? (Em «A Galinha», o narrador participante defende a mãe — isso é matéria de exame.)'],
  ['⚖️', 'Procura o conflito e a crítica', 'Quase todos os textos opõem dois mundos: ama/rainha, dentista/alcaide, fantasma/americanos. Pergunta-te: o que está o autor a criticar?'],
  ['✍️', 'Justifica com o texto', 'Cita ou refere a passagem («como se lê em…») — nas respostas de desenvolvimento, a justificação textual vale pontos.']
];

/* ══════════════════════════════════════════════════════
   BANCO DE QUESTÕES - CONTOS (factos conferidos nas Soluções)
══════════════════════════════════════════════════════ */
var PT_CONTOS_BANCO = [
  {
    enun: 'No final de «A aia», de Eça de Queirós, a serva escolhe do tesouro real',
    opts: ['(A) um fio de diamantes, como recompensa justa.', '(B) um punhal, com que se mata para se reencontrar com o filho.', '(C) as moedas de ouro acumuladas por cem reis.', '(D) nada — recusa qualquer recompensa e parte do reino.'],
    correct: 'B',
    exp: 'A aia agarra um punhal e crava-o no coração: acredita que só assim se reencontra com o filho que sacrificou — «vou dar de mamar ao meu filho!».'
  },
  {
    enun: 'Em «A aia», a antítese «mãe ditosa» / «mãe dolorosa» opõe',
    opts: ['(A) a rainha feliz (filho salvo) e a ama desgostosa (filho morto).', '(B) duas fases da vida da rainha.', '(C) a rainha e a sua própria mãe.', '(D) a ama no início e no fim do conto.'],
    correct: 'A',
    exp: 'A antítese reforça o contraste: a ventura da rainha, que recupera o filho, e o desgosto da escrava, que perdeu o seu.'
  },
  {
    enun: 'Em «A Galinha», de Vergílio Ferreira, o conflito familiar nasce de',
    opts: ['(A) uma herança disputada.', '(B) uma alegada troca de galinhas na feira.', '(C) um casamento contra a vontade da família.', '(D) uma dívida antiga entre irmãos.'],
    correct: 'B',
    exp: 'A tia acusa a mãe do narrador de ter trocado as galinhas trazidas da feira — uma ninharia que escala até à rutura.'
  },
  {
    enun: 'O narrador de «A Galinha» é',
    opts: ['(A) não participante e objetivo.', '(B) não participante e omnisciente.', '(C) participante e subjetivo — toma o partido da mãe.', '(D) uma testemunha imparcial dos factos.'],
    correct: 'C',
    exp: 'O narrador participa na ação (é o filho) e não é imparcial: defende a mãe («cheia de compreensão cristã») e atribui a culpa à tia.'
  },
  {
    enun: 'Em «A Palavra Mágica», o verdadeiro significado de «inócuo» é',
    opts: ['(A) inofensivo, que não faz mal a ninguém.', '(B) vadio.', '(C) bêbado.', '(D) mal-educado.'],
    correct: 'A',
    exp: '«Inócuo» significa inofensivo — mas a aldeia, por ignorância, atribuiu-lhe sentidos cada vez mais pejorativos (vadio, bêbado).'
  },
  {
    enun: 'A principal conclusão de «A Palavra Mágica» é que',
    opts: ['(A) as palavras difíceis devem ser proibidas.', '(B) os dicionários estão sempre errados.', '(C) é fácil corrigir um mal-entendido com uma boa explicação.', '(D) a ignorância gera mal-entendidos com consequências graves.'],
    correct: 'D',
    exp: 'Por ser desconhecida, a palavra ganhou sentidos ofensivos — o conto mostra como a ignorância pode alimentar injustiças difíceis de desfazer.'
  },
  {
    enun: '«A Consequência dos Semáforos», de António Lobo Antunes, é uma crónica porque',
    opts: ['(A) conta a história completa de uma vida.', '(B) trata um tema do quotidiano, na 1.ª pessoa, com ironia e registo corrente.', '(C) é um texto em verso sobre o trânsito.', '(D) relata factos históricos com objetividade.'],
    correct: 'B',
    exp: 'Características da crónica: tema do quotidiano tratado de forma subjetiva, texto curto, 1.ª pessoa, marcas de oralidade e recursos como a ironia e a hipérbole.'
  },
  {
    enun: 'Na crónica «A Consequência dos Semáforos», o autor critica sobretudo',
    opts: ['(A) os peões que atravessam fora da passadeira.', '(B) a lentidão dos semáforos de Lisboa.', '(C) as seguradoras que fogem às responsabilidades e os preços dos táxis.', '(D) os condutores jovens.'],
    correct: 'C',
    exp: 'A ironia visa as companhias de seguros que se desresponsabilizam a cada acidente e o «dinheirão» pago por cada viagem de táxi.'
  },
  {
    enun: 'Em «O Fantasma de Canterville», o humor nasce sobretudo de',
    opts: ['(A) a família americana não se assustar — e o fantasma acabar ele próprio cheio de medo.', '(B) o castelo não ter fantasma nenhum.', '(C) o fantasma assustar toda a gente menos o Sr. Otis.', '(D) os gémeos serem amigos do fantasma.'],
    correct: 'A',
    exp: 'Inversão cómica: a indiferença dos Otis e as partidas dos gémeos assustam de tal modo o fantasma que ele se recusa a sair do quarto.'
  },
  {
    enun: 'A oposição central de «O Fantasma de Canterville» é entre',
    opts: ['(A) o conservadorismo aristocrático britânico e o pragmatismo da nova cultura americana.', '(B) ricos e pobres.', '(C) o mundo dos vivos e a justiça divina.', '(D) a cidade e o campo.'],
    correct: 'A',
    exp: 'Wilde satiriza o choque de culturas: a tradição e as crenças britânicas contra uma família americana que rejeita títulos, monarquia e superstições.'
  },
  {
    enun: 'Em «Aventuras de João Sem Medo», para aceder ao caminho da Felicidade Completa era preciso',
    opts: ['(A) pagar uma moeda de ouro.', '(B) deixar cortar a cabeça e usar correntes de ouro nas mãos e nos pés.', '(C) vencer um dragão.', '(D) renunciar à família.'],
    correct: 'B',
    exp: 'As condições eram essas (ou deixar sugar o cérebro, ou trocar a cabeça por uma melancia) — e João recusa, «orgulhoso de sentir a cabeça nos ombros».'
  },
  {
    enun: 'A recusa de João Sem Medo em entrar na Felicidade Completa significa que',
    opts: ['(A) prefere a liberdade de pensar à felicidade fácil dos subjugados.', '(B) tem medo de tudo, ao contrário do que diz o nome.', '(C) não acredita que o caminho exista.', '(D) prefere ficar rico primeiro.'],
    correct: 'A',
    exp: 'A alegoria: quem aceita ser subjugado tem a vida «facilitada», mas perde a capacidade de agir em liberdade — João escolhe pensar pela própria cabeça.'
  },
  {
    enun: 'Em «Um Dia Destes», de García Márquez, o dentista Escovar e o alcaide caracterizam-se, respetivamente, como',
    opts: ['(A) humilde e competente vs. arrogante e corrupto.', '(B) rico e poderoso vs. pobre e medroso.', '(C) cruel e vingativo vs. paciente e justo.', '(D) jovem inexperiente vs. velho sábio.'],
    correct: 'A',
    exp: 'Escovar é humilde, competente, honesto e corajoso; o alcaide é arrogante, prepotente e corrupto — o contraste é o coração do conto.'
  },
  {
    enun: 'No final de «Um Dia Destes», a frase do alcaide de que as contas do município e as suas são «o mesmo saco» denuncia',
    opts: ['(A) a corrupção de quem confunde o dinheiro público com o próprio.', '(B) a pobreza do município.', '(C) a generosidade do alcaide.', '(D) um erro de contabilidade.'],
    correct: 'A',
    exp: 'É a denúncia final: o poderoso trata o dinheiro público como seu — crítica à corrupção e à prepotência dos cargos políticos.'
  }
];

/* ══════════════════════════════════════════════════════
   GUIA DE ESTUDO (renderiza em #pt-contos-content)
══════════════════════════════════════════════════════ */
function ptContosQuiz() {
  ptObraQuizStart({
    banco: PT_CONTOS_BANCO,
    titulo: 'Leitura de Contos',
    icone: 'ph-book-open',
    cor1: '#3a2d6e',
    cor2: '#5c4e8a',
    voltar: 'ptContosRenderMenu',
    containerId: 'pt-contos-content'
  });
}

function ptContosRenderMenu() {
  var wrap = document.getElementById('pt-contos-content');
  if (!wrap) return;

  var h = '';

  // Cabeçalho
  h += '<div style="background:linear-gradient(135deg,#241c47,#5c4e8a);border-radius:20px;padding:1.75rem;margin-bottom:1.25rem;color:#fff">';
  h += '<h3 style="font-family:Cormorant Garamond,serif;font-size:1.5rem;font-weight:700;margin-bottom:.5rem"><i class="ph ph-book-open"></i> Leitura de Contos e Crónicas</h3>';
  h += '<div style="font-size:.85rem;color:rgba(255,255,255,.85);line-height:1.65">No exame, os textos de leitura <strong>mudam todos os anos</strong> — mas as perguntas repetem o padrão. Estuda os 7 textos do manual <strong>Mensagens 9</strong> e leva o método contigo.</div>';
  h += '</div>';

  // Estratégias
  h += '<div style="background:var(--white);border:1.5px solid var(--border);border-radius:16px;padding:1.25rem 1.5rem;margin-bottom:1.25rem">';
  h += '<div style="font-size:.78rem;font-weight:800;color:var(--ink2);text-transform:uppercase;letter-spacing:.08em;margin-bottom:.75rem">Estratégias para o Exame</div>';
  h += '<div style="display:grid;gap:.6rem">';
  PT_CONTOS_ESTRATEGIAS.forEach(function (p) {
    h += '<div style="display:flex;gap:.75rem;align-items:flex-start;padding:.6rem .75rem;background:var(--surface);border-radius:10px">';
    h += '<span style="font-size:1.2rem">' + p[0] + '</span>';
    h += '<div><div style="font-size:.82rem;font-weight:800;color:var(--ink1)">' + p[1] + '</div><div style="font-size:.75rem;color:var(--ink3);margin-top:.15rem;line-height:1.55">' + p[2] + '</div></div></div>';
  });
  h += '</div></div>';

  // Os 7 textos
  h += '<div style="font-size:.78rem;font-weight:800;color:var(--ink2);text-transform:uppercase;letter-spacing:.08em;margin-bottom:.75rem">Os 7 Textos do Manual, um a um</div>';
  PT_CONTOS.forEach(function (c) {
    h += '<div style="background:var(--white);border:1.5px solid var(--border);border-radius:14px;padding:1.1rem 1.25rem;margin-bottom:.6rem;border-left:3px solid #5c4e8a">';
    h += '<div style="display:flex;align-items:center;gap:.5rem;margin-bottom:.35rem;flex-wrap:wrap">';
    h += '<span style="font-size:1.3rem">' + c.icon + '</span>';
    h += '<div style="font-size:.92rem;font-weight:800;color:var(--ink1)">' + c.titulo + '</div>';
    h += '<div style="font-size:.72rem;color:var(--ink4);font-weight:600">' + c.autor + '</div>';
    h += '<span style="margin-left:auto;font-size:.6rem;font-weight:800;letter-spacing:.06em;text-transform:uppercase;background:#f0edf7;color:#5c4e8a;border:1px solid #ddd8f5;border-radius:999px;padding:2px 8px">' + c.genero + '</span>';
    h += '</div>';
    h += '<div style="font-size:.8rem;color:var(--ink2);line-height:1.6;margin-bottom:.35rem">' + c.resumo + '</div>';
    h += '<div style="font-size:.76rem;color:#5c4e8a;line-height:1.55"><i class="ph ph-lightbulb"></i> <strong>Temas e crítica:</strong> ' + c.temas + '</div>';
    h += '</div>';
  });

  // Botão quiz
  h += '<button onclick="ptContosQuiz()" style="width:100%;margin-top:.75rem;background:linear-gradient(135deg,#3a2d6e,#5c4e8a);color:#fff;border:none;border-radius:14px;padding:1rem 2rem;font-family:Montserrat,sans-serif;font-size:.9rem;font-weight:800;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:.5rem"><i class="ph ph-play"></i> Quiz: Leitura de Contos (' + PT_CONTOS_BANCO.length + ' questões)</button>';

  wrap.innerHTML = h;
}
