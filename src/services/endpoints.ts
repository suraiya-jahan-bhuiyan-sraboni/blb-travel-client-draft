export const ENDPOINTS = {
  AUTH: {
    LOGIN: "/auth/login",
    REGISTER: "/auth/register",
    FORGOT_PASSWORD: "/auth/forgot-password",
  },
  OFFERS: {
    LIST: "/offers",
    DETAIL: (id: string | number) => `/offers/${id}`,
  },
  GALLERY: {
    LIST: "/gallery",
  },
  BOOKING: {
    CREATE: "/bookings",
    LIST: "/bookings",
    DETAIL: (id: string | number) => `/bookings/${id}`,
  },
};
