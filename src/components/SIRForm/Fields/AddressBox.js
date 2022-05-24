
import TextField from "@mui/material/TextField";
import {styleLabel} from "../../../themes/themes";

const AddressBox = () => {

    return (
      <>
          <br/>
          <label style={styleLabel}>Patient Address</label>
          <TextField
              id="Patient Address"
              name={"Patient Address"}
              variant={"outlined"}
          />
      </>
    );

}

export default AddressBox;