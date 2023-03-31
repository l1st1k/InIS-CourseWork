import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";
import delete_cv from "../../API/delete_cv.js";

const DeleteButton = (cv_id) => {
  return (
    <IconButton
      sx={{ color: "#d2d2d2" }}
      onClick={async (cv_id) => {
        delete_cv(cv_id);
      }}
    >
      <DeleteIcon />
    </IconButton>
  );
};

export default DeleteButton;
