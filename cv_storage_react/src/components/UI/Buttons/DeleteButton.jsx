import React from "react";
import { ToastContainer, toast } from "react-toastify";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton, Tooltip } from "@mui/material";
import "react-toastify/dist/ReactToastify.css";

import { delete_cv } from "../../../API";

export const DeleteButton = ({ cv_id }) => {
  const call_delete_cv = async (cv_id) => {
    await toast.promise(
      (
        await delete_cv
      )(cv_id),
      {
        pending: "Deleting...",
        success: "Successfully deleted!",
        error: "Failed to delete!",
      },
      {
        position: toast.POSITION.BOTTOM_RIGHT,
      }
    );
  };

  return (
    <>
      <IconButton
        sx={{ color: "#d2d2d2" }}
        onClick={async () => {
          await call_delete_cv(cv_id);
        }}
      >
        <Tooltip title="Delete" placement="top">
          <DeleteIcon />
        </Tooltip>
      </IconButton>
      <ToastContainer />
    </>
  );
};
