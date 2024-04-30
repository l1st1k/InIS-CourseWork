import { Stack } from "@mui/material";

import { SearchInput } from "../SearchBar";

export const SearchBar = (type) => {
  return (
    <Stack
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{ my: 3 }}
    >
      <SearchInput {...type} />
    </Stack>
  );
};
