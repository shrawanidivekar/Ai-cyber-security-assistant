import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { AlertTriangle } from 'lucide-react';

interface ScamModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ScamModal = React.memo(({ isOpen, onClose }: ScamModalProps) => {
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
});

export default ScamModal;
