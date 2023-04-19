import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { Box, Stack } from "@mui/material";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { get_single_cv, single_cv_example } from "../API";
import {
  DeleteTextButton,
  DownloadCSVTextButton,
} from "../components/UI/Buttons";
import { CVTable } from "../components/CV_Components";

export const CVPage = () => {
  const { cv_id } = useParams();
  const [person, setPerson] = useState({});

  useEffect(() => {
    const loadData = async () => {
      // API-on version
      // const response = await get_single_cv(cv_id);
      // console.log(response);
      // setPerson(response.data);

      // API-off version
      setPerson(single_cv_example);

      return cv_id;
    };
    loadData().then((id) => console.log(`Fetched page for ID = ${id}`));
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "98vh",
        justifyContent: "space-between",
      }}
    >
      <Header sx={{ flex: "2" }} />
      <CVTable cv={person} />
      <CV_Links cv_id={cv_id} person={person} />
      <Footer sx={{ flex: "2" }} />
    </Box>
  );
};

const CV_Links = ({ cv_id, person }) => {
  const filename = `CV_${person.last_name}`;
  return (
    <Stack
      direction={"row"}
      spacing={3}
      sx={{ flex: "2", alignItems: "center" }}
    >
      <DownloadCSVTextButton cv_id={cv_id} filename={filename} />
      <DeleteTextButton cv_id={cv_id} />
    </Stack>
  );
};
