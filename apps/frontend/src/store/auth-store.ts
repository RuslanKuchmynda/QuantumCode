import { create } from "zustand";
import { useEffect } from "react";
import { localStorageConstants } from "@/constants/local-storage";

interface AuthStore {
  accessToken: string | null;
  isLoggedIn: boolean;
  setAccessToken: (accessToken: string) => void;
  setIsLoggedIn: (status: boolean) => void;
  clearAuth: () => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  accessToken: null,
  isLoggedIn: false,

  setAccessToken: (accessToken: string) => {
    if (typeof window !== "undefined") {
      localStorage.setItem(localStorageConstants.accessToken, accessToken);
    }
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
}));

export const useAuthInit = () => {
  const setAccessToken = useAuthStore((state) => state.setAccessToken);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedToken = localStorage.getItem(
        localStorageConstants.accessToken,
      );
      if (storedToken) setAccessToken(storedToken);
    }
  }, [setAccessToken]);
};
