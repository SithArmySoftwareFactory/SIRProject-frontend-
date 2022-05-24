
import TextField from "@mui/material/TextField";
import {styleLabel} from "../../../themes/themes";

const PatientSSNBox = () => {

    return (
      <>
          <br/>
          <label style={styleLabel}>Patient SSN</label>
          <TextField
              id="Patient SSN"
              name={"Patient SSN"}
              variant={"outlined"}
          />
      </>
    );

}

export default PatientSSNBox;