"use client";

import { Editor, loader } from "@monaco-editor/react";
import { Card } from "./Card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/Select";
import { Button } from "@/components/ui/Button";
import { useTheme } from "next-themes";
import { useEffect } from "react";

loader.config({
  paths: {
    vs: "https://cdn.jsdelivr.net/npm/monaco-editor@0.45.0/min/vs",
  },
});

interface CodeEditorProps {
  value: string;
  language: string;
  languageList: string[];
  onChange: (value: string) => void;
  onLanguageChange: (value: string) => void;
  onReset: () => void;
  onSubmit: () => void;
}

export function CodeEditor({
  value,
  language,
  languageList,
  onChange,
  onLanguageChange,
  onReset,
  onSubmit,
}: CodeEditorProps) {
  const { theme } = useTheme();

  useEffect(() => {
    loader.init().then((monaco) => {
      monaco.editor.defineTheme("quantum-dark", {
        base: "vs-dark",
        inherit: true,
        rules: [
          { token: "comment", foreground: "6A9955" },
          { token: "keyword", foreground: "C586C0" },
          { token: "string", foreground: "CE9178" },
          { token: "number", foreground: "B5CEA8" },
          { token: "type", foreground: "4EC9B0" },
          { token: "function", foreground: "DCDCAA" },
          { token: "variable", foreground: "9CDCFE" },
          { token: "operator", foreground: "D4D4D4" },
          { token: "delimiter", foreground: "D4D4D4" },
          { token: "predefined", foreground: "569CD6" },
        ],
        colors: {
          "editor.background": "#030712",
          "editor.foreground": "#E2E8F0",
          "editor.lineHighlightBackground": "#1E293B",
          "editor.selectionBackground": "#334155",
          "editor.inactiveSelectionBackground": "#1E293B",
          "editor.selectionHighlightBackground": "#334155",
          "editor.wordHighlightBackground": "#334155",
          "editor.wordHighlightStrongBackground": "#475569",
          "editor.findMatchBackground": "#475569",
          "editor.findMatchHighlightBackground": "#334155",
          "editor.findRangeHighlightBackground": "#1E293B",
          "editor.hoverHighlightBackground": "#1E293B",
          "editor.lineHighlightBorder": "#1E293B",
          "editor.rangeHighlightBackground": "#1E293B",
          "editor.symbolHighlightBackground": "#1E293B",
          "editorWhitespace.foreground": "#475569",
          "editorLineNumber.foreground": "#64748B",
          "editorLineNumber.activeForeground": "#94A3B8",
          "editorGutter.background": "#030712",
          "editorError.foreground": "#EF4444",
          "editorWarning.foreground": "#F59E0B",
          "editorInfo.foreground": "#3B82F6",
          "editorHint.foreground": "#3B82F6",
          "editorBracketMatch.background": "#334155",
          "editorBracketMatch.border": "#475569",
          "editorBracketHighlight.foreground1": "#F59E0B",
          "editorBracketHighlight.foreground2": "#3B82F6",
          "editorBracketHighlight.foreground3": "#10B981",
          "editorBracketHighlight.foreground4": "#F59E0B",
          "editorBracketHighlight.foreground5": "#3B82F6",
          "editorBracketHighlight.foreground6": "#10B981",
          "editorBracketHighlight.unexpectedBracket.foreground": "#EF4444",
        },
      });
    });
  }, []);

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Code Editor</h2>
        <Select value={language} onValueChange={onLanguageChange}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select language" />
          </SelectTrigger>
          <SelectContent>
            {languageList.map((language) => (
              <SelectItem key={language} value={language}>
                {language}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <Editor
        height="500px"
        defaultLanguage={language.toLowerCase()}
        language={language.toLowerCase()}
        value={value}
        onChange={(value) => onChange(value || "")}
        theme={theme === "dark" ? "quantum-dark" : "light"}
        options={{
          minimap: { enabled: false },
          fontSize: 14,
          lineNumbers: "on",
          roundedSelection: false,
          scrollBeyondLastLine: false,
          automaticLayout: true,
          wordWrap: "on",
          wrappingStrategy: "advanced",
          scrollbar: {
            vertical: "visible",
            horizontal: "visible",
          },
          suggest: {
            preview: true,
            showMethods: true,
            showFunctions: true,
            showConstructors: true,
            showFields: true,
            showVariables: true,
            showClasses: true,
            showStructs: true,
            showInterfaces: true,
            showModules: true,
            showProperties: true,
            showEvents: true,
            showOperators: true,
            showUnits: true,
            showValues: true,
            showConstants: true,
            showEnums: true,
            showEnumMembers: true,
            showKeywords: true,
            showWords: true,
            showColors: true,
            showFiles: true,
            showReferences: true,
            showFolders: true,
            showTypeParameters: true,
            showSnippets: true,
          },
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
