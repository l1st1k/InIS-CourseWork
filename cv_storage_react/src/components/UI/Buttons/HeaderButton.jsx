import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export const HeaderButton = (props) => {
  const { text, link } = props;
  return (
    <Link to={link} style={{ textDecoration: "none" }}>
      <Button variant={"text"} sx={{ color: "#d2d2d2" }}>
        {text}
      </Button>
    </Link>
  );
};

HeaderButton.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};
