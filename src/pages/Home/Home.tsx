import React, { FC, useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import ProductList from "../../components/ProductList/ProductList";
import { Product } from "../../utils/types";
import ProductForm from "../../components/ProductForm/ProductForm";

const Home: FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [formSubmitted, setFormSubmitted] = useState(false); // Доданий стан для відстеження відправки форми

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/db.json");
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.error("Error fetching data", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const uniqueCategories = Array.from(
    new Set([
      ...products.map((product) => product.bsr_category),
      "All categories",
    ])
  ).sort();

  return (
    <Box
      component="section"
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Typography variant="h1" sx={{ fontSize: "2rem", mb: "1.5rem" }}>
        Products from Amazon
      </Typography>
      <Box sx={{ display: "flex", gap: "2rem" }}>
        <ProductForm
          products={products}
          setFilteredProducts={setFilteredProducts}
          options={uniqueCategories}
          setFormSubmitted={setFormSubmitted}
        />
      </Box>
      <ProductList
        products={formSubmitted ? filteredProducts : products}
        loading={loading}
      />
    </Box>
  );
};

export default Home;
