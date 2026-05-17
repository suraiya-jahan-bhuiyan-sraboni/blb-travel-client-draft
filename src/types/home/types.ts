export interface TravelPackage {
  id: number;
  country: string;
  cities: string[];
  duration: string;
  price: string;
  image: string;
  agency: string;
}
export interface ClientReviews {
  id: number;
  title: string;
  review: string;
  image: string;
  country: string;
  link: string;
}