import { Product } from "../utils/types";

export interface RootState {
  products: Product[];
  filteredProducts: Product[];
  isLoading: boolean;
  error: string | null;
}
export interface FetchDataRequestAction {
  type: "FETCH_DATA_REQUEST";
}

export interface FetchDataSuccessAction {
  type: "FETCH_DATA_SUCCESS";
  payload: Product[];
}

export interface FetchDataFailureAction {
  type: "FETCH_DATA_FAILURE";
  payload: Error;
}

export interface FilterProductsAction {
  type: "FILTER_PRODUCTS";
  payload: { title: string; category: string };
}

export type ProductAction =
  | FetchDataRequestAction
  | FetchDataSuccessAction
  | FetchDataFailureAction
  | FilterProductsAction;

export interface ProductState {
  products: Product[];
  isLoading: boolean;
  error: Error | null;
  filteredProducts: Product[];
}
