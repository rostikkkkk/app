import {
  ProductsActionTypes,
  SET_PRODUCTS,
  SET_FILTERED_PRODUCTS,
  FILTER_PRODUCTS,
  GET_PRODUCTS,
} from "../actionTypes";
import { Product } from "../../utils/types";

export interface ProductsState {
  products: Product[];
  filteredProducts: Product[];
  isLoading: boolean;
}

const initialProductsState: ProductsState = {
  products: [],
  filteredProducts: [],
  isLoading: false,
};

export const products = (
  state: ProductsState = initialProductsState,
  action: ProductsActionTypes
): ProductsState => {
  switch (action.type) {
    case GET_PRODUCTS:
    case FILTER_PRODUCTS:
      return { ...state, isLoading: true };
    case SET_PRODUCTS:
      return { ...state, products: action.payload, isLoading: false };
    case SET_FILTERED_PRODUCTS:
      return { ...state, filteredProducts: action.payload, isLoading: false };
    default:
      return state;
  }
};
