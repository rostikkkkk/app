import React, { FC, useEffect, useState } from "react";
import ProductItem from "../ProductItem/ProductItem";
import { ProductListProps } from "../../utils/types";
import { Container, Typography, CircularProgress } from "@mui/material";

const ProductList: FC<ProductListProps> = ({ products, loading }) => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (loading || !showContent) {
    return <CircularProgress />;
  }

  if (!products || products.length === 0) {
    return (
      <Typography variant="body1" color="#000">
        No products found.
      </Typography>
    );
  }

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 3,
        paddingBlock: 5,
      }}
    >
      {products.map(({ asin, img, name, price, link, bsr_category }) => (
        <ProductItem
          key={asin}
          img={img}
          name={name}
          price={price}
          link={link}
          asin={asin}
          bsr_category={bsr_category}
        />
      ))}
    </Container>
  );
};

export default ProductList;
