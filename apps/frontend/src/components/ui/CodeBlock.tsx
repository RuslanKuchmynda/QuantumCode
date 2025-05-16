export function CodeBlock({ code }: { code: string }) {
  return (
    <div>
      <pre className="text-sm bg-gray-100 dark:bg-gray-800 p-2 rounded-md overflow-x-auto mt-2">
        <code className="text-gray-900 dark:text-gray-100">{code}</code>
      </pre>
    </div>
  );
}
