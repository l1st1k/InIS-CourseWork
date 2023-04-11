import React from "react";
import { year_to_string } from "../../utils";
import { DeleteButton, OpenButton, DownloadButton } from "../Buttons";
import { Box } from "@mui/material";

export const CVShort = ({ cv, number }) => {
  return (
    <Box
      component="article"
      key={cv.cv_id}
      sx={{ padding: 2, width: 1, border: "2px solid #d2d2d2" }}
    >
      <div className="cv__content">
        <strong>
          {number}. {cv.first_name} {cv.last_name}, {cv.age}
        </strong>
        <div>{cv.major}</div>
        <div>{year_to_string(cv.years_of_exp)}</div>
      </div>
      <div className="cv_buttons">
        <OpenButton cv_id={cv.cv_id} />
        <DownloadButton cv_id={cv.cv_id} />
        <DeleteButton cv_id={cv.cv_id} />
      </div>
    </Box>
  );
};
