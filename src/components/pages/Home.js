import {Card, CardActionArea, CardContent, CardMedia, Grid, Typography} from "@mui/material";
import './home.css'
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupAddOutlinedIcon from '@mui/icons-material/GroupAddOutlined';

const Home = () => {
    return (
        <><Grid container spacing={0} columns={12} justifyContent="center">
            <div className='vidContain'>
                <div className='vid'>
                    <video autoPlay muted loop className="video-container ">
                        <source src="http://localhost:3000/spinning_planet.mp4" type="video/mp4"/>
                        <source src="http://localhost:3000/spinning_planet.webm" type="video/webm"/>
                    </video>
                </div>

                <div className="callout-container">
                    <div className="callout">
                        <h1 className="callout-container-h1"> Serious Incident Report</h1>
                    </div>
                    <br/> <br/> <br/>
                    <div className="desc">
                        Global Reporting System
                    </div>
                    <button className="button button5">Get Started</button>
                </div>
            </div>
            <Grid item xs={12}>
                <div className="page-icon-container">
                    <table width="100%" style={{textAlign: 'center', justifyContent: 'center', marginTop: '2%'}}>
                        <tbody>
                        <tr>
                            <td>
                                <div style={{maxWidth: '400px', display: "inline-block"}}>
                                    <DashboardIcon className="page-icon" style={{fontSize: '250px', left: '2%'}}/>
                                    <h2>Dashboard</h2><p>
                                    SIR analytics driven by real time data. Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Adipisci animi magni soluta temporibus. A debitis delectus ducimus
                                    id perferendis! Deserunt doloribus ducimus ea eveniet, fuga libero, modi molestiae
                                    obcaecati optio quo quod totam velit voluptas?
                                </p></div>
                            </td>
                            <td>
                                <div style={{maxWidth: '400px', display: "inline-block"}}>
                                    <GroupAddOutlinedIcon className="page-icon" style={{fontSize: '250px'}}/>
                                    <h2>User</h2><p>
                                    SIR analytics driven by real time data. Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Adipisci animi magni soluta temporibus. A debitis delectus ducimus
                                    id perferendis! Deserunt doloribus ducimus ea eveniet, fuga libero, modi molestiae
                                    obcaecati optio quo quod totam velit voluptas?
                                </p></div>
                            </td>
                            <td>
                                <div style={{maxWidth: '400px', display: "inline-block"}}>
                                    <img src="icons8-soldier-man-100.png" style={{width: '200px', height: '200px'}}/>
                                    <h2>For Soldiers, by Soldiers</h2><p>
                                    SIR analytics driven by real time data. Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Adipisci animi magni soluta temporibus. A debitis delectus ducimus
                                    id perferendis! Deserunt doloribus ducimus ea eveniet, fuga libero, modi molestiae
                                    obcaecati optio quo quod totam velit voluptas?
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
                        <Card sx={{maxWidth: 645, marginLeft: 15}}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="250"
                                    image="/2.jpeg"
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Tactical Variants
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000
                                        species, ranging across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </td>
                    <td>
                        <Card sx={{maxWidth: 645}}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="250"
                                    image="/3.jpg"
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Seamlessly Coordinate Across Teams
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000
                                        species, ranging across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </td>
                    <td>
                        <Card sx={{maxWidth: 645}}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="250"
                                    image="/3.jpg"
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Seamlessly Coordinate Across Teams
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000
                                        species, ranging across all continents except Antarctica
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