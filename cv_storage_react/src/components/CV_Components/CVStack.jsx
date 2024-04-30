import React from "react";
import { Box, Divider, Stack } from "@mui/material";

import { useStore } from "./../../store";
import { CVShort } from "../CV_Components";
import { StyledPagination } from "../Pagination";
import { SearchBar } from "../SearchBar";

export const CVStack = ({ cvs }) => {
  const { page, items_per_page, number_of_pages } = useStore();
  const start = (page - 1) * items_per_page;
  const end = start + items_per_page;

  return (
    <Box>
      <SearchBar />
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
        {cvs.slice(start, end).map((cv, index) => (
          <CVShort
            key={cv.cv_id}
            cv={cv}
            number={10 * (page - 1) + index + 1}
          />
        ))}
      </Stack>
      <StyledPagination totalPages={number_of_pages} />
    </Box>
  );
};
