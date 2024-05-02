import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import { get_single_vacancy, get_top_cvs } from "../API";
import { CVStackPure } from "../components/CV_Components";
import { Loader } from "../components/Loader";
import { useStore } from "../store";
import { VacancyShort } from "../components/Vacancy_Components";
import { Stack, Typography } from "@mui/material";

export const VacancyPage = () => {
  const { vacancy_id } = useParams();
  const [vacancy, setVacancy] = useState({});
  const [cvs, setCVs] = useState([]);
  const { loading, setLoading } = useStore();

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);

      const vacancy_response = await get_single_vacancy(vacancy_id);
      setVacancy(vacancy_response.data);

      const top_cvs_response = await get_top_cvs(vacancy_id);
      setCVs(top_cvs_response);

      setLoading(false);
      return vacancy_id;
    };
    loadData().then((id) => console.log(`Fetched vacancy with ID = ${id}`));
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Stack
        direction={"column"}
        spacing={3}
        sx={{ flex: "6", alignItems: "center" }}
        width={0.6}
      >
        <Typography variant="h4" align="left" gutterBottom>
          Selected vacancy:
        </Typography>
        <VacancyShort
          key={vacancy.vacancy_id}
          vacancy={vacancy}
          number={false}
          showButtons={false}
        />
        <Typography variant="h4" align="left" gutterBottom>
          Top candidates:
        </Typography>
        <CVStackPure cvs={cvs} />
      </Stack>
    </>
  );
};
