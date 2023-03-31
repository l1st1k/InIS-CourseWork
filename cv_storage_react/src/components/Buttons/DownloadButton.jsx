import React from "react";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { IconButton } from "@mui/material";

const DownloadButton = (cv_id) => {
  return (
    <IconButton sx={{ color: "#d2d2d2" }}>
      {/*// TODO add get_csv API call*/}
      {/*// async (cv_id) => {delete_cv(cv_id)}*/}
      <FileDownloadIcon />
    </IconButton>
  );
};

export default DownloadButton;
