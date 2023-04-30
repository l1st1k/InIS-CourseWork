import React, { useState } from "react";
import { Stack, Typography } from "@mui/material";

import { SelectButton, UploadButton } from "../UploadBar";

export const UploadBar = () => {
  const [file, setFile] = useState(null);

  return (
    <Stack direction="row" justifyItems={"center"} spacing={file ? 3 : 0}>
      <SelectButton setFile={setFile} />
      <Filename file={file} />
      <UploadButton file={file} setFile={setFile} />
    </Stack>
  );
};

const Filename = ({ file }) => {
  if (!file) {
    return null;
  }
  return (
    <Typography
      sx={{
        bgcolor: "#cbaeff",
        px: "16px",
        py: "6px",
        color: "#252525",
        borderRadius: "4px",
      }}
    >
      {file ? file.name : ""}
    </Typography>
  );
};
