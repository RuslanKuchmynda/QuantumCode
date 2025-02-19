import TablePromlems from "@/components/problems/ProblemsTable";
import Stats from "@/components/problems/Stats";
import ProblemFilters from "@/components/problems/ProblemFilters";

export default function Problems() {
  return (
    <div className="mt-10 px-10">
      <div className="flex flex-col gap-4">
        <ProblemFilters />
        <div className="">
          <div className="flex gap-4">
            <TablePromlems />
            <div>
              <Stats />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
