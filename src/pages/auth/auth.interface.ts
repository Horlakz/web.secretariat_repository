import { InferType } from "yup";

import { ModalProps } from "@/components/ui/modal/modal.interface";
import { MessageResponse } from "@/services/interface";
import { loginSchema, registerSchema } from "./auth.schema";

export interface LoginRequestPayload extends InferType<typeof loginSchema> {}

export interface LoginResponsePayload {
  accessToken: string;
  refreshToken: string;
}

export interface RefreshAccessTokenResponsePayload {
  token: string;
}

export interface RegistrationRequestPayload
  extends InferType<typeof registerSchema> {}

export type RegistrationResponsePayload = MessageResponse;

export interface OtpProps {
  value: string;
  valueLength: number;
  onChange: (value: string) => void;
  color?: string;
}

export interface VerifyEmailProps
  extends Required<Omit<ModalProps, "showCloseButton" | "children">> {
  email: string;
}

export type VerifyEmailRequestPayload = { email: string; code: string };
