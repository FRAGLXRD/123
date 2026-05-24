"use client";

import { useMemo, useState } from "react";
import { Crown, Shield, Swords, Users } from "lucide-react";

type Lang = "uk" | "en";

type Player = {
  id: number;
  name: string;
  isBot: boolean;
  cards: number;
  status: "attack" | "defend" | "waiting";
};

const text = {
  uk: {
    title: "Durak Arena",
    subtitle:
      "Сучасна 2D карткова гра для Steam: до 6 гравців, боти, інвайти друзів, та гнучкі лобі.",
    modes: "Режими гри",
    invited: "Друзі по інвайту",
    bots: "Боти",
    onlyFriends: "Тільки друзі (без ботів)",
    players: "Кількість гравців",
    createLobby: "Створити лобі",
    startRound: "Почати раунд",
    lang: "Мова",
    hand: "Карт в руці",
    table: "Стіл",
    trump: "Козир",
    attack: "Атакує",
    defend: "Відбивається",
    waiting: "Очікує",
    steam: "Steam-ready UI концепт",
    deck: "Колода",
  },
  en: {
    title: "Durak Arena",
    subtitle:
      "Modern 2D card game for Steam: up to 6 players, AI bots, friend invites, and flexible lobby rules.",
    modes: "Game Modes",
    invited: "Friends by invite",
    bots: "Bots",
    onlyFriends: "Friends only (no bots)",
    players: "Player count",
    createLobby: "Create lobby",
    startRound: "Start round",
    lang: "Language",
    hand: "Cards in hand",
    table: "Table",
    trump: "Trump",
    attack: "Attacking",
    defend: "Defending",
    waiting: "Waiting",
    steam: "Steam-ready UI concept",
    deck: "Deck",
  },
};

const suits = ["♥", "♣", "♦", "♠"];

export default function Page() {
  const [lang, setLang] = useState<Lang>("uk");
  const [playersCount, setPlayersCount] = useState(6);
  const [inviteFriends, setInviteFriends] = useState(true);
  const [withBots, setWithBots] = useState(true);

  const t = text[lang];

  const players = useMemo<Player[]>(() => {
    return Array.from({ length: playersCount }, (_, i) => ({
      id: i + 1,
      name: i === 0 ? "You" : withBots ? `Bot ${i}` : `Friend ${i}`,
      isBot: i !== 0 && withBots,
      cards: 6,
      status: i === 0 ? "attack" : i === 1 ? "defend" : "waiting",
    }));
  }, [playersCount, withBots]);

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 text-white p-6 md:p-10">
      <div className="mx-auto max-w-6xl space-y-6">
        <header className="glass rounded-3xl p-6 md:p-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-emerald-300 text-sm">{t.steam}</p>
              <h1 className="text-4xl font-bold tracking-tight">{t.title}</h1>
              <p className="text-slate-300 mt-2 max-w-2xl">{t.subtitle}</p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setLang("uk")}
                className={`px-4 py-2 rounded-xl ${lang === "uk" ? "bg-emerald-500" : "bg-white/10"}`}
              >
                УКР
              </button>
              <button
                onClick={() => setLang("en")}
                className={`px-4 py-2 rounded-xl ${lang === "en" ? "bg-emerald-500" : "bg-white/10"}`}
              >
                EN
              </button>
            </div>
          </div>
        </header>

        <section className="grid gap-6 lg:grid-cols-[360px,1fr]">
          <aside className="glass rounded-3xl p-6 space-y-4">
            <h2 className="text-xl font-semibold flex items-center gap-2"><Users size={18} /> {t.modes}</h2>

            <label className="flex items-center justify-between rounded-xl bg-white/5 p-3">
              <span>{t.invited}</span>
              <input type="checkbox" checked={inviteFriends} onChange={() => setInviteFriends(!inviteFriends)} />
            </label>

            <label className="flex items-center justify-between rounded-xl bg-white/5 p-3">
              <span>{t.bots}</span>
              <input type="checkbox" checked={withBots} onChange={() => setWithBots(!withBots)} />
            </label>

            <div className="rounded-xl bg-white/5 p-3 text-sm text-slate-300">{t.onlyFriends}: {withBots ? "OFF" : "ON"}</div>

            <label className="block rounded-xl bg-white/5 p-3">
              <span className="block text-sm text-slate-300 mb-2">{t.players}: {playersCount}</span>
              <input
                type="range"
                min={2}
                max={6}
                value={playersCount}
                onChange={(e) => setPlayersCount(Number(e.target.value))}
                className="w-full"
              />
            </label>

            <div className="grid grid-cols-2 gap-2">
              <button className="rounded-xl bg-emerald-500 py-2 font-medium">{t.createLobby}</button>
              <button className="rounded-xl bg-indigo-500 py-2 font-medium">{t.startRound}</button>
            </div>
          </aside>

          <div className="glass rounded-3xl p-6 space-y-5">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold flex items-center gap-2"><Swords size={18}/> {t.table}</h2>
              <div className="text-slate-300 text-sm">{t.trump}: {suits[playersCount % suits.length]}</div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {players.map((p) => (
                <article key={p.id} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold">{p.name}</h3>
                    {p.status === "attack" && <Swords className="text-rose-300" size={16} />}
                    {p.status === "defend" && <Shield className="text-sky-300" size={16} />}
                    {p.status === "waiting" && <Crown className="text-amber-300" size={16} />}
                  </div>
                  <p className="text-sm text-slate-300 mt-2">{t.hand}: {p.cards}</p>
                  <p className="text-xs text-slate-400 mt-1">
                    {p.status === "attack" ? t.attack : p.status === "defend" ? t.defend : t.waiting}
                  </p>
                  <p className="text-xs mt-1 text-emerald-300">{p.isBot ? "AI Bot" : inviteFriends ? "Invite Friend" : "Local Player"}</p>
                </article>
              ))}
            </div>

            <div className="rounded-2xl border border-dashed border-white/20 bg-slate-900/60 p-6 text-center text-slate-300">
              {t.deck}: 24
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
