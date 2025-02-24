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
          {/*todo create new component for example #19*/}
          <div>
            <pre className="text-sm bg-gray-100 p-2 rounded-md overflow-x-auto mt-2">
              <code>{problem.example}</code>
            </pre>
          </div>
          {/*todo create new component for this block code #20*/}
          <div className="grid grid-cols-3 gap-4 text-sm">
            <div className="p-3 bg-gray-100 rounded-md">
              <p className="text-gray-500">Submissions</p>
              <p className="font-semibold">{problem.submission}</p>
            </div>
            <div className="p-3 bg-gray-100 rounded-md">
              <p className="text-gray-500">Success Rate</p>
              <p className="font-semibold">{problem.successRate}</p>
            </div>
            <div className="p-3 bg-gray-100 rounded-md">
              <p className="text-gray-500">Type</p>
              <p className="font-semibold">{problem.type}</p>
            </div>
          </div>
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
