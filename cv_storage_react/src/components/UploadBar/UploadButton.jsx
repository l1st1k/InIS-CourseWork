import React from "react";
import SendIcon from "@mui/icons-material/Send";
import { Button } from "@mui/material";
import { post_cv } from "../../API";
import { useToaster } from "../../hooks/index.js";

export const UploadButton = ({ file }) => {
  const call_post_cv = useToaster(
    post_cv,
    "Successfully added new CV!",
    "Failed to upload!"
  );
  const handleUpload = async () => {
    if (!file) {
      alert("Please select a file to upload!");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    (await call_post_cv)(formData).then(console.log);
  };

  return (
    <Button
      variant="contained"
      onClick={handleUpload}
      endIcon={<SendIcon />}
      sx={{ bgcolor: "#363636" }}
    >
      Upload
    </Button>
  );
};
