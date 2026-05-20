export type AccountType = "Personal" | "Prop Firm" | "Crypto Exchange";
export type AccountStatus = "Active" | "Passed" | "Failed" | "Archived";
export type Phase = "Phase 1" | "Phase 2" | "Funded" | "Demo" | "Personal";

export interface Account {
  id: string; name: string; broker: string; platform: string; type: AccountType;
  balance: number; initialBalance: number; currency: string; phase: Phase;
  dailyDrawdownLimit: number; maxDrawdownLimit: number; profitTarget: number;
  status: AccountStatus; createdAt: string;
}
export interface Trade {
  id: string; accountId: string; tradeNumber: string; assetType: "Forex"|"Crypto"|"Indices"|"Metals";
  pair: string; direction: "Long"|"Short"; entryPrice: number; stopLoss: number; takeProfit: number;
  exitPrice: number; riskPercent: number; riskAmount: number; rr: number; pnl: number; profitPercent: number;
  result: "Win"|"Loss"|"BE"; strategy: string; session: "London"|"New York"|"Asia";
  setupGrade: "A"|"B"|"C"; emotion: string; notes: string; screenshotBefore?: string; screenshotAfter?: string;
  startDate: string; endDate: string; duration: string;
}
