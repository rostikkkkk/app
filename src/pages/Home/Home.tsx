import React, { FC } from "react";
import { Box, Typography } from "@mui/material";
import ProductList from "../../components/ProductList/ProductList";
import ProductForm from "../../components/ProductForm/ProductForm";

const Home: FC = () => {
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
        <ProductList />
      </Box>
    </Box>
  );
};

export default Home;
