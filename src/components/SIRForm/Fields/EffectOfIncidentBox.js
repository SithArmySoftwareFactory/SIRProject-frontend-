import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {styleLabel} from "../../../themes/themes";
import Box from "@mui/material/Box";


const EffectOfIncidentBox = ({formValues, handleInputChange}) => {


    return (
        <Box>
            <label style={styleLabel}>Effect of this incident on the individual(s) Involved</label>
            <FormControl fullWidth>
                <Select
                    required
                    labelId="harm-effect-label"
                    id="harm-effect-options"
                    value={formValues.effects}
                    name={'effects'}
                    label="Harm-effect"
                    onChange={handleInputChange}
                >
                    <MenuItem value={"No harm sustained"}>No harm sustained</MenuItem>
                    <MenuItem value={"Harm sustained"}>Harm sustained</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}

export default EffectOfIncidentBox;
