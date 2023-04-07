import React from "react";
import { Button } from "@mui/material";
import PropTypes from "prop-types";

export const HeaderButton = (props) => {
  const { text } = props;
  return (
    <Button variant={"text"} sx={{ color: "#d2d2d2" }}>
      {text}
    </Button>
  );
};

HeaderButton.propTypes = {
  text: PropTypes.string.isRequired,
};
