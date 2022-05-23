import {Box} from "@mui/material";
import {DataGrid, useGridApiContext} from '@mui/x-data-grid';

const SupervisorView = (props) => {

    const rows = [
        { id: 1, col1: 'Hello', col2: 'World' },
        { id: 2, col1: 'DataGridPro', col2: 'is Awesome' },
        { id: 3, col1: 'MUI', col2: 'is Amazing' },
    ];

    const columns = [
        { field: 'col1', headerName: 'Column 1', width: 150 },
        { field: 'col2', headerName: 'Column 2', width: 150 },
        { field: 'Link',
            headerName: 'Link Column',
            width: 150,
            renderCell: (params) => (
                <a href={`/`}>VIEW REPORT</a>
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
    return ( <Box height="auto" display="flex" flexDirection="column">
        <DataGrid
            rows={rows}
            columns={columns}
            pageSize={20}
            rowsPerPageOptions={[20]}

            checkboxSelection

            onRowClick={(event) => {

                // fetchTextAPI(event)
            }}

            key={rows}

            onSelectionModelChange={(ids) => {
                const selectedIDs = new Set(ids);

                const selectedRowData = rows.filter((row) =>
                    selectedIDs.has(row.id)
                );

                // set state --> setRowsChecked(selectedRowData);
            }}

            onCellEditStop={processRowUpdate}
            //  onRowEditStop={processRowUpdate}
            eperimentalFeatures={{newEditingApi: true}}
            onCellEditCommit={(params) => setTimeout(handleRowEditCommit(params), 1000)}
            autoHeight autoPageSize/>

    </Box>)
}

export default SupervisorView;