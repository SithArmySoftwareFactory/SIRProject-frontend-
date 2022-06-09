
import {useState, useEffect, useMemo} from 'react';
import {Pie} from 'react-chartjs-2';
import Box from "@mui/material/Box";
import {Typography} from "@mui/material";
import Divider from "@mui/material/Divider";
import Icon from "@mui/material/Icon";
import Card from "@mui/material/Card";


const SIRSentimentChart = ({ title, description, date, sirData}) => {

    const [graph, setGraph] = useState({
        labels: [],
        data: [],
    });

    const [graphData] = useState([]);

    let labelData = []
    let labelDataTrimmed = []

    useMemo(() =>
    {

        let counts = {}

        sirData.map((incident) => {
            if(incident.sentiment !== null) {
                labelData.push(incident.sentiment)
            }
        })

        for (let i = 0; i < labelData.length; i++) {
                labelDataTrimmed.push(labelData[i])

        }


        for (const event of labelDataTrimmed) {
            counts[event] = counts[event] ? counts[event] + 1 : 1
        }
        labelData = []
        for (const event in counts) {
            graphData.push({label: event.charAt(0).toUpperCase() + event.slice(1), value: counts[event]})
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
                label: 'Sentiment',
                data: graph.data,
                backgroundColor: [
                    'rgba(255, 0, 0, 0.25)',
                    'rgba(255,204,0, 0.25)',
                    'rgba(39,241,7, 0.25)',
                ],
                borderColor: [
                    'rgba(255, 0, 0, 0.25)',
                    'rgba(255,204,0, 0.25)',
                    'rgba(39,241,7, 0.25)',
                ],
                borderWidth: 1,
            },
        ],

    };


    return (
        <Card sx={{backgroundColor: "darkgray",  border: "2px solid black"}} elevation={24}>
            <Box padding="1rem" minHeight={'500px'} maxHeight={"100%"} >
                <Pie data={data} height={"100%"}
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

export default SIRSentimentChart;