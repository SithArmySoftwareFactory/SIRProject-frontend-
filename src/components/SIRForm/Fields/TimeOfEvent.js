import * as React from 'react';
import TextField from '@mui/material/TextField';
import {AdapterDateFns} from '@mui/x-date-pickers/AdapterDateFns';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {TimePicker} from '@mui/x-date-pickers/TimePicker';
import {Grid} from "@mui/material";
import {useState} from "react";
import {styleLabel} from "../../../themes/themes";


const TimeOfEvent = () => {
    const [value, setValue] = useState(new Date('2018-01-01T00:00:00.000Z'));

    return (
        <Grid item xs={6}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <label style={styleLabel}>Time of Event</label>
                <TimePicker
                    required
                    value={value}
                    onChange={setValue}
                    renderInput={(params) => <TextField {...params} />}
                />
            </LocalizationProvider>
        </Grid>
    );
}
export default TimeOfEvent;