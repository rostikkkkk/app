import React, { FC, KeyboardEvent } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";
import { ProductFormProps } from "../../utils/types";

const ProductForm: FC<ProductFormProps> = ({
  products,
  setFilteredProducts,
  options,
  setFormSubmitted,
}) => {
  const filterProducts = (title: string, category: string) => {
    const filteredProducts = products.filter(
      (product) =>
        product.name.toLowerCase().includes(title.toLowerCase()) &&
        (category === "" ||
          category === "All categories" ||
          product.bsr_category === category)
    );
    setFilteredProducts(filteredProducts);
    setFormSubmitted(true);
  };

  const validationSchema = Yup.object({
    title: Yup.string().min(3, "Minimum 3 symbols are required"),
  });

  const formik = useFormik({
    initialValues: {
      title: "",
      category: "",
    },
    validationSchema,
    onSubmit: (values) => {
      filterProducts(values.title, values.category);
    },
  });

  const showError = !!(formik.touched.title && formik.errors.title);

  const handleKeyDown = (e: KeyboardEvent<HTMLFormElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      formik.handleSubmit();
    }
  };
  const handleCategoryChange = (e: SelectChangeEvent) => {
    const { value } = e.target;
    formik.setFieldValue("category", value);
    formik.handleSubmit();
  };
  return (
    <form onSubmit={formik.handleSubmit} onKeyDown={handleKeyDown}>
      <Box sx={{ display: "flex", gap: "2rem" }}>
        <TextField
          label="Product name"
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
          <InputLabel htmlFor="category">Categories</InputLabel>
          <Select
            id="category"
            label="Categories"
            value={formik.values.category}
            onChange={handleCategoryChange}
            variant="outlined"
          >
            {options.map((option: string) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </form>
  );
};

export default ProductForm;
