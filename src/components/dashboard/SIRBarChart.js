import {Bar} from 'react-chartjs-2';

import React from 'react';
import Box from "@mui/material/Box";
import {Typography} from "@mui/material";
import Divider from "@mui/material/Divider";
import Icon from "@mui/material/Icon";
import Card from "@mui/material/Card";

const SIRBarChart = ({sirData, title, description, date}) => {
    let labelArray = []
    let valuesArray = []

    const chartLabels = () => {
        sirData.forEach(element => {
            labelArray.push(element.label)
        })
    }
    chartLabels()


    const chartValues = () => {
        sirData.forEach(element => {
            valuesArray.push(element.value)
        })
    }
    chartValues()

    const bar = {
        type: 'bar',
        data: {
            labels: labelArray,
            datasets: [
                {
                    label: "Individuals Involved",
                    backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850"],
                    data: valuesArray
                }
            ]
        },
        options: {
            legend: {display: false},
            title: {
                display: false,
                text: 'Predicted world population (millions) in 2050'
            }
        }
    }

    return (
        <Card sx={{backgroundColor: "darkgray"}} elevation={12}>
            <Box padding="1rem" style={{backgroundColor: "darkgray"}} minHeight={570} maxHeight={'100%'}>
                <Bar data={bar.data} options={bar.options} height={300}/>
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
};

export default SIRBarChart;
