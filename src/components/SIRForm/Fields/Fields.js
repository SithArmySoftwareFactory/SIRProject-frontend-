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
import {styleDisabledButton} from "../../../themes/themes";

const Fields = () => {
    return (
        <>
            <Grid container spacing={1}>
                <DateOfEvent/>
                <TimeOfEvent/>
            </Grid>
            <LocationBox/>
            <br/>
            <Grid container spacing={1}>
                <EventTypeBox/>
                <HarmEventBox/>
            </Grid>
            <IndividualsInvolvedFormGroup/>
            <TypeOfEventBox/>
            <br/>
            <EffectOfIncidentBox/>
            <br/>
            <Witness/>
            <DepartmentsInvolvedBox/>
            <DescriptionOfIncidentBox/>
            <ActionsTakenBox/>
            <PatientNameBox/>
            <Grid container spacing={1}>
                <PatientSSNBox/>
                <PatientPhoneBox/>
            </Grid>
            <AddressBox/>
            <Grid container spacing={1}>
                <Grid item xs={7}/>
                <Grid item xs={5}>
                    <Button
                        style={styleDisabledButton}
                        variant="contained"
                        disabled
                    >
                        Submit
                    </Button>
                </Grid>
            </Grid>
        </>
    );

}
export default Fields;