import { MessageResponse } from "@/interface";
import { Client } from "@/services/http-client";
import {
  LoginRequestPayload,
  LoginResponsePayload,
  RegistrationRequestPayload,
  RegistrationResponsePayload,
  VerifyEmailRequestPayload,
} from "./auth.interface";

export class AuthService {
  private apiClient = new Client();

  login(data: LoginRequestPayload) {
    return this.apiClient.post<LoginRequestPayload, LoginResponsePayload>(
      "auth/login",
      data
    );
  }

  register(data: RegistrationRequestPayload) {
    return this.apiClient.post<
      RegistrationRequestPayload,
      RegistrationResponsePayload
    >("auth/register", data);
  }

  verifyEmail(data: VerifyEmailRequestPayload) {
    return this.apiClient.post<VerifyEmailRequestPayload, MessageResponse>(
      "auth/verify-email",
      data
    );
  }
}
