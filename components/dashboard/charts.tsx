"use client";
import { useTradingStore } from "@/store/use-trading-store";

export function DashboardCharts() {
  const trades = useTradingStore((s) => s.trades);
  const equity = trades.map((t, i) => trades.slice(0, i + 1).reduce((a, x) => a + x.pnl, 0));
  const max = Math.max(...equity, 1);
  const min = Math.min(...equity, 0);
  const wins = trades.filter((t) => t.result === "Win").length;
  const losses = trades.filter((t) => t.result === "Loss").length;
  const be = trades.filter((t) => t.result === "BE").length;
  const total = Math.max(wins + losses + be, 1);

  return <div className="grid lg:grid-cols-2 gap-4 mt-4">
    <div className="glass rounded-2xl p-4"><p className="mb-3">Equity Curve</p><div className="h-56 flex items-end gap-2">{equity.map((v, i) => { const h = ((v - min) / (max - min || 1)) * 100; return <div key={i} className="flex-1 rounded-t bg-emerald-400/70" style={{ height: `${Math.max(h, 4)}%` }} />; })}</div></div>
    <div className="glass rounded-2xl p-4"><p className="mb-3">Win/Loss Distribution</p><div className="space-y-3 text-sm"><div>Win {Math.round((wins / total) * 100)}%<div className="h-2 bg-white/10 rounded"><div className="h-2 bg-emerald-400 rounded" style={{ width: `${(wins / total) * 100}%` }} /></div></div><div>Loss {Math.round((losses / total) * 100)}%<div className="h-2 bg-white/10 rounded"><div className="h-2 bg-rose-400 rounded" style={{ width: `${(losses / total) * 100}%` }} /></div></div><div>BE {Math.round((be / total) * 100)}%<div className="h-2 bg-white/10 rounded"><div className="h-2 bg-cyan-400 rounded" style={{ width: `${(be / total) * 100}%` }} /></div></div></div></div>
  </div>;
}
