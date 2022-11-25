export type TSortItem = {
  name: string;
  sortOrder: "asc" | "desc";
  sortProperty: "rating" | "title" | "price";
}

export type TFilterParams = {
  sortProperty: string;
  sortOrder: string;
  categoryId: string;
  activePage: string;
  sortType: TSortItem
}

export interface IFilterSliceState {
  categoryId: number;
  sortType: TSortItem;
  searchValue: string;
  activePage: number;
}