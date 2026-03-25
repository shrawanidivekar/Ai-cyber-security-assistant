import React from 'react';
import { motion } from 'motion/react';
import { 
  Settings, 
  ShieldCheck, 
  ShieldAlert,
  ChevronRight, 
  Bell, 
  Lock, 
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
  Radar, 
  Shield,
  TrendingUp,
  FileText,
  Info
} from 'lucide-react';

const SettingsScreen = React.memo(() => {
  return (
    <div className="pt-24 pb-32 px-4 md:px-8 max-w-7xl mx-auto w-full">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16 mt-8">
        <div>
          <h1 className="text-5xl font-headline font-bold text-on-surface mb-4">System Settings</h1>
          <p className="text-on-surface-variant text-xl font-light max-w-2xl leading-relaxed">
            Configure your neural defense parameters and identity protection protocols for optimal security.
          </p>
        </div>
        <div className="w-24 h-24 rounded-3xl bg-primary/10 flex items-center justify-center border border-primary/20 shadow-[0_0_50px_rgba(164,230,255,0.2)]">
          <Settings className="text-primary w-12 h-12" />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8 space-y-8">
          <div className="bg-surface-low rounded-xl p-8 border border-outline-variant/10">
            <h3 className="font-headline text-2xl font-bold text-on-surface mb-8 uppercase tracking-widest">Neural Engine Configuration</h3>
            <div className="space-y-6">
              {[
                { label: 'Sensitivity Level', value: 'High', icon: Cpu },
                { label: 'Real-time Interception', status: 'Enabled', icon: Radar },
                { label: 'Global Threat Sync', status: 'Active', icon: Globe },
                { label: 'Heuristic Analysis', status: 'Enabled', icon: Network }
              ].map((setting, i) => (
                <div key={i} className="flex items-center justify-between p-6 rounded-xl bg-surface-container-lowest border border-outline-variant/5 hover:border-primary/30 transition-all cursor-pointer group">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-surface-highest flex items-center justify-center border border-outline-variant/10 group-hover:border-primary/30 transition-all">
                      <setting.icon className="w-6 h-6 text-on-surface-variant group-hover:text-primary transition-all" />
                    </div>
                    <div>
                      <h4 className="font-headline font-bold text-on-surface mb-1 group-hover:text-primary transition-all">{setting.label}</h4>
                      <p className="text-sm text-on-surface-variant">{setting.value || setting.status}</p>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-on-surface-variant group-hover:text-primary transition-all" />
                </div>
              ))}
            </div>
          </div>

          <div className="bg-surface-low rounded-xl p-8 border border-outline-variant/10">
            <h3 className="font-headline text-2xl font-bold text-on-surface mb-8 uppercase tracking-widest">Privacy & Security</h3>
            <div className="space-y-6">
              {[
                { label: 'Two-Factor Authentication', status: 'Enabled', icon: Lock },
                { label: 'Biometric Login', status: 'Active', icon: Fingerprint },
                { label: 'Data Encryption', status: 'AES-256', icon: ShieldCheck },
                { label: 'Privacy Mode', status: 'Strict', icon: Eye }
              ].map((setting, i) => (
                <div key={i} className="flex items-center justify-between p-6 rounded-xl bg-surface-container-lowest border border-outline-variant/5 hover:border-primary/30 transition-all cursor-pointer group">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-surface-highest flex items-center justify-center border border-outline-variant/10 group-hover:border-primary/30 transition-all">
                      <setting.icon className="w-6 h-6 text-on-surface-variant group-hover:text-primary transition-all" />
                    </div>
                    <div>
                      <h4 className="font-headline font-bold text-on-surface mb-1 group-hover:text-primary transition-all">{setting.label}</h4>
                      <p className="text-sm text-on-surface-variant">{setting.status}</p>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-on-surface-variant group-hover:text-primary transition-all" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-4 space-y-6">
          <div className="bg-surface-low rounded-xl p-8 border border-outline-variant/10">
            <h3 className="font-headline text-lg font-bold text-on-surface mb-6 uppercase tracking-widest">Notifications</h3>
            <div className="space-y-4">
              {[
                { label: 'Threat Alerts', status: 'Enabled', icon: Bell },
                { label: 'System Updates', status: 'Active', icon: TrendingUp },
                { label: 'Security Reports', status: 'Enabled', icon: FileText },
                { label: 'Identity Sync', status: 'Optimal', icon: Globe }
              ].map((notif, i) => (
                <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-surface-container-lowest border border-outline-variant/5 hover:border-primary/30 transition-all cursor-pointer group">
                  <div className="flex items-center gap-3">
                    <notif.icon className="w-4 h-4 text-on-surface-variant group-hover:text-primary transition-all" />
                    <span className="text-xs font-bold text-on-surface uppercase tracking-tighter group-hover:text-primary transition-all">{notif.label}</span>
                  </div>
                  <span className="text-[10px] font-bold text-primary uppercase tracking-widest bg-primary/10 px-3 py-1 rounded-full">{notif.status}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-error/5 rounded-xl p-8 border border-error/10 relative overflow-hidden group">
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-error/20 flex items-center justify-center mb-6">
                <ShieldAlert className="text-error w-6 h-6" />
              </div>
              <h3 className="font-headline text-xl font-bold text-on-surface mb-4">Emergency Lockdown</h3>
              <p className="text-xs text-on-surface-variant leading-relaxed mb-8">
                Immediately restrict all access to your digital identity and financial systems. This action is irreversible for 24 hours.
              </p>
              <button className="w-full py-4 rounded-xl bg-error text-on-error font-headline font-bold shadow-lg shadow-error/20 hover:scale-[1.02] active:scale-[0.98] transition-all uppercase tracking-widest">
                INITIATE LOCKDOWN
              </button>
            </div>
          </div>

          <div className="bg-surface-low rounded-xl p-6 border border-outline-variant/10">
            <div className="flex items-center gap-2 mb-4">
              <Info className="text-primary w-4 h-4" />
              <h3 className="text-[10px] font-headline font-bold uppercase tracking-widest text-primary">System Info</h3>
            </div>
            <p className="text-[10px] text-on-surface-variant leading-relaxed">
              Neural Core Version: 4.0.2-X<br />
              Database Sync: 12ms ago<br />
              Encryption: AES-256-GCM
            </p>
          </div>
        </div>
      </div>
    </div>
  );
});

export default SettingsScreen;
