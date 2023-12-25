import { Product } from "types/types";
import { ImageContainer } from "components/ui";

interface ProductCardProps {
  item: Product;
}
export const ProductCard = ({ item }: ProductCardProps) => {
  return (
    <div className="group block">
      <ImageContainer imageUrl={item.images[0]} />
      <div className="mt-3 flex justify-between text-sm">
        <div>
          <h3 className="text-gray-900 group-hover:underline group-hover:underline-offset-4">
            {item.title}
          </h3>

          <p className="mt-1.5 max-w-[45ch] text-xs text-gray-500">
            {item.description}
          </p>
        </div>
        <p className="text-gray-900 font-bold">${item.price}</p>
      </div>
    </div>
  );
};
