import { userData } from "@/constants/user-data";
import { Card } from "../ui/Card";

export default function UserAchievements() {
  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold mb-4">Achievements</h2>
      <div className="grid grid-cols-3 gap-4">
        {userData.achievements.map((achievement, index) => (
          <div
            key={index}
            className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg"
          >
            <span className="text-2xl">{achievement.icon}</span>
            <div>
              <div className="font-medium">{achievement.name}</div>
              <div className="text-sm text-gray-500">{achievement.date}</div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
