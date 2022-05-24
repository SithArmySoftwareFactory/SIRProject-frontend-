import React, {useState} from 'react';
import {Button, Menu, MenuItem, Typography} from "@mui/material";
import {styleMenu, styleMenuItems} from "../../themes/themes";



import {Drawer, MenuItem, Typography} from "@mui/material";

const ViewMenu = ({ isHome, setIsHome, setSupervisorView }) => {

    const handleSupervisorView = () => {
        setIsHome(!isHome)
        setSupervisorView(true)
        console.log("help")
    }

    const handleReporterView = () => {
        setIsHome(true)
        setSupervisorView(false)
    }

    return (
        <Drawer open={!isHome} elevation={16} variant='temporary' sx={{zIndex: 1000}} hideBackdrop={true}>
            <br/><br/><br/><br/>
            <MenuItem  sx={{color: 'black'}} onClick={() => handleReporterView()}>
                <Typography sx={{width: 250, paddingLeft: "20px"}}>
                    Reporter
                </Typography>
            </MenuItem>
            <MenuItem  sx={{color: 'black'}} onClick={() => handleSupervisorView()}>
                <Typography sx={{paddingLeft: '20px'}}>
                    Supervisor
                </Typography>
            </MenuItem>
        </Drawer>
    );
};

export default ViewMenu;
