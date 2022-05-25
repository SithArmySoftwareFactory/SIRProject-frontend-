import TextField from "@mui/material/TextField";
import {styleLabel} from "../../../themes/themes";
import {Grid} from "@mui/material";
import {useState} from "react";

const PatientPhoneBox = ({increment,patientPhone,setPatientPhone}) => {
    const [counter,setCounter] = useState(0);

        const handleChange =  async (event) =>{
            await setPatientPhone(event.target.value);
            //it goes back to blank string
            if(patientPhone===""&&counter>0){
                increment(-1);
                setCounter(0);
            } else {
                //it initially sets location
                if(patientPhone!==""&&counter===0){
                    setCounter(counter+1);
                    increment(1);
                }
            }
        }
    return (
        <Grid item xs={6}>
            <br/>
            <label style={styleLabel}>Patient Telephone Number</label>
            <TextField
                id="Patient Phone"
                name={"Patient Phone"}
                variant={"outlined"}
                fullWidth
                value={patientPhone}
                onChange={handleChange}
            />
        </Grid>
    );

}

export default PatientPhoneBox;