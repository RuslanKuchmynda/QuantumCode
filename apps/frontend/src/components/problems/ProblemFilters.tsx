import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/Select";
import { Input } from "@/components/ui/Input";

export default function ProblemFilters() {
  return (
    <form className="flex gap-2">
      <Input className="" placeholder="Search" />

      <Select>
        <SelectTrigger className="w-fit">
          <SelectValue placeholder="Status" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="done">Done</SelectItem>
          <SelectItem value="open">Open</SelectItem>
          <SelectItem value="inProgress">In Progress</SelectItem>
        </SelectContent>
      </Select>
      <Select>
        <SelectTrigger className="w-fit">
          <SelectValue placeholder="Difficulty" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="easy">Easy</SelectItem>
          <SelectItem value="medium">Medium</SelectItem>
          <SelectItem value="hard">Hard</SelectItem>
        </SelectContent>
      </Select>
      <Select>
        <SelectTrigger className="w-fit">
          <SelectValue placeholder="Type" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="algorithms">Algorithms</SelectItem>
          <SelectItem value="database">Database</SelectItem>
          <SelectItem value="binary">Binary</SelectItem>
        </SelectContent>
      </Select>
    </form>
  );
}
