import React, { useEffect } from "react";
import { Typography } from "@mui/material";

import { useStore } from "../store";
import { VacancyStack } from "../components/Vacancy_Components";
import { Loader } from "../components/Loader";

export const Vacancies = () => {
    const { vacancies, searched_vacancies, loading } = useStore();

    useEffect(() => {
        useStore
            .getState()
            .fetchVacancies()
            .then((amount) => console.log(`Fetched ${amount} Vacancies`));
    }, []);

    if (loading) {
        return <Loader />;
    }

    return (
        <>
            {vacancies.length ? (
                <VacancyStack vacancies={searched_vacancies} sx={{ flex: "10 1" }} />
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
                    No vacancies in a company!
                </Typography>
            )}
        </>
    );
};
