import { apiPost } from "@/services/api";
import { apiRoutes } from "@/constants/routes";

interface SignIn {
  email: string;
  password: string;
}
interface Token {
  accessToken: string;
}

export async function signIn(data: SignIn) {
  return await apiPost<SignIn, Token>(apiRoutes.signIn, data);
}
