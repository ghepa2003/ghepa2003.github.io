import { motion, useScroll } from 'framer-motion';
import { PageTransition } from '../components/PageTransition';
import { useRef } from 'react';
import { UsersThree, GlobeHemisphereWest, Mountains, BookOpen, Lightbulb, ArrowRight } from '@phosphor-icons/react';

// Logbook Posts (Dummy content)
const LOGBOOK_POSTS = [
  {
    id: 1,
    title: 'The Architecture of Delay: Teleoperation over Networks',
    category: 'Engineering & Life',
    date: 'Jun 12, 2026',
    readTime: '8 min read',
    excerpt: 'Exploring how model-mediated architectures can elegantly hide network latency during remote robotic manipulation, preserving stability and operator immersion.',
    image: 'https://picsum.photos/seed/teleoperation/800/600',
    link: '#'
  },
  {
    id: 2,
    title: 'Pacing the Pavement: The Physics of the Marathon Mindset',
    category: 'Sport Mindset',
    date: 'Apr 05, 2026',
    readTime: '5 min read',
    excerpt: 'What preparing for a 42km race taught me about nonlinear progression, fatigue management, and holding a steady rhythm when the system is under stress.',
    image: `${import.meta.env.BASE_URL}images/marathon.jpg`,
    link: '#'
  },
  {
    id: 3,
    title: 'Fault Tolerance: Building Resilience in Code and Habits',
    category: 'Resilience',
    date: 'Jan 22, 2026',
    readTime: '6 min read',
    excerpt: 'When a control loop fails, the system must recover gracefully. The exact same principle applies to managing burn-out, training plateaus, and daily routines.',
    image: 'https://picsum.photos/seed/resilience/800/600',
    link: '#'
  }
];

