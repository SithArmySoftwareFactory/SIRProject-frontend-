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

    return (
        <>
            <Grid container spacing={0} columns={{ xs: 4, sm: 8, md: 12 }} justifyContent="center">
                <Grid item xs={14}>
                    <Banner setIsHome={setIsHome} isHome={isHome} />
                </Grid>
                <Grid item sm={0} md={3} xs={0} />
                <Grid item sm={8} md={8}  xs={12} xl={12} >
                <Routes>
                    <Route exact path="/" element={<SIRForm/>} />
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


