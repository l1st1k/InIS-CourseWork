import { api } from "../API";
// Checked - 100%
export const get_all_cvs = async () => {
  try {
    const response = await api.get("cvs");
    if (response.status !== 200) throw Error(await response.json());
    return response.json();
  } catch (err) {
    console.log(err.message);
  }
};
