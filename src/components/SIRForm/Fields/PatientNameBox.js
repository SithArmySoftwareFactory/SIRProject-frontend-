import TextField from "@mui/material/TextField";
import {styleLabel} from "../../../themes/themes";

const PatientNameBox = () => {

    return (
        <>
            <br/>
            <label style={styleLabel}>Patient Name or ID Plate</label>
            <TextField
                id="Patient Name"
                name={"Patient Name"}
                variant={"outlined"}
            />
        </>
    );

}

export default PatientNameBox;