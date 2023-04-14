import { api } from "../API";

export const get_all_cvs = async () => {
  try {
    const response = await api.get("cvs");
    if (response.status !== 200) throw Error(await response.json());
    return response.json();
  } catch (err) {
    //TODO custom alerts on every api call
    console.log(err.message);
  }
};
