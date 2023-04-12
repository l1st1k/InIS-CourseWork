import React from "react";
import { useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export const CVPage = () => {
  const { cv_id } = useParams();
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
          CV page(id = {cv_id} ) with detailed information (future)
        </Typography>
        <Footer sx={{ flex: "2" }} />
      </Box>
    </>
  );
};
