import { LeaderboardFilters } from "@/components/leaderboard/LeaderboardFilters";
import LeaderboardUser from "@/components/leaderboard/LeaderboardUser";
import { LeaderboardData } from "@/constants/leaderboard-data";

export default function LeaderboardPage() {
  return (
    <div className="container mx-auto py-8 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Leaderboard</h1>
        <LeaderboardFilters />
      </div>

      <div className="grid gap-4">
        {LeaderboardData.map((user) => (
          <LeaderboardUser key={user.username} user={user} />
        ))}
      </div>
    </div>
  );
} 