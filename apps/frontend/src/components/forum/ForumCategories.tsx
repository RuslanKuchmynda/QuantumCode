import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Hash } from "lucide-react";

const categories = [
  { name: "Algorithms", count: 156 },
  { name: "Data Structures", count: 98 },
  { name: "Frontend", count: 234 },
  { name: "Backend", count: 167 },
  { name: "System Design", count: 89 },
  { name: "Interview Prep", count: 145 },
  { name: "Career Advice", count: 78 },
];

export function ForumCategories() {
  return (
    <Card className="p-4">
      <h3 className="font-semibold mb-4">Categories</h3>
      <div className="space-y-2">
        {categories.map((category) => (
          <Button
            key={category.name}
            variant="ghost"
            className="w-full justify-between"
          >
            <div className="flex items-center gap-2">
              <Hash className="w-4 h-4" />
              <span>{category.name}</span>
            </div>
            <span className="text-muted-foreground">{category.count}</span>
          </Button>
        ))}
      </div>
    </Card>
  );
} 