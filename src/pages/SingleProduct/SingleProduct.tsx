import { Box, Typography } from "@mui/material";
import ProductItem from "../../components/ProductItem/ProductItem";
import { useParams } from "react-router-dom";
import { FC, useEffect, useState } from "react";
import { Product } from "../../utils/types";

const SingleProduct: FC = () => {
  const { asinCode } = useParams<{ asinCode: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/db.json");
        const data = await response.json();
        const productByAsin = data.products.find(
          (product: Product) => product.asin === asinCode
        );
        setProduct(productByAsin || null);
      } catch (error) {
        console.error("Error fetching data", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [asinCode]);

  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", mt: "2rem" }}>
        <Typography variant="h6">Loading</Typography>
      </Box>
    );
  }

  if (!product) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", mt: "2rem" }}>
        <Typography variant="h6">Product not found</Typography>
      </Box>
    );
  }
  const { name, img, price, asin, bsr_category, link } = product;

  return (
    <Box
      component="section"
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <ProductItem
        key={asin}
        img={img}
        name={name}
        price={price}
        link={link}
        asin={asin}
        bsr_category={bsr_category}
      />
    </Box>
  );
};
export default SingleProduct;
