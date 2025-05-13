import { Card } from "@/components/ui/Card";
import { Star, TrendingUp, Trophy, Award } from "lucide-react";

export default function UserAchievements() {
  return (
    <Card className="p-6">
      <h3 className="text-xl font-semibold mb-4">Achievements</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="flex flex-col items-center p-4 bg-muted/50 rounded-lg">
          <Award className="h-8 w-8 text-yellow-500 mb-2" />
          <p className="font-medium text-center">First Problem</p>
          <p className="text-sm text-muted-foreground">
            Solved your first problem
          </p>
        </div>
        <div className="flex flex-col items-center p-4 bg-muted/50 rounded-lg">
          <TrendingUp className="h-8 w-8 text-green-500 mb-2" />
          <p className="font-medium text-center">7-Day Streak</p>
          <p className="text-sm text-muted-foreground">
            Solved problems for 7 days
          </p>
        </div>
        <div className="flex flex-col items-center p-4 bg-muted/50 rounded-lg">
          <Star className="h-8 w-8 text-purple-500 mb-2" />
          <p className="font-medium text-center">Algorithm Master</p>
          <p className="text-sm text-muted-foreground">
            Solved 10 algorithm problems
          </p>
        </div>
        <div className="flex flex-col items-center p-4 bg-muted/50 rounded-lg">
          <Trophy className="h-8 w-8 text-orange-500 mb-2" />
          <p className="font-medium text-center">Top 200</p>
          <p className="text-sm text-muted-foreground">
            Reached top 200 in ranking
          </p>
        </div>
      </div>
    </Card>
  );
}
