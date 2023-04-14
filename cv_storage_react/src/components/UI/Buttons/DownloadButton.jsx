import React from "react";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { IconButton, Tooltip } from "@mui/material";

export const DownloadButton = (cv_id) => {
  return (
    <IconButton
      sx={{ color: "#d2d2d2" }}
      onClick={(cv_id) => handleClick(cv_id)}
    >
      <Tooltip title="Download .csv" placement="top">
        <FileDownloadIcon />
      </Tooltip>
    </IconButton>
  );
};

const handleClick = async (id) => {
  // TODO add get_csv API call
};
