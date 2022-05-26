import TextField from "@mui/material/TextField";
import {styleLabel} from "../../../themes/themes";

const PatientNameBox = ({formValues,handleInputChange}) => {



    return (
        <>
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
        </>
    );

}

export default PatientNameBox;