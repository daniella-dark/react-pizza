import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categoryId: 0,
  sortType: {
    name: 'сначала популярные',
    sortOrder: 'asc',
    sortProperty: 'rating',
  },
  searchValue: '',
  activePage: 1,
};

export const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCategoryId(state, action) {
      state.categoryId = action.payload;
    },

    setSortType: (state, action) => {
      state.sortType = action.payload;
    },

    setSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },

    setActivePage(state, action) {
      state.activePage = action.payload;
    },

    setFilters(state, action) {
      state.sortType = action.payload.activeSortType;
      state.categoryId = Number(action.payload.categoryId);
      state.activePage = Number(action.payload.activePage);
    },
  },
});

export const { setCategoryId, setSortType, setSearchValue, setActivePage, setFilters } =
  filterSlice.actions;

export default filterSlice.reducer;
