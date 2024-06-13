import { ProductAction, ProductState } from "./types";

const initialState: ProductState = {
  products: [],
  isLoading: false,
  error: null,
  filteredProducts: [],
};

const productReducer = (
  state = initialState,
  action: ProductAction
): ProductState => {
  switch (action.type) {
    case "FETCH_DATA_REQUEST":
      return { ...state, isLoading: true, error: null };
    case "FETCH_DATA_SUCCESS":
      return { ...state, products: action.payload, isLoading: false };
    case "FETCH_DATA_FAILURE":
      return { ...state, error: action.payload, isLoading: false };
    case "FILTER_PRODUCTS":
      const { title, category } = action.payload;
      const filteredProducts = state.products.filter(
        (product) =>
          product.name.toLowerCase().includes(title.toLowerCase()) &&
          (category === "" ||
            category === "All categories" ||
            product.bsr_category === category)
      );
      console.log(filteredProducts);
      return { ...state, filteredProducts };
    default:
      return state;
  }
};

export default productReducer;
