import { Card } from "@/components/ui/Card";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { Example } from "@shared/interfaces/problem";

interface ExampleCardProps {
  example: Example[];
}

export default function ExampleCard({ example }: ExampleCardProps) {
  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold mb-4">Examples</h2>
      <div className="space-y-4">
        {example?.map((example, index) => (
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
  );
}
