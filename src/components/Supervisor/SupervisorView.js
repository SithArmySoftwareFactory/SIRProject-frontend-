import {Alert, Box, Paper} from "@mui/material";
import {DataGrid, GridToolbarContainer, GridToolbarFilterButton, GridToolbarQuickFilter} from '@mui/x-data-grid';
import {useState} from "react";
import React from 'react';
import {GridColumns} from "@mui/x-data-grid";
import {CheckCircleOutline, Style,} from "@mui/icons-material";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {rows} from './rows';
import Draggable from "react-draggable";
import DraggableDialog from "./DraggableDialog";
import SendToCommandDialog from "../SendToCommandDialog/SendToCommandDialog";

const SupervisorView = (props) => {
    const [pageSize, setPageSize] = React.useState(5);
    const [open, setOpen] = React.useState(false);
    const [dialog, setDialog] = useState(false);
    const [rowsChecked, setRowsChecked] = useState({});
    const [count, setCount] = useState(0);
    const [showCommand, setShowCommand] = useState(false);
    const [sent, setSent] = useState(false);
    const [selectionModel, setSelectionModel] = useState([]);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSent = (value) => {
        setSent(value);
        setSelectionModel([]);
        setCount(0);
        setShowCommand(false);
        setTimeout(() => {
            setSent(false);
        }, 3500)
    }






    // rows = [
    //     { id: 1, col1: 'Hello', col2: 'World' },
    //     { id: 2, col1: 'DataGridPro', col2: 'is Awesome' },
    //     { id: 3, col1: 'MUI', col2: 'is Amazing' },
    // ];

    const columns: GridColumns = [
        {field: 'date', headerName: 'Event Date', headerClassName: 'dataGridHeader', flex: 1, fontWeight: 'bold'},
        {field: 'location', headerName: 'Location', headerClassName: 'dataGridHeader', flex: 1},
        {field: 'incidentType', headerName: 'Incident Type',headerClassName: 'dataGridHeader',flex: 1},
        {field: 'harm', headerName: 'Harm', headerClassName: 'dataGridHeader', flex: 1},
        {field: 'individuals', headerName: 'Individuals(s) Involved',headerClassName: 'dataGridHeader', flex: 1},
        {field: 'eventType', headerName: 'Event Type', headerClassName: 'dataGridHeader', flex: 1},
        {
            field: 'details',
            headerName: 'Details',
            flex: 1,
            renderCell: (params) => (
                <DraggableDialog />
            )

        }
    ];

    const processRowUpdate = (event) => {
        //The current state
        if (event.row !== null) {
            //set State
        }

    }
    const handleRowEditCommit = async (params) => {
        const id = params.id;
        const key = params.field;
        const value = params.value;

        // send patch request -> patchMe(id, key, value)


    };
    return (
        <Box height="auto" width="100vw" display="flex" flexDirection="column" justifyContent="center" alignItems="center" sx={{justifyContent:'center', alignItems:'center', fontWeight:'bold'}}>
            {(sent) ? <p className="sentSuccessMsg">
                <Alert severity="success" className="sentSuccessMsg">
                Sent to [Commander]
                </Alert>
            </p> : null}
            <br /> <br />
            <h1 className="dataGridHeader">Incident Reports</h1>
            <br /><br />
            <SendToCommandDialog dialog={dialog} setDialog={setDialog} handleSent={handleSent}/>
        <DataGrid
            rows={rows}
            columns={columns}
            pageSize={pageSize}
            onPageSizeChange={(newPage) => setPageSize(newPage)}
            rowsPerPageOptions={[5, 10, 15]}
            onCellEditStop={processRowUpdate}
            // experimentalFeatures={{newEditingApi: true}}
            pagination
            checkboxSelection
            autoHeight
            disableColumnSelector
            disableDensitySelector

            onRowClick={(event) => {
                // fetchTextAPI(event)
            }}


            onSelectionModelChange={(ids) =>
            {
                let rowCount = 0;
                const selectedIDs = new Set(ids);
                const selectedRowData = rows.filter((row) =>
                    selectedIDs.has(row.id),
                );

                 setRowsChecked(selectedRowData);
                for (let selectedRowDataKey in selectedRowData) {
                    rowCount++
                }
                setCount(rowCount);
                if (rowCount >= 1){
                    setShowCommand(true);

                } else {
                    setShowCommand(false);
                }
                setSelectionModel(ids)
            }}
            selectionModel={selectionModel}
            localeText={{
                toolbarFilters: "",
                footerRowSelected: () => {
                    return ("");
                }
            }}

            components={{
                Toolbar: () => {
                    return (
                        <>
                            {(showCommand) ?
                                <Box className="sendToCommandBox">
                                <table width="100%" >
                                    <tbody>
                                    <tr>
                                        <td className="selectedCount">
                                            {count} selected
                                        </td>
                                        <td className="sendToCommandBoxTableData">
                                            <Button variant="outlined" color="primary" className="sendUpToCmdButton" sx={{color: "#5D6A18", fontWeight: "bold", borderColor: "#5D6A18"}} onClick={() => setDialog(true)}> SEND UP TO COMMAND </Button>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </Box>
                                :
                            <GridToolbarContainer sx={{justifyContent: 'flex', width:'50vw'}}>
                                <table className="tableDataGrid"><tbody><tr>
                                    <td> <h3 className="dataGridReports">Reports</h3></td>
                                    <td className="tableDataGridTD"> <GridToolbarFilterButton sx={{color:'rgba(0, 0, 0, 0.54)'}}/>
                                        <GridToolbarQuickFilter sx={{color:'rgba(0, 0, 0, 0.54)'}}/></td>
                                </tr></tbody></table>

                            </GridToolbarContainer>
                                }
                        </>)
                }
            }}

            componentsProps={{
                toolbar: {
                    showQuickFilter: true,
                    quickFilterProps: {debounceMs: 500},
                },
            }}


            onCellEditCommit={(params) => setTimeout(handleRowEditCommit(params), 1000)}
            sx={{
                width:'50vw',
                '.css-1jbbcbn-MuiDataGrid-columnHeaderTitle': {
                    fontFamily: '\"Public Sans\" bold !important',
                },
                '&.MuiDataGrid-root': {
                    border: 'none',

                },
            }}
             />


    </Box>)
}

export default SupervisorView;