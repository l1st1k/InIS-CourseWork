import { year_to_string } from "../utils";

const createData = (name, value) => {
  return { name, value };
};

export const makeRows = (cv) => [
  createData("First name", cv.first_name),
  createData("Last name", cv.last_name),
  createData("Age", cv.age),
  createData("Phone number", cv.phone_number),
  createData("Major", cv.major),
  createData("Years of experience", year_to_string(cv.years_of_exp)),
  createData("Skills", cv.skills),
  createData("Project amount", cv.project_amount),
  createData("Projects", cv.projects),
];
