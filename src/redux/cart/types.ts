export type TCartItem = {
    id: string;
    title: string;
    imageUrl: string;
    price: number;
    type: string;
    size: number;
    count: number;
}

export interface ICartSliceState {
  items: TCartItem[];
  totalPrice: number;
  totalCount: number
}