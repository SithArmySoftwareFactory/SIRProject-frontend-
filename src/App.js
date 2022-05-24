import './App.css';
import {Banner} from "./components/common/Banner";
import Box from "@mui/material/Box";
import SIRForm from "./components/SIRForm/SIRForm";
import {useState} from "react";
import ViewMenu from "./components/viewMenu/ViewMenu";

function App() {
    const [isHome, setIsHome] = useState(true);

    return (
        <Box>
            <Banner setIsHome={setIsHome} isHome={isHome}/>
            <SIRForm/>
            {/*<ViewMenu isHome={isHome} setIsHome={setIsHome}/>*/}
        </Box>
    );
}

export default App;
