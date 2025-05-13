import { problemData } from "@/constants/problem-data";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { CodeBlock } from "@/components/ui/CodeBlock";

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

      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4">Examples</h2>
        <div className="space-y-4">
          {problemData.examples.map((example, index) => (
            <div key={index} className="space-y-2">
              <div>
                <span className="font-medium">Input: </span>
                <CodeBlock code={example.input} />
              </div>
              <div>
                <span className="font-medium">Output: </span>
                <CodeBlock code={example.output} />
              </div>
              {example.explanation && (
                <div>
                  <span className="font-medium">Explanation: </span>
                  <p className="text-gray-600">{example.explanation}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </Card>

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
