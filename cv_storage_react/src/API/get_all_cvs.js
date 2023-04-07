import api from "./api_base.js";

export const get_all_cvs = async () => {
  try {
    let response = await api.get("cvs");
    if (response.status !== 200) throw Error(await response.json());
    return response.json();
  } catch (err) {
    //TODO custom alert on error
    console.log(err.message);
  }
};
