import {Button, Card, CardActionArea, CardContent, CardMedia, Grid, Typography} from "@mui/material";
import './home.css'
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupAddOutlinedIcon from '@mui/icons-material/GroupAddOutlined';
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
                <br /><br /><br />
                <div className="callout-container">
                    <div className="callout">
                        <h1 className="callout-container-h1">SERIOUS</h1> &nbsp; &nbsp;<h1 id="red">INCIDENT</h1>
                    </div>
                    <div className="desc">
                       GLOBAL REPORTING SYSTEM
                    </div>
                    <div id="#getStarted">
                        <NavLink  className="getStarted"   to={'/report'}>Get Started</NavLink>
                    </div>
                </div>
            </div>
            <Grid item xs={12}>
                <br /><br /> <br /><br />
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
                                <div style={{maxWidth: '400px', display: "inline-block", marginBottom:'1em'}}><br/>
                                    <PeopleAltIcon className="page-icon" style={{fontSize: '250px'}}/>
                          </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div style={{minHeight:'250px',maxWidth: '400px', display: "inline-block"}}>
                                    <h2 className="iconTextTitle">Dashboard</h2><p className="iconText">
                                    SIR analytics driven by real time data. Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Adipisci animi magni soluta temporibus. A debitis delectus ducimus
                                    id perferendis! Deserunt doloribus ducimus ea eveniet, fuga libero, modi molestiae
                                    obcaecati optio quo quod totam velit voluptas?
                                </p></div>
                            </td>
                            <td>
                                <div style={{minHeight:'250px',maxWidth: '400px', display: "inline-block"}}>
                                    <h2 className="iconTextTitle">Secure</h2><p className="iconText">
                                    Security centered on usability and design patterns to ensure the best user experience. Security is integral to operating data and protecting SIR information is paramount.
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                </p></div>
                            </td>
                            <td>
                                <div style={{minHeight:'250px',maxWidth: '400px', display: "inline-block"}}>
                                    <h2 className="iconTextTitle">For Soldiers, by Soldiers</h2><p className="iconText">
                                    Software should be developed for Soldiers to ensure that they can operate with the greatest lethality. Even in the strategic environment, time is off the essence. Everything
                                    ultimately effects the war fighter. Lorem ipsum dolor sit amet, consectetur adipisicing.
                                </p></div>
                            </td>
                        </tr>
                        </tbody>
                    </table>

                </div>
            </Grid>
        </Grid>
            <table style={{
                marginTop: '100px',
                marginBottom: '100px',
                padding: '30px',
                textAlign: 'center',
                width: '100%'
            }}>
                <tbody>
                <tr>
                    <td>
                        <Card sx={{maxWidth: 645, margin:'50px'}}>
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
                                       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis, reiciendis!
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </td>
                    <td>
                        <Card sx={{maxWidth: 645, margin:'50px'}}>
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
                                       Map data displayed in real time dashboard. Lorem ipsum dolor.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </td>
                    <td>
                        <Card sx={{maxWidth: 645, margin:'50px'}}>
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
                                       CI/CD Pipeline - Software Engineering at all levels, Lorem ipsum.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </td>
                </tr>
                </tbody>
            </table>
        </>);
}

export default Home;