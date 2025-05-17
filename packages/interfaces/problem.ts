export interface Problem {
  id: string;
  title: string;
  slug: string;
  difficulty: "Easy" | "Medium" | "Hard";
  status: string;
  category: string;
  tags: string[];
  points: number;
  timeLimit: number;
  memoryLimit: number;
  createdAt: Date;
  updatedAt: Date;
  isPremium: boolean;
  stats?: ProblemStats;
  details?: ProblemDetails;
}

export interface ProblemStats {
  id: string;
  problemId: string;
  totalSubmissions: number;
  acceptedSubmissions: number;
  successRate: number;
  averageRuntime: number;
  averageMemory: number;
  updatedAt: Date;
}

export interface ProblemDetails {
  id: string;
  problemId: string;
  availableLanguages: string[];
  explanation: string;
  hints: string[];
  solution: Record<string, Solution>;
  examples: Examples[];
  description: string;
  constraints: string[];
  starterCode: Record<string, StarterCode>;
}

interface Solution {
  code: string;
  explanation: string;
  timeComplexity: string;
  spaceComplexity: string;
}


interface StarterCode {
  code: string;
  template: string;
  testCases: {
    input: string;
    output: string;
    explanation: string;
  }[];
}

export interface Examples {
  input: string;
  output: string;
  explanation?: string;
}
