import React from 'react';
import CVShort from "./CVShort.jsx";
import {Divider, Stack} from "@mui/material";

const CVStack = ({cvs}) => {
    if (!cvs.length) {
        return (
            //TODO replace with mui/typography
            <h1 style={{textAlign: 'center'}}>
                На данный момент база резюме пуста!
            </h1>
        )
    }

    return (
        <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={2}
            divider={<Divider
                orientation="horizontal"
                variant="middle"
                flexItem
            />}
        >
            {cvs.map((cv, index) =>
                <CVShort key={cv.cv_id} cv={cv} number={index+1}/>
            )}
        </Stack>
    );
};

export default CVStack;
