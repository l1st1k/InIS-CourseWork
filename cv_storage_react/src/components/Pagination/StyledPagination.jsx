import React from "react";
import { Pagination, Stack } from "@mui/material";
import { useStore } from "./../../store";

export const StyledPagination = ({ totalPages }) => {
  const { page, setPage } = useStore();
  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <Stack alignItems="center">
      <Pagination
        page={page}
        onChange={handlePageChange}
        count={totalPages}
        sx={{
          py: 3,
          "& .MuiPaginationItem-root": {
            color: "#d2d2d2",
            bgcolor: "#363636",
            "&.Mui-selected": {
              bgcolor: "#cbaeff",
              color: "#252525",
            },
          },
        }}
      />
    </Stack>
  );
};
