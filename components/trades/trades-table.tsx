"use client";
import { useMemo, useState } from "react";
import { useTradingStore } from "@/store/use-trading-store";

type SortKey = "startDate" | "tradeNumber" | "pair" | "direction" | "result" | "pnl" | "riskAmount" | "rr" | "profitPercent";

export function TradesTable() {
  const trades = useTradingStore((s) => s.trades);
  const [sort, setSort] = useState<{ key: SortKey; dir: "asc" | "desc" }>({ key: "startDate", dir: "desc" });

  const sorted = useMemo(() => [...trades].sort((a, b) => {
    const av = a[sort.key]; const bv = b[sort.key];
    const res = av > bv ? 1 : av < bv ? -1 : 0;
    return sort.dir === "asc" ? res : -res;
  }), [trades, sort]);

  const toggle = (key: SortKey) => setSort((s) => ({ key, dir: s.key === key && s.dir === "asc" ? "desc" : "asc" }));
  const head = (label: string, key: SortKey) => <th className="text-left p-2 cursor-pointer text-slate-400" onClick={() => toggle(key)}>{label}</th>;

  return <div className="glass rounded-2xl p-3 overflow-auto"><table className="w-full text-sm"><thead><tr>{head("Start-End", "startDate")}{head("Trade", "tradeNumber")}{head("Pair", "pair")}{head("Direction", "direction")}{head("Result", "result")}{head("PnL", "pnl")}{head("Risk", "riskAmount")}{head("RR", "rr")}{head("Profit %", "profitPercent")}</tr></thead><tbody>{sorted.map((r) => <tr key={r.id} className="border-t border-white/5 hover:bg-white/5"><td className="p-2">{r.startDate} • {r.endDate}</td><td className="p-2">{r.tradeNumber}</td><td className="p-2">{r.pair}</td><td className={`p-2 ${r.direction === "Long" ? "text-emerald-400" : "text-rose-400"}`}>{r.direction}</td><td className="p-2"><span className="px-2 py-1 rounded-full bg-white/10 text-xs">{r.result}</span></td><td className={`p-2 ${r.pnl >= 0 ? "text-emerald-400" : "text-rose-400"}`}>{r.pnl.toFixed(2)}</td><td className="p-2">{r.riskAmount.toFixed(2)}</td><td className="p-2">{r.rr.toFixed(2)}</td><td className={`p-2 ${r.profitPercent >= 0 ? "text-emerald-400" : "text-rose-400"}`}>{r.profitPercent.toFixed(2)}%</td></tr>)}</tbody></table></div>;
}
