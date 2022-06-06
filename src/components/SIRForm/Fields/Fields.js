import {Grid} from "@mui/material";
import DateOfEvent from "./DateOfEvent";
import TimeOfEvent from "./TimeOfEvent";
import LocationBox from "./LocationBox";
import EventTypeBox from "./EventTypeBox";
import * as React from "react";
import {useEffect, useState} from "react";
import HarmEventBox from "./HarmEventBox";
import IndividualsInvolvedFormGroup from "./IndividualsInvolvedFormGroup";
import TypeOfEventBox from "./TypeOfEventBox";
import EffectOfIncidentBox from "./EffectOfIncidentBox";
import Witness from "./Witness";
import DepartmentsInvolvedBox from "./DepartmentsInvolvedBox";
import DescriptionOfIncidentBox from "./DescriptionOfIncidentBox";
import ActionsTakenBox from "./ActionsTakenBox";
import PatientNameBox from "./PatientNameBox";
import PatientSSNBox from "./PatientSSNBox";
import PatientPhoneBox from "./PatientPhoneBox";
import AddressBox from "./AddressBox";
import Button from '@mui/material/Button';
import {styleDisabledButton, styleEnabledButton} from "../../../themes/themes";
import {apiPostIncident} from "../../../api/APICalls";
import CommandBox from "./CommandBox";
import Box from "@mui/material/Box";

import {getGeocode, getLatLng,} from "use-places-autocomplete";

