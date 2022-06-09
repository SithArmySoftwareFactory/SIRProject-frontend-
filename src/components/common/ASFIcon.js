import Box from "@mui/material/Box";
import {ASWFImage} from "../../constants/Constants";


const ASFIcon = () => {

    return (
        <>
            <a href="https://armyfuturescommand.com/software-factory/" target="_blank" rel="noreferrer">
                <Box component={"img"}
                     src={ASWFImage}
                     alt={"Army Software Factory Icon"}
                     paddingLeft={3}
                     height={40}
                />
            </a>
        </>

    )
}

export default ASFIcon;
