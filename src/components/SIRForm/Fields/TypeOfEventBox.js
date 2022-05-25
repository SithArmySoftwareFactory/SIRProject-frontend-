import TextField from "@mui/material/TextField";
import {styleLabel} from "../../../themes/themes";
import * as React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import {useState} from "react";

const TypeOfEventBox = ({increment}) => {
    const [value, setValue] = useState([])

    const handleChange = (event,value) => {
        if (value.length > 0 && value.length < 2) {
            increment(1)
        }

    }

    const handleTextFieldChange = (event) => {

        setValue([...value,event.target.value]);
        console.log(value);
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
                    id="typeOfEvent"
                    options={eventTypes.map((option) => option.title)}
                    renderTags={(value, getTagProps) =>
                        value.map((option, index) => (
                            <Chip variant="outlined" label={option} {...getTagProps({index})} />
                        ))
                    }
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