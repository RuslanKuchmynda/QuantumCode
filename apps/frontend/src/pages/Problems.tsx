import TablePromlems from "@/components/problems/ProblemsTable";
import Stats from "@/components/problems/Stats";
import ProblemFilters from "@/components/problems/ProblemFilters";

export default function Problems() {
  return (
    <div className="flex justify-center mt-10">
      <div className="w-4/5 flex flex-col gap-4">
        <ProblemFilters />
        <div className="">
          <div className="w-full flex  gap-4">
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
