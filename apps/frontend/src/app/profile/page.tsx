import ActivityHistoryCard from "@/components/activity-history-card/ActivityHistoryCard";
import ProblemStats from "@/components/problem-stats/ProblemStats";
import SubmissionStats from "@/components/submission-stats/SubmissionStats";
import UserAchievements from "@/components/user/user-achievements/UserAchievements";
import UserInfoCard from "@/components/user/user-info-card/UserInfoCard";
import UserStats from "@/components/user/user-stats/UserStats";

export default function UserStatisticsPage() {
  return (
    <div className="container mx-auto py-8 space-y-8">
      <UserInfoCard />

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
