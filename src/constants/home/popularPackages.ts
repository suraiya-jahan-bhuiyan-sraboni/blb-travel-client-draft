import { TravelPackage } from "@/types/home/travelPackage.types";

export const popularPackages: TravelPackage[] = [
  {
    id: 1,
    country: "Malaysia",
    cities: ["Kuala Lumpur", "Penang", "Langkawi"],
    duration: "7 Nights / 8 Days",
    price: "Starting From : BDT 1,10,000 / person",
    image: "/images/popular-packages/malaysia.jpg", 
    agency: "Agency B",
  },
  {
    id: 2,
    country: "Indonesia",
    cities: ["Bali", "Ubud", "Nusa Penida"],
    duration: "6 Nights / 7 Days",
    price: "Starting From : BDT 70,000 / person",
    image: "/images/popular-packages/indonesia.jpg", 
    agency: "Agency C",
  },
  {
    id: 3,
    country: "Thailand",
    cities: ["Bangkok", "Phuket", "Chiang Mai"],
    duration: "7 Nights / 8 Days",
    price: "Starting From : BDT 90,000 / person",
    image: "/images/popular-packages/thailand.jpg", 
    agency: "Agency A",
  },
];