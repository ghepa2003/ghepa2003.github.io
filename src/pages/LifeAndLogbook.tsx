import { motion, useScroll } from 'framer-motion';
import { Link } from 'react-router-dom';
import { PageTransition } from '../components/PageTransition';
import { CinematicGallery } from '../components/CinematicGallery';
import { useRef } from 'react';
import { BookOpen, Lightbulb, ArrowRight } from '@phosphor-icons/react';

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

const SPONSORS = [
  { name: "Marcello Ascani", url: "https://www.youtube.com/@marcelloascani", category: "Vlog & Business" },
  { name: "Mr. RIP", url: "https://www.youtube.com/@mr_rip", category: "FIRE & Tech" },
  { name: "Sourced", url: "https://sourcedweekly.substack.com/", category: "Tech Newsletter" },
  { name: "Ctrl+Cash", url: "https://ctrlcashwillmedia.substack.com/", category: "Finance Substack" },
  { name: "Popcorn In Smoking", url: "https://popcorninsmoking.substack.com/", category: "Cinema Substack" },
  { name: "Scrolling Infinito", url: "https://scrollinginfinito.substack.com/", category: "Society Substack" },
  { name: "Sciuscià", url: "https://cronachedispogliatoio.substack.com/", category: "Sport Substack" },
  { name: "Caffellattech", url: "https://caffellattech.substack.com/", category: "Tech & Society" },
  { name: "Asianometry", url: "https://www.youtube.com/@Asianometry", category: "Tech History & Silicon" },
  { name: "The Pragmatic Engineer", url: "https://www.pragmaticengineer.com/", category: "Tech Newsletter" },
  { name: "Rational Reminder", url: "https://rationalreminder.ca/", category: "Quantitative Finance" },
  { name: "Ben Felix", url: "https://www.youtube.com/@BenFelixCFA", category: "Personal Finance & Data" },
  { name: "Guerre di Rete", url: "https://guerredirete.substack.com/", category: "Cybersecurity & Geopolitics" },
  { name: "GioPizzi", url: "https://www.youtube.com/@GioPizzi", category: "Politics & Society" },
  { name: "Chapeau", url: "https://www.youtube.com/@chapeau_podcast", category: "Interviews & Culture" },
  { name: "Noodles", url: "https://www.youtube.com/@NoodlesPodcast", category: "Cinema & Pop Culture" },
  { name: "Nick Bare", url: "https://www.youtube.com/@NickBareFitness", category: "Fitness & Business" },
  { name: "Parabellum", url: "https://www.youtube.com/@ParabellumStoria", category: "History & Military Analysis" },
  { name: "Omero", url: "https://www.youtube.com/@omeropodcast", category: "Outdoor & Bikepacking" },
  { name: "Domenico Greselin", url: "https://www.youtube.com/@domenicogreselin", category: "Endurance & Hybrid Athlete" }
];

// Duplicate for infinite marquee
const SCROLLING_SPONSORS = [...SPONSORS, ...SPONSORS];

