"use client";

import TableProblems from "@/components/problems/ProblemsTable";
import Stats from "@/components/problems/Stats";
import ProblemFilters from "@/components/problems/ProblemFilters";
import { useQuery } from "@tanstack/react-query";
import { getProblems } from "@/components/problems/Problems.funcs";
import { useProblemsStore } from "@store/problems-store";
import { useEffect } from "react";

export default function Problems() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["problems"],
    queryFn: getProblems,
  });

  const { setProblems } = useProblemsStore();

  useEffect(() => {
    if (!isLoading && !error && data) {
      setProblems(data);
    }
  }, [data, isLoading, error]);

  return (
    <div className="mt-10 px-10">
      <div className="flex flex-col gap-4">
        <ProblemFilters />
        <div className="">
          <div className="flex gap-4">
            <TableProblems />
            <div>
              <Stats />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
