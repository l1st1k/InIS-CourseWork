import { api } from "../API";

export const delete_cv = async (cv_id) => {
  return new Promise(() =>
    api.delete(`cv/${cv_id}`).then((response) => response.json())
  );
};
