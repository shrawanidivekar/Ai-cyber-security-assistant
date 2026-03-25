import React from 'react';
import { motion } from 'motion/react';
import { 
  ShieldCheck, 
  ShieldAlert, 
  AlertTriangle, 
  ChevronRight, 
  Info, 
  FileText, 
  Share2, 
  Download, 
  Shield 
} from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { ScanResult } from '../types';

interface ReportScreenProps {
  result: ScanResult;
}

const ReportScreen = React.memo(({ result }: ReportScreenProps) => {
  const data = [
    { name: 'Risk', value: result.riskScore },
    { name: 'Safety', value: 100 - result.riskScore },
  ];
  
  const COLORS = [result.riskScore > 50 ? '#FF4B4B' : '#A4E6FF', '#1E2124'];

  return (
    <div className="pt-24 pb-32 px-4 md:px-8 max-w-7xl mx-auto w-full">
      <div className="flex flex-col md:flex-row items-start justify-between gap-8 mb-12 mt-8">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-4">
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border ${
              result.riskScore > 50 ? 'bg-error/10 border-error/20 text-error' : 'bg-primary/10 border-primary/20 text-primary'
            }`}>
              {result.riskScore > 50 ? <ShieldAlert className="w-6 h-6" /> : <ShieldCheck className="w-6 h-6" />}
            </div>
            <div>
              <h1 className="text-3xl font-headline font-bold text-on-surface">Security Analysis Report</h1>
              <p className="text-xs font-label text-on-surface-variant uppercase tracking-widest font-bold">Trace ID: {result.traceId} • {result.timestamp}</p>
            </div>
          </div>
          <p className="text-on-surface-variant max-w-2xl text-lg font-light leading-relaxed">
            Our neural engine has completed a multi-vector analysis of the submitted content. Below is the detailed threat assessment.
          </p>
        </div>
        
        <div className="flex gap-3">
          <button className="p-4 rounded-xl bg-surface-low border border-outline-variant/10 hover:bg-surface-high transition-all text-on-surface-variant">
            <Share2 className="w-5 h-5" />
          </button>
          <button className="p-4 rounded-xl bg-surface-low border border-outline-variant/10 hover:bg-surface-high transition-all text-on-surface-variant">
            <Download className="w-5 h-5" />
          </button>
          <button className="px-8 py-4 rounded-xl bg-primary text-on-primary font-headline font-bold shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all">
            EXPORT PDF
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-surface-low rounded-xl p-8 border border-outline-variant/10 flex flex-col items-center text-center">
            <h3 className="font-headline text-lg font-bold text-on-surface mb-8 uppercase tracking-widest">Risk Assessment</h3>
            <div className="w-full h-64 relative will-change-transform">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    innerRadius={80}
                    outerRadius={100}
                    paddingAngle={5}
                    dataKey="value"
                    startAngle={90}
                    endAngle={450}
                  >
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className={`text-6xl font-headline font-bold ${result.riskScore > 50 ? 'text-error' : 'text-primary'}`}>
                  {result.riskScore}%
                </span>
                <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Risk Score</span>
              </div>
            </div>
            
            <div className="mt-8 w-full space-y-4">
              <div className="flex justify-between items-center p-4 rounded-xl bg-surface-container-lowest border border-outline-variant/5">
                <span className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Confidence</span>
                <span className="font-headline font-bold text-primary">{result.confidence}%</span>
              </div>
              <div className="flex justify-between items-center p-4 rounded-xl bg-surface-container-lowest border border-outline-variant/5">
                <span className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Threat Type</span>
                <span className={`font-headline font-bold ${result.riskScore > 50 ? 'text-error' : 'text-primary'}`}>{result.threatType}</span>
              </div>
            </div>
          </div>

          <div className={`rounded-xl p-6 border ${
            result.riskScore > 50 ? 'bg-error/5 border-error/10' : 'bg-primary/5 border-primary/10'
          }`}>
            <div className="flex items-center gap-2 mb-4">
              <AlertTriangle className={`w-4 h-4 ${result.riskScore > 50 ? 'text-error' : 'text-primary'}`} />
              <h3 className={`text-xs font-headline font-bold uppercase tracking-widest ${
                result.riskScore > 50 ? 'text-error' : 'text-primary'
              }`}>Neural Verdict</h3>
            </div>
            <p className="text-sm text-on-surface leading-relaxed font-medium">
              {result.riskScore > 50 
                ? "DANGER: High probability of malicious intent. This content matches known phishing and social engineering patterns."
                : "SAFE: No immediate threats detected. However, always remain vigilant with unsolicited communications."
              }
            </p>
          </div>
        </div>

        <div className="lg:col-span-8 space-y-6">
          <div className="bg-surface-low rounded-xl p-8 border border-outline-variant/10">
            <h3 className="font-headline text-xl font-bold text-on-surface mb-6 flex items-center gap-3">
              <FileText className="text-primary w-5 h-5" />
              Detailed Analysis
            </h3>
            <div className="prose prose-invert max-w-none">
              <p className="text-on-surface-variant leading-relaxed text-lg font-light">
                {result.analysis}
              </p>
            </div>
            
            {result.authenticityAnalysis && (
              <div className="mt-8 pt-8 border-t border-outline-variant/10">
                <h4 className="font-headline font-bold text-on-surface mb-4 flex items-center gap-2">
                  <Shield className="text-primary w-4 h-4" />
                  Authenticity Verification
                </h4>
                <div className="p-4 rounded-xl bg-surface-container-lowest border border-outline-variant/5">
                  <p className="text-sm text-on-surface-variant leading-relaxed">
                    {result.authenticityAnalysis}
                  </p>
                  <div className="mt-4 flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${result.isRealImage ? 'bg-primary' : 'bg-error'}`}></div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface">
                        {result.isRealImage ? 'Authentic Image' : 'Potential Forgery'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className="mt-8">
              <h4 className="font-headline text-sm font-bold text-on-surface mb-4 uppercase tracking-widest">Suspicious Markers</h4>
              <div className="flex flex-wrap gap-2">
                {result.keywords.map((kw, i) => (
                  <span key={i} className="px-4 py-2 rounded-lg bg-surface-highest border border-outline-variant/10 text-xs font-bold text-on-surface">
                    {kw}
                  </span>
                ))}
                {result.keywords.length === 0 && <span className="text-xs text-on-surface-variant italic">No specific markers identified.</span>}
              </div>
            </div>
          </div>

          <div className="bg-surface-low rounded-xl p-8 border border-outline-variant/10">
            <h3 className="font-headline text-xl font-bold text-on-surface mb-6">Recommended Actions</h3>
            <div className="space-y-4">
              {[
                { title: 'Block Sender', desc: 'Immediately restrict all communication from this identity vector.', action: 'BLOCK NOW', color: 'error' },
                { title: 'Report to Authorities', desc: 'Submit this trace to the Cyber Defense Agency for investigation.', action: 'SUBMIT REPORT', color: 'primary' },
                { title: 'Secure Accounts', desc: 'Initiate a full security audit of your connected financial systems.', action: 'AUDIT NOW', color: 'primary' }
              ].map((rec, i) => (
                <div key={i} className="flex items-center justify-between p-6 rounded-xl bg-surface-container-lowest border border-outline-variant/5 group hover:border-primary/30 transition-all">
                  <div className="flex-1">
                    <h4 className="font-headline font-bold text-on-surface mb-1">{rec.title}</h4>
                    <p className="text-xs text-on-surface-variant">{rec.desc}</p>
                  </div>
                  <button className={`px-6 py-2 rounded-lg font-label text-[10px] font-bold uppercase tracking-widest border transition-all ${
                    rec.color === 'error' 
                      ? 'border-error/20 text-error hover:bg-error/10' 
                      : 'border-primary/20 text-primary hover:bg-primary/10'
                  }`}>
                    {rec.action}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default ReportScreen;
