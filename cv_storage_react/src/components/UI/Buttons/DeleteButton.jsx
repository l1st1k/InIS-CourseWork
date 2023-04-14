import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton, Tooltip } from "@mui/material";
import { delete_cv } from "../../../API/index.js";

export const DeleteButton = (cv_id) => {
  return (
    <IconButton
      sx={{ color: "#d2d2d2" }}
      onClick={async () => {
        await delete_cv(cv_id);
      }}
    >
      <Tooltip title="Delete" placement="top">
        <DeleteIcon />
      </Tooltip>
    </IconButton>
  );
};