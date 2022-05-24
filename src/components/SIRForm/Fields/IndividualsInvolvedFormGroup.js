import * as React from 'react';
import {useState} from 'react';
import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import {styleLabel} from "../../../themes/themes";

const IndividualsInvolvedFormGroup = () => {
    const [state, setState] = React.useState({
        patient: false,
        familyMember: false,
        staffMember: false,
        visitor: false,
        volunteer: false,
        other: false
    });
    const [checked, setChecked] = React.useState([false, false]);
    const [isDisabled, setIsDisabled] = useState(true);

    const handleChange = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.checked,
        });
    };

    const handleChange2 = (event) => {
        setChecked([event.target.checked, checked[1]]);
    };

    const handleChange3 = (event) => {
        setChecked([checked[0], event.target.checked]);
    };

    const children = (
        <Box sx={{display: 'flex', flexDirection: 'column', ml: 3}}>
            <FormControlLabel
                label="Adult"
                disabled={isDisabled}
                control={<Checkbox checked={checked[0]} onChange={handleChange2}/>}
            />
            <FormControlLabel
                label="Child <18 years old"
                disabled={isDisabled}
                control={<Checkbox checked={checked[1]} onChange={handleChange3}/>}
            />
        </Box>
    );


    const {patient, familyMember, staffMember, visitor, volunteer, other} = state;
    // const error = [patient, familyMember, staffMember, visitor, volunteer, other].filter((v) => v).length !== 1;

    return (
        <Box sx={{display: 'flex'}}>
            <FormControl sx={{m: 3}} component="fieldset" variant="standard">
                <FormLabel sx={styleLabel}>Individuals Involved</FormLabel>
                <FormGroup>
                    <FormControlLabel
                        control={
                            <Checkbox checked={patient} onChange={handleChange} name="patient"/>
                        }
                        label="Patient"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox checked={familyMember || (checked[0] && checked[1])}
                                      indeterminate={checked[0] !== checked[1]}
                                      onChange={(event => {
                                          handleChange(event);
                                          setIsDisabled(!isDisabled);
                                      })}
                                      name="familyMember"
                            />
                        }
                        label="Family Member"
                    />
                    {children}

                </FormGroup>

            </FormControl>
            <FormControl
                required
                // error={error}
                component="fieldset"
                sx={{m: 3}}
                variant="standard"
            >
                <FormGroup>
                    <FormControlLabel
                        control={
                            <Checkbox checked={staffMember} onChange={handleChange} name="staffMember"/>
                        }
                        label="Staff Member"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox checked={visitor} onChange={handleChange} name="visitor"/>
                        }
                        label="Visitor"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox checked={volunteer} onChange={handleChange} name="volunteer"/>
                        }
                        label="Volunteer"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox checked={other} onChange={handleChange} name="other"/>
                        }
                        label="Other"
                    />
                </FormGroup>
            </FormControl>
        </Box>
    );
}

export default IndividualsInvolvedFormGroup;