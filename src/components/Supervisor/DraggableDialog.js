import * as React from 'react';
import Box from "@mui/material/Box";


export default function DraggableDialog({ handleClickOpen}) {

    return (
        <Box>
            <a className="viewLink" onClick={handleClickOpen}>
                VIEW
            </a>
        </Box>
    );
}
