import * as React from 'react';
import TextField from '@mui/material/TextField';
import {DatePicker} from '@mui/x-date-pickers/DatePicker';
import {Grid} from "@mui/material";
import {AdapterDateFns} from "@mui/x-date-pickers/AdapterDateFns";
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {styleDate, styleLabel} from "../../../themes/themes";

const DateOfEvent = ({increment,dateOfEvent,setDateOfEvent}) => {

    const handleChange = (newValue) =>{
        if(dateOfEvent===0){
            increment(-1);
        }
        else {
            setDateOfEvent(newValue);
        }
    };


    return (
        <Grid item xs={6}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <label style={styleLabel}>Date of Event</label>
                <DatePicker
                    required
                    style={styleDate}
                    disableFuture
                    openTo="year"
                    views={['year', 'month', 'day']}
                    value={dateOfEvent}
                    onChange={(newValue) => {
                        handleChange(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                />
            </LocalizationProvider>
        </Grid>
    );
}
export default DateOfEvent;