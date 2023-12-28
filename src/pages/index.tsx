import { queryOptions, useQuery } from "@tanstack/react-query";
import { FileRoute } from "@tanstack/react-router";
import { For, Show } from "components/core";
import { Sidebar } from "components/layout";
import { ProductListCard, ProductListSkeleton } from "components/product";
import { ErrorContainer } from "components/ui";
import { fetchAllProducts } from "service";
import { Product } from "types/types";

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
          <Show when={isError}>
            <ErrorContainer message="Something went wrong" />
          </Show>
          <Show
            when={!isLoading && !isError}
            fallback={<ProductListSkeleton />}
          >
            <For each={data as Product[]}>
              {(item) => <ProductListCard item={item} key={item.id} />}
            </For>
          </Show>
        </div>
        <div className="h-32 rounded-lg d-none"></div>
      </div>
    </>
  );
}
