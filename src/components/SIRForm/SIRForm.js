import {Container} from "@mui/system";
import Stack from "@mui/material/Stack";
import Fields from "./Fields/Fields";
import Header from "./Header/Header";

const SIRForm = ({handleClick, open, defaultValues}) =>{
    return (
        <Container component={"div"}
                   maxWidth={"sm"}
        >
            <Stack>
                <Header/>
                <Fields handleClick={handleClick} open={open} defaultValues={defaultValues}/>
            </Stack>
        </Container>
    );

}
export default SIRForm;