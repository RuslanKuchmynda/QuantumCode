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
import { getBadgeColor } from "@/services/colors";
import { Problem } from "@/components/problems/Problems.funcs";
import { CodeBlock } from "@/components/ui/CodeBlock";
import ProblemStats from "@/components/problems/ProblemStats";

interface ViewProblemProps {
  problem: Problem;
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
            <Badge className={getBadgeColor(problem.difficulty)}>
              {problem.difficulty}
            </Badge>
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
          <CodeBlock code={problem.example} />
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
          <Button>Start</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
