import React from 'react';
import { motion } from 'motion/react';
import { 
  User, 
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
  History, 
  Radar, 
  Settings, 
  Camera, 
  Shield 
} from 'lucide-react';

const ProfileScreen = React.memo(() => {
  return (
    <div className="pt-24 pb-32 px-4 md:px-8 max-w-7xl mx-auto w-full">
      <div className="flex flex-col md:flex-row items-center gap-12 mb-16 mt-8">
        <div className="relative">
          <div className="w-48 h-48 rounded-full bg-surface-highest border-4 border-primary/20 flex items-center justify-center overflow-hidden shadow-[0_0_50px_rgba(164,230,255,0.2)]">
            <User className="w-24 h-24 text-on-surface-variant" />
          </div>
          <button className="absolute bottom-2 right-2 p-3 rounded-full bg-primary text-on-primary shadow-lg hover:scale-110 transition-all">
            <Camera className="w-5 h-5" />
          </button>
        </div>
        <div className="flex-1 text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center gap-4 mb-4">
            <h1 className="text-5xl font-headline font-bold text-on-surface">Agent Divekar</h1>
            <div className="px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary font-bold text-xs uppercase tracking-widest">
              Level 4 Clearance
            </div>
          </div>
          <p className="text-on-surface-variant text-xl font-light mb-8 max-w-xl">
            Senior Cyber Defense Analyst specializing in neural threat detection and identity protection.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <button className="px-8 py-4 rounded-xl bg-primary text-on-primary font-headline font-bold shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all">
              EDIT PROFILE
            </button>
            <button className="px-8 py-4 rounded-xl bg-surface-low border border-outline-variant/30 text-on-surface font-headline font-bold hover:bg-surface-high transition-all">
              VIEW CLEARANCE LOGS
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8 space-y-8">
          <div className="bg-surface-low rounded-xl p-8 border border-outline-variant/10">
            <h3 className="font-headline text-2xl font-bold text-on-surface mb-8 uppercase tracking-widest">Identity Vectors</h3>
            <div className="space-y-4">
              {[
                { label: 'Primary Email', value: 'shrawanidivekar1@gmail.com', icon: AtSign },
                { label: 'Neural ID', value: 'ND-402-192-X', icon: Fingerprint },
                { label: 'Clearance Protocol', status: 'AES-256 Verified', icon: Lock },
                { label: 'Identity Sync', status: 'Active', icon: Globe }
              ].map((vector, i) => (
                <div key={i} className="flex items-center justify-between p-6 rounded-xl bg-surface-container-lowest border border-outline-variant/5 hover:border-primary/30 transition-all cursor-pointer group">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-surface-highest flex items-center justify-center border border-outline-variant/10 group-hover:border-primary/30 transition-all">
                      <vector.icon className="w-6 h-6 text-on-surface-variant group-hover:text-primary transition-all" />
                    </div>
                    <div>
                      <h4 className="font-headline font-bold text-on-surface mb-1 group-hover:text-primary transition-all">{vector.label}</h4>
                      <p className="text-sm text-on-surface-variant">{vector.value || vector.status}</p>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-on-surface-variant group-hover:text-primary transition-all" />
                </div>
              ))}
            </div>
          </div>

          <div className="bg-surface-low rounded-xl p-8 border border-outline-variant/10">
            <h3 className="font-headline text-2xl font-bold text-on-surface mb-8 uppercase tracking-widest">Clearance Statistics</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: 'Scans Run', value: '1,284', icon: Radar },
                { label: 'Threats Blocked', value: '42', icon: ShieldAlert },
                { label: 'Reports Filed', value: '15', icon: Flag },
                { label: 'Safety Score', value: '99.9%', icon: ShieldCheck }
              ].map((stat, i) => (
                <div key={i} className="p-6 rounded-xl bg-surface-container-lowest border border-outline-variant/5 text-center">
                  <stat.icon className="w-6 h-6 text-primary mx-auto mb-4" />
                  <p className="text-2xl font-headline font-bold text-on-surface">{stat.value}</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-4 space-y-6">
          <div className="bg-surface-low rounded-xl p-8 border border-outline-variant/10">
            <h3 className="font-headline text-lg font-bold text-on-surface mb-6 uppercase tracking-widest">Security Settings</h3>
            <div className="space-y-4">
              {[
                { label: 'Two-Factor Auth', status: 'Enabled', icon: ShieldCheck },
                { label: 'Biometric Access', status: 'Active', icon: Fingerprint },
                { label: 'Login Notifications', status: 'Enabled', icon: Bell },
                { label: 'Neural Sync', status: 'Optimal', icon: Cpu }
              ].map((setting, i) => (
                <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-surface-container-lowest border border-outline-variant/5 hover:border-primary/30 transition-all cursor-pointer group">
                  <div className="flex items-center gap-3">
                    <setting.icon className="w-4 h-4 text-on-surface-variant group-hover:text-primary transition-all" />
                    <span className="text-xs font-bold text-on-surface uppercase tracking-tighter group-hover:text-primary transition-all">{setting.label}</span>
                  </div>
                  <span className="text-[10px] font-bold text-primary uppercase tracking-widest bg-primary/10 px-3 py-1 rounded-full">{setting.status}</span>
                </div>
              ))}
            </div>
            <button className="w-full mt-8 py-4 rounded-xl bg-surface-highest text-on-surface-variant font-bold text-xs uppercase tracking-widest hover:bg-surface-container transition-all flex items-center justify-center gap-2">
              <Settings className="w-4 h-4" />
              ADVANCED SETTINGS
            </button>
          </div>

          <div className="bg-primary/5 rounded-xl p-8 border border-primary/10 relative overflow-hidden">
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center mb-6">
                <Sparkles className="text-primary w-6 h-6" />
              </div>
              <h3 className="font-headline text-xl font-bold text-on-surface mb-4">Identity Protection</h3>
              <p className="text-xs text-on-surface-variant leading-relaxed mb-8">
                Your digital identity is currently protected by AES-256 encryption and real-time neural monitoring. No breaches detected in the last 30 days.
              </p>
              <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest cursor-pointer hover:translate-x-2 transition-transform">
                View Security Audit
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default ProfileScreen;
