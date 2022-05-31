import TextField from "@mui/material/TextField";
import {styleLabel} from "../../../themes/themes";

const DescriptionOfIncidentBox = ({formValues,handleInputChange}) => {

    return (
        <>
            <br/>
            <label style={styleLabel}>Description of Incident</label>
            <TextField
                id="Description of Incident"
                name={"description"}
                variant={"outlined"}
                multiline
                rows={6}
                value={formValues.description}
                onChange={handleInputChange}
                fullWidth
            />
        </>
    );

}

export default DescriptionOfIncidentBox;