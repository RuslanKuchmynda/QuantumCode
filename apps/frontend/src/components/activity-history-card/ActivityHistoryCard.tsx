import { Card } from "@/components/ui/Card";
import { CheckCircle, XCircle } from "lucide-react";

export default function ActivityHistoryCard() {
  return (
    <Card className="p-6">
      <h3 className="text-xl font-semibold mb-4">Recent Activity</h3>
      <div className="space-y-4">
        <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
          <div className="flex items-center gap-4">
            <CheckCircle className="h-5 w-5 text-green-500" />
            <div>
              <p className="font-medium">Solved &quot;Two Sum&quot;</p>
              <p className="text-sm text-muted-foreground">
                Medium • Algorithms
              </p>
            </div>
          </div>
          <div className="text-right">
            <span className="text-sm text-muted-foreground">2 hours ago</span>
            <p className="text-sm text-green-500">+10 points</p>
          </div>
        </div>
        <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
          <div className="flex items-center gap-4">
            <XCircle className="h-5 w-5 text-red-500" />
            <div>
              <p className="font-medium">Failed &quot;Binary Search&quot;</p>
              <p className="text-sm text-muted-foreground">Easy • Algorithms</p>
            </div>
          </div>
          <div className="text-right">
            <span className="text-sm text-muted-foreground">5 hours ago</span>
            <p className="text-sm text-red-500">Wrong Answer</p>
          </div>
        </div>
        <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
          <div className="flex items-center gap-4">
            <CheckCircle className="h-5 w-5 text-green-500" />
            <div>
              <p className="font-medium">Solved &quot;Linked List Cycle&quot;</p>
              <p className="text-sm text-muted-foreground">
                Medium • Data Structures
              </p>
            </div>
          </div>
          <div className="text-right">
            <span className="text-sm text-muted-foreground">1 day ago</span>
            <p className="text-sm text-green-500">+15 points</p>
          </div>
        </div>
      </div>
    </Card>
  );
}
