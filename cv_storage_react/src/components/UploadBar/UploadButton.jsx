import React, { useRef } from "react";
import { toast } from "react-toastify";
import SendIcon from "@mui/icons-material/Send";
import { Button } from "@mui/material";

import { post_cv } from "../../API";
import { useToaster } from "../../hooks";

export const UploadButton = ({ file }) => {
  const toastId = useRef(null);

  const formData = new FormData();
  formData.append("file", file);

  const call_post_cv = useToaster(
    post_cv,
    "Successfully added new CV!",
    "Failed to upload!",
    formData
  );
  const handleUpload = async () => {
    if (!file) {
      toastId.current = toast.loading("Processing...", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      toast.update(toastId.current, {
        autoClose: 3000,
        render: "Please select a file to upload!",
        type: toast.TYPE.ERROR,
        isLoading: false,
      });
      return;
    }

    (await call_post_cv)().then(console.log);
  };

  if (!file) {
    return null; // don't render the button if file is null
  }

  return (
    <Button
      variant="contained"
      onClick={handleUpload}
      endIcon={<SendIcon />}
      sx={{
        bgcolor: "#363636",
        "&:hover": {
          bgcolor: "#cbaeff",
        },
      }}
    >
      Upload
    </Button>
  );
};
