import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/Table";
import { Badge } from "@/components/ui/Badge";

export default function TablePromlems() {
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
        <TableRow>
          <TableCell className="font-medium">Open</TableCell>
          <TableCell>1. Merge two array</TableCell>
          <TableCell>
            <Badge variant="medium">Medium</Badge>
          </TableCell>
          <TableCell className="text-right">563</TableCell>
          <TableCell className="text-right">90%</TableCell>
          <TableCell>Algorithms</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">In Progress</TableCell>
          <TableCell>2. Bubble sort</TableCell>
          <TableCell>
            <Badge variant="easy">Easy</Badge>
          </TableCell>
          <TableCell className="text-right">822</TableCell>
          <TableCell className="text-right">82%</TableCell>
          <TableCell>Algorithms</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">In Progress</TableCell>
          <TableCell>3. Palindrome</TableCell>
          <TableCell>
            <Badge variant="hard">Hard</Badge>
          </TableCell>
          <TableCell className="text-right">822</TableCell>
          <TableCell className="text-right">82%</TableCell>
          <TableCell>Algorithms</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
