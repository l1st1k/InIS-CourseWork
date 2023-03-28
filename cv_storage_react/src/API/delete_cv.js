import api from "./api_base.js";

const delete_cv = async (cv_id) => {
    try {
        let response = await api.delete(`cv/${cv_id}`);
        //TODO check for deletion status code, if its 200
        if (response.status !== 200) throw Error(await response.json());
        return response.json();
    } catch (err) {
        //TODO custom alert on error
        console.log(err.message)
    }
}

export default delete_cv;