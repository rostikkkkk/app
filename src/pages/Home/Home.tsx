import React, { FC, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import ProductList from "../../components/ProductList/ProductList";
import ProductForm from "../../components/ProductForm/ProductForm";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../redux/actions";
import { RootState } from "../../redux/types";
import { Dispatch } from "redux";

const Home: FC = () => {
  const dispatch: Dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.products);
  const isLoading = useSelector((state: RootState) => state.isLoading);

  useEffect(() => {
    // @ts-ignore
    dispatch(fetchData());
  }, [dispatch]);
  return (
    <Box
      component="section"
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Typography variant="h1" sx={{ fontSize: "2rem", mb: "1.5rem" }}>
        Products from Amazon
      </Typography>
      <Box sx={{ display: "flex", gap: "2rem" }}>{<ProductForm />}</Box>
      <ProductList products={products} loading={isLoading} />
    </Box>
  );
};

export default Home;
