import { Box, CircularProgress, Typography } from "@mui/material";
import ProductItem from "../../components/ProductItem/ProductItem";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import React, { FC, useEffect, useState } from "react";
import { Dispatch } from "redux";
import { GET_PRODUCTS } from "../../redux/actionTypes";
import { Product } from "../../utils/types";

const SingleProduct: FC = () => {
  const { asinCode } = useParams<{ asinCode: string }>();
  const dispatch: Dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: GET_PRODUCTS });
  }, [dispatch]);

  const { products, isLoading } = useSelector(
    (store: any) => store?.products || {}
  );

  const findProduct = products.find(
    (product: Product) => product.asin === asinCode
  );

  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading || !showContent) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", mt: "2rem" }}>
        <CircularProgress />
      </Box>
    );
  }

  if (!findProduct) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", mt: "2rem" }}>
        <Typography variant="h6">Product not found</Typography>
      </Box>
    );
  }

  const { name, img, price, asin, bsr_category, link } = findProduct;

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
