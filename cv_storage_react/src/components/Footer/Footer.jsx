import React from "react";
import { Box, Container, Stack, Typography } from "@mui/material";
import { Copyright, FooterLinks } from "../Footer";
import { Logo } from "../Header";

export const Footer = () => {
  return (
    <Box className={"footer"} component="footer">
      <Container maxWidth="lg" sx={{ py: 2 }}>
        <Stack className={"footer-stack"} direction={"row"} spacing={2}>
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
