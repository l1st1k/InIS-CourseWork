import {IconButton, Stack, Tooltip} from "@mui/material";

import { SearchInput } from "../SearchBar";
import {useStore} from "../../store/index.js";
import PlusOneIcon from "@mui/icons-material/PlusOne";
import React from "react";
import {useNavigate} from "react-router-dom";

export const SearchBar = ({type}) => {
  return (
    <Stack
      display="flex"
      justifyContent="center"
      alignItems="center"
      direction={"row"}
      sx={{ my: 3 }}
    >
      <SearchInput type={type} />
      <AddButton type={type} />
    </Stack>
  );
};

const AddButton = ({type}) => {
  const navigate = useNavigate();

  return (
      <IconButton
          sx={{ color: "#cbaeff" }}
          onClick={() => {
              if (type === "cv") {
                  navigate("/upload");
              }
              if (type === "manager") {
                  navigate("/add_manager");
              }
              if (type === "vacancy") {
                  navigate("/add_vacancy");
              }
          }}
      >
        <Tooltip title="Add new" placement="top">
          <PlusOneIcon />
        </Tooltip>
      </IconButton>
  );
}