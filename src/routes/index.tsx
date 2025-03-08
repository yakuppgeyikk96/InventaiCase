import { createBrowserRouter } from "react-router-dom";
import App from "@/App";
import { lazy, Suspense } from "react";
import Loading from "@/components/shared/Loading";

const HomePage = lazy(() => import("@/pages/HomePage"));
const MovieDetailPage = lazy(() => import("@/pages/MovieDetailPage"));
const NotFound = lazy(() => import("@/components/shared/not-found/NotFound"));

const withSuspense = (Component: React.ComponentType) => (
  <Suspense fallback={<Loading text="Loading page..." />}>
    <Component />
  </Suspense>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: withSuspense(HomePage),
      },
      {
        path: "/movie/:id",
        element: withSuspense(MovieDetailPage),
      },
      {
        path: "*",
        element: withSuspense(NotFound),
      },
    ],
  },
]);

export default router;
