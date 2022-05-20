import * as React from 'react';
import TextField from '@mui/material/TextField';
import {AdapterDateFns} from '@mui/x-date-pickers/AdapterDateFns';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {TimePicker} from '@mui/x-date-pickers/TimePicker';
import {Grid} from "@mui/material";
import {useState} from "react";

const styleLabel = {
    /* Label */
    width: "248px",
    height: "12px",

    /* Desktop typography/components/input-label */
    fontFamily: 'Public Sans',
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "16px",
    lineHeight: "12px",

    /* identical to box height, or 75% */
    display: "flex",
    alignItems: "center",
    letterSpacing: "0.15px",

    /* text/secondary */
    color: "rgba(6, 6, 9, 0.6)",

    /* Inside auto layout */
    flex: "none",
    order: "0",
    alignSelf: "stretch",
    flexGrow: "0"
}

const TimeOfEvent = () => {
    const [value, setValue] = useState(new Date('2018-01-01T00:00:00.000Z'));

    return (
        <Grid item xs={6}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <label style={styleLabel}>Time of Event</label>
                <TimePicker
                    value={value}
                    onChange={setValue}
                    renderInput={(params) => <TextField {...params} />}
                />
            </LocalizationProvider>
        </Grid>
    );
}
export default TimeOfEvent;