import {Card, CardActionArea, CardContent, CardMedia, Grid, Typography} from "@mui/material";
import AddTaskOutlinedIcon from '@mui/icons-material/AddTaskOutlined';
import './home.css'
import {Add} from "@mui/icons-material";

const Home = () => {
    return(
        <>
        <div className='vidContain'>
        <div className='vid'>
            <video autoPlay muted loop className="ideo-container ">
                <source src="http://localhost:3000/spinning_planet.mp4" type="video/mp4"/>
                <source src="http://localhost:3000/spinning_planet.webm" type="video/webm"/>
            </video>
        </div>
        <div className="callout">
            <div className="callout-container">

                <h1 className="callout-container-h1"> Serious Incident Report</h1>
            </div>
            <br/> <br/> <br/>
            <div className="desc">
                Global Reporting System
            </div>
            <button className="button button5">Get Started</button>
        </div>
    </div>
                <Grid container spacing={0} columns={12} justifyContent="center">
                    <Grid item xs={12}>

                        <div className="page-icon-container">
                            <AddTaskOutlinedIcon className="page-icon"   style={{fontSize: '102px'}}/>
                        </div>
                    </Grid>
                </Grid>
            <table style={{marginTop:'100px', marginBottom: '100px', padding:'30px', textAlign:'center', width:'100%' }}>
                <tbody>
            <tr>
                <td>
                    <Card sx={{ maxWidth: 645, marginLeft:15}}>
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
                    <Card sx={{ maxWidth: 645 }}>
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
                    <Card sx={{ maxWidth: 645 }}>
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