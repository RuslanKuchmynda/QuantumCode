import { userData } from "@/constants/user-data";
import { Card } from "@/components/ui/Card";
import { Progress } from "@/components/ui/Progress";

export default function SolvedProblemsCard() {
  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold mb-4">Solved Problems</h2>
      <div className="space-y-4">
        <div>
          <div className="flex justify-between mb-1">
            <span>Easy</span>
            <span>{userData.solvedProblems.easy}</span>
          </div>
          <Progress
            value={(userData.solvedProblems.easy / 100) * 100}
            indicatorClassName="bg-primary-green"
          />
        </div>
        <div>
          <div className="flex justify-between mb-1">
            <span>Medium</span>
            <span>{userData.solvedProblems.medium}</span>
          </div>
          <Progress
            value={(userData.solvedProblems.medium / 100) * 100}
            indicatorClassName="bg-primary-yellow"
          />
        </div>
        <div>
          <div className="flex justify-between mb-1">
            <span>Hard</span>
            <span>{userData.solvedProblems.hard}</span>
          </div>
          <Progress
            value={(userData.solvedProblems.hard / 100) * 100}
            indicatorClassName="bg-destructive"
          />
        </div>
        <div className="pt-2 border-t">
          <div className="flex justify-between">
            <span className="font-semibold">Total</span>
            <span className="font-semibold">
              {userData.solvedProblems.total}
            </span>
          </div>
        </div>
      </div>
    </Card>
  );
}
