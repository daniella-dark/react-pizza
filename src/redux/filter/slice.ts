import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TFilterParams, IFilterSliceState, TSortItem } from './types';

const initialState: IFilterSliceState = {
  categoryId: 0,
  sortType: {
    name: "сначала популярные",
    sortOrder: "asc",
    sortProperty: "rating",
  },
  searchValue: '',
  activePage: 1,
};

export const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCategoryId(state, action: PayloadAction<number>) {
      state.categoryId = action.payload;
      state.activePage = 1;
    },

    setSortType: (state, action: PayloadAction<TSortItem>) => {
      state.sortType = action.payload;
      state.activePage = 1;
    },

    setSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
      state.activePage = 1;
    },

    setActivePage(state, action: PayloadAction<number>) {
      state.activePage = action.payload;
    },

    setFilters(state, action: PayloadAction<TFilterParams>) { 
      state.sortType = action.payload.sortType;
      state.categoryId = Number(action.payload.categoryId);
      state.activePage = Number(action.payload.activePage);
    },

    clearFilters: (state) => {
      state.categoryId = 0;
      state.sortType = {
        name: "сначала популярные",
        sortOrder: "asc",
        sortProperty: "rating",
      };
      state.searchValue = '';
      state.activePage = 1;
    },
  },
});

export const {
  setCategoryId,
  setSortType,
  setSearchValue,
  setActivePage,
  setFilters,
  clearFilters,
} = filterSlice.actions;

export default filterSlice.reducer;
