import React, { lazy } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
const Home = lazy(() => import("../pages/Home"));

function Router(): React.ReactElement {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default Router;
