import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/Sheet";
import { Button } from "../ui/Button";
import { Badge } from "@/components/ui/Badge";
import ProblemStats from "@/components/problems/ProblemStats";
import Link from "next/link";
import ExampleCard from "../example-card/ExampleCard";
import { useProblemsStore } from "@/store/problems-store";
import { useQuery } from "@tanstack/react-query";
import { getProblemById } from "./Problems.funcs";
import { useEffect, useState } from "react";
import { ProblemStats as ProblemStatsType } from "@shared/interfaces/problem";

interface ViewProblemProps {
  problemId: string;
  problemStats?: ProblemStatsType;
  children?: React.ReactNode;
}

export default function ViewProblem({
  problemId,
  problemStats,
  children,
}: ViewProblemProps) {
  const { problemDetails, setProblemDetails } = useProblemsStore();
  const [isOpen, setIsOpen] = useState(false);

  const { data } = useQuery({
    queryKey: ["problem", problemId],
    queryFn: () => getProblemById(problemId),
    enabled: isOpen,
  });

  useEffect(() => {
    if (data) {
      setProblemDetails(problemId, data.problem);
    }
  }, [data, problemId, setProblemDetails]);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="w-[700px] sm:max-w-xl">
        <SheetHeader>
          <SheetTitle className="text-2xl font-semibold">
            {problemDetails[problemId]?.title}
          </SheetTitle>
        </SheetHeader>

        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <Badge variant={problemDetails[problemId]?.difficulty}>
              {problemDetails[problemId]?.difficulty}
            </Badge>
            <span className="text-sm text-gray-500">
              Status: {problemDetails[problemId]?.status}
            </span>
          </div>

          <div>
            <h3 className="text-lg font-medium">Description</h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              {problemDetails[problemId]?.details?.description}
            </p>
          </div>
          <ExampleCard example={problemDetails[problemId]?.details?.examples} />
          <ProblemStats
            submission={problemStats?.totalSubmissions || 0}
            successRate={problemStats?.successRate || 0}
            type={problemDetails[problemId]?.category}
          />
        </div>
        <SheetFooter className="flex my-6">
          <SheetClose asChild>
            <Button variant="outline">Close</Button>
          </SheetClose>
          <Link href={`/problems/${problemId}`}>
            <Button>Start</Button>
          </Link>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
