import React, { FC } from "react";
import { Product } from "../../utils/types";
import { makeStyles } from "@mui/styles";
import { Box, Typography, Link } from "@mui/material";

const useStyles = makeStyles({
  product: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    maxWidth: 800,
    gap: "2rem",
    width: "100%",
    padding: "1.25rem",
    backgroundColor: "#f5f5f5",
  },
  productImage: {
    height: 220,
    width: 250,
    "& img": {
      width: "100%",
      height: "100%",
      objectFit: "contain",
    },
  },
  productInfo: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    color: "#0f1111",
  },
  productTitle: {
    fontSize: "1.25rem",
    fontStyle: "normal",
    fontWeight: 600,
  },
  productPrice: {
    fontSize: "1rem",
    fontStyle: "normal",
    fontWeight: 600,
  },
  productLink: {
    padding: "0.625rem 1rem",
    width: "fit-content",
    borderRadius: "0.625rem",
    backgroundColor: "transparent",
    outline: "2px solid #0f1111",
    textDecoration: "none",
    color: "#0f1111",
    fontSize: "1rem",
    fontStyle: "normal",
    fontWeight: 500,
    transition: "all 0.3s ease",
    "&:hover": {
      backgroundColor: "#0f1111",
      color: "#ffffff",
      boxShadow: "0 4px 10px 0 rgba(213, 217, 217, 0.7)",
    },
  },
  productCode: {
    fontSize: "1rem",
    fontStyle: "normal",
    fontWeight: 500,
  },

  category: {
    fontSize: "1rem",
    fontStyle: "italic",
    fontWeight: 600,
  },

  productView: {
    padding: "0.625rem 1rem",
    width: "fit-content",
    borderRadius: "1rem",
    backgroundColor: "transparent",
    outline: "2px solid #1a73e8",
    textDecoration: "none",
    color: "#1a73e8",
    fontSize: "1.25rem",
    fontStyle: "normal",
    fontWeight: 500,
    transition: "all 0.3s ease",
    "&:hover": {
      backgroundColor: "#1a73e8",
      color: "#ffffff",
    },
  },
  productDesc: {
    display: "flex",
    justifyContent: "space-between",
    gap: "1rem",
  },
  productText: {
    width: "55%",
  },
  productLinks: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
});

const ProductItem: FC<Product> = ({
  img,
  name,
  price,
  link,
  asin,
  bsr_category,
}) => {
  const classes = useStyles();

  return (
    <Box className={classes.product}>
      <Box className={classes.productImage}>
        <img src={img} alt={name} />
      </Box>
      <Box className={classes.productInfo}>
        <Typography className={classes.productTitle} variant="h2">
          {name}
        </Typography>
        <Box className={classes.productDesc}>
          <Box className={classes.productText}>
            <Typography className={classes.productPrice} variant="body1">
              Price: ${price}
            </Typography>
            <Typography className={classes.productCode} variant="body1">
              Asin: {asin}
            </Typography>
            <Typography className={classes.category} variant="body1">
              Category: {bsr_category}
            </Typography>
          </Box>

          <Box className={classes.productLinks}>
            <Link
              className={classes.productLink}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
            >
              View on Amazon
            </Link>
            <Link className={classes.productView} href={`/product/${asin}`}>
              See details
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductItem;
