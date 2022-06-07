import {Alert, Box, Divider} from "@mui/material";
import {
    DataGrid,
    GridColumns,
    GridToolbarContainer,
    GridToolbarFilterButton,
    GridToolbarQuickFilter
} from '@mui/x-data-grid';
import React, {useEffect, useState} from "react";
import Button from '@mui/material/Button';
// import {rows} from './rows'; test data if not getting data from Get Request
import DraggableDialog from "./DraggableDialog";
import SendToCommandDialog from "../SendToCommandDialog/SendToCommandDialog";
import {apiGetIncident} from "../../api/APICalls";
import Draggable from "react-draggable";
import Paper from "@mui/material/Paper";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import DialogContent from "@mui/material/DialogContent";
import SIRForm from "../SIRForm/SIRForm";
import DialogActions from "@mui/material/DialogActions";
import Dialog from "@mui/material/Dialog";

function PaperComponent(props) {
    return (
        <Draggable
            handle="#draggable-dialog-title"
            cancel={'[class*="MuiDialogContent-root"]'}
        >
            <Paper {...props} />
        </Draggable>
    );
}


const SupervisorView = ({authorizationState,  setApiCallCountFunction, apiCallCount}) => {
    const [pageSize, setPageSize] = React.useState(5);
    const [dialog, setDialog] = useState(false);
    const [rowsChecked, setRowsChecked] = useState({}); //stores the rows checked
    const [count, setCount] = useState(0);
    const [showCommand, setShowCommand] = useState(false);
    const [sent, setSent] = useState(false);
    const [selectionModel, setSelectionModel] = useState([]);
    const [rowViewed, setRowViewed] = useState(null);
    const [rowsFromApi, setRowsFromApi] = useState([]);
    const [isSIRFormOpen,setIsSIRFormOpen] = useState(false);
    const [fullWidth, setFullWidth] = useState(false);
    const [displayInDialogOnly, setDisplayInDialogOnly] = useState('dialog');

    const fullWidthFunction = (value) => {
        setFullWidth(value);
        setDisplayInDialogOnly('dialog');
    }

    //Get Data from backend
    const fetchIncidentAPI = () => {
        apiGetIncident(0, authorizationState)
            .then((r) =>  {
                setRowsFromApi(r.data);
            })
            .catch((error) => console.log(error));
    };
    useEffect(fetchIncidentAPI, []);
    let rows = rowsFromApi;


    //Function to handle the rowsChecked state. Items in rowsChecked state should be sent to the Commander
    //and a success message displayed
    const handleSent = (value) => {
        setSent(value);
        setSelectionModel([]);
        setCount(0);
        setShowCommand(false);
        setTimeout(() => {
            setSent(false);
        }, 3500)
    }
    const handleClose = () => {
        setIsSIRFormOpen(false);
    };

    const handleClickOpen = () => {
        setIsSIRFormOpen(true);
    };

    //define how the fetched row data columns are displayed
    //the field must match the key from rows, if there is a row named date, a column for date should
    //be defined, this logic follows for all keys inside of rows. Rows is defined in rows.js, but this data
    //will be fetched from the backend i.e. rows = axios.get(...api/incidents...)
    const columns: GridColumns = [
        {field: 'id', headerName: 'ID', width: 50, hide: true},
        {
            field: 'date',
            headerName: 'Event Date',
            headerClassName: 'dataGridHeader',
            fontWeight: 'bold',
            flex: 1,
            minWidth: 100,
        },
        {field: 'location', headerName: 'Location', headerClassName: 'dataGridHeader', flex: 1, minWidth: 105},
        {field: 'incidentType', headerName: 'Incident Type', headerClassName: 'dataGridHeader', flex: 1, minWidth: 180},
        {
            field: 'harm', headerName: 'Harm', headerClassName: 'dataGridHeader', flex: 1,
            renderCell: params => {
                //Display Yes or No depending on boolean value
                if (params.row.harm === true) {
                    return "Yes"
                } else {
                    return "No"
                }
            }
        },
        {
            field: 'individuals',
            headerName: 'Individuals(s) Involved',
            headerClassName: 'dataGridHeader',
            flex: 1,
            minWidth: 180,
            renderCell: (params) => {
                //Splits the individual String by comma
                //counts the length of the array, if it is 1 then return the name
                let rowIndividuals = []; //account for async
                if (params.row.individuals !== null) {
                    rowIndividuals = params.row.individuals.trim().split(",")
                }
                if (rowIndividuals.length === 1) {
                    return rowIndividuals[0]
                } else if (rowIndividuals[0].length > 13) {
                    //if the individual string length is greater than 13, return the 1 individual plus the count of
                    //remaining individuals in the array, subtract 1 from the length, because the count does not need
                    //to include the individual who is already printed out, so we only need to show the remaining count
                    return `${rowIndividuals[0]}, +${rowIndividuals.length - 1}`
                } else if (rowIndividuals[0].length <= 12 || (rowIndividuals[0].length + rowIndividuals[1]) <= 12) {
                    //display two individuals for a combined length of two strings, subtract 2 from the length
                    //because we are displaying two individuals from the list. Show the remaining count.
                    let returnCount = (rowIndividuals.length - 2)
                    let returnText = '';
                    if (returnCount > 0)
                        returnText = `, +${returnCount}`;
                    else {
                        returnText = '';
                    }
                    return `${rowIndividuals[0]},${rowIndividuals[1]}${returnText}`
                } else {
                    //no other conditions met, show the first item of the array and a count
                    return `${rowIndividuals[0]}, +${rowIndividuals.length - 1}`
                }
            }
        },
        {
            field: 'eventType', headerName: 'Event Type', headerClassName: 'dataGridHeader', flex: 1, minWidth: 230,
            renderCell: (params) => {
                //same logic as above but adjusted for string length
                let rowEventType = [];
                if (params.row.eventType !== null) {
                    rowEventType = params.row.eventType.trim().split(",")
                }
                if (rowEventType.length === 1) {
                    return rowEventType[0]
                } else if (rowEventType[0].length > 28) {
                    return `${rowEventType[0]}, +${rowEventType.length - 1}`
                } else if (rowEventType[0].length <= 27 || (rowEventType[0].length + rowEventType[1]) <= 27) {
                    let returnCount = (rowEventType.length - 2)
                    let returnText = '';
                    if (returnCount > 0)
                        returnText = `, +${returnCount}`;
                    else {
                        returnText = '';
                    }
                    return `${rowEventType[0]},${rowEventType[1]}${returnText}`
                } else {
                    return `${rowEventType[0]}, +${rowEventType.length - 1}`
                }
            }
        },
        {
            field: 'details',
            headerName: 'Details',
            flex: 1,
            renderCell: () => (<DraggableDialog rowViewed={rowViewed} handleClickOpen={handleClickOpen}/>),
        }
    ];
    //If we implement editing rows directly
    const processRowUpdate = (event) => {
        //The current state
        if (event.row !== null) {
            //set State
        }
    }
    //If we implement editing rows directly
    const handleRowEditCommit = async () => {
        // const id = params.id;
        // const key = params.field;
        // const value = params.value;
        // send patch request -> patchMe(id, key, value)
    };

    return (
        <Box height="auto" width="100%"  display="flex"sx={{textAlign:'center', justifyContent:'center', }}>
            <Box minWidth="75%" sx={{backgroundColor:'#fff'}}>
                {(sent) ?
                    <Alert severity="success" className="sentSuccessMsg">
                        Sent to [Commander]
                    </Alert>
                    :
                    null
                }
                <br/> <br/>
                <h3 className="dataGridHeaderTitle"><strong>Incident Reports</strong></h3>
                <br/><br/>
                <SendToCommandDialog dialog={dialog} setDialog={setDialog} handleSent={handleSent}/>
                {isSIRFormOpen &&
                    <Dialog
                        open={isSIRFormOpen}
                        onClose={handleClose}
                        PaperComponent={PaperComponent}
                        aria-labelledby="draggable-dialog-title"
                        fullScreen={fullWidth}
                        fullWidth={true}
                    >
                        <DialogTitle style={{cursor: 'move'}} id="draggable-dialog-title">
                            Incident Report
                            <IconButton
                                aria-label="close"
                                onClick={handleClose}
                                sx={{
                                    position: 'absolute',
                                    right: 8,
                                    top: 8,
                                    color: (theme) => theme.palette.grey[500],
                                }}
                            >
                                <CloseIcon/>
                            </IconButton>
                        </DialogTitle>
                        <DialogContent>
                            <SIRForm open={isSIRFormOpen} defaultValues={rowViewed} fullWidthFunction={fullWidthFunction} fullWidth={fullWidth} displayInDialogOnly={displayInDialogOnly}/>
                        </DialogContent>
                        <Divider/>
                        <DialogActions>
                            <Button onClick={handleClose} style={{color: "#5D6A18"}}>CANCEL</Button>
                            {(fullWidth) ? <Button autoFocus onClick={() => setFullWidth(false)} style={{color: "#5D6A18"}}>
                                RETURN
                                </Button> :
                            <Button autoFocus onClick={handleClose} style={{color: "#5D6A18"}}>
                                SAVE
                            </Button> }
                        </DialogActions>
                    </Dialog>
                }
                <DataGrid style={{backgroundColor: "white"}}
                    className="dataGrid"
                    //get page size from state
                    pageSize={pageSize}
                    //function to change page size according to rowsPerPage
                    onPageSizeChange={(newPage) => setPageSize(newPage)}
                    pagination
                    //options for dropdown that selects how many pages to display
                    rowsPerPageOptions={[5, 10, 15]}

                    //rows should be fetched from api
                    rows={rows}
                    //columns prop defines the data structure of the rows
                    columns={columns}
                    selectionModel={selectionModel}
                    //additional pageSize handling
                    rowsPerPage={pageSize}
                    //For cell editing, if implemented
                    onCellEditStop={processRowUpdate}
                    //various settings to manage display and interaction
                    checkboxSelection
                    autoHeight
                    disableColumnSelector
                    disableDensitySelector
                    disableSelectionOnClick
                    onRowClick={(event) => {
                        // fetchTextAPI(event)
                        //here we can handle a specific event for a row being clicked
                        setRowViewed(event.row)
                    }}
                    onSelectionModelChange={(ids) => {
                        //initial count of rows
                        let rowCount = 0;

                        const selectedIDs = new Set(ids);
                        const selectedRowData = rows.filter((row) =>
                            selectedIDs.has(row.id),
                        );
                        //keep track of ever row checked, store in state for form submit
                        setRowsChecked(selectedRowData);
                        //count how many rows are checked, displayed above data grid
                        for (let selectedRowDataKey in selectedRowData) {
                            rowCount++
                        }
                        //set the state of the rows counted
                        setCount(rowCount);
                        //if a row is selected, the row count wil increase, and we can display
                        //the element that contains the row count text,  managed by state
                        if (rowCount >= 1) {
                            setShowCommand(true);

                        } else {
                            setShowCommand(false);
                        }
                        //pass in the information into the model selection, this is given back
                        //to the Data grid, to help state
                        setSelectionModel(ids);
                    }}
                    //remove various unwanted fields
                    localeText={{
                        toolbarFilters: "",
                        footerRowSelected: () => {
                            return ("");
                        }
                    }}

                    //render a custom toolbar
                    components={{
                        Toolbar: () => {
                            //if showCommand is set to true, a row has been selected.
                            //show sent to command toolbar,
                            //otherwise show the search and filter toolbar
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
                                                        }} onClick={() => setDialog(true)}>SEND UP TO
                                                            COMMAND</Button>
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </Box>
                                        :
                                        <GridToolbarContainer sx={{justifyContent: 'flex', width: '100%'}}>
                                            <table className="tableDataGrid">
                                                <tbody>
                                                <tr>
                                                    <td><h3 className="dataGridReports">Reports</h3></td>
                                                    <td className="tableDataGridTD"><GridToolbarFilterButton
                                                        sx={{color: 'rgba(0, 0, 0, 0.54)'}}/>
                                                        <GridToolbarQuickFilter
                                                            sx={{color: 'rgba(0, 0, 0, 0.54)'}}/></td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </GridToolbarContainer>
                                    }
                                </>)
                        }
                    }}
                    //Filter for Data grid
                    componentsProps={{
                        toolbar: {
                            showQuickFilter: true,
                            quickFilterProps: {debounceMs: 500},
                        },
                    }}
                    //This handles editing just a cell value, this has not been implemented
                    onCellEditCommit={(params) => setTimeout(handleRowEditCommit(params), 1000)}
                    //various styling, width set to 100% and display handled by App.js Grid component
                    sx={{

                        justifyContent: 'center',
                        width: '100%',

                        '.css-1jbbcbn-MuiDataGrid-columnHeaderTitle': {
                            fontFamily: "Public Sans",
                        },
                        '&.MuiDataGrid-root': {
                            border: 'none',
                        },
                    }}
                /></Box>
        </Box>)
}

export default SupervisorView;