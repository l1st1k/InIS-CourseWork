import React from "react";

import { DeleteButton } from "../UI/Buttons";
import { Box, Stack, Typography } from "@mui/material";


export const ManagerShort = ({ manager, number }) => {
  return (
    <Box
      component="article"
      key={manager.manager_id}
      sx={{
        bgcolor: "#363636",
        padding: 2,
        width: 1,
        border: "2px solid #d2d2d2",
        display: "flex",
      }}
    >
      <Stack direction={"column"} alignItems="stretch" sx={{ flex: "8" }}>
        <Typography variant="body1" align="left">
          {number}. {manager.email}
        </Typography>
        <Typography variant="body2">
          {`ID - ${manager.manager_id}`}
        </Typography>
      </Stack>
      <Manager_Links manager_id={manager.manager_id} />
    </Box>
  );
};

const Manager_Links = ({ manager_id }) => {
  return (
    <Stack
      direction={"row"}
      spacing={1}
      justifyContent={"end"}
      sx={{ flex: "2" }}
    >
      <DeleteButton id={manager_id} type={"manager"} />
    </Stack>
  );
};
