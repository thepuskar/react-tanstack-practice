import axios from "axios";
import { API_URL } from "config";
import { Category } from "types/types";

export async function getAllCategories() {
  const response = await axios.get<Category[]>(API_URL + "/categories");
  return response.data;
}
