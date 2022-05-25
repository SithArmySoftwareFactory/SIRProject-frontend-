import TextField from "@mui/material/TextField";
import {styleLabel} from "../../../themes/themes";
import {Grid} from "@mui/material";
import {useState} from "react";

const PatientSSNBox = ({increment,setPatientSSN,patientSSN}) => {
    const [counter,setCounter] = useState(0);

        const handleChange =  async (event) =>{
            await setPatientSSN(event.target.value);
            //it goes back to blank string
            if(patientSSN===""&&counter>0){
                increment(-1);
                setCounter(0);
            } else {
                //it initially sets location
                if(patientSSN!==""&&counter===0){
                    setCounter(counter+1);
                    increment(1);
                }
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
                value={patientSSN}
                onChange={handleChange}
            />
        </Grid>
    );

}

export default PatientSSNBox;