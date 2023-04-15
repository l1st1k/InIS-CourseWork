import React, { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton, Tooltip } from "@mui/material";
import "react-toastify/dist/ReactToastify.css";

import { delete_cv } from "../../../API";

export const DeleteButton = ({ cv_id }) => {
  const toastId = useRef(null);
  const call_delete_cv = async (cv_id) => {
    toastId.current = toast.loading("Deleting...", {
      position: toast.POSITION.BOTTOM_RIGHT,
    });

    await delete_cv(cv_id)
      .then(() => {
        toast.update(toastId.current, {
          render: "Successfully deleted!",
          type: "success",
          isLoading: "false",
        });
      })
      .catch(() => {
        console.log("Failed to delete!");
        toast.update(toastId.current, {
          render: "Failed to delete!",
          type: "error",
          isLoading: "false",
        });
      });
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
