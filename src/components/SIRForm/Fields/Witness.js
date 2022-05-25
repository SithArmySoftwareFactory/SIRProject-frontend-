import {Grid, TextField} from "@mui/material";
import {styleLabel} from "../../../themes/themes";
import {useState} from "react";



const Witness = ({increment}) =>{

    const [value, setValue] = useState("")

    const handleChange = (event) =>{
        setValue(event.target.value)
        if(value.length > 0 && value.length < 2 ){
            increment(1)
        }
    }

    return(
       <Grid container spacing={1}>
           <Grid item xs={6}>
               <label style={styleLabel}>Witness Name</label>
               <TextField
                   required variant={"outlined"}
                   fullWidth
                   value={value}
                   onChange={handleChange}
               />
               <TextField variant={"outlined"} fullWidth/>
               <TextField variant={"outlined"} fullWidth/>

           </Grid>
           <Grid item xs={6}>
               <label style={styleLabel}>Witness Telephone Number</label>
               <TextField
                   required variant={"outlined"}
                   fullWidth
               />
               <TextField variant={"outlined"} fullWidth/>
               <TextField variant={"outlined"} fullWidth/>
           </Grid>


       </Grid>
    );

}

export default Witness;