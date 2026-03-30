import { motion } from "framer-motion";
import { mockQuests } from "@/lib/mockData";

const Quests = () => {
  return (
    <div className="min-h-screen pb-24 px-4 pt-6">
      <h1 className="text-2xl font-bold mb-1">Daily Quests 📋</h1>
      <p className="text-muted-foreground text-sm mb-6">Complete quests to earn XP and tokens</p>

      <div className="space-y-3">
        {mockQuests.map((quest, i) => (
          <motion.div
            key={quest.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            className={`p-4 rounded-2xl border transition-all ${
              quest.completed
                ? "bg-primary/5 border-primary/20"
                : "bg-card border-border"
            }`}
          >
            <div className="flex justify-between items-start mb-1">
              <h3 className={`font-semibold ${quest.completed ? "line-through text-muted-foreground" : ""}`}>
                {quest.title}
              </h3>
              {quest.completed && <span className="text-accent text-sm">✓</span>}
              {quest.nftReward && !quest.completed && (
                <span className="text-[10px] py-0.5 px-2 rounded-full bg-primary/20 text-primary font-medium">🏅 NFT</span>
              )}
            </div>
            <p className="text-xs text-muted-foreground mb-3">{quest.description}</p>

            <div className="flex items-center justify-between mb-2">
              <div className="flex gap-3 text-xs">
                <span className="text-accent">+{quest.xp} XP</span>
                <span className="text-foreground">🪙 {quest.tokens}</span>
              </div>
              <span className="text-xs text-muted-foreground">
                {quest.progress}/{quest.total}
              </span>
            </div>
            <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
              <div
                className="h-full rounded-full gradient-accent transition-all"
                style={{ width: `${(quest.progress / quest.total) * 100}%` }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Quests;
