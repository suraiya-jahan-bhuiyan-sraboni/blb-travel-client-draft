// Example Zustand store for booking
import { create } from "zustand";
import { Booking } from "@/types/booking.types";

interface BookingState {
  bookings: Booking[];
  addBooking: (booking: Booking) => void;
  setBookings: (bookings: Booking[]) => void;
}

export const useBookingStore = create<BookingState>((set) => ({
  bookings: [],
  addBooking: (booking) => set((state) => ({ bookings: [...state.bookings, booking] })),
  setBookings: (bookings) => set({ bookings }),
}));
