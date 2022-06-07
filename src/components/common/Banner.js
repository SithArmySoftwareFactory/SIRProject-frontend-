import * as React from 'react';
import Box from '@mui/material/Box';
import HomeIcon from '@mui/icons-material/Home';
import './banner.css';
import AssessmentIcon from '@mui/icons-material/Assessment';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import FaceIcon from '@mui/icons-material/Face';
import {NavLink} from "react-router-dom";
import {Grid} from "@mui/material";
import DashboardIcon from '@mui/icons-material/Dashboard';
import MapIcon from '@mui/icons-material/Map';

export function Banner({setIsHome, isHome, authorizationState}) {
    return (
        <Box component={"div"} sx={{flexGrow: 1}}>
            <Grid container spacing={0} columns={12} justifyContent="center">
                <Grid item xs={12}>
            <header>
                <nav >
                    <img src="/img.png" alt={"logo"}  id="logo"/>
                    <ul>
                        <li><HomeIcon className="bannerIcons"/><NavLink  className="navLink" page="/" to="/">Home</NavLink></li>
                        <li><AssessmentIcon className="bannerIcons"/><NavLink  className="navLink" page="/report" to="/report">Submit Report</NavLink></li>
                        {authorizationState &&  <li><SupervisedUserCircleIcon className="bannerIcons"/><NavLink  className="navLink" page="/supervisor" to="/supervisor">Supervisor</NavLink></li>}
                        {(typeof authorizationState == 'undefined') && <li><FaceIcon className="bannerIcons"/><NavLink  className="navLink" page="/login" to="/login">Login</NavLink></li> }
                       {authorizationState && <li> <DashboardIcon className="bannerIcons"/><NavLink  className="navLink" page="/dashboard" to="/dashboard">Dashboard</NavLink></li>}
                        {authorizationState &&  <li><MapIcon className="bannerIcons"/><NavLink  className="navLink" page="/map" to="/map">Map</NavLink></li>}
                    </ul>
                </nav>
            </header>
                </Grid>
            </Grid>
        </Box>
    );
}
