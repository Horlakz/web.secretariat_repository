import { MessageResponse } from "@/services/interface";

export interface UploadFileResult {
  key: string;
  url: string;
}

export interface UploadFileResponse extends MessageResponse {
  data: { result: UploadFileResult };
}
