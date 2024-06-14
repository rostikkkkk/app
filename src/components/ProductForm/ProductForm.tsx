import React, { FC, useEffect } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";
import { useQueryParams, StringParam } from "use-query-params";
import { useDispatch, useSelector } from "react-redux";
import { filterProducts } from "../../redux/actions/actionCreator";
import { Product } from "../../utils/types";
import { useTranslation } from "react-i18next";

const validationSchema = Yup.object({
  title: Yup.string().min(3, "Minimum 3 symbols are required"),
});

const ProductForm: FC = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((store: any) => store?.products || {});
  const handleFilter = (title: string, category: string) => {
    dispatch(filterProducts({ title: title, category: category }));
  };
  const [query, setQuery] = useQueryParams({
    title: StringParam,
    category: StringParam,
  });
  const uniqueCategories = Array.from(
    new Set([
      ...products.map((product: Product) => product.bsr_category),
      "All categories",
    ])
  ).sort();

  const { t } = useTranslation();

  const formik = useFormik({
    initialValues: {
      title: query.title || "",
      category: query.category || "All categories",
    },
    validationSchema,
    onSubmit: (values) => {
      setQuery({ title: values.title, category: values.category });
      handleFilter(values.title, values.category);
    },
  });

  useEffect(() => {
    if (query.title || query.category) {
      handleFilter(query.title || "", query.category || "");
    }
  }, [query, products]);

  const showError = !!(formik.touched.title && formik.errors.title);
  const handleCategoryChange = (e: SelectChangeEvent) => {
    const { value } = e.target;
    formik.setFieldValue("category", value);
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <Box sx={{ display: "flex", gap: "2rem" }}>
        <TextField
          label={t("Назва товару")}
          variant="outlined"
          name="title"
          value={formik.values.title}
          onChange={formik.handleChange}
          error={showError}
          helperText={showError ? formik.errors.title : ""}
          sx={{
            width: "290px",
          }}
        />
        <FormControl sx={{ minWidth: 250 }}>
          <InputLabel htmlFor="category">{t("Категорії")}</InputLabel>
          <Select
            id="category"
            label={t("Категорії")}
            value={formik.values.category}
            onChange={handleCategoryChange}
            variant="outlined"
          >
            {uniqueCategories.map((option: string) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Button
          sx={{
            backgroundColor: "#1976d2",
            color: "#fff",
            "&:hover": {
              backgroundColor: "#115293",
            },
          }}
          type="submit"
        >
          {t("Шукати")}
        </Button>
      </Box>
    </form>
  );
};

export default ProductForm;
