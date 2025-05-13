import { Card } from "@/components/ui/Card";
import { Switch } from "@/components/ui/Switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/Select";
import { Eye } from "lucide-react";

export function DisplaySettings() {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">Display</h3>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Eye className="h-4 w-4" />
            <span>Show Line Numbers</span>
          </div>
          <Switch defaultChecked />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Eye className="h-4 w-4" />
            <span>Show Minimap</span>
          </div>
          <Switch defaultChecked />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Eye className="h-4 w-4" />
            <span>Font Size</span>
          </div>
          <Select defaultValue="medium">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select size" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="small">Small</SelectItem>
              <SelectItem value="medium">Medium</SelectItem>
              <SelectItem value="large">Large</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </Card>
  );
} 