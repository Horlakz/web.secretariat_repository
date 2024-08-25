import { useState } from "react";

import { MdOutlineInsertDriveFile } from "react-icons/md";

import Button from "@/components/ui/button";
import { Modal } from "@/components/ui/modal";
import { useUploadFile } from "@/hooks/file-upload";
import { useForm } from "@/hooks/form";
import { bytesToMegaBytes } from "@/utilities/common";
import toast from "react-hot-toast";
import { RiCloseLine, RiDeleteBinLine } from "react-icons/ri";
import { useCreateFile } from "./hook";
import { IFile, UploadFileProps } from "./interface";
import { fileSchema } from "./schema";

const MAX_FILE_SIZE = 10 * 1024 * 1024;

function UploadFile(props: UploadFileProps) {
  const [file, setFile] = useState<IFile | null>(null);

  const controller = new AbortController();
  const upload = useUploadFile(setFile, controller);
  const createFile = useCreateFile();

  const form = useForm({
    schema: fileSchema,
    onSubmit: (data) => {
      createFile.mutate(data, {
        onSuccess: () => {
          setFile(null);
          props.setVisibility();
        },
      });
    },
  });

  function handleFileUpload(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];

    if (!file) return;

    if (file.size > MAX_FILE_SIZE) {
      toast.error(
        "File size is too large. Please upload a file less than 10MB."
      );
      return;
    }

    setFile({
      file,
      progress: 0,
    });

    upload.mutate(file, {
      onSuccess: (data) => {
        form.setFormField("name", file.name);
        form.setFormField("key", data.data.data.result.key);
        form.setFormField("mime_type", file.type);
        form.setFormField("size", file.size);
      },
    });
  }

  return (
    <Modal
      visibility={props.visibility}
      setVisibility={props.setVisibility}
      showCloseButton
    >
      <div className="flex-col-center gap-6 p-14 min-w-[30rem]">
        <h4 className="text-2xl font-semibold">Upload File</h4>

        {/* file upload */}
        <label
          htmlFor="dropzone-file"
          className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg
              className="w-8 h-8 mb-4 text-gray-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
              />
            </svg>
            <p className="mb-2 text-sm text-gray-500">
              <span className="font-semibold">Click to upload</span> or drag and
              drop
            </p>
            <p className="text-xs text-gray-500">
              SVG, PNG, JPG or GIF (MAX. 800x400px)
            </p>
          </div>
          <input
            id="dropzone-file"
            type="file"
            className="hidden"
            onChange={handleFileUpload}
          />
        </label>

        {/* file upload progress */}
        {file ? (
          <div className="w-full py-3.5 px-2 flex justify-between items-center gap-1 rounded-lg bg-neutral-100">
            <MdOutlineInsertDriveFile size={36} />

            <div className="w-full flex-col-center px-6 gap-1">
              <p className="text-xs text-neutral-700 text-ellipsis">
                {file?.file.name}
              </p>
              <div className="w-full bg-white rounded-full overflow-hidden">
                <div
                  className="bg-success h-2 rounded-full"
                  style={{
                    width: `${file?.progress}%`,
                  }}
                />
              </div>

              <p className="text-neutral-500 text-sm flex gap-1">
                <span>{bytesToMegaBytes(file?.file.size as number)}MB</span>
                <span>•</span>
                <span>{file?.progress}% uploaded</span>
              </p>
            </div>

            <Button
              className="rounded-full text-secondary-300 py-2 px-2 bg-white z-10"
              onClick={() => {
                if (file?.progress !== 100) {
                  controller.abort();
                }

                if (file?.progress === 100) {
                  setFile(null);
                }
              }}
            >
              {file?.progress !== 100 ? (
                <RiCloseLine color="red" />
              ) : (
                <RiDeleteBinLine color="red" />
              )}
            </Button>
          </div>
        ) : null}

        {/* submit button */}
        <Button
          disabled={!file || file?.progress !== 100}
          isLoading={createFile.isLoading}
          onClick={(e) => form.handleSubmit(e)}
        >
          Submit File
        </Button>
      </div>
    </Modal>
  );
}

export default UploadFile;
