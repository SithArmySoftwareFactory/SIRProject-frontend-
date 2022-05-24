import './App.css';
import {Banner} from "./components/common/Banner";
import Box from "@mui/material/Box";
import SIRForm from "./components/SIRForm/SIRForm";
import {useState} from "react";
import ViewMenu from "./components/viewMenu/ViewMenu";
import SupervisorView from "./components/Supervisor/SupervisorView";
import SIRForm from "./components/SIRForm/SIRForm";


function App() {
    const [isHome, setIsHome] = useState(true);
    const [supervisorView, setSupervisorView] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

   if (!isOpen) {
    return (
        !supervisorView ?
        <Box>
            <Banner setIsHome={setIsHome} isHome={isHome}/>
            <SIRForm/>
            <ViewMenu isHome={isHome} setIsHome={setIsHome} setSupervisorView={setSupervisorView} setIsOpen={setIsOpen}/>
        </Box>
            :
            <Box>
                <Banner setIsHome={setIsHome} isHome={isHome}/>
                <SupervisorView/>
                <ViewMenu isHome={isHome} setIsHome={setIsHome} setSupervisorView={setSupervisorView} setIsOpen={setIsOpen} />
            </Box>

    );}
   else {
       return <SendToCommandDialog isOpen={isOpen} setIsOpen={setIsOpen}/>
   }
}

export default App;

