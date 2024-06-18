import React, { FC, useEffect } from "react";
import * as Yup from "yup";
import { useQueryParams, StringParam } from "use-query-params";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, filterProducts } from "../../redux/slice/products";
import { FormValues } from "../../utils/types";
import { useTranslation } from "react-i18next";
import { Resolver, useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { yupResolver } from "@hookform/resolvers/yup";
import { RootState } from "../../redux/store";

const validationSchema = Yup.object({
  title: Yup.string().required().min(3, "Minimum 3 symbols are required"),
  category: Yup.string(),
});

const ProductForm: FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { products } = useSelector((state: RootState) => state.products);

  const [query, setQuery] = useQueryParams({
    title: StringParam,
    category: StringParam,
  });
  const form = useForm<FormValues>({
    defaultValues: {
      title: query.title || "",
      category: query.category || "All categories",
    },
    resolver: yupResolver(validationSchema) as Resolver<FormValues>,
  });

  const { register, control, handleSubmit, formState } = form;
  const { errors } = formState;

  console.log(products);
  const handleFilter = (title: string) => {
    dispatch(filterProducts({ title: title }));
  };

  const onSubmit = (data: FormValues) => {
    setQuery({ title: data.title });
    handleFilter(data.title);
  };

  // const uniqueCategories = Array.from(
  //   new Set([
  //     ...products.map((product: any) => product.bsr_category),
  //     "All categories",
  //   ])
  // ).sort();

  useEffect(() => {
    // @ts-ignore
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    if (query.title) {
      handleFilter(query.title || "");
    }
  }, [query, products]);

  return (
    <>
      <form
        className="w-full mx-auto"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <div className="flex justify-center items-center space-x-4">
          <div>
            <label htmlFor="title" className="sr-only">
              {t("Назва товару")}
            </label>
            <input
              id="title"
              type="text"
              placeholder={t("Назва товару")}
              {...register("title")}
              className="w-70 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-10 px-4"
            />
          </div>
          <div className="flex flex-col">
            {/*<label htmlFor="categories" className="sr-only">*/}
            {/*  {t("Категорії")}*/}
            {/*</label>*/}

            {/*<select*/}
            {/*  id="categories"*/}
            {/*  {...register("category")}*/}
            {/*  className="w-72 border border-gray-300 rounded-md h-10 px-4"*/}
            {/*>*/}
            {/*  {uniqueCategories.map((option: string) => (*/}
            {/*    <option key={option} value={option}>*/}
            {/*      {option}*/}
            {/*    </option>*/}
            {/*  ))}*/}
            {/*</select>*/}
          </div>
          <button
            className="bg-blue-600 text-white hover:bg-blue-800 py-2 px-4 rounded h-10"
            type="submit"
          >
            {t("Шукати")}
          </button>
        </div>
        <p className="text-red-600 text-center py-4">{errors.title?.message}</p>
      </form>
      <DevTool control={control} />
    </>
  );
};

export default ProductForm;
