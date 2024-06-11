import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { FC } from "react";
import { CategoryFilterProps } from "../../utils/types";

const CategoryFilter: FC<CategoryFilterProps> = ({
  category,
  options,
  onSelectChange,
}) => {
  return (
    <FormControl sx={{ minWidth: 250 }}>
      <InputLabel htmlFor="category">Categories</InputLabel>
      <Select
        id="category"
        label="Categories"
        value={category}
        onChange={onSelectChange}
        variant="outlined"
      >
        {options.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
export default CategoryFilter;
