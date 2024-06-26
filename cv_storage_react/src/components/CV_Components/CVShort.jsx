import React from "react";

import { DeleteButton, OpenButton, DownloadButton } from "../UI/Buttons";
import { Box, Stack, Typography } from "@mui/material";

import { year_to_string } from "../../utils";

export const CVShort = ({ cv, number }) => {
  const numberStr = number ? `${number}. ` : "";

  const filename = `CV_${cv.last_name}`;
  return (
    <Box
      component="article"
      key={cv.cv_id}
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
          {numberStr}
          {cv.first_name} {cv.last_name}, {cv.age}
        </Typography>
        <Typography variant="body1">{cv.major}</Typography>
        <Typography variant="body2">
          {year_to_string(cv.years_of_exp)}
        </Typography>
      </Stack>
      <CV_Links cv_id={cv.cv_id} filename={filename} />
    </Box>
  );
};

const CV_Links = ({ cv_id, filename }) => {
  return (
    <Stack
      direction={"row"}
      spacing={1}
      justifyContent={"end"}
      sx={{ flex: "2" }}
    >
      <OpenButton id={cv_id} type={"cv"} />
      <DownloadButton cv_id={cv_id} filename={filename} />
      <DeleteButton id={cv_id} type={"cv"} />
    </Stack>
  );
};
