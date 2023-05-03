import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { routes } from "../router";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header/index.js";
import { Box } from "@mui/material";

export const AppRouter = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "98.3vh",
          justifyContent: "space-between",
        }}
      >
        <Header sx={{ flex: "2" }} />
        <Routes>
          {routes.map((route) => (
            <Route
              path={route.path}
              element={<route.component />}
              key={route.path}
            />
          ))}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer sx={{ flex: "2" }} />
      </Box>

      <ToastContainer pauseOnFocusLoss pauseOnHover />
    </>
  );
};
