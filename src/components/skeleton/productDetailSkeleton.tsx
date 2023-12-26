import { Skeleton } from "components/ui";

export const ProductDetailSkeleton = () => {
  return (
    <section className="text-gray-700 body-font overflow-hidden bg-white">
      <div className="container p-5 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <Skeleton className="lg:w-1/2 w-full h-96 object-cover object-center rounded border bg-gray-300" />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 space-y-3">
            <Skeleton className="h-7 w-24 bg-gray-300 rounded" />
            <Skeleton className="h-8 w-full bg-gray-300 rounded" />
            <div className="flex">
              <Skeleton className="h-7 w-2/4 bg-gray-300 rounded" />
              <span className="flex ml-3 pl-3 border-l-2 border-gray-200">
                <Skeleton className="h-7 w-24  bg-gray-300 rounded" />
              </span>
            </div>
            <Skeleton className="h-6 w-full bg-gray-300 rounded" />
            <Skeleton className="h-6 w-full bg-gray-300 rounded" />
            <Skeleton className="h-6 w-2/4 bg-gray-300 rounded" />
            <div className="pb-5 border-b-2 border-gray-200">
              <Skeleton className="h-10 w-full  bg-gray-300 rounded" />
            </div>
            <div className="flex items-center pt-3">
              <Skeleton className="h-8 w-24 bg-gray-300 rounded" />
              <Skeleton className=" ml-auto h-8 w-28 bg-gray-300 rounded" />
              <Skeleton className="w-8 h-8 bg-gray-300 rounded-full ml-4" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
