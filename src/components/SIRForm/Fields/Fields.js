import {Grid} from "@mui/material";
import DateOfEvent from "./DateOfEvent";
import TimeOfEvent from "./TimeOfEvent";
import LocationBox from "./LocationBox";

const Fields = () => {
    return (
        <>
            <Grid container spacing={1}>
                <DateOfEvent/>
                <TimeOfEvent/>
            </Grid>
            <LocationBox/>
        </>
    );

}
export default Fields;