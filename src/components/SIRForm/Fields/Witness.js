import {Grid, TextField} from "@mui/material";
import {styleLabel} from "../../../themes/themes";


const Witness = ({formValues, handleInputChange}) => {

    return (
        <Grid container spacing={1}>
            <Grid item xs={6}>
                <label style={styleLabel}>Witness Name</label>
                <TextField
                    required
                    variant={"outlined"}
                    fullWidth
                    name={'witness1Name'}
                    value={formValues.witness1Name}
                    onChange={handleInputChange}
                />
                <TextField
                    variant={"outlined"}
                    name={'witness2Name'}
                    value={formValues.witness2Name}
                    onChange={handleInputChange}
                    fullWidth
                />
                <TextField
                    variant={"outlined"}
                    name={'witness3Name'}
                    value={formValues.witness3Name}
                    onChange={handleInputChange}
                    fullWidth
                />

            </Grid>
            <Grid item xs={6}>
                <label style={styleLabel}>Witness Telephone Number</label>
                <TextField
                    variant={"outlined"}
                    name={'witness1Phone'}
                    value={formValues.witness1Phone}
                    onChange={handleInputChange}
                    fullWidth
                />
                <TextField
                    variant={"outlined"}
                    name={'witness2Phone'}
                    value={formValues.witness2Phone}
                    onChange={handleInputChange}
                    fullWidth
                />
                <TextField
                    variant={"outlined"}
                    name={'witness3Phone'}
                    value={formValues.witness3Phone}
                    onChange={handleInputChange}
                    fullWidth
                />
            </Grid>


        </Grid>
    );

}

export default Witness;