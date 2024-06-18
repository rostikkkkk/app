import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getProducts } from "../../api";
import { Product } from "../../utils/types";

interface ProductsState {
  products: Product[];
  filteredProducts: Product[];
  isLoading: boolean;
  error: string | null;
}

const initialState: ProductsState = {
  products: [],
  filteredProducts: [],
  isLoading: false,
  error: null,
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await getProducts();
    return response;
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    filterProducts(state, action) {
      const { title, category } = action.payload;
      state.filteredProducts = state.products.filter((product) => {
        return (
          product.name.toLowerCase().includes(title.toLowerCase()) &&
          (category === "" ||
            category === "All categories" ||
            product.bsr_category === category)
        );
      });
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload;
        // state.filteredProducts = action.payload;
        state.error = null;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message ?? "Error fetching products";
      });
  },
});

export const { filterProducts } = productsSlice.actions;
export default productsSlice.reducer;
