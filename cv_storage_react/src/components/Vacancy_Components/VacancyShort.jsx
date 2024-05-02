import React from "react";

import { DeleteButton, OpenButton } from "../UI/Buttons";
import { Box, Stack, Typography } from "@mui/material";
import { year_to_string } from "../../utils/index.js";

export const VacancyShort = ({ vacancy, number, showButtons }) => {
  const numberStr = number ? `${number}. ` : "";

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
          {numberStr}
          {vacancy.major}, {year_to_string(vacancy.years_of_exp)}
        </Typography>
        <Typography variant="body2">{vacancy.skills}</Typography>
      </Stack>
      <Vacancy_Links
        vacancy_id={vacancy.vacancy_id}
        showButtons={showButtons}
      />
    </Box>
  );
};

const Vacancy_Links = ({ vacancy_id, showButtons }) => {
  return (
    <Stack
      direction={"row"}
      spacing={1}
      justifyContent={"end"}
      sx={{ flex: "2" }}
    >
      {showButtons && <OpenButton id={vacancy_id} type={"vacancy"} />}
      <DeleteButton id={vacancy_id} type={"vacancy"} />
    </Stack>
  );
};
