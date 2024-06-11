import { SelectChangeEvent } from "@mui/material";

export interface Product {
  asin: string;
  name: string;
  img: string;
  price: number;
  link: string;
  bsr_category: string;
}

export interface ProductListProps {
  products: Product[];
  loading: boolean;
}

export interface ProductFilterProps {
  onFilterChange: (filter: string) => void;
}

export interface CategoryFilterProps {
  category: string;
  options: string[];
  onSelectChange: (event: SelectChangeEvent) => void;
}
