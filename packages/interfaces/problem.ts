export interface Problem {
  title: string;
  status: string;
  difficulty: "Easy" | "Medium" | "Hard";
  submission: string;
  successRate: string;
  type: string;
  example: Example[];
  description: string;
  constraints: string[];
  starterCode: Record<string, string>;
}

export interface Example {
  input: string;
  output: string;
  explanation: string;
}

