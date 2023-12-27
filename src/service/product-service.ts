import axios from "axios";
import { productApi } from "config";
import { Product } from "types/types";

export async function fetchAllProducts() {
  const res = await axios.get<Product[]>(productApi.productApiUrl);
  return res.data;
}

export async function getProductById(id: string): Promise<Product> {
  const response = await axios.get<Product>(
    `${productApi.productApiUrl}/${id}`
  );
  return response.data;
}
