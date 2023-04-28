import React, { useState } from "react";
import { Stack, Typography } from "@mui/material";

import { SelectButton, UploadButton } from "../UploadBar";

export const UploadBar = () => {
  const [file, setFile] = useState(null);

  return (
    <Stack
      direction="row"
      spacing={3}
      justifyItems={"center"}
      sx={{
        flex: "1",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <SelectButton file={file} setFile={setFile} />
      <Typography>{file ? file.name : ""}</Typography>
      <UploadButton file={file} />
    </Stack>
  );
};
