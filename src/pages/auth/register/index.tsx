import { Link } from "react-router-dom";

import Button from "@/components/ui/button";
import Input from "@/components/ui/form/input";
import { ACCESS_TOKEN_KEY } from "@/constants/auth";
import { useForm } from "@/hooks/form";
import { registerSchema } from "@/pages/auth/auth.schema";
import { useRouter } from "@/router/router.hook";
import { Storage } from "@/utilities/storage";
import { useLogin } from "../auth.hook";

const RegisterPage = () => {
  const storage = new Storage();
  const router = useRouter();

  const form = useForm({
    schema: registerSchema,
    onSubmit: function () {
      storage.setItem(ACCESS_TOKEN_KEY, "test");
      router.goTo("/");
    },
  });

  const loginMutation = useLogin(form.formData);

  return (
    <div>
      <h2 className="text-secondary text-4xl text-center font-medium">
        Sign Up
      </h2>
      <form className="space-y-4 py-6 w-full">
        <Input
          label="First Name"
          value={form.formData.firstName}
          onChange={form.handleChange}
          validationError={form.errors.firstName}
        />

        <Input
          label="Last Name"
          value={form.formData.lastName}
          onChange={form.handleChange}
          validationError={form.errors.lastName}
        />

        <Input
          label="Email"
          type="email"
          value={form.formData.email}
          onChange={form.handleChange}
          validationError={form.errors.email}
        />

        <Input
          label="Phone Number"
          value={form.formData.phoneNumber}
          onChange={form.handleChange}
          validationError={form.errors.phoneNumber}
        />

        <Input
          label="Password"
          type="password"
          value={form.formData.password}
          onChange={form.handleChange}
          validationError={form.errors.password}
        />

        <p className="flex justify-end w-full">
          Already have an account?&nbsp;
          <Link to="/login" className="text-blue-600">
            Sign In
          </Link>
        </p>

        <div className="flex-center w-full">
          <Button
            size="lg"
            className="w-full flex-center font-bold"
            isLoading={loginMutation.isLoading}
            onClick={form.handleSubmit}
          >
            Sign Up
          </Button>
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;
