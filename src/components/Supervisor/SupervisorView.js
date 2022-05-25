import {Alert, Box} from "@mui/material";
import {
    DataGrid,
    GridColumns,
    GridToolbarContainer,
    GridToolbarFilterButton,
    GridToolbarQuickFilter
} from '@mui/x-data-grid';
import React, {useState} from "react";
import Button from '@mui/material/Button';
import {rows} from './rows';
import DraggableDialog from "./DraggableDialog";
import SendToCommandDialog from "../SendToCommandDialog/SendToCommandDialog";

const SupervisorView = (props) => {
    const [pageSize, setPageSize] = React.useState(5);
    const [open, setOpen] = React.useState(false);
    const [dialog, setDialog] = useState(false);
    const [rowsChecked, setRowsChecked] = useState({}); //stores the rows checked
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
        {field: 'date', headerName: 'Event Date', headerClassName: 'dataGridHeader', fontWeight: 'bold', width: 100},
        {field: 'location', headerName: 'Location', headerClassName: 'dataGridHeader', width: 125},
        {field: 'incidentType', headerName: 'Incident Type', headerClassName: 'dataGridHeader', width: 200},
        {field: 'harm', headerName: 'Harm', headerClassName: 'dataGridHeader', width: 100,
            renderCell: params => {
            if (params.row.harm === true){
                return "Yes"
            } else {
                return "No"
            }
            }},
        {
            field: 'individuals', headerName: 'Individuals(s) Involved', headerClassName: 'dataGridHeader', width: 200,
            renderCell: (params) => {
                let rowIndividuals = params.row.individuals.trim().split(",")
                if (rowIndividuals.length === 1) {
                    return rowIndividuals[0]
                } else if (rowIndividuals[0].length >13) {
                    return rowIndividuals[0] + ", " + "+" + (rowIndividuals.length - 1)
                } else if (rowIndividuals[0].length <= 12 || (rowIndividuals[0].length + rowIndividuals[1]) <= 12) {
                    return rowIndividuals[0] + "," + rowIndividuals[1] + ", " + "+" + (rowIndividuals.length - 2)
                }
                    else {
                    return rowIndividuals[0] + ", " + "+" + (rowIndividuals.length - 1)
                }
            }
        },
        {field: 'eventType', headerName: 'Event Type', headerClassName: 'dataGridHeader', width: 225,
            renderCell: (params) => {
                let rowEventType = params.row.eventType.trim().split(",")
                if (rowEventType.length === 1) {
                    return rowEventType[0]
                } else if (rowEventType[0].length > 28) {
                    return rowEventType[0] + ", " + "+" + (rowEventType.length - 1)
                } else if (rowEventType[0].length <= 27 || (rowEventType[0].length + rowEventType[1]) <= 27) {
                    return rowEventType[0] + "," + rowEventType[1] + ", " + "+" + (rowEventType.length - 2)
                }
                else {
                    return rowEventType[0] + ", " + "+" + (rowEventType.length - 1)
                }
            } },
        {
            field: 'details',
            headerName: 'Details',
            renderCell: (params) => (
                <DraggableDialog/>
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
        <Box height="auto" width="100vw" display="flex" flexDirection="column" justifyContent="center"
             alignItems="center" sx={{justifyContent: 'center', alignItems: 'center', fontWeight: 'bold'}}>
            {(sent) ? <p className="sentSuccessMsg">
                <Alert severity="success" className="sentSuccessMsg">
                    Sent to [Commander]
                </Alert>
            </p> : null}
            <br/> <br/>
            <h3 className="dataGridHeaderTitle">Incident Reports</h3>
            <br/><br/>
            <SendToCommandDialog dialog={dialog} setDialog={setDialog} handleSent={handleSent}/>
            <Box>
            <DataGrid

                pageSize={pageSize}
                onPageSizeChange={(newPage) => setPageSize(newPage)}
                pagination
                rowsPerPageOptions={[5, 10, 15]}
                rows={rows}
                columns={columns}
                selectionModel={selectionModel}
                rowsPerPage={pageSize}
                onCellEditStop={processRowUpdate}
                checkboxSelection
                autoHeight
                disableColumnSelector
                disableDensitySelector
                onRowClick={(event) => {
                    // fetchTextAPI(event)
                }}


                onSelectionModelChange={(ids) => {
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

                    if (rowCount >= 1) {
                        setShowCommand(true);

                    } else {
                        setShowCommand(false);
                    }

                    setSelectionModel(ids);

                }}

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
                                        <table width="100%">
                                            <tbody>
                                            <tr>
                                                <td className="selectedCount">
                                                    {count} selected
                                                </td>
                                                <td className="sendToCommandBoxTableData">
                                                    <Button variant="outlined" color="primary"
                                                            className="sendUpToCmdButton" sx={{
                                                        color: "#5D6A18",
                                                        fontWeight: "bold",
                                                        borderColor: "#5D6A18"
                                                    }} onClick={() => setDialog(true)}>SEND UP TO COMMAND</Button>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </Box>
                                    :
                                    <GridToolbarContainer sx={{justifyContent: 'flex', width: '43vw'}}>
                                        <table className="tableDataGrid">
                                            <tbody>
                                            <tr>
                                                <td><h3 className="dataGridReports">Reports</h3></td>
                                                <td className="tableDataGridTD"><GridToolbarFilterButton
                                                    sx={{color: 'rgba(0, 0, 0, 0.54)'}}/>
                                                    <GridToolbarQuickFilter sx={{color: 'rgba(0, 0, 0, 0.54)'}}/></td>
                                            </tr>
                                            </tbody>
                                        </table>
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
                    width: '43vw',

                    '.css-1jbbcbn-MuiDataGrid-columnHeaderTitle': {
                        fontFamily: '\"Public Sans\" bold !important',
                    },
                    '&.MuiDataGrid-root': {
                        border: 'none',

                    },
                }}
            />

            </Box>
        </Box>)
}

export default SupervisorView;