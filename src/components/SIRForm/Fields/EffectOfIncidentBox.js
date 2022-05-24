import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {styleLabel} from "../../../themes/themes";

const EffectOfIncidentBox = () => {
    const [isHarmSustained, setIsHarmSustained] = React.useState('');

    const handleChange = (event) => {
        setIsHarmSustained(event.target.value);
    };

    return (
        <>
            <label style={styleLabel}>Effect of this incident on the individual(s) involved</label>
            <FormControl fullWidth>
                <Select
                    labelId="harm-effect-label"
                    id="harm-effect-options"
                    value={isHarmSustained}
                    label="Harm-effect"
                    onChange={handleChange}
                >
                    <MenuItem value={"No"}>No harm sustained</MenuItem>
                    <MenuItem value={"Yes"}>Harm sustained</MenuItem>
                </Select>
            </FormControl>
        </>
    );
}

export default EffectOfIncidentBox;
