import * as React from 'react';
import Box from '@mui/material/Box';
import HomeIcon from '@mui/icons-material/Home';
import './banner.css';
import AssessmentIcon from '@mui/icons-material/Assessment';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import FaceIcon from '@mui/icons-material/Face';
import {NavLink} from "react-router-dom";
import {Grid, Menu} from "@mui/material";
import DashboardIcon from '@mui/icons-material/Dashboard';
import MapIcon from '@mui/icons-material/Map';
import Paper from "@mui/material/Paper";
import AnalyticsEventTracker from "./AnalyticsEventTracker";

export function Banner({setIsHome, isHome, authorizationState, userAuthorized}) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const openMenu = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (<>
        <div className="menu">
            <Box component={"div"} sx={{flexGrow: 1}}>
                <Grid container spacing={0} columns={12} justifyContent="center">
                    <Grid item xs={12}>
                        <header>
                            <nav>
                                <img src="/img.png" alt={"logo"} id="logo"/>
                                <ul>
                                    <li onClick={() => AnalyticsEventTracker('Home', 'Clicked home button', 'clicked home')}>
                                        <HomeIcon className="bannerIcons"/><NavLink className="navLink" page="/"
                                                                                    to="/">Home</NavLink></li>
                                    <li onClick={() => AnalyticsEventTracker('Submit_report', 'Clicked Submit Report Button', 'clicked Submit Report')}>
                                        <AssessmentIcon className="bannerIcons"/><NavLink className="navLink"
                                                                                          page="/report" to="/report">Submit
                                        Report</NavLink></li>
                                    {authorizationState &&
                                        <li onClick={() => AnalyticsEventTracker('Supervisor_View', 'Clicked Supervisor Button', 'clicked Supervisor Report')}>
                                            <SupervisedUserCircleIcon className="bannerIcons"/><NavLink
                                            className="navLink" page="/supervisor" to="/supervisor">Supervisor</NavLink>
                                        </li>}
                                    {!authorizationState &&
                                        <li><FaceIcon className="bannerIcons"/><NavLink className="navLink"
                                                                                        page="/login"
                                                                                        to="/login">Login</NavLink>
                                        </li>}
                                    {authorizationState &&
                                        <li onClick={() => AnalyticsEventTracker('Dashboard', 'Clicked Dashboard Button', 'clicked Dashboard')}>
                                            <DashboardIcon className="bannerIcons"/><NavLink className="navLink"
                                                                                             page="/dashboard"
                                                                                             to="/dashboard">Dashboard</NavLink>
                                        </li>}

                                    {authorizationState &&
                                        <li><FaceIcon className="bannerIcons"/><NavLink className="navLink" page="/"
                                                                                        to="/" onClick={() => {
                                            localStorage.removeItem('access_token');
                                            userAuthorized('removeAuth');
                                        }}>Logout</NavLink></li>}
                                </ul>
                            </nav>
                        </header>
                    </Grid>
                </Grid>
            </Box>
        </div>
        <div className="mobileMenu">
            <div
                href="#"
                id="basic-button"
                aria-controls={openMenu ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={openMenu ? 'true' : undefined}
                onClick={handleClick}
                style={{
                    color: '#000',
                    height: '50px',
                    width: '100%',
                    cursor: 'pointer',
                    backgroundColor: '#FFF',
                    fontFamily: 'Public Sans, sans-serif',
                    fontWeight: 'bold',
                    textAlign: 'center',
                    padding: '1em',
                    margin: 'auto'
                }}
            >
                INCIDENT REPORT MENU
            </div>

            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={openMenu}
                onClose={handleClose}
                sx={{margin: 'auto', padding: '2em', minWidth: '400px'}}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            > <Paper sx={{width: 320, maxWidth: '100%'}}>
                <HomeIcon className="bannerIcons"/><NavLink component="NavLink" className="navLink" page="/" to="/"
                                                            sx={{padding: '2em'}}>Home</NavLink><br/>
                <AssessmentIcon className="bannerIcons"/><NavLink className="navLink" page="/report" to="/report"
                                                                  sx={{margin: '2em', padding: '2em'}}>Submit
                Report</NavLink><br/>
                {(typeof authorizationState !== undefined) ?
                    (<> <SupervisedUserCircleIcon className="bannerIcons"/>
                        <NavLink component="NavLink" className="navLink" page="/supervisor"
                                 to="/supervisor">Supervisor</NavLink><br/></>)
                    :
                    null
                }
                {!authorizationState  && <><FaceIcon className="bannerIcons"/><NavLink
                    className="navLink" page="/login" to="/login">Login</NavLink><br/></>}
                {authorizationState && <> <DashboardIcon className="bannerIcons" /><NavLink className="navLink"
                                                                                           page="/dashboard"
                                                                                           to="/dashboard">Dashboard</NavLink><br/></>}
                {authorizationState && <> <MapIcon className="bannerIcons"/><NavLink className="navLink" page="/map"
                                                                                     to="/map">Map</NavLink><br/></>}

                {(typeof authorizationState !== 'undefined') && <><FaceIcon className="bannerIcons"/><NavLink
                    className="navLink" page="/" to="/" onClick={() => {
                    localStorage.removeItem('access_token');
                    userAuthorized(undefined);
                }}>Logout</NavLink><br/></>}
            </Paper>
            </Menu>

        </div>
    </>);
}
