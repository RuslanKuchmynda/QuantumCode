import { userData } from "@/constants/user-data";
import { Card } from "@/components/ui/Card";
import { Progress } from "@/components/ui/Progress";

export default function SkillsAndLanguagesCard() {
  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold mb-4">Skills & Languages</h2>
      <div className="space-y-3">
        <div className="grid grid-cols-2 gap-2">
          {userData.skills.languages.map((lang, index) => (
            <div key={index} className="bg-gray-50 p-2 rounded-lg">
              <div className="flex justify-between text-sm mb-1">
                <span>{lang.name}</span>
                <span>{lang.percentage}%</span>
              </div>
              <Progress value={lang.percentage} className="h-1.5" />
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}
