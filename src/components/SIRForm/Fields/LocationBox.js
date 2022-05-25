
import TextField from "@mui/material/TextField";
import {styleLabel} from "../../../themes/themes";
import {useState} from "react";

const LocationBox = ({increment, location, setLocation}) => {
    const [counter,setCounter] = useState(0);

    const handleChange =  async (event) =>{
        await setLocation(event.target.value);
        //it goes back to blank string
        if(location===""&&counter>0){
            increment(-1);
            setCounter(0);
        } else {
            //it initially sets location
            if(location!==""&&counter===0){
                setCounter(counter+1);
                increment(1);
            }
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
              value={location}
              onChange={handleChange}

          />
      </>
    );

}

export default LocationBox;