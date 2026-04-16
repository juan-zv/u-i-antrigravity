export type Ride = {
  id: string;
  driverName: string;
  driverAvatar: string;
  vehicle: string;
  rating: number;
  isVerified: boolean;
  price: number;
  departureTime: string;
  departureLocation: string;
  arrivalTime: string;
  arrivalLocation: string;
  seatsOpen: number;
  totalSeats: number;
  featured?: boolean;
};
