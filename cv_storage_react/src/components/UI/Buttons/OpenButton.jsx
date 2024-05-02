import React from "react";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { IconButton, Tooltip } from "@mui/material";
import { Link } from "react-router-dom";

export const OpenButton = ({ id, type }) => {
  const prefix = type === "cv" ? "/cv/" : "/vacancy/";
  const link = prefix + id;
  return (
    <IconButton sx={{ color: "#d2d2d2" }}>
      <Link to={link} style={{ color: "inherit" }}>
        <Tooltip title="Open" placement="top">
          <OpenInNewIcon />
        </Tooltip>
      </Link>
    </IconButton>
  );
};
