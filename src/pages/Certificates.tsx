import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { mockCertificates } from "@/lib/mockData";
import { X } from "lucide-react";

const levelColors: Record<string, string> = {
  Beginner: "from-green-500 to-emerald-600",
  Intermediate: "from-blue-500 to-indigo-600",
  Advanced: "from-purple-500 to-pink-600",
};

const Certificates = () => {
  const [selected, setSelected] = useState<typeof mockCertificates[0] | null>(null);

  return (
    <div className="min-h-screen pb-24 px-4 pt-6">
      <h1 className="text-2xl font-bold mb-1">Achievements 🏆</h1>
      <p className="text-muted-foreground text-sm mb-6">
        Your earned certificates & badges
      </p>

      <div className="grid grid-cols-1 gap-4">
        {mockCertificates.map((cert, i) => (
          <motion.button
            key={cert.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            onClick={() => setSelected(cert)}
            className="relative p-5 rounded-2xl bg-card border border-border text-left hover:border-primary/40 transition-all overflow-hidden group"
          >
            <div className={`absolute inset-0 opacity-5 bg-gradient-to-br ${levelColors[cert.level]}`} />
            <div className="relative flex items-start gap-4">
              <span className="text-4xl">{cert.image}</span>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-sm mb-1">{cert.title}</h3>
                <p className="text-xs text-muted-foreground mb-2 line-clamp-1">{cert.description}</p>
                <div className="flex items-center gap-2">
                  <span className={`text-[10px] font-semibold py-0.5 px-2 rounded-full bg-gradient-to-r ${levelColors[cert.level]} text-white`}>
                    {cert.level}
                  </span>
                  <span className="text-[10px] text-muted-foreground">{cert.dateEarned}</span>
                </div>
              </div>
              <span className="text-[10px] text-muted-foreground/50 font-mono">{cert.tokenId}</span>
            </div>
          </motion.button>
        ))}
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm flex items-center justify-center p-6"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-sm rounded-3xl bg-card border border-border p-6 relative overflow-hidden"
            >
              <div className={`absolute inset-0 opacity-10 bg-gradient-to-br ${levelColors[selected.level]}`} />
              <button onClick={() => setSelected(null)} className="absolute top-4 right-4 text-muted-foreground z-10">
                <X className="w-5 h-5" />
              </button>
              <div className="relative text-center">
                <span className="text-6xl block mb-4">{selected.image}</span>
                <span className={`inline-block text-xs font-semibold py-1 px-3 rounded-full bg-gradient-to-r ${levelColors[selected.level]} text-white mb-3`}>
                  {selected.level}
                </span>
                <h2 className="text-lg font-bold mb-2">{selected.title}</h2>
                <p className="text-sm text-muted-foreground mb-4">{selected.description}</p>
                <div className="p-3 rounded-xl bg-secondary/50 space-y-1 text-xs">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Earned by</span>
                    <span className="font-medium">{selected.userName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Date</span>
                    <span className="font-medium">{selected.dateEarned}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Certificate ID</span>
                    <span className="font-mono font-medium">{selected.tokenId}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Certificates;
