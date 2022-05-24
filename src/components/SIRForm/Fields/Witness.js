import {Grid, TextField} from "@mui/material";
import {styleLabel} from "../../../themes/themes";



const Witness = () =>{

    return(
       <Grid container spacing={1}>
           <Grid item xs={6}>
               <label style={styleLabel}>Witness Name</label>
               <TextField required variant={"outlined"} fullWidth/>
               <TextField variant={"outlined"} fullWidth/>
               <TextField variant={"outlined"} fullWidth/>

           </Grid>
           <Grid item xs={6}>
               <label style={styleLabel}>Witness Telephone Number</label>
               <TextField required variant={"outlined"} fullWidth/>
               <TextField variant={"outlined"} fullWidth/>
               <TextField variant={"outlined"} fullWidth/>
           </Grid>


       </Grid>
    );

}

export default Witness;