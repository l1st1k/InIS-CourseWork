import { Stack } from "@mui/material";
import SearchInput from "./SearchInput.jsx";

const SearchBar = () => {
  return (
    <Stack
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{ my: 2 }}
    >
      <SearchInput />
    </Stack>
  );
};

export default SearchBar;
