
import TextField from "@mui/material/TextField";
import {styleLabel} from "../../../themes/themes";
import {Grid} from "@mui/material";

const PatientPhoneBox = () => {

    return (
      <Grid item xs={6}>
          <br/>
          <label style={styleLabel}>Patient Telephone Number</label>
          <TextField
              id="Patient Phone"
              name={"Patient Phone"}
              variant={"outlined"}
              fullWidth
          />
      </Grid>
    );

}

export default PatientPhoneBox;