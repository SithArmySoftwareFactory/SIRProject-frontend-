import TextField from "@mui/material/TextField";
import {styleLabel} from "../../../themes/themes";

const DescriptionOfIncidentBox = ({formValues,handleInputChange}) => {

    return (
        <>
            <br/>
            <label style={styleLabel}>Description of Incident</label>
            <TextField
                id="Description of Incident"
                name={"descriptionOfIncident"}
                variant={"outlined"}
                multiline
                rows={6}
                value={formValues.descriptionOfIncident}
                onChange={handleInputChange}
                fullWidth
            />
        </>
    );

}

export default DescriptionOfIncidentBox;