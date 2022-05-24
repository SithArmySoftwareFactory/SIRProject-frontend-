import {Grid} from "@mui/material";
import DateOfEvent from "./DateOfEvent";
import TimeOfEvent from "./TimeOfEvent";
import LocationBox from "./LocationBox";
import EventTypeBox from "./EventTypeBox";
import * as React from "react";
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
import {useState, useEffect} from "react";



const Fields = () => {
    const [isDisabled, setIsDisabled] = useState(true)
    const [isReportSubmitted, setIsReportSubmitted] = useState(false)

    const submitState = [
        {dateEvent: false},
        {timeEvent: false},
        {location: false},
        {eventType: false},
        {harmEvent: false},
        {individualsInvolved: false},
        {typeEvent: false},
        {effect: false},
        {witness: false},
        {departmentsInvolved: false},
        {description: false},
        {actions: false},
        {patientName: false},
        {patientSSN: false},
        {patientPhone: false},
        {patientAddress: false}
    ]

    useEffect(() => {
       if(submitState[0] === {dateEvent: true}) {
           setIsDisabled(false)
       }
    }, []);

    const handleClick = () => {
        setIsReportSubmitted(true);
        setIsDisabled(true)
        submitState[0] = {dateEvent: false}
    }


    return (
        <>
            <Grid container spacing={1}>
                <DateOfEvent submitState={submitState}/>
                <TimeOfEvent submitState={submitState}/>
            </Grid>
            <LocationBox submitState={submitState}/>
            <br/>
            <Grid container spacing={1}>
                <EventTypeBox submitState={submitState}/>
                <HarmEventBox submitState={submitState}/>
            </Grid>
            <IndividualsInvolvedFormGroup submitState={submitState}/>
            <TypeOfEventBox submitState={submitState}/>
            <br/>
            <EffectOfIncidentBox submitState={submitState}/>
            <br/>
            <Witness submitState={submitState}/>
            <DepartmentsInvolvedBox submitState={submitState}/>
            <DescriptionOfIncidentBox submitState={submitState}/>
            <ActionsTakenBox submitState={submitState}/>
            <PatientNameBox submitState={submitState}/>
            <Grid container spacing={1}>
                <PatientSSNBox submitState={submitState}/>
                <PatientPhoneBox submitState={submitState}/>
            </Grid>
            <AddressBox submitState={submitState}/>
            <Grid container spacing={1}>
                <Grid item xs={7}/>
                <Grid item xs={5}>
                    {isDisabled ?
                        <Button
                            style={styleDisabledButton}
                            value={isReportSubmitted}
                            variant="contained"
                            disabled={isDisabled}
                            onClick={handleClick}
                        >
                            Submit
                        </Button> :
                        <Button
                            style={styleEnabledButton}
                            variant="contained"
                            value={isReportSubmitted}
                            disabled={isDisabled}
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