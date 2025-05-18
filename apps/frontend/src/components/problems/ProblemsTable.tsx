import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/Table";
import { Badge } from "@/components/ui/Badge";
import { useProblemsStore } from "@store/problems-store";
import ViewProblem from "@/components/problems/ViewProblem";
import PaginationComponent from "@/components/ui/PaginationComponent";

export default function TableProblems() {
  const { problems } = useProblemsStore();
  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-1/3">Title</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Difficulty</TableHead>
            <TableHead className="text-right">Submissions</TableHead>
            <TableHead className="text-right">Success Rate</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {problems?.map((problem, key) => (
            <ViewProblem
              problemStats={problem?.stats}
              problemId={problem.id}
              key={key}
            >
              <TableRow key={key}>
                <TableCell>{problem.title}</TableCell>
                <TableCell className="capitalize">{problem.category}</TableCell>
                <TableCell>
                  <Badge variant={problem.difficulty}>
                    {problem.difficulty}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  {problem.stats?.totalSubmissions}
                </TableCell>
                <TableCell className="text-right">
                  {problem.stats?.successRate}
                </TableCell>
              </TableRow>
            </ViewProblem>
          ))}
        </TableBody>
      </Table>
      <PaginationComponent />
    </>
  );
}
