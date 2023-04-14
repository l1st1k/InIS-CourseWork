import { api } from "../API";

export const get_csv = async (cv_id) => {
  try {
    const response = await api.get(`cv/${cv_id}/csv`);
    if (response.status !== 200) throw Error(await response.json());
    return response.json();
  } catch (err) {
    console.log(err.message);
  }
};
