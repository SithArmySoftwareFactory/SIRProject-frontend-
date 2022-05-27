import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {styleLabel} from "../../../themes/themes";
import {Grid} from "@mui/material";

const HarmEventBox = ({formValues, handleInputChange}) => {

    return (
        <Grid item xs={6}>
            <label style={styleLabel}>Harm or Potential Harm</label>
            <FormControl fullWidth>
                <Select
                    required
                    labelId="harm-type-label"
                    id="harm-type-options"
                    name='harmEvent'
                    value={formValues.harmEvent}
                    label="Harm-type"
                    onChange={handleInputChange}
                >
                    <MenuItem key={'yes'} value={"Yes"}>Yes</MenuItem>
                    <MenuItem key={'no'} value={"No"}>No</MenuItem>
                </Select>
            </FormControl>
        </Grid>

    );
}
export default HarmEventBox;
