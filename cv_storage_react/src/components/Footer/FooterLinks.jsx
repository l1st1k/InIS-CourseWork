import React from "react";
import { Stack } from "@mui/material";

import { GitHubButton, LinkedInButton } from "../UI/Buttons";

export const FooterLinks = () => {
  return (
    <Stack direction={"row"} spacing={2} sx={{ my: 3 }}>
      <LinkedInButton />
      <GitHubButton
        link={import.meta.env.VITE_FRONTEND_REPO_URL}
        name={"Frontend"}
      />
      <GitHubButton
        link={import.meta.env.VITE_BACKEND_REPO_URL}
        name={"Backend"}
      />
    </Stack>
  );
};
