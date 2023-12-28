import { Skeleton } from "components/ui";

export const ListSkeleton = () => {
  return (
    <div className="flex bg-white transition w-full mb-4 rounded items-center border border-gray-300 p-2">
      <Skeleton id="img" className="h-40 w-40 bg-gray-300 rounded" />
      <div className="flex flex-1 flex-col justify-between space-y-2">
        <div className="border-s border-gray-900/10 px-4 sm:border-l-transparent space-y-1">
          <Skeleton id="title" className="h-8 w-full bg-gray-300 rounded" />
          <Skeleton id="desc" className="h-6 w-full bg-gray-300 rounded" />
          <Skeleton id="desc" className="h-6 w-full bg-gray-300 rounded" />
          <Skeleton id="desc" className="h-6 w-2/3 bg-gray-300 rounded" />
        </div>
        <div className="sm:flex sm:items-end sm:justify-end">
          <Skeleton className="h-7 w-12 bg-gray-300 rounded" />
        </div>
      </div>
    </div>
  );
};

export const ProductListSkeleton = () => {
  return (
    <>
      <ListSkeleton />
      <ListSkeleton />
      <ListSkeleton />
      <ListSkeleton />
      <ListSkeleton />
    </>
  );
};
