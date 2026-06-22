import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TerminalWindow, ChartLineUp, GitBranch } from '@phosphor-icons/react';

// Wrapper for the spotlight hover effect and consistent glass styling
const SpotlightCard = ({ children, className = '' }: { children: React.ReactNode, className?: string }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`glass-card group relative overflow-hidden border-white/5 hover:border-emerald-500/30 transition-colors duration-500 ${className}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(16,185,129,0.1),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
      <div className="relative z-10 h-full flex flex-col">
        {children}
      </div>
    </motion.div>
  );
};

export const ROSTerminalCard = () => {
  const allLogs = [
    { text: '[INFO] /master_node initializing...', color: 'text-slate-300' },
    { text: '[INFO] Spawning ur_kinematics_solver...', color: 'text-slate-300' },
    { text: '[INFO] Establishing bridge connection...', color: 'text-slate-300' },
    { text: '[WARN] Compensating network latency: 42ms...', color: 'text-amber-400' },
    { text: '[INFO] Computing inverse dynamics...', color: 'text-slate-300' },
    { text: '[INFO] Publishing joint states (topic: /joint_states)', color: 'text-slate-300' },
    { text: '[OK] Teleoperation loop stable at 500Hz', color: 'text-emerald-500' },
  ];
  
  const [logs, setLogs] = useState<typeof allLogs>([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => {
        if (prev >= allLogs.length) return 0; // Reset loop
        return prev + 1;
      });
    }, 1200);
    return () => clearInterval(timer);
  }, [allLogs.length]);

  useEffect(() => {
    if (index === 0) setLogs([]);
    else setLogs(allLogs.slice(0, index));
  }, [index]);

  return (
    <SpotlightCard className="md:col-span-2 min-h-[300px]">
      <div className="flex flex-col h-full gap-6">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <TerminalWindow className="text-emerald-500 text-2xl" />
            <h3 className="text-xl font-bold text-ivory">Robotics & Teleoperation</h3>
          </div>
          <p className="text-slate-300 leading-relaxed">
            Developing software architectures for manipulator kinematics and remote-control loops using ROS and C++.
          </p>
        </div>
        
        <div className="bg-obsidian border border-white/5 rounded-xl p-4 font-mono text-xs overflow-hidden min-h-[140px] flex-grow flex flex-col justify-end w-full">
          <AnimatePresence>
          {logs.map((log, i) => (
            <motion.div 
              key={`${i}-${log.text}`}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              className={`mb-1 ${log.color}`}
            >
              <span className="text-slate-500 mr-2">{'>'}</span>{log.text}
            </motion.div>
          ))}
          <motion.div 
            animate={{ opacity: [1, 0] }} 
            transition={{ repeat: Infinity, duration: 0.8 }}
            className="w-2 h-4 bg-emerald-500 mt-1"
          />
          </AnimatePresence>
        </div>
      </div>
    </SpotlightCard>
  );
};

export const StepResponseCard = () => {
  return (
    <SpotlightCard className="min-h-[300px]">
      <div className="flex flex-col h-full justify-between gap-6">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <ChartLineUp className="text-emerald-500 text-2xl" />
            <h3 className="text-xl font-bold text-ivory">Control Systems</h3>
          </div>
          <p className="text-slate-300 text-sm leading-relaxed">
            Designing and simulating closed-loop controllers (PID, LQR) in MATLAB/Simulink to stabilize dynamic systems and optimize performance.
          </p>
        </div>

        <div className="mt-auto h-[140px] min-h-[140px] w-full border-l-2 border-b-2 border-slate-700/50 flex items-end">
          <svg viewBox="0 0 200 100" className="w-full h-full overflow-visible" preserveAspectRatio="none">
          {/* Grid lines */}
          <line x1="0" y1="25" x2="200" y2="25" stroke="rgba(255,255,255,0.05)" strokeDasharray="4 4" />
          <line x1="0" y1="50" x2="200" y2="50" stroke="rgba(255,255,255,0.05)" strokeDasharray="4 4" />
          <line x1="0" y1="75" x2="200" y2="75" stroke="rgba(255,255,255,0.05)" strokeDasharray="4 4" />
          
          {/* Target line */}
          <line x1="0" y1="30" x2="200" y2="30" stroke="rgba(16,185,129,0.3)" strokeDasharray="2 2" strokeWidth="1" />
          
          {/* Step response path */}
          <motion.path
            d="M 0,100 L 20,100 L 30,10 C 45,5 55,45 70,25 C 85,15 95,33 110,28 C 125,25 140,30 200,30"
            fill="none"
            stroke="#10B981"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 2.5,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "loop",
              repeatDelay: 1
            }}
          />
        </svg>
      </div>
      </div>
    </SpotlightCard>
  );
};

export const SFCDiagramCard = () => {
  const [activeState, setActiveState] = useState(0);
  const states = ['INIT', 'PROCESS', 'SYNC'];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveState((prev) => (prev + 1) % states.length);
    }, 1500);
    return () => clearInterval(timer);
  }, [states.length]);

  return (
    <SpotlightCard className="min-h-[300px]">
      <div className="flex flex-col h-full justify-between gap-6">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <GitBranch className="text-emerald-500 text-2xl" />
            <h3 className="text-xl font-bold text-ivory">Industrial Automation</h3>
          </div>
          <p className="text-slate-300 text-sm leading-relaxed">
            Writing reliable PLC logic, programming finite state machines, and managing hardware commissioning for industrial automation loops.
          </p>
        </div>

        <div className="mt-auto h-[140px] min-h-[140px] w-full flex justify-center items-center relative">
          {/* Connecting line */}
          <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 h-0.5 bg-slate-800 -z-10"></div>
          
          <div className="w-full flex justify-center items-center gap-4">
            {states.map((state, i) => {
            const isActive = activeState === i;
            return (
              <div key={state} className="flex flex-col items-center relative">
                <motion.div 
                  animate={{ 
                    borderColor: isActive ? '#10B981' : 'rgba(255,255,255,0.1)',
                    backgroundColor: isActive ? 'rgba(16,185,129,0.1)' : '#0D0D12',
                    boxShadow: isActive ? '0 0 15px rgba(16,185,129,0.3)' : 'none'
                  }}
                  className="w-16 h-10 border-2 rounded flex items-center justify-center mb-2 z-10 transition-colors duration-300"
                >
                  {isActive && (
                    <motion.div 
                      layoutId="sfc-indicator"
                      className="w-2 h-2 rounded-full bg-emerald-500 absolute -top-1 -right-1"
                    />
                  )}
                  <span className={`text-[10px] font-mono ${isActive ? 'text-emerald-500' : 'text-slate-500'}`}>
                    {state}
                  </span>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
      </div>
    </SpotlightCard>
  );
};
