import { RouteObject } from "react-router-dom";
import { Demo } from "demo";
import { AuthLayout, MainLayout } from "components/layouts";
import { Account, Home, Login, Register } from "pages";
import { PATH } from "constant";

export const router: RouteObject[] = [
  {
    path: PATH.demo,
    element: <Demo />,
  },
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: PATH.account,
        element: <Account />,
      },
    ],
  },
  {
    element: <AuthLayout />,
    children: [
      {
        path: PATH.login,
        element: <Login />,
      },
      {
        path: PATH.register,
        element: <Register />,
      },
    ],
  },
];
