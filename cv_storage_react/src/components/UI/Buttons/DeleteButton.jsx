import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton, Tooltip } from "@mui/material";
import "react-toastify/dist/ReactToastify.css";

import { delete_cv } from "../../../API";
import { useToaster } from "../../../hooks";
import { useStore } from "../../../store";

export const DeleteButton = ({ cv_id, type }) => {
    let foo;
    if (type === "cv") {
        foo = delete_cv;
    }
    // if (type === "manager") {
    //     const foo = delete_manager;
    // }
    // if (type === "vacancy") {
    //     const foo = delete_vacancy;
    // }
  const call_delete_cv = useToaster(
    foo,
    "Successfully deleted!",
    "Deletion failed!",
    cv_id
  );

  return (
    <IconButton
      sx={{ color: "#FD5959FF" }}
      onClick={async () => {
        await (
          await call_delete_cv
        )();
        await useStore
          .getState()
          .fetchCVs()
          .then(() => console.log(`Fetched CVs after deleting`));
      }}
    >
      <Tooltip title="Delete" placement="top">
        <DeleteIcon />
      </Tooltip>
    </IconButton>
  );
};
