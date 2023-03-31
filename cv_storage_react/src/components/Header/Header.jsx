import React from "react";
import {
  Stack,
  Container,
  Typography,
  Box,
  AppBar,
  Toolbar,
  Divider,
} from "@mui/material";
import Logo from "../Logo.jsx";
import LinkedInButton from "../Buttons/LinkedInButton.jsx";
import HeaderButton from "../Buttons/HeaderButton.jsx";

const Header = () => {
  return (
    // <Box className={"header"} component="header">
    //   {/*<Container maxWidth="lg" sx={{ py: 2 }}>*/}
    //   {/*  <Stack className={"footer-stack"} direction={"row"} spacing={2}>*/}
    //   <Logo />
    //   <Typography variant="h6" align="center" gutterBottom>
    //     CV Storage
    //   </Typography>
    //   {/*  </Stack>*/}
    //   {/*</Container>*/}
    // </Box>

    <AppBar position="relative">
      <Stack
        className={"header"}
        direction={"row"}
        spacing={2}
        justifyContent={"left"}
        sx={{ py: 1 }}
      >
        <Divider orientation="vertical" variant="middle" flexItem />
        <Logo className={"margin-left-1"} />

        <HeaderButton text={"CV Storage"} />
        <HeaderButton text={"Catalog"} />
        <HeaderButton text={"Upload CV"} />
      </Stack>
    </AppBar>
  );
};

export default Header;
