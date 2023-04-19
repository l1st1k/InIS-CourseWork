import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button } from "@mui/material";
import "react-toastify/dist/ReactToastify.css";

import { delete_cv } from "../../../API";
import { useToaster } from "../../../hooks";
import { useStore } from "../../../store";

export const DeleteTextButton = ({ cv_id }) => {
  const call_delete_cv = useToaster(
    delete_cv,
    "Successfully deleted!",
    "Deletion failed!",
    cv_id
  );

  return (
    <>
      <Button
        endIcon={<DeleteIcon sx={{ width: 0.85 }} />}
        sx={{
          color: "#d2d2d2",
          border: "1px solid #FD5959FF",
          borderRadius: 0,
        }}
        onClick={async () => {
          await (
            await call_delete_cv
          )();
          await useStore
            .getState()
            .fetchCVs()
            .then(() => console.log(`Fetched CVs after deleting`));
          // todo redirect to catalog
        }}
      >
        Delete
      </Button>
    </>
  );
};
