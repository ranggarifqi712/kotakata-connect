import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { mockRooms, mockQuests, mockSenpais } from "@/lib/mockData";

const Dashboard = () => {
  const navigate = useNavigate();
  const tokenBalance = 120;
  const xp = 350;

  return (
    <div className="min-h-screen pb-24 px-4 pt-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <p className="text-muted-foreground text-sm">Welcome back</p>
          <h1 className="text-2xl font-bold">Kouhai ✨</h1>
        </div>
        <button
          onClick={() => navigate("/tokens")}
          className="flex items-center gap-2 py-2 px-4 rounded-full bg-secondary border border-border"
        >
          <span className="text-sm">🪙</span>
          <span className="font-semibold text-sm">{tokenBalance}</span>
        </button>
      </div>

      {/* XP Bar */}
      <div className="mb-6 p-4 rounded-2xl bg-card border border-border">
        <div className="flex justify-between text-sm mb-2">
          <span className="text-muted-foreground">Level 2 • Elementary</span>
          <span className="text-muted-foreground">{xp}/500 XP</span>
        </div>
        <div className="h-2 rounded-full bg-secondary overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${(xp / 500) * 100}%` }}
            transition={{ duration: 1, delay: 0.3 }}
            className="h-full rounded-full gradient-primary"
          />
        </div>
      </div>

      {/* Active Rooms */}
      <section className="mb-6">
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-lg font-semibold">Voice Rooms 🎙️</h2>
          <span className="text-sm text-muted-foreground">{mockRooms.filter(r => r.isLive).length} live</span>
        </div>
        <div className="space-y-3">
          {mockRooms.filter(r => r.isLive).map((room, i) => (
            <motion.button
              key={room.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              onClick={() => navigate(`/room/${room.id}`)}
              className="w-full p-4 rounded-2xl bg-card border border-border text-left hover:border-primary/40 transition-all shadow-card"
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold">{room.title}</h3>
                <span className="flex items-center gap-1 text-xs text-accent">
                  <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  LIVE
                </span>
              </div>
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <span>🎤 {room.host}</span>
                <span>👥 {room.participants}/{room.maxParticipants}</span>
                <span className="py-0.5 px-2 rounded-full bg-secondary text-secondary-foreground">
                  {room.level}
                </span>
              </div>
            </motion.button>
          ))}
        </div>
      </section>

      {/* Daily Quests */}
      <section className="mb-6">
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-lg font-semibold">Daily Quests 📋</h2>
          <button onClick={() => navigate("/quests")} className="text-sm text-primary font-medium">See all</button>
        </div>
        <div className="space-y-3">
          {mockQuests.slice(0, 2).map((quest) => (
            <div
              key={quest.id}
              className={`p-4 rounded-2xl border transition-all ${
                quest.completed
                  ? "bg-primary/5 border-primary/20"
                  : "bg-card border-border"
              }`}
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className={`font-medium text-sm ${quest.completed ? "line-through text-muted-foreground" : ""}`}>
                  {quest.title}
                </h3>
                <span className="text-xs text-accent">+{quest.xp} XP</span>
              </div>
              <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
                <div
                  className="h-full rounded-full gradient-accent transition-all"
                  style={{ width: `${(quest.progress / quest.total) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Recommended Senpai */}
      <section>
        <h2 className="text-lg font-semibold mb-3">Recommended Senpai 🌟</h2>
        <div className="flex gap-3 overflow-x-auto pb-2 -mx-1 px-1">
          {mockSenpais.map((s) => (
            <div
              key={s.id}
              className="flex-shrink-0 w-36 p-4 rounded-2xl bg-card border border-border text-center"
            >
              <span className="text-3xl block mb-2">{s.avatar}</span>
              <p className="font-semibold text-sm">{s.name}</p>
              <p className="text-xs text-muted-foreground">{s.language}</p>
              <p className="text-xs text-accent mt-1">⭐ {s.rating}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
