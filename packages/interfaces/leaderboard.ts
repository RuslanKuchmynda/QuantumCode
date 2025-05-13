export interface LeaderboardUser {
  rank: number;
  username: string;
  points: number;
  solvedProblems: number;
  rating: number;
  avatar?: string;
  streak: number;
}
