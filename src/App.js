import './App.css';
import {Banner} from "./components/common/Banner";
import SIRForm from "./components/SIRForm";
import Box from "@mui/material/Box";
import SupervisorView from "./components/SupervisorView";

function App() {
    return (
        <Box>
            <Banner/>
            <SIRForm/>

            <SupervisorView />

        </Box>
    );
}

export default App;
