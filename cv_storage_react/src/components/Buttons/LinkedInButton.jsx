import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import {Button} from "@mui/material";

const LinkedInButton = () => {
    return (
        <Button
            variant={'contained'}
            startIcon={<LinkedInIcon />}
            size={'small'}
            href="https://www.linkedin.com/in/l1st1k/"
            target="_blank"
        >
            Developer
        </Button>
    );
};

export default LinkedInButton;

