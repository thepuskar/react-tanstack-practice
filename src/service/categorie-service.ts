import axios from "axios";
import { categoryApi } from "config";
import { Category } from "types/types";

export async function getAllCategories() {
  const response = await axios.get<Category[]>(categoryApi.categoryApiUrl);
  return response.data;
}
