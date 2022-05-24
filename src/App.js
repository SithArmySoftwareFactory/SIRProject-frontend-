import './App.css';
import {Banner} from "./components/common/Banner";
import Box from "@mui/material/Box";
import {useState} from "react";
import SupervisorView from "./components/SupervisorView";

function App() {
    const [isHome, setIsHome] = useState(true);

    return (
        <Box>
            <Banner setIsHome={setIsHome} isHome={isHome}/>
            {/*<SIRForm/>*/}
            {/*<ViewMenu isHome={isHome} setIsHome={setIsHome}/>*/}
            <SupervisorView/>
        </Box>
    );
}

export default App;
