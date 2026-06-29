import { useState } from 'react';
import { motion } from 'framer-motion';
import { PageTransition } from '../components/PageTransition';
import { ArrowLeft, Translate } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';

export default function RobolabArticle() {
  const [lang, setLang] = useState<'it' | 'en'>('en');

  const content = {
    it: {
      title: "Robolab: Quattro anni di robotica, problem solving e gestione team",
      intro: "Cinque anni fa, al primo anno di università, ho iniziato la mia collaborazione con Robolab. Un’esperienza che inizialmente sembrava quasi banale, utile solo a tirar su qualche soldo per pagarmi le vacanze, e che si è invece trasformata in una palestra sia tecnica che di vita. Dopo quattro anni effettivi, nei quali sono passato da semplice facilitatore a una figura di coordinamento sia del team che del laboratorio stesso, è arrivato il momento di farsi da parte per accogliere nuove sfide. Prima però, voglio raccontare il significato che ha avuto questa esperienza per me.",
      sections: [
        {
          heading: "Cos’è Robolab?",
          paragraphs: [
            "Robolab è un laboratorio didattico istituito nel 2021, di proprietà di Assolombarda e finanziato da Fondazione Ingegno, che consente a studenti di qualsiasi età di svolgere attività pratiche ed esplorative. In particolare, alle medie vengono offerti percorsi legati alla fisica (come capire il calore e gli infrarossi grazie a termocamere professionali) e alla programmazione (con kit educativi e robot collaborativi). Con i licei si collegano i concetti teorici di matematica e fisica alla robotica, affrontando la cinematica dei manipolatori o i sistemi di coordinate nello spazio, mentre con gli istituti tecnici si approfondisce direttamente sul campo l’utilizzo dei robot e di software di simulazione come ABB RobotStudio. È capitato di ospitare anche bambini delle elementari e adulti in cerca di lavoro, portando il range di età delle persone con cui ho condiviso la mia passione per la robotica dai 8 ai 30 anni. Il compito di condurre le attività è affidato a un team di ragazzi tra i 19 e i 23 anni, del quale ho sempre fatto parte e che ho coordinato durante il mio ultimo anno."
          ],
          image: "IMG_4915.jpg",
          imagePos: "left"
        },
        {
          heading: "Quindi eri un prof?",
          paragraphs: [
            "Sotto un certo punto di vista, sì. Ovviamente l’attività principale rimane quella di insegnare e trasmettere qualcosa ai ragazzi, che sia un concetto teorico o l'uso di un dispositivo. Dall’altra parte, però, ero molto più di un prof. Una sessione di laboratorio prevede molto di più di una singola spiegazione perché i ragazzi sono curiosi, irrequieti e, oltre a dover rispondere a ogni loro domanda e intrattenerli nei passaggi più statici, bisogna essere in grado di risolvere in fretta i problemi che creano smanettando con tecnologie che a loro sembrano semplici, ma che nella realtà sono decisamente complesse.",
            "In un colloquio una volta dissi che i ragazzini delle medie sono dei clienti estremamente impegnativi, dato che provocano il fermo macchina, non capiscono il perché (e qualche volta a caldo non lo capivo nemmeno io), ma si spazientiscono in fretta se il robot non va. Devi trovare il problema il più rapidamente possibile per non perdere la loro attenzione ed evitare che si annoino. Questo continuo scoprire nuovi bug e risolverli sotto pressione mi ha permesso di ampliare notevolmente le mie competenze."
          ],
          image: "IMG_4991.jpg",
          imagePos: "right"
        },
        {
          heading: "Imparare insegnando",
          paragraphs: [
            "All'università si inizia a parlare di robotica più o meno al terzo anno, e se ti interessa approfondisci l'argomento in magistrale. Il problema è che spesso ti fermi lì, dato che li studi, ma non li vedi mai. Ho scelto ingegneria perché volevo capire la robotica ma, arrivando da un istituto tecnico, tutta quella teoria mi stava stretta. Robolab è stato il mio giubbotto di salvataggio, l’occasione perfetta per scontrarmi con i problemi reali oltre gli algoritmi teorici visti nelle aule universitarie. E ho fatto tutto questo mentre insegnavo ai ragazzi come utilizzare quelle stesse macchine.",
            "È sul campo che ho capito che i problemi di comunicazione tra dispositivi sono all’ordine del giorno, che un sensore calibrato male ti blocca l'intera macchina o che caricare continuamente dei backup può saturare la memoria dei controllori. E non solo: se c’è un problema con le licenze dei software devi interfacciarti con l’assistenza e capire come funziona il distributore; se un segnale di input/output salta devi armarti di cacciavite, tester e buona volontà per controllare i cablaggi fisici. Se poi il sistema continua ad andare in system failure... beh, lì le ho provate tutte ed era veramente oltre le mie competenze di allora. Magari tra un po' di tempo, con più esperienza alle spalle, vi saprò dire il perché."
          ],
          image: "IMG_4997.jpg",
          imagePos: "left"
        },
        {
          heading: "Oltre la tecnica",
          paragraphs: [
            "A livello tecnico ho appreso tantissimo, anche se sono consapevole che in altri contesti, come un team universitario, avrei potuto approfondire aspetti diversi. Ormai non lo saprò mai, ma sono convinto di una cosa: sul lato umano questa esperienza mi ha dato strumenti che difficilmente avrei trovato altrove. Parlare di robotica a persone di qualsiasi età mi ha costretto a imparare a comunicare argomenti complessi a chiunque; e più l’età si abbassava, più la sfida diventava complessa. Spiegare la cinematica inversa a un ragazzo di terza superiore è tosto, ma far capire i punti di singolarità a una studentessa di seconda media lo è ancora di più. Lì non puoi nominare lo jacobiano o i calcoli matriciali, ma devi farglielo comprendere visivamente, mostrando cosa succede e spiegando perché la macchina si blocca.",
            "Il gruppo più complicato, però, sono state le elementari. All’inizio mi sono trovato in difficoltà perché se con le altre età riuscivo a dialogare usando un registro simile, a otto anni tutto questo salta. A quell'età è ancora tutto una magia. Il modo di comunicare si ribalta completamente e diventi un racconta-storie, e devi essere bravo a inventare narrazioni efficaci sulla robotica. Devi far capire loro che un robot si muove un po' come noi (quindi no, non può volare), facendogli capire che allo stesso tempo è una macchina profondamente diversa da un essere umano.",
            "Tutto questo parlare in pubblico mi ha tolto ogni paura e mi ha insegnato a improvvisare discorsi e attività al volo, ma la vera scuola è stata un'altra. Se nei laboratori ho dovuto gestire gruppi di 20 o 30 ragazzi irrequieti, nell’ultimo anno ho assunto il coordinamento di un team di dieci facilitatori. Dialogo e trasparenza sono stati i metodi che ho adottato fin dal primo giorno, ponendomi al loro stesso livello ma rimanendo un punto di riferimento saldo. È stato un po' come tornare a fare il capitano quando giocavo a calcio. E, proprio come allora, penso abbia funzionato."
          ],
          image: "IMG_4908.jpg",
          imagePos: "right"
        },
        {
          heading: "Un po' di numeri",
          paragraphs: [
            "Nei miei cinque anni in laboratorio sono passati più di 8.000 studenti. Solo negli ultimi sei mesi, tra scuole medie e superiori, abbiamo accolto circa 500 ragazzi, di cui abbiamo raccolto le opinioni tramite un questionario finale. Può sembrare una formalità banale, ma analizzare questi dati è stata un’ottima soluzione per ricevere feedback reali, capire cosa funzionava e in quale direzione muoverci per migliorare.",
            "I risultati ci hanno dato ragione, visto che il dato sul gradimento generale è del 98.3%, una vittoria totale. Ma la metrica più indicativa, soprattutto per l’obiettivo di orientamento del laboratorio, è quel 65.9% di studenti che ritiene l’attività utile per la scelta del proprio percorso di formazione successivo. Sebbene la percentuale sia leggermente più alta tra i ragazzi, è stato un risultato straordinario vedere che il 58.6% delle ragazze ha trovato utile l'esperienza, centrando in pieno l’obiettivo di avvicinare il mondo femminile alle discipline STEM.",
            "Infine, è stato bello leggere alcuni commenti che descrivono perfettamente l'impatto di quello che facevamo:",
            "> \"E’ stata un'esperienza meravigliosa, ragazzi attenti, molto gentili e disponibili, hanno guidato un'attività coinvolgente! Da rifare e svolgere in tutte le età!\"\n> — Studentessa",
            "> \"È stato bello interfacciarci con persone più o meno della nostra età.\"\n> — Studentessa",
            "> \"Sono stati molto bravi hanno spiegato tutto in modo chiaro e sono molto gentili. Lo consiglio sicuramente — un'esperienza da provare, molto innovativa e simpatica per chi è curioso e gli piace imparare la robotica. Bravissimi i ragazzi che hanno avuto l'idea di questo progetto.\"\n> — Studente",
            "Cinque anni dopo, il \"tirare su qualche soldo per le vacanze\" è solo un ricordo lontano. Quello che resta è tutto il resto, tra bug risolti, ragazzi che si appassionano a ciò che gli fai scoprire e un team che ho imparato a guidare senza smettere di farne parte. Robolab mi ha dato molto più di quanto pensassi di dargli io."
          ],
          image: "IMG_4989.jpg",
          imagePos: "right"
        }
      ]
    },
    en: {
      title: "Robolab: Four Years of Robotics, Problem Solving, and Team Management",
      intro: "Five years ago, during my first year of university, I began my collaboration with Robolab. An experience that initially seemed almost trivial, just a way to earn some extra cash for summer vacations, turned instead into a technical and personal proving ground. After four active years, during which I progressed from a simple facilitator to a coordinating figure for both the team and the laboratory itself, the time has come to step aside and embrace new challenges. Before that, however, I want to share the true meaning this journey has had for me.",
      sections: [
        {
          heading: "What is Robolab?",
          paragraphs: [
            "Robolab is an educational laboratory established in 2021, owned by Assolombarda and funded by Fondazione Ingegno, which allows students of all ages to engage in hands-on, exploratory activities. Specifically, middle schoolers are offered paths related to physics (such as understanding heat and infrared radiation through professional thermal cameras) and programming (using educational kits and collaborative robots). For high schools, theoretical concepts of mathematics and physics are linked to robotics, exploring manipulator kinematics or spatial coordinate systems, while technical institutes dive directly into the practical use of industrial robots and simulation software like ABB RobotStudio. We have even hosted elementary school children and adults seeking employment, bringing the age range of people with whom I shared my passion for robotics from 8 to 30 years old. Conducting these activities is entrusted to a team of young people between 19 and 23 years old, which I was always a part of and ended up coordinating during my final year."
          ],
          image: "IMG_4915.jpg",
          imagePos: "left"
        },
        {
          heading: "So, were you a teacher?",
          paragraphs: [
            "In a way, yes. Obviously, the core activity is to teach and pass something on to the students, whether it's a theoretical concept or how to use a device. On the other hand, though, I was much more than just a teacher. A laboratory session requires far more than a simple lecture because students are curious, restless and, besides answering all their questions and keeping them engaged during the more static stages, you must be able to quickly fix the issues they cause while tinkering with technologies that seem simple to them, but are actually highly complex.",
            "In an interview once, I said that middle school kids are extremely demanding clients given that they cause machine downtime, they don't understand why (and sometimes, in the heat of the moment, neither did I), but they quickly lose patience if the robot stops moving. You have to find the bug as fast as possible to keep their attention and prevent them from getting bored. This continuous process of discovering new bugs and troubleshooting them under pressure allowed me to vastly expand my skills."
          ],
          image: "IMG_4991.jpg",
          imagePos: "right"
        },
        {
          heading: "Learning by teaching",
          paragraphs: [
            "At university, you only start talking about robotics around your third year, and if you are interested, you dig deeper during your Master's degree. The problem is that it often stops there since you study them, but you never actually see them. I chose engineering because I wanted to understand robotics, but coming from a technical high school, all that pure theory felt too restrictive. Robolab was my life jacket, the perfect opportunity to clash with real-world technical problems beyond the theoretical algorithms seen in university lecture halls. And I did all this while teaching students how to operate those very same machines.",
            "It was on the field that I realized communication issues between devices are a daily occurrence, that a poorly calibrated sensor can freeze an entire cell, or that constantly loading backups can saturate the memory of robot controllers. And that's not all: if there is a software licensing issue, you have to interface with technical support and figure out how the distributor works; if an input/output signal drops, you have to grab a screwdriver, a multimeter, and some good old willpower to check the physical wiring. And if the system keeps throwing a system failure... well, back then I tried everything and it was truly beyond my knowledge at the time. Maybe in a little while, with more experience under my belt, I'll be able to tell you why."
          ],
          image: "IMG_4997.jpg",
          imagePos: "left"
        },
        {
          heading: "Beyond engineering",
          paragraphs: [
            "Technically, I learned a massive amount, though I am aware that in other contexts, like a university hyper-tech team, I might have explored different aspects. I will never know for sure, but I am convinced of one thing: on a human level, this experience gave me tools I could hardly have found anywhere else. Talking about robotics to people of all ages forced me to learn how to communicate complex technical topics to anyone; and the younger the audience, the harder the challenge became. Explaining inverse kinematics to a high school junior is tough, but making a middle schooler grasp singularity points is even harder. You can't mention the Jacobian matrix or matrix calculus there, but you have to make them understand it visually, showing what happens and explaining why the machine locks up.",
            "The most challenging group, however, was elementary school. At first, I struggled because while I could adapt a similar register for other ages, everything falls apart at eight years old. At that age, it's still all magic. The communication style completely flips and you become a storyteller, and you have to be great at spinning engaging narratives about robotics. You have to make them understand that a robot moves a bit like us (so no, it cannot fly), making them realize that at the same time, it is a machine profoundly different from a human being.",
            "All this public speaking completely stripped away my stage fright and taught me how to improvise speeches and activities on the fly, but the real school was something else. While I had to manage groups of 20 or 30 restless kids in the labs, in the last year I took over the coordination of a team of ten facilitators. Dialogue and transparency were the methods I adopted from day one, placing myself at their level while remaining a steady point of reference. It felt a bit like becoming a captain again back when I played soccer. And, just like back then, I think it worked."
          ],
          image: "IMG_4908.jpg",
          imagePos: "right"
        },
        {
          heading: "A few numbers",
          paragraphs: [
            "Over my five years in the lab, more than 8,000 students passed through. In the last six months alone, between middle and high schools, we welcomed about 500 students, whose feedback we collected through a final survey. It might seem like a trivial formality, but analyzing this data was an excellent exercise in receiving real feedback, understanding what worked, and deciding which direction to take to improve.",
            "The results proved us right since the overall satisfaction rate was 98.3%, a total victory. But the most telling metric, especially for the lab's orientation goal, is the 65.9% of students who believe the activity was helpful for choosing their next educational path. Although the percentage is slightly higher among boys, it was an extraordinary result to see that 58.6% of the girls found the experience valuable, completely hitting the goal of bridging the gap for young women in STEM disciplines.",
            "Finally, it was wonderful to read some of the comments that perfectly captured the impact of what we were doing:",
            "> \"It was a wonderful experience, the staff was attentive, very kind, and helpful; they guided an engaging activity! To be repeated and done for all ages!\"\n> — Female Student",
            "> \"It was great to interface with people more or less our own age.\"\n> — Female Student",
            "> \"They were very good, explained everything clearly, and are very kind. I definitely recommend it—an experience worth trying, highly innovative and nice for anyone who is curious and likes learning about robotics. Kudos to the guys who came up with this project.\"\n> — Male Student",
            "Five years later, \"earning some pocket money for vacations\" is just a distant memory. What remains is everything else, from the resolved bugs, the kids who catch a passion for what you help them discover to a team I learned to lead without ever stopping to be a part of it. Robolab gave me much more than I ever thought I was giving back."
          ],
          image: "IMG_4989.jpg",
          imagePos: "right"
        }
      ]
    }
  };

  const currentData = content[lang];

  return (
    <PageTransition>
      <main className="min-h-[100dvh] pt-32 pb-24 px-4 md:px-12 lg:px-24 max-w-[1400px] mx-auto text-ivory">

        {/* Navigation & Language Toggle */}
        <div className="mb-16 flex flex-col sm:flex-row sm:items-center justify-between gap-6 max-w-5xl mx-auto border-b border-white/10 pb-6">
          <Link to="/engineering" className="inline-flex items-center gap-2 text-slate-400 hover:text-emerald-500 transition-colors font-medium text-sm group w-fit">
            <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-emerald-500/10 transition-colors">
              <ArrowLeft className="group-hover:-translate-x-0.5 transition-transform" />
            </div>
            <span>Back to Engineering</span>
          </Link>

          <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-4 py-2 w-fit">
            <Translate className="text-emerald-500" />
            <button
              onClick={() => setLang('it')}
              className={`text-sm font-medium transition-colors ${lang === 'it' ? 'text-emerald-400' : 'text-slate-500 hover:text-slate-300'}`}
            >
              ITA
            </button>
            <span className="text-slate-600">|</span>
            <button
              onClick={() => setLang('en')}
              className={`text-sm font-medium transition-colors ${lang === 'en' ? 'text-emerald-400' : 'text-slate-500 hover:text-slate-300'}`}
            >
              ENG
            </button>
          </div>
        </div>

        {/* Header Content */}
        <article className="max-w-4xl mx-auto mb-32">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-bold tracking-tight mb-8 leading-[1.2]"
          >
            {currentData.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-slate-300 leading-relaxed font-light"
          >
            {currentData.intro}
          </motion.p>
        </article>

        {/* Scrolling Sections */}
        <div className="flex flex-col gap-32">
          {currentData.sections.map((section, idx) => {
            const isLeft = section.imagePos === 'left';
            return (
              <div key={idx} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start relative max-w-6xl mx-auto w-full">

                {/* Desktop Image Column (Sticky) */}
                <div className={`hidden lg:block lg:col-span-5 sticky top-32 ${isLeft ? 'lg:order-1' : 'lg:order-2'}`}>
                  {section.image && (
                    <motion.div
                      initial={{ opacity: 0, filter: 'blur(10px)' }}
                      whileInView={{ opacity: 1, filter: 'blur(0px)' }}
                      viewport={{ margin: "-20%", once: true }}
                      transition={{ duration: 0.8 }}
                      className="w-full aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
                    >
                      <img
                        src={`${import.meta.env.BASE_URL}images/robolab/${section.image}`}
                        alt={section.heading}
                        className="w-full h-full object-cover grayscale-[0.8] hover:grayscale-0 transition-all duration-700"
                      />
                    </motion.div>
                  )}
                </div>

                {/* Center Text Content */}
                <div className={`lg:col-span-7 space-y-8 ${isLeft ? 'lg:order-2' : 'lg:order-1'}`}>
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-10%" }}
                    className="text-2xl md:text-3xl font-bold text-emerald-400 mb-6"
                  >
                    {section.heading}
                  </motion.h2>

                  {section.paragraphs.map((p, pIdx) => {
                    if (p.startsWith('>')) {
                      return (
                        <motion.blockquote
                          key={pIdx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true, margin: "-10%" }}
                          className="pl-6 border-l-2 border-emerald-500/50 italic text-slate-400 py-2 space-y-2 bg-white/5 rounded-r-xl pr-4"
                        >
                          {p.split('\n').map((line, lIdx) => (
                            <p key={lIdx} className="leading-relaxed">{line.replace(/^>\s*/, '')}</p>
                          ))}
                        </motion.blockquote>
                      );
                    }
                    return (
                      <motion.p
                        key={pIdx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-10%" }}
                        className="text-slate-300 leading-relaxed text-[17px]"
                      >
                        {p}
                      </motion.p>
                    );
                  })}

                  {/* Mobile Image (shown underneath text on small screens) */}
                  {section.image && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="block lg:hidden w-full aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 mt-8 shadow-xl"
                    >
                      <img
                        src={`${import.meta.env.BASE_URL}images/robolab/${section.image}`}
                        alt={section.heading}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  )}
                </div>

              </div>
            );
          })}
        </div>
      </main>
    </PageTransition>
  );
}
