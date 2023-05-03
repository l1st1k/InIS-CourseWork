import React, { useEffect } from "react";
import { Typography } from "@mui/material";

import { useStore } from "../store";
import { CVStack } from "../components/CV_Components";
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
    </>
  );
};
