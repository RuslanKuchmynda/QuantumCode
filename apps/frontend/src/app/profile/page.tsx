import ActivityHistoryCard from "@/components/activity-history-card/ActivityHistoryCard";
import ProblemStats from "@/components/problem-stats/ProblemStats";
import SubmissionStats from "@/components/submission-stats/SubmissionStats";
import UserAchievements from "@/components/user/user-achievements/UserAchievements";
import UserInfoCard from "@/components/user/user-info-card/UserInfoCard";
import UserStats from "@/components/user/user-stats/UserStats";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs";
import { ProfileSettings } from "@/components/profile-settings/ProfileSettings";

export default function UserStatisticsPage() {
  return (
    <div className="container mx-auto py-8">
      <Tabs defaultValue="overview" className="w-full">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="activity">Activity</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <UserInfoCard />

          <UserStats />

          <div className="grid md:grid-cols-2 gap-6">
            <ProblemStats />
            <SubmissionStats />
          </div>

          <ActivityHistoryCard />
          <UserAchievements />
        </TabsContent>

        <TabsContent value="activity">In progress</TabsContent>

        <TabsContent value="settings">
          <ProfileSettings />
        </TabsContent>
      </Tabs>
    </div>
  );
}
