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
import Logo from "./Logo.jsx";
import LinkedInButton from "../Buttons/LinkedInButton.jsx";
import HeaderButton from "../Buttons/HeaderButton.jsx";

const Header = () => {
  return (
    <AppBar position="relative">
      <Stack
        className={"header"}
        direction={"row"}
        spacing={2}
        justifyContent={"left"}
        sx={{ py: 1 }}
      >
        <Divider orientation="vertical" variant="middle" flexItem />
        <Logo />
        <HeaderButton text={"CV Storage"} />
        <Divider
          orientation="vertical"
          variant="middle"
          flexItem
          sx={{ bgcolor: "#d2d2d2", borderRightWidth: 2 }}
        />
        <HeaderButton text={"Catalog"} />
        <HeaderButton text={"Upload CV"} />
      </Stack>
    </AppBar>
  );
};

export default Header;
