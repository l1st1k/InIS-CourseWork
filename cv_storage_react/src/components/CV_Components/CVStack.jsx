import React from "react";
import CVShort from "./CVShort.jsx";
import { Divider, Stack, Typography } from "@mui/material";
import useStore from "./../../store";

const CVStack = ({ cvs }) => {
  const { page, cv_per_page } = useStore();
  const start = (page - 1) * cv_per_page;
  const end = start + cv_per_page;

  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={2}
      divider={<Divider orientation="horizontal" variant="middle" flexItem />}
    >
      {cvs.slice(start, end).map((cv, index) => (
        <CVShort key={cv.cv_id} cv={cv} number={10 * (page - 1) + index + 1} />
      ))}
    </Stack>
  );
};

export default CVStack;
