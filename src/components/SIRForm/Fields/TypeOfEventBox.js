import TextField from "@mui/material/TextField";
import {styleLabel} from "../../../themes/themes";
import * as React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

const TypeOfEventBox = () => {
    const eventTypes = [
        {title: "Adverse Drug Reaction"},
        {title: "AMA/Left Without Being Seen"},
        {title: "Assault"},
        {title: "Blood Products Related"},
        {title: "Delay in: Diagnosis/Treatment/Transfer"},
        {title: "Equipment/Supply Problem"},
        {title: "Exposure to Blood/Body Fluids"},
        {title: "Facility/Physical Plant Problem"},
        {title: "Fall"},
        {title: "Infant Abduction"},
        {title: "Infant Discharge to Wrong Family"},
        {title: "Laboratory Related"},
        {title: "Medication Related"},
        {title: "Needle Stick/Sharp Injury"},
        {title: "Obstetrics Related"},
        {title: "Operative/Invasive Procedure Related"},
        {title: "Property Damage/Destroyed"},
        {title: "Property Lost/Stolen"},
        {title: "Radiology Related"},
        {title: "Rape"},
        {title: "Restrained Patient Injury"},
        {title: "Suicide in a 24-hour Facility"},
        {title: "Other"}
    ];

    return (
        <>
            <br/>
            <label style={styleLabel}>Type of Event</label>
            <Stack spacing={3} >
                <Autocomplete
                    multiple
                    id="typeOfEvent"
                    options={eventTypes.map((option) => option.title)}
                    freeSolo
                    renderTags={(value, getTagProps) =>
                        value.map((option, index) => (
                            <Chip variant="outlined" label={option} {...getTagProps({ index })} />
                        ))
                    }
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            id="Type of Event"
                            name={"Type of Event"}
                            variant="outlined"
                        />
                    )}
                />
            </Stack>
        </>
    );

}

export default TypeOfEventBox;