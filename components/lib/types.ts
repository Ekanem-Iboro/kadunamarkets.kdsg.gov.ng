export interface Hall {
    id: number;
    name: string;
    image: string;
    description: string;
    pricePerDay: number;
    chargesFee: number;
}
export interface BookingData {
  hall: Hall;
  name: string;
  email: string;
  phone: string;
  fromDate: string;
  toDate: string;
  days: number;
  totalPrice: number;
}
