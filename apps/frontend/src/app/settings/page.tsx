import { Button } from "@/components/ui/Button";
import { ThemeSettings } from "@/components/settings/ThemeSettings";
import { CodeEditorSettings } from "@/components/settings/CodeEditorSettings";
import { DisplaySettings } from "@/components/settings/DisplaySettings";
import { NotificationSettings } from "@/components/settings/NotificationSettings";
import { LanguageSettings } from "@/components/settings/LanguageSettings";

export default function SettingsPage() {
  return (
    <div className="container mx-auto py-8 space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Settings</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Customize your QuantumCode experience
        </p>
      </div>

      <ThemeSettings />
      <CodeEditorSettings />
      <DisplaySettings />
      <NotificationSettings />
      <LanguageSettings />

      <div className="flex justify-end">
        <Button variant="outline" className="text-red-500 hover:text-red-600">
          Reset All Settings
        </Button>
      </div>
    </div>
  );
} 