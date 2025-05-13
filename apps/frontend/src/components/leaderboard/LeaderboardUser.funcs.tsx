import { Trophy, Medal } from "lucide-react";

export const getRankColor = (rank: number) => {
    switch (rank) {
      case 1:
        return "bg-yellow-400/20 border-yellow-400/50";
      case 2:
        return "bg-gray-300/20 border-gray-300/50";
      case 3:
        return "bg-amber-600/20 border-amber-600/50";
      default:
        return "bg-background";
    }
  };
  
export const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Trophy className="w-6 h-6 text-yellow-400" />;
      case 2:
        return <Medal className="w-6 h-6 text-gray-300" />;
      case 3:
        return <Medal className="w-6 h-6 text-amber-600" />;
      default:
        return <span className="text-lg font-bold">{rank}</span>;
    }
  };