import { Card } from "@/components/ui/Card";
import { CheckCircle, Target, TrendingUp, Trophy } from "lucide-react";

export default function UserStats(){
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-green-500/10 rounded-lg">
              <CheckCircle className="h-6 w-6 text-green-500" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Problems Solved</p>
              <h3 className="text-2xl font-bold">42</h3>
              <p className="text-sm text-green-500">+5 this week</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-blue-500/10 rounded-lg">
              <Target className="h-6 w-6 text-blue-500" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Success Rate</p>
              <h3 className="text-2xl font-bold">78%</h3>
              <p className="text-sm text-green-500">+3% this month</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-purple-500/10 rounded-lg">
              <TrendingUp className="h-6 w-6 text-purple-500" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Current Streak</p>
              <h3 className="text-2xl font-bold">7 days</h3>
              <p className="text-sm text-green-500">Best: 14 days</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-orange-500/10 rounded-lg">
              <Trophy className="h-6 w-6 text-orange-500" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Global Ranking</p>
              <h3 className="text-2xl font-bold">#156</h3>
              <p className="text-sm text-green-500">+12 this week</p>
            </div>
          </div>
        </Card>
      </div>
  );
}