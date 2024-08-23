import { useState } from "react";
import { Link } from "react-router-dom";

import Button from "@/components/ui/button";
import Input from "@/components/ui/form/input";
import { useForm } from "@/hooks/form";
import { registerSchema } from "@/pages/auth/auth.schema";
import { useRegister } from "../auth.hook";
import VerifyEmail from "../verify-email";

const RegisterPage = () => {
  const [verifyEmailVisibility, setVerifyEmailVisibility] = useState(false);

  const register = useRegister();

  const form = useForm({
    schema: registerSchema,
    onSubmit: function (data) {
      register.mutate(data, {
        onSuccess: () => setVerifyEmailVisibility(true),
      });
    },
  });

  return (
    <div>
      <VerifyEmail
        email={form.formData.email}
        visibility={verifyEmailVisibility}
        setVisibility={() => setVerifyEmailVisibility(false)}
      />
      <h2 className="text-secondary text-4xl text-center font-medium">
        Sign Up
      </h2>
      <form className="space-y-4 py-6 w-full">
        <Input
          label="First Name"
          name="firstName"
          value={form.formData.firstName}
          onChange={form.handleChange}
          validationError={form.errors.firstName}
        />

        <Input
          label="Last Name"
          name="lastName"
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
          name="phoneNumber"
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
            isLoading={register.isLoading}
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
