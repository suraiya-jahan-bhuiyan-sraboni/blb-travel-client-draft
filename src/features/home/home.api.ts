// Example API for home feature
import { api } from "@/services/api";

export const getHomeData = async () => {
  const response = await api.get("/home");
  return response.data;
};
