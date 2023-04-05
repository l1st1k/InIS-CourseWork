import React from "react";
import { Pagination, Stack } from "@mui/material";

const StyledPagination = ({ totalPages }) => {
  const handlePageChange = (event, page) => {};

  return (
    <Stack alignItems="center">
      <Pagination
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

export default StyledPagination;
