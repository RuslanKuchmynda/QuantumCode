"use client";

import { Editor } from "@monaco-editor/react";
import { Card } from "./Card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/Select";
import { Button } from "@/components/ui/Button";

interface CodeEditorProps {
  value: string;
  language: string;
  onChange: (value: string) => void;
  onLanguageChange: (value: string) => void;
  onReset: () => void;
  onSubmit: () => void;
}

export function CodeEditor({ value, language, onChange, onLanguageChange, onReset, onSubmit }: CodeEditorProps) {
  return (
      <Card className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Code Editor</h2>
          <Select value={language} onValueChange={onLanguageChange}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select language" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="python">Python</SelectItem>
              <SelectItem value="javascript">JavaScript</SelectItem>
              <SelectItem value="java">Java</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Editor
          height="500px"
          defaultLanguage={language}
          language={language}
          value={value}
          onChange={(value) => onChange(value || "")}
          theme={"light"}
          options={{
            minimap: { enabled: false },
            fontSize: 14,
            lineNumbers: "on",
            roundedSelection: false,
            scrollBeyondLastLine: false,
            automaticLayout: true,
          }}
        />
        <div className="mt-4 flex justify-end space-x-4">
          <Button variant="outline" onClick={onReset}>
            Reset
          </Button>
          <Button onClick={onSubmit}>Submit</Button>
        </div>
      </Card>
  );
}
