import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate, useParams } from "react-router-dom";
import { mockRooms } from "@/lib/mockData";

const participants = [
  { id: "1", name: "TanukiSensei", avatar: "🦝", isSpeaking: true, isMuted: false },
  { id: "2", name: "You", avatar: "🎓", isSpeaking: false, isMuted: false },
  { id: "3", name: "SakuraLearn", avatar: "🌺", isSpeaking: false, isMuted: true },
  { id: "4", name: "NihoNinja", avatar: "🥷", isSpeaking: false, isMuted: false },
];

const VoiceRoom = () => {
  const navigate = useNavigate();
  const { roomId } = useParams();
  const room = mockRooms.find((r) => r.id === roomId) || mockRooms[0];
  const [micOn, setMicOn] = useState(true);

  return (
    <div className="min-h-screen flex flex-col px-4 pt-6 pb-8">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-2 mb-2">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="text-xs text-accent font-medium">LIVE</span>
        </div>
        <h1 className="text-xl font-bold mb-1">{room.title}</h1>
        <p className="text-sm text-muted-foreground">Hosted by {room.host} • {room.language}</p>
      </div>

      {/* Participants */}
      <div className="flex-1 flex items-center justify-center">
        <div className="grid grid-cols-2 gap-6 max-w-xs">
          {participants.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center"
            >
              <div className="relative mb-2">
                {p.isSpeaking && (
                  <div className="absolute inset-0 rounded-full border-2 border-accent animate-pulse-ring" />
                )}
                <div
                  className={`w-20 h-20 rounded-full flex items-center justify-center text-3xl border-2 transition-all ${
                    p.isSpeaking
                      ? "border-accent bg-accent/10 shadow-glow"
                      : "border-border bg-card"
                  }`}
                >
                  {p.avatar}
                </div>
                {p.isMuted && (
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-destructive flex items-center justify-center text-xs">
                    🔇
                  </div>
                )}
              </div>
              <span className="text-sm font-medium">{p.name}</span>
              {p.isSpeaking && (
                <span className="text-xs text-accent">Speaking...</span>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-6 pt-6">
        <button
          onClick={() => setMicOn(!micOn)}
          className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl transition-all ${
            micOn
              ? "gradient-primary shadow-glow"
              : "bg-destructive"
          }`}
        >
          {micOn ? "🎤" : "🔇"}
        </button>
        <button
          onClick={() => navigate("/home")}
          className="w-16 h-16 rounded-full bg-destructive/20 border border-destructive/40 flex items-center justify-center text-2xl hover:bg-destructive/30 transition-all"
        >
          📞
        </button>
      </div>
    </div>
  );
};

export default VoiceRoom;
