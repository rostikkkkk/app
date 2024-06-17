import { FC } from "react";
import ProductList from "../../components/ProductList/ProductList";
import ProductForm from "../../components/ProductForm/ProductForm";
import { useTranslation } from "react-i18next";

const Home: FC = () => {
  const { t } = useTranslation();
  return (
    <section className="flex flex-col items-center">
      <h1 className="text-2xl mb-6">{t("Товари з Амазон")}</h1>
      <div className="flex flex-col gap-8 items-center">
        <ProductForm />
        <ProductList />
      </div>
    </section>
  );
};

export default Home;
