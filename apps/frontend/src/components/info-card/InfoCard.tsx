import { Examples } from "@shared/interfaces/problem";
import { Card } from "@/components/ui/Card";
import { CodeBlock } from "@/components/ui/CodeBlock";

interface InfoCardProps {
  title: string;
  description?: string;
  list?: string[];
  example?: Examples[];
}

export default function InfoCard({
  title,
  description,
  list,
  example,
}: InfoCardProps) {
  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      {description && (
        <p className="text-gray-700 whitespace-pre-line">{description}</p>
      )}
      {list && (
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          {list.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
      {example && (
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
      )}
    </Card>
  );
}
