import {Button, Card, CardActionArea, CardContent, CardMedia, Grid, Typography} from "@mui/material";
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
                        <h1 className="callout-container-h1">SERIOUS &nbsp; </h1><h1 id="red">INCIDENT</h1>
                    </div>
                    <div className="desc">
                        GLOBAL REPORTING SYSTEM
                    </div>
                    <NavLink sx={{marginTop: '100px', padding: '2em', height: '50px', backgroundColor: '#F7F7F7'}}
                            className="getStarted" component={NavLink} to={'/report'}>Get Started</NavLink>
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
                                    <h2 className="iconTextTitle">Dashboard</h2><p className="iconText">
                                    SIR analytics driven by real time data.
                                </p></div>
                            </td>
                            <td>
                                <div style={{maxWidth: '400px', display: "inline-block"}}>
                                    <h2 className="iconTextTitle">User</h2><p className="iconText">
                                    Centered around usability and design patterns to ensure the best user experience.
                                    Security is integral to operating data and protecting SIR information is paramount.
                                </p></div>
                            </td>
                            <td>
                                <div style={{maxWidth: '400px', display: "inline-block"}}>
                                    <h2 className="iconTextTitle">For Soldiers, by Soldiers</h2><p className="iconText">
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
        <Grid container spacing={1} columns={9} justifyContent="center">
            <Grid item xs={3}>
                        <Card sx={{ margin:'50px'}}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="250"
                                    image="/2.jpeg"
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Serious Incident Reporting
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Available globally to all Soldiers, give Commanders the ability to monitor and act on SIRs.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
            <Grid item xs={3}>
                        <Card sx={{ margin:'50px'}}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="250"
                                    image="/3.jpeg"
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Seamlessly Coordinate Across Teams
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Supervisors are provided with the ability to monitor and act on SIR using Map data.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
            <Grid item xs={3}>
                        <Card sx={{ margin:'50px'}}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="250"
                                    image="/users.jpeg"
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        The Software Factory
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        CI/CD Pipeline - Able to quickly monitor and improve application within moments.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
</Grid>
        </>);
}

export default Home;