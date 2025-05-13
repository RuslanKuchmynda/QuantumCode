import { Card } from "@/components/ui/Card";

export default function ProblemStats() {
  return (
    <Card className="p-6">
      <h3 className="text-xl font-semibold mb-4">Problem Categories</h3>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-blue-500" />
            <span>Algorithms</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-semibold">15/20</span>
            <span className="text-sm text-muted-foreground">(75%)</span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <span>Data Structures</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-semibold">12/15</span>
            <span className="text-sm text-muted-foreground">(80%)</span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-purple-500" />
            <span>System Design</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-semibold">8/10</span>
            <span className="text-sm text-muted-foreground">(80%)</span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-orange-500" />
            <span>Others</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-semibold">7/10</span>
            <span className="text-sm text-muted-foreground">(70%)</span>
          </div>
        </div>
      </div>
    </Card>
  );
}
