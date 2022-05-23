import {Grid, TextField} from "@mui/material";
import {styleLabel} from "../themes/themes";



const Witness = () =>{

    return(
       <Grid container spacing={1}>
           <Grid item xs={6}>
               <label sx={styleLabel}>Witness Name</label>
               <TextField />
               <TextField />
               <TextField />
           </Grid>
           <Grid item xs={6}>
               <label sx={styleLabel}>Witness Telephone Number</label>
           </Grid>


       </Grid>
    );

}

export default Witness;