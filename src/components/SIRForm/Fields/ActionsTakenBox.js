import TextField from "@mui/material/TextField";
import {styleLabel} from "../../../themes/themes";

const ActionsTakenBox = ({formValues,handleInputChange}) => {

    return (
        <>
            <br/>
            <br/>
            <label style={styleLabel}>What actions, if any, could have been taken to prevent this incident from occurring?</label>
            <br/>
            <TextField
                id="Actions Taken"
                name={"prevention"}
                variant={"outlined"}
                multiline
                rows={4}
                value={formValues.prevention}
                onChange={handleInputChange}
                fullWidth
            />
        </>
    );

}

export default ActionsTakenBox;