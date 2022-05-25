import TextField from "@mui/material/TextField";
import {styleLabel} from "../../../themes/themes";
import {useState} from "react";

const DescriptionOfIncidentBox = ({increment}) => {
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
            <label style={styleLabel}>Description of Incident</label>
            <TextField
                id="Description of Incident"
                name={"Description of Incident"}
                variant={"outlined"}
                multiline
                rows={6}
                value={value}
                onChange={handleChange}
            />
        </>
    );

}

export default DescriptionOfIncidentBox;