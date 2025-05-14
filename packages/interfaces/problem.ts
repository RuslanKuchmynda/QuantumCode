export interface ProblemList {
  id: number;
  title: string;
  status: string;
  difficulty: "Easy" | "Medium" | "Hard";
  submission: string;
  successRate: string;
  type: string;
}

export interface ProblemDetails {
  id: number;
  example: Example[];
  description: string;
  constraints: string[];
  starterCode: Record<string, string>;
}

export type Problem = ProblemList & ProblemDetails;

export interface Example {
  input: string;
  output: string;
  explanation: string;
}
