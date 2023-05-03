import React, { useEffect, useState } from "react";
import { InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import { useStore } from "../../store";

export const SearchInput = () => {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const timerId = setTimeout(() => {
      useStore
        .getState()
        .searchCVs(searchTerm)
        .then(() => console.log(`Searched for: ${searchTerm}`));
    }, 500);

    return () => clearTimeout(timerId);
  }, [searchTerm]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <TextField
      id="search"
      type="search"
      label="Search"
      value={searchTerm}
      onChange={handleChange}
      sx={{
        width: 0.35,
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: "#d2d2d2",
        },
        "&:hover .MuiOutlinedInput-notchedOutline": {
          borderColor: "#d2d2d2",
        },
        "&:focus .MuiOutlinedInput-notchedOutline": {
          borderColor: "#d2d2d2",
        },
        "& .MuiInputBase-inputAdornedEnd": { color: "#d2d2d2" },
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
          {
            borderColor: "#cbaeff",
          },
      }}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <SearchIcon sx={{ color: "#cbaeff" }} />
          </InputAdornment>
        ),
      }}
    />
  );
};
