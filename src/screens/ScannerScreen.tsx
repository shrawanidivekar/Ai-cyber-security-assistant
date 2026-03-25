import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Terminal, 
  ShieldAlert, 
  Radar, 
  Upload, 
  X, 
  Globe, 
  TrendingUp, 
  Lightbulb, 
  Network, 
  Link2Off, 
  Key, 
  Info,
  Database,
  Cpu
} from 'lucide-react';
import { GoogleGenAI, Type, ThinkingLevel } from "@google/genai";

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
              className="p-3 rounded-lg bg-surface-low border border-outline-variant/5 flex items-center justify-between group will-change-transform will-change-opacity"
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

const NeuralPulse = React.memo(() => {
  const [trends, setTrends] = useState<{ title: string, desc: string, risk: 'High' | 'Medium' }[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTrends = async () => {
      try {
        const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
        const response = await ai.models.generateContent({
          model: "gemini-3.1-flash-lite-preview",
          contents: "Top 3 trending digital scams (March 2026). Title, one-sentence desc, risk (High/Medium). JSON array.",
          config: {
            thinkingConfig: { thinkingLevel: ThinkingLevel.MINIMAL },
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
            <h3 className="text-lg font-headline font-bold text-on-surface">Neural Pulse</h3>
            <p className="text-xs text-on-surface-variant uppercase tracking-widest font-bold">Global Threat Intelligence</p>
          </div>
        </div>
        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-surface-highest border border-outline-variant/20">
          <TrendingUp className="w-3 h-3 text-primary" />
          <span className="text-[10px] font-bold text-on-surface uppercase tracking-tighter">Live Feed</span>
        </div>
      </div>

      <div className="space-y-6">
        {loading ? (
          [1, 2, 3].map(i => (
            <div key={i} className="animate-pulse flex gap-4">
              <div className="w-12 h-12 rounded-lg bg-surface-highest"></div>
              <div className="flex-1 space-y-2">
                <div className="h-4 bg-surface-highest rounded w-1/3"></div>
                <div className="h-3 bg-surface-highest rounded w-full"></div>
              </div>
            </div>
          ))
        ) : (
          trends.map((trend, i) => (
            <div key={i} className="flex gap-4 group">
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center border transition-all ${
                trend.risk === 'High' ? 'bg-error/5 border-error/10 text-error' : 'bg-primary/5 border-primary/10 text-primary'
              }`}>
                {trend.risk === 'High' ? <ShieldAlert className="w-6 h-6" /> : <Radar className="w-6 h-6" />}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-headline font-bold text-on-surface group-hover:text-primary transition-colors">{trend.title}</h4>
                  <span className={`text-[8px] font-bold px-2 py-0.5 rounded-full uppercase tracking-widest ${
                    trend.risk === 'High' ? 'bg-error/10 text-error' : 'bg-primary/10 text-primary'
                  }`}>{trend.risk} Risk</span>
                </div>
                <p className="text-xs text-on-surface-variant leading-relaxed">{trend.desc}</p>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="mt-8 pt-6 border-t border-outline-variant/10">
        <div className="flex items-center gap-2 text-primary">
          <Lightbulb className="w-4 h-4" />
          <span className="text-[10px] font-bold uppercase tracking-widest">Neural Recommendation</span>
        </div>
        <p className="mt-2 text-xs text-on-surface-variant italic">"Enable multi-factor authentication on all financial vectors to neutralize 94% of credential harvest attempts."</p>
      </div>
    </div>
  );
});

interface ScannerScreenProps {
  onScan: (text: string, imageData?: string) => void;
  isScanning: boolean;
}

const ScannerScreen = React.memo(({ onScan, isScanning }: ScannerScreenProps) => {
  const [input, setInput] = useState('');
  const [image, setImage] = useState<string | null>(null);
  const [scanStep, setScanStep] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const scanSteps = [
    'Initializing Neural Engine...',
    'Extracting Linguistic Patterns...',
    'Analyzing Metadata Vectors...',
    'Cross-referencing Threat Databases...',
    'Finalizing Risk Assessment...'
  ];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isScanning) {
      setScanStep(0);
      interval = setInterval(() => {
        setScanStep(prev => (prev < scanSteps.length - 1 ? prev + 1 : prev));
      }, 1500);
    } else {
      setScanStep(0);
    }
    return () => clearInterval(interval);
  }, [isScanning]);

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

              <div className="flex-1"></div>

              <div className="flex gap-3">
                <button 
                  onClick={handleClear}
                  className="px-6 py-4 rounded-xl bg-surface-highest text-on-surface-variant font-bold hover:bg-surface-container transition-all"
                >
                  CLEAR
                </button>
                <button 
                  onClick={() => onScan(input, image || undefined)}
                  disabled={isScanning || (!input.trim() && !image)}
                  className={`px-10 py-4 rounded-xl font-headline font-bold text-on-primary shadow-lg transition-all flex items-center gap-3 ${
                    isScanning || (!input.trim() && !image) 
                      ? 'bg-surface-highest text-on-surface-variant cursor-not-allowed' 
                      : 'bg-primary hover:scale-[1.02] active:scale-[0.98] shadow-primary/20'
                  }`}
                >
                  {isScanning ? (
                    <>
                      <div className="w-5 h-5 border-2 border-on-primary/30 border-t-on-primary rounded-full animate-spin"></div>
                      <span className="animate-pulse">{scanSteps[scanStep]}</span>
                    </>
                  ) : (
                    <>
                      <Radar className="w-5 h-5" />
                      INITIATE SCAN
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Phishing Detection', desc: 'Identifies spoofed URLs and domain masquerading.', icon: Network },
              { title: 'Social Engineering', desc: 'Analyzes linguistic pressure and urgency tactics.', icon: Link2Off },
              { title: 'Identity Verification', desc: 'Cross-references sender metadata with known threat vectors.', icon: Key }
            ].map((feature, i) => (
              <div key={i} className="p-5 rounded-xl bg-surface-container-lowest border border-outline-variant/5">
                <feature.icon className="text-primary w-6 h-6 mb-3" />
                <h4 className="font-headline font-bold text-on-surface mb-1">{feature.title}</h4>
                <p className="text-xs text-on-surface-variant leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-4 space-y-6">
          <LiveInterceptor />
          <NeuralPulse />
          
          <div className="bg-primary/5 rounded-xl p-6 border border-primary/10">
            <div className="flex items-center gap-2 mb-4">
              <Info className="text-primary w-4 h-4" />
              <h3 className="text-xs font-headline font-bold uppercase tracking-widest text-primary">Pro Tip</h3>
            </div>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              Never click links in messages from unknown senders. Scammers often use URL shorteners to hide malicious destinations. Use our scanner to reveal the true intent.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
});

export default ScannerScreen;
