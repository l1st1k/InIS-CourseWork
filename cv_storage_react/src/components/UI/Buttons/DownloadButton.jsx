import React from "react";

import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { IconButton, Tooltip } from "@mui/material";

import { get_csv } from "../../../API";
import { useToaster } from "../../../hooks";

export const DownloadButton = ({ cv_id, filename }) => {
  const call_get_csv = useToaster(
    get_csv,
    "Downloaded CV",
    "Failed to download",
    cv_id
  );

  const handleClick = async () => {
    (await call_get_csv)().then((csv) => download_csv(csv));
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
    <IconButton sx={{ color: "#d2d2d2" }} onClick={() => handleClick()}>
      <Tooltip title="Download .csv" placement="top">
        <FileDownloadIcon />
      </Tooltip>
    </IconButton>
  );
};
