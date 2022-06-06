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
                    <div id="#getStarted">
                        <NavLink className="getStarted" to={'/report'}>Get Started</NavLink>
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
                                <div style={{minHeight: '250px', maxWidth: '400px', display: "inline-block"}}>
                                    <h2 className="iconTextTitle">Dashboard</h2><p className="iconText">
                                    SIR analytics driven by real time data. Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Adipisci animi magni soluta temporibus. A debitis delectus ducimus
                                    id perferendis! Deserunt doloribus ducimus ea eveniet, fuga libero, modi molestiae
                                    obcaecati optio quo quod totam velit voluptas?
                                </p></div>
                            </td>
                            <td>
                                <div style={{maxWidth: '400px', display: "inline-block"}}>
                                    <h2>User</h2><p>
                                    Centered around usuability and design patterns to ensure the best user experience.
                                    Security is integral to operating data and protecting SIR information is paramount.
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit
                                    amet, consectetur adipisicing elit.
                                </p></div>
                            </td>
                            <td>
                                <div style={{maxWidth: '400px', display: "inline-block"}}>
                                    <h2>For Soldiers, by Soldiers</h2><p>
                                    Software should be developed for Soldiers to ensure that they can operate with the
                                    greatest lethality. Even in the strategic environment, time is off the essence.
                                    Everything
                                    ultimately effects the war fighter. Lorem ipsum dolor sit amet, consectetur
                                    adipisicing.
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