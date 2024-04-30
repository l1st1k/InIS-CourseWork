import React from "react";
import { Box, Divider, Stack } from "@mui/material";

import { useStore } from "./../../store";
import { ManagerShort } from "../Manager_Components";
import { StyledPagination } from "../Pagination";
import { SearchBar } from "../SearchBar";

export const ManagerStack= ({ managers }) => {
  const { page, items_per_page, number_of_pages } = useStore();
  const start = (page - 1) * items_per_page;
  const end = start + items_per_page;

  return (
    <Box>
      <SearchBar type="manager" />
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
        {managers.slice(start, end).map((manager, index) => (
          <ManagerShort
            key={manager.manager_id}
            manager={manager}
            number={10 * (page - 1) + index + 1}
          />
        ))}
      </Stack>
      <StyledPagination totalPages={number_of_pages} />
    </Box>
  );
};
