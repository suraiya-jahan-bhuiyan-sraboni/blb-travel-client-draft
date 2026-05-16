export interface Booking {
  id: string;
  userId: string;
  offerId: string;
  status: "pending" | "confirmed" | "cancelled";
  travelDate: string;
  totalAmount: number;
}
