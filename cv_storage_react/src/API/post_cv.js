import { api } from "../API";

export const post_cv = async (data) => {
  try {
    const response = await api.post(`cv`, {
      headers: {
        Accept: "application/json",
      },
      body: data,
    });
    if (response.status !== 201) throw Error(await response.json());
    console.log(await response.json());
    return response.status;
  } catch (err) {
    console.log(err.message);
    return "Failed";
  }
};
