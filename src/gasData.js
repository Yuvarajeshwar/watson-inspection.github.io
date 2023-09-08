import * as React from 'react'
import Box from '@mui/material/Box'
import { DataGrid } from '@mui/x-data-grid'
import styled from '@emotion/styled';
import { Link, useNavigate } from "react-router-dom"
import { columns, rows } from './utils/data'

const CustomDataGrid = styled(DataGrid)`
  background-color: #194759;

  .MuiDataGrid-cell,
  .MuiDataGrid-headerCell {
    color: white;
  }

  .MuiDataGrid-row {
    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }
  }
`

export function GasData() {

  const [selectedRowData, setSelectedRowData] = React.useState(null)
  const navigate = useNavigate()

  const OnRowClick = (params) => {
    console.log(params.row)
    setSelectedRowData(params.row); // Store clicked row data in state
    // navigate('/reviewPage', { state:  params.row } ); // Navigate to the target component
    navigate('/reviewPage', {state:{id:1,name:'sabaoon'}})
  };

  return (
    <div>
      <Box sx={{ height: 600, width: '100%' }}>
        <Link to="/reviewPage">
          <CustomDataGrid
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pconnectionNumberSize: 9,
                },
              },
            }}
            pconnectionNumberSizeOptions={[5]}
            checkboxSelection
            disableRowSelectionOnClick
            onRowClick={OnRowClick}
          />
        </Link>
      </Box>
    </div>
  )
}