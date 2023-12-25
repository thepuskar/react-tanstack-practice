import { Skeleton } from "../ui/skeleton";

export const ProductCardSkeleton = () => {
  return (
    <div className="group block">
      <Skeleton className="h-[320px] w-full object-cover sm:h-[240px] bg-gray-300 rounded mb-2" />
      <div className="flex space-x-4">
        <div className="space-y-2 w-[calc(100%-48px)]">
          <Skeleton className="h-7 w-full bg-gray-300 rounded" />
          <Skeleton className="h-12 w-full bg-gray-300 rounded" />
        </div>
        <Skeleton className="h-7 w-12 bg-gray-300 rounded" />
      </div>
    </div>
  );
};
