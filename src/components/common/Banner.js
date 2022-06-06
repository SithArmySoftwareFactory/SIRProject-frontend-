import * as React from 'react';
import Box from '@mui/material/Box';
import HomeIcon from '@mui/icons-material/Home';
import './banner.css';
import AssessmentIcon from '@mui/icons-material/Assessment';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import FaceIcon from '@mui/icons-material/Face';
import {NavLink} from "react-router-dom";
import {Grid} from "@mui/material";

export function Banner() {
    return (
        <Box component={"div"} sx={{flexGrow: 1}}>
            <Grid container spacing={0} columns={12} justifyContent="center">
                <Grid item xs={12}>
                    <header>
                        <nav>
                            <img src="/img.png" alt={"logo"} id="logo"/>
                            <ul>
                                <li><HomeIcon className="bannerIcons"/><NavLink className="navLink" page="/"
                                                                                to="/">Home</NavLink></li>
                                <li><AssessmentIcon className="bannerIcons"/><NavLink className="navLink" page="/report"
                                                                                      to="/report">Submit
                                    Report</NavLink></li>
                                <li><SupervisedUserCircleIcon className="bannerIcons"/><NavLink className="navLink"
                                                                                                page="/supervisor"
                                                                                                to="/supervisor">Supervisor</NavLink>
                                </li>
                                <li><FaceIcon className="bannerIcons"/><NavLink className="navLink" page="/login"
                                                                                to="/login">Login</NavLink></li>
                                <li><FaceIcon className="bannerIcons"/><NavLink className="navLink" page="/dashboard"
                                                                                to="/dashboard">Dashboard</NavLink></li>
                            </ul>
                        </nav>
                    </header>
                </Grid>
            </Grid>

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
