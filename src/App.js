import './App.css';
import {Banner} from "./components/common/Banner";
import SIRForm from "./components/SIRForm/SIRForm";
import {useState} from "react";
import ViewMenu from "./components/viewMenu/ViewMenu";
import SupervisorView from "./components/Supervisor/SupervisorView";
import {Route, Routes} from "react-router-dom";
import {Grid} from "@mui/material";


function App() {
    const [isHome, setIsHome] = useState(true);
    const [supervisorView, setSupervisorView] = useState(false);
    const [isOpen, setIsOpen] = useState(true);

    return (
        <>
            <Grid container columns={12} spacing={2}>
                <Grid item xs={12}>
                    <Banner setIsHome={setIsHome} isHome={isHome}/>
                </Grid>
                <Grid item xl={12}>
                <Routes>
                    <Route exact path="/" element={<SIRForm/>}/>
                     <Route path="/supervisor" element={<SupervisorView/>}/>
                </Routes>
            </Grid>
                <Grid item xs={12}>
                    <ViewMenu isHome={isHome} setIsHome={setIsHome} setSupervisorView={setSupervisorView}
                              setIsOpen={setIsOpen}/>
                </Grid>
            </Grid>
        </>
    );
}

export default App;


