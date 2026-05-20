import { Trade } from "@/types/trading";

export const calcRiskAmount = (accountBalance:number, riskPercent:number)=> accountBalance * riskPercent / 100;
export const calcRr = (pnl:number, riskAmount:number)=> riskAmount === 0 ? 0 : pnl / riskAmount;
export const calcProfitPercent = (pnl:number, accountBalance:number)=> accountBalance === 0 ? 0 : pnl / accountBalance * 100;
export const getResult = (pnl:number): Trade["result"] => pnl > 0 ? "Win" : pnl < 0 ? "Loss" : "BE";

export const aggregateMetrics = (trades: Trade[]) => {
  const totalPnl = trades.reduce((a,t)=>a+t.pnl,0);
  const wins = trades.filter(t=>t.result==="Win");
  const losses = trades.filter(t=>t.result==="Loss");
  const winrate = trades.length ? wins.length / trades.length * 100 : 0;
  const avgRR = trades.length ? trades.reduce((a,t)=>a+t.rr,0) / trades.length : 0;
  const grossProfit = wins.reduce((a,t)=>a+t.pnl,0);
  const grossLoss = Math.abs(losses.reduce((a,t)=>a+t.pnl,0));
  const profitFactor = grossLoss ? grossProfit / grossLoss : grossProfit;
  const expectancy = trades.length ? totalPnl / trades.length : 0;
  return { totalPnl, winrate, avgRR, profitFactor, expectancy };
};
