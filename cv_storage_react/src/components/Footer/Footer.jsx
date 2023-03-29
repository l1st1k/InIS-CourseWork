import React from 'react';
import Copyright from "./Copyright.jsx";
import {Box, Container, Typography} from "@mui/material";
import FooterLinks from "./FooterLinks.jsx";

const Footer = () => {
    return (
        <Box
            className={'footer'}
            component="footer"
        >
            <Container
                maxWidth="lg"
                sx = {{mt: 3, py: 1}}
            >
                <Typography
                    variant="h6"
                    align="center"
                    gutterBottom
                >
                    CV Storage
                </Typography>
                <FooterLinks/>
                <Copyright />
            </Container>
        </Box>
    );
};

export default Footer;