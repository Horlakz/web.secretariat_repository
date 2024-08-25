import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from "@/constants/auth";
import { useRouter } from "@/router/router.hook";
import { HttpClient } from "@/services/http-client";
import { DataResponse, MessageResponse } from "@/services/interface";
import { Storage } from "@/utilities/storage";
import {
  LoginRequestPayload,
  LoginResponsePayload,
  RegistrationRequestPayload,
  RegistrationResponsePayload,
  VerifyEmailRequestPayload,
} from "./auth.interface";

export function useAuth() {
  const storage = new Storage();
  const router = useRouter();

  const isAuthenticated = storage.checkItem(ACCESS_TOKEN_KEY);

  function logout() {
    storage.deleteItem(ACCESS_TOKEN_KEY);
    router.goTo("/login");
  }

  return { isAuthenticated, logout };
}

export function useLogin() {
  const storage = new Storage();
  const auth = new HttpClient();
  const router = useRouter();

  const loginMutation = useMutation({
    mutationFn: async (data: LoginRequestPayload) =>
      await auth.post<LoginRequestPayload, DataResponse<LoginResponsePayload>>(
        "auth/login",
        data
      ),
    onSuccess: (data) => {
      storage.setItem(ACCESS_TOKEN_KEY, data.data.data.accessToken);
      storage.setItem(REFRESH_TOKEN_KEY, data.data.data.refreshToken);
      toast.success("login successful");
      router.goTo("/");
    },
  });

  return {
    mutate: loginMutation.mutate,
    isLoading: loginMutation.isPending,
  };
}

export function useRegister() {
  const auth = new HttpClient();

  const registerMutation = useMutation({
    mutationFn: async (data: RegistrationRequestPayload) =>
      await auth.post<RegistrationRequestPayload, RegistrationResponsePayload>(
        "auth/register",
        data
      ),
    onSuccess: () => {
      toast.success("Registeration successfull");
    },
  });

  return {
    mutate: registerMutation.mutate,
    isLoading: registerMutation.isPending,
  };
}

export function useVerifyEmail() {
  const auth = new HttpClient();
  const router = useRouter();

  const verifyEmailMutation = useMutation({
    mutationFn: async (data: VerifyEmailRequestPayload) =>
      await auth.post<VerifyEmailRequestPayload, MessageResponse>(
        "auth/verify-email",
        data
      ),
    onSuccess: () => {
      toast.success("Email verified successfully");
      router.goTo("/login");
    },
  });

  return {
    mutate: verifyEmailMutation.mutate,
    isLoading: verifyEmailMutation.isPending,
    isSuccess: verifyEmailMutation.isSuccess,
  };
}
