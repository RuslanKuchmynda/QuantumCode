import { Card } from "@/components/ui/Card";
import { Switch } from "@/components/ui/Switch";
import { Moon, Sun, Palette } from "lucide-react";

export function ThemeSettings() {
  return (
    <Card className="p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-primary/10 rounded-lg">
            <Palette className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="text-lg font-semibold">Theme</h3>
            <p className="text-sm text-muted-foreground">Customize the appearance</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Sun className="h-4 w-4" />
          <Switch />
          <Moon className="h-4 w-4" />
        </div>
      </div>
    </Card>
  );
} 