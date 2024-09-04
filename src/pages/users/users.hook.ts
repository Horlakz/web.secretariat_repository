import { useQuery } from "@tanstack/react-query";

import { UserResponse } from "./user.interface";

export function useGetUserDetails() {
  const user = useQuery<UserResponse>({ queryKey: ["user"] });

  return {
    data: user.data?.data,
    isSuccess: user.isSuccess,
    isLoading: user.isLoading,
    isError: user.isError,
  };
}
