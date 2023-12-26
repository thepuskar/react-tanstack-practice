import axios from "axios";
import { API_URL } from "config";
import { Product } from "types/types";

export async function fetchAllProducts() {
  const res = await axios.get<Product[]>(API_URL + "/products");
  return res.data;
}

export async function getProductById(id: string): Promise<Product> {
  const response = await axios.get<Product>(API_URL + "/products/" + id);
  return response.data;
}
