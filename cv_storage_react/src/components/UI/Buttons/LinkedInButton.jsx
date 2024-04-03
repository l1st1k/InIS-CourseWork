import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Button } from "@mui/material";

export const LinkedInButton = () => {
  return (
    <Button
      variant={"contained"}
      startIcon={<LinkedInIcon />}
      size={"small"}
      href={import.meta.env.VITE_DEVELOPER_URL}
      target="_blank"
      sx={{color:"black"}}
    >
      Developer
    </Button>
  );
};
