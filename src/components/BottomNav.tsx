import { useLocation, useNavigate } from "react-router-dom";
import { Home, Trophy, GraduationCap, Award, Coins } from "lucide-react";

const navItems = [
  { path: "/home", icon: Home, label: "Home" },
  { path: "/quests", icon: Trophy, label: "Quests" },
  { path: "/certificates", icon: Award, label: "Badges" },
  { path: "/progression", icon: GraduationCap, label: "Level" },
  { path: "/tokens", icon: Coins, label: "Tokens" },
];

const BottomNav = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Hide on welcome/onboarding/room screens
  const hiddenPaths = ["/", "/onboarding", "/vtuber-session"];
  if (hiddenPaths.includes(location.pathname) || location.pathname.startsWith("/room/")) return null;

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-xl border-t border-border">
      <div className="flex items-center justify-around py-2 max-w-md mx-auto">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={`flex flex-col items-center gap-1 py-1 px-3 rounded-xl transition-all ${
                isActive ? "text-primary" : "text-muted-foreground"
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span className="text-[10px] font-medium">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;
