import classes from "./Home.module.scss";
import ProductList from "../../components/ProductList/ProductList";
import { ChangeEvent, FC, useEffect, useState } from "react";
import { Product } from "../../utils/types";
import ProductFilter from "../../components/ProductFilter/ProductFilter";

const Home: FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filter, setFilter] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/db.json");
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.error("Error fetching data", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleFilterChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <section className={classes.home}>
      <h1 className={classes.home__title}>Products from Amazon</h1>
      <ProductFilter filter={filter} onFilterChange={handleFilterChange} />
      <ProductList products={filteredProducts} loading={loading} />
    </section>
  );
};
export default Home;
