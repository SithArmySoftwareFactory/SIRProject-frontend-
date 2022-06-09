import {Container} from "@mui/system";
import Stack from "@mui/material/Stack";
import Fields from "./Fields/Fields";
import Header from "./Header/Header";
import SIRPDFMagic from "../SIRToPDF/SIRPDFMagic";
import Button from "@mui/material/Button";


const SIRForm = ({handleClick, open, defaultValues, fullWidthFunction, fullWidth, displayInDialogOnly, handlePatchChange, setSingleReportViewFunction}) =>{
    return (
        <>
            {(fullWidth)
                ?
                <SIRPDFMagic defaultValues={defaultValues}/>
                :
                <>
                    { (displayInDialogOnly === 'dialog') ? <Button onClick={() => fullWidthFunction(true)}>View as DA Form</Button>: null}
                    <Container component={"div"} maxWidth={"sm"}>
                        <Stack>
                            <Header/>
                            <Fields handleClick={handleClick} open={open} defaultValues={defaultValues}  handlePatchChange={handlePatchChange} setSingleReportViewFunction={setSingleReportViewFunction}/>
                        </Stack>
                    </Container>
                </>
            }
</>    );

}
export default SIRForm;