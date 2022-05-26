import './App.css';
import {Banner} from "./components/common/Banner";
import Box from "@mui/material/Box";
import SIRForm from "./components/SIRForm/SIRForm";
import {forwardRef, useState} from "react";
import ViewMenu from "./components/viewMenu/ViewMenu";
import SupervisorView from "./components/SupervisorView";
import {Button, Snackbar, Typography} from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import CloseIcon from '@mui/icons-material/Close'

const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function App() {
    const [isHome, setIsHome] = useState(true);
    const [supervisorView, setSupervisorView] = useState(false);
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
        !supervisorView ?
            <Box>
                <Banner setIsHome={setIsHome} isHome={isHome}/>
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
                <SIRForm handleClick={handleClick}/>
                <ViewMenu isHome={isHome} setIsHome={setIsHome} setSupervisorView={setSupervisorView}/>
            </Box>
            :
            <Box>
                <Banner setIsHome={setIsHome} isHome={isHome}/>
                <SupervisorView/>
                <ViewMenu isHome={isHome} setIsHome={setIsHome} setSupervisorView={setSupervisorView}/>
            </Box>
    );
}

export default App;
