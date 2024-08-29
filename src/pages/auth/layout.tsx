import { useEffect } from "react";
import { Outlet } from "react-router-dom";

import logo from "@/assets/logo.png";

import Button from "@/components/ui/button";
import { useRouter } from "@/router/router.hook";
import { useAuth } from "./auth.hook";

const AuthLayout = () => {
  const router = useRouter();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (isAuthenticated) router.goTo("/dashboard");
  }, [isAuthenticated, router]);

  return (
    <div className="flex items-center w-full h-screen">
      <section className="w-full h-full px-20 bg-[#D1F1FF] hidden sm:flex flex-col items-center justify-center text-center">
        <Button
          variant="ghost"
          as="img"
          src={logo}
          onClick={() => router.goTo("/")}
        />
        <h1 className="text-5xl font-inter text-secondary pb-6">
          Secretariat Repository
        </h1>
        <p className="font-medium text-[#0049A8] text-2xl">
          Simplify administration and management with secure access, easy
          organizaton tools and seamless collaboration features.
        </p>
      </section>

      <section className="w-full grid items-center">
        <div className="sm:hidden block text-center mb-10">
          <Button
            variant="ghost"
            as="img"
            src={logo}
            onClick={() => router.goTo("/")}
            className="w-20 h-20 mx-auto"
          />
          <h1 className="text-4xl">Secretariat Repository</h1>
        </div>
        <div className="sm:px-36 px-10">
          <Outlet />
        </div>
      </section>
    </div>
  );
};

export default AuthLayout;
