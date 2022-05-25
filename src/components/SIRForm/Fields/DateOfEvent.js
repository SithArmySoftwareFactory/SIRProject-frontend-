import * as React from 'react';
import TextField from '@mui/material/TextField';
import {DatePicker} from '@mui/x-date-pickers/DatePicker';
import {Grid} from "@mui/material";
import {AdapterDateFns} from "@mui/x-date-pickers/AdapterDateFns";
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {styleDate, styleLabel} from "../../../themes/themes";

const DateOfEvent = ({increment}) => {
    const [value, setValue] = React.useState(new Date());

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
                    value={value}
                    onChange={(newValue) => {
                        setValue(newValue);
                       increment(0.4);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                />
            </LocalizationProvider>
        </Grid>
    );
}
export default DateOfEvent;