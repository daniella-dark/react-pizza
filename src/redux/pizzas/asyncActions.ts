import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { TFetchPizzasArgs, IPizzasSliceState } from "./types";

export const fetchPizzas = createAsyncThunk<IPizzasSliceState, TFetchPizzasArgs>('pizza/fetchPizzasStatus', async (params) => {
  const { category, sortBy, order, search, itemsLimit, activePage } = params;

  const { data } = await axios.get<IPizzasSliceState>(
    `https://6356bd0a2712d01e14fb985e.mockapi.io/items?page=${activePage}&limit=${itemsLimit}${category}${sortBy}${order}${search}`,
  );
  return data;
});