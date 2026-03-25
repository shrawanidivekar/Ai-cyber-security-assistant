import React from 'react';
import { 
  ShieldCheck, 
  Bell, 
  Settings, 
  User, 
  Menu, 
  Radar, 
  History, 
  FileText, 
  Shield 
} from 'lucide-react';
import { Screen } from '../types';

interface NavbarProps {
  currentScreen: Screen;
  setScreen: (s: Screen) => void;
}

const Navbar = React.memo(({ currentScreen, setScreen }: NavbarProps) => {
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

export default Navbar;
