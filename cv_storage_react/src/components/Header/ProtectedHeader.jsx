import React from "react";
import { useNavigate } from "react-router-dom";
import { Stack, AppBar, Divider } from "@mui/material";

import { Logo } from "../Header";
import { HeaderButton } from "../UI/Buttons";
import {useStore} from "../../store";
import {auth_logout} from "../../API";

export const ProtectedHeader = () => {
  const navigate = useNavigate();
  const { setAuthState } = useStore();

  const handleLogout = async (event) => {
    event.preventDefault();

    let resp = await auth_logout();
    if (resp !== 200) {
      alert(resp);
    } else {
      setAuthState(false);
      navigate("/login");
    }
  };

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
        <HeaderButton text={"CV Catalog"} link="/catalog" />
        <HeaderButton text={"Upload CV"} link="/upload" />
        <HeaderButton text={"Managers"} link="/managers" />
        <HeaderButton text={"Vacancies"} link="/vacancies" />
        <HeaderButton text={"Log out"} onClick={handleLogout} />
      </Stack>
    </AppBar>
  );
};
