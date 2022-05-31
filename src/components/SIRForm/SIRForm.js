import {Container} from "@mui/system";
import Stack from "@mui/material/Stack";
import Fields from "./Fields/Fields";
import Header from "./Header/Header";

const SIRForm = ({handleClick, open}) =>{
    return (
        <Container component={"div"}
                   maxWidth={"sm"}
        >
            <Stack>
                <Header/>
                <Fields handleClick={handleClick} open={open}/>
            </Stack>
        </Container>
    );

}
export default SIRForm;