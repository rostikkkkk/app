import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ProductItem from "../../components/ProductItem/ProductItem";
import { Product } from "../../utils/types";
import { fetchProducts } from "../../redux/slice/products";
import { RootState, AppDispatch } from "../../redux/store";

const SingleProduct: FC = () => {
  const [showContent, setShowContent] = useState(false);
  const { asinCode } = useParams<{ asinCode: string }>();
  const dispatch: AppDispatch = useDispatch();

  const { products, isLoading } = useSelector(
    (state: RootState) => state.products
  );

  const singleProduct = products.find(
    (product: Product) => product.asin === asinCode
  );

  useEffect(() => {
    // @ts-ignore
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading || !showContent) {
    return (
      <div className="flex justify-center mt-8">
        <h6 className="text-lg">Loading...</h6>
      </div>
    );
  }

  if (!singleProduct) {
    return (
      <div className="flex justify-center mt-8">
        <h6 className="text-lg">Product not found</h6>
      </div>
    );
  }

  return (
    <section className="flex flex-col items-center">
      <ProductItem
        key={singleProduct.asin}
        img={singleProduct.img}
        name={singleProduct.name}
        price={singleProduct.price}
        link={singleProduct.link}
        asin={singleProduct.asin}
        bsr_category={singleProduct.bsr_category}
      />
    </section>
  );
};

export default SingleProduct;
