import './App.css';
import {Banner} from "./components/common/Banner";
import Box from "@mui/material/Box";
import SIRForm from "./components/SIRForm/SIRForm";

function App() {
    return (
        <Box>
            <Banner/>
            <SIRForm/>
        </Box>
    );
}

export default App;
