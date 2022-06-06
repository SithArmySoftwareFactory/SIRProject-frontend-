import {useEffect, useState} from 'react';
import {Pie} from 'react-chartjs-2';
import Box from "@mui/material/Box";
import {Typography} from "@mui/material";
import Divider from "@mui/material/Divider";
import Icon from "@mui/material/Icon";
import Card from "@mui/material/Card";


const SIRPieChart = ({ title, description, date, sirData}) => {
    const [graph, setGraph] = useState({
        labels: [],
        data: [],
    });
    const [graphData] = useState([]);
    let labelData = []

    let labelDataTrimmed = []


    useEffect(() => {

        let counts = {}
        sirData.map((incident) => {
            labelData.push(incident.eventType.split(","))
        })
        for (let i = 0; i < labelData.length; i++) {
            for (let j = 0; j < labelData[i].length; j++) {
                labelDataTrimmed.push(labelData[i][j])
            }
        }
        for (const event of labelDataTrimmed) {
            counts[event] = counts[event] ? counts[event] + 1 : 1
        }
        labelData = []
        for (const event in counts) {
            graphData.push({label: event, value: counts[event]})
        }


        const labels: any[] = [];
        const data: any[] = [];

        graphData?.map((v: any) => {
            labels.push(v?.label);
            data.push(v?.value);
        });

        setGraph({
            labels: labels,
            data: data,
        });


    }, [sirData]);


    const data = {
        labels: graph.labels,
        datasets: [
            {
                label: '# of Votes',
                data: graph.data,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };


    return (
        <Card sx={{backgroundColor: "darkgray",  border: "2px solid black"}} elevation={24}>
            <Box padding="1rem" minHeight={570} maxHeight={'100%'} >
                    <Pie data={data} height={300}
                         />
                </Box>
            <Box pl={1}>
                <Typography variant="h6" textTransform="capitalize">
                    {title}
                </Typography>
                <Typography component="div" variant="button" color="text" fontWeight="light">
                    {description}
                </Typography>
                <Divider/>
                <Typography variant="button" color="text" lineHeight={1} sx={{mt: 0.15, mr: 0.5}}>
                    <Icon>schedule</Icon>
                </Typography>
                <Typography variant="button" color="text" fontWeight="light">
                    {date}
                </Typography>
            </Box>
        </Card>

    );
}

export default SIRPieChart;