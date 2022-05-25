import TextField from "@mui/material/TextField";
import {styleLabel} from "../../../themes/themes";
import {useState} from "react";

const ActionsTakenBox = ({increment,actionsTaken,setActionsTaken}) => {
    const [counter,setCounter] = useState(0);

        const handleChange =  async (event) =>{
            await setActionsTaken(event.target.value);
            //it goes back to blank string
            if(actionsTaken===""&&counter>0){
                increment(-1);
                setCounter(0);
            } else {
                //it initially sets location
                if(actionsTaken!==""&&counter===0){
                    setCounter(counter+1);
                    increment(1);
                }
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
                value={actionsTaken}
                onChange={handleChange}
            />
        </>
    );

}

export default ActionsTakenBox;