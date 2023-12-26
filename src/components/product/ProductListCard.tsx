import { Link } from "@tanstack/react-router";
import { ImageContainer } from "components/ui";
import { Product } from "types/types";

interface Props {
  item: Product;
}

export const ProductListCard = ({ item }: Props) => {
  return (
    <div className="flex bg-white transition hover:shadow-xl w-full mb-4 rounded items-center">
      <div className="h-[140px]">
        <ImageContainer
          className="aspect-square h-full w-full object-cover rounded-l"
          imageUrl={item.images[0]}
        />
      </div>

      <div className="flex flex-1 flex-col justify-between">
        <div className="border-s border-gray-900/10 px-4 sm:border-l-transparent">
          <Link
            to={`/product/$productId`}
            params={{
              productId: item.id,
            }}
          >
            <h3 className="font-bold uppercase text-gray-900">{item.title}</h3>
          </Link>

          <p className="mt-1 line-clamp-3 text-sm/relaxed text-gray-700">
            {item.description}
          </p>
        </div>

        <div className="sm:flex sm:items-end sm:justify-end">
          <a
            href="#"
            className="block bg-violet-400 px-5 py-3 text-center text-xs font-bold uppercase text-white transition hover:bg-violet-500 rounded-l"
          >
            ${item.price}
          </a>
        </div>
      </div>
    </div>
  );
};
