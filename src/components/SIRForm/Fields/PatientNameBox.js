import TextField from "@mui/material/TextField";
import {styleLabel} from "../../../themes/themes";
import {useState} from "react";

const PatientNameBox = ({increment,patientName,setPatientName}) => {
    const [counter,setCounter] = useState(0);

        const handleChange =  async (event) =>{
            await setPatientName(event.target.value);
            //it goes back to blank string
            if(patientName===""&&counter>0){
                increment(-1);
                setCounter(0);
            } else {
                //it initially sets location
                if(patientName!==""&&counter===0){
                    setCounter(counter+1);
                    increment(1);
                }
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
                value={patientName}
                onChange={handleChange}
            />
        </>
    );

}

export default PatientNameBox;