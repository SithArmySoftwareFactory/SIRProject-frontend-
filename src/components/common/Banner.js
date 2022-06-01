import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {styleBanner} from "../../themes/themes";
import HomeIcon from '@mui/icons-material/Home';
import ASFIcon from "./ASFIcon";
import './banner.css';
import AssessmentIcon from '@mui/icons-material/Assessment';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import FaceIcon from '@mui/icons-material/Face';
import {NavLink} from "react-router-dom";
export function Banner({setIsHome, isHome}) {
    return (
        <Box component={"div"} sx={{flexGrow: 1}}>
            <header>
                <nav>
                    <span id="logo"><ASFIcon/></span>
                    <ul>
                        <li><HomeIcon className="bannerIcons"/><NavLink  className="navLink" page="/" to="/">Home</NavLink></li>
                        <li><AssessmentIcon className="bannerIcons"/><NavLink  className="navLink" page="/report" to="/report">Submit Report</NavLink></li>
                        <li><SupervisedUserCircleIcon className="bannerIcons"/><NavLink  className="navLink" page="/supervisor" to="/supervisor">Supervisor</NavLink></li>
                        <li><FaceIcon className="bannerIcons"/><NavLink  className="navLink" page="/login" to="/login">Login</NavLink></li>
                        <span style={{width:'300px'}}> --------------------------------------</span>
                    </ul>
                </nav>
            </header>


            {/*<AppBar style={styleBanner}*/}
            {/*>*/}
            {/*    <Toolbar>*/}
            {/*        <IconButton*/}
            {/*            size="large"*/}
            {/*            edge="start"*/}
            {/*            color="inherit"*/}
            {/*            aria-label="menu"*/}
            {/*            onClick={() => setIsHome(!isHome)}*/}
            {/*        >*/}
            {/*            <MenuIcon sx={{*/}
            {/*                position: "absolute",*/}
            {/*                left: "12.5%",*/}
            {/*                right: "12.5%",*/}
            {/*                top: "25%",*/}
            {/*                bottom: "25%",*/}
            {/*                color: "#4B5320"*/}
            {/*            }}*/}
            {/*            />*/}
            {/*        </IconButton>*/}
            {/*        <IconButton*/}
            {/*            size="small"*/}
            {/*            color="inherit"*/}
            {/*            aria-label="Army Software Factory Logo"*/}
            {/*        >*/}
            {/*            <ASFIcon/>*/}
            {/*        </IconButton>*/}
            {/*    </Toolbar>*/}
            {/*</AppBar>*/}
        </Box>
    );
}
