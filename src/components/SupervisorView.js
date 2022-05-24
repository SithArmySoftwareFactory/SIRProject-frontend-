import {Box} from "@mui/material";
import {DataGrid, GridToolbarContainer, GridToolbarFilterButton, GridToolbarQuickFilter} from '@mui/x-data-grid';
import {useState} from "react";
import React from 'react';
import {GridColumns} from "@mui/x-data-grid";
import {Style, } from "@mui/icons-material";


const SupervisorView = (props) => {
    const [pageSize, setPageSize] = React.useState(5);
    //test data
    const rows = [
        {

            id: 1,
            date: 'test',
            location: 'test',
            incidentType: 'Other',
            harm: 'test',
            eventType: 'test',
            individuals: 'test',
            effects: 'test',
            time: 'test',
            patientSSN: 'test',
            patientPhone: 'test',
            patientAddress: 'test',
            patientName: 'test',
            witness1Name: 'test',
            witness1Phone: 'test',
            witness2Name: 'test',
            witness2Phone: 'test',
            witness3Name: 'test',
            witness3Phone: 'test',
            department: 'test',
            description: 'test',
            prevention: 'test',
            command: 'test'
        },
        {

            id: 2,
            date: 'test',
            location: 'test',
            incidentType: 'Search For Me',
            harm: 'test',
            eventType: 'test',
            individuals: 'test',
            effects: 'test',
            time: 'test',
            patientSSN: 'test',
            patientPhone: 'test',
            patientAddress: 'test',
            patientName: 'test',
            witness1Name: 'test',
            witness1Phone: 'test',
            witness2Name: 'test',
            witness2Phone: 'test',
            witness3Name: 'test',
            witness3Phone: 'test',
            department: 'test',
            description: 'test',
            prevention: 'test',

            command: 'test'
        }
        , {

            id: 3,
            date: 'test',
            location: 'test',
            incidentType: 'Other',
            harm: 'test',
            eventType: 'test',
            individuals: 'test',
            effects: 'test',
            time: 'test',
            patientSSN: 'test',
            patientPhone: 'test',
            patientAddress: 'test',
            patientName: 'test',
            witness1Name: 'test',
            witness1Phone: 'test',
            witness2Name: 'test',
            witness2Phone: 'test',
            witness3Name: 'test',
            witness3Phone: 'test',
            department: 'test',
            description: 'test',
            prevention: 'test',

            command: 'test'
        }

        , {

            id: 4,
            date: 'test',
            location: 'test',
            incidentType: 'Other',
            harm: 'test',
            eventType: 'test',
            individuals: 'test',
            effects: 'test',
            time: 'test',
            patientSSN: 'test',
            patientPhone: 'test',
            patientAddress: 'test',
            patientName: 'test',
            witness1Name: 'test',
            witness1Phone: 'test',
            witness2Name: 'test',
            witness2Phone: 'test',
            witness3Name: 'test',
            witness3Phone: 'test',
            department: 'test',
            description: 'test',
            prevention: 'test',

            command: 'test'
        }        , {

            id: 5,
            date: 'test',
            location: 'test',
            incidentType: 'Other',
            harm: 'test',
            eventType: 'test',
            individuals: 'test',
            effects: 'test',
            time: 'test',
            patientSSN: 'test',
            patientPhone: 'test',
            patientAddress: 'test',
            patientName: 'test',
            witness1Name: 'test',
            witness1Phone: 'test',
            witness2Name: 'test',
            witness2Phone: 'test',
            witness3Name: 'test',
            witness3Phone: 'test',
            department: 'test',
            description: 'test',
            prevention: 'test',

            command: 'test'
        }        , {

            id: 6,
            date: 'test',
            location: 'test',
            incidentType: 'Other',
            harm: 'test',
            eventType: 'test',
            individuals: 'test',
            effects: 'test',
            time: 'test',
            patientSSN: 'test',
            patientPhone: 'test',
            patientAddress: 'test',
            patientName: 'test',
            witness1Name: 'test',
            witness1Phone: 'test',
            witness2Name: 'test',
            witness2Phone: 'test',
            witness3Name: 'test',
            witness3Phone: 'test',
            department: 'test',
            description: 'test',
            prevention: 'test',

            command: 'test'
        }
        , {

            id: 6,
            date: 'test',
            location: 'test',
            incidentType: 'Other',
            harm: 'test',
            eventType: 'test',
            individuals: 'test',
            effects: 'test',
            time: 'test',
            patientSSN: 'test',
            patientPhone: 'test',
            patientAddress: 'test',
            patientName: 'test',
            witness1Name: 'test',
            witness1Phone: 'test',
            witness2Name: 'test',
            witness2Phone: 'test',
            witness3Name: 'test',
            witness3Phone: 'test',
            department: 'test',
            description: 'test',
            prevention: 'test',

            command: 'test'
        }
        , {

            id: 6,
            date: 'test',
            location: 'test',
            incidentType: 'Other',
            harm: 'test',
            eventType: 'test',
            individuals: 'test',
            effects: 'test',
            time: 'test',
            patientSSN: 'test',
            patientPhone: 'test',
            patientAddress: 'test',
            patientName: 'test',
            witness1Name: 'test',
            witness1Phone: 'test',
            witness2Name: 'test',
            witness2Phone: 'test',
            witness3Name: 'test',
            witness3Phone: 'test',
            department: 'test',
            description: 'test',
            prevention: 'test',

            command: 'test'
        }
        , {

            id: 6,
            date: 'test',
            location: 'test',
            incidentType: 'Other',
            harm: 'test',
            eventType: 'test',
            individuals: 'test',
            effects: 'test',
            time: 'test',
            patientSSN: 'test',
            patientPhone: 'test',
            patientAddress: 'test',
            patientName: 'test',
            witness1Name: 'test',
            witness1Phone: 'test',
            witness2Name: 'test',
            witness2Phone: 'test',
            witness3Name: 'test',
            witness3Phone: 'test',
            department: 'test',
            description: 'test',
            prevention: 'test',

            command: 'test'
        }
        , {

            id: 6,
            date: 'test',
            location: 'test',
            incidentType: 'Other',
            harm: 'test',
            eventType: 'test',
            individuals: 'test',
            effects: 'test',
            time: 'test',
            patientSSN: 'test',
            patientPhone: 'test',
            patientAddress: 'test',
            patientName: 'test',
            witness1Name: 'test',
            witness1Phone: 'test',
            witness2Name: 'test',
            witness2Phone: 'test',
            witness3Name: 'test',
            witness3Phone: 'test',
            department: 'test',
            description: 'test',
            prevention: 'test',

            command: 'test'
        }
        , {

            id: 6,
            date: 'test',
            location: 'test',
            incidentType: 'Other',
            harm: 'test',
            eventType: 'test',
            individuals: 'test',
            effects: 'test',
            time: 'test',
            patientSSN: 'test',
            patientPhone: 'test',
            patientAddress: 'test',
            patientName: 'test',
            witness1Name: 'test',
            witness1Phone: 'test',
            witness2Name: 'test',
            witness2Phone: 'test',
            witness3Name: 'test',
            witness3Phone: 'test',
            department: 'test',
            description: 'test',
            prevention: 'test',

            command: 'test'
        }   , {

            id: 6,
            date: 'test',
            location: 'test',
            incidentType: 'Other',
            harm: 'test',
            eventType: 'test',
            individuals: 'test',
            effects: 'test',
            time: 'test',
            patientSSN: 'test',
            patientPhone: 'test',
            patientAddress: 'test',
            patientName: 'test',
            witness1Name: 'test',
            witness1Phone: 'test',
            witness2Name: 'test',
            witness2Phone: 'test',
            witness3Name: 'test',
            witness3Phone: 'test',
            department: 'test',
            description: 'test',
            prevention: 'test',

            command: 'test'
        }   , {

            id: 6,
            date: 'test',
            location: 'test',
            incidentType: 'Other',
            harm: 'test',
            eventType: 'test',
            individuals: 'test',
            effects: 'test',
            time: 'test',
            patientSSN: 'test',
            patientPhone: 'test',
            patientAddress: 'test',
            patientName: 'test',
            witness1Name: 'test',
            witness1Phone: 'test',
            witness2Name: 'test',
            witness2Phone: 'test',
            witness3Name: 'test',
            witness3Phone: 'test',
            department: 'test',
            description: 'test',
            prevention: 'test',

            command: 'test'
        }   , {

            id: 6,
            date: 'test',
            location: 'test',
            incidentType: 'Other',
            harm: 'test',
            eventType: 'test',
            individuals: 'test',
            effects: 'test',
            time: 'test',
            patientSSN: 'test',
            patientPhone: 'test',
            patientAddress: 'test',
            patientName: 'test',
            witness1Name: 'test',
            witness1Phone: 'test',
            witness2Name: 'test',
            witness2Phone: 'test',
            witness3Name: 'test',
            witness3Phone: 'test',
            department: 'test',
            description: 'test',
            prevention: 'test',

            command: 'test'
        }   , {

            id: 6,
            date: 'test',
            location: 'test',
            incidentType: 'Other',
            harm: 'test',
            eventType: 'test',
            individuals: 'test',
            effects: 'test',
            time: 'test',
            patientSSN: 'test',
            patientPhone: 'test',
            patientAddress: 'test',
            patientName: 'test',
            witness1Name: 'test',
            witness1Phone: 'test',
            witness2Name: 'test',
            witness2Phone: 'test',
            witness3Name: 'test',
            witness3Phone: 'test',
            department: 'test',
            description: 'test',
            prevention: 'test',

            command: 'test'
        }   , {

            id: 6,
            date: 'test',
            location: 'test',
            incidentType: 'Other',
            harm: 'test',
            eventType: 'test',
            individuals: 'test',
            effects: 'test',
            time: 'test',
            patientSSN: 'test',
            patientPhone: 'test',
            patientAddress: 'test',
            patientName: 'test',
            witness1Name: 'test',
            witness1Phone: 'test',
            witness2Name: 'test',
            witness2Phone: 'test',
            witness3Name: 'test',
            witness3Phone: 'test',
            department: 'test',
            description: 'test',
            prevention: 'test',

            command: 'test'
        }   , {

            id: 6,
            date: 'test',
            location: 'test',
            incidentType: 'Other',
            harm: 'test',
            eventType: 'test',
            individuals: 'test',
            effects: 'test',
            time: 'test',
            patientSSN: 'test',
            patientPhone: 'test',
            patientAddress: 'test',
            patientName: 'test',
            witness1Name: 'test',
            witness1Phone: 'test',
            witness2Name: 'test',
            witness2Phone: 'test',
            witness3Name: 'test',
            witness3Phone: 'test',
            department: 'test',
            description: 'test',
            prevention: 'test',

            command: 'test'
        }
        , {

            id: 6,
            date: 'test',
            location: 'test',
            incidentType: 'Other',
            harm: 'test',
            eventType: 'test',
            individuals: 'test',
            effects: 'test',
            time: 'test',
            patientSSN: 'test',
            patientPhone: 'test',
            patientAddress: 'test',
            patientName: 'test',
            witness1Name: 'test',
            witness1Phone: 'test',
            witness2Name: 'test',
            witness2Phone: 'test',
            witness3Name: 'test',
            witness3Phone: 'test',
            department: 'test',
            description: 'test',
            prevention: 'test',

            command: 'test'
        }
        , {

            id: 6,
            date: 'test',
            location: 'test',
            incidentType: 'Other',
            harm: 'test',
            eventType: 'test',
            individuals: 'test',
            effects: 'test',
            time: 'test',
            patientSSN: 'test',
            patientPhone: 'test',
            patientAddress: 'test',
            patientName: 'test',
            witness1Name: 'test',
            witness1Phone: 'test',
            witness2Name: 'test',
            witness2Phone: 'test',
            witness3Name: 'test',
            witness3Phone: 'test',
            department: 'test',
            description: 'test',
            prevention: 'test',

            command: 'test'
        }
        , {

            id: 6,
            date: 'test',
            location: 'test',
            incidentType: 'Other',
            harm: 'test',
            eventType: 'test',
            individuals: 'test',
            effects: 'test',
            time: 'test',
            patientSSN: 'test',
            patientPhone: 'test',
            patientAddress: 'test',
            patientName: 'test',
            witness1Name: 'test',
            witness1Phone: 'test',
            witness2Name: 'test',
            witness2Phone: 'test',
            witness3Name: 'test',
            witness3Phone: 'test',
            department: 'test',
            description: 'test',
            prevention: 'test',

            command: 'test'
        }
        , {

            id: 6,
            date: 'test',
            location: 'test',
            incidentType: 'Other',
            harm: 'test',
            eventType: 'test',
            individuals: 'test',
            effects: 'test',
            time: 'test',
            patientSSN: 'test',
            patientPhone: 'test',
            patientAddress: 'test',
            patientName: 'test',
            witness1Name: 'test',
            witness1Phone: 'test',
            witness2Name: 'test',
            witness2Phone: 'test',
            witness3Name: 'test',
            witness3Phone: 'test',
            department: 'test',
            description: 'test',
            prevention: 'test',

            command: 'test'
        }
        , {

            id: 6,
            date: 'test',
            location: 'test',
            incidentType: 'Other',
            harm: 'test',
            eventType: 'test',
            individuals: 'test',
            effects: 'test',
            time: 'test',
            patientSSN: 'test',
            patientPhone: 'test',
            patientAddress: 'test',
            patientName: 'test',
            witness1Name: 'test',
            witness1Phone: 'test',
            witness2Name: 'test',
            witness2Phone: 'test',
            witness3Name: 'test',
            witness3Phone: 'test',
            department: 'test',
            description: 'test',
            prevention: 'test',

            command: 'test'
        }
        , {

            id: 6,
            date: 'test',
            location: 'test',
            incidentType: 'Other',
            harm: 'test',
            eventType: 'test',
            individuals: 'test',
            effects: 'test',
            time: 'test',
            patientSSN: 'test',
            patientPhone: 'test',
            patientAddress: 'test',
            patientName: 'test',
            witness1Name: 'test',
            witness1Phone: 'test',
            witness2Name: 'test',
            witness2Phone: 'test',
            witness3Name: 'test',
            witness3Phone: 'test',
            department: 'test',
            description: 'test',
            prevention: 'test',

            command: 'test'
        }
        , {

            id: 6,
            date: 'test',
            location: 'test',
            incidentType: 'Other',
            harm: 'test',
            eventType: 'test',
            individuals: 'test',
            effects: 'test',
            time: 'test',
            patientSSN: 'test',
            patientPhone: 'test',
            patientAddress: 'test',
            patientName: 'test',
            witness1Name: 'test',
            witness1Phone: 'test',
            witness2Name: 'test',
            witness2Phone: 'test',
            witness3Name: 'test',
            witness3Phone: 'test',
            department: 'test',
            description: 'test',
            prevention: 'test',

            command: 'test'
        }   , {

            id: 6,
            date: 'test',
            location: 'test',
            incidentType: 'Other',
            harm: 'test',
            eventType: 'test',
            individuals: 'test',
            effects: 'test',
            time: 'test',
            patientSSN: 'test',
            patientPhone: 'test',
            patientAddress: 'test',
            patientName: 'test',
            witness1Name: 'test',
            witness1Phone: 'test',
            witness2Name: 'test',
            witness2Phone: 'test',
            witness3Name: 'test',
            witness3Phone: 'test',
            department: 'test',
            description: 'test',
            prevention: 'test',

            command: 'test'
        }   , {

            id: 6,
            date: 'test',
            location: 'test',
            incidentType: 'Other',
            harm: 'test',
            eventType: 'test',
            individuals: 'test',
            effects: 'test',
            time: 'test',
            patientSSN: 'test',
            patientPhone: 'test',
            patientAddress: 'test',
            patientName: 'test',
            witness1Name: 'test',
            witness1Phone: 'test',
            witness2Name: 'test',
            witness2Phone: 'test',
            witness3Name: 'test',
            witness3Phone: 'test',
            department: 'test',
            description: 'test',
            prevention: 'test',

            command: 'test'
        }
        , {

            id: 6,
            date: 'test',
            location: 'test',
            incidentType: 'Other',
            harm: 'test',
            eventType: 'test',
            individuals: 'test',
            effects: 'test',
            time: 'test',
            patientSSN: 'test',
            patientPhone: 'test',
            patientAddress: 'test',
            patientName: 'test',
            witness1Name: 'test',
            witness1Phone: 'test',
            witness2Name: 'test',
            witness2Phone: 'test',
            witness3Name: 'test',
            witness3Phone: 'test',
            department: 'test',
            description: 'test',
            prevention: 'test',

            command: 'test'
        }
        , {

            id: 6,
            date: 'test',
            location: 'test',
            incidentType: 'Other',
            harm: 'test',
            eventType: 'test',
            individuals: 'test',
            effects: 'test',
            time: 'test',
            patientSSN: 'test',
            patientPhone: 'test',
            patientAddress: 'test',
            patientName: 'test',
            witness1Name: 'test',
            witness1Phone: 'test',
            witness2Name: 'test',
            witness2Phone: 'test',
            witness3Name: 'test',
            witness3Phone: 'test',
            department: 'test',
            description: 'test',
            prevention: 'test',

            command: 'test'
        }
        , {

            id: 6,
            date: 'test',
            location: 'test',
            incidentType: 'Other',
            harm: 'test',
            eventType: 'test',
            individuals: 'test',
            effects: 'test',
            time: 'test',
            patientSSN: 'test',
            patientPhone: 'test',
            patientAddress: 'test',
            patientName: 'test',
            witness1Name: 'test',
            witness1Phone: 'test',
            witness2Name: 'test',
            witness2Phone: 'test',
            witness3Name: 'test',
            witness3Phone: 'test',
            department: 'test',
            description: 'test',
            prevention: 'test',

            command: 'test'
        }
        , {

            id: 6,
            date: 'test',
            location: 'test',
            incidentType: 'Other',
            harm: 'test',
            eventType: 'test',
            individuals: 'test',
            effects: 'test',
            time: 'test',
            patientSSN: 'test',
            patientPhone: 'test',
            patientAddress: 'test',
            patientName: 'test',
            witness1Name: 'test',
            witness1Phone: 'test',
            witness2Name: 'test',
            witness2Phone: 'test',
            witness3Name: 'test',
            witness3Phone: 'test',
            department: 'test',
            description: 'test',
            prevention: 'test',

            command: 'test'
        }














    ];

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
                <a href={`/`} className="viewLink">VIEW</a>
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
            <br /> <br />
            <h1 className="dataGridHeader">Incident Reports</h1>
            <br /><br />
        <DataGrid
            rows={rows}
            columns={columns}
            pageSize={pageSize}
            onPageSizeChange={(newPage) => setPageSize(newPage)}
            rowsPerPageOptions={[5, 10, 15]}
            onCellEditStop={processRowUpdate}
            eperimentalFeatures={{newEditingApi: true}}
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

                const selectedIDs = new Set(ids);
                const selectedRowData = rows.filter((row) =>
                    selectedIDs.has(row.id)
                );

                // set state --> setRowsChecked(selectedRowData);
            }}
            localeText={{
                toolbarFilters: "",
            }}

            components={{
                Toolbar: () => {
                    return (
                        <>
                            <GridToolbarContainer sx={{justifyContent: 'flex', width:'50vw'}}>
                                <table className="tableDataGrid"><tbody><tr>
                                    <td> <h3 className="dataGridReports" sx={{alignText:'left'}}>Reports</h3></td>
                                    <td className="tableDataGridTD"> <GridToolbarFilterButton sx={{color:'rgba(0, 0, 0, 0.54)'}}/>
                                        <GridToolbarQuickFilter sx={{color:'rgba(0, 0, 0, 0.54)'}}/></td>
                                </tr></tbody></table>


                            </GridToolbarContainer>
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
                    fontFamily: 'Public Sans bold !important',
                },
                '&.MuiDataGrid-root': {
                    border: 'none',

                },
            }}
             />



    </Box>)
}

export default SupervisorView;