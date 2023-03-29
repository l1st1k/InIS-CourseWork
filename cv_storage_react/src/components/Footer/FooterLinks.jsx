import React from 'react';
import GitHubButton from "../Buttons/GitHubButton.jsx";
import LinkedInButton from "../Buttons/LinkedInButton.jsx";
import {Stack} from "@mui/material";

const FooterLinks = () => {
    return (
        <Stack
            direction={'row'}
            spacing={2}
            sx = {{my:3}}
        >
            <LinkedInButton/>
            <GitHubButton link={'https://github.com/l1st1k/InIS-CourseWork'} name={'Frontend'}/>
            <GitHubButton link={'https://github.com/l1st1k/CV-storage'} name={'Backend'}/>
        </Stack>
    );
};

export default FooterLinks;