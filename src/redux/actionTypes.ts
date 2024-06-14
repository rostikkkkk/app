import { UnknownAction } from "redux-saga";
import { Product } from "../utils/types";

export const GET_PRODUCTS = "GET_PRODUCTS";
export const SET_PRODUCTS = "SET_PRODUCTS";
export const FILTER_PRODUCTS = "FILTER_PRODUCTS";
export const SET_FILTERED_PRODUCTS = "SET_FILTERED_PRODUCTS";
export const SET_PRODUCTS_ERROR = "SET_PRODUCTS_ERROR";

export interface GetProductsAction {
  type: typeof GET_PRODUCTS;
}

export interface SetProductsAction {
  type: typeof SET_PRODUCTS;
  payload: Product[];
}

export interface FilterProductsAction extends UnknownAction {
  type: typeof FILTER_PRODUCTS;
  payload: {
    title: string;
    category: string;
    // [key: string]: string;
  };
}

export interface SetFilteredProductsAction {
  type: typeof SET_FILTERED_PRODUCTS;
  payload: Product[];
}

export interface SetProductsErrorAction {
  type: typeof SET_PRODUCTS_ERROR;
  payload: string;
}

export type ErrorsActionTypes = SetProductsErrorAction;
export type ProductsActionTypes =
  | GetProductsAction
  | FilterProductsAction
  | SetProductsAction
  | SetFilteredProductsAction;
