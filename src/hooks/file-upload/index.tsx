import { useMutation } from "@tanstack/react-query";

import { MEDIA_API_KEY } from "@/constants/env-vars";
import { IFile } from "@/pages/interface";
import { HttpClient } from "@/services/http-client";
import { UploadFileResponse } from "./file-upload.interface";

export function useUploadFile(
  setImage: React.Dispatch<React.SetStateAction<IFile | null>>,
  controller: AbortController
) {
  const client = new HttpClient();

  return useMutation({
    mutationFn: async (file: File) => {
      const formData = new FormData();
      formData.append("file", file);
      return await client.post<FormData, UploadFileResponse>(
        "https://api.thryvo.hndwok.com/v1/file/upload",
        formData,
        {
          headers: {
            "Content-Type": "multiform/form-data",
            "X-API-KEY": MEDIA_API_KEY,
          },
          signal: controller.signal,
          onUploadProgress: (progressEvent) => {
            const progress = Math.round(
              (progressEvent.loaded * 100) / (progressEvent?.total ?? 0)
            );

            setImage((prev) =>
              prev?.file === file ? { ...prev, progress } : prev
            );
          },
        }
      );
    },
  });
}
