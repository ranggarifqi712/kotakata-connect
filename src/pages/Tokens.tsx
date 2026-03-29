import { motion } from "framer-motion";
import { mockRewards } from "@/lib/mockData";

const Tokens = () => {
  const balance = 120;

  return (
    <div className="min-h-screen pb-24 px-4 pt-6">
      {/* Balance card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="p-6 rounded-3xl gradient-primary mb-8 text-center shadow-glow"
      >
        <p className="text-primary-foreground/70 text-sm mb-1">Token Balance</p>
        <p className="text-5xl font-extrabold text-primary-foreground mb-1">🪙 {balance}</p>
        <p className="text-primary-foreground/60 text-xs">Earn more by completing quests</p>
      </motion.div>

      {/* Rewards */}
      <h2 className="text-lg font-semibold mb-4">Spend Tokens</h2>
      <div className="space-y-3">
        {mockRewards.map((reward, i) => (
          <motion.div
            key={reward.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            className="p-4 rounded-2xl bg-card border border-border flex items-center gap-4"
          >
            <span className="text-3xl">{reward.icon}</span>
            <div className="flex-1">
              <h3 className="font-semibold text-sm">{reward.title}</h3>
              <p className="text-xs text-muted-foreground">{reward.description}</p>
            </div>
            <button
              className={`py-2 px-4 rounded-xl text-sm font-semibold transition-all ${
                balance >= reward.cost
                  ? "gradient-primary text-primary-foreground shadow-glow"
                  : "bg-secondary text-muted-foreground"
              }`}
              disabled={balance < reward.cost}
            >
              🪙 {reward.cost}
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Tokens;
