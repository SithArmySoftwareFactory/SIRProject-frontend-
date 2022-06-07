import {Button, Grid} from "@mui/material";
import './home.css'
import DashboardIcon from '@mui/icons-material/Dashboard';
import {NavLink} from "react-router-dom";
import SecurityIcon from '@mui/icons-material/Security';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';

const Home = () => {


    return (
        <><Grid container spacing={0} columns={12} justifyContent="center">
            <div className='vidContain'>
                <div className='vid'>
                    <video autoPlay muted loop className="video-container ">
                        <source src="/spinning_planet.mp4" type="video/mp4"/>
                        <source src="/spinning_planet.webm" type="video/webm"/>
                    </video>
                </div>
                <br/><br/><br/>
                <div className="callout-container">
                    <div className="callout">
                        <h1 className="callout-container-h1">SERIOUS</h1> &nbsp; &nbsp;<h1 id="red">INCIDENT</h1>
                    </div>
                    <div className="desc">
                        GLOBAL REPORTING SYSTEM
                    </div>
                    <Button sx={{marginTop: '100px', padding: '2em', height: '50px', backgroundColor: '#F7F7F7'}}
                            id="#getstarted" component={NavLink} to={'/report'}>Get Started</Button>

                </div>
            </div>
            <Grid item xs={12}>
                <br/><br/> <br/><br/>
                <div className="page-icon-container">
                    <table width="100%" style={{textAlign: 'center', justifyContent: 'center', marginTop: '2%'}}>
                        <tbody>
                        <tr>
                            <td>
                                <div style={{maxWidth: '400px', display: "inline-block"}}>
                                    <DashboardIcon className="page-icon" style={{fontSize: '250px', left: '2%'}}/>
                                </div>
                            </td>
                            <td>
                                <div style={{maxWidth: '400px', display: "inline-block"}}>
                                    <SecurityIcon className="page-icon" style={{fontSize: '250px'}}/>
                                </div>
                            </td>
                            <td>

                                <div style={{maxWidth: '400px', display: "inline-block", marginBottom: '1em'}}><br/>
                                    <PeopleAltIcon className="page-icon" style={{fontSize: '250px'}}/>
                                </div>

                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div style={{ maxWidth: '400px', display: "inline-block"}}>
                                    <h2>Dashboard</h2><p>
                                    SIR analytics driven by real time data.
                                </p></div>
                            </td>
                            <td>
                                <div style={{maxWidth: '400px', display: "inline-block"}}>
                                    <h2>User</h2><p>
                                    Centered around usability and design patterns to ensure the best user experience.
                                    Security is integral to operating data and protecting SIR information is paramount.
                                </p></div>
                            </td>
                            <td>
                                <div style={{maxWidth: '400px', display: "inline-block"}}>
                                    <h2>For Soldiers, by Soldiers</h2><p>
                                    Software should be developed for Soldiers to ensure that they can operate with the
                                    greatest lethality. Even in the strategic environment, time is off the essence.
                                    Everything ultimately effects the war fighter.
                                </p></div>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </Grid>
        </Grid>
        </>);
}

export default Home;