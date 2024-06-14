import { createStore, compose, applyMiddleware, Store } from "redux";
import createSagaMiddleware from "redux-saga";
import { rootReducer, RootState } from "./reducers";
import rootSaga from "./sagas";

interface PreloadedState {
  products?: undefined;
  errors?: undefined;
}

// interface PreloadedState {
//   products?: ProductsState;
//   errors?: ErrorsState;
// }

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =
  (typeof window === "object" &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const configureStore = (preloadedState?: PreloadedState): Store<RootState> =>
  createStore(
    rootReducer,
    preloadedState,
    composeEnhancers(applyMiddleware(sagaMiddleware))
  );

const store = configureStore({});
sagaMiddleware.run(rootSaga);

export default store;
