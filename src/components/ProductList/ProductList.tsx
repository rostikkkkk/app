import classes from "./ProductList.module.scss";
import { FC } from "react";
import ProductItem from "../ProductItem/ProductItem";
import {ProductListProps} from "../../utils/types";

const ProductList: FC<ProductListProps> = ({ products, loading }) => {
  return (
      <div className={classes.list}>
        {loading && <p>Loading products...</p>}
        {!loading && products.length === 0 && <p>No products found.</p>}
        {!loading &&
            products.length > 0 &&
            products.map(({ asin, img, name, price, link }) => (
                <ProductItem
                    key={asin}
                    img={img}
                    name={name}
                    price={price}
                    link={link}
                    asin={asin}
                />
            ))}
      </div>
  );
};

export default ProductList;

