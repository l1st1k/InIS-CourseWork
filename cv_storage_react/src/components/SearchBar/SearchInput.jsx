import React, { useState } from "react";
import { InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export const SearchInput = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    //TODO cvs state change
  };

  return (
    <TextField
      id="search"
      type="search"
      label="Search"
      value={searchTerm}
      onChange={handleChange}
      sx={{
        width: 600,
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
