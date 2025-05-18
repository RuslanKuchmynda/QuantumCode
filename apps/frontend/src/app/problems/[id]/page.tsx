"use client";

import { useQuery } from "@tanstack/react-query";
import { useProblemsStore } from "@store/problems-store";
import { useEffect, use, useState } from "react";
import { getProblemById } from "@/components/problems/Problems.funcs";
import { CodeEditor } from "@/components/ui/CodeEditor";
import ProblemInfo from "@/components/problems/ProblemInfo";
import { Card } from "@/components/ui/Card";
import ProblemHints from "@/components/problems/ProblemHints";

export default function ProblemPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const { problemDetails, setProblemDetails } = useProblemsStore();
  const [code, setCode] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("JavaScript");

  const { data, isLoading } = useQuery({
    queryKey: ["problem", id],
    queryFn: () => getProblemById(id.toString()),
  });

  useEffect(() => {
    if (data) {
      setProblemDetails(id, data.problem);
      const starterCode = data.problem.details?.starterCode["JavaScript"];
      if (starterCode) {
        setCode(starterCode.code);
      }
    }
  }, [data, id, setProblemDetails, selectedLanguage]);

  const handleLanguageChange = (language: string) => {
    setSelectedLanguage(language);
    setCode(problemDetails[id]?.details?.starterCode[language].code || "");
  };

  const handleReset = () => {
    setCode(
      problemDetails[id]?.details?.starterCode[selectedLanguage].code || ""
    );
  };

  const handleSubmit = () => {
    // TODO: Implement submission logic
    console.log("Submitting code:", code);
  };

  if (isLoading) return <div>Loading...</div>;
  if (!problemDetails[id]) return <div>Problem not found</div>;

  return (
    <div className="mx-auto py-8 px-4">
      <div className="grid grid-cols-3 gap-6 h-[calc(100vh-4rem)] pr-24">
        <div className="col-span-1 space-y-6 overflow-y-auto pr-4">
          <ProblemInfo problem={problemDetails[id]} />
          <ProblemHints hints={problemDetails[id].details?.hints || []} />
          {/* TODO: create a component for time and memory limits */}
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Time & Memory Limits</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">Time Limit</p>
                <p className="font-medium">{problemDetails[id]?.timeLimit}ms</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Memory Limit</p>
                <p className="font-medium">
                  {problemDetails[id]?.memoryLimit}MB
                </p>
              </div>
            </div>
          </Card>
        </div>
        <div className="col-span-2">
          <CodeEditor
            value={code}
            language={selectedLanguage}
            languageList={problemDetails[id]?.details?.availableLanguages || []}
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
