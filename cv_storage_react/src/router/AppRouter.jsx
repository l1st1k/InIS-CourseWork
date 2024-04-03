import React from "react";
import { Box } from "@mui/material";
import { Navigate, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { PrivateRoute, routes } from "../router";
import { Footer } from "../components/Footer";
import { ProtectedHeader, PublicHeader } from "../components/Header";
import {useStore} from "../store/index.js";

export const AppRouter = () => {
    const { is_auth } = useStore();

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
          { is_auth ? <ProtectedHeader sx={{ flex: "2" }} /> : <PublicHeader sx={{ flex: "2" }} /> }
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
