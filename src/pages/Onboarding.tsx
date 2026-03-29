import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, useSearchParams } from "react-router-dom";
import { mockVTubers } from "@/lib/mockData";

const agencies = ["Hololive", "Nijisanji", "Indie"];
const goals = [
  { id: "english", label: "English Speaking", icon: "🇬🇧" },
  { id: "japanese", label: "Japanese Casual", icon: "🇯🇵" },
];

const Onboarding = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const role = searchParams.get("role") || "kouhai";
  const [step, setStep] = useState(0);
  const [selectedAgency, setSelectedAgency] = useState<string | null>(null);
  const [selectedOshi, setSelectedOshi] = useState<string | null>(null);
  const [selectedGoal, setSelectedGoal] = useState<string | null>(null);

  const filteredVTubers = selectedAgency
    ? mockVTubers.filter((v) => v.agency === selectedAgency)
    : mockVTubers;

  const canProceed =
    (step === 0 && selectedAgency) ||
    (step === 1 && selectedOshi) ||
    (step === 2 && selectedGoal);

  const handleNext = () => {
    if (step < 2) setStep(step + 1);
    else navigate("/home");
  };

  return (
    <div className="min-h-screen flex flex-col px-6 py-8 relative">
      <div className="absolute inset-0 gradient-primary opacity-5" />

      {/* Progress */}
      <div className="relative z-10 flex gap-2 mb-8">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${
              i <= step ? "gradient-primary" : "bg-secondary"
            }`}
          />
        ))}
      </div>

      <div className="relative z-10 flex-1">
        <AnimatePresence mode="wait">
          {step === 0 && (
            <motion.div
              key="agency"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
            >
              <h2 className="text-2xl font-bold mb-1">Choose your agency</h2>
              <p className="text-muted-foreground text-sm mb-6">Which community do you follow?</p>
              <div className="space-y-3">
                {agencies.map((agency) => (
                  <button
                    key={agency}
                    onClick={() => setSelectedAgency(agency)}
                    className={`w-full py-4 px-5 rounded-2xl text-left font-medium transition-all border ${
                      selectedAgency === agency
                        ? "border-primary bg-primary/10 text-foreground shadow-glow"
                        : "border-border bg-card text-secondary-foreground"
                    }`}
                  >
                    {agency}
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {step === 1 && (
            <motion.div
              key="oshi"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
            >
              <h2 className="text-2xl font-bold mb-1">Pick your Oshi</h2>
              <p className="text-muted-foreground text-sm mb-6">Who's your favorite VTuber?</p>
              <div className="grid grid-cols-3 gap-3">
                {filteredVTubers.map((vt) => (
                  <button
                    key={vt.id}
                    onClick={() => setSelectedOshi(vt.id)}
                    className={`flex flex-col items-center p-4 rounded-2xl transition-all border ${
                      selectedOshi === vt.id
                        ? "border-primary bg-primary/10 shadow-glow"
                        : "border-border bg-card"
                    }`}
                  >
                    <span className="text-3xl mb-2">{vt.avatar}</span>
                    <span className="text-xs text-center font-medium">{vt.name}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="goal"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
            >
              <h2 className="text-2xl font-bold mb-1">Learning goal</h2>
              <p className="text-muted-foreground text-sm mb-6">What do you want to practice?</p>
              <div className="space-y-3">
                {goals.map((g) => (
                  <button
                    key={g.id}
                    onClick={() => setSelectedGoal(g.id)}
                    className={`w-full py-5 px-5 rounded-2xl text-left font-medium transition-all border flex items-center gap-4 ${
                      selectedGoal === g.id
                        ? "border-primary bg-primary/10 shadow-glow"
                        : "border-border bg-card"
                    }`}
                  >
                    <span className="text-3xl">{g.icon}</span>
                    <span className="text-lg">{g.label}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom actions */}
      <div className="relative z-10 flex gap-3 pt-6">
        {step > 0 && (
          <button
            onClick={() => setStep(step - 1)}
            className="py-3 px-6 rounded-2xl bg-secondary text-secondary-foreground font-medium"
          >
            Back
          </button>
        )}
        <button
          onClick={handleNext}
          disabled={!canProceed}
          className="flex-1 py-3 rounded-2xl gradient-primary text-primary-foreground font-semibold disabled:opacity-40 transition-opacity"
        >
          {step === 2 ? "Let's Go! 🚀" : "Next"}
        </button>
      </div>
    </div>
  );
};

export default Onboarding;
