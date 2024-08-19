import { Outlet } from "react-router-dom";

import Navigate from "@/router/navigate";
import { useAuth } from "./auth/auth.hook";
import Header from "./header";
import SideBar from "./sidebar";

const BaseLayout = () => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) return <Navigate to="/login" />;

  return (
    <main className="flex w-full">
      <section className="w-1/5">
        <SideBar />
      </section>

      <section className="w-full">
        <Header />
        <Outlet />
      </section>
    </main>
  );
};

export default BaseLayout;
