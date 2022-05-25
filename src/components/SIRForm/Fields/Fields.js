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
    const [isDisabled, setIsDisabled] = useState(true);
    const [isReportSubmitted, setIsReportSubmitted] = useState(false);
    const [count, setCount] = useState(3);
    const [dateOfEvent, setDateOfEvent] = useState(new Date());
    const [timeOfEvent, setTimeOfEvent] = useState(new Date());
    const [location, setLocation] = useState('');
    const [eventType, setEventType] = useState("Actual Event/Incident");
    const [descriptionOfIncident, setDescriptionOfIncident] = useState('');
    const [actionsTaken, setActionsTaken] = useState('');
    const [patientName, setPatientName] = useState('');
    const [patientSSN, setPatientSSN] = useState('');
    const [patientPhone, setPatientPhone] = useState('');
    const [address, setAddress] = useState('');
    const [harmEvent, setHarmEvent] = useState('Yes');
    const [individualsInvolved, setIndividualsInvolved] = useState({
        patient: false,
        familyMember: false,
        staffMember: false,
        visitor: false,
        volunteer: false,
        other: false
    });


    const setComponentDateOfEvent = (value) => {
        setDateOfEvent(value);
    }

    const setComponentTimeOfEvent = (value) => {
        setTimeOfEvent(value);
    }

    const setLocationOfLocationBox = (value) => {
        setLocation(value);
    }

    const setDescriptionOfIncidentComponent = (value) => {
        setDescriptionOfIncident(value);
    }

    const setActionsTakenComponent = (value) => {
        setActionsTaken(value);
    }

    const setPatientNameComponent = (value) => {
        setPatientName(value);
    }

    const setPatientSSNComponent = (value) => {
        setPatientSSN(value);
    }

    const setPatientPhoneComponent = (value) => {
        setPatientPhone(value);
    }

    const setAddressComponent = (value) => {
        setAddress(value);
    }

    const setEventTypeComponent = (value) => {
        setEventType(value);
    }

    const setHarmEventComponent = (value) => {
        setHarmEvent(value);
    }

    const setIndividualsInvolvedComponent = (event) =>{
        setIndividualsInvolved({
            ...individualsInvolved,
            [event.target.name]: event.target.checked,
        });
    }

    let increment = (newCount) => {
        setCount(count + newCount)
        console.log(count);
    }


    useEffect(() => {
        if (count > 16) {
            setIsDisabled(false)
        }
    }, [count]);

    const handleClick = () => {
        setIsReportSubmitted(true);
        setIsDisabled(true)
    }


    return (
        <>
            <Grid container spacing={1}>
                <DateOfEvent dateOfEvent={dateOfEvent} setDateOfEvent={setComponentDateOfEvent}/>
                <TimeOfEvent timeOfEvent={timeOfEvent} setTimeOfEvent={setComponentTimeOfEvent}/>
            </Grid>
            <LocationBox increment={increment} location={location} setLocation={setLocationOfLocationBox}/>
            <br/>
            <Grid container spacing={1}>
                <EventTypeBox eventType={eventType} setEventType={setEventTypeComponent}/>
                <HarmEventBox harmEvent={harmEvent} setHarmEvent={setHarmEventComponent}/>
            </Grid>
            <IndividualsInvolvedFormGroup increment={increment} individualsInvolved={individualsInvolved} setIndividualsInvolved={setIndividualsInvolvedComponent}/>
            <TypeOfEventBox increment={increment}/>
            <br/>
            <EffectOfIncidentBox increment={increment}/>
            <br/>
            <Witness increment={increment}/>
            <DepartmentsInvolvedBox increment={increment}/>
            <DescriptionOfIncidentBox increment={increment} descriptionOfIncident={descriptionOfIncident}
                                      setDescriptionOfIncident={setDescriptionOfIncidentComponent}/>
            <ActionsTakenBox increment={increment} actionsTaken={actionsTaken}
                             setActionsTaken={setActionsTakenComponent}/>
            <PatientNameBox increment={increment} patientName={patientName} setPatientName={setPatientNameComponent}/>
            <Grid container spacing={1}>
                <PatientSSNBox increment={increment} patientSSN={patientSSN} setPatientSSN={setPatientSSNComponent}/>
                <PatientPhoneBox increment={increment} patientPhone={patientPhone}
                                 setPatientPhone={setPatientPhoneComponent}/>
            </Grid>
            <AddressBox increment={increment} address={address} setAddress={setAddressComponent}/>
            <Grid container spacing={1}>
                <Grid item xs={7}/>
                <Grid item xs={5}>
                    {isDisabled ?
                        <Button
                            style={styleDisabledButton}
                            value={isReportSubmitted}
                            variant="contained"
                            disabled={true}
                            onClick={handleClick}
                        >
                            Submit
                        </Button> :
                        <Button
                            style={styleEnabledButton}
                            variant="contained"
                            value={isReportSubmitted}
                            disabled={false}
                            onClick={handleClick}
                        >
                            Submit
                        </Button>
                    }

                </Grid>
            </Grid>
        </>
    );

}
export default Fields;