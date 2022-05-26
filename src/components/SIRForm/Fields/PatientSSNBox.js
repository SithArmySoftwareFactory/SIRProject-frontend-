import TextField from "@mui/material/TextField";
import {styleLabel} from "../../../themes/themes";
import {Grid} from "@mui/material";

const PatientSSNBox = ({formValues,handleInputChange}) => {
    return (
        <Grid item xs={6}>
            <br/>
            <label style={styleLabel}>Patient SSN</label>
            <TextField
                id="Patient SSN"
                name={"patientSSN"}
                variant={"outlined"}
                fullWidth
                value={formValues.patientSSN}
                onChange={handleInputChange}
            />
        </Grid>
    );

}

export default PatientSSNBox;