import TextField from "@mui/material/TextField";
import {styleLabel} from "../../../themes/themes";
import Box from "@mui/material/Box";

const AddressBox = ({formValues, handleInputChange}) => {

    return (
        <Box>
            <br/>
            <label style={styleLabel}>Command</label>
            <TextField
                id="Command Box"
                name={"command"}
                type="text"
                variant={"outlined"}
                value={formValues.command}
                onChange={handleInputChange}
                fullWidth
            />
        </Box>
    );

}

export default AddressBox;