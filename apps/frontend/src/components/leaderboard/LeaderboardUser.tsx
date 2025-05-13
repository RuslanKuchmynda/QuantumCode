import { LeaderboardUser as LeaderboardUserI } from "@shared/interfaces/leaderboard";
import { Card } from "@/components/ui/Card";
import { Star, Target } from "lucide-react";
import { getRankColor, getRankIcon } from "./LeaderboardUser.funcs";
import Image from "next/image";

export default function LeaderboardUser({ user }: { user: LeaderboardUserI }) {
  return (
    <Card
      key={user.username}
      className={`p-4 transition-all hover:scale-[1.02] ${getRankColor(user.rank)}`}
    >
      <div className="flex items-center gap-4">
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-background">
          {getRankIcon(user.rank)}
        </div>

        <div className="flex items-center gap-4 flex-1">
          <Image
            src={user.avatar || ""}
            alt={user.username}
            className="w-12 h-12 rounded-full"
            width={48}
            height={48}
            unoptimized
          />
          <div>
            <h3 className="font-semibold">{user.username}</h3>
            <p className="text-sm text-muted-foreground">
              {user.streak} day streak
            </p>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="text-center">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 text-yellow-400" />
              <span className="font-semibold">{user.points}</span>
            </div>
            <span className="text-sm text-muted-foreground">Points</span>
          </div>

          <div className="text-center">
            <div className="flex items-center gap-1">
              <Target className="w-4 h-4 text-blue-400" />
              <span className="font-semibold">{user.solvedProblems}</span>
            </div>
            <span className="text-sm text-muted-foreground">Solved</span>
          </div>
        </div>
      </div>
    </Card>
  );
}
