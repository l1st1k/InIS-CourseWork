import { CVPage, UploadPage, HomePage, Catalog, LoginPage, RegistrationPage } from "../pages";

export const routes = [
  { path: "/", component: HomePage },
  { path: "/login", component: LoginPage },
  { path: "/registration", component: RegistrationPage },
  { path: "/catalog", component: Catalog},
  { path: "/upload", component: UploadPage, private: true},
  { path: "/cv/:cv_id", component: CVPage,},
];

export { AppRouter } from "./AppRouter.jsx";
export { PrivateRoute } from "./PrivateRoute.jsx";
