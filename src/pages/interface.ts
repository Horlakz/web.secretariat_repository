import { ModalProps } from "@/components/ui/modal/modal.interface";
import { ResultReponse } from "@/services/interface";

export interface UploadFileProps
  extends Required<Omit<ModalProps, "showCloseButton" | "children">> {}

export interface ShareProps extends UploadFileProps {
  file: IFilePayload;
}

export interface ConfirmDeleteProps extends ShareProps {}

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

export interface IFilePayload extends ICreateFileRequest {
  id: string;
  created_at: string;
}

export type IFileResponsePayload = ResultReponse<IFilePayload[]>;

export interface IShareFileRequest {
  file_id: string;
  to_email: string;
}
