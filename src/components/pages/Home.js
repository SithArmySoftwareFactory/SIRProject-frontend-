import {Card, CardActionArea, CardContent, CardMedia, Grid, Typography} from "@mui/material";
import './home.css'
import DashboardIcon from '@mui/icons-material/Dashboard';
import {NavLink} from "react-router-dom";
import SecurityIcon from '@mui/icons-material/Security';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';

const Home = () => {


    return (
        <>
            <div className='vidContain'>
                <div className='vid'>
                    <video autoPlay muted loop className="video-container ">
                        <source src="/spinning_planet.mp4" type="video/mp4"/>
                        <source src="/spinning_planet.webm" type="video/webm"/>
                    </video>
                </div>
            </div>
            <Grid container
                  spacing={2}
                  sx={{
                      minHeight: '600px',
                      justifyContent: 'center',
                      padding: 'auto',
                      margin: 'auto',
                      width: '100%'
                  }}>
                <table
                    width="80%" style={{textAlign: 'center'}}>
                    <tbody>
                    <tr>
                        <td>
                            <div>
                                <div className="callout-container2">
                                    <div className="callout">
                                        <h1 className="callout-container-h1">SERIOUS &nbsp; </h1><h1
                                        id="red">INCIDENT</h1>
                                    </div>
                                    <div className="desc">
                                        GLOBAL REPORTING SYSTEM
                                    </div>
                                    <NavLink sx={{
                                        marginTop: '100px',
                                        padding: '2em',
                                        height: '50px',
                                        backgroundColor: '#F7F7F7'
                                    }}
                                             className="getStarted" component={NavLink} to={'/report'}>Get
                                        Started</NavLink>
                                </div>
                            </div>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </Grid>
            <Grid container
                  spacing={2}
                  sx={{
                      minHeight: '600px',
                      justifyContent: 'center',
                      verticalAlign: 'center',
                      margin: 'auto',
                      width: '100%',

                  }}>
                <table
                    style={{

                        justifyContent: 'center',
                        verticalAlign: 'center',
                        margin: 'auto',
                        width: '75%'
                    }}>
                    <tbody>
                    <tr>
                        <td>
                            <Grid container
                                  spacing={5}
                                  alignItems="center"
                                  sx={{
                                      minHeight: '600px',
                                      justifyContent: 'center',
                                      margin: 'auto'
                                  }}>
                                <Grid item xs xl md>
                                    <div style={{minWidth: '450px', margin: 'auto', textAlign: 'center'}}>
                                        <DashboardIcon className="page-icon"
                                                       style={{fontSize: '250px'}}/>
                                        <h2 className="iconTextTitle">Dashboard</h2>
                                        <p className="iconText">
                                            SIR analytics driven by real time data.
                                        </p>
                                    </div>
                                </Grid>
                                <Grid item xs xl md>
                                    <div style={{minWidth: '450px', margin: 'auto', textAlign: 'center'}}>
                                        <SecurityIcon className="page-icon" style={{fontSize: '250px'}}/>
                                        <h2 className="iconTextTitle">Secure & Reliable</h2><p className="iconText">
                                        Centered around usability and design patterns to ensure the best user
                                        experience.
                                        Security is integral to operating data and protecting SIR information is
                                        paramount.
                                    </p>
                                    </div>
                                </Grid>
                                <Grid item xs xl md>
                                    <div style={{minWidth: '450px', margin: 'auto', textAlign: 'center'}}>
                                        <PeopleAltIcon className="page-icon" style={{fontSize: '250px'}}/>
                                        <h2 className="iconTextTitle">For Soldiers, by Soldiers</h2>
                                        <p className="iconText">
                                            Software should be developed for Soldiers to ensure that they can operate
                                            with the
                                            greatest lethality. Even in the strategic environment, time is off the
                                            essence.
                                            Everything ultimately effects the war fighter.
                                        </p>
                                    </div>
                                </Grid>
                            </Grid>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </Grid>
            <hr className="dashed"/>
            <Grid container
                  spacing={2}
                  alignItems="center"
                  sx={{
                      minHeight: '600px',
                      justifyContent: 'center',

                      margin: 'auto',
                      width: '100%'
                  }}>
                <table
                    width="80%" style={{textAlign: 'center'}}>
                    <tbody>
                    <tr>
                        <td>
                            <Grid container
                                  spacing={2}
                                  sx={{
                                      minHeight: '600px',
                                      justifyContent: 'center',
                                      padding: 'auto'
                                  }}>
                                <Grid item>
                                    <Card sx={{minWidth: '400px', maxWidth: '400px', margin: '50px'}}>
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
                                                    Available globally to all Soldiers, give Commanders the ability to
                                                    monitor and act
                                                    on SIRs.
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Grid>
                                <Grid item>
                                    <Card sx={{minWidth: '400px', maxWidth: '400px', margin: '50px'}}>
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                height="250"
                                                image="/3.jpeg"
                                                alt="green iguana"
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="div">
                                                    Seamlessly Visualize SIRs
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    Supervisors are provided with the ability to monitor and act on SIR
                                                    using Map data.
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Grid>
                                <Grid item>
                                    <Card sx={{minWidth: '400px', maxWidth: '400px', margin: '50px'}}>
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
                                                    CI/CD Pipeline - Able to quickly monitor and improve application
                                                    within moments.
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Grid>
                            </Grid>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </Grid>
        </>);
}

export default Home;