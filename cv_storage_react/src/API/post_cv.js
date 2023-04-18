import { api } from "../API";

export const post_cv = async () => {
  try {
    const response = await api.post(`cv`);
    // TODO pass .csv-file
    if (response.status !== 201) throw Error(await response.json());
    return response.json();
  } catch (err) {
    console.log(err.message);
    return "Failed";
  }
};
