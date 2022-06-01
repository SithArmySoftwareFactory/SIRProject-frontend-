import TextField from "@mui/material/TextField";
import {styleLabel} from "../../../themes/themes";
import * as React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';


const TypeOfEventBox = ({handleInputChange, formValues}) => {


    const handleChange = (event,value) => {
        handleInputChange(value)
    }

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
            <Stack spacing={3}>
                <Autocomplete
                    onChange={(event,value)=>{
                        handleChange(event,value);
                    }}
                    multiple
                    id="eventType"

                    options={eventTypes.map((option) => option.title)}
                    renderTags={(value, getTagProps) =>
                        value.map((option, index) => (
                            <Chip variant="outlined" label={option} {...getTagProps({index})} />
                        ))
                    }
                    value={formValues.eventType}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            variant="outlined"

                        />
                    )}
                />
            </Stack>
        </>
    );

}

export default TypeOfEventBox;