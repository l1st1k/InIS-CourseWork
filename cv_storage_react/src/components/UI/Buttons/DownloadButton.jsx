import React from "react";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { IconButton, Tooltip } from "@mui/material";
import { get_csv } from "../../../API";

export const DownloadButton = ({ cv_id, filename }) => {
  const handleClick = async (id) => {
    const csv = await get_csv(id);
    download_csv(csv);
  };

  const download_csv = (csv) => {
    const url = URL.createObjectURL(csv);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${filename}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <IconButton sx={{ color: "#d2d2d2" }} onClick={() => handleClick(cv_id)}>
      <Tooltip title="Download .csv" placement="top">
        <FileDownloadIcon />
      </Tooltip>
    </IconButton>
  );
};
