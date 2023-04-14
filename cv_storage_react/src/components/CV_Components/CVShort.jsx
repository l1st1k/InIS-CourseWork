import React from "react";
import { year_to_string } from "../../utils";
import { DeleteButton, OpenButton, DownloadButton } from "../UI/Buttons";
import { Box, Stack, Typography } from "@mui/material";

export const CVShort = ({ cv, number }) => {
  return (
    <Box
      component="article"
      key={cv.cv_id}
      sx={{
        padding: 2,
        width: 1,
        border: "2px solid #d2d2d2",
        display: "flex",
      }}
    >
      <Stack direction={"column"} alignItems="stretch" sx={{ flex: "8" }}>
        <Typography variant="body1" align="left">
          {number}. {cv.first_name} {cv.last_name}, {cv.age}
        </Typography>
        <Typography variant="body1">{cv.major}</Typography>
        <Typography variant="body2">
          {year_to_string(cv.years_of_exp)}
        </Typography>
      </Stack>
      <CV_Links cv_id={cv.cv_id} />
    </Box>
  );
};

const CV_Links = ({ cv_id }) => {
  return (
    <Stack
      direction={"row"}
      spacing={1}
      justifyContent={"end"}
      sx={{ flex: "2" }}
    >
      <OpenButton cv_id />
      <DownloadButton cv_id />
      <DeleteButton cv_id />
    </Stack>
  );
};
