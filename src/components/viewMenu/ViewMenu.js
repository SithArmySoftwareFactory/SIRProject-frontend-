import React from 'react';

import {Drawer, MenuItem, Typography} from "@mui/material";

const ViewMenu = ({ isHome, setIsHome, setSupervisorView, isOpen, setIsOpen }) => {

    const handleSupervisorView = () => {
        setIsHome(!isHome)
        setSupervisorView(true)
        console.log("help")
    }

    const handleReporterView = () => {
        setIsHome(true)
        setSupervisorView(false)
    }

    const openModal = () => {
        setIsOpen(true)
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
            <MenuItem  sx={{color: 'black'}} onClick={() => openModal()}>
                <Typography sx={{paddingLeft: '20px'}} color={'error'}>
                    Test Command Button - REMOVE
                </Typography>
            </MenuItem>
        </Drawer>
    );
};

export default ViewMenu;
