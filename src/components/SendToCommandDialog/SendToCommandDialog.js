import * as React from 'react';
import {useState} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import {Close} from "@mui/icons-material";
import {Divider, Grid, Typography} from "@mui/material";

export default function SendToCommandDialog(props) {
    const commands = [{
        "Name": "United States Army Forces Command (FORSCOM)"
    }, {
        "Name": "United States Army Futures Command (AFC)"
    }, {
        "Name": "United States Army Materiel Command (AMC)"
    }, {
        "Name": "United States Army Training and Doctrine Command (TRADOC)"
    }, {
        "Name": "United States Army Africa (USARAF)/Ninth Army/United States Army Southern European Task Force"
    }, {
        "Name": "United States Army Central (ARCENT)/Third Army"
    }, {
        "Name": "United States Army Europe (USAREUR)/Seventh Army"
    }, {
        "Name": "United States Army North (ARNORTH)/Fifth Army"
    }, {
        "Name": "United States Army Pacific (USARPAC)"
    }]

    const [currentCommand, setCurrentCommand] = useState(commands[0].Name);

    const handleClose = () => {
        props.setDialog(false);
    };

    const handleSend = () => {
        props.setDialog(false)
        props.handleSent(true);
        // Need to input Logic for SMTP Server //
    }

    return (
        <Grid container flexDirection={'column'} display={'inline-flex'}>
            <Dialog
                open={props.dialog}
                onClose={handleClose}
            >
                <Grid item xs={12}>
                    <DialogTitle>Send Up To Command
                        <Button onClick={handleClose} style={{paddingLeft: 200}}>
                            <Close style={{color: "#000000"}}/>
                        </Button>
                    </DialogTitle>
                </Grid>
                <Divider/>
                <DialogContent style={{paddingBottom: 100, paddingTop: 40}}>
                    <Box
                        noValidate
                        component="form"
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            m: 'auto',
                            width: '422px'
                        }}
                    >
                        <FormControl sx={{mt: 2, minWidth: 120}}>
                            <Typography>
                                Command
                            </Typography>
                            <Select
                                autoFocus
                                value={currentCommand}
                                onChange={(ev) => {
                                    setCurrentCommand(ev.target.value);
                                }}
                            >
                                {commands.map((command) => {
                                    return <MenuItem key={command.Name} value={command.Name}>
                                        {command.Name}
                                    </MenuItem>
                                })}
                            </Select>
                        </FormControl>
                    </Box>
                </DialogContent>
                <Divider/>
                <Grid item xs={12}>
                    <DialogActions>
                        <Button onClick={handleSend} style={{color: "#000000", paddingRight: 40}}>Send</Button>
                        <Button onClick={handleClose} style={{color: "#000000"}}>Cancel</Button>
                    </DialogActions>
                </Grid>
            </Dialog>
        </Grid>
    );
}
