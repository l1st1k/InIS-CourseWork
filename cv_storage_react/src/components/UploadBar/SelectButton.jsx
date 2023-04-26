import React from "react";
import { Button } from "@mui/material";
import UploadFileIcon from "@mui/icons-material/UploadFile";

export const SelectButton = ({ file, setFile }) => {
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile.type !== "text/csv") {
      alert("Only CSV files are allowed!");
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
