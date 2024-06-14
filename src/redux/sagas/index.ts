import { takeLatest, put, call, select } from "@redux-saga/core/effects";
import {
  SET_PRODUCTS_ERROR,
  GET_PRODUCTS,
  FILTER_PRODUCTS,
  FilterProductsAction,
} from "../actionTypes";
import { getProducts } from "../../api";
import { setProducts, setFilteredProducts } from "../actions/actionCreator";
import { RootState } from "../reducers";
export const getFilteredProducts = (
  state: RootState,
  filters: { title: string; category: string }
) => {
  const { products } = state;
  const { title, category } = filters;
  return products.products.filter((product) => {
    return (
      product.name.toLowerCase().includes(title.toLowerCase()) &&
      (category === "" ||
        category === "All categories" ||
        product.bsr_category === category)
    );
  });
};

export function* handleProducts() {
  try {
    const { products } = yield call(getProducts);
    yield put(setProducts(products));
  } catch {
    yield put({
      type: SET_PRODUCTS_ERROR,
      payload: "Error fetching products",
    });
  }
}

export function* handleFilterProducts(
  action: FilterProductsAction
): Generator<any> {
  const filters = action.payload;
  const products = yield select((state) => getFilteredProducts(state, filters));
  yield put(setFilteredProducts(products));
}
export function* watchProductsSaga() {
  yield takeLatest(GET_PRODUCTS, handleProducts);
  yield takeLatest(FILTER_PRODUCTS, handleFilterProducts);
}

export default function* rootSaga() {
  yield watchProductsSaga();
}
