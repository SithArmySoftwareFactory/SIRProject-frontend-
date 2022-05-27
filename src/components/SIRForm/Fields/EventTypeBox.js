import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {styleLabel} from "../../../themes/themes";
import {Grid} from "@mui/material";

const EventTypeBox = ({formValues, handleInputChange}) => {

    return (
        <Grid item xs={6}>
            <label style={styleLabel}>Event Type </label>
            <FormControl fullWidth>
                <Select
                    required
                    labelId="event-type-label"
                    id="event-type-options"
                    name="eventType"
                    value={formValues.eventType}
                    label="Event-type"
                    onChange={handleInputChange}
                >
                    <MenuItem key={"Actual Event/Incident"} value={"Actual Event/Incident"}>Actual
                        Event/Incident</MenuItem>
                    <MenuItem key={"Near Miss/Close Call"} value={"Near Miss/Close Call"}>Near Miss/Close
                        Call</MenuItem>
                </Select>
            </FormControl>
        </Grid>

    );
}

export default EventTypeBox;