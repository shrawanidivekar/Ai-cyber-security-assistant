import React from 'react';
import { motion } from 'motion/react';
import { 
  ShieldCheck, 
  ArrowRight, 
  Radar, 
  Database, 
  Cpu, 
  Lock 
} from 'lucide-react';

interface LandingScreenProps {
  onGetStarted: () => void;
}

const LandingScreen = React.memo(({ onGetStarted }: LandingScreenProps) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-surface relative overflow-hidden">
      {/* Atmospheric Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/10 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-[-5%] right-[-5%] w-[40%] h-[40%] bg-secondary-container/15 blur-[120px] rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(164,230,255,0.05)_0%,transparent_70%)]"></div>
      </div>

      <main className="w-full max-w-7xl px-6 relative z-10 text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mb-12 inline-flex items-center justify-center w-24 h-24 bg-primary/10 rounded-3xl border border-primary/20 shadow-[0_0_50px_rgba(164,230,255,0.2)] mx-auto"
        >
          <ShieldCheck className="text-primary w-12 h-12" />
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-headline text-6xl md:text-9xl font-bold text-on-surface tracking-tighter mb-8 leading-none will-change-transform"
        >
          AI Cyber Security Assistant: <span className="text-primary">Scam Guard</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-body text-xl md:text-2xl text-on-surface-variant max-w-3xl mx-auto mb-16 leading-relaxed font-light will-change-transform"
        >
          The world's most advanced AI-powered scam detection platform. 
          Protecting your digital identity with real-time neural analysis and threat neutralization.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col md:flex-row items-center justify-center gap-6 will-change-transform"
        >
          <button 
            onClick={onGetStarted}
            className="group relative flex items-center gap-4 px-12 py-6 bg-gradient-to-br from-primary to-primary-container rounded-2xl text-on-primary font-headline font-bold text-xl transition-all duration-300 hover:scale-[1.05] active:scale-95 shadow-[0_20px_60px_-15px_rgba(164,230,255,0.4)] will-change-transform"
          >
            GET STARTED
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </button>
          
          <button className="px-12 py-6 bg-surface-low border border-outline-variant/30 rounded-2xl text-on-surface font-headline font-bold text-xl hover:bg-surface-high transition-all">
            VIEW DOCUMENTATION
          </button>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto opacity-60"
        >
          {[
            { label: 'Real-time Scan', icon: Radar },
            { label: 'Threat Database', icon: Database },
            { label: 'Neural Core', icon: Cpu },
            { label: 'AES-256 Security', icon: Lock }
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center gap-3">
              <item.icon className="w-6 h-6 text-primary" />
              <span className="font-label text-[10px] uppercase tracking-widest font-bold">{item.label}</span>
            </div>
          ))}
        </motion.div>
      </main>

      <footer className="absolute bottom-12 left-0 w-full text-center opacity-30">
        <p className="font-label text-[10px] uppercase tracking-[0.4em]">© 2024 AI CYBER SECURITY ASSISTANT DEFENSE SYSTEMS. ALL RIGHTS RESERVED.</p>
      </footer>
    </div>
  );
});

export default LandingScreen;
