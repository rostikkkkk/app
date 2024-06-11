import { FC } from "react";
import ProductItem from "../ProductItem/ProductItem";
import { ProductListProps } from "../../utils/types";
import { Container, Typography } from "@mui/material";

const ProductList: FC<ProductListProps> = ({ products, loading }) => {
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
      {loading && (
        <Typography variant="body1" color="#000">
          Loading products...
        </Typography>
      )}
      {!loading && products.length === 0 && (
        <Typography variant="body1" color="#000">
          No products found.
        </Typography>
      )}
      {!loading &&
        products.length > 0 &&
        products.map(({ asin, img, name, price, link, bsr_category }) => (
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
