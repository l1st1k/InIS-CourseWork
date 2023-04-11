import React from "react";
import { Stack, AppBar, Divider } from "@mui/material";
import { Logo } from "../Header";
import { HeaderButton } from "../Buttons";

export const Header = () => {
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
