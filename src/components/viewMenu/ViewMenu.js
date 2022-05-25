import React, {useState} from 'react';
import {Button, Menu, MenuItem, Typography,Drawer} from "@mui/material";
import {NavLink} from "react-router-dom";


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

                    <NavLink className="navLink" page="/" to="/">Reporter</NavLink>
                </Typography>
            </MenuItem>
            <MenuItem  sx={{color: 'black'}} onClick={() => handleSupervisorView()}>
                <Typography sx={{paddingLeft: '20px'}}>
                    <NavLink className="navLink" page="/supervisor" to="/supervisor">Supervisor</NavLink>
                </Typography>
            </MenuItem>
        </Drawer>
    );
};

export default ViewMenu;
