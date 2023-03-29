import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import {IconButton} from "@mui/material";

const GitHubButton = () => {
    return (
        <IconButton href="https://github.com/l1st1k" target="_blank">
            <GitHubIcon />
        </IconButton>
    );
};

export default GitHubButton;