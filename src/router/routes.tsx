import HomePage from "@/pages";
import ErrorPage from "@/pages/404";
import AuthLayout from "@/pages/auth/layout";
import LoginPage from "@/pages/auth/login";
import RegisterPage from "@/pages/auth/register";
import GroupsPage from "@/pages/groups";
import GroupPage from "@/pages/groups/id";
import BaseLayout from "@/pages/layout";
import SettingsPage from "@/pages/settings";
import { RouteObject } from "react-router-dom";

const routes: RouteObject[] = [
  { path: "*", element: <ErrorPage /> },
  // Base routes
  {
    path: "/",
    element: <BaseLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/users", element: <p>users page</p> },
      {
        path: "/group/",
        children: [
          { path: "", element: <GroupsPage /> },
          { path: ":id", element: <GroupPage /> },
        ],
      },
    ],
  },
  // Auth routes
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      { path: "/login", element: <LoginPage /> },
      { path: "/register", element: <RegisterPage /> },
    ],
  },
  // Settings routes
  {
    path: "/setting/",
    element: <BaseLayout />,
    children: [{ path: "", element: <SettingsPage /> }],
  },
];

export default routes;
