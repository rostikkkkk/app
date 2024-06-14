import React, { FC, useEffect, useState } from "react";
import ProductItem from "../ProductItem/ProductItem";
import { Container, Typography, CircularProgress } from "@mui/material";
import { Dispatch } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { StringParam, useQueryParams } from "use-query-params";
import { GET_PRODUCTS } from "../../redux/actionTypes";

const ProductList: FC = () => {
  const [showContent, setShowContent] = useState(false);
  const dispatch: Dispatch = useDispatch();
  const { products, filteredProducts, isLoading } = useSelector(
    (store: any) => store?.products || {}
  );
  const [query, setQuery] = useQueryParams({
    title: StringParam,
    category: StringParam,
  });
  useEffect(() => {
    // @ts-ignore
    dispatch({ type: GET_PRODUCTS });
  }, [dispatch]);

  const queryParamsExist =
    query.title !== undefined || query.category !== undefined;

  const productsList = queryParamsExist ? filteredProducts : products;

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading || !showContent) {
    return <CircularProgress />;
  }

  if (!productsList || productsList.length === 0) {
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
      {productsList.map((product: any) => (
        <ProductItem
          key={product.asin}
          img={product.img}
          name={product.name}
          price={product.price}
          link={product.link}
          asin={product.asin}
          bsr_category={product.bsr_category}
        />
      ))}
    </Container>
  );
};

export default ProductList;
