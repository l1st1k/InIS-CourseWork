import React from "react";
import { Box, Typography } from "@mui/material";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { TableFields, UploadBar } from "../components/UploadBar";

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
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h5" align="center" color="#d2d2d2" paragraph>
            We only accept .csv format for efficient processing!
            <br /> Your .csv-file should contain the following fields:
          </Typography>
          <TableFields />
          <UploadBar />
        </Box>
        <Footer sx={{ flex: "2" }} />
      </Box>
    </>
  );
};
