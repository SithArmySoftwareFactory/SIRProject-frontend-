import * as React from 'react';
import TextField from '@mui/material/TextField';
import {DatePicker} from '@mui/x-date-pickers/DatePicker';
import {Grid} from "@mui/material";
import {AdapterDateFns} from "@mui/x-date-pickers/AdapterDateFns";
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {styleDate, styleLabel} from "../../../themes/themes";
import FormControl from "@mui/material/FormControl";

const DateOfEvent = ({formValues, handleInputChange}) => {

    return (
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <label style={styleLabel}>Date of Event</label>
                <FormControl sx={{width:'100%'}}>
                <DatePicker
                    required
                    style={styleDate}
                    disableFuture
                    openTo="year"
                    views={['year', 'month', 'day']}
                    name={"date"}
                    value={formValues.date}
                    onChange={(newValue) => {
                        handleInputChange(newValue, "date");
                    }}
                    renderInput={(params) => <TextField {...params}
                    />}
                /></FormControl>
            </LocalizationProvider>
    );
}
export default DateOfEvent;