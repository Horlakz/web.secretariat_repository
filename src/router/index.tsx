import { createBrowserRouter, RouterProvider } from "react-router-dom";

import routes from "./routes";

const router = createBrowserRouter(routes);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
