// Example API for auth feature
import { api } from "@/services/api";
import { LoginCredentials, RegisterCredentials } from "@/types/user.types";

export const login = async (credentials: LoginCredentials) => {
  const response = await api.post("/auth/login", credentials);
  return response.data;
};

export const register = async (credentials: RegisterCredentials) => {
  const response = await api.post("/auth/register", credentials);
  return response.data;
};
