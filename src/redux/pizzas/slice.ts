import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchPizzas } from './asyncActions';
import { IPizzasSliceState, Status } from './types';

const initialState: IPizzasSliceState = {
  items: [],
  count: 0,
  status: Status.LOADING, // loading | success | error
};

export const pizzasSlice = createSlice({
  name: 'pizzas',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPizzas.fulfilled, (state, action: PayloadAction<IPizzasSliceState>) => {
      state.items = action.payload.items;
      state.count = action.payload.count;
      state.status = Status.SUCCESS;
    })
      
    builder.addCase(fetchPizzas.pending, (state) => {
      state.status = Status.LOADING;
      state.items = [];
    })

    builder.addCase(fetchPizzas.rejected, (state) => {
      state.status = Status.ERROR;
      state.items = [];
    })
  }
});

export default pizzasSlice.reducer;
