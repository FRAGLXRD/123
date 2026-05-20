import { Account, Trade } from "@/types/trading";
import { calcProfitPercent, calcRiskAmount, calcRr, getResult } from "@/lib/calculations";

export const accounts: Account[] = [
  { id:"a1", name:"FTMO Swing", broker:"FTMO", platform:"MT5", type:"Prop Firm", balance:10850, initialBalance:10000, currency:"USD", phase:"Funded", dailyDrawdownLimit:500, maxDrawdownLimit:1000, profitTarget:12000, status:"Active", createdAt:"2026-02-12" },
  { id:"a2", name:"Binance Alpha", broker:"Binance", platform:"Binance", type:"Crypto Exchange", balance:6400, initialBalance:5000, currency:"USDT", phase:"Personal", dailyDrawdownLimit:250, maxDrawdownLimit:750, profitTarget:7000, status:"Active", createdAt:"2026-01-05" },
];

const base = [
  { id:"t1", accountId:"a1", tradeNumber:"#1024", assetType:"Forex", pair:"GBPUSD", direction:"Long", riskPercent:1, pnl:320, strategy:"London Breakout", session:"London", setupGrade:"A", emotion:"Calm", startDate:"2026-05-01", endDate:"2026-05-01", duration:"2h" },
  { id:"t2", accountId:"a1", tradeNumber:"#1025", assetType:"Indices", pair:"US100", direction:"Short", riskPercent:0.8, pnl:-190, strategy:"NY Reversal", session:"New York", setupGrade:"B", emotion:"Hesitant", startDate:"2026-05-02", endDate:"2026-05-02", duration:"40m" },
  { id:"t3", accountId:"a2", tradeNumber:"#341", assetType:"Crypto", pair:"BTCUSDT", direction:"Long", riskPercent:1.2, pnl:510, strategy:"Momentum", session:"Asia", setupGrade:"A", emotion:"Focused", startDate:"2026-05-03", endDate:"2026-05-03", duration:"5h" }
];

export const trades: Trade[] = base.map((t,i)=>{
  const account=accounts.find(a=>a.id===t.accountId)!; const riskAmount=calcRiskAmount(account.balance,t.riskPercent);
  return { ...t, entryPrice: 1.2+i, stopLoss:1+i, takeProfit:1.6+i, exitPrice:1.5+i, riskAmount, rr: calcRr(t.pnl, riskAmount), profitPercent:calcProfitPercent(t.pnl, account.balance), result:getResult(t.pnl), notes:"Disciplined execution with planned risk." };
});
