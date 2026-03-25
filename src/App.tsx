import React, { useState, Suspense, lazy } from 'react';
import { GoogleGenAI, Type, ThinkingLevel } from "@google/genai";
import { motion, AnimatePresence } from 'motion/react';
import { Screen, ScanResult, HistoryItem } from './types';

// --- Lazy Loaded Screens ---
const LandingScreen = lazy(() => import('./screens/LandingScreen'));
const LoginScreen = lazy(() => import('./screens/LoginScreen'));
const ScannerScreen = lazy(() => import('./screens/ScannerScreen'));
const ReportScreen = lazy(() => import('./screens/ReportScreen'));
const DashboardScreen = lazy(() => import('./screens/DashboardScreen'));
const SafetyScreen = lazy(() => import('./screens/SafetyScreen'));
const ProfileScreen = lazy(() => import('./screens/ProfileScreen'));
const SettingsScreen = lazy(() => import('./screens/SettingsScreen'));

// --- Components ---
const Navbar = lazy(() => import('./components/Navbar'));
const ScamModal = lazy(() => import('./components/ScamModal'));

// --- Loading Component ---
const ScreenLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-surface">
    <div className="w-12 h-12 border-4 border-primary/30 border-t-primary rounded-full animate-spin"></div>
  </div>
);

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

  const handleLogin = React.useCallback(() => {
    setIsLoggedIn(true);
    setScreen('scan');
  }, []);

  const handleGetStarted = React.useCallback(() => {
    setScreen('login');
  }, []);

  const handleScan = React.useCallback(async (text: string, imageData?: string) => {
    if ((!text.trim() && !imageData) || isScanning) return;
    
    setIsScanning(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      
      const parts: any[] = [];
      if (text.trim()) {
        parts.push({ text: `Analyze for scams/phishing: "${text}"` });
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
        parts.push({ text: "Scan image for fraud/AI manipulation. Check for UI inconsistencies. Assess risk." });
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
              riskScore: { type: Type.NUMBER },
              confidence: { type: Type.NUMBER },
              threatType: { type: Type.STRING },
              keywords: { 
                type: Type.ARRAY, 
                items: { type: Type.STRING }
              },
              analysis: { type: Type.STRING },
              isRealImage: { type: Type.BOOLEAN },
              authenticityAnalysis: { type: Type.STRING }
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
  }, [isScanning]);

  const proceedToReport = React.useCallback(() => {
    setIsModalOpen(false);
    setScreen('report');
  }, []);

  return (
    <div className="min-h-screen bg-surface relative overflow-x-hidden">
      <Suspense fallback={<ScreenLoader />}>
        {screen === 'landing' ? (
          <LandingScreen onGetStarted={handleGetStarted} />
        ) : !isLoggedIn && screen === 'login' ? (
          <LoginScreen onLogin={handleLogin} onBack={() => setScreen('landing')} />
        ) : (
          <>
            <Navbar currentScreen={screen} setScreen={setScreen} />
            
            <AnimatePresence>
              <motion.div
                key={screen}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                <Suspense fallback={<ScreenLoader />}>
                  {screen === 'scan' && <ScannerScreen onScan={handleScan} isScanning={isScanning} />}
                  {screen === 'report' && scanResult && <ReportScreen result={scanResult} />}
                  {screen === 'history' && <DashboardScreen history={history} />}
                  {screen === 'safety' && <SafetyScreen />}
                  {screen === 'profile' && <ProfileScreen />}
                  {screen === 'settings' && <SettingsScreen />}
                </Suspense>
              </motion.div>
            </AnimatePresence>

            <ScamModal isOpen={isModalOpen} onClose={proceedToReport} />
          </>
        )}
      </Suspense>
    </div>
  );
}