const Fields = ({handleClick, open, defaultValues}) => {


    let defaultValues2;


    if (defaultValues != null) {

        defaultValues2 = {
            date: defaultValues.date ? new Date(defaultValues.date.split("-")[0], defaultValues.date.split("-")[1] - 1, defaultValues.date.split("-")[2]) : new Date(),
            time: defaultValues.time ? new Date(2022, 1, 1, defaultValues.time.split(":")[0], defaultValues.time.split(":")[1]) : new Date(),
            location: defaultValues.location,
            eventType: defaultValues.eventType ? defaultValues.eventType.split(",") : [],
            //boolean on backend
            harm: defaultValues.harm ? "Yes" : "No",
            //string on backend delineated by commas
            individuals: {
                patient: defaultValues.individuals ? defaultValues.individuals.includes("Patient") : false,
                familyMember: defaultValues.individuals ? defaultValues.individuals.includes("Family Member") : false,
                adult: defaultValues.individuals ? defaultValues.individuals.includes("Adult") : false,
                child: defaultValues.individuals ? defaultValues.individuals.includes("Child") : false,
                staffMember: defaultValues.individuals ? defaultValues.individuals.includes("Staff Member") : false,
                visitor: defaultValues.individuals ? defaultValues.individuals.includes("Visitor") : false,
                volunteer: defaultValues.individuals ? defaultValues.individuals.includes("Volunteer") : false,
                other: defaultValues.individuals ? defaultValues.individuals.includes("Other") : false
            },
            //string on backend delineated by commas
            incidentType: defaultValues.incidentType ? defaultValues.incidentType : "Actual Event/Incident",
            //boolean
            effects: defaultValues.effects ? "Harm sustained" : "No harm sustained",
            witness1Name: defaultValues.witness1Name || '',
            witness1Phone: defaultValues.witness1Phone || '',
            witness2Name: defaultValues.witness2Name || '',
            witness2Phone: defaultValues.witness2Phone || '',
            witness3Name: defaultValues.witness3Name || '',
            witness3Phone: defaultValues.witness3Phone || '',
            //string on backend delineated by commas
            department: defaultValues.department ? defaultValues.department.split(",") : [],
            description: defaultValues.description || "",
            prevention: defaultValues.prevention || "",
            patientName: defaultValues.patientName || "",
            patientSSN: defaultValues.patientSSN || "",
            patientPhone: defaultValues.patientPhone || "",
            patientAddress: defaultValues.patientAddress || ""
        }
    } else {
        defaultValues2 = {
            date: new Date(),
            time: new Date(),
            location: "",
            eventType: [],
            //boolean on backend
            harm: "Yes",
            //string on backend delineated by commas
            individuals: {
                patient: false,
                familyMember: false,
                adult: false,
                child: false,
                staffMember: false,
                visitor: false,
                volunteer: false,
                other: false
            },
            //string on backend delineated by commas
            incidentType: "Actual Event/Incident",
            //boolean
            effects: 'No harm sustained',
            witness1Name: '',
            witness1Phone: '',
            witness2Name: '',
            witness2Phone: '',
            witness3Name: '',
            witness3Phone: '',
            //string on backend delineated by commas
            department: [],
            description: "",
            prevention: "",
            patientName: "",
            patientSSN: "",
            patientPhone: "",
            patientAddress: ""
        }
    }
    const [isDisabled, setIsDisabled] = useState(true);
    const [formValues, setFormValues] = useState(defaultValues2);


    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    }

    const handleAutoCompleteTypeOfEvent = (target) => {
        setFormValues({
            ...formValues,
            eventType: target,
        });
    }

    const handleAutoCompleteDepartmentsInvolved = (target) => {
        setFormValues({
            ...formValues,
            department: target,
        });
    }
    const handleTimeChange = (newValue, name) => {
        setFormValues({
            ...formValues,
            [name]: newValue,
        });
    }
    const handleClickChange = (e) => {
        const {name, checked} = e.target;
        let newValue = false;
        if (checked) {
            newValue = true;
        }
        let newIndividualsInvolved = formValues.individuals;
        newIndividualsInvolved = {
            ...newIndividualsInvolved,
            [name]: newValue,
        }
        setFormValues({
            ...formValues,
            individuals: newIndividualsInvolved,
        })
    }
    const handleClickChildrenChange = () => {
        let newIndividualsInvolved = formValues.individuals;
        newIndividualsInvolved = {
            ...newIndividualsInvolved,
            familyMember: false,
            adult: false,
            child: false,
        }
        setFormValues({
            ...formValues,
            individuals: newIndividualsInvolved,
        })

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const dataToBeSent = JSON.parse(JSON.stringify(formValues));
        let individualsInvolvedString = '';
        let typeOfEventString = "";
        let departmentsInvolvedString = "";

        let tempTime = new Date(dataToBeSent.time);
        let tempTimeHour = tempTime.getHours();
        let tempTimeMinutes = tempTime.getMinutes();

        if (tempTimeHour < 10) {
            tempTimeHour = `0${tempTimeHour}`;
        }
        if (tempTimeMinutes < 10) {
            tempTimeMinutes = `0${tempTimeMinutes}`;
        }

        dataToBeSent.time = `${tempTimeHour}:${tempTimeMinutes}`;

        dataToBeSent.date = dataToBeSent.date.split('T')[0];


        dataToBeSent.harm = dataToBeSent.harm === "Yes";
        dataToBeSent.effects = dataToBeSent.effects !== "No harm sustained";

        for (const individuals in dataToBeSent.individuals) {
            if (dataToBeSent.individuals[`${individuals}`]) {
                individualsInvolvedString = individualsInvolvedString + "," + individuals.replace(/^\w/, (c) => c.toUpperCase());
            }
        }
        dataToBeSent.individuals = individualsInvolvedString.substring(1);

        for (const event of dataToBeSent.eventType) {
            typeOfEventString = typeOfEventString + "," + event;
        }
        dataToBeSent.eventType = typeOfEventString.substring(1);

        for (const department of dataToBeSent.department) {
            departmentsInvolvedString = departmentsInvolvedString + "," + department;
        }
        dataToBeSent.department = departmentsInvolvedString.substring(1);

        getTheLocation(dataToBeSent.location).then((data) => {

            dataToBeSent.lat = data.lat;
            dataToBeSent.lng = data.lng;

            apiPostIncident(dataToBeSent);
            setFormValues(defaultValues2);
        });

        handleClick();

        apiPostIncident(dataToBeSent);
        setFormValues(defaultValues2);

    }

    async function getTheLocation(searchAddress) {
        const results = await getGeocode({address: searchAddress});
        const {lat, lng} = await getLatLng(results[0]);
        return {lat, lng}
    }


    useEffect(() => {
        for (const formValuesKey in formValues) {
            switch (formValuesKey) {
                case 'location':
                    if (formValues.location === "") {
                        setIsDisabled(true);
                    }
                    break;
                case 'individuals':
                    let flag = true;
                    for (const individualsInvolvedKey in formValues.individuals) {
                        if (formValues.individuals[`${individualsInvolvedKey}`]) {
                            flag = false;
                        }
                    }
                    if (flag) {
                        setIsDisabled(true);
                    }
                    break;
                case 'incidentType':
                    if (formValues.incidentType.length === 0) {
                        setIsDisabled(true);
                    }
                    break;
                case 'witness1Name':
                    if (formValues.witness1Name === "") {
                        setIsDisabled(true);
                    }
                    break;
                case 'witness1Phone':
                    if (formValues.witness1Phone === "") {
                        setIsDisabled(true);
                    }
                    break;
                case 'department':
                    if (formValues.department.length === 0) {
                        setIsDisabled(true);
                    }
                    break;
                case 'descriptionOfIncident':
                    if (formValues.description === '') {
                        setIsDisabled(true);
                    }
                    break;
                case 'prevention':
                    if (formValues.prevention === '') {
                        setIsDisabled(true);
                    }
                    break;
                case 'patientName':
                    if (formValues.patientName === '') {
                        setIsDisabled(true);
                    }
                    break;
                case 'patientSSN':
                    if (formValues.patientSSN === '') {
                        setIsDisabled(true);
                    }
                    break;
                case 'patientPhone':
                    if (formValues.patientPhone === '') {
                        setIsDisabled(true);
                    }
                    break;
                case 'patientAddress':
                    if (formValues.patientAddress === '') {
                        setIsDisabled(true);
                    }
                    break;
                default:
                    setIsDisabled(false);
            }
        }
    }, [formValues]);

    return (
        <Box>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={1}>
                    <DateOfEvent formValues={formValues} handleInputChange={handleTimeChange}/>
                    <TimeOfEvent formValues={formValues} handleInputChange={handleTimeChange}/>
                </Grid>
                <LocationBox formValues={formValues} handleInputChange={handleInputChange}/>
                <br/>
                <Grid container spacing={1}>
                    <EventTypeBox formValues={formValues} handleInputChange={handleInputChange}/>
                    <HarmEventBox formValues={formValues} handleInputChange={handleInputChange}/>
                </Grid>
                <IndividualsInvolvedFormGroup formValues={formValues} handleClickChange={handleClickChange}
                                              handleChildrenClickChange={handleClickChildrenChange}/>
                <TypeOfEventBox formValues={formValues} handleInputChange={handleAutoCompleteTypeOfEvent}/>
                <br/>
                <EffectOfIncidentBox formValues={formValues} handleInputChange={handleInputChange}/>
                <br/>
                <Witness formValues={formValues} handleInputChange={handleInputChange}/>
                <DepartmentsInvolvedBox formValue={formValues}
                                        handleInputChange={handleAutoCompleteDepartmentsInvolved}/>
                <DescriptionOfIncidentBox formValues={formValues} handleInputChange={handleInputChange}/>
                <ActionsTakenBox formValues={formValues} handleInputChange={handleInputChange}/>
                <PatientNameBox formValues={formValues} handleInputChange={handleInputChange}/>
                <Grid container spacing={1}>
                    <PatientSSNBox formValues={formValues} handleInputChange={handleInputChange}/>
                    <PatientPhoneBox formValues={formValues} handleInputChange={handleInputChange}/>
                </Grid>
                <AddressBox formValues={formValues} handleInputChange={handleInputChange}/>
                {formValues.command && <CommandBox formValues={formValues}/>}
                <Grid container spacing={1}>
                    <Grid item xs={7}/>
                    <Grid item xs={5}>
                        {/*open is inherited state from the supervisor view. If the form is opened from the supervisor view, it will not render a submit button.*/}
                        {!open ?
                            isDisabled ?
                                <Button type="submit"
                                        style={styleDisabledButton}
                                        variant="contained"
                                        disabled
                                >
                                    Submit
                                </Button> :
                                <Button
                                    type="submit"
                                    style={styleEnabledButton}
                                    variant="contained"
                                    disabled={false}
                                >
                                    Submit
                                </Button>
                            : null}

                    </Grid>
                </Grid>
            </form>
        </Box>
    );

}
export default Fields;