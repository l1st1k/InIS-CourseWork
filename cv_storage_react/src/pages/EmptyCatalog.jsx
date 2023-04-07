import React from "react";
import Header from "../components/Header/Header.jsx";
import { Typography } from "@mui/material";
import Footer from "../components/Footer/Footer.jsx";

const EmptyCatalog = () => {
  return (
    <>
      <Header />
      <Typography variant="h4" align="center" sx={{ py: 3 }}>
        На данный момент база резюме пуста!
      </Typography>
      <Footer />
    </>
  );
};

export default EmptyCatalog;
