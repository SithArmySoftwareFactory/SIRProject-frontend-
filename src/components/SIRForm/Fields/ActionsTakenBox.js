import TextField from "@mui/material/TextField";
import {styleLabel} from "../../../themes/themes";
import Box from "@mui/material/Box";
import {useEffect, useState} from "react";

const ActionsTakenBox = ({formValues,handleInputChange}) => {
 const [colorElement, setColorElement] = useState('');


    useEffect(() => {
        if(formValues.sentiment != null || typeof formValues.sentiment != 'undefined') {
        if(formValues.sentiment.toLowerCase() === "low"){
          setColorElement('red');
        }
        else if(formValues.sentiment.toLowerCase() === "medium"){
            setColorElement('orange');
            }
        else {
            setColorElement('green');
            }
        }}
        ,[formValues])

    return (
        <Box>
            <br/>
            <br/>
            <label style={styleLabel}>What actions, if any, could have been taken to prevent this incident from occurring?</label>
            <br/>
            <TextField
                id="Actions Taken"
                name={"prevention"}
                variant={"outlined"}
                multiline
                rows={4}
                value={formValues.prevention}
                onChange={handleInputChange}
                fullWidth
            />
            <span>Rated sentiment: </span><span style={{color:colorElement, fontFamily:'Lato, sans-serif'}}><b>{formValues.sentiment}</b></span>
        </Box>
    );

}

export default ActionsTakenBox;