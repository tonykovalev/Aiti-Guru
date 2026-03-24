import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { LoginPage } from "@/pages/login";
import { ProductsPage } from "@/pages/products";
import { RequireAuth } from "./RequireAuth";
import { RequireGuest } from "./RequireGuest";

const router = createBrowserRouter([
  {
    element: <RequireGuest />,
    children: [
      {
        path: "/login",
        element: <LoginPage />,
      },
    ],
  },
  {
    element: <RequireAuth />,
    children: [
      {
        path: "/products",
        element: <ProductsPage />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/login" replace />,
  },
]);

export const AppRouter = () => <RouterProvider router={router} />;
