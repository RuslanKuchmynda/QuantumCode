/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client";

import { useQuery } from "@tanstack/react-query";
import { useProblemsStore } from "@store/problems-store";
import { useEffect, use, useState } from "react";
import { getProblemById } from "@/components/problems/Problems.funcs";
import { CodeEditor } from "@/components/ui/CodeEditor";
import ProblemInfo from "@/components/problems/ProblemInfo";

export default function ProblemPage({ params }: { params: Promise<{ id: number }> }) {
  const { id } = use(params);
  const { problemDetails, setProblemDetails } = useProblemsStore();
  const [code, setCode] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("python");
  
  const { data: details, isLoading } = useQuery({
    queryKey: ['problem', id],
    queryFn: () => getProblemById(id),
  });

  useEffect(() => {
    if (details) {
      setProblemDetails(id, details);
      setCode(details.starterCode[selectedLanguage]);
    }
  }, [details, id, setProblemDetails, selectedLanguage]);

  const handleLanguageChange = (language: string) => {
    setSelectedLanguage(language);
    setCode(details?.starterCode[language] || "");
  };

  const handleReset = () => {
    setCode(details?.starterCode[selectedLanguage] || "");
  };

  const handleSubmit = () => {
    // TODO: Implement submission logic
    console.log("Submitting code:", code);
  };

  if (isLoading) return <div>Loading...</div>;
  if (!details) return <div>Problem not found</div>;

  return (
    <div className="mx-auto py-8 px-4">
      <div className="grid grid-cols-3 gap-6 h-[calc(100vh-4rem)] pr-24">
        <div className="col-span-1 space-y-6 overflow-y-auto pr-4">
          <ProblemInfo problem={problemDetails[id]} />
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
