export function CodeBlock({ code }: { code: string }) {
  return (
    <div>
      <pre className="text-sm bg-gray-100 p-2 rounded-md overflow-x-auto mt-2">
        <code>{code}</code>
      </pre>
    </div>
  );
}
