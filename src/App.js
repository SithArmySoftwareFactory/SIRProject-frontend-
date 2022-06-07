import './App.css';
import {Banner} from "./components/common/Banner";
import SIRForm from "./components/SIRForm/SIRForm";
import { forwardRef, useState} from "react";
import ViewMenu from "./components/viewMenu/ViewMenu";
import {Button, Grid, Snackbar, Typography} from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import CloseIcon from '@mui/icons-material/Close'
import {Route, Routes} from 'react-router-dom'
import SupervisorView from "./components/Supervisor/SupervisorView";
import Home from "./components/pages/Home";
import Footer from "./components/common/Footer";
import Dashboard from "./components/dashboard/Dashboard";
import Gmap from "./components/maps/Gmap";
import Login from "./components/pages/Login";
import {apiGetIncident} from "./api/APICalls";
import Team from "./components/team/Team";



const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function App() {
    const [isHome, setIsHome] = useState(true);
    const [open, setOpen] = useState(false);

    const [authorizationState, setAuthorizationState] = useState(localStorage.getItem('access_token') || undefined);
    const [apiCallCount, setApiCallCount] = useState(0);

    const handleClick = () => {
        setOpen(true);
    }

    const userAuthorized = (value) => {

        if(value){
            //TODO value logic, does it have auth and refresh token? -> yes -> authorize
            setAuthorizationState(value.data.access_token);

            /*TODO add local storage - then in API call check if the access_token is in local storage
               if it is in local storage, use it as the token. */
            localStorage.setItem('access_token', value.data.access_token);
        } else {
            setAuthorizationState(value);
            localStorage.setItem('access_token', value);
        }



    }

    const setApiCallCountFunction = () => {
        setApiCallCount(1);
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };
    return (
        <>
            <Grid container spacing={0} columns={12} justifyContent="center">
                <Grid item xs={12}>
                    <Banner setIsHome={setIsHome} isHome={isHome}  authorizationState={authorizationState} userAuthorized={userAuthorized}/>
                                      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}
                                                userAuthorized={userAuthorized}
                          anchorOrigin={{horizontal: "center", vertical: "top"}} sx={{width: "100%"}}>

                        <Alert onClose={handleClose} severity={"success"}
                               sx={{width: "100%", background: "#EAF5F4", color: "#2A9D8F", fontWeight: "600"}}
                               action={
                                   <>
                                       <Typography noWrap textAlign={"right"}>View Report</Typography>
                                       <Button onClick={() => handleClose()}
                                               sx={{
                                                   width: "5%",
                                                   background: "#EAF5F4",
                                                   color: "#2A9D8F",
                                                   fontWeight: "600"
                                               }}
                                       >
                                           <CloseIcon/>
                                       </Button>
                                   </>
                               }
                        >
                            <Typography noWrap>Incident Report Submitted.</Typography>
                        </Alert>
                    </Snackbar>
                </Grid>
                <Grid item  xs={12} >
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/report" element={<SIRForm handleClick={handleClick}  />} />
                    {authorizationState && <Route path="/supervisor" element={<SupervisorView
                        authorizationState={authorizationState}
                        setApiCallCountFunction={setApiCallCountFunction}
                        apiCallCount={apiCallCount}
                    />} />}
                    {authorizationState && <Route path="/dashboard" element={<Dashboard authorizationState={authorizationState}  setApiCallCountFunction={setApiCallCountFunction}/>} />}
                    {(typeof authorizationState == 'undefined') && <Route path="/login" element={<Login userAuthorized={userAuthorized} />} /> }
                    {authorizationState && <Route path="/map" element={<Gmap authorizationState={authorizationState} />} />}
                    <Route path="/team" element={<Team/>} />
                    <Route path="*" element={<Home />} />
                </Routes>
            </Grid>
                <Grid item xs={12}>
                    <ViewMenu isHome={isHome} setIsHome={setIsHome}/>
                </Grid>
                <Grid item xs={12}>
                    <Footer/>
                </Grid>
            </Grid>
        </>
    );
}

export default App;
