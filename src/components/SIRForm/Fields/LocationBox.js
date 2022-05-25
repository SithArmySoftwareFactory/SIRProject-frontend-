
import TextField from "@mui/material/TextField";
import {styleLabel} from "../../../themes/themes";
import {useState} from "react";

const LocationBox = ({increment}) => {
    const [value, setValue] = useState("")

    const handleChange = (event) =>{
        setValue(event.target.value)
        if(value.length > 0 && value.length < 2){
            increment(1)
        }

    }

    return (
      <>
          <br/>
          <label style={styleLabel}>Location of Event</label>
          <TextField
              required
              id="Location of Event"
              name={"Location of Event"}
              variant={"outlined"}
              value={value}
              onChange={handleChange}

          />
      </>
    );

}

export default LocationBox;