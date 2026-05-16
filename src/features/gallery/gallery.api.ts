// Example API for gallery feature
import { api } from "@/services/api";

export const getGalleryImages = async () => {
  const response = await api.get("/gallery");
  return response.data;
};
