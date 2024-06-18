import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import ProductItem from "../../components/ProductItem/ProductItem";
import { Product } from "../../utils/types";
import { fetchProducts } from "../../redux/slice/products";

const SingleProduct: FC = () => {
  const { asinCode } = useParams<{ asinCode: string }>();
  const dispatch: Dispatch = useDispatch();

  useEffect(() => {
    // @ts-ignore
    dispatch(fetchProducts());
  }, [dispatch]);

  const { products, isLoading } = useSelector(
    (state: any) => state?.products || {}
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
      <div className="flex justify-center mt-8">
        <h6 className="text-lg">Loading...</h6>
      </div>
    );
  }

  if (!findProduct) {
    return (
      <div className="flex justify-center mt-8">
        <h6 className="text-lg">Product not found</h6>
      </div>
    );
  }

  const { name, img, price, asin, bsr_category, link } = findProduct;

  return (
    <section className="flex flex-col items-center">
      <ProductItem
        key={asin}
        img={img}
        name={name}
        price={price}
        link={link}
        asin={asin}
        bsr_category={bsr_category}
      />
    </section>
  );
};

export default SingleProduct;
