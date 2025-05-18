interface ProblemStatsProps {
  submission: number;
  successRate: number;
  category: string;
}

//TODO: fix dublicate components
export default function ProblemStats({
  submission,
  successRate,
  category,
}: ProblemStatsProps) {
  return (
    <div className="grid grid-cols-3 gap-4 text-sm">
      <div className="p-3 bg-gray-100 dark:bg-gray-800 rounded-md">
        <p className="text-gray-500 dark:text-gray-400">Submissions</p>
        <p className="font-semibold dark:text-gray-100">{submission}</p>
      </div>
      <div className="p-3 bg-gray-100 dark:bg-gray-800 rounded-md">
        <p className="text-gray-500 dark:text-gray-400">Success Rate</p>
        <p className="font-semibold dark:text-gray-100">{successRate}</p>
      </div>
      <div className="p-3 bg-gray-100 dark:bg-gray-800 rounded-md">
        <p className="text-gray-500 dark:text-gray-400">Category</p>
        <p className="font-semibold dark:text-gray-100 capitalize">{category}</p>
      </div>
    </div>
  );
}
