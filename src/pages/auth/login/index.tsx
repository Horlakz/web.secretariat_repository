import { Link } from "react-router-dom";

import Button from "@/components/ui/button";
import Input from "@/components/ui/form/input";
import { ACCESS_TOKEN_KEY } from "@/constants/auth";
import { useForm } from "@/hooks/form";
import { loginSchema } from "@/pages/auth/auth.schema";
import { useRouter } from "@/router/router.hook";
import { Storage } from "@/utilities/storage";
import { useLogin } from "../auth.hook";

const LoginPage = () => {
  const storage = new Storage();
  const router = useRouter();

  const form = useForm({
    schema: loginSchema,
    onSubmit: function () {
      storage.setItem(ACCESS_TOKEN_KEY, "test");
      router.goTo("/");
    },
  });

  const loginMutation = useLogin(form.formData);

  return (
    <div>
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

        <div className="flex-center w-full">
          <Button
            size="lg"
            className="w-full flex-center font-bold"
            isLoading={loginMutation.isLoading}
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
