export interface Problem {
  title: string;
  description: string;
  example: string;
  status: string;
  difficulty: "Easy" | "Medium" | "Hard";
  submission: string;
  successRate: string;
  type: string;
}
