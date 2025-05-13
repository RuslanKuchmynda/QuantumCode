import { Card } from "@/components/ui/Card";
import { Switch } from "@/components/ui/Switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/Select";
import { Code, Keyboard, Languages } from "lucide-react";

export function CodeEditorSettings() {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">Code Editor</h3>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Code className="h-4 w-4" />
            <span>Auto-complete</span>
          </div>
          <Switch defaultChecked />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Keyboard className="h-4 w-4" />
            <span>Vim Mode</span>
          </div>
          <Switch />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Languages className="h-4 w-4" />
            <span>Default Language</span>
          </div>
          <Select defaultValue="javascript">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select language" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="javascript">JavaScript</SelectItem>
              <SelectItem value="python">Python</SelectItem>
              <SelectItem value="java">Java</SelectItem>
              <SelectItem value="cpp">C++</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </Card>
  );
} 