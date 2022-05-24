
import TextField from "@mui/material/TextField";
import {styleLabel} from "../../../themes/themes";
import {Grid} from "@mui/material";

const PatientSSNBox = () => {

    return (
      <Grid item xs={6}>
          <br/>
          <label style={styleLabel}>Patient SSN</label>
          <TextField
              id="Patient SSN"
              name={"Patient SSN"}
              variant={"outlined"}
              fullWidth
          />
      </Grid>
    );

}

export default PatientSSNBox;