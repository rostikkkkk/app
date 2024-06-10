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
