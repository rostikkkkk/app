import { FC } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { TextField } from "@mui/material";
import { ProductFilterProps } from "../../utils/types";
const ProductFilter: FC<ProductFilterProps> = ({ onFilterChange }) => {
  const validationSchema = Yup.object({
    title: Yup.string()
      .min(3, "Minimum 3 symbols are required")
      .required("Enter the title"),
  });

  const formik = useFormik({
    initialValues: {
      title: "",
    },
    validationSchema,
    onSubmit: (values) => onFilterChange(values.title),
  });

  const showError = !!(formik.touched.title && formik.errors.title);
  return (
    <form onSubmit={formik.handleSubmit}>
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
    </form>
  );
};

export default ProductFilter;
