import {Container} from "@mui/system";
import Header from "./Header";
import DateOfEvent from "./DateOfEvent";
import TimeOfEvent from "./TimeOfEvent";
import Stack from "@mui/material/Stack";
import {Grid} from "@mui/material";

const SIRForm = () =>{
    return (
        <Container component={"div"}
                   maxWidth={"sm"}
        >
            <Stack>
                <Header/>
                <Grid container spacing={1}>
                    <DateOfEvent/>
                    <TimeOfEvent/>
                </Grid>

            </Stack>
        </Container>
    );

}
export default SIRForm;