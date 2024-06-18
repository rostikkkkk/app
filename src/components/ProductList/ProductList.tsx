import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StringParam, useQueryParams } from "use-query-params";
import { fetchProducts } from "../../redux/slice/products";
import ProductItem from "../ProductItem/ProductItem";
const ProductList: FC = () => {
  const [showContent, setShowContent] = useState(false);
  const dispatch = useDispatch();
  const { products, filteredProducts, isLoading, error } = useSelector(
    (state: any) => state.products
  );
  const [query] = useQueryParams({
    title: StringParam,
    category: StringParam,
  });

  useEffect(() => {
    // @ts-ignore
    dispatch(fetchProducts());
  }, [dispatch]);

  const queryParamsExist =
    query.title !== undefined || query.category !== undefined;

  const productsList = queryParamsExist
    ? filteredProducts.products
    : products.products;

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

  return (
    <section>
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
    </section>
  );
};

export default ProductList;
