import React, { useEffect } from "react";
import { Typography } from "@mui/material";

import { useStore } from "../store";
import { ManagerStack } from "../components/Manager_Components";
import { Loader } from "../components/Loader";

export const Managers = () => {
  const { managers, searched_managers, loading } = useStore();

  useEffect(() => {
    useStore
      .getState()
      .fetchManagers()
      .then((amount) => console.log(`Fetched ${amount} Managers`));
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      {managers.length ? (
        <ManagerStack managers={searched_managers} sx={{ flex: "10 1" }} />
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
          No managers in a company!
        </Typography>
      )}
    </>
  );
};
