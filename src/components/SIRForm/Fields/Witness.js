import {TextField} from "@mui/material";
import {styleLabel} from "../../../themes/themes";


const Witness = ({formValues, handleInputChange}) => {

    return (
        <table width={"100%"} style={{minHeight: '300px'}}>
            <tbody>
            <tr>
                <th><label style={styleLabel}>Witness Name</label></th>
                <th><label style={styleLabel}>Witness Telephone Number</label></th>
            </tr>
            <tr>
                <td style={{margin: 'auto'}}><TextField
                    required
                    variant={"outlined"}
                    fullWidth
                    name={'witness1Name'}
                    id={'witness1Name'}
                    value={formValues.witness1Name}
                    onChange={handleInputChange}
                /></td>
                <td style={{margin: '.2em'}}><TextField
                    variant={"outlined"}
                    name={'witness1Phone'}
                    id={'witness1Phone'}
                    value={formValues.witness1Phone}
                    onChange={handleInputChange}
                    fullWidth
                /></td>
            </tr>
            <tr>
                <td style={{margin: '.2em'}}>
                    <TextField
                        variant={"outlined"}
                        name={'witness2Name'}
                        id={'witness2Name'}
                        value={formValues.witness2Name}
                        onChange={handleInputChange}
                        fullWidth
                    /></td>
                <td style={{margin: '.2em'}}><TextField
                    variant={"outlined"}
                    name={'witness2Phone'}
                    id={'witness2Phone'}
                    value={formValues.witness2Phone}
                    onChange={handleInputChange}
                    fullWidth
                /></td>
            </tr>
            <tr>
                <td style={{margin: '.2em'}}><TextField
                    variant={"outlined"}
                    name={'witness3Name'}
                    id={'witness3Name'}
                    value={formValues.witness3Name}
                    onChange={handleInputChange}
                    fullWidth
                /><br/></td>
                <td style={{margin: '.2em'}}><TextField
                    variant={"outlined"}
                    name={'witness3Phone'}
                    id={'witness3Phone'}
                    value={formValues.witness3Phone}
                    onChange={handleInputChange}
                    fullWidth
                /></td>
            </tr>
            </tbody>
        </table>
    );

}

export default Witness;