import api from "./api_base.js";

const get_all_cvs = async () => {
    try {
        return await api
            .get("cvs")
            .json();
    } catch (err) {
        //TODO custom alert on error
        console.log(err.message)
    }
}

export default get_all_cvs;