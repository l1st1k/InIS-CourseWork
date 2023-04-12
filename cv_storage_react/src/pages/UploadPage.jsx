import React from "react";
import { Box, Typography } from "@mui/material";
import { Header } from "../components/Header/index.js";
import { Footer } from "../components/Footer/index.js";

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
        <Typography
          variant="h4"
          sx={{
            py: 3,
            flex: "10 1",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          Upload page (future)
        </Typography>
        <Footer sx={{ flex: "2" }} />
      </Box>
    </>
  );
};