export default function LifeAndLogbook() {
  const containerRef = useRef<HTMLElement>(null);
  
  // We keep useScroll just in case it is needed later, but we will remove scrollYProgress to fix the TS error.
  useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <PageTransition>
      <main ref={containerRef} className="min-h-[100dvh] pt-32 pb-24 px-4 md:px-12 lg:px-24 max-w-7xl mx-auto text-obsidian">
        
        {/* Header Section */}
        <section className="mb-24 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 text-obsidian">
              The <span className="text-emerald-500">Human Element</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-[60ch] md:mx-0 mx-auto leading-relaxed">
              Oltre il codice e i sistemi di controllo. Un ecosistema fatto di resistenza fisica, curiosità intellettuale e dinamiche di squadra.
            </p>
          </motion.div>
        </section>

        {/* Photography Grid */}
        <section className="mb-32">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 h-[600px]">
            {/* Main Feature */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="md:col-span-8 relative rounded-[2rem] overflow-hidden group"
            >
              <img 
                src={`${import.meta.env.BASE_URL}images/marathon.jpg`} 
                alt="Milano Marathon Finisher" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-8 left-8">
                <span className="px-3 py-1 bg-ivory/80 text-obsidian backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-wider mb-3 inline-block">Endurance</span>
                <h3 className="text-2xl font-bold text-ivory">High-Cadence Dynamics</h3>
              </div>
            </motion.div>

            {/* Secondary Column */}
            <div className="md:col-span-4 grid grid-rows-2 gap-4">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="relative rounded-[2rem] overflow-hidden group"
              >
                <img 
                  src={`${import.meta.env.BASE_URL}images/cycling.jpg`} 
                  alt="PolimiRide Cremona" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-[2rem] p-8 flex flex-col justify-center border border-slate-custom/10 shadow-sm"
              >
                <div className="text-4xl font-mono text-emerald-500 mb-2">160<span className="text-lg text-slate-600">bpm</span></div>
                <p className="text-sm text-slate-600">Target aerobic threshold for sustained power delivery.</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* The Mindset Matrix */}
        <section className="mb-32">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-2xl font-bold text-obsidian">The Mindset Matrix</h2>
            <div className="h-px bg-slate-custom/10 flex-grow ml-8"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white border border-slate-custom/10 p-8 rounded-[2rem] hover:shadow-lg transition-shadow"
            >
              <UsersThree className="text-3xl text-emerald-500 mb-6" weight="duotone" />
              <h3 className="text-xl font-bold mb-3 text-obsidian">Team Dynamics</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Dal campo di gioco alla gestione di 10 persone come coordinatore in Assolombarda. I problemi complessi si risolvono solo con empatia, comunicazione e un approccio collaborativo.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white border border-slate-custom/10 p-8 rounded-[2rem] hover:shadow-lg transition-shadow"
            >
              <GlobeHemisphereWest className="text-3xl text-emerald-500 mb-6" weight="duotone" />
              <h3 className="text-xl font-bold mb-3 text-obsidian">Cultural Adaptability</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                L'esperienza Erasmus in Svezia alla Chalmers University. Uscire dalla comfort zone per abbracciare nuovi metodi di lavoro e adattarsi rapidamente a contesti internazionali.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white border border-slate-custom/10 p-8 rounded-[2rem] hover:shadow-lg transition-shadow"
            >
              <Mountains className="text-3xl text-emerald-500 mb-6" weight="duotone" />
              <h3 className="text-xl font-bold mb-3 text-obsidian">Endurance & Resilience</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Correre 42 km o pedalare per ore non è solo una questione di battito cardiaco. Insegna la pazienza, la gestione delle energie a lungo termine e la forza di non mollare sotto pressione.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Intellectual Inputs */}
        <section className="mb-32">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-2xl font-bold text-obsidian">Intellectual Inputs</h2>
            <div className="h-px bg-slate-custom/10 flex-grow ml-8"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-start gap-6 bg-white border border-slate-custom/10 p-8 rounded-[2rem] hover:border-emerald-500/30 transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0">
                <BookOpen className="text-xl text-emerald-500" weight="duotone" />
              </div>
              <div>
                <h3 className="text-sm font-mono text-emerald-600 uppercase tracking-widest mb-1">Current Reads</h3>
                <h4 className="text-lg font-bold text-obsidian mb-2">The Innovator's Dilemma</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Esplorando i framework decisionali che separano i sistemi resilienti da quelli obsoleti, sia nel management che nell'architettura del software.
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex items-start gap-6 bg-white border border-slate-custom/10 p-8 rounded-[2rem] hover:border-emerald-500/30 transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0">
                <Lightbulb className="text-xl text-emerald-500" weight="duotone" />
              </div>
              <div>
                <h3 className="text-sm font-mono text-emerald-600 uppercase tracking-widest mb-1">Continuous Learning</h3>
                <h4 className="text-lg font-bold text-obsidian mb-2">Lex Fridman Podcast</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Deep dive periodici nell'AI, sistemi di controllo autonomi e filosofia della tecnologia. Un ponte perfetto tra ricerca accademica e innovazione pratica.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Logbook / Blog Section */}
        <section>
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-2xl font-bold text-obsidian">Logbook Entries</h2>
            <div className="h-px bg-slate-custom/10 flex-grow ml-8"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {LOGBOOK_POSTS.map((post, idx) => (
              <motion.a 
                href={post.link}
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group flex flex-col bg-white rounded-[2rem] border border-slate-200 overflow-hidden hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:border-emerald-500/50 transition-all duration-300 relative"
              >
                {/* Spotlight Gradient on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 via-emerald-500/0 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                
                <div className="h-48 overflow-hidden relative border-b border-slate-100">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-ivory/90 backdrop-blur-md border border-white/50 rounded-full text-xs font-mono text-emerald-600 font-bold shadow-sm">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-8 flex flex-col flex-grow z-10 relative">
                  <div className="flex justify-between items-center text-xs text-slate-500 font-mono mb-4">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-obsidian mb-3 group-hover:text-emerald-600 transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-slate-600 text-sm leading-relaxed mb-8 flex-grow">
                    {post.excerpt}
                  </p>
                  
                  <div className="mt-auto flex justify-between items-center border-t border-slate-100 pt-5">
                    <span className="text-sm font-bold text-obsidian group-hover:text-emerald-600 transition-colors">Read Entry</span>
                    <div className="w-8 h-8 rounded-full bg-ivory flex items-center justify-center text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                      <ArrowRight weight="bold" className="group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </section>

      </main>
    </PageTransition>
  );
}
