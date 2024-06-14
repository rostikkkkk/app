import {
  FILTER_PRODUCTS,
  GET_PRODUCTS,
  SET_FILTERED_PRODUCTS,
  SET_PRODUCTS,
  GetProductsAction,
  FilterProductsAction,
  SetFilteredProductsAction,
  SetProductsAction,
} from "../actionTypes";
import { Product } from "../../utils/types";

export const getProducts = (): GetProductsAction => ({
  type: GET_PRODUCTS,
});

export const setProducts = (payload: Product[]): SetProductsAction => ({
  type: SET_PRODUCTS,
  payload,
});

export const filterProducts = (filters: {
  title: string;
  category: string;
}): FilterProductsAction => ({
  type: FILTER_PRODUCTS,
  payload: filters,
});

export const setFilteredProducts = (
  payload: any
): SetFilteredProductsAction => ({
  type: SET_FILTERED_PRODUCTS,
  payload,
});
