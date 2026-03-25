export type Screen = 'landing' | 'login' | 'scan' | 'report' | 'history' | 'safety' | 'profile' | 'settings';

export interface ScanResult {
  riskScore: number;
  confidence: number;
  threatType: string;
  keywords: string[];
  analysis: string;
  isRealImage?: boolean;
  authenticityAnalysis?: string;
  timestamp: string;
  traceId: string;
}

export interface HistoryItem {
  id: string;
  origin: string;
  snippet: string;
  riskScore: number;
  status: 'Blocked' | 'Safe';
  timestamp: string;
}
