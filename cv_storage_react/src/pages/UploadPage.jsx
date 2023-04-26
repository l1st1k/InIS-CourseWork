import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { Header } from "../components/Header/index.js";
import { Footer } from "../components/Footer/index.js";
import { UploadButton } from "../components/UI/Buttons/index.js";

export const UploadPage = () => {
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
        <Container maxWidth="md" sx={{ px: 0 }}>
          <Typography
            component="h5"
            variant="h3"
            align="center"
            color="#d2d2d2"
            sx={{ flex: "1" }}
            gutterBottom
          >
            Welcome to CV upload page!
          </Typography>
          <Typography
            sx={{ flex: "2" }}
            variant="h5"
            align="center"
            color="#d2d2d2"
            paragraph
          >
            We only accept .csv format for efficient processing. Select your
            file, double-check accuracy, and upload. Your data is safe with us.
          </Typography>
          <UploadButtons />
        </Container>
        <Footer sx={{ flex: "2" }} />
      </Box>
    </>
  );
};
