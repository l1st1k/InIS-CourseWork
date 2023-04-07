import CVStack from "../components/CV_Components/CVStack.jsx";
import Footer from "../components/Footer/Footer.jsx";
import Header from "../components/Header/Header.jsx";
import SearchBar from "../components/SearchBar/SearchBar.jsx";
import StyledPagination from "../components/Pagination/StyledPagination.jsx";
import useStore from "./../store";
import React, { useEffect } from "react";
import { Typography } from "@mui/material";
import EmptyCatalog from "./EmptyCatalog.jsx";

function Catalog() {
  const { cvs, loading, page, number_of_pages } = useStore();

  useEffect(() => {
    useStore.getState().fetchCVs();
  }, [page]);

  // Empty Database case
  if (!cvs.length) {
    return <EmptyCatalog />;
  }

  return (
    <>
      <Header />
      <SearchBar />
      <CVStack cvs={cvs} />
      <StyledPagination totalPages={number_of_pages} />
      <Footer />
    </>
  );
}

export default Catalog;
