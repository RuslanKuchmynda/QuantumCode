import { Card } from "@/components/ui/Card";
import { Switch } from "@/components/ui/Switch";
import { Bell } from "lucide-react";

export function NotificationSettings() {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">Notifications</h3>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Bell className="h-4 w-4" />
            <span>Email Notifications</span>
          </div>
          <Switch defaultChecked />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Bell className="h-4 w-4" />
            <span>Browser Notifications</span>
          </div>
          <Switch />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Bell className="h-4 w-4" />
            <span>Weekly Progress Report</span>
          </div>
          <Switch defaultChecked />
        </div>
      </div>
    </Card>
  );
} 