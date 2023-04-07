import React from "react";
import { Typography } from "@mui/material";

export const Copyright = () => {
  return (
    <Typography variant="body2" align="center">
      {"© "}
      {new Date().getFullYear()}
      {" CV Storage. All rights reserved."}
    </Typography>
  );
};
