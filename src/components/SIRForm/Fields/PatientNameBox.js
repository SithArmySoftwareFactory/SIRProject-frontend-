import TextField from "@mui/material/TextField";
import {styleLabel} from "../../../themes/themes";
import {useState} from "react";

const PatientNameBox = ({increment}) => {
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
            <label style={styleLabel}>Patient Name or ID Plate</label>
            <TextField
                id="Patient Name"
                name={"Patient Name"}
                variant={"outlined"}
                value={value}
                onChange={handleChange}
            />
        </>
    );

}

export default PatientNameBox;