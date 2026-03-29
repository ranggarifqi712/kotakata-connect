import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const host = { name: "Sakura Miko", avatar: "🌸" };
const viewers = [
  { id: "1", name: "You", avatar: "🎓" },
  { id: "2", name: "TanukiSensei", avatar: "🦝" },
  { id: "3", name: "SakuraLearn", avatar: "🌺" },
  { id: "4", name: "NihoNinja", avatar: "🥷" },
  { id: "5", name: "KawaiiDev", avatar: "🐱" },
];

const chatMessages = [
  { user: "TanukiSensei", text: "みんな、こんにちは! 👋" },
  { user: "SakuraLearn", text: "Hello everyone!" },
  { user: "Sakura Miko", text: "今日は英語を練習しましょう! Let's practice English!" },
];

const VTuberSession = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");

  return (
    <div className="min-h-screen flex flex-col pb-4">
      {/* Host section */}
      <div className="gradient-primary p-6 pb-8 text-center relative">
        <button
          onClick={() => navigate("/home")}
          className="absolute top-4 left-4 text-primary-foreground/70 text-sm"
        >
          ← Back
        </button>
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="text-6xl mb-2"
        >
          {host.avatar}
        </motion.div>
        <h2 className="text-xl font-bold text-primary-foreground">{host.name}</h2>
        <p className="text-primary-foreground/70 text-xs">VTuber Session • Live</p>
        <div className="flex items-center justify-center gap-1 mt-2">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="text-xs text-primary-foreground/80">{viewers.length + 1} watching</span>
        </div>
      </div>

      {/* Participants */}
      <div className="px-4 -mt-4">
        <div className="flex gap-2 overflow-x-auto pb-3">
          {viewers.map((v) => (
            <div key={v.id} className="flex-shrink-0 flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-xl">
                {v.avatar}
              </div>
              <span className="text-[10px] text-muted-foreground mt-1">{v.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Chat */}
      <div className="flex-1 px-4 py-2 space-y-3 overflow-y-auto">
        {chatMessages.map((msg, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            className="flex gap-2"
          >
            <span className="text-xs font-semibold text-primary whitespace-nowrap">{msg.user}</span>
            <span className="text-sm text-foreground">{msg.text}</span>
          </motion.div>
        ))}
      </div>

      {/* Chat input */}
      <div className="px-4 pt-2">
        <div className="flex gap-2">
          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Say something..."
            className="flex-1 py-3 px-4 rounded-2xl bg-card border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50"
          />
          <button className="py-3 px-5 rounded-2xl gradient-primary text-primary-foreground text-sm font-medium">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default VTuberSession;
