import React, {useEffect, useState} from 'react';
import SIRLineChart from "./SIRLineChart";
import {Grid, Paper, Tab, Tabs, Typography} from "@mui/material";
import {apiGetIncident} from "../../api/APICalls";
import SIRPieChart from "./SIRPieChart";
import SIRBarChart from "./SIRBarChart";
import Gmap from "../maps/Gmap";
import SIRSentimentChart from "./SIRSentimentChart";

const Dashboard = ({authorizationState}) => {
    const [data, setData] = useState([]);
    const [monthlyCount] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    let months = [...monthlyCount]
    let individuals = []
    const [value, setValue] = React.useState(2);
    const [display, setDisplay] = useState('showAll');
    const [title, setTitle] = useState('Real-Time Metrics');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const fetchIncidentAPI = () => {
        apiGetIncident(0, authorizationState)
            .then((result) => {
                setData(result.data);
            })
            .catch((error) => console.log(error));
    };

    useEffect(fetchIncidentAPI, []);

    const individualDataset = async () => {
        let individualsTrimmed = []
        let counts = {}
        data.map((incident) => {
            individuals.push(incident.individuals.split(","))
        })
        for (let i = 0; i < individuals.length; i++) {
            for (let j = 0; j < individuals[i].length; j++) {
                individualsTrimmed.push(individuals[i][j])
            }
        }
        for (const individual of individualsTrimmed) {
            counts[individual] = counts[individual] ? counts[individual] + 1 : 1
        }

        individuals = []
        for (const individual in counts)
            individuals.push({label: individual, value: counts[individual]})
    }
    individualDataset()

    const testMap = () => {
        data.map((incident) => {
            const month = parseInt(incident.date.toString().substring(5, 7));
            switch (month) {
                case (1):
                    months[0] = (months[0] + 1);
                    break;
                case (2):
                    months[1] = (months[1] + 1);
                    break;
                case (3):
                    months[2] = (months[2] + 1);
                    break;
                case (4):
                    months[3] = (months[3] + 1);
                    break;
                case (5):
                    months[4] = (months[4] + 1);
                    break;
                case (6):
                    months[5] = (months[5] + 1);
                    break;
                case (7):
                    months[6] = (months[6] + 1);
                    break;
                case (8):
                    months[7] = (months[7] + 1);
                    break;
                case (9):
                    months[8] = (months[8] + 1);
                    break;
                case (10):
                    months[9] = (months[9] + 1);
                    break;
                case (11):
                    months[10] = (months[10] + 1);
                    break;
                case (12):
                    months[11] = (months[11] + 1);
                    break;
            }
        })
    }
    testMap()

    const tasks = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets:
            {
                label: "Serious Incidents",
                data: [...months]
            }
    }

    return (
        <>
            <Grid container
                  spacing={2}
                  sx={{
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
                        width: '85%'
                    }}>
                    <tbody>
                    <tr>
                        <td>
                            <Grid container
                                  spacing={5}
                                  alignItems="center"
                                  sx={{
                                      justifyContent: 'center',
                                  }}>
                                <Grid item xs xl md>
                                    <Tabs value={value} onChange={handleChange} aria-label="chatTabs">
                                        <Tab label="Map" onClick={() => {
                                            setDisplay('maps');
                                            setTitle('SIR Maps');
                                        }}/>
                                        <Tab label="Metrics" onClick={
                                            () => {
                                                setDisplay('metrics');
                                                setTitle('Real-Time Metrics');
                                            }
                                        }/>
                                        <Tab label="Show All" onClick={
                                            () => {
                                                setDisplay('showAll')
                                                setTitle('Real-Time Metrics');
                                            }}/>
                                    </Tabs>
                                </Grid>
                            </Grid>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </Grid>
            <Grid container
                  spacing={5}
                  sx={{
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
                        width: '85%'
                    }}>
                    <tbody>
                    <tr>
                        <td>
                            <Grid item xs xl md>
                                <Typography color={'#000'} variant={'h2'} textAlign={"center"} style={{marginBottom:'1.2em'}}>
                                    {title}
                                </Typography>
                            </Grid>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Grid container
                                  spacing={5}
                                  alignItems="center"
                                  sx={{
                                      minHeight: '600px',
                                      justifyContent: 'center',
                                  }}>
                                {
                                    (display === 'maps')
                                        ?
                                        <Grid item xs xl md>
                                            <Paper elevation={24}>
                                                <div style={{margin: 'auto', padding: '4em'}}>
                                                    <Gmap authorizationState={authorizationState}/>
                                                </div>
                                            </Paper>
                                        </Grid>
                                        :
                                        null
                                }
                                {
                                    (display === 'metrics')
                                        ?
                                        <>
                                        <Grid container
                                              spacing={5}
                                              alignItems="center"
                                              direction={'row'}

                                              sx={{
                                                  margin:'auto',
                                                  justifyContent: 'center',
                                                  marginBottom:'15em'
                                              }}>
                                            <Grid item xs xl md style={{maxHeight:'500px', marginBottom:'5em'}}>
                                                <table width={"100%"} >
                                                    <tbody>
                                                    <tr>
                                                    <td style={{maxWidth:'600px',   padding: '4em'}}>
                                                        <Paper elevation={24} style={{
                                                            padding: '4em',
                                                            minHeight: '500px',
                                                        }}>
                                                            <SIRPieChart
                                                                color="dark"
                                                                title="SIR by Type"
                                                                description="Occurrences by incident type"
                                                                date={`Last Updated: ${new Date().toLocaleDateString()}`}
                                                                sirData={data}/>
                                                    </Paper>
                                                    </td>
                                                        <td style={{maxWidth:'600px',   padding: '4em'}}>
                                                        <Paper elevation={24} style={{
                                                            padding: '4em',
                                                            minHeight: '500px',
                                                        }}>
                                                            <SIRLineChart
                                                                color="dark"
                                                                title="Serious Incidents"
                                                                description="By-Month Trend"
                                                                date={`Last Updated: ${new Date().toLocaleDateString()}`}
                                                                chart={tasks}
                                                            />
                                                    </Paper></td>
                                                        <td style={{maxWidth:'600px',   padding: '4em'}}>
                                                        <Paper elevation={24} style={{
                                                        padding: '4em',
                                                        minHeight: '500px',
                                                    }}>
                                                            <SIRSentimentChart
                                                                color="dark"
                                                                title="Sentiment"
                                                                description="Based on prevention description"
                                                                date={`Last Updated: ${new Date().toLocaleDateString()}`}
                                                                chart={tasks}
                                                                sirData={data}
                                                            />
                                                    </Paper></td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </Grid>
                                        </Grid>
                                            <Grid item xs xl md >
                                                <table width={"100%"}  >
                                                    <tbody>
                                                    <tr>
                                                        <td style={{maxWidth:'600px',   padding: '4em'}}>
                                                            <div style={{width:'100%'}}>
                                                            <Paper elevation={24} style={{
                                                                padding: '4em',
                                                                minHeight: '500px',
                                                                display:'flex-end'
                                                            }}>
                                                                <SIRBarChart
                                                                    color="dark"
                                                                    title="SIR by individual"
                                                                    description="Occurrences by individuals involved"
                                                                    date={`Last Updated: ${new Date().toLocaleDateString()}`}
                                                                    sirData={individuals}/>
                                                            </Paper>
</div>
                                                        </td></tr></tbody></table>
                                            </Grid>
                                        </>
                                        :
                                        null
                                }
                                {
                                    (display === 'showAll')
                                        ?
                                        <>
                                        <Grid container
                                              spacing={5}
                                              direction="row"
                                              justifyContent="center"
                                              alignItems="flex-start"
                                              sx={{
                                                  margin:'auto',
                                                  justifyContent: 'flex-start',

                                              }}>
                                                        <Grid item xs={4}>
                                                            <Paper elevation={24}>
                                                                <div style={{
                                                                    padding: '4em',
                                                                    minHeight: '500px',
                                                                    marginBottom:'3em'
                                                                }}>
                                                                    <SIRLineChart
                                                                        color="dark"
                                                                        title="Serious Incidents"
                                                                        description="By-Month Trend"
                                                                        date={`Last Updated: ${new Date().toLocaleDateString()}`}
                                                                        chart={tasks}
                                                                    />
                                                                </div>
                                                            </Paper>
                                                                    <Paper elevation={24}>
                                                                        <div style={{
                                                                            padding: '4em',
                                                                            minHeight: '500px',
                                                                            marginBottom:'3em'
                                                                        }}>
                                                                    <SIRPieChart
                                                                        color="dark"
                                                                        title="SIR by Type"
                                                                        description="Occurrences by incident type"
                                                                        date={`Last Updated: ${new Date().toLocaleDateString()}`}
                                                                        sirData={data}/>
                                                                        </div>
                                                                    </Paper>
                                                                            <Paper elevation={24}>
                                                                                <div style={{
                                                                                    padding: '4em',
                                                                                    minHeight: '500px',
                                                                                    marginBottom:'3em'
                                                                                }}>
                                                                    <SIRSentimentChart
                                                                        color="dark"
                                                                        title="Sentiment"
                                                                        description="Based on prevention description"
                                                                        date={`Last Updated: ${new Date().toLocaleDateString()}`}
                                                                        chart={tasks}
                                                                        sirData={data}
                                                                    />
                                                                </div>
                                                            </Paper>
                                                        </Grid>
                                                        <Grid item xs={8}>
                                                            <Paper elevation={24}>
                                                                <div style={{
                                                                    padding: '4em',
                                                                    minHeight: '500px',
                                                                    margin:'auto',
                                                                    marginBottom:'3em'
                                                                }}>
                                                                    <SIRBarChart
                                                                        color="dark"
                                                                        title="SIR by individual"
                                                                        description="Occurrences by individuals involved"
                                                                        date={`Last Updated: ${new Date().toLocaleDateString()}`}
                                                                        sirData={individuals}/></div>
                                                            </Paper>
                                                            <Paper elevation={24}>
                                                                <div style={{
                                                                    padding: '4em',
                                                                    minHeight: '500px',

                                                                    margin:'auto'
                                                                }}>
                                                                    <Gmap authorizationState={authorizationState}/>
                                                                </div>
                                                            </Paper>
                                                        </Grid>
                                        </Grid>
                                        </>
                                        :
                                        null


                                }
                            </Grid>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </Grid>
            <Grid container columnSpacing={10}
                  direction="row"
                  justifyContent="center"
                  alignItems="stretch"
            >
                <Grid item xs={12} margin={2}>

                </Grid>
                <Grid item xs={3.75} margin={1}>

                </Grid>
                <Grid item xs={3.75} margin={1}>

                </Grid>
                <Grid item xs={3.75} margin={1}>

                </Grid>
            </Grid>
        </>
    )
};

export default Dashboard;