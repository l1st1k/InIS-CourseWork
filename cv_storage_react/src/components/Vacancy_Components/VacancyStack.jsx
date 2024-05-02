import React from "react";
import { Box, Divider, Stack } from "@mui/material";

import { useStore } from "./../../store";
import { VacancyShort } from "../Vacancy_Components";
import { StyledPagination } from "../Pagination";
import { SearchBar } from "../SearchBar";

export const VacancyStack = ({ vacancies }) => {
  const { page, items_per_page, number_of_pages } = useStore();
  const start = (page - 1) * items_per_page;
  const end = start + items_per_page;

  return (
    <Box>
      <SearchBar type="vacancy" />
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
        {vacancies.slice(start, end).map((vacancy, index) => (
          <VacancyShort
            key={vacancy.vacancy_id}
            vacancy={vacancy}
            number={10 * (page - 1) + index + 1}
            showButtons={true}
          />
        ))}
      </Stack>
      <StyledPagination totalPages={number_of_pages} />
    </Box>
  );
};
