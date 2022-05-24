
import TextField from "@mui/material/TextField";
import {styleLabel} from "../../../themes/themes";

const DescriptionOfIncidentBox = () => {

    return (
      <>
          <br/>
          <label style={styleLabel}>Description of Incident</label>
          <TextField
              id="Description of Incident"
              name={"Description of Incident"}
              variant={"outlined"}
              multiline
              rows={6}
          />
      </>
    );

}

export default DescriptionOfIncidentBox;