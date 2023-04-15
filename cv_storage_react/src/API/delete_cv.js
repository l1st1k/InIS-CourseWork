import { api } from "../API";

export const delete_cv = async (cv_id) => {
  return new Promise((resolve) =>
    api
      .delete(`cv/${cv_id}`)
      .then((response) => response.json())
      .then((json) => setTimeout(() => resolve(json), 3000))
  );
};
