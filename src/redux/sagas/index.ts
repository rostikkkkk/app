import { takeLatest, put } from "@redux-saga/core/effects";
import { fetchProducts, filterProducts } from "../slice/products";
import { PayloadAction } from "@reduxjs/toolkit";

function* handleFetchProducts() {
  yield put(fetchProducts());
}
function* handleFilterProducts(
  // action: PayloadAction<{ title: string; category: string }>
  action: PayloadAction<{ title: string }>
) {
  yield put(filterProducts(action.payload));
}

export function* watchProductsSaga() {
  yield takeLatest("products/fetchProducts", handleFetchProducts);
  yield takeLatest("products/filterProducts", handleFilterProducts);
}

export default function* rootSaga() {
  yield watchProductsSaga();
}
