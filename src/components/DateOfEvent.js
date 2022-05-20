import * as React from 'react';
import TextField from '@mui/material/TextField';
import {DatePicker} from '@mui/x-date-pickers/DatePicker';
import {Grid} from "@mui/material";
import {AdapterDateFns} from "@mui/x-date-pickers/AdapterDateFns";
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {Label} from "@mui/icons-material";


const DateOfEvent = () => {
    const [value, setValue] = React.useState(new Date());
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

    const styleDate = {
        /* Text */
        position: "relative",
        width: "224px",
        height: "24px",

        /* Desktop typography/components/input-text */
        fontFamily: 'Public Sans',
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: "16px",
        lineHeight: "24px",

        /* identical to box height, or 150% */
        display: "flex",
        alignItems: "center",
        letterSpacing: "0.15px",

        /* text/primary */
        color: "#000000",

        /* Inside auto layout */
        flex: "none",
        order: "0",
        flexGrow: "1"
    }

    return (
        <Grid item xs={6}>

            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <label style={styleLabel}>Date of Event</label>
                <DatePicker
                    style={styleDate}
                    disableFuture
                    openTo="year"
                    views={['year', 'month', 'day']}
                    value={value}
                    onChange={(newValue) => {
                        setValue(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                />
            </LocalizationProvider>
        </Grid>
    );
}
export default DateOfEvent;