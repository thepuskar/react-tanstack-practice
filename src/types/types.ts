export interface Category {
  id: string;
  name: string;
  image: string;
  creationAt: string | Date;
  updatedAt: string | Date;
}
export interface Product {
  id: string;
  title: string;
  price: number;
  description: string;
  images: string[];
  creationAt: string | Date;
  updatedAt: string | Date;
  category: Category;
}
