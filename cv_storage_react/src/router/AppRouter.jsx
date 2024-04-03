import React from "react";
import { Box } from "@mui/material";
import { Navigate, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { PrivateRoute, routes } from "../router";
import { Footer } from "../components/Footer";
import { ProtectedHeader, PublicHeader } from "../components/Header";

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
        <ProtectedHeader sx={{ flex: "2" }} />  // todo if statement for store value
          <Routes>
              {routes.map((route) => (
                  route.private ? (
                      <Route
                          key={route.path}
                          path={route.path}
                          element={<PrivateRoute component={route.component} />}
                      />
                  ) : (
                      <Route
                          key={route.path}
                          path={route.path}
                          element={<route.component />}
                      />
                  )
              ))}
              <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        <Footer sx={{ flex: "2" }} />
      </Box>

      <ToastContainer pauseOnFocusLoss pauseOnHover />
    </>
  );
};
