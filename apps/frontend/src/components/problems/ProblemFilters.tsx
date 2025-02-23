import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/Select";
import { Input } from "@/components/ui/Input";
import FilterActionButtons from "@/components/filter/FilterActionButtons";

const filterOptions = [
  { placeholder: "Status", options: ["done", "open", "inProgress"] },
  { placeholder: "Difficulty", options: ["easy", "medium", "hard"] },
  { placeholder: "Type", options: ["algorithms", "database", "binary"] },
];
//todo get filters from api
export default function ProblemFilters() {
  return (
    <form className="flex items-center gap-2">
      <Input placeholder="Search" />
      {filterOptions.map(({ placeholder, options }) => (
        <Select key={placeholder}>
          <SelectTrigger className="w-fit">
            <SelectValue placeholder={placeholder} />
          </SelectTrigger>
          <SelectContent>
            {options.map((option) => (
              <SelectItem key={option} value={option}>
                {option.charAt(0).toUpperCase() + option.slice(1)}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      ))}
      <FilterActionButtons />
    </form>
  );
}
