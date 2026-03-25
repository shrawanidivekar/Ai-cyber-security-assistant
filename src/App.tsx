import React, { useState, useEffect } from 'react';
import { GoogleGenAI, Type, ThinkingLevel } from "@google/genai";
import { 
  ShieldCheck, 
  ShieldAlert, 
  Radar, 
  History, 
  FileText, 
  Shield, 
  User, 
  Menu, 
  Bell, 
  Settings,
  Sparkles,
  AtSign,
  Lock,
  ArrowRight,
  Fingerprint,
  Smile,
  UserCheck,
  Terminal,
  Eye,
  Flag,
  TrendingUp,
  Lightbulb,
  Network,
  Link2Off,
  Key,
  Globe,
  Info,
  AlertTriangle,
  X,
  Image,
  Camera,
  Upload,
  ChevronRight,
  Database,
  Cpu
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { Screen, ScanResult, HistoryItem } from './types';

// --- Components ---

const Navbar = React.memo(({ currentScreen, setScreen }: { currentScreen: Screen, setScreen: (s: Screen) => void }) => {
  return (
    <>
      {/* Top Nav (Desktop) */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-surface/80 backdrop-blur-md border-b border-outline-variant px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => setScreen('login')}>
          <ShieldCheck className="text-primary w-8 h-8" />
          <h1 className="font-headline font-bold tracking-widest text-primary text-xl uppercase">AI CYBER SECURITY ASSISTANT</h1>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-6">
            {(['scan', 'history', 'report', 'safety'] as Screen[]).map((s) => (
              <button
                key={s}
                onClick={() => setScreen(s)}
                className={`font-label text-sm font-bold uppercase tracking-tighter transition-colors ${
                  currentScreen === s ? 'text-primary' : 'text-on-surface hover:text-primary'
                }`}
              >
                {s}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-4 border-l border-outline-variant pl-8">
            <Bell className="w-5 h-5 text-on-surface-variant cursor-pointer hover:text-primary transition-colors" />
            <Settings 
              onClick={() => setScreen('settings')}
              className={`w-5 h-5 cursor-pointer transition-colors ${currentScreen === 'settings' ? 'text-primary' : 'text-on-surface-variant hover:text-primary'}`} 
            />
            <div 
              onClick={() => setScreen('profile')}
              className={`w-10 h-10 rounded-full flex items-center justify-center border cursor-pointer transition-all ${
                currentScreen === 'profile' ? 'bg-primary/20 border-primary' : 'bg-surface-highest border-outline-variant hover:border-primary/50'
              }`}
            >
              <User className={`w-5 h-5 ${currentScreen === 'profile' ? 'text-primary' : 'text-on-surface-variant'}`} />
            </div>
          </div>
        </div>
        
        <div className="md:hidden">
          <Menu className="text-on-surface w-6 h-6" />
        </div>
      </nav>

      {/* Bottom Nav (Mobile) */}
      <nav className="fixed bottom-0 left-0 w-full z-50 bg-surface/80 backdrop-blur-md border-t border-outline-variant px-4 pb-6 pt-3 flex justify-around items-center md:hidden">
        {[
          { id: 'scan', icon: Radar, label: 'Scan' },
          { id: 'history', icon: History, label: 'History' },
          { id: 'report', icon: FileText, label: 'Reports' },
          { id: 'safety', icon: Shield, label: 'Safety' },
          { id: 'profile', icon: User, label: 'Profile' }
        ].map((item) => (
          <button
            key={item.id}
            onClick={() => setScreen(item.id as Screen)}
            className={`flex flex-col items-center justify-center px-3 py-1 transition-all duration-200 ${
              currentScreen === item.id 
                ? 'bg-primary text-on-primary rounded-xl scale-110 shadow-[0_0_15px_rgba(164,230,255,0.4)]' 
                : 'text-on-surface/60'
            }`}
          >
            <item.icon className="w-5 h-5 mb-1" />
            <span className="font-label text-[10px] font-bold uppercase tracking-tighter">{item.label}</span>
          </button>
        ))}
      </nav>
    </>
  );
});

const LandingScreen = React.memo(({ onGetStarted }: { onGetStarted: () => void }) => {
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
          className="font-headline text-6xl md:text-9xl font-bold text-on-surface tracking-tighter mb-8 leading-none"
        >
          AI Cyber Security Assistant: <span className="text-primary">Scam Guard</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-body text-xl md:text-2xl text-on-surface-variant max-w-3xl mx-auto mb-16 leading-relaxed font-light"
        >
          The world's most advanced AI-powered scam detection platform. 
          Protecting your digital identity with real-time neural analysis and threat neutralization.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col md:flex-row items-center justify-center gap-6"
        >
          <button 
            onClick={onGetStarted}
            className="group relative flex items-center gap-4 px-12 py-6 bg-gradient-to-br from-primary to-primary-container rounded-2xl text-on-primary font-headline font-bold text-xl transition-all duration-300 hover:scale-[1.05] active:scale-95 shadow-[0_20px_60px_-15px_rgba(164,230,255,0.4)]"
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

const LoginScreen = React.memo(({ onLogin, onBack }: { onLogin: () => void, onBack: () => void }) => {
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

const LiveInterceptor = React.memo(() => {
  const [logs, setLogs] = useState<{ id: string, type: string, origin: string, time: string }[]>([]);

  useEffect(() => {
    const threatTypes = ['Phishing Link', 'Spoofed Header', 'Social Engineering', 'Malicious Payload', 'Credential Harvest'];
    const origins = ['IP: 192.168.1.104', 'SMTP: relay-72.net', 'HTTPS: secure-login.com', 'SMS: +1 405...', 'IP: 45.2.11.90'];

    const interval = setInterval(() => {
      const newLog = {
        id: Math.random().toString(36).substring(7).toUpperCase(),
        type: threatTypes[Math.floor(Math.random() * threatTypes.length)],
        origin: origins[Math.floor(Math.random() * origins.length)],
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })
      };
      setLogs(prev => [newLog, ...prev].slice(0, 5));
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-surface-high rounded-xl p-6 border border-outline-variant/10 relative overflow-hidden">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Terminal className="text-primary w-4 h-4" />
          <h3 className="text-sm font-headline font-bold uppercase tracking-widest">Live Interceptor</h3>
        </div>
        <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-error/10 border border-error/20">
          <span className="w-1 h-1 rounded-full bg-error animate-pulse"></span>
          <span className="text-[8px] font-bold text-error uppercase tracking-widest">Active Interception</span>
        </div>
      </div>

      <div className="space-y-3">
        <AnimatePresence initial={false}>
          {logs.map((log) => (
            <motion.div 
              key={log.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="p-3 rounded-lg bg-surface-low border border-outline-variant/5 flex items-center justify-between group"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-error/10 flex items-center justify-center">
                  <ShieldAlert className="w-4 h-4 text-error" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-on-surface group-hover:text-error transition-colors">{log.type}</p>
                  <p className="text-[8px] text-on-surface-variant font-mono">{log.origin}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-[8px] font-mono text-on-surface-variant">{log.time}</p>
                <p className="text-[8px] font-bold text-primary uppercase tracking-tighter">Neutralized</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        {logs.length === 0 && (
          <div className="py-8 text-center opacity-30">
            <Radar className="w-8 h-8 mx-auto mb-2 animate-spin-slow" />
            <p className="text-[10px] uppercase tracking-widest">Scanning Network...</p>
          </div>
        )}
      </div>
    </div>
  );
});

const ScannerScreen = React.memo(({ onScan, isScanning }: { onScan: (text: string, imageData?: string) => void, isScanning: boolean }) => {
  const [input, setInput] = useState('');
  const [image, setImage] = useState<string | null>(null);
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleClear = () => {
    setInput('');
    setImage(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  return (
    <div className="pt-24 pb-32 px-4 md:px-8 max-w-7xl mx-auto w-full">
      <div className="flex flex-col items-center text-center mb-16 mt-8">
        <div className="flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-surface-low border border-outline-variant/15">
          <div className={`status-pulse ${isScanning ? 'bg-primary animate-ping' : ''}`}></div>
          <span className="text-xs font-label font-bold text-primary tracking-widest uppercase">
            {isScanning ? 'Neural Engine Analyzing...' : 'Live Threat Intelligence Active'}
          </span>
        </div>
        <h1 className="text-5xl md:text-7xl font-headline font-bold text-on-surface tracking-tight leading-tight mb-6">
          AI Cyber Security Assistant: <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-container">Scam</span> <span className="text-primary">Guard</span>
        </h1>
        <p className="text-on-surface-variant max-w-2xl text-lg md:text-xl font-light leading-relaxed">
          Advanced neural networks trained to dissect linguistic patterns and technical markers of modern fraud.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-8 bg-surface-low rounded-xl p-6 md:p-8 relative border border-outline-variant/10">
          <div className="flex justify-between items-center mb-6">
            <label className="font-headline text-lg font-bold text-on-surface flex items-center gap-2">
              <Terminal className="text-primary w-5 h-5" />
              Paste message or upload image
            </label>
            <span className="text-xs font-label text-on-surface-variant bg-surface-container px-3 py-1 rounded-full">MAX 5000 CHARS / 1 IMAGE</span>
          </div>
          
          <div className="space-y-6">
            <textarea 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="w-full h-48 bg-surface-container-lowest border-none rounded-xl p-6 text-on-surface placeholder:text-on-surface-variant/30 focus:ring-2 focus:ring-primary/40 resize-none font-body text-lg transition-all" 
              placeholder="Example: 'Your account has been locked. Click here to verify your identity immediately or your assets will be frozen...'"
            />

            <div className="flex flex-col sm:flex-row gap-4">
              <input 
                type="file" 
                accept="image/*" 
                className="hidden" 
                ref={fileInputRef}
                onChange={handleImageUpload}
              />
              <button 
                onClick={() => fileInputRef.current?.click()}
                className="flex items-center gap-3 px-6 py-4 rounded-xl bg-surface-container hover:bg-surface-highest transition-all text-on-surface font-bold border border-outline-variant/20"
              >
                <Upload className="w-5 h-5 text-primary" />
                UPLOAD IMAGE
              </button>
              
              {image && (
                <div className="relative group">
                  <img src={image} alt="Preview" className="h-14 w-24 object-cover rounded-lg border border-outline-variant/30" />
                  <button 
                    onClick={() => setImage(null)}
                    className="absolute -top-2 -right-2 bg-error text-on-error rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className="mt-8 flex flex-col md:flex-row gap-4 items-center">
            <button 
              onClick={() => onScan(input, image || undefined)}
              disabled={isScanning || (!input.trim() && !image)}
              className="w-full md:w-auto bg-gradient-to-br from-primary to-primary-container text-on-primary font-headline font-extrabold text-xl px-12 py-5 rounded-xl shadow-[0_10px_40px_-10px_rgba(164,230,255,0.3)] hover:scale-[1.02] transition-all active:scale-95 group disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
            >
              {isScanning ? 'ANALYZING...' : 'DETECT SCAM'}
              {isScanning ? (
                <Sparkles className="w-6 h-6 animate-pulse" />
              ) : (
                <Radar className="w-6 h-6 inline group-hover:rotate-45 transition-transform" />
              )}
            </button>
            <button 
              onClick={handleClear}
              disabled={isScanning}
              className="w-full md:w-auto bg-transparent border border-outline-variant/20 hover:bg-surface-high text-on-surface font-bold px-8 py-5 rounded-xl transition-all disabled:opacity-30"
            >
              CLEAR INPUT
            </button>
          </div>
        </div>

        <div className="lg:col-span-4 flex flex-col gap-6">
          <div className="bg-surface-high rounded-xl p-6 border border-outline-variant/5">
            <h3 className="font-headline font-bold text-primary mb-6 flex items-center gap-2">
              <Lightbulb className="w-5 h-5" />
              QUICK PROTOCOLS
            </h3>
            <ul className="space-y-4">
              {[
                { icon: AtSign, title: 'Verify Sender', desc: 'Check email headers for spoofing markers.' },
                { icon: ArrowRight, title: 'Check for Phishing', desc: 'Deep link inspection for hidden redirects.' },
                { icon: Network, title: 'Urgency Analysis', desc: 'Detection of social engineering pressure tactics.' }
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4 p-4 rounded-lg bg-surface-low hover:bg-surface-highest transition-all cursor-pointer group">
                  <item.icon className="w-5 h-5 text-primary-container" />
                  <div>
                    <p className="text-sm font-bold text-on-surface group-hover:text-primary transition-colors">{item.title}</p>
                    <p className="text-xs text-on-surface-variant mt-1">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <LiveInterceptor />

          <div className="bg-primary/5 rounded-xl p-6 border border-primary/10 relative overflow-hidden group">
            <div className="relative z-10">
              <p className="text-[3.5rem] font-headline font-bold text-primary leading-none tracking-tighter">99.9%</p>
              <p className="text-on-surface-variant font-label font-bold uppercase tracking-widest text-xs mt-2">Threat Detection Accuracy</p>
            </div>
            <div className="absolute -right-4 -bottom-4 opacity-20 group-hover:scale-110 transition-transform duration-700">
              <Shield className="w-32 h-32" />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { icon: UserCheck, title: 'Zero Trust Architecture', desc: 'Our AI assumes every incoming communication is a potential vector until cryptographically verified.' },
          { icon: Network, title: 'Neural Threat Map', desc: 'Real-time synchronization with global scam databases to identify emerging 0-day phishing campaigns.' },
          { icon: Lock, title: 'Privacy First Scanning', desc: 'All messages are processed in volatile memory with end-to-end encryption. No PII is ever stored.' }
        ].map((item, i) => (
          <div key={i} className="p-8 rounded-xl bg-surface-container-lowest border border-outline-variant/10">
            <item.icon className="text-primary w-8 h-8 mb-4" />
            <h4 className="font-headline font-bold text-on-surface mb-2">{item.title}</h4>
            <p className="text-on-surface-variant text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
});

const ReportScreen = React.memo(({ result }: { result: ScanResult }) => {
  const pieData = [
    { name: 'Risk', value: result.riskScore },
    { name: 'Safe', value: 100 - result.riskScore }
  ];
  const COLORS = [result.riskScore > 50 ? '#ffb4ab' : '#a4e6ff', '#31353c'];

  return (
    <div className="pt-24 pb-32 px-4 md:px-8 max-w-7xl mx-auto w-full">
      <div className="mb-12 text-center md:text-left">
        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${result.riskScore > 50 ? 'bg-error/10 border-error/20' : 'bg-primary/10 border-primary/20'} mb-4`}>
          <span className={`w-2 h-2 rounded-full ${result.riskScore > 50 ? 'bg-error animate-pulse' : 'bg-primary'}`}></span>
          <span className={`${result.riskScore > 50 ? 'text-error' : 'text-primary'} font-headline font-bold text-xs tracking-widest uppercase`}>
            {result.riskScore > 50 ? 'High Risk Threat Identified' : 'Communication Verified'}
          </span>
        </div>
        <h2 className="font-headline text-5xl md:text-7xl font-bold tracking-tight text-on-surface mb-2">
          {result.riskScore > 50 ? 'SCAM DETECTED' : 'SAFE VERIFIED'}
        </h2>
        <p className="text-on-surface-variant max-w-2xl text-lg">
          {result.riskScore > 50 
            ? 'Our neural engine has identified high-confidence malicious patterns within the analyzed content. Immediate caution is advised.'
            : 'Our neural engine has analyzed the content and found no significant indicators of fraud or malicious intent.'}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="md:col-span-5 bg-surface-low rounded-xl p-8 flex flex-col items-center justify-center relative overflow-hidden group">
          <div className={`absolute -top-24 -right-24 w-64 h-64 ${result.riskScore > 50 ? 'bg-error/5 group-hover:bg-error/10' : 'bg-primary/5 group-hover:bg-primary/10'} rounded-full blur-3xl transition-colors`}></div>
          <h3 className="font-headline text-sm font-bold tracking-widest text-on-surface-variant uppercase mb-10">Threat Magnitude</h3>
          <div className="relative w-64 h-64 flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={80}
                  outerRadius={90}
                  paddingAngle={5}
                  dataKey="value"
                  stroke="none"
                  startAngle={90}
                  endAngle={450}
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1c2026', border: '1px solid rgba(60, 73, 78, 0.15)', borderRadius: '8px' }}
                  itemStyle={{ color: '#dfe2eb' }}
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <span className={`font-headline text-7xl font-bold ${result.riskScore > 50 ? 'text-error' : 'text-primary'} leading-none`}>{result.riskScore}%</span>
              <span className="font-label text-xs font-bold text-on-surface-variant uppercase tracking-widest mt-2">Risk Score</span>
            </div>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-4 w-full">
            <div className="p-4 rounded-lg bg-surface-container-lowest border border-outline-variant/10 text-center">
              <p className="text-[10px] font-bold text-on-surface-variant uppercase mb-1">Confidence</p>
              <p className="font-headline text-lg font-bold text-primary">{result.confidence}%</p>
            </div>
            <div className="p-4 rounded-lg bg-surface-container-lowest border border-outline-variant/10 text-center">
              <p className="text-[10px] font-bold text-on-surface-variant uppercase mb-1">Threat Type</p>
              <p className={`font-headline text-lg font-bold ${result.riskScore > 50 ? 'text-error' : 'text-primary'}`}>{result.threatType}</p>
            </div>
          </div>
        </div>

        <div className="md:col-span-7 grid grid-cols-1 gap-6">
          <div className="bg-surface-container rounded-xl p-8 border border-outline-variant/5">
            <div className="flex items-center gap-3 mb-6">
              <Terminal className="text-primary w-5 h-5" />
              <h3 className="font-headline text-lg font-bold text-on-surface">Detected Markers</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {result.keywords.map((kw, i) => (
                <span key={i} className={`px-4 py-2 rounded-lg bg-surface-highest/40 text-on-surface-variant font-label text-sm border border-outline-variant/15 flex items-center gap-2`}>
                  {result.riskScore > 50 ? (
                    <AlertTriangle className="text-error w-4 h-4" />
                  ) : (
                    <ShieldCheck className="text-primary w-4 h-4" />
                  )}
                  {kw}
                </span>
              ))}
            </div>
            <div className={`mt-8 p-6 rounded-xl bg-surface-container-lowest/50 border-l-4 ${result.riskScore > 50 ? 'border-error' : 'border-primary'}`}>
              <p className="text-sm italic text-on-surface-variant leading-relaxed">
                "{result.analysis}"
              </p>
            </div>
          </div>

          {result.authenticityAnalysis && (
            <div className="bg-surface-container rounded-xl p-8 border border-outline-variant/5">
              <div className="flex items-center gap-3 mb-6">
                <ShieldCheck className="text-primary w-5 h-5" />
                <h3 className="font-headline text-lg font-bold text-on-surface">Image Authenticity</h3>
              </div>
              <div className={`p-6 rounded-xl border-l-4 ${result.isRealImage ? 'bg-primary/5 border-primary' : 'bg-error/5 border-error'}`}>
                <div className="flex items-center gap-3 mb-4">
                  {result.isRealImage ? (
                    <UserCheck className="text-primary w-6 h-6" />
                  ) : (
                    <AlertTriangle className="text-error w-6 h-6" />
                  )}
                  <span className={`font-headline font-bold ${result.isRealImage ? 'text-primary' : 'text-error'}`}>
                    {result.isRealImage ? 'LIKELY AUTHENTIC' : 'POTENTIAL MANIPULATION DETECTED'}
                  </span>
                </div>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  {result.authenticityAnalysis}
                </p>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-surface-high rounded-xl p-6 relative group cursor-pointer hover:bg-surface-highest transition-all border border-outline-variant/10">
              <div className="flex justify-between items-start mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <Eye className="w-6 h-6" />
                </div>
                <ArrowRight className="text-on-surface-variant group-hover:translate-x-1 transition-transform" />
              </div>
              <h4 className="font-headline font-bold text-lg mb-1">View Detailed Analysis</h4>
              <p className="text-xs text-on-surface-variant">Breakdown of syntax, server headers, and metadata correlations.</p>
            </div>
            <div className="bg-surface-high rounded-xl p-6 relative group cursor-pointer hover:bg-surface-highest transition-all border border-outline-variant/10">
              <div className="flex justify-between items-start mb-4">
                <div className="w-12 h-12 rounded-xl bg-error/10 flex items-center justify-center text-error">
                  <Flag className="w-6 h-6" />
                </div>
                <ArrowRight className="text-on-surface-variant group-hover:translate-x-1 transition-transform" />
              </div>
              <h4 className="font-headline font-bold text-lg mb-1">Report Threat</h4>
              <p className="text-xs text-on-surface-variant">Flag this instance to the global AI Cyber Security Assistant threat database.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 opacity-60">
        <div className="flex items-center gap-4 py-4 border-t border-outline-variant/15">
          <span className="text-xs font-bold font-label uppercase tracking-tighter">Node:</span>
          <span className="text-xs font-mono">AI-CYBER-ASSISTANT-X9-ALPHA</span>
        </div>
        <div className="flex items-center gap-4 py-4 border-t border-outline-variant/15">
          <span className="text-xs font-bold font-label uppercase tracking-tighter">Timestamp:</span>
          <span className="text-xs font-mono">{result.timestamp}</span>
        </div>
        <div className="flex items-center gap-4 py-4 border-t border-outline-variant/15">
          <span className="text-xs font-bold font-label uppercase tracking-tighter">Trace ID:</span>
          <span className="text-xs font-mono">{result.traceId}</span>
        </div>
      </div>
    </div>
  );
});

const NeuralPulse = React.memo(() => {
  const [trends, setTrends] = useState<{ title: string, desc: string, risk: 'High' | 'Medium' }[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTrends = async () => {
      try {
        const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
        const response = await ai.models.generateContent({
          model: "gemini-3-flash-preview",
          contents: "What are the top 3 most common or trending digital scams right now (March 2026)? Provide a brief title and a one-sentence description for each. Format as JSON array of objects with 'title', 'desc', and 'risk' (High/Medium) fields.",
          config: {
            thinkingConfig: { thinkingLevel: ThinkingLevel.LOW },
            tools: [{ googleSearch: {} }],
            responseMimeType: "application/json",
            responseSchema: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  title: { type: Type.STRING },
                  desc: { type: Type.STRING },
                  risk: { type: Type.STRING, enum: ['High', 'Medium'] }
                },
                required: ['title', 'desc', 'risk']
              }
            }
          }
        });
        const data = JSON.parse(response.text || "[]");
        setTrends(data);
      } catch (error) {
        console.error("Failed to fetch trends:", error);
        setTrends([
          { title: "AI Voice Cloning", desc: "Scammers use AI to mimic loved ones' voices for urgent money requests.", risk: 'High' },
          { title: "QR Code Phishing", desc: "Malicious QR codes in public places redirect to credential-stealing sites.", risk: 'Medium' },
          { title: "Crypto Recovery Scams", desc: "Fraudsters promise to recover lost crypto for an upfront fee.", risk: 'High' }
        ]);
      } finally {
        setLoading(false);
      }
    };
    fetchTrends();
  }, []);

  return (
    <div className="bg-surface-low rounded-xl p-8 border border-outline-variant/5">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
            <Globe className="text-primary w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xl font-headline font-bold">Neural Pulse</h3>
            <p className="text-on-surface-variant text-xs">Real-time global threat monitoring</p>
          </div>
        </div>
        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
          <span className="text-[10px] font-bold text-primary uppercase tracking-widest">Live Feed</span>
        </div>
      </div>

      {loading ? (
        <div className="space-y-4">
          {[1, 2, 3].map(i => (
            <div key={i} className="h-20 bg-surface-highest/20 rounded-xl animate-pulse"></div>
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          {trends.map((trend, i) => (
            <div key={i} className="group p-4 rounded-xl bg-surface-highest/30 border border-outline-variant/10 hover:border-primary/30 transition-all cursor-pointer">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-headline font-bold text-on-surface group-hover:text-primary transition-colors">{trend.title}</h4>
                <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-tighter ${trend.risk === 'High' ? 'bg-error/10 text-error' : 'bg-primary/10 text-primary'}`}>
                  {trend.risk} Risk
                </span>
              </div>
              <p className="text-xs text-on-surface-variant leading-relaxed">{trend.desc}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
});

const DashboardScreen = React.memo(({ history }: { history: HistoryItem[] }) => {
  // Calculate safety score based on history
  const safetyScore = React.useMemo(() => {
    if (history.length === 0) return 92;
    let score = 85;
    history.forEach(item => {
      if (item.riskScore > 70) score -= 5;
      else if (item.riskScore < 30) score += 2;
    });
    return Math.max(0, Math.min(100, score));
  }, [history]);

  const level = safetyScore > 90 ? 'Guardian' : safetyScore > 70 ? 'Sentinel' : 'Vigilant';

  return (
    <div className="pt-24 pb-32 px-6 max-w-7xl mx-auto w-full">
      <section className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
        <div className="md:col-span-2 p-8 rounded-xl bg-surface-low relative overflow-hidden group border border-outline-variant/5">
          <div className="relative z-10">
            <p className="text-on-surface-variant font-label text-xs uppercase tracking-widest mb-2">Total Threats Intercepted</p>
            <h2 className="text-6xl font-headline font-bold text-primary tracking-tighter">
              {12842 + history.filter(h => h.status === 'Blocked').length}
            </h2>
            <div className="mt-6 flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-widest">
              <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></div>
              Live Global Network Active
            </div>
          </div>
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-all"></div>
        </div>

        <div className="p-8 rounded-xl bg-surface-low border border-outline-variant/5">
          <p className="text-on-surface-variant font-label text-xs uppercase tracking-widest mb-4">Your Safety Score</p>
          <div className="flex items-end gap-3 mb-4">
            <h2 className={`text-5xl font-headline font-bold tracking-tighter ${safetyScore > 80 ? 'text-primary' : safetyScore > 50 ? 'text-warning' : 'text-error'}`}>
              {safetyScore}%
            </h2>
            <span className="text-on-surface-variant text-xs font-bold uppercase tracking-widest mb-2">{level} Level</span>
          </div>
          <div className="h-1.5 w-full bg-surface-highest rounded-full overflow-hidden">
            <div 
              className={`h-full transition-all duration-1000 ${safetyScore > 80 ? 'bg-primary' : safetyScore > 50 ? 'bg-warning' : 'bg-error'}`} 
              style={{ width: `${safetyScore}%` }}
            ></div>
          </div>
        </div>

        <div className="p-8 rounded-xl bg-surface-low border border-outline-variant/5">
          <p className="text-on-surface-variant font-label text-xs uppercase tracking-widest mb-4">Detection Trends</p>
          <div className="flex items-end gap-1 h-20">
            {[40, 65, 30, 85, 45, 70, 55].map((h, i) => (
              <div 
                key={i} 
                className="flex-grow bg-primary/20 rounded-t-sm hover:bg-primary/40 transition-all cursor-pointer relative group"
                style={{ height: `${h}%` }}
              >
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-surface-highest rounded text-[10px] font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {h} Scans
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-2 text-[10px] font-bold text-on-surface-variant uppercase tracking-tighter">
            <span>Mon</span>
            <span>Sun</span>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8 space-y-8">
          <div className="p-8 rounded-xl bg-surface-low border border-outline-variant/5">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-headline font-bold">Message History</h3>
              <button className="text-xs font-bold text-primary uppercase tracking-widest hover:underline">View All</button>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left border-separate border-spacing-y-3">
                <thead>
                  <tr className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">
                    <th className="pb-2 px-4 font-semibold">Origin</th>
                    <th className="pb-2 px-4 font-semibold">Snippet</th>
                    <th className="pb-2 px-4 font-semibold">Risk</th>
                    <th className="pb-2 px-4 font-semibold text-right">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {history.length === 0 ? (
                    <tr>
                      <td colSpan={4} className="py-12 text-center">
                        <Radar className="w-12 h-12 text-surface-highest mx-auto mb-4 opacity-20" />
                        <p className="text-on-surface-variant text-sm">No recent scan activity detected.</p>
                      </td>
                    </tr>
                  ) : (
                    history.slice(0, 5).map((item) => (
                      <tr key={item.id} className="bg-surface-highest/20 group hover:bg-surface-highest transition-colors">
                        <td className="py-4 px-4 rounded-l-lg font-label text-sm text-on-surface">{item.origin}</td>
                        <td className="py-4 px-4 font-body text-xs text-on-surface-variant italic">"{item.snippet}"</td>
                        <td className="py-4 px-4">
                          <div className="flex items-center gap-2">
                            <div className="h-1 w-12 bg-surface-highest rounded-full overflow-hidden">
                              <div className="h-full bg-error" style={{ width: `${item.riskScore}%` }}></div>
                            </div>
                            <span className="text-error text-xs font-bold">{item.riskScore}%</span>
                          </div>
                        </td>
                        <td className="py-4 px-4 rounded-r-lg text-right">
                          <span className={`px-2 py-1 text-[10px] font-bold uppercase rounded ${
                            item.status === 'Blocked' ? 'bg-error-container text-on-error-container' : 'bg-primary/20 text-primary'
                          }`}>
                            {item.status}
                          </span>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="lg:col-span-4 flex flex-col gap-6">
          <NeuralPulse />
          
          <div className="p-8 rounded-xl bg-surface-low relative overflow-hidden h-[240px] border border-outline-variant/5">
            <div className="relative z-10">
              <h3 className="text-xl font-headline font-bold mb-1">Origin Analysis</h3>
              <p className="text-on-surface-variant text-xs mb-4">Top threat locations worldwide</p>
            </div>
            <div className="absolute inset-0 top-16 pointer-events-none opacity-40">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_aaQ_kHBb_joXGhAq4uXKOiyJ9m2Q4-VfnZumJcA2-V603bXoA063JT1ovIh-HcuV-GZD4p8RRssbJftjuSpAYuluxcmbd097KpTbXw_hQQsgSAyMZXw-gcTeoW_HVR-GSqDLBDrTMdcrhq53_yyVphbScc0-hug_W_QL99QhHcA8owcUIHXUV0AhDDVmRfhGBQZEJI9MTkkI8ND4EuBvVeFOYt0b1xFJQpFXotF4MJmHXgst9PlwsScdlZDWVrVWlRSXW3GlF7k" 
                alt="Map" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute bottom-6 left-8 z-10 flex gap-2">
              <div className="px-2 py-1 bg-surface-highest/80 backdrop-blur-sm rounded text-[10px] font-bold">Nigeria (22%)</div>
              <div className="px-2 py-1 bg-surface-highest/80 backdrop-blur-sm rounded text-[10px] font-bold">Russia (18%)</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

const ProfileScreen = React.memo(() => {
  return (
    <div className="pt-24 pb-32 px-6 max-w-3xl mx-auto w-full">
      <div className="flex items-center gap-6 mb-12">
        <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center border-2 border-primary/20">
          <User className="w-12 h-12 text-primary" />
        </div>
        <div>
          <h2 className="text-3xl font-headline font-bold">Guardian Profile</h2>
          <p className="text-on-surface-variant">shrawanidivekar1@gmail.com</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <div className="p-6 rounded-xl bg-surface-low border border-outline-variant/10">
          <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-2">Security Level</p>
          <p className="text-2xl font-headline font-bold text-primary">Sentinel</p>
        </div>
        <div className="p-6 rounded-xl bg-surface-low border border-outline-variant/10">
          <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-2">Member Since</p>
          <p className="text-2xl font-headline font-bold">March 2026</p>
        </div>
      </div>

      <div className="space-y-4">
        <button className="w-full flex items-center justify-between p-4 rounded-xl bg-surface-highest/20 hover:bg-surface-highest/40 transition-colors">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-primary" />
            <span className="font-medium">Security Audit</span>
          </div>
          <ChevronRight className="w-5 h-5 text-on-surface-variant" />
        </button>
        <button className="w-full flex items-center justify-between p-4 rounded-xl bg-surface-highest/20 hover:bg-surface-highest/40 transition-colors">
          <div className="flex items-center gap-3">
            <Bell className="w-5 h-5 text-primary" />
            <span className="font-medium">Notification Settings</span>
          </div>
          <ChevronRight className="w-5 h-5 text-on-surface-variant" />
        </button>
        <button className="w-full flex items-center justify-between p-4 rounded-xl bg-surface-highest/20 hover:bg-surface-highest/40 transition-colors">
          <div className="flex items-center gap-3">
            <Key className="w-5 h-5 text-primary" />
            <span className="font-medium">Privacy Controls</span>
          </div>
          <ChevronRight className="w-5 h-5 text-on-surface-variant" />
        </button>
      </div>
    </div>
  );
});

const SettingsScreen = React.memo(() => {
  return (
    <div className="pt-24 pb-32 px-6 max-w-3xl mx-auto w-full">
      <h2 className="text-3xl font-headline font-bold mb-12">System Settings</h2>
      
      <div className="space-y-8">
        <section>
          <h3 className="text-xs font-bold uppercase tracking-widest text-primary mb-4">AI Core Configuration</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 rounded-xl bg-surface-low border border-outline-variant/10">
              <div>
                <p className="font-medium">Deep Scan Mode</p>
                <p className="text-xs text-on-surface-variant">Enhanced analysis for complex social engineering</p>
              </div>
              <div className="w-12 h-6 bg-primary rounded-full relative">
                <div className="absolute right-1 top-1 w-4 h-4 bg-on-primary rounded-full"></div>
              </div>
            </div>
            <div className="flex items-center justify-between p-4 rounded-xl bg-surface-low border border-outline-variant/10">
              <div>
                <p className="font-medium">Real-time Interception</p>
                <p className="text-xs text-on-surface-variant">Monitor incoming messages automatically</p>
              </div>
              <div className="w-12 h-6 bg-primary rounded-full relative">
                <div className="absolute right-1 top-1 w-4 h-4 bg-on-primary rounded-full"></div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-xs font-bold uppercase tracking-widest text-primary mb-4">Data Management</h3>
          <button className="w-full p-4 rounded-xl bg-error/10 text-error font-bold border border-error/20 hover:bg-error/20 transition-colors text-left">
            Clear Scan History
          </button>
        </section>
      </div>
    </div>
  );
});

const ScamSimulator = React.memo(() => {
  const [currentScam, setCurrentScam] = useState<{ text: string, isScam: boolean, reason: string } | null>(null);
  const [feedback, setFeedback] = useState<{ correct: boolean, message: string } | null>(null);
  const [loading, setLoading] = useState(false);

  const generateScam = async () => {
    setLoading(true);
    setFeedback(null);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: "Generate a realistic example of either a digital scam message (SMS, Email, DM) or a legitimate but slightly formal message. Provide the text, whether it is a scam (boolean), and a brief reason why. Format as JSON with 'text', 'isScam', and 'reason' fields.",
        config: {
          thinkingConfig: { thinkingLevel: ThinkingLevel.LOW },
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              text: { type: Type.STRING },
              isScam: { type: Type.BOOLEAN },
              reason: { type: Type.STRING }
            },
            required: ['text', 'isScam', 'reason']
          }
        }
      });
      const data = JSON.parse(response.text || "{}");
      setCurrentScam(data);
    } catch (error) {
      console.error("Failed to generate scam:", error);
      setCurrentScam({
        text: "URGENT: Your account has been suspended. Click here to verify: http://bit.ly/secure-login-392",
        isScam: true,
        reason: "Uses urgency and a suspicious shortened URL."
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    generateScam();
  }, []);

  const handleGuess = (guess: boolean) => {
    if (!currentScam) return;
    const isCorrect = guess === currentScam.isScam;
    setFeedback({
      correct: isCorrect,
      message: isCorrect ? "Correct! You spotted the patterns." : "Incorrect. This one was tricky."
    });
  };

  return (
    <div className="bg-surface-low rounded-xl p-8 border border-outline-variant/5 mt-12">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
          <Terminal className="text-primary w-5 h-5" />
        </div>
        <div>
          <h3 className="text-xl font-headline font-bold">Scam Simulator</h3>
          <p className="text-on-surface-variant text-xs">Train your eyes to spot deception</p>
        </div>
      </div>

      <div className="bg-surface-highest/20 rounded-xl p-6 border border-outline-variant/10 mb-8 min-h-[120px] flex items-center justify-center">
        {loading ? (
          <div className="flex gap-2">
            <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:-0.15s]"></div>
            <div className="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:-0.3s]"></div>
          </div>
        ) : (
          <p className="text-sm font-body italic text-on-surface leading-relaxed text-center">
            "{currentScam?.text}"
          </p>
        )}
      </div>

      {!feedback ? (
        <div className="grid grid-cols-2 gap-4">
          <button 
            onClick={() => handleGuess(true)}
            disabled={loading}
            className="py-3 rounded-xl bg-error/10 text-error font-bold uppercase tracking-widest text-xs border border-error/20 hover:bg-error/20 transition-all"
          >
            It's a Scam
          </button>
          <button 
            onClick={() => handleGuess(false)}
            disabled={loading}
            className="py-3 rounded-xl bg-primary/10 text-primary font-bold uppercase tracking-widest text-xs border border-primary/20 hover:bg-primary/20 transition-all"
          >
            It's Safe
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          <div className={`p-4 rounded-xl border ${feedback.correct ? 'bg-primary/5 border-primary/20' : 'bg-error/5 border-error/20'}`}>
            <p className={`font-bold text-sm mb-1 ${feedback.correct ? 'text-primary' : 'text-error'}`}>
              {feedback.message}
            </p>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              {currentScam?.reason}
            </p>
          </div>
          <button 
            onClick={generateScam}
            className="w-full py-3 rounded-xl bg-surface-highest text-on-surface font-bold uppercase tracking-widest text-xs border border-outline-variant/20 hover:bg-surface-highest/80 transition-all"
          >
            Next Challenge
          </button>
        </div>
      )}
    </div>
  );
});

const SafetyScreen = React.memo(() => {
  return (
    <div className="flex-grow flex flex-col px-6 pt-24 pb-32 max-w-5xl mx-auto w-full">
      <section className="mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-low border border-outline-variant/15 mb-6">
          <div className="status-pulse"></div>
          <span className="text-[10px] font-bold uppercase tracking-widest font-label text-primary">Live Protection Active</span>
        </div>
        <h2 className="text-5xl md:text-7xl font-headline font-bold tracking-tight mb-4 text-on-surface">Precautions & <span className="text-primary">Safety Tips</span></h2>
        <p className="text-on-surface-variant max-w-2xl text-lg leading-relaxed">Your digital perimeter starts with awareness. Use these professional protocols to harden your personal defense against sophisticated cyber threats.</p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-16">
        <div className="md:col-span-8 group relative overflow-hidden rounded-xl bg-surface-low p-8 border border-outline-variant/5 hover:border-primary/20 transition-all duration-500">
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-all"></div>
          <div className="flex flex-col h-full justify-between gap-8">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-5xl font-headline font-extrabold text-surface-highest">01</span>
                <div className="h-px flex-grow bg-outline-variant/15"></div>
                <Link2Off className="text-primary w-8 h-8" />
              </div>
              <h3 className="text-2xl font-headline font-bold mb-4">Don't click suspicious links</h3>
              <p className="text-on-surface-variant leading-relaxed">Phishing attempts often masquerade as urgent notifications. Hover over any hyperlink to verify the actual destination URL before interacting. If the source is unverified, treat it as a breach attempt.</p>
            </div>
            <div className="flex gap-2">
              <span className="px-3 py-1 rounded-md bg-surface-highest text-[10px] font-bold uppercase tracking-tighter text-on-surface-variant">High Risk</span>
              <span className="px-3 py-1 rounded-md bg-surface-highest text-[10px] font-bold uppercase tracking-tighter text-on-surface-variant">Protocol: Neutralize</span>
            </div>
          </div>
        </div>

        <div className="md:col-span-4 rounded-xl overflow-hidden relative min-h-[300px]">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqBRPMWybonUUCiAEqwPYugdUxCYn9TN7-GQ8OoMiwX5bA3HE9Yjt82VM85V7-Dh4fmp8Ab9kSIDxT6zjZtwzfZoeCa8qs1TTCKEP9mV0QPakI3wdT6m8S3rAbgbExTrYApQvZMIKeeL9bJQOK8qWE0wfAFXAm4jZx-F6JofIro-3P5pSmq9VzxmfCWS5O4OP1URfQFeFSiVYUXnWK760kATEBHv_vNGAfc3SSQfw3rbKw2NELFCrtWyVJRpRtWXoxCbglhhTuYJw" 
            alt="Security" 
            className="absolute inset-0 w-full h-full object-cover grayscale opacity-40 group-hover:scale-105 transition-transform duration-700"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent"></div>
          <div className="absolute bottom-6 left-6 right-6">
            <p className="text-[10px] font-bold uppercase tracking-widest font-label text-primary-container mb-2">AI Cyber Security Assistant AI Core</p>
            <p className="text-sm font-medium text-on-surface">Proactive threat detection algorithms running 24/7.</p>
          </div>
        </div>

        <div className="md:col-span-6 group relative overflow-hidden rounded-xl bg-surface-container p-8 border border-outline-variant/5">
          <div className="flex flex-col gap-6">
            <div className="w-12 h-12 rounded-lg bg-surface-highest flex items-center justify-center">
              <Key className="text-primary w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-sm font-headline font-bold text-primary">02</span>
                <h3 className="text-xl font-headline font-bold">Never share OTP</h3>
              </div>
              <p className="text-on-surface-variant text-sm leading-relaxed">One-Time Passwords are the final lock on your vault. No legitimate organization, bank, or AI Cyber Security Assistant representative will ever request your OTP via phone, SMS, or email.</p>
            </div>
          </div>
        </div>

        <div className="md:col-span-6 group relative overflow-hidden rounded-xl bg-surface-container p-8 border border-outline-variant/5">
          <div className="flex flex-col gap-6">
            <div className="w-12 h-12 rounded-lg bg-surface-highest flex items-center justify-center">
              <Globe className="text-primary w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-sm font-headline font-bold text-primary">03</span>
                <h3 className="text-xl font-headline font-bold">Verify official domains</h3>
              </div>
              <p className="text-on-surface-variant text-sm leading-relaxed">Always check for the 'https://' prefix and look for slight misspellings in domain names (e.g., 'scamguard.ai' vs 'scamguard-al.ai'). When in doubt, use our Scan tool to verify.</p>
            </div>
          </div>
        </div>
      </div>

      <ScamSimulator />

      <div className="mt-auto pt-12 text-center">
        <div className="max-w-xl mx-auto p-1 bg-gradient-to-r from-primary/20 via-primary-container/20 to-primary/20 rounded-2xl">
          <div className="bg-surface-low rounded-[calc(1rem-2px)] p-10 flex flex-col items-center">
            <ShieldAlert className="text-error w-12 h-12 mb-6" />
            <h2 className="text-3xl font-headline font-bold mb-4">Encountered a Threat?</h2>
            <p className="text-on-surface-variant mb-8">If you've spotted suspicious activity or believe you're being targeted, report it immediately to our global database.</p>
            <button className="group relative flex items-center gap-3 px-10 py-4 bg-gradient-to-br from-primary to-primary-container rounded-xl text-on-primary font-bold transition-all duration-300 hover:scale-[1.02] active:scale-95 shadow-[0_10px_40px_-10px_rgba(164,230,255,0.3)]">
              <Flag className="w-5 h-5" />
              <span className="uppercase tracking-widest text-sm">REPORT SCAM</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
});

const ScamModal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-surface/80 backdrop-blur-sm p-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="max-w-md w-full glass-panel rounded-2xl p-8 border border-outline-variant shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-error via-error to-transparent"></div>
            <div className="flex flex-col items-center text-center space-y-6">
              <div className="w-16 h-16 rounded-full bg-error/10 flex items-center justify-center border border-error/20">
                <AlertTriangle className="w-8 h-8 text-error" />
              </div>
              <div className="space-y-3">
                <h1 className="font-headline text-2xl font-bold tracking-tight text-on-surface">Attention: Potential Scam Detected</h1>
                <p className="font-body text-on-surface-variant leading-relaxed">
                  This message may be a Scam/Suspicious. Proceed with caution. Our AI has flagged unusual patterns in the metadata associated with this sender.
                </p>
              </div>
              <div className="w-full space-y-3">
                <button 
                  onClick={onClose}
                  className="w-full bg-gradient-to-br from-primary to-primary-container text-on-primary font-bold py-3 px-6 rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 font-label uppercase tracking-wider text-sm"
                >
                  OK
                </button>
                <button 
                  onClick={onClose}
                  className="w-full bg-transparent border border-outline-variant text-on-surface-variant hover:bg-surface-highest transition-all py-3 px-6 rounded-xl font-label text-sm"
                >
                  Dismiss
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

// --- Main App ---

export default function App() {
  const [screen, setScreen] = useState<Screen>('landing');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [scanResult, setScanResult] = useState<ScanResult | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [history, setHistory] = useState<HistoryItem[]>([
    { id: '1', origin: 'Unknown (+1 405...)', snippet: 'Your bank account has been locked. Click here to...', riskScore: 92, status: 'Blocked', timestamp: '2024-03-24 10:20' },
    { id: '2', origin: 'Amazon Support', snippet: 'Your order #402-192 has been shipped and is on...', riskScore: 4, status: 'Safe', timestamp: '2024-03-24 09:45' },
    { id: '3', origin: 'Gov. Lotto Admin', snippet: 'Congratulations! You\'ve won $1,000,000. Claim...', riskScore: 88, status: 'Blocked', timestamp: '2024-03-24 08:12' }
  ]);

  const [isScanning, setIsScanning] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
    setScreen('scan');
  };

  const handleGetStarted = () => {
    setScreen('login');
  };

  const handleScan = async (text: string, imageData?: string) => {
    if ((!text.trim() && !imageData) || isScanning) return;
    
    setIsScanning(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      
      const parts: any[] = [];
      if (text.trim()) {
        parts.push({ text: `Scan for scams/phishing: "${text}"` });
      }
      
      if (imageData) {
        const base64Data = imageData.split(',')[1];
        const mimeType = imageData.split(',')[0].split(':')[1].split(';')[0];
        parts.push({
          inlineData: {
            data: base64Data,
            mimeType: mimeType
          }
        });
        parts.push({ text: "Scan image for scams, forgeries, or AI manipulation. Check financial receipts for UI inconsistencies. Assess risk and authenticity." });
      }

      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: { parts },
        config: {
          thinkingConfig: { thinkingLevel: ThinkingLevel.MINIMAL },
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              riskScore: { type: Type.NUMBER, description: "0-100 risk score. High = Scam." },
              confidence: { type: Type.NUMBER, description: "0-100 confidence." },
              threatType: { type: Type.STRING, description: "Category (Phishing, Fraud, Safe, etc.)." },
              keywords: { 
                type: Type.ARRAY, 
                items: { type: Type.STRING },
                description: "Suspicious markers."
              },
              analysis: { type: Type.STRING, description: "Brief analysis." },
              isRealImage: { type: Type.BOOLEAN, description: "Is image authentic?" },
              authenticityAnalysis: { type: Type.STRING, description: "Authenticity details." }
            },
            required: ["riskScore", "confidence", "threatType", "keywords", "analysis"]
          }
        }
      });

      const resultData = JSON.parse(response.text || "{}");
      
      const result: ScanResult = {
        riskScore: resultData.riskScore || 0,
        confidence: resultData.confidence || 0,
        threatType: resultData.threatType || 'Unknown',
        keywords: resultData.keywords || [],
        analysis: resultData.analysis || 'No detailed analysis available.',
        isRealImage: resultData.isRealImage,
        authenticityAnalysis: resultData.authenticityAnalysis,
        timestamp: new Date().toLocaleString(),
        traceId: `SCM-${Math.random().toString(36).substring(2, 10).toUpperCase()}`
      };

      // Add to history
      const newHistoryItem: HistoryItem = {
        id: result.traceId,
        origin: imageData ? 'Multimodal Scan' : 'User Input Scan',
        snippet: text ? (text.substring(0, 50) + (text.length > 50 ? '...' : '')) : 'Image Analysis',
        riskScore: result.riskScore,
        status: result.riskScore > 50 ? 'Blocked' : 'Safe',
        timestamp: result.timestamp
      };
      setHistory(prev => [newHistoryItem, ...prev]);

      setScanResult(result);
      setIsModalOpen(true);
    } catch (error) {
      console.error("AI Scan Error:", error);
    } finally {
      setIsScanning(false);
    }
  };

  const proceedToReport = () => {
    setIsModalOpen(false);
    setScreen('report');
  };

  if (screen === 'landing') {
    return <LandingScreen onGetStarted={handleGetStarted} />;
  }

  if (!isLoggedIn && screen === 'login') {
    return <LoginScreen onLogin={handleLogin} onBack={() => setScreen('landing')} />;
  }

  return (
    <div className="min-h-screen bg-surface relative overflow-x-hidden">
      <Navbar currentScreen={screen} setScreen={setScreen} />
      
      <AnimatePresence mode="wait">
        <motion.div
          key={screen}
          initial={{ opacity: 0, x: 5 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -5 }}
          transition={{ duration: 0.15, ease: "easeOut" }}
        >
          {screen === 'scan' && <ScannerScreen onScan={handleScan} isScanning={isScanning} />}
          {screen === 'report' && scanResult && <ReportScreen result={scanResult} />}
          {screen === 'history' && <DashboardScreen history={history} />}
          {screen === 'safety' && <SafetyScreen />}
          {screen === 'profile' && <ProfileScreen />}
          {screen === 'settings' && <SettingsScreen />}
        </motion.div>
      </AnimatePresence>

      <ScamModal isOpen={isModalOpen} onClose={proceedToReport} />
    </div>
  );
}
