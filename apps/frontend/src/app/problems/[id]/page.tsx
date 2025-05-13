"use client";

import { CodeEditor } from "@/components/ui/CodeEditor";
import { useState } from "react";
import { problemData } from "@/constants/problem-data";
import ProblemInfo from "@/components/problems/ProblemInfo";

export default function ProblemPage() {
  const [selectedLanguage, setSelectedLanguage] = useState("python");
  //FIXME: fix problemData type
  const [code, setCode] = useState(problemData.starterCode[selectedLanguage]);

  const handleLanguageChange = (value: string) => {
    setSelectedLanguage(value);
    //FIXME: fix problemData type
    setCode(problemData.starterCode[value]);
  };

  const handleReset = () => {
    //FIXME: fix problemData type
    setCode(problemData.starterCode[selectedLanguage]);
  };

  const handleSubmit = () => {
    console.log("Submitting code:", code);
  };

  return (
    <div className="mx-auto py-8 px-4">
      <div className="grid grid-cols-3 gap-6 h-[calc(100vh-4rem)] pr-24">
        <div className="col-span-1 space-y-6 overflow-y-auto pr-4">
          <ProblemInfo />
        </div>
        <div className="col-span-2">
          <CodeEditor
            value={code}
            language={selectedLanguage}
            onChange={setCode}
            onLanguageChange={handleLanguageChange}
            onReset={handleReset}
            onSubmit={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
}
