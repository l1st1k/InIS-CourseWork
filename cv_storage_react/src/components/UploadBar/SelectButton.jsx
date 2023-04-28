import React, { useRef } from "react";
import { Button } from "@mui/material";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import { toast } from "react-toastify";

export const SelectButton = ({ setFile }) => {
  const toastId = useRef(null);
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];

    if (selectedFile.type !== "text/csv") {
      toastId.current = toast.loading("Processing...", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      toast.update(toastId.current, {
        autoClose: 3000,
        render: "Only .csv files are allowed!",
        type: toast.TYPE.ERROR,
        isLoading: false,
      });

      return;
    }
    setFile(selectedFile);
  };

  return (
    <>
      <input
        accept=".csv"
        id="contained-button-file"
        type="file"
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
      <label htmlFor="contained-button-file">
        <Button
          variant="contained"
          component="span"
          endIcon={<UploadFileIcon />}
          sx={{ bgcolor: "#363636" }}
        >
          Select CSV
        </Button>
      </label>
    </>
  );
};
