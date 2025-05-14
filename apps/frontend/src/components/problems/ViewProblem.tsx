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
import { Problem } from "@shared/interfaces/problem";
import ExampleCard from "../example-card/ExampleCard";
import { WithId } from "@shared/interfaces/withId";

interface ViewProblemProps {
  problem: WithId<Problem>;
  children?: React.ReactNode;
}

export default function ViewProblem({ problem, children }: ViewProblemProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="w-[700px] sm:max-w-xl">
        <SheetHeader>
          <SheetTitle className="text-2xl font-semibold">
            {problem?.title}
          </SheetTitle>
        </SheetHeader>

        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <Badge variant={problem.difficulty}>{problem.difficulty}</Badge>
            <span className="text-sm text-gray-500">
              Status: {problem.status}
            </span>
          </div>

          <div>
            <h3 className="text-lg font-medium">Description</h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              {problem.description}
            </p>
          </div>
          <ExampleCard example={problem.example} />
          <ProblemStats
            submission={problem.submission}
            successRate={problem.successRate}
            type={problem.type}
          />
        </div>
        <SheetFooter className="flex my-6">
          <SheetClose asChild>
            <Button variant="outline">Close</Button>
          </SheetClose>
          <Link href={`/problems/${problem.id}`}>
            <Button>Start</Button>
          </Link>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
