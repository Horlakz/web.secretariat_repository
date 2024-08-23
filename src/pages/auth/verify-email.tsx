import { useEffect, useState } from "react";

import { Modal } from "@/components/ui/modal";
import { useVerifyEmail } from "./auth.hook";
import { VerifyEmailProps } from "./auth.interface";
import OtpInput from "./otp-input";

function VerifyEmail(props: VerifyEmailProps) {
  const [value, setValue] = useState("");

  const verifyEmail = useVerifyEmail();

  useEffect(() => {
    if (value.length === 6) {
      verifyEmail.mutate(
        {
          email: props.email,
          code: value,
        },
        {
          onSuccess: () => props.setVisibility(),
          onError: () => setValue(""),
        }
      );
    }
  }, [value]);

  return (
    <Modal visibility={props.visibility} setVisibility={props.setVisibility}>
      <div className="p-12 flex-col-center max-w-xl text-center gap-4">
        <h1 className="text-2xl font-bold">Verify Email</h1>
        <p className="text-xs">
          A verification code has been sent to your {props.email}. Please verify
          your email to continue.
        </p>

        <OtpInput
          valueLength={6}
          value={value}
          onChange={(value) => setValue(value)}
          color={verifyEmail.isSuccess ? "gray" : "primary"}
        />
      </div>
    </Modal>
  );
}

export default VerifyEmail;
