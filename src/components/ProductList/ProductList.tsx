import { FC, useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StringParam, useQueryParams } from "use-query-params";
import { fetchProducts } from "../../redux/slice/products";
import ProductItem from "../ProductItem/ProductItem";
import { Product } from "../../utils/types";
import { RootState, AppDispatch } from "../../redux/store";

const ProductList: FC = () => {
  const [showContent, setShowContent] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const { products, filteredProducts, isLoading, error } = useSelector(
    (state: RootState) => state.products
  );

  const [query] = useQueryParams({
    title: StringParam,
    category: StringParam,
  });

  const queryParamsExist = useMemo(
    () => query.title !== undefined || query.category !== undefined,
    [query.title, query.category]
  );

  const productsList = useMemo(
    () => (queryParamsExist ? filteredProducts : products),
    [queryParamsExist, filteredProducts, products]
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading || !showContent) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!productsList || productsList.length === 0) {
    return <p>No products found.</p>;
  }

  console.log(products);

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
