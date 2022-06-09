import TextField from "@mui/material/TextField";
import {styleLabel} from "../../../themes/themes";
import Box from "@mui/material/Box";

const LocationBox = ({formValues, handleInputChange}) => {

    return (
        <Box>
            <br/>
            <label style={styleLabel}>Location of Event</label>
            <TextField
                required
                id="Location of Event"
                name={"location"}
                variant={"outlined"}
                type={"text"}
                value={formValues.location}
                onChange={handleInputChange}
                fullWidth
            />
        </Box>
    );

}

export default LocationBox;