import React from 'react';
import {Grid, Typography} from "@mui/material";
import Card from "@mui/material/Card";

const Team = () => {
    return (
        <Grid container spacing={5} display={"flex"} justifyContent={"center"}>
            <Grid item xs={2}>
                <Card>
                    <img src={require("./Redfearn1.jpeg")} alt="Lance Redfearn"/>
                </Card>
            </Grid>
            <Grid item xs={2}>
                <Card>
                    <img src={require("./Matos1.jpeg")} alt="Joshua Matos" height={487} width={308}/>
                </Card>
            </Grid>
            <Grid item xs={2}>
                <Card>
                    <img src={require("./Slay1.jpeg")} alt="Dakota Slay" height={487} width={308}/>
                </Card>
            </Grid>
            <Grid item xs={2}>
                <Card>
                    <img src={require("./Redfearn1.jpeg")} alt="Lance Redfearn"/>
                </Card>
            </Grid>
            <Grid item xs={2}>
                <Card>
                    <img src={require("./Redfearn1.jpeg")} alt="Lance Redfearn"/>
                </Card>
            </Grid>

        </Grid>
    );
};

export default Team;
