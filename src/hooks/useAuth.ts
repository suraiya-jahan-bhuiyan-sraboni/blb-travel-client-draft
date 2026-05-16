import { useAuthStore, AuthState } from "@/store/auth.store";

export const useAuth = () => {
  const user = useAuthStore((state: AuthState) => state.user);
  const isAuthenticated = useAuthStore((state: AuthState) => state.isAuthenticated);
  const logout = useAuthStore((state: AuthState) => state.logout);

  return {
    user,
    isAuthenticated,
    logout,
  };
};
