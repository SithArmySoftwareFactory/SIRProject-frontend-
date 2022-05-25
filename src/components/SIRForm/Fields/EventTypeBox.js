import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {styleLabel} from "../../../themes/themes";
import {Grid} from "@mui/material";

const EventTypeBox = ({increment}) => {
    const [eventType, setEventType] = React.useState("Actual Event/Incident");

    const handleChange = (event) => {
        setEventType(event.target.value);
        increment(1)
    };

    return (
        <Grid item xs={6}>

            <label style={styleLabel}>Event Type </label>
            <FormControl fullWidth>
                <Select
                    labelId="event-type-label"
                    id="event-type-options"
                    value={eventType}
                    label="Event-type"
                    onChange={handleChange}
                >
                    <MenuItem value={"Actual Event/Incident"}>Actual Event/Incident</MenuItem>
                    <MenuItem value={"Near Miss/Close Call"}>Near Miss/Close Call</MenuItem>

                </Select>
            </FormControl>

        </Grid>

    );
}

export default EventTypeBox;