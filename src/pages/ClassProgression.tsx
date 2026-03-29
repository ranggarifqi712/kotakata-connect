import { motion } from "framer-motion";
import { mockLevels } from "@/lib/mockData";
import { Lock } from "lucide-react";

const ClassProgression = () => {
  const currentXP = 350;

  return (
    <div className="min-h-screen pb-24 px-4 pt-6">
      <h1 className="text-2xl font-bold mb-1">Class Progression 📈</h1>
      <p className="text-muted-foreground text-sm mb-6">Complete quests to unlock new levels</p>

      <div className="space-y-4">
        {mockLevels.map((level, i) => {
          const progress = level.unlocked
            ? level.completedQuests / level.quests
            : 0;

          return (
            <motion.div
              key={level.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className={`p-5 rounded-2xl border relative overflow-hidden ${
                level.unlocked
                  ? "bg-card border-border"
                  : "bg-secondary/50 border-border/50"
              }`}
            >
              {!level.unlocked && (
                <div className="absolute inset-0 bg-background/60 backdrop-blur-sm flex items-center justify-center z-10">
                  <div className="text-center">
                    <Lock className="w-5 h-5 text-muted-foreground mx-auto mb-1" />
                    <span className="text-xs text-muted-foreground">{level.xpRequired} XP to unlock</span>
                  </div>
                </div>
              )}

              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="font-bold text-lg">Lv.{level.id} {level.name}</h3>
                  <p className="text-xs text-muted-foreground">{level.nameJp}</p>
                </div>
                <span className="text-sm text-muted-foreground">
                  {level.completedQuests}/{level.quests} quests
                </span>
              </div>

              <div className="h-2 rounded-full bg-secondary overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${progress * 100}%` }}
                  transition={{ duration: 0.8, delay: i * 0.1 }}
                  className="h-full rounded-full gradient-primary"
                />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default ClassProgression;
