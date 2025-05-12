"use client";

import UserInfoCard from "@/components/user-info-card/UserInfoCard";
import SkillsAndLanguagesCard from "@/components/skills-and-languages-card/SkillsAndLanguagesCard";
import SolvedProblemsCard from "@/components/solved-problems-card/SolvedProblemsCard";
import ActivityHistoryCard from "@/components/activity-history-card/ActivityHistoryCard";
import UserAchievements from "@/components/user-achievements/UserAchievements";

export default function ProfilePage() {
  return (
    <div className="mx-auto py-8 px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Column - User Info */}
        <div className="md:col-span-1 space-y-6">
          <UserInfoCard />
          {/* Skills & Languages Section */}
          <SkillsAndLanguagesCard />
          {/* Solved Problems Section */}
          <SolvedProblemsCard />
        </div>

        {/* Right Column - Activity and Stats */}
        <div className="md:col-span-2 space-y-6">
          <ActivityHistoryCard />

          {/* Achievements Section */}
          <UserAchievements />
        </div>
      </div>
    </div>
  );
}
