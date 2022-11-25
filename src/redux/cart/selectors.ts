import { RootState } from "../store";

export const cartSelector = (state: RootState) => state.cart;
export const cartItemSelector = (id: string, type: string, size: number) => (state: RootState) =>
  state.cart.items.find((obj) => obj.id === id && obj.type === type && obj.size === size);