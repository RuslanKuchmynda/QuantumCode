import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/Table";
import { Button } from "@/components/ui/Button";

export default function Stats() {
  return (
    <Card className="w-72">
      <CardHeader>
        <CardTitle>Stats</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-16">Difficulty</TableHead>
              <TableHead className="text-right">Solutions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">Easy</TableCell>
              <TableCell className="text-right">10/50</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Medium</TableCell>
              <TableCell className="text-right">3/20</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Hard</TableCell>
              <TableCell className="text-right">1/10</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
      <CardFooter className="flex justify-center w-full">
        <CardDescription>
          <Button variant="ghost">Detail stats</Button>
        </CardDescription>
      </CardFooter>
    </Card>
  );
}
