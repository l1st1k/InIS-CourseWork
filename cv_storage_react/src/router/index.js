import {
  CVPage,
  UploadPage,
  HomePage,
  Catalog,
  LoginPage,
  RegistrationPage,
  Managers,
  AddManager,
  Vacancies,
  VacancyPage,
  AddVacancy,
} from "../pages";

export const routes = [
  // Auth
  { path: "/", component: HomePage },
  { path: "/login", component: LoginPage },
  { path: "/registration", component: RegistrationPage },

  // CV
  { path: "/catalog", component: Catalog, private: true },
  { path: "/cv/:cv_id", component: CVPage, private: true },
  { path: "/upload", component: UploadPage, private: true },

  // Manager
  { path: "/managers", component: Managers, private: true },
  { path: "/add_manager", component: AddManager, private: true },

  // Vacancy
  { path: "/vacancies", component: Vacancies, private: true },
  { path: "/vacancy/:vacancy_id", component: VacancyPage, private: true },
  { path: "/add_vacancy", component: AddVacancy, private: true },
];

export { AppRouter } from "./AppRouter.jsx";
export { PrivateRoute } from "./PrivateRoute.jsx";
