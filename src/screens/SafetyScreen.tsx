import React from 'react';
import { motion } from 'motion/react';
import { 
  Shield, 
  ShieldCheck, 
  ShieldAlert, 
  ChevronRight, 
  Info, 
  FileText, 
  Search, 
  Filter, 
  TrendingUp, 
  Bell, 
  Lock, 
  AlertTriangle, 
  Globe, 
  Cpu, 
  Database, 
  Terminal, 
  Network, 
  Link2Off, 
  Key, 
  Eye, 
  Flag, 
  Lightbulb, 
  Smile, 
  UserCheck, 
  Fingerprint, 
  AtSign, 
  ArrowRight, 
  Sparkles, 
  Menu, 
  User, 
  History, 
  Radar 
} from 'lucide-react';

const SafetyScreen = React.memo(() => {
  return (
    <div className="pt-24 pb-32 px-4 md:px-8 max-w-7xl mx-auto w-full">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16 mt-8">
        <div>
          <h1 className="text-5xl font-headline font-bold text-on-surface mb-4">Safety Education Center</h1>
          <p className="text-on-surface-variant text-xl font-light max-w-2xl leading-relaxed">
            Empowering you with the knowledge to identify, neutralize, and report digital threats before they manifest.
          </p>
        </div>
        <div className="w-24 h-24 rounded-3xl bg-primary/10 flex items-center justify-center border border-primary/20 shadow-[0_0_50px_rgba(164,230,255,0.2)]">
          <ShieldCheck className="text-primary w-12 h-12" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {[
          { title: 'Identify', desc: 'Learn the common linguistic and technical markers of modern scams.', icon: Eye, color: 'primary' },
          { title: 'Neutralize', desc: 'Step-by-step protocols for handling active threat encounters.', icon: ShieldAlert, color: 'error' },
          { title: 'Report', desc: 'How to properly document and report incidents to authorities.', icon: Flag, color: 'primary' }
        ].map((step, i) => (
          <div key={i} className="bg-surface-low rounded-xl p-8 border border-outline-variant/10 hover:border-primary/30 transition-all group">
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-all ${
              step.color === 'error' ? 'bg-error/10 text-error group-hover:bg-error/20' : 'bg-primary/10 text-primary group-hover:bg-primary/20'
            }`}>
              <step.icon className="w-6 h-6" />
            </div>
            <h3 className="font-headline text-xl font-bold text-on-surface mb-2">{step.title}</h3>
            <p className="text-sm text-on-surface-variant leading-relaxed">{step.desc}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8 space-y-8">
          <div className="bg-surface-low rounded-xl p-8 border border-outline-variant/10">
            <h3 className="font-headline text-2xl font-bold text-on-surface mb-8 flex items-center gap-3">
              <TrendingUp className="text-primary w-6 h-6" />
              Common Threat Vectors
            </h3>
            <div className="space-y-6">
              {[
                { title: 'Phishing & Smishing', desc: 'Fraudulent emails or SMS messages designed to trick you into revealing sensitive information.', icon: Network },
                { title: 'Social Engineering', desc: 'The psychological manipulation of people into performing actions or divulging confidential info.', icon: Link2Off },
                { title: 'Vishing (Voice Phishing)', desc: 'The use of voice calls, often using AI voice cloning, to conduct phishing attacks.', icon: Bell },
                { title: 'Credential Harvesting', desc: 'Mass collection of usernames and passwords through fake login portals.', icon: Key }
              ].map((threat, i) => (
                <div key={i} className="flex gap-6 p-6 rounded-xl bg-surface-container-lowest border border-outline-variant/5 hover:bg-surface-highest transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-surface-highest flex items-center justify-center border border-outline-variant/10 group-hover:border-primary/30 transition-all">
                    <threat.icon className="w-6 h-6 text-on-surface-variant group-hover:text-primary transition-all" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-headline font-bold text-on-surface mb-2 group-hover:text-primary transition-all">{threat.title}</h4>
                    <p className="text-sm text-on-surface-variant leading-relaxed">{threat.desc}</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-on-surface-variant group-hover:text-primary transition-all" />
                </div>
              ))}
            </div>
          </div>

          <div className="bg-surface-low rounded-xl p-8 border border-outline-variant/10">
            <h3 className="font-headline text-2xl font-bold text-on-surface mb-8">Security Best Practices</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: 'Enable MFA', desc: 'Multi-factor authentication adds a critical second layer of defense.', icon: Lock },
                { title: 'Verify Senders', desc: 'Always cross-reference sender metadata before clicking any links.', icon: UserCheck },
                { title: 'Use Strong Keys', desc: 'Utilize complex, unique passphrases for every digital identity.', icon: Key },
                { title: 'Stay Updated', desc: 'Keep all security protocols and software at the latest version.', icon: TrendingUp }
              ].map((tip, i) => (
                <div key={i} className="p-6 rounded-xl bg-surface-container-lowest border border-outline-variant/5">
                  <div className="flex items-center gap-3 mb-4">
                    <tip.icon className="text-primary w-5 h-5" />
                    <h4 className="font-headline font-bold text-on-surface">{tip.title}</h4>
                  </div>
                  <p className="text-xs text-on-surface-variant leading-relaxed">{tip.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-4 space-y-6">
          <div className="bg-primary/5 rounded-xl p-8 border border-primary/10 relative overflow-hidden">
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center mb-6">
                <Lightbulb className="text-primary w-6 h-6" />
              </div>
              <h3 className="font-headline text-xl font-bold text-on-surface mb-4">Daily Safety Insight</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed italic mb-8">
                "94% of successful cyber attacks start with a simple phishing email. Your vigilance is the most powerful firewall in your security stack."
              </p>
              <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest cursor-pointer hover:translate-x-2 transition-transform">
                Read More Insights
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>

          <div className="bg-surface-low rounded-xl p-8 border border-outline-variant/10">
            <h3 className="font-headline text-lg font-bold text-on-surface mb-6 uppercase tracking-widest">Resources</h3>
            <div className="space-y-4">
              {[
                'Global Scam Database',
                'Identity Theft Recovery',
                'Cyber Defense Handbook',
                'Reporting Protocols',
                'Neural Analysis Whitepaper'
              ].map((res, i) => (
                <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-surface-container-lowest border border-outline-variant/5 hover:border-primary/30 transition-all cursor-pointer group">
                  <span className="text-xs font-bold text-on-surface uppercase tracking-tighter group-hover:text-primary transition-all">{res}</span>
                  <FileText className="w-4 h-4 text-on-surface-variant group-hover:text-primary transition-all" />
                </div>
              ))}
            </div>
          </div>

          <div className="bg-error/5 rounded-xl p-6 border border-error/10">
            <div className="flex items-center gap-2 mb-4">
              <AlertTriangle className="text-error w-4 h-4" />
              <h3 className="text-[10px] font-headline font-bold uppercase tracking-widest text-error">Emergency Protocol</h3>
            </div>
            <p className="text-[10px] text-on-surface-variant leading-relaxed">
              If you believe your identity has been compromised, immediately initiate a full system lockdown and contact the Cyber Defense Agency at 1-800-DEFENSE.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
});

export default SafetyScreen;
