import {Typography} from "@mui/material";

const styleHeader = {
        /* Incident Report Form */
        position: "sticky",
        /* Desktop typography/h1 */
        fontFamily: "Public Sans",
        fontStyle: "normal",
        fontWeight: "100",
        fontSize: "40px",
        lineHeight: "112px",
        /* or 280% */

        letterSpacing: "-1.5px",

        /* text/primary */

        color: "#000000"
    }

const Header = () => {

    return (
        <Typography component={"h1"} style={styleHeader}
        >Incident Report Form
        </Typography>
    )
}
export default Header;