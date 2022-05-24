import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {styleLabel} from "../../../themes/themes";
import {Grid} from "@mui/material";

const HarmEventBox = () => {
    const [isHarmed, setIsHarmed] = React.useState('');

    const handleChange = (event) => {
        setIsHarmed(event.target.value);
    };

    return (
        <Grid item xs={6}>

            <label style={styleLabel}>Harm or Potential Harm</label>
            <FormControl fullWidth>
                <Select
                    required
                    labelId="harm-type-label"
                    id="harm-type-options"
                    value={isHarmed}
                    label="Harm-type"
                    onChange={handleChange}
                >
                    <MenuItem value={"Yes"}>Yes</MenuItem>
                    <MenuItem value={"No"}>No</MenuItem>

                </Select>
            </FormControl>

        </Grid>

    );
}

export default HarmEventBox;
