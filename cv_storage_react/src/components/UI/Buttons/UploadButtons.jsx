import React, { useState } from "react";
import { Button, Stack } from "@mui/material";
import { post_cv } from "../../../API";

export const UploadButtons = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile.type !== "text/csv") {
      alert("Only CSV files are allowed!");
      return;
    }
    setFile(selectedFile);
  };

  const handleUpload = () => {
    if (!file) {
      alert("Please select a file to upload!");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    post_cv(formData).then(console.log);
  };

  return (
    <Stack
      direction="row"
      spacing={3}
      justifyItems={"center"}
      sx={{
        // bgcolor: "#363636",
        flex: "1",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <input
        accept=".csv"
        id="contained-button-file"
        type="file"
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
      <label htmlFor="contained-button-file">
        <Button variant="contained" component="span">
          Select CSV
        </Button>
      </label>
      <Button variant="contained" onClick={handleUpload}>
        Upload
      </Button>
    </Stack>
  );
};
