"use client";

export function AddTradeModal({ open, onOpenChange }: { open: boolean; onOpenChange: (v: boolean) => void }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50">
      <button className="absolute inset-0 bg-black/70" onClick={() => onOpenChange(false)} aria-label="Close" />
      <section className="absolute right-0 top-0 h-full w-full max-w-xl glass p-6 overflow-auto">
        <h2 className="text-lg font-semibold mb-4">Add Trade</h2>
        <div className="grid grid-cols-2 gap-3 text-sm">
          {["Account", "Asset Type", "Pair", "Direction", "Entry price", "Stop loss", "Take profit", "Exit price", "Risk %", "PnL", "Strategy", "Session", "Setup grade", "Emotion"].map((f) => (
            <label key={f}>{f}<input className="w-full mt-1 bg-black/30 border border-border rounded-lg px-2 py-2" /></label>
          ))}
          <label className="col-span-2">Notes<textarea className="w-full mt-1 bg-black/30 border border-border rounded-lg px-2 py-2" /></label>
        </div>
        <button className="mt-4 w-full bg-emerald-500 text-black rounded-lg py-2" onClick={() => onOpenChange(false)}>Save Trade</button>
      </section>
    </div>
  );
}
