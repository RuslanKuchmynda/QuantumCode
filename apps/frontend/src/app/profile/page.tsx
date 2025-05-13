"use client";

import UserInfoCard from "@/components/user-info-card/UserInfoCard";
import SkillsAndLanguagesCard from "@/components/skills-and-languages-card/SkillsAndLanguagesCard";
import SolvedProblemsCard from "@/components/solved-problems-card/SolvedProblemsCard";
import ActivityHistoryCard from "@/components/activity-history-card/ActivityHistoryCard";
import UserAchievements from "@/components/user-achievements/UserAchievements";

export default function ProfilePage() {
  return (
    <div className="container mx-auto py-8 px-4 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Profile</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1 space-y-6">
          <UserInfoCard />
          <SkillsAndLanguagesCard />
          <SolvedProblemsCard />
        </div>

        <div className="md:col-span-2 space-y-6">
          <ActivityHistoryCard />
          <UserAchievements />
        </div>
      </div>
    </div>
  );
}
