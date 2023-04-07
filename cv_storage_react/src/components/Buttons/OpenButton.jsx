import React from "react";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { IconButton } from "@mui/material";

export const OpenButton = (cv_id) => {
  return (
    <IconButton sx={{ color: "#d2d2d2" }}>
      <OpenInNewIcon />
    </IconButton>
  );
};
