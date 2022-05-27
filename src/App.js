import './App.css';
import {Banner} from "./components/common/Banner";
import SIRForm from "./components/SIRForm/SIRForm";
import {forwardRef, useState} from "react";
import ViewMenu from "./components/viewMenu/ViewMenu";
import SupervisorView from "./components/supervisor/SupervisorView";
import {Button, Grid, Snackbar, Typography} from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import CloseIcon from '@mui/icons-material/Close'
import {Route, Routes} from 'react-router-dom'

const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function App() {
    const [isHome, setIsHome] = useState(true);
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(true);
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };
    return (
        <>
            <Grid container spacing={0} columns={{ xs: 4, sm: 8, md: 12 }} justifyContent="center">
                <Grid item xs={14}>
                    <Banner setIsHome={setIsHome} isHome={isHome} />
                                      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}
                          anchorOrigin={{horizontal: "center", vertical: "top"}} sx={{width: "100%"}}>

                    <Alert onClose={handleClose} severity={"success"}
                           sx={{width: "100%", background: "#EAF5F4", color: "#2A9D8F", fontWeight: "600"}}
                           action={
                        <>
                            <Typography noWrap textAlign={"right"}>View Report</Typography>
                            <CloseIcon onClick={()=>handleClose()}/>
                        </>
                    }
                    >
                        <Typography noWrap>Incident Report Submitted.</Typography>
                    </Alert>
                </Snackbar>
                </Grid>
                <Grid item sm={0} md={3} xs={0} />
                <Grid item sm={8} md={8}  xs={12} xl={12} >
                <Routes>
                    <Route exact path="/" element={<SIRForm handleClick={handleClick}/>} />
                     <Route path="/supervisor" element={<SupervisorView/>} />
                    <Route element={<SIRForm/>} />
                </Routes>
            </Grid>
                <Grid item sm={0} md={3} xs={0} />
                <Grid item xs={12}>
                    <ViewMenu isHome={isHome} setIsHome={setIsHome} />
                </Grid>
            </Grid>
        </>
    );
}

export default App;
