import { create } from "zustand";
import { accounts as mockAccounts, trades as mockTrades } from "@/lib/mock-data";
import { Account, Trade } from "@/types/trading";

type State = { accounts: Account[]; trades: Trade[]; addTrade:(trade:Trade)=>void; };

export const useTradingStore = create<State>((set)=>({
  accounts: mockAccounts,
  trades: mockTrades,
  addTrade:(trade)=> set((s)=>({ trades:[trade, ...s.trades] }))
}));
