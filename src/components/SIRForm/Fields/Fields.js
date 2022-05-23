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
                <EventTypeBox />
                <HarmEventBox/>
            </Grid>
            <IndividualsInvolvedFormGroup/>
            <TypeOfEventBox/>
            <br/>
            <EffectOfIncidentBox/>
            <br/>
            <Witness/>

        </>
    );

}
export default Fields;