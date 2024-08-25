import Button from "@/components/ui/button";
import { Modal } from "@/components/ui/modal";
import { useDeleteFile } from "./hook";
import { ConfirmDeleteProps } from "./interface";

function ConfirmDelete(props: ConfirmDeleteProps) {
  const deleteFile = useDeleteFile();

  return (
    <Modal
      visibility={props.visibility}
      setVisibility={props.setVisibility}
      showCloseButton
    >
      <div className="flex-col-center gap-6 p-14 min-w-[30rem]">
        <h4 className="text-2xl font-semibold text-danger">Delete File</h4>

        <p>
          Are you sure you want to delete&nbsp;
          <span className="font-semibold">{props.file.name}</span>?
        </p>

        <div className="flex justify-end gap-3">
          <Button
            colorScheme="danger"
            isLoading={deleteFile.isLoading}
            onClick={() =>
              deleteFile.mutate(props.file.id, {
                onSuccess: props.setVisibility,
              })
            }
          >
            Delete
          </Button>
          <Button
            colorScheme="info"
            variant="outline"
            onClick={props.setVisibility}
          >
            Cancel
          </Button>
        </div>
      </div>
    </Modal>
  );
}

export default ConfirmDelete;
