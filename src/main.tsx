import { QueryClientProvider } from "@tanstack/react-query";
import { Router, RouterProvider } from "@tanstack/react-router";
import { queryClient } from "config";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { routeTree } from "./routeTree.gen";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorContainer } from "components/ui";

// Set up a Router instance
const router = new Router({
  routeTree,
  context: {
    queryClient,
  },
  defaultPreload: "intent",
  // Since we're using React Query, we don't want loader calls to ever be stale
  // This will ensure that the loader is always called when the route is preloaded or visited
  defaultPreloadStaleTime: 0,
});
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const rootElement = document.getElementById("app")!;

if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <ErrorBoundary
          fallback={<ErrorContainer message="Something went wrong" />}
        >
          <RouterProvider router={router} />
        </ErrorBoundary>
      </QueryClientProvider>
    </React.StrictMode>
  );
}
