import axios from "axios";
import { API_URL } from "config";
import { Product } from "types/types";

export async function fetchAllProducts() {
  const res = await axios.get<Product[]>(API_URL + "/products");
  return res.data;
}
