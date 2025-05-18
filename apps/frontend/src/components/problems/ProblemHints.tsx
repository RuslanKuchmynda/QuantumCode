import { Card } from "../ui/Card";

interface ProblemHintsProps {
  hints: string[];
}

export default function ProblemHints({ hints }: ProblemHintsProps) {
  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold mb-4">Hints</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        {hints.map((hint, index) => (
          <li key={index}>{hint}</li>
        ))}
      </ul>
    </Card>
  );
}
