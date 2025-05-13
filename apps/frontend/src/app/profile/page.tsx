import ActivityHistoryCard from "@/components/activity-history-card/ActivityHistoryCard";
import ProblemStats from "@/components/problem-stats/ProblemStats";
import SubmissionStats from "@/components/submission-stats/SubmissionStats";
import UserAchievements from "@/components/user-achievements/UserAchievements";
import UserStats from "@/components/user-stats/UserStats";

export default function UserStatisticsPage() {
  return (
    <div className="container mx-auto py-8 space-y-8">
      <div className="flex items-center gap-6">
        <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
          <span className="text-2xl font-bold">JD</span>
        </div>
        <div>
          <h1 className="text-3xl font-bold">John Doe</h1>
          <p className="text-muted-foreground">Member since January 2024</p>
        </div>
      </div>

      <UserStats />

      <div className="grid md:grid-cols-2 gap-6">
        <ProblemStats />
        <SubmissionStats />
      </div>

      <ActivityHistoryCard />
      <UserAchievements />
    </div>
  );
}
