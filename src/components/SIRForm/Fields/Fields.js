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
import {useJsApiLoader} from "@react-google-maps/api";
import {getGeocode, getLatLng,} from "use-places-autocomplete";
import CommandField from "./CommandField";


const Fields = ({handleClick, open, defaultValues, handlePatchChange = function () {}, setSingleReportViewFunction}) => {
    const {isLoaded} = useJsApiLoader({
        id: "google-map-script",
        googleMapsApiKey: "AIzaSyAvmc8J1ekNy512EDD3lAyfEFmQZUP_U7g",
    });

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
            patientAddress: defaultValues.patientAddress || "",
            sentiment: defaultValues.sentiment || ""
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
            apiPostIncident(dataToBeSent)
                .then((response) =>{
                    console.log(response.data)
                    setSingleReportViewFunction(response)
                })
                .catch((error) => {
                if( error.response ){
                    console.log(error.response.data); // => the response payload
                }
            });
            setFormValues(defaultValues2);
        }).catch((error) => {
            //even if there is an error with getting the LatLng we still want to store the information in the database
            apiPostIncident(dataToBeSent)
                .then((response) =>{
                    console.log(response.data)
                    setSingleReportViewFunction(response)
                })
                .catch((error) => {
                    if( error.response ){
                        console.log(error.response.data); // => the response payload
                    }
                });
            setFormValues(defaultValues2);
        });
        handleClick();

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


        //sent data to Dialog for patching
        handlePatchChange(formValues);

    }, [formValues]);


    return (
        <Box>
    <Grid container
          spacing={2}
           columns={1}
          sx={{
              minHeight: '600px',
              justifyContent: 'center',
              margin: 'auto',
              width: '100%',
              padding:'0',
              display:'flex',
              flexDirection: "column"
          }}>
            <form onSubmit={handleSubmit}>
                <Grid item xs={1} md xl style={{ padding:'0',  flexGrow: 1}}>
                 <table style={{width:'100%'}}>
                     <tbody>
                     <tr>
                         <td>
                             <div style={{marginRight:'1em'}}><DateOfEvent formValues={formValues} handleInputChange={handleTimeChange}/></div>
                         </td>
                         <td>
                             <div><TimeOfEvent formValues={formValues} handleInputChange={handleTimeChange}/></div>
                         </td>
                     </tr>
                     </tbody>
                 </table>
                </Grid>
                 <Grid item xs md xl style={{marginBottom:'1em'}}>
                    <LocationBox formValues={formValues} handleInputChange={handleInputChange}/>
                </Grid>
              <Grid item xs md xl style={{marginBottom:'1em'}}>
                    <EventTypeBox formValues={formValues} handleInputChange={handleInputChange}/>
             </Grid>
                  <Grid item xs md xl style={{marginBottom:'1em'}}>
                    <HarmEventBox formValues={formValues} handleInputChange={handleInputChange}/>
                </Grid>
                 <Grid item xs md xl>
                <IndividualsInvolvedFormGroup formValues={formValues} handleClickChange={handleClickChange}
                                              handleChildrenClickChange={handleClickChildrenChange}/>
                </Grid>
                     <Grid item xs md xl style={{marginBottom:'1em'}}>
                <TypeOfEventBox formValues={formValues} handleInputChange={handleAutoCompleteTypeOfEvent}/>
                </Grid>
                 <Grid item xs md xl style={{marginBottom:'1em'}}>
                <EffectOfIncidentBox formValues={formValues} handleInputChange={handleInputChange}/>
                </Grid>
                <br/>
                 <Grid item xs md xl style={{marginBottom:'auto'}}>
                <Witness formValues={formValues} handleInputChange={handleInputChange}/>
                </Grid>
                 <Grid item xs md xl style={{marginBottom:'1em'}}>
                <DepartmentsInvolvedBox formValue={formValues}
                                        handleInputChange={handleAutoCompleteDepartmentsInvolved}/>
                </Grid>
                <DescriptionOfIncidentBox formValues={formValues} handleInputChange={handleInputChange}/>
                 <Grid item xs md xl style={{marginBottom:'1em'}}>
                <ActionsTakenBox formValues={formValues} handleInputChange={handleInputChange}/>
                </Grid>
                 <Grid item xs md xl style={{marginBottom:'1em'}}>
                <PatientNameBox formValues={formValues} handleInputChange={handleInputChange}/>
                </Grid>
              <Grid item xs md xl style={{marginBottom:'1em'}}>
                    <PatientSSNBox formValues={formValues} handleInputChange={handleInputChange}/>
                    <PatientPhoneBox formValues={formValues} handleInputChange={handleInputChange}/>
                </Grid>
                 <Grid item xs md xl style={{marginBottom:'1em'}}>
                <AddressBox formValues={formValues} handleInputChange={handleInputChange}/>
                </Grid>
                 <Grid item xs md xl style={{marginBottom:'1em'}}>
                {formValues.command && <CommandBox formValues={formValues}/>}
                {defaultValues && <CommandField />}
                </Grid>
             <Grid item xs md xl
                   style={{marginTop:'2em', display:'flex-end', justifyContent:'right', width:'100%'}}>
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
            </form>
    </Grid>
            <br /> <br /> <br />
        </Box>

    );

}
export default Fields;