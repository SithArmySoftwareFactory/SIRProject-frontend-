import TextField from "@mui/material/TextField";
import {styleLabel} from "../../../themes/themes";
import Box from "@mui/material/Box";

const AddressBox = ({formValues, handleInputChange}) => {

    return (
        <Box>
            <br/>
            <label style={styleLabel}>Patient Address</label>
            <TextField
                id="Patient Address"
                name={"patientAddress"}
                type="text"
                variant={"outlined"}
                value={formValues.patientAddress}
                onChange={handleInputChange}
                fullWidth
            />
        </Box>
    );

}

export default AddressBox;