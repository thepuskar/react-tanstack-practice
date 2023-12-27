import { useQuery } from "@tanstack/react-query";
import { Link } from "@tanstack/react-router";
import { Skeleton } from "components/ui";
import { getAllCategories } from "service";
import { cn } from "utils";

const ListSkeleton = ({ className }: { className?: string }) => {
  return (
    <div>
      <Skeleton className={cn("h-7 w-full bg-gray-200 rounded", className)} />
      <Skeleton className={cn("h-7 w-full bg-gray-200 rounded", className)} />
      <Skeleton className={cn("h-7 w-full bg-gray-200 rounded", className)} />
      <Skeleton className={cn("h-7 w-full bg-gray-200 rounded", className)} />
      <Skeleton className={cn("h-7 w-full bg-gray-200 rounded", className)} />
      <Skeleton className={cn("h-7 w-full bg-gray-200 rounded", className)} />
      <Skeleton className={cn("h-7 w-full bg-gray-200 rounded", className)} />
    </div>
  );
};

export const Sidebar = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["all_categories"],
    queryFn: getAllCategories,
  });

  return (
    <div className="relative">
      <div className="flex fixed  w-[290px] h-screen flex-col justify-between border-e ">
        {isLoading ? (
          <>
            <ListSkeleton className="mb-2" />
          </>
        ) : isError ? (
          <div>Error...</div>
        ) : (
          <ul className="space-y-1 pr-1">
            {data?.map((category) => (
              <li key={category.id}>
                <Link
                  to="/"
                  className="block rounded hover:bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
                >
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
