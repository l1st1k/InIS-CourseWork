import { Stack } from "@mui/material";

import { SearchInput } from "../SearchBar";

export const SearchBar = () => {
  return (
    <Stack
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{ my: 3 }}
    >
      <SearchInput />
    </Stack>
  );
};
