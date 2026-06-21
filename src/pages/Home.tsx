import { motion, useScroll, useTransform } from 'framer-motion';
import { PageTransition } from '../components/PageTransition';
import { ArrowRight, TerminalWindow, CodeBlock, Crosshair, MapPin, CalendarBlank } from '@phosphor-icons/react';

export default function Home() {
  const { scrollYProgress } = useScroll();
  const yImage = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  
  return (
    <PageTransition>
      <main className="relative w-full">
        {/* Hero Section */}
        <section className="relative min-h-[100dvh] flex flex-col justify-center overflow-hidden w-full pt-32 pb-20">
          {/* Asymmetric Split Layout */}
          <div className="grid grid-cols-1 md:grid-cols-12 w-full flex-grow relative z-10">
            {/* Left Content Area */}
            <div className="col-span-1 md:col-span-7 flex flex-col justify-center px-4 md:px-12 lg:px-24">
              <div className="max-w-2xl">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, type: 'spring', stiffness: 100, damping: 20 }}
                >
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-obsidian bg-obsidian/50 backdrop-blur-md mb-8 shadow-sm">
                    <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span className="text-xs font-mono text-slate-300">Available from Jan 2027</span>
                  </div>
                  
                  <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[1.1] mb-6 text-ivory">
                    Lorenzo <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-ivory to-slate-400">
                      Ghessi
                    </span>
                  </h1>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, type: 'spring', stiffness: 100, damping: 20 }}
                >
                  <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-10 max-w-[50ch]">
                    MSc Automation & Control Engineering student. Developing model-mediated teleoperation 
                    systems with communication delay compensation at <span className="text-ivory font-medium">Leonardo S.p.A.</span>
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, type: 'spring', stiffness: 100, damping: 20 }}
                  className="flex flex-wrap gap-4 mb-12"
                >
                  <button className="glass-panel group flex items-center gap-2 px-6 py-3 rounded-full text-ivory font-medium hover:bg-emerald-500 hover:text-obsidian hover:border-emerald-500 transition-all duration-300">
                    <span>View Engineering</span>
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button className="flex items-center gap-2 px-6 py-3 rounded-full text-slate-300 font-medium hover:text-ivory transition-colors duration-300">
                    <TerminalWindow />
                    <span className="font-mono text-sm">Download CV</span>
                  </button>
                </motion.div>

                {/* Live Status Bento */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8, type: 'spring', stiffness: 100, damping: 20 }}
                  className="glass-card !p-6 border-emerald-500/20 hover:border-emerald-500/40 transition-colors shadow-[0_8px_32px_rgba(16,185,129,0.05)]"
                >
                  <div className="flex items-center gap-3 mb-4 border-b border-white/5 pb-3">
                    <div className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                    </div>
                    <span className="text-sm font-mono text-emerald-500 uppercase tracking-widest">Live Status / Current Focus</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div className="flex items-start gap-2">
                      <MapPin className="text-emerald-500 mt-0.5 shrink-0" />
                      <div>
                        <p className="text-slate-400 font-mono text-xs mb-1">LOCATION</p>
                        <p className="text-ivory font-medium">Milan / Genoa, Italy</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <CalendarBlank className="text-emerald-500 mt-0.5 shrink-0" />
                      <div>
                        <p className="text-slate-400 font-mono text-xs mb-1">THESIS GOAL</p>
                        <p className="text-ivory font-medium">Graduating April 2027</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2 md:col-span-2 mt-2">
                      <Crosshair className="text-emerald-500 mt-0.5 shrink-0" />
                      <div>
                        <p className="text-slate-400 font-mono text-xs mb-1">RESEARCH FOCUS</p>
                        <p className="text-ivory font-medium leading-relaxed">Teleoperation systems with delay compensation @ Leonardo S.p.A.</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Right Asset Area (Parallax) */}
            <div className="hidden md:block absolute right-0 top-0 w-[41.666667%] h-full overflow-hidden bg-obsidian border-l border-white/5 z-0">
              <motion.div 
                style={{ y: yImage }}
                className="absolute inset-0 w-full h-[120%] -top-[10%]"
              >
                <img 
                  src={`${import.meta.env.BASE_URL}images/robolab.jpg`} 
                  alt="Robotic laboratory" 
                  className="w-full h-full object-cover opacity-50 mix-blend-luminosity"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-obsidian"></div>
              </motion.div>
              
              {/* Floating tech element */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.0, type: 'spring' }}
                className="absolute bottom-24 right-12 glass-card p-4 rounded-2xl max-w-xs border-emerald-500/20"
              >
                <div className="flex items-center gap-3 mb-2">
                  <CodeBlock weight="duotone" className="text-emerald-500 text-xl" />
                  <span className="text-sm font-mono text-ivory">Terminal</span>
                </div>
                <div className="font-mono text-xs text-slate-300 space-y-1">
                  <p><span className="text-emerald-500">~</span> $ roslaunch teleop core.launch</p>
                  <p className="text-slate-400">Loading model-mediated architecture...</p>
                  <p className="text-emerald-500 animate-pulse">Compensation active. Latency: 45ms</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Core Metrics Bar */}
        <section className="relative z-20 border-y border-white/10 bg-obsidian/80 backdrop-blur-md py-12">
          <div className="max-w-7xl mx-auto px-4 md:px-12 lg:px-24">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
              <div className="flex flex-col items-center justify-center pt-4 md:pt-0 group">
                <span className="text-4xl font-mono text-emerald-500 mb-2 group-hover:scale-105 transition-transform">42.195<span className="text-lg text-slate-400">km</span></span>
                <span className="text-xs font-mono text-slate-300 uppercase tracking-widest group-hover:text-ivory transition-colors">Milano Marathon Finisher</span>
              </div>
              <div className="flex flex-col items-center justify-center pt-8 md:pt-0 group">
                <span className="text-4xl font-mono text-emerald-500 mb-2 group-hover:scale-105 transition-transform">10k+</span>
                <span className="text-xs font-mono text-slate-300 uppercase tracking-widest group-hover:text-ivory transition-colors">ROS / C++ LOC Active</span>
              </div>
              <div className="flex flex-col items-center justify-center pt-8 md:pt-0 group">
                <span className="text-4xl font-mono text-emerald-500 mb-2 group-hover:scale-105 transition-transform">2</span>
                <span className="text-xs font-mono text-slate-300 uppercase tracking-widest group-hover:text-ivory transition-colors">Universities (PoliMi + Chalmers)</span>
              </div>
            </div>
          </div>
        </section>

        {/* Bento Grid Section */}
        <section className="py-32 px-4 md:px-12 lg:px-24 max-w-7xl mx-auto relative z-10">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-ivory">Core Competencies</h2>
            <p className="text-slate-300 max-w-[60ch] leading-relaxed">Specialized in bridging advanced control theory with practical robotic deployments.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Bento Card 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card md:col-span-2 group relative overflow-hidden border-white/5 hover:border-emerald-500/30 transition-colors duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <h3 className="text-xl font-bold mb-3 text-ivory">ROS/C++ Teleoperation</h3>
              <p className="text-slate-300 mb-6 leading-relaxed">Designed model-mediated teleoperation architecture to compensate for variable communication delays.</p>
              <div className="flex flex-wrap gap-2 font-mono text-xs text-emerald-500">
                <span className="px-2 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded">ROS Noetic</span>
                <span className="px-2 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded">C++</span>
                <span className="px-2 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded">Control Systems</span>
              </div>
            </motion.div>
            
            {/* Bento Card 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass-card group border-white/5 hover:border-emerald-500/30 transition-colors duration-500"
            >
              <h3 className="text-xl font-bold mb-3 text-ivory">Industrial Robotics</h3>
              <p className="text-slate-300 leading-relaxed">ABB RobotStudio, PLC commissioning, and computer vision integration for quality inspection.</p>
            </motion.div>
          </div>
        </section>
      </main>
    </PageTransition>
  );
}
