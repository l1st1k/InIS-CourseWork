import { CVStack } from "../components/CV_Components";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { useStore } from "../store";
import React, { useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { Loader } from "../components/Loader";

export const Catalog = () => {
  const { cvs, searched_cvs, loading } = useStore();

  useEffect(() => {
    useStore
      .getState()
      .fetchCVs()
      .then((amount) => console.log(`Fetched ${amount} CVs`));
  }, []);

  if (loading) {
    return <Loader />;
  }

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
        {cvs.length ? (
          <CVStack cvs={searched_cvs} sx={{ flex: "10 1" }} />
        ) : (
          <Typography
            variant="h4"
            sx={{
              py: 3,
              flex: "10 1",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            CV Storage is now empty!
          </Typography>
        )}
        <Footer sx={{ flex: "2" }} />
      </Box>
    </>
  );
};
