import { CVStack } from "../components/CV_Components";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import useStore from "../store";
import React, { useEffect } from "react";
import { Box, Typography } from "@mui/material";

export const Catalog = () => {
  const { cvs, searched_cvs, page } = useStore();

  useEffect(() => {
    useStore
      .getState()
      .fetchCVs()
      .then(() => console.log(`Fetched ${cvs.length} CVs`));
  }, []);

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
            На данный момент база резюме пуста!
          </Typography>
        )}
        <Footer sx={{ flex: "2" }} />
      </Box>
    </>
  );
};
