import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/Table";
import { Badge } from "@/components/ui/Badge";
import { useProblemsStore } from "@/store/problems.store";
import ViewProblem from "@/components/problems/ViewProblem";

export default function TableProblems() {
  const { problems } = useProblemsStore();
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-32">Status</TableHead>
          <TableHead className="w-1/3">Title</TableHead>
          <TableHead>Difficulty</TableHead>
          <TableHead className="text-right">Submissions</TableHead>
          <TableHead className="text-right">Success Rate</TableHead>
          <TableHead>Type</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {problems?.map((problem, key) => (
          <ViewProblem problem={problem} key={key}>
            <TableRow key={key}>
              <TableCell className="font-medium">{problem.status}</TableCell>
              <TableCell>{problem.title}</TableCell>
              <TableCell>
                {/*todo fix Badge #14*/}

                {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
                {/* @ts-expect-error*/}
                <Badge variant={problem.difficulty.toLowerCase()}>
                  {problem.difficulty}
                </Badge>
              </TableCell>
              <TableCell className="text-right">{problem.submission}</TableCell>
              <TableCell className="text-right">
                {problem.successRate}
              </TableCell>
              <TableCell>{problem.type}</TableCell>
            </TableRow>
          </ViewProblem>
        ))}
      </TableBody>
    </Table>
  );
}
