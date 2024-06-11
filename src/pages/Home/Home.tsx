import { FC, useEffect, useState } from "react";
import { Box, SelectChangeEvent, Typography } from "@mui/material";
import ProductList from "../../components/ProductList/ProductList";
import { Product } from "../../utils/types";
import ProductFilter from "../../components/ProductFilter/ProductFilter";
import CategoryFilter from "../../components/CategoryFilter/CategoryFilter";

const Home: FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filter, setFilter] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

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

  const handleFilterChange = (value: string) => {
    setFilter(value);
  };

  const handleCategoryChange = (event: SelectChangeEvent) => {
    setSelectedCategory(event.target.value);
  };

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(filter.toLowerCase()) &&
      (selectedCategory === "" ||
        selectedCategory === "All categories" ||
        product.bsr_category === selectedCategory)
  );

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
        <ProductFilter onFilterChange={handleFilterChange} />
        <CategoryFilter
          category={selectedCategory}
          options={uniqueCategories}
          onSelectChange={handleCategoryChange}
        />
      </Box>
      <ProductList products={filteredProducts} loading={loading} />
    </Box>
  );
};
export default Home;
