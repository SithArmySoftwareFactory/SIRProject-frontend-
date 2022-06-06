import * as React from 'react';


import {Divider} from "@mui/material";
import SIRForm from "../SIRForm/SIRForm";
import {useState} from "react";
import Box from "@mui/material/Box";


export default function DraggableDialog({rowViewed, handleClickOpen}) {
    const [fullWidth, setFullWidth] = React.useState(false);
    const [displayInDialogOnly, setDisplayInDialogOnly] = useState('dialog');

    const fullWidthFunction = (value) => {
        setFullWidth(value);
        setDisplayInDialogOnly('dialog')
    }


    const handleClose = () => {
        setOpen(false);
        setFullWidth(false);
    };

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
            <Dialog
                open={open}
                onClose={handleClose}
                PaperComponent={PaperComponent}
                aria-labelledby="draggable-dialog-title"
                fullScreen={fullWidth}
                fullWidth={true}
                >
                <DialogTitle style={{cursor: 'move'}} id="draggable-dialog-title">
                    Incident Report
                    <IconButton
                        aria-label="close"
                        onClick={handleClose}
                        sx={{
                            position: 'absolute',
                            right: 8,
                            top: 8,
                            color: (theme) => theme.palette.grey[500],
                        }}
                    >
                        <CloseIcon/>
                    </IconButton>
                </DialogTitle>
                <DialogContent>
                    <SIRForm open={open} defaultValues={props.rowViewed} fullWidthFunction={fullWidthFunction} fullWidth={fullWidth} displayInDialogOnly={displayInDialogOnly}/>
                </DialogContent>
                <Divider/>
                <DialogActions>
                    <Button onClick={handleClose} style={{color: "#5D6A18"}}>CANCEL</Button>
                    {(fullWidth) ? <Button autoFocus onClick={() => setFullWidth(false)} style={{color: "#5D6A18"}}>
                        RETURN
                    </Button>:  <Button autoFocus onClick={handleClose} style={{color: "#5D6A18"}}>
                        SAVE
                    </Button>}

                </DialogActions>
            </Dialog>
        </Box>
    );
}
