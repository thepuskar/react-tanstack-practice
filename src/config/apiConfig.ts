import { appConfig } from "./appConfig";

const API_URL = appConfig.apiUrl + "/api/v1";

export const productApi = {
  productApiUrl: API_URL + "/products",
};

export const categoryApi = {
  categoryApiUrl: API_URL + "/categories",
};
