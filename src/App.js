import './App.css';
import {Banner} from "./components/common/Banner";
import SIRForm from "./components/SIRForm";
import Box from "@mui/material/Box";

function App() {
    return (
        <Box>
            <Banner/>
            <SIRForm/>
        </Box>
    );
}

export default App;
