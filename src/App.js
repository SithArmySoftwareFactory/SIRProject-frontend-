import './App.css';
import {Banner} from "./components/common/Banner";
import Box from "@mui/material/Box";
import {useState} from "react";
import ViewMenu from "./components/viewMenu/ViewMenu";
import SupervisorView from "./components/SupervisorView";
import SIRForm from "./components/SIRForm/SIRForm";

function App() {
    const [isHome, setIsHome] = useState(true);
    const [supervisorView, setSupervisorView] = useState(false);

    return (
        !supervisorView ?
        <Box>
            <Banner setIsHome={setIsHome} isHome={isHome}/>
            <SIRForm/>
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
