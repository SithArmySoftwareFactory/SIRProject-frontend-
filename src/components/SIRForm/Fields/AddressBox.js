import TextField from "@mui/material/TextField";
import {styleLabel} from "../../../themes/themes";
import {useState} from "react";

const AddressBox = ({increment}) => {
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
            <label style={styleLabel}>Patient Address</label>
            <TextField
                id="Patient Address"
                name={"Patient Address"}
                variant={"outlined"}
                value={value}
                onChange={handleChange}
            />
        </>
    );

}

export default AddressBox;