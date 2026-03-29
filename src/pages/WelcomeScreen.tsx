import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const WelcomeScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 gradient-primary opacity-10" />
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-accent/10 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center max-w-sm w-full"
      >
        {/* Logo / Title */}
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-2"
        >
          <span className="text-5xl">🎙️</span>
        </motion.div>
        <h1 className="text-5xl font-extrabold text-gradient mb-2">Kotakata</h1>
        <p className="text-muted-foreground text-sm mb-1">コタカタ</p>
        <p className="text-secondary-foreground text-base mb-10">
          Learn languages with your VTuber community
        </p>

        {/* Role selection */}
        <div className="space-y-4">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => navigate("/onboarding?role=kouhai")}
            className="w-full py-4 rounded-2xl gradient-primary text-primary-foreground font-semibold text-lg shadow-glow transition-all"
          >
            Join as Kouhai 🎓
            <span className="block text-xs opacity-80 mt-1">I want to learn</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => navigate("/onboarding?role=senpai")}
            className="w-full py-4 rounded-2xl bg-secondary text-secondary-foreground font-semibold text-lg border border-border hover:border-primary/50 transition-all"
          >
            Join as Senpai 🌟
            <span className="block text-xs opacity-70 mt-1">I want to mentor</span>
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default WelcomeScreen;
