import React from "react";
import { Alert } from "@mui/material";

const CustomAlert = ({ mes }) => {
  return <Alert severity="error">{mes}</Alert>;
};

export default CustomAlert;
