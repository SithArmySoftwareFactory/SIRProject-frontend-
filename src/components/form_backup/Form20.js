import React, {useEffect, useState} from 'react';
import {Field as FormikField, FormikProvider, useFormik} from 'formik';
import * as yup from 'yup';
import {Button, FormControl, Grid, MenuItem, Select, TextField} from '@mui/material';
import TagsInput from "./TagsInput";


//validation for form fields
const validationSchema = yup.object({
    date: yup
         .string('Enter date')
        .required('Date is required'),
    // time: yup
    //     .string('Enter time')
    //     .required('Time is required'),
    location: yup
        .string('Enter your location')
        .min(2, 'Location should have at least 2 characters.')
        .required('Location is required'),


});


const Form20 = (props) => {
    //handle the checkbox toggle
    const [familyMemberToggle, setFamilyMemberToggle] = useState(false);
    const [adultToggle, setAdultToggle] = useState(false);
    const [childToggle, setChildToggle] = useState(false);
    //these will be tracked and set by props values to determine what checkboxes are checked
    const [checkedPatient, setCheckedPatient] = useState(false);
    const [checkedFam, setCheckedFam] = useState(false);
    const [checkedAdult, setCheckedAdult] = useState(false);
    const [checkedChild, setCheckedChild] = useState(false);
    const [checkedStaffMember, setCheckedStaffMember] = useState(false);
    const [checkedVolunteer, setCheckedVolunteer] = useState(false);
    const [checkedVisitor, setCheckedVisitor] = useState(false);
    const [checkedOther, setCheckedOther] = useState(false);

    //handle tags
    const [eventTags, setEventTags] = useState(props.rowsViewed.eventType.trim().split(","));
    const [departmentTags, setDepartmentTags] = useState(props.rowsViewed.department.trim().split(","));
    const [checkboxValues, setCheckboxValues] = useState([]);
    var individualsArray = [];

    const setCheckboxFunc = ( name, value  ) => {
        setCheckboxValues({
            ...checkboxValues,
            [name]: value,
        });
    };

    const deleteEventTags = (item) => {
        let newArray = [...eventTags];

        for (let i = 0; i < newArray.length; i++) {
            if(newArray[i] === item ) {
                newArray.splice(i, 1);
            }
        }
        setEventTags(newArray);
        let newArray2 = [...departmentTags];

        for (let i = 0; i < newArray2.length; i++) {
            if(newArray2[i] === item ) {
                newArray2.splice(i, 1);
            }
        }
        setDepartmentTags(newArray2);
    }

    const formatIndividuals = () => {
        if(props.rowsViewed.individuals !== null || props.rowsViewed.individuals !== 'undefined') {
            let individuals = props.rowsViewed.individuals;
            individualsArray = individuals.split(",");

            for (let i = 0; i < individualsArray.length; i++) {
                if(individualsArray[i]=== 'Patient'){
                    setCheckedPatient(true);
                    formik.values.patient = 'Patient';
                    setCheckboxFunc('patient', 'Patient');
                }
                if(individualsArray[i] === 'Family Member'){
                    setCheckedFam(true);
                    setFamilyMemberToggle(true)
                    setCheckboxFunc('familymember', 'Family Member');
                    if(checkedFam === false) {
                        formik.values.familymember = '';
                    } else {
                        formik.values.familymember = 'Family Member';
                    }
                }
                if(individualsArray[i] === 'Adult'){
                    setCheckedAdult(true);
                    if(checkedAdult === false) {
                        formik.values.adult = '';
                        setCheckboxFunc('adult', 'Adult');
                    } else {
                        formik.values.adult = 'Adult';
                    }
                }
                if(individualsArray[i] === 'Child'){
                    setCheckedChild(true);
                    setCheckboxFunc('child', 'Child');
                    if(checkedChild === false) {
                        formik.values.child = '';
                    } else {
                        formik.values.child = 'Child';
                    }
                }
                if(individualsArray[i] === 'Visitor'){
                    setCheckedVisitor(true);
                    setCheckboxFunc('visitor', 'Visitor');
                    if(checkedVisitor === false) {
                        formik.values.visitor = '';
                    } else {
                        formik.values.visitor = 'Visitor';
                    }
                }
                if(individualsArray[i] === 'Staff Member'){
                    setCheckedStaffMember(true);
                    setCheckboxFunc('staffmember', 'Staff Member');
                    if(checkedStaffMember=== false) {
                        formik.values.staffmember = '';
                    } else {
                        formik.values.staffmember = 'Staff Member';
                    }
                }
                if(individualsArray[i] === 'Volunteer'){
                    setCheckedVolunteer(true);
                    setCheckboxFunc('volunteer', 'Volunteer');
                    if(checkedVolunteer === false) {
                        formik.values.volunteer = '';
                    } else {
                        formik.values.volunteer = 'Volunteer';
                    }
                }
                if(individualsArray[i] === 'Other'){
                    setCheckedOther(!checkedOther);
                    setCheckboxFunc('other', 'Other');
                    if(checkedOther === false) {
                        formik.values.other = '';
                    } else {
                        formik.values.other = 'Other';
                    }
                }
            }
        }
    };

    //initialValues , can be populated with data
    const formik = useFormik({

        initialValues: {
            date: props.rowsViewed.date,
            time: props.rowsViewed.time,
            location: props.rowsViewed.location,
            incidentType: props.rowsViewed.incidentType,
            harm: props.rowsViewed.harm,
            eventType: props.rowsViewed.eventType,
            effects: props.rowsViewed.effects,
            patient: individualsArray['patient'],
            familymember: checkboxValues['familymember'],
            adult:checkboxValues['adult'],
            child:checkboxValues['child'],
            staffmember:checkboxValues['staffmember'],
            visitor:checkboxValues['visitor'],
            volunteer:checkboxValues['volunteer'],
            other:checkboxValues['other'],
            witness1Name:props.rowsViewed.witness1Name,
            witness1Phone:props.rowsViewed.witness1Phone,
            witness2Name:props.rowsViewed.witness2Name,
            witness2Phone:props.rowsViewed.witness2Phone,
            witness3Name:props.rowsViewed.witness3Name,
            witness3Phone:props.rowsViewed.witness3Phone,
            department:props.rowsViewed.department,
            description:props.rowsViewed.description,
            prevention:props.rowsViewed.prevention,
            patientName:props.rowsViewed.patientName,
            patientSSN:props.rowsViewed.patientSSN,
            patientPhone:props.rowsViewed.patientPhone,
            patientAddress:props.rowsViewed.patientAddress,
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
           console.log(JSON.stringify(values, null, 2));
        },
    });



    const handleChangeEvent = (event) => {
        //handling checkbox toggle
        if (event.target.value === 'familymember') {
            setFamilyMemberToggle(!familyMemberToggle);
            setCheckedFam(!checkedFam);
            if (!event.target.checked) {
                setAdultToggle(false);
                setChildToggle(false);
                setCheckedAdult(false);
                setCheckedChild(false);
            }
        }
        if (event.target.value === 'adult' && familyMemberToggle) {
            setAdultToggle(!adultToggle);
        }
        if (event.target.value === 'child' && familyMemberToggle) {
            setChildToggle(!childToggle);
        }
        if (event.target.value === 'staffmember') {
            setCheckedStaffMember(!checkedStaffMember);
        }
        if (event.target.value === 'visitor') {
            setCheckedVisitor(!checkedVisitor);
        }
        if (event.target.value === 'volunteer') {
            setCheckedVolunteer(!checkedVolunteer);
        }
        if (event.target.value === 'other') {
            setCheckedOther(!checkedOther);
        }


    }
    //saving state is async, so we use an async function and call it within useEffect
    //it monitors formik.values which is in state
    useEffect(() => {
        async function fetchData() {
            props.handleSave(formik.values)
        }
        fetchData();
    }, [formik.values]);

    //update form values for individuals involved
    useEffect(formatIndividuals, [handleChangeEvent]);

    const handleTagsEventType = (value) => {
        formik.values.eventType = value;
    }

    const handleTagsDepartment = (value) => {
        formik.values.department = value;
    }
    return (
        <form onSubmit={formik.handleSubmit} onChange={handleChangeEvent}>
            <Grid container
                  spacing={2} columns={8}
                  justifyContent="center" maxWidth="700px">
                <Grid item xs={4}>
                    <FormControl sx={{width: '100%'}}>
                        <label>Date of Event:</label>
                        <TextField
                            fullWidth
                            id="date"
                            name="date"
                            type="date"
                            value={formik.values.date}
                            onChange={formik.handleChange}
                            error={formik.touched.date && Boolean(formik.errors.date)}
                            helperText={formik.touched.date && formik.errors.date}
                        />
                    </FormControl>
                </Grid>
                <Grid item xs={4}>
                    <FormControl sx={{width: '100%'}}>
                        <label>Time of Event:</label>
                        <TextField
                            fullWidth
                            id="time"
                            name="time"
                            type="time"
                            value={formik.values.time}
                            onChange={formik.handleChange}
                            error={formik.touched.time && Boolean(formik.errors.time)}
                            helperText={formik.touched.time && formik.errors.time}
                        />
                    </FormControl>
                </Grid>
                <Grid item xs={8}>
                    <FormControl sx={{width: '100%'}}>
                        <label>Location of Event:</label>
                        <TextField
                            fullWidth
                            id="location"
                            name="location"
                            type="text"
                            value={formik.values.location}
                            onChange={formik.handleChange}
                            error={formik.touched.location && Boolean(formik.errors.location)}
                            helperText={formik.touched.location && formik.errors.location}
                        />
                    </FormControl>
                </Grid>
                <Grid item xs={4}>
                    <FormControl sx={{width: '100%'}}>
                        <label>Incident Type</label>
                        <Select
                            id="incidentType"
                            name="incidentType"
                            type="incidentType"
                            value={formik.values.incidentType}
                            onChange={formik.handleChange}
                            error={formik.touched.incidentType && Boolean(formik.errors.incidentType)}
                            helperText={formik.touched.incidentType && formik.errors.incidentType}
                        >
                            <MenuItem value="Actual Event/Incident">Actual Event/Incident</MenuItem>
                            <MenuItem value="Near Miss/Close Call">Near Miss/Close Call</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={4}>
                    <FormControl sx={{width: '100%'}}>
                        <label>Harm or Potential Harm</label>
                        <Select
                            id="harm"
                            name="harm"
                            type="harm"
                            value={formik.values.harm}
                            onChange={formik.handleChange}
                            error={formik.touched.harm && Boolean(formik.errors.harm)}
                            helperText={formik.touched.harm && formik.errors.harm}
                        >
                            <MenuItem value={true}>Yes</MenuItem>
                            <MenuItem value={false}>No</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={4}>
                    <label>Individuals involved</label>
                    <div style={{marginBottom: '15px'}}>
                        <label>
                            <FormikProvider value={formik}>
                                <FormikField
                                    type="checkbox"
                                    name="patient"
                                    value="patient"
                                    checked={checkedPatient}
                                    onChange={formik.handleChange}
                                    error={formik.touched.patient && Boolean(formik.errors.patient)}
                                    helperText={formik.touched.patient && formik.errors.patient}
                                />
                            </FormikProvider>
                            &nbsp; &nbsp; Patient
                        </label>
                    </div>
                    <div style={{marginBottom: '15px'}}>
                        <label>
                            <FormikProvider value={formik}>
                                <FormikField
                                    type="checkbox"
                                    name="familymember"
                                    value="familymember"
                                    checked={checkedFam}
                                    onChange={formik.handleChange}
                                    error={formik.touched.familymember && Boolean(formik.errors.familymember)}
                                    helperText={formik.touched.familymember && formik.errors.familymember}
                                />
                            </FormikProvider>
                            &nbsp; &nbsp; Family Member
                        </label>
                    </div>
                    <div style={{marginLeft: '20px', marginBottom: '15px'}}>
                        <label>
                            <FormikProvider value={formik}>
                                <FormikField
                                    type="checkbox"
                                    name="adult"
                                    value="adult"
                                    checked={adultToggle || checkedAdult}
                                    onChange={formik.handleChange}
                                    disabled={!familyMemberToggle}/>
                            </FormikProvider>
                            &nbsp; &nbsp;
                            {
                                familyMemberToggle
                                    ?
                                    <span>Adult</span>
                                    :
                                    <font color="#CCCCCC">Adult</font>
                            }
                        </label>
                    </div>
                    <div style={{marginLeft: '20px', marginBottom: '15px'}}>
                        <label>
                            <FormikProvider value={formik}>
                                <FormikField
                                    type="checkbox"
                                    name="child"
                                    value="child"
                                    onChange={formik.handleChange}
                                    checked={childToggle || checkedChild}
                                    disabled={!familyMemberToggle}/>
                            </FormikProvider>
                            &nbsp; &nbsp;
                            {
                                familyMemberToggle
                                    ?
                                    <span>Child &lt; 18 years old</span>
                            :
                                    <font color="#CCCCCC">Child &lt; 18 years old</font>
                            }
                        </label></div>
                </Grid>
                <Grid item xs={4}>
                    <br />
                    <FormControl sx={{width: '100%'}}>
                        <div style={{marginBottom: '15px'}}>
                            <label>
                                <FormikProvider value={formik}>
                                    <FormikField
                                        type="checkbox"
                                        name="staffmember"
                                        checked={checkedStaffMember}
                                        onChange={formik.handleChange}
                                        value="staffmember"/>
                                </FormikProvider>
                                &nbsp; &nbsp; Staff Member
                            </label>
                        </div>
                        <div style={{marginBottom: '15px'}}>
                            <label>
                                <FormikProvider value={formik}>
                                    <FormikField
                                        type="checkbox"
                                        name="visitor"
                                        checked={checkedVisitor}
                                        onChange={formik.handleChange}
                                        value="visitor"/>
                                </FormikProvider>
                                &nbsp; &nbsp; Visitor
                            </label>
                        </div>
                        <div style={{marginBottom: '15px'}}>
                            <label>
                                <FormikProvider value={formik}>
                                    <FormikField
                                        type="checkbox"
                                        name="volunteer"
                                        checked={checkedVolunteer}
                                        onChange={formik.handleChange}
                                        value="volunteer"/>
                                </FormikProvider>
                                &nbsp; &nbsp; Volunteer
                            </label>
                        </div>
                        <div style={{marginBottom: '15px'}}>
                            <label>
                                <FormikProvider value={formik}>
                                    <FormikField
                                        type="checkbox"
                                        name="other"
                                        checked={checkedOther}
                                        onChange={formik.handleChange}
                                        value="other"/>
                                </FormikProvider>
                                &nbsp; &nbsp; Other
                            </label>
                        </div>
                    </FormControl>
                </Grid>
                <Grid item xs={8}>
                    <FormControl sx={{width: '100%'}}>
                        <label>Event Type:</label>
                        <TagsInput
                            selectedTags={handleTagsEventType}
                                fullWidth
                                id="evenType"
                                name="eventType"
                                type="text"
                                value={'formik.values.eventType'}
                                eventTags={eventTags}
                            deleteEventTags={deleteEventTags}
                            onChange={formik.handleChange}
                        />
                    </FormControl>
                </Grid>
                <Grid item xs={8}>
                    <FormControl sx={{width: '100%'}}>
                        <label>Effects of this Incident on the Individual(s) involved</label>
                        <Select
                            id="effects"
                            name="effects"
                            type="effects"
                            value={formik.values.effects}
                            onChange={formik.handleChange}
                            error={formik.touched.effects && Boolean(formik.errors.effects)}
                            helperText={formik.touched.effects && formik.errors.effects}
                        >
                            <MenuItem value={false}>No Harm Sustained</MenuItem>
                            <MenuItem value={true}>Harm Sustained</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={4}>
                    <FormControl sx={{width: '100%'}}>
                        <label>Witness Name:</label>
                        <TextField
                            fullWidth
                            id="witness1Name"
                            name="witness1Name"
                            type="text"
                            value={formik.values.witness1Name}
                            onChange={formik.handleChange}
                            error={formik.touched.witness1Name && Boolean(formik.errors.witness1Name)}
                            helperText={formik.touched.witness1Name && formik.errors.witness1Name}
                        />
                    </FormControl>
                </Grid>
                <Grid item xs={4}>
                    <FormControl sx={{width: '100%'}}>
                        <label>Witness Telephone Number:</label>
                        <TextField
                            fullWidth
                            id="witness1Phone"
                            name="witness1Phone"
                            type="text"
                            value={formik.values.witness1Phone}
                            onChange={formik.handleChange}
                            error={formik.touched.witness1Phone && Boolean(formik.errors.witness1Phone)}
                            helperText={formik.touched.witness1Phone && formik.errors.witness1Phone}
                        />
                    </FormControl>
                </Grid>
                <Grid item xs={4}>
                    <FormControl sx={{width: '100%'}}>
                        <TextField
                            fullWidth
                            id="witness2Name"
                            name="witness2Name"
                            type="text"
                            value={formik.values.witness2Name}
                            onChange={formik.handleChange}
                            error={formik.touched.witness2Name && Boolean(formik.errors.witness2Name)}
                            helperText={formik.touched.witness2Name && formik.errors.witness2Name}
                        />
                    </FormControl>
                </Grid>
                <Grid item xs={4}>
                    <FormControl sx={{width: '100%'}}>
                        <TextField
                            fullWidth
                            id="witness2Phone"
                            name="witness2Phone"
                            type="text"
                            value={formik.values.witness2Phone}
                            onChange={formik.handleChange}
                            error={formik.touched.witness2Phone && Boolean(formik.errors.witness2Phone)}
                            helperText={formik.touched.witness2Phone && formik.errors.witness2Phone}
                        />
                    </FormControl>
                </Grid>
                <Grid item xs={4}>
                    <FormControl sx={{width: '100%'}}>
                        <TextField
                            fullWidth
                            id="witness3Name"
                            name="witness3Name"
                            type="text"
                            value={formik.values.witness3Name}
                            onChange={formik.handleChange}
                            error={formik.touched.witness3Name && Boolean(formik.errors.witness3Name)}
                            helperText={formik.touched.witness3Name && formik.errors.witness3Name}
                        />
                    </FormControl>
                </Grid>
                <Grid item xs={4}>
                    <FormControl sx={{width: '100%'}}>
                        <TextField
                            fullWidth
                            id="witness3Phone"
                            name="witness3Phone"
                            type="text"
                            value={formik.values.witness3Phone}
                            onChange={formik.handleChange}
                            error={formik.touched.witness3Phone && Boolean(formik.errors.witness3Phone)}
                            helperText={formik.touched.witness3Phone && formik.errors.witness3Phone}
                        />
                    </FormControl>
                </Grid>
                <Grid item xs={8}>
                    <FormControl sx={{width: '100%'}}>
                        <label>Departments Involved in this incident</label>
                        <TagsInput
                            selectedTags={handleTagsDepartment}
                            fullWidth
                            id="department"
                            name="department"
                            type="text"
                            value={formik.values.department}
                            departmentTags={departmentTags}
                            deleteEventTags={deleteEventTags}
                        />
                    </FormControl>
                </Grid>
                <Grid item xs={8}>
                    <FormControl sx={{width: '100%'}}>
                        <label>Description of Incident</label>
                        <TextField
                            multiline
                            rows={5}
                            fullWidth
                            id="description"
                            name="description"
                            type="text"
                            value={formik.values.description}
                            onChange={formik.handleChange}
                            error={formik.touched.description && Boolean(formik.errors.description)}
                            helperText={formik.touched.description && formik.errors.description}
                        />
                    </FormControl>
                </Grid>
                <Grid item xs={8}>
                    <FormControl sx={{width: '100%'}}>
                        <label>What actions, if any, could have been taken to prevent this incident from occurring?</label>
                        <TextField
                            multiline
                            rows={4}
                            fullWidth
                            id="prevention"
                            name="prevention"
                            type="text"
                            value={formik.values.prevention}
                            onChange={formik.handleChange}
                            error={formik.touched.prevention && Boolean(formik.errors.prevention)}
                            helperText={formik.touched.prevention && formik.errors.prevention}
                        />
                    </FormControl>
                </Grid>
                <Grid item xs={8}>
                    <FormControl sx={{width: '100%'}}>
                        <label>Patient Name or ID Plate:</label>
                        <TextField
                            fullWidth
                            id="patientName"
                            name="patientName"
                            type="text"
                            value={formik.values.patientName}
                            onChange={formik.handleChange}
                            error={formik.touched.patientName && Boolean(formik.errors.patientName)}
                            helperText={formik.touched.patientName && formik.errors.patientName}
                        />
                    </FormControl>
                </Grid>
                <Grid item xs={4}>
                    <FormControl sx={{width: '100%'}}>
                        <label>Patient SSN:</label>
                        <TextField
                            fullWidth
                            id="patientSSN"
                            name="patientSSN"
                            type="text"
                            value={formik.values.patientSSN}
                            onChange={formik.handleChange}
                            error={formik.touched.patientSSN && Boolean(formik.errors.patientSSN)}
                            helperText={formik.touched.patientSSN && formik.errors.patientSSN}
                        />
                    </FormControl>
                </Grid>
                <Grid item xs={4}>
                    <FormControl sx={{width: '100%'}}>
                        <label>Patient Phone:</label>
                        <TextField
                            fullWidth
                            id="patientPhone"
                            name="patientPhone"
                            type="text"
                            value={formik.values.patientPhone}
                            onChange={formik.handleChange}
                            error={formik.touched.patientPhone && Boolean(formik.errors.patientPhone)}
                            helperText={formik.touched.patientPhone && formik.errors.patientPhone}
                        />
                    </FormControl>
                </Grid>
                <Grid item xs={8}>
                    <FormControl sx={{width: '100%'}}>
                        <label>Patient Address:</label>
                        <TextField
                            fullWidth
                            id="patientAddress"
                            name="patientAddress"
                            type="text"
                            value={formik.values.patientAddress}
                            onChange={formik.handleChange}
                            error={formik.touched.patientAddress && Boolean(formik.errors.patientAddress)}
                            helperText={formik.touched.patientAddress && formik.errors.patientAddress}
                        />
                    </FormControl>
                </Grid>
                <Grid item xs={2}>
                    <FormControl>
                        <Button color="primary" variant="contained" fullWidth type="submit">
                            Submit
                        </Button>
                        {(props.view === 'supervisor') ?
                            null
                           :
                            <Button color="primary" variant="contained" fullWidth type="submit">
                                Submit
                            </Button>
                        }
                    </FormControl>
                </Grid>
            </Grid>
        </form>
    );
};

export default Form20;