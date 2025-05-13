import { Card } from "@/components/ui/Card";
import { AlertCircle, CheckCircle, XCircle } from "lucide-react";

export default function SubmissionStats() {
  return (
    <Card className="p-6">
      <h3 className="text-xl font-semibold mb-4">Submission Stats</h3>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4 text-green-500" />
            <span>Accepted</span>
          </div>
          <span className="font-semibold">42</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <XCircle className="h-4 w-4 text-red-500" />
            <span>Wrong Answer</span>
          </div>
          <span className="font-semibold">8</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <AlertCircle className="h-4 w-4 text-yellow-500" />
            <span>Time Limit</span>
          </div>
          <span className="font-semibold">3</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <AlertCircle className="h-4 w-4 text-orange-500" />
            <span>Runtime Error</span>
          </div>
          <span className="font-semibold">2</span>
        </div>
      </div>
    </Card>
  );
}
