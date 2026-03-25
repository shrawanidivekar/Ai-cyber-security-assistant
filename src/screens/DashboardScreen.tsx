import React from 'react';
import { motion } from 'motion/react';
import { 
  History, 
  ShieldCheck, 
  ShieldAlert, 
  ChevronRight, 
  Info, 
  FileText, 
  Search, 
  Filter, 
  TrendingUp, 
  Bell, 
  Shield, 
  Lock 
} from 'lucide-react';
import { HistoryItem } from '../types';

interface DashboardScreenProps {
  history: HistoryItem[];
}

const DashboardScreen = React.memo(({ history }: DashboardScreenProps) => {
  return (
    <div className="pt-24 pb-32 px-4 md:px-8 max-w-7xl mx-auto w-full">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12 mt-8">
        <div>
          <h1 className="text-4xl font-headline font-bold text-on-surface mb-2">Security Dashboard</h1>
          <p className="text-on-surface-variant text-lg font-light">Monitor your digital identity and threat history in real-time.</p>
        </div>
        <div className="flex items-center gap-4 bg-surface-low p-2 rounded-2xl border border-outline-variant/10">
          <div className="px-6 py-3 rounded-xl bg-primary/10 border border-primary/20 text-primary text-center">
            <p className="text-2xl font-headline font-bold">1,284</p>
            <p className="text-[10px] font-bold uppercase tracking-widest">Scans Run</p>
          </div>
          <div className="px-6 py-3 rounded-xl bg-error/10 border border-error/20 text-error text-center">
            <p className="text-2xl font-headline font-bold">42</p>
            <p className="text-[10px] font-bold uppercase tracking-widest">Threats Blocked</p>
          </div>
          <div className="px-6 py-3 rounded-xl bg-surface-highest border border-outline-variant/10 text-on-surface text-center">
            <p className="text-2xl font-headline font-bold">99.9%</p>
            <p className="text-[10px] font-bold uppercase tracking-widest">Safety Score</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-8 space-y-6">
          <div className="bg-surface-low rounded-xl p-8 border border-outline-variant/10">
            <div className="flex items-center justify-between mb-8">
              <h3 className="font-headline text-xl font-bold text-on-surface flex items-center gap-3">
                <History className="text-primary w-5 h-5" />
                Recent Scan History
              </h3>
              <div className="flex gap-3">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-on-surface-variant" />
                  <input 
                    type="text" 
                    placeholder="Search history..." 
                    className="bg-surface-container-lowest border border-outline-variant/20 rounded-lg py-2 pl-10 pr-4 text-xs focus:outline-none focus:ring-1 focus:ring-primary/40"
                  />
                </div>
                <button className="p-2 rounded-lg bg-surface-highest border border-outline-variant/20 text-on-surface-variant">
                  <Filter className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="space-y-4">
              {history.map((item) => (
                <div key={item.id} className="group flex items-center justify-between p-5 rounded-xl bg-surface-container-lowest border border-outline-variant/5 hover:border-primary/30 transition-all cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${
                      item.status === 'Blocked' ? 'bg-error/10 border-error/20 text-error' : 'bg-primary/10 border-primary/20 text-primary'
                    }`}>
                      {item.status === 'Blocked' ? <ShieldAlert className="w-6 h-6" /> : <ShieldCheck className="w-6 h-6" />}
                    </div>
                    <div>
                      <h4 className="font-headline font-bold text-on-surface mb-1 group-hover:text-primary transition-colors">{item.origin}</h4>
                      <p className="text-xs text-on-surface-variant line-clamp-1">{item.snippet}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-8">
                    <div className="text-right hidden md:block">
                      <p className={`text-xs font-bold uppercase tracking-widest ${item.status === 'Blocked' ? 'text-error' : 'text-primary'}`}>{item.status}</p>
                      <p className="text-[10px] text-on-surface-variant font-mono">{item.timestamp}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-12 h-2 bg-surface-highest rounded-full overflow-hidden">
                        <div 
                          className={`h-full rounded-full ${item.riskScore > 50 ? 'bg-error' : 'bg-primary'}`}
                          style={{ width: `${item.riskScore}%` }}
                        ></div>
                      </div>
                      <span className="text-[10px] font-bold font-mono text-on-surface-variant">{item.riskScore}%</span>
                    </div>
                    <ChevronRight className="w-5 h-5 text-on-surface-variant group-hover:text-primary transition-all" />
                  </div>
                </div>
              ))}
              {history.length === 0 && (
                <div className="py-20 text-center opacity-30">
                  <History className="w-12 h-12 mx-auto mb-4" />
                  <p className="font-headline text-lg font-bold uppercase tracking-widest">No History Found</p>
                </div>
              )}
            </div>
            
            <button className="w-full mt-8 py-4 rounded-xl bg-surface-highest text-on-surface-variant font-bold text-xs uppercase tracking-widest hover:bg-surface-container transition-all">
              VIEW FULL HISTORY
            </button>
          </div>
        </div>

        <div className="lg:col-span-4 space-y-6">
          <div className="bg-surface-low rounded-xl p-8 border border-outline-variant/10">
            <h3 className="font-headline text-lg font-bold text-on-surface mb-6 uppercase tracking-widest">Active Protection</h3>
            <div className="space-y-6">
              {[
                { label: 'Real-time Interceptor', status: 'Active', icon: Bell, color: 'primary' },
                { label: 'Neural Core Engine', status: 'Optimal', icon: TrendingUp, color: 'primary' },
                { label: 'AES-256 Encryption', status: 'Secure', icon: Lock, color: 'primary' },
                { label: 'Global Threat Sync', status: 'Syncing', icon: Shield, color: 'primary' }
              ].map((stat, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-surface-highest flex items-center justify-center">
                      <stat.icon className="w-5 h-5 text-on-surface-variant" />
                    </div>
                    <span className="text-xs font-bold text-on-surface uppercase tracking-tighter">{stat.label}</span>
                  </div>
                  <span className="text-[10px] font-bold text-primary uppercase tracking-widest bg-primary/10 px-3 py-1 rounded-full">{stat.status}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-primary/5 rounded-xl p-8 border border-primary/10 relative overflow-hidden group">
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center mb-6">
                <ShieldCheck className="text-primary w-6 h-6" />
              </div>
              <h3 className="font-headline text-xl font-bold text-on-surface mb-2">Upgrade to Pro Defense</h3>
              <p className="text-xs text-on-surface-variant leading-relaxed mb-6">
                Unlock advanced features like automated threat neutralization, multi-device sync, and 24/7 priority cyber support.
              </p>
              <button className="w-full py-4 rounded-xl bg-primary text-on-primary font-headline font-bold shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all">
                UPGRADE NOW
              </button>
            </div>
            <div className="absolute -bottom-4 -right-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <ShieldCheck className="w-32 h-32 text-primary" />
            </div>
          </div>

          <div className="bg-surface-low rounded-xl p-6 border border-outline-variant/10">
            <div className="flex items-center gap-2 mb-4">
              <Info className="text-primary w-4 h-4" />
              <h3 className="text-[10px] font-headline font-bold uppercase tracking-widest text-primary">Security Tip</h3>
            </div>
            <p className="text-[10px] text-on-surface-variant leading-relaxed">
              Your security score has increased by 12% this week. Keep scanning suspicious messages to maintain your digital perimeter.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
});

export default DashboardScreen;
