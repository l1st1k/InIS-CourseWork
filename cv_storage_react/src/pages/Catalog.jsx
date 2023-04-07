import { CVStack } from "../components/CV_Components";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { SearchBar } from "../components/SearchBar";
import { StyledPagination } from "../components/Pagination";
import useStore from "./../store";
import React, { useEffect } from "react";
import { EmptyCatalog } from "../pages";

export const Catalog = () => {
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
};
