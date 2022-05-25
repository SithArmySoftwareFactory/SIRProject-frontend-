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
    const [count, setCount] = useState(0)


    let increment= (newCount)=>{
        setCount(count +newCount)
    }

    useEffect(() => {
        console.log("use "+ count)
        if (count > 16){
            console.log("use "+ count)
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
                <DateOfEvent increment={increment} />
                <TimeOfEvent increment={increment}/>
            </Grid>
            <LocationBox increment={increment}/>
            <br/>
            <Grid container spacing={1}>
                <EventTypeBox increment={increment}/>
                <HarmEventBox increment={increment}/>
            </Grid>
            <IndividualsInvolvedFormGroup increment={increment}/>
            <TypeOfEventBox increment={increment}/>
            <br/>
            <EffectOfIncidentBox increment={increment}/>
            <br/>
            <Witness increment={increment}/>
            <DepartmentsInvolvedBox increment={increment}/>
            <DescriptionOfIncidentBox increment={increment}/>
            <ActionsTakenBox increment={increment}/>
            <PatientNameBox increment={increment}/>
            <Grid container spacing={1}>
                <PatientSSNBox increment={increment}/>
                <PatientPhoneBox increment={increment} />
            </Grid>
            <AddressBox increment={increment}/>
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