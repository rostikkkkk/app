import { combineReducers } from "redux";
import { errors } from "./errors";
import { products } from "./products";

export const rootReducer = combineReducers({
  products,
  errors,
});

export type RootState = ReturnType<typeof rootReducer>;
