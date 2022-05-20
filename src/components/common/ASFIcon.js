import Box from "@mui/material/Box";
import {ASWFImage} from "../../constants/Constants";


const ASFIcon = () => {

    return (

        <Box component={"img"}
             src={ASWFImage}
             alt={"Army Software Factory Icon"}
             paddingLeft={3}
             height={40}
        />
    )
}

export default ASFIcon;