import { Product } from "../utils/types";

export const getProducts = async (): Promise<Product[]> => {
  const request = await fetch("/db.json");
  return await request.json();
};
