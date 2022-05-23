import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {styleLabel} from "../../../themes/themes";
import {Grid} from "@mui/material";

const EventTypeBox = () => {
    const [eventType, setEventType] = React.useState("Actual Event/Incident");

    const handleChange = (event) => {
        setEventType(event.target.value);
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
                    <MenuItem value={"Adverse Drug Reaction"}>Adverse Drug Reaction</MenuItem>
                    <MenuItem value={"AMA/Left Without Being Seen"}>AMA/Left Without Being Seen</MenuItem>
                    <MenuItem value={"Assault"}>Assault</MenuItem>
                    <MenuItem value={"Blood Products Related"}>Blood Products Related</MenuItem>
                    <MenuItem value={"Delay in: Diagnosis/Treatment/Transfer"}>Delay in:
                        Diagnosis/Treatment/Transfer</MenuItem>
                    <MenuItem value={"Equipment/Supply Problem"}>Equipment/Supply Problem</MenuItem>
                    <MenuItem value={"Exposure to Blood/Body Fluids"}>Exposure to Blood/Body Fluids</MenuItem>
                    <MenuItem value={"Facility/Physical Plant Problem"}>Facility/Physical Plant Problem</MenuItem>
                    <MenuItem value={"Fall"}>Fall</MenuItem>
                    <MenuItem value={"Infant Abduction"}>Infant Abduction</MenuItem>
                    <MenuItem value={"Infant Discharge to Wrong Family"}>Infant Discharge to Wrong Family</MenuItem>
                    <MenuItem value={"Laboratory Related"}>Laboratory Related</MenuItem>
                    <MenuItem value={"Medication Related"}>Medication Related</MenuItem>
                    <MenuItem value={"Needle Stick/Sharp Injury"}>Needle Stick/Sharp Injury</MenuItem>
                    <MenuItem value={"Obstetrics Related"}>Obstetrics Related</MenuItem>
                    <MenuItem value={"Operative/Invasive Procedure Related"}>Operative/Invasive Procedure
                        Related</MenuItem>
                    <MenuItem value={"Property Damage/Destroyed"}>Property Damage/Destroyed</MenuItem>
                    <MenuItem value={"Property Lost/Stolen"}>Property Lost/Stolen</MenuItem>
                    <MenuItem value={"Radiology Related"}>Radiology Related</MenuItem>
                    <MenuItem value={"Rape"}>Rape</MenuItem>
                    <MenuItem value={"Restrained Patient Injury"}>Restrained Patient Injury</MenuItem>
                    <MenuItem value={"Suicide in a 24-hour Facility"}>Suicide in a 24-hour Facility</MenuItem>
                    <MenuItem value={"Other"}>Other</MenuItem>
                </Select>
            </FormControl>

        </Grid>

    );
}

export default EventTypeBox;
