import TextField from "@mui/material/TextField";
import {styleLabel} from "../../../themes/themes";

const LocationBox = () => {

    return (
        <>
            <br/>
            <label style={styleLabel}>Location of Event</label>
            <TextField
                id="Location of Event"
                name={"Location of Event"}
                variant={"outlined"}
            />
        </>
    );

}

export default LocationBox;