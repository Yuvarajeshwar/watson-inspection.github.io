import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { Link, useNavigate } from "react-router-dom";
import Header from './header'

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'connectionNumber',
    headerName: 'Connection Number',
    width: 150,
    editable: true,
  },
  {
    field: 'customerName',
    headerName: 'Customer name',
    width: 150,
    editable: true,
  },
  {
    field: 'phoneNumber',
    headerName: 'Phone Number',
    width: 150,
    editable: true,
  },
  {
    field: 'imageCount',
    headerName: 'Image Count',
    width: 150,
    editable: true,
  },
  {
    field: 'imageUploadDate',
    headerName: 'Image Upload Date',
    type: 'date',
    width: 150,
    editable: true,
  },
  {
    field: 'reviewStatus',
    headerName: 'Review Status',
    width: 150,
    editable: true,
  },
  {
    field: 'reviewedBy',
    headerName: 'Reviewed By',
    width: 150,
    editable: true,
  },
  {
    field: 'address',
    headerName: 'Address',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 260,
  },
];

const rows = [
  { id: 1, customerName: 'Jon', connectionNumber: 12345, phoneNumber: '911-110-7321', reviewStatus: 'New', imageCount: 3, imageUploadDate: new Date('01-01-2023') },
  { id: 2, customerName: 'Cersei', connectionNumber: 54321, phoneNumber: '911-110-7321', reviewStatus: 'New', imageCount: 3, },
  { id: 3, customerName: 'Jaime', connectionNumber: 12123, phoneNumber: '911-110-7321', reviewStatus: 'New', imageCount: 3, },
  { id: 4, customerName: 'Arya', connectionNumber: 38107, phoneNumber: '911-110-7321', reviewStatus: 'New', imageCount: 3, },
  { id: 5, customerName: 'Daenerys', connectionNumber: 74013, phoneNumber: '911-110-7321', reviewStatus: 'New', imageCount: 3, },
  { id: 6, customerName: null, connectionNumber: 96771, phoneNumber: '911-110-7321', reviewStatus: 'New', imageCount: 3, },
  { id: 7, customerName: 'Ferrara', connectionNumber: 86108, phoneNumber: '911-110-7321', reviewStatus: 'New', imageCount: 3, },
  { id: 8, customerName: 'Rossini', connectionNumber: 33664, phoneNumber: '911-110-7321', reviewStatus: 'New', imageCount: 3, },
  { id: 9, customerName: 'Harvey', connectionNumber: 31840,phoneNumber: '911-110-7321', reviewStatus: 'New', imageCount: 3, },
];


export function GasData() {

  const [selectedRowData, setSelectedRowData] = React.useState(null);
  const navigate = useNavigate();

  const OnRowClick = (params) => {
    console.log(params.row)
    setSelectedRowData(params.row); // Store clicked row data in state
    // navigate('/reviewPage', { state:  params.row } ); // Navigate to the target component
    navigate('/reviewPage', {state:{id:1,name:'sabaoon'}});
  };

  return (
    <div>
    <Header />
    <Box sx={{ height: 600, width: '100%' }}>
      <Link to="/reviewPage">
      <DataGrid
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
  );
}