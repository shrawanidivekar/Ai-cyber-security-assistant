import React from 'react';
import { motion } from 'motion/react';
import { 
  Radar, 
  X, 
  AtSign, 
  Lock, 
  ArrowRight, 
  Fingerprint, 
  Smile, 
  UserCheck, 
  Shield, 
  ShieldCheck 
} from 'lucide-react';

interface LoginScreenProps {
  onLogin: () => void;
  onBack: () => void;
}

const LoginScreen = React.memo(({ onLogin, onBack }: LoginScreenProps) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-surface relative overflow-hidden">
      {/* Atmospheric Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-5%] right-[-5%] w-[30%] h-[30%] bg-secondary-container/10 blur-[100px] rounded-full"></div>
      </div>

      <main className="w-full max-w-7xl grid md:grid-cols-12 gap-10 px-6 relative z-10">
        <div className="md:col-span-7 flex flex-col justify-center text-left">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 inline-flex items-center px-3 py-1 bg-primary/10 rounded-lg w-fit"
          >
            <Radar className="text-primary w-4 h-4 mr-2" />
            <span className="font-label text-xs font-bold text-primary uppercase tracking-tighter">Powered by Neural Defense 4.0</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-headline text-5xl md:text-7xl font-bold text-on-surface tracking-tighter mb-6 leading-none"
          >
            AI Cyber Security Assistant: <span className="text-primary">Scam Guard</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-body text-lg text-on-surface-variant max-w-xl mb-12 leading-relaxed"
          >
            Connect your accounts to the world's most advanced AI scam detection engine. We analyze linguistic patterns, metadata, and behavioral fingerprints to keep your enterprise secure.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-2 gap-4 max-w-md"
          >
            <div className="bg-surface-low p-6 rounded-xl border border-outline-variant/5">
              <p className="font-headline text-3xl font-bold text-primary">99.9%</p>
              <p className="font-label text-[10px] uppercase text-on-surface-variant tracking-widest mt-1">Accuracy Rate</p>
            </div>
            <div className="bg-surface-low p-6 rounded-xl border border-outline-variant/5">
              <p className="font-headline text-3xl font-bold text-primary">12ms</p>
              <p className="font-label text-[10px] uppercase text-on-surface-variant tracking-widest mt-1">Latency Response</p>
            </div>
          </motion.div>
        </div>

        <div className="md:col-span-5 flex items-center justify-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="glass-panel w-full p-8 md:p-10 rounded-2xl shadow-2xl relative"
          >
            <div className="mb-8 flex items-center justify-between">
              <div>
                <h3 className="font-headline text-2xl font-bold text-on-surface mb-2">Access Portal</h3>
                <p className="font-body text-sm text-on-surface-variant">Secure authentication required for entry.</p>
              </div>
              <button 
                onClick={onBack}
                className="p-2 rounded-full hover:bg-surface-highest transition-colors text-on-surface-variant"
                title="Back to Landing"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); onLogin(); }}>
              <div className="space-y-2">
                <label className="block font-label text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-1">Identity Vector (Email)</label>
                <div className="relative group">
                  <AtSign className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-on-surface-variant group-focus-within:text-primary transition-colors" />
                  <input 
                    type="email" 
                    placeholder="agent@scamguard.ai"
                    className="w-full bg-surface-container-lowest border border-outline-variant/30 rounded-xl py-4 pl-12 pr-4 text-on-surface placeholder:text-on-surface-variant/40 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-body"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center ml-1">
                  <label className="block font-label text-xs font-bold uppercase tracking-widest text-on-surface-variant">Access Key</label>
                  <button type="button" className="text-[10px] font-bold text-primary hover:text-primary-container uppercase tracking-widest transition-colors">Forgot Key?</button>
                </div>
                <div className="relative group">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-on-surface-variant group-focus-within:text-primary transition-colors" />
                  <input 
                    type="password" 
                    placeholder="••••••••••••"
                    className="w-full bg-surface-container-lowest border border-outline-variant/30 rounded-xl py-4 pl-12 pr-4 text-on-surface placeholder:text-on-surface-variant/40 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-body"
                  />
                </div>
              </div>

              <button 
                type="submit"
                className="w-full cyber-gradient text-on-primary font-headline font-bold py-4 rounded-xl shadow-lg shadow-primary/10 hover:shadow-primary/20 active:scale-[0.98] transition-all flex items-center justify-center gap-2 group mt-8"
              >
                LOGIN
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>

            <div className="mt-10 pt-8 border-t border-outline-variant/10 text-center">
              <p className="font-label text-[10px] uppercase tracking-[0.2em] text-on-surface-variant mb-4">Secondary Verification</p>
              <div className="flex justify-center gap-6">
                <button className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center border border-outline-variant/30 hover:border-primary/50 transition-colors group">
                  <Fingerprint className="w-6 h-6 text-on-surface-variant group-hover:text-primary" />
                </button>
                <button className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center border border-outline-variant/30 hover:border-primary/50 transition-colors group">
                  <Smile className="w-6 h-6 text-on-surface-variant group-hover:text-primary" />
                </button>
              </div>
            </div>

            <div className="absolute -bottom-2 -right-2 opacity-10 pointer-events-none">
              <UserCheck className="w-24 h-24 text-primary" />
            </div>
          </motion.div>
        </div>
      </main>

      <footer className="fixed bottom-0 left-0 w-full p-8 flex flex-col md:flex-row justify-between items-center gap-4 opacity-50 pointer-events-none">
        <div className="flex gap-6 items-center">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4" />
            <span className="font-label text-[10px] uppercase tracking-widest">AES-256 Encrypted</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4" />
            <span className="font-label text-[10px] uppercase tracking-widest">ISO 27001 Certified</span>
          </div>
        </div>
        <p className="font-label text-[10px] uppercase tracking-widest">© 2024 AI CYBER SECURITY ASSISTANT DEFENSE SYSTEMS. ALL RIGHTS RESERVED.</p>
      </footer>
    </div>
  );
});

export default LoginScreen;
