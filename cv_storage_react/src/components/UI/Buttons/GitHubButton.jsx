import React from "react";
import PropTypes from "prop-types";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Button } from "@mui/material";

export const GitHubButton = (props) => {
  const { name, link } = props;

  return (
    <Button
      variant={"contained"}
      startIcon={<GitHubIcon />}
      size={"small"}
      href={link}
      target="_blank"
      sx={{color:"black"}}
    >
      {name}
    </Button>
  );
};

GitHubButton.propTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};
