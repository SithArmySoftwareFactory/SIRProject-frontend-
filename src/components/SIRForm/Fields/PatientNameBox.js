import TextField from "@mui/material/TextField";
import {styleLabel} from "../../../themes/themes";
import Box from "@mui/material/Box";

const PatientNameBox = ({formValues, handleInputChange}) => {


    return (
        <Box>
            <br/>
            <br/>
            <label style={styleLabel}>Patient Name or ID Plate</label>
            <TextField
                id="Patient Name"
                name={"patientName"}
                variant={"outlined"}
                value={formValues.patientName}
                onChange={handleInputChange}
                fullWidth
            />
        </Box>
    );

}

export default PatientNameBox;