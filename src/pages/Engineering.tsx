import { motion } from 'framer-motion';
import { PageTransition } from '../components/PageTransition';
import { GraduationCap, ArrowRight, FilePdf } from '@phosphor-icons/react';
import { useNavigate } from 'react-router-dom';

export default function Engineering() {
  const navigate = useNavigate();
  const experiences = [
    /* TODO: Uncomment to restore Leonardo S.p.A. experience when ready
    {
      company: 'Leonardo S.p.A.',
      role: 'Robotics Research Intern',
      period: '07/2026 – Present',
      location: 'Genoa, Italy',
      points: [
        'Designed and implemented a model-mediated teleoperation architecture in ROS/C++ to compensate for variable communication delays.',
        'Developed and validated control algorithms for object manipulation with delayed feedback, integrating hardware-in-the-loop testing on a real robotic system.'
      ]
    },
    */
    {
      company: 'Assolombarda - Fondazione Ingegno',
      role: 'Laboratory Coordinator',
      period: '09/2021 – Present',
      location: 'Monza',
      points: [
        'Managed a team of 10 facilitators across shift planning and technical operations, maintaining full uptime of ABB YuMi cobots and Lab 4.0 equipment.',
        'Designed new didactic modules integrating ABB RobotStudio and cobot programming.',
        'Delivered hands-on robotics workshops to 1000+ middle and high school students across 4+ years.'
      ]
    },
    {
      company: 'Delta Service Automation',
      role: 'Engineering Intern | PLC & HMI',
      period: '09/2024 – 10/2024',
      location: 'Vaprio d\'Adda',
      points: [
        'Debugged and optimized PLC/HMI software (DELTA) on automatic labeling and product-tracking machines, directly reducing machine downtime.',
        'Revised electrical schematics, authored technical maintenance manuals, and modeled 3D mechanical assemblies in SolidWorks.'
      ]
    }
  ];

  const projects = [
    {
      title: 'Flexible Joint Control',
      tags: ['MATLAB', 'Simulink', 'Control Systems'],
      period: '02/2026 – 06/2026',
      desc: 'Experimental parameter identification (friction, spring stiffness) and synthesis of frequency-domain and state-space controllers (LQR, H∞, MRAC, SMC) for precise tip positioning under uncertainty.',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'Trajectory control for a Mobile Robot',
      tags: ['ROS', 'C++', 'Linux'],
      period: '10/2025 – 11/2025',
      desc: 'Built a Turtlebot simulator in Linux/ROS Noetic (Boost Odeint); designed a PI tracking controller with feedback linearization and velocity feed-forward.',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'Drone Real-Time Control',
      tags: ['C/C++', 'FreeRTOS', 'Embedded'],
      period: '04/2025 – 06/2025',
      desc: 'Developed dynamic model in Simscape, synthesized LQR controller in MATLAB/Simulink, and implemented control code on real hardware using an RTOS architecture.',
      image: 'https://images.unsplash.com/photo-1527430253228-e93688616381?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'Vision-Based Assistance for Memory Card Game',
      tags: ['Computer Vision', 'Python', 'Image Processing'],
      period: '05/2025',
      desc: "Developed a vision system to guide and automate a game of 'Memory'. Implemented advanced image analysis algorithms for precise card detection and state tracking, achieving a final recognition accuracy of 99.4%.",
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'Electric Drive Systems Modeling',
      tags: ['MATLAB / Simulink', 'Electric Drives', 'Dynamic Systems'],
      period: '01/2025 – 03/2025',
      desc: 'Modeled and analyzed electric machine drive systems, including PMDC, PMSM, and Induction Motors. Simulated transient performance and operability to evaluate the dynamics and control loops of core electric propulsion components.',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'Industrial Robotic Cell 4.0',
      tags: ['PLC Programming', 'ABB RobotStudio', 'Industrial Networks'],
      period: '03/2021 – 06/2021',
      desc: 'Designed and programmed a complete pick-and-place cell by integrating an ABB industrial manipulator, a Siemens S7-1200 PLC, and a custom HMI dashboard, interfacing them with a computer vision system for real-time quality inspection.',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800'
    }
  ];

  const articles = [
    {
      title: 'Robolab: Four Years of Robotics, Problem Solving, and Team Management',
      desc: 'Reflection on what it means to teach robotics to over 1000 students and coordinate an educational laboratory.',
      tags: ["Robotics", "Project Management", "Team Leadership", "STEM Education"],
      link: '/engineering/robolab'
    }
  ];

  return (
    <PageTransition>
      <main className="min-h-[100dvh] pt-32 pb-24 px-4 md:px-12 lg:px-24 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">

          {/* Header Column (Sticky Sidebar) */}
          <div className="lg:col-span-4">
            <div className="sticky top-32">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 text-ivory">Engineering<br />Log.</h1>
              <p className="text-slate-300 mb-8 max-w-[40ch] leading-relaxed">
                A structured breakdown of my technical background, academic path, and engineering projects in robotics and control automation.
              </p>


              {/* Technical Stack */}
              <div className="mb-12">
                <div className="flex items-center gap-4 mb-6">
                  <h2 className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">Technical Stack</h2>
                  <div className="h-px bg-white/10 flex-grow"></div>
                </div>

                <div className="space-y-4">
                  <div>
                    <span className="font-bold text-ivory text-sm block mb-1">Software & Tools</span>
                    <span className="font-mono text-xs text-slate-300 leading-relaxed">
                      ROS/ROS2, Linux (Ubuntu), MATLAB/Simulink, ABB RobotStudio, SolidWorks, AutoCAD
                    </span>
                  </div>
                  <div>
                    <span className="font-bold text-ivory text-sm block mb-1">Programming</span>
                    <span className="font-mono text-xs text-slate-300 leading-relaxed">
                      C/C++, Python, PLC Programming (Ladder, ST, SFC)
                    </span>
                  </div>
                  <div>
                    <span className="font-bold text-ivory text-sm block mb-1">Core Expertise</span>
                    <span className="font-mono text-xs text-slate-300 leading-relaxed">
                      Multivariable Control, Dynamic Systems Modeling, Industrial & Mobile Robotics, Industrial Communication Systems, Computer Vision, Hardware Commissioning
                    </span>
                  </div>
                </div>
              </div>

              {/* Download CV Button */}
              <motion.a
                href={`${import.meta.env.BASE_URL}ghessi_CV.pdf`}
                download="Lorenzo_Ghessi_CV.pdf"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-obsidian border border-emerald-500/50 text-emerald-500 font-medium hover:bg-emerald-500 hover:text-obsidian transition-colors shadow-[0_0_15px_rgba(16,185,129,0.1)] hover:shadow-[0_0_20px_rgba(16,185,129,0.3)]"
              >
                <FilePdf weight="duotone" className="text-xl" />
                <span>Download Full CV (.pdf)</span>
              </motion.a>
            </div>
          </div>

          {/* Data Column (Scrolling Right Panel) */}
          <div className="lg:col-span-8 space-y-24">

            {/* Education Section */}
            <section>
              <h2 className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-8 border-b border-white/10 pb-2">00 // Education</h2>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="border border-emerald-500/10 hover:border-emerald-500/30 transition-colors rounded-2xl p-6 bg-obsidian/50 backdrop-blur-sm shadow-[0_8px_32px_rgba(16,185,129,0.02)]"
              >
                <div className="flex items-center gap-3 mb-6">
                  <GraduationCap className="text-emerald-500 text-xl" />
                  <h3 className="text-lg font-bold text-ivory">Academic Trajectory</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
                  <div className="py-4 md:py-0 md:pr-6 flex flex-col h-full">
                    <p className="font-mono text-xs text-emerald-500 mb-1">2016 — 2021</p>
                    <p className="font-bold text-ivory mb-1">Mechatronics Diploma</p>
                    <p className="text-sm text-slate-300 font-medium">ITT E. Breda</p>
                    <p className="text-sm text-slate-400 mt-3 leading-relaxed flex-grow">
                      Core foundations in PLC programming, electronics, and industrial automation networks.
                    </p>
                  </div>
                  <div className="py-4 md:py-0 md:px-6 flex flex-col h-full">
                    <p className="font-mono text-xs text-emerald-500 mb-1">2021 — Present</p>
                    <p className="font-bold text-ivory mb-1">BSc & MSc</p>
                    <p className="text-sm text-slate-300 font-medium">Politecnico di Milano</p>
                    <p className="text-sm text-slate-400 mt-3 leading-relaxed flex-grow">
                      Automation and Control Engineering with specialization in robotics and industrial automation.
                    </p>
                  </div>
                  <div className="py-4 md:py-0 md:pl-6 flex flex-col h-full">
                    <p className="font-mono text-xs text-emerald-500 mb-1">2025</p>
                    <p className="font-bold text-ivory mb-1">Erasmus+ Program</p>
                    <p className="text-sm text-slate-300 font-medium">Göteborg, Sweden</p>
                    <p className="text-sm text-slate-400 mt-3 leading-relaxed flex-grow">
                      Chalmers University of Technology. Specializing in advanced robotics and international technical collaboration.
                    </p>
                  </div>
                </div>
              </motion.div>
            </section>

            {/* Experience Section */}
            <section>
              <h2 className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-8 border-b border-white/10 pb-2">01 // Experience</h2>
              <div className="flex flex-col space-y-12">
                {experiences.map((exp, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-10%" }}
                    className="group"
                  >
                    <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-4">
                      <h3 className="text-xl font-bold text-ivory group-hover:text-emerald-500 transition-colors">{exp.company}</h3>
                      <span className="font-mono text-sm text-slate-400">{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-ivory font-medium opacity-90">{exp.role}</span>
                      <span className="w-1 h-1 rounded-full bg-slate-500"></span>
                      <span className="text-slate-300 text-sm">{exp.location}</span>
                    </div>
                    <ul className="space-y-3 text-slate-300 text-sm leading-relaxed max-w-[75ch]">
                      {exp.points.map((pt, j) => (
                        <li key={j} className="flex gap-4">
                          <span className="text-emerald-500 font-mono select-none mt-0.5">→</span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Key Projects Section */}
            <section>
              <h2 className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-8 border-b border-white/10 pb-2">02 // Key Projects</h2>
              <div className="flex flex-col space-y-0 divide-y divide-white/5 border-t border-white/5">
                {projects.map((proj, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="py-8 group hover:bg-emerald-500/5 px-4 -mx-4 transition-colors rounded-xl"
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                      <div className="flex flex-col md:flex-row md:items-center gap-4">
                        <h3 className="text-lg font-bold text-ivory group-hover:text-emerald-500 transition-colors">{proj.title}</h3>
                        {/* Tech Badges */}
                        <div className="flex flex-row items-center gap-2">
                          {proj.tags.map((tag, j) => (
                            <span key={j} className="font-mono text-[10px] text-emerald-500 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded whitespace-nowrap">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      <span className="text-xs font-mono text-slate-400 shrink-0">{proj.period}</span>
                    </div>
                    <p className="text-slate-300 text-sm max-w-[80ch] leading-relaxed">
                      {proj.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Experience Notes Section */}
            <section>
              <h2 className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-8 border-b border-white/10 pb-2">03 // Experience Notes</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {articles.map((article, i) => (
                  <motion.div
                    key={i}
                    onClick={() => article.link && navigate(article.link)}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ y: -5 }}
                    viewport={{ once: true }}
                    className={`glass-card group relative overflow-hidden border border-white/5 hover:border-emerald-500/30 transition-all duration-500 p-6 flex flex-col cursor-pointer shadow-lg hover:shadow-xl hover:shadow-emerald-500/5 ${i === 0 ? 'md:col-span-2' : ''}`}
                  >
                    {/* Spotlight radial gradient */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(16,185,129,0.1),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                    <div className="relative z-10 flex flex-col h-full">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {article.tags.map((tag, j) => (
                          <span key={j} className="font-mono text-[10px] text-slate-400 border border-slate-700 px-2 py-0.5 rounded uppercase">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-ivory mb-3 group-hover:text-emerald-500 transition-colors">{article.title}</h3>
                      <p className="text-slate-300 text-sm leading-relaxed mb-6 flex-grow">
                        {article.desc}
                      </p>
                      <div className="mt-auto flex items-center gap-2 text-emerald-500 text-sm font-medium">
                        <span>Read Entry</span>
                        <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

          </div>
        </div>
      </main>
    </PageTransition>
  );
}
