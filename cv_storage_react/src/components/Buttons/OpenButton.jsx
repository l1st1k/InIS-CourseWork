import React from 'react';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import {IconButton} from "@mui/material";

const OpenButton = (cv_id) => {
    return (
        <IconButton>
            <OpenInNewIcon/>
        </IconButton>
    );
};

export default OpenButton;