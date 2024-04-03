import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export const HeaderButton = ({ text, link, onClick }) => {
    if (!onClick) {
        return (
            <Link to={link} style={{ textDecoration: "none" }}>
                <Button variant="text" sx={{ color: "#d2d2d2" }}>
                    {text}
                </Button>
            </Link>
        );
    }

    return (
        <Button variant="text" sx={{ color: "#d2d2d2" }} onClick={onClick}>
            {text}
        </Button>
    );
};

HeaderButton.propTypes = {
    text: PropTypes.string.isRequired,
    link: PropTypes.string,
    onClick: PropTypes.func,
};

HeaderButton.defaultProps = {
    link: "#",
    onClick: null,
};
