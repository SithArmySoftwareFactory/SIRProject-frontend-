import TextField from "@mui/material/TextField";
import {styleLabel} from "../../../themes/themes";
import {useState} from "react";

const AddressBox = ({increment,address,setAddress}) => {
    const [counter,setCounter] = useState(0);

        const handleChange =  async (event) =>{
            await setAddress(event.target.value);
            //it goes back to blank string
            if(address===""&&counter>0){
                increment(-1);
                setCounter(0);
            } else {
                //it initially sets location
                if(address!==""&&counter===0){
                    setCounter(counter+1);
                    increment(1);
                }
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
                value={address}
                onChange={handleChange}
            />
        </>
    );

}

export default AddressBox;