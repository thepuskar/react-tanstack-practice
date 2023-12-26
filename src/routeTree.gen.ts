import { Route as rootRoute } from "./pages/__root"
import { Route as IndexRoute } from "./pages"
import { Route as ProductProductIdRoute } from "./pages/product/$productId"
import { Route as AuthSignupRoute } from "./pages/auth/signup"
import { Route as AuthLoginRoute } from "./pages/auth/login"

declare module "@tanstack/react-router" {
  interface FileRoutesByPath {
    "/": {
      parentRoute: typeof rootRoute
    }
    "/auth/login": {
      parentRoute: typeof rootRoute
    }
    "/auth/signup": {
      parentRoute: typeof rootRoute
    }
    "/product/$productId": {
      parentRoute: typeof rootRoute
    }
  }
}

Object.assign(IndexRoute.options, {
  path: "/",
  getParentRoute: () => rootRoute,
})

Object.assign(AuthLoginRoute.options, {
  path: "/auth/login",
  getParentRoute: () => rootRoute,
})

Object.assign(AuthSignupRoute.options, {
  path: "/auth/signup",
  getParentRoute: () => rootRoute,
})

Object.assign(ProductProductIdRoute.options, {
  path: "/product/$productId",
  getParentRoute: () => rootRoute,
})

export const routeTree = rootRoute.addChildren([
  IndexRoute,
  AuthLoginRoute,
  AuthSignupRoute,
  ProductProductIdRoute,
])
