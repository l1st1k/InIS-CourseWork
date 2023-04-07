import React from "react";
import { Container, Typography } from "@mui/material";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export const EmptyCatalog = () => {
  return (
    <>
      {/*TODO add flex-container around 3 comps*/}
      <Container>
        <Header />
        <Typography variant="h4" align="center" sx={{ py: 3 }}>
          На данный момент база резюме пуста!
        </Typography>
        <Footer />
      </Container>
    </>
  );
};
