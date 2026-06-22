import { motion, useScroll, useTransform } from 'framer-motion';
import { PageTransition } from '../components/PageTransition';
import { ArrowRight, TerminalWindow, MapPin, Code, ShieldCheck } from '@phosphor-icons/react';
import { ROSTerminalCard, StepResponseCard, SFCDiagramCard } from '../components/MotionEngineCards';

export default function Home() {
  const { scrollYProgress } = useScroll();
  const yImage = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  return (
    <PageTransition>
      <main className="relative w-full text-obsidian bg-obsidian">
        {/* Hero Section */}
        <section className="relative min-h-[100dvh] flex flex-col justify-center overflow-hidden w-full pt-32 pb-20">

          {/* Asymmetric Split Layout */}
          <div className="grid grid-cols-1 md:grid-cols-12 w-full flex-grow relative z-10">

            {/* Left Content Area */}
            <div className="col-span-1 md:col-span-7 flex flex-col justify-center px-4 md:px-12 lg:px-24 py-12">
              <div className="max-w-2xl">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, type: 'spring', stiffness: 100, damping: 20 }}
                >
                  <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[1.1] mb-6 text-ivory drop-shadow-lg">
                    Lorenzo <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">
                      Ghessi
                    </span>
                  </h1>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, type: 'spring', stiffness: 100, damping: 20 }}
                >
                  <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-10 max-w-[45ch]">
                    MSc Automation & Control Engineering student. Developing model-mediated teleoperation
                    systems with communication delay compensation.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, type: 'spring', stiffness: 100, damping: 20 }}
                  className="flex flex-wrap gap-4 mb-12"
                >
                  <button className="glass-panel group flex items-center gap-2 px-6 py-3 rounded-full text-ivory font-medium hover:bg-emerald-500 hover:text-obsidian hover:border-emerald-500 transition-all duration-300 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                    <span>View Engineering</span>
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button className="flex items-center gap-2 px-6 py-3 rounded-full text-slate-300 font-medium hover:text-ivory transition-colors duration-300 border border-white/5 bg-white/5 hover:bg-white/10">
                    <TerminalWindow />
                    <span className="font-mono text-sm">Download CV</span>
                  </button>
                </motion.div>

                {/* Operator ID Card - Moved under buttons */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8, type: 'spring', stiffness: 100, damping: 20 }}
                  className="relative group rounded-3xl max-w-lg"
                >
                  {/* Spotlight background effect */}
                  <div className="absolute -inset-0.5 bg-gradient-to-br from-emerald-500 to-transparent opacity-20 group-hover:opacity-40 blur-xl transition-opacity duration-500 rounded-3xl"></div>

                  {/* ID Badge Content */}
                  <div className="relative glass-card !p-6 border-emerald-500/20 shadow-2xl flex flex-col">
                    <div className="flex justify-between items-start mb-4 border-b border-white/10 pb-3">
                      <span className="text-[10px] sm:text-xs font-mono text-emerald-500 uppercase tracking-widest flex items-center gap-2">
                        <ShieldCheck weight="duotone" className="text-lg" />
                        Operator ID
                      </span>
                      <span className="text-[10px] sm:text-xs font-mono text-slate-500">AUTH-LVL-1</span>
                    </div>

                    <div className="flex gap-5 items-start">
                      {/* Profile Photo */}
                      <div className="w-24 sm:w-28 shrink-0 flex flex-col items-center">
                        <div className="w-full aspect-[4/3] rounded-xl overflow-hidden border border-white/10 shadow-inner relative group-hover:border-emerald-500/50 transition-colors duration-500">
                          <img
                            src={`${import.meta.env.BASE_URL}images/profile_pic.jpg`}
                            alt="Lorenzo Ghessi"
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-emerald-500 mix-blend-overlay opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                        </div>
                        <div className="mt-3 flex items-center justify-center gap-1.5 bg-emerald-500/10 px-2 py-1 rounded-full border border-emerald-500/20 w-full">
                          <span className="relative flex h-1.5 w-1.5 shrink-0">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                          </span>
                          <span className="text-[8px] sm:text-[9px] font-mono text-emerald-400 uppercase leading-none whitespace-nowrap overflow-hidden text-ellipsis">Jul 2026</span>
                        </div>
                      </div>

                      {/* Meta Data */}
                      <div className="flex flex-col gap-3 w-full justify-center py-1">
                        <div>
                          <p className="text-slate-500 font-mono text-[9px] uppercase mb-0.5">Location</p>
                          <p className="text-ivory font-medium text-xs sm:text-sm flex items-center gap-1.5">
                            <MapPin className="text-emerald-500 shrink-0" />
                            Milano / Genova
                          </p>
                        </div>
                        <div>
                          <p className="text-slate-500 font-mono text-[9px] uppercase mb-0.5">Education</p>
                          <p className="text-ivory font-medium text-xs sm:text-sm flex items-center gap-1.5">
                            <Code className="text-emerald-500 shrink-0" />
                            MSc PoliMi
                          </p>
                        </div>
                        <div className="relative h-9">
                          {/* Standard State */}
                          <div className="absolute inset-0 transition-opacity duration-300 ease-in-out group-hover:opacity-0 flex flex-col justify-start pointer-events-none">
                            <p className="text-slate-500 font-mono text-[9px] uppercase mb-0.5">Current Role</p>
                            <p className="text-ivory font-medium text-xs sm:text-sm flex items-start sm:items-center gap-1.5 leading-tight">
                              <TerminalWindow className="text-emerald-500 shrink-0 mt-0.5 sm:mt-0" />
                              Robotics Research Intern @ Leonardo
                            </p>
                          </div>

                          {/* Hover State: Links */}
                          <div className="absolute inset-0 transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100 flex flex-col justify-start pointer-events-none group-hover:pointer-events-auto">
                            <p className="text-slate-500 font-mono text-[9px] uppercase mb-0.5">Network</p>
                            <div className="flex items-center gap-3">
                              <a href="https://linkedin.com/in/lorenzoghessi" target="_blank" rel="noopener noreferrer" className="font-mono text-xs sm:text-sm text-slate-400 hover:text-emerald-500 transition-colors">
                                [LinkedIn]
                              </a>
                              <a href="https://github.com/lorenzoghessi" target="_blank" rel="noopener noreferrer" className="font-mono text-xs sm:text-sm text-slate-400 hover:text-emerald-500 transition-colors">
                                [GitHub]
                              </a>
                              <a href="mailto:ghessilorenzo@gmail.com" className="font-mono text-xs sm:text-sm text-slate-400 hover:text-emerald-500 transition-colors">
                                [Email]
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Right Asset Area (Parallax Yumi) */}
            <div className="hidden lg:block absolute right-0 top-0 w-[55%] h-full z-0 pointer-events-none [mask-image:radial-gradient(ellipse_at_right,black_20%,transparent_80%)]">
              <motion.div
                style={{ y: yImage }}
                className="absolute inset-0 w-full h-[120%] -top-[10%]"
              >
                <img
                  src={`${import.meta.env.BASE_URL}images/yumi.jpg`}
                  alt="ABB Yumi Cobot"
                  className="w-full h-full object-cover opacity-60 mix-blend-luminosity grayscale"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Bento Grid Section (Core Competencies) */}
        <section className="py-24 px-4 md:px-12 lg:px-24 max-w-7xl mx-auto relative z-10 border-t border-white/5">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-ivory">Core Competencies</h2>
            <p className="text-slate-400 max-w-[60ch] leading-relaxed">A practical approach to robotics, complex control algorithms, and industrial hardware integration.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ROSTerminalCard />
            <StepResponseCard />
            <SFCDiagramCard />
          </div>
        </section>
      </main>
    </PageTransition>
  );
}
