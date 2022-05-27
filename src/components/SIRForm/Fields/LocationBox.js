
import TextField from "@mui/material/TextField";
import {styleLabel} from "../../../themes/themes";

const LocationBox = ({formValues, handleInputChange}) => {

    return (
      <>
          <br/>
          <label style={styleLabel}>Location of Event</label>
          <TextField
              required
              id="Location of Event"
              name={"location"}
              variant={"outlined"}
              type={"text"}
              value={formValues.location}
              onChange={handleInputChange}
              fullWidth
          />
      </>
    );

}

export default LocationBox;