import React from "react";
import { Stack, AppBar, Divider } from "@mui/material";

import { Logo } from "../Header";
import { HeaderButton } from "../UI/Buttons";

export const PublicHeader = () => {
  return (
    <AppBar position="relative">
      <Stack
        direction={"row"}
        spacing={2}
        justifyContent={"left"}
        sx={{ py: 1, bgcolor: "#363636", alignItems: "center", width: 1 }}
      >
        <Divider orientation="vertical" variant="middle" flexItem />
        <Logo />
        <HeaderButton text={"CV Storage"} link="/" />
        <Divider
          orientation="vertical"
          variant="middle"
          flexItem
          sx={{ bgcolor: "#d2d2d2", borderRightWidth: 2 }}
        />
        <HeaderButton text={"Sign in"} link="/login" />
        <HeaderButton text={"Registration"} link="/registration" />
      </Stack>
    </AppBar>
  );
};
