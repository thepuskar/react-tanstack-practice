export interface Category {
  id: number;
  name: string;
  image: string;
  creationAt: string | Date;
  updatedAt: string | Date;
}
export interface Product extends Category {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
  creationAt: string | Date;
  updatedAt: string | Date;
}
