import TextField from "@mui/material/TextField";
import {styleLabel} from "../../../themes/themes";
import Box from "@mui/material/Box";

const DescriptionOfIncidentBox = ({formValues,handleInputChange}) => {

    return (
        <Box>
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
        </Box>
    );

}

export default DescriptionOfIncidentBox;