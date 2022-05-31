import TextField from "@mui/material/TextField";
import {styleLabel} from "../../../themes/themes";

const AddressBox = ({formValues,handleInputChange}) => {

    return (
        <>
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
        </>
    );

}

export default AddressBox;