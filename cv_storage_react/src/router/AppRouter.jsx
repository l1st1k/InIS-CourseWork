import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { routes } from "../router";
import { useStore } from "../store";
import { Loader } from "../components/Loader";

export const AppRouter = () => {
  const { loading } = useStore();
  console.log(loading);

  if (loading) {
    return <Loader />;
  }

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
