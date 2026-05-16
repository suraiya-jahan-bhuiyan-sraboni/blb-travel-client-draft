// Example API for offers feature
import { api } from "@/services/api";

export const getOffers = async () => {
  const response = await api.get("/offers");
  return response.data;
};
