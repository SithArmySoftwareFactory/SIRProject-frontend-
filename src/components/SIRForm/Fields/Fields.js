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


const Fields = ({handleClick, open, defaultValues }) => {

    let defaultValues2 = null;

    if(defaultValues == null) {
        defaultValues2 = {
            date: new Date(),
            time: new Date(),
            location: "",
            eventType: "Actual Event/Incident",
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
            incidentType: [],
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
    } else {
        defaultValues2 = {
            date: defaultValues.date || new Date(),
            time: defaultValues.time || new Date(),
            location: defaultValues.location || "",
            eventType: defaultValues.eventType || "Actual Event/Incident",
            //boolean on backend
            harm: (defaultValues.harm) ? "Yes" : "no" || "Yes",
            //string on backend delineated by commas
            individuals: {
                patient: (defaultValues.patient !== null),
                familyMember: (defaultValues.familymember !== null),
                adult: (defaultValues.adult !== null),
                child: (defaultValues.child !== null),
                staffMember: (defaultValues.staffmember !== null),
                visitor: (defaultValues.visitor !== null),
                volunteer: (defaultValues.volunteer !== null),
                other: (defaultValues.other !== null)
            },
            //string on backend delineated by commas
            incidentType: (defaultValues.incidentType !== null) ? defaultValues.incidentType.trim().split(",") || [] : [],
            //boolean
            effects: defaultValues.effects || 'No harm sustained',
            witness1Name: defaultValues.witness1Name || '',
            witness1Phone: defaultValues.witness1Phone || '',
            witness2Name: defaultValues.witness2Name || '',
            witness2Phone: defaultValues.witness2Phone || '',
            witness3Name: defaultValues.witness3Name || '',
            witness3Phone: defaultValues.witness3Phone || '',
            //string on backend delineated by commas
            department: (defaultValues.department !== null) ? defaultValues.department.trim().split(",") || [] : [],
            description: defaultValues.description || "",
            prevention: defaultValues.prevention || "",
            patientName: defaultValues.patientName || "",
            patientSSN: defaultValues.patientSSN || "",
            patientPhone: defaultValues.patientPhone || "",
            patientAddress: defaultValues.patientAddress || ""
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
            ['incidentType']: target,
        });
    }

    const handleAutoCompleteDepartmentsInvolved = (target) => {
        setFormValues({
            ...formValues,
            ['department']: target,
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
            [`individuals`]: newIndividualsInvolved,
        })
    }
    const handleClickChildrenChange = () => {
        let newIndividualsInvolved = formValues.individuals;
        newIndividualsInvolved = {
            ...newIndividualsInvolved,
            ['familyMember']: false,
            ['adult']: false,
            ['child']: false,
        }
        setFormValues({
            ...formValues,
            [`individuals`]: newIndividualsInvolved,
        })

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const dataToBeSent = JSON.parse(JSON.stringify(formValues));
        let individualsInvolvedString = '';
        let typeOfEventString = "";
        let departmentsInvolvedString = "";

        let tempTime = new Date(dataToBeSent.time);

        if(tempTime.getHours()<10){
            dataToBeSent.time= "0"+tempTime.getHours()+":"+tempTime.getMinutes();
        } else {
            dataToBeSent.time= tempTime.getHours()+":"+tempTime.getMinutes();
        }

        if(tempTime.getMinutes()<10){
            dataToBeSent.time= "0"+tempTime.getHours()+":0"+tempTime.getMinutes();
        } else {
            dataToBeSent.time= tempTime.getHours()+":"+tempTime.getMinutes();
        }

        dataToBeSent.date=dataToBeSent.date.split('T')[0];


        dataToBeSent.harm = dataToBeSent.harm === "Yes";
        if (dataToBeSent.effects === "No harm sustained") {
            dataToBeSent.effects = false;
        } else {
            dataToBeSent.effects = true;
        }

        for (const individuals in dataToBeSent.individuals) {
            if (dataToBeSent.individuals[`${individuals}`]) {
                individualsInvolvedString = individualsInvolvedString + "," + individuals;
            }
        }
        dataToBeSent.individuals = individualsInvolvedString.substring(1);

        for (const event of dataToBeSent.incidentType) {
            typeOfEventString = typeOfEventString + "," + event;
        }
        dataToBeSent.incidentType = typeOfEventString.substring(1);

        for (const department of dataToBeSent.department) {
            departmentsInvolvedString = departmentsInvolvedString + "," + department;
        }
        dataToBeSent.department = departmentsInvolvedString;
        handleClick();
        console.log(dataToBeSent);
        apiPostIncident(dataToBeSent);
        setFormValues(defaultValues);



    };
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
        <>
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
        </>
    );

}
export default Fields;