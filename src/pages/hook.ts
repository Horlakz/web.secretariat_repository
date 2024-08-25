import { useMutation, useQueryClient } from "@tanstack/react-query";

import { HttpClient } from "@/services/http-client";
import { MessageResponse } from "@/services/interface";
import toast from "react-hot-toast";
import { ICreateFileRequest, IShareFileRequest } from "./interface";

export function useCreateFile() {
  const client = new HttpClient();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (data: ICreateFileRequest) =>
      client.post<ICreateFileRequest, MessageResponse>("/file", data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["file"] });
      toast.success("File uploaded successfully");
    },
  });

  return {
    mutate: mutation.mutate,
    isLoading: mutation.isPending,
    error: mutation.error,
    isSuccess: mutation.isSuccess,
    isError: mutation.isError,
    reset: mutation.reset,
  };
}

export function useShareFile() {
  const client = new HttpClient();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (data: IShareFileRequest) =>
      client.post<IShareFileRequest, MessageResponse>("/file/share", data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["file"] });
      toast.success("File shared successfully");
    },
  });

  return {
    mutate: mutation.mutate,
    isLoading: mutation.isPending,
    error: mutation.error,
    isSuccess: mutation.isSuccess,
    isError: mutation.isError,
    reset: mutation.reset,
  };
}
