"use client";
import Link from "next/link";
import { BarChart3, BrainCircuit, Calendar, CandlestickChart, LayoutDashboard, Settings, WalletCards } from "lucide-react";
import { usePathname } from "next/navigation";
const items=[
  ["/", "Dashboard", LayoutDashboard], ["/trades","Trades",CandlestickChart], ["/accounts","Accounts",WalletCards], ["/analytics","Analytics",BarChart3], ["/calendar","Calendar",Calendar], ["/ai-insights","AI Insights",BrainCircuit], ["/settings","Settings",Settings]
] as const;
export function Sidebar(){const p=usePathname();return <aside className="w-64 p-4 border-r border-border hidden lg:block"><div className="text-xl font-semibold mb-6">TradeOS</div><nav className="space-y-1">{items.map(([href,label,Icon])=><Link key={href} href={href} className={`flex items-center gap-2 px-3 py-2 rounded-xl border ${p===href?"bg-emerald-500/20 border-emerald-400/40":"border-transparent hover:bg-white/5"}`}><Icon size={16}/>{label}</Link>)}</nav></aside>}
