import { problemData } from "@/constants/problem-data";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import ExampleCard from "../example-card/ExampleCard";

export default function ProblemInfo() {
  return (
    <>
      <div className="flex items-center justify-between sticky top-0 bg-background py-2 z-10">
        <h1 className="text-2xl font-bold">{problemData.title}</h1>
        <Badge variant={problemData.difficulty}>{problemData.difficulty}</Badge>
      </div>

      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4">Description</h2>
        <p className="text-gray-700 whitespace-pre-line">
          {problemData.description}
        </p>
      </Card>

      <ExampleCard example={problemData.examples} />

      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4">Constraints</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          {problemData.constraints.map((constraint, index) => (
            <li key={index}>{constraint}</li>
          ))}
        </ul>
      </Card>
    </>
  );
}
