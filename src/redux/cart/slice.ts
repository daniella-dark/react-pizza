import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { calcTotalCount, calcTotalPrice } from '../../utils/calcTotalCountAndPrice';
import { getCartFromLocalStorage } from '../../utils/getCartFromLocalStorage';
import { searchItemInState } from '../../utils/searchItemInState';
import { TCartItem, ICartSliceState } from './types';

const { items, totalCount, totalPrice} = getCartFromLocalStorage()

const initialState: ICartSliceState = {
  items,
  totalPrice,
  totalCount,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addPizza(state, action: PayloadAction<TCartItem>) {
      const findItem = searchItemInState(state, action.payload);

      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }
      state.totalCount = calcTotalCount(state.items);
      state.totalPrice = calcTotalPrice(state.items);
    },

    removePizza(state, action: PayloadAction<string>) {
      state.items = state.items.filter(
        (obj) => `${obj.id}_${obj.type}_${obj.size}` !== action.payload,
      );
      state.totalCount = calcTotalCount(state.items);
      state.totalPrice = calcTotalPrice(state.items);
    },

    clearPizzas(state) {
      state.items = [];
      state.totalPrice = 0;
      state.totalCount = 0;
    },

    minusItem(state, action: PayloadAction<TCartItem>) {
      const findItem = searchItemInState(state, action.payload);
      if (findItem) {
        findItem.count--;
      }
      state.totalCount = calcTotalCount(state.items);
      state.totalPrice = calcTotalPrice(state.items);
    },
  },
});

export const { addPizza, removePizza, clearPizzas, minusItem } = cartSlice.actions;

export default cartSlice.reducer;
