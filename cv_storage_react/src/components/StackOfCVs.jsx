import React from 'react';
import ShortCV from "./ShortCV.jsx";
import {Divider, Stack} from "@mui/material";

const StackOfCVs = ({cvs}) => {
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
            spacing={1}
                divider={<Divider orientation="horizontal" flexItem />}
        >
            {cvs.map((cv, index) =>
                <ShortCV key={cv.cv_id} cv={cv} number={index+1}/>
            )}
        </Stack>
    );
};

export default StackOfCVs;