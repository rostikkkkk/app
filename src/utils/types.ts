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
