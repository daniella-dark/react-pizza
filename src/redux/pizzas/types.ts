export interface IPizzaItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  prices: Record<string, number>;
  rating: number;
  sizes: number[];
  types: number[];
}

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error'
}

export interface IPizzasSliceState {
  items: IPizzaItem[];
  count: number;
  status: Status;
}

export type TFetchPizzasArgs = {
  category: string;
  sortBy: string;
  order: string;
  search: string;
  itemsLimit: number;
  activePage: number;
}