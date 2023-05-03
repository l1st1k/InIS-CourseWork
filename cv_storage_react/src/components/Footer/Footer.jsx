import React from "react";
import { Box, Container, Stack, Typography } from "@mui/material";

import { Copyright, FooterLinks } from "../Footer";
import { Logo } from "../Header";

export const Footer = () => {
  return (
    <Box component="footer" sx={{ bgcolor: "#363636" }}>
      <Container maxWidth="lg" sx={{ py: 2 }}>
        <Stack direction={"row"} spacing={2} sx={{ alignItems: "center" }}>
          <Logo />
          <Typography variant="h6" align="center" gutterBottom>
            CV Storage
          </Typography>
        </Stack>
        <FooterLinks />
        <Copyright />
      </Container>
    </Box>
  );
};
