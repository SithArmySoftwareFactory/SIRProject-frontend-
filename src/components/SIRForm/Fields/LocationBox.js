
import TextField from "@mui/material/TextField";
import {styleLabel} from "../../../themes/themes";

const LocationBox = () => {

    return (
      <>
          <br/>
          <label style={styleLabel}>Location of Event</label>
          <TextField
              aria-label={"location of event"}
              variant={"outlined"}
          />
      </>
    );

}

export default LocationBox;