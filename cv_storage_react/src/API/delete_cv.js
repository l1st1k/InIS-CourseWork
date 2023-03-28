import api from "./api_base.js";
import cvs from "./data.js"

const delete_cv = async (cv_id) => {
    // try {
    //     return await api
    //         .get("cvs")
    //         .json();
    // } catch (err) {
    //     //TODO custom alert on error
    //     console.log(err.message)
    // }
    cvs.cvs.reduce((previousValue, currentValue) => {
        if (currentValue.cv_id !== cv_id) {
            previousValue.push(currentValue)
        }
    }, [])
}

export default delete_cv;