export default function LifeAndLogbook() {
  const containerRef = useRef<HTMLElement>(null);

  // We keep useScroll just in case it is needed later
  useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <PageTransition>
      <div className="pt-32 pb-24 text-obsidian">

        {/* Header Section */}
        <main className="px-4 md:px-12 lg:px-24 max-w-7xl mx-auto mb-24 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 text-obsidian">
              Off the <span className="text-emerald-500">Grid.</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-[60ch] md:mx-0 mx-auto leading-relaxed">
              No Instagram feed, no corporate filter. Just a space dedicated to who I am when the screen is off. Sharing the experiences, endurance training, and curiosities that shape my life beyond academics and engineering.
            </p>
          </motion.div>
        </main>

        {/* Cinematic Scroll Gallery - Full Bleed */}
        <CinematicGallery />

        <main className="px-4 md:px-12 lg:px-24 max-w-7xl mx-auto mt-32">
          {/* What Sports Actually Teach Me Section */}
          <section className="mb-32">
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-2xl font-bold text-obsidian">What Sports Actually Teach Me</h2>
              <div className="h-px bg-slate-custom/10 flex-grow ml-8"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

              {/* Card 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="md:col-span-4 bg-white border border-slate-custom/10 p-8 rounded-[2rem] hover:shadow-xl hover:border-emerald-500/30 transition-all duration-300 flex flex-col justify-start"
              >
                <div className="min-h-[40px] mb-2">
                  <span className="text-[10px] font-mono text-emerald-500 uppercase tracking-widest">1 — ON PERSEVERANCE</span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-obsidian">Building step by step</h3>
                <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                  Sport teaches you pretty quickly that big goals don't come from sudden spikes of adrenaline, but from weeks of boring, invisible consistency. You don't see the final result until you actually cross the finish line. Until then, it’s just about trusting the daily repetition and keeping your head down when the workload gets heavy. It’s a simple mindset where you accept the process, knowing the reward only comes at the very end.
                </p>
              </motion.div>

              {/* Card 2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="md:col-span-4 bg-white border border-slate-custom/10 p-8 rounded-[2rem] hover:shadow-xl hover:border-emerald-500/30 transition-all duration-300 flex flex-col justify-start"
              >
                <div className="min-h-[40px] mb-2">
                  <span className="text-[10px] font-mono text-emerald-500 uppercase tracking-widest">2 — INDIVIDUAL VS TEAM</span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-obsidian">Two sides of the same coin</h3>
                <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                  Playing in a team taught me how to rely on others and, above all, how to be reliable in return, since everything revolves around trust and shared goals. Individual endurance, on the other hand, builds something completely different, like inner discipline and the ability to talk to your own thoughts when nobody is there to push you. I don't feel more like one or the other, I just think you need both to stay balanced.
                </p>
              </motion.div>

              {/* Card 3 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="md:col-span-4 bg-white border border-slate-custom/10 p-8 rounded-[2rem] hover:shadow-xl hover:border-emerald-500/30 transition-all duration-300 flex flex-col justify-start"
              >
                <div className="min-h-[40px] mb-2">
                  <span className="text-[10px] font-mono text-emerald-500 uppercase tracking-widest">3 — THE LESSON OF THE CRAMPS</span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-obsidian">No shortcuts allowed</h3>
                <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                  During a marathon, pushing a pace slightly beyond what I had actually trained for resulted in severe cramps in the final stretch. I managed to finish it, but it left me with a massive lesson, which is that willpower and raw talent can only get you so far without a structured plan. Real performance comes down to respecting the prep work, managing resources smartly, and avoiding reckless shortcuts.
                </p>
              </motion.div>

              {/* Card 4 (Full Width) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="md:col-span-12 bg-obsidian text-ivory border border-obsidian p-8 md:p-12 rounded-[2rem] hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-500 flex flex-col md:flex-row gap-8 items-start md:items-center justify-between group cursor-default"
              >
                <div className="max-w-3xl">
                  <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest mb-4 block">4 — RUNNING FOR RUNNING'S SAKE</span>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">Just a regular run, with nothing to prove</h3>
                  <p className="text-sm md:text-base text-slate-400 leading-relaxed">
                    Not every single session needs a finish line or a race to justify it. Most of the time, it's just about clearing my head after a long day, staying sharp, and enjoying the outdoors. When shared with friends, it simply becomes a great way to catch up without any metrics to beat or egos involved, just the genuine need to be out there moving.
                  </p>
                </div>
              </motion.div>

            </div>
          </section>

          {/* Sources of curiosity */}
          <section className="mb-32">
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-2xl font-bold text-obsidian">Sources of curiosity</h2>
              <div className="h-px bg-slate-custom/10 flex-grow ml-8"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">

              {/* Current Reads Card */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex flex-col bg-white border border-slate-custom/10 p-8 rounded-[2rem] hover:border-emerald-500/30 transition-colors group h-full"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0">
                    <BookOpen className="text-xl text-emerald-500" weight="duotone" />
                  </div>
                  <div>
                    <h3 className="text-sm font-mono text-emerald-600 uppercase tracking-widest">BOOKS</h3>
                    <h4 className="text-lg font-bold text-obsidian">What I read</h4>
                  </div>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  When the screen gets too loud, I often find myself with a book in hand. A collection of stories and essays that keep me company: ranging from classic narratives to reflections on how we function, how we think, and how we construct meaning.
                </p>

                <div className="bg-slate-50 border border-slate-100 p-5 rounded-xl mb-4 flex-grow">
                  <p className="text-[10px] font-mono text-emerald-500 uppercase tracking-widest mb-2">Currently Reading</p>
                  <h4 className="text-base font-bold text-obsidian mb-1">Sapiens</h4>
                  <p className="text-xs text-slate-500 font-medium mb-3">Yuval Noah Harari</p>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    "A brilliant sweep through human evolution, exploring how shared myths and collective imagination allowed Homo Sapiens to dominate the planet and build the complex systems we live in today"
                  </p>
                </div>

                <Link to="/reading-archive" className="mt-auto flex justify-between items-center font-bold text-sm text-obsidian group-hover:text-emerald-600 transition-colors cursor-pointer border-t border-slate-100 pt-4 w-full">
                  <span>Open the Archive</span>
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>

              {/* Sponsor Wall Knowledge Ticker */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="flex flex-col bg-white border border-slate-custom/10 p-8 rounded-[2rem] hover:border-emerald-500/30 transition-colors h-full"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0">
                    <Lightbulb className="text-xl text-emerald-500" weight="duotone" />
                  </div>
                  <div>
                    <h3 className="text-sm font-mono text-emerald-600 uppercase tracking-widest">SOURCES</h3>
                    <h4 className="text-lg font-bold text-obsidian">What I listen to</h4>
                  </div>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  Channels, podcasts, and newsletters I follow to feed my curiosity: economists, historians, storytellers, and minds that think deeply about how the world works.
                </p>

                {/* Infinite Horizontal Marquee Container */}
                <div className="relative flex-grow flex flex-col justify-center gap-4 overflow-hidden group/ticker [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)] py-2">

                  {/* Row 1: Left (Moderate speed) */}
                  <div className="flex w-max animate-marquee-horizontal group-hover/ticker:[animation-play-state:paused]">
                    {SCROLLING_SPONSORS.map((sponsor, idx) => (
                      <a href={sponsor.url} target="_blank" rel="noopener noreferrer" key={`r1-${idx}`} className="mx-2 px-4 py-2 bg-slate-50 border border-slate-100 rounded-full flex-shrink-0 transition-colors duration-200 hover:border-emerald-200 block group/link">
                        <div className="flex items-center">
                          <span className="text-sm font-bold text-obsidian whitespace-nowrap group-hover/link:text-emerald-500 transition-colors duration-200">{sponsor.name}</span>
                          <span className="max-w-0 opacity-0 overflow-hidden group-hover/link:max-w-xs group-hover/link:opacity-100 group-hover/link:ml-2 transition-all duration-300 ease-out whitespace-nowrap font-mono text-[11px] text-emerald-500">[{sponsor.category}]</span>
                        </div>
                      </a>
                    ))}
                  </div>

                  {/* Row 2: Right (Slower speed) */}
                  <div className="flex w-max animate-marquee-horizontal-reverse group-hover/ticker:[animation-play-state:paused]">
                    {SCROLLING_SPONSORS.map((sponsor, idx) => (
                      <a href={sponsor.url} target="_blank" rel="noopener noreferrer" key={`r2-${idx}`} className="mx-2 px-4 py-2 bg-slate-50 border border-slate-100 rounded-full flex-shrink-0 transition-colors duration-200 hover:border-emerald-300 block group/link">
                        <div className="flex items-center">
                          <span className="text-sm font-bold text-emerald-700 whitespace-nowrap group-hover/link:text-emerald-500 transition-colors duration-200">{sponsor.name}</span>
                          <span className="max-w-0 opacity-0 overflow-hidden group-hover/link:max-w-xs group-hover/link:opacity-100 group-hover/link:ml-2 transition-all duration-300 ease-out whitespace-nowrap font-mono text-[11px] text-emerald-500">[{sponsor.category}]</span>
                        </div>
                      </a>
                    ))}
                  </div>

                  {/* Row 3: Left (Faster speed) */}
                  <div className="flex w-max animate-marquee-horizontal-fast group-hover/ticker:[animation-play-state:paused]">
                    {SCROLLING_SPONSORS.map((sponsor, idx) => (
                      <a href={sponsor.url} target="_blank" rel="noopener noreferrer" key={`r3-${idx}`} className="mx-2 px-4 py-2 bg-slate-50 border border-slate-100 rounded-full flex-shrink-0 transition-colors duration-200 hover:border-emerald-200 block group/link">
                        <div className="flex items-center">
                          <span className="text-sm font-bold text-slate-500 whitespace-nowrap group-hover/link:text-emerald-500 transition-colors duration-200">{sponsor.name}</span>
                          <span className="max-w-0 opacity-0 overflow-hidden group-hover/link:max-w-xs group-hover/link:opacity-100 group-hover/link:ml-2 transition-all duration-300 ease-out whitespace-nowrap font-mono text-[11px] text-emerald-500">[{sponsor.category}]</span>
                        </div>
                      </a>
                    ))}
                  </div>

                </div>
              </motion.div>

            </div>
          </section>

          {/* Logbook / Blog Section */}
          {/* TODO: Set to true / Uncomment to render articles when the first real post is written */}
          {false && (
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
          )}

        </main>
      </div>
    </PageTransition>
  );
}
