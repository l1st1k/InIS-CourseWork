import {CVPage, UploadPage, HomePage, Catalog, LoginPage, RegistrationPage, Managers} from "../pages";

export const routes = [
  { path: "/", component: HomePage },
  { path: "/login", component: LoginPage },
  { path: "/registration", component: RegistrationPage },

  { path: "/catalog", component: Catalog, private: true},
  { path: "/managers", component: Managers, private: true},
  { path: "/upload", component: UploadPage, private: true},
  { path: "/cv/:cv_id", component: CVPage, private: true},
];

export { AppRouter } from "./AppRouter.jsx";
export { PrivateRoute } from "./PrivateRoute.jsx";
