import { Outlet } from "react-router-dom";

import Navigate from "@/router/navigate";
import { useAuth } from "./auth/auth.hook";
import Footer from "./footer";
import Header from "./header";

const BaseLayout = () => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) return <Navigate to="/login" />;

  return (
    <main>
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
};

export default BaseLayout;
