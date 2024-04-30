import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton, Tooltip } from "@mui/material";
import "react-toastify/dist/ReactToastify.css";

import { delete_cv, delete_manager } from "../../../API";
import { useToaster } from "../../../hooks";
import { useStore } from "../../../store";

export const DeleteButton = ({ id, type }) => {
    let foo;
    if (type === "cv") {
        foo = delete_cv;
    }
    if (type === "manager") {
        foo = delete_manager;
    }
    // if (type === "vacancy") {
    //     foo = delete_vacancy;
    // }
  const call_delete = useToaster(
    foo,
    "Successfully deleted!",
    "Deletion failed!",
    id
  );

  return (
    <IconButton
      sx={{ color: "#FD5959FF" }}
      onClick={async () => {
        await (
          await call_delete
        )();
          if (type === "cv") {
              await useStore
                  .getState()
                  .fetchCVs()
                  .then(() => console.log(`Fetched CVs after deleting`));
          }
          if (type === "manager") {
              await useStore
                  .getState()
                  .fetchManagers()
                  .then(() => console.log(`Fetched Managers after deleting`));
          }
          // if (type === "vacancy") {
          //     await useStore
          //         .getState()
          //         .fetchCVs()
          //         .then(() => console.log(`Fetched CVs after deleting`));
          // }

      }}
    >
      <Tooltip title="Delete" placement="top">
        <DeleteIcon />
      </Tooltip>
    </IconButton>
  );
};
