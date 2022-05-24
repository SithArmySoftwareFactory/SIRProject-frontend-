import TextField from "@mui/material/TextField";
import {styleLabel} from "../../../themes/themes";
import * as React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

const DepartmentsInvolvedBox = () => {
    const departmentTypes = [
        {title: "Ambulatory Care"},
        {title: "Behaviorial/Mental Health"},
        {title: "Dental"},
        {title: "Emergency Care"},
        {title: "Information Management"},
        {title: "Laboratory"},
        {title: "Logistics"},
        {title: "Medicine"},
        {title: "Nursing"},
        {title: "OB/GYN"},
        {title: "Pediatrics"},
        {title: "Pharmacy"},
        {title: "Radiology"},
        {title: "Surgery"},
        {title: "Other"}
    ];

    return (
        <>
            <br/>
            <label style={styleLabel}>Department(s) Involved in this incident</label>
            <Stack spacing={3}>
                <Autocomplete
                    multiple
                    id="departmentsInvolved"
                    options={departmentTypes.map((option) => option.title)}
                    freeSolo
                    renderTags={(value, getTagProps) =>
                        value.map((option, index) => (
                            <Chip variant="outlined" label={option} {...getTagProps({index})} />
                        ))
                    }
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            id="Department-Types"
                            name={"Type of Department"}
                            variant="outlined"
                        />
                    )}
                />
            </Stack>
        </>
    );

}

export default DepartmentsInvolvedBox;