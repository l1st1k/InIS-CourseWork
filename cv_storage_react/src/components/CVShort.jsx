import React from 'react';
import year_to_string from "../utils/year_to_string.js";
import OpenButton from "./Buttons/OpenButton.jsx";
import DeleteButton from "./Buttons/DeleteButton.jsx";
import DownloadButton from "./Buttons/DownloadButton.jsx";

const CVShort = ({cv, number}) => {
    return (
        <div className={'cv-item'} key={cv.cv_id}>
                <div className="cv__content">
                    <strong>{number}. {cv.first_name} {cv.last_name}, {cv.age}</strong>
                    <div>{cv.major}</div>
                    <div>{year_to_string(cv.years_of_exp)}</div>
                </div>
                <div className="delete_button">
                    <OpenButton cv_id={cv.cv_id}/>
                    <DownloadButton cv_id={cv.cv_id}/>
                    <DeleteButton cv_id={cv.cv_id}/>
                </div>
        </div>
    );
};

export default CVShort;