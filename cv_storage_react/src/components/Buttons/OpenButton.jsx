import React from "react";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";

export const OpenButton = (cv_id) => {
  const link = "/cv/".concat(cv_id.cv_id);
  return (
    <IconButton sx={{ color: "#d2d2d2" }}>
      <Link to={link} style={{ color: "inherit" }}>
        <OpenInNewIcon />
      </Link>
    </IconButton>
  );
};
