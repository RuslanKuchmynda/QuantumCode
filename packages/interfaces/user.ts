export interface UserLogin {
  email: string;
  password: string;
  refreshToken?: string | null;
}

export interface UserInfo {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  image: string;
  role: string;
  lastActive: Date;
  createdAt: Date;
  updatedAt: Date;
  theme: string;
  notifications: boolean;
}

export interface UserStats {
  id: string;
  userId: string;
  problemsSolved: number;
  ranking: number;
  successRate: number;
  currentStreak: number;
  bestStreak: number;
  globalRanking: number;
  updatedAt: Date;
}
