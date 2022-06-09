import {apiGetIncident} from "../../api/APICalls";
import {useEffect} from 'react';
import {Grid, Paper} from "@mui/material";


const ViewReport = ({singleReport }) => {

    let report = singleReport.data || [];
    return (
            <>
                <Grid container
                      spacing={2}
                      sx={{
                          minHeight: '600px',
                          justifyContent: 'center',
                          padding: 'auto',
                          margin: 'auto',
                          width: '100%'
                      }}>
                    <Grid item xs md xl>
                        <Paper elevation={24} style={{margin: 'auto', padding: '4em', width:'80%', marginBottom:'2em'}}>
                            {Object.entries(report)
                                .filter(([k, v]) => !(v === null || v === undefined))
                                .map(([key, value]) => {
                                return (<h4>{key} : {value}</h4>);
                            }) }
                    </Paper>
                </Grid>
                </Grid>
      </>
    );
}

export default ViewReport;