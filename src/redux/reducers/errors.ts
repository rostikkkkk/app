import { ErrorsActionTypes, SET_PRODUCTS_ERROR } from "../actionTypes";

export interface ErrorsState {
  productsError: string;
}

const initialErrorsState: ErrorsState = {
  productsError: "",
};

export const errors = (
  state: ErrorsState = initialErrorsState,
  action: ErrorsActionTypes
): ErrorsState => {
  switch (action.type) {
    case SET_PRODUCTS_ERROR:
      return { ...state, productsError: action.payload };
    default:
      return state;
  }
};
