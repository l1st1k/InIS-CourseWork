import React from "react";
import { Stack } from "@mui/material";

import { GitHubButton, LinkedInButton } from "../UI/Buttons";

export const FooterLinks = () => {
  return (
    <Stack direction={"row"} spacing={2} sx={{ my: 3 }}>
      <LinkedInButton />
      <GitHubButton
        link={"https://github.com/l1st1k/InIS-CourseWork"}
        name={"Frontend"}
      />
      <GitHubButton
        link={"https://github.com/l1st1k/CV-storage"}
        name={"Backend"}
      />
    </Stack>
  );
};
