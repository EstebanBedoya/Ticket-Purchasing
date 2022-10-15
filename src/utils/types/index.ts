export type Services = Record<string, string>;
export interface ShowType {
  showName: string;
  available: boolean;
  place: string;
  date: string;
  image: string;
  quantityTickets: number;
  price: number;
}

export interface CardData {
  name: string | number;
  expiry: string | number;
  cvc: string | number;
  number: string | number;
}
