import { FC, useEffect, useState } from "react";
import ProductItem from "../ProductItem/ProductItem";
import { useDispatch, useSelector } from "react-redux";
import { StringParam, useQueryParams } from "use-query-params";
import { GET_PRODUCTS } from "../../redux/actionTypes";
import { Product } from "../../utils/types";

const ProductList: FC = () => {
  const [showContent, setShowContent] = useState(false);
  const dispatch = useDispatch();
  const { products, filteredProducts, isLoading } = useSelector(
    (store: any) => store?.products || {}
  );
  const [query] = useQueryParams({
    title: StringParam,
    category: StringParam,
  });

  useEffect(() => {
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
    return <p>Loading...</p>;
  }

  if (!productsList || productsList.length === 0) {
    return <p>No products found.</p>;
  }

  return (
    <section>
      {productsList.map((product: Product) => (
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
    </section>
  );
};

export default ProductList;
