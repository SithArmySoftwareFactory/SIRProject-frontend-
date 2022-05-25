import TextField from "@mui/material/TextField";
import {styleLabel} from "../../../themes/themes";
import {useState} from "react";

const DescriptionOfIncidentBox = ({increment,descriptionOfIncident,setDescriptionOfIncident}) => {
    const [counter,setCounter] = useState(0);

        const handleChange =  async (event) =>{
            await setDescriptionOfIncident(event.target.value);
            //it goes back to blank string
            if(descriptionOfIncident===""&&counter>0){
                increment(-1);
                setCounter(0);
            } else {
                //it initially sets location
                if(descriptionOfIncident!==""&&counter===0){
                    setCounter(counter+1);
                    increment(1);
                }
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
                value={descriptionOfIncident}
                onChange={handleChange}
            />
        </>
    );

}

export default DescriptionOfIncidentBox;