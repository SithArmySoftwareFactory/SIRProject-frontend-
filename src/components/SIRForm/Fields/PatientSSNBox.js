import TextField from "@mui/material/TextField";
import {styleLabel} from "../../../themes/themes";
import {Grid} from "@mui/material";
import {useState} from "react";

const PatientSSNBox = ({increment}) => {
    const [value, setValue] = useState("")

    const handleChange = (event) =>{
        setValue(event.target.value)
        if(value.length > 0 && value.length < 2){
            increment(1)
        }

    }
    return (
        <Grid item xs={6}>
            <br/>
            <label style={styleLabel}>Patient SSN</label>
            <TextField
                id="Patient SSN"
                name={"Patient SSN"}
                variant={"outlined"}
                fullWidth
                value={value}
                onChange={handleChange}
            />
        </Grid>
    );

}

export default PatientSSNBox;