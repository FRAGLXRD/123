"use client";
import { aggregateMetrics } from "@/lib/calculations";
import { useTradingStore } from "@/store/use-trading-store";
export function OverviewCards(){const trades=useTradingStore(s=>s.trades);const m=aggregateMetrics(trades); const cards=[["Total PnL",`$${m.totalPnl.toFixed(2)}`],["Winrate",`${m.winrate.toFixed(1)}%`],["Average RR",m.avgRR.toFixed(2)],["Profit Factor",m.profitFactor.toFixed(2)],["Expectancy",`$${m.expectancy.toFixed(2)}`],["Total Trades",trades.length.toString()]]; return <div className="grid md:grid-cols-3 gap-3">{cards.map(([k,v])=><div key={k} className="glass rounded-2xl p-4"><p className="text-xs text-slate-400">{k}</p><p className="text-2xl font-semibold mt-1">{v}</p></div>)}</div>}
