import React from 'react';
import PropTypes from 'prop-types';
import GitHubIcon from '@mui/icons-material/GitHub';
import {Button, IconButton} from "@mui/material";

const GitHubButton = (props) => {
    const { name, link } = props;

    return (
        <Button
            variant={'contained'}
            startIcon={<GitHubIcon />}
            size={'small'}
            href={link}
            target="_blank"
            color={'secondary'}
        >
            {name}
        </Button>
    );
};

GitHubButton.propTypes = {
    name: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
};

export default GitHubButton;