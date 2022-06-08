import { Grid} from "@mui/material";
import './pdfmagic.css'
import {useCallback, useRef, useState} from "react";

//converted PDF to HTML
//converted HTML to JSX
//Modified Tables and classes to approximate
//PDF Document


const SIRPDFMagic = ({defaultValues}) => {

    let defaultValues2 = {
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
    if (defaultValues != null) {
        defaultValues2 = {
            date: defaultValues.date ? new Date(defaultValues.date.split("-")[0], defaultValues.date.split("-")[1] - 1, defaultValues.date.split("-")[2]):new Date(),
            time: defaultValues.time ? new Date(2022, 1, 1, defaultValues.time.split(":")[0], defaultValues.time.split(":")[1]):new Date(),
            location: defaultValues.location,
            eventType: defaultValues.eventType ? defaultValues.eventType.split(","): [],
            //boolean on backend
            harm: (defaultValues.harm) ? "Yes" : "no" || "Yes",
            //string on backend delineated by commas
            individuals: {
                patient: defaultValues.individuals? defaultValues.individuals.includes("Patient"):false,
                familyMember: defaultValues.individuals?defaultValues.individuals.includes("Family Member"):false,
                adult: defaultValues.individuals?defaultValues.individuals.includes("Adult"):false,
                child: defaultValues.individuals?defaultValues.individuals.includes("Child"):false,
                staffMember: defaultValues.individuals?defaultValues.individuals.includes("Staff Member"):false,
                visitor: defaultValues.individuals?defaultValues.individuals.includes("Visitor"):false,
                volunteer: defaultValues.individuals?defaultValues.individuals.includes("Volunteer"):false,
                other: defaultValues.individuals?defaultValues.individuals.includes("Other"):false
            },
            //string on backend delineated by commas
            incidentType: (defaultValues.incidentType != null) ? defaultValues.incidentType.trim().split(",") || [] : [],
            //boolean
            effects: defaultValues.effects ? "Harm sustained" : "No harm sustained",
            witness1Name: defaultValues.witness1Name || '',
            witness1Phone: defaultValues.witness1Phone || '',
            witness2Name: defaultValues.witness2Name || '',
            witness2Phone: defaultValues.witness2Phone || '',
            witness3Name: defaultValues.witness3Name || '',
            witness3Phone: defaultValues.witness3Phone || '',
            //string on backend delineated by commas
            department: (defaultValues.department != null) ? defaultValues.department.trim().split(",") || [] : [],
            description: defaultValues.description || "",
            prevention: defaultValues.prevention || "",
            patientName: defaultValues.patientName || "",
            patientSSN: defaultValues.patientSSN || "",
            patientPhone: defaultValues.patientPhone || "",
            patientAddress: defaultValues.patientAddress || "",
            sentiment: defaultValues.sentiment || ""
        }



    }
    const [formValues, setFormValues] = useState(defaultValues2);

const getCheckedImageFunctionSrc = (value) => {
    //seed Random checkboxes
    //Used Math.random(100) in the code for src... I wanted a number between 1 and 100
    //TODO -- add real logic to have the checkboxes fill in correct data
    if(Number(value)) {
        //this solves the issue without having to go in the code and replace each math.random()...
       let min = Math.ceil(0);
        let max = Math.floor(100);
       value =  Math.floor(Math.random() * (max - min + 1)) + min;
        if(value > 90) {
            return 'incident_report_files/img-checked.png'
        } else {
            return 'incident_report_files/img-notchecked.png'
        }
    }

       if(value) {
           return 'incident_report_files/img-checked.png'
       }
        else {
            return 'incident_report_files/img-notchecked.png'
       }
    }

    return (<>
            <div>
            <Grid container spacing={0} columns={12} justifyContent="center">
            <Grid item xs={2}><br /></Grid>
            <Grid item xs={8}>
            <div className="pageContent">
            <table
                className="incidentTable"
                style={{ borderCollapse: "collapse", marginLeft: "7.025pt" }}
                cellSpacing={0}
            >
                <tbody>
                <tr style={{ height: "20pt" }}>
                    <td
                        style={{
                            width: "240pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "2pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "2pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "2pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "2pt"
                        }}
                        colSpan={12}
                    >
                        <p
                            className="s1"
                            style={{
                                paddingLeft: "147pt",
                                paddingRight: "145pt",
                                textIndent: "0pt",
                                lineHeight: "11pt",
                                textAlign: "center"
                            }}
                        >
                            INCIDENT REPORT
                        </p>
                        <p
                            className="s2"
                            style={{
                                paddingLeft: "151pt",
                                paddingRight: "145pt",
                                textIndent: "0pt",
                                lineHeight: "8pt",
                                textAlign: "center"
                            }}
                        >
                            For use of this form, see AR 40-68; the proponent agency is OTSG.
                        </p>
                    </td>
                </tr>
                <tr style={{ height: "50pt" }}>
                    <td
                        style={{
                            width: "540pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "2pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "2pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "2pt"
                        }}
                        colSpan={8}
                    >
                        <p
                            className="s3"
                            style={{
                                paddingLeft: "134pt",
                                textIndent: "0pt",
                                lineHeight: "9pt",
                                textAlign: "left"
                            }}
                        >
                            Privacy Act of 1974, 5 USC 552a governs access to this document.
                        </p>
                        <p
                            className="s2"
                            style={{ paddingLeft: "3pt", textIndent: "0pt", textAlign: "left" }}
                        >
                            Quality Management Document under 10 USC 1102. Copies of this
                            document, enclosures thereto, and information therefrom will not be
                            further released under penalty of the law. Unauthorized disclosure
                            carries a statutory penalty of up to $3,000 in the case of a first
                            offense and up to $20,000 in the case of a subsequent offense. In
                            addition to these statutory penalties, unauthorized disclosure may
                            lead to adverse actions under the UCMJ and/or adverse administrative
                            action, including separation from military or civilian service.
                        </p>
                    </td>
                </tr>
                <tr style={{ height: "14pt" }}>
                    <td
                        style={{
                            width: "540pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "2pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "2pt"
                        }}
                        colSpan={8}
                    >
                        <p
                            className="s2"
                            style={{
                                paddingTop: "1pt",
                                paddingLeft: "3pt",
                                textIndent: "0pt",
                                textAlign: "left"
                            }}
                        >
                            Instructions: See page 2 for instructions in completing this form
                            and definitions of terms marked with an asterisk (*).
                        </p>
                    </td>
                </tr>
                <tr style={{ height: "25pt" }}>
                    <td
                        style={{
                            width: "169pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "2pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt"
                        }}
                        colSpan={4}
                    >
                        <p
                            className="s2"
                            style={{ paddingLeft: "3pt", textIndent: "0pt", textAlign: "left" }}
                        >
                            1. DATE OF EVENT <span className="s4">(YYYYMMDD)</span>
                            <br />
                            {JSON.stringify(formValues.date)}
                        </p>

                    </td>
                    <td
                        style={{
                            width: "162pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt"
                        }}
                        colSpan={2}
                    >
                        <p
                            className="s5"
                            style={{ paddingLeft: "3pt", textIndent: "0pt", textAlign: "left" }}
                        >
                            2. TIME OF EVENT <span className="s6">(Military time.)</span>
                            <br />
                            {JSON.stringify(formValues.time)}
                        </p>
                    </td>
                    <td
                        style={{
                            width: "209pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "2pt"
                        }}
                        colSpan={4}
                    >
                        <p
                            className="s2"
                            style={{ paddingLeft: "2pt", textIndent: "0pt", textAlign: "left" }}
                        >
                            3. LOCATION OF EVENT
                            <br />
                            {formValues.location}
                        </p>

                    </td>
                </tr>
                <tr style={{ height: "14pt" }}>
                    <td
                        style={{
                            width: "295pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "2pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt"
                        }}
                        colSpan={5}
                    >
                        <p
                            className="s2"
                            style={{
                                paddingTop: "2pt",
                                paddingLeft: "3pt",
                                textIndent: "0pt",
                                textAlign: "left"
                            }}
                        >
                            4. This incident was a/an: <span className="s4">(Check one) </span>
                            <span>
              <img
                  width={13}
                  height={13}
                  alt="image"
                  src={getCheckedImageFunctionSrc(formValues.eventType)}
              />
            </span>
                            <span className="s7"> </span>Actual Event/Incident*
                        </p>
                    </td>
                    <td
                        colSpan={2}
                        style={{
                            width: "68pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt"
                        }}
                    >

                        <p style={{ textIndent: "0pt", textAlign: "left" }}>
                                        <span>
              <img
                  width={13}
                  height={13}
                  alt="image"
                  src={getCheckedImageFunctionSrc(!formValues.eventType)}
              />
            </span>
                            <span className="s2">Near Miss/CloseCall*</span>
                            <br />
                        </p>
                    </td>
                    <td
                        style={{
                            width: "47pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "2pt"
                        }}
                    >
                        <p style={{ textIndent: "0pt", textAlign: "left" }}>
                            <br />
                        </p>
                    </td>
                </tr>
                </tbody>
            </table>
                <table className="incidentInvolvedHarmTable">
                    <tbody>
                <tr style={{ height: "14pt" }}>
                    <td
                        style={{
                            width: "595pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "2pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt"
                        }}
                        colSpan={2}
                    >
                        <p
                            className="s2"
                            style={{
                                paddingTop: "2pt",
                                paddingLeft: "3pt",
                                textIndent: "0pt",
                                textAlign: "left"
                            }}
                        >
                            5. This incident involved harm or the potential for harm to a
                            patient.
                            <span>
              <img
                  width={13}
                  height={13}
                  alt="image"
                  src={getCheckedImageFunctionSrc(formValues.harm)}
              />
            </span>
                            <span className="s9">Yes</span>   <span className="s2">
                            <span>
              <img
                  width={13}
                  height={13}
                  alt="image"
                  src={getCheckedImageFunctionSrc(!formValues.harm)}
              />
            </span>No</span>
                        </p>
                    </td>
                    <td
                        style={{
                            width: "130pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt"
                        }}
                        colSpan={4}
                    >
                        <p
                            className="s8"
                            style={{
                                paddingTop: "2pt",
                                paddingLeft: "11pt",
                                textIndent: "0pt",
                                textAlign: "left"
                            }}
                        >
                        </p>
                    </td>
                    <td
                        style={{
                            width: "68pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt"
                        }}
                    >
                        <p style={{ textIndent: "0pt", textAlign: "left" }}>
                            <br />
                        </p>
                    </td>
                    <td
                        style={{
                            width: "47pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "2pt"
                        }}
                    >
                        <p style={{ textIndent: "0pt", textAlign: "left" }}>
                            <br />
                        </p>
                    </td>
                </tr>
                <tr style={{ height: "25pt" }}>
                    <td
                        style={{
                            width: "295pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "2pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt"
                        }}
                        colSpan={4}
                    >
                        <p
                            className="s2"
                            style={{
                                paddingTop: "2pt",
                                paddingLeft: "3pt",
                                textIndent: "0pt",
                                textAlign: "left"
                            }}
                        >
                            6. This incident involved the following individuals:
                            <span className="s4">(Check all that apply)</span>
                        </p>
                        <p
                            className="s2"
                            style={{
                                paddingLeft: "17pt",
                                textIndent: "0pt",
                                textAlign: "left"
                            }}
                        >
            <span>
              <img
                  width={13}
                  height={13}
                  alt="image"
                  src={getCheckedImageFunctionSrc(formValues.patient)}
              />
            </span>
                            <span className="s8"> </span>Patient
                            <span>
              <img
                  width={13}
                  height={13}
                  alt="image"
                  src={getCheckedImageFunctionSrc(formValues.familymember)}
              />
            </span>
                            <span className="s9"> </span>Family Member (
                            <span>
              <img
                  width={13}
                  height={13}
                  alt="image"
                  src={getCheckedImageFunctionSrc(formValues.adult)}
              />
            </span>
                            <span className="s9"> </span>Adult
                            <span>
              <img
                  width={13}
                  height={13}
                  alt="image"
                  src={getCheckedImageFunctionSrc(formValues.child)}
              />
            </span>
                            <span className="s9"> </span>
                            <span className="s10">Child &lt; 18 years old </span>
                            <span className="s11">)</span>
                        </p>
                    </td>
                    <td
                        style={{
                            width: "130pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt"
                        }}
                        colSpan={2}
                    >
                        <p style={{ textIndent: "0pt", textAlign: "left" }}>
                            <br />
                        </p>
                        <p
                            className="s2"
                            style={{
                                paddingLeft: "11pt",
                                textIndent: "0pt",
                                textAlign: "left"
                            }}
                        >
                            <span>
<img
    width={13}
    height={13}
    alt="image"
    src={getCheckedImageFunctionSrc(formValues.visitor)}
/>
                            Staff Member
            </span>
                            <span className="s9">              <img
                                width={13}
                                height={13}
                                alt="image"
                                src={getCheckedImageFunctionSrc(formValues.visitor)}
                            />Visitor </span>
                        </p>
                    </td>
                    <td
                        style={{
                            width: "68pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt"
                        }}
                    >
                        <p style={{ textIndent: "0pt", textAlign: "left" }}>
                            <br />
                        </p>
                        <p
                            className="s8"
                            style={{ paddingLeft: "4pt", textIndent: "0pt", textAlign: "left" }}
                        >
            <span>
              <img
                  width={13}
                  height={13}
                  alt="image"
                  src={getCheckedImageFunctionSrc(formValues.volunteer)}
              />
            </span>
                            <span className="s2">Volunteer</span>
                        </p>
                    </td>
                    <td
                        style={{
                            width: "47pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "2pt"
                        }}
                    >
                        <p style={{ textIndent: "0pt", textAlign: "left" }}>
                            <br />
                        </p>
                        <p
                            className="s8"
                            style={{ paddingLeft: "1pt", textIndent: "0pt", textAlign: "left" }}
                        >
            <span>
              <img
                  width={13}
                  height={13}
                  alt="image"
                  src={getCheckedImageFunctionSrc(formValues.other)}
              />
            </span>
                            <span className="s2">Other</span>
                        </p>
                    </td>
                </tr>

                <tr style={{ height: "14pt" }}>
                    <td
                        style={{
                            width: "540pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "2pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "2pt"
                        }}
                        colSpan={8}
                    >
                        <p
                            className="s2"
                            style={{
                                paddingTop: "2pt",
                                paddingLeft: "3pt",
                                textIndent: "0pt",
                                textAlign: "left"
                            }}
                        >
                            7. Type of Event.
                            <span className="s4">
              (Check all that apply) NOTE: Items marked with ** require
              additional action; see reverse for further detail.
            </span>
                        </p>
                    </td>
                </tr>
                </tbody>
            </table>
                <table className="typeOfEventOptions">
                    <tbody>
                <tr style={{ height: "14pt" }}>
                    <td
                        style={{
                            width: "18pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "2pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt"
                        }}
                    >
                        <p style={{ textIndent: "0pt", textAlign: "left", paddingLeft:'2px',paddingTop:'2px' }}>
                            <img
                                width={13}
                                height={13}
                                alt="image"
                                src={getCheckedImageFunctionSrc(Math.random(100))}
                            />
                            </p>
                    </td>
                    <td
                        style={{
                            width: "162pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt"
                        }}
                    >
                        <p
                            className="s2"
                            style={{
                                paddingTop: "3pt",
                                paddingLeft: "3pt",
                                textIndent: "0pt",
                                lineHeight: "9pt",
                                textAlign: "left"
                            }}
                        >
                            Adverse Drug Reaction**
                        </p>
                    </td>
                    <td
                        style={{
                            maxWidth: "18pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt"
                        }}
                    >
                        <p style={{ textIndent: "0pt", textAlign: "left", paddingLeft:'2px',paddingTop:'2px' }}>
                            <img
                                width={13}
                                height={13}
                                alt="image"
                                src={getCheckedImageFunctionSrc(Math.random(100))}
                            />
                        </p>
                    </td>

                    <td
                        style={{
                            width: "262pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt"
                        }}
                    >
                        <p
                            className="s2"
                            style={{
                                paddingTop: "3pt",
                                paddingLeft: "3pt",
                                textIndent: "0pt",
                                textAlign: "left"
                            }}
                        >
                            Fall
                        </p>
                    </td>
                    <td

                        style={{
                            width: "10pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt"
                        }}
                    >
                        <p style={{ textIndent: "0pt", textAlign: "left" }}>
                            <p style={{ textIndent: "0pt", textAlign: "left", paddingLeft:'2px',paddingTop:'2px' }}>
                                <img
                                    width={13}
                                    height={13}
                                    alt="image"
                                    src={getCheckedImageFunctionSrc(Math.random(100))}
                                />
                            </p>
                        </p>
                    </td>
                    <td

                        style={{
                            width: "162pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "2pt"
                        }}
                    >
                        <p
                            className="s2"
                            style={{
                                paddingTop: "3pt",
                                paddingLeft: "2pt",
                                textIndent: "0pt",
                                textAlign: "left"
                            }}
                        >
                            Property Damaged/Destroyed
                        </p>
                    </td>
                </tr>
                <tr style={{ height: "14pt" }}>
                    <td
                        style={{
                            width: "18pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "2pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt"
                        }}
                    >
                        <p style={{ textIndent: "0pt", textAlign: "left", paddingLeft:'2px',paddingTop:'2px' }}>
                            <img
                                width={13}
                                height={13}
                                alt="image"
                                src={getCheckedImageFunctionSrc(Math.random(100))}
                            />
                        </p>
                    </td>
                    <td
                        style={{
                            width: "162pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt"
                        }}

                    >
                        <p
                            className="s2"
                            style={{
                                paddingTop: "3pt",
                                paddingLeft: "3pt",
                                textIndent: "0pt",
                                textAlign: "left"
                            }}
                        >
                            AMA/Left Without Being Seen**
                        </p>
                    </td>
                    <td
                        style={{
                            width: "18pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt"
                        }}
                    >
                        <p style={{ textIndent: "0pt", textAlign: "left", paddingLeft:'2px',paddingTop:'2px' }}>
                            <img
                                width={13}
                                height={13}
                                alt="image"
                                src={getCheckedImageFunctionSrc(Math.random(100))}
                            />
                        </p>
                    </td>
                    <td
                        style={{
                            width: "162pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt"
                        }}
                    >
                        <p
                            className="s2"
                            style={{
                                paddingTop: "3pt",
                                paddingLeft: "3pt",
                                textIndent: "0pt",
                                textAlign: "left"
                            }}
                        >
                            Infant Abduction
                        </p>
                    </td>
                    <td
                        style={{
                            width: "18pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt"
                        }}
                    >
                        <p style={{ textIndent: "0pt", textAlign: "left", paddingLeft:'2px',paddingTop:'2px' }}>
                            <img
                                width={13}
                                height={13}
                                alt="image"
                                src={getCheckedImageFunctionSrc(Math.random(100))}
                            />
                        </p>
                    </td>
                    <td

                        style={{
                            width: "162pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "2pt"
                        }}
                    >
                        <p
                            className="s2"
                            style={{
                                paddingTop: "3pt",
                                paddingLeft: "2pt",
                                textIndent: "0pt",
                                textAlign: "left"
                            }}
                        >
                            Property Lost/Stolen
                        </p>
                    </td>
                </tr>
                <tr style={{ height: "14pt" }}>
                    <td
                        style={{
                            width: "18pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "2pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt"
                        }}
                    >
                        <p style={{ textIndent: "0pt", textAlign: "left", paddingLeft:'2px',paddingTop:'2px' }}>
                            <img
                                width={13}
                                height={13}
                                alt="image"
                                src={getCheckedImageFunctionSrc(Math.random(100))}
                            />
                        </p>
                    </td>
                    <td
                        style={{
                            width: "162pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt"
                        }}

                    >
                        <p
                            className="s5"
                            style={{
                                paddingTop: "2pt",
                                paddingLeft: "3pt",
                                textIndent: "0pt",
                                textAlign: "left"
                            }}
                        >
                            Assault{" "}
                            <span className="s6">(e.g., physical, verbal, emotional)</span>
                        </p>
                    </td>
                    <td
                        style={{
                            width: "18pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt"
                        }}
                    >
                        <p style={{ textIndent: "0pt", textAlign: "left", paddingLeft:'2px',paddingTop:'2px' }}>
                            <img
                                width={13}
                                height={13}
                                alt="image"
                                src={getCheckedImageFunctionSrc(Math.random(100))}
                            />
                        </p>
                    </td>
                    <td
                        style={{
                            width: "162pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt"
                        }}
                    >
                        <p
                            className="s2"
                            style={{
                                paddingTop: "3pt",
                                paddingLeft: "3pt",
                                textIndent: "0pt",
                                textAlign: "left"
                            }}
                        >
                            Infant Discharge to Wrong Family
                        </p>
                    </td>
                    <td
                        style={{
                            width: "18pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt"
                        }}
                    >
                        <p style={{ textIndent: "0pt", textAlign: "left", paddingLeft:'2px',paddingTop:'2px' }}>
                            <img
                                width={13}
                                height={13}
                                alt="image"
                                src={getCheckedImageFunctionSrc(Math.random(100))}
                            />
                        </p>
                    </td>
                    <td

                        style={{
                            width: "162pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "2pt"
                        }}
                    >
                        <p
                            className="s2"
                            style={{
                                paddingTop: "3pt",
                                paddingLeft: "2pt",
                                textIndent: "0pt",
                                textAlign: "left"
                            }}
                        >
                            Radiology Related
                        </p>
                    </td>
                </tr>
                <tr style={{ height: "14pt" }}>
                    <td
                        style={{
                            width: "18pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "2pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt"
                        }}
                    >
                        <p style={{ textIndent: "0pt", textAlign: "left", paddingLeft:'2px',paddingTop:'2px' }}>
                            <img
                                width={13}
                                height={13}
                                alt="image"
                                src={getCheckedImageFunctionSrc(Math.random(100))}
                            />
                        </p>
                    </td>
                    <td
                        style={{
                            width: "162pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt"
                        }}

                    >
                        <p
                            className="s2"
                            style={{
                                paddingTop: "3pt",
                                paddingLeft: "3pt",
                                textIndent: "0pt",
                                textAlign: "left"
                            }}
                        >
                            Blood Products Related**
                        </p>
                    </td>
                    <td
                        style={{
                            width: "18pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt"
                        }}
                    >
                        <p style={{ textIndent: "0pt", textAlign: "left", paddingLeft:'2px',paddingTop:'2px' }}>
                            <img
                                width={13}
                                height={13}
                                alt="image"
                                src={getCheckedImageFunctionSrc(Math.random(100))}
                            />
                        </p>
                    </td>
                    <td
                        style={{
                            width: "162pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt"
                        }}
                    >
                        <p
                            className="s2"
                            style={{
                                paddingTop: "3pt",
                                paddingLeft: "3pt",
                                textIndent: "0pt",
                                textAlign: "left"
                            }}
                        >
                            Laboratory Related
                        </p>
                    </td>
                    <td
                        style={{
                            width: "18pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt"
                        }}
                    >
                        <p style={{ textIndent: "0pt", textAlign: "left", paddingLeft:'2px',paddingTop:'2px' }}>
                            <img
                                width={13}
                                height={13}
                                alt="image"
                                src={getCheckedImageFunctionSrc(Math.random(100))}
                            />
                        </p>
                    </td>
                    <td

                        style={{
                            width: "162pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "2pt"
                        }}
                    >
                        <p
                            className="s2"
                            style={{
                                paddingTop: "3pt",
                                paddingLeft: "2pt",
                                textIndent: "0pt",
                                textAlign: "left"
                            }}
                        >
                            Rape
                        </p>
                    </td>
                </tr>
                <tr style={{ height: "14pt" }}>
                    <td
                        style={{
                            width: "18pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "2pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt"
                        }}
                    >
                        <p style={{ textIndent: "0pt", textAlign: "left", paddingLeft:'2px',paddingTop:'2px' }}>
                            <img
                                width={13}
                                height={13}
                                alt="image"
                                src={getCheckedImageFunctionSrc(Math.random(100))}
                            />
                        </p>
                    </td>
                    <td
                        style={{
                            width: "162pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt"
                        }}

                    >
                        <p
                            className="s2"
                            style={{
                                paddingTop: "3pt",
                                paddingLeft: "3pt",
                                textIndent: "0pt",
                                textAlign: "left"
                            }}
                        >
                            Delay in: Diagnosis/Treatment/Transfer
                        </p>
                    </td>
                    <td
                        style={{
                            width: "18pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt"
                        }}
                    >
                        <p style={{ textIndent: "0pt", textAlign: "left", paddingLeft:'2px',paddingTop:'2px' }}>
                            <img
                                width={13}
                                height={13}
                                alt="image"
                                src={getCheckedImageFunctionSrc(Math.random(100))}
                            />
                        </p>
                    </td>
                    <td
                        style={{
                            width: "162pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt"
                        }}
                    >
                        <p
                            className="s2"
                            style={{
                                paddingTop: "3pt",
                                paddingLeft: "3pt",
                                textIndent: "0pt",
                                textAlign: "left"
                            }}
                        >
                            Medication Related
                        </p>
                    </td>
                    <td
                        style={{
                            width: "18pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt"
                        }}
                    >
                        <p style={{ textIndent: "0pt", textAlign: "left", paddingLeft:'2px',paddingTop:'2px' }}>
                            <img
                                width={13}
                                height={13}
                                alt="image"
                                src={getCheckedImageFunctionSrc(Math.random(100))}
                            />
                        </p>
                    </td>
                    <td

                        style={{
                            width: "162pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "2pt"
                        }}
                    >
                        <p
                            className="s2"
                            style={{
                                paddingTop: "3pt",
                                paddingLeft: "2pt",
                                textIndent: "0pt",
                                textAlign: "left"
                            }}
                        >
                            Restrained Patient Injury
                        </p>
                    </td>
                </tr>
                <tr style={{ height: "14pt" }}>
                    <td
                        style={{
                            width: "18pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "2pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt"
                        }}
                    >
                        <p style={{ textIndent: "0pt", textAlign: "left", paddingLeft:'2px',paddingTop:'2px' }}>
                            <img
                                width={13}
                                height={13}
                                alt="image"
                                src={getCheckedImageFunctionSrc(Math.random(100))}
                            />
                        </p>
                    </td>
                    <td
                        style={{
                            width: "162pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt"
                        }}

                    >
                        <p
                            className="s2"
                            style={{
                                paddingTop: "3pt",
                                paddingLeft: "3pt",
                                textIndent: "0pt",
                                textAlign: "left"
                            }}
                        >
                            Equipment/Supply Problem**
                        </p>
                    </td>
                    <td
                        style={{
                            width: "18pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt"
                        }}
                    >
                        <p style={{ textIndent: "0pt", textAlign: "left", paddingLeft:'2px',paddingTop:'2px' }}>
                            <img
                                width={13}
                                height={13}
                                alt="image"
                                src={getCheckedImageFunctionSrc(Math.random(100))}
                            />
                        </p>
                    </td>
                    <td
                        style={{
                            width: "162pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt"
                        }}
                    >
                        <p
                            className="s2"
                            style={{
                                paddingTop: "3pt",
                                paddingLeft: "3pt",
                                textIndent: "0pt",
                                textAlign: "left"
                            }}
                        >
                            Needle Stick/Sharp Injury
                        </p>
                    </td>
                    <td
                        style={{
                            width: "18pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt"
                        }}
                    >
                        <p style={{ textIndent: "0pt", textAlign: "left", paddingLeft:'2px',paddingTop:'2px' }}>
                            <img
                                width={13}
                                height={13}
                                alt="image"
                                src={getCheckedImageFunctionSrc(Math.random(100))}
                            />
                        </p>
                    </td>
                    <td

                        style={{
                            width: "162pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "2pt"
                        }}
                    >
                        <p
                            className="s2"
                            style={{
                                paddingTop: "3pt",
                                paddingLeft: "2pt",
                                textIndent: "0pt",
                                textAlign: "left"
                            }}
                        >
                            Suicide in a 24-hour Facility
                        </p>
                    </td>
                </tr>
                <tr style={{ height: "14pt" }}>
                    <td
                        style={{
                            width: "18pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "2pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt"
                        }}
                    >
                        <p style={{ textIndent: "0pt", textAlign: "left", paddingLeft:'2px',paddingTop:'2px' }}>
                            <img
                                width={13}
                                height={13}
                                alt="image"
                                src={getCheckedImageFunctionSrc(Math.random(100))}
                            />
                        </p>
                    </td>
                    <td
                        style={{
                            width: "162pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt"
                        }}

                    >
                        <p
                            className="s2"
                            style={{
                                paddingTop: "3pt",
                                paddingLeft: "3pt",
                                textIndent: "0pt",
                                textAlign: "left"
                            }}
                        >
                            Exposure to Blood/Body Fluids
                        </p>
                    </td>
                    <td
                        style={{
                            width: "18pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt"
                        }}
                    >
                        <p style={{ textIndent: "0pt", textAlign: "left", paddingLeft:'2px',paddingTop:'2px' }}>
                            <img
                                width={13}
                                height={13}
                                alt="image"
                                src={getCheckedImageFunctionSrc(Math.random(100))}
                            />
                        </p>
                    </td>
                    <td
                        style={{
                            width: "162pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt"
                        }}
                    >
                        <p
                            className="s2"
                            style={{
                                paddingTop: "3pt",
                                paddingLeft: "3pt",
                                textIndent: "0pt",
                                textAlign: "left"
                            }}
                        >
                            Obstetrics Related
                        </p>
                    </td>
                    <td
                        style={{
                            width: "18pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt"
                        }}
                        rowSpan={2}
                    >
                        <p style={{ textIndent: "0pt", textAlign: "left", paddingLeft:'2px',paddingTop:'2px' }}>
                            <img
                                width={13}
                                height={13}
                                alt="image"
                                src={getCheckedImageFunctionSrc(Math.random(100))}
                            />
                        </p>
                    </td>
                    <td

                        style={{
                            width: "162pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "2pt"
                        }}
                        rowSpan={2}
                    >
                        <p
                            className="s2"
                            style={{
                                paddingTop: "2pt",
                                paddingLeft: "2pt",
                                textIndent: "0pt",
                                textAlign: "left"
                            }}
                        >
                            Other <span className="s6">(Specify)</span>
                        </p>
                    </td>
                </tr>
                <tr style={{ height: "14pt" }}>
                    <td
                        style={{
                            width: "18pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "2pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt"
                        }}
                    >
                        <p style={{ textIndent: "0pt", textAlign: "left", paddingLeft:'2px',paddingTop:'2px' }}>
                            <img
                                width={13}
                                height={13}
                                alt="image"
                                src={getCheckedImageFunctionSrc(Math.random(100))}
                            />
                        </p>
                    </td>
                    <td
                        style={{
                            width: "162pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt"
                        }}

                    >
                        <p
                            className="s2"
                            style={{
                                paddingTop: "3pt",
                                paddingLeft: "3pt",
                                textIndent: "0pt",
                                textAlign: "left"
                            }}
                        >
                            Facility/Physical Plant Problem
                        </p>
                    </td>
                    <td
                        style={{
                            width: "18pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt"
                        }}
                    >
                        <p style={{ textIndent: "0pt", textAlign: "left", paddingLeft:'2px',paddingTop:'2px' }}>
                            <img
                                width={13}
                                height={13}
                                alt="image"
                                src={getCheckedImageFunctionSrc(Math.random(100))}
                            />
                        </p>
                    </td>
                    <td
                        style={{
                            width: "162pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt"
                        }}
                    >
                        <p
                            className="s2"
                            style={{
                                paddingTop: "3pt",
                                paddingLeft: "3pt",
                                textIndent: "0pt",
                                textAlign: "left"
                            }}
                        >
                            Operative/Invasive Procedure Related
                        </p>
                    </td>
                </tr>
                    </tbody>
                </table>
                <table className="effectsLowerTable">
                    <tbody>
                <tr style={{ height: "25pt" }}>
                    <td
                        style={{
                            width: "540pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "2pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "2pt"
                        }}
                        colSpan={8}
                    >
                        <p
                            className="s2"
                            style={{
                                paddingTop: "2pt",
                                paddingLeft: "3pt",
                                textIndent: "0pt",
                                textAlign: "left"
                            }}
                        >
                            8. Effect of this Incident on the Individual(s) Involved.
                            <span className="s4">(Explain in Block 11.)</span>
                        </p>
                        <p
                            className="s2"
                            style={{
                                paddingTop: "1pt",
                                paddingLeft: "26pt",
                                textIndent: "0pt",
                                textAlign: "left"
                            }}
                        >
            <span>
              <img
                  width={13}
                  height={13}
                  alt="image"
                  src={getCheckedImageFunctionSrc(!formValues.harm)}
              />
            </span>
                            <span className="s8"> </span>No harm*sustained
                            <span>
              <img
                  width={13}
                  height={13}
                  alt="image"
                  src={getCheckedImageFunctionSrc(formValues.harm)}
              />
            </span>
                            <span className="s9"> </span>Harm sustained
                        </p>
                    </td>
                </tr>
                <tr style={{ height: "14pt" }}>
                    <td
                        style={{
                            width: "540pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "2pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "2pt"
                        }}
                        colSpan={8}
                    >
                        <p
                            className="s2"
                            style={{
                                paddingTop: "3pt",
                                paddingLeft: "3pt",
                                textIndent: "0pt",
                                textAlign: "left"
                            }}
                        >
                            9. Witness(es) who may be able provide additional detail concerning
                            this incident.
                        </p>
                    </td>
                </tr>
                <tr style={{ height: "11pt" }}>
                    <td
                        style={{
                            width: "270pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "2pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt"
                        }}
                        colSpan={4}
                    >
                        <p
                            className="s2"
                            style={{
                                paddingLeft: "3pt",
                                textIndent: "0pt",
                                lineHeight: "9pt",
                                textAlign: "left"
                            }}
                        >
                            a. Name
                        </p>
                    </td>
                    <td
                        style={{
                            width: "270pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "2pt"
                        }}
                        colSpan={4}
                    >
                        <p
                            className="s2"
                            style={{
                                paddingLeft: "2pt",
                                textIndent: "0pt",
                                lineHeight: "9pt",
                                textAlign: "left"
                            }}
                        >
                            b. Telephone Number
                        </p>
                    </td>
                </tr>
                <tr style={{ height: "14pt" }}>
                    <td
                        style={{
                            width: "270pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "2pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt"
                        }}
                        colSpan={4}
                    >
                        <p style={{ textIndent: "0pt", textAlign: "left" }}>
                            {formValues.witness1Name}
                            <br />
                        </p>
                    </td>
                    <td
                        style={{
                            width: "270pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "2pt"
                        }}
                        colSpan={4}
                    >
                        <p style={{ textIndent: "0pt", textAlign: "left" }}>
                            {formValues.witness1Phone}
                            <br />
                        </p>
                    </td>
                </tr>
                <tr style={{ height: "14pt" }}>
                    <td
                        style={{
                            width: "270pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "2pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt"
                        }}
                        colSpan={4}
                    >
                        <p style={{ textIndent: "0pt", textAlign: "left" }}>
                            {formValues.witness2Name}
                        </p>
                    </td>
                    <td
                        style={{
                            width: "270pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "2pt"
                        }}
                        colSpan={4}
                    >
                        <p style={{ textIndent: "0pt", textAlign: "left" }}>
                            {formValues.witness2Phone}
                        </p>
                    </td>
                </tr>
                <tr style={{ height: "14pt" }}>
                    <td
                        style={{
                            width: "270pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "2pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt"
                        }}
                        colSpan={4}
                    >
                        <p style={{ textIndent: "0pt", textAlign: "left" }}>
                            {formValues.witness3Name}
                        </p>
                    </td>
                    <td
                        style={{
                            width: "270pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "2pt"
                        }}
                        colSpan={4}
                    >
                        <p style={{ textIndent: "0pt", textAlign: "left" }}>
                            {formValues.witness3Phone}
                        </p>
                    </td>
                </tr>
                <tr style={{ height: "14pt" }}>
                    <td
                        style={{
                            width: "540pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "2pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "2pt"
                        }}
                        colSpan={8}
                    >
                        <p
                            className="s2"
                            style={{
                                paddingTop: "2pt",
                                paddingLeft: "3pt",
                                textIndent: "0pt",
                                textAlign: "left"
                            }}
                        >
                            10. Department(s) Involved in this Incident.
                            <span className="s4">(Check all that apply)</span>
                        </p>
                    </td>
                </tr>
                <tr style={{ height: "14pt" }}>
                    <td
                        style={{
                            width: "18pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "2pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt"
                        }}
                    >
                        <p style={{ textIndent: "0pt", textAlign: "left", paddingLeft:'2px',paddingTop:'2px' }}>
                            <img
                                width={13}
                                height={13}
                                alt="image"
                                src={getCheckedImageFunctionSrc(Math.random(100))}
                            />
                        </p>
                    </td>
                    <td
                        style={{
                            width: "105pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt"
                        }}
                    >
                        <p
                            className="s2"
                            style={{
                                paddingTop: "3pt",
                                paddingLeft: "3pt",
                                textIndent: "0pt",
                                textAlign: "left"
                            }}
                        >
                            Ambulatory Care
                        </p>
                    </td>
                    <td
                        style={{
                            width: "18pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt"
                        }}
                    >
                        <p style={{ textIndent: "0pt", textAlign: "left", paddingLeft:'2px',paddingTop:'2px' }}>
                            <img
                                width={13}
                                height={13}
                                alt="image"
                                src={getCheckedImageFunctionSrc(Math.random(100))}
                            />
                        </p>
                    </td>
                    <td
                        style={{
                            width: "154pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt"
                        }}
                    >
                        <p
                            className="s2"
                            style={{
                                paddingTop: "3pt",
                                paddingLeft: "3pt",
                                textIndent: "0pt",
                                textAlign: "left"
                            }}
                        >
                            Information Management
                        </p>
                    </td>
                    <td
                        style={{
                            width: "18pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt"
                        }}
                    >
                        <p style={{ textIndent: "0pt", textAlign: "left", paddingLeft:'2px',paddingTop:'2px' }}>
                            <img
                                width={13}
                                height={13}
                                alt="image"
                                src={getCheckedImageFunctionSrc(Math.random(100))}
                            />
                        </p>
                    </td>
                    <td
                        style={{
                            width: "72pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt"
                        }}
                    >
                        <p
                            className="s2"
                            style={{
                                paddingTop: "3pt",
                                paddingLeft: "3pt",
                                textIndent: "0pt",
                                textAlign: "left"
                            }}
                        >
                            Nursing
                        </p>
                    </td>
                    <td
                        style={{
                            width: "18pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt"
                        }}
                    >
                        <p style={{ textIndent: "0pt", textAlign: "left", paddingLeft:'2px',paddingTop:'2px' }}>
                            <img
                                width={13}
                                height={13}
                                alt="image"
                                src={getCheckedImageFunctionSrc(Math.random(100))}
                            />
                        </p>
                    </td>
                    <td
                        style={{
                            width: "137pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "2pt"
                        }}
                    >
                        <p
                            className="s2"
                            style={{
                                paddingTop: "3pt",
                                paddingLeft: "2pt",
                                textIndent: "0pt",
                                textAlign: "left"
                            }}
                        >
                            Radiology
                        </p>
                    </td>
                </tr>
                <tr style={{ height: "14pt" }}>
                    <td
                        style={{
                            width: "18pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "2pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt"
                        }}
                    >
                        <p style={{ textIndent: "0pt", textAlign: "left", paddingLeft:'2px',paddingTop:'2px' }}>
                            <img
                                width={13}
                                height={13}
                                alt="image"
                                src={getCheckedImageFunctionSrc(Math.random(100))}
                            />
                        </p>
                    </td>
                    <td
                        style={{
                            width: "105pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt"
                        }}
                    >
                        <p
                            className="s2"
                            style={{
                                paddingTop: "3pt",
                                paddingLeft: "3pt",
                                textIndent: "0pt",
                                textAlign: "left"
                            }}
                        >
                            Behavioral/Mental Health
                        </p>
                    </td>
                    <td
                        style={{
                            width: "18pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt"
                        }}
                    >
                        <p style={{ textIndent: "0pt", textAlign: "left", paddingLeft:'2px',paddingTop:'2px' }}>
                            <img
                                width={13}
                                height={13}
                                alt="image"
                                src={getCheckedImageFunctionSrc(Math.random(100))}
                            />
                        </p>
                    </td>
                    <td
                        style={{
                            width: "154pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt"
                        }}
                    >
                        <p
                            className="s2"
                            style={{
                                paddingTop: "3pt",
                                paddingLeft: "3pt",
                                textIndent: "0pt",
                                textAlign: "left"
                            }}
                        >
                            Laboratory
                        </p>
                    </td>
                    <td
                        style={{
                            width: "18pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt"
                        }}
                    >
                        <p style={{ textIndent: "0pt", textAlign: "left", paddingLeft:'2px',paddingTop:'2px' }}>
                            <img
                                width={13}
                                height={13}
                                alt="image"
                                src={getCheckedImageFunctionSrc(Math.random(100))}
                            />
                        </p>
                    </td>
                    <td
                        style={{
                            width: "72pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt"
                        }}
                    >
                        <p
                            className="s2"
                            style={{
                                paddingTop: "3pt",
                                paddingLeft: "3pt",
                                textIndent: "0pt",
                                textAlign: "left"
                            }}
                        >
                            OB/GYN
                        </p>
                    </td>
                    <td
                        style={{
                            width: "18pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt"
                        }}
                    >
                        <p style={{ textIndent: "0pt", textAlign: "left", paddingLeft:'2px',paddingTop:'2px' }}>
                            <img
                                width={13}
                                height={13}
                                alt="image"
                                src={getCheckedImageFunctionSrc(Math.random(100))}
                            />
                        </p>
                    </td>
                    <td
                        style={{
                            width: "137pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "2pt"
                        }}
                    >
                        <p
                            className="s2"
                            style={{
                                paddingTop: "3pt",
                                paddingLeft: "2pt",
                                textIndent: "0pt",
                                textAlign: "left"
                            }}
                        >
                            Surgery
                        </p>
                    </td>
                </tr>
                <tr style={{ height: "14pt" }}>
                    <td
                        style={{
                            width: "18pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "2pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt"
                        }}
                    >
                        <p style={{ textIndent: "0pt", textAlign: "left", paddingLeft:'2px',paddingTop:'2px' }}>
                            <img
                                width={13}
                                height={13}
                                alt="image"
                                src={getCheckedImageFunctionSrc(Math.random(100))}
                            />
                        </p>
                    </td>
                    <td
                        style={{
                            width: "105pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt"
                        }}
                    >
                        <p
                            className="s2"
                            style={{
                                paddingTop: "3pt",
                                paddingLeft: "3pt",
                                textIndent: "0pt",
                                textAlign: "left"
                            }}
                        >
                            Dental
                        </p>
                    </td>
                    <td
                        style={{
                            width: "18pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt"
                        }}
                    >
                        <p style={{ textIndent: "0pt", textAlign: "left", paddingLeft:'2px',paddingTop:'2px' }}>
                            <img
                                width={13}
                                height={13}
                                alt="image"
                                src={getCheckedImageFunctionSrc(Math.random(100))}
                            />
                        </p>
                    </td>
                    <td
                        style={{
                            width: "154pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt"
                        }}
                    >
                        <p
                            className="s2"
                            style={{
                                paddingTop: "2pt",
                                paddingLeft: "3pt",
                                textIndent: "0pt",
                                textAlign: "left"
                            }}
                        >
                            Logistics
                            <span className="s6">(Maintenance, Grounds, Housekeeping)</span>
                        </p>
                    </td>
                    <td
                        style={{
                            width: "18pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt"
                        }}
                    >
                        <p style={{ textIndent: "0pt", textAlign: "left", paddingLeft:'2px',paddingTop:'2px' }}>
                            <img
                                width={13}
                                height={13}
                                alt="image"
                                src={getCheckedImageFunctionSrc(Math.random(100))}
                            />
                        </p>
                    </td>
                    <td
                        style={{
                            width: "72pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt"
                        }}
                    >
                        <p
                            className="s2"
                            style={{
                                paddingTop: "3pt",
                                paddingLeft: "3pt",
                                textIndent: "0pt",
                                textAlign: "left"
                            }}
                        >
                            Pediatrics
                        </p>
                    </td>
                    <td
                        style={{
                            width: "18pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt"
                        }}
                        rowSpan={2}
                    >
                        <p style={{ textIndent: "0pt", textAlign: "left", paddingLeft:'2px',paddingTop:'2px' }}>
                            <img
                                width={13}
                                height={13}
                                alt="image"
                                src={getCheckedImageFunctionSrc(Math.random(100))}
                            />
                        </p>
                    </td>
                    <td

                        style={{
                            width: "137pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "2pt"
                        }}
                        rowSpan={2}
                    >
                        <p
                            className="s2"
                            style={{
                                paddingTop: "2pt",
                                paddingLeft: "2pt",
                                textIndent: "0pt",
                                textAlign: "left"
                            }}
                        >
                            Other <span className="s6">(Specify)</span>
                        </p>
                    </td>
                </tr>
                <tr style={{ height: "14pt" }}>
                    <td
                        style={{
                            width: "18pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "2pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt"
                        }}
                    >
                        <p style={{ textIndent: "0pt", textAlign: "left", paddingLeft:'2px',paddingTop:'2px' }}>
                            <img
                                width={13}
                                height={13}
                                alt="image"
                                src={getCheckedImageFunctionSrc(Math.random(100))}
                            />
                        </p>
                    </td>
                    <td
                        style={{
                            width: "105pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt"
                        }}
                    >
                        <p
                            className="s2"
                            style={{
                                paddingTop: "3pt",
                                paddingLeft: "3pt",
                                textIndent: "0pt",
                                textAlign: "left"
                            }}
                        >
                            Emergency Care
                        </p>
                    </td>
                    <td
                        style={{
                            width: "18pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt"
                        }}
                    >
                        <p style={{ textIndent: "0pt", textAlign: "left", paddingLeft:'2px',paddingTop:'2px' }}>
                            <img
                                width={13}
                                height={13}
                                alt="image"
                                src={getCheckedImageFunctionSrc(Math.random(100))}
                            />
                        </p>
                    </td>
                    <td
                        style={{
                            width: "154pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt"
                        }}
                    >
                        <p
                            className="s2"
                            style={{
                                paddingTop: "3pt",
                                paddingLeft: "3pt",
                                textIndent: "0pt",
                                textAlign: "left"
                            }}
                        >
                            Medicine
                        </p>
                    </td>
                    <td
                        style={{
                            width: "18pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt"
                        }}
                    >
                        <p style={{ textIndent: "0pt", textAlign: "left", paddingLeft:'2px',paddingTop:'2px' }}>
                            <img
                                width={13}
                                height={13}
                                alt="image"
                                src={getCheckedImageFunctionSrc(Math.random(100))}
                            />
                        </p>
                    </td>
                    <td
                        style={{
                            width: "72pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt"
                        }}
                    >
                        <p
                            className="s2"
                            style={{
                                paddingTop: "3pt",
                                paddingLeft: "3pt",
                                textIndent: "0pt",
                                textAlign: "left"
                            }}
                        >
                            Pharmacy
                        </p>
                    </td>
                </tr>
                <tr style={{ height: "91pt" }}>
                    <td
                        style={{
                            width: "540pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "2pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "2pt"
                        }}
                        colSpan={8}
                    >
                        <p
                            className="s2"
                            style={{ paddingLeft: "3pt", textIndent: "0pt", textAlign: "left" }}
                        >
                            11. Description of Incident.
                            <span className="s6">
              (Provide concise, factual, objective details.)
            </span><br /><br />
                            {formValues.description}
                        </p>
                        <p style={{ textIndent: "0pt", textAlign: "left" }}>
                            <br />
                        </p>
                        <p
                            className="s12"
                            style={{
                                paddingLeft: "140pt",
                                paddingRight: "145pt",
                                textIndent: "0pt",
                                lineHeight: "6pt",
                                textAlign: "center",
                                height:'100%',
                                verticalAlign:"bottom"
                            }}
                        >
                            (If more space is needed, use reverse or attach an additional page.)
                        </p>
                    </td>
                </tr>
                <tr style={{ height: "39pt" }}>
                    <td
                        style={{
                            width: "540pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "2pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "2pt"
                        }}
                        colSpan={8}
                    >
                        <p
                            className="s2"
                            style={{ paddingLeft: "3pt", textIndent: "0pt", textAlign: "left" }}
                        >
                            12. What actions, if any, could have been taken to prevent this
                            incident from occurring?
                            <br />
                            {formValues.prevention}
                        </p>
                    </td>
                </tr>
                <tr style={{ height: "28pt" }}>
                    <td
                        style={{
                            width: "270pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "2pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "2pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt"
                        }}
                        colSpan={4}
                        rowSpan={3}
                    >
                        <p
                            className="s2"
                            style={{
                                paddingLeft: "16pt",
                                paddingRight: "68pt",
                                textIndent: "-13pt",
                                textAlign: "left"
                            }}
                        >
                            13. Patient ID Plate or Printed Name and SSN, Address, and Daytime
                            Telephone Number
                            <br /><br />
                            Name:{formValues.patientName}<br />
                            SSN:{formValues.patientSSN}<br />
                            Phone:{formValues.patientPhone}<br />
                            Address:{formValues.patientAddress}<br />

                        </p>
                    </td>
                    <td
                        style={{
                            width: "270pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "2pt"
                        }}
                        colSpan={4}
                    >
                        <p
                            className="s2"
                            style={{ paddingLeft: "2pt", textIndent: "0pt", textAlign: "left" }}
                        >
                            14. Name, Grade, Title of Individual Completing Form
                        </p>
                    </td>
                </tr>
                <tr style={{ height: "38pt" }}>
                    <td
                        style={{
                            width: "187pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt"
                        }}
                        colSpan={2}
                    >
                        <p
                            className="s2"
                            style={{
                                paddingLeft: "3pt",
                                textIndent: "0pt",
                                lineHeight: "9pt",
                                textAlign: "left"
                            }}
                        >
                            15.Signature
                        </p>
                    </td>
                    <td
                        colSpan={2}
                        style={{
                            width: "83pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "2pt"
                        }}
                    >
                        <p
                            className="s2"
                            style={{
                                paddingLeft: "2pt",
                                textIndent: "0pt",
                                lineHeight: "8pt",
                                textAlign: "left"
                            }}
                        >
                            16. Date of Report
                        </p>
                        <p
                            className="s13"
                            style={{
                                paddingTop: "2pt",
                                paddingLeft: "15pt",
                                textIndent: "0pt",
                                textAlign: "left"
                            }}
                        >
                            (YYYYMMDD)
                        </p>
                    </td>
                </tr>
                <tr style={{ height: "45pt" }}>
                    <td
                        style={{
                            width: "270pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "2pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "2pt"
                        }}
                        colSpan={4}
                    >
                        <p
                            className="s2"
                            style={{
                                paddingTop: "1pt",
                                paddingLeft: "69pt",
                                textIndent: "0pt",
                                textAlign: "left"
                            }}
                        >
                            FOR ADMINISTRATIVE USE ONLY.
                        </p>
                        <p
                            className="s2"
                            style={{
                                paddingTop: "4pt",
                                paddingLeft: "5pt",
                                paddingRight: "63pt",
                                textIndent: "0pt",
                                lineHeight: "143%",
                                textAlign: "left"
                            }}
                        >
                            Incident Log Number <u>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </u> SAC
                            score <u>&nbsp; </u> <br />
                            <span>

            </span>
                            <span className="s9">
                                 Is additional event analysis required? &nbsp; &nbsp;
                                <img
                                width={13}
                                height={13}
                                alt="image"
                                src={getCheckedImageFunctionSrc(formValues.harm)}
                            /> YES</span>  &nbsp; &nbsp;
                            <span className="s9"><img
                                width={13}
                                height={13}
                                alt="image"
                                src={getCheckedImageFunctionSrc(!formValues.harm)}
                            /> NO</span>
                        </p>
                    </td>
                </tr>
                </tbody>
            </table>
            <table className="page1Footer">
                <tbody>
                <tr>
                    <td>            <h1
                        style={{
                            paddingTop: "2pt",
                            paddingLeft: "10pt",
                            textIndent: "0pt",
                            lineHeight: "11pt",
                            textAlign: "left"
                        }}
                    >
                        DA FORM 4106, FEB 2004
                    </h1></td>
                    <td>            <p style={{ paddingTop: "2pt", textIndent: "0pt", textAlign: "left" }}>
                        PREVIOUS EDITIONS ARE OBSOLETE
                    </p></td>
                    <td>
                        <p style={{ paddingLeft: "14pt", textIndent: "0pt", textAlign: "right" }}>
                            Page 1 of 2
                        </p></td>
            </tr>
                </tbody>
            </table>

            <table className="bottomPage2Table">
                <tbody>
                <tr className="bottomPage2Tr">
                    <td className="bottomPageTd">

                        <ol id="l1">
                            <li data-list-text={1}>
                                <h2
                                    style={{
                                        paddingTop: "3pt",
                                        paddingLeft: "10pt",
                                        textIndent: "0pt",
                                        textAlign: "left"
                                    }}
                                >
                                    PURPOSE.
                                    <span className="p">
          To provide an effective method of documenting events which may have
          quality assurance/risk management implications involving patients,
          visitors, or others. The reported data are used to monitor, evaluate,
          and improve functional processes, the environment of care, as well as
          the quality and safety of patient care and services. Based on the
          nature of the incident, other documentation (e.g., Patient Safety,
          Risk Management, etc.)
        </span>
                                </h2>
                                <p style={{ paddingLeft: "10pt", textIndent: "0pt", textAlign: "left" }}>
                                    may be required IAW local policy.
                                </p>
                                <p style={{ textIndent: "0pt", textAlign: "left" }}>
                                    <br />
                                </p>
                            </li>
                            <li data-list-text={2}>
                                <h2
                                    style={{
                                        paddingTop: "5pt",
                                        paddingLeft: "10pt",
                                        textIndent: "0pt",
                                        lineHeight: "110%",
                                        textAlign: "left"
                                    }}
                                >
                                    RESPONSIBILITY.
                                    <span className="p">
          The staff member who discovers the event or incident will initiate
          this document. All incidents should be recorded as soon after
          discovery as possible.
        </span>
                                </h2>
                                <p style={{ textIndent: "0pt", textAlign: "left" }}>
                                    <br />
                                </p>
                            </li>
                            <li data-list-text={3}>
                                <h2
                                    style={{
                                        paddingTop: "4pt",
                                        paddingLeft: "21pt",
                                        textIndent: "-11pt",
                                        textAlign: "left"
                                    }}
                                >
                                    DIRECTIONS FOR COMPLETION OF FORM.
                                </h2>
                                <ol id="l2">
                                    <li data-list-text="a.">
                                        <p
                                            style={{
                                                paddingLeft: "10pt",
                                                textIndent: "0pt",
                                                textAlign: "left"
                                            }}
                                        >
                                            Block 1-16. Fill in all numbered blocks. If "Not Applicable" or
                                            "None", so state. If "Other" is marked for any response, please
                                            explain in the blank space provided, or in Block 11, Description of
                                            Incident.
                                        </p>
                                    </li>
                                    <li data-list-text="b.">
                                        <p
                                            style={{
                                                paddingLeft: "10pt",
                                                textIndent: "12pt",
                                                textAlign: "left"
                                            }}
                                        >
                                            Block 5. For those incidents involving harm, or the potential for
                                            harm, to a patient (inpatient or outpatient), refer to MTF Patient
                                            Safety guidance for additional documentation requirements.
                                        </p>
                                    </li>
                                    <li data-list-text="c.">
                                        <p
                                            style={{
                                                paddingLeft: "10pt",
                                                textIndent: "12pt",
                                                textAlign: "left"
                                            }}
                                        >
                                            Block 6. A patient may be involved in an incident that is
                                            <span className="s15">not </span>classified as a Patient Safety
                                            event, i.e., personal harm, or the risk of harm, was not present.
                                            Examples include: loss of valuables, a verbal altercation with
                                            another patient, etc.
                                        </p>
                                    </li>
                                    <li data-list-text="d.">
                                        <p
                                            style={{
                                                paddingTop: "1pt",
                                                paddingLeft: "31pt",
                                                textIndent: "-8pt",
                                                textAlign: "left"
                                            }}
                                        >
                                            Block 7. (1) For an adverse drug reaction, also complete FDA Form
                                            1839, Adverse Reaction Report (Drugs and Biologics).
                                        </p>
                                        <ol id="l3">
                                            <li data-list-text="(2)">
                                                <p
                                                    style={{
                                                        paddingTop: "1pt",
                                                        paddingLeft: "92pt",
                                                        textIndent: "-18pt",
                                                        lineHeight: "110%",
                                                        textAlign: "left"
                                                    }}
                                                >
                                                    For a blood products reaction, also complete the bottom portion
                                                    of SF 518, Medical Record - Blood or Blood Component Transfusion
                                                    and any other local documentation IAW MTF policy.
                                                </p>
                                            </li>
                                            <li data-list-text="(3)">
                                                <p
                                                    style={{
                                                        paddingLeft: "92pt",
                                                        textIndent: "-18pt",
                                                        lineHeight: "9pt",
                                                        textAlign: "left"
                                                    }}
                                                >
                                                    For patients who depart AMA/Left without Being Seen, also
                                                    complete DA Form 5009, Release Against Medical Advice.
                                                </p>
                                            </li>
                                            <li data-list-text="(4)">
                                                <p
                                                    style={{
                                                        paddingLeft: "92pt",
                                                        textIndent: "-18pt",
                                                        textAlign: "left"
                                                    }}
                                                >
                                                    For medical equipment related incidents, contact Logistics
                                                    Division for other required action IAW AR 40-61.
                                                </p>
                                            </li>
                                        </ol>
                                    </li>
                                    <li data-list-text="e.">
                                        <p
                                            style={{
                                                paddingLeft: "10pt",
                                                textIndent: "12pt",
                                                lineHeight: "110%",
                                                textAlign: "left"
                                            }}
                                        >
                                            Block 8. Indicate the initial effect or injury (physical or
                                            psychological) sustained by those involved in the incident being
                                            reported. Individuals who are injured as a result of an incident or
                                            adverse event should be referred immediately for medical attention.
                                        </p>
                                        <p
                                            style={{
                                                paddingLeft: "10pt",
                                                textIndent: "0pt",
                                                textAlign: "left"
                                            }}
                                        >
                                            The facility Risk Manager will be notified of any incident that
                                            results in harm to the individual(s) involved.
                                        </p>
                                    </li>
                                    <li data-list-text="f.">
                                        <p
                                            style={{
                                                paddingLeft: "28pt",
                                                textIndent: "-6pt",
                                                textAlign: "left"
                                            }}
                                        >
                                            Block 9. List any witnesses to the event that may be asked to
                                            provide additional verbal or written information.
                                        </p>
                                    </li>
                                    <li data-list-text="g.">
                                        <p
                                            style={{
                                                paddingTop: "1pt",
                                                paddingLeft: "31pt",
                                                textIndent: "-8pt",
                                                textAlign: "left"
                                            }}
                                        >
                                            Block 10. Note the departments involved with this incident to ensure
                                            that corrective action, if appropriate, can be taken.
                                        </p>
                                    </li>
                                    <li data-list-text="h.">
                                        <p
                                            style={{
                                                paddingLeft: "31pt",
                                                textIndent: "-8pt",
                                                textAlign: "left"
                                            }}
                                        >
                                            Block 11. Provide a brief but concise explanation of what occurred.
                                            Avoid speculation related to the cause of the incident.
                                        </p>
                                        <p style={{ textIndent: "0pt", textAlign: "left" }}>
                                            <br />
                                        </p>
                                    </li>
                                </ol>
                            </li>
                            <li data-list-text={4}>
                                <h2
                                    style={{
                                        paddingTop: "4pt",
                                        paddingLeft: "10pt",
                                        textIndent: "0pt",
                                        lineHeight: "107%",
                                        textAlign: "justify"
                                    }}
                                >
                                    ROUTING OF FORM.
                                    <span className="p">
          This document should be forwarded through appropriate local channels.
          At a minimum, it should be staffed within 24 hours of incident
          identification through the Departments/Services concerned. This form
          will be submitted to the MTF Patient Safety Manager, Risk Manager, or
          other responsible individual IAW local policy, NLT 48 hours after the
          event.
        </span>
                                </h2>
                                <p style={{ textIndent: "0pt", textAlign: "left" }}>
                                    <br />
                                </p>
                            </li>
                            <li data-list-text={5}>
                                <h2
                                    style={{
                                        paddingTop: "4pt",
                                        paddingLeft: "21pt",
                                        textIndent: "-11pt",
                                        textAlign: "left"
                                    }}
                                >
                                    DEFINITION OF TERMS.
                                </h2>
                                <ol id="l4">
                                    <li data-list-text="a.">
                                        <p
                                            style={{
                                                paddingLeft: "31pt",
                                                textIndent: "-8pt",
                                                textAlign: "left"
                                            }}
                                        >
                                            Actual Event/Incident - A situation that did occur either with or
                                            without harm or injury to the individual(s) involved.
                                        </p>
                                    </li>
                                    <li data-list-text="b.">
                                        <p
                                            style={{
                                                paddingLeft: "31pt",
                                                textIndent: "-8pt",
                                                textAlign: "left"
                                            }}
                                        >
                                            Harm - Personal injury or damage of a physical or a psychological
                                            nature as a result of an incident.
                                        </p>
                                    </li>
                                    <li data-list-text="c.">
                                        <p
                                            style={{
                                                paddingLeft: "10pt",
                                                textIndent: "12pt",
                                                textAlign: "left"
                                            }}
                                        >
                                            Near Miss/Close Call - An event or situation that could have
                                            resulted in harm or injury to the individual(s) involved but did
                                            not, either by chance or through timely intervention. The event was
                                            identified and resolved before reaching the individual(s) involved.
                                        </p>
                                    </li>
                                </ol>
                            </li>
                        </ol>
                        <p style={{ textIndent: "0pt", textAlign: "left" }}>
                            <br />
                        </p>
                        <p style={{ textIndent: "0pt", textAlign: "left" }}>
                            <br />
                        </p>
                    </td>
                </tr>
                </tbody>
            </table>
        <table className="bottomPage2TableComments">
            <tbody>
            <tr className="bottomPage2Tr">
                <td className="bottomPageTd">
            <li data-list-text={6}>
                <p
                    style={{
                        paddingTop: "5pt",
                        paddingLeft: "21pt",
                        textIndent: "-11pt",
                        textAlign: "center"
                    }}
                >
                    ADDITIONAL COMMENTS/DATA.
                </p>
            </li>
                </td></tr></tbody></table>
            <table className="page2Footer">
                <tbody>
                <tr>
                    <td>            <h1
                        style={{
                            paddingTop: "2pt",
                            paddingLeft: "10pt",
                            textIndent: "0pt",
                            lineHeight: "11pt",
                            textAlign: "left"
                        }}
                    >
                        DA FORM 4106, FEB 2004
                    </h1></td>
                    <td>            <p style={{ paddingTop: "2pt", textIndent: "0pt", textAlign: "left" }}>
                    </p></td>
                    <td>
                        <p style={{ paddingLeft: "14pt", textIndent: "0pt", textAlign: "right" }}>
                            Page 2 of 2
                        </p></td>
                </tr>
                </tbody>
            </table>
            </div>
            </Grid>
            <Grid item xs={2}><br /></Grid>
        </Grid>
            </div>
        </>

    )
}


export default SIRPDFMagic;