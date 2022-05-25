import './App.css';
import {Banner} from "./components/common/Banner";
import Box from "@mui/material/Box";
import SIRForm from "./components/SIRForm/SIRForm";
import {useState} from "react";
import ViewMenu from "./components/viewMenu/ViewMenu";
import SupervisorView from "./components/Supervisor/SupervisorView";
import SendToCommandDialog from "./components/SendToCommandDialog/SendToCommandDialog";
import {Route, Routes} from "react-router-dom";


function App() {
    const [isHome, setIsHome] = useState(true);
    const [supervisorView, setSupervisorView] = useState(false);
    const [isOpen, setIsOpen] = useState(true);

    return (
        <>
        <Banner setIsHome={setIsHome} isHome={isHome}/>
        <Routes>
            <Route exact path="/" element={<SIRForm/>}/>
            <Route path="/supervisor" element={<SupervisorView/>}/>
            </Routes>
       <ViewMenu isHome={isHome} setIsHome={setIsHome} setSupervisorView={setSupervisorView} setIsOpen={setIsOpen}/>
        </>
    );
}

export default App;

