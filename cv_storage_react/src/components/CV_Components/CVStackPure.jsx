import React from "react";
import { Box, Divider, Stack } from "@mui/material";

import { CVShort } from "../CV_Components";

export const CVStackPure = ({ cvs }) => {
  return (
    <Box>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        sx={{ width: 0.6 }}
        divider={
          <Divider
            variant="middle"
            flexItem
            sx={{ borderBottom: "1px solid #d2d2d2" }}
          />
        }
      >
        {cvs.map((cv, index) => (
          <CVShort key={cv.cv_id} cv={cv} number={false} />
        ))}
      </Stack>
    </Box>
  );
};
