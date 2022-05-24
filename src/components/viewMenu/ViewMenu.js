import React, {useState} from 'react';
import {Button, Menu, MenuItem, Typography} from "@mui/material";
import {styleMenu, styleMenuItems} from "../../themes/themes";

const ViewMenu = ({isHome, setIsHome}) => {
    const [supervisor, setSupervisor] = useState(false);

    return (
        <Menu open={!isHome} sx={styleMenu} elevation={0}>
            <MenuItem sx={styleMenuItems}>
                <Button sx={{color: 'black'}} onClick={setIsHome(!isHome)}>
                    <Typography>
                        Reporter
                    </Typography>
                </Button>
            </MenuItem>
            <MenuItem sx={styleMenuItems}>
                <Button sx={{color: 'black'}} onClick={() => setSupervisor(true)}>
                    <Typography>
                        Supervisor
                    </Typography>
                </Button>
            </MenuItem>
        </Menu>
    );
};

export default ViewMenu;
