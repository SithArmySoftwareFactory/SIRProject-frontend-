import React, {useEffect, useMemo, useState} from 'react';
import SIRLineChart from "./SIRLineChart";
import { Grid, Typography} from "@mui/material";
import {apiGetIncident} from "../../api/APICalls";
import SIRPieChart from "./SIRPieChart";
import SIRBarChart from "./SIRBarChart";

const Dashboard = ({authorizationState}) => {
    const [data, setData] = useState([]);
    const [monthlyCount] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    let months = [...monthlyCount]
    let individuals = []



    const fetchIncidentAPI = () => {
        apiGetIncident(0, authorizationState)
            .then((result) => {
                setData(result.data);
            })
            .catch((error) => console.log(error));
    };

    useEffect(fetchIncidentAPI, []);

    const individualDataset = () => {
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
            <Grid container columnSpacing={10}
                  direction="row"
                  justifyContent="center"
                  alignItems="stretch"
                  sx={{
                      backgroundImage: `url("https://www.incimages.com/uploaded_files/image/1920x1080/getty_952510084_395383.jpg")`}}>
                <Grid item xs={12} margin={2}>
                    <Typography color={'white'} variant={'h2'} textAlign={"center"}>
                        Real-Time Metrics
                    </Typography>
                </Grid>
                <Grid item xs={3.75} margin={1}>
                    <SIRLineChart
                        color="dark"
                        title="Serious Incidents"
                        description="By-Month Trend"
                        date={`Last Updated: ${new Date().toLocaleDateString()}`}
                        chart={tasks}
                    />
                </Grid>
                <Grid item xs={3.75} margin={1}>
                    <SIRPieChart
                        color="dark"
                        title="SIR by Type"
                        description="Occurrences by incident type"
                        date={`Last Updated: ${new Date().toLocaleDateString()}`}
                        sirData={data}/>
                </Grid>
                <Grid item xs={3.75} margin={1}>
                    <SIRBarChart
                        color="dark"
                        title="SIR by individual"
                        description="Occurrences by individuals involved"
                        date={`Last Updated: ${new Date().toLocaleDateString()}`}
                        sirData={individuals}/>
                </Grid>
            </Grid>
        </>
    )
};

export default Dashboard;