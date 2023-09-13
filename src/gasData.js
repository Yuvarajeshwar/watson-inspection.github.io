import * as React from 'react'
import Box from '@mui/material/Box'
import { DataGrid } from '@mui/x-data-grid'
import styled from '@emotion/styled';
import { useNavigate } from "react-router-dom"
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

  const navigate = useNavigate()

  const OnRowClick = async (params) => {
    console.log(params.row)
    const rowSele = params.row
    await navigate('/reviewPage', { state:  rowSele  })
  }

  return (
    <div>
      <Box sx={{ height: 600, width: '100%' }}>
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
      </Box>
    </div>
  )
}
