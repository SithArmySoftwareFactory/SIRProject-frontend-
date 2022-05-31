import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Paper from '@mui/material/Paper';
import Draggable from 'react-draggable';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Form20 from "../form_backup/Form20";
import axios from "axios";
import {API_URL} from "../../constants/Constants";
import {Divider} from "@mui/material";
import {useState} from "react";
import SIRForm from "../SIRForm/SIRForm";

function PaperComponent(props) {
    return (
        <Draggable
            handle="#draggable-dialog-title"
            cancel={'[class*="MuiDialogContent-root"]'}
        >
            <Paper {...props} />
        </Draggable>
    );
}

export default function DraggableDialog(props) {
    const [open, setOpen] = React.useState(false);
    const [values, setValues] = React.useState([]);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSave = async (formikValues) => {
        setValues(formikValues); //set values to state, perhaps use later?
    }


    const handlePatch = () => {
        //call API
         axios.patch(API_URL + "incident/" + props.rowViewed.id, transformData(values))

    }
    function transformData (
        {date,
            time,
            location,
            incidentType,
            harm,
            adult,
            child,
            department,
            description,
            effects,
            eventType,
            familymember,
            other,
            patient,
            patientAddress,
            patientName,
            patientPhone,
            patientSSN,
            prevention,
            staffmember,
            visitor,
            volunteer,
            witness1Name,
            witness1Phone,
            witness2Name,
            witness2Phone,
            witness3Name,
            witness3Phone }) {

        let individualArray = [familymember,adult,child,other,patient,staffmember,visitor,volunteer]

        let filtered = individualArray.filter(x => x !== undefined);

        for (let i = 0; i < filtered.length; i++) {
            if(filtered[i] === 'undefined') {
                filtered.splice(i, 1);
            }
        }

        let individuals = filtered.join(",");

        return {
            date: date,
            time: time,
            location: location,
            incidentType: incidentType,
            harm: harm,
            individuals: individuals,
            eventType: eventType,
            effects: effects,
            patientSSN,
            patientPhone,
            patientAddress,
            patientName,
            witness1Name,
            witness1Phone,
            witness2Name,
            witness2Phone,
            witness3Name,
            witness3Phone,
            department,
            description,
            prevention,
        };
    }

    return (
        <>
            <a className="viewLink" onClick={handleClickOpen}>
                VIEW
            </a>
            <Dialog
                open={open}
                onClose={handleClose}
                PaperComponent={PaperComponent}
                aria-labelledby="draggable-dialog-title"
                 maxWidth="800px"
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
                    <DialogContentText>
                        <SIRForm open={open}/>
                    </DialogContentText>
                </DialogContent>
                <Divider/>
                <DialogActions>
                    <Button autoFocus onClick={handleClose} style={{color: "#5D6A18"}}>
                        SAVE
                    </Button>
                    <Button onClick={handleClose} style={{color: "#5D6A18"}}>CANCEL</Button>
                </DialogActions>
            </Dialog>
        </>
    );
}
