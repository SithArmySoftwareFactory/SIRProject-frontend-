
import TextField from "@mui/material/TextField";
import {styleLabel} from "../../../themes/themes";

const TypeOfEventBox = () => {

    return (
      <>
          <br/>
          <label style={styleLabel}>Type of Event</label>
          <TextField
              required
              id="Type of Event"
              name={"Type of Event"}
              variant={"outlined"}
          />
      </>
    );

}

export default TypeOfEventBox;