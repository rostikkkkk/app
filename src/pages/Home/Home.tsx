import React, { FC, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import ProductList from "../../components/ProductList/ProductList";
import ProductForm from "../../components/ProductForm/ProductForm";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/types";
import { fetchData } from "../../redux/actions";
import { Dispatch } from "redux";
import { StringParam, useQueryParams } from "use-query-params";

const Home: FC = () => {
  const dispatch: Dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.products);
  const filteredProducts = useSelector(
    (state: RootState) => state.filteredProducts
  );
  const isLoading = useSelector((state: RootState) => state.isLoading);
  const [query, setQuery] = useQueryParams({
    title: StringParam,
    category: StringParam,
  });
  useEffect(() => {
    // @ts-ignore
    dispatch(fetchData());
  }, [dispatch]);

  const queryParamsExist =
    query.title !== undefined || query.category !== undefined;
  console.log(queryParamsExist);
  return (
    <Box
      component="section"
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Typography variant="h1" sx={{ fontSize: "2rem", mb: "1.5rem" }}>
        Products from Amazon
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          alignItems: "center",
        }}
      >
        <ProductForm />
        <ProductList
          products={queryParamsExist ? filteredProducts : products}
          loading={isLoading}
        />
      </Box>
    </Box>
  );
};

export default Home;
