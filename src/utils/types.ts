import { ChangeEvent } from "react";

export interface Product {
  asin: string;
  name: string;
  img: string;
  price: number;
  link: string;
}

export interface ProductListProps {
  products: Product[];
  loading: boolean;
}

export interface ProductFilterProps {
  filter: string;
  onFilterChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
