import { TCartItem, ICartSliceState } from "../redux/cart/types";

export const searchItemInState = (state: ICartSliceState, payload: TCartItem) => {
  return state.items.find(
    (obj) =>
      obj.id === payload.id &&
      obj.type === payload.type &&
      obj.size === payload.size,
  );
};