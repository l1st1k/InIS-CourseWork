import React from "react";
import { Alert } from "@mui/material";

export const CustomAlert = ({ mes }) => {
  return <Alert severity="error">{mes}</Alert>;
};
