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


const Fields = () => {

    const defaultValues = {
        dateOfEvent: new Date(),
        timeOfEvent: new Date(),
        location: "",
        eventType: "Actual Event/Incident",
        //boolean on backend
        harmEvent: "Yes",
        //string on backend delineated by commas
        individualsInvolved: {
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
        typeOfEvent: [],
        //boolean
        effectOfIncident: 'No harm sustained',
        witnessName1: '',
        witnessPhone1: '',
        witnessName2: '',
        witnessPhone2: '',
        witnessName3: '',
        witnessPhone3: '',
        //string on backend delineated by commas
        departmentsInvolved: [],
        descriptionOfIncident: "",
        actionsTaken: "",
        patientName: "",
        patientSSN: "",
        patientPhone: "",
        address: ""
    }
    const [isDisabled, setIsDisabled] = useState(true);
    const [isReportSubmitted, setIsReportSubmitted] = useState(false);
    const [formValues, setFormValues] = useState(defaultValues);


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
            ['typeOfEvent']: target,
        });
    }

    const handleAutoCompleteDepartmentsInvolved = (target) => {
        setFormValues({
            ...formValues,
            ['departmentsInvolved']: target,
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
        let newIndividualsInvolved = formValues.individualsInvolved;
        newIndividualsInvolved = {
            ...newIndividualsInvolved,
            [name]: newValue,
        }
        setFormValues({
            ...formValues,
            [`individualsInvolved`]: newIndividualsInvolved,
        })
    }
    const handleClickChildrenChange = () => {
        let newIndividualsInvolved = formValues.individualsInvolved;
        newIndividualsInvolved = {
            ...newIndividualsInvolved,
            ['familyMember']: false,
            ['adult']: false,
            ['child']: false,
        }
        setFormValues({
            ...formValues,
            [`individualsInvolved`]: newIndividualsInvolved,
        })

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formValues);
        const dataToBeSent = JSON.parse(JSON.stringify(formValues));
        if(dataToBeSent.harmEvent==="Yes"){
            dataToBeSent.harmEvent=true;
        } else {
            dataToBeSent.harmEvent=false;
        }
        if(dataToBeSent.effectOfIncident==="No harm sustained"){
            dataToBeSent.effectOfIncident=false;
        } else {
            dataToBeSent.effectOfIncident=true;
        }



    };
    useEffect(() => {
        for (const formValuesKey in formValues) {
            switch (formValuesKey) {
                case 'location':
                    if (formValues.location === "") {
                        setIsDisabled(true);
                    }
                    break;
                case 'individualsInvolved':
                    let flag = true;
                    for (const individualsInvolvedKey in formValues.individualsInvolved) {
                        if(formValues.individualsInvolved[`${individualsInvolvedKey}`]){
                           flag=false;
                        }
                    }
                    if(flag){
                        setIsDisabled(true);
                    }
                    break;
                case 'typeOfEvent':
                    if(formValues.typeOfEvent.length===0){
                        setIsDisabled(true);
                    }
                    break;
                case 'witnessName1':
                    if(formValues.witnessName1===""){
                        setIsDisabled(true);
                    }
                    break;
                case 'witnessPhone1':
                    if(formValues.witnessPhone1===""){
                        setIsDisabled(true);
                    }
                    break;
                case 'departmentsInvolved':
                    if(formValues.departmentsInvolved.length===0){
                        setIsDisabled(true);
                    }
                    break;
                case 'descriptionOfIncident':
                    if(formValues.descriptionOfIncident===''){
                        setIsDisabled(true);
                    }
                    break;
                case 'actionsTaken':
                    if(formValues.actionsTaken===''){
                        setIsDisabled(true);
                    }
                    break;
                case 'patientName':
                    if(formValues.patientName===''){
                        setIsDisabled(true);
                    }
                    break;
                case 'patientSSN':
                    if(formValues.patientSSN===''){
                        setIsDisabled(true);
                    }
                    break;
                case 'patientPhone':
                    if(formValues.patientPhone===''){
                        setIsDisabled(true);
                    }
                    break;
                case 'address':
                    if(formValues.address===''){
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
                        {isDisabled ?
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
                        }

                    </Grid>
                </Grid>
            </form>
        </>
    );

}
export default Fields;