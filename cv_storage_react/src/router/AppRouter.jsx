import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { routes } from "../router";

export const AppRouter = () => {
  // if (loading) {
  //     return <Loader/>
  // }

  return (
    <>
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
      <ToastContainer pauseOnFocusLoss pauseOnHover />
    </>
  );
};
