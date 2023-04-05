import React from "react";
import Copyright from "./Copyright.jsx";
import { Box, Container, Stack, Typography } from "@mui/material";
import FooterLinks from "./FooterLinks.jsx";
import Logo from "../Header/Logo.jsx";

const Footer = () => {
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

export default Footer;
