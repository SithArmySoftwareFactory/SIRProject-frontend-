import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {styleBanner} from "../../themes/themes";
import ASFIcon from "./ASFIcon";


export function Banner() {
    return (
        <Box component={"div"} sx={{ flexGrow: 1 }}>
            <AppBar style={styleBanner}
            >
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                    >
                        <MenuIcon sx={{/* Vector */
                            position: "absolute",
                            left: "12.5%",
                            right: "12.5%",
                            top: "25%",
                            bottom: "25%",
                            color:"#4B5320"
                        }}
                        ></MenuIcon>
                    </IconButton>
                    <IconButton
                        size="small"
                        color="inherit"
                        aria-label="Army Software Factory Logo"
                    >
                        <ASFIcon/>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
