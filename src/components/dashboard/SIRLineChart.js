// porp-types is a library for typechecking of props


// react-chartjs-2 components
import {Line} from "react-chartjs-2";
import {Chart} from 'chart.js';
import {registerables} from 'chart.js';


// @mui material components
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components

// ReportsLineChart configurations;
import {useMemo} from "react";
import configs from "../dashboard/configs"
import {CardContent, Typography} from "@mui/material";
import Box from "@mui/material/Box";

const SIRLineChart = ({color, title, description, date, chart}) => {
    const {data, options} = configs(chart.labels || [], chart.datasets || {});
    Chart.register(...registerables);

    return (
        <Card sx={{backgroundColor: "darkgray",  border: "2px solid black"}} elevation={24}>
            <Box padding="1rem" style={{backgroundColor: "darkgray"}} minHeight={570} maxHeight={'100%'}>
                {useMemo(
                    () => (
                        <Box
                        >
                            <Line data={data} height={300}/>
                        </Box>
                    ),
                    [chart, color]
                )}
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

// Setting default values for the props of ReportsLineChart
SIRLineChart.defaultProps = {
    color: "dark",
    description: "",
};


export default SIRLineChart;