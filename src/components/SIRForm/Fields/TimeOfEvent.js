import * as React from 'react';
import TextField from '@mui/material/TextField';
import {AdapterDateFns} from '@mui/x-date-pickers/AdapterDateFns';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {TimePicker} from '@mui/x-date-pickers/TimePicker';
import {Grid} from "@mui/material";
import {styleLabel} from "../../../themes/themes";


const TimeOfEvent = ({formValues,handleInputChange}) => {


    return (
        <Grid item xs={6}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <label style={styleLabel}>Time of Event</label>
                <TimePicker
                    required
                    value={formValues.time}
                    name={"time"}
                    onChange={(newValue) => {
                        handleInputChange(newValue,"time");
                    }}
                    renderInput={(params) => <TextField {...params} />}
                />
            </LocalizationProvider>
        </Grid>
    );
}
export default TimeOfEvent;