interface ProblemStatsProps {
  submission: string;
  successRate: string;
  type: string;
}

export default function ProblemStats({
  submission,
  successRate,
  type,
}: ProblemStatsProps) {
  return (
    <div className="grid grid-cols-3 gap-4 text-sm">
      <div className="p-3 bg-gray-100 rounded-md">
        <p className="text-gray-500">Submissions</p>
        <p className="font-semibold">{submission}</p>
      </div>
      <div className="p-3 bg-gray-100 rounded-md">
        <p className="text-gray-500">Success Rate</p>
        <p className="font-semibold">{successRate}</p>
      </div>
      <div className="p-3 bg-gray-100 rounded-md">
        <p className="text-gray-500">Type</p>
        <p className="font-semibold">{type}</p>
      </div>
    </div>
  );
}
