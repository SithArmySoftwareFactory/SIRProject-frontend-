import * as React from 'react';
import {useState} from 'react';
import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import {styleLabel} from "../../../themes/themes";

const IndividualsInvolvedFormGroup = ({formValues, handleClickChange, handleChildrenClickChange}) => {

    const [isDisabled, setIsDisabled] = useState(true);
    const [involvedArray] = useState([]);

    let {patient, familyMember, adult, child, staffMember, visitor, volunteer, other} = formValues.individuals;


    const children = (
        <Box sx={{display: 'flex', flexDirection: 'column', ml: 3}}>
            <FormControlLabel
                label="Adult"
                disabled={isDisabled}
                key={'adult'}
                control={<Checkbox checked={adult} onChange={(event) => {
                    handleChange2(event);
                }} name={'adult'}/>}

            />
            <FormControlLabel
                label="Child <18 years old"
                disabled={isDisabled}
                key={'child'}
                control={<Checkbox checked={child} onChange={(event) => {
                    handleChange3(event);
                }} name={'child'}/>}

            />
        </Box>
    );

    const handleChange = (event) => {
        let name = event.target.name;
        let isChecked = event.target.checked;
        isChecked ? involvedArray.push(name) : involvedArray.splice(involvedArray.indexOf(name), 1);
        handleClickChange(event);

    };


    const handleChange2 = (event) => {

        handleChange(event)

    };

    const handleChange3 = (event) => {

        handleChange(event)
    };


    const handleChange4 = (event) => {
        setIsDisabled(!isDisabled);
        handleClickChange(event);

        if (!event.target.checked) {

            handleChildrenClickChange();

            adult = false;
            child = false;

            involvedArray.forEach(element => {
                if (element === 'adult') {
                    involvedArray.splice(involvedArray.indexOf('adult'), 1)
                }
            })
            involvedArray.forEach(element => {
                if (element === 'child') {
                    involvedArray.splice(involvedArray.indexOf('child'), 1)
                }
            })
        }
    }


    return (
        <Box sx={{display: 'flex'}}>
            <FormControl required sx={{m: 3}} component="fieldset" variant="standard"
            >
                <FormLabel sx={styleLabel}>Individuals Involved</FormLabel>
                <FormGroup
                >
                    <FormControlLabel
                        key='patient'
                        control={
                            <Checkbox checked={patient} onChange={handleChange} name="patient"/>
                        }
                        label="Patient"
                    />
                    <FormControlLabel
                        key={'familyMember'}

                        control={
                            <Checkbox checked={familyMember}

                                      onChange={(event => {
                                          handleChange4(event);
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
                component="fieldset"
                sx={{m: 3}}
                variant="standard"
            >
                <FormGroup>
                    <FormControlLabel
                        key={'staffMember'}
                        control={
                            <Checkbox checked={staffMember} onChange={handleChange} name="staffMember"/>
                        }
                        label="Staff Member"
                    />
                    <FormControlLabel
                        key={'visitor'}

                        control={
                            <Checkbox checked={visitor} onChange={handleChange} name="visitor"/>
                        }
                        label="Visitor"
                    />
                    <FormControlLabel
                        key={'volunteer'}

                        control={
                            <Checkbox checked={volunteer} onChange={handleChange} name="volunteer"/>
                        }
                        label="Volunteer"
                    />
                    <FormControlLabel
                        key={'other'}
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