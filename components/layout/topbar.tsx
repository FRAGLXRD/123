"use client";
import { Plus } from "lucide-react";
import { AddTradeModal } from "@/components/trades/add-trade-modal";
import { useState } from "react";
export function Topbar(){const [open,setOpen]=useState(false);return <header className="p-4 border-b border-border flex items-center justify-between"><h1 className="font-medium">Performance Workspace</h1><button onClick={()=>setOpen(true)} className="px-3 py-2 rounded-lg bg-emerald-500 text-black font-medium flex items-center gap-2"><Plus size={16}/>Add Trade</button><AddTradeModal open={open} onOpenChange={setOpen}/></header>}
