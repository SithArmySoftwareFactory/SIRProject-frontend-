import TextField from "@mui/material/TextField";
import {styleLabel} from "../../../themes/themes";
import {useState} from "react";

const ActionsTakenBox = ({increment}) => {
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
            <label style={styleLabel}>What actions, if any, could have been taken to prevent this incident from occurring?</label>
            <br/>
            <TextField
                id="Actions Taken"
                name={"Actions Taken"}
                variant={"outlined"}
                multiline
                rows={4}
                value={value}
                onChange={handleChange}
            />
        </>
    );

}

export default ActionsTakenBox;