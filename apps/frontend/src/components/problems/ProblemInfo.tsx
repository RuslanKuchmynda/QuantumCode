import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import ExampleCard from "../example-card/ExampleCard";
import { Problem } from "@shared/interfaces/problem";

export default function ProblemInfo({ problem }: { problem: Problem }) {
  console.log(problem);
  return (
    <>
      <div className="flex items-center justify-between sticky top-0 bg-background py-2 z-10">
        <h1 className="text-2xl font-bold">{problem?.title}</h1>
        <Badge variant={problem?.difficulty}>{problem?.difficulty}</Badge>
      </div>

      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4">Description</h2>
        <p className="text-gray-700 whitespace-pre-line">
          {problem?.details?.description}
        </p>
      </Card>

      <ExampleCard example={problem?.details?.examples} />

      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4">Constraints</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          {problem?.details?.constraints.map((constraint, index) => (
            <li key={index}>{constraint}</li>
          ))}
        </ul>
      </Card>
    </>
  );
}
