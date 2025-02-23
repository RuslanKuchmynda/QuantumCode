import { create } from "zustand";
import { localStorageConstants } from "@/constants/local-storage";

interface AuthStore {
  accessToken: string | null;
  isLoggedIn: boolean;
  setAccessToken: (accessToken: string) => void;
  setIsLoggedIn: (status: boolean) => void;
  clearAuth: () => void;
}

export const useAuthStore = create<AuthStore>((set) => {
  const storedToken = window.localStorage.getItem(
    localStorageConstants.accessToken,
  );

  return {
    accessToken: storedToken || null,
    isLoggedIn: !!storedToken,

    setAccessToken: (accessToken: string) => {
      localStorage.setItem(localStorageConstants.accessToken, accessToken);
      set({ accessToken, isLoggedIn: true });
    },

    setIsLoggedIn: (status: boolean) => {
      set({ isLoggedIn: status });
      if (!status && typeof window !== "undefined") {
        localStorage.removeItem(localStorageConstants.accessToken);
      }
    },

    clearAuth: () => {
      if (typeof window !== "undefined") {
        localStorage.removeItem(localStorageConstants.accessToken);
      }
      set({ accessToken: null, isLoggedIn: false });
    },
  };
});
