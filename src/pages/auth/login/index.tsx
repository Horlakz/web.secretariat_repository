import { useState } from "react";
import { Link } from "react-router-dom";

import Button from "@/components/ui/button";
import Input from "@/components/ui/form/input";
import { useForm } from "@/hooks/form";
import { loginSchema } from "@/pages/auth/auth.schema";
import { useLogin } from "../auth.hook";
import VerifyEmail from "../verify-email";

const LoginPage = () => {
  const [verifyEmailVisibility, setVerifyEmailVisibility] = useState(false);
  const login = useLogin();

  const form = useForm({
    schema: loginSchema,
    onSubmit: function (data) {
      login.mutate(data, {
        onError: (err: any) => {
          if (err.response?.data?.status == 4106) {
            setVerifyEmailVisibility(true);
          }
        },
      });
    },
  });

  return (
    <div>
      <VerifyEmail
        visibility={verifyEmailVisibility}
        email={form.formData.email}
        setVisibility={() => setVerifyEmailVisibility(false)}
      />
      <h2 className="text-secondary text-4xl text-center font-medium">
        Sign In
      </h2>
      <form className="space-y-4 py-6 w-full">
        <Input
          label="Email"
          type="email"
          value={form.formData.email}
          onChange={form.handleChange}
          validationError={form.errors.email}
        />

        <Input
          label="Password"
          type="password"
          value={form.formData.password}
          onChange={form.handleChange}
          validationError={form.errors.password}
        />

        <p className="flex justify-end w-full">
          <Link to="/forgot-password">Forgot Password?</Link>
        </p>

        <p className="flex justify-end w-full">
          Don't have an account?&nbsp;
          <Link to="/register" className="text-secondary">
            Sign Up
          </Link>
        </p>

        <div className="flex-center w-full">
          <Button
            size="lg"
            className="w-full flex-center font-bold"
            isLoading={login.isLoading}
            onClick={form.handleSubmit}
          >
            Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
