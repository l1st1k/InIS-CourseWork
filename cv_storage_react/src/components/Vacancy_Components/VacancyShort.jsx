import React from "react";

import { DeleteButton } from "../UI/Buttons";
import { Box, Stack, Typography } from "@mui/material";
import { year_to_string } from "../../utils/index.js";


export const VacancyShort = ({ vacancy, number }) => {
  return (
    <Box
      component="article"
      key={vacancy.manager_id}
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
          {number}. {vacancy.major}, {year_to_string(vacancy.years_of_exp)}
        </Typography>
        <Typography variant="body2">
          {vacancy.skills}
        </Typography>
      </Stack>
      <Vacancy_Links vacancy_id={vacancy.vacancy_id} />
    </Box>
  );
};

const Vacancy_Links = ({ vacancy_id }) => {
  return (
    <Stack
      direction={"row"}
      spacing={1}
      justifyContent={"end"}
      sx={{ flex: "2" }}
    >
      <DeleteButton id={vacancy_id} type={"vacancy"} />
    </Stack>
  );
};
