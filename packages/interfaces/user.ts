export interface User {
  email: string;
  password: string;
  refreshToken?: string | null;
}
