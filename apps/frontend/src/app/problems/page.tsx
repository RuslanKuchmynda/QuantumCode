"use client";

import TableProblems from "@/components/problems/ProblemsTable";
import ProblemFilters from "@/components/problems/ProblemFilters";
import { useQuery } from "@tanstack/react-query";
import { getProblems } from "@/components/problems/Problems.funcs";
import { useProblemsStore } from "@store/problems-store";
import { useEffect } from "react";

export default function ProblemsPage() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["problems"],
    queryFn: getProblems,
  });

  const { setProblems } = useProblemsStore();

  useEffect(() => {
    if (!isLoading && !error && data) {
      setProblems(data.problems);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, isLoading, error]);

  return (
    <div className="container mx-auto py-8 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Problems</h1>
      </div>
      <div className="flex flex-col gap-4">
        <ProblemFilters />
        <div>
          <TableProblems />
        </div>
      </div>
    </div>
  );
}
