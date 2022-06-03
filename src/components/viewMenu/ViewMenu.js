import React from 'react';
import {Drawer, MenuItem, Typography} from "@mui/material";
import {NavLink} from "react-router-dom";


const ViewMenu = ({ isHome, setIsHome }) => {

    const handleSupervisorView = () => {
        setIsHome(!isHome)
    }

    const handleReporterView = () => {
        setIsHome(true)
    }

    return (
        <Drawer open={!isHome} elevation={16} variant='temporary' sx={{zIndex: 1000}} hideBackdrop={true}>
            <br/><br/><br/><br/>
            <MenuItem  sx={{color: 'black', cursor:'default'}} onClick={() => handleReporterView()}>
                <Typography sx={{width: 250, paddingLeft: '20px'}}>
                    <NavLink className="navLink" page="/" to="/">Reporter</NavLink>
                </Typography>
            </MenuItem>
            <MenuItem  sx={{color: 'black', cursor:'default'}} onClick={() => handleSupervisorView()}>
                <Typography sx={{paddingLeft: '20px'}}>
                    <NavLink className="navLink" page="/supervisor" to="/supervisor">Supervisor</NavLink>
                </Typography>
            </MenuItem>
        </Drawer>
    );
};

export default ViewMenu;
