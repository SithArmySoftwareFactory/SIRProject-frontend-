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
                    name={'witnessName1'}
                    value={formValues.witnessName1}
                    onChange={handleInputChange}
                />
                <TextField
                    variant={"outlined"}
                    name={'witnessName2'}
                    value={formValues.witnessName2}
                    onChange={handleInputChange}
                    fullWidth
                />
                <TextField
                    variant={"outlined"}
                    name={'witnessName3'}
                    value={formValues.witnessName3}
                    onChange={handleInputChange}
                    fullWidth
                />

            </Grid>
            <Grid item xs={6}>
                <label style={styleLabel}>Witness Telephone Number</label>
                <TextField
                    variant={"outlined"}
                    name={'witnessPhone1'}
                    value={formValues.witnessPhone1}
                    onChange={handleInputChange}
                    fullWidth
                />
                <TextField
                    variant={"outlined"}
                    name={'witnessPhone2'}
                    value={formValues.witnessPhone2}
                    onChange={handleInputChange}
                    fullWidth
                />
                <TextField
                    variant={"outlined"}
                    name={'witnessPhone3'}
                    value={formValues.witnessPhone3}
                    onChange={handleInputChange}
                    fullWidth
                />
            </Grid>


        </Grid>
    );

}

export default Witness;