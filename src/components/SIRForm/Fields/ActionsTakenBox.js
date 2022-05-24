
import TextField from "@mui/material/TextField";
import {styleLabel} from "../../../themes/themes";

const ActionsTakenBox = () => {

    return (
      <>
          <br/>
          <label style={styleLabel}>What actions, if any, could have been taken to prevent this incident from occurring?</label>
          <br/>
          <TextField
              id="Actions Taken"
              name={"Actions Taken"}
              variant={"outlined"}
              multiline
              rows={4}
          />
      </>
    );

}

export default ActionsTakenBox;