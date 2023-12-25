import { queryOptions, useQuery } from "@tanstack/react-query";
import { FileRoute } from "@tanstack/react-router";
import { Sidebar } from "components/layout";
import { ProductListCard, ProductListSkeleton } from "components/product";
import { fetchAllProducts } from "service";

const productQueryOptions = queryOptions({
  queryKey: ["products"],
  queryFn: fetchAllProducts,
});

export const Route = new FileRoute('/').createRoute({
  loader: ({ context: { queryClient } }) =>
    queryClient.ensureQueryData(productQueryOptions),
  component: Home,
});

function Home() {
  const { data, isLoading, isError } = useQuery(productQueryOptions);
  return (
    <>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8">
        <Sidebar />
        <div className="lg:col-span-2">
          {isLoading ? (
            <>
              <ProductListSkeleton />
              <ProductListSkeleton />
              <ProductListSkeleton />
              <ProductListSkeleton />
              <ProductListSkeleton />
            </>
          ) : isError ? (
            <div>Error</div>
          ) : (
            data?.map((item) => <ProductListCard item={item} key={item.id} />)
          )}
        </div>
        <div className="h-32 rounded-lg d-none"></div>
      </div>
    </>
  );
}
