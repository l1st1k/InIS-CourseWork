import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export const HomePage = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "98vh",
          justifyContent: "space-between",
        }}
      >
        <Header sx={{ flex: "2" }} />
        <Container maxWidth="md">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="#d2d2d2"
            gutterBottom
          >
            Welcome to CV Storage!
          </Typography>
          <Typography variant="h5" align="center" color="#d2d2d2" paragraph>
            Welcome to CV Storage - the ultimate solution for HR and recruitment
            teams. Our user-friendly platform allows for the secure and
            streamlined management of resumes, making it easy to store, organize
            and manipulate CVs. With advanced encryption and GDPR compliance, CV
            Storage offers a reliable and efficient way to find the perfect
            candidate for any role. Sign up today and start streamlining your
            recruitment process.
          </Typography>
        </Container>
        <Footer sx={{ flex: "2" }} />
      </Box>
    </>
  );
};
