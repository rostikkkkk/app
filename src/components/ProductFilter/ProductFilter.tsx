import { FC } from "react";
import { ProductFilterProps } from "../../utils/types";
import classes from "./ProductFilter.module.scss";
const ProductFilter: FC<ProductFilterProps> = ({ filter, onFilterChange }) => {
  return (
    <input
      className={classes.filter}
      type="text"
      placeholder="Find product"
      value={filter}
      onChange={onFilterChange}
    />
  );
};

export default ProductFilter;
