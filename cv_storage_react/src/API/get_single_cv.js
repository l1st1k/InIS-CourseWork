import { api } from "../API";

export const get_single_cv = async (cv_id) => {
  try {
    const response = await api.get(`cv/${cv_id}`);
    if (response.status !== 200) throw Error(await response.json());
    return response.json();
  } catch (err) {
    console.log(err.message);
  }
};
