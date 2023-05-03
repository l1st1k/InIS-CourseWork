import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { Stack } from "@mui/material";

import { get_single_cv } from "../API";
import {
  DeleteTextButton,
  DownloadCSVTextButton,
} from "../components/UI/Buttons";
import { CVTable } from "../components/CV_Components";
import { Loader } from "../components/Loader";
import { useStore } from "../store";

export const CVPage = () => {
  const { cv_id } = useParams();
  const [person, setPerson] = useState({});
  const { loading, setLoading } = useStore();

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);

      // API-on version
      const response = await get_single_cv(cv_id);
      setPerson(response.data);

      // API-off version
      // setPerson(single_cv_example);

      setLoading(false);
      return cv_id;
    };
    loadData().then((id) => console.log(`Fetched page for ID = ${id}`));
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <CVTable cv={person} />
      <CV_Links cv_id={cv_id} person={person} />
    </>
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
