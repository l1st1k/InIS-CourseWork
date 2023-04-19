import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./assets/styles/index.css";
import { AppRouter } from "./router";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AppRouter />
  </BrowserRouter>
);
