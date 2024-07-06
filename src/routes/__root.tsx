import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "../dev/RouterDevTools";

export const Route = createRootRoute({
  component: () => (
    <>
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});
