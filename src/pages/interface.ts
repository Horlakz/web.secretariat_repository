import { ModalProps } from "@/components/ui/modal/modal.interface";
import { ResultReponse } from "@/services/interface";

export interface UploadFileProps
  extends Required<Omit<ModalProps, "showCloseButton" | "children">> {}

export interface IFile {
  file: File;
  progress: number;
}

export interface ICreateFileRequest {
  name: string;
  key: string;
  mime_type: string;
  size: number;
}

export type IFileResponsePayload = ResultReponse<
  (ICreateFileRequest & { id: string; created_at: string })[]
>;
