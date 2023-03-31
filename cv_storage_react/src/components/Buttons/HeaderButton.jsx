import React from "react";
import { Button } from "@mui/material";
import PropTypes from "prop-types";

const HeaderButton = (props) => {
  const { text } = props;
  return <Button variant={"text"}>{text}</Button>;
};

HeaderButton.propTypes = {
  text: PropTypes.string.isRequired,
};

export default HeaderButton;
