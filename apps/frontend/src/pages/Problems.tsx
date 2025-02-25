"use client";
import TableProblems from "@/components/problems/ProblemsTable";
import Stats from "@/components/problems/Stats";
import ProblemFilters from "@/components/problems/ProblemFilters";
import { useQuery } from "@tanstack/react-query";
import { getProblems } from "@/components/problems/Problems.funcs";
import { useProblemsStore } from "@store/problems-store";
import { useEffect, useState } from "react";

export default function Problems() {
  const [isClient, setIsClient] = useState(false);
  const { setProblems } = useProblemsStore();

  useEffect(() => {
    setIsClient(true); // Позначаємо, що компонент завантажено на клієнті
  }, []);

  const { data, isLoading, error } = useQuery({
    queryKey: ["problems"],
    queryFn: getProblems,
    enabled: isClient, // Завантаження запиту тільки після завантаження на клієнті
  });

  useEffect(() => {
    if (!isLoading && !error && data) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      setProblems(data);
    }
  }, [data, isLoading, error]);

  if (!isClient) {
    return null; // Повертаємо пусту відповідь при SSR
  }

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
