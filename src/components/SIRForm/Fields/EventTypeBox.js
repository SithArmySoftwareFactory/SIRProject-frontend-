import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {styleLabel} from "../../../themes/themes";
import {Grid} from "@mui/material";

const EventTypeBox = ({formValues, handleInputChange}) => {

    return (
        <>
            <label style={styleLabel}>Event Type </label>
            <FormControl fullWidth>
                <Select
                    required
                    labelId="incident-type-label"
                    id="incident-type-options"
                    name="incidentType"
                    value={formValues.incidentType}
                    label="incident-type"
                    onChange={handleInputChange}
                >
                    <MenuItem key={"Actual Event/Incident"} value={"Actual Event/Incident"}>Actual
                        Event/Incident</MenuItem>
                    <MenuItem key={"Near Miss/Close Call"} value={"Near Miss/Close Call"}>Near Miss/Close
                        Call</MenuItem>
                </Select>
            </FormControl>
        </>
    );
}

export default EventTypeBox;