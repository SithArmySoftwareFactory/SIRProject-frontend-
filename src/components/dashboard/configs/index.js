import {useEffect, useMemo} from "react";


function Configs(labels, datasets) {
let pointValues = []

    const pointColor = (value) => {
    pointValues = []
        value.forEach(number => {
            if (number === 0) {
                pointValues.push("green")
            } else if (number <= 2) {
                pointValues.push("yellow")
            } else {
                pointValues.push("red")
            }
        })
        console.log(pointValues)
    }
         useMemo( () => {
             pointColor(datasets.data)
         }, [datasets]);

    return {
        data: {
            labels,
            datasets: [
                {
                    label: datasets.label,
                    tension: 0,
                    pointRadius: 8 ,
                    pointBorderColor: "transparent",
                    pointBackgroundColor: [...pointValues],
                    borderColor: 'black',
                    borderWidth: 3,
                    backgroundColor: "black",
                    fill: false,
                    data: datasets.data,
                    maxBarThickness: 6,
                },
            ],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false,
                },
            },
            interaction: {
                intersect: false,
                mode: "index",
            },
            scales: {
                y: {
                    grid: {
                        drawBorder: false,
                        display: true,
                        drawOnChartArea: true,
                        drawTicks: false,
                        borderDash: [5, 5],
                        color: "rgba(255, 255, 255, .2)"
                    },
                    ticks: {
                        display: true,
                        color: "blue",
                        padding: 10,
                        font: {
                            size: 14,
                            weight: 300,
                            family: "Roboto",
                            style: "normal",
                            lineHeight: 2,
                        },
                    },
                },
                x: {
                    grid: {
                        drawBorder: true,
                        display: true,
                        drawOnChartArea: true,
                        drawTicks: true,
                        borderDash: [5, 5],
                    },
                    ticks: {
                        display: true,
                        color: "blue",
                        padding: 0,
                        font: {
                            size: 14,
                            weight: 300,
                            family: "Roboto",
                            style: "normal",
                            lineHeight: '100%',
                        },
                    },
                },
            },
        },
    };
}

export default Configs;