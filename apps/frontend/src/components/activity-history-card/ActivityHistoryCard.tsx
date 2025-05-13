import { userData } from "@/constants/user-data";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

export default function ActivityHistoryCard() {
  return (
    <Card className="p-5 pb-3">
      <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
      <div className="space-y-4">
        {userData.recentActivity.map((activity, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
          >
            <div className="flex items-center space-x-3">
              <span className="font-medium">{activity.problem}</span>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant={activity.difficulty}>{activity.difficulty}</Badge>
              <span className="text-sm text-gray-500">{activity.date}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="text-sm text-gray-500 text-center mt-2 pt-2">
        Show more
      </div>
    </Card>
  );
}
