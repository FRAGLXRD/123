const insights = [
  "Your best performance is during London session.",
  "GBPUSD has the highest winrate.",
  "You lose more often on short trades.",
  "Your average RR is below your target.",
  "You are risking too much after losing trades."
];

export default function Page(){return <div className="glass rounded-2xl p-6"><h2 className="text-xl font-semibold mb-4">AI Insights</h2><div className="space-y-2">{insights.map((i)=><div key={i} className="rounded-xl border border-white/10 p-3 bg-white/5">{i}</div>)}</div></div>}
