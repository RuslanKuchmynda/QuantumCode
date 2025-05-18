import { Badge } from "@/components/ui/Badge";
import { Problem } from "@shared/interfaces/problem";
import { useMemo } from "react";
import InfoCard from "@/components/info-card/InfoCard";

export default function ProblemInfo({ problem }: { problem: Problem }) {
  return useMemo(
    () => (
      <>
        <div className="flex items-center justify-between sticky top-0 bg-background py-2 z-10">
          <h1 className="text-2xl font-bold">{problem?.title}</h1>
          <Badge variant={problem?.difficulty}>{problem?.difficulty}</Badge>
        </div>

        <InfoCard
          title={"Description"}
          description={problem?.details?.description}
        />

        <InfoCard title={"Examples"} example={problem?.details?.examples} />

        <InfoCard title={"Constraints"} list={problem?.details?.constraints} />

        <InfoCard title={"Hints"} list={problem?.details?.hints} />
      </>
    ),
    [problem]
  );
}
