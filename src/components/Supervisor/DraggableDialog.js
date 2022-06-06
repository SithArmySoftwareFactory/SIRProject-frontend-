import * as React from 'react';
import Box from "@mui/material/Box";


export default function DraggableDialog({handleClickOpen}) {
    // const [values, setValues] = React.useState([]);


    // const handleSave = async (formikValues) => {
    //     setValues(formikValues); //set values to state, perhaps use later?
    // }
    //
    //
    // const handlePatch = () => {
    //     //call API
    //     axios.patch(API_URL + "incident/" + rowViewed.id, transformData(values))
    //
    // }


    // function transformData(
    //     {
    //         date,
    //         time,
    //         location,
    //         incidentType,
    //         harm,
    //         adult,
    //         child,
    //         department,
    //         description,
    //         effects,
    //         eventType,
    //         familymember,
    //         other,
    //         patient,
    //         patientAddress,
    //         patientName,
    //         patientPhone,
    //         patientSSN,
    //         prevention,
    //         staffmember,
    //         visitor,
    //         volunteer,
    //         witness1Name,
    //         witness1Phone,
    //         witness2Name,
    //         witness2Phone,
    //         witness3Name,
    //         witness3Phone
    //     }) {
    //
    //     let individualArray = [familymember, adult, child, other, patient, staffmember, visitor, volunteer]
    //
    //     let filtered = individualArray.filter(x => x !== undefined);
    //
    //     for (let i = 0; i < filtered.length; i++) {
    //         if (filtered[i] === 'undefined') {
    //             filtered.splice(i, 1);
    //         }
    //     }
    //
    //     let individuals = filtered.join(",");
    //
    //     return {
    //         date: date,
    //         time: time,
    //         location: location,
    //         incidentType: incidentType,
    //         harm: harm,
    //         individuals: individuals,
    //         eventType: eventType,
    //         effects: effects,
    //         patientSSN,
    //         patientPhone,
    //         patientAddress,
    //         patientName,
    //         witness1Name,
    //         witness1Phone,
    //         witness2Name,
    //         witness2Phone,
    //         witness3Name,
    //         witness3Phone,
    //         department,
    //         description,
    //         prevention,
    //     };
    // }

    return (
        <Box>
            <a className="viewLink" onClick={handleClickOpen}>
                VIEW
            </a>
        </Box>
    );
}
