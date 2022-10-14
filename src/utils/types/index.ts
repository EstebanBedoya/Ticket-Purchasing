export type Services = Record<string, string>;

export interface ShowType {
  available: boolean;
  date: string;
  image: string;
  place: string;
  price: number;
  quantityTickets: number;
  showName: string;
}
