import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { get_single_cv } from "../API";

export const CVPage = () => {
  const { cv_id } = useParams();
  const [person, setPerson] = useState({});
  useEffect(() => {
    const loadData = async () => {
      const response = await get_single_cv(cv_id);
      console.log(response);
      setPerson(response.data);
      return cv_id;
    };

    loadData().then((id) => console.log(`Fetched page for ID = ${id}`));
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
        <Typography
          variant="h4"
          sx={{
            py: 3,
            flex: "10 1",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          {JSON.stringify(person)}
        </Typography>
        <Footer sx={{ flex: "2" }} />
      </Box>
    </>
  );
};
