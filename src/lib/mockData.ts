export const mockVTubers = [
  { id: "1", name: "Sakura Miko", agency: "Hololive", avatar: "🌸" },
  { id: "2", name: "Gawr Gura", agency: "Hololive", avatar: "🦈" },
  { id: "3", name: "Mori Calliope", agency: "Hololive", avatar: "💀" },
  { id: "4", name: "Kuzuha", agency: "Nijisanji", avatar: "🎮" },
  { id: "5", name: "Vox Akuma", agency: "Nijisanji", avatar: "🎭" },
  { id: "6", name: "Ironmouse", agency: "Indie", avatar: "😈" },
  { id: "7", name: "Shirakami Fubuki", agency: "Hololive", avatar: "🦊" },
  { id: "8", name: "Salome", agency: "Nijisanji", avatar: "🎀" },
  { id: "9", name: "Veibae", agency: "Indie", avatar: "💜" },
];

export const mockRooms = [
  { id: "1", title: "English Free Talk", participants: 4, maxParticipants: 5, host: "Sakura Miko", level: "Beginner", language: "English", isLive: true },
  { id: "2", title: "日本語カジュアル", participants: 3, maxParticipants: 5, host: "Kuzuha", level: "Intermediate", language: "Japanese", isLive: true },
  { id: "3", title: "Pronunciation Practice", participants: 2, maxParticipants: 5, host: "Gawr Gura", level: "Beginner", language: "English", isLive: true },
  { id: "4", title: "Anime Discussion (JP)", participants: 5, maxParticipants: 5, host: "Vox Akuma", level: "Advanced", language: "Japanese", isLive: false },
];

export const mockQuests = [
  { id: "1", title: "Introduce yourself in English", description: "Join a voice room and introduce yourself", xp: 50, tokens: 10, progress: 0, total: 1, completed: false, nftReward: false },
  { id: "2", title: "Discuss today's stream", description: "Talk about a VTuber stream you watched", xp: 75, tokens: 15, progress: 0, total: 1, completed: false, nftReward: false },
  { id: "3", title: "Learn 5 new words", description: "Use 5 new vocabulary words in conversation", xp: 100, tokens: 20, progress: 3, total: 5, completed: false, nftReward: true },
  { id: "4", title: "Help a Kouhai", description: "Spend 10 minutes mentoring someone", xp: 150, tokens: 30, progress: 1, total: 1, completed: true, nftReward: true },
];

export const mockSenpais = [
  { id: "1", name: "TanukiSensei", level: "Advanced", language: "Japanese", rating: 4.8, avatar: "🦝" },
  { id: "2", name: "SakuraLearn", level: "Intermediate", language: "English", rating: 4.9, avatar: "🌺" },
  { id: "3", name: "NihoNinja", level: "Advanced", language: "Japanese", rating: 4.7, avatar: "🥷" },
];

export const mockLevels = [
  { id: 1, name: "Beginner", nameJp: "初心者", xpRequired: 0, unlocked: true, quests: 4, completedQuests: 4 },
  { id: 2, name: "Elementary", nameJp: "初級", xpRequired: 200, unlocked: true, quests: 6, completedQuests: 3 },
  { id: 3, name: "Intermediate", nameJp: "中級", xpRequired: 500, unlocked: false, quests: 8, completedQuests: 0 },
  { id: 4, name: "Upper-Int", nameJp: "中上級", xpRequired: 1000, unlocked: false, quests: 10, completedQuests: 0 },
  { id: 5, name: "Advanced", nameJp: "上級", xpRequired: 2000, unlocked: false, quests: 12, completedQuests: 0 },
];

export const mockRewards = [
  { id: "1", title: "Premium Room Access", description: "Join exclusive conversation rooms", cost: 50, icon: "🔑" },
  { id: "2", title: "VTuber Session Ticket", description: "Join a live VTuber-led session", cost: 100, icon: "🎟️" },
  { id: "3", title: "Custom Avatar Frame", description: "Get a unique profile frame", cost: 30, icon: "🖼️" },
  { id: "4", title: "Oshi Badge", description: "Show your favorite VTuber badge", cost: 20, icon: "🏅" },
];

export const mockWallet = {
  balance: 120,
  accountId: "KTK-7829-X4A1",
  history: [
    { id: "1", type: "earned" as const, amount: 50, description: "Quest: Introduce yourself", date: "2026-03-28" },
    { id: "2", type: "earned" as const, amount: 30, description: "Quest: Help a Kouhai", date: "2026-03-27" },
    { id: "3", type: "spent" as const, amount: 20, description: "Oshi Badge", date: "2026-03-26" },
    { id: "4", type: "earned" as const, amount: 75, description: "Quest: Discuss today's stream", date: "2026-03-25" },
  ],
};

export const mockCertificates = [
  {
    id: "nft-001",
    title: "Beginner Speaking Completed",
    description: "Successfully completed all beginner-level speaking quests",
    userName: "Kouhai",
    dateEarned: "2026-03-15",
    level: "Beginner" as const,
    tokenId: "#0001",
    image: "🎓",
  },
  {
    id: "nft-002",
    title: "First Voice Room Session",
    description: "Joined and participated in your first voice room",
    userName: "Kouhai",
    dateEarned: "2026-03-10",
    level: "Beginner" as const,
    tokenId: "#0002",
    image: "🎙️",
  },
  {
    id: "nft-003",
    title: "Senpai Helper Badge",
    description: "Helped 5 Kouhais in voice rooms",
    userName: "Kouhai",
    dateEarned: "2026-03-20",
    level: "Intermediate" as const,
    tokenId: "#0003",
    image: "🌟",
  },
];
