import { CVPage, UploadPage, HomePage, Catalog } from "../pages";

export const routes = [
  { path: "/", component: HomePage },
  { path: "/catalog", component: Catalog },
  { path: "/upload", component: UploadPage },
  { path: "/cv/:cv_id", component: CVPage },
];

export { AppRouter } from "./AppRouter.jsx";
