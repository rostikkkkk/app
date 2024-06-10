import { FC } from "react";
import { Product } from "../../utils/types";
import classes from "./ProductItem.module.scss";
const ProductItem: FC<Product> = ({ img, name, price, link, asin }) => {
  return (
    <div className={classes.product}>
      <div className={classes.product__image}>
        <img src={img} alt={name} />
      </div>
      <div className={classes.product__desc}>
        <h2 className={classes.product__title}>{name}</h2>
        <p className={classes.product__price}>Price: ${price}</p>
        <p className={classes.product__code}>Asin: {asin}</p>
        <a
          className={classes.product__link}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          View on Amazon
        </a>
      </div>
    </div>
  );
};

export default ProductItem;
